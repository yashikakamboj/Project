import React from 'react';
const AppContent = React.createContext();           //  ../../assets/

export const AppProvider = ({children})=>{
    
    const states = [{name: "Andhra Pradesh", id:'1'}, 
                    {name: "Arunachal Pradesh", id:'2'},
                    {name: "Assam", id: '3'},
                    {name: "Bihar", crop:"", id: '4'},
                    {name: "Chhattisgarh", crop:"", id: '5'},
                    {name: "Goa", crop:"", season:"", id: '6'},
                    {name: "Gujarat", crop:"", id: '7'},
                    {name: "Haryana", crop:"", season:"", id: '8'},
                    {name: "Himachal Pradesh", id: '9'},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                    {name: "Jammu And Kashmir", id: '10'},
                    {name: "Jharkhand", id: '11'},
                    {name: "Karnataka", crop:"", id: '12'},
                    {name: "Kerala", crop:"", id: '13'},
                    {name: "Madhya Pradesh", id: '14'},
                    {name: "Maharashtra", id: '15'},
                    {name: "Manipur", id: '16'},
                    {name: "Meghalaya", id: '17'},
                    {name: "Mizoram", id: '18'},
                    {name: "Nagaland", id: '19'},
                    {name: "New Delhi", id: '20'},
                    {name: "Odisha", id: '21'},
                    {name: "Punjab", id: '22'},
                    {name: "Rajasthan", id: '23'},
                    {name: "Sikkim", id: '24'},
                    {name: "Tamil Nadu", id: '25'},
                    {name: "Telangana", id: '26'},
                    {name: "Tripura", id: '27'},
                    {name: "Uttar Pradesh", id: '28'},
                    {name: "Uttarakhand", id: '29'},
                    {name: "West Bengal", id: '30'}               

    ]
    
    const flowers = [ {common : "Cut rose", image : require("../../assets/cut_rose.jpg"), url: 'https://www.youtube.com/watch?v=phsMXM4vtz8'},
                      {common : "Cut Chrysanthemum", image : require("../../assets/cut_chrysanthemum.jpg"), url: 'https://www.youtube.com/watch?v=jwtmeilzA80'},
                      {common : "Carnation", image : require("../../assets/carnation.jpg"), url: 'https://www.youtube.com/watch?v=f3cDPiFr5Qo'},
                      {common : "Anthurium", image : require("../../assets/anthurium.jpg"), url: 'https://www.youtube.com/watch?v=VS4tEf1KVI8'},
                      {common : "Dendrobium Orchid", image : require("../../assets/orchid.jpg"), url: 'https://www.youtube.com/watch?v=8Lc4Htux1uM'},
                      {common : "Lilium", image : require("../../assets/lilium.jpg"), url: 'https://www.youtube.com/watch?v=o3E_AKwgCYM'},
                      {common : "Gladious", image : require("../../assets/gladiolus.jpg"), url: 'https://www.youtube.com/watch?v=ZXtTI7mv23g' },
                      {common : "Gerbera", image : require("../../assets/gerbera.jpg"), url: 'https://www.youtube.com/watch?v=syycvCRinjU'},
                      {common : "China Aster", image : require("../../assets/china aster.jpg"), url: 'https://www.youtube.com/watch?v=XtFX8yIZy3w' },
                      {common : "Golden Rod", image : require("../../assets/goldenrod.jpg"), url: 'https://www.youtube.com/watch?v=Y3sYFKh3jHU' },
                      {common : "Rose", image : require("../../assets/rose.jpg"), url: 'https://www.youtube.com/watch?v=9xAGMGHzSw0'},
                      {common : "Malligai", image : require("../../assets/malligai.jpg"), url: 'https://www.youtube.com/watch?v=dcHmW_f4j_U' },
                      {common : "Mullai" , image : require("../../assets/mullai.jpg"), url: 'https://www.youtube.com/watch?v=OXhwP13XClw'},
                      {common : "Jathi Malli", image : require("../../assets/jathimalli.jpg"), url: 'https://www.youtube.com/watch?v=hJh6obXy8-I'},
                      {common : "Crossandra", image : require("../../assets/crossandra.jpg"), url: 'https://www.youtube.com/watch?v=RpjFOiPm-PM'},
                      {common : "Chrysanthemum" , image : require("../../assets/chrysanthemum.jpg"), url: 'https://www.youtube.com/watch?v=fnyEPVrivYs' },
                      {common : "Marigold", image : require("../../assets/Marigold.jpg"), url: 'https://www.youtube.com/watch?v=G8EjPPHt8xI' },
                      {common : "Tuberrose" , image : require("../../assets/tuberose.jpg"), url: 'https://www.youtube.com/watch?v=beMypW26V98' },
                      {common : "Nerium" , image : require("../../assets/nerium.jpg"), url: 'https://www.youtube.com/watch?v=YFVCLRkcQYs' },              
    ]

    const one = {
        Varieties : "Gladiator, Baby Pink, Sofia Lawrence, YCD 1, YCD 2, YCD 3 are commonly cultivated.",
        Soil_and_climate : "It is generally suitable for higher elevation (1500 m and above). It can also be grown in the plains under ideal condition of fertile loamy soils with salt-free irrigation water. The ideal climate for rose growing should have temperature with a minimum of 15°C and maximum of 28°C. Light is important factor which decides the growth. The growth is slowed by day length, i.e. > 12 hours and heavy overcast, cloudy/mist conditions. High relative humidity exposes the plant to serious fungal diseases. In tropics the ideal temperature is 25°C – 30°C on sunny day and on cloudy day 18°C – 20°C. The optimum temperature should be 15°C – 18°C. These temperatures are extremely difficult to find and it’s therefore to compromise.",
        Propagation_and_planting : "The crop can be propagated by rooted cuttings or by budding on Briar root stocks in hills and on Edward Rose and Rosa indica in plains. One year old budded plants are planted in July - August at 75 cm x 75 cm spacing.",
        Planting_of_Rose : { After_cultivation : "The plants should be watered daily until they establish and thereafter once in a week. Pruning is done during March and October. Spray Diuran 2.5 kg a.i/ha to control weeds.  Avoid spray fluid coming in contact with Rose plants.", 
                             Support_of_the_plants : "Post is placed at internals of 3m on both sides of the bed. Along the sides of the bed, galvanized wires or plastic string are fastened at the posts at 30cm – 40cm intervals to support the plant. Between the wires across the bed, thin strings can be tied to keep the width of the beds constant.",
                             Disbudding : "Varieties produce some side buds below the center bud. These side buds have to be removed or disbudded. The disbudding must be done regularly and also as soon as possible in order to avoid large wounds in the upper leaf axil.",
                             Dead_shoot_removal : "In the old plants the dead shoot or dried shoots on plants will serve as the host for fungi. So regularly these have to be removed.",
                             Soil_loosening_on_beds : "After 6 months or so, there is every chance that the soil become stony and it has to be loosened for efficient irrigation.",
                            },
    }

    return <AppContent.Provider value={{ data : states, dataa : flowers}}>
        {children}
    </AppContent.Provider>
};

export default AppContent;
