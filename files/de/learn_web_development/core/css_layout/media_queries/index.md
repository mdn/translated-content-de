---
title: Grundlagen der Media Query
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

Die **CSS Media Query** bietet Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn das Browser- und Geräteumfeld einer von Ihnen festgelegten Regel entspricht, beispielsweise "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des [responsiven Webdesigns](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), da sie es Ihnen ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. Sie können jedoch auch verwendet werden, um andere Aspekte der Umgebung zu erkennen, in der Ihre Website ausgeführt wird, beispielsweise ob der Benutzer ein Touchscreen-Gerät anstelle einer Maus verwendet.

In dieser Lektion erfahren Sie zunächst mehr über die in Media Queries verwendete Syntax und lernen dann anhand von Beispielen, wie ein grundlegendes Design responsiv gestaltet werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftstilierung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Syntax von Media Queries.</li>
          <li>Die gängigen Arten von Media Query.</li>
          <li>Verwendung von <code>width</code> und <code>height</code> Media Queries, um responsive Layouts zu erstellen.</li>
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

- Einem Medientyp, der dem Browser angibt, für welche Art von Medien dieser Code gilt (Print oder Bildschirm).
- Einer Medienausdruck, der eine Regel oder ein Test ist, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einer Reihe von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Arten von Medien, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query wird den Textkörper nur dann auf 12pt setzen, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der Medientyp hier unterscheidet sich vom sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.
> In der Level-3-Spezifikation der Media Queries wurden eine Reihe anderer Medientypen definiert; diese sind inzwischen veraltet und sollten vermieden werden.
> Medientypen sind optional; wenn Sie in Ihrer Media Query keinen Medientyp angeben, wird die Media Query standardmäßig für alle Medientypen gelten.

### Regeln für Medienmerkmale

Nachdem Sie den Typ angegeben haben, können Sie dann ein Medienmerkmal mit einer Regel ansprechen.
Die folgenden Beispiele zeigen, wie verschiedene Media Queries verwendet werden.
Um die `width` Ihres Bildschirms zu ändern, ändern Sie die Größe Ihres Browsers oder drehen Sie Ihr Handgerät.

> [!NOTE]
> Alternativ können Sie die Funktionen zur responsiven Größenänderung der Entwickler-Tools Ihres Browsers verwenden (wie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/) von Firefox), um unterschiedliche Gerätebreiten zu simulieren.

#### Breite und Höhe

Das Merkmal, das wir am häufigsten erkennen, um responsives Design zu erstellen (und das umfassende Browser-Unterstützung hat), ist die Breite des Viewports. Wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite liegt — oder eine genaue Breite hat —, indem wir das Medienmerkmal `width` verwenden und es nach Bedarf mit `min-` oder `max-` voranstellen.

Diese Merkmale werden verwendet, um Layouts zu erstellen, die auf verschiedene Bildschirmgrößen reagieren. Wenn Sie beispielsweise die Textfarbe des Körpers auf Rot setzen möchten, wenn der Viewport genau 600 Pixel beträgt, würden Sie die folgende Media Query verwenden.

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

Versuchen Sie, die Breite des Browserfensters anzupassen, um den Punkt zu finden, an dem das obige Demo genau `600px` breit ist, sodass der Text rot wird.

Die Medienmerkmale `width` (und `height`) können als Bereiche verwendet werden und daher mit `min-` oder `max-` vorangestellt sein, um anzugeben, dass der angegebene Wert ein Minimum oder Maximum ist. Um beispielsweise die Farbe Blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

Versuchen Sie, das Fenster zu verengen, bis der obige Text blau wird.

In der Praxis ist die Verwendung von Minimal- oder Maximalwerten für responsives Design viel nützlicher, sodass Sie `width` oder `height` selten allein sehen werden.

Es gibt viele andere Medienmerkmale, die Sie testen können, obwohl einige der neueren Merkmale, die in den Levels 4 und 5 der Media Queries-Spezifikation eingeführt wurden, nur begrenzte Browser-Unterstützung haben. Jedes Merkmal ist auf MDN zusammen mit Informationen zur Browser-Unterstützung dokumentiert, und Sie finden eine vollständige Liste unter [Using Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

#### Orientierung

Ein gut unterstütztes Medienmerkmal ist `orientation`, mit dem wir testen können, ob die Ausrichtung im Hoch- oder Querformat erfolgt. Um die Textfarbe des Körpers zu ändern, wenn sich das Gerät im Querformat befindet, verwenden Sie die folgende Media Query.

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

Das obige Beispiel ist ziemlich schwierig, innerhalb der Seite zu testen. Um es in Aktion zu sehen, empfiehlt es sich, den obigen Code in eine lokale HTML-Datei zu kopieren und in einem eigenen Tab zu öffnen.

Ein Standard-Desktop-Ansicht hat eine Landscape-Ausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat angezeigt wird. Das Testen auf Ausrichtung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Im Rahmen der Level-4-Spezifikation wurde das Medienmerkmal `hover` eingeführt. Dieses Merkmal ermöglicht es Ihnen zu testen, ob der Benutzer die Fähigkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er eine Art Zeigegerät verwendet; Touchscreen und Tastaturnavigation schweben nicht.

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

Im obigen Beispiel ändert sich der Text beim Hover über weiß auf schwarz, jedoch nur bei Geräten, bei denen ein Hover möglich ist. Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir sie beim Hover über einen Link verfügbar machen.

Ebenfalls in Level 4 ist das Medienmerkmal `pointer`. Dieses nimmt drei mögliche Werte an: `none`, `fine` und `coarse`. Ein `fine`-Zeiger ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, einen kleinen Bereich präzise zu treffen. Ein `coarse`-Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; vielleicht navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu gestalten, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Beispielsweise könnten Sie größere Trefferbereiche erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

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

So werden in diesem Fall Stile angewendet, wenn die Viewport-Breite zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Bei all den möglichen Media Queries möchten Sie möglicherweise einige kombinieren oder Listen von Queries erstellen — von denen eine zutreffen könnte.

Wie zuvor, testen Sie die Beispiele in diesem Abschnitt, indem Sie Ihre Browserbreite anpassen.

### "Und"-Logik in Media Queries

Um Medienmerkmale zu kombinieren, können Sie `and` in etwa so verwenden, wie wir `and` oben verwendet haben, um einen Medientyp und ein Merkmal zu kombinieren. Beispielsweise könnten wir `width` und `orientation` testen wollen. Der Text des Körpers wird nur dann blau, wenn der Viewport mindestens 600 Pixel breit ist und sich das Gerät im Querformat befindet.

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

### "Oder"-Logik in Media Queries

Wenn Sie eine Reihe von Queries haben, von denen jede zutreffen könnte, können Sie diese Queries durch Kommas trennen. Im folgenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER sich das Gerät im Querformat befindet. Wenn eine dieser Bedingungen zutrifft, entspricht die Query.

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

### "Nicht"-Logik in Media Queries

Sie können eine gesamte Media Query negieren, indem Sie den `not`-Operator verwenden. Dies kehrt die Bedeutung der gesamten Media Query um. Daher wird im nächsten Beispiel der Text nur dann blau, wenn der Viewport _nicht_ mindestens 600 Pixel breit ist.

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

Dies wird die Stile anwenden, wenn die Viewport-Breite zwischen 600 und 1000 Pixel liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Wie man Breakpoints wählt

In den frühen Tagen des responsiven Designs hätten viele Designer versucht, sehr spezifische Bildschirmgrößen ins Visier zu nehmen. Listen von Bildschirmgrößen beliebter Telefone und Tablets wurden veröffentlicht, damit Designs erstellt werden konnten, die genau zu diesen Viewports passen.

Es gibt jetzt viel zu viele Geräte mit einer großen Vielfalt an Größen, um das machbar zu machen. Das bedeutet, dass anstelle der Ausrichtung auf bestimmte Größen für alle Designs ein besserer Ansatz darin besteht, das Design an der Stelle zu ändern, an der der Inhalt auf irgendeine Weise bricht. Vielleicht werden die Zeilenlängen viel zu lang oder eine Seitenleiste wird zerquetscht und schwer lesbar. Das ist der Punkt, an dem Sie eine Media Query verwenden möchten, um das Design in ein besseres für den verfügbaren Raum zu ändern. Dieser Ansatz bedeutet, dass es keine Rolle spielt, wie die genauen Abmessungen des verwendeten Geräts sind; jede Reichweite wird abgedeckt. Die Punkte, an denen eine Media Query eingeführt wird, werden als **Breakpoints** bezeichnet.

[Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints platziert werden sollten. Sie können das Viewport einfach verkleinern und vergrößern, um zu sehen, wo der Inhalt durch Hinzufügen einer Media Query und Anpassen des Designs verbessert werden würde.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in Firefox DevTools.](rwd-mode.png)

## Mobile-First-Responsive Design

Im Großen und Ganzen können Sie zwei Ansätze für responsives Design wählen. Sie können mit Ihrer Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um die Dinge zu verschieben, wenn der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layout hinzufügen, wenn der Viewport größer wird. Dieser zweite Ansatz wird als **Mobile-First-Responsive Design** beschrieben und ist oft der beste Ansatz, dem Sie folgen sollten.

Die Ansicht für die sehr kleinsten Geräte ist oft eine einfache einspaltige Anordnung von Inhalten, so wie sie im normalen Fluss erscheint. Dies bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte benötigen - ordnen Sie Ihre Quelldaten gut an und Sie haben standardmäßig ein lesbares Layout.

## Erstellen Ihres eigenen Mobile-First-Designs

Jetzt sind Sie an der Reihe; in diesem Lernabschnitt werden Sie Ihr eigenes grundlegendes Mobile-First-Responsive Design erstellen. In einer Produktionsseite werden Sie wahrscheinlich mehr Dinge innerhalb Ihrer Media Queries anpassen, aber der Ansatz wird genau derselbe sein.

### Einstieg

Unser Ausgangspunkt ist ein HTML-Dokument mit einigen CSS angewendet, um Hintergrundfarben zu den verschiedenen Teilen des Layouts hinzuzufügen.

Kopieren Sie zunächst den HTML-Code aus dem Block unten in einen Texteditor, speichern Sie ihn als HTML-Datei auf Ihrem Computer und öffnen Sie ihn in Ihrem Browser:

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

Die Quelle des Dokuments ist so angeordnet, dass der Inhalt lesbar ist. Dies ist ein wichtiger erster Schritt, der sicherstellt, dass der Inhalt verständlich wäre, wenn er von einem Screenreader vorgelesen würde.

Die anfänglichen Stile für unser Beispiel sind wie folgt; kopieren Sie diese in Ihre HTML-Datei innerhalb der `<style></style>` Tags und ersetzen Sie den `/* Add styles here */` Kommentar.

```css live-sample___walkthrough
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  margin: 2em auto;
  font:
    1em/1.3 "Helvetica",
    "Arial",
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

Wenn Sie das Layout im Responsive Design Mode in DevTools anzeigen oder Ihr Browserfenster auf eine mobile Breite verengen, sehen Sie, dass es als einfache mobile Ansicht der Website ziemlich gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

### Erstellen eines zweispaltigen Layouts für mittlere Breiten

Ziehen Sie das Fenster breiter, bis Sie sehen können, dass die Zeilenlängen ziemlich lang werden; an diesem Punkt haben Sie Platz für die Navigation, um in einer horizontalen Linie angezeigt zu werden. Hier werden wir unsere erste Media Query hinzufügen. Wir werden `em`-Einheiten verwenden, da dies bedeutet, dass, wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, aber breiterem Viewport, als bei jemandem mit kleinerer Textgröße, stattfinden wird.

Fügen Sie das Folgende an das Ende Ihres CSS hinzu:

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

Dieses CSS gibt uns ein Zweispaltenlayout innerhalb des `<article>`, des Artikelinhalts und der zugehörigen Informationen im `<aside>`-Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Reihe zu bringen.

### Hinzufügen einer dritten Spalte für breitere Bildschirme

Lassen Sie uns die Breite weiter erweitern, bis wir das Gefühl haben, dass genügend Platz vorhanden ist, dass die Seitenleiste auch eine neue Spalte bilden kann. Innerhalb einer Media Query machen wir das `<main>`-Element zu einem zweispaltigen Raster. Wir müssen dann den {{cssxref("margin-bottom")}} am Artikel entfernen, damit die beiden Seitenleisten aufeinander ausgerichtet sind, und wir fügen dem {{cssxref("border")}} ein {{cssxref("border")}} hinzu. Typischerweise sind diese kleinen Tweaks die Art von Dingen, die Sie tun werden, um das Design an jedem Breakpoint gut aussehen zu lassen.

Fügen Sie das folgende am Ende Ihres CSS hinzu:

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

Das Beispiel ist fertig. Wenn Sie das Ergebnis bei unterschiedlichen Breiten betrachten, können Sie sehen, wie das Design als Einzelspalte, Zwei-Spalten oder Drei-Spalten je nach verfügbarer Breite funktioniert. Dies ist ein grundlegendes Beispiel für ein Mobile-First-Responsive Design.

### viewport meta

Wenn Sie sich den HTML-Code im obigen Beispiel ansehen, sehen Sie das folgende Element im Kopf des Dokuments enthalten:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist das [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag — es existiert als Möglichkeit, wie mobile Browser Inhalte rendern und sicherstellen, dass sie Ihre Media Queries respektieren. Das obige teilt mobilen Browsern mit: "Rendern Sie den Inhalt nicht mit einem 980-Pixel-Viewport — rendern Sie ihn stattdessen unter Verwendung der tatsächlichen Gerätebreite und setzten Sie eine Standard-Initial-Skalierungsstufe für bessere Konsistenz." Die Media Queries werden dann wie erwartet aktiviert.

Für weitere Informationen darüber, warum dies notwendig ist, siehe den Abschnitt [Das viewport Meta-Tag](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#the_viewport_meta_tag) im vorherigen Artikel.

## Benötigen Sie wirklich eine Media Query?

Flexbox und CSS Grid bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten zu erstellen, ohne dass eine Media Query erforderlich ist: Es lohnt sich immer zu überlegen, ob Sie wirklich eine benötigen. Beispielsweise könnten Sie ein Set von Karten haben möchten, das mindestens 200 Pixel breit ist, und so viele dieser 200 Pixel über die Hauptinhaltsspalte passen, unabhängig davon, wie breit sie ist.

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

Versuchen Sie, Ihr Browserfenster breiter und schmaler zu machen, um die Anzahl der Spaltenspuränderungen zu sehen.

Das Gute an dieser Methode ist, dass das Raster nicht die Breite des Viewports betrachtet, sondern die Breite, die es für diese Komponente zur Verfügung hat. Es mag seltsam erscheinen, einen Abschnitt über Media Queries mit dem Vorschlag abzuschließen, dass Sie vielleicht gar keine benötigen! In der Praxis werden Sie jedoch feststellen, dass eine gute Verwendung moderner Layoutmethoden, unterstützt durch Media Queries, die besten Ergebnisse liefert.

## Zusammenfassung

In dieser Lektion haben Sie Media Queries kennengelernt und auch erfahren, wie man sie in der Praxis einsetzt, um ein Mobile-First-Responsive Design zu erstellen.

Sie könnten den Ausgangspunkt, den wir erstellt haben, nutzen, um mehr Media Queries zu testen. Beispielsweise könnten Sie die Größe der Navigation ändern, wenn Sie feststellen, dass der Besucher einen groben Zeiger verwendet, und das Medienmerkmal `pointer` verwenden.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und sehen, ob das Hinzufügen einer Media Query oder die Verwendung einer Layoutmethode wie Flexbox oder Grid der beste Weg ist, um die Komponenten responsiv zu machen. Sehr oft gibt es keinen richtigen oder falschen Weg — Sie sollten experimentieren und sehen, was für Ihr Design und Ihren Inhalt am besten funktioniert.

OK, wir sind fast am Ende dieses Moduls angelangt. Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie das gesamte Responsive Webdesign und die Informationen zu Media Queries in den vorhergehenden Artikeln verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}
