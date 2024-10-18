import BubbleChart from './BubbleChart';
import Table from './Table';

const MainContainer = (props) => {
    let { initialData, handleBubbleClick } = props;

    return (
        <section className='grid gap-y-5 lg:col-span-5'>
            {/* bubble chart section */}
            <BubbleChart initialData={initialData} handleBubbleClick={handleBubbleClick} />
            {
                initialData.length === 0 ? null :
                    <Table initialData={initialData} />
            }

        </section>
    )
}

export default MainContainer;