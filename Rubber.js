class Rubber{
	constructor(x,y,r)
	{ var options = {
		'density':1,
		'friction': 5,
		'restitution':0.3
	  };
	// assign options to the rubber ball
		this.x=body = Bodies.circle(x,y,width,options);
		this.width = width;
		
		this.body=Bodies.circle(this.width, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball

			pop()
	}

}