---
title: Grundlagen von Media Queries
short-title: Media Queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}

Die **CSS Media Query** bietet Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteeinstellungen einer von Ihnen angegebenen Regel entsprechen, zum Beispiel "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des [responsiven Webdesigns](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), da sie es Ihnen ermöglichen, verschiedene Layouts abhängig von der Größe des Viewports zu erstellen. Sie können aber auch verwendet werden, um andere Aspekte der Umgebung zu erkennen, in der Ihre Website läuft, z.B. ob der Benutzer einen Touchscreen statt einer Maus verwendet.

In dieser Lektion lernen Sie zunächst die Syntax von Media Queries und wenden diese dann in Beispielen an, um zu zeigen, wie ein einfaches Design responsiv gestaltet werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Syntax von Media Queries.</li>
          <li>Die gebräuchlichsten Arten von Media Queries.</li>
          <li>Verwenden von <code>width</code> und <code>height</code> Media Queries, um responsive Layouts zu erstellen.</li>
          <li>Auswahl von Breakpoints.</li>
          <li>Verwenden von Media Queries zur Implementierung eines Mobile-First-Designs.</li>
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

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medium dieser Code bestimmt ist (Druck oder Bildschirm).
- Einer Medienausdruck, der eine Regel oder einen Test darstellt, die/das erfüllt sein muss, damit die enthaltenen CSS-Regeln angewendet werden.
- Einem Satz von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query stellt den Body nur auf 12pt ein, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der Medientyp hier unterscheidet sich vom so genannten {{Glossary("MIME_type", "MIME-Typ")}}.
> In der Spezifikation der Level 3 Media Queries wurden eine Reihe weiterer Medientypen definiert; diese wurden veraltet und sollten vermieden werden.
> Medientypen sind optional; wenn Sie keinen Medientyp in Ihrer Media Query angeben, wird die Media Query standardmäßig für alle Medientypen verwendet.

### Regeln zu Medienmerkmalen

Nachdem Sie den Typ angegeben haben, können Sie dann ein Medienmerkmal mit einer Regel ansprechen.
Die folgenden Beispiele zeigen, wie Sie verschiedene Media Queries verwenden.
Um die `width` Ihres Bildschirms zu ändern, ändern Sie die Größe Ihres Browsers oder drehen Sie Ihr Handgerät.

> [!NOTE]
> Alternativ können Sie die Responsive-Größenfunktionen der Browser-Entwickler-Tools (z.B. Firefox [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/)) nutzen, um verschiedene Gerätebreiten zu simulieren.

#### Breite und Höhe

Das Feature, das wir in der Regel am häufigsten erkennen, um responsive Designs zu erstellen (und das weitreichende Browserunterstützung hat), ist die Viewport-Breite. CSS kann angewendet werden, wenn der Viewport über oder unter einer bestimmten Breite liegt — oder eine exakte Breite hat —, indem das Medienmerkmal `width` verwendet wird und es bei Bedarf mit `min-` oder `max-` vorangestellt wird.

Diese Features werden verwendet, um Layouts zu erstellen, die auf unterschiedliche Bildschirmgrößen reagieren. Um beispielsweise den Textkörper rot zu färben, wenn der Viewport genau 600 Pixel beträgt, würden Sie die folgende Media Query verwenden.

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

Versuchen Sie, die Breite des Browserfensters anzupassen, um zu sehen, ob Sie den Punkt finden können, an dem das obige Demo genau `600px` breit ist, sodass der Text rot wird.

Die `width` (und `height`) Medienmerkmale können als Bereiche verwendet werden und können daher mit `min-` oder `max-` vorangestellt werden, um anzuzeigen, dass der angegebene Wert ein Minimum oder ein Maximum ist. Um beispielsweise die Farbe blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

In der Praxis ist die Verwendung von minimalen oder maximalen Werten viel nützlicher für responsives Design, sodass Sie `width` oder `height` selten allein verwenden werden.

Es gibt viele andere Medienmerkmale, auf die Sie testen können, obwohl einige der neueren Merkmale, die in den Levels 4 und 5 der Media Queries-Spezifikation eingeführt wurden, nur begrenzte Browserunterstützung haben. Jedes Feature ist auf MDN zusammen mit Informationen zur Browserunterstützung dokumentiert, und Sie können eine vollständige Liste unter [Verwenden von Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax) finden.

#### Ausrichtung

Ein gut unterstütztes Medienmerkmal ist `orientation`, mit dem wir die Hoch- oder Querformat-Ausrichtung testen können. Um die Textfarbe des Körpers zu ändern, wenn sich das Gerät im Querformat befindet, verwenden Sie die folgende Media Query.

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

Das obige Beispiel ist ziemlich schwierig, auf der Seite zu testen; um es in Aktion zu sehen, wird empfohlen, den obigen Code in eine lokale HTML-Datei zu kopieren und in einem eigenen Tab zu öffnen.

Ein Standard-Desktop-Ansicht hat eine Querformat-Ausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat betrachtet wird. Das Testen auf Ausrichtung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Als Teil der Level 4-Spezifikation wurde das Medienmerkmal `hover` eingeführt. Dieses Feature bedeutet, dass Sie testen können, ob der Benutzer die Möglichkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er eine Art Zeigegerät verwendet; Touchscreen und Tastaturnavigation schweben nicht.

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

Das obige Beispiel wechselt bei Hovern zu weißem Text auf schwarzem Hintergrund, jedoch nur auf Geräten, bei denen das Hovern möglich ist. Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Features standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir uns entscheiden, sie verfügbar zu machen, wenn ein Link gehoben wird.

Auch auf Level 4 befindet sich das Medienmerkmal `pointer`. Dieses hat drei mögliche Werte, `none`, `fine` und `coarse`. Ein `fine` Zeiger ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, ein kleines Gebiet präzise zu treffen. Ein `coarse` Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; vielleicht navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion eines Benutzers mit einem Bildschirm reagieren. Zum Beispiel könnten Sie größere Treffpunkte erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

### Verwendung der Bereichssyntax

Ein häufiger Fall ist es zu prüfen, ob die Viewport-Breite zwischen zwei Werten liegt:

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

Mit all den verschiedenen möglichen Media Queries möchten Sie möglicherweise diese kombinieren oder Listen von Queries erstellen, von denen jede übereinstimmen könnte.

Wie zuvor, versuchen Sie, die Beispiele in diesem Abschnitt zu testen, indem Sie Ihre Browserbreite anpassen.

### "und"-Logik in Media Queries

Um Medienmerkmale zu kombinieren, können Sie `and` in ähnlicher Weise verwenden, wie wir `and` oben verwendet haben, um einen Medientyp und ein Merkmal zu kombinieren. Zum Beispiel könnten wir `width` und `orientation` testen wollen. Der Text des Körpers wird nur dann blau, wenn der Viewport mindestens 600 Pixel breit ist und sich das Gerät im Querformat befindet.

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

Wenn Sie einen Satz von Queries haben, von denen jede übereinstimmen könnte, können Sie diese Queries kommagetrennt angeben. Im folgenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER das Gerät sich im Querformat befindet. Wenn eines dieser Dinge wahr ist, entspricht die Abfrage.

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

Sie können eine gesamte Media Query negieren, indem Sie den `not`-Operator verwenden. Dies kehrt die Bedeutung der gesamten Media Query um. Daher wird im nächsten Beispiel der Text nur dann blau sein, wenn der Viewport _nicht_ mindestens 600 Pixel breit ist.

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

Dies wird die Stile anwenden, wenn die Viewport-Breite zwischen 600 und 1000 Pixel liegt. Dies ist gleichbedeutend mit `(600px <= width <= 1000px)`.

## Wie man Breakpoints auswählt

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen anzusprechen. Listen von Bildschirmgrößen beliebter Telefone und Tablets wurden veröffentlicht, damit Designs erstellt werden konnten, die genau auf diese Viewports abgestimmt waren.

Es gibt jetzt viel zu viele Geräte mit einer großen Vielfalt an Größen, um das als praktikabel zu betrachten. Das bedeutet, dass das Anvisieren spezifischer Größen für alle Designs nicht mehr sinnvoll ist. Ein besserer Ansatz ist es, das Design an der Stelle zu ändern, an der der Inhalt auf irgendeine Weise zerbricht. Vielleicht werden die Zeilenlängen viel zu lang, oder eine Seitenleiste wird gequetscht und schwer lesbar. Das ist der Punkt, an dem Sie eine Media Query verwenden möchten, um das Design an das verfügbare Platzangebot anzupassen. Dieser Ansatz bedeutet, dass es nicht darauf ankommt, welche genauen Abmessungen das verwendete Gerät hat; jeder Bereich wird abgedeckt. Die Punkte, an denen eine Media Query eingeführt wird, sind als **Breakpoints** bekannt.

[Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in den Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints gesetzt werden sollten. Sie können den Viewport einfach verkleinern und vergrößern, um zu sehen, wo der Inhalt durch das Hinzufügen einer Media Query und das Anpassen des Designs verbessert würde.

![Ein Screenshot eines Layouts in der mobilen Ansicht in den Firefox DevTools.](rwd-mode.png)

## Mobile-First-Responsive-Design

Im Großen und Ganzen können Sie zwei Ansätze für responsives Design verfolgen. Sie können mit einer Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um die Dinge zu verschieben, während der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layouts hinzufügen, während der Viewport größer wird. Dieser zweite Ansatz wird als **Mobile-First-Responsive-Design** beschrieben und ist häufig der beste Ansatz, dem Sie folgen sollten.

Die Ansicht für die kleinsten Geräte ist häufig eine einfache Einzelspalte von Inhalten, so wie sie im normalen Fluss erscheint. Das bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte benötigen — ordnen Sie Ihre Quelle gut und Sie haben ein lesbares Layout von Haus aus.

## Ihr eigenes Mobile-First-Design erstellen

Nun sind Sie dran; in diesem Tutorial-Abschnitt werden Sie Ihr eigenes einfaches Mobile-First-Responsive-Design erstellen. Auf einer Produktionsseite müssen Sie wahrscheinlich mehr Dinge innerhalb Ihrer Media Queries anpassen, der Ansatz wird jedoch genau derselbe sein.

### Erste Schritte

Unser Ausgangspunkt ist ein HTML-Dokument mit einigen CSS, um den verschiedenen Teilen des Layouts Hintergrundfarben hinzuzufügen.

Kopieren Sie zuerst den HTML-Code aus dem unten stehenden Block in einen Texteditor, speichern Sie ihn als HTML-Datei auf Ihrem Computer und öffnen Sie ihn in Ihrem Browser:

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

Die Quelle des Dokuments ist so angeordnet, dass der Inhalt lesbar ist. Dies ist ein wichtiger erster Schritt und sorgt dafür, dass der Inhalt verständlich wäre, wenn er von einem Screenreader vorgelesen würde.

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

Wenn Sie das Layout im Responsive Design Mode in den DevTools anzeigen oder Ihr Browserfenster auf eine mobile Breite verengen, werden Sie feststellen, dass es als unkomplizierte mobile Ansicht der Seite ziemlich gut funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

### Erstellen eines Zwei-Spalten-Layouts für mittlere Breiten

Ziehen Sie das Fenster breiter, bis Sie sehen können, dass die Zeilenlängen ziemlich lang werden; zu diesem Zeitpunkt haben Sie Platz für die Navigation, um in einer horizontalen Linie angezeigt zu werden. Dies ist der Punkt, an dem wir unsere erste Media Query hinzufügen. Wir verwenden `em`-Einheiten, da dies bedeutet, dass wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, aber breiterem Viewport, auftritt als bei jemandem mit kleinerer Textgröße.

Fügen Sie das Folgende am Ende Ihrer CSS hinzu:

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

Dieses CSS gibt uns ein Zwei-Spalten-Layout innerhalb des `<article>`, des Inhalts des Artikels und der verwandten Informationen im `<aside>`-Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Zeile zu setzen.

### Hinzufügen einer dritten Spalte für breitere Bildschirme

Lassen Sie uns weiter die Breite erweitern, bis wir das Gefühl haben, dass genügend Platz vorhanden ist, damit die Seitenleiste auch eine neue Spalte bildet. Innerhalb einer Media Query machen wir das `<main>`-Element zu einem Zwei-Spalten-Raster. Wir müssen dann den {{cssxref("margin-bottom")}} des Artikels entfernen, damit die beiden Seitenleisten sich miteinander ausrichten, und wir fügen dem Fußbereich einen {{cssxref("border")}} oben hinzu. Typischerweise sind dies die kleinen Anpassungen, die Sie vornehmen, um das Design bei jedem Breakpoint gut aussehen zu lassen.

Fügen Sie das Folgende am Ende Ihrer CSS hinzu:

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
    border-top: 1px solid #ccc;
    margin-top: 2em;
  }
}
```

Das ist das fertige Beispiel. Wenn Sie das Ergebnis in verschiedenen Breiten betrachten, können Sie sehen, wie das Design als Einzelspalte, zwei Spalten oder drei Spalten arbeitet, je nach verfügbarer Breite. Dies ist ein einfaches Beispiel für ein Mobile-First-Responsive-Design.

### viewport meta

Wenn Sie im obigen Beispiel den HTML-Quellcode ansehen, sehen Sie folgendes Element im Kopf des Dokuments enthalten:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist das [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag — es existiert als Möglichkeit, die Art und Weise zu steuern, wie mobile Browser Inhalte rendern, um sicherzustellen, dass sie Ihre Media Queries respektieren. Das obige teilt mobilen Browsern mit: "Rende den Inhalt nicht mit einem 980-Pixel-Viewport — rendere ihn stattdessen mit der echten Gerätebreite und setze einen standardisierten Ausgangsmaßstab für eine bessere Konsistenz." Die Media Queries treten dann wie erwartet in Kraft.

Für weitere Informationen darüber, warum dies benötigt wird, siehe [Das viewport Meta-Tag](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#the_viewport_meta_tag) Abschnitt im vorherigen Artikel.

## Benötigen Sie wirklich eine Media Query?

Flexbox und CSS Grid bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten ohne die Notwendigkeit einer Media Query zu erstellen: Es lohnt sich immer zu überlegen, ob Sie wirklich eine benötigen. Zum Beispiel möchten Sie möglicherweise einen Satz von Karten, die mindestens 200 Pixel breit sind, und so viele davon über die Hauptinhaltsspalte passen, wie sie möglich sind, unabhängig davon, wie breit sie ist.

Dies kann mit CSS Grid erreicht werden, ohne jegliche Media Queries:

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

Versuchen Sie, Ihr Browserfenster breiter und schmaler zu machen, um die Anzahl der Spaltenspuren ändern zu sehen.

Das Schöne an dieser Methode ist, dass Grid nicht die Viewport-Breite betrachtet, sondern die Breite, die es für diese Komponente zur Verfügung hat. Es mag seltsam erscheinen, ein Abschnitt über Media Queries mit dem Vorschlag abzuschließen, dass Sie möglicherweise überhaupt keine benötigen! In der Praxis werden Sie jedoch feststellen, dass eine gute Nutzung moderner Layout-Methoden, ergänzt durch Media Queries, die besten Ergebnisse liefern wird.

## Testen Sie Ihr Können

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einen Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Responsive Webdesign und Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design).

## Zusammenfassung

In dieser Lektion haben Sie über Media Queries gelernt und auch erfahren, wie Sie diese in der Praxis verwenden, um ein Mobile-First Responsive Design zu erstellen.

Sie könnten den Ausgangspunkt, den wir erstellt haben, verwenden, um weitere Media Queries auszuprobieren. Zum Beispiel könnten Sie die Größe der Navigation ändern, wenn Sie feststellen, dass der Besucher einen groben Zeiger verwendet, indem Sie das `pointer`-Medienmerkmal verwenden.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und sehen, ob das Hinzufügen einer Media Query oder die Verwendung einer Layout-Methode wie Flexbox oder Grid der beste Weg ist, um die Komponenten responsiv zu machen. Sehr oft gibt es kein richtig oder falsch — Sie sollten experimentieren und sehen, was am besten zu Ihrem Design und Inhalt passt.

OK, wir sind fast am Ende dieses Moduls. Lassen Sie uns abschließen, indem wir Ihnen eine Herausforderung geben, um Ihr umfassenderes Verständnis des CSS-Layouts zu testen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}
