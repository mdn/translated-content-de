---
title: Erste Schritte mit CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel nehmen wir ein einfaches HTML-Dokument und wenden CSS darauf an. Dabei lernen wir einige praktische Details der Sprache kennen. Außerdem werden wir die CSS-Syntax-Features überprüfen, die Sie bisher noch nicht betrachtet haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, grundlegende Kenntnisse über den
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a> sowie HTML-Grundlagen (lernen Sie die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>CSS auf ein HTML-Dokument anwenden.</li>
          <li>Praktische Erfahrung beim Schreiben grundlegender CSS-Regeln.</li>
          <li>Arbeitskenntnisse von grundlegenden Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des "Zustands", wie es auf CSS angewendet wird.</li>
          <li>Vertrautheit mit anderen Syntax-Features von CSS wie @regeln, Funktionen, Kurzschreibweise von Eigenschaften und Leerzeichen.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Beginnen mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den untenstehenden Code kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den folgenden Code als `index.html` in einem Ordner auf Ihrem Rechner.

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
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht problemlos Dateien erstellen können, machen Sie sich keine Sorgen – klicken Sie auf die Schaltfläche „Play“ im obigen Live-Beispiel, um es im MDN Playground zu öffnen. Dort können Sie wie weiter unten beschrieben den CSS- und HTML-Code bearbeiten und die kombinierten Ergebnisse live sehen.

## CSS zu unserem Dokument hinzufügen

Das allererste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Ihnen häufig begegnen – externe Stylesheets, interne Stylesheets und Inline-Stile. Schauen wir uns diese nun an.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Endung `.css`. Dies ist die gängigste und nützlichste Methode, um einem Dokument CSS hinzuzufügen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen und alle mit diesem Stylesheet gestalten.

Erstellen Sie eine Datei im selben Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie die folgende Zeile irgendwo innerhalb der {{htmlelement("head")}} des HTML-Dokuments ein:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, indem es das Attribut `rel` verwendet und den Speicherort des Stylesheets als Wert des `href`-Attributs angibt. Sie können testen, dass CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Fügen Sie in Ihrem Code-Editor das Folgende zu Ihrer CSS-Datei hinzu (oder fügen Sie es in das „CSS“-Feld im MDN Playground ein):

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift der Ebene Eins oben im Dokument sollte nun rot sein. Wenn das passiert, herzlichen Glückwunsch – Sie haben erfolgreich CSS auf ein HTML-Dokument angewandt. Wenn es nicht funktioniert, überprüfen Sie sorgfältig, ob Sie alles richtig eingegeben haben.

#### Stylesheets an verschiedenen Orten positionieren

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

Interne Stylesheets befinden sich innerhalb von {{htmlelement("style")}}-Elementen, die innerhalb der HTML-{{htmlelement("head")}} stehen. Erstellen wir jetzt eines.

Fügen Sie in Ihrem HTML-Dokument den folgenden Codeausschnitt irgendwo zwischen den `<head>`- und `</head>`-Tags hinzu:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern und aktualisieren Sie die Seite, und Sie sollten sehen, dass alle Ihre Absätze lila werden.

In einigen Fällen können interne Stylesheets nützlich sein. Zum Beispiel könnten Sie mit einem Content-Management-System arbeiten, bei dem Sie daran gehindert werden, externe CSS-Dateien zu ändern.

Für Websites mit mehr als einer Seite sind interne Stylesheets jedoch weniger effizient als externe Stylesheets. Um einheitliches CSS-Styling auf mehrere Seiten mit internen Stylesheets anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Die Effizienzstrafe überträgt sich auch auf die Wartung der Website. Mit CSS in internen Stylesheets besteht das Risiko, dass sogar eine einfache Styling-Änderung Bearbeitungen an mehreren Webseiten erfordert.

Bevor Sie weitermachen, entfernen Sie das `<style>`-Element und dessen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die ein einzelnes HTML-Element betreffen und im `style`-Attribut enthalten sind. Probieren wir jetzt eine Implementierung aus.

Fügen Sie das `style`-Attribut zum {{htmlelement("span")}}-Element in Ihrem HTML hinzu, sodass es wie folgt aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern und aktualisieren Sie die Seite, und Sie sollten nur den Text innerhalb des `<span>` sehen, der lila und fett gedruckt ist. Versuchen Sie, dem `style`-Attribut einige weitere Deklarationen hinzuzufügen (getrennt durch Semikolons) oder anderen Elementen zusätzliche `style`-Attribute hinzuzufügen.

Nachdem Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wenn möglich.** Es ist eine schlechte Praxis. Erstens ist es die am wenigsten effiziente Implementierung von CSS für die Wartung. Eine Styling-Änderung könnte mehrere Bearbeitungen innerhalb einer einzelnen Webseite erfordern. Zweitens mischt Inline-CSS auch (CSS-)Darstellungscode mit HTML und Inhalt, was alles schwieriger zu lesen und zu verstehen macht. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Möglicherweise müssen Sie auf die Verwendung von Inline-Stilen zurückgreifen, wenn Ihre Arbeitsumgebung sehr einschränkend ist. Zum Beispiel erlaubt Ihnen Ihr CMS möglicherweise nur, den HTML-Body zu bearbeiten. Sie könnten auch eine Menge Inline-Stile in HTML-E-Mails sehen, um die Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen. Es ist auch ziemlich üblich, Inline-Stile zu setzen, wenn Styles dynamisch mit JavaScript angewendet werden.

## Verwendung gängiger Selektoren

In diesem Abschnitt machen wir eine kurze Tour durch einige der gängigeren Arten von Selektoren, die Ihnen begegnen werden.

### HTML-Elemente auswählen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits demonstriert, dass wir ein HTML-Element auswählen und stylen können. Dies tun wir, indem wir einen **Element-Selektor** (auch bekannt als **Typ-Selektor**) ansprechen – dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument auszuwählen, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie Folgendes verwenden:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig auswählen, indem Sie die Selektoren mit einem Komma trennen. Wenn Sie alle Absätze und alle Listenelemente grün machen möchten, würde Ihre Regel so aussehen:

```css
p,
li {
  color: green;
}
```

Probieren Sie dies unten im Beispiel aus (klicken Sie auf „Play“) oder in Ihrer lokalen Kopie:

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

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestylt. Das funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Teilmenge der Elemente auszuwählen, ohne die anderen zu ändern, können Sie dem HTML-Element eine `class` hinzufügen und diese Klasse in Ihrem CSS ansprechen.

1. Fügen Sie in Ihrem HTML-Dokument einem zweiten Listenpunkt ein [class-Attribut](/de/docs/Web/HTML/Global_attributes/class) hinzu. Ihre Liste sieht jetzt so aus:

   ```html
   <ul>
     <li>Item one</li>
     <li class="special">Item two</li>
     <li>Item <em>three</em></li>
   </ul>
   ```

2. In Ihrem CSS können Sie die Klasse `special` ansprechen, indem Sie einen Selektor erstellen, der mit einem Punkt beginnt. Fügen Sie Folgendes zu Ihrer CSS-Datei hinzu:

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

3. Speichern und aktualisieren Sie, um das Ergebnis zu sehen.

Sie können die Klasse `special` jetzt auf andere Elemente auf Ihrer Seite anwenden, die Sie gleich gestalten möchten wie diesen Listenpunkt. Fügen Sie der `<span>` innerhalb des Absatzes die Klasse `special` hinzu, dann laden Sie Ihre Seite neu: Das sollte jetzt ebenfalls orange und fett sein.

### Dinge basierend auf ihrem Standort im Dokument stylen

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, basierend darauf, wo es im Dokument steht. Hierbei können Ihnen eine Reihe von Selektoren helfen. Für den Moment betrachten wir nur ein paar davon. In unserem Dokument gibt es zwei `<em>`-Elemente – eines innerhalb eines Absatzes und das andere innerhalb eines Listenpunkts. Um nur ein `<em>` auszuwählen, das in einem `<li>` enthalten ist, können Sie einen Selektor namens **Nachkommen-Kombinator** verwenden, der aus einem Leerzeichen zwischen zwei anderen Selektoren besteht.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wählt jedes `<em>`-Element aus, das ein Nachkomme eines `<li>` ist. In Ihrem Beispieldokument sollte das `<em>` im dritten Listenpunkt jetzt lila sein, das im Absatz bleibt unverändert.

Etwas anderes, das Sie ausprobieren könnten, ist das Styling eines Absatzes, wenn er direkt hinter einer Überschrift auf gleicher Hierarchieebene im HTML steht. Um dies zu tun, setzen Sie ein `+` (einen **Next-Sibling-Kombinator**) zwischen die Selektoren.

Versuchen Sie, diese Regel ebenfalls zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das Live-Beispiel unten enthält die beiden obigen Regeln. Versuchen Sie, eine Regel hinzuzufügen, die ein `span` rot macht, wenn es sich in einem Absatz befindet. Sie werden wissen, ob Sie es richtig gemacht haben, da das `span` im ersten Absatz rot ist, das im ersten Listenpunkt jedoch unverändert bleibt.

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
> Wie Sie sehen, bietet CSS verschiedene Möglichkeiten, Elemente zu adressieren, und wir haben bisher nur an der Oberfläche gekratzt! Wir werden uns später im Kurs alle diese Selektoren und viele weitere genauer ansehen.

### Dinge basierend auf Zustand stylen

Die letzte Art des Stylings, die wir uns in diesem Tutorial ansehen, ist die Möglichkeit, Dinge basierend auf ihrem Zustand zu gestalten. Ein einfaches Beispiel hierfür ist das Styling von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Element/a) (Anker-)Element ansprechen. Dieses hat verschiedene Zustände, abhängig davon, ob es unbesucht, besucht, in der Schwebe (hover), über die Tastatur fokussiert oder gerade angeklickt wird (aktiviert). Sie können CSS verwenden, um diese verschiedenen Zustände anzusprechen – der CSS-Code unten gestaltet unbesuchte Links rosa und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer ihn mit der Maus überfährt, z.B. indem Sie die Unterstreichung entfernen. Dies wird durch die folgende Regel erreicht:

```css
a:hover {
  text-decoration: none;
}
```

Im Beispiel unten können Sie mit unterschiedlichen Werten für die verschiedenen Zustände eines Links experimentieren. Wir haben die obigen Regeln bereits hinzugefügt und festgestellt, dass die rosa Farbe recht hell und schwer lesbar ist – warum diese nicht zu einer besseren Farbe ändern? Können Sie die Links fett machen?

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

Wir haben die Unterstreichung unseres Links bei Hover entfernt. Sie könnten die Unterstreichung für alle Zustände eines Links entfernen. Es ist jedoch wichtig, daran zu denken, dass Besucher wissen sollen, dass ein Link ein Link ist. Die Unterstreichung beizubehalten, kann ein wichtiger Hinweis für die Nutzer sein, zu erkennen, dass ein Text in einem Absatz anklickbar ist – dies ist das Verhalten, an das sie gewöhnt sind. Wie bei allem in CSS besteht die Möglichkeit, durch Ihre Änderungen das Dokument weniger zugänglich zu machen – wir werden versuchen, auf potenzielle Fallstricke an geeigneten Stellen hinzuweisen.

> [!NOTE]
> Sie werden häufig Hinweise zur [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) in diesen Lektionen und im gesamten MDN finden. Wenn wir von Barrierefreiheit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten für alle verständlich und nutzbar sein müssen. Dies gilt unabhängig davon, ob sie einen Computer mit Maus oder Trackpad verwenden, ein Telefon mit Touchscreen, nur mit der Tastatur navigieren oder einen Screenreader, der den Dokumentinhalt vorliest.

### Selektoren und Kombinatoren kombinieren

Es ist erwähnenswert, dass Sie mehrere Selektoren und Kombinatoren kombinieren können. Zum Beispiel:

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}
```

Sie können auch mehrere Typen kombinieren. Versuchen Sie, dem Code Folgendes hinzuzufügen:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit einer Klasse `special` stylen, das sich in einem `<p>` befindet, das direkt hinter einem `<h1>` steht. Puh! Dies sollte das `<span class="special">span element</span>`-Element in Ihrem Code ansprechen.

Machen Sie sich jetzt keine Sorgen, wenn dies kompliziert erscheint – Sie werden bald ein Gefühl dafür bekommen, wenn Sie mehr CSS schreiben.

## Weitere Syntax-Features von CSS

Da wir nun einige CSS-Features ausprobiert haben, geben wir Ihnen einen Überblick über einige der anderen Syntax-Features von CSS, denen Sie im Kurs begegnen werden. Wenn Sie weitere Details zu einem der Features nachschlagen möchten, können Sie versuchen, den Namen des Features in das Suchfeld oben auf der Seite einzugeben oder im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) zu stöbern.

Um mit den Code-Beispielen zu experimentieren, könnten Sie den bereitgestellten HTML- und CSS-Code zu Ihrem lokalen Beispiel oder der MDN Playground-Instanz hinzufügen, an der Sie oben gearbeitet haben.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

#### Die calc()-Funktion

Ein Beispiel wäre die `calc()`-Funktion, die einfache Berechnungen innerhalb von CSS durchführen kann:

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

Dies wird wie folgt dargestellt:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, die die Werte für die Funktion einschließen. Im obigen Beispiel der `calc()`-Funktion definieren die Werte die Breite dieser Box als 90 % der Breite des umgebenden Blocks minus 30 Pixel.

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

Die Ausgabe des obigen Codes sieht folgendermaßen aus:

{{EmbedLiveSample('Transform_functions', '100%', 200)}}

Schauen Sie sich verschiedene Werte der unten aufgeführten Eigenschaften an. Versuchen Sie, CSS-Regeln zu schreiben, die verschiedene HTML-Elemente mit den folgenden Funktionen stylen:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradient-Werte
- {{cssxref("color")}}, insbesondere rgb- und hsl-Werte

### @-Regeln

CSS [@rules](/de/docs/Web/CSS/CSS_syntax/At-rule) (ausgesprochen „at-Rules“) sind Anweisungen, wie sich CSS verhalten soll. Eine häufige @-Regel, die Ihnen begegnet, ist `@media`, die verwendet wird, um [Media Queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media Queries verwenden bedingte Logik, um CSS-Styling anzuwenden.

Im Beispiel unten definiert das Stylesheet einen standardmäßig rosa Hintergrund für das `<body>`-Element. Es folgt jedoch eine Media Query, die einen blauen Hintergrund auf das `<body>`-Element setzt, wenn die Browseransicht breiter als 30em ist.

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

Weitere `@rules` werden Ihnen während des Kurses begegnen.

### Kurzschreibweisen-Eigenschaften

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} und {{cssxref("margin")}} werden als **Kurzschreibweiseneigenschaften** bezeichnet. Dies liegt daran, dass Kurzschreibweiseneigenschaften mehrere Werte in einer einzigen Zeile setzen.

Zum Beispiel ist diese eine Zeile Code:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

gleichbedeutend mit diesen vier Zeilen Code:

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

ist gleichbedeutend mit diesen fünf Zeilen:

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

Später im Kurs werden Sie auf viele weitere Beispiele für Kurzschreibweiseneigenschaften stoßen. Versuchen Sie vorerst, die obigen Deklarationen (oder andere, die Ihnen bekannt sind) in Ihrem eigenen Code zu verwenden, um sich damit vertrauter zu machen.

### CSS-Kommentare

Wie bei jeder Programmierarbeit ist es best practice, Kommentare in Ihr CSS zu schreiben. Dies hilft Ihnen, sich zu erinnern, wie der Code funktioniert, wenn Sie später darauf zurückkommen, um Fehler zu beheben oder Verbesserungen vorzunehmen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im Beispiel unten markieren Kommentare den Beginn von verschiedenen Codeabschnitten. Das hilft, die Codebasis leichter zu navigieren, wenn sie größer wird. Mit solchen Kommentierungen wird die Suche nach Kommentaren in Ihrem Code-Editor zu einer effizienten Möglichkeit, einen bestimmten Abschnitt zu finden.

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

„Auskommentieren“ von Code ist auch nützlich, um Teile des Codes vorübergehend für Tests zu deaktivieren. Im Beispiel unten werden die Regeln für `.special` durch „Auskommentieren“ des Codes deaktiviert.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Versuchen Sie, Kommentare in Ihr CSS aufzunehmen.

### Leerzeichen in CSS

„Leerzeichen“ bedeutet tatsächliche Leerzeichen, Tabs und neue Zeilen. Genau wie Browser zusätzliche Leerzeichen in HTML ignorieren, ignorieren Browser zusätzliche Leerzeichen innerhalb von CSS. Der Vorteil von Leerzeichen besteht darin, dass sie den Code leichter lesbar machen.

Im Beispiel unten hat jede Deklaration (und der Anfang/Ende der Regel) eine eigene Zeile. Dies ist möglicherweise eine gute Möglichkeit, CSS zu schreiben. Es erleichtert die Wartung und das Verständnis des Codes.

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

Das nächste Beispiel zeigt dasselbe CSS in einem kompakteren Format, bei dem alle zusätzlichen Leerzeichen entfernt wurden. Obwohl die beiden Beispiele genauso funktionieren, ist das untere schwieriger zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Beachten Sie, dass das Entfernen einiger Leerzeichen Fehler verursachen kann. Eigenschaftsnamen enthalten niemals Leerzeichen, während Eigenschaftswerte, die Leerzeichen zwischen mehreren Werten erwarten, ungültig werden, wenn dieses entfernt wird. Zum Beispiel sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Leerzeichenfehler? Erstens wird `0auto` nicht als gültiger Wert für die Eigenschaft `margin` erkannt. Der Eintrag `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der richtige Eigenschaftsname (`padding-left`) enthält ein Leerzeichen darin.

Sie sollten immer sicherstellen, dass Sie einzelne Werte durch mindestens ein Leerzeichen trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als ungebrochene Zeichenfolgen zusammen.

Um herauszufinden, wie Leerzeichen CSS brechen können, versuchen Sie, mit Leerzeichen in Ihrem Test-CSS zu experimentieren.

## Zusammenfassung

In diesem Artikel haben wir uns eine Reihe von Möglichkeiten angesehen, wie Sie mit CSS ein Dokument gestalten können. Wir werden dieses Wissen weiterentwickeln, während wir die weiteren Lektionen durchgehen. Aber Sie wissen jetzt bereits genug, um Text zu stylen und CSS basierend auf verschiedenen Möglichkeiten zur Adressierung von Elementen im Dokument anzuwenden.

Als Nächstes geben wir Ihnen eine Herausforderung, um Ihr neu erlangtes Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
