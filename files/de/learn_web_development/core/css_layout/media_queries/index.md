---
title: Grundlagen der Media Queries
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}

Die **CSS Media Query** bietet Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen festgelegten Regel entspricht, z. B. "Viewport ist breiter als 480 Pixel". Media Queries sind ein wichtiger Bestandteil des responsiven Webdesigns, da sie Ihnen ermöglichen, unterschiedliche Layouts je nach Größe des Viewports zu erstellen. Sie können jedoch auch verwendet werden, um andere Aspekte der Umgebung, in der Ihre Seite läuft, zu erkennen, z. B. ob der Benutzer einen Touchscreen anstelle einer Maus verwendet.

In dieser Lektion lernen Sie zuerst die Syntax von Media Queries kennen und nutzen diese anschließend in Beispielen, um zu zeigen, wie ein einfaches Design responsiv gestaltet werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftstile</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Syntax von Media Queries.</li>
          <li>Die gängigen Typen von Media Queries.</li>
          <li>Verwendung von <code>width</code> und <code>height</code> Media Queries zur Erstellung responsiver Layouts.</li>
          <li>Auswahl von Breakpoints.</li>
          <li>Verwendung von Media Queries zur Umsetzung eines Mobile-First-Designs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen der Media Query

Die einfachste Media Query-Syntax sieht folgendermaßen aus:

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

Sie besteht aus:

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medien dieser Code gedacht ist (z. B. Druck, oder Bildschirm).
- Einem Mediensausdruck, der eine Regel oder einen Test darstellt, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einer Reihe von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query setzt den Body nur dann auf 12pt, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der Medientyp hier unterscheidet sich von dem sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.
> In der Level 3 Media Queries-Spezifikation wurden eine Reihe weiterer Medientypen definiert; diese wurden inzwischen veraltet und sollten vermieden werden.
> Medientypen sind optional; wenn Sie keinen Medientyp in Ihrer Media Query angeben, wird die Media Query standardmäßig für alle Medientypen angewendet.

### Medienmerkmal-Regeln

Nach der Angabe des Typs können Sie mit einer Regel auf ein Medienmerkmal abzielen. Die folgenden Beispiele zeigen, wie verschiedene Media Queries verwendet werden können. Um die `width` Ihres Bildschirms zu ändern, passen Sie die Größe Ihres Browsers an oder drehen Sie Ihr Handgerät. Alternativ können Sie die Funktionen zur responsiven Größenanpassung Ihrer Browser-Entwicklerwerkzeuge verwenden, um verschiedene Gerätebreiten zu simulieren.

#### Breite und Höhe

Das Merkmal, das wir am häufigsten erkennen, um responsive Designs zu erstellen (und das breite Browserkompatibilität bietet), ist die Viewport-Breite. Wir können CSS anwenden, wenn der Viewport eine bestimmte Breite über- oder unterschreitet — oder eine genaue Breite hat —, indem wir die Medienmerkmale `min-width`, `max-width` und `width` verwenden.

Diese Merkmale werden verwendet, um Layouts zu erstellen, die auf verschiedene Bildschirmgrößen reagieren. Beispielsweise können Sie den Textkörper auf rot setzen, wenn der Viewport genau 600 Pixel breit ist, indem Sie die folgende Media Query verwenden.

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

Die Medienmerkmale `width` (und `height`) können als Bereiche verwendet werden und daher mit `min-` oder `max-` versehen werden, um anzuzeigen, dass der gegebene Wert ein Minimum oder ein Maximum ist. Beispielsweise können Sie die Farbe blau einstellen, wenn der Viewport 600 Pixel oder schmaler ist, indem Sie `max-width` verwenden:

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

In der Praxis ist die Verwendung von Minimal- oder Maximalwerten für responsives Design viel nützlicher, sodass Sie selten `width` oder `height` allein sehen werden.

Es gibt viele andere Medienmerkmale, die Sie testen können, obwohl einige der neueren Merkmale, die in den Spezifikationen von Level 4 und 5 der Media Queries eingeführt wurden, nur begrenzte Browserunterstützung haben. Jedes Merkmal ist auf MDN zusammen mit Informationen zur Browserunterstützung dokumentiert, und Sie finden eine vollständige Liste unter [Verwendung von Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

#### Ausrichtung

Ein gut unterstütztes Medienmerkmal ist `orientation`, das es uns ermöglicht, den Portrait- oder Landschaftsmodus zu testen. Um die Textfarbe zu ändern, wenn das Gerät im Querformat ist, verwenden Sie die folgende Media Query.

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

Ein standardmäßiger Desktop-Ansicht hat eine Landschaftsausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat angezeigt wird. Das Testen der Ausrichtung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Im Rahmen der Level-4-Spezifikation wurde das Medienmerkmal `hover` eingeführt. Dieses Merkmal bedeutet, dass Sie testen können, ob der Benutzer die Möglichkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er eine Art Zeigegerät verwendet; Touchscreen- und Tastaturnavigation schweben nicht.

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

Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir diese verfügbar machen, wenn über einen Link geschwebt wird.

Ebenfalls in Level 4 ist das Medienmerkmal `pointer`. Es hat drei mögliche Werte, `none`, `fine` und `coarse`. Ein `fine`-Zeiger ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, einen kleinen Bereich genau zu treffen. Ein `coarse`-Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; möglicherweise navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Beispielsweise könnten Sie größere Trefferbereiche erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

### Verwendung der Bereichssyntax

Ein häufiger Fall ist der Check, ob die Viewport-Breite zwischen zwei Werten liegt:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

Wenn Sie die Lesbarkeit verbessern möchten, können Sie die „Bereichs“-Syntax verwenden:

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

In diesem Fall werden die Stile angewendet, wenn die Viewport-Breite zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Bei all den verschiedenen möglichen Media Queries möchten Sie sie möglicherweise kombinieren oder Listen von Abfragen erstellen — von denen jede übereinstimmen könnte.

### "und"-Logik in Media Queries

Um Medienmerkmale zu kombinieren, können Sie `and` auf ähnliche Weise verwenden, wie wir `and` oben verwendet haben, um einen Medientyp und ein Merkmal zu kombinieren. Beispielsweise möchten wir möglicherweise eine `min-width` und `orientation` testen. Der Textkörper wird nur dann blau, wenn der Viewport mindestens 600 Pixel breit ist und das Gerät sich im Querformat befindet.

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

### "oder"-Logik in Media Queries

Wenn Sie eine Menge von Abfragen haben, von denen jede übereinstimmen könnte, können Sie diese Abfragen durch Kommata trennen. Im folgenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER das Gerät sich im Querformat befindet. Wenn eine dieser Bedingungen zutrifft, stimmt die Abfrage.

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

### "nicht"-Logik in Media Queries

Sie können eine gesamte Media Query mithilfe des Operators `not` verneinen. Dies kehrt die Bedeutung der gesamten Media Query um. Daher wird im nächsten Beispiel der Text nur dann blau sein, wenn die Ausrichtung Hochformat ist.

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

Sie können `not` auch verwenden, um bestimmte Ausdrücke zu verneinen.

```css
@media (not (width < 600px)) and (not (width > 1000px)) {
  body {
    color: blue;
  }
}
```

Dies wird die Stile anwenden, wenn die Viewport-Breite zwischen 600 und 1000 Pixel liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Wie man Breakpoints auswählt

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen ins Visier zu nehmen. Listen der Größen der Bildschirme von beliebten Telefonen und Tablets wurden veröffentlicht, um Designs zu erstellen, die genau an diese Viewports angepasst sind.

Jetzt gibt es viel zu viele Geräte mit einer enormen Vielfalt an Größen, um dies machbar zu machen. Das bedeutet, dass anstatt spezifische Größen für alle Designs anzuvisieren, ein besserer Ansatz darin besteht, das Design an der Stelle zu ändern, an der der Inhalt in irgendeiner Weise bricht. Vielleicht werden die Zeilenlängen viel zu lang, oder eine Box-in-Seitenleiste wird gequetscht und schwer lesbar. Zu diesem Zeitpunkt möchten Sie eine Media Query verwenden, um das Design in ein besseres für den Platz, den Sie zur Verfügung haben, zu ändern. Dieser Ansatz bedeutet, dass es keine Rolle spielt, welche genauen Abmessungen das verwendete Gerät hat, jede Reichweite wird abgedeckt. Die Punkte, an denen eine Media Query eingeführt wird, werden als **Breakpoints** bezeichnet.

Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints gesetzt werden sollten. Sie können leicht den Viewport verkleinern und vergrößern, um zu sehen, wo der Inhalt durch Hinzufügen einer Media Query und Anpassen des Designs verbessert werden würde.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in Firefox DevTools.](rwd-mode.png)

## Aktives Lernen: Mobile-First-Responsive-Design

Im Großen und Ganzen können Sie zwei Ansätze für ein responsives Design wählen. Sie können mit Ihrer Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um Dinge zu verschieben, wenn der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layouts hinzufügen, wenn der Viewport größer wird. Dieser zweite Ansatz wird als **mobile first** responsives Design bezeichnet und ist oft der beste Ansatz, dem man folgen sollte.

Die Ansicht für die kleinsten Geräte ist oft eine einfache einzelne Inhaltskolonne, so wie sie im normalen Fluss erscheint. Das bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte durchführen müssen – die Quelle gut zu gestalten bedeutet, dass Sie standardmäßig ein lesbares Layout haben.

Der folgende Durchgang führt Sie durch diesen Ansatz mit einem sehr einfachen Layout. Auf einer Produktionsseite müssen Sie wahrscheinlich mehr innerhalb Ihrer Media Queries anpassen, der Ansatz wäre jedoch genau derselbe.

### Durchgang: ein Mobile-First-Layout

Unser Ausgangspunkt ist ein HTML-Dokument mit etwas CSS, das Hintergrundfarben zu den verschiedenen Teilen des Layouts hinzufügt.
Sie können den Code aus den untenstehenden Blöcken in einen Texteditor kopieren, als HTML-Datei auf Ihrem Computer speichern und in Ihrem Browser öffnen oder auf „Play“ klicken, um den Code im MDN Playground zu rendern und zu bearbeiten:

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

Die Quelle des Dokuments ist so organisiert, dass der Inhalt lesbar ist. Dies ist ein wichtiger erster Schritt, der sicherstellt, dass, wenn der Inhalt von einem Screenreader vorgelesen wird, er verständlich wäre.
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

Wenn wir das Layout im Responsive Design Mode in DevTools anzeigen, können wir sehen, dass es als einfache mobile Ansicht der Website ziemlich gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

Ab diesem Punkt beginnen Sie, das Responsive Design Mode-Fenster breiter zu machen, bis Sie sehen können, dass die Zeilenlängen ziemlich lang werden und wir Platz für die Navigation in einer horizontalen Linie haben. Dies ist der Punkt, an dem wir unsere erste Media Query hinzufügen werden. Wir verwenden ems, da dies bedeutet, dass, wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, aber einem breiteren Viewport eintritt, als jemand mit einer kleineren Textgröße.

Fügen Sie die folgende CSS zu Ihren Stilen hinzu:

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

Diese CSS gibt uns ein zweispaltiges Layout innerhalb des Artikels von Artikelinhalt und verwandte Informationen im aside-Element. Wir haben auch flexbox verwendet, um die Navigation in eine Reihe zu setzen.

Lassen Sie uns die Breite weiter erhöhen, bis wir das Gefühl haben, dass genug Platz für die Seitenleiste vorhanden ist, um auch eine neue Spalte zu bilden. Innerhalb einer Media Query machen wir das main-Element in ein zweispaltiges Raster. Wir müssen dann das {{cssxref("margin-bottom")}} im Artikel entfernen, damit die beiden Seitenleisten sich miteinander ausrichten, und wir werden ein {{cssxref("border")}} an der Oberseite der Fußzeile hinzufügen. Typischerweise sind diese kleinen Anpassungen die Art von Dingen, die Sie tun werden, um das Design bei jedem Breakpoint gut aussehen zu lassen.

Fügen Sie die folgende CSS zu Ihren Stilen hinzu:

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

Wenn Sie das Ergebnis in verschiedenen Breiten betrachten, können Sie sehen, wie das Design als Einspalten-, Zweispalten- oder Dreispaltenlayout reagiert und funktioniert, je nach verfügbarer Breite. Dies ist ein einfaches Beispiel für ein Mobile-First-Responsive-Design.

## Das Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode im obigen Beispiel ansehen, werden Sie das folgende Element im Kopf des Dokuments sehen:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist das [Viewport-Meta-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element) — es existiert als eine Möglichkeit, wie mobile Browser Inhalte rendern. Dies ist notwendig, weil standardmäßig die meisten mobilen Browser über ihre Viewport-Breite lügen. Nicht responsive Seiten sehen in einem schmalen Viewport häufig wirklich schlecht aus, sodass mobile Browser die Seite in der Regel mit einer breiteren Viewport-Breite darstellen als die tatsächliche Breite des Geräts (normalerweise 980 Pixel) und das gerenderte Ergebnis dann so verkleinern, dass es in das Display passt.

Das ist alles gut und recht, aber es bedeutet, dass responsive Seiten nicht wie erwartet funktionieren werden. Wenn die Viewport-Breite als 980 Pixel gemeldet wird, werden dann mobile Layouts (zum Beispiel mit einer Media Query von `@media screen and (max-width: 600px) { }` erstellt) nicht wie erwartet dargestellt.

Um dies zu beheben, sagt ein Viewport-Meta-Tag wie das obige auf Ihrer Seite dem Browser: "Rendere den Inhalt nicht mit einem 980-Pixel-Viewport — rendere ihn mit der tatsächlichen Gerätebreite und setze einen Standard-Initialmaßstab für mehr Konsistenz." Die Media Queries greifen dann wie erwartet.

Es gibt eine Reihe weiterer Optionen, die Sie im `content`-Attribut des Viewport-Meta-Tags angeben können — siehe [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts in mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element) für weitere Details.

## Brauchen Sie wirklich eine Media Query?

Flexbox, Grid und Multi-Column-Layout bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten ohne die Notwendigkeit einer Media Query zu erstellen. Es lohnt sich immer zu überlegen, ob diese Layout-Methoden das erreichen können, was Sie möchten, ohne Media Queries hinzuzufügen. Beispielsweise möchten Sie möglicherweise eine Reihe von Karten, die mindestens 200 Pixel breit sind, mit so vielen dieser 200 Pixel, wie in den Hauptartikel passen. Dies kann mit dem Grid-Layout ohne Media Queries erreicht werden.

Dies könnte mit dem folgenden erreicht werden:

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

Machen Sie den Bildschirm breiter und schmaler, um zu sehen, wie die Anzahl der Spalte-Spuren sich ändert. Das Schöne an dieser Methode ist, dass das Raster nicht auf die Viewport-Breite schaut, sondern auf die verfügbare Breite für diese Komponente. Es mag seltsam erscheinen, einen Abschnitt über Media Queries mit dem Vorschlag abzuschließen, dass Sie unter Umständen überhaupt keine benötigen! In der Praxis werden Sie jedoch feststellen, dass eine gute Nutzung moderner Layout-Methoden, ergänzt durch Media Queries, die besten Ergebnisse liefert.

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einen Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Responsives Webdesign und Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design).

## Zusammenfassung

In dieser Lektion haben Sie etwas über Media Queries gelernt und erfahren, wie Sie diese in der Praxis einsetzen, um ein Mobile-First-Responsive-Design zu erstellen.

Sie könnten den Ausgangspunkt nutzen, den wir erstellt haben, um mehr Media Queries zu testen. Zum Beispiel könnten Sie die Größe der Navigation ändern, wenn Sie feststellen, dass der Besucher ein grobes Zeigegerät hat, indem Sie das Medienmerkmal `pointer` verwenden.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und herausfinden, ob die Ergänzung einer Media Query oder die Verwendung einer Layout-Methode wie Flexbox oder Grid die geeignetste Weise ist, die Komponenten anpassbar zu machen. Es gibt sehr oft keinen richtigen oder falschen Weg — Sie sollten experimentieren und sehen, was am besten für Ihr Design und Ihre Inhalte funktioniert.

OK, wir sind fast am Ende dieses Moduls. Lassen Sie uns abschließend eine Herausforderung an Sie stellen, um Ihr Verständnis zu testen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}
