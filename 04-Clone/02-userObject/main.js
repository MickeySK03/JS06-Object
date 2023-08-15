const log = console.log;
const state1 = {username: 'john', point:100, loading: true};

const state2 = Object.assign({},state1,{loading:false,point:75},{success:true});

log(state2);