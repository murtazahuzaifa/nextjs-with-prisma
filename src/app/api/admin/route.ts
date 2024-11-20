import { NextRequest } from 'next/server'
import React from 'react'

export const GET = async (req: NextRequest) => {

    return Response.json(
        { user: { name: 'hussain', age: 16, isMarried: false } },
        // { status: 200 }
    )
}