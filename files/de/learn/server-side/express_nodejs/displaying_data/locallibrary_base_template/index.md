---
title: LocalLibrary Basistemplate
slug: Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Da wir nun verstehen, wie man Vorlagen mit Pug erweitert, beginnen wir mit der Erstellung einer Basistemplate für das Projekt. Diese wird eine Seitenleiste mit Links zu den Seiten enthalten, die wir in den Tutorial-Artikeln anlegen wollen (z.B. um Bücher, Genres, Autoren usw. anzuzeigen und zu erstellen) und einen Hauptinhaltsbereich, den wir in jeder unserer einzelnen Seiten überschreiben werden.

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
                a(href='/catalog/books') Alle Bücher
              li
                a(href='/catalog/authors') Alle Autoren
              li
                a(href='/catalog/genres') Alle Genres
              li
                a(href='/catalog/bookinstances') Alle Buch-Instanzen
              li
                hr
              li
                a(href='/catalog/author/create') Neuen Autor erstellen
              li
                a(href='/catalog/genre/create') Neues Genre erstellen
              li
                a(href='/catalog/book/create') Neues Buch erstellen
              li
                a(href='/catalog/bookinstance/create') Neue Buchinstanz erstellen (Kopie)

        div(class='col-sm-10')
          block content
```

Die Vorlage verwendet (und inkludiert) JavaScript und CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap oder einem anderen clientseitigen Webframework ist ein schneller Weg, um eine ansprechende Seite zu erstellen, die auf verschiedenen Browsergrößen gut skaliert, und ermöglicht es uns, uns auf die Seitendarstellung zu konzentrieren, ohne in Details einsteigen zu müssen – wir möchten uns hier nur auf den serverseitigen Code konzentrieren!

> [!NOTE]
> Die Skripte werden über CORS geladen. Daher werden wir später im Tutorial, wenn wir Sicherheits-Middleware hinzufügen, diese Dateien explizit erlauben müssen.
> Weitere Informationen finden Sie unter [Bereitstellung > Use Helmet to protect against well known vulnerabilities](/de/docs/Learn/Server-side/Express_Nodejs/deployment#use_helmet_to_protect_against_well_known_vulnerabilities).

Das Layout sollte ziemlich offensichtlich sein, wenn Sie unser obenstehendes [Template-Einführung](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer) gelesen haben. Beachten Sie die Verwendung von `block content` als Platzhalter für den Ort, an dem der Inhalt unserer einzelnen Seiten platziert wird.

Die Basistemplate verweist auch auf eine lokale CSS-Datei (**style.css**), die ein wenig zusätzlichen Stil bietet. Öffnen Sie **/public/stylesheets/style.css** und ersetzen Sie dessen Inhalt durch den folgenden CSS-Code:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

Nun haben wir eine Basistemplate für die Erstellung von Seiten mit einer Seitenleiste. In den nächsten Abschnitten werden wir sie verwenden, um die einzelnen Seiten zu definieren.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem nächsten Unterartikel von Teil 5: [Startseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page).
