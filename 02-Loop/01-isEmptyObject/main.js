//Object => BOOL

// const a = {
    //     name: 'CC',
    //     age: 15,
    // };
    
    function isEmptyObj(obj) {
        let isEmpty = true;

        for(let key in obj) {
            isEmpty = false;
        }
        return isEmpty;
    }

