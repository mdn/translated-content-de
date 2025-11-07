---
title: Erste Schritte mit CSS
short-title: Erste Schritte mit CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel werden wir Ihnen zeigen, wie Sie ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei Sie einige praktische Details der Sprache lernen. Wir werden auch einige zusätzliche CSS-Syntax-Funktionen überprüfen, die Sie noch nicht angesehen haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, Grundkenntnisse im
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Anwendung von CSS auf ein HTML-Dokument.</li>
          <li>Praktische Erfahrung im Schreiben von grundlegendem CSS.</li>
          <li>Grundkenntnisse über grundlegende Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des Zustands, wie es auf CSS zutrifft.</li>
          <li>Vertrautheit mit anderen CSS-Syntax-Funktionen wie At-Regeln, Funktionen, Kurzform-Eigenschaften und Leerzeichen.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Beginn mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den Code von unten kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den Code unten als `index.html` in einem Ordner auf Ihrem Rechner.

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

Dies wird so gerendert:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht leicht Dateien erstellen können, machen Sie sich keine Sorgen – klicken Sie auf die Schaltfläche "Play" im obigen Live-Beispiel, um es im MDN Playground zu öffnen. Dort können Sie den CSS- und HTML-Code gemäß den weiteren Anweisungen bearbeiten und die kombinierten Ergebnisse live sehen.

## Hinzufügen von CSS zu unserem Dokument

Das allererste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Ihnen häufig begegnen werden – externe Stylesheets, interne Stylesheets und Inline-Styles. Schauen wir uns diese nun an.

Wenn Sie diesen Artikel mit dem MDN Playground durchgehen, können Sie die in diesem Abschnitt beschriebenen Schritte nicht auf die gleiche Weise befolgen wie Personen, die den Code auf ihren lokalen Computern schreiben. Dies liegt daran, dass MDN Playground das Hinzufügen von CSS zum HTML implizit im Hintergrund behandelt. Sie sollten jedoch dennoch den Abschnitt durchlesen, um sich des Inhalts bewusst zu sein.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Erweiterung `.css`. Dies ist die häufigste und nützlichste Methode, um CSS zu einem Dokument hinzuzufügen. Sie können eine einzige CSS-Datei mit mehreren Webseiten verknüpfen und alle mit demselben CSS-Stylesheet gestalten.

Erstellen Sie eine Datei im gleichen Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie die folgende Zeile irgendwo innerhalb des {{htmlelement("head")}} des HTML-Dokuments ein:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, indem es das `rel`-Attribut verwendet, und den Speicherort dieses Stylesheets als Wert des `href`-Attributs. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Verwenden Sie Ihren Code-Editor, um das folgende zu Ihrer CSS-Datei hinzuzufügen:

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift der ersten Ebene oben im Dokument sollte jetzt rot sein. Wenn dies der Fall ist, herzlichen Glückwunsch – Sie haben erfolgreich CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles korrekt eingegeben haben.

#### Platzieren von Stylesheets an verschiedenen Orten

Im obigen Beispiel befindet sich die CSS-Datei im gleichen Ordner wie das HTML-Dokument, aber Sie könnten sie auch woanders platzieren und den Pfad anpassen (auf die gleiche Weise wie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets sind in {{htmlelement("style")}}-Elementen enthalten, die innerhalb des HTML-{{htmlelement("head")}} platziert werden. Lassen Sie uns nun eines erstellen.

Fügen Sie in Ihrem HTML-Dokument das folgende Snippet irgendwo zwischen den `<head>`- und `</head>`-Tags ein:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern und aktualisieren Sie, und Sie sollten sehen, dass alle Ihre Absätze lila werden.

Unter bestimmten Umständen können interne Stylesheets nützlich sein. Beispielsweise arbeiten Sie vielleicht mit einem Content-Management-System, bei dem Sie am Ändern externer CSS-Dateien blockiert sind.

Für Websites mit mehr als einer Seite sind interne Stylesheets jedoch weniger effizient als externe Stylesheets. Um eine einheitliche CSS-Styling für mehrere Seiten mit internen Stylesheets anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Diese Effizienzstrafe überträgt sich auch auf die Wartung der Website. Mit CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Stiländerung mehrere Bearbeitungen an mehreren Webseiten erfordert.

Bevor Sie weitermachen, entfernen Sie das `<style>`-Element und seinen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Styles

Inline-Styles sind CSS-Deklarationen, die ein einzelnes HTML-Element beeinflussen und in einem `style`-Attribut enthalten sind. Versuchen wir jetzt, eines zu implementieren.

Fügen Sie dem {{htmlelement("span")}}-Element in Ihrem HTML ein `style`-Attribut hinzu, sodass es wie folgt aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern und aktualisieren Sie, und Sie sollten sehen, dass nur der Text innerhalb des `<span>` lila und fett wird. Versuchen Sie, einige weitere Deklarationen innerhalb Ihres `style`-Attributs (durch Semikolons getrennt) hinzuzufügen, oder einige zusätzliche `style`-Attribute zu anderen Elementen.

Sobald Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wenn möglich.** Es ist eine schlechte Praxis. Erstens ist es die ineffizienteste Implementierung von CSS für die Wartung. Eine Stiländerung kann mehrere Bearbeitungen innerhalb einer einzigen Webseite erfordern. Zweitens vermischt Inline-CSS auch (CSS) Präsentationscode mit HTML und Inhalt, was alles schwieriger zu lesen und zu verstehen macht. Das Trennen von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Vielleicht müssen Sie Inline-Styles verwenden, wenn Ihre Arbeitsumgebung sehr einschränkend ist. Beispielsweise erlaubt Ihnen Ihr CMS möglicherweise nur, den HTML-Body zu bearbeiten. Sie könnten auch viele Inline-Styles in HTML-E-Mails sehen, um die Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen. Außerdem ist es relativ üblich, Inline-Styles zu verwenden, wenn Stile dynamisch mit JavaScript angewendet werden.

## Nutzung gängiger Selektoren

In diesem Abschnitt werden wir einen kurzen Rundgang durch einige der häufigeren Selektortypen machen, denen Sie begegnen werden.

### HTML-Elemente auswählen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits demonstriert, dass wir ein HTML-Element anvisieren und gestalten können. Dies tun wir, indem wir einen **Element-Selektor** (auch bekannt als **Typ-Selektor**) anvisieren – dies ist ein Selektor, der direkt einem HTML-Elementnamen entspricht. Um alle Absätze im Dokument anzusprechen, würden Sie den Selektor `p` verwenden. Wenn Sie alle Absätze grün färben möchten, würden Sie Folgendes verwenden:

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

Versuchen Sie dies im folgenden Beispiel (klicken Sie auf "Play") oder in Ihrer lokalen Kopie:

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

Die folgende interaktive Lektion lehrt grundlegende CSS-Konzepte und bietet einige Übungen.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~015" scrimtitle="Schreiben Sie Ihre ersten Zeilen CSS!"></mdn-scrim-inline>

### Hinzufügen einer Klasse

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestaltet. Dies funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Teilmenge der Elemente auszuwählen, ohne die anderen zu ändern, können Sie Ihrem HTML-Element eine `class` hinzufügen und diese Klasse in Ihrem CSS anvisieren.

1. Fügen Sie Ihrem HTML-Dokument ein [class-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) zum zweiten Listenelement hinzu. Ihre Liste wird nun so aussehen:

   ```html
   <ul>
     <li>Item one</li>
     <li class="special">Item two</li>
     <li>Item <em>three</em></li>
   </ul>
   ```

2. In Ihrem CSS können Sie die Klasse `special` anvisieren, indem Sie einen Selektor erstellen, der mit einem Punkt beginnt. Fügen Sie das Folgende zu Ihrer CSS-Datei hinzu:

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

3. Speichern und aktualisieren Sie, um das Ergebnis zu sehen.

Sie können jetzt die Klasse `special` auf andere Elemente auf Ihrer Seite anwenden, die das gleiche Aussehen wie dieses Listenelement haben sollen. Fügen Sie eine Klasse von `special` zum `<span>` innerhalb des Absatzes hinzu, und laden Sie Ihre Seite neu: Es sollte jetzt auch orange und fett sein.

### Styling nach Position im Dokument

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, je nachdem, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen hier helfen können, aber im Moment werden wir uns nur ein paar ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente – eines innerhalb eines Absatzes und das andere innerhalb eines Listenelements. Um nur ein `<em>`, das in einem `<li>`-Element verschachtelt ist, auszuwählen, können Sie einen Selektor verwenden, der als **Nachfahr-Kombinator** bezeichnet wird und die Form eines Leerzeichens zwischen zwei anderen Selektoren annimmt.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wählt jedes `<em>`-Element aus, das ein Nachfahre eines `<li>` ist. In Ihrem Beispieldokument sollte das `<em>` im dritten Listenelement jetzt lila sein, aber das im Absatz bleibt unverändert.

Etwas anderes, das Sie ausprobieren könnten, ist, einen Absatz zu gestalten, wenn er direkt nach einer Überschrift auf derselben Hierarchieebene im HTML kommt. Um dies zu tun, platzieren Sie ein `+` (ein **Nest-Sibling-Kombinator**) zwischen den Selektoren.

Versuchen Sie, diese Regel auch zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das folgende Live-Beispiel enthält die beiden obigen Regeln. Versuchen Sie, eine Regel hinzuzufügen, um ein `span` rot zu machen, wenn es sich innerhalb eines Absatzes befindet. Sie wissen, dass Sie es richtig gemacht haben, weil das `span` im ersten Absatz rot wird, aber das im ersten Listenelement nicht die Farbe ändert.

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
> Wie Sie sehen, bietet uns CSS mehrere Möglichkeiten, Elemente anzusprechen, und wir haben bisher nur an der Oberfläche gekratzt! Wir werden alle diese Selektoren und viele mehr später im Kurs genauer ansehen.

### Styling basierend auf dem Zustand

Der letzte Styling-Typ, den wir in diesem Tutorial betrachten werden, ist die Möglichkeit, Dinge basierend auf ihrem Zustand zu gestalten. Ein einfaches Beispiel dafür ist das Styling von Links. Wenn wir einen Link gestalten, müssen wir das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element anvisieren. Dieses hat verschiedene Zustände, je nachdem, ob es unbesucht, besucht, überfahren, über die Tastatur fokussiert oder im Klickprozess (aktiviert) ist. Sie können CSS verwenden, um diese verschiedenen Zustände anzusprechen – der CSS-Code unten gestaltet unbesuchte Links pink und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer mit der Maus darüberfährt, beispielsweise indem die Unterstreichung entfernt wird, was mit der nächsten Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im folgenden Beispiel können Sie mit verschiedenen Werten für die verschiedenen Zuständen eines Links experimentieren. Wir haben die obigen Regeln hinzugefügt und stellen jetzt fest, dass die pinke Farbe ziemlich hell und schwer zu lesen ist — warum ändern Sie das nicht in eine bessere Farbe? Können Sie die Links fett machen?

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

Wir haben die Unterstreichung unseres Links beim Hover entfernt. Sie könnten die Unterstreichung für alle Zustände eines Links entfernen. Es ist jedoch wichtig zu bedenken, dass Sie in einer echten Website sicherstellen möchten, dass Besucher wissen, dass ein Link ein Link ist. Das Belassen der Unterstreichung kann ein wichtiger Hinweis für Menschen sein, zu realisieren, dass ein Text innerhalb eines Absatzes anklickbar ist – das ist das Verhalten, an das sie gewöhnt sind. Wie bei allem in CSS besteht das Potenzial, das Dokument mit Ihren Änderungen weniger zugänglich zu machen – wir werden versuchen, potenzielle Fallstricke an geeigneten Stellen hervorzuheben.

> [!NOTE]
> Sie werden in diesen Lektionen und auf der gesamten MDN häufig auf den Begriff [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) stoßen. Wenn wir über Barrierefreiheit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten für jeden verständlich und nutzbar sein müssen, unabhängig davon, ob sie einen Computer mit Maus oder Trackpad, ein Touchscreen-Telefon, nur über die Tastatur navigieren oder einen Bildschirmleser verwenden, der den Inhalt des Dokuments vorliest.

### Kombinieren von Selektoren und Kombinatoren

Es ist wichtig zu beachten, dass Sie mehrere Selektoren und Kombinatoren zusammen kombinieren können. Zum Beispiel:

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}
```

Sie können auch mehrere Typen kombinieren. Versuchen Sie, das Folgende in Ihren Code einzufügen:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit einer Klasse von `special` stylen, das sich innerhalb eines `<p>` befindet, das direkt nach einem `<h1>` kommt. Puh! Dies sollte das `<span class="special">span element</span>`-Element in Ihrem Code anvisieren.

Keine Sorge, wenn dies im Moment kompliziert erscheint – Sie werden den Dreh schnell rausbekommen, während Sie mehr CSS schreiben.

## Andere CSS-Syntax-Funktionen

Nachdem wir nun mit einigen CSS-Funktionen gespielt haben, geben wir Ihnen einen Überblick über einige der anderen CSS-Syntax-Funktionen, denen Sie während des Kurses begegnen werden. Wenn Sie mehr Details zu einem dieser Themen nachschlagen möchten, können Sie versuchen, den Funktionsnamen in das Suchfeld oben auf dieser Seite einzugeben oder das MDN- [CSS-Referenz](/de/docs/Web/CSS/Reference) zu durchsuchen.

Um mit den Code-Snippets in jedem Fall zu experimentieren, könnten Sie das bereitgestellte HTML und CSS zu dem lokalen Beispiel oder der MDN Playground-Instanz hinzufügen, an der Sie oben gearbeitet haben.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

#### Die `calc()`-Funktion

Ein Beispiel ist die `calc()`-Funktion, die einfache Mathematik innerhalb von CSS durchführen kann:

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

Dies wird gerendert als:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im Beispiel der `calc()`-Funktion oben definieren die Werte die Breite dieser Box auf 90 % der Breite des umgebenden Blocks minus 30 Pixel.

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

Suchen Sie nach verschiedenen Werten der unten aufgeführten Eigenschaften. Versuchen Sie, CSS-Regeln zu schreiben, die Styling auf verschiedenen HTML-Elementen mit den folgenden Funktionen anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradient-Werte
- {{cssxref("color")}}, insbesondere rgb- und hsl-Werte

### @rules

CSS [@rules](/de/docs/Web/CSS/Guides/Syntax/At-rules) (ausgesprochen "at-rules") geben Anweisungen, wie CSS funktionieren soll. Eine häufig auftretende @rule, die Sie wahrscheinlich antreffen werden, ist `@media`, die zum Erstellen von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) verwendet wird. Media Queries verwenden bedingte Logik zum Anwenden von CSS-Styling.

Im folgenden Beispiel definiert das Stylesheet einen standardmäßigen rosa Hintergrund für das `<body>`-Element. Ein Media Query folgt, das einen blauen Hintergrund auf das `<body>`-Element setzt, wenn das Browserfenster breiter als `30em` ist.

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

### Kurzform-Eigenschaften

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, und {{cssxref("margin")}} werden als **Kurzform-Eigenschaften** bezeichnet. Dies liegt daran, dass Kurzform-Eigenschaften mehrere Werte in einer einzigen Zeile setzen.

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

Später im Kurs werden Ihnen viele weitere Beispiele für Kurzform-Eigenschaften begegnen. Für den Moment versuchen Sie, die obigen Deklarationen (oder andere, die Sie möglicherweise kennen) in Ihrem eigenen Code zu verwenden, um mit ihrer Funktionsweise vertrauter zu werden.

### CSS-Kommentare

Wie bei jeder Programmierarbeit ist es am besten, Kommentare in Ihrem CSS zu schreiben. Dies hilft Ihnen, sich daran zu erinnern, wie der Code funktioniert, wenn Sie später Fixes oder Verbesserungen vornehmen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im Beispiel unten markieren Kommentare den Anfang von unterschiedlichen Codeabschnitten. Dies hilft, den Code zu navigieren, wenn er größer wird. Mit dieser Art von Kommentierungen wird das Suchen nach Kommentaren in Ihrem Code-Editor zu einer Möglichkeit, effizient einen Codeabschnitt zu finden.

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

Das "Auskommentieren" von Code ist auch nützlich, um vorübergehend Codeabschnitte zum Testen zu deaktivieren. Im unten stehenden Beispiel sind die Regeln für `.special` durch "Auskommentieren" des Codes deaktiviert.

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

Leerzeichen beziehen sich auf tatsächliche Leerzeichen, Tabulatoren und neue Zeilen. Genau wie Browser überzählige Leerzeichen in HTML ignorieren, ignorieren Browser überzählige Leerzeichen innerhalb von CSS. Der Vorteil von Leerzeichen besteht darin, dass es Ihnen das Lesen des Codes erleichtert.

Im untenstehenden Beispiel hat jede Deklaration (und der Beginn/das Ende der Regel) ihre eigene Linie. Dies ist wohl ein guter Weg, CSS zu schreiben. Es macht CSS einfacher zu warten und zu verstehen.

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

Das nächste Beispiel zeigt das gleiche CSS in einem kompakteren Format, bei dem alle überzähligen Leerzeichen entfernt wurden. Obwohl die beiden Beispiele gleich funktionieren, ist das unten stehende schwieriger zu lesen.

```css-nolint
body{font:1em/150% "Helvetica","Arial",sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(width>=70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Bedenken Sie, dass einige Leerzeichenänderungen Fehler verursachen können. Eigenschaftsnamen enthalten niemals Leerzeichen, während Eigenschaftswerte, die Leerzeichen zwischen mehreren Werten erwarten, ungültig werden, wenn dieses Leerzeichen entfernt wird. Beispielsweise sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Abstandsfehler? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) hat keinen Leerraum darin.

Sie sollten immer sicherstellen, dass Sie getrennte Werte durch mindestens ein Leerzeichen voneinander trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als einheitliche, ununterbrochene Zeichenfolgen zusammen.

Um herauszufinden, wie Leerzeichen CSS brechen können, versuchen Sie, mit dem Leerraum innerhalb Ihres Test-CSS zu spielen.

## Zusammenfassung

In diesem Artikel haben wir uns eine Reihe von Möglichkeiten angesehen, wie Sie ein Dokument mit CSS gestalten können. Wir werden dieses Wissen weiterentwickeln, während wir die restlichen Lektionen durchlaufen. Sie wissen nun jedoch bereits genug, um Text zu gestalten und CSS basierend auf verschiedenen Möglichkeiten des Anvisierens von Elementen im Dokument anzuwenden.

Als Nächstes geben wir Ihnen eine Herausforderung, um Ihr neu gewonnenes Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
