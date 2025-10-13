---
title: Einstieg in CSS
short-title: Einführung in CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel werden wir Ihnen zeigen, wie Sie ein einfaches HTML-Dokument erstellen und CSS darauf anwenden können, wobei Sie einige praktische Details der Sprache lernen. Wir werden auch einige zusätzliche CSS-Syntaxmerkmale besprechen, die Sie bisher noch nicht gesehen haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, Grundkenntnisse im
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Arbeiten mit Dateien</a> und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Anwenden von CSS auf ein HTML-Dokument.</li>
          <li>Praktische Erfahrung im Schreiben von einfachem CSS.</li>
          <li>Anwendungswissen über grundlegende Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des Zustands, wie es in CSS angewendet wird.</li>
          <li>Vertrautheit mit weiteren CSS-Syntaxmerkmalen wie At-Rules, Funktionen, Kurzschreibweise von Eigenschaften und Leerzeichen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beginnend mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den untenstehenden Code kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den Code unten als `index.html` in einem Ordner auf Ihrem Computer.

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
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen — klicken Sie im oben eingebetteten Beispiel auf die Schaltfläche "Play", um es im MDN Playground zu öffnen. Dort können Sie den CSS- und HTML-Code wie weiter unten beschrieben bearbeiten und die kombinierten Ergebnisse live sehen.

## Hinzufügen von CSS zu unserem Dokument

Das allererste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Sie häufig antreffen werden — externe Stylesheets, interne Stylesheets und Inline-Stile. Schauen wir uns diese jetzt an.

Wenn Sie diesen Artikel mit dem MDN Playground durcharbeiten, können Sie die in diesem Abschnitt beschriebenen Schritte nicht auf die gleiche Weise ausführen wie die Personen, die den Code auf ihren lokalen Computern schreiben. Dies liegt daran, dass MDN Playground das Hinzufügen des CSS zum HTML im Hintergrund impliziert behandelt. Sie sollten den Abschnitt jedoch trotzdem durchlesen, um sich des Inhalts bewusst zu sein.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Endung `.css`. Dies ist die gebräuchlichste und nützlichste Methode, um CSS zu einem Dokument hinzuzufügen. Sie können eine einzige CSS-Datei mit mehreren Webseiten verknüpfen, um alle mit demselben CSS-Stylesheet zu stylen.

Erstellen Sie eine Datei im selben Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie folgende Zeile irgendwo im {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, über das `rel`-Attribut, und den Speicherort dieses Stylesheets als Wert des `href`-Attributs. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Verwenden Sie Ihren Code-Editor, um Folgendes zu Ihrer CSS-Datei hinzuzufügen:

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift der ersten Ebene am oberen Rand des Dokuments sollte jetzt rot sein. Wenn das passiert, herzlichen Glückwunsch — Sie haben erfolgreich CSS auf ein HTML-Dokument angewendet. Falls nicht, überprüfen Sie sorgfältig, ob Sie alles richtig eingegeben haben.

#### Lokalisieren von Stylesheets an verschiedenen Orten

Im obigen Beispiel befindet sich die CSS-Datei im selben Ordner wie das HTML-Dokument, Sie könnten sie aber auch woanders platzieren und den Pfad anpassen (auf die gleiche Weise wie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets sind in {{htmlelement("style")}}-Elementen enthalten, die innerhalb des HTML {{htmlelement("head")}} platziert sind. Lassen Sie uns jetzt eins erstellen.

Fügen Sie in Ihrem HTML-Dokument das folgende Snippet irgendwo zwischen den `<head>`- und `</head>`-Tags hinzu:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern und aktualisieren Sie die Seite, und Sie sollten sehen, wie alle Ihre Absätze lila werden.

In einigen Fällen können interne Stylesheets nützlich sein. Beispielsweise, wenn Sie mit einem Content-Management-System arbeiten, bei dem Sie daran gehindert werden, externe CSS-Dateien zu ändern.

Für Websites mit mehr als einer Seite sind interne Stylesheets jedoch weniger effizient als externe. Um mit internen Stylesheets einheitliches CSS-Styling auf mehrere Seiten anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Das Effizienzproblem überträgt sich auch auf die Wartung der Website. Mit CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Stiländerung Änderungen an mehreren Webseiten erfordern kann.

Bevor Sie weitermachen, entfernen Sie das `<style>`-Element und seinen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die ein einzelnes HTML-Element betreffen und in einem `style`-Attribut enthalten sind. Versuchen wir jetzt, eines zu implementieren.

Fügen Sie dem {{htmlelement("span")}}-Element in Ihrem HTML ein `style`-Attribut hinzu, sodass es folgendermaßen aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern und aktualisieren Sie, und Sie sollten sehen, dass nur der Text innerhalb des `<span>` lila und fett wird. Versuchen Sie, einige weitere Deklarationen in Ihr `style`-Attribut einzufügen (getrennt durch Semikolons), oder fügen Sie weiteren Elementen zusätzliche `style`-Attribute hinzu.

Sobald Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie nach Möglichkeit die Verwendung von CSS auf diese Weise.** Es ist eine schlechte Praxis. Erstens ist es die ineffizienteste Implementierung von CSS in Bezug auf die Wartung. Eine Styling-Änderung könnte mehrere Bearbeitungen innerhalb einer einzigen Webseite erfordern. Zweitens mischt Inline-CSS auch (CSS-)Präsentationscode mit HTML und Inhalt, was alles schwieriger zu lesen und zu verstehen macht. Das Trennen von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Möglicherweise müssen Sie auf die Verwendung von Inline-Stilen zurückgreifen, wenn Ihre Arbeitsumgebung sehr restriktiv ist. Beispielsweise, wenn Ihr CMS Ihnen nur erlaubt, den HTML-Körper zu bearbeiten. Sie könnten auch viele Inline-Stile in HTML-E-Mails sehen, um die Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen. Es ist auch ziemlich üblich, Inline-Stile zu setzen, wenn Styles dynamisch mit JavaScript angewendet werden.

## Verwenden gängiger Selektoren

In diesem Abschnitt machen wir eine kurze Tour durch einige der häufigeren Selektortypen, denen Sie begegnen werden.

### HTML-Elemente auswählen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits demonstriert, dass wir ein HTML-Element ansprechen und stylen können. Dies tun wir, indem wir einen **Element-Selektor** (auch als **Typ-Selektor** bekannt) verwenden — das ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument auszuwählen, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie Folgendes verwenden:

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

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestylt. Dies funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Teilmenge der Elemente auszuwählen, ohne die anderen zu ändern, können Sie Ihrem HTML-Element eine `class` hinzufügen und diese Klasse in Ihrem CSS ansprechen.

1. Fügen Sie in Ihrem HTML-Dokument ein [class-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) zum zweiten Listenelement hinzu. Ihre Liste sieht nun so aus:

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

Sie können jetzt die Klasse `special` auf andere Elemente auf Ihrer Seite anwenden, die das gleiche Aussehen wie dieses Listenelement haben sollen. Fügen Sie dem `<span>` im Absatz die Klasse `special` hinzu und laden Sie Ihre Seite neu: Es sollte jetzt ebenfalls orange und fett sein.

### Stil von Elementen basierend auf ihrer Position im Dokument

Es gibt Zeiten, in denen Sie möchten, dass ein Element anders aussieht, je nachdem, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen hier helfen können, aber für jetzt werden wir uns nur ein paar ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines innerhalb eines Absatzes und das andere innerhalb eines Listenelements. Um nur ein `<em>` auszuwählen, das in einem `<li>`-Element verschachtelt ist, können Sie einen Selektor namens **Nachkommenschafts-Kombinator** verwenden, der die Form eines Leerzeichens zwischen zwei anderen Selektoren annimmt.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wählt jedes `<em>`-Element aus, das ein Nachkomme eines `<li>` ist. In Ihrem Beispieldokument sollten Sie feststellen, dass das `<em>` im dritten Listenelement jetzt lila ist, das im Absatz jedoch unverändert bleibt.

Etwas anderes, das Sie ausprobieren könnten, ist das Styling eines Absatzes, wenn er direkt nach einer Überschrift auf derselben Ebene in der HTML-Hierarchie folgt. Dazu setzen Sie ein `+` (einen **nächster-Geschwister-Kombinator**) zwischen die Selektoren.

Versuchen Sie, diese Regel ebenfalls zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das unten stehende Live-Beispiel enthält die beiden oben genannten Regeln. Versuchen Sie, eine Regel hinzuzufügen, um ein `span` rot zu machen, wenn es sich in einem Absatz befindet. Sie werden wissen, ob Sie es richtig gemacht haben, weil das `span` im ersten Absatz rot wird, aber das im ersten Listenelement wird sich nicht ändern.

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
> Wie Sie sehen können, gibt uns CSS mehrere Möglichkeiten, Elemente zu adressieren, und wir haben bisher nur an der Oberfläche gekratzt! Wir werden zu einem späteren Zeitpunkt im Kurs einen genaueren Blick auf all diese Selektoren und viele mehr werfen.

### Styling von Elementen basierend auf ihrem Zustand

Die letzte Art von Styling, die wir uns in diesem Tutorial ansehen werden, ist die Möglichkeit, Elemente basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel dafür ist das Styling von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) (Anker-)Element ansprechen. Dieses hat unterschiedliche Zustände, je nachdem, ob es unbesucht, besucht, per Mauszeiger darüber hinaus navigiert, über die Tastatur fokussiert oder im Prozess des Klickens (aktiviert) wird. Sie können CSS verwenden, um diese unterschiedlichen Zustände zu adressieren — das untenstehende CSS stylt unbesuchte Links rosa und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer mit der Maus darüber fährt, beispielsweise indem Sie die Unterstreichung entfernen, was mit der nächsten Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im folgenden Beispiel können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links spielen. Wir haben die oben genannten Regeln hinzugefügt, und jetzt erkennen wir, dass die rosa Farbe ziemlich hell und schwer zu lesen ist — warum nicht in eine bessere Farbe ändern? Können Sie die Links fett machen?

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

Wir haben die Unterstreichung bei unserem Link bei Hover entfernt. Sie könnten die Unterstreichung von allen Zuständen eines Links entfernen. Es ist jedoch daran zu denken, dass Sie in einer realen Website sicherstellen möchten, dass Besucher wissen, dass ein Link ein Link ist. Die Unterstreichung beizubehalten, kann ein wichtiger Hinweis für die Leute sein, um zu erkennen, dass ein Teil des Textes in einem Absatz angeklickt werden kann — das ist das Verhalten, das sie gewohnt sind. Wie bei allem in CSS gibt es die Möglichkeit, das Dokument mit Ihren Änderungen weniger zugänglich zu machen — wir werden versuchen, potenzielle Fallstricke an passenden Stellen hervorzuheben.

> [!NOTE]
> Sie werden in diesen Lektionen und auf MDN häufig Erwähnungen zur [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) sehen. Wenn wir über Barrierefreiheit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten verständlich und benutzbar für alle sein müssen, egal ob sie einen Computer mit Maus oder Trackpad, ein Telefon mit Touchscreen verwenden, nur mit der Tastatur navigieren oder einen Screenreader verwenden, der den Inhalt des Dokuments vorliest.

### Kombinieren von Selektoren und Kombinatoren

Es ist erwähnenswert, dass Sie mehrere Selektoren und Kombinatoren miteinander kombinieren können. Zum Beispiel:

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}
```

Sie können auch mehrere Typen miteinander kombinieren. Versuchen Sie, Folgendes in Ihren Code einzufügen:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit der Klasse `special` stylen, das sich in einem `<p>` befindet, das direkt nach einem `<h1>` kommt. Puh! Dies sollte das `<span class="special">span element</span>`-Element in Ihrem Code ansprechen.

Machen Sie sich keine Sorgen, wenn das im Moment kompliziert erscheint — Sie werden bald den Dreh raus haben, wenn Sie mehr CSS schreiben.

## Andere CSS-Syntaxmerkmale

Nachdem wir nun einige CSS-Features ausprobiert haben, geben wir Ihnen eine Übersicht über einige der anderen CSS-Syntaxmerkmale, auf die Sie im Verlauf des Kurses stoßen werden. Wenn Sie mehr Details zu einem dieser Merkmale nachschlagen möchten, können Sie versuchen, den Funktionsnamen in das Suchfeld oben auf dieser Seite einzugeben oder im MDN- [CSS-Referenz](/de/docs/Web/CSS/Reference) zu stöbern.

Um mit den Codeschnipseln in jedem Fall zu experimentieren, könnten Sie das bereitgestellte HTML und CSS zum lokalen Beispiel oder zur MDN Playground-Instanz hinzufügen, an der Sie oben gearbeitet haben.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im obigen beispielhaften `calc()`-Beispiel definieren die Werte die Breite dieser Box als 90% der Breite des umgebenden Blocks minus 30 Pixeln.

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

Suchen Sie sich verschiedene Werte der unten aufgeführten Eigenschaften. Versuchen Sie, CSS-Regeln zu schreiben, die Styling für verschiedene HTML-Elemente unter Verwendung der folgenden Funktionen anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradientenwerte
- {{cssxref("color")}}, insbesondere rgb- und hsl-Werte

### @-Regeln

CSS [@-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) (ausgesprochen "at-Regeln") geben Anweisungen, wie sich CSS verhalten soll. Eine häufig verwendete @-Regel, auf die Sie wahrscheinlich stoßen werden, ist `@media`, die zur Erstellung von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwendet wird. Media Queries verwenden bedingte Logik zum Anwenden von CSS-Styling.

Im folgenden Beispiel definiert das Stylesheet ein Standard-pinkes Hintergrundbild für das `<body>`-Element. Eine Media Query folgt jedoch, die ein blaues Hintergrundbild auf das `<body>`-Element setzt, wenn das Browser-Viewport breiter als `30em` ist.

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

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} und {{cssxref("margin")}} werden als **Kurzschreibweise von Eigenschaften** bezeichnet. Dies liegt daran, dass mit Kurzschreibweise mehrere Werte in einer einzigen Zeile festgelegt werden.

Zum Beispiel ist diese eine Codezeile:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

gleichwertig zu diesen vier Codezeilen:

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

ist gleichwertig zu diesen fünf Zeilen:

```css
background-color: red;
background-image: url("bg-graphic.png");
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

Später im Kurs werden Ihnen viele weitere Beispiele für Kurzschreibweise-Eigenschaften begegnen. Versuchen Sie vorerst, die obigen Deklarationen (oder andere, die Sie vielleicht kennen) in Ihrem eigenen Code zu verwenden, um sich damit vertrauter zu machen.

### CSS-Kommentare

Wie bei jeder Codierungsarbeit ist es Best Practice, Kommentare in Ihrem CSS zu schreiben. Dies hilft Ihnen, sich daran zu erinnern, wie der Code funktioniert, wenn Sie später zur Korrektur oder Verbesserung zurückkehren. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im Beispiel unten markieren Kommentare den Beginn von bestimmten Codeabschnitten. Dies hilft, den Code zu navigieren, wenn er größer wird. Mit solchen Kommentaren wird das Suchen nach Kommentaren in Ihrem Code-Editor eine Möglichkeit, effizient einen Codeabschnitt zu finden.

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

"Auskommentieren" von Code ist auch nützlich, um Teile des Codes für Tests vorübergehend zu deaktivieren. Im folgenden Beispiel sind die Regeln für `.special` durch "Auskommentieren" des Codes deaktiviert.

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

Leerzeichen beziehen sich auf tatsächliche Leerzeichen, Tabs und neue Zeilen. Genau wie Browser überflüssige Leerzeichen in HTML ignorieren, ignorieren Browser auch überflüssige Leerzeichen in CSS. Der Vorteil von Leerzeichen besteht darin, dass es den Code leichter lesbar macht.

Im folgenden Beispiel hat jede Deklaration (und Regelanfang/-ende) ihre eigene Zeile. Dies ist arguably eine gute Möglichkeit, CSS zu schreiben. Es erleichtert das Verstehen und die Wartung von CSS.

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

Das nächste Beispiel zeigt dasselbe CSS in einem komprimierteren Format, in dem alle zusätzlichen Leerzeichen entfernt wurden. Obwohl die beiden Beispiele gleich funktionieren, ist das unten gezeigte Beispiel schwieriger zu lesen.

```css-nolint
body{font:1em/150% "Helvetica","Arial",sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(width>=70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Bedenken Sie, dass einige Leerzeichenänderungen Fehler verursachen können. Eigenschaftsnamen enthalten niemals Leerzeichen, während Eigenschaftswerte, die Leerzeichen zwischen mehreren Werten erwarten, ungültig sind, wenn dieses Leerzeichen entfernt wird. Zum Beispiel sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Abstandfehler? Erstens, `0auto` wird nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte darstellen: `0` und `auto`. Zweitens, der Browser erkennt `padding-` nicht als gültige Eigenschaft. Der richtige Eigenschaftsname (`padding-left`) enthält kein Leerzeichen.

Sie sollten immer sicherstellen, dass Sie getrennte Werte zumindest durch ein Leerzeichen trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte zusammen als einzelne ungebrochene Zeichenfolgen.

Um herauszufinden, wie Leerzeichen CSS kaputt machen können, versuchen Sie, mit den Leerzeichen in Ihrem Test-CSS zu spielen.

## Zusammenfassung

In diesem Artikel haben wir verschiedene Möglichkeiten erkundet, wie Sie ein Dokument mit CSS stylen können. Wir werden dieses Wissen weiterentwickeln, während wir die restlichen Lektionen durchlaufen. Sie wissen jetzt jedoch bereits genug, um Text zu stylen und CSS basierend auf verschiedenen Möglichkeiten, Elemente im Dokument zu adressieren, anzuwenden.

Als Nächstes werden wir Ihnen eine Herausforderung geben, um Ihr neu gewonnenes Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
