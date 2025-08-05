---
title: Einstieg in CSS
short-title: Einführung in CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: 3d06d82cbddf640291fd66cf85cd9014c4e867c5
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel werden Sie ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei Sie einige praktische Details der Sprache auf dem Weg lernen. Wir werden auch einige zusätzliche CSS-Syntax-Funktionen überprüfen, die Sie sich bisher nicht angesehen haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Anwenden von CSS auf ein HTML-Dokument.</li>
          <li>Praktische Erfahrung im Schreiben von einfachem CSS.</li>
          <li>Arbeitskenntnisse über grundlegende Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des Zustands, wie es auf CSS angewendet wird.</li>
          <li>Vertrautheit mit weiteren CSS-Syntaxfunktionen wie At-rules, Funktionen, Kurzschreibweise und Leerzeichen.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Beginnend mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den Code von unten kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den folgenden Code als `index.html` in einem Ordner auf Ihrem Rechner.

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen – klicken Sie auf die Schaltfläche "Play" im oben stehenden Live-Beispiel, um es im MDN Playground zu öffnen. Dort können Sie den CSS- und HTML-Code wie weiter unten beschrieben bearbeiten und die kombinierten Ergebnisse live sehen.

## Hinzufügen von CSS zu unserem Dokument

Das erste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Ihnen häufig begegnen werden – externe Stylesheets, interne Stylesheets und Inline-Stile. Schauen wir uns diese jetzt an.

Wenn Sie diesen Artikel über den MDN Playground durcharbeiten, können Sie die in diesem Abschnitt beschriebenen Schritte nicht auf dieselbe Weise nachvollziehen wie Personen, die den Code auf ihren lokalen Computern schreiben. Dies liegt daran, dass der MDN Playground das Hinzufügen des CSS zum HTML im Hintergrund implizit behandelt. Sie sollten jedoch trotzdem den Abschnitt durchlesen, um den Inhalt zu kennen.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit einer `.css`-Erweiterung. Dies ist die gebräuchlichste und nützlichste Methode, um CSS zu einem Dokument hinzuzufügen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen und alle mit demselben CSS-Stylesheet gestalten.

Erstellen Sie eine Datei im gleichen Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie die folgende Zeile irgendwo innerhalb des {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, unter Verwendung des `rel`-Attributs und den Ort dieses Stylesheets als Wert des `href`-Attributs. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Fügen Sie mit Ihrem Code-Editor das Folgende zu Ihrer CSS-Datei hinzu:

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift auf Stufe 1 sollte jetzt rot sein. Wenn das passiert, herzlichen Glückwunsch – Sie haben erfolgreich CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles richtig getippt haben.

#### Auffinden von Stylesheets an verschiedenen Orten

Im obigen Beispiel befindet sich die CSS-Datei im selben Ordner wie das HTML-Dokument, aber Sie könnten sie auch woanders platzieren und den Pfad anpassen (ähnlich wie bei [HTML-Bildern](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets befinden sich innerhalb von {{htmlelement("style")}}-Elementen, die im HTML-{{htmlelement("head")}} stehen. Lassen Sie uns jetzt eines erstellen.

Fügen Sie in Ihrem HTML-Dokument das folgende Snippet irgendwo zwischen den `<head>` und `</head>`-Tags hinzu:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern und aktualisieren Sie die Seite, und Sie sollten sehen, dass alle Ihre Absätze lila werden.

Unter bestimmten Umständen können interne Stylesheets nützlich sein. Zum Beispiel, wenn Sie mit einem Content-Management-System arbeiten, bei dem Sie von der Bearbeitung externer CSS-Dateien ausgeschlossen sind.

Für Websites mit mehr als einer Seite sind interne Stylesheets jedoch weniger effizient als externe Stylesheets. Um einheitliches CSS-Styling auf mehrere Seiten anzuwenden, müssten bei internen Stylesheets diese für jede Webseite wiederholt werden. Das Effizienzproblem setzt sich auch in der Wartung der Website fort. Mit CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Stiländerung Änderungen an mehreren Webseiten erfordert.

Bevor Sie fortfahren, entfernen Sie das `<style>`-Element und dessen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die ein einzelnes HTML-Element betreffen, das innerhalb eines `style`-Attributs enthalten ist. Lassen Sie uns nun eines implementieren.

Fügen Sie dem {{htmlelement("span")}}-Element in Ihrem HTML ein `style`-Attribut hinzu, sodass es wie folgt aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern und aktualisieren Sie die Seite, und Sie sollten sehen, dass nur der Text innerhalb des `<span>` lila und fett wird. Versuchen Sie, einige weitere Deklarationen in Ihr `style`-Attribut einzufügen (durch Semikolons getrennt) oder einige zusätzliche `style`-Attribute zu anderen Elementen hinzuzufügen.

Sobald Sie mit Experimenten fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wenn möglich.** Es ist eine schlechte Praxis. Erstens ist es die ineffizienteste Implementierung von CSS für die Wartung. Eine Stiländerung könnte mehrere Bearbeitungen innerhalb einer einzelnen Webseite erfordern. Zweitens vermischt Inline-CSS auch (CSS) Prä1sentationscode mit HTML und Inhalt, was alles schwerer lesbar und verständlich macht. Die Trennung von Code und Inhalt macht die Wartung für alle, die an der Website arbeiten, einfacher.

Sie könnten auf die Verwendung von Inline-Stilen angewiesen sein, wenn Ihre Arbeitsumgebung sehr restriktiv ist. Zum Beispiel, wenn Ihr CMS Ihnen nur erlaubt, den HTML-Body zu bearbeiten. Sie könnten auch viele Inline-Stile in HTML-E-Mails sehen, um die Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen. Es ist auch ziemlich üblich, Inline-Stile zu setzen, wenn Stil dynamisch mit JavaScript angewendet wird.

## Verwendung von häufigen Selektoren

In diesem Abschnitt werden wir einen kurzen Überblick über einige der häufigeren Selektortypen geben, die Sie begegnen werden.

### Auswahl von HTML-Elementen

Indem wir unsere Überschrift rot machen, haben wir bereits gezeigt, dass wir ein HTML-Element anvisieren und stylen können. Wir tun dies, indem wir einen **Elementselektor** (auch bekannt als **Typselektor**) verwenden – dies ist ein Selektor, der den Namen eines HTML-Elements direkt übereinstimmt. Um alle Absätze im Dokument zu markieren, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie verwenden:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig anvisieren, indem Sie die Selektoren mit einem Komma trennen. Wenn Sie wollten, dass alle Absätze und alle Listenelemente grün sind, würde Ihre Regel so aussehen:

```css
p,
li {
  color: green;
}
```

Probieren Sie dies im folgenden Beispiel (klicken Sie auf "Play") oder in Ihrer lokalen Kopie aus:

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

### Hinzufügen einer Klasse

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestylt. Dies funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Teilmenge der Elemente auszuwählen, ohne die anderen zu ändern, können Sie eine `class` zu Ihrem HTML-Element hinzufügen und diese Klasse in Ihrem CSS anvisieren.

1. Fügen Sie in Ihrem HTML-Dokument einem zweiten Listenelement ein [class-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) hinzu. Ihre Liste sieht jetzt so aus:

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

3. Speichern und aktualisieren Sie die Seite, um zu sehen, was das Ergebnis ist.

Sie können jetzt die Klasse `special` auf andere Elemente auf Ihrer Seite anwenden, die dasselbe Aussehen wie dieses Listenelement haben sollen. Fügen Sie dem `<span>` innerhalb des Absatzes eine Klasse `special` hinzu, und laden Sie Ihre Seite neu: Es sollte jetzt ebenfalls orange und fett sein.

### Gestaltung basierend auf ihrem Standort im Dokument

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, basierend darauf, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen dabei helfen können; vorerst werden wir uns jedoch nur einige ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente – eines innerhalb eines Absatzes und das andere innerhalb eines Listenelements. Um nur ein `<em>` auszuwählen, das in einem `<li>`-Element verschachtelt ist, können Sie einen Selektor namens **Nachkom-men-Kombinator** verwenden, der die Form eines Leerzeichens zwischen zwei anderen Selektoren annimmt.

Fügen Sie Ihrer Stylesheet die folgende Regel hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wird jedes `<em>`-Element auswählen, das ein Nachkomme eines `<li>` ist. So sollten Sie in Ihrem Beispiel-Dokument feststellen, dass das `<em>` im dritten Listenelement jetzt lila ist, während das im Absatz unverändert bleibt.

Etwas anderes, das Sie ausprobieren könnten, ist das Stylen eines Absatzes, wenn er direkt nach einer Überschrift auf derselben Hierarchiestufe im HTML kommt. Um dies zu tun, platzieren Sie ein `+` (einen **nachfolgenden Geschwister-Kombinator**) zwischen den Selektoren.

Versuchen Sie, diese Regel ebenfalls zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das Live-Beispiel unten enthält die beiden oben genannten Regeln. Versuchen Sie, eine Regel hinzuzufügen, um ein span rot zu machen, wenn es sich in einem Absatz befindet. Sie werden wissen, ob Sie es richtig gemacht haben, weil das span im ersten Absatz rot sein wird, aber das im ersten Listenelement wird sich nicht ändern.

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
> Wie Sie sehen, gibt uns CSS mehrere Möglichkeiten, Elemente anzuvisieren, und wir haben bislang nur an der Oberfläche gekratzt! Wir werden später im Kurs näher auf all diese Selektoren und viele weitere eingehen.

### Styling basierend auf Zustand

Die letzte Art der Gestaltung, die wir uns in diesem Tutorial ansehen werden, ist die Möglichkeit, Dinge basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel dafür ist das Stylen von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) (Anker-) Element anvisieren. Dieses hat unterschiedliche Zustände, je nachdem ob es unbesucht, besucht, überfahren, über die Tastatur fokussiert oder gerade geklickt wird (aktiviert). Sie können CSS verwenden, um diese unterschiedlichen Zustände anzusprechen – das folgende CSS stilisiert unbesuchte Links in Pink und besuchte Links in Grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer mit der Maus darüber fährt, zum Beispiel indem Sie die Unterstreichung entfernen, was durch die folgende Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im folgenden Beispiel können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links spielen. Wir haben die obigen Regeln hinzugefügt, und jetzt erkennen, dass die pinke Farbe ziemlich hell und schwer lesbar ist – warum ändern Sie das nicht in eine bessere Farbe? Können Sie die Links fett machen?

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

Wir haben die Unterstreichung bei unserem Link beim Überfahren entfernt. Sie könnten die Unterstreichung in allen Zuständen eines Links entfernen. Es ist jedoch wichtig, sich daran zu erinnern, dass Sie in einer realen Website sicherstellen möchten, dass Besucher erkennen, wenn ein Link ein Link ist. Das Beibehalten der Unterstreichung kann ein wichtiger Hinweis darauf sein, dass ein Text in einem Absatz angeklickt werden kann – dies ist das Verhalten, das sie gewohnt sind. Wie bei allem in CSS besteht das Potenzial, durch Ihre Änderungen das Dokument weniger zugänglich zu machen – wir werden darauf abzielen, mögliche Fallstricke an geeigneten Stellen zu verdeutlichen.

> [!NOTE]
> In diesen Lektionen und auf MDN wird oft die [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) erwähnt. Wenn wir über Zugänglichkeit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten für jeden verständlich und benutzbar sein sollten, egal ob sie einen Computer mit einer Maus oder einem Trackpad benutzen, ein Telefon mit einem Touchscreen, nur über die Tastatur navigieren oder einen Screenreader verwenden, der den Inhalt des Dokuments vorliest.

### Kombination von Selektoren und Kombinatoren

Es ist erwähnenswert, dass Sie mehrere Selektoren und Kombinatoren zusammen kombinieren können. Zum Beispiel:

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}
```

Sie können auch mehrere Typen zusammen kombinieren. Versuchen Sie, das Folgende in Ihren Code einzufügen:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit einer Klasse von `special` stylen, das sich in einem `<p>` befindet, welches direkt nach einem `<h1>` kommt. Puh! Dies sollte das `<span class="special">span element</span>`-Element in Ihrem Code anvisieren.

Keine Sorge, wenn das momentan etwas kompliziert erscheint – Sie werden bald den Dreh herausbekommen, je mehr CSS Sie schreiben.

## Andere CSS-Syntaxmerkmale

Nachdem wir nun mit einigen CSS-Funktionen gespielt haben, geben wir Ihnen einen Überblick über einige der anderen CSS-Syntaxmerkmale, denen Sie im Laufe des Kurses begegnen werden. Wenn Sie mehr Details zu einem dieser Themen nachschlagen möchten, können Sie versuchen, den Feature-Namen in das Suchfeld oben auf dieser Seite einzutippen oder im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) zu stöbern.

Um mit den Code-Snippets in jedem Fall zu experimentieren, könnten Sie das bereitgestellte HTML und CSS in das lokale Beispiel oder die MDN Playground-Instanz einfügen, an der Sie oben gearbeitet haben.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

#### Die `calc()`-Funktion

Ein Beispiel wäre die `calc()`-Funktion, die einfache Mathematik innerhalb von CSS ausführen kann:

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im obigen `calc()`-Beispiel definieren die Werte die Breite dieser Box als 90 % der Breite des umschließenden Blocks, minus 30 Pixel.

#### Transformationsfunktionen

Ein weiteres Beispiel wären die verschiedenen Werte für die {{cssxref("transform")}}-Eigenschaft, wie z.B. `rotate()`.

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

Die Ausgabe des obigen Codes sieht so aus:

{{EmbedLiveSample('Transform_functions', '100%', 200)}}

Sehen Sie sich verschiedene Werte der unten aufgelisteten Eigenschaften an. Versuchen Sie, CSS-Regeln zu schreiben, die Styling auf verschiedene HTML-Elemente mit den folgenden Funktionen anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradient-Werte
- {{cssxref("color")}}, insbesondere rgb und hsl-Werte

### @rules

CSS [@rules](/de/docs/Web/CSS/CSS_syntax/At-rule) (ausgesprochen "at-rules") geben Anweisungen dafür, wie CSS sich verhalten soll. Eine gängige @rule, auf die Sie wahrscheinlich stoßen werden, ist `@media`, die verwendet wird, um [media queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media queries verwenden bedingte Logik für die Anwendung von CSS-Styling.

Im folgenden Beispiel definiert das Stylesheet einen standardmäßigen pinken Hintergrund für das `<body>`-Element. Es folgt jedoch eine Media-Query, die einen blauen Hintergrund auf das `<body>`-Element legt, wenn die Browser-Ansichtsfensterbreite breiter als `30em` ist.

```css
body {
  background-color: pink;
}

@media (width >= 30em) {
  body {
    background-color: blue;
  }
}
```

### Kurzschreibweise von Eigenschaften

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} und {{cssxref("margin")}} werden **Kurzschreibweise von Eigenschaften** genannt. Dies liegt daran, dass Kurzschreibweise von Eigenschaften mehrere Werte in einer einzigen Zeile festlegen.

Zum Beispiel entspricht diese eine Zeile Code:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

diesen vier Zeilen Code:

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

Diese eine Zeile:

```css
background: red url("bg-graphic.png") 10px 10px repeat-x fixed;
```

entspricht diesen fünf Zeilen:

```css
background-color: red;
background-image: url("bg-graphic.png");
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

Im Laufe des Kurses werden Sie auf viele weitere Beispiele für Kurzschreibweise von Eigenschaften stoßen. Versuchen Sie vorerst, die obigen Deklarationen (oder andere, die Sie möglicherweise kennen) in Ihrem eigenen Code zu verwenden, um sich mit ihrer Funktionsweise vertraut zu machen.

### CSS-Kommentare

Wie bei jeder Codierung ist es bewährte Praxis, Kommentare in Ihrem CSS zu schreiben. Dies hilft Ihnen, sich daran zu erinnern, wie der Code funktioniert, wenn Sie später zu ihm zurückkehren, um Korrekturen oder Verbesserungen vorzunehmen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im Beispiel unten markieren Kommentare den Beginn von verschiedenen Codeabschnitten. Dies hilft dabei, die Codebasis zu navigieren, sobald sie größer wird. Mit einer solchen Kommentierung an Ort und Stelle kann das Suchen nach Kommentaren in Ihrem Code-Editor zu einer effizienten Möglichkeit werden, einen Codeabschnitt zu finden.

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

@media (width >= 70em) {
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
#id::first-line {
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

Das "Auskommentieren" von Code ist auch nützlich, um Teile des Codes für Tests vorübergehend zu deaktivieren. Im folgenden Beispiel sind die Regeln für `.special` durch Auskommentieren des Codes deaktiviert.

```css
/* .special {
  color: red;
} */

p {
  color: blue;
}
```

Versuchen Sie, Kommentare zu Ihrem CSS hinzuzufügen.

### Leerzeichen in CSS

Leerzeichen bedeuten tatsächliche Leerzeichen, Tabs und neue Zeilen. Genau wie Browser zusätzliche Leerzeichen in HTML ignorieren, ignorieren Browser zusätzliche Leerzeichen in CSS. Der Vorteil von Leerzeichen ist, dass es Ihnen das Lesen des Codes erleichtert.

Im folgenden Beispiel hat jede Deklaration (und Regelstart/-ende) ihre eigene Zeile. Dies ist vermutlich eine gute Möglichkeit, CSS zu schreiben. Es macht es leichter, CSS zu warten und zu verstehen.

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

@media (width >= 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}
```

Das nächste Beispiel zeigt dasselbe CSS in einem kompakteren Format, mit allen zusätzlichen Leerzeichen entfernt. Obwohl die beiden Beispiele gleich funktionieren, ist das untere schwieriger zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(width>=70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Beachten Sie, dass einige Änderungen bei Leerzeichen Fehler verursachen können. Eigenschaftsnamen enthalten nie Leerzeichen, während Eigenschaftswerte, die zwischen mehreren Werten Leerzeichen erwarten, ungültig sind, wenn dieses Leerzeichen entfernt wird. Zum Beispiel sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Abstandsfehler? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte darstellen: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) hat keinen Leerraum darin.

Sie sollten immer sicherstellen, dass Sie separate Werte durch mindestens ein Leerzeichen voneinander trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als zusammenhängende Zeichenfolgen.

Um herauszufinden, wie Abstand CSS brechen kann, versuchen Sie, mit dem Abstand in Ihrem Test-CSS zu spielen.

## Zusammenfassung

In diesem Artikel haben wir uns verschiedene Möglichkeiten angesehen, wie Sie ein Dokument mit CSS gestalten können. Wir werden dieses Wissen weiterentwickeln, während wir die restlichen Lektionen durchgehen. Sie wissen nun bereits genug, um Text zu gestalten und CSS auf verschiedene Arten anzuwenden, um Elemente im Dokument zu anvisieren.

Als Nächstes geben wir Ihnen eine Herausforderung, um Ihr neu erworbenes Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
