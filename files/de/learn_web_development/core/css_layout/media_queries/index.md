---
title: Grundlagen von Media Queries
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

Das **CSS Media Query** bietet Ihnen die Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen festgelegten Regel entspricht, zum Beispiel "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des [Responsive Webdesigns](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), da sie Ihnen erlauben, unterschiedliche Layouts je nach Größe des Viewports zu erstellen. Sie können jedoch auch verwendet werden, um andere Dinge bezüglich der Umgebung, in der Ihre Website ausgeführt wird, zu erkennen, zum Beispiel ob der Benutzer einen Touchscreen anstelle einer Maus verwendet.

In dieser Lektion lernen Sie zunächst die in Media Queries verwendete Syntax kennen und anschließend deren Anwendung in Beispielen, die zeigen, wie ein grundlegendes Design responsiv gemacht werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Bearbeitung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftgestaltung</a>,
        Vertrautheit mit den <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Syntax von Media Queries.</li>
          <li>Die gängigen Typen von Media Queries.</li>
          <li>Verwenden von <code>width</code>- und <code>height</code>-Media Queries, um responsive Layouts zu erstellen.</li>
          <li>Auswahl von Breakpoints.</li>
          <li>Verwenden von Media Queries, um ein Mobile-First-Design zu implementieren.</li>
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

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medien dieser Code gedacht ist (Drucken oder Bildschirm).
- Einer Medienausdrucksregel, einem Test, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einem Satz von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query richtet den Body nur dann auf 12pt aus, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der Medientyp hier unterscheidet sich von dem sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.
> Es wurden eine Reihe anderer Medientypen in der Spezifikation der Level 3 Media Queries definiert; diese wurden jedoch abgelehnt und sollten vermieden werden.
> Medientypen sind optional; wenn Sie in Ihrer Media Query keinen Medientyp angeben, wird die Media Query standardmäßig für alle Medientypen gelten.

### Regeln für Medienmerkmale

Nachdem Sie den Typ angegeben haben, können Sie dann ein Medienmerkmal mit einer Regel anvisieren.
Die folgenden Beispiele zeigen, wie man verschiedene Media Queries verwendet.
Um die `width` Ihres Bildschirms zu ändern, ändern Sie die Größe Ihres Browsers oder drehen Sie Ihr Handgerät.

> [!NOTE]
> Alternativ können Sie die Funktionen zur responsiven Größenänderung der Entwicklertools des Browsers verwenden (z. B. den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/) von Firefox), um unterschiedliche Gerätebreiten zu simulieren.

#### Breite und Höhe

Das Merkmal, das wir am häufigsten erkennen, um responsive Designs zu erstellen (und das weitgehende Unterstützung durch Browser erfährt), ist die Viewport-Breite, und wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite liegt — oder eine exakte Breite — indem wir das `width`-Medienmerkmal verwenden und es je nach Bedarf mit `min-` oder `max-` versehen.

Diese Merkmale werden verwendet, um Layouts zu erstellen, die auf verschiedene Bildschirmgrößen reagieren. Um zum Beispiel die Textfarbe des Bodys auf Rot zu setzen, wenn der Viewport genau 600 Pixel beträgt, würden Sie die folgende Media Query verwenden.

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

Die `width`- (und `height`-)Medienmerkmale können als Bereiche verwendet werden und daher mit `min-` oder `max-` versehen werden, um anzugeben, dass der angegebene Wert ein Minimum oder ein Maximum ist. Um beispielsweise die Farbe blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

In der Praxis ist die Verwendung von Minimal- oder Maximalwerten für das Responsive Design viel nützlicher, sodass Sie selten `width` oder `height` allein verwenden werden.

Es gibt viele andere Medienmerkmale, die Sie testen können, obwohl einige der neueren Merkmale, die in den Levels 4 und 5 der Spezifikation für Media Queries eingeführt wurden, nur eingeschränkte Unterstützung durch Browser haben. Jedes Merkmal ist auf MDN dokumentiert, zusammen mit Informationen zur Browser-Unterstützung, und Sie finden eine vollständige Liste unter [Verwendung von Media Queries: Syntax](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax).

#### Orientierung

Ein gut unterstütztes Medienmerkmal ist `orientation`, das es uns ermöglicht, die Ausrichtung im Hoch- oder Querformat zu testen. Um die Textfarbe des Bodys zu ändern, wenn das Gerät im Querformat ist, verwenden Sie die folgende Media Query.

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

Das obige Beispiel ist ziemlich schwierig, innerhalb der Seite zu testen; um es in Aktion zu sehen, wird empfohlen, den obigen Code in eine lokale HTML-Datei zu kopieren und in einem eigenen Tab zu öffnen.

Eine Standard-Desktop-Ansicht hat eine Querformat-Ausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat angezeigt wird. Das Testen auf die Ausrichtung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Im Rahmen der Level-4-Spezifikation wurde das Medienmerkmal `hover` eingeführt. Dieses Merkmal bedeutet, dass Sie testen können, ob der Benutzer die Möglichkeit hat, ein Element zu umschweben, was im Wesentlichen bedeutet, dass er eine Art Zeigegerät verwendet; Touchscreen und Tastaturnavigation schweben nicht.

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

Das obige Beispiel ändert die Textfarbe in Weiß auf Schwarz, wenn darüber geschwebt wird, jedoch nur auf Geräten, bei denen das Schweben möglich ist. Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir sie beim Überfahren eines Links verfügbar machen.

Ebenfalls in Level 4 befindet sich das Medienmerkmal `pointer`. Es hat drei mögliche Werte: `none`, `fine` und `coarse`. Ein `fine`-Zeiger ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, genau auf einen kleinen Bereich zu zielen. Ein `coarse`-Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; möglicherweise navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Mit `pointer` können Sie bessere Schnittstellen entwerfen, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Zum Beispiel könnten Sie größere Trefferbereiche erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

### Verwendung der Bereichssyntax

Ein häufiger Fall ist das Überprüfen, ob die Viewport-Breite zwischen zwei Werten liegt:

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

In diesem Fall werden die Stile angewendet, wenn die Viewport-Breite zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Bei all den verschiedenen möglichen Media Queries möchten Sie diese möglicherweise kombinieren oder eine Liste von Queries erstellen – von denen jede übereinstimmen könnte.

Wie zuvor, testen Sie die Beispiele in diesem Abschnitt, indem Sie die Breite Ihres Browsers anpassen.

### "and"-Logik in Media Queries

Um Medienmerkmale zu kombinieren, können Sie `and` auf die gleiche Weise verwenden, wie wir `and` vorher verwendet haben, um einen Medientyp und ein Merkmal zu kombinieren. Zum Beispiel könnten wir die `width` und `orientation` testen möchten. Der Body-Text wird nur dann blau, wenn der Viewport mindestens 600 Pixel breit ist und das Gerät sich im Querformat befindet.

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

### "or"-Logik in Media Queries

Wenn Sie eine Reihe von Queries haben, von denen jede übereinstimmen könnte, können Sie diese Queries durch Kommas trennen. Im unten stehenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER das Gerät sich im Querformat befindet. Wenn eine dieser Bedingungen wahr ist, stimmt die Query überein.

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

### "not"-Logik in Media Queries

Sie können eine gesamte Media Query negieren, indem Sie den `not`-Operator verwenden. Dies kehrt die Bedeutung der gesamten Media Query um. In diesem nächsten Beispiel wird der Text nur dann blau, wenn der Viewport _nicht_ mindestens 600 Pixel breit ist.

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

Dies wendet die Stile an, wenn die Viewport-Breite zwischen 600 und 1000 Pixel liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Wie man Breakpoints auswählt

In den frühen Tagen des Responsive Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen anzusprechen. Listen von Bildschirmgrößen beliebter Telefone und Tablets wurden veröffentlicht, damit Designs erstellt werden konnten, die genau diesen Viewports entsprachen.

Es gibt jetzt viel zu viele Geräte mit einer großen Vielfalt an Größen, um dies praktikabel zu machen. Das bedeutet, anstelle spezifische Größen für alle Designs zu behandeln, ist es besser, das Design an der Stelle zu ändern, an der der Inhalt in irgendeiner Weise kaputt geht. Vielleicht werden die Zeilenlängen viel zu lang oder eine Seitenleiste wird gequetscht und schwer zu lesen. An diesem Punkt möchten Sie eine Media Query verwenden, um das Design in ein besseres für den verfügbaren Platz zu ändern. Dieser Ansatz bedeutet, dass es nicht darauf ankommt, welche genauen Abmessungen das verwendete Gerät hat; jeder Bereich wird berücksichtigt. Die Punkte, an denen eine Media Query eingeführt wird, werden als **Breakpoints** bezeichnet.

[Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in den Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints platziert werden sollten. Sie können den Viewport einfach verkleinern und vergrößern, um zu sehen, wo der Inhalt durch das Hinzufügen einer Media Query und das Anpassen des Designs verbessert werden würde.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in Firefox DevTools.](rwd-mode.png)

## Mobile-First Responsive Design

Breit angelegt können Sie zwei Ansätze zum Responsive Design verfolgen. Sie können mit Ihrer Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um Dinge zu verschieben, wenn der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layouts hinzufügen, wenn der Viewport größer wird. Dieser zweite Ansatz wird als **Mobile-First** Responsive Design bezeichnet und ist oft der beste Ansatz, dem Sie folgen sollten.

Die Ansicht für die sehr kleinsten Geräte ist oft eine einfache einspaltige Darstellung von Inhalten, wie sie im normalen Fluss erscheint. Das bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte benötigen – ordnen Sie Ihre Quelle gut, und Sie werden standardmäßig ein lesbares Layout haben.

## Erstellen Sie Ihr eigenes Mobile-First Design

Jetzt sind Sie an der Reihe; in diesem Tutorial-Bereich werden Sie Ihr eigenes einfaches Mobile-First Responsive Design erstellen. In einer Produktionsseite haben Sie wahrscheinlich mehr Dinge zu anzupassen innerhalb Ihrer Media Queries, aber der Ansatz wird genau derselbe sein.

### Einstieg

Unser Ausgangspunkt ist ein HTML-Dokument mit ein wenig CSS, das angewendet wird, um Hintergrundfarben auf die verschiedenen Teile des Layouts hinzuzufügen.

Kopieren Sie zuerst den HTML-Code aus dem untenstehenden Block in einen Texteditor, speichern Sie ihn als HTML-Datei auf Ihrem Computer und öffnen Sie ihn in Ihrem Browser:

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

Die Quelle des Dokuments ist so geordnet, dass der Inhalt lesbar ist. Dies ist ein wichtiger erster Schritt, der sicherstellt, dass, wenn der Inhalt von einem Screenreader vorgelesen würde, er verständlich wäre.

Die anfänglichen Stile für unser Beispiel sind wie folgt; kopieren Sie diese in Ihre HTML-Datei innerhalb der `<style></style>` Tags, indem Sie den `/* Add styles here */` Kommentar ersetzen.

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

Wenn Sie das Layout im Responsive Design Mode in den DevTools betrachten oder Ihr Browserfenster auf eine mobile Breite verkleinern, werden Sie sehen, dass es als eine einfache mobile Ansicht der Website ziemlich gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

### Erstellen eines zweispaltigen Layouts für mittlere Breiten

Ziehen Sie das Fenster breiter, bis Sie sehen können, dass die Zeilenlängen ziemlich lang werden; an diesem Punkt haben Sie Platz für die Navigation, um in einer horizontalen Linie angezeigt zu werden. Hier werden wir unsere erste Media Query hinzufügen. Wir verwenden `em`-Einheiten, da dies bedeutet, dass, wenn der Benutzer seine Textgröße vergrößert hat, der Breakpoint bei einer ähnlichen Zeilenlänge, aber einem breiteren Viewport, als jemand mit einer kleineren Textgröße stattfinden wird.

Fügen Sie das Folgende am Ende Ihres CSS hinzu:

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

Dieses CSS gibt uns ein zweispaltiges Layout innerhalb des `<article>`, der Artikelinhalt und die verwandten Informationen im `<aside>` Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Reihe zu stellen.

### Hinzufügen einer dritten Spalte für breitere Bildschirme

Lassen Sie uns weiter die Breite erweitern, bis wir das Gefühl haben, dass genug Platz ist, um die Seitenleiste auch zu einer neuen Spalte zu machen. Innerhalb einer Media Query machen wir das `<main>` Element zu einem zweispaltigen Raster. Wir müssen dann den {{cssxref("margin-bottom")}} des Artikels entfernen, damit die beiden Seitenleisten aufeinander ausgerichtet sind, und wir fügen dem Fußbereich ein {{cssxref("border")}} hinzu. Typischerweise sind dies kleine Anpassungen, die Sie vornehmen werden, um das Design an jedem Breakpoint gut aussehen zu lassen.

Fügen Sie das Folgende am Ende Ihres CSS hinzu:

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

Damit ist das Beispiel abgeschlossen. Wenn Sie sich das Ergebnis bei verschiedenen Breiten ansehen, können Sie sehen, wie das Design je nach verfügbarer Breite als einspaltig, zweispaltig oder dreispaltig reagiert und arbeitet. Dies ist ein grundlegendes Beispiel für ein Mobile-First Responsive Design.

### viewport meta

Wenn Sie sich den HTML-Quellcode im obigen Beispiel ansehen, werden Sie das folgende Element im Kopf des Dokuments sehen:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Das ist das [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag — es existiert, um zu steuern, wie mobile Browser Inhalte rendern und sicherzustellen, dass sie Ihre Media Queries respektieren. Das oben genannte teilt mobilen Browsern mit: "Renderen Sie die Inhalte nicht mit einem 980-Pixel-Viewport — renderen Sie es stattdessen mit der tatsächlichen Gerätebreite und setzen Sie ein standardmäßiges initiales Skalierungsniveau für eine bessere Konsistenz." Die Media Queries werden dann wie erwartet ausgelöst.

Für weitere Informationen darüber, warum dies erforderlich ist, siehe [Das viewport Meta-Tag](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#the_viewport_meta_tag)-Abschnitt im vorherigen Artikel.

## Brauchen Sie wirklich eine Media Query?

Flexbox und CSS Grid bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten ohne die Notwendigkeit einer Media Query zu erstellen: Es lohnt sich immer zu überlegen, ob Sie wirklich eine brauchen. Zum Beispiel könnten Sie eine Reihe von Karten wünschen, die mindestens 200 Pixel breit sind und so viele dieser 200 Pixel breit überall im Hauptinhaltsbereich wie möglich unterbringen, unabhängig davon, wie breit er ist.

Das kann mit CSS Grid erreicht werden, ganz ohne Media Queries:

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

Versuchen Sie, Ihr Browserfenster breiter und schmaler zu machen, um die Änderung der Spaltenanzahl zu sehen.

Das Schöne an dieser Methode ist, dass das Raster nicht auf die Viewport-Breite schaut, sondern auf die Breite, die ihm für diese Komponente zur Verfügung steht. Es mag seltsam erscheinen, einen Abschnitt über Media Queries mit dem Vorschlag abzuschließen, dass Sie möglicherweise gar keine benötigen! Aber in der Praxis werden Sie feststellen, dass eine gute Nutzung moderner Layoutmethoden, ergänzt durch Media Queries, die besten Ergebnisse liefern wird.

## Zusammenfassung

In dieser Lektion haben Sie gelernt, was Media Queries sind und wie Sie sie in der Praxis verwenden können, um ein Mobile-First Responsive Design zu erstellen.

Sie könnten den von uns erstellten Ausgangspunkt verwenden, um mehr Media Queries zu testen. Zum Beispiel könnten Sie versuchen, die Größe der Navigation zu ändern, wenn Sie feststellen, dass der Besucher einen groben Zeiger verwendet, indem Sie das `pointer`-Medienmerkmal verwenden.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und sehen, ob das Hinzufügen einer Media Query oder die Verwendung einer Layoutmethode wie Flexbox oder Grid der beste Ansatz ist, um die Komponenten responsiv zu machen. Sehr oft gibt es kein richtig oder falsch — Sie sollten experimentieren und sehen, was für Ihr Design und Ihre Inhalte am besten funktioniert.

OK, wir nähern uns dem Ende dieses Moduls. Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie alle Informationen über Responsive Web Design und Media Queries, die in den vorherigen Artikeln bereitgestellt wurden, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}
