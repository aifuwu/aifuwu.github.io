let API = {
    TT: {},
    GetQueryParam (key) {
        var arr = window.location.search.substring(1).split('&')
        var param = {}
        var val = arr.forEach(p => {
            let keyVal = p.split('=');
            if (2 == keyVal.length) {
                param[keyVal[0]] = keyVal[1]
            }
        })
        return param[key]
    }
}

API.TT.GetTree = function () {
   return axios({
        method: 'post',
       url: 'http://api80.vipgz2.idcfengye.com/doc/',
        data: {
            Method: 'GetTree',
            Param: ["1a436d72-37dd-4fe1-a7a4-a6b2d0c0b349"]
        },
    })
}

API.TT.QueryList = function (param) {
    return axios({
        method: 'post',
        url: 'http://api80.vipgz2.idcfengye.com/doc/',
        data: param,
    })
}

API.TT.QueryItem = function (id) {
    return axios({
        method: 'post',
        url: 'http://api80.vipgz2.idcfengye.com/doc/',
        data: {
            Method: 'QueryItem',
            Param: [JSON.stringify({ ID: id })]
        },
    })
}

 