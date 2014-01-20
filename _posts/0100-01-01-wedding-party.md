---
layout: default
title: Wedding Party
---
<div class='clearfix team'>
{% for post in site.categories.team %}
  <div class='col12 pad1'>
    <img src="{{post.img}}" class='pad1'>
    <div class='pad2 prose border'>
    	<h1>{{post.name}}</h1>
        <h3>{{post.relation}}</h3>
    	<p>{{post.content}}</p>
    </div>
  </div>
{% endfor %}
</div>