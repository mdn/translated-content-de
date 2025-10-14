---
title: Einstieg in CSS
short-title: CSS getting started
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: 231152e9a749aaeba8de45f4cc712845a470dda9
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel werden wir Sie dazu bringen, ein einfaches HTML-Dokument zu nehmen und CSS darauf anzuwenden. Dabei lernen Sie einige praktische Details der Sprache kennen. Wir werden auch einige zusätzliche CSS-Syntaxmerkmale durchgehen, die Sie noch nicht betrachtet haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, Grundkenntnisse
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">im Umgang mit Dateien</a> und HTML-Grundlagen (lernen Sie die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>CSS auf ein HTML-Dokument anwenden.</li>
          <li>Praktische Erfahrung im Schreiben von grundlegenden CSS.</li>
          <li>Arbeitserfahrung mit grundlegenden Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des Zustands in Bezug auf CSS.</li>
          <li>Vertrautheit mit anderen CSS-Syntaxmerkmalen wie At-Rules, Funktionen, Kurzschreibweisen und Leerzeichen.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Start mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den unten stehenden Code kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den Code unten als `index.html` in einem Ordner auf Ihrem Rechner.

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen — klicken Sie im obigen Live-Beispiel auf die Schaltfläche "Play", um es im MDN Playground zu öffnen. Dort können Sie den CSS- und HTML-Code wie weiter unten angegeben bearbeiten und die kombinierten Ergebnisse live sehen.

## CSS zu unserem Dokument hinzufügen

Das allererste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die wir verwenden möchten. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Sie häufig antreffen werden — externe Stylesheets, interne Stylesheets und inline Styles. Schauen wir uns diese jetzt an.

Wenn Sie diesen Artikel mithilfe des MDN Playground durcharbeiten, können Sie die in diesem Abschnitt beschriebenen Schritte nicht auf die gleiche Weise ausführen, wie es Personen tun, die den Code auf ihren lokalen Computern schreiben. Dies liegt daran, dass der MDN Playground das Hinzufügen von CSS zum HTML im Hintergrund implizit handhabt. Sie sollten den Abschnitt jedoch trotzdem durchlesen, um mit dem Inhalt vertraut zu sein.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Erweiterung `.css`. Dies ist die häufigste und nützlichste Methode, um CSS in ein Dokument einzufügen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verlinken und alle mit dem gleichen CSS-Stylesheet gestalten.

Erstellen Sie eine Datei im gleichen Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verbinden, fügen Sie die folgende Zeile irgendwo im {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, indem es das `rel`-Attribut verwendet, und der Speicherort dieses Stylesheet ist der Wert des `href`-Attributs. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Verwenden Sie Ihren Code-Editor, um Folgendes in Ihre CSS-Datei hinzuzufügen:

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift der ersten Ebene oben im Dokument sollte nun rot sein. Wenn das passiert, herzlichen Glückwunsch — Sie haben erfolgreich CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles korrekt eingegeben haben.

#### Stylesheets an verschiedenen Orten platzieren

Im obigen Beispiel befindet sich die CSS-Datei im gleichen Ordner wie das HTML-Dokument, aber Sie können sie auch woanders platzieren und den Pfad entsprechend anpassen (in ähnlicher Weise wie bei [HTML-Bildern](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets sind in {{htmlelement("style")}}-Elementen enthalten, die innerhalb des HTML-{{htmlelement("head")}} platziert werden. Lassen Sie uns jetzt eines erstellen.

Fügen Sie in Ihrem HTML-Dokument den folgenden Schnipsel irgendwo zwischen die `<head>` und `</head>`-Tags ein:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern und aktualisieren Sie, und Sie sollten sehen, dass alle Ihre Absätze lila werden.

In einigen Fällen können interne Stylesheets nützlich sein. Zum Beispiel, wenn Sie möglicherweise mit einem Content-Management-System arbeiten, in dem Sie daran gehindert werden, externe CSS-Dateien zu ändern.

Für Websites mit mehr als einer Seite sind interne Stylesheets jedoch weniger effizient als externe Stylesheets. Um einheitliches CSS-Design auf mehrere Seiten mit internen Stylesheets anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Die Effizienzeinbuße überträgt sich auch auf die Wartung der Website. Mit CSS in internen Stylesheets besteht die Gefahr, dass bereits eine einfache Stiländerung Bearbeitungen an mehreren Webseiten erfordert.

Bevor Sie fortfahren, entfernen Sie das `<style>`-Element und dessen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die sich auf ein einzelnes HTML-Element auswirken und in einem `style`-Attribut enthalten sind. Lassen Sie uns jetzt eine implementieren.

Fügen Sie dem {{htmlelement("span")}}-Element in Ihrem HTML ein `style`-Attribut hinzu, sodass es wie folgt aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern und aktualisieren, und Sie sollten sehen, dass nur der Text im `<span>` lila und fett wird. Versuchen Sie, noch mehr Deklarationen in Ihr `style`-Attribut hinzuzufügen (getrennt durch Semikolons) oder zusätzliche `style`-Attribute zu anderen Elementen hinzuzufügen.

Nachdem Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie es nach Möglichkeit, CSS auf diese Weise zu verwenden.** Es ist eine schlechte Praxis. Erstens ist es die am wenigsten effiziente Implementierung von CSS für die Wartung. Eine Stiländerung könnte mehrere Änderungen innerhalb einer einzelnen Webseite erfordern. Zweitens mischt Inline-CSS auch (CSS) Präsentationscode mit HTML und Inhalt, was es schwieriger macht, alles zu lesen und zu verstehen. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Sie müssen möglicherweise auf Inline-Stile zurückgreifen, wenn Ihre Arbeitsumgebung sehr einschränkend ist. Beispielsweise erlaubt Ihnen Ihr CMS möglicherweise nur das Bearbeiten des HTML-Bodys. Sie könnten auch eine Menge Inline-Stile in HTML-E-Mails sehen, um die Kompatibilität mit so vielen E-Mail-Clients wie möglich zu erreichen. Es ist auch ziemlich verbreitet, Inline-Stile festzulegen, wenn Styles dynamisch mit JavaScript angewendet werden.

## Verwendung gängiger Selektoren

In diesem Abschnitt machen wir eine kurze Tour durch einige der häufigeren Selektortypen, denen Sie begegnen werden.

### HTML-Elemente auswählen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits gezeigt, dass wir ein HTML-Element anvisieren und gestalten können. Wir tun dies, indem wir einen **Elementselektor** (auch bekannt als **Typselektor**) anvisieren — dies ist ein Selektor, der direkt einem HTML-Elementnamen entspricht. Um alle Absätze im Dokument anzusprechen, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu färben, verwenden Sie:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig anvisieren, indem Sie die Selektoren durch ein Komma trennen. Wenn Sie möchten, dass alle Absätze und alle Listenelemente grün sind, würde Ihre Regel so aussehen:

```css
p,
li {
  color: green;
}
```

Probieren Sie dies im folgenden Beispiel aus (klicken Sie auf "Play") oder in Ihrer lokalen Kopie:

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

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestaltet. Das funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Untermenge der Elemente zu wählen, ohne die anderen zu ändern, können Sie Ihrem HTML-Element eine `class` hinzufügen und diese Klasse in Ihrem CSS anvisieren.

1. Fügen Sie in Ihrem HTML-Dokument dem zweiten Listenelement ein [class-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) hinzu. Ihre Liste sieht jetzt so aus:

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

3. Speichern und aktualisieren, um das Ergebnis zu sehen.

Sie können nun die Klasse `special` auf andere Elemente auf Ihrer Seite anwenden, die das gleiche Aussehen wie dieses Listenelement haben sollen. Fügen Sie dem `<span>` im Absatz eine Klasse `special` hinzu und laden Sie dann Ihre Seite neu: Es sollte nun ebenfalls orange und fett sein.

### Stil basierend auf ihrem Standort im Dokument

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, basierend darauf, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen hier helfen können, aber vorerst werden wir uns nur ein paar ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines innerhalb eines Absatzes und das andere innerhalb eines Listenelements. Um nur ein `<em>` zu wählen, das in einem `<li>`-Element verschachtelt ist, можете использовать селектор bajo Najera — это einfach по на форме на espacio entre dos otros Selektoren.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wird jedes `<em>` auswählen, das ein Nachkomme eines `<li>` ist. Im Beispieldokument sollte das `<em>` im dritten Listenelement jetzt lila sein, während das im Absatz unverändert bleibt.

Etwas anderes, das Sie ausprobieren könnten, ist das Gestalten eines Absatzes, wenn er direkt nach einer Überschrift auf der gleichen Hierarchieebene im HTML kommt. Um dies zu tun, platzieren Sie ein `+` (ein **Nachbarselektor**) zwischen den Selektoren.

Versuchen Sie auch, diese Regel zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das Live-Beispiel unten enthält die beiden oben genannten Regeln. Versuchen Sie, eine Regel hinzuzufügen, um ein `<span>` rot zu machen, wenn es sich in einem Absatz befindet. Sie werden wissen, ob Sie es richtig gemacht haben, da das `<span>` im ersten Absatz rot wird, das in dem ersten Listenelement jedoch nicht seine Farbe ändert.

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
> Wie Sie sehen können, bietet uns CSS mehrere Möglichkeiten, Elemente anzusprechen, und wir haben bisher nur an der Oberfläche gekratzt! Wir werden später im Kurs einen genaueren Blick auf all diese Selektoren und viele mehr werfen.

### Stil basierend auf dem Zustand

Der letzte Stiltyp, den wir uns in diesem Tutorial ansehen werden, ist die Fähigkeit, Dinge basierend auf ihrem Zustand zu gestalten. Ein einfaches Beispiel dafür ist das Styling von Links. Wenn wir einen Link gestalten, müssen wir das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) (Anker-)Element anvisieren. Dieses hat unterschiedliche Zustände je nachdem, ob es unbesucht, besucht, mit der Maus überfahren, über die Tastatur fokussiert oder gerade geklickt (aktiviert) wird. Sie können CSS verwenden, um diese unterschiedlichen Zustände anzusprechen — das CSS unten gestaltet unbesuchte Links rosa und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können die Art und Weise ändern, wie der Link aussieht, wenn der Benutzer darüberfährt, indem Sie beispielsweise das Unterstreichen entfernen, das mit der nächsten Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

In dem folgenden Beispiel können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links spielen. Wir haben die oben genannten Regeln hinzugefügt und merken jetzt, dass die rosa Farbe ziemlich hell und schwer zu lesen ist — warum nicht in eine bessere Farbe ändern? Können Sie die Links fett machen?

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

Wir haben das Unterstreichen unserer Links beim Überfahren entfernt. Sie könnten das Unterstreichen aus allen Zuständen eines Links entfernen. Es ist jedoch wichtig, sich daran zu erinnern, dass Sie auf einer echten Website sicherstellen möchten, dass Besucher wissen, dass ein Link ein Link ist. Das Unterstreichen kann ein wichtiges Zeichen dafür sein, dass einige Texte in einem Absatz angeklickt werden können — das ist das Verhalten, an das Benutzer gewöhnt sind. Wie bei allem in CSS besteht das Potenzial, dass durch Änderungen das Dokument weniger zugänglich wird — wir werden versuchen, mögliche Fallstricke an passenden Stellen zu markieren.

> [!NOTE]
> In diesen Unterrichtseinheiten und auf dem gesamten MDN werden Sie oft auf die Erwähnung von [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) stoßen. Wenn wir über Barrierefreiheit sprechen, meinen wir die Anforderung, dass unsere Webseiten für alle menschen verständlich und nutzbar sind, unabhängig davon, ob sie einen Computer mit Maus oder Trackpad verwenden, ein Telefon mit Touchscreen, nur eine Tastatur verwenden oder über einen Bildschirmleser navigieren, der den Inhalt des Dokuments vorliest.

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

Sie können auch mehrere Arten kombinieren. Versuchen Sie, Folgendes in Ihren Code einzufügen:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Hiermit wird jedes Element mit einer Klasse von `special` gestylt, das sich in einem `<p>` befindet, das direkt nach einem `<h1>` kommt. Puh! Dies sollte das `<span class="special">span element</span>`-Element in Ihrem Code anvisieren.

Keine Sorge, wenn das im Moment kompliziert erscheint — Sie werden sich daran gewöhnen, sobald Sie mehr CSS schreiben.

## Andere CSS-Syntaxmerkmale

Nachdem wir mit einigen CSS-Funktionen gespielt haben, geben wir Ihnen einen Überblick über einige der anderen CSS-Syntaxmerkmale, die Ihnen im Kurs begegnen werden. Wenn Sie mehr Details zu einem dieser Themen herausfinden möchten, können Sie versuchen, den Feature-Namen in das Suchfeld oben auf dieser Seite einzugeben oder die MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) zu durchsuchen.

Um mit den Codeschnipseln in jedem Fall zu experimentieren, können Sie das bereitgestellte HTML und CSS dem lokalen Beispiel oder dem MDN Playground-Instance hinzufügen, an dem Sie oben gearbeitet haben.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die in Form einer Funktion vorliegen.

#### Die Funktion calc()

Ein Beispiel wäre die Funktion `calc()`, die einfache Berechnungen innerhalb von CSS durchführen kann:

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

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im Fall des obigen `calc()`-Beispiels definieren die Werte die Breite dieser Box als 90 % der Breite des enthaltenen Blocks minus 30 Pixel.

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

Die Ausgabe aus dem obigen Code sieht so aus:

{{EmbedLiveSample('Transform_functions', '100%', 200)}}

Schauen Sie sich unterschiedliche Werte der unten aufgeführten Eigenschaften an. Versuchen Sie, CSS-Regeln zu schreiben, die Styling auf verschiedene HTML-Elemente unter Verwendung der folgenden Funktionen anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradient-Werte
- {{cssxref("color")}}, insbesondere RGB und HSL-Werte

### @rules

CSS [@rules](/de/docs/Web/CSS/CSS_syntax/At-rule) (ausgesprochen “at-rules”) bieten Anweisungen dazu, wie CSS sich verhalten sollte. Eine häufige @rule, die Ihnen wahrscheinlich begegnet, ist `@media`, die verwendet wird, um [Media Queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media Queries verwenden bedingte Logik zum Anwenden von CSS-Styling.

Im folgenden Beispiel definiert das Stylesheet standardmäßig einen rosa Hintergrund für das `<body>`-Element. Eine anschließende Media Query legt jedoch einen blauen Hintergrund für das `<body>`-Element fest, wenn das Browserfenster breiter als `30em` ist.

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

### Kurzschreibweise

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, und {{cssxref("margin")}} werden als **Kurzschreibweise** bezeichnet. Dies liegt daran, dass Kurzschreibweise mehrere Werte in einer einzigen Zeile setzen.

Zum Beispiel ist diese eine Zeile Code:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

gleichwertig mit diesen vier Zeilen Code:

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

ist gleichwertig mit diesen fünf Zeilen:

```css
background-color: red;
background-image: url("bg-graphic.png");
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

Später im Kurs werden Ihnen viele weitere Beispiele für Kurzschreibweisen begegnen. Verwenden Sie fürs Erste die obigen Deklarationen (oder andere, die Ihnen bekannt sind) in Ihrem eigenen Code, um sich mit ihrer Funktionsweise vertraut zu machen.

### CSS-Kommentare

Wie bei jeder Programmierarbeit ist es Best Practice, Kommentare in Ihr CSS zu schreiben. Dies hilft Ihnen, sich daran zu erinnern, wie der Code funktioniert, wenn Sie später darauf zurückkommen, um Korrekturen oder Verbesserungen vorzunehmen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im folgenden Beispiel markieren Kommentare den Beginn von unterschiedlichen Codeabschnitten. Auf diese Weise wird das Navigieren im Basiscode erleichtert, wenn dieser größer wird. Mit dieser Art der Kommentierung wird das Suchen nach Kommentaren in Ihrem Code-Editor zu einer Möglichkeit, effizient einen Teil des Codes zu finden.

```css
/* Handle basic element styling */
/* ---------------------------- */
body {
  font:
    1em/150% "Helvetica",
    "Arial",
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

“Code auskommentieren” ist auch nützlich, um vorübergehend Abschnitte des Codes für Tests zu deaktivieren. Im folgenden Beispiel sind die Regeln für `.special` durch “auskommentieren” des Codes deaktiviert.

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

Leerzeichen bedeuten tatsächliche Leerzeichen, Tabs und neue Zeilen. Ebenso wie Browser zusätzliche Leerzeichen in HTML ignorieren, ignorieren Browser zusätzliche Leerzeichen innerhalb von CSS. Der Vorteil von Leerzeichen ist, dass es das Lesen des Codes erleichtert.

Im folgenden Beispiel hat jede Deklaration (und der Start/Ende der Regel) ihre eigene Zeile. Dies ist wahrscheinlich eine gute Methode, CSS zu schreiben. Es macht es einfacher, CSS zu pflegen und zu verstehen.

```css
body {
  font:
    1em/150% "Helvetica",
    "Arial",
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

Das nächste Beispiel zeigt das gleiche CSS in einem kompakteren Format, bei dem alle zusätzlichen Leerzeichen entfernt wurden. Obwohl die beiden Beispiele gleich funktionieren, ist das unten gezeigte schwieriger zu lesen.

```css-nolint
body{font:1em/150% "Helvetica","Arial",sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(width>=70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Bedenken Sie, dass einige Änderungen von Leerzeichen Fehler verursachen können. Eigenschaftsnamen enthalten nie Leerzeichen, während Eigenschaftswerte, die Leerzeichen zwischen mehreren Werten erwarten, ungültig werden, wenn dieses Leerzeichen entfernt wird. Beispielsweise sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Fehler in den Abständen? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` sollte in zwei separate Werte aufgeteilt sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Name der Eigenschaft (`padding-left`) hat kein Leerzeichen darin.

Sie sollten immer sicherstellen, dass Sie unterschiedliche Werte mindestens durch ein Leerzeichen voneinander trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als einzelne, ungebrochene Zeichenfolgen zusammen.

Um herauszufinden, wie Leerzeichen CSS brechen können, versuchen Sie, in Ihrem Test-CSS mit Leerzeichen zu spielen.

## Zusammenfassung

In diesem Artikel haben wir uns eine Reihe von Möglichkeiten angesehen, wie Sie ein Dokument mit CSS gestalten können. Wir werden dieses Wissen weiterentwickeln, wenn wir die restlichen Lektionen durchgehen. Sie wissen jedoch jetzt bereits genug, um Text zu stylen und CSS basierend auf verschiedenen Möglichkeiten anzuwenden, Elemente im Dokument anzusprechen.

Als Nächstes geben wir Ihnen eine Herausforderung, um Ihr neues Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
