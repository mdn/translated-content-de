---
title: Einstieg in CSS
short-title: Einführung in CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: c9f602a26092661130a031b7148d696a3ac9802e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In diesem Artikel werden wir Sie dazu bringen, ein einfaches HTML-Dokument zu nehmen und CSS darauf anzuwenden, während Sie einige praktische Details der Sprache lernen. Wir werden auch einige zusätzliche CSS-Syntax-Features besprechen, die Sie bisher noch nicht betrachtet haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">den Umgang mit Dateien</a> und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Einführung in HTML</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Anwenden von CSS auf ein HTML-Dokument.</li>
          <li>Praktische Erfahrung im Schreiben von einfachem CSS.</li>
          <li>Arbeitswissen über grundlegende Selektortypen und Kombinatoren.</li>
          <li>Das Konzept des Zustands im Zusammenhang mit CSS.</li>
          <li>Vertrautheit mit anderen CSS-Syntax-Features wie At-Rules, Funktionen, Kurzschreibweise von Eigenschaften und Leerzeichen.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Beginn mit ein wenig HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den Code unten kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den folgenden Code als `index.html` in einem Ordner auf Ihrem Computer.

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

Dies wird so dargestellt:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht leicht Dateien erstellen können, machen Sie sich keine Sorgen — klicken Sie auf die Schaltfläche „Play“ im obigen Live-Beispiel, um es im MDN Playground zu öffnen. Dort können Sie den CSS- & HTML-Code wie weiter unten beschrieben bearbeiten und die kombinierten Ergebnisse live sehen.

## Hinzufügen von CSS zu unserem Dokument

Das allererste, was wir tun müssen, ist, dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die wir verwenden möchten. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Sie häufig antreffen werden — externe Stylesheets, interne Stylesheets und Inline-Stile. Schauen wir uns diese nun an.

Wenn Sie diesen Artikel mit dem MDN Playground durcharbeiten, können Sie die Schritte in diesem Abschnitt nicht auf die gleiche Weise wie Personen verfolgen, die den Code auf ihren lokalen Computern schreiben. Dies liegt daran, dass der MDN Playground das Hinzufügen des CSS zum HTML implizit im Hintergrund behandelt. Sie sollten jedoch trotzdem den Abschnitt durchlesen, um über den Inhalt informiert zu sein.

### Externe Stylesheets

Ein externes Stylesheet enthält CSS in einer separaten Datei mit einer `.css`-Erweiterung. Dies ist die gebräuchlichste und nützlichste Methode, um CSS zu einem Dokument hinzuzufügen. Sie können eine einzige CSS-Datei mit mehreren Webseiten verknüpfen und alle mit demselben CSS-Stylesheet gestalten.

Erstellen Sie eine Datei im selben Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie die folgende Zeile irgendwo innerhalb des {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, das `rel`-Attribut verwendet, und der Ort dieses Stylesheets als Wert des `href`-Attributs. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Verwenden Sie Ihren Code-Editor, um das Folgende zu Ihrer CSS-Datei hinzuzufügen:

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift erster Ebene oben im Dokument sollte nun rot sein. Wenn das passiert, herzlichen Glückwunsch — Sie haben erfolgreich CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles richtig geschrieben haben.

#### Stylesheets an verschiedenen Orten platzieren

Im obigen Beispiel befindet sich die CSS-Datei im selben Ordner wie das HTML-Dokument, aber Sie könnten es auch woanders platzieren und den Pfad anpassen (auf die gleiche Weise wie [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Interne Stylesheets

Interne Stylesheets sind in {{htmlelement("style")}}-Elementen enthalten, die innerhalb des HTML-{{htmlelement("head")}} gehen. Lassen Sie uns jetzt eines erstellen.

Fügen Sie in Ihrem HTML-Dokument das folgende Snippet zwischen die `<head>`- und `</head>`-Tags ein:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Speichern Sie es und aktualisieren Sie die Seite, und Sie sollten sehen, dass alle Ihre Absätze lila werden.

In einigen Situationen können interne Stylesheets nützlich sein. Zum Beispiel, wenn Sie mit einem Content-Management-System arbeiten, bei dem Sie daran gehindert werden, externe CSS-Dateien zu ändern.

Allerdings sind für Websites mit mehr als einer Seite interne Stylesheets weniger effizient als externe. Um mit internen Stylesheets einheitliches CSS-Styling auf mehrere Seiten anzuwenden, müssen Sie das interne Stylesheet auf jeder Webseite wiederholen. Der Effizienzverlust wirkt sich auch auf die Wartung der Website aus. Mit CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Stiländerung Bearbeitungen mehrerer Webseiten erfordert.

Bevor Sie weitermachen, entfernen Sie das `<style>`-Element und dessen Inhalt aus Ihrem Beispiel-HTML.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die ein einzelnes HTML-Element betreffen und innerhalb eines `style`-Attributs enthalten sind. Lassen Sie uns jetzt einen ausprobieren.

Fügen Sie dem {{htmlelement("span")}}-Element in Ihrem HTML ein `style`-Attribut hinzu, sodass es wie folgt aussieht:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Speichern Sie es und aktualisieren Sie die Seite, und Sie sollten sehen, dass nur der Text innerhalb des `<span>` lila und fett wird. Versuchen Sie, einige weitere Deklarationen innerhalb Ihres `style`-Attributs hinzuzufügen (durch Semikolons getrennt) oder einige zusätzliche `style`-Attribute zu anderen Elementen.

Wenn Sie mit dem Experimentieren fertig sind, entfernen Sie alle Ihre `style`-Attribute.

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wenn möglich.** Es ist schlechte Praxis. Erstens ist es die ineffizienteste Implementierung von CSS für die Wartung. Eine Stiländerung könnte mehrere Bearbeitungen innerhalb einer einzigen Webseite erfordern. Zweitens mischt Inline-CSS auch (CSS) Präsentationscode mit HTML und Inhalt, was alles schwieriger lesbar und verständlich macht. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Möglicherweise müssen Sie auf die Verwendung von Inline-Stilen zurückgreifen, wenn Ihre Arbeitsumgebung sehr restriktiv ist. Beispielsweise erlaubt Ihr CMS Ihnen möglicherweise nur, den HTML-Textkörper zu bearbeiten. Sie sehen möglicherweise auch viele Inline-Stile in HTML-E-Mails, um die Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen. Es ist auch recht häufig, Inline-Stile zu setzen, wenn Sie Stile dynamisch mit JavaScript anwenden.

## Verwendung gängiger Selektoren

In diesem Abschnitt machen wir eine kurze Tour durch einige der häufigeren Arten von Selektoren, auf die Sie stoßen werden.

### HTML-Elemente auswählen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits demonstriert, dass wir ein HTML-Element auswählen und stylen können. Dies tun wir, indem wir einen **Element-Selektor** (auch bekannt als **Typselektor**) verwenden — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument auszuwählen, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie Folgendes verwenden:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig auswählen, indem Sie die Selektoren mit einem Komma trennen. Wenn Sie möchten, dass alle Absätze und alle Listenelemente grün sind, sieht Ihre Regel folgendermaßen aus:

```css
p,
li {
  color: green;
}
```

Probieren Sie dies im unten stehenden Beispiel aus (klicken Sie auf „Play“) oder in Ihrer lokalen Kopie:

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

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestylt. Dies funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Teilmenge der Elemente auszuwählen, ohne die anderen zu ändern, können Sie eine `class` zu Ihrem HTML-Element hinzufügen und diese Klasse in Ihrem CSS ansprechen.

1. Fügen Sie in Ihrem HTML-Dokument einem zweiten Listenelement ein [class-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/class) hinzu. Ihre Liste sieht jetzt so aus:

   ```html
   <ul>
     <li>Item one</li>
     <li class="special">Item two</li>
     <li>Item <em>three</em></li>
   </ul>
   ```

2. In Ihrem CSS können Sie die Klasse `special` ansprechen, indem Sie einen Selektor erstellen, der mit einem Punkt beginnt. Fügen Sie das folgende zu Ihrer CSS-Datei hinzu:

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

3. Speichern und aktualisieren Sie die Seite, um das Ergebnis zu sehen.

Sie können die Klasse `special` nun auf andere Elemente auf Ihrer Seite anwenden, die dasselbe Aussehen wie dieses Listenelement haben sollen. Fügen Sie der `<span>` innerhalb des Absatzes eine Klasse `special` hinzu, und laden Sie Ihre Seite neu: Sie sollte nun ebenfalls orange und fett sein.

### Styling von Elementen basierend auf ihrer Position im Dokument

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, je nachdem, wo es im Dokument steht. Es gibt eine Reihe von Selektoren, die Ihnen hierbei helfen können, aber für jetzt werden wir uns nur ein paar anschauen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines innerhalb eines Absatzes und das andere innerhalb eines Listenelements. Um nur ein `<em>` auszuwählen, das innerhalb eines `<li>`-Elements verschachtelt ist, können Sie einen Selektor namens **Nachfolger-Kombinator** verwenden, der zwischen zwei anderen Selektoren die Form eines Leerzeichens annimmt.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wählt jedes `<em>`-Element aus, das ein Nachfolger von `<li>` ist. Daher sollten Sie in Ihrem Beispiel-Dokument feststellen, dass das `<em>` im dritten Listenelement jetzt lila ist, das im Absatz jedoch unverändert bleibt.

Etwas anderes, das Sie ausprobieren könnten, ist das Stylen eines Absatzes, der direkt nach einer Überschrift auf derselben Hierarchieebene im HTML-Dokument kommt. Fügen Sie dazu ein `+` (einen **Nachbar-Kombinator bzw. Geschwister-Kombinator**) zwischen den Selektoren ein.

Versuchen Sie ebenfalls, diese Regel zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das Live-Beispiel unten enthält die obigen zwei Regeln. Versuchen Sie, eine Regel hinzuzufügen, um ein span rot zu machen, wenn es innerhalb eines Absatzes ist. Sie werden wissen, dass Sie richtig liegen, weil das span im ersten Absatz rot sein wird, das im ersten Listenelement jedoch nicht die Farbe ändert.

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
> Wie Sie sehen können, gibt es bei CSS mehrere Möglichkeiten, Elemente auszuwählen, und wir haben bisher nur die Oberfläche dessen angekratzt! Wir werden später im Kurs einen genaueren Blick auf diese und viele weitere Selektoren werfen.

### Styling von Elementen basierend auf ihrem Zustand

Der abschließende Typ des Stylings, den wir uns in diesem Tutorial ansehen, ist die Möglichkeit, Dinge basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel hierfür ist das Styling von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) (Anker)-Element anvisieren. Dieses hat unterschiedliche Zustände, je nachdem, ob es unbesucht, besucht, mit der Maus berührt, über die Tastatur fokussiert oder im Prozess des Anklickens (aktiviert) ist. Sie können CSS verwenden, um diese unterschiedlichen Zustände anzusprechen — das untenstehende CSS stylt unbesuchte Links pink und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können die Art und Weise ändern, wie der Link aussieht, wenn der Benutzer mit der Maus darüber fährt, indem Sie zum Beispiel die Unterstreichung entfernen, die durch die nächste Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im folgenden Beispiel können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links spielen. Wir haben die obigen Regeln hinzugefügt und festgestellt, dass die pinke Farbe ziemlich hell und schwer zu lesen ist — warum nicht zu einer besseren Farbe ändern? Können Sie die Links fett machen?

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

Wir haben die Unterstreichung unseres Links bei Hover entfernt. Sie könnten die Unterstreichung von allen Zuständen eines Links entfernen. Es ist jedoch wichtig zu bedenken, dass Sie den Besuchern einer echten Website klarmachen möchten, dass ein Link ein Link ist. Das Beibehalten der Unterstreichung kann ein wichtiger Anhaltspunkt für Personen sein, um zu erkennen, dass ein Text innerhalb eines Absatzes angeklickt werden kann — dies ist das Verhalten, das sie gewohnt sind. Wie bei allem in CSS gibt es die Möglichkeit, dass Sie mit Ihren Änderungen das Dokument weniger zugänglich machen — wir werden versuchen, potenzielle Fallstricke an geeigneten Stellen hervorzuheben.

> [!NOTE]
> Sie werden in diesen Lektionen und auf der gesamten MDN-Website oft Erwähnungen von [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) sehen. Wenn wir über Zugänglichkeit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten von jedem verstanden und genutzt werden können, unabhängig davon, ob er einen Computer mit Maus oder Trackpad, ein Telefon mit Touchscreen, nur die Tastatur zur Navigation oder einen Bildschirmleser verwendet, der den Inhalt des Dokuments vorliest.

### Kombination von Selektoren und Kombinatoren

Es ist erwähnenswert, dass Sie mehrere Selektoren und Kombinatoren miteinander kombinieren können. Zum Beispiel:

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

Dies wird jedes Element mit einer Klasse `special` stylen, das innerhalb eines `<p>` ist, das direkt nach einem `<h1>` kommt. Puh! Dies sollte das `<span class="special">span element</span>` in Ihrem Code ansprechen.

Machen Sie sich keine Sorgen, wenn dies im Moment kompliziert erscheint — Sie werden sich bald daran gewöhnen, je mehr CSS Sie schreiben.

## Andere CSS-Syntax-Features

Nachdem wir einige CSS-Features ausprobiert haben, geben wir Ihnen einen Überblick über einige der anderen CSS-Syntax-Features, denen Sie im Laufe des Kurses begegnen werden. Wenn Sie mehr Details zu einem dieser Themen nachschlagen möchten, können Sie versuchen, den Feature-Namen in das Suchfeld oben auf dieser Seite einzugeben, oder die MDN-[CSS-Referenz](/de/docs/Web/CSS/Reference) besuchen.

Um mit den Code-Snippets in jedem Fall zu experimentieren, könnten Sie das bereitgestellte HTML und CSS zu dem lokalen Beispiel oder der MDN-Playground-Instanz hinzufügen, mit der Sie vorher gearbeitet haben.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

#### Die `calc()`-Funktion

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

Dies wird so dargestellt:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im Beispiel der `calc()`-Beispiel oben definieren die Werte die Breite dieser Box als 90 % der Breite des umgebenden Blocks minus 30 Pixel.

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

Die Ausgabe des obigen Codes sieht so aus:

{{EmbedLiveSample('Transform_functions', '100%', 200)}}

Schauen Sie sich verschiedene Werte der unten aufgeführten Eigenschaften an. Versuchen Sie, CSS-Regeln zu schreiben, die Styling auf verschiedene HTML-Elemente mit den folgenden Funktionen anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradient-Werte
- {{cssxref("color")}}, insbesondere rgb und hsl-Werte

### @regeln

CSS [@regeln](/de/docs/Web/CSS/CSS_syntax/At-rule) (ausgesprochen "at-rules") geben Anweisungen, wie CSS sich verhalten soll. Eine häufige @regel, auf die Sie wahrscheinlich stoßen werden, ist `@media`, die verwendet wird, um [Media Queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media Queries verwenden bedingte Logik für das Anwenden von CSS-Styling.

Im folgenden Beispiel definiert das Stylesheet einen standardmäßigen pinken Hintergrund für das `<body>`-Element. Es folgt jedoch eine Media Query, die einen blauen Hintergrund für das `<body>`-Element setzt, wenn der Browser-Viewport breiter als `30em` ist.

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

### Kurzschreibweise von Eigenschaften

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, und {{cssxref("margin")}} werden als **Kurzschreibweise von Eigenschaften** bezeichnet. Dies liegt daran, dass Kurzschreibweise von Eigenschaften mehrere Werte in einer einzigen Zeile setzen.

Zum Beispiel ist diese eine Codezeile:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

gleichbedeutend mit diesen vier Codezeilen:

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

Im Verlauf des Kurses werden Sie auf viele andere Beispiele für Kurzschreibweise von Eigenschaften stoßen. Versuchen Sie für jetzt, die obigen Deklarationen (oder andere, die Sie kennen) in Ihrem eigenen Code zu verwenden, um sich damit vertrauter zu machen, wie sie funktionieren.

### CSS-Kommentare

Wie bei jeder Programmierarbeit ist es best practices, Kommentare in Ihrem CSS zu schreiben. Dies hilft Ihnen, sich daran zu erinnern, wie der Code funktioniert, wenn Sie später zurückkehren, um Fehler zu beheben oder Verbesserungen vorzunehmen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im folgenden Beispiel markieren Kommentare den Beginn von verschiedenen Abschnitten des Codes. Dies hilft, die Codebasis zu navigieren, wenn sie größer wird. Mit solch einer Kommentierung können Sie durch die Suche nach Kommentaren in Ihrem Code-Editor effizient einen Abschnitt des Codes finden.

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

„Auskommentieren“ von Code ist auch nützlich, um Abschnitte des Codes vorübergehend für Tests zu deaktivieren. Im folgenden Beispiel sind die Regeln für `.special` durch „Auskommentieren“ des Codes deaktiviert:

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Versuchen Sie, Ihrem CSS Kommentare hinzuzufügen.

### Leerzeichen in CSS

Leerzeichen bedeuten tatsächliche Leerzeichen, Tabs und Zeilenumbrüche. Genau wie Browser in HTML zusätzliche Leerzeichen ignorieren, ignorieren Browser zusätzliche Leerzeichen innerhalb von CSS. Der Vorteil von Leerzeichen liegt darin, dass es das Lesen des Codes erleichtert.

Im folgenden Beispiel hat jede Deklaration (und der Start/Ende der Regel) ihre eigene Zeile. Dies ist zweifellos eine gute Art, CSS zu schreiben. Es macht CSS einfacher zu pflegen und zu verstehen.

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

Das nächste Beispiel zeigt dasselbe CSS in einem komprimierteren Format, mit allen zusätzlichen Leerzeichen entfernt. Obwohl beide Beispiele gleich funktionieren, ist das folgende schwieriger zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Beachten Sie, dass einige Änderungen bei Leerzeichen zu Fehlern führen können. Eigenschaftsnamen enthalten niemals Leerzeichen, während Eigenschaftswerte, die Leerzeichen zwischen mehreren Werten erwarten, ungültig werden, wenn dieses Leerzeichen entfernt wird. Zum Beispiel sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Abstandfehler? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) hat kein Leerzeichen darin.

Sie sollten immer sicherstellen, dass Sie unterschiedliche Werte durch mindestens ein Leerzeichen voneinander trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als einzelne, ununterbrochene Zeichenketten zusammen.

Um herauszufinden, wie Leerzeichen CSS durcheinander bringen können, versuchen Sie, mit dem Leerzeichen in Ihrem Test-CSS zu experimentieren.

## Zusammenfassung

In diesem Artikel haben wir uns eine Reihe von Möglichkeiten angesehen, wie Sie ein Dokument mit CSS stylen können. Wir werden dieses Wissen weiterentwickeln, während wir die restlichen Lektionen durchgehen. Sie wissen jedoch bereits genug, um Text zu stylen und CSS basierend auf unterschiedlichen Möglichkeiten zur Auswahl von Elementen im Dokument anzuwenden.

Als nächstes geben wir Ihnen eine Herausforderung, um Ihr neu erworbenes Wissen zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
