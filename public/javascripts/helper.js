module.exports = {
    deDuplicate: function(list) {
        var result = list.filter((v,i,a)=>a.findIndex(t=>(t.Name===v.Name))===i)
        return result;
    }
};