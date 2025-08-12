---
title: Grundlagen zu Media Queries
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}

Die **CSS Media Query** bietet Ihnen die Möglichkeit, CSS nur dann anzuwenden, wenn die browser- und geräteumgebung einer von Ihnen angegebenen Regel entspricht, zum Beispiel "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des [Responsive Web Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), da sie es Ihnen ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. Sie können jedoch auch verwendet werden, um andere Aspekte der Umgebung zu erkennen, in der Ihre Website läuft, zum Beispiel, ob der Benutzer einen Touchscreen statt einer Maus verwendet.

In dieser Lektion lernen Sie zunächst die Syntax, die bei Media Queries verwendet wird, und setzen dies dann in Beispielen um, die zeigen, wie ein einfaches Design responsiv gestaltet werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen des CSS-Stylings</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Syntax von Media Queries.</li>
          <li>Die gebräuchlichen Typen von Media Queries.</li>
          <li>Verwendung von <code>width</code> und <code>height</code> Media Queries zur Erstellung von responsiven Layouts.</li>
          <li>Auswahl von Breakpoints.</li>
          <li>Verwendung von Media Queries zur Implementierung eines Mobile-First-Designs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen der Media Query

Die einfachste Syntax einer Media Query sieht folgendermaßen aus:

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

Sie besteht aus:

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medien dieser Code gedacht ist (Druck oder Bildschirm).
- Einem Medienausdruck, der eine Regel oder ein Test ist, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einem Satz von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query wird den Inhalt nur auf 12pt einstellen, wenn die Seite gedruckt wird. Es wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der Medientyp hier unterscheidet sich vom sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.
> In der Media Queries Level 3-Spezifikation waren eine Reihe anderer Medientypen definiert; diese sind inzwischen veraltet und sollten vermieden werden.
> Medientypen sind optional; wenn Sie in Ihrer Media Query keinen Medientyp angeben, wird die Media Query standardmäßig für alle Medientypen gelten.

### Regeln für Medienmerkmale

Nachdem Sie den Typ angegeben haben, können Sie mit einer Regel auf ein Medienmerkmal abzielen. Die folgenden Beispiele zeigen, wie Sie verschiedene Media Queries verwenden können. Um die `width` Ihres Bildschirms zu ändern, ändern Sie die Größe Ihres Browsers oder drehen Sie Ihr Handheld-Gerät.

> [!NOTE]
> Alternativ können Sie die Funktion zur responsiven Größenänderung der Entwicklertools des Browsers nutzen (z. B. den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/) von Firefox), um verschiedene Gerätebreiten zu simulieren.

#### Breite und Höhe

Das Merkmal, das wir am häufigsten erkennen, um responsive Designs zu erstellen (und das weit verbreitete Browser-Unterstützung hat), ist die Viewport-Breite, und wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite liegt - oder einer exakten Breite - indem wir das Medienmerkmal `width` verwenden und es nach Bedarf mit `min-` oder `max-` präfixieren.

Diese Merkmale werden verwendet, um Layouts zu erstellen, die auf verschiedene Bildschirmgrößen reagieren. Um beispielsweise die Textfarbe des Körpers auf Rot zu setzen, wenn der Viewport genau 600 Pixel breit ist, würden Sie die folgende Media Query verwenden.

```css live-sample___width
@media screen and (width: 600px) {
  body {
    color: red;
  }
}
```

```html live-sample___width
<p>
  One November night in the year 1782, so the story runs, two brothers sat over
  their winter fire in the little French town of Annonay, watching the grey
  smoke-wreaths from the hearth curl up the wide chimney. Their names were
  Stephen and Joseph Montgolfier, they were papermakers by trade, and were noted
  as possessing thoughtful minds and a deep interest in all scientific knowledge
  and new discovery.
</p>
```

{{EmbedLiveSample("width")}}

Versuchen Sie, die Breite des Browserfensters anzupassen, um den Sweetspot zu finden, bei dem das obige Demo genau `600px` breit ist, damit der Text rot wird.

Die Medienmerkmale `width` (und `height`) können als Bereiche verwendet werden und daher mit `min-` oder `max-` präfixiert werden, um anzugeben, dass der angegebene Wert ein Minimum oder ein Maximum ist. Um beispielsweise die Farbe Blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

```css live-sample___max-width
@media screen and (max-width: 600px) {
  body {
    color: blue;
  }
}
```

```html hidden live-sample___max-width
<p>
  One November night in the year 1782, so the story runs, two brothers sat over
  their winter fire in the little French town of Annonay, watching the grey
  smoke-wreaths from the hearth curl up the wide chimney. Their names were
  Stephen and Joseph Montgolfier, they were papermakers by trade, and were noted
  as possessing thoughtful minds and a deep interest in all scientific knowledge
  and new discovery.
</p>
```

{{EmbedLiveSample("max-width")}}

Versuchen Sie, das Fenster zu verkleinern, bis der obige Text blau wird.

In der Praxis ist die Verwendung von Minima oder Maxima viel nützlicher für responsives Design, sodass Sie selten `width` oder `height` alleine sehen werden.

Es gibt viele andere Medienmerkmale, die Sie testen können, obwohl einige der neueren Merkmale, die in den Levels 4 und 5 der Media Queries-Spezifikation eingeführt wurden, begrenzte Browser-Unterstützung haben. Jedes Merkmal ist auf MDN zusammen mit Informationen zur Browser-Unterstützung dokumentiert, und Sie finden eine vollständige Liste unter [Verwenden von Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

#### Orientierung

Ein gut unterstütztes Medienmerkmal ist `orientation`, das es uns ermöglicht, die Ausrichtung im Hoch- oder Querformat zu testen. Um die Textfarbe des Körpers zu ändern, wenn das Gerät im Querformat ist, verwenden Sie die folgende Media Query.

```css live-sample___orientation
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}
```

```html hidden live-sample___orientation
<p>
  One November night in the year 1782, so the story runs, two brothers sat over
  their winter fire in the little French town of Annonay, watching the grey
  smoke-wreaths from the hearth curl up the wide chimney. Their names were
  Stephen and Joseph Montgolfier, they were papermakers by trade, and were noted
  as possessing thoughtful minds and a deep interest in all scientific knowledge
  and new discovery.
</p>
```

{{EmbedLiveSample("orientation")}}

Das obige Beispiel ist ziemlich schwierig, direkt auf der Seite zu testen; Um es in Aktion zu sehen, wird empfohlen, den obigen Code in eine lokale HTML-Datei zu kopieren und in einem eigenen Tab zu öffnen.

Eine Standard-Desktopansicht hat eine Querformat-Ausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat angezeigt wird. Das Testen der Orientierung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Im Rahmen der Level 4-Spezifikation wurde das Medienmerkmal `hover` eingeführt. Dieses Merkmal bedeutet, dass Sie überprüfen können, ob der Benutzer die Möglichkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er eine Art Eingabegerät verwendet; Touchscreen und Tastaturnavigation schweben nicht.

```css live-sample___hover-example
@media screen and (hover: hover) {
  body:hover {
    color: white;
    background: black;
  }
}
```

```html hidden live-sample___hover-example
<p>
  One November night in the year 1782, so the story runs, two brothers sat over
  their winter fire in the little French town of Annonay, watching the grey
  smoke-wreaths from the hearth curl up the wide chimney. Their names were
  Stephen and Joseph Montgolfier, they were papermakers by trade, and were noted
  as possessing thoughtful minds and a deep interest in all scientific knowledge
  and new discovery.
</p>
```

{{EmbedLiveSample("hover-example")}}

Das obige Beispiel ändert den Text in weiß auf schwarz, wenn mit der Maus darüber gefahren wird, jedoch nur auf Geräten, auf denen das Schweben möglich ist. Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Bei Benutzern, die schweben können, könnten wir diese verfügbar machen, wenn ein Link überfahren wird.

Ebenfalls in Level 4 ist das Medienmerkmal `pointer`. Dieses nimmt drei mögliche Werte an: `none`, `fine` und `coarse`. Ein `fine`-Zeiger ist etwas wie eine Maus oder ein Trackpad. Er ermöglicht dem Benutzer das präzise Anvisieren eines kleinen Bereichs. Ein `coarse`-Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; vielleicht navigieren sie nur mit der Tastatur oder mit Sprachkommandos.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm durchführt. Beispielsweise könnten Sie größere Zielbereiche erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

### Verwendung der Bereichssyntax

Ein häufiger Fall ist die Überprüfung, ob die Viewport-Breite zwischen zwei Werten liegt:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

Wenn Sie die Lesbarkeit verbessern möchten, können Sie die "Bereichs"-Syntax verwenden:

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

In diesem Fall werden Styles angewendet, wenn die Viewport-Breite zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Mit all den verschiedenen möglichen Media Queries möchten Sie diese vielleicht kombinieren oder Listen von Abfragen erstellen, von denen jede abgeglichen werden könnte.

Wie zuvor, versuchen Sie, die Beispiele in diesem Abschnitt zu testen, indem Sie Ihre Browserbreite anpassen.

### "und"-Logik in Media Queries

Um Medienmerkmale zu kombinieren, können Sie `and` in ähnlicher Weise verwenden, wie wir `and` oben verwendet haben, um einen Medientyp und ein Merkmal zu kombinieren. Beispielsweise möchten wir vielleicht `width` und `orientation` testen. Der Text des Körpers wird nur blau, wenn der Viewport mindestens 600 Pixel breit ist und sich das Gerät im Querformat befindet.

```css live-sample___and
@media screen and (width >= 600px) and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

```html hidden live-sample___and
<p>
  One November night in the year 1782, so the story runs, two brothers sat over
  their winter fire in the little French town of Annonay, watching the grey
  smoke-wreaths from the hearth curl up the wide chimney. Their names were
  Stephen and Joseph Montgolfier, they were papermakers by trade, and were noted
  as possessing thoughtful minds and a deep interest in all scientific knowledge
  and new discovery.
</p>
```

{{EmbedLiveSample("and")}}

### "oder"-Logik in Media Queries

Wenn Sie eine Reihe von Abfragen haben, von denen jede zutreffen könnte, können Sie diese Abfragen kommatrennt. Im folgenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER wenn sich das Gerät im Querformat befindet. Wenn eine dieser Bedingungen zutrifft, stimmt die Abfrage überein.

```css live-sample___or
@media screen and (width >= 600px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

```html hidden live-sample___or
<p>
  One November night in the year 1782, so the story runs, two brothers sat over
  their winter fire in the little French town of Annonay, watching the grey
  smoke-wreaths from the hearth curl up the wide chimney. Their names were
  Stephen and Joseph Montgolfier, they were papermakers by trade, and were noted
  as possessing thoughtful minds and a deep interest in all scientific knowledge
  and new discovery.
</p>
```

{{EmbedLiveSample("or")}}

### "nicht"-Logik in Media Queries

Sie können eine gesamte Media Query mit dem `not`-Operator negieren. Dies kehrt die Bedeutung der gesamten Media Query um. In diesem nächsten Beispiel wird der Text nur blau, wenn der Viewport _nicht_ mindestens 600 Pixel breit ist.

```css live-sample___not
@media not (width >= 600px) {
  body {
    color: blue;
  }
}
```

```html hidden live-sample___not
<p>
  One November night in the year 1782, so the story runs, two brothers sat over
  their winter fire in the little French town of Annonay, watching the grey
  smoke-wreaths from the hearth curl up the wide chimney. Their names were
  Stephen and Joseph Montgolfier, they were papermakers by trade, and were noted
  as possessing thoughtful minds and a deep interest in all scientific knowledge
  and new discovery.
</p>
```

{{EmbedLiveSample("not")}}

Sie können `not` auch verwenden, um bestimmte Ausdrücke zu negieren.

```css
@media (not (width < 600px)) and (not (width > 1000px)) {
  body {
    color: blue;
  }
}
```

Dies wird die Styles anwenden, wenn die Viewport-Breite zwischen 600 und 1000 Pixel liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Wie man Breakpoints wählt

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen anzuvisieren. Listen von Bildschirmgrößen beliebter Telefone und Tablets wurden veröffentlicht, damit Designs erstellt werden konnten, die diese Viewports sauber treffen.

Es gibt jetzt weitaus zu viele Geräte mit einer enormen Vielfalt an Größen, um dies praktikabel zu machen. Das bedeutet, dass anstelle des Zielens auf spezifische Größen für alle Designs ein besserer Ansatz darin besteht, das Design an der Größe zu ändern, bei der der Inhalt in irgendeiner Weise zu brechen beginnt. Vielleicht werden die Zeilenlängen viel zu lang oder ein Seitenbereich wird eingequetscht und schwer lesbar. Dies ist der Punkt, an dem Sie eine Media Query verwenden möchten, um das Design in ein besseres für den verfügbaren Raum zu ändern. Dieser Ansatz bedeutet, dass es nicht darauf ankommt, welche genauen Abmessungen das verwendete Gerät hat; jedes Spektrum wird berücksichtigt. Die Punkte, an denen eine Media Query eingeführt wird, sind als **Breakpoints** bekannt.

[Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in den Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints platziert werden sollten. Sie können den Viewport einfach verkleinern und vergrößern, um zu sehen, wo der Inhalt durch das Hinzufügen einer Media Query und das Anpassen des Designs verbessert würde.

![Ein Screenshot eines Layouts in der mobilen Ansicht in den Firefox DevTools.](rwd-mode.png)

## Mobile-First Responsive Design

Grundsätzlich können Sie zwei Ansätze für responsives Design verfolgen. Sie können mit Ihrer Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um Dinge zu verschieben, wenn der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layout hinzufügen, wenn der Viewport größer wird. Dieser zweite Ansatz wird als **Mobile-First** Responsive Design beschrieben und ist ziemlich oft der beste Ansatz, dem man folgen sollte.

Die Ansicht für die kleinsten Geräte ist oft eine einfache einzelne Spalte von Inhalten, so wie sie im normalen Fluss erscheint. Das bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte erstellen müssen - ordnen Sie Ihre Quelle gut und Sie erhalten standardmäßig ein lesbares Layout.

## Erstellen Ihres eigenen Mobile-First-Designs

Jetzt sind Sie dran; in diesem Tutorial-Abschnitt werden Sie Ihr eigenes grundlegendes Mobile-First Responsive Design aufbauen. Auf einer Produktionsseite haben Sie wahrscheinlich mehr Dinge, die innerhalb Ihrer Media Queries angepasst werden müssen, das Vorgehen wird jedoch genau dasselbe sein.

### Erste Schritte

Unser Ausgangspunkt ist ein HTML-Dokument mit etwas angewendetem CSS, um Hintergrundfarben zu den verschiedenen Teilen des Layouts hinzuzufügen.

Kopieren Sie zunächst den HTML-Code aus dem folgenden Block in einen Texteditor, speichern Sie ihn als HTML-Datei auf Ihrem Computer und öffnen Sie ihn in Ihrem Browser:

```html live-sample___walkthrough
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Media Queries: a simple mobile first design, step 1</title>
  <style>
    /* Add styles here */
  </style>
</head>
<div class="wrapper">
  <header>
    <nav>
      <ul>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Meet the team</a></li>
        <li><a href="">Blog</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <div class="content">
        <h1>Veggies!</h1>
        <p>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </p>

        <p>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
          courgette tatsoi pea sprouts fava bean collard greens dandelion okra
          wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </p>

        <p>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
          kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
          winter purslane kale. Celery potato scallion desert raisin horseradish
          spinach carrot soko. Lotus root water spinach fennel kombu maize
          bamboo shoot green bean swiss chard seakale pumpkin onion chickpea
          gram corn pea. Brussels sprout coriander water chestnut gourd swiss
          chard wakame kohlrabi beetroot carrot watercress. Corn amaranth
          salsify bunya nuts nori azuki bean chickweed potato bell pepper
          artichoke.
        </p>

        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant
          winter purslane fennel azuki bean earthnut pea sierra leone bologi
          leek soko chicory celtuce parsley jícama salsify.
        </p>
      </div>
      <aside class="related">
        <p>
          All these veggies are brought to you by the
          <a href="https://veggieipsum.com/">Veggie Ipsum generator</a>.
        </p>
      </aside>
    </article>
    <aside class="sidebar">
      <h2>External vegetable-based links</h2>
      <ul>
        <li>
          <a
            href="https://www.thekitchn.com/how-to-cook-broccoli-5-ways-167323">
            How to cook broccoli
          </a>
        </li>
        <li>
          <a href="https://www.bbcgoodfood.com/glossary/swiss-chard">
            Swiss Chard
          </a>
        </li>
        <li>
          <a
            href="https://www.bbcgoodfood.com/recipes/collection/christmas-parsnip">
            Christmas Parsnip Recipes
          </a>
        </li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024</p>
  </footer>
</div>
```

Die Quelle des Dokuments ist so geordnet, dass der Inhalt lesbar ist. Dies ist ein wichtiger erster Schritt, der sicherstellt, dass, wenn der Inhalt von einem Screenreader vorgelesen wird, er verständlich ist.

Die anfänglichen Styles für unser Beispiel sind wie folgt; kopieren Sie diese in Ihre HTML-Datei innerhalb der `<style></style>`-Tags und ersetzen Sie den Kommentar `/* Add styles here */`.

```css live-sample___walkthrough
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  margin: 2em auto;
  font:
    1em/1.3 Arial,
    Helvetica,
    sans-serif;
}

a:link,
a:visited {
  color: #333333;
}

nav ul,
aside ul {
  list-style: none;
  padding: 0;
}

nav a:link,
nav a:visited {
  background-color: rgb(207 232 220 / 20%);
  border: 2px solid rgb(79 185 227);
  text-decoration: none;
  display: block;
  padding: 10px;
  color: #333333;
  font-weight: bold;
}

nav a:hover {
  background-color: rgb(207 232 220 / 70%);
}

.related {
  background-color: rgb(79 185 227 / 30%);
  border: 1px solid rgb(79 185 227);
  padding: 10px;
}

.sidebar {
  background-color: rgb(207 232 220 / 50%);
  padding: 10px;
}

article {
  margin-bottom: 1em;
}
```

Wenn Sie das Layout im Responsive Design Mode in den DevTools ansehen oder Ihr Browserfenster auf eine mobilähnliche Breite verkleinern, sehen Sie, dass es als einfache mobile Ansicht der Seite ziemlich gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

### Erstellen eines zweispaltigen Layouts für mittlere Breiten

Ziehen Sie das Fenster breiter, bis Sie sehen können, dass die Zeilenlängen ziemlich lang werden; an diesem Punkt haben Sie Platz für die Navigation, die in einer horizontalen Linie angezeigt wird. Hier werden wir unsere erste Media Query hinzufügen. Wir verwenden `em`-Einheiten, da dies bedeutet, dass, wenn der Benutzer die Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, aber einem breiteren Viewport erfolgt, als bei jemandem mit einer kleineren Textgröße.

Fügen Sie dies am Ende Ihres CSS hinzu:

```css
@media screen and (width >= 40em) {
  article {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  nav ul {
    display: flex;
  }

  nav li {
    flex: 1;
  }
}
```

Dieses CSS bietet uns ein zweispaltiges Layout innerhalb des `<article>`, der Artikelinhalt und der verwandten Informationen im `<aside>`-Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Zeile zu stellen.

### Hinzufügen einer dritten Spalte für breitere Bildschirme

Lassen Sie uns weiterhin die Breite erweitern, bis wir das Gefühl haben, dass genügend Platz vorhanden ist, damit die Seitenleiste auch eine neue Spalte bildet. Innerhalb einer Media Query werden wir das `<main>`-Element in ein zweispaltiges Raster umwandeln. Wir müssen dann den {{cssxref("margin-bottom")}} des Artikels entfernen, damit sich die beiden Seitenleisten miteinander ausrichten, und wir fügen einen {{cssxref("border")}} an die Oberseite der Fußzeile hinzu. Typischerweise sind diese kleinen Anpassungen das, was Sie tun werden, um das Design an jedem Breakpoint gut aussehen zu lassen.

Fügen Sie dies am Ende Ihres CSS hinzu:

```css
@media screen and (width >= 70em) {
  main {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  article {
    margin-bottom: 0;
  }

  footer {
    border-top: 1px solid #cccccc;
    margin-top: 2em;
  }
}
```

Das Beispiel ist fertig. Wenn Sie das Ergebnis bei unterschiedlichen Breiten betrachten, können Sie sehen, wie das Design reagiert und abhängig von der verfügbaren Breite als eine Spalte, zwei Spalten oder drei Spalten funktioniert. Dies ist ein grundlegendes Beispiel für ein Mobile-First Responsive Design.

### viewport meta

Wenn Sie den HTML-Code im obigen Beispiel betrachten, sehen Sie, dass das folgende Element im Kopf des Dokuments enthalten ist:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist das [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) meta Tag — es existiert, um zu steuern, wie mobile Browser Inhalte rendern und sicherzustellen, dass sie Ihre Media Queries respektieren. Das obige zeigt mobilen Browsern an: "Rendern Sie den Inhalt nicht mit einem 980-Pixel-Viewport — rendern Sie ihn stattdessen mit der tatsächlichen Gerätebreite und legen Sie ein standardmäßiges Anfangsmaßstabniveau für bessere Konsistenz fest." Die Media Queries werden dann wie erwartet eingesetzt.

Weitere Informationen darüber, warum dies notwendig ist, finden Sie im Abschnitt [The viewport meta tag](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#the_viewport_meta_tag) im vorherigen Artikel.

## Brauchen Sie wirklich eine Media Query?

Flexbox und CSS Grid bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten ohne die Notwendigkeit einer Media Query zu erstellen: Es ist immer eine Überlegung wert, ob Sie wirklich eine brauchen. Beispielsweise möchten Sie vielleicht ein Set von Karten, die mindestens 200 Pixel breit sind, und so viele dieser 200 Pixel über die Hauptinhaltsspalte passen lassen, unabhängig davon, wie breit sie ist.

Dies kann mit CSS Grid erreicht werden, ganz ohne Media Queries:

```html live-sample___grid
<ul class="grid">
  <li>
    <h2>Card 1</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Card 2</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Card 3</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Card 4</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Card 5</h2>
    <p>…</p>
  </li>
</ul>
```

```css live-sample___grid
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.grid li {
  border: 1px solid #666666;
  padding: 10px;
}
```

{{EmbedLiveSample("grid", "", "350px")}}

Versuchen Sie, Ihr Browserfenster breiter und schmaler zu machen, um die Anzahl der Spalten-Änderungen zu sehen.

Der Vorteil dieser Methode ist, dass das Raster nicht auf die Viewport-Breite schaut, sondern auf die Breite, die es für diese Komponente zur Verfügung hat. Es mag seltsam erscheinen, einen Abschnitt über Media Queries mit dem Vorschlag abzuschließen, dass Sie möglicherweise gar keine benötigen! Dennoch werden Sie in der Praxis feststellen, dass eine gute Nutzung moderner Layout-Methoden, ergänzt durch Media Queries, die besten Ergebnisse liefert.

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einen Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: Responsive web design and media queries](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design).

## Zusammenfassung

In dieser Lektion haben Sie alles über Media Queries gelernt und auch entdeckt, wie man sie in der Praxis verwendet, um ein Mobile-First Responsive Design zu erstellen.

Sie könnten den Ausgangspunkt nutzen, den wir erstellt haben, um mehr Media Queries zu testen. Beispielsweise könnten Sie die Größe der Navigation ändern, wenn Sie feststellen, dass der Besucher einen groben Zeiger hat, indem Sie das Medienmerkmal `pointer` verwenden.

Sie könnten auch mit dem Hinzufügen verschiedener Komponenten experimentieren und herausfinden, ob die Ergänzung einer Media Query oder die Verwendung einer Layout-Methode wie Flexbox oder Grid der geeignetste Weg ist, um die Komponenten anzupassen. Sehr oft gibt es keinen richtigen oder falschen Weg — experimentieren Sie und sehen Sie, was am besten für Ihr Design und Ihren Inhalt funktioniert.

OK, wir sind fast am Ende dieses Moduls. Abschließend möchten wir Ihnen eine Herausforderung stellen, um Ihr umfassenderes Verständnis von CSS-Layout zu testen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}
