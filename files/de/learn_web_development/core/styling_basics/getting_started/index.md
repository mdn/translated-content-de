---
title: Erste Schritte mit CSS
short-title: Erste Schritte mit CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: decc8a13c9b9769ebbe9cdc2cf43c04376efb0f8
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache auf dem Weg lernen. Wir werden auch die CSS-Syntax-Funktionen überprüfen, die Sie bisher noch nicht betrachtet haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, Grundlagen im Umgang mit
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Dateien</a> und HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>CSS auf ein HTML-Dokument anwenden.</li>
          <li>Praktische Erfahrung im Schreiben von einfachem CSS.</li>
          <li>Funktionskenntnisse grundlegender Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des Zustands, wie es auf CSS angewendet wird.</li>
          <li>Vertrautheit mit anderen CSS-Syntax-Funktionen wie At-Regeln, Funktionen, Kurzschreibweise und Leerzeichen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Starten mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den Code unten kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den nachfolgenden Code als `index.html` in einem Ordner auf Ihrem Rechner.

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

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen — klicken Sie auf die Schaltfläche "Play" im Live-Beispiel oben, um sie im MDN Playground zu öffnen. Dort können Sie den CSS- und HTML-Code gemäß den weiter unten angegebenen Anweisungen bearbeiten und die kombinierten Ergebnisse live sehen.

## Hinzufügen von CSS zu unserem Dokument

Das Erste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die wir verwenden möchten. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, auf die Sie häufig stoßen werden — externe Stylesheets, interne Stylesheets und Inline-Stile. Schauen wir uns diese jetzt an.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Endung `.css`. Dies ist die gebräuchlichste und nützlichste Methode, um CSS zu einem Dokument hinzuzufügen. Sie können eine einzige CSS-Datei mit mehreren Webseiten verlinken und so alle mit demselben CSS-Stylesheet stylen.

Erstellen Sie eine Datei im selben Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verlinken, fügen Sie irgendwo im {{htmlelement("head")}} des HTML-Dokuments die folgende Zeile hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, mit dem `rel`-Attribut und dem Ort dieses Stylesheets als Wert des `href`-Attributs. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Verwenden Sie Ihren Code-Editor, um Folgendes zu Ihrer CSS-Datei hinzuzufügen (oder fügen Sie es in das "CSS"-Feld im MDN Playground ein):

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift auf Stufe 1 oben im Dokument sollte jetzt rot sein. Wenn das passiert, herzlichen Glückwunsch — Sie haben erfolgreich CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie genau, ob Sie alles richtig eingetippt haben.

#### Stylesheets an verschiedenen Orten lokalisieren

Im obigen Beispiel befindet sich die CSS-Datei im selben Ordner wie das HTML-Dokument, aber Sie könnten sie auch woanders platzieren und den Pfad anpassen (in ähnlicher Weise wie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets werden in {{htmlelement("style")}}-Elementen enthalten, die innerhalb des HTML-{{htmlelement("head")}} platziert werden. Lassen Sie uns jetzt eines erstellen.

Fügen Sie in Ihrem HTML-Dokument den folgenden Ausschnitt irgendwo zwischen den `<head>` und `</head>`-Tags hinzu:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern und aktualisieren Sie, und Sie sollten sehen, dass alle Ihre Absätze lila werden.

In einigen Fällen können interne Stylesheets nützlich sein. Beispielsweise arbeiten Sie vielleicht mit einem Content-Management-System, in dem Sie daran gehindert werden, externe CSS-Dateien zu ändern.

Für Websites mit mehr als einer Seite sind interne Stylesheets jedoch weniger effizient als externe Stylesheets. Um einheitliche CSS-Styling auf mehrere Seiten mit internen Stylesheets anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Die Effizienzstrafe überträgt sich auch auf die Wartung der Website. Mit CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Styling-Änderung mehrere Bearbeitungen an mehreren Webseiten erfordern kann.

Bevor Sie weitermachen, entfernen Sie das `<style>`-Element und dessen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die ein einzelnes HTML-Element betreffen und in einem `style`-Attribut enthalten sind. Versuchen wir jetzt, eines zu implementieren.

Fügen Sie dem {{htmlelement("span")}}-Element in Ihrem HTML ein `style`-Attribut hinzu, sodass es folgendermaßen aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern und aktualisieren Sie, und Sie sollten sehen, dass nur der Text innerhalb des `<span>` lila und fett wird. Versuchen Sie, einige weitere Deklarationen innerhalb Ihres `style`-Attributs hinzuzufügen (getrennt durch Semikolons) oder einige zusätzliche `style`-Attribute zu anderen Elementen hinzuzufügen.

Wenn Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wenn möglich.** Es ist eine schlechte Praxis. Erstens ist es die ineffizienteste Implementierung von CSS für die Wartung. Eine Styling-Änderung könnte mehrere Bearbeitungen innerhalb einer einzigen Webseite erforderlich machen. Zweitens mischt Inline-CSS auch (CSS) Präsentationscode mit HTML und Inhalt, was das Lesen und Verstehen erschwert. Das Trennen von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Vielleicht müssen Sie Inline-Stile verwenden, wenn Ihre Arbeitsumgebung sehr restriktiv ist. Beispielsweise erlaubt Ihr CMS Ihnen möglicherweise nur, den HTML-Body zu bearbeiten. Sie werden möglicherweise auch viele Inline-Stile in HTML-E-Mails sehen, um die Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen. Es ist auch sehr üblich, Inline-Stile zu setzen, wenn dynamisch Style mit JavaScript angewendet wird.

## Verwendung gängiger Selektoren

In diesem Abschnitt machen wir eine kurze Tour durch einige der häufiger vorkommenden Selektortypen, denen Sie begegnen werden.

### Auswahl von HTML-Elementen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits demonstriert, dass wir ein HTML-Element gezielt und styled können. Wir tun dies, indem wir einen **Elementselektor** (auch bekannt als **Typselektor**) anvisieren — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument zu zielen, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie Folgendes verwenden:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig ansprechen, indem Sie sie mit einem Komma trennen. Wenn Sie möchten, dass alle Absätze und alle Listenelemente grün werden, würde Ihre Regel so aussehen:

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

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestylt. Das funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Teilmenge der Elemente ohne Änderung der anderen auszuwählen, können Sie Ihrem HTML-Element eine `class` hinzufügen und diese Klasse in Ihrem CSS anvisieren.

1. Fügen Sie in Ihrem HTML-Dokument ein [class-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) zum zweiten Listenelement hinzu. Ihre Liste sieht jetzt so aus:

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

Sie können die Klasse `special` jetzt auf andere Elemente auf Ihrer Seite anwenden, die das gleiche Aussehen haben sollen wie dieses Listenelement. Fügen Sie dem `<span>` im Absatz die Klasse `special` hinzu und laden Sie dann Ihre Seite neu: Sie sollte nun ebenfalls orange und fett sein.

### Styling von Objekten basierend auf ihrer Position in einem Dokument

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, je nachdem, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen dabei helfen können, aber im Moment werden wir uns nur ein paar davon ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines innerhalb eines Absatzes und eines innerhalb eines Listenelements. Um nur ein `<em>`, das in einem `<li>`-Element verschachtelt ist, zu selektieren, können Sie einen Selektor namens **Deszendenten-Kombinator** verwenden, der die Form eines Leerzeichens zwischen zwei anderen Selektoren annimmt.

Fügen Sie Ihrem Stylesheet die folgende Regel hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wählt jedes `<em>`-Element aus, das ein Nachfahre eines `<li>` ist. So sollten Sie in Ihrem Beispieldokument feststellen, dass das `<em>` im dritten Listenelement jetzt lila ist, aber das im Absatz unverändert bleibt.

Etwas anderes, das Sie ausprobieren möchten, ist, einen Absatz zu stylen, wenn er direkt nach einer Überschrift auf derselben Hierarchieebene im HTML kommt. Um dies zu erreichen, setzen Sie ein `+` (ein **Adjacent-Sibling-Kombinator**) zwischen die Selektoren.

Versuchen Sie, diese Regel ebenfalls zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das unten stehende Live-Beispiel enthält die beiden oben genannten Regeln. Versuchen Sie, eine Regel hinzuzufügen, um ein Span rot zu machen, wenn es in einem Absatz enthalten ist. Sie wissen, dass Sie es richtig gemacht haben, wenn das Span im ersten Absatz rot ist, das im ersten Listenelement jedoch nicht die Farbe wechselt.

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
> Wie Sie sehen, bietet CSS mehrere Möglichkeiten, Elemente zu selektieren, und wir haben bisher nur an der Oberfläche gekratzt! Wir werden uns später im Kurs alle diese Selektoren und viele weitere genauer ansehen.

### Styling von Objekten basierend auf Zustand

Der letzte Styling-Typ, den wir uns in diesem Tutorial ansehen werden, ist die Fähigkeit, Dinge basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel dafür ist das Stylen von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) (Anker) Element anvisieren. Dieses hat verschiedene Zustände, je nachdem, ob es unbesucht, besucht, überfahren (hovered), über die Tastatur fokussiert oder im Prozess des Anklickens (activated) ist. Sie können CSS verwenden, um diese verschiedenen Zustände zu selektieren — das unten stehende CSS stylt unbesuchte Links pink und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer darüber schwebt, beispielsweise durch Entfernen der Unterstreichung, die durch die folgende Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im folgenden Beispiel können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links experimentieren. Wir haben die oben genannten Regeln hinzugefügt, und nun stellen wir fest, dass die rosa Farbe ziemlich hell und schwer lesbar ist — warum ändern Sie das nicht in eine bessere Farbe? Können Sie die Links fett machen?

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

Wir haben die Unterstreichung unseres Links bei Hover entfernt. Sie könnten die Unterstreichung aus allen Zuständen eines Links entfernen. Es ist jedoch wichtig, zu beachten, dass Sie auf einer echten Website sicherstellen möchten, dass die Besucher wissen, dass ein Link ein Link ist. Die Unterstreichung beizubehalten kann ein wichtiger Hinweis für Personen sein, um zu erkennen, dass bestimmter Text in einem Absatz angeklickt werden kann — dies ist das Verhalten, an das sie gewöhnt sind. Wie bei allem in CSS besteht das Potenzial, das Dokument mit Ihren Änderungen weniger zugänglich zu machen — wir werden versuchen, potenzielle Fallstricke an geeigneten Stellen hervorzuheben.

> [!NOTE]
> Sie werden in diesen Lektionen und auf der gesamten MDN häufig den Begriff [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) hören. Wenn wir über Barrierefreiheit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten für alle verständlich und nutzbar sein sollten, unabhängig davon, ob sie einen Computer mit Maus oder Trackpad, ein Telefon mit Touchscreen, nur mit der Tastatur oder per Screenreader verwenden, der den Inhalt des Dokuments vorliest.

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

Sie können auch mehrere Typen zusammen kombinieren. Versuchen Sie, Folgendes in Ihren Code einzufügen:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit einer Klasse von `special` stylen, das sich in einem `<p>` befindet, das direkt nach einem `<h1>` kommt. Puh! Dies sollte das `<span class="special">span element</span>` Element in Ihrem Code anvisieren.

Machen Sie sich keine Sorgen, wenn dies im Moment kompliziert erscheint — Sie werden es bald besser verstehen, während Sie mehr CSS schreiben.

## Andere CSS-Syntax-Funktionen

Nachdem wir mit einigen CSS-Funktionen gespielt haben, geben wir Ihnen eine Übersicht über einige der anderen CSS-Syntax-Funktionen, denen Sie im Kurs begegnen werden. Wenn Sie sich über mehr Details zu einem dieser Themen informieren möchten, versuchen Sie, den Feature-Namen in das Suchfeld oben auf dieser Seite einzugeben oder schauen Sie im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) vorbei.

Um mit den Code-Snippets in jedem Fall zu experimentieren, könnten Sie das bereitgestellte HTML und CSS zu dem lokalen Beispiel oder der MDN Playground-Instanz hinzufügen, an der Sie oben gearbeitet haben.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die die Form einer Funktion haben.

#### Die calc()-Funktion

Ein Beispiel wäre die `calc()`-Funktion, die innerhalb von CSS einfache mathematische Berechnungen durchführen kann:

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

Eine Funktion besteht aus dem Funktionsnamen und Klammern, die die Werte für die Funktion einrahmen. Im Fall des obigen `calc()`-Beispiels definieren die Werte die Breite dieser Box auf 90 % der Breite des enthaltenden Blocks minus 30 Pixel.

#### Transform-Funktionen

Ein weiteres Beispiel wären die verschiedenen Werte für die {{cssxref("transform")}}-Eigenschaft, wie z. B. `rotate()`.

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

Schauen Sie sich verschiedene Werte der unten aufgeführten Eigenschaften an. Versuchen Sie, CSS-Regeln zu schreiben, die Styling auf verschiedene HTML-Elemente mit den folgenden Funktionen anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradientenwerte
- {{cssxref("color")}}, insbesondere RGB- und HSL-Werte

### @-Regeln

CSS [@-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) (gesprochen "At-Regeln") geben Anweisungen, wie CSS sich verhalten sollte. Eine häufig anzutreffende @-Regel ist `@media`, die verwendet wird, um [Media Queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media Queries verwenden bedingte Logik zum Anwenden von CSS-Styling.

Im folgenden Beispiel definiert das Stylesheet einen standardmäßigen rosa Hintergrund für das `<body>`-Element. Es folgt jedoch eine Media Query, die einen blauen Hintergrund für das `<body>`-Element setzt, wenn das Browserfenster breiter als 30em ist.

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

Sie werden im Kurs auf andere `@-Regeln` stoßen.

### Shorthand-Eigenschaften

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} und {{cssxref("margin")}} werden als **Shorthand-Eigenschaften** bezeichnet. Dies liegt daran, dass Shorthand-Eigenschaften mehrere Werte in einer einzigen Zeile festlegen.

Beispielsweise entspricht diese eine Codezeile:

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
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

ist gleichwertig zu diesen fünf Zeilen:

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

Später im Kurs werden Sie auf viele weitere Beispiele für Shorthand-Eigenschaften stoßen. Probieren Sie jetzt, die oben genannten Deklarationen (oder andere, die Sie vielleicht kennen) in Ihrem eigenen Code aus, um sich mit ihrer Funktionsweise vertraut zu machen.

### CSS-Kommentare

Wie bei jeder Codierungsarbeit ist es best practice, Kommentare in Ihr CSS zu schreiben. Dies hilft Ihnen, sich daran zu erinnern, wie der Code funktioniert, wenn Sie später für Korrekturen oder Verbesserungen zurückkommen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im Beispiel unten markieren Kommentare den Beginn von verschiedenen Abschnitten des Codes. Dies hilft, sich im Code-Base zurechtzufinden, wenn es größer wird. Mit dieser Art von Kommentierung können Sie in Ihrem Code-Editor effizient nach Kommentaren suchen, um einen bestimmten Codeabschnitt zu finden.

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

"Code auskommentieren" ist auch nützlich, um testweise Teile des Codes vorübergehend zu deaktivieren. Im Beispiel unten sind die Regeln für `.special` durch das "Auskommentieren" des Codes deaktiviert.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Versuchen Sie, Kommentare in Ihrem CSS hinzuzufügen.

### Weißraum in CSS

Weißraum bedeutet tatsächliche Leerzeichen, Tabs und neue Zeilen. Genau wie Browser zusätzlichen Weißraum in HTML ignorieren, ignorieren Browser auch zusätzlichen Weißraum innerhalb von CSS. Der Vorteil von Weißraum ist, dass es das Lesen des Codes erleichtert.

Im Beispiel unten hat jede Deklaration (und Regelstart/-ende) ihre eigene Zeile. Dies ist arguably eine gute Art und Weise, CSS zu schreiben. Es erleichtert die Wartung und das Verständnis von CSS.

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

Das nächste Beispiel zeigt das gleiche CSS in einem komprimierteren Format, wobei sämtlicher zusätzlicher Weißraum entfernt wurde. Obwohl die beiden Beispiele gleich funktionieren, ist das unten gezeigte schwerer zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Beachten Sie, dass das Entfernen von einigen Weißräumen Fehler verursachen kann. Eigenschaftsnamen enthalten niemals Leerzeichen, während Eigenschaftswerte, die Weißraum zwischen mehreren Werten erwarten, ungültig sind, wenn dieser Raum entfernt wird. Beispielsweise sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Abstandsfehler? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Name (`padding-left`) hat kein Leerzeichen.

Sie sollten immer sicherstellen, dass Sie von einander getrennte Werte durch mindestens ein Leerzeichen trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als einzelne, ungebrochene Zeichenfolgen zusammen.

Um herauszufinden, wie Abstände CSS brechen können, versuchen Sie, mit den Abständen innerhalb Ihres Test-CSS zu experimentieren.

## Zusammenfassung

In diesem Artikel haben wir uns verschiedene Möglichkeiten angeschaut, mit denen Sie ein Dokument mithilfe von CSS gestalten können. Wir werden dieses Wissen weiterentwickeln, während wir den Rest der Lektionen durchgehen. Sie wissen jedoch bereits jetzt genug, um Text zu stylen und CSS basierend auf verschiedenen Möglichkeiten des Zielens von Elementen im Dokument anzuwenden.

Als nächstes steht eine Herausforderung an, um Ihr neues Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
