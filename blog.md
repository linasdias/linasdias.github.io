---
layout: default
title: Blog
---

<div class="content-morango">
    <h2>Blog</h2>
    <p id="subtitle">This is the blog page content.</p>

    <h3>Categorias</h3>
    <ul id="categoria">
        {% assign tags = site.posts | map: 'tags' | join: ',' | split: ',' | uniq %}
        {% for tag in tags %}
        <li><a id="categlista" href="{{ site.baseurl }}/tag/{{ tag | slugify }}/index.html">{{ tag }}</a></li>
        {% endfor %}
    </ul>

</div>

<div class="content-moragua">
    <h3>Postagens recentes</h3>
    <ul id="posts">
        {% for post in site.posts limit:3 %}
        <li>
            <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
            <p>{{ post.excerpt }}</p>
        </li>
        {% endfor %}
    </ul>
</div>
