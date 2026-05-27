---
title: Grundlagen von Media Queries
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 418fefaa02f8e1ea53d53cb6fc510a4dc4100dc5
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

Die **CSS Media Query** bietet Ihnen die Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen festgelegten Regel entspricht, zum Beispiel "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des [responsive Webdesigns](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), da sie es Ihnen ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. Sie können aber auch verwendet werden, um andere Dinge über die Umgebung, in der Ihre Website läuft, zu erkennen, zum Beispiel ob der Benutzer einen Touchscreen anstelle einer Maus verwendet.

In dieser Lektion lernen Sie zunächst die in Media Queries verwendete Syntax kennen und verwenden sie dann in Beispielen, um zu zeigen, wie ein grundlegendes Design reaktionsfähig gemacht werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgebung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Syntax von Media Queries.</li>
          <li>Die gängigen Arten von Media Queries.</li>
          <li>Verwendung von <code>width</code>- und <code>height</code>-Media Queries, um responsive Layouts zu erstellen.</li>
          <li>Auswahl von Breakpoints.</li>
          <li>Verwendung von Media Queries zur Implementierung eines Mobile-First-Designs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen der Media Query

Die einfachste Media-Query-Syntax sieht folgendermaßen aus:

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

Sie besteht aus:

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medien dieser Code gedacht ist (Druck oder Bildschirm).
- Einer Medienausdruck, bei dem es sich um eine Regel oder einen Test handelt, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einem Satz von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query setzt den Body nur auf 12pt, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der hier verwendete Medientyp unterscheidet sich vom sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.
> Es gab eine Reihe von weiteren Medientypen, die in der Media Queries Level 3 Spezifikation definiert waren; diese wurden depreziert und sollten vermieden werden.
> Medientypen sind optional; wenn Sie in Ihrer Media Query keinen Medientyp angeben, wird die Media Query standardmäßig für alle Medientypen gelten.

### Medienmerkmal-Regeln

Nachdem Sie den Typ angegeben haben, können Sie dann mit einer Regel ein Medienmerkmal anvisieren.
Die folgenden Beispiele zeigen, wie man verschiedene Media Queries verwendet.
Um die `width` Ihres Bildschirms zu ändern, ändern Sie die Größe Ihres Browsers oder drehen Sie Ihr Handgerät.

> [!NOTE]
> Alternativ können Sie die responsive Größenanpassungsfunktionen der Entwicklerwerkzeuge eines Browsers verwenden (z. B. Firefox [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/)), um unterschiedliche Gerätebreiten zu simulieren.

#### Breite und Höhe

Das Merkmal, das wir am häufigsten erkennen, um responsive Designs zu erstellen (und das weit verbreitete Browserunterstützung hat), ist die Viewportbreite, und wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite – oder einer exakten Breite – liegt, indem wir das `width` Medienmerkmal verwenden und es nach Bedarf mit `min-` oder `max-` voranstellen.

Diese Merkmale werden verwendet, um Layouts zu erstellen, die auf unterschiedliche Bildschirmgrößen reagieren. Um zum Beispiel die Textfarbe des Bodys auf Rot zu setzen, wenn der Viewport genau 600 Pixel breit ist, würde man die folgende Media Query verwenden.

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

Versuchen Sie, die Breite des Browserfensters anzupassen, um den Sweet Spot zu finden, an dem das obige Demo genau `600px` breit ist, sodass der Text rot wird.

Die `width` (und `height`) Medienmerkmale können als Bereiche verwendet werden und können daher mit `min-` oder `max-` vorangestellt werden, um anzuzeigen, dass der angegebene Wert ein Minimum oder Maximum ist. Um beispielsweise die Farbe Blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

In der Praxis ist die Verwendung von Minimum- oder Maximalwerten für das responsive Design viel nützlicher, daher werden Sie selten `width` oder `height` allein verwendet sehen.

Es gibt viele andere Medienmerkmale, die Sie testen können, obwohl einige der neueren Merkmale, die in den Levels 4 und 5 der Media Queries-Spezifikation eingeführt wurden, eine begrenzte Browserunterstützung haben. Jedes Merkmal wird auf MDN zusammen mit Informationen zur Browserunterstützung dokumentiert, und Sie können eine vollständige Liste unter [Using Media Queries: Syntax](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax) finden.

#### Orientierung

Ein gut unterstütztes Medienmerkmal ist `orientation`, mit dem wir die Ausrichtung im Hoch- oder Querformat testen können. Um die Textfarbe des Bodys zu ändern, wenn sich das Gerät im Querformat befindet, verwenden Sie die folgende Media Query.

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

Das obige Beispiel ist ziemlich schwer auf der Seite zu testen; um es in Aktion zu sehen, wird empfohlen, den obigen Code in eine lokale HTML-Datei zu kopieren und diese in einem eigenen Tab zu öffnen.

Eine Standard-Desktop-Ansicht hat eine Querformatausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Handy oder Tablet im Hochformat betrachtet wird. Die Testung der Ausrichtung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Als Teil der Level 4-Spezifikation wurde das Medienmerkmal `hover` eingeführt. Dieses Merkmal ermöglicht es Ihnen, zu testen, ob der Benutzer die Fähigkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er eine Art Zeigegerät verwendet; Berührungsbildschirm und Tastaturnavigation schweben nicht.

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

Das obige Beispiel wechselt zu weißem Text auf schwarzem Hintergrund, wenn es überfahren wird, aber nur auf Geräten, bei denen das Schweben möglich ist. Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Bei Benutzern, die schweben können, könnten wir wählen, diese verfügbar zu machen, wenn ein Link überfahren wird.

Ebenfalls in Level 4 ist das Medienmerkmal `pointer`. Dieses nimmt drei mögliche Werte an: `none`, `fine` und `coarse`. Ein `fine`-Zeiger ist etwas wie eine Maus oder ein Trackpad. Er ermöglicht es dem Benutzer, ein kleines Gebiet präzise zu treffen. Ein `coarse`-Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät besitzt; möglicherweise navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen dabei helfen, bessere Schnittstellen zu gestalten, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Zum Beispiel könnten Sie größere Trefferflächen erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

### Verwendung des Bereichs-Syntax

Ein häufiger Fall ist die Prüfung, ob die Viewportbreite zwischen zwei Werten liegt:

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

In diesem Fall werden die Stile angewendet, wenn die Viewportbreite zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Mit all den verschiedenen möglichen Media Queries möchten Sie vielleicht diese kombinieren oder Listen von Abfragen erstellen – von denen jede übereinstimmen könnte.

Wie zuvor, versuchen Sie, die Beispiele in diesem Abschnitt zu testen, indem Sie die Breite Ihres Browsers anpassen.

### "und" Logik in Media Queries

Um Medienmerkmale zu kombinieren, können Sie `and` verwenden, ähnlich wie wir es oben verwendet haben, um einen Medientyp und ein Merkmal zu kombinieren. Zum Beispiel könnten wir `width` und `orientation` testen wollen. Der Body-Text wird nur dann blau, wenn der Viewport mindestens 600 Pixel breit ist und sich das Gerät im Querformat befindet.

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

### "oder" Logik in Media Queries

Wenn Sie eine Reihe von Abfragen haben, von denen jede übereinstimmen könnte, dann können Sie diese Abfragen durch Kommas trennen. Im folgenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER das Gerät sich im Querformat befindet. Wenn eine dieser Bedingungen wahr ist, stimmt die Abfrage.

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

### "nicht" Logik in Media Queries

Sie können eine gesamte Medienabfrage negieren, indem Sie den Operator `not` verwenden. Dies kehrt die Bedeutung der gesamten Media Query um. Im nächsten Beispiel wird der Text nur dann blau, wenn der Viewport _nicht_ mindestens 600 Pixel breit ist.

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

Sie können auch `not` verwenden, um bestimmte Ausdrücke zu negieren.

```css
@media (not (width < 600px)) and (not (width > 1000px)) {
  body {
    color: blue;
  }
}
```

Dies wird die Stile anwenden, wenn die Viewportbreite zwischen 600 und 1000 Pixeln liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Wie Sie Breakpoints wählen

In den frühen Tagen des responsive Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen zu anvisieren. Listen von Bildschirmgrößen beliebter Telefone und Tablets wurden veröffentlicht, damit Designs erstellt werden konnten, die diesen Viewports genau entsprechen.

Es gibt jetzt weit zu viele Geräte mit einer großen Vielfalt an Größen, um das praktikabel zu machen. Das bedeutet, dass anstelle der Zielsetzung spezifischer Größen für alle Designs ein besserer Ansatz darin besteht, das Design an der Größe zu ändern, an der der Inhalt in irgendeiner Weise bricht. Vielleicht werden die Zeilenlängen viel zu lang oder eine Seitenleiste wird gequetscht und schwer lesbar. An diesem Punkt möchten Sie eine Media Query verwenden, um das Design in ein besseres für den Ihnen zur Verfügung stehenden Platz zu ändern. Dieser Ansatz bedeutet, dass es keine Rolle spielt, wie die exakten Dimensionen des verwendeten Geräts sind; jede Reichweite wird berücksichtigt. Die Punkte, an denen eine Media Query eingeführt wird, sind als **Breakpoints** bekannt.

Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in den Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints gesetzt werden sollten. Sie können die Ansicht einfach verkleinern und vergrößern, um zu sehen, wo der Inhalt durch das Hinzufügen einer Media Query und das Anpassen des Designs verbessert werden würde.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in den Firefox DevTools.](rwd-mode.png)

## Mobile-First Responsive Design

Im Wesentlichen können Sie zwei Ansätze für das responsive Design verfolgen. Sie können mit Ihrer Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um Dinge zu verschieben, wenn der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layout hinzufügen, wenn der Viewport größer wird. Dieser zweite Ansatz wird als **mobile first** responsive Design beschrieben und ist oft der beste Ansatz, dem zu folgen.

Die Ansicht für die kleinsten Geräte ist häufig eine einfache einspaltige Anordnung des Inhalts, wie sie im normalen Fluss erscheint. Das bedeutet, dass Sie für kleine Geräte wahrscheinlich nicht viel Layout machen müssen – ordnen Sie Ihre Quelle gut und Sie haben von vornherein ein lesbares Layout.

## Erstellen Ihres eigenen Mobile-First-Designs

Jetzt sind Sie an der Reihe; in diesem Tutorial-Abschnitt werden Sie Ihr eigenes grundlegendes Mobile-First Responsive Design erstellen. Auf einer Produktionssite müssen Sie wahrscheinlich mehr Dinge innerhalb Ihrer Media Queries anpassen, aber der Ansatz wird genau derselbe sein.

### Erste Schritte

Unser Ausgangspunkt ist ein HTML-Dokument mit etwas CSS, um Hintergrundfarben zu den verschiedenen Teilen des Layouts hinzuzufügen.

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

Die Quelle des Dokuments ist in einer Weise angeordnet, die den Inhalt lesbar macht. Dies ist ein wichtiger erster Schritt und stellt sicher, dass der Inhalt verständlich wäre, wenn er von einem Screenreader vorgelesen wird.

Die anfänglichen Stile für unser Beispiel sind wie folgt; kopieren Sie diese in Ihre HTML-Datei innerhalb der `<style></style>`-Tags und ersetzen Sie den `/* Add styles here */`-Kommentar.

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

Wenn Sie das Layout im Responsive Design Mode in den DevTools anzeigen oder Ihr Browserfenster auf eine mobile Breite verengen, werden Sie feststellen, dass es als einfache mobile Ansicht der Website ziemlich gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

### Erstellen eines zweispaltigen Layouts für mittlere Breiten

Ziehen Sie das Fenster breiter, bis Sie sehen, dass die Zeilenlängen ziemlich lang werden; an diesem Punkt haben Sie Platz für die Navigation, um in einer horizontalen Linie angezeigt zu werden. Hier werden wir unsere erste Media Query hinzufügen. Wir werden `em` Einheiten verwenden, da dies bedeutet, dass, wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, aber breiteren Viewport, als bei jemandem mit kleinerer Textgröße erfolgt.

Fügen Sie das Folgende unten in Ihr CSS ein:

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

Dieses CSS gibt uns ein zweispaltiges Layout innerhalb des `<article>`, bestehend aus dem Artikelinhalt und den zugehörigen Informationen im `<aside>`-Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Zeile zu bringen.

### Hinzufügen einer dritten Spalte für breitere Bildschirme

Lassen Sie uns die Breite weiter vergrößern, bis wir das Gefühl haben, dass genügend Platz vorhanden ist, damit die Seitenleiste auch eine neue Spalte bilden kann. Innerhalb einer Media Query machen wir dann das `<main>`-Element zu einem zweispaltigen Gitter. Wir müssen dann den {{cssxref("margin-bottom")}} am Artikel entfernen, damit die beiden Seitenleisten miteinander ausgerichtet sind, und wir werden einen {{cssxref("border")}} an die Spitze der Fußzeile hinzufügen. Typischerweise sind diese kleinen Anpassungen die Art von Dingen, die Sie durchführen werden, um das Design an jedem Breakpoint gut aussehen zu lassen.

Fügen Sie das Folgende unten in Ihr CSS ein:

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

Das war das vollendete Beispiel. Wenn Sie das Ergebnis bei unterschiedlichen Breiten betrachten, können Sie sehen, wie das Design als eine Spalte, zwei Spalten oder drei Spalten, je nach verfügbarer Breite, reagiert und funktioniert. Dies ist ein grundlegendes Beispiel für ein Mobile-First Responsive Design.

### viewport meta

Wenn Sie im obigen Beispiel den HTML-Quellcode ansehen, werden Sie folgendes Element im Kopf des Dokuments sehen:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist der [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag – er existiert als Möglichkeit, um zu steuern, wie mobile Browser Inhalte rendern, um sicherzustellen, dass sie Ihre Media Queries respektieren. Das oben genannte sagt mobilen Browsern "rendern Sie den Inhalt nicht mit einem Viewport von 980 Pixeln – rendern Sie ihn stattdessen mit der tatsächlichen Gerätebreite und setzen Sie einen Standard-Einstellskalenlevel für bessere Konsistenz". Die Media Queries werden dann wie erwartet angewendet.

Für weitere Informationen, warum dies benötigt wird, siehe den Abschnitt [Der viewport Meta-Tag](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#the_viewport_meta_tag) im vorherigen Artikel.

## Benötigen Sie wirklich eine Media Query?

Flexbox und CSS Grid geben Ihnen Möglichkeiten, flexible und sogar responsive Komponenten ohne die Notwendigkeit einer Media Query zu erstellen: Es lohnt sich immer zu überlegen, ob Sie wirklich eine brauchen. Zum Beispiel könnten Sie eine Reihe von Karten wollen, die mindestens 200 Pixel breit sind, und so viele dieser 200 Pixel in der Hauptinhaltsspalte wie möglich, unabhängig davon, wie breit sie ist.

Dies kann mit CSS Grid erreicht werden, ohne dass Media Queries erforderlich sind:

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

Versuchen Sie, Ihr Browserfenster breiter und schmaler zu machen, um zu sehen, wie sich die Anzahl der Spaltenspuren ändert.

Das Schöne an dieser Methode ist, dass das Gitter nicht die Viewportbreite betrachtet, sondern die Breite, die ihm für diese Komponente zur Verfügung steht. Es mag seltsam erscheinen, einen Abschnitt über Media Queries mit dem Vorschlag zu beenden, dass Sie möglicherweise überhaupt keine benötigen! In der Praxis werden Sie jedoch feststellen, dass eine gute Nutzung moderner Layoutmethoden, ergänzt durch Media Queries, die besten Ergebnisse liefert.

## Zusammenfassung

In dieser Lektion haben Sie gelernt, was Media Queries sind, und auch erfahren, wie Sie diese in der Praxis verwenden, um ein mobiles esign`s.
