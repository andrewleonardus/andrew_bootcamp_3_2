<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class HotelController extends Controller
{
    function ReserveRoom(Request $request){
        DB::beginTransaction();
        try{
            $this->validate($request,[
                'customer_id' => 'required',
                'room_id' => 'required'
            ]);

            $book = new Transaction;
            $book->customer_id = $request->input('customer_id');
            $book->room_id = $request->input('room_id');
            $book->save();
            DB::commit();
            return response()->json($book, 200);
        }
        catch(\Exception $e){
            DB::rollback();
            return response()->json(['message' => 'Failed to make book:' + $e], 500);
        }
    }
}
