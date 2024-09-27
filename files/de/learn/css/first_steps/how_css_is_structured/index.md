---
title: Wie CSS strukturiert ist
slug: Learn/CSS/First_steps/How_CSS_is_structured
l10n:
  sourceCommit: a846e591b43c33ab17d991013acdf227ae190b40
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Da Sie nun beginnen, den Zweck und die Verwendung von CSS zu verstehen, wollen wir die Struktur von CSS genauer untersuchen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, grundlegende Kenntnisse
        <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">im Umgang mit Dateien</a> und HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Erlernen der grundlegenden Syntaxstrukturen von CSS im Detail.</td>
    </tr>
  </tbody>
</table>

## Anwenden von CSS auf HTML

Zuerst schauen wir uns drei Methoden an, um CSS auf ein Dokument anzuwenden: mit einem externen Stylesheet, mit einem internen Stylesheet und mit Inline-Stilen.

### Externes Stylesheet

Ein externes Stylesheet enthält CSS in einer separaten Datei mit einer `.css`-Erweiterung. Diese Methode, CSS in ein Dokument einzubinden, ist die gebräuchlichste und nützlichste. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen, um alle mit dem gleichen CSS-Stylesheet zu gestalten. Im [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps/Getting_started) haben wir ein externes Stylesheet mit unserer Webseite verbunden.

Sie referenzieren ein externes CSS-Stylesheet mit einem HTML-`<link>`-Element:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>My CSS experiment</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

Die CSS-Stylesheet-Datei könnte folgendermaßen aussehen:

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

Das `href`-Attribut des {{htmlelement("link")}}-Elements muss auf eine Datei in Ihrem Dateisystem verweisen. Im obigen Beispiel befindet sich die CSS-Datei im gleichen Ordner wie das HTML-Dokument, aber Sie könnten sie auch an einem anderen Ort platzieren und den Pfad anpassen. Hier sind drei Beispiele:

```html
<!-- Inside a subdirectory called styles inside the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- Inside a subdirectory called general, which is in a subdirectory called styles, inside the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go up one directory level, then inside a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Internes Stylesheet

Ein internes Stylesheet befindet sich innerhalb eines HTML-Dokuments. Um ein internes Stylesheet zu erstellen, platzieren Sie CSS innerhalb eines {{htmlelement("style")}}-Elements, das sich im HTML-{{htmlelement("head")}} befindet.

Das HTML für ein internes Stylesheet könnte so aussehen:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>My CSS experiment</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

In einigen Fällen können interne Stylesheets nützlich sein. Zum Beispiel, wenn Sie mit einem Content-Management-System arbeiten, bei dem Sie daran gehindert werden, externe CSS-Dateien zu ändern.

Aber für Websites mit mehr als einer Seite wird ein internes Stylesheet zu einer ineffizienteren Arbeitsweise. Um einheitliches CSS-Styling auf mehrere Seiten mit internen Stylesheets anzuwenden, muss jede Webseite, die das Styling verwenden soll, über ein internes Stylesheet verfügen. Die Effizienzprobleme setzen sich auch bei der Wartung der Website fort. Bei CSS in internen Stylesheets besteht die Gefahr, dass selbst eine einfache Stiländerung Bearbeitungen an mehreren Webseiten erfordert.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die ein einzelnes HTML-Element betreffen, enthalten innerhalb eines `style`-Attributs. Die Implementierung eines Inline-Stils in einem HTML-Dokument könnte so aussehen:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>My CSS experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">
      Hello World!
    </h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
</html>
```

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wann immer möglich.** Es ist das Gegenteil einer Best Practice. Erstens ist es die am wenigsten effiziente Art, CSS für die Wartung zu implementieren. Eine Stiländerung könnte mehrere Bearbeitungen innerhalb einer einzigen Webseite erfordern. Zweitens mischt Inline-CSS auch (CSS-)Präsentationscode mit HTML und Inhalt, was alles schwieriger zu lesen und zu verstehen macht. Das Trennen von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Es gibt einige Umstände, unter denen Inline-Stile häufiger vorkommen. Sie müssen möglicherweise auf die Verwendung von Inline-Stilen zurückgreifen, wenn Ihr Arbeitsumfeld sehr restriktiv ist. Zum Beispiel erlaubt Ihnen Ihr CMS vielleicht nur, den HTML-Body zu bearbeiten. Sie sehen möglicherweise auch viele Inline-Stile in HTML-E-Mails, um die Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen.

## Spielen mit dem CSS in diesem Artikel

Für die folgende Übung erstellen Sie einen Ordner auf Ihrem Computer. Sie können den Ordner benennen, wie Sie möchten. Kopieren Sie in den Ordner den untenstehenden Text, um zwei Dateien zu erstellen:

**index.html:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My CSS experiments</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <p>Create your test HTML here</p>
  </body>
</html>
```

**styles.css:**

```css
/* Create your test CSS here */

p {
  color: red;
}
```

Wenn Sie CSS finden, mit dem Sie experimentieren möchten, ersetzen Sie die HTML-`<body>`-Inhalte durch HTML, das gestylt werden soll, und fügen Sie dann Ihren Test-CSS-Code in Ihre CSS-Datei ein.

Alternativ können Sie auch den interaktiven Editor unten verwenden.

{{EmbedGHLiveSample("css-examples/learn/getting-started/experiment-sandbox.html", '100%', 800)}}

Lesen Sie weiter und haben Sie Spaß!

## Selektoren

Ein Selektor zielt auf HTML, um Stile auf Inhalte anzuwenden. Wir haben bereits eine Vielzahl von Selektoren im [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps/Getting_started) Tutorial entdeckt. Wenn CSS nicht wie erwartet auf Inhalte angewendet wird, entspricht Ihr Selektor möglicherweise nicht der Art und Weise, wie Sie denken, dass er Übereinstimmungen findet.

Jede CSS-Regel beginnt mit einem Selektor — oder einer Liste von Selektoren — um dem Browser mitzuteilen, auf welches Element oder welche Elemente die Regeln angewendet werden sollen. Alle folgenden Beispiele sind gültige Selektoren oder Listen von Selektoren.

```css
h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro
```

Versuchen Sie, einige CSS-Regeln mit den oben genannten Selektoren zu erstellen. Fügen Sie HTML hinzu, das von den Selektoren gestylt werden soll. Wenn Ihnen eine der oben genannten Syntaxen nicht bekannt ist, versuchen Sie, auf MDN danach zu suchen.

> [!NOTE]
> Sie werden mehr über Selektoren im nächsten Modul lernen: [CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors).

### Spezifität

Sie könnten auf Szenarien stoßen, in denen zwei Selektoren dasselbe HTML-Element auswählen. Betrachten Sie das folgende Stylesheet, mit einem `p`-Selektor, der den Text eines Absatzes blau setzt. Aber es gibt auch eine Klasse, die den Text ausgewählter Elemente rot setzt.

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

Angenommen, wir haben in unserem HTML-Dokument einen Absatz mit einer Klasse von `special`. Beide Regeln gelten. Welcher Selektor setzt sich durch? Erwarten Sie blauen oder roten Absatztext?

```html
<p class="special">What color am I?</p>
```

Die CSS-Sprache hat Regeln, um zu steuern, welcher Selektor bei einem Konflikt stärker ist. Diese Regeln heißen **Kaskade** und **Spezifität**. Im folgenden Codeblock definieren wir zwei Regeln für den `p`-Selektor, aber der Absatztext wird blau sein. Dies liegt daran, dass die Deklaration, die den Absatztext auf blau setzt, später im Stylesheet erscheint. Spätere Stile ersetzen widersprüchliche Stile, die früher im Stylesheet erscheinen. Dies ist die **Kaskadenregel**.

```css
p {
  color: red;
}

p {
  color: blue;
}
```

Im Fall unseres früheren Beispiels mit dem Konflikt zwischen Klassen- und Elementselektor setzt sich die Klasse durch und macht den Absatztext rot. Wie kann das passieren, obwohl ein widersprüchlicher Stil später im Stylesheet erscheint? Eine Klasse wird als spezifischer bewertet, also hat sie mehr **Spezifität** als der Elementselektor, und daher hebt sie die andere widersprüchliche Stil-Deklaration auf.

Versuchen Sie dieses Experiment selbst! Fügen Sie HTML hinzu und dann die beiden `p { }`-Regeln zu Ihrem Stylesheet. Ändern Sie als nächstes den ersten `p`-Selektor in `.special`, um zu sehen, wie sich das Styling ändert.

Die Regeln von Spezifizität und Kaskade können auf den ersten Blick kompliziert erscheinen. Diese Regeln werden leichter verständlich, je vertrauter man mit CSS wird. Der Abschnitt [Kaskade und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) im nächsten Modul erklärt dies ausführlich, einschließlich wie man Spezifizität berechnet.

Erinnern Sie sich für jetzt daran, dass Spezifizität existiert. Manchmal mag CSS nicht so angewendet werden, wie Sie es erwartet haben, weil etwas anderes im Stylesheet mehr Spezifizität hat. Das Erkennen, dass mehr als eine Regel auf ein Element angewendet werden könnte, ist der erste Schritt zur Behebung dieser Art von Problemen.

## Eigenschaften und Werte

Auf der grundlegendsten Ebene besteht CSS aus zwei Komponenten:

- **Eigenschaften**: Dies sind menschenlesbare Bezeichner, die angeben, welche stilistischen Merkmale Sie ändern möchten. Zum Beispiel {{cssxref("font-size")}}, {{cssxref("width")}}, {{cssxref("background-color")}}.
- **Werte**: Jede Eigenschaft wird einem Wert zugewiesen. Dieser Wert gibt an, wie die Eigenschaft gestylt werden soll.

Das folgende Beispiel hebt eine einzelne Eigenschaft und einen Wert hervor. Der Eigenschaftsname ist `color` und der Wert ist `blue`.

![Eine Hervorhebung innerhalb einer CSS-Deklaration](declaration.png)

Wenn eine Eigenschaft mit einem Wert gepaart wird, wird dieses Paar als _CSS-Deklaration_ bezeichnet. CSS-Deklarationen befinden sich innerhalb von _CSS-Deklarationsblöcken_. Im folgenden Beispiel hebt die Markierung den CSS-Deklarationsblock hervor.

![Ein hervorgehobener Deklarationsblock](declaration-block.png)

Schließlich werden CSS-Deklarationsblöcke mit _Selektoren_ gepaart, um _CSS-Regelsätze_ (oder _CSS-Regeln_) zu erstellen. Das folgende Beispiel enthält zwei Regeln: eine für den `h1`-Selektor und eine für den `p`-Selektor. Die farbige Hervorhebung identifiziert die `h1`-Regel.

![Die Regel für h1 ist hervorgehoben](rules.png)

Das Setzen von CSS-Eigenschaften auf spezifische Werte ist der primäre Weg, um Layout und Styling für ein Dokument zu definieren. Die CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden.

CSS-Eigenschaften und Werte sind nicht case-sensitiv. Die Eigenschaft und der Wert in einem Eigenschaft-Wert-Paar werden durch einen Doppelpunkt (`:`) getrennt.

Schauen Sie sich verschiedene Werte der unten aufgeführten Eigenschaften an. Schreiben Sie CSS-Regeln, die Styling auf verschiedene HTML-Elemente anwenden:

- {{cssxref("font-size")}}
- {{cssxref("width")}}
- {{cssxref("background-color")}}
- {{cssxref("color")}}
- {{cssxref("border")}}

> [!WARNING]
> Wenn eine Eigenschaft unbekannt ist oder wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ verarbeitet. Sie wird vom CSS-Engine des Browsers komplett ignoriert.

> [!WARNING]
> In CSS (und anderen Webstandards) wurde vereinbart, dass die US-Rechtschreibung der Standard ist, wo es sprachliche Unterschiede oder Unsicherheiten gibt. Zum Beispiel sollte `colour` als `color` geschrieben werden, da `colour` nicht funktionieren wird.

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

Dies wird so gerendert:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im Beispiel der `calc()`-Funktion oben definieren die Werte die Breite dieser Box als 90 % der Blockbreite minus 30 Pixel. Das Ergebnis der Berechnung ist nichts, was im Voraus berechnet und als statischer Wert eingegeben werden könnte.

#### Transformationsfunktionen

Ein weiteres Beispiel wäre die verschiedenen Werte für {{cssxref("transform")}}, wie `rotate()`.

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

Schauen Sie sich verschiedene Werte der unten aufgeführten Eigenschaften an. Schreiben Sie CSS-Regeln, die Styling auf verschiedene HTML-Elemente anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradientenwerte
- {{cssxref("color")}}, insbesondere rgb- und hsl-Werte

## @rules

CSS [@rules](/de/docs/Web/CSS/At-rule) (ausgesprochen "At-Regeln") geben Anweisungen, was CSS tun soll oder wie es sich verhalten soll. Einige @rules sind einfach und bestehen nur aus einem Schlüsselwort und einem Wert. Zum Beispiel importiert `@import` ein Stylesheet in ein anderes CSS-Stylesheet:

```css
@import "styles2.css";
```

Eine häufige @rule, die Ihnen begegnen könnte, ist `@media`, welche verwendet wird, um [Media Queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media Queries verwenden Bedingungslogik zur Anwendung von CSS-Styling.

Im folgenden Beispiel definiert das Stylesheet einen Standardhintergrund in Rosa für das `<body>`-Element. Es folgt jedoch eine Media Query, die einen blauen Hintergrund definiert, falls das Browser-Viewport breiter als 30em ist.

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

Sie werden im Laufe dieser Tutorials auf weitere @rules stoßen.

Versuchen Sie, eine Media Query hinzuzufügen, die Stile basierend auf der Breite des Viewports ändert. Ändern Sie die Breite Ihres Browserfensters, um das Ergebnis zu sehen.

## Kurznotierungen

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} und {{cssxref("margin")}} werden als **Shorthand-Eigenschaften** bezeichnet. Dies liegt daran, dass Shorthand-Eigenschaften mehrere Werte in einer einzigen Zeile festlegen.

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

entspricht diesen fünf Zeilen:

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

Später im Kurs werden Sie auf viele andere Beispiele zu Shorthand-Eigenschaften stoßen. MDNs [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine gute Ressource für weitere Informationen zu jeder Shorthand-Eigenschaft.

Versuchen Sie, die (oben genannten) Deklarationen in Ihrer eigenen CSS-Übung zu verwenden, um sich mit der Funktionsweise besser vertraut zu machen. Sie können auch mit verschiedenen Werten experimentieren.

> [!WARNING]
> Ein weniger offensichtlicher Aspekt der Verwendung von CSS-Kurznotation ist, wie ausgelassene Werte zurückgesetzt werden. Ein in der CSS-Kurznotation nicht spezifizierter Wert wird auf seinen Anfangswert zurückgesetzt. Dies bedeutet, dass eine Auslassung in der CSS-Kurznotation vorher festgelegte Werte **überschreiben kann**.

## Kommentare

Wie bei jeder Programmierarbeit ist es eine bewährte Praxis, Kommentare zusammen mit CSS zu schreiben. Dies hilft Ihnen, sich später, wenn Sie Korrekturen oder Erweiterungen vornehmen, daran zu erinnern, wie der Code funktioniert. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im folgenden Beispiel markieren Kommentare den Beginn verschiedener Abschnitte des Codes. Dies hilft, den Codebestand zu navigieren, wenn er größer wird. Mit dieser Art von Kommentaren im Code wird das Durchsuchen von Kommentaren in Ihrem Code-Editor zu einer Möglichkeit, effizient einen Abschnitt des Codes zu finden.

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

"Code auskommentieren" ist auch nützlich, um vorübergehend Abschnitte des Codes zum Testen zu deaktivieren. Im folgenden Beispiel sind die Regeln für `.special` durch "Auskommentierung" des Codes deaktiviert.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Versuchen Sie, Kommentare in Ihrem CSS hinzuzufügen.

## Leerzeichen

Leerzeichen bedeutet tatsächliche Leerzeichen, Tabs und neue Zeilen. Genau wie Browser zusätzliche Leerzeichen in HTML ignorieren, ignorieren Browser zusätzliche Leerzeichen in CSS. Der Vorteil von Leerzeichen ist, dass es die Lesbarkeit verbessert.

Im folgenden Beispiel hat jede Deklaration (und Regel Start/Ende) ihre eigene Zeile. Dies ist vermutlich eine gute Möglichkeit, CSS zu schreiben. Es erleichtert das Warten und Verstehen von CSS.

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

Das nächste Beispiel zeigt das äquivalente CSS in einem kompakteren Format, bei dem alle zusätzlichen Leerzeichen entfernt wurden. Obwohl die beiden Beispiele gleich funktionieren, ist das unten gezeigte schwerer zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}

h1{font-size:1.5em;}

div p,#id:first-line{background-color:red;border-radius:3px;}
div p{margin:0;padding:1em;}
div p+p{padding-top:0;}
```

Für eigene Projekte werden Sie Ihren Code entsprechend Ihrer persönlichen Vorlieben formatieren. Für Teamprojekte können Sie feststellen, dass ein Team oder Projekt über einen eigenen Styleguide verfügt.

> [!WARNING]
> Obwohl Leerzeichen in CSS-Deklarationen Werte trennen, **haben Eigenschaftsnamen niemals Leerzeichen**.

Zum Beispiel sind diese Deklarationen gültiges CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

Aber diese Deklarationen sind ungültig:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Sehen Sie die Abstandsfehler? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) ist durch ein fehlerhaftes Leerzeichen getrennt.

Achten Sie immer darauf, voneinander getrennte Werte durch mindestens ein Leerzeichen zu trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als einzelne ununterbrochene Zeichenfolgen zusammen.

Um herauszufinden, wie Leerzeichen CSS brechen können, versuchen Sie, innerhalb Ihres Test-CSS mit Abständen zu spielen.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie CSS strukturiert ist. Es ist auch nützlich zu verstehen, wie der Browser HTML und CSS verwendet, um eine Webseite darzustellen. Der nächste Artikel, [Wie CSS funktioniert](/de/docs/Learn/CSS/First_steps/How_CSS_works), erklärt den Prozess.

{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
