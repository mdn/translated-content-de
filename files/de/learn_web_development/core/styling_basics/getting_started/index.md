---
title: Erste Schritte mit CSS
short-title: Einführung in CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel werden wir Ihnen zeigen, wie Sie ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei Sie einige praktische Details der Sprache lernen. Wir werden auch einige zusätzliche CSS-Syntax-Funktionen überprüfen, die Sie bisher noch nicht betrachtet haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, Grundkenntnisse im
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a> und Grundkenntnisse in HTML (studieren Sie die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Anwenden von CSS auf ein HTML-Dokument.</li>
          <li>Praktische Erfahrung im Schreiben von einfachem CSS.</li>
          <li>Grundlegendes Wissen über fundamentale Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des Zustands, wie es in CSS angewendet wird.</li>
          <li>Vertrautheit mit anderen CSS-Syntax-Funktionen wie At-Regeln, Funktionen, Kurzschreibweise und Leerzeichen.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Beginn mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den folgenden Code kopieren, wenn Sie an Ihrem eigenen Computer arbeiten möchten. Speichern Sie den folgenden Code als `index.html` in einem Ordner auf Ihrem Computer.

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

Das wird wie folgt dargestellt:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen — klicken Sie auf die Schaltfläche "Play" im obigen Live-Beispiel, um es im MDN Playground zu öffnen. Dort können Sie den CSS- und HTML-Code wie weiter unten beschrieben bearbeiten und die kombinierten Ergebnisse live sehen.

## Hinzufügen von CSS zu unserem Dokument

Das allererste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass es einige CSS-Regeln gibt, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Ihnen häufig begegnen werden — externe Stylesheets, interne Stylesheets und Inline-Styles. Schauen wir uns diese jetzt an.

Wenn Sie diesen Artikel mit dem MDN Playground durchgehen, können Sie die in diesem Abschnitt beschriebenen Schritte nicht auf die gleiche Weise befolgen wie Personen, die den Code auf ihren lokalen Computern schreiben. Das liegt daran, dass der MDN Playground das Hinzufügen des CSS zum HTML implizit im Hintergrund verarbeitet. Sie sollten den Abschnitt jedoch dennoch durchlesen, um sich mit dem Inhalt vertraut zu machen.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Endung `.css`. Dies ist die häufigste und nützlichste Methode, um CSS in ein Dokument zu bringen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen und alle mit dem gleichen CSS-Stylesheet stylen.

Erstellen Sie eine Datei im selben Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie die folgende Zeile irgendwo im {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, indem das `rel`-Attribut verwendet wird, und den Speicherort dieses Stylesheets als Wert des `href`-Attributs festlegt. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Fügen Sie mit Ihrem Code-Editor das Folgende zu Ihrer CSS-Datei hinzu:

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift auf Level eins oben im Dokument sollte jetzt rot sein. Wenn das passiert, herzlichen Glückwunsch — Sie haben erfolgreich etwas CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles richtig eingegeben haben.

#### Lokalisieren von Stylesheets an unterschiedlichen Stellen

Im obigen Beispiel befindet sich die CSS-Datei im selben Ordner wie das HTML-Dokument, aber Sie könnten es auch woanders platzieren und den Pfad anpassen (ähnlich wie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets sind innerhalb von {{htmlelement("style")}}-Elementen enthalten, die innerhalb des HTML-{{htmlelement("head")}} platziert werden. Lassen Sie uns jetzt eins erstellen.

Fügen Sie in Ihrem HTML-Dokument das folgende Snippet irgendwo zwischen den `<head>` und `</head>`-Tags hinzu:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern und aktualisieren Sie die Seite, und Sie sollten sehen, dass sich alle Ihre Absätze lila färben.

In einigen Fällen können interne Stylesheets nützlich sein. Zum Beispiel, wenn Sie möglicherweise mit einem Content-Management-System arbeiten, bei dem Sie daran gehindert werden, externe CSS-Dateien zu ändern.

Für Websites mit mehr als einer Seite sind interne Stylesheets jedoch weniger effizient als externe Stylesheets. Um einheitliches CSS-Styling auf mehreren Seiten mit internen Stylesheets anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Die Effizienzstrafe überträgt sich auch auf die Wartung der Website. Mit CSS in internen Stylesheets besteht das Risiko, dass eine einfache Stiländerung möglicherweise Bearbeitungen an mehreren Webseiten erfordert.

Bevor Sie fortfahren, entfernen Sie das `<style>`-Element und dessen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Styles

Inline-Styles sind CSS-Deklarationen, die ein einzelnes HTML-Element betreffen und innerhalb eines `style`-Attributs enthalten sind. Lassen Sie uns jetzt eins implementieren.

Fügen Sie ein `style`-Attribut zum {{htmlelement("span")}}-Element in Ihrem HTML hinzu, sodass es folgendermaßen aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern und aktualisieren Sie die Seite, und Sie sollten sehen, dass nur der Text innerhalb des `<span>` lila und fett wird. Versuchen Sie, einige weitere Deklarationen innerhalb Ihres `style`-Attributs hinzuzufügen (durch Semikolons getrennt) oder einige zusätzliche `style`-Attribute zu anderen Elementen hinzuzufügen.

Wenn Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie, CSS auf diese Weise zu verwenden, wenn möglich.** Es ist eine schlechte Praxis. Erstens ist es die am wenigsten effiziente Implementierung von CSS für die Wartung. Eine Stiländerung könnte mehrere Bearbeitungen innerhalb einer einzelnen Webseite erfordern. Zweitens vermischt Inline-CSS auch (CSS) Presentational-Code mit HTML und Inhalt, was alles schwerer lesbar und verständlicher macht. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Vielleicht müssen Sie auf die Verwendung von Inline-Styles zurückgreifen, wenn Ihre Arbeitsumgebung sehr restriktiv ist. Zum Beispiel erlaubt Ihr CMS Ihnen möglicherweise nur das Bearbeiten des HTML-Körpers. Sie können auch viele Inline-Styles in HTML-E-Mails sehen, um die Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen. Es ist auch ziemlich gängig, Inline-Styles zu setzen, wenn Stile dynamisch mit JavaScript angewendet werden.

## Verwenden gängiger Selektoren

In diesem Abschnitt machen wir eine kurze Tour durch einige der häufigeren Selektortypen, denen Sie begegnen werden.

### HTML-Elemente auswählen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits gezeigt, dass wir ein HTML-Element auswählen und stylen können. Dies tun wir, indem wir einen **Elementselektor** (auch bekannt als **Typselektor**) anvisieren — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument zu adressieren, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu färben, würden Sie verwenden:

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

Die folgende interaktive Lektion lehrt grundlegende CSS-Konzepte und bietet einige Übungen.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~015" scrimtitle="Schreiben Sie Ihre ersten CSS-Zeilen!"></mdn-scrim-inline>

### Hinzufügen einer Klasse

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestylt. Dies funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Untermenge der Elemente auszuwählen, ohne die anderen zu ändern, können Sie eine `class` zu Ihrem HTML-Element hinzufügen und diese Klasse in Ihrem CSS anvisieren.

1. Fügen Sie in Ihrem HTML-Dokument dem zweiten Listenelement ein [class-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) hinzu. Ihre Liste sieht jetzt so aus:

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

3. Speichern und aktualisieren Sie die Seite, um das Ergebnis zu sehen.

Sie können die `class` `special` jetzt auf andere Elemente auf Ihrer Seite anwenden, die Sie wie dieses Listenelement aussehen lassen möchten. Fügen Sie dem `<span>` innerhalb des Absatzes eine Klasse `special` hinzu, und laden Sie Ihre Seite neu: Es sollte jetzt auch orange und fett sein.

### Styling basierend auf dem Standort im Dokument

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, je nachdem, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen dabei helfen können, aber für jetzt werden wir uns nur ein paar ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines innerhalb eines Absatzes und das andere innerhalb eines Listenelements. Um nur ein `<em>` auszuwählen, das in einem `<li>`-Element verschachtelt ist, können Sie einen Selektor namens **Descendant Combinator** verwenden, der die Form eines Leerzeichens zwischen zwei anderen Selektoren annimmt.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wird jedes `<em>`-Element auswählen, das ein Nachkomme eines `<li>` ist. In Ihrem Beispieldokument sollten Sie feststellen, dass das `<em>` im dritten Listenelement jetzt lila ist, aber das im Absatz unverändert bleibt.

Etwas anderes, das Sie vielleicht ausprobieren möchten, ist das Styling eines Absatzes, wenn er direkt nach einer Überschrift auf derselben Hierarchieebene im HTML erscheint. Um dies zu tun, platzieren Sie ein `+` (ein **Next-Sibling Combinator**) zwischen die Selektoren.

Probieren Sie auch diese Regel zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das Live-Beispiel unten enthält die beiden obigen Regeln. Versuchen Sie, eine Regel hinzuzufügen, um ein `span` rot zu machen, wenn es sich innerhalb eines Absatzes befindet. Sie werden wissen, ob Sie es richtig gemacht haben, weil das `span` im ersten Absatz rot sein wird, aber das im ersten Listenelement wird sich nicht ändern.

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
> Wie Sie sehen können, bietet CSS uns mehrere Möglichkeiten, Elemente zu adressieren, und wir haben bisher nur an der Oberfläche gekratzt! Wir werden später im Kurs einen genaueren Blick auf all diese Selektoren und viele weitere werfen.

### Styling basierend auf dem Zustand

Die letzte Art des Stylings, die wir uns in diesem Tutorial ansehen werden, ist die Fähigkeit, Dinge basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel dafür ist das Styling von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a)-Element anvisieren. Dieses hat unterschiedliche Zustände, je nachdem ob es unbesucht, besucht, gerade gehoben, über Tastatur fokussiert oder im Begriff zu klicken (aktiviert) ist. Sie können CSS verwenden, um diese verschiedenen Zustände anzusprechen — das CSS unten stylt unbesuchte Links pink und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer darüber schwebt, beispielsweise indem Sie die Unterstreichung entfernen, die durch die nächste Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im folgenden Beispiel können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links experimentieren. Wir haben die obigen Regeln hinzugefügt, und stellen nun fest, dass die pinke Farbe ziemlich hell und schwer zu lesen ist — warum nicht in eine bessere Farbe ändern? Können Sie die Links fett machen?

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

Wir haben die Unterstreichung in unserem Link bei Schwebung entfernt. Sie könnten die Unterstreichung aus allen Zuständen eines Links entfernen. Es ist jedoch wichtig, sich daran zu erinnern, dass Sie Besuchern auf einer echten Website sicherstellen möchten, dass sie wissen, dass ein Link ein Link ist. Das Belassen der Unterstreichung kann ein wichtiger Hinweis sein, damit Menschen erkennen, dass einige Texte innerhalb eines Absatzes angeklickt werden können — das ist das Verhalten, das sie gewohnt sind. Wie bei allem im CSS besteht das Potenzial, das Dokument mit Ihren Änderungen weniger zugänglich zu machen — wir werden versuchen, potenzielle Fallstricke an geeigneten Stellen hervorzuheben.

> [!NOTE]
> Sie werden in diesen Lektionen und auf MDN oft Hinweise auf [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) sehen. Wenn wir von Barrierefreiheit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten für alle verständlich und nutzbar sein müssen, egal ob sie einen Computer mit Maus oder Touchpad, ein Telefon mit Touchscreen, nur mit der Tastatur oder über einen Screenreader navigieren, der den Inhalt des Dokuments vorliest.

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

Sie können auch mehrere Typen kombinieren. Versuchen Sie, das Folgende in Ihren Code einzufügen:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit einer Klasse `special` stylen, das sich in einem `<p>` befindet, das direkt nach einem `<h1>` steht. Puh! Dies sollte das `<span class="special">span element</span>` in Ihrem Code anvisieren.

Keine Sorge, wenn das im Moment kompliziert erscheint — Sie werden sich schnell daran gewöhnen, während Sie mehr CSS schreiben.

## Weitere CSS-Syntax-Funktionen

Jetzt, da wir mit einigen CSS-Features gespielt haben, geben wir Ihnen einen Überblick über einige der anderen CSS-Syntax-Funktionen, denen Sie im Laufe des Kurses begegnen werden. Wenn Sie mehr Details zu einer dieser Funktionen nachschlagen möchten, können Sie versuchen, den Namen der Funktion in das Suchfeld oben auf dieser Seite einzugeben oder das MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) durchzublättern.

Um mit den Code-Snippets in jedem Fall zu experimentieren, könnten Sie das bereitgestellte HTML und CSS im lokalen Beispiel oder MDN Playground-Instanz, die Sie oben bearbeitet haben, einfügen.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder Zahlenwerte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

#### Die calc()-Funktion

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

Das wird so dargestellt:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im obigen `calc()`-Beispiel definieren die Werte, dass die Breite dieser Box 90% der Containing-Block-Breite minus 30 Pixel beträgt.

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

Die Ausgabe des obigen Codes sieht aus wie folgt:

{{EmbedLiveSample('Transform_functions', '100%', 200)}}

Sehen Sie sich verschiedene Werte von unten aufgeführten Eigenschaften an. Versuchen Sie, CSS-Regeln zu schreiben, die Styling auf verschiedene HTML-Elemente mit den folgenden Funktionen anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradient-Werte
- {{cssxref("color")}}, insbesondere rgb und hsl Werte

### @regeln

CSS [@regeln](/de/docs/Web/CSS/CSS_syntax/At-rules) (ausgesprochen "at-regeln") geben Anweisungen, wie CSS sich verhalten soll. Eine häufige At-Regel, die Ihnen begegnen wird, ist `@media`, die verwendet wird, um [Media Queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media Queries verwenden logische Abfragen, um CSS-Styling anzuwenden.

Im folgenden Beispiel definiert das Stylesheet einen Standard-Pink-Hintergrund für das `<body>`-Element. Ein Media Query folgt jedoch, das einen blauen Hintergrund auf das `<body>`-Element setzt, wenn das Browser-Viewport breiter als `30em` ist.

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

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, und {{cssxref("margin")}} werden als **Kurzschreibweise** bezeichnet. Dies ist so, weil Kurzschreibweisen mehrere Werte in einer einzigen Zeile festlegen.

Zum Beispiel entspricht diese eine Codezeile:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

diesen vier Codezeilen:

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

Später im Kurs werden Sie viele andere Beispiele für Kurzschreibweisen sehen. Versuchen Sie für den Moment, die oben genannten Deklarationen (oder andere, die Ihnen vielleicht bekannt sind) in Ihrem eigenen Code zu verwenden, um sich damit vertraut zu machen, wie sie funktionieren.

### CSS-Kommentare

Wie bei jeder Art von Codierung ist es am besten, Kommentare in Ihrem CSS zu schreiben. Dies hilft Ihnen, sich daran zu erinnern, wie der Code funktioniert, wenn Sie später Änderungen oder Verbesserungen vornehmen müssen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im folgenden Beispiel markieren Kommentare den Beginn von unterschiedlichen Codeabschnitten. Dies hilft, sich im Code zurechtzufinden, wenn er größer wird. Mit dem Hinzufügen solcher Kommentare in Ihrem Code wird die Suche nach Kommentaren in Ihrem Code-Editor zu einer Möglichkeit, effizient einen Codeabschnitt zu finden.

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

"Auskommentieren" von Code ist auch nützlich für das vorübergehende Deaktivieren von Codeabschnitten zum Testen. Im Beispiel unten sind die Regeln für `.special` durch "Auskommentieren" deaktiviert.

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

Leerraum bedeutet tatsächliche Leerzeichen, Tabs und neue Zeilen. Genau wie Browser zusätzlichen Leerraum in HTML ignorieren, ignorieren Browser zusätzlichen Leerraum innerhalb von CSS. Der Vorteil von Leerraum ist, dass er es Ihnen erleichtert, den Code zu lesen.

Im folgenden Beispiel hat jede Deklaration (und Regelanfang/-ende) ihre eigene Zeile. Dies ist möglicherweise eine gute Art, CSS zu schreiben. Es macht es einfacher, CSS zu pflegen und zu verstehen.

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

Das nächste Beispiel zeigt dasselbe CSS in einem kompakteren Format, bei dem alle zusätzlichen Leerzeichen entfernt wurden. Obwohl die beiden Beispiele gleich funktionieren, ist das untere schwieriger zu lesen.

```css-nolint
body{font:1em/150% "Helvetica","Arial",sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(width>=70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Beachten Sie, dass einige Leerzeichenänderungen zu Fehlern führen können. Eigenschaftsnamen enthalten nie Leerzeichen, während Eigenschaftswerte, die Leerraum zwischen mehreren Werten erwarten, ungültig sind, wenn dieser Leerraum entfernt wird. Zum Beispiel sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Abstandsfehler? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte darstellen: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) enthält kein Leerzeichen darin.

Sie sollten immer sicherstellen, dass Sie separate Werte durch mindestens ein Leerzeichen trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als einzelne ununterbrochene Zeichenfolgen zusammen.

Um herauszufinden, wie Leerraum CSS brechen kann, versuchen Sie mit Leerzeichen in Ihrem Test-CSS zu spielen.

## Zusammenfassung

In diesem Artikel haben wir uns eine Reihe von Möglichkeiten angesehen, wie Sie ein Dokument mit CSS stylen können. Wir werden dieses Wissen weiterentwickeln, während wir durch die restlichen Lektionen gehen. Sie wissen jedoch jetzt bereits genug, um Text zu stylen und CSS basierend auf verschiedenen Methoden des Zielens von Elementen im Dokument anzuwenden.

Als Nächstes geben wir Ihnen eine Herausforderung, um Ihr neu erworbenes Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
