const arr=[
    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW58ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW58ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW58ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphcGFufGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1522547902298-51566e4fb383?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGphcGFufGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1lfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1777892665041-e20c06769f95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8N0lQdDhzYWUtbkl8fGVufDB8fHx8fA%3D%3D'
]

const imagEl=document.querySelector('img');
let num=0;
setInterval(function(){
    imagEl.setAttribute('src',arr[num]);
    num=(num+1)%arr.length;
},200);