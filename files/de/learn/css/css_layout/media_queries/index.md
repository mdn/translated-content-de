---
title: Einsteigerleitfaden für Media Queries
slug: Learn/CSS/CSS_layout/Media_queries
l10n:
  sourceCommit: ca6d4f6114d278926e183225a90fd2209802cfe9
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}

Die **CSS Media Query** bietet Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen festgelegten Regel entspricht, beispielsweise "Viewport ist breiter als 480 Pixel". Media Queries sind ein wichtiger Bestandteil des responsiven Webdesigns, da sie es Ihnen ermöglichen, je nach Größe des Viewports verschiedene Layouts zu erstellen, aber sie können auch verwendet werden, um andere Dinge über die Umgebung, in der Ihre Website läuft, zu erkennen, zum Beispiel, ob der Benutzer einen Touchscreen anstelle einer Maus verwendet. In dieser Lektion lernen Sie zunächst die in Media Queries verwendete Syntax kennen und anschließend, wie Sie sie in Beispielen verwenden können, die zeigen, wie ein einfaches Design responsiv gestaltet werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen in HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und ein Grundverständnis von CSS (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">CSS Bausteine</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie man Media Queries verwendet und der häufigste Ansatz, um sie für die Erstellung responsiver Designs zu nutzen.
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen der Media Query

Die einfachste Media Query-Syntax sieht so aus:

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

Sie besteht aus:

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medium dieser Code gedacht ist (z.B. Druck, oder Bildschirm).
- Einem Medientest, der eine Regel ist, die bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einem Satz von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query stellt den Textkörper nur dann auf 12pt um, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der Medientyp hier unterscheidet sich vom sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.

> [!NOTE]
> In der Level 3 Media Queries-Spezifikation wurden eine Reihe weiterer Medientypen definiert; diese sind veraltet und sollten vermieden werden.

> [!NOTE]
> Medientypen sind optional; wenn Sie keinen Medientyp in Ihrer Media Query angeben, wird die Media Query für alle Medientypen angewendet.

### Regeln für Medienmerkmale

Nachdem Sie den Typ angegeben haben, können Sie ein Medienmerkmal mit einer Regel anvisieren. Die folgenden Beispiele zeigen, wie man verschiedene Media Queries verwendet. Um die `width` Ihres Bildschirms zu ändern, passen Sie die Größe Ihres Browsers an oder drehen Sie Ihr Handgerät. Alternativ können Sie die [responsive Größen]()-Funktionen der Entwickler-Tools Ihres Browsers verwenden, um verschiedene Gerätebreiten zu simulieren.

#### Breite und Höhe

Das am häufigsten verwendete Merkmal, um responsive Designs zu erstellen (und das weit verbreitete Browser-Unterstützung hat), ist die Breite des Viewports. Mit den Medienmerkmalen `min-width`, `max-width` und `width` können Sie CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite liegt oder genau diese Breite hat.

Diese Merkmale werden verwendet, um Layouts zu erstellen, die auf verschiedene Bildschirmgrößen reagieren. Um beispielsweise die Textfarbe des Körpers auf Rot zu setzen, wenn der Viewport genau 600 Pixel ist, würden Sie die folgende Media Query verwenden.

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

Die `width` (und `height`) Medienmerkmale können als Bereiche verwendet werden und daher mit `min-` oder `max-` versehen werden, um anzugeben, dass der angegebene Wert ein Minimum oder Maximum ist. Um beispielsweise die Farbe auf Blau zu setzen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

In der Praxis ist die Verwendung von minimalen oder maximalen Werten viel nützlicher für responsives Design, sodass `width` oder `height` selten allein verwendet werden.

Es gibt viele andere Medienmerkmale, für die Sie testen können, obwohl einige der neueren Merkmale, die in den Levels 4 und 5 der Media Queries-Spezifikation eingeführt wurden, eine begrenzte Brower-Unterstützung haben. Jedes Merkmal ist auf MDN zusammen mit Informationen zur Browser-Unterstützung dokumentiert, und Sie können eine vollständige Liste unter [Verwendung von Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax) finden.

#### Orientierung

Ein gut unterstütztes Medienmerkmal ist `orientation`, das es ermöglicht, das Hoch- oder Querformat zu testen. Um die Textfarbe des Körpers zu ändern, wenn sich das Gerät im Querformat befindet, verwenden Sie die folgende Media Query.

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

Eine Standard-Desktop-Ansicht hat eine Landschaftsorientierung, und ein Design, das in dieser Orientierung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es in einem Hochformat auf einem Telefon oder Tablet angezeigt wird. Das Testen auf Orientierung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Eingabegeräten

Im Rahmen der Spezifikation der Stufe 4 wurde das Medienmerkmal `hover` eingeführt. Dieses Merkmal bedeutet, dass Sie testen können, ob der Benutzer die Fähigkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er eine Art Zeigegerät verwendet; Touchscreen- und Tastaturnavigation schweben nicht.

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

Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir sie verfügbar machen, wenn ein Link überflogen wird.

Ebenfalls in Stufe 4 ist das Medienmerkmal `pointer`. Dieses hat drei mögliche Werte: `none`, `fine` und `coarse`. Ein `fine`-Zeiger ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, ein kleines Gebiet präzise anzuwählen. Ein `coarse`-Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; womöglich navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion eines Benutzers mit einem Bildschirm reagieren. Zum Beispiel könnten Sie größere Treffbereiche erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

#### Verwendung der Bereichs-Syntax

Ein häufiger Fall ist es zu überprüfen, ob die Breite des Viewports zwischen zwei Werten liegt:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

Wenn Sie die Lesbarkeit davon verbessern möchten, können Sie die "Bereichs"-Syntax verwenden:

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

In diesem Fall werden also Stile angewendet, wenn die Breite des Viewports zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Mit all den unterschiedlichen möglichen Media Queries möchten Sie vielleicht diese kombinieren oder Listen von Abfragen erstellen — von denen jede übereinstimmen könnte.

### Logik "und" in Medienabfragen

Um Medienmerkmale zu kombinieren, können Sie `and` auf die gleiche Weise verwenden, wie wir `and` verwendet haben, um einen Medientyp und ein Merkmal zu kombinieren. Zum Beispiel könnten wir auf `min-width` und `orientation` testen. Der Textkörper wird nur dann blau, wenn der Viewport mindestens 600 Pixel breit ist und sich das Gerät im Querformat befindet.

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

### Logik "oder" in Medienabfragen

Wenn Sie eine Reihe von Abfragen haben, von denen eine übereinstimmen könnte, können Sie diese Abfragen durch ein Komma trennen. Im unten stehenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER sich das Gerät im Querformat befindet. Wenn eines dieser Dinge wahr ist, wird die Abfrage übereinstimmen.

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

### Logik "nicht" in Medienabfragen

Sie können eine gesamte Medienabfrage mit dem Operator `not` negieren. Dies kehrt die Bedeutung der gesamten Medienabfrage um. In diesem nächsten Beispiel wird der Text nur dann blau, wenn die Orientierung Hochformat ist.

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

Dies wird die Stile anwenden, wenn die Breite des Viewports zwischen 600 und 1000 Pixel liegt. Das entspricht `(600px <= width <= 1000px)`.

## Wie man Breakpoints auswählt

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen anzusprechen. Listen der Größen der Bildschirme beliebter Telefone und Tablets wurden veröffentlicht, damit Designs erstellt werden konnten, die diesen Viewports gut entsprechen.

Heute gibt es viel zu viele Geräte mit einer großen Auswahl an Größen, um dies machbar zu machen. Das bedeutet, dass statt spezifische Größen für alle Designs zu zielen, ein besserer Ansatz darin besteht, das Design zu ändern, wenn der Inhalt in gewisser Weise anfängt zu brechen. Vielleicht werden die Zeilenlängen viel zu lang, oder eine hervorstehende Seitenleiste wird gequetscht und schwer zu lesen. Das ist der Punkt, an dem Sie eine Media Query verwenden möchten, um das Design für den verfügbaren Platz besser zu machen. Dieser Ansatz bedeutet, dass es egal ist, welche genauen Dimensionen das verwendete Gerät hat, jede Reichweite wird abgedeckt. Die Punkte, an denen eine Media Query eingeführt wird, werden als **Breakpoints** bezeichnet.

Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints platziert werden sollten. Sie können den Viewport ganz einfach kleiner und größer machen, um zu sehen, wo der Inhalt durch das Hinzufügen einer Media Query verbessert werden könnte und das Design optimiert werden.

![Ein Screenshot eines Layouts in der mobilen Ansicht in Firefox DevTools.](rwd-mode.png)

## Aktives Lernen: Mobile-first responsives Design

Grundsätzlich können Sie zwei Ansätze für ein responsives Design wählen. Sie können mit Ihrer Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um Dinge umzustellen, wenn der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layout hinzufügen, wenn der Viewport größer wird. Dieser zweite Ansatz wird als **mobile-first** responsives Design beschrieben und ist oft der beste Ansatz, dem man folgen sollte.

Die Ansicht für die kleinsten Geräte ist oft eine einfache einspaltige Anzeige von Inhalten, wie sie im normalen Fluss erscheint. Das bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte machen müssen — wenn Sie Ihre Quelle gut anordnen, haben Sie standardmäßig ein lesbares Layout.

Der folgende Durchgang führt Sie durch diesen Ansatz mit einem sehr einfachen Layout. Auf einer Produktionsseite werden Sie wahrscheinlich mehr Dinge in Ihren Media Queries anpassen müssen, jedoch wäre der Ansatz genau derselbe.

### Durchgang: Ein mobile-first Layout

Unser Ausgangspunkt ist ein HTML-Dokument mit etwas CSS, um Hintergrundfarben zu den verschiedenen Teilen des Layouts hinzuzufügen. Sie können den Code aus den unten stehenden Blöcken in einen Texteditor kopieren, als HTML-Datei auf Ihrem Computer speichern und in Ihrem Browser öffnen oder auf "Play" klicken, um den Code im MDN Playground zu rendern und zu bearbeiten:

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

Die Quelle des Dokuments ist so angeordnet, dass der Inhalt lesbar ist. Dies ist ein wichtiger erster Schritt, der sicherstellt, dass, wenn der Inhalt von einem Screenreader vorgelesen würde, er verständlich wäre. Hier sind einige gute anfängliche Stile, mit denen wir beginnen können:

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

Wenn wir das Layout im Responsive Design Mode in den DevTools betrachten, sehen wir, dass es als einfache mobile Ansicht der Seite ziemlich gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

Von diesem Punkt aus beginnen Sie, die Ansicht des Responsive Design Mode zu erweitern, bis Sie sehen können, dass die Zeilenlängen ziemlich lang werden und wir Platz haben, dass die Navigation in einer horizontalen Linie angezeigt wird. An diesem Punkt fügen wir unsere erste Media Query hinzu. Wir werden ems verwenden, da dies darauf hinweist, dass sich der Breakpoint bei einem ähnlichen Zeilenlängen- und breiteren Viewport ereignet, wenn der Benutzer seine Textgröße erhöht hat, als jemand mit einer kleineren Textgröße.

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

Dieses CSS gibt uns ein zweispaltiges Layout innerhalb des Artikels, bestehend aus dem Artikelinhalt und den verwandten Informationen im aside-Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Zeile zu setzen.

Lassen Sie uns die Breite weiter erhöhen, bis wir glauben, dass genug Platz vorhanden ist, damit die Seitenleiste auch eine neue Spalte bilden kann. Innerhalb einer Media Query machen wir das main-Element zu einem zweispaltigen Gitter. Wir müssen dann den {{cssxref("margin-bottom")}} auf dem Artikel entfernen, damit sich die beiden Seitenleisten aneinander ausrichten, und fügen eine {{cssxref("border")}} am oberen Rand der Fußzeile hinzu. Normalerweise sind dies die kleinen Anpassungen, die Sie machen werden, um das Design an jedem Breakpoint gut aussehen zu lassen.

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

Wenn Sie sich das Ergebnis bei unterschiedlichen Breiten ansehen, können Sie sehen, wie das Design als eine Spalte, zwei Spalten oder drei Spalten funktioniert, abhängig von der verfügbaren Breite. Dies ist ein grundlegendes Beispiel für ein mobile-first responsives Design.

## Das Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode im obigen Beispiel ansehen, sehen Sie das folgende Element im Kopfteil des Dokuments:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist das [Viewport-Meta-Tag](/de/docs/Web/HTML/Viewport_meta_tag) — es existiert als eine Möglichkeit, die Darstellung von Inhalten in mobilen Browsern zu steuern. Dies ist erforderlich, weil die meisten mobilen Browser standardmäßig über die Breite ihres Viewports lügen. Nicht-responsive Websites sehen oft sehr schlecht aus, wenn sie in einem schmalen Viewport gerendert werden, daher rendern mobile Browser die Site normalerweise mit einer Viewport-Breite, die breiter ist als die tatsächliche Gerätebreite (in der Regel 980 Pixel), und verkleinern dann das gerenderte Ergebnis, damit es in die Anzeige passt.

Das ist alles gut und schön, bedeutet aber, dass responsive Websites nicht wie erwartet funktionieren. Wenn die Viewport-Breite als 980 Pixels angegeben wird, dann werden mobile Layouts (zum Beispiel erstellt mit einer Media Query von `@media screen and (max-width: 600px) { }`) nicht wie erwartet gerendert.

Um dieses Problem zu beheben, sagt ein Viewport-Meta-Tag wie das obige der Seite dem Browser "Rendere den Inhalt nicht mit einem 980-Pixel-Viewport — verwende die tatsächliche Gerätebreite stattdessen und setze eine standardmäßige Anfang skalierungsstufe für bessere Konsistenz". Die Media Queries greifen dann wie erwartet.

Es gibt eine Reihe anderer Optionen, die Sie im `content`-Attribut des Viewport-Meta-Tags angeben können — siehe [Verwendung des Viewport-Meta-Tags, um Layout auf mobilen Browsern zu steuern](/de/docs/Web/HTML/Viewport_meta_tag) für weitere Details.

## Brauchen Sie wirklich eine Media Query?

Flexbox, Grid und Multispalten-Layout bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten zu erstellen, ohne dass eine Media Query erforderlich ist. Es lohnt sich immer, zu überlegen, ob diese Layout-Methoden erreichen können, was Sie wollen, ohne Media Queries hinzuzufügen. Zum Beispiel möchten Sie vielleicht ein Set von Karten haben, die mindestens 200 Pixel breit sind, mit so vielen dieser 200 Pixel, wie in den Hauptartikel passen. Dies kann mit Grid-Layout erreicht werden, ganz ohne Media Queries.

Dies könnte durch Folgendes erreicht werden:

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

Machen Sie den Bildschirm breiter oder schmaler, um die Änderung der Anzahl der Spaltenraster zu sehen. Das Schöne an dieser Methodik ist, dass das Grid nicht die Viewport-Breite betrachtet, sondern die Breite, die für diese Komponente zur Verfügung steht. Es mag seltsam erscheinen, ein Kapitel über Media Queries mit einem Vorschlag zu beenden, dass Sie möglicherweise gar keine benötigen! In der Praxis werden Sie jedoch feststellen, dass eine gute Nutzung moderner Layout-Methoden, ergänzt durch Media Queries, die besten Ergebnisse liefert.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einen Test, um zu überprüfen, dass Sie diese Informationen beibehalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Responsive Webdesign und Media Queries](/de/docs/Learn/CSS/CSS_layout/rwd_skills).

## Zusammenfassung

In dieser Lektion haben Sie über Media Queries gelernt und auch entdeckt, wie man sie in der Praxis verwendet, um ein mobile-first responsives Design zu erstellen.

Sie könnten den Ausgangspunkt, den wir erstellt haben, verwenden, um mehr Media Queries zu testen. Beispielsweise könnten Sie die Größe der Navigation ändern, wenn Sie feststellen, dass der Besucher einen groben Zeiger hat, unter Verwendung des `pointer` Medienmerkmals.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und sehen, ob das Hinzufügen einer Media Query oder die Verwendung einer Layout-Methode wie Flexbox oder Grid der geeignetste Weg ist, um die Komponenten responsiv zu machen. Sehr oft gibt es keinen richtigen oder falschen Weg — Sie sollten experimentieren und sehen, was am besten für Ihr Design und Ihre Inhalte funktioniert.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}
