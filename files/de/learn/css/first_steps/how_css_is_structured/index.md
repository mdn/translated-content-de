---
title: Wie CSS strukturiert ist
slug: Learn/CSS/First_steps/How_CSS_is_structured
l10n:
  sourceCommit: c507c55f7a9a883d7a0308daa5e883aa0a619133
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Jetzt, da Sie anfangen, den Zweck und die Anwendung von CSS zu verstehen, lassen Sie uns die Struktur von CSS untersuchen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, Grundkenntnisse im
        <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Die grundlegende Syntaxstruktur von CSS im Detail zu erlernen.</td>
    </tr>
  </tbody>
</table>

## CSS auf HTML anwenden

Zuerst betrachten wir drei Methoden, wie CSS auf ein Dokument angewendet werden kann: mit einem externen Stylesheet, einem internen Stylesheet und mit Inline-Stilen.

### Externes Stylesheet

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Erweiterung `.css`. Dies ist die häufigste und nützlichste Methode, um CSS auf ein Dokument anzuwenden. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verlinken und alle mit demselben CSS-Stylesheet gestalten. Im [Getting started with CSS](/de/docs/Learn/CSS/First_steps/Getting_started) haben wir ein externes Stylesheet mit unserer Webseite verlinkt.

Sie verweisen auf ein externes CSS-Stylesheet von einem HTML-`<link>` Element:

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

Die CSS-Stylesheet-Datei könnte so aussehen:

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

Das `href`-Attribut des {{htmlelement("link")}}-Elements muss auf eine Datei im Dateisystem verweisen. Im obigen Beispiel befindet sich die CSS-Datei im selben Ordner wie das HTML-Dokument, aber Sie könnten sie woanders platzieren und den Pfad anpassen. Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Internes Stylesheet

Ein internes Stylesheet befindet sich innerhalb eines HTML-Dokuments. Um ein internes Stylesheet zu erstellen, platzieren Sie CSS in einem {{htmlelement("style")}}-Element innerhalb des HTML-{{htmlelement("head")}}.

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

In einigen Fällen können interne Stylesheets nützlich sein. Zum Beispiel könnten Sie mit einem Content-Management-System arbeiten, das die Änderung externer CSS-Dateien blockiert.

Aber für Websites mit mehr als einer Seite wird ein internes Stylesheet zu einer weniger effizienten Methode. Um einheitliches CSS-Styling auf mehreren Seiten mit internen Stylesheets anzuwenden, müssen Sie ein internes Stylesheet in jeder Webseite haben, die das Styling verwenden wird. Der Effizienzverlust wirkt sich auch auf die Wartung der Website aus. Mit CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Stiländerung Änderungen an mehreren Webseiten erfordert.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die ein einziges HTML-Element betreffen, enthalten im `style`-Attribut. Die Implementierung eines Inline-Stils in einem HTML-Dokument könnte so aussehen:

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

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wann immer möglich.** Es ist das Gegenteil von Best Practices. Erstens ist es die ineffizienteste Implementierung von CSS für die Wartung. Eine Stiländerung kann mehrere Änderungen innerhalb einer einzigen Webseite erfordern. Zweitens vermischen Inline-CSS auch (CSS) Präsentationscode mit HTML und Inhalt, was alles schwieriger zu lesen und zu verstehen macht. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Es gibt einige Umstände, in denen Inline-Stile häufiger vorkommen. Möglicherweise müssen Sie auf Inline-Stile zurückgreifen, wenn Ihre Arbeitsumgebung sehr einschränkend ist. Zum Beispiel, wenn Ihr CMS Ihnen nur erlaubt, den HTML-Körper zu bearbeiten. Sie könnten auch viele Inline-Stile in HTML-E-Mails sehen, um die Kompatibilität mit so vielen E-Mail-Clients wie möglich zu erreichen.

## Mit dem CSS in diesem Artikel spielen

Für die folgende Übung erstellen Sie einen Ordner auf Ihrem Computer. Sie können den Ordner beliebig benennen. Kopieren Sie innerhalb des Ordners den folgenden Text, um zwei Dateien zu erstellen:

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

Wenn Sie ein CSS finden, mit dem Sie experimentieren möchten, ersetzen Sie den HTML-`<body>`-Inhalt mit etwas HTML zum Stylen und fügen dann Ihren Test-CSS-Code in Ihre CSS-Datei ein.

Alternativ können Sie auf "Play" im folgenden Beispiel klicken, um einen Ausgangspunkt im MDN Playground zu öffnen:

```html live-sample___experiment-sandbox
<p>Create your test HTML here</p>
```

```css live-sample___experiment-sandbox
/* Create your test CSS here */

p {
  color: red;
}
```

{{EmbedLiveSample("experiment-sandbox")}}

Lesen Sie weiter und haben Sie Spaß!

## Selektoren

Ein Selektor zielt auf HTML ab, um Inhalte zu stylen. Wir haben bereits eine Vielzahl von Selektoren im [Getting started with CSS](/de/docs/Learn/CSS/First_steps/Getting_started) Tutorial entdeckt. Wenn CSS nicht wie erwartet auf Inhalte angewendet wird, könnte es sein, dass Ihr Selektor nicht wie gedacht übereinstimmt.

Jede CSS-Regel beginnt mit einem Selektor – oder einer Liste von Selektoren –, um dem Browser mitzuteilen, auf welche Elemente oder auf welche Elemente die Regeln angewendet werden sollen. Alle folgenden Beispiele sind gültige Selektoren oder Listen von Selektoren.

```css
h1
a:link
.many-things
#one-thing
*
.box p
.box p:first-child
h1, h2, .intro
```

Versuchen Sie, einige CSS-Regeln zu erstellen, die die oben genannten Selektoren verwenden. Fügen Sie HTML hinzu, das durch die Selektoren gestylt werden soll. Wenn Ihnen irgendeine Syntax oben nicht bekannt vorkommt, versuchen Sie, bei MDN zu suchen.

> [!NOTE]
> Sie werden mehr über Selektoren im nächsten Modul lernen: [CSS selectors](/de/docs/Learn/CSS/Building_blocks/Selectors).

### Spezifität

Sie könnten auf Szenarien stoßen, in denen zwei Selektoren dasselbe HTML-Element auswählen. Betrachten Sie das unten stehende Stylesheet mit einem `p` Selektor, der den Text des Absatzes auf blau setzt. Es gibt jedoch auch eine Klasse, die den Text der ausgewählten Elemente auf rot setzt.

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

Angenommen, in unserem HTML-Dokument haben wir einen Absatz mit der Klasse `special`. Beide Regeln gelten. Welcher Selektor setzt sich durch? Erwarten Sie blauen oder roten Absatztext?

```html
<p class="special">What color am I?</p>
```

Die CSS-Sprache hat Regeln, um zu kontrollieren, welcher Selektor im Fall eines Konflikts stärker ist. Diese Regeln werden **Kaskade** und **Spezifität** genannt. Im folgenden Codeblock definieren wir zwei Regeln für den `p` Selektor, aber der Absatztext wird blau sein. Dies liegt daran, dass die Deklaration, die den Absatztext auf blau setzt, später im Stylesheet erscheint. Spätere Stile ersetzen widersprüchliche Stile, die früher im Stylesheet erscheinen. Dies ist die **Kaskadenregel**.

```css
p {
  color: red;
}

p {
  color: blue;
}
```

Im Fall unseres früheren Beispiels mit dem Konflikt zwischen dem Klassenselektor und dem Elementselektor setzt sich jedoch die Klasse durch und macht den Absatztext rot. Wie kann das geschehen, obwohl ein widersprüchlicher Stil später im Stylesheet erscheint? Eine Klasse wird als spezifischer bewertet, d.h. sie hat mehr **Spezifität** als der Elementselektor und hebt daher die andere widersprüchliche Stildeklaration auf.

Versuchen Sie dieses Experiment selbst! Fügen Sie HTML hinzu, dann fügen Sie die beiden `p { }` Regeln zu Ihrem Stylesheet hinzu. Ändern Sie als Nächstes den ersten `p` Selektor in `.special`, um zu sehen, wie sich das Styling ändert.

Die Regeln der Spezifität und der Kaskade können anfangs kompliziert erscheinen. Diese Regeln sind leichter zu verstehen, sobald Sie mit CSS vertrauter werden. Der Abschnitt [Cascade and inheritance](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) im nächsten Modul erklärt dies im Detail, einschließlich der Berechnung der Spezifität.

Für jetzt sollten Sie sich merken, dass Spezifität existiert. Manchmal könnte CSS nicht so angewendet werden, wie Sie es erwarten, weil etwas anderes im Stylesheet mehr Spezifität hat. Die Erkenntnis, dass mehr als eine Regel auf ein Element angewendet werden könnte, ist der erste Schritt zur Behebung dieser Arten von Problemen.

## Eigenschaften und Werte

Auf seiner grundlegendsten Ebene besteht CSS aus zwei Komponenten:

- **Eigenschaften**: Dies sind menschenlesbare Bezeichner, die anzeigen, welche stilistischen Merkmale Sie ändern möchten. Zum Beispiel, {{cssxref("font-size")}}, {{cssxref("width")}}, {{cssxref("background-color")}}.
- **Werte**: Jeder Eigenschaft wird ein Wert zugewiesen. Dieser Wert gibt an, wie die Eigenschaft gestylt werden soll.

Das folgende Beispiel hebt eine einzelne Eigenschaft und einen Wert hervor. Der Eigenschaftsname ist `color` und der Wert ist `blue`.

![Eine hervorgehobene Deklaration im CSS](declaration.png)

Wenn eine Eigenschaft mit einem Wert gepaart wird, wird dieses Paar als _CSS-Deklaration_ bezeichnet. CSS-Deklarationen befinden sich innerhalb von _CSS-Deklarationsblöcken_. Im folgenden Beispiel identifiziert die Hervorhebung den CSS-Deklarationsblock.

![Ein hervorgehobener Deklarationsblock](declaration-block.png)

Schließlich werden CSS-Deklarationsblöcke mit _Selektoren_ gepaart, um _CSS-Regelsätze_ (oder _CSS-Regeln_) zu erzeugen. Das folgende Beispiel enthält zwei Regeln: eine für den `h1`-Selektor und eine für den `p`-Selektor. Die farbliche Hervorhebung identifiziert die `h1`-Regel.

![Die Regel für h1 hervorgehoben](rules.png)

Das Festlegen von CSS-Eigenschaften auf bestimmte Werte ist der primäre Weg, um Layout und Styling für ein Dokument zu definieren. Die CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden.

CSS-Eigenschaften und Werte sind nicht case-sensitiv. Der Eigenschafts- und Wertanteil in einem Eigenschaft-Wert-Paar wird durch einen Doppelpunkt (`:`) getrennt.

Schauen Sie sich verschiedene Werte der unten aufgeführten Eigenschaften an. Schreiben Sie CSS-Regeln, die Styling auf verschiedene HTML-Elemente anwenden:

- {{cssxref("font-size")}}
- {{cssxref("width")}}
- {{cssxref("background-color")}}
- {{cssxref("color")}}
- {{cssxref("border")}}

> [!WARNING]
> Wenn eine Eigenschaft unbekannt ist oder wenn ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ verarbeitet. Sie wird von der CSS-Engine des Browsers vollständig ignoriert.

> [!WARNING]
> In CSS (und anderen Webstandards) wurde vereinbart, dass die US-Schreibweise der Standard ist, wenn es Sprachvariationen oder Unsicherheiten gibt. Zum Beispiel sollte `colour` als `color` geschrieben werden, da `colour` nicht funktionieren wird.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

#### Die calc()-Funktion

Ein Beispiel wäre die Funktion `calc()`, die einfache Mathematik innerhalb von CSS durchführen kann:

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im Fall des `calc()`-Beispiels oben definieren die Werte die Breite dieses Kästchens als 90% der Breite des umgebenden Blockes, minus 30 Pixel. Das Ergebnis der Berechnung ist etwas, das nicht im Voraus berechnet und als statischer Wert eingegeben werden kann.

#### Transformationsfunktionen

Ein weiteres Beispiel wären die verschiedenen Werte für {{cssxref("transform")}}, wie `rotate()`.

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
- {{cssxref("background-image")}}, insbesondere Gradient-Werte
- {{cssxref("color")}}, insbesondere rgb- und hsl-Werte

## @rules

CSS-[@rules](/de/docs/Web/CSS/At-rule) (ausgesprochen "at-rules") geben Anweisungen, was CSS tun oder wie es sich verhalten soll. Einige @rules sind einfach und bestehen nur aus einem Schlüsselwort und einem Wert. Zum Beispiel importiert `@import` ein Stylesheet in ein anderes CSS-Stylesheet:

```css
@import "styles2.css";
```

Eine häufige @rule, der Sie wahrscheinlich begegnen werden, ist `@media`, die verwendet wird, um [media queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media Queries verwenden bedingte Logik, um CSS-Styling anzuwenden.

Im folgenden Beispiel definiert das Stylesheet einen standardmäßig rosa Hintergrund für das `<body>`-Element. Es folgt jedoch eine Media Query, die einen blauen Hintergrund definiert, wenn das Browser-Viewport breiter als 30em ist.

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

Im Laufe dieser Tutorials werden Sie auf andere @rules stoßen.

Versuchen Sie, eine Media Query hinzuzufügen, die Stile basierend auf der Viewport-Breite ändert. Ändern Sie die Breite Ihres Browserfensters, um das Ergebnis zu sehen.

## Kurzschreibweise

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} und {{cssxref("margin")}} werden als **Kurzschrift-Eigenschaften** bezeichnet. Dies liegt daran, dass Kurzschrift-Eigenschaften mehrere Werte in einer einzigen Zeile festlegen.

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

Später im Kurs werden Sie viele weitere Beispiele für Kurzschrift-Eigenschaften kennenlernen. Das [CSS reference](/de/docs/Web/CSS/Reference) auf MDN ist eine gute Ressource für weitere Informationen über eine Kurzschrift-Eigenschaft.

Versuchen Sie, die oben genannten Deklarationen in Ihrer eigenen CSS-Übung zu verwenden, um sich mit der Funktionsweise vertrauter zu machen. Sie können auch mit verschiedenen Werten experimentieren.

> [!WARNING]
> Ein weniger offensichtlicher Aspekt der Verwendung von CSS-Kurzschrift ist, wie ausgelassene Werte zurückgesetzt werden. Ein nicht spezifizierter Wert in CSS-Kurzschrift kann auf seinen initialen Wert zurückfallen. Dies bedeutet, dass eine Auslassung in CSS-Kurzschrift **zuvor festgelegte Werte überschreiben** kann.

## Kommentare

Wie bei jeder Programmierarbeit ist es Best Practice, Kommentare zusammen mit CSS zu schreiben. Dies hilft Ihnen, sich später daran zu erinnern, wie der Code funktioniert, wenn Sie für Korrekturen oder Verbesserungen zurückkehren. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im folgenden Beispiel markieren Kommentare den Beginn von deutlichen Codebereichen. Dies hilft, die Codebasis zu navigieren, wenn sie größer wird. Mit dieser Art von Kommentaren können Sie in Ihrem Code-Editor nach Kommentaren suchen, um effizient einen Abschnitt des Codes zu finden.

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

"Auskommentieren" von Code ist auch nützlich, um abschnittsweise Code für Tests vorübergehend zu deaktivieren. Im folgenden Beispiel sind die Regeln für `.special` durch "Auskommentieren" des Codes deaktiviert.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Versuchen Sie, Kommentare zu Ihrem CSS hinzuzufügen.

## Leerzeichen

Leerzeichen bedeuten tatsächliche Leerzeichen, Tabs und neue Zeilen. Genau wie Browser in HTML zusätzliche Leerzeichen ignorieren, ignorieren Browser zusätzliche Leerzeichen innerhalb von CSS. Der Nutzen von Leerzeichen besteht darin, dass es die Lesbarkeit verbessert.

Im folgenden Beispiel hat jede Deklaration (und der Regelstart/das Regelende) ihre eigene Zeile. Dies ist möglicherweise eine gute Möglichkeit, CSS zu schreiben. Es macht CSS leichter zu warten und zu verstehen.

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

Das nächste Beispiel zeigt das äquivalente CSS in einem kompakteren Format, wobei alle zusätzlichen Leerzeichen entfernt wurden. Obwohl die beiden Beispiele gleich funktionieren, ist das folgende schwieriger zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}

h1{font-size:1.5em;}

div p,#id:first-line{background-color:red;border-radius:3px;}
div p{margin:0;padding:1em;}
div p+p{padding-top:0;}
```

Für Ihre eigenen Projekte formatieren Sie Ihren Code gemäß Ihrer persönlichen Vorliebe. Bei Teamprojekten könnten Sie feststellen, dass ein Team oder ein Projekt seinen eigenen Stil-Leitfaden hat.

> [!WARNING]
> Auch wenn Leerzeichen in CSS-Deklarationen Werte trennen, haben **Eigenschaftsnamen niemals Leerzeichen**.

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

Sehen Sie die Leerzeichenfehler? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) ist durch ein fehlerhaftes Leerzeichen getrennt.

Sie sollten immer sicherstellen, dass Sie getrennte Werte durch mindestens ein Leerzeichen voneinander trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als einzelne, ununterbrochene Zeichenfolgen zusammen.

Um herauszufinden, wie Leerzeichen CSS beschädigen können, versuchen Sie, mit Leerzeichen in Ihrem Test-CSS zu spielen.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie CSS strukturiert ist. Es ist auch nützlich zu verstehen, wie der Browser HTML und CSS verwendet, um eine Webseite anzuzeigen. Der nächste Artikel, [How CSS works](/de/docs/Learn/CSS/First_steps/How_CSS_works), erklärt den Prozess.

{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
