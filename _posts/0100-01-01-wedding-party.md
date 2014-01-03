---
layout: default
title: Wedding Party
---
<div class='clearfix team'>
{% for post in site.categories.team %}
  <div class='col12 pad1'>
    <img src="{{post.img}}" class='pad1'>
    <div class='pad2 prose border'>
    	<h2>{{post.name}}</h2>
    	<p>{{post.content}}</p>
    </div>
  </div>
{% endfor %}
</div>