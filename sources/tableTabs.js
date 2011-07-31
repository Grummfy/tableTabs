/*
---
script: tableTabs.js
decription: tableTabs - based on nuTabs, add the hability to tabilize a table
license: MIT-style license.
authors:
 - Grummfy (http://grummfy.com)
requires:
  core:1.3.x-nocompat: TODO
  more:1.3.x-nocompat: TODO
provides: [tableTabs]

based on nuTabs from Oskar Krawczyk (http://nouincolor.com/)
	http://mootools.net/forge/p/nutabs
	https://github.com/oskarkrawczyk/nuTabs
*/

var tableTabs = new Class(
{
	Implements: [Events, Options],

	options:
	{
		activeClass: 'selected',
		transition: 'sine:out',
		enabledTransition: true
	},
	
	initialize: function(nav, body, active, options)
	{
		this.setOptions(options);
		this.nav = nav;
		this.body = body;
 
		this.bindTab();

		if (!active || active > this.nav.length)
		{
			this.resize(0);
		}
		else
		{
			this.resize(active);
		}
	},
 
	bindTab: function()
	{
		this.nav.each(function(tab, index)
		{
			var self = this;
			tab.addEvent('click', function(e)
			{
				self.resizeEvent.call(self, e, index);
			});
		}, this);
	},

	alteredHeight: function(index)
	{
		return this.body[ index ].measure(function()
		{
			return this.getSize().y;
		});
	},

	resizeEvent: function(event, index)
	{
		event.stop();
		this.resize(index);
	},

	resize: function(index)
	{
		this.bodyContainer = this.body.getParent();
		this.navContainer = this.nav.getParent();
		
		// set transitions
		this.bodyContainer.set('tween',
		{
			transition: this.options.transition,
			duration: (this.options.enabledTransition)?'normal':0
		});
		
		// alter the wrappers's height
		this.bodyContainer.tween('height', this.alteredHeight(index));
 
		// hide the content items
		var tOptions =
		{
		 	'height': 0,
			'opacity': 0,
			'display': 'none'
		};
		if (this.options.enabledTransition)
		{
			this.body.set('styles', tOptions).fade('out');
		}
		else
		{
			this.body.set('styles', tOptions);
		}
 
		// show the active content item
		tOptions =
		{
			'display': 'table-row-group',
			'opacity': 1
		};
		if (this.options.enabledTransition)
		{
			this.body[ index ].set('styles', tOptions).fade('in');
		}
		else
		{
			this.body[ index ].set('styles', tOptions);
		}

		// add class to the active tab
		this.navContainer.removeClass(this.options.activeClass);
		this.navContainer[ index ].addClass(this.options.activeClass);
	}
});

Elements.implement(
{
	tabsify: function(options)
	{
		this.nav = this.slice(0, this.length/2);
		this.body = this.slice(this.length/2, this.length);
		return new tableTabs($$(this.nav), $$(this.body), [options, {}].pick());
	}
});
