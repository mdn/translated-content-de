---
title: Einstieg in CSS
short-title: Erste Schritte mit CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden. Dabei lernen wir einige praktische Details der Sprache kennen. Wir werden auch die CSS-Syntax-Features besprechen, die Sie bisher noch nicht betrachtet haben.

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
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Anwenden von CSS auf ein HTML-Dokument.</li>
          <li>Praktische Erfahrung im Schreiben grundlegender CSS.</li>
          <li>Arbeitswissen über fundamentale Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des Zustands, wie es auf CSS angewendet wird.</li>
          <li>Vertrautheit mit weiteren CSS-Syntax-Funktionen wie At-Regeln, Funktionen, Kurzschreibweise von Eigenschaften und Leerzeichen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beginnend mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den Code unten kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den unten stehenden Code als `index.html` in einem Ordner auf Ihrem Gerät.

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
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen — klicken Sie auf die Schaltfläche "Play" im Live-Beispiel oben, um es im MDN Playground zu öffnen. Dort können Sie den CSS- und HTML-Code wie weiter unten angegeben bearbeiten und die kombinierten Ergebnisse live sehen.

## Hinzufügen von CSS zu unserem Dokument

Das allererste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Ihnen häufig begegnen werden — externe Stylesheets, interne Stylesheets und Inline-Stile. Schauen wir uns diese nun an.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Erweiterung `.css`. Dies ist die gebräuchlichste und nützlichste Methode, um CSS in ein Dokument zu bringen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen und alle mit demselben CSS-Stylesheet gestalten.

Erstellen Sie eine Datei im selben Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie die folgende Zeile irgendwo im {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}} Element teilt dem Browser mit, dass wir ein Stylesheet haben, unter Verwendung des Attributs `rel`, und den Ort dieses Stylesheets als Wert des `href` Attributs. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Verwenden Sie Ihren Code-Editor, um das Folgende zu Ihrer CSS-Datei hinzuzufügen (oder fügen Sie es in das "CSS"-Feld im MDN Playground ein):

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift ersten Grades oben im Dokument sollte jetzt rot sein. Wenn das passiert, herzlichen Glückwunsch — Sie haben erfolgreich etwas CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles korrekt eingegeben haben.

#### Stylesheets an verschiedenen Orten lokalisieren

Im obigen Beispiel befindet sich die CSS-Datei im selben Ordner wie das HTML-Dokument, aber Sie können sie auch woanders platzieren und den Pfad anpassen (auf die gleiche Weise wie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets befinden sich innerhalb von {{htmlelement("style")}}-Elementen, die in den HTML-{{htmlelement("head")}} gehen. Lassen Sie uns jetzt eines erstellen.

Fügen Sie in Ihrem HTML-Dokument das folgende Snippet irgendwo zwischen den `<head>` und `</head>`-Tags ein:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern und aktualisieren Sie, und Sie sollten sehen, dass alle Ihre Absätze lila werden.

Unter bestimmten Umständen können interne Stylesheets nützlich sein. Zum Beispiel, wenn Sie mit einem Content-Management-System arbeiten, das Sie daran hindert, externe CSS-Dateien zu ändern.

Für Websites mit mehr als einer Seite sind interne Stylesheets jedoch weniger effizient als externe Stylesheets. Um einheitliches CSS-Styling auf mehrere Seiten mit internen Stylesheets anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Der Effizienzverlust setzt sich auch bei der Wartung der Website fort. Mit CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Stiländerung Bearbeitungen mehrerer Webseiten erfordert.

Bevor Sie fortfahren, entfernen Sie das `<style>`-Element und seinen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die ein einzelnes HTML-Element beeinflussen und innerhalb eines `style`-Attributs enthalten sind. Versuchen wir nun, eines zu implementieren.

Fügen Sie dem {{htmlelement("span")}}-Element in Ihrem HTML ein `style`-Attribut hinzu, sodass es folgendermaßen aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern und aktualisieren Sie, und Sie sollten sehen, dass nur der Text innerhalb des `<span>` lila und fett wird. Versuchen Sie, einige weitere Deklarationen innerhalb Ihres `style`-Attributs hinzuzufügen (getrennt durch Semikolons) oder einige zusätzliche `style`-Attribute zu anderen Elementen.

Sobald Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wenn möglich.** Es ist eine schlechte Praxis. Erstens ist es die am wenigsten effiziente Implementierung von CSS für die Wartung. Eine Stiländerung könnte mehrere Bearbeitungen innerhalb einer einzelnen Webseite erfordern. Zweitens mischt Inline-CSS auch (CSS-)präsentationsbezogenen Code mit HTML und Inhalt, was alles schwerer lesbar und verständlich macht. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Möglicherweise müssen Sie auf die Verwendung von Inline-Stilen zurückgreifen, wenn Ihre Arbeitsumgebung sehr restriktiv ist. Zum Beispiel erlaubt Ihnen Ihr CMS möglicherweise nur das Bearbeiten des HTML-Körpers. Sie sehen möglicherweise auch viele Inline-Stile in HTML-E-Mails, um Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen. Es ist auch ziemlich üblich, Inline-Stile zu setzen, wenn Stile dynamisch mit JavaScript angewendet werden.

## Verwendung gängiger Selektoren

In diesem Abschnitt machen wir einen kurzen Rundgang durch einige der häufigeren Arten von Selektoren, auf die Sie stoßen werden.

### HTML-Elemente auswählen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits gezeigt, dass wir ein HTML-Element anvisieren und stylen können. Wir tun dies, indem wir einen **Elementselektor** (auch bekannt als **Typselektor**) anvisieren — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument zu adressieren, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie Folgendes verwenden:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig anvisieren, indem Sie die Selektoren mit einem Komma trennen. Wenn Sie alle Absätze und alle Listenelemente grün haben möchten, würde Ihre Regel folgendermaßen aussehen:

```css
p,
li {
  color: green;
}
```

Probieren Sie dies im folgenden Beispiel (klicken Sie auf "Play") oder in Ihrer lokalen Kopie aus:

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

1. Fügen Sie in Ihrem HTML-Dokument einem zweiten Listenelement ein [class-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) hinzu. Ihre Liste sieht jetzt so aus:

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

Sie können jetzt die Klasse `special` auf andere Elemente auf Ihrer Seite anwenden, die dasselbe Aussehen wie dieses Listenelement haben sollen. Fügen Sie dem `<span>` innerhalb des Absatzes eine Klasse `special` hinzu und laden Sie Ihre Seite neu: Es sollte auch jetzt orange und fett sein.

### Styling von Elementen basierend auf ihrer Position im Dokument

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, basierend darauf, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen dabei helfen können, aber vorerst werden wir uns nur ein paar ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines innerhalb eines Absatzes und das andere innerhalb eines Listenelements. Um nur ein `<em>` auszuwählen, das in einem `<li>`-Element verschachtelt ist, können Sie einen Selektor namens **Nachkommenschafts-Kombinator** verwenden, der die Form eines Leerzeichens zwischen zwei anderen Selektoren annimmt.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wählt jedes `<em>`-Element aus, das ein Nachkomme eines `<li>` ist. Im Beispiel-Dokument sollten Sie feststellen, dass das `<em>` im dritten Listenelement jetzt lila ist, aber das im Absatz bleibt unverändert.

Etwas anderes, das Sie vielleicht ausprobieren möchten, ist das Styling eines Absatzes, wenn er direkt nach einer Überschrift auf derselben Hierarchieebene im HTML kommt. Dafür wird ein `+` (ein **benachbarter-Kombinator**) zwischen den Selektoren platziert.

Versuchen Sie, auch diese Regel zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das Live-Beispiel unten enthält die beiden obigen Regeln. Versuchen Sie, eine Regel hinzuzufügen, um ein span rot zu machen, wenn es sich in einem Absatz befindet. Sie werden wissen, dass Sie es richtig gemacht haben, weil das span im ersten Absatz rot sein wird, aber das im ersten Listenelement wird sich nicht ändern.

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
> Wie Sie sehen, gibt uns CSS mehrere Möglichkeiten, Elemente anzusprechen, und wir haben bisher nur an der Oberfläche gekratzt! Wir werden uns alle diese Selektoren und viele weitere später im Kurs genauer ansehen.

### Styling von Elementen basierend auf ihrem Zustand

Die letzte Art des Stylings, die wir in dieser Anleitung betrachten werden, ist die Möglichkeit, Elemente basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel dafür ist beim Styling von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) (Anker-) Element anvisieren. Dieses hat verschiedene Zustände, je nachdem, ob es unbesucht, besucht, mit der Maus darübergefahren, über die Tastatur fokussiert oder im Prozess des Klickens (aktiviert) ist. Sie können CSS verwenden, um diese verschiedenen Zustände anzusprechen — das unten stehende CSS stylt unbesuchte Links pink und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer darüberfährt, zum Beispiel indem Sie das Unterstreichen entfernen, was durch die nächste Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im folgenden Beispiel können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links spielen. Wir haben die obigen Regeln hinzugefügt und erkennen jetzt, dass die pinke Farbe ziemlich hell und schwer zu lesen ist — warum nicht in eine bessere Farbe ändern? Können Sie die Links fett machen?

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

Wir haben das Unterstreichen unseres Links beim Hover entfernt. Sie könnten das Unterstreichen aus allen Zuständen eines Links entfernen. Es ist jedoch erwähnenswert, dass Sie in einer echten Website sicherstellen möchten, dass Besucher wissen, dass es sich bei einem Link um einen Link handelt. Das Beibehalten des Unterstreichens kann ein wichtiges Indiz für Menschen sein, um zu erkennen, dass ein Text innerhalb eines Absatzes angeklickt werden kann — dies ist das Verhalten, an das sie gewöhnt sind. Wie bei allem in CSS besteht das Potenzial, das Dokument durch Ihre Änderungen weniger zugänglich zu machen — wir werden versuchen, potenzielle Fallstricke an geeigneten Stellen hervorzuheben.

> [!NOTE]
> In diesen Lektionen und über MDN hinweg werden Sie oft Hinweise auf [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) sehen. Wenn wir über Barrierefreiheit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten für alle verständlich und benutzbar sein sollen, unabhängig davon, ob sie einen Computer mit Maus oder Trackpad, ein Handy mit Touchscreen verwenden, nur mit der Tastatur navigieren oder über einen Screenreader, der den Inhalt des Dokuments vorliest.

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

Sie können mehrere Typen auch kombinieren. Versuchen Sie, Folgendes in Ihrem Code hinzuzufügen:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit einer Klasse `special` stylen, welche sich in einem `<p>` befindet, das direkt nach einem `<h1>` kommt. Puh! Dies sollte das `<span class="special">span element</span>` Element in Ihrem Code anvisieren.

Keine Sorge, wenn dies im Moment kompliziert erscheint — Sie werden es bald in den Griff bekommen, wenn Sie mehr CSS schreiben.

## Weitere CSS-Syntax-Features

Nachdem wir ein paar CSS-Funktionen durchgespielt haben, geben wir Ihnen eine grobe Übersicht über einige der anderen CSS-Syntax-Features, die Ihnen im Laufe des Kurses begegnen werden. Wenn Sie mehr Details zu einem dieser Features wissen möchten, können Sie versuchen, den Namen des Features in das Suchfeld oben auf dieser Seite einzugeben oder das MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) zu durchsuchen.

Um mit den Code-Snippets in jedem Fall zu experimentieren, könnten Sie das bereitgestellte HTML und CSS zu dem lokalen Beispiel oder MDN Playground-Instanz hinzufügen, an der Sie oben gearbeitet haben.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

#### Die calc() Funktion

Ein Beispiel wäre die `calc()` Funktion, die einfache Mathematik innerhalb von CSS durchführen kann:

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

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im Fall des obigen `calc()`-Beispiels definieren die Werte die Breite dieses Kastens als 90% der Breite des umgebenden Blocks minus 30 Pixel.

#### Transformations-Funktionen

Ein weiteres Beispiel wären die verschiedenen Werte für die {{cssxref("transform")}}-Eigenschaft, wie zum Beispiel `rotate()`.

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

Schauen Sie sich verschiedene Werte von Eigenschaften unten an. Versuchen Sie, CSS-Regeln zu schreiben, die Styling auf verschiedene HTML-Elemente unter Verwendung der folgenden Funktionen anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, besonders Gradient-Werte
- {{cssxref("color")}}, besonders rgb und hsl Werte

### @Regeln

CSS [@Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) (ausgesprochen "at-rules") geben Anweisungen, wie sich CSS verhalten soll. Eine häufige @Regel, die Ihnen wahrscheinlich begegnen wird, ist `@media`, die verwendet wird, um [Media Queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media Queries verwenden bedingte Logik zur Anwendung von CSS-Styling.

Im untenstehenden Beispiel definiert das Stylesheet einen standardmäßigen pinken Hintergrund für das `<body>`-Element. Es folgt jedoch eine Media Query, die einen blauen Hintergrund auf das `<body>`-Element setzt, wenn die Browseransicht breiter als 30em ist.

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

Sie werden im Laufe des Kurses auf weitere `@Regeln` stoßen.

### Kurzschreibweise von Eigenschaften

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, und {{cssxref("margin")}} werden **Kurzschreibweise von Eigenschaften** genannt. Dies liegt daran, dass Kurzschreibweisen-Eigenschaften mehrere Werte in einer einzigen Zeile setzen.

Zum Beispiel, diese eine Zeile Code:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

entspricht diesen vier Zeilen Code:

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

Im Laufe des Kurses werden Ihnen noch viele andere Beispiele von Kurzschreibweise von Eigenschaften begegnen. Für jetzt, versuchen Sie mittels der obigen Deklarationen (oder anderen, die Sie vielleicht kennen) in Ihrem eigenen Code umzustellen, damit Sie besser verstehen, wie sie funktionieren.

### CSS-Kommentare

Wie bei jeder Codierung ist es eine gute Praxis, Kommentare in Ihrem CSS zu schreiben. Das hilft Ihnen später, wenn Sie Verbesserungen oder Korrekturen vornehmen müssen, sich daran zu erinnern, wie der Code funktioniert. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im Beispiel unten markieren Kommentare den Anfang von verschiedenen Code-Abschnitten. Dies hilft, den Quellcode zu navigieren, wenn er größer wird. Mit einer solchen Kommentierung kann das Suchen nach Kommentaren in Ihrem Code-Editor zu einem effizienten Weg werden, einen Abschnitt Code zu finden.

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

"Kommentieren" von Code ist auch nützlich zum vorübergehenden Deaktivieren von Codeabschnitten für Testzwecke. Im folgenden Beispiel sind die Regeln für `.special` durch das "Auskommentieren" des Codes deaktiviert.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Versuchen Sie, Kommentare in Ihr CSS hinzuzufügen.

### Leerzeichen in CSS

Leerzeichen bedeuten tatsächliche Leerzeichen, Tabs und neue Zeilen. So wie Browser überflüssige Leerzeichen in HTML ignorieren, ignorieren sie auch zusätzliche Leerzeichen innerhalb von CSS. Der Vorteil von Leerzeichen ist, dass es den Code einfacher lesbar macht.

Im folgenden Beispiel hat jede Deklaration (und Regelanfang/-ende) ihre eigene Zeile. Dies ist wohl eine gute Art, CSS zu schreiben. Es macht es einfacher, CSS zu warten und zu verstehen.

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

Das nächste Beispiel zeigt das gleiche CSS in einem komprimierteren Format, mit sämtlichen zusätzlichen Leerzeichen entfernt. Auch wenn die beiden Beispiele gleich funktionieren, ist das untere schwerer zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Beachten Sie, dass das Entfernen von einigen Leerzeichen Fehler verursachen kann. Eigenschaftsnamen enthalten niemals Leerzeichen, während Eigenschaftswerte, die Leerzeichen zwischen mehreren Werten erwarten, ungültig werden, wenn dieses entfernt wird. Beispielweise, diese Deklarationen sind gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Fehler bei den Abständen? Erstens, `0auto` wird nicht als gültiger Wert für die Eigenschaft `margin` erkannt. Der Eintrag `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) hat ein Leerzeichen darin eingefügt.

Sie sollten immer sicherstellen, dass Sie verschiedene Werte mindestens durch ein Leerzeichen voneinander trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als einzelne ungebrochene Zeichenketten zusammen.

Um herauszufinden, wie Abstände CSS zerstören können, versuchen Sie, mit den Abständen in Ihrem Test-CSS zu spielen.

## Zusammenfassung

In diesem Artikel haben wir uns eine Reihe von Möglichkeiten angesehen, wie Sie ein Dokument mit CSS stylen können. Wir werden dieses Wissen weiterentwickeln, während wir die restlichen Lektionen durchgehen. Sie wissen jedoch jetzt schon genug, um Text zu stylen und CSS basierend auf verschiedenen Möglichkeiten von Elemente im Dokument anzuwenden.

Als Nächstes geben wir Ihnen eine Herausforderung, um Ihr neu erlerntes Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
