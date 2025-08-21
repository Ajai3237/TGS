import React from 'react'

function Clients() {
    return (
        <>
            <div style={{ padding: "60px 20px", backgroundColor: "#EAEAEA" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: '5px' }}>
                    <h2 style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", color: "#333", textAlign: "center" }}>
                        MEET
                        <span style={{ color: "#FFAA01" }}> OUR</span>  CLIENTS
                    </h2>
                </div>


                {/* Grid Layout */}
                <div className="relative flex overflow-x-hidden mt-20 pb-2">
                    {/* First row */}
                    <div className="flex space-x-7 animate-marquee">
                        {[
                            "/Assets/bennys-organo-removebg-preview.png",
                            "/Assets/client-1-removebg-preview.png",
                            "/Assets/client-2-removebg-preview.png",
                            "/Assets/client-4-removebg-preview.png",
                            "/Assets/client-9-removebg-preview.png",
                            "/Assets/Fams-removebg-preview.png",
                            "/Assets/Fazza-removebg-preview.png",
                            "/Assets/client-8-removebg-preview.png",
                            "/Assets/client-10-removebg-preview.png",
                        ].map((src, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-xl p-4 w-40 h-28 flex items-center justify-center"
                            >
                                <img src={src} alt={`Partner ${index + 1}`} className="max-h-16 object-contain" />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate row for seamless loop */}
                    <div className="absolute top-0 flex space-x-7 animate-marquee2">
                        {[
                            "/Assets/bennys-organo-removebg-preview.png",
                            "/Assets/client-1-removebg-preview.png",
                            "/Assets/client-2-removebg-preview.png",
                            "/Assets/client-4-removebg-preview.png",
                            "/Assets/client-9-removebg-preview.png",
                            "/Assets/Fams-removebg-preview.png",
                            "/Assets/Fazza-removebg-preview.png",
                            "/Assets/client-8-removebg-preview.png",
                            "/Assets/client-10-removebg-preview.png",
                        ].map((src, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-xl p-4 w-40 h-28 flex items-center justify-center "
                            >
                                <img src={src} alt={`Partner ${index + 1}`} className="max-h-16 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: '40px',  backgroundColor:'EAEAEA'}}>

                    <p style={{
                        fontSize: "13px",
                        fontFamily: "'Roboto', sans-serif",
                        color: "#313131",
                        textAlign: "center",
                        marginTop: '40px',
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        lineHeight: "1.8",
                    }}>
                        A true partnership is a two-way street — ideas and information flow openly and regularly, based on a foundation of mutual trust and respect for one another’s expertise —
                        and our clients embrace this philosophy. The best and most productive relationships are synergistic and goal-oriented, and a long-term relationship has the value add of
                        deep-rooted industry and company knowledge and relationships. Our client list speaks for itself. Since our earliest days, we’ve represented everything from start-ups to
                        Fortune many companies with that same partnership approach and dedication at the core of every engagement. Every day, since 2016, we’ve been devoting our hearts and minds to our clients, achieving great successes and building lasting relationships.
                    </p>
                </div>




            </div>
        </>
    )
}

export default Clients