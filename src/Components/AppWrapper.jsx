
const AppWrapper = ({ children }) => {
    return (
        <section className={`w-full`}>
            <section className={` w-full xl:w-[80%] px-[10px] xl:px-5 py-5 lg:py-10 mx-auto`}>
                {children}
            </section>
        </section>
    );
};

export default AppWrapper;
