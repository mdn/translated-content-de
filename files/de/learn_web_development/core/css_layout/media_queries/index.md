---
title: Grundlagen von Media Queries
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{learnsidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}

Die **CSS Media Query** bietet Ihnen die Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen spezifizierten Regel entspricht, zum Beispiel "der Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie es ermöglichen, unterschiedliche Layouts je nach Größe des Viewports zu erstellen. Sie können jedoch auch genutzt werden, um andere Aspekte der Umgebung zu erkennen, in der Ihre Website läuft, beispielsweise ob der Benutzer einen Touchscreen anstelle einer Maus verwendet.

In dieser Lektion werden Sie zunächst die Syntax der Media Queries kennenlernen und dann ihre Anwendung anhand von Beispielen erlernen, wie man ein einfaches Design responsiv gestalten kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Grundlagen für das Styling</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schrift-Styling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundlagen der CSS-Layout-Konzepte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
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

- Einem Medientyp, der dem Browser sagt, für welche Art von Medien dieser Code gedacht ist (z.B. Druck oder Bildschirm).
- Einer Media-Expression, die eine Regel oder einen Test darstellt, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einem Satz von CSS-Regeln, der angewendet wird, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query wird den Body nur dann auf 12pt setzen, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der Medientyp hier unterscheidet sich vom sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.
> Es gab eine Reihe anderer Medientypen, die in der Media Queries Level 3-Spezifikation definiert wurden; diese wurden veraltet und sollten vermieden werden.
> Medientypen sind optional; wenn Sie keinen Medientyp in Ihrer Media Query angeben, wird die Media Query standardmäßig für alle Medientypen gelten.

### Regeln für Media Features

Nach der Spezifikation des Typs können Sie dann ein Media Feature mit einer Regel anvisieren. Die folgenden Beispiele zeigen, wie verschiedene Media Queries verwendet werden können. Um die `width` Ihres Bildschirms zu ändern, ändern Sie die Größe Ihres Browsers oder drehen Sie Ihr Handgerät. Alternativ können Sie die responsiven Größenfunktionen Ihres Browser-Entwicklerwerkzeugs verwenden, um unterschiedliche Gerätebreiten zu simulieren.

#### Breite und Höhe

Das Feature, das wir am häufigsten zum Erstellen responsiver Designs erkennen (und das umfassende Browserunterstützung hat), ist die Viewport-Breite. Wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite liegt – oder eine genaue Breite – unter Verwendung der Media Features `min-width`, `max-width` und `width`.

Diese Features werden verwendet, um Layouts zu erstellen, die auf unterschiedliche Bildschirmgrößen reagieren. Um zum Beispiel die Textfarbe des Bodys rot zu setzen, wenn der Viewport genau 600 Pixel beträgt, würden Sie die folgende Media Query verwenden.

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

Die Media Features `width` (und `height`) können als Bereiche verwendet werden und daher mit `min-` oder `max-` versehen werden, um anzugeben, dass der angegebene Wert ein Minimum oder Maximum ist. Um zum Beispiel die Farbe blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

In der Praxis ist die Verwendung von Mindest- oder Höchstwerten weitaus nützlicher für responsives Design, sodass Sie selten `width` oder `height` allein sehen werden.

Es gibt viele andere Media Features, auf die Sie testen können, obwohl einige der neueren Features, die in den Levels 4 und 5 der Spezifikation für Media Queries eingeführt wurden, nur begrenzte Browserunterstützung haben. Jedes Feature ist auf MDN zusammen mit Informationen zur Browserunterstützung dokumentiert, und Sie finden eine vollständige Liste unter [Verwendung von Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

#### Orientierung

Ein gut unterstütztes Media Feature ist `orientation`, das es uns ermöglicht, den Hochformat- oder Querformatmodus zu testen. Um die Textfarbe des Bodys zu ändern, wenn sich das Gerät im Querformat befindet, verwenden Sie die folgende Media Query.

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

Eine standardmäßige Desktop-Ansicht hat eine Querformatausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat betrachtet wird. Durch das Testen der Ausrichtung können Sie ein Layout erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Eingabegeräten

Als Teil der Spezifikation von Level 4 wurde das Media Feature `hover` eingeführt. Dieses Feature bedeutet, dass Sie testen können, ob der Benutzer die Fähigkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er irgendeine Art von Eingabegerät verwendet; Touchscreen und Tastenbedienung schweben nicht.

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

Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir entscheiden, sie verfügbar zu machen, wenn ein Link überfahren wird.

Ebenfalls im Level 4 ist das Media Feature `pointer`. Dieses kann drei mögliche Werte annehmen, `none`, `fine` und `coarse`. Ein `fine` Pointer ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, ein kleines Gebiet präzise anzuvisieren. Ein `coarse` Pointer ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; vielleicht navigiert er nur über die Tastatur oder per Sprachsteuerung.

Mit `pointer` können Sie besser gestaltete Benutzeroberflächen entwerfen, die auf die Art der Interaktion reagieren, die der Benutzer mit einem Bildschirm hat. Zum Beispiel könnten Sie größere Trefferbereiche erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

### Verwendung der Bereichs-Syntax

Ein häufiger Anwendungsfall ist, zu prüfen, ob die Breite des Viewports zwischen zwei Werten liegt:

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

In diesem Fall werden Stile angewendet, wenn die Breite des Viewports zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Mit all den verschiedenen möglichen Media Queries möchten Sie sie möglicherweise kombinieren oder Listen von Abfragen erstellen – jede davon könnte zutreffen.

### "and"-Logik bei Media Queries

Um Media Features zu kombinieren, können Sie `and` auf ähnliche Weise verwenden, wie wir `and` oben verwendet haben, um einen Medientyp und ein Feature zu kombinieren. Zum Beispiel könnten wir für eine `min-width` und `orientation` testen. Der Text des Bodys wird nur dann blau, wenn der Viewport mindestens 600 Pixel breit ist und das Gerät sich im Querformat befindet.

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

### "or"-Logik bei Media Queries

Wenn Sie eine Reihe von Abfragen haben, von denen jede zutreffen könnte, können Sie diese Abfragen durch ein Komma trennen. Im folgenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER das Gerät sich im Querformat befindet. Wenn eines dieser Dinge zutrifft, entspricht die Abfrage.

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

### "not"-Logik bei Media Queries

Sie können eine gesamte Media Query mit dem `not`-Operator negieren. Dies kehrt die Bedeutung der gesamten Media Query um. Im nächsten Beispiel wird der Text daher nur dann blau, wenn die Ausrichtung Hochformat ist.

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

Sie können `not` auch verwenden, um bestimmte Ausdrücke zu negieren.

```css
@media (not (width < 600px)) and (not (width > 1000px)) {
  body {
    color: blue;
  }
}
```

Dies wird die Stile anwenden, wenn die Breite des Viewports zwischen 600 und 1000 Pixel liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Wie man Breakpoints auswählt

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen zu berücksichtigen. Es wurden Listen der Größen der Bildschirme beliebter Telefone und Tablets veröffentlicht, um Designs erstellen zu können, die diesen Viewports genau entsprechen.

Es gibt jetzt viel zu viele Geräte mit einer großen Vielfalt an Größen, um das machbar zu halten. Das bedeutet, dass anstelle von spezifischen Größen für alle Designs auf eine Änderung des Designs an dem Punkt abzielt werden sollte, an dem der Inhalt auf irgendeine Weise bricht. Möglicherweise werden die Zeilenlängen viel zu lang oder eine outgeschnittene Seitenleiste wird eingequetscht und schwer zu lesen. Das ist der Punkt, an dem Sie eine Media Query verwenden möchten, um das Design zu einem besseren für den verfügbaren Platz zu ändern. Dieser Ansatz bedeutet, dass es keine Rolle spielt, welche genaue Dimension das verwendete Gerät hat, jede Reichweite wird abgedeckt. Die Punkte, an denen eine Media Query eingeführt wird, sind als **Breakpoints** bekannt.

Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in den Firefox DevTools ist sehr hilfreich, um herauszufinden, wo diese Breakpoints sein sollten. Sie können das Viewport ganz einfach kleiner und größer machen, um zu sehen, wo der Inhalt durch die Hinzufügung einer Media Query und das Verfeinern des Designs verbessert werden könnte.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in den Firefox DevTools.](rwd-mode.png)

## Aktives Lernen: Mobile First Responsive Design

Im Großen und Ganzen können Sie beim responsiven Design zwei Ansätze verfolgen. Sie können mit Ihrer Desktop- oder weitesten Ansicht beginnen und dann Breakpoints hinzufügen, um Dinge zu verschieben, wenn der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht anfangen und Layout hinzufügen, wenn der Viewport größer wird. Dieser zweite Ansatz wird als **Mobile First**-Design beschrieben und ist oft der beste Ansatz.

In der Ansicht für die kleinsten Geräte gibt es häufig eine einfache Einzelspalte von Inhalten, so wie sie im normalen Fluss erscheint. Das bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte machen müssen – wenn Sie Ihre Quelle gut organisieren, haben Sie standardmäßig ein lesbares Layout.

Der folgende Durchgang führt Sie durch diesen Ansatz mit einem sehr einfachen Layout. Auf einer Produktionsseite haben Sie wahrscheinlich mehr Dinge, die innerhalb Ihrer Media Queries angepasst werden müssen, der Ansatz wäre jedoch genau derselbe.

### Durchgang: Ein Mobile-First Layout

Unser Ausgangspunkt ist ein HTML-Dokument mit etwas CSS, um Hintergrundfarben zu den verschiedenen Teilen des Layouts hinzuzufügen. Sie können den Code aus den folgenden Blöcken in einen Texteditor kopieren, ihn als HTML-Datei auf Ihrem Computer speichern und in Ihrem Browser öffnen oder auf „Play“ klicken, um den Code im MDN Playground darzustellen und zu bearbeiten:

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

Die Quelle des Dokuments ist so geordnet, dass der Inhalt lesbar ist. Dies ist ein wichtiger erster Schritt, der sicherstellt, dass der Inhalt, wäre er von einem Screenreader vorgelesen, verständlich wäre. Hier sind einige gute Anfangsstile, mit denen wir beginnen können:

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

Wenn wir das Layout im Responsive Design Mode in den DevTools betrachten, sehen wir, dass es als einfaches Mobilansicht der Website ziemlich gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

Von diesem Punkt an beginnen Sie, die Ansicht des Responsive Design Mode zu erweitern, bis Sie feststellen, dass die Zeilenlängen ziemlich lang werden und Platz für die Navigation in einer horizontalen Linie vorhanden ist. Hier werden wir unsere erste Media Query einfügen. Wir verwenden `ems`, da dies bedeutet, dass, wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, aber einem breiteren Viewport, erfolgt, als bei jemandem mit einer kleineren Textgröße.

Fügen Sie Folgendes zu Ihrem CSS hinzu:

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

Dieses CSS gibt uns ein Zwei-Spalten-Layout innerhalb des Artikels, des Artikelinhalts und der verwandten Informationen im `aside`-Element. Außerdem haben wir `flexbox` verwendet, um die Navigation in eine Reihe zu bringen.

Erweitern wir die Breite weiter, bis wir das Gefühl haben, dass genug Platz vorhanden ist, damit die Seitenleiste ebenfalls eine neue Spalte bildet. Innerhalb einer Media Query machen wir das `main`-Element zu einem zwei-spaltigen Raster. Wir müssen dann den `margin-bottom` auf dem `article` entfernen, damit die beiden Seitenleisten aufeinander ausgerichtet sind, und wir fügen dem `footer` einen `border` hinzu. Diese kleinen Anpassungen sind typischerweise die Art von Dingen, die Sie tun, um das Design an jedem Breakpoint gut aussehen zu lassen.

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

Wenn Sie sich das Ergebnis bei unterschiedlichen Breiten ansehen, können Sie sehen, wie das Design als Einzelspalte, zwei Spalten oder drei Spalten funktioniert, abhängig von der verfügbaren Breite. Dies ist ein grundlegendes Beispiel für ein Mobile-First-Responsive-Design.

## Das Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode im obigen Beispiel ansehen, sehen Sie das folgende Element im Kopf des Dokuments:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist das [Viewport-Meta-Tag](/de/docs/Web/HTML/Viewport_meta_tag) — es existiert, um zu steuern, wie mobile Browser Inhalte rendern. Dies ist notwendig, da die meisten mobilen Browser standardmäßig über ihre Viewport-Breite lügen. Nicht-responsive Seiten sehen in einem schmalen Viewport oft wirklich schlecht aus, daher rendern mobile Browser die Seite meist mit einer Viewport-Breite, die breiter ist als die tatsächliche Gerätebreite (in der Regel 980 Pixel), und verkleinern dann das gerenderte Ergebnis, sodass es in die Anzeige passt.

Das ist alles gut und schön, aber es bedeutet, dass responsive Seiten nicht wie erwartet funktionieren. Wenn die Viewport-Breite als 980 Pixel angegeben wird, dann werden mobile Layouts (zum Beispiel erstellt mit einer Media Query von `@media screen and (max-width: 600px) { }`) nicht wie erwartet gerendert.

Um dies zu beheben, weist das Einfügen eines Viewport-Meta-Tags wie das oben auf Ihrer Seite den Browser an: „Rendere den Inhalt nicht mit einem 980 Pixel Viewport — verwende stattdessen die tatsächliche Gerätebreite und setze ein standardmäßiges Anfangsmaßstabniveau für eine bessere Konsistenz.“ Die Media Queries greifen dann wie erwartet.

Es gibt eine Reihe anderer Optionen, die Sie im `content`-Attribut des Viewport-Meta-Tags angeben können — siehe [Verwendung des Viewport-Meta-Tags zur Steuerung von Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag) für weitere Details.

## Brauchen Sie wirklich eine Media Query?

Flexbox, Grid und Mehrspalten-Layout bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten zu erstellen, ohne dass eine Media Query erforderlich ist. Es lohnt sich immer zu überlegen, ob diese Layoutmethoden erreichen können, was Sie möchten, ohne Media Queries hinzuzufügen. Zum Beispiel möchten Sie vielleicht ein Set von Karten, die mindestens 200 Pixel breit sind, mit so vielen von diesen 200 Pixeln, wie in den Hauptartikel passen. Dies kann mit Grid-Layout erreicht werden, ganz ohne Media Queries.

Dies könnte erreicht werden mit:

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

Machen Sie den Bildschirm breiter und schmaler, um die Anzahl der Spaltentracken zu ändern. Das Schöne an dieser Methode ist, dass das Grid nicht auf die Viewport-Breite schaut, sondern auf die Breite, die für diese Komponente verfügbar ist. Es mag seltsam erscheinen, eine Sektion über Media Queries mit dem Vorschlag abzuschließen, dass Sie möglicherweise überhaupt keine benötigen! In der Praxis werden Sie jedoch feststellen, dass eine gute Nutzung moderner Layoutmethoden, ergänzt mit Media Queries, die besten Ergebnisse liefert.

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einen Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Responsive Webdesign und Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/rwd_skills).

## Zusammenfassung

In dieser Lektion haben Sie gelernt, was Media Queries sind und auch entdeckt, wie man sie in der Praxis anwendet, um ein Mobile-First-Responsive-Design zu erstellen.

Sie könnten den von uns erstellten Ausgangspunkt nutzen, um weitere Media Queries zu testen. Zum Beispiel könnten Sie die Größe der Navigation ändern, wenn Sie erkennen, dass der Besucher einen groben Zeiger hat, indem Sie das `pointer`-Media-Feature verwenden.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und sehen, ob die Hinzufügung einer Media Query oder die Verwendung einer Layoutmethode wie `flexbox` oder `grid` der geeignetste Weg ist, um die Komponenten responsive zu machen. Sehr oft gibt es keinen richtigen oder falschen Weg — Sie sollten experimentieren und sehen, was für Ihr Design und Ihre Inhalte am besten funktioniert.

OK, wir sind fast am Ende dieses Moduls. Lassen Sie uns mit einer Herausforderung abschließen, um Ihr Verständnis zu testen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}
