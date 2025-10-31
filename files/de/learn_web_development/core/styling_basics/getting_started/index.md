---
title: Einstieg in CSS
short-title: CSS getting started
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel nehmen wir ein einfaches HTML-Dokument und wenden CSS darauf an, während wir einige praktische Details der Sprache lernen. Wir werden auch einige zusätzliche CSS-Syntax-Features überprüfen, die Sie noch nicht betrachtet haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, Grundkenntnisse im
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (Studie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Anwenden von CSS auf ein HTML-Dokument.</li>
          <li>Praktische Erfahrung im Schreiben von einfachem CSS.</li>
          <li>Arbeitskenntnisse grundlegender Selektoren und Kombinatoren.</li>
          <li>Das Konzept des Zustands in Bezug auf CSS.</li>
          <li>Vertrautheit mit anderen CSS-Syntax-Features wie At-Rules, Funktionen, Kurzform-Eigenschaften und Leerzeichen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beginnen mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den folgenden Code kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den folgenden Code als `index.html` in einem Ordner auf Ihrem Rechner.

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

Dies wird wie folgt angezeigt:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, keine Sorge — klicken Sie auf die Schaltfläche "Play" im Live-Beispiel oben, um es im MDN Playground zu öffnen. Dort können Sie den CSS- und HTML-Code wie weiter unten beschrieben bearbeiten und die kombinierten Ergebnisse live sehen.

## CSS zu unserem Dokument hinzufügen

Das allererste, was wir tun müssen, ist, dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Ihnen häufig begegnen werden — externe Stylesheets, interne Stylesheets und Inline-Stile. Schauen wir uns diese jetzt an.

Wenn Sie diesen Artikel mit dem MDN Playground durchgehen, können Sie die in diesem Abschnitt aufgeführten Schritte nicht in gleicher Weise befolgen wie Personen, die den Code auf ihrem lokalen Computer schreiben. Dies liegt daran, dass der MDN Playground das Hinzufügen von CSS zum HTML implizit im Hintergrund handhabt. Sie sollten diesen Abschnitt dennoch durchlesen, um sich über den Inhalt bewusst zu sein.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Erweiterung `.css`. Dies ist die häufigste und nützlichste Methode, um CSS zu einem Dokument hinzuzufügen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen und alle mit demselben CSS-Stylesheet gestalten.

Erstellen Sie eine Datei im selben Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verlinken, fügen Sie die folgende Zeile irgendwo innerhalb des {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element informiert den Browser darüber, dass wir ein Stylesheet haben, unter Verwendung des `rel`-Attributs, und den Speicherort dieses Stylesheets als Wert des `href`-Attributs. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Fügen Sie mit Ihrem Code-Editor das Folgende zu Ihrer CSS-Datei hinzu:

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die oberste Überschrift im Dokument sollte jetzt rot sein. Wenn das passiert, herzlichen Glückwunsch — Sie haben erfolgreich etwas CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles richtig eingegeben haben.

#### Stylesheets an verschiedenen Orten positionieren

Im obigen Beispiel befindet sich die CSS-Datei im selben Ordner wie das HTML-Dokument, aber Sie könnten sie auch woanders platzieren und den Pfad anpassen (auf die gleiche Weise wie bei [HTML-Bildern](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets befinden sich in {{htmlelement("style")}}-Elementen, die sich innerhalb des HTML-{{htmlelement("head")}} befinden. Lassen Sie uns nun eines erstellen.

Fügen Sie in Ihrem HTML-Dokument das folgende Snippet irgendwo zwischen den `<head>` und `</head>`-Tags hinzu:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern und aktualisieren Sie die Seite, und Sie sollten sehen, dass alle Ihre Absätze lila werden.

In einigen Fällen können interne Stylesheets nützlich sein. Beispielsweise arbeiten Sie vielleicht mit einem Content-Management-System, bei dem Sie daran gehindert sind, externe CSS-Dateien zu ändern.

Für Websites mit mehr als einer Seite sind interne Stylesheets jedoch weniger effizient als externe Stylesheets. Um gleichmäßiges CSS-Styling für mehrere Seiten mit internen Stylesheets anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Der Effizienzverlust wird auch auf die Wartung der Website übertragen. Mit CSS in internen Stylesheets besteht die Gefahr, dass auch nur eine einfache Stiländerung Bearbeitungen an mehreren Webseiten erfordert.

Bevor Sie fortfahren, entfernen Sie das `<style>`-Element und dessen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die ein einzelnes HTML-Element betreffen, und sie werden innerhalb eines `style`-Attributs enthalten. Lassen Sie uns nun eines implementieren.

Fügen Sie dem {{htmlelement("span")}}-Element in Ihrem HTML ein `style`-Attribut hinzu, sodass es wie folgend aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern und aktualisieren Sie die Seite, und Sie sollten sehen, dass nur der Text innerhalb des `<span>`-Tags lila und fett wird. Versuchen Sie, einige weitere Deklarationen innerhalb Ihres `style`-Attributs hinzuzufügen (getrennt durch Semikolons), oder einige zusätzliche `style`-Attribute zu anderen Elementen hinzuzufügen.

Sobald Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie die Verwendung von CSS auf diese Weise, wenn möglich.** Es ist eine schlechte Praxis. Erstens ist es die am wenigsten effiziente Implementierung von CSS für die Wartung. Eine Stiländerung könnte mehrfache Bearbeitungen innerhalb einer einzigen Webseite erfordern. Zweitens vermischt inline CSS auch (CSS-)Präsentationscode mit HTML und Inhalt, was alles schwieriger lesbar und verständlich macht. Durch das Trennen von Code und Inhalt wird die Wartung für alle, die an der Website arbeiten, erleichtert.

Sie müssen möglicherweise auf Inline-Stile zurückgreifen, wenn Ihre Arbeitsumgebung sehr restriktiv ist. Vielleicht erlaubt Ihr CMS Ihnen beispielsweise nur, den HTML-Body zu bearbeiten. Sie werden möglicherweise auch viele Inline-Stile in HTML-E-Mails sehen, um die Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen. Es ist auch ziemlich häufig, Inline-Stile beim dynamischen Anwenden von Stil mit JavaScript zu setzen.

## Verwendung gemeinsamer Selektoren

In diesem Abschnitt machen wir einen kurzen Rundgang durch einige der häufigsten Selektortypen, die Ihnen begegnen werden.

### HTML-Elemente auswählen

Indem wir unsere Überschrift rot machen, haben wir bereits gezeigt, dass wir ein HTML-Element gezielt anvisieren und gestalten können. Dies tun wir, indem wir einen **Elementselektor** (auch bekannt als **Typselektor**) verwenden — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument zu targetieren, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie verwenden:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig anvisieren, indem Sie die Selektoren mit einem Komma trennen. Wenn Sie alle Absätze und alle Listenelemente grün machen möchten, würde Ihre Regel folgendermaßen aussehen:

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

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen stilisiert. Dies funktioniert solange, wie Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Teilmenge der Elemente auszuwählen, ohne die anderen zu ändern, können Sie eine `class` zu Ihrem HTML-Element hinzufügen und diese Klasse in Ihrem CSS gezielt anvisieren.

1. Fügen Sie in Ihrem HTML-Dokument dem zweiten Listenelement ein [class-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) hinzu. Ihre Liste sieht jetzt wie folgt aus:

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

3. Speichern und aktualisieren Sie die Seite, um das Ergebnis zu sehen.

Sie können nun die Klasse `special` zu anderen Elementen auf Ihrer Seite anwenden, die denselben Stil wie dieses Listenelement haben sollen. Geben Sie dem `<span>` innerhalb des Absatzes eine Klasse von `special`, laden Sie dann Ihre Seite neu: Es sollte jetzt auch orange und fett sein.

### Gestaltung von Elementen basierend auf ihrer Position im Dokument

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, basierend darauf, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen hier helfen können, aber wir werden uns zunächst nur ein paar ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente - eines innerhalb eines Absatzes und das andere innerhalb eines Listenelements. Um lediglich ein `<em>`, das innerhalb eines `<li>`-Elements verschachtelt ist, auszuwählen, können Sie einen Selektor namens **Nachkommenschafts-Kombinator** verwenden, der zwischen zwei anderen Selektoren in Form eines Leerzeichens steht.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wählt jedes `<em>`-Element aus, das ein Nachkomme eines `<li>` ist. In Ihrem Beispieldokument sollte daher das `<em>` im dritten Listenelement jetzt lila sein, während das im Absatz unverändert bleibt.

Etwas anderes, das Sie vielleicht ausprobieren möchten, ist das Gestalten eines Absatzes, wenn er direkt nach einer Überschrift auf derselben Hierarchieebene im HTML kommt. Dazu platzieren Sie zwischen den Selektoren ein `+` (einen **Nachfolgendes-Geschwister-Kombinator**).

Versuchen Sie, diese Regel ebenfalls in Ihr Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das folgende Live-Beispiel enthält die beiden obigen Regeln. Versuchen Sie, eine Regel hinzuzufügen, um ein Span rot zu färben, wenn es innerhalb eines Absatzes steht. Sie werden wissen, ob Sie es richtig gemacht haben, weil das Span im ersten Absatz rot wird, aber das im ersten Listenelement keine Farbänderung aufweist.

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
> Wie Sie sehen, gibt uns CSS mehrere Möglichkeiten, Elemente zu targetieren, und wir haben bisher nur an der Oberfläche gekratzt! Wir werden alle diese Selektoren und viele andere später im Kurs genauer ansehen.

### Gestaltung von Elementen basierend auf ihrem Zustand

Der letzte Typ der Gestaltung, den wir in diesem Tutorial betrachten werden, ist die Fähigkeit, Elemente basierend auf ihrem Zustand zu gestalten. Ein einfaches Beispiel dafür ist das Gestalten von Links. Wenn wir einen Link gestalten, müssen wir das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) (Anker-)Element gezielt anvisieren. Dieses hat verschiedene Zustände, abhängig davon, ob es unbesucht, besucht, überfahren, über die Tastatur fokussiert oder im Prozess des Klickens (aktiviert) wird. Sie können CSS verwenden, um diese verschiedenen Zustände zu targetieren — das untenstehende CSS gestaltet unbesuchte Links pink und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer mit der Maus darüber fährt, beispielsweise indem Sie das Unterstreichen entfernen, was durch die folgende Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im untenstehenden Beispiel können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links spielen. Wir haben die oben genannten Regeln darauf angewendet und festgestellt, dass die pinke Farbe ziemlich hell und schwer lesbar ist — warum das nicht in eine bessere Farbe ändern? Können Sie die Links fett machen?

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

Wir haben das Unterstreichen auf unserem Link beim Überfahren entfernt. Sie könnten das Unterstreichen aus allen Zuständen eines Links entfernen. Es ist jedoch wichtig, sich daran zu erinnern, dass Sie sicherstellen möchten, dass Besucher wissen, dass ein Link ein Link ist — Lassen Sie das Unterstreichen als wichtigen Hinweis bestehen, damit Menschen leicht erkennen, dass ein Text in einem Absatz klickbar ist — das ist das Verhalten, an das sie gewöhnt sind. Wie immer bei CSS besteht das Potenzial, das Dokument mit Ihren Änderungen weniger zugänglich zu machen — wir werden versuchen, potenzielle Fallstricke an geeigneten Stellen aufzuzeigen.

> [!NOTE]
> Sie werden oft auf den Begriff [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) in diesen Lektionen und auf der gesamten MDN stoßen. Wenn wir über Barrierefreiheit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten für alle verständlich und benutzbar sein müssen — sei es, dass sie mit einem Computer mit Maus oder Trackpad, einem Telefon mit Touchscreen, nur mit der Tastatur oder mit einem Screenreader, der den Dokumenteninhalt vorliest, navigieren.

### Kombination von Selektoren und Kombinatoren

Es ist es wert zu beachten, dass Sie mehrere Selektoren und Kombinatoren zusammen kombinieren können. Zum Beispiel:

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

Dies wird jedes Element mit einer Klasse von `special` gestalten, das sich innerhalb eines `<p>` befindet, das direkt nach einem `<h1>` kommt. Puh! Dies sollte das `<span class="special">Span-Element</span>` in Ihrem Code targetieren.

Kein Grund zur Sorge, wenn das im Moment kompliziert erscheint — man bekommt schnell den Dreh raus, während man mehr CSS schreibt.

## Andere CSS-Syntax-Features

Nachdem wir mit einigen CSS-Funktionen gespielt haben, geben wir Ihnen einen Überblick über einige andere CSS-Syntax-Features, denen Sie im Verlauf des Kurses begegnen werden. Wenn Sie mehr Details zu einem dieser Themen nachschlagen möchten, versuchen Sie, den Funktionsnamen in das Suchfeld oben auf dieser Seite einzugeben, oder durchsuchen Sie das MDN [CSS-Referenz](/de/docs/Web/CSS/Reference).

Um mit den Code-Schnipseln in jedem Fall zu experimentieren, können Sie das bereitgestellte HTML und CSS zu dem lokalen Beispiel oder der MDN Playground-Instanz hinzufügen, an der Sie oben gearbeitet haben.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die in Form einer Funktion vorliegen.

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

Dies wird wie folgt wiedergegeben:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, die die Werte für die Funktion einschließen. Im obigen `calc()`-Beispiel definieren die Werte die Breite dieses Blocks als 90% der Breite des umgebenden Blocks minus 30 Pixel.

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

Suchen Sie nach verschiedenen Werten der unten aufgeführten Eigenschaften. Versuchen Sie, CSS-Regeln zu schreiben, die Styling auf verschiedene HTML-Elemente anwenden, indem Sie die folgenden Funktionen verwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradient-Werte
- {{cssxref("color")}}, insbesondere RGB- und HSL-Werte

### @regeln

CSS [@regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) (ausgesprochen "at-rules") geben Anweisungen dafür, wie sich CSS verhalten soll. Eine häufige @regel, der Sie wahrscheinlich begegnen werden, ist `@media`, die verwendet wird, um [media queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media-Queries verwenden logische Bedingungen für die Anwendung von CSS-Styling.

Im folgenden Beispiel definiert das Stylesheet einen standardmäßigen rosa Hintergrund für das `<body>`-Element. Eine nachfolgende Media-Query legt jedoch fest, dass das `<body>`-Element einen blauen Hintergrund erhält, wenn das Browserfenster breiter als `30em` ist.

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

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} und {{cssxref("margin")}} werden als **Kurzform-Eigenschaften** bezeichnet. Dies liegt daran, dass Kurzform-Eigenschaften mehrere Werte in einer einzigen Zeile setzen.

Beispielsweise entspricht diese eine Zeile Code:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

den folgenden vier Zeilen Code:

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

Später im Kurs werden Sie auf viele andere Beispiele für Kurzform-Eigenschaften stoßen. Probieren Sie jetzt, die obigen Deklarationen (oder andere, die Sie kennen) in Ihrem eigene Code zu verwenden, um sich mit ihrer Funktionsweise vertraut zu machen.

### CSS-Kommentare

Wie bei jeder Codenarbeit ist es beste Praxis, Kommentare in Ihrem CSS zu schreiben. Dies hilft Ihnen, sich zu erinnern, wie der Code funktioniert, wenn Sie später zum Fixen oder dem Hinzufügen von Erweiterungen zurückkommen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im nachfolgenden Beispiel markieren Kommentare den Anfang von jeweils einer Sektion Code. Dies hilft, die Code-Basis zu navigieren, während sie größer wird. Mit solch einer Kommentierung wird das Suchen nach Kommentaren in Ihrem Code-Editor zu einem Weg, effizient eine Sektion des Codes zu finden.

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

"Kommentieren" von Code ist auch nützlich, um vorübergehend Sektionen von Code für Tests zu deaktivieren. Im Beispiel unten sind die Regeln für `.special` durch "Kommentieren" des Codes deaktiviert.

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

Leerzeichen bedeuten tatsächliche spaces, tabs und neue Zeilen. Genau wie Browser überflüssige Leerzeichen in HTML ignorieren, ignorieren Browser auch überflüssige Leerzeichen innerhalb von CSS. Der Vorteil von Leerzeichen besteht darin, dass es das Lesen des Codes erleichtert.

Im Beispiel unten hat jede Deklaration (und Regelanfang / -ende) seine eigene Zeile. Dies ist vermutlich ein guter Weg, CSS zu schreiben. Es macht CSS leichter wartbar und verständlich.

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

Das nächste Beispiel zeigt dasselbe CSS in einem komprimierteren Format, wobei alle zusätzlichen Leerzeichen entfernt wurden. Obwohl die beiden Beispiele gleich funktionieren, ist das unten stehende schwieriger zu lesen.

```css-nolint
body{font:1em/150% "Helvetica","Arial",sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(width>=70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Bedenken Sie, dass einige Änderungen an Leerzeichen zu Fehlern führen können. Eigenschaftsnamen enthalten nie Leerzeichen, während Eigenschaftswerte, die Leerzeichen zwischen mehreren Werten erwarten, ungültig sind, wenn dieses Leerzeichen entfernt wird. Zum Beispiel sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Abstandsfehler? Zuerst wird `0auto` nicht als gültiger Wert für die Eigenschaft `margin` erkannt. Die Eingabe `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft, Der korrekte Eigenschaftsname (`padding-left`) hat keinen Leerraum darin.

Sie sollten immer sicherstellen, dass Sie separate Werte voneinander durch mindestens ein Leerzeichen trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als einzelne, ungebrochene Zeichenfolgen zusammen.

Um herauszufinden, wie Leerzeichen CSS brechen können, versuchen Sie mit Leerzeichen in Ihrem Test-CSS zu experimentieren.

## Zusammenfassung

In diesem Artikel haben wir uns eine Reihe von Möglichkeiten angesehen, wie Sie ein Dokument mit CSS gestalten können. Wir werden dieses Wissen weiterentwickeln, wenn wir durch die restlichen Lektionen gehen. Sie wissen jedoch schon genug, um Text zu gestalten und CSS basierend auf verschiedenen Möglichkeiten, Elemente im Dokument zu targetieren, anzuwenden.

Als Nächstes stellen wir Ihnen eine Herausforderung, um Ihr neu erworbenes Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
