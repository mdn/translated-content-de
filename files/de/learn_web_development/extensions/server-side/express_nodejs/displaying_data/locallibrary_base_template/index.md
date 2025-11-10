---
title: LocalLibrary Basistemplate
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Jetzt, da wir verstanden haben, wie man Templates mit Pug erweitert, beginnen wir mit der Erstellung einer Basistemplate für das Projekt. Diese wird eine Seitenleiste mit Links für die Seiten enthalten, die wir in den Tutorial-Artikeln erstellen möchten (z. B. um Bücher, Genres, Autoren usw. anzuzeigen und zu erstellen), sowie einen Hauptinhaltsbereich, den wir in jeder unserer individuellen Seiten überschreiben werden.

Öffnen Sie **/views/layout.pug** und ersetzen Sie den Inhalt mit dem unten stehenden Code.

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

Die Vorlage verwendet (und enthält) JavaScript und CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap oder einem anderen clientseitigen Web-Framework ist ein schneller Weg, um eine attraktive Seite zu erstellen, die sich gut auf verschiedene Browsergrößen skalieren lässt, und es ermöglicht uns, uns mit der Seitengestaltung zu befassen, ohne auf Details eingehen zu müssen – hier möchten wir uns nur auf den serverseitigen Code konzentrieren!

> [!NOTE]
> Die Skripte werden über Cross-Origin geladen, daher müssen wir, wenn wir später im Tutorial Middleware zur Verbesserung der Sicherheit hinzufügen, diese Dateien explizit für das Laden zulassen.
> Weitere Informationen finden Sie unter [Bereitstellung > Verwenden von Helmet zur Abwehr bekannter Schwachstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#use_helmet_to_protect_against_well_known_vulnerabilities).

Das Layout sollte ziemlich offensichtlich sein, wenn Sie unseren obigen [Template-Leitfaden](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer) gelesen haben. Beachten Sie die Verwendung von `block content` als Platzhalter, wo der Inhalt unserer individuellen Seiten platziert wird.

Die Basistemplate verweist auch auf eine lokale CSS-Datei (**style.css**), die ein wenig zusätzliche Formatierung bietet. Öffnen Sie **/public/stylesheets/style.css** und ersetzen Sie deren Inhalt durch den folgenden CSS-Code:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

Jetzt haben wir eine Basistemplate für die Erstellung von Seiten mit einer Seitenleiste. In den nächsten Abschnitten werden wir sie verwenden, um die individuellen Seiten zu definieren.

## Nächste Schritte

- Kehren Sie zurück zu [Express-Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page).
