---
title: Wie CSS strukturiert ist
slug: Learn/CSS/First_steps/How_CSS_is_structured
l10n:
  sourceCommit: a846e591b43c33ab17d991013acdf227ae190b40
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Jetzt, da Sie beginnen, den Zweck und die Verwendung von CSS zu verstehen, lassen Sie uns die Struktur von CSS untersuchen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, Grundkenntnisse im
        <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (Studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Die grundlegenden Syntaxstrukturen von CSS im Detail zu lernen.</td>
    </tr>
  </tbody>
</table>

## Anwendung von CSS auf HTML

Zuerst untersuchen wir drei Methoden, CSS in ein Dokument einzubinden: mit einem externen Stylesheet, mit einem internen Stylesheet und mit Inline-Stilen.

### Externes Stylesheet

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Erweiterung `.css`. Dies ist die gebräuchlichste und nützlichste Methode, um CSS in ein Dokument einzubringen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen, die alle mit demselben CSS-Stylesheet gestaltet werden. Im [Einstieg in CSS](/de/docs/Learn/CSS/First_steps/Getting_started) haben wir ein externes Stylesheet mit unserer Webseite verknüpft.

Sie referenzieren ein externes CSS-Stylesheet von einem HTML-`<link>`-Element aus:

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

Das `href`-Attribut des {{htmlelement("link")}}-Elements muss auf eine Datei in Ihrem Dateisystem verweisen. Im obigen Beispiel befindet sich die CSS-Datei im selben Ordner wie das HTML-Dokument, aber Sie könnten sie auch woanders platzieren und den Pfad anpassen. Hier sind drei Beispiele:

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

Das HTML für ein internes Stylesheet könnte folgendermaßen aussehen:

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

In bestimmten Fällen können interne Stylesheets nützlich sein. Zum Beispiel, wenn Sie mit einem Content-Management-System arbeiten, das Sie daran hindert, externe CSS-Dateien zu ändern.

Aber für Websites mit mehr als einer Seite wird ein internes Stylesheet zu einer weniger effizienten Arbeitsweise. Um einheitliche CSS-Stile auf mehrere Seiten mit internen Stylesheets anzuwenden, müssen Sie ein internes Stylesheet auf jeder Webseite haben, die die Stile verwenden. Die Effizienzstrafe überträgt sich auch auf die Wartung der Website. Mit CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Stiländerung Bearbeitungen an mehreren Webseiten erfordert.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die ein einzelnes HTML-Element betreffen und innerhalb eines `style`-Attributs enthalten sind. Die Implementierung eines Inline-Stils in einem HTML-Dokument könnte folgendermaßen aussehen:

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

**Vermeiden Sie nach Möglichkeit die Verwendung von CSS auf diese Weise.** Es ist das Gegenteil von bewährten Methoden. Erstens ist es die am wenigsten effiziente Umsetzung von CSS für die Wartung. Eine Stiländerung könnte mehrere Bearbeitungen innerhalb einer einzigen Webseite erfordern. Zweitens mischen Inline-CSS auch (CSS) Präsentationscode mit HTML und Inhalt, was alles schwieriger zu lesen und zu verstehen macht. Das Trennen von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Es gibt einige Umstände, unter denen Inline-Stile häufiger vorkommen. Sie könnten gezwungen sein, Inline-Stile zu verwenden, wenn Ihre Arbeitsumgebung sehr restriktiv ist. Zum Beispiel, wenn Ihr CMS Ihnen nur erlaubt, den HTML-Body zu bearbeiten. Sie könnten auch viele Inline-Stile in HTML-E-Mails sehen, um Kompatibilität mit so vielen E-Mail-Clients wie möglich zu erreichen.

## Ausprobieren der CSS in diesem Artikel

Für die folgende Übung erstellen Sie einen Ordner auf Ihrem Computer. Sie können den Ordner benennen, wie Sie möchten. In diesem Ordner kopieren Sie den untenstehenden Text, um zwei Dateien zu erstellen:

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

Wenn Sie CSS finden, mit dem Sie experimentieren möchten, ersetzen Sie die HTML-`<body>`-Inhalte mit etwas HTML zum Stylen und fügen dann Ihren Test-CSS-Code zu Ihrer CSS-Datei hinzu.

Alternativ können Sie auch den interaktiven Editor unten verwenden.

{{EmbedGHLiveSample("css-examples/learn/getting-started/experiment-sandbox.html", '100%', 800)}}

Lesen Sie weiter und haben Sie Spaß!

## Selektoren

Ein Selektor zielt auf HTML, um Stile auf den Inhalt anzuwenden. Wir haben bereits verschiedene Selektoren im [Einstieg in CSS](/de/docs/Learn/CSS/First_steps/Getting_started)-Tutorial entdeckt. Wenn CSS nicht wie erwartet auf den Inhalt angewendet wird, stimmt möglicherweise Ihre Erwartung der Selektorzuordnung nicht mit der tatsächlichen überein.

Jede CSS-Regel beginnt mit einem Selektor – oder einer Liste von Selektoren – um dem Browser mitzuteilen, auf welches Element oder welche Elemente die Regeln angewendet werden sollen. Alle untenstehenden Beispiele sind gültige Selektoren oder Listen von Selektoren.

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

Versuchen Sie, einige CSS-Regeln zu erstellen, die die obenstehenden Selektoren verwenden. Fügen Sie HTML hinzu, das von den Selektoren gestylt werden soll. Wenn Ihnen eine der oben genannten Syntaxe nicht vertraut ist, versuchen Sie, auf MDN nachzuschlagen.

> [!NOTE]
> Sie werden mehr über Selektoren im nächsten Modul lernen: [CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors).

### Spezifität

Sie könnten Szenarien begegnen, in denen zwei Selektoren dasselbe HTML-Element auswählen. Betrachten Sie das untenstehende Stylesheet, mit einem `p`-Selektor, der den Text der Absätze auf blau setzt. Es gibt aber auch eine Klasse, die den Text ausgewählter Elemente auf rot setzt.

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

Angenommen, wir haben in unserem HTML-Dokument einen Absatz mit der Klasse `special`. Beide Regeln treffen zu. Welcher Selektor setzt sich durch? Erwarten Sie blauen oder roten Absatztext?

```html
<p class="special">What color am I?</p>
```

Die CSS-Sprache hat Regeln, um zu steuern, welcher Selektor bei einem Konflikt stärker ist. Diese Regeln werden **Cascade** und **Spezifität** genannt. Im Codeblock unten definieren wir zwei Regeln für den `p`-Selektor, aber der Absatztext wird blau sein. Das liegt daran, dass die Deklaration, die den Absatztext auf blau setzt, später im Stylesheet erscheint. Spätere Stile ersetzen widersprüchliche Stile, die früher im Stylesheet erscheinen. Dies ist die **Cascade**-Regel.

```css
p {
  color: red;
}

p {
  color: blue;
}
```

Im Fall unseres früheren Beispiels mit dem Konflikt zwischen dem Klassen-Selektor und dem Element-Selektor setzt sich jedoch die Klasse durch und färbt den Absatztext rot. Wie kann das passieren, obwohl ein widersprüchlicher Stil später im Stylesheet erscheint? Eine Klasse wird als spezifischer bewertet, hat also mehr **Spezifität** als der Element-Selektor und hebt die andere widersprüchliche Stil-Deklaration auf.

Versuchen Sie dieses Experiment selbst! Fügen Sie HTML hinzu und dann die beiden `p { }`-Regeln zu Ihrem Stylesheet. Ändern Sie als nächstes den ersten `p`-Selektor zu `.special`, um zu sehen, wie sich die Gestaltung ändert.

Die Regeln der Spezifität und der Cascade können zunächst kompliziert erscheinen. Diese Regeln sind leichter zu verstehen, wenn Sie mit CSS vertrauter werden. Der Abschnitt [Cascade und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) im nächsten Modul erklärt dies im Detail, inklusive wie man Spezifität berechnet.

Für jetzt merken Sie sich, dass es Spezifität gibt. Manchmal wird CSS möglicherweise nicht wie erwartet angewendet, weil etwas anderes im Stylesheet mehr Spezifität hat. Zu erkennen, dass mehr als eine Regel auf ein Element zutreffen könnte, ist der erste Schritt, um solche Probleme zu beheben.

## Eigenschaften und Werte

Auf der grundlegendsten Ebene besteht CSS aus zwei Komponenten:

- **Eigenschaften**: Dies sind für Menschen lesbare Bezeichner, die angeben, welche stilistischen Merkmale Sie ändern möchten. Zum Beispiel {{cssxref("font-size")}}, {{cssxref("width")}}, {{cssxref("background-color")}}.
- **Werte**: Jede Eigenschaft wird einem Wert zugewiesen. Dieser Wert gibt an, wie die Eigenschaft zu gestalten ist.

Das folgende Beispiel hebt eine einzelne Eigenschaft und einen Wert hervor. Der Eigenschaftsname ist `color` und der Wert ist `blue`.

![Eine in CSS hervorgehobene Deklaration](declaration.png)

Wenn eine Eigenschaft mit einem Wert kombiniert wird, wird diese Kombination als _CSS-Deklaration_ bezeichnet. CSS-Deklarationen befinden sich innerhalb von _CSS-Deklarationsblöcken_. Im folgenden Beispiel identifiziert die Hervorhebung den CSS-Deklarationsblock.

![Ein hervorgehobener Deklarationsblock](declaration-block.png)

Schließlich werden CSS-Deklarationsblöcke mit _Selektoren_ kombiniert, um _CSS-Regelsätze_ (oder _CSS-Regeln_) zu erstellen. Das untenstehende Beispiel enthält zwei Regeln: eine für den `h1`-Selektor und eine für den `p`-Selektor. Die farbige Hervorhebung identifiziert die `h1`-Regel.

![Die Regel für h1 hervorgehoben](rules.png)

Das Festlegen von CSS-Eigenschaften auf spezifische Werte ist der primäre Weg, um das Layout und die Gestaltung für ein Dokument zu definieren. Die CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden.

CSS-Eigenschaften und Werte sind nicht case-sensitiv. Die Eigenschaft und der Wert in einem Eigenschafts-Werte-Paar werden durch einen Doppelpunkt (`:`) getrennt.

Schauen Sie sich verschiedene Werte der unten gelisteten Eigenschaften an. Schreiben Sie CSS-Regeln, die Stile auf unterschiedliche HTML-Elemente anwenden:

- {{cssxref("font-size")}}
- {{cssxref("width")}}
- {{cssxref("background-color")}}
- {{cssxref("color")}}
- {{cssxref("border")}}

> [!WARNING]
> Wenn eine Eigenschaft unbekannt ist oder ein Wert für eine gegebene Eigenschaft nicht gültig ist, wird die Deklaration als _ungültig_ verarbeitet. Sie wird vom CSS-Engine des Browsers komplett ignoriert.

> [!WARNING]
> In CSS (und anderen Webstandards) wurde vereinbart, dass die US-Schreibweise der Standard ist, wenn es sprachliche Unterschiede oder Unsicherheiten gibt. Zum Beispiel sollte `colour` als `color` geschrieben werden, da `colour` nicht funktioniert.

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

Dies wird so dargestellt:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im Fall des obigen `calc()`-Beispiels definieren die Werte die Breite dieser Box als 90% der Breite des umgebenden Blocks, minus 30 Pixel. Das Ergebnis der Berechnung ist etwas, das nicht im Voraus berechnet und als statischer Wert eingefügt werden kann.

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

Schauen Sie sich verschiedene Werte der unten gelisteten Eigenschaften an. Schreiben Sie CSS-Regeln, die Stile auf unterschiedliche HTML-Elemente anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradient-Werte
- {{cssxref("color")}}, insbesondere rgb- und hsl-Werte

## @Regeln

CSS [@Regeln](/de/docs/Web/CSS/At-rule) (ausgesprochen "at-rules") geben Anweisungen, was CSS ausführen soll oder wie es sich verhalten soll. Einige @Regeln sind einfach mit nur einem Schlüsselwort und einem Wert. Zum Beispiel importiert `@import` ein Stylesheet in ein anderes CSS-Stylesheet:

```css
@import "styles2.css";
```

Eine häufige @Regel, die Ihnen wahrscheinlich begegnen wird, ist `@media`, die verwendet wird, um [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media-Abfragen verwenden logische Bedingungen zur Anwendung von CSS-Gestaltung.

Im folgenden Beispiel definiert das Stylesheet einen standardmäßigen pinken Hintergrund für das `<body>`-Element. Es folgt jedoch eine Media-Abfrage, die einen blauen Hintergrund definiert, wenn das Browser-Anzeigefenster breiter als 30em ist.

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

Sie werden anderen @Regeln in diesen Tutorials begegnen.

Schauen Sie, ob Sie eine Media-Abfrage hinzufügen können, die die Stile basierend auf der Breite des Anzeigefensters ändert. Ändern Sie die Breite Ihres Browserfensters, um das Ergebnis zu sehen.

## Kurzschreibweisen

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, und {{cssxref("margin")}} werden als **Kurzschreibweise-Eigenschaften** bezeichnet. Das liegt daran, dass Kurzschreibweise-Eigenschaften mehrere Werte in einer einzigen Zeile setzen.

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

Später im Kurs werden Sie vielen anderen Beispielen von Kurzschreibweise-Eigenschaften begegnen. MDNs [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine gute Ressource für mehr Informationen über jede Kurzschreibweise-Eigenschaft.

Versuchen Sie, die oben genannten Deklarationen in Ihrer eigenen CSS-Übung zu verwenden, um sich besser damit vertraut zu machen, wie es funktioniert. Sie können auch mit verschiedenen Werten experimentieren.

> [!WARNING]
> Ein weniger offensichtlicher Aspekt der Verwendung von CSS-Kurzschreibweise ist, wie ausgelassene Werte zurückgesetzt werden. Ein in der CSS-Kurzschreibweise nicht spezifizierter Wert wird auf seinen Anfangswert zurückgesetzt. Dies bedeutet, dass ein Auslass in der CSS-Kurzschreibweise **vorher gesetzte Werte überschreiben kann**.

## Kommentare

Wie bei jeder Programmierarbeit ist es eine bewährte Praxis, Kommentare zusammen mit CSS zu schreiben. Dies hilft Ihnen, sich später an die Funktionsweise des Codes zu erinnern, wenn Sie für Korrekturen oder Erweiterungen darauf zurückkommen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im folgenden Beispiel markieren Kommentare den Beginn verschiedener Abschnitte des Codes. Dies hilft, den Code zu navigieren, wenn er größer wird. Mit solchen Kommentaren können Sie durch Suche in Ihrem Code-Editor effizient eine Code-Sektion finden.

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

"Auskommentieren" von Code ist auch nützlich, um vorübergehend Abschnitte des Codes zum Testen zu deaktivieren. Im untenstehenden Beispiel sind die Regeln für `.special` durch "Auskommentieren" des Codes deaktiviert.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Versuchen Sie, Kommentare in Ihr CSS einzufügen.

## Leerzeichen

Leerzeichen bedeuten tatsächliche Leerzeichen, Tabulatoren und neue Zeilen. Genau wie Browser zusätzliche Leerzeichen in HTML ignorieren, ignorieren Browser auch zusätzliche Leerzeichen innerhalb von CSS. Der Vorteil von Leerzeichen besteht darin, dass sie die Lesbarkeit verbessern.

Im folgenden Beispiel hat jede Deklaration (und Regelanfang/-ende) ihre eigene Zeile. Dies ist arguably eine gute Art, CSS zu schreiben. Es macht CSS leichter wartbar und verständlich.

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

Das nächste Beispiel zeigt das äquivalente CSS in einem kompakteren Format, ohne zusätzliche Leerzeichen. Obwohl die beiden Beispiele gleich funktionieren, ist das unten gezeigte schwerer zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}

h1{font-size:1.5em;}

div p,#id:first-line{background-color:red;border-radius:3px;}
div p{margin:0;padding:1em;}
div p+p{padding-top:0;}
```

Für Ihre eigenen Projekte werden Sie Ihren Code nach persönlicher Präferenz formatieren. Für Teamprojekte kann es sein, dass ein Team oder Projekt einen eigenen Stilführer hat.

> [!WARNING]
> Obwohl Leerzeichen Werte in CSS-Deklarationen trennen, **haben Eigenschaftsnamen niemals Leerzeichen**.

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

Sehen Sie die Abstandsfehler? Erstens wird `0auto` nicht als gültiger Wert für die Eigenschaft `margin` erkannt. Der Eintrag `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) wird durch ein fehlerhaftes Leerzeichen getrennt.

Sie sollten immer sicherstellen, dass Sie voneinander unabhängige Werte durch mindestens eine Lücke trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als ein einzelnes ungebrochenes String zusammen.

Um herauszufinden, wie Abstände CSS brechen können, versuchen Sie, mit den Abständen in Ihrem Test-CSS zu spielen.

## Zusammenfassung

An diesem Punkt sollten Sie ein besseres Verständnis dafür haben, wie CSS strukturiert ist. Es ist auch nützlich zu verstehen, wie der Browser HTML und CSS verwendet, um eine Webseite darzustellen. Der nächste Artikel, [Wie CSS funktioniert](/de/docs/Learn/CSS/First_steps/How_CSS_works), erklärt den Prozess.

{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
