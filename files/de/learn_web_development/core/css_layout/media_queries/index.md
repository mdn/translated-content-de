---
title: Grundlagen der Media Queries
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

Die **CSS Media Query** bietet eine Möglichkeit, CSS nur dann anzuwenden, wenn das Browser- und Geräteumfeld einer von Ihnen festgelegten Regel entspricht, z. B. „Viewport ist breiter als 480 Pixel“. Media Queries sind ein wesentlicher Bestandteil des [responsiven Webdesigns](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), da sie es ermöglichen, unterschiedliche Layouts je nach Größe des Viewports zu erstellen. Sie können jedoch auch verwendet werden, um andere Dinge über die Umgebung zu erkennen, in der Ihre Website ausgeführt wird, z. B. ob der Benutzer einen Touchscreen anstelle einer Maus verwendet.

In dieser Lektion lernen Sie zunächst die in Media Queries verwendete Syntax kennen und erfahren anschließend in Beispielen, wie ein einfaches Design responsiv gestaltet werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Syntax von Media Queries.</li>
          <li>Die gängigen Arten von Media Queries.</li>
          <li>Verwendung von <code>width</code> und <code>height</code> Media Queries zur Erstellung responsiver Layouts.</li>
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

- Einem Medientyp, der dem Browser angibt, für welche Art von Medien dieser Code gedacht ist (Druck oder Bildschirm).
- Einer Media Expression, die eine Regel oder ein Test ist, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einer Reihe von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query setzt den Körper auf 12pt, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der hier verwendete Medientyp unterscheidet sich von dem sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.
> In der Media Queries-Spezifikation der Stufe 3 wurden eine Reihe anderer Medientypen definiert; diese sind veraltet und sollten vermieden werden.
> Medientypen sind optional; wenn Sie in Ihrer Media Query keinen Medientyp angeben, wird die Media Query standardmäßig für alle Medientypen gelten.

### Regeln für Media Features

Nachdem Sie den Typ angegeben haben, können Sie mit einer Regel ein Media Feature anvisieren. Die folgenden Beispiele zeigen, wie Sie verschiedene Media Queries verwenden können. Um die `width` Ihres Bildschirms zu ändern, ändern Sie die Größe Ihres Browsers oder drehen Sie Ihr Handheld-Gerät.

> [!NOTE]
> Alternativ können Sie die Funktion für responsives Design in den Entwicklerwerkzeugen des Browsers nutzen (wie den [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/)) von Firefox), um verschiedene Gerätebreiten zu simulieren.

#### Breite und Höhe

Das Feature, das wir am häufigsten erkennen, um responsive Designs zu erstellen (und das eine weitreichende Browser-Unterstützung hat), ist die Breite des Viewports, und wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite liegt — oder eine exakte Breite — mit dem `width` Media Feature, indem es gegebenenfalls mit `min-` oder `max-` präfixiert wird.

Diese Features werden verwendet, um Layouts zu erstellen, die auf unterschiedliche Bildschirmgrößen reagieren. Wenn der Textkörper beispielsweise rot werden soll, wenn der Viewport genau 600 Pixel beträgt, würden Sie die folgende Media Query verwenden.

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

Versuchen Sie, die Breite des Browserfensters anzupassen, um zu sehen, ob Sie den Punkt finden, an dem die obige Demo genau `600px` breit ist, sodass der Text rot wird.

Die `width` (und `height`) Media Features können als Bereiche verwendet werden und daher mit `min-` oder `max-` vorangestellt werden, um anzuzeigen, dass der angegebene Wert ein Minimum oder Maximum ist. Um beispielsweise die Farbe blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

In der Praxis ist die Verwendung von Minimal- oder Maximalwerten für responsives Design viel nützlicher, weshalb Sie `width` oder `height` selten allein sehen werden.

Es gibt viele andere Media Features, auf die Sie testen können. Einige der neueren Features, die in den Stufen 4 und 5 der Media Queries-Spezifikation eingeführt wurden, haben jedoch eine begrenzte Browserunterstützung. Jedes Feature ist auf MDN zusammen mit Informationen zur Browserunterstützung dokumentiert, und eine vollständige Liste finden Sie unter [Verwendung von Media Queries: Syntax](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax).

#### Orientierung

Ein gut unterstütztes Media Feature ist `orientation`, das es uns ermöglicht, die Ausrichtung Hochformat oder Querformat zu testen. Um die Textfarbe des Körpers zu ändern, wenn sich das Gerät in der Querformat-Ausrichtung befindet, verwenden Sie die folgende Media Query.

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

Das obige Beispiel ist ziemlich schwer in der Seite zu testen; um es in Aktion zu sehen, wird empfohlen, den obigen Code in eine lokale HTML-Datei zu kopieren und in einem eigenen Tab zu öffnen.

Ein Standard-Desktop-Ansicht hat eine Querformat-Ausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat betrachtet wird. Das Testen auf Orientierung kann Ihnen helfen, ein Layout zu erstellen, das auf Geräte im Hochformat optimiert ist.

#### Verwendung von Eingabegeräten

Im Rahmen der Spezifikation der Stufe 4 wurde das `hover` Media Feature eingeführt. Dieses Feature bedeutet, dass Sie testen können, ob der Benutzer in der Lage ist, mit der Maus über ein Element zu fahren, was im Wesentlichen bedeutet, dass er eine Art Eingabegerät verwendet; Berührung und Tastaturnavigation führen keine Hover-Aktionen aus.

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

Das obige Beispiel ändert den Text in weiß auf schwarz, wenn man darüber fährt, aber nur auf Geräten, auf denen das Hover möglich ist. Wenn wir wissen, dass der Benutzer nicht hover kann, könnten wir einige interaktive Features standardmäßig anzeigen. Bei Benutzern, die hover können, könnten wir diese verfügbar machen, wenn ein Link überfahren wird.

Ebenfalls auf Stufe 4 ist das `pointer` Media Feature. Dies hat drei mögliche Werte: `none`, `fine` und `coarse`. Ein `fine` Zeiger ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, einen kleinen Bereich präzise anzuvisieren. Ein `coarse` Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Eingabegerät hat; möglicherweise navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen dabei helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Zum Beispiel könnten Sie größere klickbare Flächen erstellen, wenn Sie wissen, dass der Benutzer das Gerät als Touchscreen verwendet.

### Verwendung von Bereichssyntax

Ein häufiger Fall ist, zu überprüfen, ob die Breite des Viewports zwischen zwei Werten liegt:

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

Mit all den verschiedenen möglichen Media Queries möchten Sie diese möglicherweise kombinieren oder Listen von Abfragen erstellen — von denen jede übereinstimmen könnte.

Wie zuvor, testen Sie die Beispiele in diesem Abschnitt, indem Sie die Breite Ihres Browsers anpassen.

### "und"-Logik in Media Queries

Um Media Features zu kombinieren, können Sie `and` in ähnlicher Weise verwenden, wie wir `and` oben verwendet haben, um einen Medientyp und ein Feature zu kombinieren. Zum Beispiel möchten wir möglicherweise auf `width` und `orientation` testen. Der Textkörper wird nur dann blau, wenn der Viewport mindestens 600 Pixel breit ist und das Gerät sich im Querformat befindet.

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

Wenn Sie eine Menge Abfragen haben, von denen jede übereinstimmen könnte, können Sie diese Abfragen durch Kommas trennen. Im folgenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER das Gerät sich im Querformat befindet. Wenn eines dieser Dinge wahr ist, stimmt die Abfrage überein.

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

Sie können eine gesamte Media Query mit dem `not`-Operator negieren. Dies kehrt die Bedeutung der gesamten Media Query um. Daher wird im folgenden Beispiel der Text nur dann blau sein, wenn der Viewport _nicht_ mindestens 600 Pixel breit ist.

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

Dies wendet die Stile an, wenn die Breite des Viewports zwischen 600 und 1000 Pixel liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Wie man Breakpoints auswählt

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen zu zielen. Listen von Bildschirmgrößen beliebter Telefone und Tablets wurden veröffentlicht, um Designs zu erstellen, die diese Viewports genau passen.

Es gibt jetzt viel zu viele Geräte mit einer riesigen Vielfalt an Größen, um das machbar zu machen. Dies bedeutet, dass anstatt spezifische Größen für alle Designs zu zielen, ein besserer Ansatz darin besteht, das Design an der Stelle zu ändern, an der der Inhalt auf irgendeine Weise kaputtgeht. Vielleicht werden die Zeilenlängen viel zu lang oder eine Seitenleiste wird gequetscht und schwer lesbar. Das ist der Punkt, an dem Sie eine Media Query verwenden möchten, um das Design auf ein besseres für den verfügbaren Raum zu ändern. Dieser Ansatz bedeutet, dass es keine Rolle spielt, welche genauen Abmessungen das verwendete Gerät hat; jeder Bereich ist abgedeckt. Die Punkte, an denen eine Media Query eingeführt wird, werden als **Breakpoints** bezeichnet.

Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in den Firefox-DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints hingehen sollten. Sie können den Viewport leicht kleiner und größer machen, um zu sehen, wo der Inhalt durch Hinzufügen einer Media Query und Anpassen des Designs verbessert werden würde.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in den Firefox DevTools.](rwd-mode.png)

## Mobile-First Responsive Design

Im Großen und Ganzen können Sie zwei Ansätze für responsives Design wählen. Sie können mit Ihrer Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um Dinge zu verschieben, während der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und das Layout hinzufügen, wenn der Viewport größer wird. Dieser zweite Ansatz wird als **Mobile-First** Responsive Design beschrieben und ist oft der beste Ansatz, dem man folgen sollte.

Die Ansicht für die kleinsten Geräte ist oft eine einfache einspaltige Spalte mit Inhalten, wie sie im normalen Fluss erscheint. Dies bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte benötigen – ordnen Sie Ihre Quelle gut und Sie haben standardmäßig ein lesbares Layout.

## Erstellen Ihres eigenen Mobile-First-Designs

Nun sind Sie an der Reihe; in diesem Tutorial-Abschnitt werden Sie Ihr eigenes grundlegendes Mobile-First-Responsive-Design entwickeln. Auf einer Produktivseite werden Sie wahrscheinlich mehr Dinge innerhalb Ihrer Media Queries anpassen müssen, jedoch wird der Ansatz genau derselbe sein.

### Erste Schritte

Unser Ausgangspunkt ist ein HTML-Dokument mit einigen CSS-Styles, die Farben zu den verschiedenen Teilen des Layouts hinzufügen.

Kopieren Sie zunächst den HTML-Code aus dem folgenden Block in einen Texteditor, speichern Sie ihn als HTML-Datei auf Ihrem Computer und öffnen Sie sie in Ihrem Browser:

```html live-sample___walkthrough
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
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

Die Quelle des Dokuments ist in einer Weise geordnet, die den Inhalt lesbar macht. Dies ist ein wichtiger erster Schritt und stellt sicher, dass der Inhalt, wenn er beispielsweise von einem Screenreader vorgelesen würde, verständlich wäre.

Die Anfangsstile für unser Beispiel sind wie folgt; kopieren Sie diese in Ihre HTML-Datei innerhalb der `<style></style>`-Tags, indem Sie den Kommentar `/* Add styles here */` ersetzen.

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

Wenn Sie das Layout im Responsive Design Mode in den DevTools ansehen oder Ihr Browserfenster auf eine mobile Breite verengen, werden Sie sehen, dass es als eine einfache mobile Ansicht der Seite ziemlich gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

### Erstellen eines zweispaltigen Layouts für mittlere Breiten

Ziehen Sie das Fenster breiter, bis Sie sehen, dass die Zeilenlängen ziemlich lang werden. An diesem Punkt haben Sie Platz, damit die Navigation in einer horizontalen Linie angezeigt wird. Hier werden wir unsere erste Media Query hinzufügen. Wir verwenden `em`-Einheiten, da dies bedeutet, dass, wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, aber breiterem Viewport, als bei einer Person mit kleinerer Textgröße passiert.

Fügen Sie Folgendes unten zu Ihrem CSS hinzu:

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

Dieses CSS gibt uns ein zweispaltiges Layout innerhalb des `<article>`, bestehend aus dem Artikelinhalt und der verwandten Information im `<aside>`-Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Reihe zu setzen.

### Hinzufügen einer dritten Spalte für breitere Bildschirme

Lassen Sie uns die Breite weiter ausdehnen, bis wir das Gefühl haben, dass genug Platz für die Seitenleiste vorhanden ist, um auch eine neue Spalte zu bilden. Innerhalb einer Media Query machen wir das `<main>`-Element in ein zweispaltiges Gitter. Dann müssen wir den {{cssxref("margin-bottom")}} am Artikel entfernen, damit die beiden Seitenleisten übereinstimmen, und wir fügen eine {{cssxref("border")}} zum oberen Teil des Fußzeilenelements hinzu. Typischerweise sind dies kleine Anpassungen, die Sie vornehmen werden, um das Design an jedem Breakpoint gut aussehen zu lassen.

Fügen Sie Folgendes unten zu Ihrem CSS hinzu:

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

Das ist das Beispiel abgeschlossen. Wenn Sie sich das Ergebnis bei unterschiedlichen Breiten ansehen, können Sie sehen, wie das Design reagiert und als Einzelspalte, zwei Spalten oder drei Spalten funktioniert, je nach verfügbarer Breite. Dies ist ein einfaches Beispiel für ein Mobile-First-Responsive-Design.

### Viewport Meta

Wenn Sie sich den HTML-Quellcode im obigen Beispiel ansehen, sehen Sie das folgende Element im Head des Dokuments:

```html
<meta name="viewport" content="width=device-width" />
```

Dies ist das [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag — es existiert als eine Möglichkeit, um zu kontrollieren, wie mobile Browser Inhalte rendern, um sicherzustellen, dass sie Ihre Media Queries respektieren. Das oben gezeigte Meta-Tag sagt mobilen Browsern: "Rendern Sie den Inhalt nicht mit einem 980-Pixel-Viewport — rendern Sie ihn stattdessen mit der realen Gerätebreite." Dann werden die Media Queries wie erwartet greifen.

Für weitere Informationen, warum dies notwendig ist, siehe den Abschnitt [Das viewport Meta-Tag](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#the_viewport_meta_tag) im vorherigen Artikel.

## Brauchen Sie wirklich eine Media Query?

Flexbox und CSS Grid ermöglichen es Ihnen, flexible und sogar responsive Komponenten ohne die Notwendigkeit einer Media Query zu erstellen. Es lohnt sich immer zu überlegen, ob Sie wirklich eine benötigen. Vielleicht möchten Sie beispielsweise, dass ein Satz von Karten mindestens 200 Pixel breit ist und so viele dieser 200 Pixel breiten Karten in die Hauptinhaltsspalte passen, wie möglich, unabhängig davon, wie breit diese ist.

Dies kann mit CSS Grid erreicht werden, völlig ohne Media Queries:

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

Versuchen Sie, Ihr Browserfenster breiter und schmaler zu machen, um die Änderung der Anzahl der Spaltenspuren zu sehen.

Das Schöne an dieser Methode ist, dass das Gitter nicht die Breite des Viewports betrachtet, sondern die Breite, die für diese Komponente verfügbar ist. Es mag seltsam erscheinen, einen Abschnitt über Media Queries mit dem Vorschlag abzuschließen, dass Sie möglicherweise überhaupt keine benötigen! In der Praxis werden Sie jedoch feststellen, dass eine gute Nutzung moderner Layoutmethoden, die mit Media Queries ergänzt werden, die besten Ergebnisse liefern wird.

## Zusammenfassung

In dieser Lektion haben Sie etwas über Media Queries gelernt und auch entdeckt, wie man sie in der Praxis verwendet, um ein Mobile-First-Responsive-Design zu erstellen.

Sie könnten den erstellten Ausgangspunkt verwenden, um weitere Media Queries zu testen. Zum Beispiel könnten Sie die Größe der Navigation ändern, wenn Sie erkennen, dass der Besucher einen groben Zeiger hat, indem Sie das `pointer` Media Feature verwenden.

Sie könnten auch mit dem Hinzufügen verschiedener Komponenten experimentieren und sehen, ob die Hinzufügung einer Media Query oder die Verwendung einer Layoutmethode wie Flexbox oder Grid der am besten geeignete Weg ist, um die Komponenten responsive zu machen. Oft gibt es keinen richtigen oder falschen Weg — Sie sollten experimentieren und sehen, was am besten für Ihr Design und Ihre Inhalte funktioniert.

OK, wir sind fast am Ende dieses Moduls. Im [nächsten Artikel](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design) finden Sie einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie alle Informationen zum responsiven Webdesign und zu den Media Queries aus den vorherigen Artikeln verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/CSS_layout")}}
