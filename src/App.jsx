import { useState } from "react";
import AppWrapper from "./Components/AppWrapper";
import { dummyData } from "./Database/db";
import Filter from "./Components/Filter";
import MainContainer from "./Components/MainContainer";

const App = () => {
    let [state, setState] = useState({
        initialData: dummyData,
        selectedCategory: "All",
        revenueRange: 100,
    })

    // Filter data based on range and category
    const filterData = (range, category) => {
        const filtered = dummyData.filter((item) => {
            const filterRangeData = item.revenue <= range;
            const filteredCategoryData = category === 'All' || item.category === category;
            return filterRangeData && filteredCategoryData
        });
        setState((prev) => {
            return {
                ...prev,
                initialData: filtered
            }
        })
    };


    //on select chategory
    const handleCategoryChange = (event) => {
        const newCategory = event;
        setState((prev) => {
            return {
                ...prev,
                selectedCategory: newCategory
            }
        })
        filterData(revenueRange, newCategory);
    };

    //on change range chategory
    const handleSliderChange = (event) => {
        setState((prev) => {
            return {
                ...prev,
                revenueRange: event.target.value
            }
        })
        filterData(event.target.value, selectedCategory);
    };

    const handleBubbleClick = (bubbleData) => {
        const filtered = state.initialData.filter((item) => item.name === bubbleData.data.name);
        setState((prev) => {
            return {
                ...prev,
                initialData: filtered
            }
        })
    };

    let { initialData, selectedCategory, revenueRange } = state;
    return (
        <>
            <section className="bg-primary h-[80px] flex items-center px-[10px] xl:px-10 justify-between">
                <h1 className="text-2xl font-bold text-basicWhite truncate">Terraops Dashboard</h1>
                <button className="text-basicWhite border-[1px] border-basicWhite rounded-full px-4 text-sm py-1 hover:border-2 hover:font-semibold whitespace-nowrap">Log in</button>
            </section>
            <AppWrapper>
                <section className="grid grid-cols-1 lg:grid-cols-7 gap-8 items-start">
                    <Filter initialData={initialData} selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} revenueRange={revenueRange} handleSliderChange={handleSliderChange} />
                    <MainContainer initialData={initialData} handleBubbleClick={handleBubbleClick} />
                </section>
            </AppWrapper>
        </>
    )
}

export default App
