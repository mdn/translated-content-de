---
title: Erste Schritte mit CSS
short-title: Einführung in CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, um einige praktische Details der Sprache zu lernen. Wir werden auch die CSS-Syntaxfunktionen überprüfen, die Sie sich bisher noch nicht angesehen haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende installierte Software</a>, Grundkenntnisse im
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Anwendung von CSS auf ein HTML-Dokument.</li>
          <li>Praktische Erfahrung im Schreiben von grundlegendem CSS.</li>
          <li>Arbeitskenntnisse über grundlegende Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des Zustands, wie es auf CSS anwendbar ist.</li>
          <li>Vertrautheit mit anderen CSS-Syntaxfunktionen wie At-Regeln, Funktionen, Kurzform-Eigenschaften und Leerzeichen.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Beginn mit etwas HTML

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

Das wird so angezeigt:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen — klicken Sie auf die Schaltfläche "Play" im obigen Live-Beispiel, um es im MDN Playground zu öffnen. Dort können Sie den CSS- und HTML-Code gemäß den weiteren Anweisungen bearbeiten und die kombinierten Ergebnisse live sehen.

## Hinzufügen von CSS zu unserem Dokument

Das Allererste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Sie häufig antreffen werden — externe Stylesheets, interne Stylesheets und Inline-Styles. Schauen wir uns diese nun an.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Erweiterung `.css`. Dies ist die gebräuchlichste und nützlichste Methode, um CSS in ein Dokument einzubringen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen, um all diese mit demselben CSS-Stylesheet zu gestalten.

Erstellen Sie eine Datei im gleichen Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie die folgende Zeile irgendwo im {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element sagt dem Browser, dass wir ein Stylesheet mit dem Attribut `rel` haben und den Speicherort dieses Stylesheets als Wert des `href`-Attributs nutzen. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Verwenden Sie Ihren Code-Editor, um das Folgende zu Ihrer CSS-Datei hinzuzufügen (oder fügen Sie es im "CSS"-Feld im MDN Playground hinzu):

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift auf der obersten Ebene des Dokuments sollte jetzt rot sein. Wenn dies der Fall ist, herzlichen Glückwunsch — Sie haben erfolgreich etwas CSS auf ein HTML-Dokument angewendet. Wenn dies nicht der Fall ist, überprüfen Sie sorgfältig, ob Sie alles richtig eingegeben haben.

#### Lokalisierung von Stylesheets an verschiedenen Orten

Im obigen Beispiel befindet sich die CSS-Datei im selben Ordner wie das HTML-Dokument, aber Sie könnten sie auch woanders platzieren und den Pfad anpassen (so wie bei [HTML-Bildern](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets sind in {{htmlelement("style")}}-Elementen enthalten, die innerhalb des HTML-{{htmlelement("head")}}-Bereichs platziert werden. Lassen Sie uns jetzt eins erstellen.

Fügen Sie Ihrem HTML-Dokument das folgende Snippet irgendwo zwischen den `<head>`- und `</head>`-Tags hinzu:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern Sie es und aktualisieren Sie es, und Sie sollten sehen, dass alle Ihre Absätze violett werden.

Unter bestimmten Umständen können interne Stylesheets nützlich sein. Beispielsweise arbeiten Sie vielleicht mit einem Content-Management-System, bei dem Sie daran gehindert werden, externe CSS-Dateien zu bearbeiten.

Jedoch sind interne Stylesheets für Seiten mit mehr als einer Seite weniger effizient als externe Stylesheets. Um eine einheitliche CSS-Stilgebung auf mehrere Seiten mit internen Stylesheets anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Das Effizienzdefizit zieht sich auch durch die Seitenwartung. Mit CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Stiländerung Bearbeitungen an mehreren Webseiten erfordert.

Bevor Sie fortfahren, entfernen Sie das `<style>`-Element und dessen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Styles

Inline-Styles sind CSS-Deklarationen, die ein einzelnes HTML-Element beeinflussen und in einem `style`-Attribut enthalten sind. Lassen Sie uns jetzt eins implementieren.

Fügen Sie dem {{htmlelement("span")}}-Element in Ihrem HTML ein `style`-Attribut hinzu, sodass es folgendermaßen aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern Sie es und aktualisieren Sie die Seite, und Sie sollten sehen, dass nur der Text innerhalb des `<span>` violett und fett wird. Versuchen Sie, einige weitere Deklarationen innerhalb Ihres `style`-Attributs hinzuzufügen (durch Semikolons getrennt) oder einige zusätzliche `style`-Attribute zu anderen Elementen hinzuzufügen.

Sobald Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wenn möglich.** Es ist eine schlechte Praxis. Erstens ist es die am wenigsten effiziente Implementation von CSS für die Wartung. Eine Stiländerung könnte mehrere Bearbeitungen innerhalb einer einzigen Webseite erfordern. Zweitens vermischt Inline-CSS auch (CSS) Präsentationscode mit HTML und Inhalt, was alles schwerer lesbar und verständlicher macht. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Es kann sein, dass Sie gezwungen sind, Inline-Styles zu verwenden, wenn Ihre Arbeitsumgebung sehr restriktiv ist. Beispielsweise erlaubt Ihnen Ihr CMS möglicherweise nur das Bearbeiten des HTML-Körpers. Sie könnten auch viele Inline-Styles in HTML-E-Mails sehen, um die Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen. Es ist auch ziemlich üblich, Inline-Styles zu setzen, wenn dynamisch über JavaScript Styles angewendet werden.

## Verwenden von allgemeinen Selektoren

In diesem Abschnitt werden wir einen kurzen Rundgang durch einige der häufigsten Selektortypen machen, die Ihnen begegnen werden.

### HTML-Elemente auswählen

Durch das Rötlichfärben unserer Überschrift haben wir bereits gezeigt, dass wir ein HTML-Element gezielt ansprechen und gestalten können. Wir tun dies, indem wir einen **Elementselektor** (auch bekannt als **Typselektor**) verwenden — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument zu adressieren, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu färben, würden Sie dies verwenden:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig auswählen, indem Sie die Selektoren durch ein Komma trennen. Wenn Sie möchten, dass alle Absätze und alle Listenelemente grün sind, sieht Ihre Regel so aus:

```css
p,
li {
  color: green;
}
```

Probieren Sie dies in dem Beispiel unten aus (klicken Sie auf "Play") oder in Ihrer lokalen Kopie:

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

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestaltet. Dies funktioniert, solange Sie möchten, dass alle Elemente dieses Typs im Dokument gleich aussehen. Um eine Teilmenge der Elemente auszuwählen, ohne die anderen zu ändern, können Sie Ihrem HTML-Element eine `class` hinzufügen und diese Klasse in Ihrem CSS ansprechen.

1. Fügen Sie in Ihrem HTML-Dokument Ihrem zweiten Listenelement ein [class-Attribut](/de/docs/Web/HTML/Global_attributes/class) hinzu. Ihre Liste sieht nun so aus:

   ```html
   <ul>
     <li>Item one</li>
     <li class="special">Item two</li>
     <li>Item <em>three</em></li>
   </ul>
   ```

2. In Ihrem CSS können Sie die Klasse `special` ansprechen, indem Sie einen Selektor erstellen, der mit einem Punkt beginnt. Fügen Sie Ihrem CSS-Datei Folgendes hinzu:

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

3. Speichern Sie die Datei und aktualisieren Sie sie, um das Ergebnis zu sehen.

Sie können jetzt die Klasse `special` auf andere Elemente auf Ihrer Seite anwenden, die das gleiche Aussehen wie dieses Listenelement haben sollen. Fügen Sie der `<span>` im Absatz eine Klasse `special` hinzu und laden Sie Ihre Seite neu: Sie sollte jetzt ebenfalls orange und fett sein.

### Dinge basierend auf ihrer Position im Dokument stylen

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, je nachdem, wo es im Dokument ist. Es gibt eine Reihe von Selektoren, die Ihnen dabei helfen können, aber wir werden uns vorerst nur ein paar davon ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines in einem Absatz und das andere in einem Listenelement. Um nur ein `<em>` auszuwählen, das in einem `<li>`-Element verschachtelt ist, können Sie einen Selektor verwenden, der als **Nachkommkombinator** bezeichnet wird und in Form eines Leerzeichens zwischen zwei anderen Selektoren vorkommt.

Fügen Sie Ihrem Stylesheet die folgende Regel hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wählt jedes `<em>`-Element aus, das ein Nachkomme eines `<li>` ist. In Ihrem Beispieldokument sollte deshalb das `<em>` im dritten Listenelement jetzt violett sein, während das im Absatz unverändert bleibt.

Etwas anderes, das Sie möglicherweise ausprobieren möchten, ist das Styling eines Absatzes, wenn er direkt nach einer Überschrift gleichen Hierarchielevels im HTML kommt. Dazu platzieren Sie ein `+` (einen **nächster-Geschwister-Kombinator**) zwischen den Selektoren.

Versuchen Sie, diese Regel ebenfalls zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das Live-Beispiel unten enthält die beiden obigen Regeln. Versuchen Sie, eine Regel hinzuzufügen, um einen `span` rot zu machen, wenn er sich innerhalb eines Absatzes befindet. Sie werden wissen, ob Sie es richtig haben, weil der `span` im ersten Absatz rot sein wird, der im ersten Listenelement jedoch nicht die Farbe ändert.

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
> Wie Sie sehen, bietet uns CSS mehrere Möglichkeiten, um Elemente gezielt anzusprechen, und wir haben bisher nur an der Oberfläche gekratzt! Wir werden uns später im Kurs alle diese Selektoren und viele mehr genauer ansehen.

### Styling basierend auf Zustand

Die letzte Art von Styling, die wir uns in diesem Tutorial ansehen werden, ist die Fähigkeit, Dinge basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel dafür ist das Styling von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Element/a) (Anker-)Element gezielt ansprechen. Dieses hat verschiedene Zustände, je nachdem, ob es unbesucht, besucht, von der Maus überfahren, über die Tastatur fokussiert oder gerade angeklickt (aktiviert) wird. Sie können CSS verwenden, um diese verschiedenen Zustände anzusprechen — das folgende CSS stylt unbesuchte Links pink und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können ändern, wie der Link aussieht, wenn der Benutzer mit der Maus darüberfährt, indem Sie beispielsweise die Unterstreichung entfernen, was durch die nächste Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im folgenden Beispiel können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links spielen. Wir haben die obigen Regeln hinzugefügt und erkennen jetzt, dass die pinke Farbe ziemlich hell und schwer lesbar ist — warum nicht das zu einer besseren Farbe ändern? Können Sie die Links fett machen?

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

Wir haben die Unterstreichung auf unseren Link bei Hover entfernt. Sie könnten die Unterstreichung aus allen Zuständen eines Links entfernen. Es ist jedoch wichtig, sich daran zu erinnern, dass in einer echten Website Besucher wissen müssen, dass ein Link ein Link ist. Die Unterstreichung kann ein wichtiger Hinweis sein, damit die Leute erkennen, dass ein Text innerhalb eines Absatzes angeklickt werden kann — dieses Verhalten sind sie gewohnt. Wie bei allem in CSS besteht das Potenzial, das Dokument durch Ihre Änderungen weniger zugänglich zu machen — wir werden versuchen, potenzielle Fallstricke an geeigneten Stellen hervorzuheben.

> [!NOTE]
> Sie werden häufig auf den Begriff [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) in diesen Lektionen und auf MDN stoßen. Wenn wir über Barrierefreiheit sprechen, beziehen wir uns auf die Anforderung, unsere Webseiten für alle verständlich und nutzbar zu machen, unabhängig davon, ob sie einen Computer mit Maus oder Trackpad, ein Telefon mit Touchscreen verwenden, nur mit der Tastatur oder über einen Screenreader, der den Inhalt des Dokuments vorliest, navigieren.

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

Sie können auch mehrere Typen zusammen kombinieren. Versuchen Sie, das Folgende in Ihren Code aufzunehmen:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit einer Klasse `special` ansprechen, das in einem `<p>` enthalten ist, das direkt nach einem `<h1>` kommt. Puh! Dies sollte das `<span class="special">span element</span>` in Ihrem Code ansprechen.

Keine Sorge, wenn dies im Moment kompliziert erscheint — Sie werden es bald beherrschen, sobald Sie mehr CSS schreiben.

## Andere CSS-Syntaxfunktionen

Jetzt, da wir mit einigen CSS-Funktionen gespielt haben, geben wir Ihnen einen Überblick über einige andere CSS-Syntaxfunktionen, denen Sie im Verlauf des Kurses begegnen werden. Wenn Sie mehr Details zu einem dieser Themen nachschlagen möchten, können Sie versuchen, den Funktionsnamen in das Suchfeld oben auf dieser Seite einzugeben oder das MDN-[CSS-Referenz](/de/docs/Web/CSS/Reference) zu durchsuchen.

Um mit den Code-Snippets in jedem Fall zu experimentieren, könnten Sie das bereitgestellte HTML und CSS zu dem lokalen Beispiel oder der MDN Playground-Instanz hinzufügen, an der Sie oben gearbeitet haben.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

#### Die calc() Funktion

Ein Beispiel wäre die `calc()`-Funktion, die einfache Mathematik innerhalb von CSS durchführen kann:

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

Dies rendert als:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die für die Funktion angegebenen Werte einzuschließen. Im Fall des `calc()`-Beispiels oben definieren die Werte die Breite dieses Kastens auf 90% der Breite des umgebenden Blocks minus 30 Pixel.

#### Transform-Funktionen

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

Die Ausgabe des obigen Codes sieht folgendermaßen aus:

{{EmbedLiveSample('Transform_functions', '100%', 200)}}

Suchen Sie nach verschiedenen Werten von Eigenschaften, die unten aufgelistet sind. Versuchen Sie, CSS-Regeln zu schreiben, die verschiedene HTML-Elemente mit den folgenden Funktionen stylen:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradient-Werte
- {{cssxref("color")}}, insbesondere rgb- und hsl-Werte

### @rules

CSS [@rules](/de/docs/Web/CSS/CSS_syntax/At-rule) (gesprochen "at-rules") geben Anweisungen, wie sich CSS verhalten soll. Eine häufige @rule, die Ihnen wahrscheinlich begegnet, ist `@media`, die zum Erstellen von [Media-Queries](/de/docs/Web/CSS/CSS_media_queries) verwendet wird. Media-Queries verwenden bedingte Logik zur Anwendung von CSS-Styling.

Im folgenden Beispiel definiert das Stylesheet einen Standard-Hintergrund in Pink für das `<body>`-Element. Es folgt jedoch eine Media-Query, die einen blauen Hintergrund für das `<body>`-Element setzt, wenn das Browser-Viewport breiter als 30em ist.

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

Sie werden im Laufe des Kurses auf weitere `@rules` stoßen.

### Kurzform-Eigenschaften

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} und {{cssxref("margin")}} werden als **Kurzform-Eigenschaften** bezeichnet. Dies liegt daran, dass Kurzform-Eigenschaften mehrere Werte in einer einzigen Zeile setzen.

Zum Beispiel, diese eine Codezeile:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

ist äquivalent zu diesen vier Codezeilen:

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

ist äquivalent zu diesen fünf Zeilen:

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

Später im Kurs werden Sie auf viele weitere Beispiele von Kurzform-Eigenschaften stoßen. Versuchen Sie vorerst, die oben genannten Deklarationen (oder andere, die Sie kennen) in Ihrem eigenen Code zu verwenden, um sich mit deren Funktionsweise vertraut zu machen.

### CSS-Kommentare

Wie bei jeder Codearbeit ist es bewährte Praxis, Kommentare in Ihrem CSS zu schreiben. Dies hilft Ihnen, sich daran zu erinnern, wie der Code funktioniert, wenn Sie später zurückkommen, um Fehler zu beheben oder Verbesserungen vorzunehmen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im folgenden Beispiel markieren Kommentare den Start einzelner Codeabschnitte. Dies hilft beim Navigieren im Code, wenn dieser größer wird. Mit dieser Art von Kommentierung an Ort und Stelle wird die Suche nach Kommentaren im Code-Editor zu einer Möglichkeit, schnell einen Codeabschnitt zu finden.

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

Code "auskommentieren" ist auch nützlich, um Abschnittsweise Testcode vorübergehend zu deaktivieren. Im folgenden Beispiel sind die Regeln für `.special` deaktiviert, indem sie "auskommentiert" wurden.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Versuchen Sie, Kommentare in Ihr CSS einzufügen.

### Leerzeichen in CSS

Leerzeichen bedeuten tatsächliche Leerzeichen, Tabulatoren und Zeilenumbrüche. Genau wie Browser in HTML zusätzliche Leerzeichen ignorieren, ignorieren Browser auch zusätzliche Leerzeichen innerhalb von CSS. Der Vorteil von Leerzeichen ist, dass es das Lesen des Codes erleichtert.

Im Beispiel unten hat jede Deklaration (und Regelstart/-ende) ihre eigene Zeile. Dies ist arguably eine gute Möglichkeit, CSS zu schreiben. Es macht das CSS leichter wartbar und verständlich.

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

Das nächste Beispiel zeigt dasselbe CSS in einem kompakteren Format, mit allen zusätzlichen Leerzeichen entfernt. Obwohl sich die beiden Beispiele gleich verhalten, ist das untere schwieriger zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Bedenken Sie, dass das Entfernen einiger Leerzeichen zu Fehlern führen kann. Eigenschaftsnamen enthalten niemals Leerzeichen, während Eigenschaftswerte, die Leerzeichen zwischen mehreren Werten erwarten, ungültig werden, wenn dieses Leerzeichen entfernt wird. Zum Beispiel sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Abstandsfehler? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte darstellen: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) hat einen darin eingefügten Leerraum.

Sie sollten immer sicherstellen, dass sich unterscheidende Werte mindestens durch ein Leerzeichen voneinander getrennt sind. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als einzelne ungebrochene Zeichenketten zusammen.

Um herauszufinden, wie Abstände CSS brechen können, versuchen Sie, mit Abständen in Ihrem Test-CSS zu spielen.

## Zusammenfassung

In diesem Artikel haben wir uns eine Reihe von Möglichkeiten angesehen, wie Sie ein Dokument mit CSS gestalten können. Wir werden dieses Wissen weiterentwickeln, während wir durch den Rest der Lektionen gehen. Sie wissen jetzt jedoch bereits genug, um Text zu gestalten und CSS basierend auf verschiedenen Möglichkeiten anzuwenden, um Elemente im Dokument ansprechen.

Als nächstes stellen wir Ihnen eine Herausforderung, um Ihr neu erworbenes Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
