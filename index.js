const driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
    const newDriver = {...obj};
    newDriver[key] = value;
    // console.log(newDriver);
    // console.log(driver);
    return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
};

function deleteFromDriverByKey(obj, key){
    const newDriver = {...obj};
    delete newDriver[key];
    return newDriver;
};

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key];
    return obj;
}
