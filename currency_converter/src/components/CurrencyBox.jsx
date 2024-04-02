import useCurrency from "../hooks/useCurrency"

export default function CurrencyBox(
    label,
    className = ""
) {
    let data = useCurrency("usd");
    return (
        <>
            <div
                className = {`flex justify-around items-center w-96 h-28 m-auto border-2 border-black rounded-lg py-16 ${className} `}
            >
                <div>
                    <div
                        className="mb-4"
                    >
                        <label
                            className=" text-2xl"
                            htmlFor=""
                        >{label}</label>
                    </div>
                    <input type="number"
                        value={0}
                        className="w-44 rounded-lg h-10 bg-pink-500/[0.2] shadow-lg px-3"
                    />
                </div>
                <div>
                    <div
                        className="mb-4"
                    >
                        <label
                            className="text-2xl mb-4"
                            htmlFor=""
                        >Currency</label>
                    </div>
                    <select
                        name="currency"
                        id="currency"
                        className="w-[6rem] h-9 rounded-lg bg-pink-500/[0.3] shadow-lg"
                        value={"usd"}
                    >
                        <option 
                            value="usd"
                        >usd</option>
                    </select>
                </div>
            </div>
        </>
    )
}