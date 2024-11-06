---
title: Wie CSS strukturiert ist
slug: Learn/CSS/First_steps/How_CSS_is_structured
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
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
      <td>Die grundlegenden Syntaxstrukturen von CSS detailliert lernen.</td>
    </tr>
  </tbody>
</table>

## Anwenden von CSS auf HTML

Zunächst werfen wir einen Blick auf drei Methoden, um CSS auf ein Dokument anzuwenden: mit einem externen Stylesheet, mit einem internen Stylesheet und mit Inline-Stilen.

### Externes Stylesheet

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Erweiterung `.css`. Dies ist die gebräuchlichste und nützlichste Methode, um CSS in ein Dokument zu bringen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen und alle mit demselben CSS-Stilblatt stylen. Im [Einstieg in CSS](/de/docs/Learn/CSS/First_steps/Getting_started) haben wir ein externes Stylesheet mit unserer Webseite verknüpft.

Sie verweisen aus einem HTML-Dokument über ein `<link>`-Element auf ein externes CSS-Stylesheet:

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

Das `href`-Attribut des {{htmlelement("link")}}-Elements muss auf eine Datei im Dateisystem verweisen. Im obigen Beispiel befindet sich die CSS-Datei im gleichen Ordner wie das HTML-Dokument, aber Sie könnten sie woanders platzieren und den Pfad anpassen. Hier sind drei Beispiele:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Internes Stylesheet

Ein internes Stylesheet befindet sich innerhalb eines HTML-Dokuments. Um ein internes Stylesheet zu erstellen, platzieren Sie CSS innerhalb eines {{htmlelement("style")}}-Elements, das im HTML {{htmlelement("head")}} enthalten ist.

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

In einigen Fällen können interne Stylesheets nützlich sein. Zum Beispiel, wenn Sie mit einem Content-Management-System arbeiten, bei dem Sie externe CSS-Dateien nicht ändern können.

Bei Websites mit mehr als einer Seite wird ein internes Stylesheet jedoch zu einer weniger effizienten Arbeitsweise. Um einheitliches CSS-Design auf mehreren Seiten mit internen Stylesheets anzuwenden, müssen Sie ein internes Stylesheet auf jeder Webseite haben, die das Styling verwenden wird. Der Effizienzverlust überträgt sich auch auf die Wartung der Site. Bei CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Stiländerung möglicherweise Bearbeitungen an mehreren Webseiten erfordert.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die ein einzelnes HTML-Element betreffen und innerhalb eines `style`-Attributs enthalten sind. Die Implementierung eines Inline-Stils in einem HTML-Dokument könnte so aussehen:

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

**Vermeiden Sie, CSS auf diese Weise zu verwenden, wann immer möglich.** Es ist das Gegenteil von Best Practices. Erstens ist es die am wenigsten effiziente Implementierung von CSS für Wartungsarbeiten. Eine Styling-Änderung könnte mehrere Bearbeitungen innerhalb einer einzelnen Webseite erfordern. Zweitens vermischen Inline-CSS auch (CSS-) Präsentationscode mit HTML und Inhalt, wodurch alles schwieriger zu lesen und zu verstehen ist. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Es gibt einige Umstände, in denen Inline-Stile häufiger vorkommen. Sie könnten gezwungen sein, Inline-Stile zu verwenden, wenn Ihre Arbeitsumgebung sehr einschränkend ist. Vielleicht erlaubt Ihr CMS beispielsweise nur das Bearbeiten des HTML-Body. In HTML-E-Mails sind möglicherweise auch viele Inline-Stile zu sehen, um Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen.

## Mit dem CSS in diesem Artikel experimentieren

Für die folgende Übung erstellen Sie einen Ordner auf Ihrem Computer. Sie können den Ordner beliebig benennen. Kopieren Sie den unten stehenden Text in zwei Dateien im Ordner:

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

Wenn Sie CSS finden, mit dem Sie experimentieren möchten, ersetzen Sie den HTML-`<body>`-Inhalt durch HTML zum Stylen und fügen Sie dann Ihren Test-CSS-Code in Ihre CSS-Datei hinzu.

Alternativ können Sie auf "Play" unter dem folgenden Beispiel klicken, um einen Ausgangspunkt im MDN Playground zu öffnen:

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

Ein Selektor zielt auf HTML ab, um Stile auf Inhalte anzuwenden. Wir haben bereits eine Vielzahl von Selektoren im [Einstieg in CSS](/de/docs/Learn/CSS/First_steps/Getting_started) Tutorial entdeckt. Wenn CSS nicht wie erwartet auf Inhalte angewendet wird, stimmt möglicherweise der Selektor nicht mit Ihrer Erwartung überein.

Jede CSS-Regel beginnt mit einem Selektor oder einer Liste von Selektoren, um dem Browser mitzuteilen, auf welches Element oder welche Elemente die Regeln angewendet werden sollen. Alle unten stehenden Beispiele sind gültige Selektoren oder Listen von Selektoren.

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

Versuchen Sie, einige CSS-Regeln zu erstellen, die die oben genannten Selektoren verwenden. Fügen Sie HTML hinzu, das von den Selektoren gestylt werden soll. Wenn Ihnen bestimmte Syntaxelemente nicht vertraut sind, versuchen Sie, auf MDN danach zu suchen.

> [!NOTE]
> Sie werden mehr über Selektoren im nächsten Modul lernen: [CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors).

### Spezifität

Sie könnten auf Szenarien stoßen, in denen zwei Selektoren dasselbe HTML-Element auswählen. Betrachten Sie das folgende Stylesheet, mit einem `p`-Selektor, der den Absatztext auf blau setzt. Es gibt jedoch auch eine Klasse, die den Text ausgewählter Elemente auf rot setzt.

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

Angenommen, wir haben in unserem HTML-Dokument einen Absatz mit der Klasse `special`. Beide Regeln gelten. Welcher Selektor hat Vorrang? Erwarten Sie blauen oder roten Absatztext?

```html
<p class="special">What color am I?</p>
```

Die CSS-Sprache hat Regeln, um zu steuern, welcher Selektor bei einem Konflikt stärker ist. Diese Regeln werden **Cascade** und **Spezifität** genannt. Im Codeblock unten definieren wir zwei Regeln für den `p`-Selektor, aber der Absatztext wird blau. Dies liegt daran, dass die Deklaration, die den Absatztext auf blau setzt, später im Stylesheet erscheint. Spätere Stile ersetzen widersprüchliche Stile, die früher im Stylesheet auftauchen. Dies ist die **Cascade**-Regel.

```css
p {
  color: red;
}

p {
  color: blue;
}
```

Im Fall unseres vorherigen Beispiels mit dem Konflikt zwischen dem Klassenselektor und dem Elementselektor hat jedoch die Klasse Vorrang und rendert den Absatztext rot. Wie kann das passieren, obwohl ein widersprüchlicher Stil später im Stylesheet erscheint? Eine Klasse wird als spezifischer (d. h. mit mehr **Spezifität**) als der Elementselektor bewertet, sodass sie die andere widersprüchliche Stil-Deklaration aufhebt.

Probieren Sie dieses Experiment selbst aus! Fügen Sie HTML hinzu, dann fügen Sie die zwei `p { }` Regeln in Ihr Stylesheet ein. Ändern Sie den ersten `p`-Selektor zu `.special`, um zu sehen, wie sich das Styling ändert.

Die Regeln der Spezifität und der Cascade können anfangs kompliziert erscheinen. Diese Regeln sind leichter zu verstehen, je vertrauter Sie mit CSS werden. Der Abschnitt [Cascade und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) im nächsten Modul erklärt dies im Detail, einschließlich wie man Spezifität berechnet.

Für den Moment, merken Sie, dass Spezifität existiert. Manchmal könnte CSS nicht wie erwartet angewendet werden, weil etwas anderes im Stylesheet mehr Spezifität hat. Zu erkennen, dass mehr als eine Regel auf ein Element angewendet werden könnte, ist der erste Schritt zur Behebung dieser Art von Problemen.

## Eigenschaften und Werte

Auf der grundlegendsten Ebene besteht CSS aus zwei Komponenten:

- **Eigenschaften**: Dies sind menschenlesbare Bezeichner, die angeben, welche stilistischen Merkmale Sie ändern möchten. Zum Beispiel: {{cssxref("font-size")}}, {{cssxref("width")}}, {{cssxref("background-color")}}.
- **Werte**: Jede Eigenschaft wird einem Wert zugewiesen. Dieser Wert gibt an, wie die Eigenschaft gestylt werden soll.

Das folgende Beispiel hebt eine einzelne Eigenschaft und einen Wert hervor. Der Name der Eigenschaft ist `color` und der Wert ist `blue`.

![Eine hervorgehobene Deklaration im CSS](declaration.png)

Wenn eine Eigenschaft mit einem Wert gepaart wird, wird diese Paarung als _CSS-Deklaration_ bezeichnet. CSS-Deklarationen befinden sich innerhalb von _CSS-Deklarationsblöcken_. Im folgenden Beispiel werden die CSS-Deklarationsblöcke hervorgehoben.

![Ein hervorgehobener Deklarationsblock](declaration-block.png)

Schließlich werden CSS-Deklarationsblöcke mit _Selektoren_ gepaart, um _CSS-Regelsätze_ (oder _CSS-Regeln_) zu erzeugen. Das folgende Beispiel enthält zwei Regeln: eine für den `h1`-Selektor und eine für den `p`-Selektor. Die farbige Hervorhebung kennzeichnet die `h1`-Regel.

![Die Regel für h1 hervorgehoben](rules.png)

Das Setzen von CSS-Eigenschaften auf spezifische Werte ist der primäre Weg, Layout und Styling für ein Dokument zu definieren. Die CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden.

CSS-Eigenschaften und -Werte sind nicht case-sensitive. Der Name der Eigenschaft und der Wert in einem Eigenschaft-Wert-Paar werden durch einen Doppelpunkt (`:`) getrennt.

Schauen Sie sich die verschiedenen Werte der unten aufgelisteten Eigenschaften an. Schreiben Sie CSS-Regeln, die Styling auf verschiedene HTML-Elemente anwenden:

- {{cssxref("font-size")}}
- {{cssxref("width")}}
- {{cssxref("background-color")}}
- {{cssxref("color")}}
- {{cssxref("border")}}

> [!WARNING]
> Wenn eine Eigenschaft unbekannt ist oder ein Wert für eine gegebene Eigenschaft ungültig ist, wird die Deklaration als _ungültig_ verarbeitet. Sie wird von der CSS-Engine des Browsers komplett ignoriert.

> [!WARNING]
> In CSS (und anderen Webstandards) wurde vereinbart, dass die amerikanische Schreibweise der Standard ist, wo es sprachliche Variationen oder Unsicherheiten gibt. Zum Beispiel sollte `colour` als `color` geschrieben werden, da `colour` nicht funktionieren wird.

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

Dies wird gerendert als:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im Fall des `calc()`-Beispiels oben definieren die Werte die Breite dieses Blocks als 90% der Blockbreite des Containers minus 30 Pixel. Das Ergebnis der Berechnung ist nichts, was im Voraus berechnet und als statischer Wert eingegeben werden kann.

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

{{EmbedLiveSample("Transform_functions", "100%", 200)}}

Schauen Sie sich die verschiedenen Werte der unten aufgelisteten Eigenschaften an. Schreiben Sie CSS-Regeln, die Styling auf verschiedene HTML-Elemente anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Verlaufswerte
- {{cssxref("color")}}, insbesondere rgb- und hsl-Werte

## @rules

CSS-[At-Regeln](/de/docs/Web/CSS/At-rule) (ausgesprochen "at-rules") geben Anweisungen, was CSS ausführen oder wie es sich verhalten soll. Einige At-Regeln sind einfach mit nur einem Schlüsselwort und einem Wert. Zum Beispiel importiert `@import` ein Stylesheet in ein anderes CSS-Stylesheet:

```css
@import "styles2.css";
```

Eine häufig vorkommende At-Regel, auf die Sie stoßen werden, ist `@media`, die verwendet wird, um [Media Queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media Queries verwenden bedingte Logik, um CSS-Styling anzuwenden.

Im folgenden Beispiel definiert das Stylesheet einen standardmäßigen rosa Hintergrund für das `<body>`-Element. Es folgt jedoch eine Media Query, die einen blauen Hintergrund definiert, wenn das Browserfenster breiter als 30em ist.

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

Sie werden auf andere At-Rules in diesen Tutorials stoßen.

Versuchen Sie, eine Media Query hinzuzufügen, die Stile basierend auf der Viewport-Breite ändert. Ändern Sie die Breite Ihres Browserfensters, um das Ergebnis zu sehen.

## Verkürzungen

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, und {{cssxref("margin")}} werden als **Kurzform-Eigenschaften** bezeichnet. Dies liegt daran, dass Kurzform-Eigenschaften mehrere Werte in einer einzigen Zeile setzen.

Zum Beispiel, diese eine Zeile Code:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

ist gleichbedeutend mit den folgenden vier Zeilen:

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

Später im Kurs werden Sie auf viele weitere Beispiele für Kurzform-Eigenschaften stoßen. MDNs [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine gute Ressource für weitere Informationen zu jeder Kurzform-Eigenschaft.

Versuchen Sie, die Deklarationen (oben) in Ihrem eigenen CSS-Projekt zu verwenden, um sich mit ihrer Funktionsweise vertraut zu machen. Sie können auch mit verschiedenen Werten experimentieren.

> [!WARNING]
> Ein weniger offensichtlicher Aspekt der Verwendung von CSS-Kurzform liegt darin, wie ausgelassene Werte zurückgesetzt werden. Ein in CSS-Kurzform nicht spezifizierter Wert kehrt zu seinem Anfangswert zurück. Dies bedeutet, dass ein Weglassen in der CSS-Kurzform zuvor festgelegte Werte **überschreiben** kann.

## Kommentare

Wie bei jeder Programmierarbeit ist es eine gute Praxis, zusammen mit CSS Kommentare zu schreiben. Das hilft Ihnen dabei, sich später zu erinnern, wie der Code funktioniert, wenn Sie zu Verbesserungen oder Korrekturen zurückkehren. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im folgenden Beispiel markieren Kommentare den Beginn von unterschiedlichen Codeabschnitten. Dies hilft, sich im Code zurechtzufinden, wenn er größer wird. Mit solch einer Kommentierung wird das Suchen nach Kommentaren in Ihrem Code-Editor zu einem effizienten Weg, einen bestimmten Codeabschnitt zu finden.

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

Das "Auskommentieren" von Code ist auch nützlich, um Testabschnitte vorübergehend zu deaktivieren. Im folgenden Beispiel sind die Regeln für `.special` durch "Auskommentieren" des Codes deaktiviert.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Versuchen Sie, Kommentare in Ihrem CSS hinzuzufügen.

## White Space

White Space bedeutet tatsächliche Leerzeichen, Tabulatoren und neue Zeilen. Genau wie Browser zusätzliche Leerzeichen in HTML ignorieren, ignorieren Browser auch zusätzliche Leerzeichen innerhalb von CSS. Der Vorteil von White Space besteht darin, dass er die Lesbarkeit verbessert.

Im folgenden Beispiel hat jede Deklaration (und Regelbeginn/-ende) ihre eigene Zeile. Dies ist wahrscheinlich eine gute Art, CSS zu schreiben. Es erleichtert die Wartung und das Verständnis von CSS.

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

Das nächste Beispiel zeigt das äquivalente CSS in einem komprimierteren Format, mit allen extra Leerzeichen entfernt. Obwohl die beiden Beispiele gleich funktionieren, ist das unten stehende schwieriger zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}

h1{font-size:1.5em;}

div p,#id:first-line{background-color:red;border-radius:3px;}
div p{margin:0;padding:1em;}
div p+p{padding-top:0;}
```

Für Ihre eigenen Projekte formatieren Sie Ihren Code nach persönlicher Präferenz. Bei Teamprojekten könnte es sein, dass ein Team oder Projekt eine eigene Stilrichtlinie hat.

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

Sehen Sie die Abstandsfehler? Erstens wird `0auto` nicht als gültiger Wert für die Eigenschaft `margin` erkannt. Der Eintrag `0auto` soll zwei separate Werte darstellen: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenname (`padding-left`) ist durch ein fehlerhaftes Leerzeichen getrennt.

Sie sollten immer darauf achten, unterschiedliche Werte mindestens durch ein Leerzeichen voneinander zu trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte zusammen als einzelne ungebrochene Zeichenketten.

Um herauszufinden, wie Abstände CSS brechen können, versuchen Sie, mit Abständen in Ihrem Test-CSS zu experimentieren.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie CSS strukturiert ist. Es ist auch nützlich zu verstehen, wie der Browser HTML und CSS verwendet, um eine Webseite darzustellen. Der nächste Artikel, [Wie CSS funktioniert](/de/docs/Learn/CSS/First_steps/How_CSS_works), erklärt den Prozess.

{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
