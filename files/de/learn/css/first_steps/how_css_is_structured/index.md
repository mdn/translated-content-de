---
title: Wie CSS aufgebaut ist
slug: Learn/CSS/First_steps/How_CSS_is_structured
l10n:
  sourceCommit: a846e591b43c33ab17d991013acdf227ae190b40
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Nun, da Sie beginnen, den Zweck und die Verwendung von CSS zu verstehen, lassen Sie uns die Struktur von CSS genauer betrachten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, grundlegendes Wissen über
        <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Die grundlegenden Syntaxstrukturen von CSS im Detail kennenlernen.</td>
    </tr>
  </tbody>
</table>

## Anwenden von CSS auf HTML

Zuerst untersuchen wir drei Methoden, um CSS auf ein Dokument anzuwenden: mit einem externen Stylesheet, einem internen Stylesheet und Inline-Stilen.

### Externes Stylesheet

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Erweiterung `.css`. Dies ist die gebräuchlichste und nützlichste Methode, um CSS auf ein Dokument anzuwenden. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verknüpfen und alle mit dem gleichen CSS-Stylesheet gestalten. Im Abschnitt [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps/Getting_started) haben wir ein externes Stylesheet mit unserer Webseite verknüpft.

Sie referenzieren ein externes CSS-Stylesheet von einem HTML-`<link>`-Element aus:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>Mein CSS-Experiment</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Hallo Welt!</h1>
    <p>Dies ist mein erstes CSS-Beispiel</p>
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

Das `href`-Attribut des {{htmlelement("link")}}-Elements muss auf eine Datei in Ihrem Dateisystem verweisen. Im obigen Beispiel befindet sich die CSS-Datei im gleichen Ordner wie das HTML-Dokument, aber Sie können sie auch woanders platzieren und den Pfad anpassen. Hier sind drei Beispiele:

```html
<!-- Innerhalb eines Unterverzeichnisses namens styles im aktuellen Verzeichnis -->
<link rel="stylesheet" href="styles/style.css" />

<!-- Innerhalb eines Unterverzeichnisses namens general, das sich in einem Unterverzeichnis namens styles im aktuellen Verzeichnis befindet -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Eine Verzeichnisebene nach oben gehen, dann in ein Unterverzeichnis namens styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Internes Stylesheet

Ein internes Stylesheet befindet sich innerhalb eines HTML-Dokuments. Um ein internes Stylesheet zu erstellen, platzieren Sie CSS innerhalb eines {{htmlelement("style")}}-Elements im HTML-{{htmlelement("head")}}.

Das HTML für ein internes Stylesheet könnte so aussehen:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>Mein CSS-Experiment</title>
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
    <h1>Hallo Welt!</h1>
    <p>Dies ist mein erstes CSS-Beispiel</p>
  </body>
</html>
```

In einigen Fällen können interne Stylesheets nützlich sein. Vielleicht arbeiten Sie mit einem Content-Management-System, in dem Sie externe CSS-Dateien nicht ändern können.

Aber bei Websites mit mehr als einer Seite wird ein internes Stylesheet zu einer weniger effizienten Arbeitsweise. Um einheitliches CSS-Styling auf mehrere Seiten mit internen Stylesheets anzuwenden, muss jedes Webdokument, das das Styling verwendet, ein internes Stylesheet haben. Dieser Effizienzverlust betrifft auch die Wartung der Website. Mit CSS in internen Stylesheets besteht das Risiko, dass selbst eine einfache Stiländerung Bearbeitungen an mehreren Webseiten erfordert.

### Inline-Stile

Inline-Stile sind CSS-Deklarationen, die nur ein einzelnes HTML-Element betreffen und sich innerhalb eines `style`-Attributs befinden. Die Implementierung eines Inline-Stils in einem HTML-Dokument könnte so aussehen:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>Mein CSS-Experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">
      Hallo Welt!
    </h1>
    <p style="color:red;">Dies ist mein erstes CSS-Beispiel</p>
  </body>
</html>
```

**Vermeiden Sie, CSS auf diese Weise zu verwenden, wenn möglich.** Es steht im Gegensatz zu gängigen Best Practices. Erstens ist es die am wenigsten effiziente Implementierung von CSS für Wartungsarbeiten. Eine Stiländerung kann mehrere Bearbeitungen innerhalb einer einzelnen Webseite erfordern. Zweitens mischt Inline-CSS (CSS) Präsentationscode mit HTML und Inhalten, was das Lesen und Verstehen erschwert. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Es gibt einige Umstände, in denen Inline-Stile häufiger anzutreffen sind. Sie könnten gezwungen sein, Inline-Stile zu verwenden, wenn Ihre Arbeitsumgebung sehr restriktiv ist. Beispielsweise erlaubt Ihr CMS möglicherweise nur das Bearbeiten des HTML-Körpers. Sie können auch viele Inline-Stile in HTML-E-Mails sehen, um die Kompatibilität mit möglichst vielen E-Mail-Clients zu erreichen.

## Spielen mit dem CSS in diesem Artikel

Für die folgende Übung erstellen Sie einen Ordner auf Ihrem Computer. Sie können den Ordner beliebig benennen. Kopieren Sie den untenstehenden Text, um zwei Dateien im Ordner zu erstellen:

**index.html:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Meine CSS-Experimente</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <p>Erstellen Sie hier Ihr Test-HTML</p>
  </body>
</html>
```

**styles.css:**

```css
/* Erstellen Sie hier Ihr Test-CSS */

p {
  color: red;
}
```

Wenn Sie CSS finden, mit dem Sie experimentieren möchten, ersetzen Sie den Inhalt des HTML-`<body>`-Elements durch etwas HTML, das Sie stylen möchten, und fügen Sie dann Ihren Test-CSS-Code in Ihre CSS-Datei ein.

Alternativ können Sie auch den interaktiven Editor unten verwenden.

{{EmbedGHLiveSample("css-examples/learn/getting-started/experiment-sandbox.html", '100%', 800)}}

Lesen Sie weiter und haben Sie Spaß!

## Selektoren

Ein Selektor zielt auf HTML ab, um Stile auf Inhalte anzuwenden. Wir haben bereits eine Vielzahl von Selektoren im Tutorial [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps/Getting_started) entdeckt. Wenn CSS nicht wie erwartet auf Inhalte angewendet wird, passt Ihr Selektor möglicherweise nicht so, wie Sie denken.

Jede CSS-Regel beginnt mit einem Selektor — oder einer Liste von Selektoren — um dem Browser mitzuteilen, auf welche Elemente die Regeln angewendet werden sollen. Alle untenstehenden Beispiele sind gültige Selektoren oder Selektorenlisten.

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

Versuchen Sie, einige CSS-Regeln zu erstellen, die die oben aufgeführten Selektoren verwenden. Fügen Sie HTML hinzu, das von den Selektoren gestylt wird. Wenn Ihnen die Syntax oben nicht vertraut ist, suchen Sie auf MDN danach.

> [!NOTE]
> Sie werden im nächsten Modul mehr über Selektoren erfahren: [CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors).

### Spezifität

Sie können Szenarien begegnen, in denen zwei Selektoren dasselbe HTML-Element auswählen. Betrachten Sie das folgende Stylesheet mit einem `p`-Selektor, der den Text von Absätzen auf blau setzt. Es gibt jedoch auch eine Klasse, die den Text der ausgewählten Elemente auf rot setzt.

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

Angenommen, in unserem HTML-Dokument haben wir einen Absatz mit einer Klasse von `special`. Beide Regeln gelten. Welcher Selektor setzt sich durch? Erwarten Sie, blauen oder roten Absatztext zu sehen?

```html
<p class="special">Welche Farbe habe ich?</p>
```

Die CSS-Sprache hat Regeln, um zu steuern, welcher Selektor im Falle eines Konflikts stärker ist. Diese Regeln werden als **Cascade** und **Spezifität** bezeichnet. Im folgenden Codeblock definieren wir zwei Regeln für den `p`-Selektor, aber der Absatztext wird blau sein. Dies liegt daran, dass die Deklaration, die den Absatztext auf blau setzt, später im Stylesheet erscheint. Spätere Styles ersetzen widersprüchliche Styles, die früher im Stylesheet erscheinen. Dies ist die **Cascade**-Regel.

```css
p {
  color: red;
}

p {
  color: blue;
}
```

Im Fall unseres früheren Beispiels mit dem Konflikt zwischen dem Klassen- und dem Elementselektor setzt sich jedoch die Klasse durch und macht den Absatztext rot. Wie kann das passieren, obwohl ein widersprüchlicher Stil später im Stylesheet erscheint? Eine Klasse wird als spezifischer eingestuft, das heißt, sie hat mehr **Spezifität** als der Elementselektor, daher hebt sie die andere widersprüchliche Stil-Deklaration auf.

Probieren Sie dieses Experiment selbst aus! Fügen Sie HTML hinzu, dann die beiden `p { }`-Regeln zu Ihrem Stylesheet hinzu. Ändern Sie dann den ersten `p`-Selektor zu `.special`, um zu sehen, wie sich das Styling ändert.

Die Regeln der Spezifität und der Cascade können zunächst kompliziert erscheinen. Diese Regeln sind leichter zu verstehen, je vertrauter Sie mit CSS werden. Der Abschnitt [Kaskade und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) im nächsten Modul erklärt dies im Detail, einschließlich der Berechnung der Spezifität.

Für den Moment sollten Sie sich merken, dass es eine Spezifität gibt. Manchmal wird CSS möglicherweise nicht wie erwartet angewendet, weil etwas anderes im Stylesheet mehr Spezifität hat. Zu erkennen, dass mehr als eine Regel auf ein Element angewendet werden könnte, ist der erste Schritt zur Lösung solcher Probleme.

## Eigenschaften und Werte

Auf der grundlegendsten Ebene besteht CSS aus zwei Komponenten:

- **Eigenschaften**: Dies sind menschengerechte Bezeichner, die angeben, welche stilistischen Merkmale Sie ändern möchten. Zum Beispiel {{cssxref("font-size")}}, {{cssxref("width")}}, {{cssxref("background-color")}}.
- **Werte**: Jeder Eigenschaft wird ein Wert zugewiesen. Dieser Wert gibt an, wie die Eigenschaft gestylt werden soll.

Das untenstehende Beispiel hebt eine einzelne Eigenschaft und einen Wert hervor. Der Eigenschaftsname ist `color` und der Wert ist `blue`.

![Eine hervorgehobene Deklaration im CSS](declaration.png)

Wenn eine Eigenschaft mit einem Wert kombiniert wird, spricht man von einer _CSS-Deklaration_. CSS-Deklarationen finden sich in _CSS-Deklarationsblöcken_. Im folgenden Beispiel identifiziert die Hervorhebung den CSS-Deklarationsblock.

![Ein hervorgehobener Deklarationsblock](declaration-block.png)

Schließlich werden CSS-Deklarationsblöcke mit _Selektoren_ kombiniert, um _CSS-Regelsätze_ (oder _CSS-Regeln_) zu erzeugen. Das folgende Beispiel enthält zwei Regeln: eine für den `h1`-Selektor und eine für den `p`-Selektor. Die farbige Hervorhebung identifiziert die `h1`-Regel.

![Die Regel für h1 hervorgehoben](rules.png)

Das Festlegen von CSS-Eigenschaften auf bestimmte Werte ist der primäre Weg, um das Layout und Styling für ein Dokument zu definieren. Die CSS-Engine berechnet, welche Deklarationen auf jedes einzelne Element einer Seite angewendet werden.

CSS-Eigenschaften und Werte sind nicht case-sensitiv. Die Eigenschaft und der Wert in einem Eigenschaft-Wert-Paar werden durch einen Doppelpunkt (`:`) getrennt.

Suchen Sie nach verschiedenen Werten der unten aufgeführten Eigenschaften. Schreiben Sie CSS-Regeln, die Styling auf verschiedene HTML-Elemente anwenden:

- {{cssxref("font-size")}}
- {{cssxref("width")}}
- {{cssxref("background-color")}}
- {{cssxref("color")}}
- {{cssxref("border")}}

> [!WARNING]
> Wenn eine Eigenschaft unbekannt ist oder ein Wert für eine gegebene Eigenschaft ungültig ist, wird die Deklaration als _ungültig_ behandelt. Sie wird von der CSS-Engine des Browsers komplett ignoriert.

> [!WARNING]
> In CSS (und anderen Web-Standards) wurde vereinbart, dass die US-Schreibweise der Standard ist, wo es Sprachvariationen oder Unsicherheiten gibt. Zum Beispiel sollte `colour` als `color` geschrieben werden, da `colour` nicht funktionieren wird.

### Funktionen

Während die meisten Werte relativ einfache Schlüsselwörter oder numerische Werte sind, gibt es einige Werte, die die Form einer Funktion annehmen.

#### Die Funktion calc()

Ein Beispiel wäre die `calc()`-Funktion, die einfache Mathematik innerhalb von CSS durchführen kann:

```html
<div class="outer"><div class="box">Das innere Kästchen ist 90% - 30px.</div></div>
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

Eine Funktion besteht aus dem Funktionsnamen und Klammern, um die Werte für die Funktion einzuschließen. Im Falle des obigen `calc()`-Beispiels definieren die Werte die Breite dieses Kästchens als 90 % der Breite des umgebenden Blocks minus 30 Pixel. Das Ergebnis der Berechnung kann nicht im Voraus berechnet und als statischer Wert eingegeben werden.

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

Suchen Sie nach verschiedenen Werten der unten aufgeführten Eigenschaften. Schreiben Sie CSS-Regeln, die Styling auf verschiedene HTML-Elemente anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradientenwerte
- {{cssxref("color")}}, insbesondere rgb- und hsl-Werte

## @-Regeln

CSS [@-Regeln](/de/docs/Web/CSS/At-rule) (ausgesprochen „at-rules“) bieten Anweisungen, was CSS ausführen oder wie es sich verhalten soll. Einige @-Regeln sind einfach, nur mit einem Schlüsselwort und einem Wert. Zum Beispiel importiert `@import` ein Stylesheet in ein anderes CSS-Stylesheet:

```css
@import "styles2.css";
```

Eine häufige @-Regel, die Sie wahrscheinlich begegnen werden, ist `@media`, die zur Erstellung von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwendet wird. Media Queries verwenden bedingte Logik, um CSS-Styling anzuwenden.

Im folgenden Beispiel definiert das Stylesheet eine standardmäßige rosa Hintergrundfarbe für das `<body>`-Element. Es folgt jedoch eine Media Query, die einen blauen Hintergrund definiert, wenn die Browseransicht breiter als 30em ist.

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

Sie werden im Laufe dieser Tutorials auf weitere @-Regeln stoßen.

Versuchen Sie, eine Media Query hinzuzufügen, die Stile basierend auf der Breite des Viewports ändert. Ändern Sie die Breite Ihres Browserfensters, um das Ergebnis zu sehen.

## Kurzschreibweisen

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} und {{cssxref("margin")}} werden als **Kurzschreibweiseigenschaften** bezeichnet. Dies liegt daran, dass Kurzschreibweiseigenschaften mehrere Werte in einer einzigen Zeile festlegen.

Beispielsweise ist diese eine Zeile Code:

```css
/* Bei 4-Werte-Kurzschreibweisen wie padding und margin werden die Werte 
   in der Reihenfolge oben, rechts, unten, links (im Uhrzeigersinn von oben) angewendet. Es gibt 
   auch andere Kurzschreibtypen, beispielsweise 2-Werte-Kurzschreibweisen, die padding/margin 
   für oben/unten und dann links/rechts festlegen */
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

Im Laufe des Kurses werden Sie auf viele weitere Beispiele für Kurzschreibweiseigenschaften stoßen. Das [CSS-Referenz](/de/docs/Web/CSS/Reference) von MDN ist eine gute Ressource für weitere Informationen über jede Kurzschreibweise.

Versuchen Sie, die Deklarationen (oben) in Ihrer eigenen CSS-Übung zu verwenden, um ein besseres Verständnis dafür zu bekommen, wie es funktioniert. Sie können auch mit verschiedenen Werten experimentieren.

> [!WARNING]
> Ein weniger offensichtlicher Aspekt bei der Verwendung von CSS-Kurzschreibweise ist, wie ausgelassene Werte zurückgesetzt werden. Ein in der CSS-Kurzschreibweise nicht spezifizierter Wert kehrt zu seinem Anfangswert zurück. Das bedeutet, dass eine Auslassung in der CSS-Kurzschreibweise zuvor festgelegte Werte überschreiben kann.

## Kommentare

Wie bei jeder Codierungsarbeit ist es Best Practice, Kommentare zusammen mit CSS zu schreiben. Dies hilft Ihnen, sich daran zu erinnern, wie der Code funktioniert, wenn Sie später für Korrekturen oder Erweiterungen darauf zurückkommen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im folgenden Beispiel markieren Kommentare den Beginn von verschiedene Abschnitten des Codes. Dies hilft beim Navigieren im Code in größeren Datenmengen. Mit dieser Art von Kommentaren an Ort und Stelle wird die Suche nach Kommentaren in Ihrem Code-Editor zu einer effektiven Methode, um einen Abschnitt des Codes zu finden.

```css
/* Grundlegende Elementstilierung handhaben */
/* --------------------------------------- */
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
  /* Erhöhen Sie die globale Schriftgröße auf größeren Bildschirmen oder Fenstern
     für eine bessere Lesbarkeit */
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

/* Handhaben Sie spezifische Elemente, die im DOM verschachtelt sind */
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

Das „Auskommentieren“ von Code ist auch nützlich, um vorübergehend Abschnitte des Codes zum Testen zu deaktivieren. Im folgenden Beispiel sind die Regeln für `.special` durch „Auskommentieren“ des Codes deaktiviert.

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

Leerzeichen bedeuten tatsächliche Leerzeichen, Tabs und neue Zeilen. Ebenso wie Browser zusätzliche Leerzeichen in HTML ignorieren, ignorieren Browser zusätzliche Leerzeichen in CSS. Der Vorteil von Leerzeichen besteht darin, dass sie die Lesbarkeit verbessern.

Im folgenden Beispiel hat jede Deklaration (und der Beginn/das Ende der Regel) ihre eigene Zeile. Dies ist arguably eine gute Art, CSS zu schreiben. Es macht es einfacher, CSS zu pflegen und zu verstehen.

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

Das nächste Beispiel zeigt das äquivalente CSS in einem kompakteren Format, mit all dem zusätzlichen Leerraum entfernt. Obwohl die beiden Beispiele gleich funktionieren, ist das untere schwerer zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}

h1{font-size:1.5em;}

div p,#id:first-line{background-color:red;border-radius:3px;}
div p{margin:0;padding:1em;}
div p+p{padding-top:0;}
```

Für Ihre eigenen Projekte formatieren Sie Ihren Code nach persönlichem Geschmack. Bei Teamprojekten stellen Sie möglicherweise fest, dass ein Team oder Projekt über einen eigenen Stilführer verfügt.

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

Erkennen Sie die Abstandsfehler? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` soll zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft. Der korrekte Eigenschaftsname (`padding-left`) wird durch ein falsches Leerzeichen getrennt.

Sie sollten immer sicherstellen, dass Sie unterschiedliche Werte voneinander durch mindestens ein Leerzeichen trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte zusammen als einzelne, ununterbrochene Zeichenfolgen.

Um herauszufinden, wie Leerzeichen CSS brechen können, versuchen Sie, mit dem Leerraum in Ihrem Test-CSS zu spielen.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie CSS aufgebaut ist. Es ist auch nützlich zu verstehen, wie der Browser HTML und CSS verwendet, um eine Webseite darzustellen. Der nächste Artikel, [Wie CSS funktioniert](/de/docs/Learn/CSS/First_steps/How_CSS_works), erklärt den Prozess.

{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
