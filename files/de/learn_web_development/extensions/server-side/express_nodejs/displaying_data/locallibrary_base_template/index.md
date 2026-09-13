---
title: LocalLibrary Basis-Template
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

Nun, da wir verstanden haben, wie man Vorlagen mit Pug erweitert, beginnen wir mit der Erstellung einer Basisvorlage für das Projekt. Diese wird eine Seitenleiste mit Links zu den Seiten enthalten, die wir im Verlauf der Tutorial-Artikel erstellen möchten (z. B. um Bücher, Genres, Autoren anzuzeigen und zu erstellen) sowie einen Hauptinhaltsbereich, den wir in unseren Einzelseiten überschreiben werden.

Öffnen Sie **/views/layout.pug** und ersetzen Sie den Inhalt mit dem untenstehenden Code.

```pug
doctype html
html(lang='en')
  head
    title= title
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width')
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

Die Vorlage verwendet (und inkludiert) JavaScript und CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap oder einem anderen clientseitigen Web-Framework ist eine schnelle Möglichkeit, eine ansprechende Seite zu erstellen, die gut auf verschiedenen Browsergrößen skaliert und es uns auch erlaubt, uns um die Seitendarstellung zu kümmern, ohne die Details kennen zu müssen—wir möchten uns hier nur auf den serverseitigen Code konzentrieren!

> [!NOTE]
> Die Skripte werden Cross-Origin geladen, daher müssen wir später im Tutorial, wenn wir Sicherheits-Middleware hinzufügen, explizit erlauben, dass diese Dateien geladen werden.
> Weitere Informationen finden Sie unter [Bereitstellung > Helmet verwenden, um sich gegen bekannte Sicherheitslücken zu schützen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment#use_helmet_to_protect_against_well_known_vulnerabilities).

Das Layout sollte relativ klar sein, wenn Sie unser obenstehendes [Vorlagen-Grundlagen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer) gelesen haben. Beachten Sie die Verwendung von `block content` als Platzhalter für den Inhalt unserer Einzelseiten.

Die Basisvorlage verweist auch auf eine lokale CSS-Datei (**style.css**), die ein wenig zusätzliche Gestaltung bietet. Öffnen Sie **/public/stylesheets/style.css** und ersetzen Sie deren Inhalt mit dem folgenden CSS-Code:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

Jetzt haben wir eine Basisvorlage, um Seiten mit einer Seitenleiste zu erstellen. In den nächsten Abschnitten werden wir diese verwenden, um die einzelnen Seiten zu definieren.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeigeben von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page).
