---
title: Einstieg in CSS
short-title: Einführung in CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, um einige praktische Details der Sprache kennenzulernen. Wir werden auch die CSS-Syntax-Features überprüfen, die Sie noch nicht behandelt haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, grundlegende Kenntnisse im
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Anwenden von CSS auf ein HTML-Dokument.</li>
          <li>Praktische Erfahrung im Schreiben von einfachem CSS.</li>
          <li>Arbeitskenntnisse grundlegender Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des Zustands, wie es auf CSS angewandt wird.</li>
          <li>Vertrautheit mit anderen CSS-Syntax-Features wie At-Regeln, Funktionen, Kurzschreibweisen und Leerzeichen.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Start mit etwas HTML

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen — klicken Sie auf den "Play"-Button im obigen Live-Beispiel, um es im MDN Playground zu öffnen. Dort können Sie den CSS- und HTML-Code wie weiter unten beschrieben bearbeiten und die kombinierten Ergebnisse live sehen.

## CSS zu unserem Dokument hinzufügen

Das allererste, was wir tun müssen, ist, dem HTML-Dokument mitzuteilen, dass wir CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Sie häufig antreffen werden — externe Stylesheets, interne Stylesheets und Inline-Stile. Schauen wir uns diese jetzt an.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Endung `.css`. Dies ist die gängigste und nützlichste Methode, um CSS in ein Dokument einzubringen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen und alle mit demselben CSS-Stylesheet gestalten.

Erstellen Sie eine Datei im selben Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie die folgende Zeile irgendwo innerhalb des {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, wobei das Attribut `rel` verwendet wird, und den Speicherort dieses Stylesheets als Wert des `href`-Attributs. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Fügen Sie mit Ihrem Code-Editor das Folgende zu Ihrer CSS-Datei hinzu (oder fügen Sie es im MDN Playground in das "CSS"-Feld ein):

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift der ersten Ebene am oberen Rand des Dokuments sollte jetzt rot sein. Wenn das passiert, herzlichen Glückwunsch — Sie haben erfolgreich etwas CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles richtig eingegeben haben.

#### Stylesheets an verschiedenen Orten platzieren

Im obigen Beispiel befindet sich die CSS-Datei im selben Ordner wie das HTML-Dokument. Sie könnten sie jedoch woanders platzieren und den Pfad so anpassen (auf die gleiche Weise wie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets sind innerhalb von {{htmlelement("style")}}-Elementen enthalten, die innerhalb des HTML {{htmlelement("head")}} platziert werden. Lassen Sie uns jetzt eines erstellen.

Fügen Sie in Ihrem HTML-Dokument den folgenden Ausschnitt irgendwo zwischen den `<head>` und `</head>`-Tags hinzu:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern Sie und aktualisieren Sie die Seite, und Sie sollten sehen, dass alle Ihre Absätze lila werden.

In einigen Umständen können interne Stylesheets nützlich sein. Beispielsweise arbeiten Sie möglicherweise mit einem Inhaltsverwaltungssystem, in dem Sie daran gehindert werden, externe CSS-Dateien zu ändern.

Für Websites mit mehr als einer Seite sind interne Stylesheets jedoch weniger effizient als externe Stylesheets. Um einheitliches CSS-Styling mithilfe von internen Stylesheets auf mehrere Seiten anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Der Effizienzverlust erstreckt sich auch auf die Wartung der Website. Bei CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Stiländerung Änderungen auf mehreren Webseiten erfordert.

Bevor Sie fortfahren, entfernen Sie das `<style>`-Element und dessen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die ein einzelnes HTML-Element betreffen und sich innerhalb eines `style`-Attributs befinden. Lassen Sie uns jetzt eines implementieren.

Fügen Sie dem {{htmlelement("span")}}-Element in Ihrem HTML ein `style`-Attribut hinzu, sodass es folgendermaßen aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern und aktualisieren Sie die Seite, und Sie sollten sehen, dass nur der Text innerhalb des `<span>` lila und fett wird. Versuchen Sie, weitere Deklarationen innerhalb Ihres `style`-Attributs hinzuzufügen (durch Semikolons getrennt) oder zusätzliche `style`-Attribute zu anderen Elementen hinzuzufügen.

Sobald Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wenn möglich.** Es ist eine schlechte Praxis. Erstens ist es die wenig effizienteste Implementierung von CSS für die Wartung. Eine Stiländerung könnte mehrere Änderungen innerhalb einer einzigen Webseite erfordern. Zweitens mischt Inline-CSS auch (CSS) Präsentationscode mit HTML und Inhalt, wodurch alles schwieriger zu lesen und zu verstehen wird. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Möglicherweise müssen Sie Inline-Stile verwenden, wenn Ihre Arbeitsumgebung sehr restriktiv ist. Beispielsweise erlaubt Ihnen Ihr CMS möglicherweise nur, den HTML-Body zu bearbeiten. Sie können auch viele Inline-Stile in HTML-E-Mails sehen, um Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen. Es ist auch ziemlich üblich, Inline-Stile einzustellen, wenn Stile dynamisch mit JavaScript angewendet werden.

## Verwenden von häufigen Selektoren

In diesem Abschnitt machen wir eine kurze Tour durch einige der häufigsten Arten von Selektoren, die Sie antreffen werden.

### HTML-Elemente auswählen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits gezeigt, dass wir ein HTML-Element anvisieren und stylen können. Wir tun dies, indem wir einen **Elementselektor** (auch bekannt als **Typselektor**) anvisieren — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument auszuwählen, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie verwenden:

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

Probieren Sie dies im obigen Beispiel aus (klicken Sie auf "Play") oder in Ihrer lokalen Kopie:

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

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestyled. Dies funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Teilmenge der Elemente auszuwählen, ohne die anderen zu ändern, können Sie Ihrem HTML-Element eine `class` hinzufügen und diese Klasse in Ihrem CSS anvisieren.

1. Fügen Sie in Ihrem HTML-Dokument dem zweiten Listenelement ein [Klasseneigenschaft](/de/docs/Web/HTML/Reference/Global_attributes/class) hinzu. Ihre Liste sieht nun so aus:

   ```html
   <ul>
     <li>Item one</li>
     <li class="special">Item two</li>
     <li>Item <em>three</em></li>
   </ul>
   ```

2. In Ihrem CSS können Sie die Klasse `special` anvisieren, indem Sie einen Selektor erstellen, der mit einem Punkt beginnt. Fügen Sie das Folgende Ihrer CSS-Datei hinzu:

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

3. Speichern Sie und aktualisieren Sie die Seite, um das Ergebnis zu sehen.

Sie können nun die Klasse `special` auf andere Elemente auf Ihrer Seite anwenden, die Sie so aussehen lassen möchten wie dieses Listenelement. Fügen Sie eine Klasse `special` zum `<span>` innerhalb des Absatzes hinzu und laden Sie die Seite neu: Es sollte jetzt ebenfalls orange und fett sein.

### Dinge basierend auf ihrer Position im Dokument stylen

Es gibt Situationen, in denen Sie möchten, dass etwas anders aussieht, basierend darauf, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen hier helfen können, aber wir werden uns vorerst nur ein paar ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines innerhalb eines Absatzes und das andere innerhalb eines Listenelements. Um nur ein `<em>` auszuwählen, das in einem `<li>`-Element verschachtelt ist, können Sie einen Selektor namens **Nachfahren-Kombinator** verwenden, der die Form eines Leerzeichens zwischen zwei anderen Selektoren annimmt.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wählt jedes `<em>`-Element aus, das ein Nachfahre eines `<li>` ist. In Ihrem Beispieldokument sollte das `<em>` im dritten Listenelement jetzt lila sein, während das innerhalb des Absatzes unverändert bleibt.

Etwas anderes, das Sie ausprobieren könnten, ist das Stylen eines Absatzes, wenn er direkt nach einer Überschrift auf der gleichen Hierarchieebene im HTML folgt. Um dies zu tun, fügen Sie ein `+` (ein **Geschwister-Kombinator**) zwischen den Selektoren ein.

Versuchen Sie auch diese Regel zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das folgende Live-Beispiel enthält die beiden oben genannten Regeln. Versuchen Sie, eine Regel hinzuzufügen, um ein Span rot zu machen, wenn es sich in einem Paragraphen befindet. Sie wissen, dass es richtig ist, weil das Span im ersten Paragraphen rot wird, aber das im ersten Listenelement wird sich nicht ändern.

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
> Wie Sie sehen können, gibt uns CSS mehrere Möglichkeiten, Elemente anzuzielen, und wir haben bisher nur an der Oberfläche gekratzt! Wir werden uns später im Kurs alle diese Selektoren und viele mehr genauer ansehen.

### Dinge basierend auf ihrem Zustand stylen

Der letzte Stiltyp, den wir in diesem Tutorial betrachten, ist die Fähigkeit, Dinge basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel dafür ist das Stylen von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) (Anker) Element anvisieren. Dieses hat unterschiedliche Zustände, je nachdem, ob es unbesucht ist, besucht wurde, mit der Maus ausgewählt wird, über die Tastatur fokussiert ist oder sich im Klicken (aktiviert) befindet. Sie können CSS verwenden, um diese verschiedenen Zustände anzusprechen — das folgende CSS style unbesuchte Links pink und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer darüber fährt, zum Beispiel, indem Sie die Unterstreichung entfernen, was durch die nächste Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im folgenden Beispiel können Sie mit unterschiedlichen Werten für die verschiedenen Zustände eines Links experimentieren. Wir haben die obigen Regeln hinzugefügt, und jetzt merken wir, dass die pinke Farbe ziemlich hell und schwer zu lesen ist — warum ändern Sie das nicht in eine bessere Farbe? Können Sie die Links fett machen?

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

Wir haben die Unterstreichung bei unserem Link im Hoverzustand entfernt. Sie könnten die Unterstreichung aus allen Zuständen eines Links entfernen. Es ist jedoch zu beachten, dass Sie auf einer echten Website sicherstellen möchten, dass Besucher wissen, dass ein Link ein Link ist. Das Belassen der Unterstreichung kann ein wichtiges Zeichen dafür sein, dass einige Texte innerhalb eines Paragraphen angeklickt werden können — dies ist das Verhalten, das sie gewohnt sind. Wie bei allem in CSS besteht die Möglichkeit, dass durch Ihre Änderungen das Dokument weniger zugänglich wird — wir werden versuchen, auf mögliche Fallstricke an geeigneten Stellen hinzuweisen.

> [!NOTE]
> Sie werden in diesen Lektionen und auf der gesamten MDN häufig Hinweise auf [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) finden. Wenn wir über Barrierefreiheit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten für alle Menschen verständlich und benutzbar sein müssen, egal ob sie einen Computer mit einer Maus oder einem Trackpad, ein Telefon mit einem Touchscreen, nur mit der Tastatur oder mit einem Screenreader, der den Inhalt des Dokuments vorliest, verwenden.

### Selektoren und Kombinatoren kombinieren

Es ist wichtig zu beachten, dass Sie mehrere Selektoren und Kombinatoren zusammen kombinieren können. Zum Beispiel:

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}
```

Sie können auch mehrere Typen miteinander kombinieren. Versuchen Sie das Folgende in Ihren Code einzufügen:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit einer Klasse `special` stylen, das sich in einem `<p>` befindet, das direkt nach einem `<h1>` folgt. Puh! Dies sollte das `<span class="special">span element</span>`-Element in Ihrem Code ansprechen.

Keine Sorge, wenn das im Moment kompliziert erscheint — Sie werden bald den Dreh raus haben, je mehr Sie CSS schreiben.

## Weitere CSS-Syntax-Features

Nachdem wir mit einigen CSS-Features gespielt haben, geben wir Ihnen einen Überblick über einige andere CSS-Syntax-Features, die Sie im Verlauf des Kurses antreffen werden. Wenn Sie mehr Details zu einem dieser Merkmale nachschlagen möchten, können Sie versuchen, den Merkmalnamen in das Suchfeld oben auf dieser Seite einzugeben oder das MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) zu durchsuchen.

Wenn Sie mit den Code-Snippets in jedem Fall experimentieren möchten, könnten Sie das bereitgestellte HTML und CSS zu dem lokalen Beispiel oder der MDN Playground-Instanz, an der Sie oben gearbeitet haben, hinzufügen.

### Funktionen

Während die meisten Werte relativ einfach Stichwörter oder numerische Werte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

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

Dies wird dargestellt als:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte der Funktion einzuschließen. Im Fall des obigen `calc()`-Beispiels definieren die Werte die Breite dieses Kastens als 90% der Breite des umgebenden Blocks minus 30 Pixel.

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

Suchen Sie nach unterschiedlichen Werten der unten aufgeführten Eigenschaften. Versuchen Sie CSS-Regeln zu schreiben, die HTML-Elemente mithilfe der folgenden Funktionen stylen:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Verlaufswerte
- {{cssxref("color")}}, insbesondere rgb und hsl Werte

### @regeln

CSS [@regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) (ausgesprochen "at-rules") geben Anweisungen, wie sich CSS verhalten soll. Eine häufige @rule, die Sie wahrscheinlich antreffen werden, ist `@media`, die verwendet wird, um [Media Queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media Queries verwenden bedingte Logik, um CSS-Styling anzuwenden.

Im folgenden Beispiel definiert das Stylesheet einen standardmäßigen pinken Hintergrund für das `<body>`-Element. Eine Media Query folgt jedoch, die einen blauen Hintergrund auf dem `<body>`-Element setzt, wenn das Browserfenster breiter als 30em ist.

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

Sie werden im Verlauf des Kurses anderen `@rules` begegnen.

### Kurzform-Eigenschaften

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, und {{cssxref("margin")}} werden als **Kurzform-Eigenschaften** bezeichnet. Dies liegt daran, dass Kurzform-Eigenschaften mehrere Werte in einer einzigen Zeile festlegen.

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
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

ist gleichwertig mit diesen fünf Zeilen:

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

Später im Kurs werden Sie viele weitere Beispiele für Kurzform-Eigenschaften sehen. Für den Moment, versuchen Sie die obigen Deklarationen (oder andere, die Ihnen bekannt sind) in Ihrem eigenen Code zu verwenden, um sich damit vertraut zu machen, wie sie funktionieren.

### CSS Kommentare

Wie bei jeder Art von Codierungsarbeit ist es Best Practice, Kommentare in Ihr CSS zu schreiben. Dies hilft Ihnen, sich später daran zu erinnern, wie der Code funktioniert, wenn Sie zurückkommen, um Korrekturen oder Verbesserungen vorzunehmen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im folgenden Beispiel markieren Kommentare den Beginn von thematisch unterschiedlichen Abschnitten von Code. Dies hilft, den Code zu navigieren, wenn er größter wird. Mit solchen Kommentaren wird die Suche nach Kommentaren in Ihrem Code-Editor zu einer Möglichkeit, effizient einen Abschnitt von Code zu finden.

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

Das "Auskommentieren" von Code ist auch nützlich, um vorübergehend einen Abschnitt von Code zum Testen zu deaktivieren. Im folgenden Beispiel sind die Regeln für `.special` durch "Auskommentieren" des Codes deaktiviert.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Versuchen Sie, Kommentare in Ihr CSS hinzuzufügen.

### Weißraum in CSS

Weißraum bedeutet tatsächliche Leerzeichen, Tabs und neue Zeilen. Genau wie Browser überflüssigen Weißraum in HTML ignorieren, ignorieren Browser überflüssigen Weißraum in CSS. Der Vorteil von Weißraum besteht darin, dass er es einfacher macht, den Code zu lesen.

Im folgenden Beispiel hat jede Deklaration (sowie der Anfang und das Ende jeder Regel) ihre eigene Zeile. Dies ist eindeutig eine gute Art, CSS zu schreiben. Es macht es einfacher, CSS zu pflegen und zu verstehen.

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

Das nächste Beispiel zeigt dasselbe CSS in einem kompakteren Format, bei dem alle zusätzlichen Leerzeichen entfernt sind. Obwohl die beiden Beispiele gleich funktionieren, ist das folgende schwieriger zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Bedenken Sie, dass das Entfernen von Weißraum zu Fehlern führen kann. Eigenschaftsnamen enthalten niemals Leerzeichen, während Eigenschaftswerte, die Leerzeichen zwischen mehreren Werten erwarten, ungültig sind, wenn dieses Leerzeichen entfernt wird. Zum Beispiel sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Abstandsfehler? Erstens wird `0auto` nicht als gültiger Wert für die `margin` Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) hat in ihm einen ungültigen Leerzeichen.

Sie sollten immer darauf achten, von einer zur nächsten unterscheidbaren Werten mindestens ein Leerzeichen zu trennen. Halten Sie Eigenschaftsnamen und -werte als einzelne ungebrochene Zeichenfolgen zusammen.

Um herauszufinden, wie das Entfernen von Weißraum CSS brechen kann, versuchen Sie, mit dem Abstand in Ihrem Test-CSS zu experimentieren.

## Zusammenfassung

In diesem Artikel haben wir eine Reihe von Möglichkeiten betrachtet, wie Sie ein Dokument mit CSS stylen können. Wir werden dieses Wissen erweitern, während wir uns durch die weiteren Lektionen bewegen. Sie wissen jetzt jedoch bereits genug, um Text zu stylen und CSS auf der Grundlage unterschiedlicher Möglichkeiten des Anvisierens von Elementen im Dokument anzuwenden.

Als nächstes werden wir Ihnen eine Herausforderung geben, um Ihr neues Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
