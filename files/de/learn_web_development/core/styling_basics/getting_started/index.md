---
title: Einstieg in CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache kennenlernen. Wir werden auch die bisher nicht behandelten CSS-Syntaxmerkmale überprüfen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundsätzlich installierte Software</a>, Grundkenntnisse im
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a>, und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Anwendung von CSS auf ein HTML-Dokument.</li>
          <li>Praktische Erfahrung im Schreiben einfacher CSS.</li>
          <li>Arbeitswissen über grundlegende Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des Zustands, wie es in CSS angewendet wird.</li>
          <li>Vertrautheit mit anderen CSS-Syntaxmerkmalen wie At-Rules, Funktionen, Kurzschreibweise und Leerzeichen.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Mit ein wenig HTML beginnen

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den Code unten kopieren, wenn Sie an Ihrem eigenen Computer arbeiten möchten. Speichern Sie den Code unten als `index.html` in einem Ordner auf Ihrem Rechner.

```html live-sample___unstyled
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Getting started with CSS</title>
  </head>

  <body>
    <h1>I am a level one heading</h1>

    <p>
      This is a paragraph of text. In the text is a
      <span>span element</span> and also a
      <a href="https://example.com">link</a>.
    </p>

    <p>
      This is the second paragraph. It contains an <em>emphasized</em> element.
    </p>

    <ul>
      <li>Item <span>one</span></li>
      <li>Item two</li>
      <li>Item <em>three</em></li>
    </ul>
  </body>
</html>
```

Dies wird so dargestellt:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen — klicken Sie auf den "Play"-Button im obigen Live-Beispiel, um es im MDN Playground zu öffnen. Dort können Sie den CSS- und HTML-Code wie weiter unten beschrieben bearbeiten und die kombinierten Ergebnisse live sehen.

## CSS zu unserem Dokument hinzufügen

Das erste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Sie häufig antreffen werden — externe Stylesheets, interne Stylesheets und Inline-Stile. Schauen wir uns diese nun an.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Erweiterung `.css`. Dies ist die häufigste und nützlichste Methode, um CSS zu einem Dokument hinzuzufügen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen und alle mit dem gleichen CSS-Stylesheet stylen.

Erstellen Sie eine Datei im gleichen Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie irgendwo innerhalb des {{htmlelement("head")}} des HTML-Dokuments die folgende Zeile hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, indem es das `rel` Attribut verwendet, und den Speicherort dieses Stylesheets als Wert des `href` Attributs angibt. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Verwenden Sie Ihren Code-Editor, um Folgendes zu Ihrer CSS-Datei hinzuzufügen (oder fügen Sie es in das "CSS"-Feld im MDN Playground ein):

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift der Ebene eins oben im Dokument sollte jetzt rot sein. Wenn das passiert, herzlichen Glückwunsch — Sie haben erfolgreich etwas CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles richtig eingegeben haben.

#### Stylesheets an verschiedenen Orten platzieren

Im obigen Beispiel befindet sich die CSS-Datei im gleichen Ordner wie das HTML-Dokument, aber Sie könnten sie auch woanders platzieren und den Pfad anpassen (auf die gleiche Weise wie bei [HTML-Bildern](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets sind innerhalb von {{htmlelement("style")}}-Elementen enthalten, die in den HTML-{{htmlelement("head")}}-Bereich gehen. Lassen Sie uns nun eines erstellen.

Fügen Sie in Ihrem HTML-Dokument das folgende Snippet irgendwo zwischen den `<head>` und `</head>` Tags hinzu:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern und aktualisieren Sie, und Sie sollten sehen, dass alle Ihre Absätze lila werden.

In manchen Fällen können interne Stylesheets nützlich sein. Zum Beispiel, wenn Sie mit einem Content-Management-System arbeiten, bei dem Sie das Ändern externer CSS-Dateien blockiert sind.

Für Websites mit mehr als einer Seite sind interne Stylesheets jedoch weniger effizient als externe Stylesheets. Um konsistente CSS-Stile auf mehrere Seiten mit internen Stylesheets anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Das Effizienzproblem überträgt sich auch auf die Wartung der Website. Mit CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Stiländerung Bearbeitungen mehrerer Webseiten erfordert.

Bevor Sie fortfahren, entfernen Sie das `<style>`-Element und seinen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Styles

Inline-Styles sind CSS-Anweisungen, die ein einzelnes HTML-Element betreffen und in einem `style`-Attribut enthalten sind. Lassen Sie uns nun eines implementieren.

Fügen Sie dem {{htmlelement("span")}}-Element in Ihrem HTML ein `style`-Attribut hinzu, sodass es wie folgt aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern und aktualisieren Sie, und Sie sollten sehen, dass nur der Text innerhalb des `<span>` lila und fett wird. Versuchen Sie, einige weitere Erklärungen innerhalb Ihres `style`-Attributs hinzuzufügen (durch Semikolons getrennt) oder zusätzliche `style`-Attribute zu anderen Elementen hinzuzufügen.

Sobald Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wenn möglich.** Es ist eine schlechte Praxis. Erstens ist es die ineffizienteste Implementierung von CSS für die Wartung. Eine Stiländerung könnte mehrere Bearbeitungen innerhalb einer einzigen Webseite erfordern. Zweitens mischt Inline-CSS auch (CSS) Präsentationscode mit HTML und Inhalt, was alles schwieriger zu lesen und zu verstehen macht. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Sie könnten gezwungen sein, Inline-Styles zu verwenden, wenn Ihre Arbeitsumgebung sehr restriktiv ist. Beispielsweise erlaubt Ihr CMS möglicherweise nur das Bearbeiten des HTML-Körpers. Sie werden möglicherweise auch viele Inline-Stile im HTML-E-Mail-Bereich sehen, um Kompatibilität mit so vielen E-Mail-Clients wie möglich zu erzielen. Es ist auch ziemlich üblich, Inline-Stile festzulegen, wenn dynamisch Stil mit JavaScript angewendet wird.

## Häufige Selektoren verwenden

In diesem Abschnitt machen wir eine kurze Tour durch einige der häufigsten Selektortypen, denen Sie begegnen werden.

### HTML-Elemente auswählen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits gezeigt, dass wir ein HTML-Element anvisieren und stylen können. Wir tun dies, indem wir einen **Elementselektor** (auch bekannt als **Typselektor**) anvisieren — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument anzusprechen, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie Folgendes verwenden:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig anvisieren, indem Sie die Selektoren mit einem Komma trennen. Wenn Sie möchten, dass alle Absätze und alle Listenelemente grün sind, würde Ihre Regel so aussehen:

```css
p,
li {
  color: green;
}
```

Probieren Sie dies im folgenden Beispiel aus (klicken Sie auf "Play") oder in Ihrer lokalen Kopie aus:

```html hidden live-sample___started-types
<h1>I am a level one heading</h1>

<p>
  This is a paragraph of text. In the text is a <span>span element</span> and
  also a <a href="http://example.com">link</a>.
</p>

<p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item <em>three</em></li>
</ul>
```

```css live-sample___started-types
h1 {
  color: red;
}

p,
li {
}
```

{{EmbedLiveSample("started-types", "", "240px")}}

### Eine Klasse hinzufügen

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestylt. Das funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Untergruppe der Elemente auszuwählen, ohne die anderen zu verändern, können Sie Ihrem HTML-Element eine `class` hinzufügen und diese Klasse in Ihrem CSS anvisieren.

1. Fügen Sie in Ihrem HTML-Dokument dem zweiten Listenelement ein [class-Attribut](/de/docs/Web/HTML/Global_attributes/class) hinzu. Ihre Liste sieht nun so aus:

   ```html
   <ul>
     <li>Item one</li>
     <li class="special">Item two</li>
     <li>Item <em>three</em></li>
   </ul>
   ```

2. In Ihrem CSS können Sie die Klasse `special` anvisieren, indem Sie einen Selektor erstellen, der mit einem Punkt beginnt. Fügen Sie Folgendes zu Ihrer CSS-Datei hinzu:

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

3. Speichern und aktualisieren Sie, um das Ergebnis zu sehen.

Sie können jetzt die Klasse `special` auf andere Elemente auf Ihrer Seite anwenden, die das gleiche Aussehen haben sollen wie dieses Listenelement. Fügen Sie dem `<span>` innerhalb des Absatzes eine Klasse von `special` hinzu und laden Sie Ihre Seite neu: Es sollte jetzt auch orange und fett sein.

### Dinge basierend auf ihrer Position in einem Dokument stylen

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, je nachdem, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen hier helfen können, aber vorerst werden wir uns nur ein paar ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines innerhalb eines Absatzes und das andere innerhalb eines Listenelements. Um nur ein `<em>` auszuwählen, das innerhalb eines `<li>`-Elements verschachtelt ist, können Sie einen Selektor namens **Nachkommen-Kombinator** verwenden, der die Form eines Leerzeichens zwischen zwei anderen Selektoren hat.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wird jedes `<em>`-Element auswählen, das ein Nachkomme eines `<li>` ist. In Ihrem Beispieldokument sollten Sie feststellen, dass das `<em>` im dritten Listenelement jetzt lila ist, während das im Absatz unverändert bleibt.

Etwas anderes, das Sie ausprobieren könnten, ist das Stylen eines Absatzes, wenn er direkt nach einer Überschrift auf derselben Hierarchieebene im HTML kommt. Um dies zu tun, platzieren Sie ein `+` (einen **darauffolgenden Geschwister-Kombinator**) zwischen den Selektoren.

Versuchen Sie auch, diese Regel zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das Live-Beispiel unten enthält die beiden oben genannten Regeln. Versuchen Sie, eine Regel hinzuzufügen, um einen span rot zu machen, wenn er innerhalb eines Absatzes ist. Sie werden wissen, ob Sie es richtig haben, weil der span im ersten Absatz rot wird, aber der im ersten Listenelement wird nicht die Farbe ändern.

```html hidden live-sample___started-combinators
<h1>I am a level one heading</h1>

<p>
  This is a paragraph of text. In the text is a <span>span element</span> and
  also a <a href="http://example.com">link</a>.
</p>

<p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

<ul>
  <li>Item <span>one</span></li>
  <li>Item two</li>
  <li>Item <em>three</em></li>
</ul>
```

```css live-sample___started-combinators
li em {
  color: rebeccapurple;
}

h1 + p {
  font-size: 200%;
}
```

{{EmbedLiveSample("started-combinators", "", "340px")}}

> [!NOTE]
> Wie Sie sehen können, gibt uns CSS mehrere Möglichkeiten, Elemente anzusprechen, und wir haben bisher nur an der Oberfläche gekratzt! Wir werden später im Kurs einen ausführlichen Blick auf all diese Selektoren und viele mehr werfen.

### Dinge basierend auf ihrem Zustand stylen

Die letzte Art von Styling, die wir in diesem Tutorial anschauen werden, ist die Fähigkeit, Dinge basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel hierfür ist das Stylen von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Element/a) (Anker)-Element anvisieren. Dieses hat verschiedene Zustände, abhängig davon, ob es nicht besucht, besucht, überfahren, über die Tastatur fokussiert oder im Klickprozess (aktiviert) ist. Sie können CSS verwenden, um diese verschiedenen Zustände anzusprechen — das folgende CSS stilt nicht besuchte Links pink und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können ändern, wie der Link aussieht, wenn der Benutzer darüber fährt, indem Sie zum Beispiel das Unterstreichen entfernen, was durch die folgende Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im Beispiel unten können Sie verschiedene Werte für die verschiedenen Zustände eines Links ausprobieren. Wir haben die oben genannten Regeln hinzugefügt, und merken nun, dass die pinkfarbene Farbe ziemlich hell und schwer zu lesen ist — warum ändern Sie das nicht in eine bessere Farbe? Können Sie die Links fett machen?

```html hidden live-sample___started-states
<h1>I am a level one heading</h1>

<p>
  This is a paragraph of text. In the text is a <span>span element</span> and
  also a <a href="http://example.com">link</a>.
</p>

<p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item <em>three</em></li>
</ul>
```

```css live-sample___started-states
a:link {
  color: pink;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}
```

{{EmbedLiveSample("started-states", "", "240px")}}

Wir haben das Unterstreichen unseres Links beim Überfahren entfernt. Sie könnten das Unterstreichen aus allen Zuständen eines Links entfernen. Es ist jedoch wichtig, sich daran zu erinnern, dass Sie in einer echten Website sicherstellen möchten, dass Besucher wissen, dass ein Link ein Link ist. Das Beibehalten des Unterstreichens kann ein wichtiger Hinweis für Menschen sein, um zu erkennen, dass ein Text innerhalb eines Absatzes angeklickt werden kann — dies ist das Verhalten, das sie gewohnt sind. Wie bei allem in CSS besteht das Potenzial, durch Ihre Änderungen das Dokument weniger zugänglich zu machen — wir werden versuchen, potentielle Fallstricke in geeigneten Stellen hervorzuheben.

> [!NOTE]
> Sie werden in diesen Lektionen und auf der gesamten MDN häufig den Begriff [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) sehen. Wenn wir über Zugänglichkeit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten für alle Menschen verständlich und benutzbar sein müssen, sei es mit einem Computer mit Maus oder Trackpad, einem Telefon mit Touchscreen, der nur über die Tastatur navigiert, oder über einen Bildschirmleser, der den Inhalt des Dokuments vorliest.

### Kombinieren von Selektoren und Kombinatoren

Es ist erwähnenswert, dass Sie mehrere Selektoren und Kombinatoren zusammen kombinieren können. Zum Beispiel:

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}
```

Sie können auch mehrere Typen miteinander kombinieren. Versuchen Sie, das Folgende in Ihren Code einzufügen:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit der Klasse `special` stylen, das sich innerhalb eines `<p>` befindet, das sich direkt nach einem `<h1>` befindet. Puh! Dies sollte das `<span class="special">span-Element</span>`-Element in Ihrem Code anvisieren.

Keine Sorge, wenn das im Moment kompliziert erscheint — Sie werden sich bald daran gewöhnen, je mehr CSS Sie schreiben.

## Weitere CSS-Syntaxmerkmale

Nachdem wir mit einigen CSS-Funktionen gespielt haben, geben wir Ihnen einen Überblick über einige der anderen CSS-Syntaxmerkmale, die Sie während des Kurses antreffen werden. Wenn Sie mehr Details zu einem dieser Merkmale nachschlagen möchten, können Sie versuchen, den Funktionsnamen in das Suchfeld oben auf dieser Seite einzugeben oder die MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) zu durchsuchen.

Um mit den Code-Snippets in jedem Fall zu experimentieren, könnten Sie das bereitgestellte HTML und CSS zum lokalen Beispiel oder einer MDN-Playground-Instanz hinzufügen, an der Sie oben gearbeitet haben.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

#### Die calc()-Funktion

Ein Beispiel wäre die `calc()`-Funktion, die einfache Mathematik innerhalb von CSS machen kann:

```html
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
```

```css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

Dies wird als:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im Fall des `calc()`-Beispiels oben definieren die Werte die Breite dieses Kästchens als 90% der Breite des umgebenden Blocks minus 30 Pixel.

#### Transformationsfunktionen

Ein weiteres Beispiel wären die verschiedenen Werte für die {{cssxref("transform")}}-Eigenschaft, wie `rotate()`.

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
```

Die Ausgabe des oben genannten Codes sieht so aus:

{{EmbedLiveSample('Transform_functions', '100%', 200)}}

Suchen Sie nach verschiedenen Werten für die unten aufgeführten Eigenschaften. Versuchen Sie, CSS-Regeln zu schreiben, die Styling auf verschiedene HTML-Elemente anwenden, indem Sie die folgenden Funktionen verwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradient-Werte
- {{cssxref("color")}}, insbesondere rgb und hsl Werte

### @rules

CSS [@rules](/de/docs/Web/CSS/At-rule) (ausgesprochen "at-rules") bieten Anweisungen dafür, wie sich CSS verhalten sollte. Eine häufige @Rule, die Ihnen wahrscheinlich begegnen wird, ist `@media`, die verwendet wird, um [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Medienabfragen verwenden bedingte Logik zum Anwenden von CSS-Styling.

Im Beispiel unten definiert das Stylesheet einen pinkfarbenen Standardhintergrund für das `<body>`-Element. Eine Medienabfrage folgt jedoch, die einen blauen Hintergrund auf das `<body>`-Element setzt, wenn das Browserfenster breiter als 30em ist.

```css
body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

Sie werden im Laufe des Kurses auf andere `@rules` stoßen.

### Kurzschreibweise-Eigenschaften

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} und {{cssxref("margin")}} werden **Kurzschreibweise-Eigenschaften** genannt. Dies liegt daran, dass Kurzschreibweise-Eigenschaften mehrere Werte in einer einzelnen Zeile setzen.

Zum Beispiel, diese eine Zeile Code:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

entspricht diesen vier Zeilen Code:

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

Diese eine Zeile:

```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

entspricht diesen fünf Zeilen:

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

Später im Kurs werden Sie auf viele andere Beispiele für Kurzschreibweise-Eigenschaften treffen. Versuchen Sie vorerst, die oben genannten Anweisungen (oder andere, die Ihnen bekannt sind) in Ihrem eigenen Code zu verwenden, um sich mit deren Funktionsweise vertraut zu machen.

### CSS-Kommentare

Wie bei jeder Codierung ist es eine gute Praxis, Kommentare in Ihrem CSS zu schreiben. Dies hilft Ihnen, sich daran zu erinnern, wie der Code funktioniert, wenn Sie später zurückkehren, um Korrekturen oder Erweiterungen vorzunehmen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im untenstehenden Beispiel markieren Kommentare den Anfang von einzelnen Codeabschnitten. Dies hilft, den Code zu navigieren, wenn er größer wird. Mit solchen Kommentaren an Ort und Stelle wird das Suchen nach Kommentaren in Ihrem Code-Editor zu einer Möglichkeit, einen Abschnitt des Codes effizient zu finden.

```css
/* Handle basic element styling */
/* ---------------------------- */
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* Increase the global font size on larger screens or windows
     for better readability */
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

/* Handle specific elements nested in the DOM */
div p,
#id:first-line {
  background-color: red;
  border-radius: 3px;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

„Kommentieren“ des Codes ist auch nützlich, um testweise Abschnitte des Codes vorübergehend zu deaktivieren. Im Beispiel unten sind die Regeln für `.special` deaktiviert, indem der Code „auskommentiert“ wird.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Versuchen Sie, Kommentare in Ihrem CSS hinzuzufügen.

### Leerzeichen in CSS

Leerzeichen bedeuten tatsächliche Leerzeichen, Tabs und neue Zeilen. Genau wie Browser zusätzlichen Leerraum in HTML ignorieren, ignorieren Browser zusätzlichen Leerraum innerhalb von CSS. Der Vorteil von Leerraum besteht darin, dass es den Code einfacher lesbar macht.

Im Beispiel unten hat jede Deklaration (und der Anfang/ das Ende der Regel) ihre eigene Zeile. Dies ist wohl eine gute Art, CSS zu schreiben. Es macht es einfacher, CSS zu warten und zu verstehen.

```css
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}
```

Das nächste Beispiel zeigt dasselbe CSS in einem komprimierteren Format, bei dem alle zusätzlichen Leerzeichen entfernt wurden. Obwohl die beiden Beispiele gleich funktionieren, ist das untere schwieriger zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Denken Sie daran, dass das Entfernen einiger Leerzeichen Fehler verursachen kann. Eigenschaftsnamen enthalten niemals Leerzeichen, während Eigenschaftenwerte, die Leerzeichen zwischen mehreren Werten erwarten, ungültig sind, wenn dieser Leerraum entfernt wird. Zum Beispiel sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Abstandsfehler? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) hat einen eingefügten Leerraum.

Du solltest immer sicherstellen, dass separate Werte durch mindestens ein Leerzeichen voneinander getrennt sind. Halten Sie Eigenschaftsnamen und Eigenschaftswerte zusammen als ungebrochene Zeichenfolgen.

Um herauszufinden, wie der Abstand CSS brechen kann, versuchen Sie, mit dem Abstand in Ihrem Test-CSS zu spielen.

## Zusammenfassung

In diesem Artikel haben wir uns einige Möglichkeiten angesehen, wie man ein Dokument mit CSS stylen kann. Wir werden dieses Wissen weiterentwickeln, während wir die restlichen Lektionen durchlaufen. Sie wissen jedoch jetzt bereits genug, um Text zu stylen und CSS auf verschiedene Weise anzuwenden, um Elemente im Dokument anzusprechen.

Als nächstes geben wir Ihnen eine Herausforderung, um Ihr neu gewonnenes Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
