---
title: Basisvorlage für die LocalLibrary
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Da wir nun verstehen, wie man Vorlagen mit Pug erweitert, beginnen wir mit der Erstellung einer Basisvorlage für das Projekt. Diese wird eine Seitenleiste mit Links für die Seiten, die wir über die Tutorial-Artikel erstellen möchten, haben (z.B. um Bücher, Genres, Autoren anzuzeigen und zu erstellen) und einen Hauptinhaltsbereich, den wir in jeder unserer individuellen Seiten überschreiben.

Öffnen Sie **/views/layout.pug** und ersetzen Sie den Inhalt mit dem untenstehenden Code.

```pug
doctype html
html(lang='en')
  head
    title= title
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1')
    link(rel="stylesheet", href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css", integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N", crossorigin="anonymous")
    script(src="https://code.jquery.com/jquery-3.5.1.slim.min.js", integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj", crossorigin="anonymous")
    script(src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js", integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+", crossorigin="anonymous")
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

Die Vorlage verwendet (und inkludiert) JavaScript und CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap oder einem anderen client-seitigen Web-Framework ist eine schnelle Möglichkeit, eine attraktive Seite zu erstellen, die auf verschiedenen Browsergrößen gut skalieren kann, und es ermöglicht uns, die Präsentation der Seite zu behandeln, ohne auf Details einzugehen – wir möchten uns hier nur auf den serverseitigen Code konzentrieren!

> [!NOTE]
> Die Skripte werden cross-origin geladen, daher müssen wir später im Tutorial, wenn wir Sicherheits-Middleware hinzufügen, explizit erlauben, dass diese Dateien geladen werden.
> Weitere Informationen finden Sie unter [Bereitstellung > Verwenden Sie Helmet, um sich gegen bekannte Schwachstellen zu schützen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#use_helmet_to_protect_against_well_known_vulnerabilities).

Das Layout sollte ziemlich offensichtlich sein, wenn Sie unseren oben genannten [Template-Einführung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer) gelesen haben. Beachten Sie die Verwendung von `block content` als Platzhalter für den Inhalt unserer individuellen Seiten.

Die Basisvorlage verweist auch auf eine lokale CSS-Datei (**style.css**), die etwas zusätzliche Gestaltung bietet. Öffnen Sie **/public/stylesheets/style.css** und ersetzen Sie dessen Inhalt mit dem folgenden CSS-Code:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

Jetzt haben wir eine Basisvorlage für die Erstellung von Seiten mit einer Seitenleiste. In den nächsten Abschnitten werden wir sie nutzen, um die einzelnen Seiten zu definieren.

## Nächste Schritte

- Zurück zu [Express-Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page).