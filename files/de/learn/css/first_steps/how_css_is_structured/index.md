---
title: Der Aufbau von CSS
slug: Learn/CSS/First_steps/How_CSS_is_structured
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Jetzt, wo Sie beginnen, den Zweck und die Verwendung von CSS zu verstehen, lassen Sie uns die Struktur von CSS genauer untersuchen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, grundlegende Kenntnisse im
        <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Die grundlegenden Syntaxstrukturen von CSS im Detail erlernen.</td>
    </tr>
  </tbody>
</table>

## Anwenden von CSS auf HTML

Zuerst betrachten wir drei Methoden, um CSS auf ein Dokument anzuwenden: mit einem externen Stylesheet, mit einem internen Stylesheet und mit Inline-Stilen.

### Externes Stylesheet

Ein externes Stylesheet enthält CSS in einer separaten Datei mit der Erweiterung `.css`. Dies ist die gebräuchlichste und nützlichste Methode, um CSS auf ein Dokument zu bringen. Sie können eine einzelne CSS-Datei mit mehreren Webseiten verlinken und alle mit demselben CSS-Stylesheet gestalten. Im [Einstieg in CSS](/de/docs/Learn/CSS/First_steps/Getting_started) haben wir ein externes Stylesheet mit unserer Webseite verlinkt.

Ein externes CSS-Stylesheet wird aus einem HTML-`<link>`-Element referenziert:

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

Das `href`-Attribut des {{htmlelement("link")}}-Elements muss auf eine Datei in Ihrem Dateisystem verweisen. Im obigen Beispiel befindet sich die CSS-Datei im selben Ordner wie das HTML-Dokument, aber Sie können es woanders platzieren und den Pfad anpassen. Hier sind drei Beispiele:

```html
<!-- Inside a subdirectory called styles inside the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- Inside a subdirectory called general, which is in a subdirectory called styles, inside the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go up one directory level, then inside a subdirectory called styles -->
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

In gewissen Umständen können interne Stylesheets nützlich sein. Zum Beispiel, wenn Sie mit einem Content-Management-System arbeiten, das Sie daran hindert, externe CSS-Dateien zu ändern.

Für Websites mit mehr als einer Seite wird ein internes Stylesheet jedoch zu einer weniger effizienten Arbeitsweise. Um auf mehreren Seiten einheitliches CSS-Styling zu verwenden, müssen Sie ein internes Stylesheet auf jeder Webseite haben, die das Styling nutzt. Diese Effizienzstrafe überträgt sich auch auf die Wartung der Website. Mit CSS in internen Stylesheets besteht das Risiko, dass sogar eine einfache Stiländerung Bearbeitungen in mehreren Webseiten erfordern kann.

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

**Vermeiden Sie es, CSS auf diese Weise zu verwenden, wenn möglich.** Es ist das Gegenteil einer Best Practice. Erstens ist es die ineffizienteste Implementierung von CSS für die Wartung. Eine Stiländerung könnte mehrere Bearbeitungen innerhalb einer einzigen Webseite erfordern. Zweitens mischen Inline-CSS auch (CSS-)Präsentationscode mit HTML und Inhalt, was alles schwieriger zu lesen und zu verstehen macht. Die Trennung von Code und Inhalt erleichtert die Wartung für alle, die an der Website arbeiten.

Es gibt einige Umstände, in denen Inline-Stile häufiger vorkommen. Möglicherweise müssen Sie auf die Verwendung von Inline-Stilen zurückgreifen, wenn Ihr Arbeitsumfeld sehr restriktiv ist. Zum Beispiel, wenn Ihr CMS Sie nur die HTML-Body bearbeiten lässt. Sie können auch viele Inline-Stile in HTML-E-Mails sehen, um die Kompatibilität mit so vielen E-Mail-Clients wie möglich zu erreichen.

## Spielen mit dem CSS in diesem Artikel

Für die folgende Übung erstellen Sie einen Ordner auf Ihrem Computer. Sie können den Ordner benennen, wie Sie möchten. Kopieren Sie den unten stehenden Text, um zwei Dateien zu erstellen:

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

Wenn Sie CSS finden, mit dem Sie experimentieren möchten, ersetzen Sie den HTML-`<body>`-Inhalt durch etwas HTML zum Stylen, und fügen Sie dann Ihren Test-CSS-Code Ihrer CSS-Datei hinzu.

Alternativ können Sie auch den interaktiven Editor unten verwenden.

{{EmbedGHLiveSample("css-examples/learn/getting-started/experiment-sandbox.html", '100%', 800)}}

Lesen Sie weiter und haben Sie Spaß!

## Selektoren

Ein Selektor zielt auf HTML, um Stile auf Inhalte anzuwenden. Wir haben bereits eine Vielzahl von Selektoren im [Einstieg in CSS](/de/docs/Learn/CSS/First_steps/Getting_started) Tutorial entdeckt. Wenn CSS nicht wie erwartet auf Inhalte angewendet wird, könnte es daran liegen, dass Ihr Selektor nicht so übereinstimmt, wie Sie denken.

Jede CSS-Regel beginnt mit einem Selektor – oder einer Liste von Selektoren – um dem Browser mitzuteilen, auf welches Element oder welche Elemente die Regeln angewendet werden sollen. Alle unten stehenden Beispiele sind gültige Selektoren oder Listen von Selektoren.

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

Versuchen Sie, einige CSS-Regeln zu erstellen, die die oben genannten Selektoren verwenden. Fügen Sie HTML hinzu, das von den Selektoren gestylt werden soll. Wenn Ihnen eine der oben genannten Syntaxen nicht bekannt ist, versuchen Sie, bei MDN danach zu suchen.

> [!NOTE]
> Sie werden mehr über Selektoren im nächsten Modul erfahren: [CSS Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors).

### Spezifität

Sie könnten auf Szenarien stoßen, in denen zwei Selektoren dasselbe HTML-Element auswählen. Betrachten Sie das folgende Stylesheet mit einem `p`-Selektor, der den Absatztext auf blau setzt. Es gibt jedoch auch eine Klasse, die den Text ausgewählter Elemente auf rot setzt.

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

Angenommen, wir haben in unserem HTML-Dokument einen Absatz mit der Klasse `special`. Beide Regeln gelten. Welcher Selector setzt sich durch? Erwarten Sie, blauen oder roten Absatztext zu sehen?

```html
<p class="special">What color am I?</p>
```

Die CSS-Sprache hat Regeln, um zu steuern, welcher Selektor bei einem Konflikt stärker ist. Diese Regeln werden als **Kaskade** und **Spezifität** bezeichnet. Im folgenden Code-Block definieren wir zwei Regeln für den `p`-Selektor, aber der Absatztext wird blau. Dies liegt daran, dass die Deklaration, die den Absatztext auf blau setzt, später im Stylesheet erscheint. Spätere Stile ersetzen widersprüchliche Stile, die früher im Stylesheet erscheinen. Dies ist die **Kaskadenregel**.

```css
p {
  color: red;
}

p {
  color: blue;
}
```

In dem Fall unseres früheren Beispiels mit dem Konflikt zwischen dem Klassenselektor und dem Elementselektor setzt sich jedoch die Klasse durch und macht den Absatztext rot. Wie kann dies geschehen, obwohl ein widersprüchlicher Stil später im Stylesheet erscheint? Eine Klasse wird als spezifischer, also mit mehr **Spezifität** als der Elementselektor bewertet, daher wird die andere widersprüchliche Stil-Deklaration aufgehoben.

Probieren Sie dieses Experiment selbst aus! Fügen Sie HTML hinzu, dann fügen Sie die beiden `p { }`-Regeln Ihrem Stylesheet hinzu. Ändern Sie als Nächstes den ersten `p`-Selektor in `.special`, um zu sehen, wie sich das Styling ändert.

Die Regeln für Spezifität und Kaskade können anfangs kompliziert erscheinen. Diese Regeln sind leichter verständlich, je vertrauter Sie mit CSS werden. Der Abschnitt [Kaskade und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) im nächsten Modul erklärt dies ausführlich, einschließlich der Berechnung der Spezifität.

Für den Moment merken Sie sich, dass Spezifität existiert. Manchmal wird CSS möglicherweise nicht wie erwartet angewendet, weil etwas anderes im Stylesheet mehr Spezifität hat. Zu erkennen, dass mehr als eine Regel auf ein Element angewendet werden könnte, ist der erste Schritt zur Behebung dieser Art von Problemen.

## Eigenschaften und Werte

Auf der grundlegendsten Ebene besteht CSS aus zwei Komponenten:

- **Eigenschaften**: Dies sind menschenlesbare Bezeichner, die angeben, welche Stilmerkmale Sie ändern möchten. Zum Beispiel {{cssxref("font-size")}}, {{cssxref("width")}}, {{cssxref("background-color")}}.
- **Werte**: Jeder Eigenschaft wird ein Wert zugewiesen. Dieser Wert gibt an, wie die Eigenschaft gestylt werden soll.

Das folgende Beispiel hebt eine einzelne Eigenschaft und einen Wert hervor. Der Eigenschaftsname ist `color` und der Wert ist `blue`.

![Eine im CSS hervorgehobene Deklaration](declaration.png)

Wenn eine Eigenschaft mit einem Wert gepaart ist, wird diese Paarung als _CSS-Deklaration_ bezeichnet. CSS-Deklarationen befinden sich innerhalb von _CSS-Deklarationsblöcken_. Im folgenden Beispiel identifiziert die Hervorhebung den CSS-Deklarationsblock.

![Ein hervorgehobener Deklarationsblock](declaration-block.png)

Schließlich werden CSS-Deklarationsblöcke mit _Selektoren_ gepaart, um _CSS-Regelsätze_ (oder _CSS-Regeln_) zu erzeugen. Das Beispiel unten enthält zwei Regeln: eine für den `h1`-Selektor und eine für den `p`-Selektor. Die farbige Hervorhebung identifiziert die `h1`-Regel.

![Die Regel für h1 hervorgehoben](rules.png)

Das Setzen von CSS-Eigenschaften auf bestimmte Werte ist der primäre Weg, Layout und Styling für ein Dokument zu definieren. Die CSS-Engine berechnet, welche Deklarationen für jedes einzelne Element einer Seite gelten.

CSS-Eigenschaften und -Werte sind nicht zwischen Groß- und Kleinschreibung unterscheidend. Die Eigenschaft und der Wert in einem Eigenschaft-Werte-Paar sind durch einen Doppelpunkt (`:`) getrennt.

Schauen Sie sich verschiedene Werte der unten aufgelisteten Eigenschaften an. Schreiben Sie CSS-Regeln, die bei verschiedenen HTML-Elementen Styling anwenden:

- {{cssxref("font-size")}}
- {{cssxref("width")}}
- {{cssxref("background-color")}}
- {{cssxref("color")}}
- {{cssxref("border")}}

> [!WARNING]
> Wenn eine Eigenschaft unbekannt ist oder ein Wert für eine gegebene Eigenschaft ungültig ist, wird die Deklaration als _ungültig_ verarbeitet. Sie wird von der CSS-Engine des Browsers vollständig ignoriert.

> [!WARNING]
> In CSS (und anderen Webstandards) wurde vereinbart, dass die amerikanische Schreibweise der Standard ist, wenn es sprachliche Variationen oder Unsicherheiten gibt. Zum Beispiel sollte `colour` als `color` geschrieben werden, da `colour` nicht funktionieren wird.

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

Dies rendert als:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

Eine Funktion besteht aus dem Funktionsnamen und Klammern, die die Werte für die Funktion einschließen. Im Beispiel der `calc()`-Funktion oben definieren die Werte die Breite dieser Box als 90% der Breite des umgebenden Blocks minus 30 Pixel. Das Ergebnis der Berechnung ist nichts, das im Voraus berechnet und als statischer Wert eingegeben werden könnte.

#### Transformationsfunktionen

Ein weiteres Beispiel wären die verschiedenen Werte für {{cssxref("transform")}}, wie etwa `rotate()`.

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

Schauen Sie sich verschiedene Werte der unten aufgelisteten Eigenschaften an. Schreiben Sie CSS-Regeln, die bei verschiedenen HTML-Elementen Styling anwenden:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, insbesondere Gradientenwerte
- {{cssxref("color")}}, insbesondere rgb- und hsl-Werte

## @regeln

CSS-[@regeln](/de/docs/Web/CSS/At-rule) (ausgesprochen "at-rules") geben Anweisungen, was CSS ausführen soll oder wie es sich verhalten soll. Einige @Regeln sind einfach mit nur einem Schlüsselwort und einem Wert. Zum Beispiel importiert `@import` ein Stylesheet in ein anderes CSS-Stylesheet:

```css
@import "styles2.css";
```

Eine häufige @-Regel, auf die Sie wahrscheinlich stoßen werden, ist `@media`, die verwendet wird, um [Media Queries](/de/docs/Web/CSS/CSS_media_queries) zu erstellen. Media Queries verwenden bedingte Logik, um CSS-Styling anzuwenden.

Im folgenden Beispiel definiert das Stylesheet einen standardmäßigen rosa Hintergrund für das `<body>`-Element. Eine Media Query folgt jedoch, die einen blauen Hintergrund definiert, wenn das Browser-Viewport breiter als 30em ist.

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

Sie werden auf andere @-Regeln in diesen Tutorials stoßen.

Versuchen Sie, eine Media Query hinzuzufügen, die Stile basierend auf der Viewport-Breite ändert. Ändern Sie die Breite Ihres Browserfensters, um das Ergebnis zu sehen.

## Shorthands

Einige Eigenschaften wie {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} und {{cssxref("margin")}} werden als **Shorthand-Eigenschaften** bezeichnet. Das liegt daran, dass Shorthand-Eigenschaften mehrere Werte in einer einzelnen Zeile setzen.

Zum Beispiel entspricht diese eine Zeile Code:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

diesen vier Zeilen Code:

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

Später im Kurs werden Sie auf viele weitere Beispiele für Shorthand-Eigenschaften stoßen. MDN's [CSS-Referenz](/de/docs/Web/CSS/Reference) ist eine gute Ressource für weitere Informationen über Shorthand-Eigenschaften.

Versuchen Sie, die Deklarationen (oben) in Ihrer eigenen CSS-Übung zu verwenden, um sich besser damit vertraut zu machen, wie es funktioniert. Sie können auch mit verschiedenen Werten experimentieren.

> [!WARNING]
> Ein weniger offensichtlicher Aspekt bei der Verwendung von CSS-Shorthands ist, wie ausgelassene Werte zurückgesetzt werden. Ein nicht spezifizierter Wert in einem CSS-Shorthand wird auf seinen Initialwert zurückgesetzt. Das bedeutet, dass eine Auslassung in einem CSS-Shorthand zuvor gesetzte Werte **überschreiben kann**.

## Kommentare

Wie bei jeder Codierungsarbeit ist es eine Best Practice, Kommentare zusammen mit CSS zu schreiben. Dies hilft Ihnen, sich an die Funktionsweise des Codes zu erinnern, wenn Sie später für Korrekturen oder Erweiterungen darauf zurückkommen. Es hilft auch anderen, den Code zu verstehen.

CSS-Kommentare beginnen mit `/*` und enden mit `*/`. Im folgenden Beispiel markieren Kommentare den Beginn von separaten Codeabschnitten. Dies hilft, die Codebasis zu navigieren, wenn sie größer wird. Mit dieser Art von Kommentierung wird das Suchen nach Kommentaren in Ihrem Code-Editor ein Mittel, um effizient einen Abschnitt des Codes zu finden.

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

"Code auskommentieren" ist auch nützlich, um vorübergehend Codeabschnitte für Tests zu deaktivieren. Im folgenden Beispiel sind die Regeln für `.special` durch "Auskommentieren" des Codes deaktiviert.

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

Leerzeichen beziehen sich auf tatsächliche Leerzeichen, Tabs und neue Zeilen. Genauso wie Browser zusätzliche Leerzeichen in HTML ignorieren, ignorieren Browser zusätzliche Leerzeichen in CSS. Der Vorteil von Leerzeichen besteht darin, dass sie die Lesbarkeit verbessern.

Im folgenden Beispiel hat jede Deklaration (sowie Start/Ende der Regel) ihre eigene Zeile. Dies ist ein guter Weg, um CSS zu schreiben. Es macht es einfacher, CSS zu warten und zu verstehen.

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

Das nächste Beispiel zeigt das äquivalente CSS in einem komprimierten Format, bei dem alle zusätzlichen Leerzeichen entfernt wurden. Obwohl die beiden Beispiele gleich funktionieren, ist das unten stehend eher schwerer zu lesen.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}

h1{font-size:1.5em;}

div p,#id:first-line{background-color:red;border-radius:3px;}
div p{margin:0;padding:1em;}
div p+p{padding-top:0;}
```

Für Ihre eigenen Projekte werden Sie Ihren Code entsprechend Ihrer persönlichen Präferenz formatieren. Bei Teamprojekten könnten Sie feststellen, dass ein Team oder Projekt seinen eigenen Stilguide hat.

> [!WARNING]
> Obwohl Leerzeichen die Werte in CSS-Deklarationen trennen, haben **Eigenschaftsnamen niemals Leerzeichen**.

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

Sehen Sie die Abstandsfehler? Erstens wird `0auto` nicht als gültiger Wert für die `margin`-Eigenschaft erkannt. Der Eintrag `0auto` sollte zwei separate Werte sein: `0` und `auto`. Zweitens erkennt der Browser `padding-` nicht als gültige Eigenschaft an. Der korrekte Eigenschaftsname (`padding-left`) wird durch ein unerwünschtes Leerzeichen getrennt.

Sie sollten immer sicherstellen, dass Sie separate Werte durch mindestens ein Leerzeichen voneinander trennen. Halten Sie Eigenschaftsnamen und Eigenschaftswerte als einzelne ungebrochene Zeichenketten zusammen.

Um herauszufinden, wie Abstände CSS brechen können, versuchen Sie, mit Abständen in Ihrem Test-CSS zu spielen.

## Zusammenfassung

Zu diesem Zeitpunkt sollten Sie eine bessere Vorstellung davon haben, wie CSS aufgebaut ist. Es ist auch nützlich zu verstehen, wie der Browser HTML und CSS verwendet, um eine Webseite darzustellen. Der nächste Artikel, [Wie CSS funktioniert](/de/docs/Learn/CSS/First_steps/How_CSS_works), erklärt den Prozess.

{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
