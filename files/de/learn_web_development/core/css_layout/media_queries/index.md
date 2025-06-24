---
title: Grundlagen der Media Queries
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 720baf2393c1cbb97d57066fe894c04fec6c75e1
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}

Der **CSS Media Query** bietet Ihnen eine Methode, um CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen festgelegten Regel entspricht, z.B. "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des [responsiven Webdesigns](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), da sie es ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. Sie können auch verwendet werden, um andere Aspekte der Umgebung, in der Ihre Website ausgeführt wird, zu erkennen, z.B. ob der Benutzer einen Touchscreen anstelle einer Maus verwendet.

In dieser Lektion lernen Sie zunächst die in Media Queries verwendete Syntax und wenden sich dann Beispielen zu, die zeigen, wie ein einfaches Design responsiv gestaltet werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundlegende CSS-Layout-Konzepte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Syntax von Media Queries.</li>
          <li>Die gängigen Arten von Media Queries.</li>
          <li>Verwendung von <code>width</code> und <code>height</code> Media Queries, um responsive Layouts zu erstellen.</li>
          <li>Auswahl von Breakpoints.</li>
          <li>Verwendung von Media Queries zur Implementierung eines Mobile-First-Designs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen der Media Queries

Die einfachste Media Query-Syntax sieht so aus:

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

Sie besteht aus:

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medien dieser Code gedacht ist (Druck oder Bildschirm).
- Einer Medienausdruck, der eine Regel oder ein Test ist, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einer Reihe von CSS-Regeln, die angewendet werden, wenn der Test bestanden ist und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query wird den Textkörper nur dann auf 12pt setzen, wenn die Seite gedruckt wird. Es wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der Medientyp hier unterscheidet sich vom sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.
> In der Level 3 Media Queries-Spezifikation waren eine Reihe weiterer Medientypen definiert; diese wurden veraltet und sollten vermieden werden.
> Medientypen sind optional; wenn Sie in Ihrer Media Query keinen Medientyp angeben, wird die Media Query standardmäßig für alle Medientypen gelten.

### Regeln für Medienmerkmale

Nachdem Sie den Typ angegeben haben, können Sie ein Medienmerkmal mit einer Regel anvisieren.
Die folgenden Beispiele zeigen, wie man verschiedene Media Queries verwendet.
Um die `width` Ihres Bildschirms zu ändern, ändern Sie die Größe Ihres Browsers oder drehen Sie Ihr Handgerät.

> [!NOTE]
> Alternativ können Sie die responsiven Größenfunktionen der Browser-Entwicklertools (wie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/) von Firefox) verwenden, um verschiedene Gerätebreiten zu simulieren.

#### Breite und Höhe

Das Merkmal, das wir am häufigsten erkennen, um responsive Designs zu erstellen (und das eine weit verbreitete Browserunterstützung hat), ist die Viewport-Breite, und wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite liegt — oder eine exakte Breite hat — unter Verwendung der Medienmerkmale `min-width`, `max-width` und `width`.

Diese Funktionen werden verwendet, um Layouts zu erstellen, die auf verschiedene Bildschirmgrößen reagieren. Zum Beispiel, um die Textfarbe des Textkörpers auf Rot zu setzen, wenn der Viewport genau 600 Pixel beträgt, würden Sie die folgende Media Query verwenden.

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

Das Medienmerkmal `width` (und `height`) kann als Bereich verwendet werden und kann daher mit `min-` oder `max-` präfixiert werden, um anzugeben, dass der angegebene Wert ein Minimum oder Maximum ist. Zum Beispiel, um die Farbe Blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

In der Praxis ist die Verwendung von Minimal- oder Maximalwerten viel nützlicher für responsives Design, sodass Sie nur selten `width` oder `height` allein verwenden werden.

Es gibt viele andere Medienmerkmale, die Sie testen können, obwohl einige der neueren Merkmale, die in den Levels 4 und 5 der Media Queries-Spezifikation eingeführt wurden, eine begrenzte Browserunterstützung haben. Jedes Merkmal ist auf MDN zusammen mit Informationen zur Browserunterstützung dokumentiert, und Sie finden eine vollständige Liste unter [Verwenden von Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

#### Ausrichtung

Ein gut unterstütztes Medienmerkmal ist `orientation`, das uns ermöglicht, die Ausrichtung im Hoch- oder Querformat zu testen. Um die Textfarbe des Körpers zu ändern, wenn das Gerät sich im Querformat befindet, verwenden Sie die folgende Media Query.

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

Das obige Beispiel ist ziemlich schwierig, direkt auf der Seite zu testen; um es in Aktion zu sehen, sollten Sie den obigen Code in eine lokale HTML-Datei kopieren und in einem eigenen Tab öffnen.

Eine Standard-Desktopansicht hat eine Querformat-Ausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat betrachtet wird. Das Testen der Ausrichtung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Als Teil der Level 4-Spezifikation wurde das Medienmerkmal `hover` eingeführt. Dieses Merkmal bedeutet, dass Sie testen können, ob der Benutzer die Fähigkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er eine Art von Zeigegerät verwendet; Touchscreen- und Tastaturnavigation schweben nicht.

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

Das obige Beispiel ändert sich in weißen Text auf Schwarz, wenn darüber geschwebt wird, aber nur auf Geräten, auf denen ein Schweben möglich ist. Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir uns entscheiden, sie verfügbar zu machen, wenn ein Link überfahren wird.

Ebenfalls in Level 4 ist das Medienmerkmal `pointer`. Es nimmt drei mögliche Werte an, `none`, `fine` und `coarse`. Ein `fine` Zeiger ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, ein kleines Gebiet präzise anzuvisieren. Ein `coarse` Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; vielleicht navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Benutzeroberflächen zu gestalten, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Sie könnten z. B. größere Treffbereiche erstellen, wenn Sie wissen, dass der Benutzer mit einem Touchscreen interagiert.

### Verwendung von Bereichs-Syntax

Ein häufiges Szenario ist es, zu prüfen, ob die Viewport-Breite zwischen zwei Werten liegt:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

Wenn Sie die Lesbarkeit verbessern möchten, können Sie die "Range"-Syntax verwenden:

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

In diesem Fall werden die Stile angewendet, wenn die Viewport-Breite zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Bei all den verschiedenen möglichen Media Queries möchten Sie möglicherweise diese kombinieren oder Listen von Abfragen erstellen, von denen jede übereinstimmen könnte.

Wie zuvor, versuchen Sie die Beispiele in diesem Abschnitt zu testen, indem Sie die Breite Ihres Browsers anpassen.

### "and"-Logik in Media Queries

Um Medienmerkmale zu kombinieren, können Sie `and` in der gleichen Weise verwenden, wie wir `and` oben verwendet haben, um einen Medientyp und ein Merkmal zu kombinieren. Zum Beispiel könnten wir auf `min-width` und `orientation` testen. Der Textkörper wird nur blau, wenn der Viewport mindestens 600 Pixel breit ist und sich das Gerät im Querformat befindet.

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

Wenn Sie eine Reihe von Abfragen haben, von denen jede übereinstimmen könnte, können Sie diese Abfragen mit Kommas trennen. Im folgenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER sich das Gerät im Querformat befindet. Wenn eine dieser Bedingungen wahr ist, stimmt die Abfrage.

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

Sie können eine gesamte Media Query negieren, indem Sie den Operator `not` verwenden. Dies kehrt die Bedeutung der gesamten Media Query um. Im nächsten Beispiel wird der Text nur blau, wenn der Viewport _nicht_ mindestens 600 Pixel breit ist.

```css live-sample___not
@media not (min-width: 600px) {
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

Dies wird die Stile anwenden, wenn die Viewport-Breite zwischen 600 und 1000 Pixel liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Anleitung zum Auswählen von Breakpoints

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen anzusprechen. Listen von Bildschirmgrößen populärer Telefone und Tablets wurden veröffentlicht, damit Designs erstellt werden konnten, die genau zu diesen Viewports passen.

Es gibt jetzt viel zu viele Geräte mit einer riesigen Vielfalt an Größen, um dies zu einem machbaren Ansatz zu machen. Das bedeutet, dass statt spezifische Größen für alle Designs anzuzielen, ein besserer Ansatz darin besteht, das Design an der Stelle zu verändern, an der der Inhalt in irgendeiner Weise bricht. Vielleicht werden die Zeilenlängen viel zu lang oder eine Seitenleiste wird gequetscht und schwer zu lesen. An diesem Punkt möchten Sie eine Media Query verwenden, um das Design in ein besseres für den verfügbaren Platz zu ändern. Dieser Ansatz bedeutet, dass es keine Rolle spielt, welche genauen Dimensionen das verwendete Gerät hat; jeder Bereich wird berücksichtigt. Die Punkte, an denen eine Media Query eingeführt wird, werden als **Breakpoints** bezeichnet.

Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints gesetzt werden sollten. Sie können einfach den Viewport verkleinern und vergrößern, um zu sehen, wo der Inhalt durch Hinzufügen einer Media Query und Anpassen des Designs verbessert würde.

![Ein Screenshot eines Layouts in der mobilen Ansicht in Firefox DevTools.](rwd-mode.png)

## Mobile-First-Responsive-Design

Im Großen und Ganzen können Sie zwei Ansätze für responsives Design verfolgen. Sie können mit Ihrer Desktop-Ansicht oder der breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um Dinge zu verschieben, während der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layout hinzufügen, während der Viewport größer wird. Dieser zweite Ansatz wird als **mobile first** responsives Design beschrieben und ist oft der beste Ansatz, dem man folgen sollte.

Die Ansicht für die sehr kleinsten Geräte ist oft eine einfache einspaltige Darstellung des Inhalts, ähnlich wie er im normalen Fluss erscheint. Dies bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte machen müssen — ordnen Sie Ihre Quelle gut, und Sie haben standardmäßig ein lesbares Layout.

## Erstellen eines eigenen Mobile-First-Designs

Jetzt sind Sie an der Reihe; in diesem Tutorial-Abschnitt erstellen Sie Ihr eigenes grundlegendes Mobile-First-Responsive-Design. In einer Produktionswebsite haben Sie wahrscheinlich mehr Dinge innerhalb Ihrer Media Queries anzupassen, jedoch wird der Ansatz genau derselbe sein.

### Erste Schritte

Unser Ausgangspunkt ist ein HTML-Dokument mit etwas CSS, um Hintergrundfarben zu den verschiedenen Teilen des Layouts hinzuzufügen.

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

Die Quelle des Dokuments ist in einer Weise geordnet, die den Inhalt lesbar macht. Dies ist ein wichtiger erster Schritt, der sicherstellt, dass der Inhalt, wenn er von einem Screenreader vorgelesen wird, verständlich wäre.

Die Anfangsstile für unser Beispiel sind wie folgt; kopieren Sie diese in Ihre HTML-Datei innerhalb der `<style></style>`-Tags und ersetzen Sie den Kommentar `/* Add styles here */`.

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

Wenn Sie das Layout im Responsive Design Mode in DevTools ansehen oder Ihr Browserfenster auf eine mobile Breite verkleinern, werden Sie sehen, dass es als einfache mobile Ansicht der Website ziemlich gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

### Erstellen eines Zweispaltenlayouts für mittlere Breiten

Ziehen Sie das Fenster breiter, bis Sie sehen, dass die Zeilenlängen ziemlich lang werden; an diesem Punkt haben Sie genügend Platz, damit die Navigation in einer horizontalen Linie angezeigt wird. Hier werden wir unsere erste Media Query hinzufügen. Wir werden `em`-Einheiten verwenden, da dies bedeutet, dass wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge für einen breiteren Viewport als jemand mit einer kleineren Textgröße passieren wird.

Fügen Sie dies am Ende Ihres CSS hinzu:

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

Dieses CSS gibt uns ein zweispaltiges Layout innerhalb des `<article>`, bestehend aus dem Artikelinhalt und den zugehörigen Informationen im `<aside>`-Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Zeile zu bringen.

### Hinzufügen einer dritten Spalte für breitere Bildschirme

Lassen Sie uns die Breite weiter erhöhen, bis wir das Gefühl haben, dass genug Platz vorhanden ist, damit die Seitenleiste auch eine neue Spalte bilden kann. Innerhalb einer Media Query gestalten wir das `<main>`-Element in ein zweispaltiges Raster um. Wir müssen dann den {{cssxref("margin-bottom")}} beim Artikel entfernen, damit die beiden Seitenleisten miteinander ausgerichtet sind, und wir fügen dem Fußzeilenbereich oben einen {{cssxref("border")}} hinzu. Typischerweise sind diese kleinen Anpassungen der Art, was Sie tun werden, um das Design an jedem Breakpoint gut aussehen zu lassen.

Fügen Sie dies am Ende Ihres CSS hinzu:

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

Das ist das Beispiel beendet. Wenn Sie das Ergebnis in verschiedenen Breiten betrachten, können Sie sehen, wie das Design als einspaltig, zweispaltig oder dreispaltig funktioniert, je nach verfügbarer Breite. Dies ist ein einfaches Beispiel für ein mobile-first responsives Design.

### `viewport` Meta

Wenn Sie den HTML-Code im obigen Beispiel ansehen, werden Sie folgendes Element im Kopf des Dokuments sehen:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist das [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag — es existiert als eine Möglichkeit, zu kontrollieren, wie mobile Browser Inhalte rendern, und sicherzustellen, dass sie Ihre Media Queries respektieren. Das obige sagt mobilen Browsern "rendere den Inhalt nicht mit einem 980-Pixel-Viewport — rendere ihn stattdessen mit der tatsächlichen Gerätebreite und setze einen Standard-Startskalierungsgrad für bessere Konsistenz." Die Media Queries werden dann wie erwartet greifen.

Für mehr Informationen darüber, warum dies notwendig ist, siehe den Abschnitt [Das viewport Meta-Tag](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#the_viewport_meta_tag) im vorherigen Artikel.

## Benötigen Sie wirklich eine Media Query?

Flexbox und CSS Grid bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten ohne Media Query zu erstellen: Es lohnt sich immer zu überlegen, ob Sie wirklich eine benötigen. Zum Beispiel könnten Sie eine Reihe von Karten wünschen, die mindestens 200 Pixel breit sind, und so viele dieser 200 Pixel quer durch die Hauptinhaltsspalte passen, unabhängig davon, wie breit sie ist.

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
  border: 1px solid #666;
  padding: 10px;
}
```

{{EmbedLiveSample("grid", "", "350px")}}

Versuchen Sie, Ihr Browserfenster breiter und schmaler zu machen, um zu sehen, wie sich die Anzahl der Spalten ändert.

Das Schöne an dieser Methode ist, dass das Grid nicht auf die Viewport-Breite schaut, sondern auf die Breite, die es für diese Komponente zur Verfügung hat. Es mag seltsam erscheinen, einen Abschnitt über Media Queries mit dem Vorschlag zu beenden, dass Sie möglicherweise gar keine benötigen! Aber in der Praxis werden Sie feststellen, dass eine gute Nutzung moderner Layout-Methoden, ergänzt durch Media Queries, die besten Ergebnisse liefert.

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einen Test finden, um zu überprüfen, ob Sie diese Informationen gespeichert haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Responsives Webdesign und Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design).

## Zusammenfassung

In dieser Lektion haben Sie über Media Queries gelernt und auch entdeckt, wie man sie in der Praxis verwendet, um ein Mobile-First Responsive Design zu erstellen.

Sie könnten den Ausgangspunkt, den wir erstellt haben, verwenden, um weitere Media Queries auszuprobieren. Zum Beispiel könnten Sie die Größe der Navigation ändern, wenn Sie anhand des `pointer`-Medienmerkmals erkennen, dass der Besucher einen groben Zeiger hat.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und überprüfen, ob das Hinzufügen einer Media Query oder die Verwendung einer Layout-Methode wie Flexbox oder Grid der geeignetste Weg ist, um die Komponenten responsiv zu gestalten. Oft gibt es keinen richtigen oder falschen Weg — Sie sollten experimentieren und sehen, was am besten für Ihr Design und Ihren Inhalt funktioniert.

OK, wir nähern uns dem Ende dieses Moduls. Lassen Sie uns abschließend eine Herausforderung geben, um Ihr breiteres Verständnis von CSS-Layouts zu testen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}
