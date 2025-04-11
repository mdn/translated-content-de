---
title: Grundlagen von Media Queries
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{learnsidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}

Die **CSS Media Query** ermöglicht es Ihnen, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen angegebenen Regel entspricht, z.B. "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie es Ihnen ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. Sie können jedoch auch verwendet werden, um andere Merkmale der Umgebung, in der Ihre Website läuft, zu erkennen, z.B. ob der Benutzer einen Touchscreen anstelle einer Maus verwendet.

In dieser Lektion lernen Sie zunächst die Syntax von Media Queries kennen und verwenden sie dann in Beispielen, um zu zeigen, wie ein grundlegendes Design responsiv gestaltet werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturierung von Inhalten mit HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundlegende Konzepte des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Syntax von Media Queries.</li>
          <li>Die gängigen Typen von Media Queries.</li>
          <li>Verwendung von `width`- und `height`-Media Queries zur Erstellung responsiver Layouts.</li>
          <li>Auswahl von Breakpoints.</li>
          <li>Verwendung von Media Queries zur Implementierung eines Mobile-First-Designs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen von Media Queries

Die einfachste Media Query-Syntax sieht so aus:

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

Sie besteht aus:

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medien dieser Code gedacht ist (z.B. Druck oder Bildschirm).
- Einer Medienausdruck, welche eine Regel oder ein Test ist, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einer Reihe von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query setzt den Textkörper nur dann auf 12pt, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der Medientyp hier unterscheidet sich von dem sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.
> Im Level 3 Media Queries-Spezifikation gab es eine Reihe weiterer Medientypen; diese wurden veraltet und sollten vermieden werden.
> Medientypen sind optional; wenn Sie in Ihrer Media Query keinen Medientyp angeben, wird die Media Query standardmäßig für alle Medientypen angewendet.

### Regeln für Medienfunktionen

Nach der Angabe des Typs können Sie dann mit einer Regel eine Medienfunktion anvisieren.
Die folgenden Beispiele zeigen, wie verschiedene Media Queries verwendet werden können.
Um die `width` Ihres Bildschirms zu ändern, ändern Sie die Größe Ihres Browsers oder drehen Sie Ihr Handgerät. Alternativ können Sie die responsiven Größeneigenschaften Ihrer Browser-Entwicklungstools verwenden, um verschiedene Gerätebreiten zu simulieren.

#### Breite und Höhe

Die Funktion, die wir am häufigsten identifizieren, um responsive Designs zu erstellen, und die eine weit verbreitete Browser-Unterstützung hat, ist die Viewport-Breite. Wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite liegt – oder eine exakte Breite hat – indem wir die Medienfunktionen `min-width`, `max-width` und `width` verwenden.

Diese Funktionen werden verwendet, um Layouts zu erstellen, die auf unterschiedliche Bildschirmgrößen reagieren. Um zum Beispiel die Textfarbe des Körpers auf Rot zu setzen, wenn der Viewport genau 600 Pixel beträgt, würden Sie die folgende Media Query verwenden.

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

Die `width` (und `height`)-Medienfunktionen können als Bereiche verwendet werden und daher mit `min-` oder `max-` versehen werden, um anzuzeigen, ob der angegebene Wert ein Minimum oder ein Maximum ist. Um z.B. die Farbe blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

In der Praxis ist die Verwendung von Minimal- oder Maximalwerten für responsives Design viel nützlicher, sodass Sie eher selten `width` oder `height` alleine sehen werden.

Es gibt viele weitere Medienfunktionen, die Sie überprüfen können, obwohl einige der neueren Funktionen, die in den Levels 4 und 5 der Media Queries-Spezifikation eingeführt wurden, nur eine begrenzte Browser-Unterstützung haben. Jede Funktion ist auf MDN zusammen mit Informationen zur Browser-Unterstützung dokumentiert, und Sie finden eine vollständige Liste unter [Verwendung von Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

#### Ausrichtung

Eine gut unterstützte Medienfunktion ist `orientation`, die es uns ermöglicht, auf Hoch- oder Querformat zu prüfen. Um die Textfarbe des Körpers zu ändern, wenn das Gerät sich im Querformat befindet, verwenden Sie die folgende Media Query.

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

Eine Standard-Desktopansicht hat eine Querformatausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, kann möglicherweise nicht genauso gut funktionieren, wenn es auf einem Telefon oder Tablet im Hochformat angezeigt wird. Das Testen auf die Ausrichtung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Im Rahmen der Level 4-Spezifikation wurde die Medienfunktion `hover` eingeführt. Diese Funktion bedeutet, dass Sie überprüfen können, ob der Benutzer die Möglichkeit hat, über ein Element zu gleiten, was im Wesentlichen bedeutet, dass er eine Art von Zeigegerät verwendet; Touchscreen und Tastaturnavigation gleiten nicht.

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

Wenn wir wissen, dass der Benutzer nicht gleiten kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Für Benutzer, die gleiten können, könnten wir sie verfügbar machen, wenn ein Link überfahren wird.

Ebenfalls in Level 4 befindet sich die Medienfunktion `pointer`. Sie hat drei mögliche Werte: `none`, `fine` und `coarse`. Ein `fine`-Pointer ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, ein kleines Gebiet präzise anzuvisieren. Ein `coarse`-Pointer ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; vielleicht navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Sie könnten beispielsweise größere Trefferbereiche erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

### Verwendung der Bereichssyntax

Ein häufiger Fall ist die Überprüfung, ob die Viewport-Breite zwischen zwei Werten liegt:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

Wenn Sie die Lesbarkeit verbessern möchten, können Sie die "Bereich"-Syntax verwenden:

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

In diesem Fall werden die Stile angewendet, wenn die Viewport-Breite zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Bei all den verschiedenen möglichen Media Queries möchten Sie möglicherweise diese kombinieren oder Listen von Queries erstellen – jede davon könnte zutreffen.

### "and"-Logik in Media Queries

Um Medienfunktionen zu kombinieren, können Sie `and` verwenden, genau wie wir oben `and` verwendet haben, um einen Medientyp und eine Funktion zu kombinieren. Zum Beispiel möchten wir möglicherweise sowohl `min-width` als auch `orientation` testen. Der Textkörper wird nur dann blau sein, wenn der Viewport mindestens 600 Pixel breit ist und das Gerät im Querformat steht.

```css live-sample___and
@media screen and (min-width: 600px) and (orientation: landscape) {
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

### "or"-Logik in Media Queries

Wenn Sie eine Reihe von Queries haben, von denen jede zutreffen könnte, können Sie diese Queries durch Kommas trennen. Im unten stehenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER das Gerät im Querformat ist. Wenn eine dieser Bedingungen zutrifft, stimmt die Query.

```css live-sample___or
@media screen and (min-width: 600px), screen and (orientation: landscape) {
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

### "not"-Logik in Media Queries

Sie können eine gesamte Media Query negieren, indem Sie den `not`-Operator verwenden. Dies kehrt die Bedeutung der gesamten Media Query um. Daher wird im nächsten Beispiel der Text nur dann blau sein, wenn die Ausrichtung Hochformat ist.

```css live-sample___not
@media not (orientation: landscape) {
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

Sie können `not` auch verwenden, um spezifische Ausdrücke zu negieren.

```css
@media (not (width < 600px)) and (not (width > 1000px)) {
  body {
    color: blue;
  }
}
```

Dies wird die Stile anwenden, wenn die Viewport-Breite zwischen 600 und 1000 Pixeln liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Wie Sie Breakpoints auswählen

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen anzuvisieren. Listen der Größen der Bildschirme von beliebten Handys und Tablets wurden veröffentlicht, damit Designs erstellt werden konnten, die genau auf diese Viewports passen.

Inzwischen gibt es viel zu viele Geräte mit einer großen Vielfalt an Größen, um dies machbar zu machen. Dies bedeutet, dass anstatt spezifische Größen für alle Designs anzuvisieren, ein besserer Ansatz darin besteht, das Design an dem Punkt zu ändern, an dem der Inhalt in irgendeiner Weise zu brechen beginnt. Vielleicht werden die Zeilenlängen zu lang, oder eine eingerückte Seitenleiste wird eingequetscht und schwer lesbar. An diesem Punkt möchten Sie eine Media Query verwenden, um das Design an einen besseren für den verfügbaren Raum anzupassen. Dieser Ansatz bedeutet, dass es keine Rolle spielt, welche genauen Abmessungen das verwendete Gerät hat, jede Reichweite wird berücksichtigt. Die Punkte, an denen eine Media Query eingeführt wird, werden als **Breakpoints** bezeichnet.

Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in den Firefox-Entwicklungstools ist sehr nützlich, um herauszufinden, wo diese Breakpoints liegen sollten. Sie können ganz einfach den Viewport kleiner und größer machen, um zu sehen, wo der Inhalt durch das Hinzufügen einer Media Query und das Anpassen des Designs verbessert würde.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in den Firefox-Entwicklungstools.](rwd-mode.png)

## Aktives Lernen: Mobile-First-Responsive-Design

Im Großen und Ganzen können Sie zwei Ansätze für ein responsives Design wählen. Sie können mit Ihrer Desktop- oder weitesten Ansicht beginnen und dann Breakpoints hinzufügen, um die Dinge neu anzuordnen, wenn der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layout hinzufügen, während der Viewport größer wird. Dieser zweite Ansatz wird als **Mobile-First**-Responsive-Design bezeichnet und ist oft der beste Ansatz, dem Sie folgen sollten.

Die Ansicht für die kleinsten Geräte ist oft eine einfache einspaltige Inhaltsspalte, so wie sie im normalen Fluss erscheint. Das bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte durchführen müssen – ordnen Sie Ihren Quellcode gut an und Sie haben standardmäßig ein lesbares Layout.

Das untenstehende Schritt-für-Schritt führt Sie durch diesen Ansatz mit einem sehr einfachen Layout. Auf einer Produktionsseite werden Sie wahrscheinlich mehr Dinge haben, die Sie innerhalb Ihrer Media Queries anpassen müssen, jedoch wäre der Ansatz exakt derselbe.

### Schritt-für-Schritt: Ein Mobile-First-Layout

Unser Ausgangspunkt ist ein HTML-Dokument mit einigen CSS, um Hintergrundfarben für verschiedene Teile des Layouts hinzuzufügen.
Sie können den Code aus den untenstehenden Blöcken in einen Texteditor kopieren, als HTML-Datei auf Ihrem Computer speichern und in Ihrem Browser öffnen oder auf "Play" klicken, um den Code im MDN Playground zu rendern und zu bearbeiten:

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

Die Quelle des Dokuments ist so geordnet, dass der Inhalt lesbar ist. Dies ist ein wichtiger erster Schritt und einer, der sicherstellt, dass, wenn der Inhalt von einem Screenreader vorgelesen wird, er verständlich ist.
Hier sind einige gute Anfangsstile, mit denen wir beginnen können:

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
  color: #333;
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
  color: #333;
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

Wenn wir das Layout im Responsive Design Mode in den Entwicklungstools betrachten, sehen wir, dass es als einfache mobile Ansicht der Website recht gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

Von diesem Punkt aus beginnen Sie, die Ansicht des Responsive Design Mode breiter zu ziehen, bis Sie sehen, dass die Zeilenlängen ziemlich lang werden und wir Platz haben, damit die Navigation in einer horizontalen Linie angezeigt wird. Hier werden wir unsere erste Media Query hinzufügen. Wir verwenden ems, da dies bedeutet, dass, wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, aber einem breiteren Viewport erfolgt, als bei jemandem mit einer kleineren Textgröße.

Fügen Sie das Folgende zu Ihrem CSS hinzu:

```css
@media screen and (min-width: 40em) {
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

Dieses CSS gibt uns ein zweispaltiges Layout innerhalb des Artikels, bestehend aus dem Artikelinhalt und verwandten Informationen im Aside-Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Zeile zu setzen.

Lassen Sie uns weiterhin die Breite vergrößern, bis wir das Gefühl haben, dass es genug Platz gibt, damit die Seitenleiste auch eine neue Spalte bildet. Innerhalb einer Media Query machen wir das Main-Element zu einem zweispaltigen Raster. Dann müssen wir den {{cssxref("margin-bottom")}} auf dem Artikel entfernen, damit die beiden Seitenleisten einander entsprechen, und wir werden dem Footer {{cssxref("border")}} hinzufügen. In der Regel sind diese kleinen Anpassungen die Art von Dingen, die Sie vornehmen, um das Design an jedem Breakpoint gut aussehen zu lassen.

Fügen Sie das folgende CSS zu Ihren Stilen hinzu:

```css
@media screen and (min-width: 70em) {
  main {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  article {
    margin-bottom: 0;
  }

  footer {
    border-top: 1px solid #ccc;
    margin-top: 2em;
  }
}
```

Wenn Sie das Ergebnis bei unterschiedlichen Breiten betrachten, können Sie sehen, wie das Design als einzelne Spalte, zwei Spalten oder drei Spalten funktioniert, abhängig von der verfügbaren Breite. Dies ist ein einfaches Beispiel für ein Mobile-First-Responsive-Design.

## Das Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode im obigen Beispiel anschauen, werden Sie sehen, dass das folgende Element im Kopf des Dokuments enthalten ist:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist das [Viewport-Meta-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element) — es existiert als eine Möglichkeit, zu kontrollieren, wie mobile Browser Inhalte rendern. Dies ist notwendig, weil die meisten mobilen Browser standardmäßig über ihre Viewport-Breite lügen. Nicht-responsive Seiten sehen häufig wirklich schlecht aus, wenn sie in einem engen Viewport gerendert werden, daher rendern mobile Browser die Seite normalerweise mit einer Viewport-Breite, die breiter ist als die tatsächliche Gerätebreite (üblicherweise 980 Pixel), und verkleinern dann das gerenderte Ergebnis, damit es in die Anzeige passt.

Dies ist ganz in Ordnung, aber es bedeutet, dass responsive Seiten nicht wie erwartet funktionieren. Wenn die Viewport-Breite als 980 Pixel angegeben wird, werden mobile Layouts (zum Beispiel durch eine Media Query von `@media screen and (max-width: 600px) { }` erstellt) nicht wie erwartet gerendert.

Um dies zu beheben, sagt Ihnen ein Viewport-Meta-Tag wie das oben auf Ihrer Seite dem Browser "Rendern Sie den Inhalt nicht mit einem 980-Pixel-Viewport — rendern Sie ihn stattdessen mit der tatsächlichen Gerätebreite und stellen Sie ein standardmäßiges Anfangsskalierungsniveau für eine bessere Konsistenz ein." Die Media Queries treten dann wie erwartet in Kraft.

Es gibt eine Reihe weiterer Optionen, die Sie in der `content`-Attribute des Viewport-Meta-Tags hinzufügen können — siehe [Using the viewport meta tag to control layout on mobile browsers](/de/docs/Web/HTML/Guides/Viewport_meta_element) für weitere Details.

## Brauchen Sie wirklich eine Media Query?

Flexbox, Grid und Mehrspalten-Layout bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten zu erstellen, ohne dass eine Media Query erforderlich ist. Es lohnt sich immer, zu überlegen, ob diese Layout-Methoden das gewünschte Ergebnis auch ohne Media Queries erreichen können. Zum Beispiel möchten Sie möglicherweise eine Reihe von Karten haben, die mindestens 200 Pixel breit sind, mit so vielen von diesen 200 Pixeln, die in den Hauptartikel passen. Dies kann mit dem Grid-Layout erreicht werden, ohne überhaupt Media Queries zu verwenden.

Dies könnte erreicht werden durch:

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
  border: 1px solid #666;
  padding: 10px;
}
```

{{EmbedLiveSample("grid", "", "350px")}}

Machen Sie den Bildschirm breiter und schmaler, um zu sehen, wie sich die Anzahl der Spalten-Spuren ändert. Das Schöne an dieser Methode ist, dass das Raster nicht auf die Viewport-Breite schaut, sondern auf die Breite, die es für diese Komponente zur Verfügung hat. Es mag merkwürdig erscheinen, ein Kapitel über Media Queries damit abzuschließen, dass Sie möglicherweise überhaupt keine brauchen! In der Praxis werden Sie jedoch feststellen, dass die gute Nutzung moderner Layout-Methoden, verbessert durch Media Queries, die besten Ergebnisse liefert.

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einen Test finden, um zu überprüfen, dass Sie diese Informationen beibehalten haben, bevor Sie fortfahren – siehe [Test your skills: Responsive web design and media queries](/de/docs/Learn_web_development/Core/CSS_layout/rwd_skills).

## Zusammenfassung

In dieser Lektion haben Sie über Media Queries gelernt und auch entdeckt, wie man sie in der Praxis verwendet, um ein Mobile-First-Responsive-Design zu erstellen.

Sie könnten den Ausgangspunkt, den wir erstellt haben, verwenden, um mehr Media Queries zu testen. Zum Beispiel könnten Sie vielleicht die Größe der Navigation ändern, wenn Sie feststellen, dass der Besucher einen groben Zeiger hat, und die `pointer`-Medienfunktion verwenden.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und sehen, ob die Ergänzung einer Media Query oder die Verwendung einer Layout-Methode wie Flexbox oder Grid der geeignetste Weg ist, um die Komponenten responsive zu machen. Sehr oft gibt es kein richtig oder falsch – Sie sollten experimentieren und sehen, was am besten für Ihr Design und Ihren Inhalt funktioniert.

OK, wir sind fast am Ende dieses Moduls. Lassen Sie uns mit einer Herausforderung abschließen, um Ihr Verständnis zu testen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}
