const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });
let arr = []

wss.on('connection', ws => {
  // console.log(ws)
  ws.on('message', message => {
    console.log('---', cut(message))
    let order = cut(message)[0]
    let mes = cut(message)[1]
    if (order === 'id') {
      ws.__id = mes
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].__id == mes) {
          arr.splice(i,1)
          break
        }
      }
      arr.push(ws)
    } else if (order === 'sid') {
      ws.__sid = mes
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].__sid == mes) {
          arr.splice(i,1)
          break
        }
      }
      arr.push(ws)
    }else if(order==='left'){
      arr.forEach(item=>{
        if(item.__id===mes){
          item.send('left')
        }
      })
    }else if(order==='up'){
      console.log('???')
      arr.forEach(item=>{
        if(item.__id===mes){
          item.send('up')
        }
      })
    }else if(order==='right'){
      arr.forEach(item=>{
        if(item.__id===mes){
          item.send('right')
        }
      })
    }else if(order==='down'){
      arr.forEach(item=>{
        if(item.__id===mes){
          item.send('down')
        }
      })
    }
    console.log(arr.map(i => i.__id))
    console.log(arr.map(i => i.__sid))
  });
  ws.send('connect success');
});
function cut(strings) {
  return strings.split('_')
}