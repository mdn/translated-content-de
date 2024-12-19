---
title: Grundlagen von Media Query
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}

Die **CSS Media Query** bietet Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung eine von Ihnen festgelegte Regel erfüllt, zum Beispiel "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie es Ihnen ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. Sie können jedoch auch verwendet werden, um andere Dinge über die Umgebung, in der Ihre Website läuft, zu erkennen, zum Beispiel ob der Benutzer einen Touchscreen anstelle einer Maus verwendet.

In dieser Lektion lernen Sie zunächst die in Media Queries verwendete Syntax kennen und verwenden sie dann in Beispielen, um zu zeigen, wie ein grundlegendes Design responsiv gestaltet werden könnte.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Inhalte mit HTML strukturieren</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Syntax von Media Queries.</li>
          <li>Die häufigsten Arten von Media Queries.</li>
          <li>Verwendung von `width`- und `height`-Media Queries zur Erstellung responsiver Layouts.</li>
          <li>Auswahl von Breakpoints.</li>
          <li>Verwendung von Media Queries zur Implementierung eines Mobile-First-Designs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen von Media Query

Die einfachste Media Query Syntax sieht so aus:

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

Sie besteht aus:

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medien dieser Code gedacht ist (z. B. Druck oder Bildschirm).
- Einer Medienausdruck, das eine Regel oder einen Test darstellt, die bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einer Reihe von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query setzt den body nur dann auf 12pt, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen ist.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der Medientyp hier unterscheidet sich vom sogenannten {{Glossary("MIME_type", "MIME-Typ")}}.
> In der Level 3 Media Queries-Spezifikation wurden eine Reihe anderer Medientypen definiert; diese wurden veraltet und sollten vermieden werden.
> Medientypen sind optional; wenn Sie in Ihrer Media Query keinen Medientyp angeben, wird die Media Query standardmäßig für alle Medientypen sein.

### Medienfunktion-Regeln

Nachdem Sie den Typ angegeben haben, können Sie dann eine Medienfunktion mit einer Regel ansprechen.
Die folgenden Beispiele zeigen, wie verschiedene Media Queries verwendet werden.
Um die `width` Ihres Bildschirms zu ändern, ändern Sie die Größe Ihres Browsers oder drehen Sie Ihr tragbares Gerät. Alternativ können Sie die responsive Größenanpassungsfunktionen Ihrer Browser-Entwicklungstools verwenden, um unterschiedliche Gerätebreiten zu simulieren.

#### Breite und Höhe

Die Funktion, die wir am häufigsten erkennen, um responsive Designs zu erstellen (und die weitgehende Browser-Unterstützung hat), ist die Breite des Viewports, und wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite liegt – oder eine exakte Breite hat – mithilfe der Medienfunktionen `min-width`, `max-width` und `width`.

Diese Funktionen werden verwendet, um Layouts zu erstellen, die auf unterschiedliche Bildschirmgrößen reagieren. Zum Beispiel, um die Textfarbe des Hauptinhalts auf Rot zu setzen, wenn der Viewport genau 600 Pixel beträgt, verwenden Sie die folgende Media Query.

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

Die Medienfunktionen `width` (und `height`) können als Bereiche verwendet werden und daher mit `min-` oder `max-` vorangestellt werden, um anzugeben, dass der angegebene Wert ein Minimum oder Maximum ist. Um zum Beispiel die Farbe auf Blau zu setzen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

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

In der Praxis ist die Verwendung von Mindest- oder Höchstwerten viel nützlicher für responsives Design, sodass Sie `width` oder `height` selten allein sehen werden.

Es gibt viele andere Medienfunktionen, die Sie testen können, obwohl einige der neuen Funktionen, die in Level 4 und 5 der Media Queries-Spezifikation eingeführt wurden, eine eingeschränkte Browser-Unterstützung haben. Jede Funktion ist auf MDN zusammen mit Informationen zur Browser-Unterstützung dokumentiert, und Sie können eine vollständige Liste unter [Using Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax) finden.

#### Ausrichtung

Eine gut unterstützte Medienfunktion ist `orientation`, mit der wir auf Hoch- oder Querformat testen können. Um die Textfarbe des Hauptinhalts zu ändern, wenn sich das Gerät in Querformat-Ausrichtung befindet, verwenden Sie die folgende Media Query.

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

Eine Standard-Desktop-Ansicht hat eine Querformat-Ausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat angesehen wird. Das Testen auf Ausrichtung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Im Rahmen der Level 4-Spezifikation wurde die Medienfunktion `hover` eingeführt. Diese Funktion bedeutet, dass Sie testen können, ob der Benutzer die Möglichkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er eine Art Zeigegerät verwendet; Touchscreen und Tastaturnavigation schweben nicht.

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

Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir sie verfügbar machen, wenn über einen Link geschwebt wird.

Ebenfalls in Level 4 ist die Medienfunktion `pointer`. Diese hat drei mögliche Werte, `none`, `fine` und `coarse`. Ein `fine`-Zeiger ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, ein kleines Gebiet präzise anzusteuern. Ein `coarse`-Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; vielleicht navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion eines Benutzers mit einem Bildschirm reagieren. Zum Beispiel könnten Sie größere Ziele zusammenstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

### Verwendung der Bereichssyntax

Ein häufiger Fall ist die Überprüfung, ob die Breite des Viewports zwischen zwei Werten liegt:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

Wenn Sie die Lesbarkeit verbessern möchten, können Sie die Bereichssyntax verwenden:

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

In diesem Fall werden die Stile angewendet, wenn die Breite des Viewports zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Mit all den verschiedenen möglichen Media Queries möchten Sie möglicherweise diese kombinieren oder Listen von Queries erstellen — jede davon könnte übereinstimmen.

### "Und"-Logik in Media Queries

Um Medienfunktionen zu kombinieren, können Sie `and` in sehr ähnlicher Weise verwenden, wie wir `and` oben verwendet haben, um einen Medientyp und eine Funktion zu kombinieren. Zum Beispiel möchten wir möglicherweise auf `min-width` und `orientation` testen. Der Haupttext wird nur dann blau sein, wenn der Viewport mindestens 600 Pixel breit ist und sich das Gerät im Querformat befindet.

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

### "Oder"-Logik in Media Queries

Wenn Sie eine Menge von Abfragen haben, von denen jede zutreffen könnte, können Sie diese durch Kommas trennen. Im unten stehenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER das Gerät sich im Querformat befindet. Wenn eines dieser Dinge wahr ist, trifft die Abfrage zu.

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

### "Nicht"-Logik in Media Queries

Sie können eine gesamte Media Query mit dem `not`-Operator negieren. Dies kehrt die Bedeutung der gesamten Media Query um. In diesem nächsten Beispiel wird der Text nur blau sein, wenn die Ausrichtung Hochformat ist.

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

Dies wendet die Stile an, wenn die Breite des Viewports zwischen 600 und 1000 Pixeln liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Wie Sie Breakpoints auswählen

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen zu kontaktieren. Listen der Größen der Bildschirme beliebter Telefone und Tablets wurden veröffentlicht, damit Designs erstellt werden konnten, die sich diesen Viewports genau anpassen.

Es gibt jetzt viel zu viele Geräte, mit einer enormen Vielfalt an Größen, um das durchführbar zu machen. Das bedeutet, dass anstelle von speziellen Größen für alle Designs ein besserer Ansatz darin besteht, das Design zu ändern, wenn der Inhalt auf irgendeine Weise zu brechen beginnt. Vielleicht werden die Zeilenlängen viel zu lang oder eine abgegrenzte Seitenleiste wird gequetscht und schwer zu lesen. Das ist der Punkt, an dem Sie eine Media Query verwenden möchten, um das Design zu einem besseren für den Platz zu ändern, den Sie zur Verfügung haben. Dieser Ansatz bedeutet, dass es nicht wichtig ist, welche genauen Abmessungen das verwendete Gerät hat, jeder Bereich wird berücksichtigt. Die Punkte, an denen eine Media Query eingeführt wird, sind als **Breakpoints** bekannt.

Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in den Firefox-Entwicklungstools ist sehr nützlich, um herauszufinden, wo diese Breakpoints gesetzt werden sollen. Sie können einfach den Viewport kleiner und größer machen, um zu sehen, wo der Inhalt durch das Hinzufügen einer Media Query und das Anpassen des Designs verbessert werden würde.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in Firefox DevTools.](rwd-mode.png)

## Aktives Lernen: Mobile First Responsive Design

Im Allgemeinen können Sie zwei Ansätze für ein responsives Design wählen. Sie können mit Ihrem Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um Dinge zu verschieben, wenn der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layout hinzufügen, wenn der Viewport größer wird. Dieser zweite Ansatz wird als **Mobile First Responsive Design** bezeichnet und ist oft der beste Ansatz, dem Sie folgen sollten.

Die Ansicht für die kleinsten Geräte ist oft eine einfache Einzelspalte von Inhalten, die weitgehend dem normalen Fluss entspricht. Das bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte machen müssen – ordnen Sie Ihren Quellcode gut an, und Sie haben standardmäßig ein lesbares Layout.

Der folgende Durchgang führt Sie durch diesen Ansatz mit einem sehr einfachen Layout. Auf einer Produktionsseite müssen Sie wahrscheinlich mehr innerhalb Ihrer Media Queries anpassen, jedoch wäre der Ansatz genau der gleiche.

### Durchgang: ein Mobile-First-Layout

Unser Ausgangspunkt ist ein HTML-Dokument mit etwas CSS, das angewendet wird, um den verschiedenen Teilen des Layouts Hintergrundfarben hinzuzufügen.
Sie können den Code aus den folgenden Blöcken in einen Texteditor kopieren, ihn als HTML-Datei auf Ihrem Computer speichern und in Ihrem Browser öffnen oder "Play" klicken, um den Code im MDN Playground zu rendern und zu bearbeiten:

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

Die Quelle des Dokuments ist in einer Weise angeordnet, die die Inhalte lesbar macht. Dies ist ein wichtiger erster Schritt, der sicherstellt, dass, wenn der Inhalt von einem Screenreader vorgelesen würde, es verständlich wäre.
Hier sind einige gute Anfangsstile, die wir verwenden können:

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

Wenn wir das Layout im Responsive Design Mode in den Entwicklungstools ansehen, sehen wir, dass es ziemlich gut als eine einfache mobile Ansicht der Seite funktioniert.

{{EmbedLiveSample("walkthrough", "", "600px")}}

Ab diesem Punkt beginnen Sie, die Ansicht des Responsive Design Mode breiter zu ziehen, bis Sie sehen, dass die Zeilenlängen ziemlich lang werden und wir Platz haben, damit die Navigation in einer horizontalen Linie angezeigt wird. Hier fügen wir unsere erste Media Query hinzu. Wir verwenden ems, da dies bedeutet, dass, wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, jedoch breiteren Viewport stattfindet, als bei jemandem mit einer kleineren Textgröße.

Fügen Sie das folgende zu Ihrem CSS hinzu:

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

Dieses CSS gibt uns ein Zwei-Spalten-Layout innerhalb des Artikels, des Artikel-Inhalts und der verwandten Informationen im aside-Element. Wir haben auch flexbox verwendet, um die Navigation in eine Zeile zu setzen.

Fahren wir fort, die Breite zu erweitern, bis wir das Gefühl haben, dass genügend Platz für die Seitenleiste vorhanden ist, um auch eine neue Spalte zu bilden. Innerhalb einer Media Query werden wir das main-Element in ein Zwei-Spalten-Raster umwandeln. Wir müssen dann das {{cssxref("margin-bottom")}} des Artikels entfernen, damit sich die beiden Seitenleisten miteinander ausrichten, und wir fügen eine {{cssxref("border")}} an der Oberseite des Fußes hinzu. Normalerweise sind diese kleinen Anpassungen genau die Art von Dingen, die Sie tun werden, um das Design an jedem Breakpoint gut aussehen zu lassen.

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

Wenn Sie das Ergebnis bei unterschiedlichen Breiten betrachten, können Sie sehen, wie das Design je nach verfügbarer Breite als Einzelspalte, zwei Spalten oder drei Spalten funktioniert. Dies ist ein grundlegendes Beispiel für ein Mobile First Responsive Design.

## Der Viewport-Meta-Tag

Wenn Sie den HTML-Quellcode im obigen Beispiel ansehen, sehen Sie das folgende Element im head des Dokuments enthalten:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist der [Viewport-Meta-Tag](/de/docs/Web/HTML/Viewport_meta_tag) — es existiert, um zu steuern, wie mobile Browser Inhalte rendern. Dies ist notwendig, da die meisten mobilen Browser standardmäßig über die Breite ihres Viewports lügen. Nicht-responsive Websites sehen im Allgemeinen sehr schlecht aus, wenn sie in einem schmalen Viewport gerendert werden, daher rendern mobile Browser die Seite normalerweise mit einer Viewport-Breite, die breiter ist als die tatsächliche Gerätebreite (normalerweise 980 Pixel), und verkleinern dann das gerenderte Ergebnis, damit es in die Anzeige passt.

Dies funktioniert alles gut und schön, bedeutet jedoch, dass responsive Websites nicht wie erwartet funktionieren. Wenn die Viewport-Breite als 980 Pixel angezeigt wird, werden mobile Layouts (zum Beispiel erstellt mit einer Media Query von `@media screen and (max-width: 600px) { }`) nicht wie erwartet gerendert.

Um dieses Problem zu beheben, teilt das Hinzufügen eines Viewport-Meta-Tags wie oben auf der Seite dem Browser mit: "Rendere die Inhalte nicht mit einem 980-Pixel-Viewport — sondern verwende die reale Gerätebreite und setze einen standardmäßigen Anfangsmaßstab für bessere Konsistenz." Die Media Queries werden dann wie erwartet aktiv.

Es gibt eine Reihe anderer Optionen, die Sie innerhalb des `content`-Attributs des Viewport-Meta-Tags platzieren können — weitere Details finden Sie unter [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag).

## Brauchen Sie wirklich eine Media Query?

Flexbox, Grid und das Mehrspalten-Layout bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten zu erstellen, ohne dass eine Media Query erforderlich ist. Es lohnt sich stets, zu überlegen, ob diese Layout-Methoden das erreichen können, was Sie wollen, ohne Media Queries hinzuzufügen. Zum Beispiel könnten Sie einen Satz von Karten erstellen, die mindestens 200 Pixel breit sind, mit so vielen dieser 200 Pixel, wie in den Hauptartikel passen. Dies kann mit der Gitternetz-Layout erreicht werden, ohne jegliche Media Queries.

Dies könnte mit dem folgenden gemacht werden:

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

Vergrößern und verkleinern Sie den Bildschirm, um zu sehen, wie sich die Anzahl der Spaltenbahnen ändert. Das Schöne an dieser Methode ist, dass das Raster nicht die Breite des Viewports betrachtet, sondern die Breite, die für diese Komponente verfügbar ist. Es mag seltsam erscheinen, ein Kapitel über Media Queries mit der Anregung abzuschließen, dass Sie vielleicht überhaupt keine benötigen! In der Praxis werden Sie jedoch feststellen, dass die gute Nutzung moderner Layoutmethoden, ergänzt durch Media Queries, die besten Ergebnisse liefert.

## Testen Sie Ihre Fähigkeiten

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einen Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Responsives Webdesign und Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/rwd_skills).

## Zusammenfassung

In dieser Lektion haben Sie etwas über Media Queries gelernt und auch entdeckt, wie Sie sie in der Praxis verwenden können, um ein Mobile First Responsive Design zu erstellen.

Sie könnten den Ausgangspunkt, den wir erstellt haben, verwenden, um weitere Media Queries auszuprobieren. Zum Beispiel könnten Sie die Größe der Navigation ändern, wenn Sie erkennen, dass der Besucher einen groben Zeiger hat, indem Sie die Medienfunktion `pointer` verwenden.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und sehen, ob das Hinzufügen einer Media Query oder die Verwendung einer Layoutmethode wie Flexbox oder Grid die angemessenste Möglichkeit ist, um die Komponenten responsive zu machen. Sehr oft gibt es keinen richtigen oder falschen Weg — Sie sollten experimentieren und sehen, was für Ihr Design und Ihre Inhalte am besten funktioniert.

OK, wir sind fast am Ende dieses Moduls. Lassen Sie uns abschließend eine Herausforderung stellen, um Ihr Verständnis zu testen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}
