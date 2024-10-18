import React from 'react'
import { tableHeaders } from '../../Database/db';

const Table = (props) => {
    let { initialData } = props;
    return (
        <main className="relative overflow-x-auto sm:rounded-lg bg-fourth  p-2 lg:p-5 rounded-xl animate-fade">
            <h2 className='text-2xl font-semibold  mb-5'>Data Grid</h2>
            <table className="w-full text-sm text-left rtl:text-right bg-[#fff]">
                <thead>
                    <tr className='border-b-[1px] p-3 border-b-fourth'>
                        {
                            tableHeaders?.map((d, i) => (
                                <th key={i} scope="col" className='px-6 py-2  text-start text-basicText text-md font-semibold'>
                                    {d?.label}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        initialData?.map((d, i) => (
                            <tr key={i} className="border-b-[1px] border-b-[#F7F9FB] hover:bg-fourth  group">
                                <td className="px-6 py-2 text-start font-normal text-tertiary  text-md whitespace-nowrap">
                                    {d?.id}
                                </td>
                                <td className="px-6 py-2 text-start font-normal text-tertiary  text-md whitespace-nowrap">
                                    {d?.name}
                                </td>
                                <td className="px-6 py-2 text-start font-normal text-tertiary  text-md whitespace-nowrap">
                                    {d?.revenue}
                                </td>
                                <td className="px-6 py-2 text-start font-normal text-tertiary  text-md whitespace-nowrap">
                                    {d?.category}
                                </td>
                                <td className="px-6 py-2 text-start font-normal text-tertiary  text-md whitespace-nowrap">
                                    {d?.location}
                                </td>
                                <td className="px-6 py-2 text-start font-normal text-tertiary  text-md whitespace-nowrap">
                                    {d?.population}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Table;