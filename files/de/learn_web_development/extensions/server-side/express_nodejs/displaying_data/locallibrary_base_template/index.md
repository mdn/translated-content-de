---
title: LocalLibrary Basistemplate
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Jetzt, da wir verstanden haben, wie man Vorlagen mithilfe von Pug erweitert, beginnen wir damit, eine Basistemplate für das Projekt zu erstellen. Diese enthält eine Seitenleiste mit Links zu den Seiten, die wir im Verlauf der Tutorial-Artikel erstellen möchten (z.B. zur Anzeige und Erstellung von Büchern, Genres, Autoren, etc.) und einen Hauptinhaltsbereich, den wir auf jeder unserer individuellen Seiten überschreiben werden.

Öffnen Sie **/views/layout.pug** und ersetzen Sie den Inhalt mit dem folgenden Code.

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

Die Vorlage verwendet (und inkludiert) JavaScript und CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap oder einem anderen Client-seitigen Web-Framework ist ein schneller Weg, um eine ansprechende Seite zu erstellen, die sich gut an verschiedene Browsergrößen anpassen lässt. Außerdem können wir uns so auf die Seitendarstellung konzentrieren, ohne in Details einsteigen zu müssen—wir wollen uns hier nur auf den Server-seitigen Code konzentrieren!

> [!NOTE]
> Die Skripte werden cross-origin geladen, daher müssen wir später im Tutorial, wenn wir Sicherheits-Middleware hinzufügen, explizit erlauben, diese Dateien zu laden.
> Weitere Informationen finden Sie unter [Deployment > Use Helmet to protect against well known vulnerabilities](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#use_helmet_to_protect_against_well_known_vulnerabilities).

Das Layout sollte ziemlich offensichtlich sein, wenn Sie unser obiges [Vorlagen-Einführung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer) gelesen haben. Beachten Sie die Verwendung von `block content` als Platzhalter für den Bereich, in dem der Inhalt unserer individuellen Seiten platziert wird.

Die Basistemplate verweist auch auf eine lokale CSS-Datei (**style.css**), die ein wenig zusätzliche Formatierung liefert. Öffnen Sie **/public/stylesheets/style.css** und ersetzen Sie deren Inhalt mit dem folgenden CSS-Code:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

Jetzt haben wir eine Basistemplate zum Erstellen von Seiten mit einer Seitenleiste. In den nächsten Abschnitten werden wir diese nutzen, um die individuellen Seiten zu definieren.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem nächsten Unterartikel von Teil 5: [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page).
