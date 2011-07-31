nuTabs
======

tableTabs - based on nuTabs, add the hability to tabilize a table

license: MIT-style license.
authors:
 - Grummfy (http://grummfy.com)

based on nuTabs from Oskar Krawczyk (http://nouincolor.com/)
	http://mootools.net/forge/p/nutabs
	https://github.com/oskarkrawczyk/nuTabs

How to use
----------

### JavaScript	
	
	vat tabletabs = new tableTabs($$('#tabs-changer a'), $$('#tabs-tochange tbody'), 0,
	{
		transition: 'bounce:out'
	});

Or
   
	vat tabletabs = $$('#tabs-changer a, #tabs-tochange tbody').tabsify(
	{
		transition: 'bounce:out'
	});
	
### HTML


	<div id="tabs-changer">
		<ul>
			<li><a href="#">tabs 1</a></li>
			<li><a href="#">tabs 2</a></li>
			<li><a href="#">tabs 3</a></li>
		</ul>
	</div>
	<table id="tabs-tochange" width="100%">
		<tbody>
			<tr>
				<td>test 1.1</td>
				<td>test 2</td>
				<td>test 3</td>
				<td>test 4</td>
			</tr>
		</tbody>
		<tbody>
			<tr>
				<td>test 1.2</td>
				<td>test 2</td>
				<td>test 3</td>
				<td>test 4</td>
			</tr>
		</tbody>
	</table>

Options
-------

All options have default values assigned, hence are optional.

### Version 1.0

* **activeClass** : (string) active class name for the tabs, default 'selected'
* **transition** : (mixed) the object or string of a specific transition, default 'sine:out'
* **enabledTransition** : (bool) active or not trhe transition, default true
