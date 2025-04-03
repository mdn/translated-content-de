---
title: Grundlagen von Media Queries
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{learnsidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}

**CSS Media Query** bietet Ihnen die Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen festgelegten Regel entspricht, zum Beispiel "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie es ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. Sie können jedoch auch verwendet werden, um andere Aspekte der Umgebung, in der Ihre Website ausgeführt wird, zu erkennen, z. B. ob der Benutzer einen Touchscreen anstelle einer Maus verwendet.

In dieser Lektion werden Sie zunächst die Syntax von Media Queries kennenlernen und dann anhand von Beispielen sehen, wie ein grundlegendes Design responsiv gemacht werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen des CSS-Styling</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Syntax von Media Queries.</li>
          <li>Die gebräuchlichsten Arten von Media Queries.</li>
          <li>Verwendung von <code>width</code> und <code>height</code> Media Queries zur Erstellung responsiver Layouts.</li>
          <li>Auswahl von Breakpoints.</li>
          <li>Verwendung von Media Queries zur Umsetzung eines Mobile-First-Designs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen von Media Queries

Die einfachste Media Query-Syntax sieht folgendermaßen aus:

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

Sie besteht aus:

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medien dieser Code gedacht ist (z.B. Print oder Screen).
- Einer Medienausdruck, das eine Regel oder einen Test darstellt, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einer Menge von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query wird das `body` nur dann auf 12pt setzen, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite im Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der Medientyp hier unterscheidet sich vom sogenannten {{Glossary("MIME_type", "MIME Type")}}.
> Eine Anzahl anderer Medientypen wurde in der Level-3-Spezifikation für Media Queries definiert; diese wurden jedoch veraltet und sollten vermieden werden.
> Medientypen sind optional; wenn Sie keinen Medientyp in Ihrer Media Query angeben, wird die Media Query standardmäßig für alle Medientypen ausgeführt.

### Regeln für Medienmerkmale

Nachdem Sie den Typ angegeben haben, können Sie mit einer Regel ein Medienmerkmal anvisieren.
Die folgenden Beispiele zeigen, wie man verschiedene Media Queries verwendet.
Um die `width` Ihres Bildschirms zu ändern, passen Sie die Größe Ihres Browsers an oder drehen Sie Ihr Handgerät. Alternativ können Sie die Funktion zur responsiven Größeneinstellung in den Entwicklerwerkzeugen Ihres Browsers verwenden, um verschiedene Gerätebreiten zu simulieren.

#### Breite und Höhe

Das am häufigsten verwendete Merkmal, um responsive Designs zu erstellen (und das eine weit verbreitete Browser-Unterstützung hat), ist die Viewport-Breite. Wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite liegt - oder eine genaue Breite hat - indem wir die Merkmale `min-width`, `max-width` und `width` verwenden.

Diese Merkmale werden verwendet, um Layouts zu erstellen, die auf unterschiedliche Bildschirmgrößen reagieren. Um beispielsweise die Textfarbe des `body` auf rot zu setzen, wenn der Viewport genau 600 Pixel beträgt, würden Sie die folgende Media Query verwenden.

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

Die Medienmerkmale `width` (und `height`) können als Bereiche verwendet werden und daher mit `min-` oder `max-` versehen werden, um anzuzeigen, dass der angegebene Wert ein Minimum oder ein Maximum ist. Um die Farbe beispielsweise blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

In der Praxis ist die Verwendung von Mindest- oder Höchstwerten für responsives Design viel nützlicher, daher werden Sie selten sehen, dass `width` oder `height` allein verwendet werden.

Es gibt viele andere Medienmerkmale, für die Sie Tests durchführen können, obwohl einige der neueren Merkmale, die in den Level 4 und 5 der Media Queries-Spezifikation eingeführt wurden, eine begrenzte Browser-Unterstützung haben. Jedes Merkmal ist auf MDN zusammen mit Informationen zur Browser-Unterstützung dokumentiert, und Sie können eine vollständige Liste unter [Using Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax) finden.

#### Ausrichtung

Ein gut unterstütztes Medienmerkmal ist `orientation`, mit dem wir auf Hoch- oder Querformat testen können. Um die Textfarbe des `body` zu ändern, wenn sich das Gerät in Querformat-Ausrichtung befindet, verwenden Sie die folgende Media Query.

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

Ein Standard-Desktopanzeige hat eine Querformat-Ausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht ebenso gut, wenn es auf einem Telefon oder Tablet im Hochformat angezeigt wird. Das Testen auf die Ausrichtung kann Ihnen helfen, ein Layout zu erstellen, welches für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Als Teil der Level-4-Spezifikation wurde das Medienmerkmal `hover` eingeführt. Dieses Merkmal ermöglicht es Ihnen zu testen, ob der Benutzer die Fähigkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er irgendeine Art von Zeigegerät verwendet; Touchscreen- und Tastaturnavigation schweben nicht.

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

Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir uns dafür entscheiden, sie verfügbar zu machen, wenn ein Link überflogen wird.

Auch in Level 4 ist das Medienmerkmal `pointer` enthalten. Dies hat drei mögliche Werte: `none`, `fine` und `coarse`. Ein `fine`-Zeiger ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, genau auf einen kleinen Bereich zu zielen. Ein `coarse`-Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; möglicherweise navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Sie könnten beispielsweise größere Treffflächen erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

### Nutzung der Bereichssyntax

Ein häufiger Fall ist zu überprüfen, ob die Viewport-Breite zwischen zwei Werten liegt:

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

Mit all den verschiedenen möglichen Media Queries möchten Sie möglicherweise diese kombinieren oder Listen von Abfragen erstellen, von denen jede übereinstimmen könnte.

### "and"-Logik bei Media Queries

Um Medienmerkmale zu kombinieren, können Sie `and` auf dieselbe Weise verwenden, wie wir `and` oben verwendet haben, um einen Medientyp und ein Merkmal zu kombinieren. Beispiel: Wir möchten möglicherweise auf eine `min-width` und `orientation` testen. Der Text im `body` wird nur dann blau, wenn der Viewport mindestens 600 Pixel breit ist und sich das Gerät im Querformat befindet.

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

Wenn Sie eine Menge von Abfragen haben, von denen jede übereinstimmen könnte, können Sie diese Abfragen durch Kommas trennen. Im unten stehenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER sich das Gerät im Querformat befindet. Wenn eine dieser Bedingungen wahr ist, stimmt die Abfrage überein.

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

Sie können eine gesamte Media Query mit dem Operator `not` negieren. Dies kehrt die Bedeutung der gesamten Media Query um. Daher wird im nächsten Beispiel der Text nur dann blau, wenn die Ausrichtung im Hochformat ist.

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

Dies wird die Stile anwenden, wenn die Viewport-Breite zwischen 600 und 1000 Pixel liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Wie wählt man Breakpoints?

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen ins Visier zu nehmen. Listen der Größen der Bildschirme beliebter Telefone und Tablets wurden veröffentlicht, um Designs zu erstellen, die genau auf diese Viewports passen.

Es gibt jetzt viel zu viele Geräte mit einer großen Vielfalt an Größen, um das praktikabel zu machen. Das bedeutet, dass anstelle von zielgerichteten spezifischen Größen für alle Designs ein besserer Ansatz darin besteht, das Design an dem Punkt zu ändern, an dem der Inhalt in irgendeiner Weise zu brechen beginnt. Vielleicht werden die Zeilenlängen viel zu lang oder eine angestellte Seitenleiste wird zerquetscht und schwer lesbar. Das ist der Punkt, an dem Sie eine Media Query verwenden möchten, um das Design auf eines zu ändern, das für den vorhandenen Platz besser geeignet ist. Dieser Ansatz bedeutet, dass es keine Rolle spielt, welche exakten Abmessungen das verwendete Gerät hat, jeder Bereich wird bedient. Die Punkte, an denen eine Media Query eingeführt wird, sind als **Breakpoints** bekannt.

Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints sein sollten. Sie können den Viewport einfach verkleinern und vergrößern, um zu sehen, wo der Inhalt durch das Hinzufügen einer Media Query und das Anpassen des Designs verbessert werden würde.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in den Firefox DevTools.](rwd-mode.png)

## Aktives Lernen: Mobile-First-Design

Im Allgemeinen können Sie zwei Ansätze für ein responsives Design wählen. Sie können mit Ihrer Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um Dinge zu verschieben, während sich der Viewport verkleinert, oder Sie können mit der kleinsten Ansicht beginnen und das Layout hinzufügen, während der Viewport größer wird. Dieser zweite Ansatz wird als **Mobile-First**-Design beschrieben und ist häufig der beste Ansatz.

Die Ansicht für die kleinsten Geräte ist oft eine einfache Einzelspalte von Inhalten, so wie sie im normalen Fluss erscheint. Das bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte benötigen - ordnen Sie Ihre Quelle gut und Sie werden standardmäßig ein lesbares Layout haben.

Die folgende Schritt-für-Schritt-Anleitung führt Sie durch diesen Ansatz mit einem sehr einfachen Layout. Auf einer Produktionsseite werden Sie wahrscheinlich mehr Dinge innerhalb Ihrer Media Queries anpassen müssen, jedoch wäre der Ansatz genau derselbe.

### Anleitung: ein Mobile-First-Layout

Unser Ausgangspunkt ist ein HTML-Dokument mit etwas CSS, das angewendet wird, um Hintergrundfarben zu den verschiedenen Teilen des Layouts hinzuzufügen.
Sie können den Code aus den unten stehenden Blöcken in einen Texteditor kopieren, ihn als HTML-Datei auf Ihrem Computer speichern und in Ihrem Browser öffnen oder auf "Play" klicken, um den Code im MDN Playground zu rendern und zu bearbeiten:

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

Die Quelle des Dokuments ist in einer Weise geordnet, die den Inhalt lesbar macht. Dies ist ein wichtiger erster Schritt und stellt sicher, dass, wenn der Inhalt von einem Screenreader vorgelesen würde, er verständlich wäre.
Hier sind einige gute anfängliche Stile, mit denen wir beginnen können:

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

Wenn wir das Layout im Responsive Design Mode in den DevTools betrachten, sehen wir, dass es als eine einfache mobile Ansicht der Seite ziemlich gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

Von diesem Punkt aus beginnen wir, die Responsive Design Mode-Ansicht zu erweitern, bis wir sehen, dass die Zeilenlängen ziemlich lang werden und wir Platz haben, damit die Navigation in einer horizontalen Linie angezeigt wird. Hier werden wir unsere erste Media Query hinzufügen. Wir verwenden Ems, da dies bedeutet, dass, wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, jedoch einem breiteren Viewport, als Menschen mit einer kleineren Textgröße, erfolgen wird.

Fügen Sie dies zu Ihrem CSS hinzu:

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

Dieses CSS gibt uns ein zweispaltiges Layout innerhalb des Artikels, wobei der Artikelinhalt und verwandte Informationen im `aside`-Element enthalten sind. Wir haben auch Flexbox verwendet, um die Navigation in eine Reihe zu bringen.

Lassen Sie uns weiterhin die Breite erweitern, bis wir das Gefühl haben, dass genug Platz für die Seitenleiste vorhanden ist, um ebenfalls eine neue Spalte zu bilden. Innerhalb einer Media Query machen wir das `main`-Element zu einem zweispaltigen Raster. Dann müssen wir das {{cssxref("margin-bottom")}} auf dem Artikel entfernen, um sicherzustellen, dass die beiden Seitenleisten zueinander ausgerichtet sind, und wir werden eine {{cssxref("border")}} am oberen Rand des Fußes hinzufügen. Typischerweise sind diese kleinen Anpassungen das, was Sie tun werden, um das Design an jedem Breakpoint gut aussehen zu lassen.

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

Wenn Sie sich das Ergebnis in verschiedenen Breiten ansehen, können Sie sehen, wie das Design je nach verfügbarer Breite als Einzelspalte, zwei Spalten oder drei Spalten funktioniert. Dies ist ein grundlegendes Beispiel für ein Mobile-First-Design.

## Das Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode im obigen Beispiel ansehen, sehen Sie das folgende Element im Kopf des Dokuments:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist das [Viewport-Meta-Tag](/de/docs/Web/HTML/Viewport_meta_tag) — es existiert, um zu steuern, wie mobile Browser Inhalte rendern. Dies ist erforderlich, da die meisten mobilen Browser standardmäßig über die Breite ihres Viewports lügen. Nicht-responsive Websites sehen beim Rendern in einem schmalen Viewport oft sehr schlecht aus, daher rendern mobile Browser die Website normalerweise mit einer Viewport-Breite, die größer als die tatsächliche Gerätebreite ist (meistens 980 Pixel), und verkleinern dann das gerenderte Ergebnis, sodass es in die Anzeige passt.

Dies ist alles gut und schön, bedeutet aber, dass responsive Seiten nicht wie erwartet funktionieren werden. Wenn die Viewport-Breite als 980 Pixel angegeben wird, funktionieren mobile Layouts (z. B. erstellt mittels einer Media Query von `@media screen and (max-width: 600px) { }`) nicht wie erwartet.

Um dies zu beheben, teilt das Einfügen eines Viewport-Meta-Tags wie dem oben angegebenen Ihrer Seite dem Browser mit: "Rendere den Inhalt nicht mit einem 980-Pixel-Viewport, sondern mit der tatsächlichen Gerätebreite und lege ein standardmäßiges anfängliches Zoomlevel fest, um eine bessere Konsistenz zu erzielen." Die Media Queries werden dann wie erwartet ausgelöst.

Es gibt eine Reihe weiterer Optionen, die Sie im `content`-Attribut des Viewport-Meta-Tags angeben können — siehe [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag) für mehr Details.

## Brauchen Sie wirklich eine Media Query?

Flexbox, Grid und Mehrspalten-Layout bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten ohne Media Query zu erstellen. Es lohnt sich immer zu überlegen, ob diese Layoutmethoden das erreichen können, was Sie wollen, ohne Media Queries hinzuzufügen. Beispielsweise könnten Sie eine Reihe von Karten möchten, die mindestens 200 Pixel breit sind, mit so vielen dieser 200 Pixel, wie in den Hauptartikel passen. Das kann mit dem Grid-Layout erreicht werden, ganz ohne Media Queries.

Dies könnte wie folgt erreicht werden:

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

Machen Sie den Bildschirm breiter und schmaler, um die Anzahl der Spaltenspuren ändern zu sehen. Das Schöne an dieser Methode ist, dass das Grid nicht die Viewport-Breite betrachtet, sondern die Breite, die es für diese Komponente zur Verfügung hat. Es mag seltsam erscheinen, mit dem Hinweis zu schließen, dass Sie möglicherweise überhaupt keine Media Query benötigen! In der Praxis werden Sie jedoch feststellen, dass die gute Nutzung moderner Layoutmethoden, ergänzt durch Media Queries, die besten Ergebnisse liefert.

## Testen Sie Ihr Wissen

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einen Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Responsive Webdesign und Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/rwd_skills).

## Zusammenfassung

In dieser Lektion haben Sie über Media Queries gelernt und erfahren, wie Sie sie in der Praxis verwenden, um ein mobiles Responsive-Design zu erstellen.

Sie könnten den Ausgangspunkt, den wir erstellt haben, verwenden, um mehr Media Queries zu testen. Vielleicht könnten Sie beispielsweise die Größe der Navigation ändern, wenn Sie feststellen, dass der Besucher ein grobes Zeigegerät hat, indem Sie das Medienmerkmal `pointer` verwenden.

Sie könnten auch damit experimentieren, verschiedene Komponenten hinzuzufügen und zu sehen, ob das Hinzufügen einer Media Query oder die Verwendung einer Layoutmethode wie Flexbox oder Grid der geeignetste Weg ist, um die Komponenten responsiv zu machen. Oft gibt es keinen richtigen oder falschen Weg – Sie sollten experimentieren und sehen, was am besten für Ihr Design und Ihren Inhalt funktioniert.

Okay, wir sind fast am Ende dieses Moduls. Lassen Sie uns mit einer Herausforderung abschließen, um Ihr Verständnis zu testen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}
