import React from 'react'
import { Select, Option } from "@material-tailwind/react";
import { Slider } from "@material-tailwind/react";
import { categoryParm } from '../Database/db';

const Filter = (props) => {
    const { selectedCategory, handleCategoryChange, revenueRange, handleSliderChange } = props;

    return (
        <main className='grid gap-y-5 lg:col-span-2 animate-fade'>
            {/* Search by name */}
            {/* <div className='p-2 bg-[#1C1C1C0D] rounded-xl'>
                <input type="text" value='test' placeholder='Search' className='outline-none border-none gap-1 px-2 py-1 rounded-lg w-full' />
            </div> */}

            {/* Category slider section */}
            <section className='bg-fourth p-2 lg:p-5 rounded-xl h-fit'>
                <h2 className='text-xl font-semibold  mb-3 pb-3 border-b-2 border-b-basicWhite'>Filter</h2>
                <div className='mb-4'>
                    <h6 className='text-md font-normal mb-3 text-[] '>By category</h6>
                    <Select label="Select category" value={selectedCategory} onChange={handleCategoryChange} className='bg-basicWhite'>
                        {
                            categoryParm?.map((d, i) => (
                                <Option key={i} value={`${d?.category}`} className='mb-1 text-basicText'>{d?.category}</Option>
                            ))
                        }
                    </Select>
                </div>
            </section>

            {/* Range slider section */}
            <section className='bg-fourth p-2 lg:p-5 rounded-xl h-fit'>
                <h2 className='text-xl font-semibold  mb-3 pb-3 border-b-2 border-b-basicWhite'>Sort</h2>
                <h6 className='text-md font-normal text-basicText mb-3'>By range {`( ${revenueRange} )`}</h6>
                <Slider
                    value={revenueRange}
                    min={0}
                    max={100}
                    step={10}
                    onChange={(e) => handleSliderChange(e)}
                    color="blue"
                    size="lg"
                    className="text-basicRed"
                    barClassName="rounded-ful bg-basicRed"
                    thumbClassName="[&::-moz-range-thumb]:rounded-full [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
                    trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-full !bg-basicRed/10 border border-basicRed/20"
                />
            </section>
        </main>
    )
}

export default Filter