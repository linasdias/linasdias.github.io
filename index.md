---
layout: default
title: Ana Carolina Dias
permalink: /
---

<div class="content-morango">

<!-- Page Content -->
    <div class="container">

    <!-- Page Heading -->
    <h2>Projetos
        <small>& contributions</small>
    </h2>

    <div class="row">
        <div class="col-lg-4 col-sm-6 mb-4">
        <div class="card h-100">
            <img src="assets/img/5.png" />
            <div class="card-body">
            <h4 class="card-title">
                <a href="https://lapin.org.br/2024/03/20/contribuicao-a-consulta-da-autoridade-nacional-de-protecao-de-dados-anpd-sobre-sandbox-regulatorio-de-inteligencia-artificial-e-protecao-de-dados-no-brasil/">Consulta Pública: Sandbox Regulatório de IA da ANPD</a>
            </h4>
            <p class="card-text">Revisão documental e bibliográfica de artigos científicos, monografias e dissertações que apresenta exemplos internacionais de uso de sandboxes e aborda os benefícios que podem trazer para a proteção de dados pessoais no desenvolvimento de uma inteligência artificial responsável.</p>
            </div>
        </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4">
        <div class="card h-100">
            <img class="card-img-top" src="assets/img/6.png" />
            <div class="card-body">
            <h4 class="card-title">
                <a href="http://www.iea.usp.br/pesquisa/catedras-e-convenios/catedra-oscar-sala/titular-catedra/virgilio-almeida/grupo-de-estudos-ia-responsavel">Integrante do Grupo de Estudos IA Responsável (2023/2024) - IEA/USP</a>
            </h4>
            <p class="card-text">O foco das investigações e trocas acadêmicas durante o período da Cátedra é compreender como os sistemas de inteligência artificial e seus designs operam e influenciam decisões e visões sobre o mundo em suas mais diversas esferas, desde a saúde, trabalho, educação, arte, cultura e identidades.</p>
            </div>
        </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4">
        <div class="card h-100">
            <img class="card-img-top" src="assets/img/4.png" />
            <div class="card-body">
            <h4 class="card-title">
                <a href="https://forumdainternet.cgi.br/agenda/3033">Relatoria: Moldando o Futuro Digital - IoT para Preservação Ecológica [FIB14]</a>
            </h4>
            <p class="card-text">Em breve.</p>
            </div>
        </div>
        </div>
        
    </div>
    <!-- /.row -->
    </div>
    <!-- /.container -->
</div>

<div class="content-moragua">

  <!-- Page Content -->
  <div class="container">

    <!-- Page Heading -->
    <h1 class="my-4">Últimos posts
      <small>from the blog</small>
    </h1>

    {% for post in site.posts limit:2 %}
      <div class="row">
        <div class="col-md-7">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="https://via.placeholder.com/700x300">
          </a>
        </div>
        <div class="col-md-5">
          <h3 style="text-align:left">{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p> <button type="button" name="buttonMorango"><a href="https://linasdias.github.io{{ post.url }}">Ler mais</a></button>
        </div>
      </div>

      <hr>
    {% endfor %}

</div>
<!--
<div class="content-agua">
</div>
-->

