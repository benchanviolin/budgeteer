module.exports = {
  remapIdsFromMongoDB: function (data) {
    for(let i=0; i<data.length; i++) {
      data[i] = this.remapId(data[i]);
    }
    console.log(data);
    return data;
  },
  remapId: function (data) {
    data = JSON.parse(JSON.stringify(data)); //to enable editing of all properties without MongoDB lock
    data.id = data._id;
    delete data._id;
    return data;
  }
}
