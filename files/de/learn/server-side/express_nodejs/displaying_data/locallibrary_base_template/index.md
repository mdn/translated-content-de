---
title: LocalLibrary-Basistemplate
slug: Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Da wir nun verstehen, wie man Templates mit Pug erweitert, lassen Sie uns mit der Erstellung eines Basistemplates für das Projekt beginnen. Dieses wird eine Seitenleiste mit Links zu den Seiten enthalten, die wir im Verlauf der Tutorial-Artikel erstellen möchten (z. B. um Bücher, Genres, Autoren usw. anzuzeigen und zu erstellen) sowie einen Hauptinhaltsbereich, den wir in jeder unserer einzelnen Seiten überschreiben werden.

Öffnen Sie **/views/layout.pug** und ersetzen Sie den Inhalt durch den folgenden Code.

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

Das Template verwendet (und inkludiert) JavaScript und CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Darstellung der HTML-Seite zu verbessern. Die Verwendung von Bootstrap oder einem anderen clientseitigen Web-Framework ist eine schnelle Möglichkeit, eine ansprechende Seite zu erstellen, die auf unterschiedlichen Browsergrößen gut skaliert. Zudem ermöglicht es uns, uns auf die Präsentation der Seite zu konzentrieren, ohne in die Details einzusteigen – wir möchten uns hier nur auf den serverseitigen Code konzentrieren!

> [!NOTE]
> Die Skripte werden cross-origin geladen, daher müssen wir später im Tutorial, wenn wir Sicherheits-Middleware hinzufügen, explizit erlauben, dass diese Dateien geladen werden.
> Weitere Informationen finden Sie unter [Deployment > Verwenden Sie Helmet, um sich vor bekannten Schwachstellen zu schützen](/de/docs/Learn/Server-side/Express_Nodejs/deployment#use_helmet_to_protect_against_well_known_vulnerabilities).

Das Layout sollte ziemlich offensichtlich sein, wenn Sie unser obiges [Template-Einführung](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer) gelesen haben. Beachten Sie die Verwendung von `block content` als Platzhalter für den Inhalt unserer individuellen Seiten.

Das Basistemplate verweist außerdem auf eine lokale CSS-Datei (**style.css**), die ein wenig zusätzliche Gestaltung bietet. Öffnen Sie **/public/stylesheets/style.css** und ersetzen Sie dessen Inhalt durch den folgenden CSS-Code:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

Nun haben wir ein Basistemplate für die Erstellung von Seiten mit einer Seitenleiste. In den nächsten Abschnitten werden wir es verwenden, um die einzelnen Seiten zu definieren.

## Nächste Schritte

- Kehren Sie zurück zur [Express Anleitung Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem nächsten Unterartikel von Teil 5: [Startseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page).
