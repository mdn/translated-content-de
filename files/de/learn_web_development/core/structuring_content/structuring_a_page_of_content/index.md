---
title: "Herausforderung: Strukturieren einer Inhaltsseite"
short-title: "Herausforderung: Vogelbeobachtungsseite"
slug: Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}

Das Strukturieren einer Inhaltsseite, die bereit ist, mit CSS formatiert zu werden, ist eine sehr wichtige Fähigkeit, die es zu meistern gilt. In dieser Herausforderung wird Ihr Können getestet, wie Sie eine Seite so strukturieren, dass sie aussehen könnte, und geeignete strukturelle Semantiken auswählen, um darauf ein Layout aufzubauen.

## Ausgangspunkt

Um diese Herausforderung zu lösen, erwarten wir, dass Sie ein einfaches Website-Projekt erstellen, entweder in einem Ordner auf Ihrer Festplatte oder mit einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/). Ein Großteil des Codes, den Sie benötigen, wird bereits bereitgestellt.

1. Erstellen Sie einen neuen Ordner an einem geeigneten Ort auf Ihrem Computer mit dem Namen `structuring-html-challenge` (oder öffnen Sie einen Online-Editor und führen Sie die erforderlichen Schritte aus, um ein neues Projekt zu erstellen).
2. Speichern Sie das folgende HTML-Verzeichnis in einer Datei in Ihrem Ordner mit dem Namen `index.html` (oder fügen Sie es in das HTML-Feld Ihres Online-Editors ein).

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <title>Birdwatching</title>
       <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300%7CCinzel+Decorative:700"
         rel="stylesheet" />
     </head>

     <body>
       <h1>Birdwatching</h1>

       Home Get started Photos Gear Forum

       <h2>Welcome</h2>

       <p>
         Welcome to our fake birdwatching site. If this were a real site, it
         would be the ideal place to come to learn more about birdwatching,
         whether you are a beginner looking to learn how to get into birding, or
         an expert wanting to share ideas, tips, and photos with other
         like-minded people.
       </p>

       <p>
         So don't waste time! Get what you need, then turn off that computer and
         get out into the great outdoors!
       </p>

       <h2>Favorite photos</h2>

       <!-- Link images here. -->

       <p>
         This fake website example is CC0 — any part of this code may be reused
         in any way you wish. Original example written by Chris Mills, 2016.
       </p>

       <p>
         <a href="http://game-icons.net/lorc/originals/dove.html">Dove icon</a>
         by Lorc.
       </p>
     </body>
   </html>
   ```

3. Speichern Sie das folgende CSS-Verzeichnis in einer Datei in Ihrem Ordner mit dem Namen `style.css` (oder fügen Sie es in das CSS-Feld Ihres Online-Editors ein).

   ```css
   /* || General setup */

   body {
     margin: 0;
   }

   html {
     font-size: 10px;
     background-color: darkgrey;
   }

   body {
     width: 70%;
     min-width: 800px;
     margin: 0 auto;
   }

   /* || typography */

   h1,
   h2 {
     font-family: "Cinzel Decorative", cursive;
     color: #2a2a2a;
   }

   p,
   li {
     font-family: "Roboto Condensed", sans-serif;
     color: #2a2a2a;
   }

   h1 {
     font-size: 4rem;
     text-align: center;
     text-shadow: 2px 2px 10px black;
   }

   h2 {
     font-size: 3rem;
     text-align: center;
   }

   p,
   li {
     font-size: 1.6rem;
     line-height: 1.5;
   }

   /* || header layout */

   header {
     margin-bottom: 10px;
   }

   main,
   header,
   nav,
   article,
   aside,
   footer,
   section {
     background-color: #00ff0080;
     padding: 1%;
   }

   h1 {
     text-transform: uppercase;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 20px;
   }

   header img {
     height: 60px;
   }

   nav ul {
     padding: 0;
     list-style-type: none;
     display: flex;
   }

   nav li {
     text-align: center;
     flex: 1;
   }

   nav a {
     font-size: 2rem;
     text-transform: uppercase;
     text-decoration: none;
     color: black;
   }

   nav a:hover,
   nav a:focus {
     color: red;
   }

   /* || main layout */

   main {
     display: flex;
     gap: 10px;
   }

   article {
     flex: 4;
   }

   aside {
     flex: 1;
   }

   aside a {
     display: block;
     float: left;
     width: 50%;
   }

   aside img {
     max-width: 100%;
   }

   footer {
     margin-top: 10px;
   }
   ```

Später müssen Sie die folgenden URLs in Ihrer Seite einfügen.

- `dove.png`: [Das Seitenlogo](https://mdn.github.io/shared-assets/images/examples/learn/birds/dove.png)
- `favorite-bird-1.jpg`: [Vollversion des ersten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-1.jpg)
- `favorite-bird-1_th.jpg`: [Thumbnail des ersten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-1_th.jpg)
- `favorite-bird-2.jpg`: [Vollversion des zweiten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-2.jpg)
- `favorite-bird-2_th.jpg`: [Thumbnail des zweiten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-2_th.jpg)
- `favorite-bird-3.jpg`: [Vollversion des dritten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-3.jpg)
- `favorite-bird-3_th.jpg`: [Thumbnail des dritten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-3_th.jpg)
- `favorite-bird-4.jpg`: [Vollversion des vierten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-4.jpg)
- `favorite-bird-4_th.jpg`: [Thumbnail des vierten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-4_th.jpg)

## Projektauftrag

In diesem Projekt besteht Ihre Aufgabe darin, die Inhalte der Startseite einer Vogelbeobachtungs-Website zu übernehmen und ihr strukturelle Elemente hinzuzufügen, damit ein Seitenlayout darauf angewendet werden kann. Sie müssen auch einige Ergänzungen zum Inhalt vornehmen.

### Inhaltsergänzungen

1. Fügen Sie innerhalb des `<h1>`-Elements ein `<img>`-Element hinzu, das das Taubenlogo auf der Seite beinhaltet. Geben Sie ihm einen leeren alternativen Text ("").
2. Die Textgegenstände "Home", "Get started", "Photos", "Gear" und "Forum" sollten in ein Navigationsmenü umgewandelt werden.
   1. Markieren Sie sie als ungeordnete Liste.
   2. Wickeln Sie in jedem Listenelement den Text in ein `<a>`-Element ein, das auf eine URL von `#` verweist (was einen Dummy-Link erstellt).
3. Entfernen Sie den Kommentar `<!-- Link images here. -->`. Ersetzen Sie ihn durch ein Set von vier Thumbnail-Bildern der "Lieblingsvögel". Jedes sollte einen geeigneten alternativen Text enthalten, um das Bild zu beschreiben, und in ein `<a>`-Element eingewickelt sein, das auf die vollformatige Entsprechung verlinkt.

### Strukturelle Anforderungen

Die Seitenstruktur muss aus Folgendem bestehen:

1. Ein Header, der die oberste Seitenüberschrift und die Navigationsmenüliste umschließt.
2. Ein zusätzlicher Wrapper um die Navigationsmenüliste.
3. Ein Hauptinhaltsbereich, der zwei Spalten enthält — einen Hauptartikel für den Willkommenstext und eine Seitenleiste (aside), die die Bildthumbnails enthält.
4. Ein Footer, der die Urheberrechtsinformationen und Credits enthält.

Mit anderen Worten, Sie müssen einen geeigneten Wrapper hinzufügen für:

- Den Header
- Das Navigationsmenü
- Den Hauptinhalt
- Den Willkommensartikel
- Die Bildseitenleiste
- Den Footer

### Styling der Seite

Falls erforderlich, wenden Sie das bereitgestellte CSS auf die Seite an, indem Sie ein weiteres {{htmlelement("link")}}-Element direkt unterhalb des bereits im Ausgangs-HTML vorhandenen hinzufügen (einige Online-Code-Editoren wenden das CSS automatisch an).

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML-Validator](https://validator.w3.org/), um unbeabsichtigte Fehler in Ihrem HTML zu finden — so können Sie diese beheben.
- Sie müssen kein CSS kennen, um diese Herausforderung zu bewältigen; Sie müssen lediglich das bereitgestellte CSS auf Ihr HTML anwenden.
- Wenn Sie nicht weiterkommen und nicht wissen, welche Elemente Sie wo platzieren sollen, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts und notieren Sie die Elemente, von denen Sie denken, dass sie jeden Block umschließen sollten. Dies ist äußerst hilfreich.

## Beispiel

Das folgende Bild zeigt ein Beispiel, wie die Startseite aussehen könnte, nachdem sie markiert wurde. Wenn Sie Schwierigkeiten haben, wie Sie einige dieser Dinge erreichen können, lesen Sie die Lösung unter dem Live-Beispiel.

![Das fertige Beispiel für die Herausforderung; eine einfache Webseite über Vogelbeobachtung, einschließlich einer Überschrift "Birdwatching", Vogelbildern und einer Willkommensnachricht](example-page.png)

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Birdwatching</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300%7CCinzel+Decorative:700"
      rel="stylesheet" />
    <link href="style.css" rel="stylesheet" />
  </head>

  <body>
    <header>
      <h1>
        Birdwatching
        <img
          src="https://mdn.github.io/shared-assets/images/examples/learn/birds/dove.png"
          alt="a simple dove logo" />
      </h1>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Get started</a></li>
          <li><a href="#">Photos</a></li>
          <li><a href="#">Gear</a></li>
          <li><a href="#">Forum</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <article>
        <h2>Welcome</h2>

        <p>
          Welcome to our fake birdwatching site. If this were a real site, it
          would be the ideal place to come to learn more about birdwatching,
          whether you are a beginner looking to learn how to get into birding,
          or an expert wanting to share ideas, tips, and photos with other
          like-minded people.
        </p>

        <p>
          So don't waste time! Get what you need, then turn off that computer
          and get out into the great outdoors!
        </p>
      </article>

      <aside>
        <h2>Favorite photos</h2>

        <a
          href="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-1.jpg">
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-1_th.jpg"
            alt="Small black bird, black claws, long black slender beak" />
        </a>
        <a
          href="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-2.jpg">
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-2_th.jpg"
            alt="Top half of a pretty bird with bright blue plumage on neck, light colored beak, blue headdress" />
        </a>
        <a
          href="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-3.jpg">
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-3_th.jpg"
            alt="Top half of a large bird with white plumage, very long curved narrow light colored break" />
        </a>
        <a
          href="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-4.jpg">
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-4_th.jpg"
            alt="Large bird, mostly white plumage with black plumage on back and rear, long straight white beak" />
        </a>
      </aside>
    </main>

    <footer>
      <p>
        This fake website example is CC0 — any part of this code may be reused
        in any way you wish. Original example written by Chris Mills, 2016.
      </p>

      <p>
        <a href="http://game-icons.net/lorc/originals/dove.html">Dove icon</a>
        by Lorc.
      </p>
    </footer>
  </body>
</html>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}
