const splitData = (Data)=>{
    return Data.split(" ");
}

const DistValue = (value,index,self) => {
    return self.indexOf(value) === index;
}

const DistinctValue = (Data) => {
   
    return Data.filter(DistValue);
}

const pairMyShock = (howManyData,Data) =>{
    let dt = splitData(Data);
    let distinctData = DistinctValue(dt);
    let pairs = 0;

    if(howManyData !== dt.length){
        return "your number of data should same with the length of Data";
    }
    
    for (let i = 0; i < distinctData.length; i++) {
        
        let data = dt.filter((value)=>{
            return value === distinctData[i];
        });

        pairs += Math.floor(data.length/2);    
    }
    return pairs;
}

module.exports = {
    pairMyShock,
    splitData,
    DistinctValue
}