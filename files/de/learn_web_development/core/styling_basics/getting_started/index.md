---
title: Einführung in CSS
short-title: Einführung in CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel werden wir Sie dazu bringen, ein einfaches HTML-Dokument zu nehmen und CSS darauf anzuwenden. Dabei lernen Sie einige praktische Details der Sprache kennen. Wir werden auch einige zusätzliche CSS-Syntax-Features überprüfen, die Sie bisher noch nicht gesehen haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, grundlegende Kenntnis des
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgangs mit Dateien</a> und HTML-Grundlagen (studieren Sie die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>CSS auf ein HTML-Dokument anwenden.</li>
          <li>Praktische Erfahrung im Schreiben von einfachem CSS.</li>
          <li>Grundkenntnisse über fundamentale Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des Zustands, wie es auf CSS angewendet wird.</li>
          <li>Vertrautheit mit anderen CSS-Syntax-Features wie At-Regeln, Funktionen, Kurzschreibweise und Leerzeichen.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Beginn mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den Code unten kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den untenstehenden Code als `index.html` in einem Ordner auf Ihrem Rechner.

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

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, keine Sorge — klicken Sie auf die Schaltfläche "Play" im obigen Live-Beispiel, um es im MDN Playground zu öffnen. Dort können Sie den CSS- und HTML-Code wie weiter unten angewiesen bearbeiten und die kombinierten Ergebnisse live sehen.

## Hinzufügen von CSS zu unserem Dokument

Das erste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, denen Sie häufig begegnen werden: externe Stylesheets, interne Stylesheets und Inline-Stile. Lassen Sie uns diese nun anschauen.

Wenn Sie diesen Artikel im MDN Playground durcharbeiten, können Sie die in diesem Abschnitt beschriebenen Schritte nicht auf die gleiche Weise ausführen wie Personen, die den Code auf ihren lokalen Computern schreiben. Das liegt daran, dass MDN Playground das Hinzufügen des CSS zum HTML implizit im Hintergrund behandelt. Sie sollten jedoch dennoch den Abschnitt durchlesen, um den Inhalt zu kennen.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Erweiterung `.css`. Dies ist die häufigste und nützlichste Methode, CSS zu einem Dokument zu bringen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen, die alle mit demselben CSS-Stylesheet gestaltet werden.

Erstellen Sie eine Datei im gleichen Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verlinken, fügen Sie die folgende Zeile irgendwo im {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element sagt dem Browser, dass wir ein Stylesheet haben, indem der `rel`-Attribut verwendet wird, und den Speicherort dieses Stylesheets als Wert des `href`-Attributs festlegt. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Verwenden Sie Ihren Code-Editor und fügen Sie Folgendes zu Ihrer CSS-Datei hinzu:

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift auf Ebene eins im oberen Teil des Dokuments sollte jetzt rot sein. Wenn das passiert, herzlichen Glückwunsch — Sie haben erfolgreich einige CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles richtig eingegeben haben.

#### Stylesheets an verschiedenen Orten platzieren

Im obigen Beispiel befindet sich die CSS-Datei im gleichen Ordner wie das HTML-Dokument, aber Sie könnten sie auch woanders platzieren und den Pfad anpassen (ähnlich wie bei [HTML-Bildern](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets sind in {{htmlelement("style")}}-Elementen enthalten, die im HTML-{{htmlelement("head")}}-Bereich platziert werden. Lassen Sie uns jetzt eines erstellen.

Fügen Sie in Ihrem HTML-Dokument den folgenden Code-Schnipsel irgendwo zwischen den `<head>` und `</head>`-Tags hinzu:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern und aktualisieren, und Sie sollten sehen, dass alle Ihre Absätze lila werden.

Unter bestimmten Umständen können interne Stylesheets nützlich sein. Zum Beispiel arbeiten Sie vielleicht mit einem Content-Management-System, bei dem Sie daran gehindert werden, externe CSS-Dateien zu ändern.

Für Websites mit mehr als einer Seite sind interne Stylesheets jedoch weniger effizient als externe Stylesheets. Um einheitliches CSS-Styling auf mehrere Seiten anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Die Effizienzverluste wirken sich auch auf die Wartung der Seite aus. Mit CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Styling-Änderung erfordert, dass mehrere Webseiten bearbeitet werden müssen.

Bevor Sie fortfahren, entfernen Sie das `<style>`-Element und seinen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Styles

Inline-Styles sind CSS-Deklarationen, die nur ein einzelnes HTML-Element betreffen und in einem `style`-Attribut enthalten sind. Lassen Sie uns jetzt einen implementieren.

Fügen Sie dem {{htmlelement("span")}}-Element in Ihrem HTML ein `style`-Attribut hinzu, sodass es folgendermaßen aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern und aktualisieren, und Sie sollten sehen, dass nur der Text innerhalb des `<span>` lila und fett wird. Versuchen Sie, weitere Deklarationen in Ihrem `style`-Attribut hinzuzufügen (getrennt durch Semikolons) oder zusätzliche `style`-Attribute zu anderen Elementen hinzuzufügen.

Sobald Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wenn möglich.** Es ist eine schlechte Praxis. Erstens ist es die ineffizienteste Implementierung von CSS für die Wartung. Eine Styling-Änderung könnte mehrere Bearbeitungen innerhalb einer einzigen Webseite erfordern. Zweitens mischt Inline-CSS auch (CSS) Präsentationscode mit HTML und Inhalt, was alles schwieriger lesbar und verständlich macht. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Möglicherweise müssen Sie auf die Verwendung von Inline-Styles zurückgreifen, wenn Ihre Arbeitsumgebung sehr einschränkend ist. Zum Beispiel erlaubt Ihnen Ihr CMS möglicherweise nur, den HTML-Body zu bearbeiten. Möglicherweise sehen Sie auch viele Inline-Styles in HTML-E-Mails, um die Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen. Es ist auch ziemlich üblich, Inline-Styles zu setzen, wenn Sie dynamisch Stile mit JavaScript anwenden.

## Verwendung üblicher Selektoren

In diesem Abschnitt werden wir einen kurzen Überblick über einige der häufigeren Arten von Selektoren geben, auf die Sie stoßen werden.

### HTML-Elemente auswählen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits gezeigt, dass wir ein HTML-Element anvisieren und stylen können. Wir tun dies, indem wir einen **Elementselektor** (auch bekannt als **Type Selector**) verwenden — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument anzusprechen, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie verwenden:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig ansprechen, indem Sie die Selektoren mit einem Komma trennen. Wenn Sie möchten, dass alle Absätze und alle Listenelemente grün sind, würde Ihre Regel so aussehen:

```css
p,
li {
  color: green;
}
```

Versuchen Sie dies im Beispiel unten (klicken Sie "Play") oder in Ihrer lokalen Kopie:

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

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestylt. Dies funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Teilmenge der Elemente auszuwählen, ohne die anderen zu ändern, können Sie Ihrem HTML-Element eine `class` hinzufügen und diese Klasse in Ihrem CSS anvisieren.

1. Fügen Sie in Ihrem HTML-Dokument der zweiten Liste ein [class-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) hinzu. Ihre Liste sieht jetzt so aus:

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

Sie können jetzt die Klasse `special` auf andere Elemente auf Ihrer Seite anwenden, die das gleiche Aussehen haben sollen wie dieses Listenelement. Fügen Sie dem `<span>` im Absatz eine Klasse von `special` hinzu und laden Sie Ihre Seite neu: Es sollte jetzt auch orange und fett sein.

### Dinge basierend auf ihrer Position im Dokument stylen

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, je nachdem, wo es sich im Dokument befindet. Es gibt eine Anzahl von Selektoren, die Ihnen dabei helfen können, aber für den Moment werden wir nur ein paar betrachten. In unserem Dokument gibt es zwei `<em>`-Elemente — eines in einem Absatz und das andere in einem Listenelement. Um nur ein `<em>` auszuwählen, das in ein `<li>`-Element eingebettet ist, können Sie einen Selektor verwenden, der **descendant combinator** genannt wird, der die Form eines Leerzeichens zwischen zwei anderen Selektoren hat.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wählt jedes `<em>`-Element, das ein Nachkomme eines `<li>` ist. In Ihrem Beispieldokument sollten Sie feststellen, dass das `<em>` im dritten Listenelement jetzt lila ist, aber das im Absatz unverändert bleibt.

Etwas anderes, das Sie ausprobieren könnten, ist das Stylen eines Absatzes, wenn er direkt nach einer Überschrift auf derselben Hierarchieebene im HTML kommt. Um dies zu tun, platzieren Sie ein `+` (ein **next-sibling combinator**) zwischen den Selektoren.

Versuchen Sie, diese Regel ebenfalls zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das folgende Live-Beispiel enthält die beiden oben genannten Regeln. Versuchen Sie, eine Regel hinzuzufügen, um einen `span` rot zu machen, wenn er sich in einem Absatz befindet. Sie werden wissen, ob Sie es richtig haben, weil der `span` im ersten Absatz rot wird, aber der im ersten Listenelement ändert sich nicht.

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
> Wie Sie sehen, bietet CSS mehrere Möglichkeiten, Elemente anzuwählen, und wir haben bisher nur an der Oberfläche gekratzt! Wir werden uns später im Kurs eingehend mit all diesen Selektoren und vielen weiteren beschäftigen.

### Dinge basierend auf Zustand stylen

Die letzte Art von Stil, die wir in diesem Tutorial betrachten werden, ist die Fähigkeit, Dinge basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel hierfür ist das Stylen von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) (Anker) Element anvisieren. Dieses hat verschiedene Zustände, je nachdem, ob es unbesucht, besucht, überflogen, über die Tastatur fokussiert oder im Prozess des Klickens (aktiviert) ist. Sie können CSS verwenden, um diese verschiedenen Zustände zu adressieren — das untenstehende CSS stylt unbesuchte Links rosa und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer den Mauszeiger darüber bewegt, z. B. durch Entfernen der Unterstreichung, was mit der nächsten Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im folgenden Beispiel können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links experimentieren. Wir haben die obigen Regeln dort hinzugefügt, und jetzt feststellen, dass die rosa Farbe ziemlich hell und schwer lesbar ist — warum nicht in eine bessere Farbe ändern? Können Sie die Links fett machen?

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

Wir haben die Unterstreichung aus unserem Link beim Überfahren entfernt. Sie könnten die Unterstreichung von allen Zuständen eines Links entfernen. Es ist jedoch wichtig zu bedenken, dass Sie sicherstellen sollten, dass Besucher wissen, dass ein Link ein Link ist. Das Belassen der Unterstreichung kann ein wichtiger Hinweis für Menschen sein, zu erkennen, dass ein Text innerhalb eines Absatzes anklickbar ist — dies ist das Verhalten, an das sie gewöhnt sind. Wie bei allem in CSS besteht das Potenzial, das Dokument mit Ihren Änderungen weniger zugänglich zu machen — wir werden versuchen, mögliche Fallstricke an geeigneten Stellen hervorzuheben.

> [!NOTE]
> Sie werden häufig von [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) in diesen Lektionen und auf MDN hören. Wenn wir über Barrierefreiheit sprechen, beziehen wir uns auf das Erfordernis, dass unsere Webseiten für alle verständlich und benutzbar sein müssen, egal ob sie einen Computer mit Maus oder Trackpad, ein Telefon mit Touchscreen, nur mit der Tastatur navigieren oder einen Screenreader verwenden, der den Inhalt des Dokuments vorliest.

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

Sie können auch mehrere Typen kombinieren. Versuchen Sie, Folgendes in Ihren Code einzufügen:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit einer Klasse von `special` stylen, das innerhalb eines `<p>` ist, das direkt nach einem `<h1>` kommt. Puh! Dies sollte das `<span class="special">span element</span>`-Element in Ihrem Code ansprechen.

Keine Sorge, wenn dies im Moment kompliziert erscheint — Sie werden bald den Dreh rausbekommen, wenn Sie mehr CSS schreiben.

## Weitere CSS-Syntax-Features

Jetzt, da wir mit einigen CSS-Features gespielt haben, geben wir Ihnen einen Überblick über einige der anderen CSS-Syntax-Features, denen Sie im Verlauf des Kurses begegnen werden. Wenn Sie mehr Details zu einem dieser Features nachschlagen möchten, können Sie versuchen, den Namen des Features in das Suchfeld oben auf dieser Seite einzugeben oder im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) zu stöbern.

Um mit den Code-Snippets in jedem Fall zu experimentieren, könnten Sie das bereitgestellte HTML und CSS zu dem lokalen Beispiel oder der MDN Playground-Instanz, an der Sie oben gearbeitet haben, hinzufügen.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder Zahlenwerte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

#### Die calc()-Funktion

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

Dies wird als folgt gerendert:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte der Funktion einzuschließen. Im Fall des obigen `calc()`-Beispiels definieren die Werte die Breite dieses Kastens auf 90 % der Breite des umgebenden Blocks minus 30 Pixel.

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

Das Ergebnis des obigen Codes sieht so aus:

{{EmbedLiveSample('Transform_functions', '100%', 200)}}

Suchen Sie nach verschiedenen Werten der unten aufgeführten Eigenschaften. Versuchen Sie CSS-Regeln zu schreiben, die Styling auf verschiedene HTML-Elemente mit den folgenden Funktionen anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradient-Werte
- {{cssxref("color")}}, insbesondere rgb- und hsl-Werte

### @rules

CSS [@rules](/de/docs/Web/CSS/CSS_syntax/At-rule) (ausgesprochen "at-rules") geben Anweisungen, wie CSS sich verhalten soll. Eine häufige @rule, der Sie wahrscheinlich begegnen werden, ist `@media`, die verwendet wird, um [Media Queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media Queries verwenden bedingte Logik, um CSS-Styling anzuwenden.

Im folgenden Beispiel definiert das Stylesheet einen standardmäßigen rosa Hintergrund für das `<body>`-Element. Ein Media Query folgt jedoch, der einen blauen Hintergrund auf dem `<body>`-Element setzt, wenn das Browser-Viewport breiter als `30em` ist.

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

### Kurzschreibweise-Eigenschaften

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} und {{cssxref("margin")}} werden **Kurzschreibweise-Eigenschaften** genannt. Dies liegt daran, dass Kurzschreibweise-Eigenschaften mehrere Werte in einer einzigen Zeile festlegen.

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

Später im Kurs werden Sie auf viele andere Beispiele für Kurzschreibweise-Eigenschaften stoßen. Versuchen Sie vorerst, die obigen Deklarationen (oder andere, die Sie kennen) in Ihrem eigenen Code zu verwenden, um sich mit deren Funktionsweise vertraut zu machen.

### CSS-Kommentare

Wie bei jeder Codierung ist es bewährte Praxis, Kommentare in Ihr CSS zu schreiben. Dies hilft Ihnen, sich daran zu erinnern, wie der Code funktioniert, wenn Sie später zur Behebung oder Verbesserung darauf zurückkommen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im folgenden Beispiel markieren Kommentare den Beginn von unterschiedlichen Codeabschnitten. Dies hilft, die Codebasis zu navigieren, wenn sie größer wird. Mit solchen Kommentaren an Ort und Stelle, wird das Suchen nach Kommentaren in Ihrem Codeeditor zu einem Mittel, um effizient einen Abschnitt des Codes zu finden.

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

"Auskommentieren" von Code ist auch nützlich, um Abschnitte von Code vorübergehend zum Testen zu deaktivieren. Im folgenden Beispiel sind die Regeln für `.special` durch "Auskommentieren" des Codes deaktiviert.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Versuchen Sie, Kommentare zu Ihrem CSS hinzuzufügen.

### Leerzeichen in CSS

Leerzeichen bedeuten tatsächliche Leerzeichen, Tabs und neue Zeilen. Genau wie Browser zusätzliche Leerzeichen in HTML ignorieren, ignorieren Browser zusätzliche Leerzeichen innerhalb von CSS. Der Vorteil von Leerzeichen besteht darin, dass es Ihnen erleichtert, den Code zu lesen.

Im folgenden Beispiel hat jede Deklaration (sowie der Beginn/Ende der Regel) ihre eigene Zeile. Dies ist vermutlich eine gute Art, CSS zu schreiben. Es erleichtert die Wartung und das Verständnis von CSS.

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

Das nächste Beispiel zeigt das gleiche CSS in einem komprimierteren Format, bei dem alle zusätzlichen Leerzeichen entfernt wurden. Obwohl die beiden Beispiele gleich funktionieren, ist das untenstehende schwieriger zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(width>=70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Beachten Sie, dass einige Änderungen der Leerzeichen Fehler verursachen können. Eigenschaftsnamen enthalten niemals Leerzeichen, während Eigenschaftswerte, die Leerzeichen zwischen mehreren Werten erwarten, ungültig sind, wenn dieses Leerzeichen entfernt wird. Zum Beispiel sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Fehler bei den Abständen? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) hat kein Leerzeichen in sich.

Sie sollten immer darauf achten, unterschiedliche Werte durch mindestens ein Leerzeichen voneinander zu trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als einzelne ungebrochene Zeichenfolgen zusammen.

Um herauszufinden, wie die Abstände CSS beschädigen können, versuchen Sie, Abstände innerhalb Ihres Test-CSS zu ändern.

## Zusammenfassung

In diesem Artikel haben wir eine Reihe von Möglichkeiten betrachtet, wie Sie ein Dokument mit CSS stylen können. Wir werden dieses Wissen weiterentwickeln, wenn wir durch die restlichen Lektionen gehen. Sie wissen jedoch bereits genug, um Text zu stylen und CSS basierend auf verschiedenen Möglichkeiten, Elemente im Dokument zu adressieren, anzuwenden.

Als Nächstes geben wir Ihnen eine Herausforderung, um Ihr neu gewonnenes Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
