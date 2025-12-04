---
title: Grundlagen von Media Queries
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

Die **CSS Media Query** bietet Ihnen die Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen angegebenen Regel entspricht, beispielsweise "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des [Responsive Webdesigns](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), da sie es ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. Sie können jedoch auch verwendet werden, um andere Merkmale der Umgebung zu erkennen, in der Ihre Website läuft, beispielsweise ob der Benutzer einen Touchscreen statt einer Maus verwendet.

In dieser Lektion lernen Sie zuerst die in Media Queries verwendete Syntax kennen und verwenden sie anschließend in Beispielen, um zu zeigen, wie ein einfaches Design reaktionsfähig gemacht werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturierung von Inhalten mit HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit den <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Syntax von Media Queries.</li>
          <li>Die gebräuchlichen Arten von Media Queries.</li>
          <li>Verwendung von <code>width</code> und <code>height</code> Media Queries, um flexible Layouts zu erstellen.</li>
          <li>Auswahl von Breakpoints.</li>
          <li>Verwendung von Media Queries zur Implementierung eines Mobile-First-Designs.</li>
        </ul>
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

- Einem Medientyp, der dem Browser sagt, für welche Art von Medien dieser Code gedacht ist (Druck oder Bildschirm).
- Einer Medienausdruck, der eine Regel oder ein Test ist, den der Test bestehen muss, damit das enthaltene CSS angewendet wird.
- Einem Satz von CSS-Regeln, die angewendet werden, wenn der Test bestanden wurde und der Medientyp korrekt ist.

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
> Der Medientyp hier unterscheidet sich von dem sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.
> Es gab eine Reihe von anderen Medientypen, die in der Level 3 Media Queries-Spezifikation definiert wurden; diese wurden abgelehnt und sollten vermieden werden.
> Medientypen sind optional; wenn Sie keinen Medientyp in Ihrer Media Query angeben, wird die Media Query standardmäßig für alle Medientypen gelten.

### Regeln für Medienmerkmale

Nachdem Sie den Typ angegeben haben, können Sie ein Medienmerkmal mit einer Regel anvisieren. Die folgenden Beispiele zeigen, wie man verschiedene Medienabfragen benutzt. Um die `width` Ihres Bildschirms zu ändern, ändern Sie die Größe Ihres Browsers oder drehen Sie Ihr Handgerät.

> [!NOTE]
> Alternativ können Sie die responsiven Größenfunktionen der Entwicklerwerkzeuge des Browsers nutzen (wie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/) von Firefox), um verschiedene Gerätebreiten zu simulieren.

#### Breite und Höhe

Das Merkmal, das wir am häufigsten erkennen, um reaktionsfähige Designs zu erstellen (und das weit verbreitete Browserunterstützung hat), ist die Viewport-Breite. Wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite liegt — oder eine genaue Breite hat — indem wir das `width`-Medienmerkmal verwenden und es gegebenenfalls mit `min-` oder `max-` präfixen.

Diese Merkmale werden verwendet, um Layouts zu erstellen, die auf unterschiedliche Bildschirmgrößen reagieren. Zum Beispiel, um die Textfarbe des Bodys auf Rot zu setzen, wenn der Viewport genau 600 Pixel ist, würden Sie die folgende Media Query verwenden.

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

Versuchen Sie, die Breite des Browserfensters anzupassen, um den Punkt zu finden, an dem das obige Demo genau `600px` breit ist, sodass sich der Text rot färbt.

Die `width`- (und `height`-)Medienmerkmale können als Bereiche verwendet werden und können daher mit `min-` oder `max-` präfixiert werden, um anzugeben, dass der angegebene Wert ein Minimum oder ein Maximum ist. Zum Beispiel, um die Farbe blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

Versuchen Sie, das Fenster so weit zu verkleinern, bis sich der obige Text blau färbt.

In der Praxis ist die Verwendung von Mindest- oder Höchstwerten für reaktionsfähiges Design viel nützlicher, sodass Sie selten sehen werden, dass `width` oder `height` alleine verwendet werden.

Es gibt viele andere Medienmerkmale, die Sie testen können, obwohl einige der neueren Merkmale, die in den Stufen 4 und 5 der Media Queries-Spezifikation eingeführt wurden, eine begrenzte Browserunterstützung haben. Jedes Merkmal ist in MDN dokumentiert, zusammen mit Informationen zur Browserunterstützung, und Sie können eine vollständige Liste unter [Verwendung von Media Queries: Syntax](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax) finden.

#### Ausrichtung

Ein gut unterstütztes Medienmerkmal ist `orientation`, mit dem wir auf Hoch- oder Querformat testen können. Um die Body-Textfarbe zu ändern, wenn das Gerät im Querformat ist, verwenden Sie die folgende Media Query.

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

Das obige Beispiel ist ziemlich schwierig, auf der Seite zu testen; es wird empfohlen, den obigen Code in eine lokale HTML-Datei zu kopieren und in einem eigenen Tab zu öffnen.

Eine standardmäßige Desktop-Ansicht hat eine Landschaftsausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat betrachtet wird. Das Testen auf die Ausrichtung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Als Teil der Level 4-Spezifikation wurde das Medienmerkmal `hover` eingeführt. Dieses Merkmal bedeutet, dass Sie testen können, ob der Benutzer die Fähigkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er irgendeine Art von Zeigegerät verwendet; Touchscreen- und Tastaturnavigation schweben nicht.

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

Das obige Beispiel wechselt zu weißem Text auf schwarz, wenn mit der Maus darüber gefahren wird, jedoch nur auf Geräten, bei denen ein Hover möglich ist. Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir wählen, sie bei Hover über einen Link verfügbar zu machen.

Ebenfalls in Level 4 ist das Medienmerkmal `pointer`. Dies hat drei mögliche Werte: `none`, `fine` und `coarse`. Ein `fine`-Zeiger ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, eine kleine Fläche genau zu zielgerichtet anzusteuern. Ein `coarse`-Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; möglicherweise navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Zum Beispiel könnten Sie größere Trefferbereiche erstellen, wenn Sie wissen, dass der Nutzer mit dem Gerät als Touchscreen interagiert.

### Verwendung der Bereichssyntax

Ein häufiger Fall ist, zu überprüfen, ob die Viewport-Breite zwischen zwei Werten liegt:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

Wenn Sie die Lesbarkeit verbessern möchten, können Sie die "Bereichssyntax" verwenden:

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

In diesem Fall werden die Stile angewendet, wenn die Viewport-Breite zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Bei all den verschiedenen möglichen Media Queries möchten Sie diese möglicherweise kombinieren oder Listen von Abfragen erstellen — von denen jede übereinstimmen könnte.

Wie zuvor, versuchen Sie, die Beispiele in diesem Abschnitt zu testen, indem Sie Ihre Browserbreite anpassen.

### "und"-Logik in Media Queries

Um Medienmerkmale zu kombinieren, können Sie `and` auf ähnliche Weise verwenden, wie wir `and` oben verwendet haben, um einen Medientyp und ein Merkmal zu kombinieren. Zum Beispiel könnten wir `width` und `orientation` testen wollen. Der Body-Text wird nur blau, wenn der Viewport mindestens 600 Pixel breit ist und das Gerät sich im Querformat befindet.

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

Wenn Sie eine Reihe von Abfragen haben, von denen jede zutreffen könnte, dann können Sie diese Abfragen durch Kommata trennen. Im folgenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER das Gerät sich im Querformat befindet. Wenn eines dieser Dinge wahr ist, entspricht die Abfrage.

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

Sie können eine gesamte Media Query mit dem `not` Operator negieren. Dies kehrt die Bedeutung der gesamten Media Query um. In diesem nächsten Beispiel wird der Text nur dann blau, wenn der Viewport nicht mindestens 600 Pixel breit ist.

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

## Wie wählt man Breakpoints aus

In den frühen Tagen des Responsive Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen anzusprechen. Es wurden Listen von Bildschirmgrößen beliebter Telefone und Tablets veröffentlicht, damit Designs erstellt werden konnten, die diese Viewports akkurat abdecken.

Es gibt jetzt viel zu viele Geräte mit einer riesigen Vielfalt an Größen, um das machbar zu machen. Das bedeutet, dass statt spezifische Größen für alle Entwürfe anvisieren, ein besserer Ansatz darin besteht, das Design an der Stelle zu ändern, an der der Inhalt in irgendeiner Weise zu brechen beginnt. Vielleicht werden die Zeilenlängen viel zu lang, oder eine Seitenleiste wird gequetscht und schwer zu lesen. Das ist der Punkt, an dem Sie eine Media Query verwenden möchten, um das Design so anzupassen, dass es für den zur Verfügung stehenden Raum besser geeignet ist. Dieser Ansatz bedeutet, dass es keine Rolle spielt, welche exacten Maße das verwendete Gerät hat; jeder Bereich ist abgedeckt. Die Punkte, an denen eine Media Query eingeführt wird, nennt man **Breakpoints**.

Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in den Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints eingeführt werden sollten. Sie können leicht den Viewport verkleinern und vergrößern, um zu sehen, wo der Inhalt durch die Hinzufügung einer Media Query und die Anpassung des Designs verbessert werden würde.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in den Firefox DevTools.](rwd-mode.png)

## Mobile-first Responsive Design

Im Großen und Ganzen, können Sie zwei Ansätze für Responsive Design nehmen. Sie können mit Ihrem Desktop oder der breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um die Dinge zu verschieben, wenn der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und das Layout hinzufügen, wenn der Viewport größer wird. Diese zweite Herangehensweise wird als **Mobile First** Responsive Design beschrieben und ist oft der beste Ansatz, dem man folgen kann.

Die Ansicht für die aller kleinsten Geräte ist oftmals eine einfache Spalte von Inhalten, wie sie im normalen Fluss erscheint. Das bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte tun müssen – ordnen Sie Ihre Quelle gut und Sie werden standardmäßig ein lesbares Layout haben.

## Ihr eigenes Mobile-first Design erstellen

Jetzt sind Sie an der Reihe; in diesem Tutorial-Abschnitt werden Sie Ihr eigenes einfaches Mobile-first Responsive Design erstellen. Auf einer Produktionsseite werden Sie wahrscheinlich mehr Dinge innerhalb Ihrer Media Queries anpassen müssen, jedoch der Ansatz wird genau der gleiche sein.

### Erste Schritte

Unser Ausgangspunkt ist ein HTML-Dokument mit etwas CSS, das angewendet wird, um Hintergrundfarben zu den verschiedenen Teilen des Layouts hinzuzufügen.

Kopieren Sie zuerst den HTML-Code aus dem Block unten in einen Texteditor, speichern Sie ihn als HTML-Datei auf Ihrem Computer und öffnen Sie ihn in Ihrem Browser:

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

Die Quelle des Dokuments ist so angeordnet, dass der Inhalt lesbar ist. Dies ist ein wichtiger erster Schritt, um sicherzustellen, dass, wenn der Inhalt von einem Bildschirmleser vorgelesen wird, er verständlich ist.

Die anfänglichen Stile für unser Beispiel sind wie folgt; kopieren Sie diese in Ihre HTML-Datei innerhalb der `<style></style>` Tags und ersetzen Sie den Kommentar `/* Add styles here */`.

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

Wenn Sie das Layout im Responsive Design Mode in den DevTools ansehen oder Ihr Browserfenster auf eine mobile Breite verengen, werden Sie sehen, dass es ziemlich gut als eine einfache mobile Ansicht der Seite funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

### Erstellung eines zweispaltigen Layouts für mittlere Breiten

Ziehen Sie das Fenster breiter, bis Sie sehen können, dass die Zeilenlängen ziemlich lang werden; an diesem Punkt haben Sie Platz, die Navigation in einer horizontalen Linie anzeigen zu lassen. Hier werden wir unsere erste Media Query hinzufügen. Wir verwenden `em`-Einheiten, da dies bedeutet, dass, wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, aber breiterem Viewport erfolgt, als bei jemandem mit einer kleineren Textgröße.

Fügen Sie das folgende am Ende Ihres CSS hinzu:

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

Diese CSS gibt uns ein zweispaltiges Layout innerhalb des `<article>`, bestehend aus dem Artikelinhalt und den verwandten Informationen im `<aside>` Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Reihe zu bringen.

### Hinzufügen einer dritten Spalte für breitere Bildschirme

Lassen Sie uns weiterhin die Breite erweitern, bis wir das Gefühl haben, dass genug Platz ist, damit auch die Seitenleiste eine neue Spalte bildet. Innerhalb einer Media Query machen wir das `<main>` Element zu einem zwei Spalten-Raster. Wir müssen dann das {{cssxref("margin-bottom")}} des Artikels entfernen, damit die beiden Seitenleisten miteinander ausgerichtet sind, und wir fügen dem Footer eine {{cssxref("border")}} hinzu. Typischerweise sind dies die kleinen Anpassungen, die Sie vornehmen, um das Design an jedem Breakpoint gut aussehen zu lassen.

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

Das Beispiel ist somit abgeschlossen. Wenn Sie das Ergebnis bei verschiedenen Breiten betrachten, können Sie sehen, wie das Design als Einspalten-, Zweisäulen- oder Dreisäulenlayout funktioniert, je nach verfügbarer Breite. Dies ist ein grundlegendes Beispiel für ein Mobile-First Responsive Design.

### viewport meta

Wenn Sie den HTML-Quellcode im obigen Beispiel ansehen, sehen Sie das folgende Element im Head-Dokument enthalten:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist das [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag — es existiert als Möglichkeit, zu kontrollieren, wie mobile Browser Inhalte rendern, um sicherzustellen, dass sie Ihre Media Queries respektieren. Das obenstehende sagt mobilen Browsern: "Rendern Sie den Inhalt nicht mit einem 980-Pixel-Viewport, sondern nutzen Sie stattdessen die tatsächliche Gerätebreite und setzen Sie eine Standard-Initial-Skalierungsstufe für bessere Konsistenz." Die Media Queries werden dann wie erwartet aktiviert.

Für mehr Informationen, warum dies erforderlich ist, siehe den Abschnitt [Das viewport meta tag](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#the_viewport_meta_tag) im vorherigen Artikel.

## Brauchen Sie wirklich eine Media Query?

Flexbox und CSS Grid geben Ihnen Möglichkeiten, flexible und sogar responsive Komponenten ohne Media Query zu erstellen: Es lohnt sich immer zu überlegen, ob Sie wirklich eine brauchen. Beispielsweise möchten Sie vielleicht eine Reihe von Karten, die mindestens 200 Pixel breit sind, und so viele dieser 200 Pixel in die Hauptspalteninhalte passen, unabhängig davon, wie breit sie ist.

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

Versuchen Sie, Ihr Browserfenster breiter und schmaler zu machen, um die Anzahl der Spaltentracks zu verändern.

Das Schöne an dieser Methode ist, dass Grid nicht die Viewport-Breite betrachtet, sondern die Breite, die für diese Komponente verfügbar ist. Es mag seltsam erscheinen, einen Abschnitt über Media Queries mit dem Vorschlag abzuschließen, dass Sie vielleicht gar keine brauchen! Jedoch werden Sie in der Praxis feststellen, dass eine gute Nutzung moderner Layout-Methoden, erweitert um Media Queries, die besten Ergebnisse liefert.

## Zusammenfassung

In dieser Lektion haben Sie über Media Queries gelernt und auch entdeckt, wie man sie in der Praxis verwendet, um ein Mobile-First Responsive Design zu erstellen.

Sie könnten den Ausgangspunkt, den wir erstellt haben, verwenden, um weitere Media Queries zu testen. Beispielsweise könnten Sie die Größe der Navigation ändern, wenn Sie erkennen, dass der Besucher einen groben Zeiger hat, unter Verwendung des `pointer`-Media-Merkmales.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und sehen, ob die Hinzufügung einer Media Query oder die Verwendung einer Layout-Methode wie Flexbox oder Grid der geeignetste Weg ist, um die Komponenten responsiv zu machen. Sehr oft gibt es keinen richtigen oder falschen Weg — Sie sollten experimentieren und sehen, was am besten für Ihr Design und Ihren Inhalt funktioniert.

OK, wir sind fast am Ende dieses Moduls. Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie all die Informationen über Responsive Webdesign und Media Queries, die in den vorherigen Artikeln bereitgestellt wurden, verstanden und beibehalten haben.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}
