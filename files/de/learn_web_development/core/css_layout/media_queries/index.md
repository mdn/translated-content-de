---
title: Grundlagen zu Media Queries
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 2a4d705a12d76ee17e013f8a50007fd25029e0fc
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

Die **CSS Media Query** bietet eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen festgelegten Regel entspricht, beispielsweise "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des [responsiven Webdesigns](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), da sie es ermöglichen, unterschiedliche Layouts je nach Größe des Viewports zu erstellen. Sie können jedoch auch verwendet werden, um andere Eigenschaften der Umgebung zu erkennen, in der Ihre Site ausgeführt wird, zum Beispiel, ob der Benutzer einen Touchscreen statt einer Maus verwendet.

In dieser Lektion lernen Sie zunächst die in Media Queries verwendete Syntax kennen und wenden sich dann der Verwendung in Beispielen zu, die zeigen, wie ein grundlegendes Design responsiv gestaltet werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen des CSS-Stylings</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
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
- Einer Medienausdruck, der eine Regel oder ein Test ist, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einer Reihe von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query setzt den Textkörper nur dann auf 12pt, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen ist.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der hier verwendete Medientyp unterscheidet sich vom sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.
> Es gab eine Reihe anderer Medientypen, die in der Media Queries Level 3-Spezifikation definiert wurden; diese sind veraltet und sollten vermieden werden.
> Medientypen sind optional; wenn Sie in Ihrer Media Query keinen Medientyp angeben, wird die Media Query standardmäßig für alle Medientypen angewendet.

### Regeln für Medienmerkmale

Nachdem Sie den Typ angegeben haben, können Sie anschließend ein Medienmerkmal mit einer Regel anvisieren.
Die folgenden Beispiele zeigen, wie verschiedene Media Queries verwendet werden.
Um die `width` Ihres Bildschirms zu ändern, ändern Sie die Größe Ihres Browsers oder drehen Sie Ihr Handheld-Gerät.

> [!NOTE]
> Alternativ können Sie die Funktion zur responsiven Größenanpassung der Entwicklerwerkzeuge des Browsers (wie den [Modus für responsives Design](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/)) verwenden, um verschiedene Gerätebreiten zu simulieren.

#### Breite und Höhe

Das häufigste Merkmal, das wir zur Erstellung responsiver Designs erkennen (und das weit verbreitete Browserunterstützung hat), ist die Viewport-Breite. Wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite — oder einer exakten Breite — liegt, indem wir das `width`-Medienmerkmal verwenden und es nach Bedarf mit `min-` oder `max-` präfixieren.

Diese Merkmale werden verwendet, um Layouts zu erstellen, die auf unterschiedliche Bildschirmgrößen reagieren. Um beispielsweise die Textfarbe des Körpers auf Rot zu setzen, wenn der Viewport genau 600 Pixel breit ist, würden Sie die folgende Media Query verwenden.

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

Versuchen Sie, die Fensterbreite des Browsers anzupassen, um den optimalen Punkt zu finden, an dem das obige Demo genau `600px` breit ist, sodass der Text rot wird.

Die `width` (und `height`)-Medienmerkmale können als Bereiche verwendet werden und daher mit `min-` oder `max-` präfixiert werden, um anzuzeigen, dass der angegebene Wert ein Minimum oder ein Maximum ist. Um beispielsweise die Farbe Blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

In der Praxis ist die Verwendung von Minimal- oder Maximalwerten viel nützlicher für responsives Design, sodass Sie selten `width` oder `height` allein sehen werden.

Es gibt viele andere Medienmerkmale, die Sie testen können, obwohl einige der neueren in den Levels 4 und 5 der Media Queries-Spezifikation eingeführten Merkmale begrenzte Browserunterstützung haben. Jedes Merkmal ist auf MDN zusammen mit Informationen zur Browserunterstützung dokumentiert, und Sie finden eine vollständige Liste unter [Using Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

#### Ausrichtung

Ein gut unterstütztes Medienmerkmal ist `orientation`, mit dem wir die Ausrichtung im Hoch- oder Querformat testen können. Um die Textfarbe des Körpers zu ändern, wenn das Gerät im Querformat ist, verwenden Sie die folgende Media Query.

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

Das obige Beispiel ist ziemlich schwierig, in der Seite zu testen; um es in Aktion zu sehen, wird empfohlen, den obigen Code in eine lokale HTML-Datei zu kopieren und in einem separaten Tab zu öffnen.

Ein standardmäßiges Desktop-Ansicht ist im Querformat, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat betrachtet wird. Das Testen der Ausrichtung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Im Rahmen der Level 4-Spezifikation wurde das `hover`-Medienmerkmal eingeführt. Dieses Merkmal ermöglicht es Ihnen zu testen, ob der Benutzer die Fähigkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er irgendeine Art von Zeigegerät verwendet; Touchscreen- und Tastaturnavigation schweben nicht.

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

Das obige Beispiel ändert sich zu weißem Text auf schwarz, wenn man darüber schwebt, jedoch nur auf Geräten, bei denen das Schweben möglich ist. Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir diese verfügbar machen, wenn ein Link überschwebt wird.

Auch in Level 4 ist das `pointer`-Merkmal enthalten. Es nimmt drei mögliche Werte an, `none`, `fine` und `coarse`. Ein `fine`-Zeiger ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, ein kleines Gebiet genau anzuvisieren. Ein `coarse`-Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; vielleicht navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Beispielsweise könnten Sie größere Trefferflächen erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

### Verwendung der Bereichssyntax

Ein häufiger Fall ist es, zu prüfen, ob die Viewport-Breite zwischen zwei Werten liegt:

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

In diesem Fall werden die Styles angewendet, wenn die Viewport-Breite zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Bei all den verschiedenen möglichen Media Queries möchten Sie sie möglicherweise kombinieren oder Listen von Abfragen erstellen — von denen jede zutreffen könnte.

Wie zuvor, testen Sie die Beispiele in diesem Abschnitt, indem Sie Ihre Browserbreite anpassen.

### "und"-Logik in Media Queries

Um Medienmerkmale zu kombinieren, können Sie `and` in ähnlicher Weise verwenden, wie wir `and` oben verwendet haben, um einen Medientyp und ein Merkmal zu kombinieren. Beispielsweise möchten wir vielleicht die `width` und die `orientation` testen. Der Textkörper wird nur blau, wenn der Viewport mindestens 600 Pixel breit ist und sich das Gerät im Querformat befindet.

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

Wenn Sie eine Reihe von Abfragen haben, von denen jede zutreffen könnte, können Sie diese Abfragen mit Kommas trennen. Im untenstehenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER sich das Gerät im Querformat befindet. Wenn eine dieser Bedingungen zutrifft, entspricht die Abfrage.

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

Sie können eine gesamte Media Query durch Verwendung des `not`-Operators verneinen. Dies kehrt die Bedeutung der gesamten Media Query um. Daher wird im nächsten Beispiel der Text nur dann blau, wenn der Viewport _nicht_ mindestens 600 Pixel breit ist.

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

Sie können `not` auch verwenden, um bestimmte Ausdrücke zu verneinen.

```css
@media (not (width < 600px)) and (not (width > 1000px)) {
  body {
    color: blue;
  }
}
```

Dies wird die Styles anwenden, wenn die Viewport-Breite zwischen 600 und 1000 Pixel liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Anleitung zur Auswahl von Breakpoints

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen zu erreichen. Listen von Bildschirmgrößen beliebter Telefone und Tablets wurden veröffentlicht, damit Designs erstellt werden könnten, um genau diesen Viewports zu entsprechen.

Heute gibt es viel zu viele Geräte mit einer großen Vielfalt an Größen, um das realisierbar zu machen. Das bedeutet, dass statt spezifische Größen für alle Designs zu zielen, ein besserer Ansatz darin besteht, das Design an der Stelle zu ändern, an der der Inhalt in irgendeiner Weise zu brechen beginnt. Vielleicht werden die Zeilenlängen viel zu lang oder eine Seitenleiste wird eingequetscht und schwer lesbar. An diesem Punkt sollten Sie eine Media Query verwenden, um das Design in ein besseres für den verfügbaren Raum zu ändern. Dieser Ansatz bedeutet, dass es keine Rolle spielt, welche genauen Abmessungen das verwendete Gerät hat; jeder Bereich wird abgedeckt. Die Punkte, an denen eine Media Query eingeführt wird, werden als **Breakpoints** bezeichnet.

[Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints platziert werden sollten. Sie können den Viewport einfach kleiner und größer machen, um zu sehen, wo der Inhalt durch das Hinzufügen einer Media Query und das Anpassen des Designs verbessert würde.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in den Firefox DevTools.](rwd-mode.png)

## Mobile-First-Responsive-Design

Im Großen und Ganzen können Sie zwei Ansätze für responsive Design verfolgen. Sie können mit Ihrer Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um die Elemente zu verschieben, wenn der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layouts hinzufügen, während der Viewport größer wird. Dieser zweite Ansatz wird als **Mobile-First**-Responsive Design beschrieben und ist oft der beste Ansatz, dem Sie folgen sollten.

Die Ansicht für die allerkleinsten Geräte ist oft eine einfache einspaltige Anordnung von Inhalten, so wie sie im normalen Fluss erscheinen. Das bedeutet, dass Sie wahrscheinlich nicht viel Layoutarbeit für kleine Geräte benötigen — ordnen Sie Ihre Quelle gut an und Sie werden standardmäßig ein lesbares Layout haben.

## Erstellen Ihres eigenen Mobile-First-Designs

Jetzt sind Sie an der Reihe; in diesem Tutorial-Abschnitt werden Sie Ihr eigenes einfaches mobile-first responsives Design aufbauen. In einer Produktionssite haben Sie wahrscheinlich mehr Dinge, die Sie innerhalb Ihrer Media Queries anpassen müssen, aber der Ansatz wird genau derselbe sein.

### Erste Schritte

Unser Ausgangspunkt ist ein HTML-Dokument mit einigen CSS-Regeln, um den verschiedenen Teilen des Layouts Hintergrundfarben hinzuzufügen.

Zuerst kopieren Sie den HTML-Code aus dem folgenden Block in einen Texteditor, speichern ihn als HTML-Datei auf Ihrem Computer und öffnen ihn in Ihrem Browser:

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

Die Quelle des Dokuments ist auf eine Weise geordnet, die den Inhalt lesbar macht. Dies ist ein wichtiger erster Schritt, der sicherstellt, dass der Inhalt, wenn er von einem Screenreader vorgelesen würde, verständlich wäre.

Die anfänglichen Styles für unser Beispiel sind wie folgt; kopieren Sie diese in Ihre HTML-Datei innerhalb der `<style></style>`-Tags und ersetzen Sie den `/* Add styles here */` Kommentar.

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

Wenn Sie das Layout im Responsive Design Mode in den DevTools anzeigen oder Ihr Browserfenster auf eine mobile Breite verkleinern, werden Sie feststellen, dass es als einfache mobile Ansicht der Site ziemlich gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

### Erstellen eines zweispaltigen Layouts für mittlere Breiten

Ziehen Sie das Fenster breiter, bis Sie sehen können, dass die Zeilenlängen ziemlich lang werden; zu diesem Zeitpunkt haben Sie Platz, damit sich die Navigation in einer horizontalen Linie anordnen kann. Hier fügen wir unsere erste Media Query hinzu. Wir verwenden `em`-Einheiten, da dies bedeutet, dass wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, jedoch breiterem Viewport, als jemand mit einer kleineren Textgröße auftreten wird.

Fügen Sie das folgende CSS am Ende Ihres CSS hinzu:

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

Dieses CSS gibt uns ein zweispaltiges Layout im `<article>`, bestehend aus dem Artikelinhalt und den verwandten Informationen im `<aside>`-Element. Wir haben außerdem Flexbox verwendet, um die Navigation in eine Zeile zu bringen.

### Hinzufügen einer dritten Spalte für breitere Bildschirme

Lassen Sie uns weiter die Breite erhöhen, bis wir das Gefühl haben, dass genug Platz für die Sidebar ist, um ebenfalls eine neue Spalte zu bilden. Innerhalb einer Media Query machen wir das `<main>`-Element zu einem zweispaltigen Raster. Wir müssen dann die {{cssxref("margin-bottom")}} auf dem Artikel entfernen, damit die beiden Sidebars aufeinander ausgerichtet sind, und wir fügen dem Footer einen {{cssxref("border")}} hinzu. Typischerweise sind diese kleinen Anpassungen die Art von Dingen, die Sie tun, um das Design an jedem Breakpoint gut aussehen zu lassen.

Fügen Sie das folgende CSS am Ende Ihres CSS hinzu:

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

Das Beispiel ist damit abgeschlossen. Wenn Sie sich das Ergebnis bei verschiedenen Breiten ansehen, können Sie sehen, wie das Design als eine einzige Spalte, zwei Spalten oder drei Spalten reagiert und funktioniert, je nach verfügbarer Breite. Dies ist ein grundlegendes Beispiel für ein Mobile-First-Responsive-Design.

### viewport meta

Wenn Sie sich den HTML-Quellcode im obigen Beispiel ansehen, werden Sie das folgende Element im Kopf des Dokuments sehen:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist der [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag — er existiert als eine Möglichkeit, zu kontrollieren, wie mobile Browser Inhalte rendern und sicherstellen, dass sie Ihre Media Queries respektieren. Das obige Beispiel teilt mobilen Browsern mit: "Rendern Sie den Inhalt nicht mit einem 980-Pixel-Viewport — rendern Sie ihn stattdessen mit der eigentlichen Gerätebreite und setzen Sie eine standardmäßige initiale Skalierungsstufe für eine bessere Konsistenz." Die Media Queries werden dann wie erwartet wirksam.

Weitere Informationen, warum dies erforderlich ist, finden Sie im Abschnitt [Das viewport meta tag](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#the_viewport_meta_tag) im vorherigen Artikel.

## Benötigen Sie wirklich eine Media Query?

Flexbox und CSS Grid bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten ohne die Notwendigkeit einer Media Query zu erstellen: Es lohnt sich immer zu überlegen, ob Sie wirklich eine benötigen. Beispielsweise möchten Sie möglicherweise eine Reihe von Karten, die mindestens 200 Pixel breit sind, und so viele dieser 200 Pixel in die Hauptinhaltsspalte passen, egal wie breit sie ist.

Dies kann mit CSS Grid ohne Media Queries erreicht werden:

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

Versuchen Sie, Ihr Browserfenster breiter und schmaler zu machen, um die Anzahl der Spalten zu ändern.

Das Schöne an dieser Methode ist, dass das Raster nicht auf die Viewport-Breite schaut, sondern auf die Breite, die für diese Komponente verfügbar ist. Es mag seltsam erscheinen, einen Abschnitt über Media Queries mit dem Vorschlag abzuschließen, dass Sie möglicherweise gar keine benötigen! In der Praxis werden Sie jedoch feststellen, dass die gute Nutzung moderner Layoutmethoden, in Verbindung mit Media Queries, die besten Ergebnisse liefert.

## Zusammenfassung

In dieser Lektion haben Sie gelernt, was Media Queries sind, und auch entdeckt, wie man sie in der Praxis verwendet, um ein Mobile-First-Responsive-Design zu erstellen.

Sie könnten den Ausgangspunkt verwenden, den wir erstellt haben, um mehr Media Queries zu testen. Zum Beispiel könnten Sie die Größe der Navigation ändern, wenn Sie feststellen, dass der Besucher einen groben Zeiger hat, indem Sie das `pointer`-Medienmerkmal verwenden.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und prüfen, ob die Hinzufügung einer Media Query oder die Verwendung einer Layoutmethode wie Flexbox oder Grid die geeignetste Möglichkeit ist, die Komponenten responsiv zu gestalten. Sehr oft gibt es kein richtiges oder falsches Vorgehen — Sie sollten experimentieren und sehen, was am besten für Ihr Design und Ihre Inhalte funktioniert.

Ok, wir sind fast am Ende dieses Moduls. Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu prüfen, wie gut Sie alle Informationen zu Responsive Web Design und Media Queries aus den vorhergehenden Artikeln verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}
