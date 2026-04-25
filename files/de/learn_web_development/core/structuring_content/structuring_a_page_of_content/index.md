---
title: "Herausforderung: Strukturierung einer Inhaltsseite"
short-title: "Herausforderung: Vogelbeobachtungsseite"
slug: Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content
l10n:
  sourceCommit: e91043ed51d5ae2232912c1ae24bc94ffe254674
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}

Die Strukturierung einer Inhaltsseite, damit sie mittels CSS gestaltet werden kann, ist eine sehr wichtige Fähigkeit, die es zu meistern gilt. In dieser Herausforderung werden Sie auf Ihre Fähigkeit getestet, darüber nachzudenken, wie eine Seite am Ende aussehen könnte, und geeignete strukturelle Semantiken auszuwählen, um ein darauf basierendes Layout zu erstellen.

## Ausgangspunkt

Um diese Herausforderung zu lösen, erwarten wir, dass Sie ein einfaches Website-Projekt erstellen, entweder in einem Ordner auf der Festplatte Ihres Computers oder mit einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/). Ein Großteil des benötigten Codes wird bereits bereitgestellt.

1. Erstellen Sie einen neuen Ordner an einem geeigneten Ort auf Ihrem Computer mit dem Namen `structuring-html-challenge` (oder öffnen Sie einen Online-Editor und führen Sie die erforderlichen Schritte aus, um ein neues Projekt zu erstellen).
2. Speichern Sie das folgende HTML-Listing in einer Datei in Ihrem Ordner mit dem Namen `index.html` (oder fügen Sie es in das HTML-Feld Ihres Online-Editors ein).

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

3. Speichern Sie das folgende CSS-Listing in einer Datei in Ihrem Ordner mit dem Namen `style.css` (oder fügen Sie es in das CSS-Feld Ihres Online-Editors ein).

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

Später müssen Sie die folgenden URLs in Ihre Seite einfügen.

- `dove.png`: [Das Seitenlogo](https://mdn.github.io/shared-assets/images/examples/learn/birds/dove.png)
- `favorite-bird-1.jpg`: [Vollformatversion des ersten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-1.jpg)
- `favorite-bird-1_th.jpg`: [Miniaturansicht des ersten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-1_th.jpg)
- `favorite-bird-2.jpg`: [Vollformatversion des zweiten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-2.jpg)
- `favorite-bird-2_th.jpg`: [Miniaturansicht des zweiten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-2_th.jpg)
- `favorite-bird-3.jpg`: [Vollformatversion des dritten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-3.jpg)
- `favorite-bird-3_th.jpg`: [Miniaturansicht des dritten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-3_th.jpg)
- `favorite-bird-4.jpg`: [Vollformatversion des vierten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-4.jpg)
- `favorite-bird-4_th.jpg`: [Miniaturansicht des vierten Seitenleistenbildes](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-4_th.jpg)

## Projektbeschreibung

Bei diesem Projekt besteht Ihre Aufgabe darin, den Inhalt für die Homepage einer Vogelbeobachtungs-Website zu nehmen und ihm strukturelle Elemente hinzuzufügen, sodass ein Seitenlayout darauf angewendet werden kann. Sie müssen auch einige Ergänzungen zum Inhalt vornehmen.

### Inhaltsergänzungen

1. Fügen Sie innerhalb des `<h1>`-Elements ein `<img>`-Element hinzu, das das Taubenlogo auf der Seite enthält. Vergeben Sie einen leeren Alternativtext ("").
2. Die Textelemente "Home", "Get started", "Photos", "Gear" und "Forum" sollten in ein Navigationsmenü umgewandelt werden.
   1. Markieren Sie sie als ungeordnete Liste.
   2. Umschließen Sie in jedem Listenelement den Text in einem `<a>`-Element, das auf eine URL von `#` verweist (was einen Dummy-Link erstellt).
3. Entfernen Sie den Kommentar `<!-- Link images here. -->`. Ersetzen Sie ihn durch eine Reihe von vier Miniaturbildern der "Lieblingsvögel". Jedes sollte einen geeigneten Alternativtext zur Beschreibung des Bildes enthalten und in ein `<a>`-Element eingewickelt sein, das auf die vollformatige Version verlinkt.

### Strukturanforderungen

Die Seitenstruktur muss aus Folgendem bestehen:

1. Ein Header, der die Hauptseitenüberschrift und die Navigationsmenüliste umschließt.
2. Ein zusätzlicher Wrapper um die Navigationsmenüliste.
3. Ein Hauptinhaltsbereich, der aus zwei Spalten besteht — einem Hauptartikel, der den Begrüßungstext enthält, und einer Seitenleiste (aside), die die Bildminiaturen enthält.
4. Ein Footer, der die Urheberrechtsinformationen und Credits enthält.

Mit anderen Worten, Sie müssen einen geeigneten Wrapper hinzufügen für:

- Den Header
- Das Navigationsmenü
- Den Hauptinhalt
- Den Begrüßungsartikel
- Das Bild-Aside
- Den Footer

### Gestaltung der Seite

Falls erforderlich, wenden Sie das bereitgestellte CSS auf die Seite an, indem Sie ein weiteres {{htmlelement("link")}}-Element unmittelbar unter dem im Ausgangs-HTML bereitgestellten hinzufügen (einige Online-Code-Editoren wenden das CSS automatisch an).

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML-Validator](https://validator.w3.org/), um unbeabsichtigte Fehler in Ihrem HTML zu finden und sie zu beheben.
- Sie müssen kein CSS kennen, um diese Herausforderung zu meistern; Sie müssen lediglich das bereitgestellte CSS auf Ihr HTML anwenden.
- Wenn Sie Schwierigkeiten haben und nicht visualisieren können, welche Elemente wo platziert werden sollen, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts und notieren Sie darauf die Elemente, von denen Sie glauben, dass sie jede Blockumgebung umschließen sollten. Dies ist äußerst hilfreich.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie die Homepage aussehen könnte, nachdem sie markiert wurde. Wenn Sie Schwierigkeiten haben, einige der Anforderungen zu erfüllen, lesen Sie die Lösung unter dem Live-Beispiel.

![Das fertiggestellte Beispiel für die Herausforderung; eine einfache Webseite über Vogelbeobachtung, einschließlich einer Überschrift "Vogelbeobachtung", Vogelfotos und einer Begrüßungsnachricht](example-page.png)

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

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
          alt="" />
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
