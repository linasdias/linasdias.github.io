---
layout: default
title: Ana Carolina Dias | Blog
permalink: /blog
---

<div class="content-morango">
    <h2>Blog</h2>

    <h3>Categorias</h3>
    <ul id="categoria">
        {% assign tags = site.posts | map: 'tags' | join: ',' | split: ',' | uniq %}
        {% for tag in tags %}
        <li><a id="categlista" href="{{ site.baseurl }}/tag/{{ tag | slugify }}/index.html">{{ tag }}</a></li>
        {% endfor %}
    </ul>

<div class="container">
    <h3>Postagens recentes</h3>
    <ul id="posts">
        {% for post in site.posts limit:3 %}
            <div class="row">
                <div class="col-md-7">
                    <a href="#">
                        <a href="https://linasdias.github.io{{ post.url }}"><img class="img-fluid rounded mb-3 mb-md-0" src="https://via.placeholder.com/700x200"></a>
                    </a>
                </div>
                <div class="col-md-5">
                    <a href="https://linasdias.github.io{{ post.url }}"><h3 style="text-align:left">{{ post.title }}</h3></a>
                    <p>{{ post.excerpt }}</p>
                </div>
            </div>
            <hr>
            {% endfor %}
    </ul>
</div>

</div>

<div class="content-moragua">

</div>
