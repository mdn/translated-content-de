---
title: LocalLibrary-Basisvorlage
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}

Nachdem wir verstanden haben, wie sich Vorlagen mit Pug erweitern lassen, erstellen wir nun eine Basisvorlage für das Projekt. Sie enthält eine Seitenleiste mit Links zu den Seiten, die wir im Verlauf dieses Tutorials erstellen möchten (z. B. zum Anzeigen und Erstellen von Büchern, Genres und Autoren), sowie einen Hauptinhaltsbereich, den wir auf jeder einzelnen Seite überschreiben.

Öffnen Sie **views/layout.pug** und ersetzen Sie den Inhalt durch den folgenden Code.

```pug
doctype html
html(lang='en')
  head
    title= title
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1')
    link(rel="stylesheet", href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css", integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr", crossorigin="anonymous")
    script(src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js", integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q", crossorigin="anonymous")
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    div(class='container-fluid')
      div(class='row')
        div(class='col-sm-2')
          block sidebar
            ul(class='sidebar-nav')
              li
                a(href='/catalog') Home
              li
                a(href='/catalog/books') All books
              li
                a(href='/catalog/authors') All authors
              li
                a(href='/catalog/genres') All genres
              li
                a(href='/catalog/bookinstances') All book-instances
              li
                hr
              li
                a(href='/catalog/author/create') Create new author
              li
                a(href='/catalog/genre/create') Create new genre
              li
                a(href='/catalog/book/create') Create new book
              li
                a(href='/catalog/bookinstance/create') Create new book instance (copy)

        div(class='col-sm-10')
          block content
```

Die Vorlage verwendet (und bindet) JavaScript und CSS von [Bootstrap](https://getbootstrap.com/) ein, um das Layout und die Darstellung der HTML-Seite zu verbessern. Mit Bootstrap oder einem anderen clientseitigen Web-Framework lässt sich schnell eine ansprechende Seite erstellen, die sich gut an unterschiedliche Browsergrößen anpasst. Außerdem können wir uns so um die Darstellung kümmern, ohne uns mit deren Einzelheiten befassen zu müssen – hier möchten wir uns auf den serverseitigen Code konzentrieren!

> [!NOTE]
> Die Skripte werden von einer anderen Origin geladen. Wenn wir später im Tutorial Sicherheits-Middleware hinzufügen, müssen wir das Laden dieser Dateien daher ausdrücklich erlauben.
> Weitere Informationen finden Sie unter [Bereitstellung > Helmet zum Schutz vor bekannten Sicherheitslücken verwenden](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#use_helmet_to_protect_against_well_known_vulnerabilities).

Wenn Sie die obige [Einführung in Vorlagen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer) gelesen haben, sollte das Layout recht verständlich sein. Beachten Sie, dass `block content` als Platzhalter für den Inhalt der einzelnen Seiten dient.

Die Basisvorlage verweist außerdem auf eine lokale CSS-Datei (**style.css**), die einige zusätzliche Formatierungen enthält. Öffnen Sie **public/stylesheets/style.css** (die bisher leer war) und fügen Sie Folgendes hinzu:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

Damit haben wir eine Basisvorlage für Seiten mit einer Seitenleiste. In den nächsten Abschnitten verwenden wir sie, um die einzelnen Seiten zu definieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}
