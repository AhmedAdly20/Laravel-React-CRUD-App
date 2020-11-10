<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    public function create(Request $request)
    {
        $contact = Contact::create([
            'name' => $request->name,
            'number' => $request->number,
        ]);
        return response()->json($contact);
    }

    public function edit($id){
        $contact = Contact::find($id);
        return response()->json($contact);
    }

    public function update(Request $request, $id){
        $contact = Contact::find($id)->update([
            'name' => $request->name,
            'number' => $request->number,
        ]);
        return response()->json($contact);
    }

    public function destroy($id){
        $contact = Contact::find($id)->delete();
        return response()->json($contact);
    }
}
