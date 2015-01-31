		count=0;
		function init()
		{
			divfollow=document.getElementById("follower");
			divfollow.style.position="absolute";
			divfollow.style.left="50%";
			divfollow.style.top="50%";

		}

		function start_follow()
		{
			document.addEventListener("mousemove",follow,false);
			changecolor();
		}

		function changecolor()
		{
			if(count%2)
			{
				divfollow.style.backgroundColor="red";
			}
			else
			{
				divfollow.style.backgroundColor="yellow";	
			}
			count++;
			id=setTimeout(changecolor,600);
		}


		function follow(event)
		{
			ev=event||window.event;//receive event info
			divfollow.style.position="absolute";
			divfollow.style.left=ev.clientX+2+"px";
			divfollow.style.top=ev.clientY+2+"px";
		}

		function stop_follow()
		{
				document.removeEventListener("mousemove",follow,false);
				init();
				if(id)
				{
					clearTimeout(id);
				}
		}
