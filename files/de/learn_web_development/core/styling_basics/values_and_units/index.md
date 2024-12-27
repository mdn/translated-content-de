---
title: CSS-Werte und -Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 757b1038d7f81c91e61788f4060c9151bd0fda20
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir einige der am häufigsten verwendeten Wertetypen betrachten, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) hat einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS-Grundsyntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen annehmen können, und was diese Typen darstellen.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenfolgen und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und worin der Unterschied besteht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie von spitzen Klammern eingeschlossen sind (`<`, `>`), wie zum Beispiel [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie einen beliebigen gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie auf der Referenzseite [`<color>`](/de/docs/Web/CSS/color_value) aufgelistet.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben – zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value) Datentyp. Sie können die spitzen Klammern verwenden, um festzustellen, mit welchem Sie es in jedem Fall zu tun haben. HTML-Elemente verwenden ebenfalls spitze Klammern, aber es sollte aus dem Kontext klar sein, welches Sie gerade betrachten. Wenn Sie nicht sicher sind, versuchen Sie, danach auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Wesentlichen austauschbar – wenn Sie etwas in CSS als Datentyp bezeichnet sehen, ist es im Grunde nur eine ausgefallene Art zu sagen Wertetyp. Der Begriff _Wert_ bezieht sich auf jeden Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort festgelegt und den Hintergrund mit der `rgb()`-Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung zulässiger Werte zu definieren. Das bedeutet, dass wenn Sie `<color>` als gültig sehen, Sie sich nicht fragen müssen, welche der verschiedenen Farbwerttypen verwendet werden können – Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browserunterstützung. Wenn Sie sich zum Beispiel die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, werden Sie sehen, dass der Abschnitt zur Browser-Kompatibilität verschiedene Typen von Farbwerten und deren Unterstützung auflistet.

Schauen wir uns einige der Typen von Werten und Einheiten an, denen Sie häufig begegnen können, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentsätze

Es gibt verschiedene numerische Wertetypen, die Sie in CSS verwenden könnten. Die folgenden gelten alle als numerisch:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Datentyp</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/de/docs/Web/CSS/integer">&#x3C;integer></a></code>
      </td>
      <td>
        Ein <code>&#x3C;integer></code> ist eine ganze Zahl wie
        <code>1024</code> oder <code>-55</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/CSS/number">&#x3C;number></a></code>
      </td>
      <td>
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar — sie kann oder
        kann keinen Dezimalpunkt mit einer Bruchkomponente haben. Zum Beispiel
        <code>0.255</code>, <code>128</code>, oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Eine <code>&#x3C;dimension></code> ist ein <code>&#x3C;number></code> mit einer
        Einheit dahinter. Zum Beispiel <code>45deg</code>, <code>5s</code>
        oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine Oberkategorie,
        die die {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
        >, <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code
        > und
        <code
          ><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code
        >
        Typen umfasst.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> stellt einen Bruchteil eines anderen
        Wertes dar. Zum Beispiel <code>50%</code>. Prozentwerte sind immer
        relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines Elements
        relativ zur Länge des übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. In CSS gibt es zwei Arten von Längen — relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden Einheiten sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu irgendetwas anderem und gelten allgemein als immer gleich groß.

| Einheit | Name               | Entspricht                   |
| ------- | ------------------ | ---------------------------- |
| `cm`    | Zentimeter         | 1cm = 37.8px = 25.2/64in     |
| `mm`    | Millimeter         | 1mm = 1/10 eines Zentimeters |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines Zentimeters  |
| `in`    | Zoll               | 1in = 2.54cm = 96px          |
| `pc`    | Pica               | 1pc = 1/6 eines Zolls        |
| `pt`    | Punkt              | 1pt = 1/72 eines Zolls       |
| `px`    | Pixel              | 1px = 1/96 eines Zolls       |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck verwendet werden, anstatt auf dem Bildschirm. Zum Beispiel verwenden wir auf dem Bildschirm normalerweise keine `cm` (Zentimeter). Der einzige Wert, den Sie üblicherweise verwenden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit etwas sorgfältiger Planung die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skalieren können. Für eine vollständige Liste der verfügbaren relativen Einheiten siehe die Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der am häufigsten verwendeten relativen Einheiten erkunden.

#### Untersuchung eines Beispiels

Im untenstehenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Die erste Box hat eine {{cssxref("width")}} in Pixeln. Als absolute Einheit bleibt diese Breite gleich, egal was sich sonst ändert.

Die zweite Box hat eine Breite in `vw` (Ansichtsbreite) Einheiten gesetzt. Dieser Wert ist relativ zur Breite des Ansichtsfensters, und 10vw sind daher 10 Prozent der Breite des Ansichtsfensters. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe der Box ändern. Dieses Beispiel ist jedoch in die Seite mit einem [`<iframe>`](/de/docs/Web/HTML/Element/iframe) eingebettet, sodass dies nicht funktioniert. Um dies in Aktion zu sehen, müssen Sie [das Beispiel nach dem Öffnen in einem eigenen Browsertab ausprobieren](https://mdn.github.io/css-examples/learn/values-units/length.html).

Die dritte Box verwendet `em` Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umgebenden {{htmlelement("div")}} gesetzt, der die Klasse `.wrapper` hat. Ändern Sie diesen Wert in `1.5em` und Sie werden sehen, dass sich die Schriftgröße aller Elemente erhöht, jedoch wird nur das letzte Element breiter, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie den oben vorgeschlagenen Anweisungen gefolgt sind, versuchen Sie, auf andere Weise mit den Werten zu experimentieren, um zu sehen, was Sie erhalten.

```html live-sample___length
<div class="wrapper">
  <div class="box px">I am 200px wide</div>
  <div class="box vw">I am 10vw wide</div>
  <div class="box em">I am 10em wide</div>
</div>
```

```css live-sample___length
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}

.wrapper {
  font-size: 1em;
}

.px {
  width: 200px;
}

.vw {
  width: 10vw;
}

.em {
  width: 10em;
}
```

{{EmbedLiveSample("length", "", "250px")}}

#### ems und rems

`em` und `rem` sind die beiden relativen Längen, denen Sie wahrscheinlich am häufigsten begegnen werden, wenn Sie alles von Boxen bis hin zu Textgrößen. Es lohnt sich zu verstehen, wie diese funktionieren und worin die Unterschiede bestehen, insbesondere wenn Sie sich mit komplexeren Themen wie [Textstyling](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) befassen. Das folgende Beispiel liefert eine Demonstration.

Der unten dargestellte HTML-Code ist eine Reihe verschachtelter Listen — wir haben insgesamt zwei Listen, und beide Beispiele haben denselben HTML-Code. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ hat und die zweite eine Klasse von _rems_.

Zunächst setzen wir 16px als Schriftgröße auf dem `<html>`-Element.

**Zusammengefasst bedeutet die `em`-Einheit "die Schriftgröße des übergeordneten Elements"** wenn sie für `font-size` verwendet wird (und "meine eigene Schriftgröße", wenn sie für etwas anderes verwendet wird). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` übernehmen ihre Größenanpassung von ihrem Elternteil. So wird jede nachfolgende Verschachtelungsebene nach und nach größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat — 1.3 mal die Schriftgröße des übergeordneten Elements.

**Zusammengefasst bedeutet die `rem`-Einheit "die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größenanpassung vom Wurzelelement (`<html>`). Das bedeutet, dass jede nachfolgende Verschachtelungsebene nicht immer größer wird.

Ändern Sie jedoch die `font-size` des `<html>`-Elements in der CSS, werden Sie sehen, dass sich alles andere relativ dazu ändert — sowohl `rem`— als auch `em`-größener Text.

```html live-sample___em-rem
<ul class="ems">
  <li>One</li>
  <li>Two</li>
  <li>
    Three
    <ul>
      <li>Three A</li>
      <li>
        Three B
        <ul>
          <li>Three B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul class="rems">
  <li>One</li>
  <li>Two</li>
  <li>
    Three
    <ul>
      <li>Three A</li>
      <li>
        Three B
        <ul>
          <li>Three B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css live-sample___em-rem
html {
  font-size: 16px;
}

.ems li {
  font-size: 1.3em;
}

.rems li {
  font-size: 1.3rem;
}
```

{{EmbedLiveSample("em-rem", "", "400px")}}

#### Linienhöhe Einheiten

`lh` und `rlh` sind relative Längeneinheiten ähnlich wie `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` besteht darin, dass die erste relativ zur Linienhöhe des Elements selbst ist, während die zweite relativ zur Linienhöhe des Wurzelelements, normalerweise `<html>`, ist.

Mit diesen Einheiten können wir die Box-Dekoration exakt an den Text ausrichten. In diesem Beispiel verwenden wir die `lh`-Einheit, um Notizblock-ähnliche Linien mit [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) zu erstellen. Die Zeilen beginnen immer an der richtigen Stelle, unabhängig von der Linienhöhe des Textes.

```css hidden
body {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 24px;
  gap: 24px;
  background-color: floralwhite;
  font-family: sans-serif;
}

@supports not (height: 1lh) {
  body::before {
    grid-column: 1 / -1;
    padding: 8px;
    border-radius: 4px;
    background-color: tomato;
    color: white;
    content: "You browser doesn't support lh unit just yet";
  }
}
```

```css
p {
  margin: 0;
  background-image: repeating-linear-gradient(
    to top,
    lightskyblue 0 2px,
    transparent 2px 1lh
  );
}
```

```html
<p style="line-height: 2em">
  Summer is a time for adventure, and this year was no exception. I had many
  exciting experiences, but two of my favorites were my trip to the beach and my
  week at summer camp.
</p>

<p style="line-height: 4em">
  At the beach, I spent my days swimming, collecting shells, and building
  sandcastles. I also went on a boat ride and saw dolphins swimming alongside
  us.
</p>
```

{{EmbedLiveSample("line_height_units", "100%", "370")}}

### Prozentsätze

In vielen Fällen wird ein Prozentwert wie eine Länge behandelt. Bei Prozentsätzen besteht der Trick darin, dass sie immer in Relation zu einem anderen Wert gesetzt sind. Wenn Sie beispielsweise die `font-size` eines Elements als Prozentsatz setzen, wird es ein Prozentsatz der `font-size` des übergeordneten Elements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, ist er ein Prozentsatz der `width` des übergeordneten Elements.

Im folgenden Beispiel haben die zwei prozentual dimensionierten Boxen und die beiden pixelgroßen Boxen denselben Klassennamen. Die Sets sind jeweils 40% und 200px breit.

Der Unterschied besteht darin, dass das zweite Set von zwei Boxen in einem Wrapper platziert ist, der 400 Pixel breit ist. Die zweite 200px breite Box ist genauso breit wie die erste, aber die zweite 40% Box ist jetzt 40% von 400px — viel schmaler als die erste!

Versuchen Sie, die Breite des Wrappers oder den Prozentwert zu ändern, um zu sehen, wie dies funktioniert:

```html live-sample___percentage
<div class="box px">I am 200px wide</div>
<div class="box percent">I am 40% wide</div>
<div class="wrapper">
  <div class="box px">I am 200px wide</div>
  <div class="box percent">I am 40% wide</div>
</div>
```

```css live-sample___percentage
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}
.wrapper {
  width: 400px;
  border: 5px solid rebeccapurple;
}

.px {
  width: 200px;
}

.percent {
  width: 40%;
}
```

{{EmbedLiveSample("percentage", "", "350px")}}

Das nächste Beispiel hat Schriftgrößen, die in Prozentwerten gesetzt sind. Jedes `<li>` hat eine `font-size` von 80%; daher werden die verschachtelten Listenelemente nach und nach kleiner, da sie ihre Größenanpassung von ihrem übergeordneten Element erben.

```html live-sample___percentage-fonts
<ul>
  <li>One</li>
  <li>Two</li>
  <li>
    Three
    <ul>
      <li>Three A</li>
      <li>
        Three B
        <ul>
          <li>Three B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css live-sample___percentage-fonts
li {
  font-size: 80%;
}
```

{{EmbedLiveSample("percentage-fonts")}}

Beachten Sie, dass zwar viele Wertetypen eine Länge oder einen Prozentwert akzeptieren, es jedoch einige gibt, die nur Längen akzeptieren. Sie können auf den MDN-Eigenschaftsreferenzseiten sehen, welche Werte akzeptiert werden. Wenn der zulässige Wert {{cssxref("length-percentage")}} enthält, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der zulässige Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen, ohne dass eine Einheit hinzugefügt wird. Ein Beispiel für eine Eigenschaft, die eine zahllose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Transparenz eines Elements steuert (wie durchsichtig es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im untenstehenden Beispiel versuchen Sie, den Wert der `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und sehen Sie, wie sich die Box und ihr Inhalt mehr oder weniger durchsichtig verändern:

```html live-sample___opacity
<div class="wrapper">
  <div class="box">I am a box with opacity</div>
</div>
```

```css live-sample___opacity
.wrapper {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  background-repeat: no-repeat;
  background-position: bottom left;
  padding: 20px;
}

.box {
  margin: 40px auto;
  width: 200px;
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  opacity: 0.6;
}
```

{{EmbedLiveSample("opacity", "", "210px")}}

> [!NOTE]
> Wenn Sie eine Zahl in CSS als Wert verwenden, sollte sie nicht in Anführungszeichen gesetzt werden.

## Farbe

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es, um die Farbe von Text, Hintergründen, Rahmen und vielem mehr anzugeben. Es gibt viele Möglichkeiten, in CSS Farben festzulegen, was Ihnen erlaubt, viele spannende Eigenschaften zu steuern.

Das Standardfarbsystem, das auf modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, die es ermöglichen, etwa 16,7 Millionen unterschiedliche Farben durch eine Kombination aus verschiedenen Rottönen, Grüntönen und Blautönen mit 256 verschiedenen Werten pro Kanal anzuzeigen (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir uns zunächst die am häufigsten gesehenen Arten zur Spezifizierung von Farben ansehen: Verwendung von Schlüsselwörtern, Hexadezimal- und `rgb()` Werte. Wir werden auch einen kurzen Blick auf zusätzliche Farb-Funktionen werfen, damit Sie diese erkennen können, wenn Sie sie sehen oder mit verschiedenen Methoden, Farben anzuwenden, experimentieren.

Sie werden wahrscheinlich eine Farbpalette auswählen und diese Farben — und Ihre bevorzugte Methode zur Farbspezifizierung — im gesamten Projekt verwenden. Sie können Farbmodelle mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt dieselbe Methode zur Deklaration von Farben verwendet, um Konsistenz zu gewährleisten!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder 'genannte Farben') in vielen MDN-Codebeispielen verwenden. Da der Datentyp [`<named-color>`s](/de/docs/Web/CSS/named-color) eine sehr begrenzte Anzahl von Farbwerten enthält, werden diese auf Produktionswebsites nicht häufig verwendet. Da das Schlüsselwort die Farbe als menschenlesbaren Textwert darstellt, werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu vermitteln, welche Farbe erwartet wird, damit der Lernende sich auf den gelehrten Inhalt konzentrieren kann.

Versuchen Sie, mit verschiedenen Farbwerten in den Live-Beispielen unten zu spielen, um ein besseres Verständnis dafür zu bekommen, wie sie funktionieren:

```html live-sample___color-keywords
<div class="wrapper">
  <div class="box one">antiquewhite</div>
  <div class="box two">blueviolet</div>
  <div class="box three">greenyellow</div>
</div>
```

```css live-sample___color-keywords
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: antiquewhite;
}

.two {
  background-color: blueviolet;
}

.three {
  background-color: greenyellow;
}
```

{{EmbedLiveSample("color-keywords")}}

### Hexadezimale RGB-Werte

Der nächste Typ von Farbwerten, dem Sie wahrscheinlich begegnen werden, sind Hexadezimalcodes. Hexadezimal verwendet 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` ist. Jeder Hex-Farbwert besteht aus einem Hash-/Pfundzeichen (`#`) gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb`, zum Beispiel), mit optional ein oder zwei hexadezimalen Zeichen, die die Alphatransparenz der vorherigen drei oder sechs Zeichen-Farbwerte darstellen.

Beim Verwenden von Hexadezimal zur Beschreibung von RGB-Werten ist jedes **Paar** hexadezimaler Zeichen eine Dezimalzahl, die einen der Kanäle darstellt — rot, grün und blau — und es uns erlaubt, einen der 256 verfügbaren Werte für jeden anzugeben (16x16 = 256). Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, weil Sie damit jede RGB-Farbe darstellen können.

Versuchen Sie, die Werte zu ändern, um zu sehen, wie die Farben variieren:

```html live-sample___color-hex
<div class="wrapper">
  <div class="box one">#02798b</div>
  <div class="box two">#c55da1</div>
  <div class="box three">#128a7d</div>
</div>
```

```css live-sample___color-hex
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: #02798b;
}

.two {
  background-color: #c55da1;
}

.three {
  background-color: #128a7d;
}
```

{{EmbedLiveSample("color-hex")}}

### RGB-Werte

Um direkt RGB-Werte zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter, die **rot**, **grün** und **blau** Kanalwerte der Farben darstellen, mit einem optionalen vierten Wert, der durch einen Schrägstrich (`/`) getrennt ist, der Opazität darstellt, in ähnlicher Weise wie Hex-Werte. Der Unterschied zu RGB besteht darin, dass jeder Kanal nicht durch zwei Hex-Ziffern, sondern durch eine Dezimalzahl zwischen 0 und 255 oder einen Prozentsatz zwischen 0% und 100% beschrieben wird (aber kein Mischungsverhältnis der beiden).

Lassen Sie uns das letzte Beispiel umschreiben, um RGB-Farben zu verwenden:

```html live-sample___color-rgb
<div class="wrapper">
  <div class="box one">rgb(2 121 139)</div>
  <div class="box two">rgb(197 93 161)</div>
  <div class="box three">rgb(18 138 125)</div>
</div>
```

```css live-sample___color-rgb
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: rgb(2 121 139);
}

.two {
  background-color: rgb(197 93 161);
}

.three {
  background-color: rgb(18 138 125);
}
```

{{EmbedLiveSample("color-rgb")}}

Sie können einen vierten Parameter an `rgb()` übergeben, der den Alpha-Kanal der Farbe darstellt, der die Opazität steuert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen geben Ihnen unterschiedliche Transparenzstufen.

> [!NOTE]
> Das Setzen eines Alpha-Kanals auf eine Farbe hat einen wesentlichen Unterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir früher betrachtet haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin undurchsichtig, während die Verwendung von RGB mit einem Alpha-Parameter nur die Farbe, die Sie angeben, durchlässig macht.

Im folgenden Beispiel haben wir ein Hintergrundbild zum umgebenden Block unserer farbigen Boxen hinzugefügt. Wir haben dann die Boxen so eingestellt, dass sie unterschiedliche Deckkraftwerte haben — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanalwert kleiner ist. In diesem Beispiel versuchen Sie, die Alpha-Kanalwerte zu ändern, um zu sehen, wie es die Farbausgabe beeinflusst.

```html live-sample___color-rgba
<div class="wrapper">
  <div class="box one">rgb(2 121 139 / .3)</div>
  <div class="box two">rgb(197 93 161 / .7)</div>
  <div class="box three">rgb(18 138 125 / .9)</div>
</div>
```

```css live-sample___color-rgba
.wrapper {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: rgb(2 121 139 / 0.3);
}

.two {
  background-color: rgb(197 93 161 / 0.7);
}

.three {
  background-color: rgb(18 138 125 / 0.9);
}
```

{{EmbedLiveSample("color-rgba", "", "250px")}}

### SRGB-Werte

Der sRGB-Farbraum definiert Farben im **Rot** (r), **Grün** (g) und **Blau** (b) Farbraum.

### Verwendung von Farbtönen zur Spezifizierung einer Farbe

Wenn Sie über Schlüsselwörter, Hexadezimal und `rgb()` für Farben hinausgehen möchten, könnten Sie in Erwägung ziehen, einen [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Der Farbton ist die Eigenschaft, die es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie rot, orange, gelb, grün, blau usw. zu unterscheiden. Das Schlüsselkonzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) angeben können, da die meisten der Farbmodelle Farbtöne mit Hilfe eines {{Glossary("color_wheel", "Farbkreises")}} beschreiben.

Es gibt mehrere Farbfunktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten, darunter `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farbfunktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, lesen Sie den [Führung Farbgestaltung für HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften bietet, die Farbwerte verwenden.

### HWB

Ein hervorragender Einstiegspunkt zur Verwendung von Farbtönen in CSS ist die Funktion [`hwb()`](/de/docs/Web/CSS/color_value/hwb), die eine `srgb()`-Farbe angibt. Die drei Teile sind:

- **Farbton**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen 0 und 360 an, was die Winkel um einen Farbkreis herum repräsentiert.
- **Weißanteil**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weißanteil) bis `100%` (voller Weißanteil) an.
- **Schwarzanteil**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von 0% (kein Schwarzanteil) bis 100% (voller Schwarzanteil) an.

### HSL

Ähnlich wie die `hwb()`-Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die ebenfalls eine `srgb()`-Farbe angibt. HSL verwendet `Hue`, neben `Saturation` und `Lightness`:

- **Farbton**
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0–100% an, wobei 0 keine Farbe bedeutet (sie wird als Grauton erscheinen), und 100% bedeutet volle Farbintensität.
- **Helligkeit**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von 0–100% an, wobei 0 keine Helligkeit bedeutet (sie wird vollständig schwarz erscheinen), und 100% volle Helligkeit bedeutet (sie wird vollständig weiß erscheinen).

Der `hsl()`-Farbwert hat auch einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) von der Farbe getrennt ist und die Alpha-Transparenz darstellt.

Lassen Sie uns das RGB-Beispiel aktualisieren, um stattdessen HSL-Farben zu verwenden:

```html live-sample___color-hsl
<div class="wrapper">
  <div class="box one">hsl(188 97% 28%)</div>
  <div class="box two">hsl(321 47% 57%)</div>
  <div class="box three">hsl(174 77% 31%)</div>
</div>
```

```css live-sample___color-hsl
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28%);
}

.two {
  background-color: hsl(321 47% 57%);
}

.three {
  background-color: hsl(174 77% 31%);
}
```

{{EmbedLiveSample("color-hsl")}}

Genauso wie bei `rgb()` können Sie einen Alpha-Parameter an `hsl()` übergeben, um die Opazität anzugeben:

```html live-sample___color-hsla
<div class="wrapper">
  <div class="box one">hsl(188 97% 28% / .3)</div>
  <div class="box two">hsl(321 47% 57% / .7)</div>
  <div class="box three">hsl(174 77% 31% / .9)</div>
</div>
```

```css live-sample___color-hsla
.wrapper {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28% / 0.3);
}

.two {
  background-color: hsl(321 47% 57% / 0.7);
}

.three {
  background-color: hsl(174 77% 31% / 0.9);
}
```

{{EmbedLiveSample("color-hsla", "", "250px")}}

## Bilder

Der Wertetyp [`<image>`](/de/docs/Web/CSS/image) wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion aufgerufen wird, oder ein Verlauf.

Im Beispiel unten haben wir ein Bild und einen Verlauf als Werte für die CSS-Eigenschaft `background-image` verwendet.

```html live-sample___image
<div class="box image"></div>
<div class="box gradient"></div>
```

```css live-sample___image
.box {
  height: 150px;
  width: 300px;
  margin: 20px auto;
  border-radius: 0.5em;
}
.image {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
}

.gradient {
  background-image: linear-gradient(
    90deg,
    rgb(119 0 255 / 39%),
    rgb(0 212 255 / 100%)
  );
}
```

{{EmbedLiveSample("image", "", "380px")}}

> [!NOTE]
> Es gibt einige andere mögliche Werte für `<image>`, jedoch sind diese neuer und haben derzeit eine schlechte Browserunterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie über sie lesen möchten.

## Positionierung

Der Wertetyp [`<position>`](/de/docs/Web/CSS/position_value) stellt ein Set von 2D-Koordinaten dar, die verwendet werden, um ein Element wie ein Hintergrundbild zu positionieren (via [`background-position`](/de/docs/Web/CSS/background-position)). Er kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` verwenden, um Elemente mit bestimmten Grenzen einer 2D-Box auszurichten, zusammen mit Längen, die Offsets von den oberen und linken Kanten der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die horizontale Position fest, der zweite die vertikale. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px von oben und rechts vom Container platziert, indem wir ein Schlüsselwort verwendet haben. Experimentieren Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.

```html live-sample___position
<div class="box"></div>
```

```css live-sample___position
.box {
  height: 100px;
  width: 400px;
  background-image: url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
  background-repeat: no-repeat;
  background-position: right 40px;
  margin: 20px auto;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("position")}}

## Zeichenfolgen und Bezeichner

In den obigen Beispielen haben wir einige Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>` Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, einem speziellen Wert, den CSS versteht. Daher werden sie nicht zitiert — sie werden nicht wie Zeichenfolgen behandelt.

Es gibt Stellen, an denen Sie Zeichenfolgen in CSS verwenden. Zum Beispiel [wenn Sie generierten Inhalt angeben](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu zeigen, dass es sich um eine Zeichenfolge handelt. Im folgenden Beispiel verwenden wir unzitierte Farbschlüsselwörter zusammen mit einem zitierten generierten Inhaltsstring.

```html live-sample___strings-idents
<div class="box"></div>
```

```css live-sample___strings-idents
.box {
  width: 400px;
  padding: 1em;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
  background-color: lightblue;
}

.box::after {
  content: "This is a string. I know because it is quoted in the CSS.";
}
```

{{EmbedLiveSample("strings-idents")}}

## Funktionen

In der Programmierung ist eine Funktion ein Stück Code, das eine bestimmte Aufgabe erledigt. Funktionen sind nützlich, weil Sie einmal Code schreiben und dann viele Male wiederverwenden können, anstatt die gleiche Logik immer wieder neu zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern enthalten auch praktische eingebaute Funktionen für allgemeine Aufgaben, so dass Sie sie nicht von Grund auf neu schreiben müssen.

CSS verfügt auch über [Funktionen](/de/docs/Web/CSS/CSS_Functions), die in ähnlicher Weise wie Funktionen in anderen Sprachen arbeiten. Tatsächlich haben wir bereits CSS-Funktionen im Abschnitt [Farbe](#farbe) oben mit den Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) gesehen.

Neben der Anwendung von Farben können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun. Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Functions#transform_functions) ein gängiger Weg, um Elemente auf einer Seite zu verschieben, zu drehen und zu skalieren. Sie könnten zum Beispiel [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu bewegen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale) um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, werden Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Dauern beginnen. Wenn Sie diese Werte basierend auf anderen Werten ändern möchten, müssen Sie einige Berechnungen durchführen. Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions), die es uns ermöglichen, Berechnungen durchzuführen, anstatt auf statische Werte angewiesen zu sein oder die Mathematik in JavaScript auszuführen. Eine der am häufigsten verwendeten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die es Ihnen ermöglicht, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Angenommen, wir möchten die Breite eines Elements auf 20% des übergeordneten Containers plus 100px setzen. Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn das übergeordnete Element eine prozentuelle Breite verwendet (oder eine relative Einheit wie `em` oder `rem`), variiert es je nachdem, in welchem Kontext es verwendet wird, und andere Faktoren wie das Gerät oder die Breite des Browserfensters des Benutzers. Mit `calc()` könnten wir jedoch die Breite des Elements auf 20% des übergeordneten Containers plus 100px setzen. Die 20% basieren auf der Breite des übergeordneten Containers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

```html live-sample___calc
<div class="wrapper">
  <div class="box">My width is calculated.</div>
</div>
```

```css live-sample___calc
.wrapper {
  width: 400px;
}
.box {
  padding: 1em;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
  background-color: lightblue;
  width: calc(20% + 100px);
}
```

{{EmbedLiveSample("calc")}}

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max) und [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie jeweils den kleinsten, größten oder mittleren Wert aus einer Anzahl von Werten auswählen. Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos) und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel für das Drehen von Elementen um einen Punkt zu berechnen, oder wählen Sie Farben, die einen [Farbwinkel](/de/docs/Web/CSS/hue) als Parameter erfordern. [Exponentialfunktionen](/de/docs/Web/CSS/CSS_Functions#exponential_functions) könnten auch für Animationen und Übergänge verwendet werden, wenn Sie sehr spezifische Kontrolle darüber benötigen, wie sich etwas bewegt und aussieht.

Das Wissen über CSS-Funktionen ist nützlich, damit Sie sie erkennen, wenn Sie ihnen begegnen. Sie sollten beginnen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen, kundenspezifischen oder wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie auch mit regulärem CSS erreichen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_tasks).

## Zusammenfassung

Dies war eine kurze Übersicht über die häufigsten Arten von Werten und Einheiten, denen Sie begegnen könnten. Sie können sich alle verschiedenen Arten auf der [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Referenzseite ansehen — sie werden viele davon bei Ihrer Arbeit mit diesen Lektionen verwenden.

Das Wichtigste, das Sie sich merken sollten, ist, dass jede Eigenschaft eine definierte Liste erlaubter Wertetypen hat und jeder Wertetyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Details hier auf MDN nachschlagen. Zum Beispiel ist es nützlich, zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) es Ihnen auch ermöglicht, einen Farbverlauf zu erstellen, aber es ist vielleicht kein offensichtliches Wissen!

Im nächsten Artikel werden wir uns ansehen, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
