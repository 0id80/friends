function adder(user,list,add,st) {
	var o = user;
	
	o[6] = parseInt(o[6]);
	
	add ? (o[6] & 1 << list || (o[6] += 1 << list)) : (o[6] & 1 << list && (o[6] -= 1 << list));
	
	setTimeout(function () {
		ajax.post("al_friends.php", {
			act: "save_cats",
			uid: user[0],
			cats: o[6],
			hash: cur.userHash
		}, {
			onDone: function(){
				var el=document.querySelector(".left_label.inl_bl");
				el.innerHTML=el.innerHTML>=1?(el.innerHTML-0)+1:1;
			}
		});
	},st||0);
}

function itr(list,add){
	function fn(start){
		for(var i=start||0,len=cur.friendsList.all.length;i<len;i++){
			adder(cur.friendsList.all[i],list,add,i*50);
		}
	}
	fn();
}