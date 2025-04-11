---
title: CSS-Werte und -Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir uns einige der am häufigsten verwendeten Wertetypen ansehen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) hat einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">Grundlegende CSS-Syntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen haben können und was diese Typen darstellen.</li>
          <li>Vertrautheit mit den grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenketten und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und der Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie in spitze Klammern (`<`, `>`) eingeschlossen sind, wie z. B. [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jeden gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie auf der [`<color>`](/de/docs/Web/CSS/color_value) Referenzseite aufgeführt.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}} Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value) Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welche Sie in jedem Fall untersuchen. HTML-Elemente verwenden ebenfalls spitze Klammern, aber aus dem Kontext sollte klar sein, welches Sie betrachten. Wenn Sie sich nicht sicher sind, versuchen Sie, es auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Wesentlichen austauschbar — wenn Sie etwas in CSS als Datentyp sehen, ist es wirklich nur eine raffinierte Art zu sagen, dass es ein Wertetyp ist. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort und den Hintergrund mit der `rgb()`-Funktion festgelegt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung von zulässigen Werten zu definieren. Das bedeutet, dass, wenn Sie `<color>` als gültig sehen, Sie sich nicht fragen müssen, welcher der verschiedenen Farbwerttypen verwendet werden kann — Schlüsselwörter, Hexadezimalwerte, `rgb()`-Funktionen usw. Sie können _jeden_ verfügbaren `<color>`-Wert verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browser-Unterstützung. Wenn Sie sich zum Beispiel die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, werden Sie sehen, dass der Abschnitt zur Browser-Kompatibilität verschiedene Farbwerttypen und deren Unterstützung auflistet.

Schauen wir uns einige der Typen von Werten und Einheiten an, auf die Sie häufig stoßen können, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentsätze

Es gibt verschiedene numerische Wertetypen, die Sie möglicherweise in CSS verwenden. Die folgenden werden alle als numerisch klassifiziert:

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
        Ein <code>&#x3C;number></code> repräsentiert eine Dezimalzahl – sie kann einen Dezimalpunkt mit einer Bruchkomponente haben oder nicht. Zum Beispiel <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Ein <code>&#x3C;dimension></code> ist ein
        <code>&#x3C;number></code> mit einer Einheit. Zum Beispiel
        <code>45deg</code>, <code>5s</code> oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine Sammelkategorie, die die {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
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
        Ein <code>&#x3C;percentage></code> repräsentiert einen Bruchteil eines anderen Werts. Zum Beispiel <code>50%</code>. Prozentwerte sind immer relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines Elements relativ zur Länge seines übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, auf den Sie am häufigsten stoßen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. In CSS gibt es zwei Arten von Längen – relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß die Elemente letztendlich sein werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu irgendetwas anderem und werden im Allgemeinen als immer gleich groß angesehen.

| Einheit | Name              | Entspricht                   |
| ------- | ----------------- | ---------------------------- |
| `cm`    | Zentimeter        | 1cm = 37.8px = 25.2/64in     |
| `mm`    | Millimeter        | 1mm = 1/10 eines Zentimeters |
| `Q`     | Viertelmillimeter | 1Q = 1/40 eines Zentimeters  |
| `in`    | Inches            | 1in = 2.54cm = 96px          |
| `pc`    | Picas             | 1pc = 1/6 eines Inches       |
| `pt`    | Punkte            | 1pt = 1/72 eines Inches      |
| `px`    | Pixel             | 1px = 1/96 eines Inches      |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck verwendet werden, als für die Bildschirmausgabe. Zum Beispiel verwenden wir normalerweise keine `cm` (Zentimeter) auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn sie für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit ein wenig vorsichtiger Planung erreichen können, dass die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skaliert wird. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erkunden.

#### Erkundung eines Beispiels

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Das erste Feld hat eine {{cssxref("width")}} in Pixeln festgelegt. Als absolute Einheit bleibt diese Breite unverändert, egal was sich sonst ändert.

Das zweite Feld hat eine Breite, die in `vw` (Viewport-Breite) Einheiten festgelegt ist. Dieser Wert ist relativ zur Breite des Ansichtsfensters, und daher sind 10vw 10 Prozent der Breite des Ansichtsfensters. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Feldes ändern. Da dieses Beispiel jedoch in die Seite eingebettet ist mithilfe eines [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), wird das hier nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie [das Beispiel in einem eigenen Browsertab öffnen](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Feld verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umgebenden {{htmlelement("div")}} festgelegt, das die Klasse `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em`, und Sie werden sehen, dass sich die Schriftgröße aller Elemente vergrößert, nur das letzte Element wird breiter, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie den Anweisungen oben gefolgt sind, versuchen Sie, die Werte auf andere Weise zu ändern, um zu sehen, was passiert.

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

`em` und `rem` sind die beiden relativen Längen, auf die Sie am häufigsten stoßen werden, wenn Sie alles von Boxen bis Text skalieren. Es lohnt sich zu verstehen, wie diese funktionieren und die Unterschiede zwischen ihnen, insbesondere wenn Sie kompliziertere Themen wie [Textstyling](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) in Angriff nehmen. Das untenstehende Beispiel bietet eine Demonstration.

Der unten gezeigte HTML-Code ist eine Menge verschachtelter Listen — wir haben zwei Listen insgesamt und beide Beispiele haben denselben HTML-Code. Der einzige Unterschied besteht darin, dass die erste eine Klasse mit dem Namen _ems_ hat und die zweite eine Klasse mit dem Namen _rems_.

Anfangs haben wir 16px als Schriftgröße für das `<html>`-Element festgelegt.

**Kurz gesagt, bedeutet die `em`-Einheit "die Schriftgröße meines übergeordneten Elements"**, wenn sie für `font-size` verwendet wird (und "meine eigene Schriftgröße", wenn sie für etwas anderes verwendet wird). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` verwenden die Größe ihres Elternteils. Daher wird jede nachfolgende Verschachtelungsebene zunehmend größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat — 1,3 Mal die Schriftgröße ihres Elternelements.

**Kurz gesagt, bedeutet die `rem`-Einheit "die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` verwenden die Größe des Wurzelelements (`<html>`). Dies bedeutet, dass jede nachfolgende Verschachtelungsebene nicht größer wird.

Wenn Sie jedoch die `font-size` des `<html>`-Elements im CSS ändern, werden Sie sehen, dass alles andere relativ dazu geändert wird — sowohl `rem`- als auch `em`-skalierte Textgrößen.

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

#### Leistenhöhe-Einheiten

`lh` und `rlh` sind relative Längeneinheiten ähnlich zu `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` ist, dass die erste relativ zur Zeilenhöhe des Elements selbst ist, während die zweite relativ zur Zeilenhöhe des Wurzelelements ist, normalerweise `<html>`.

Mit diesen Einheiten können wir Box-Dekorationen exakt mit dem Text ausrichten. In diesem Beispiel verwenden wir die `lh`-Einheit, um Notizblock-ähnliche Linien mithilfe von [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) zu erstellen. Es spielt keine Rolle, welche Zeilenhöhe der Text hat, die Linien werden immer an der richtigen Stelle anfangen.

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

In vielen Fällen wird ein Prozentsatz auf die gleiche Weise behandelt wie eine Länge. Der einzige Unterschied bei Prozentwerten ist, dass sie immer relativ zu einem anderen Wert sind. Wenn Sie z. B. die `font-size` eines Elements als Prozentsatz festlegen, wird sie als Prozentsatz der `font-size` des übergeordneten Elements festgelegt. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, bezieht er sich auf die `width` des übergeordneten Elements.

Im untenstehenden Beispiel haben die beiden prozentualen Boxen und die beiden pixelbasierten Boxen dieselben Klassennamen. Die Sets sind jeweils 40% und 200px breit.

Der Unterschied besteht darin, dass das zweite Set von zwei Boxen sich innerhalb einer Hülle befindet, die 400 Pixel breit ist. Die zweite 200px breite Box ist genauso breit wie die erste, aber die zweite 40%-Box ist jetzt 40% von 400px — also viel schmaler als die erste!

Versuchen Sie, die Breite der Hülle oder den prozentualen Wert zu ändern, um zu sehen, wie das funktioniert:

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

Das nächste Beispiel hat Schriftgrößen, die als Prozentsätze festgelegt sind. Jedes `<li>`-Element hat eine `font-size` von 80%; daher werden die verschachtelten Listenelemente zunehmend kleiner, da sie ihre Größe vom übergeordneten Element erben.

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

Beachten Sie, dass, obwohl viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur eine Länge akzeptieren. Auf den MDN-Eigenschaftsreferenzseiten können Sie sehen, welche Werte akzeptiert werden. Wenn der zulässige Wert {{cssxref("length-percentage")}} umfasst, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der zulässige Wert nur `<length>` umfasst, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen, ohne dass ihnen eine Einheit hinzugefügt wird. Ein Beispiel für eine Eigenschaft, die eine einheitenlose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Deckkraft eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im folgenden Beispiel versuchen Sie, den Wert `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und beobachten, wie die Box und ihr Inhalt mehr oder weniger opak werden:

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
> Wenn Sie eine Zahl in CSS als Wert verwenden, sollte sie nicht in Anführungszeichen stehen.

## Farbe

Farbwerte können in vielen Bereichen von CSS verwendet werden, sei es, um die Farbe von Text, Hintergründen, Rahmen und vieles mehr zu spezifizieren. Es gibt viele Möglichkeiten, Farbe in CSS zu setzen, die Ihnen ermöglichen, viele aufregende Eigenschaften zu steuern.

Das Standardfarbsystem, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, was es ermöglicht, etwa 16,7 Millionen verschiedene Farben anzuzeigen, indem eine Kombination von verschiedenen roten, grünen und blauen Kanälen mit je 256 verschiedenen Werten pro Kanal verwendet wird (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir zunächst die gebräuchlichsten Methoden zur Angabe von Farben betrachten: die Verwendung von Schlüsselwörtern, Hexadezimal- und `rgb()`-Werten. Wir werden auch kurz auf zusätzliche Farb-Funktionen eingehen, um Ihnen zu ermöglichen, sie zu erkennen, wenn Sie sie sehen, oder mit verschiedenen Möglichkeiten der Farbgestaltung zu experimentieren.

Sie werden wahrscheinlich eine Farbpalette auswählen und dann diese Farben — und Ihre bevorzugte Methode zur Angabe von Farben — im gesamten Projekt verwenden. Sie können Farbschemata mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt die gleiche Methode zum Deklarieren von Farben für Konsistenz verwendet!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder "benannte Farben") in vielen MDN-Code-Beispielen sehen. Da der [`<named-color>`](/de/docs/Web/CSS/named-color) Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie nicht häufig auf Produktionswebsites mit einer ausgefeilten Designsprache verwendet. Andererseits werden benannte Farben in Code-Beispielen verwendet, um dem Benutzer deutlich zu zeigen, welche Farbe erwartet wird, sodass sich der Lernende auf den zu vermittelnden Inhalt konzentrieren kann.

Versuchen Sie, mit verschiedenen Farbwerten in den untenstehenden Live-Beispielen zu experimentieren, um einen besseren Eindruck davon zu bekommen, wie sie funktionieren:

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

Der nächste Farbwert, dem Sie wahrscheinlich begegnen werden, sind Hexadezimal-Codes. Das hexadezimale System verwendet 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` umfasst. Jeder hexadezimale Farbwert besteht aus einem Hash/Pfundzeichen (`#`), gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb` zum Beispiel), mit optional einem oder zwei hexadezimalen Zeichen, die die Alpha-Transparenz der vorhergehenden drei oder sechs Zeichen des Farbwerts repräsentieren.

Wenn Sie Hexadezimalwerte zur Beschreibung von RGB verwendet, repräsentiert jedes **Paar** von hexadezimalen Zeichen eine Dezimalzahl, die einen der Kanäle beschreibt — rot, grün und blau — und es ermöglicht, einen der 256 verfügbaren Werte für jeden (16 x 16 = 256) anzugeben. Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind wesentlich vielseitiger, da Sie mit ihnen jede RGB-Farbe darstellen können.

Versuchen Sie, die Werte zu ändern, um zu sehen, wie die Farben sich unterscheiden:

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

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter an, die **rote**, **grüne** und **blaue** Kanalwerte der Farben repräsentieren, mit einem optionalen vierten Wert, der durch einen Schrägstrich ('/') getrennt ist und die Deckkraft auf ähnliche Weise wie Hexadezimalwerte darstellt. Der Unterschied zu RGB ist, dass jeder Kanal nicht durch zwei hexadezimale Ziffern, sondern durch eine Dezimalzahl zwischen 0 und 255 oder einen Prozentwert zwischen 0% und 100% (aber keine Mischung der beiden) dargestellt wird.

Lassen Sie uns unser letztes Beispiel umschreiben, um RGB-Farben zu verwenden:

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

Sie können einen vierten Parameter an `rgb()` übergeben, der den Alpha-Kanal der Farbe repräsentiert, der die Deckkraft steuert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen geben Ihnen verschiedene Transparenzstufen.

> [!NOTE]
> Das Setzen eines Alpha-Kanals auf eine Farbe hat einen wesentlichen Unterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir vorher betrachtet haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin opak, während Sie bei der Verwendung von RGB mit einem Alpha-Parameter nur die Farbe, die Sie spezifizieren, opak machen.

Im folgenden Beispiel haben wir ein Hintergrundbild zum Umgebungsblock unserer farbigen Boxen hinzugefügt. Wir haben dann die Boxen auf unterschiedliche Opazitätswerte gesetzt — achten Sie darauf, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanalwert kleiner ist. In diesem Beispiel können Sie versuchen, die Alpha-Kanalwerte zu ändern, um zu sehen, wie dies die Farbausgabe beeinflusst.

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

Der `sRGB` Farbraum definiert Farben im **roten** (r), **grünen** (g) und **blauen** (b) Farbraum.

### Verwendung von Farbtönen zur Spezifikation einer Farbe

Wenn Sie über Schlüsselwörter, Hexadezimal und `rgb()` für Farben hinausgehen möchten, könnten Sie versuchen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Farbton ist die Eigenschaft, die es uns ermöglicht, Unterschiede oder Ähnlichkeiten zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen. Das Schlüsselkonzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) spezifizieren können, da die meisten Farbmodelle Farbtöne mit einem {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten, einschließlich `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farb-Funktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, besuchen Sie den [Anleitung zur Anwendung von Farbe auf HTML-Elemente mithilfe von CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften gibt, die Farbwerte verwenden.

### HWB

Ein guter Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion, die eine `srgb()` Farbe spezifiziert. Die drei Teile sind:

- **Farbton**: Der Grundfarbton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen 0 und 360, der die Winkel um einen Farbkreis darstellt.
- **Weißheit**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (keine Weißheit) bis `100%` (volle Weißheit).
- **Schwärze**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von 0% (keine Schwärze) bis 100% (volle Schwärze).

### HSL

Ähnlich wie die `hwb()` Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, welche ebenfalls eine `srgb()` Farbe spezifiziert. HSL verwendet `Farbton` zusätzlich zu `Sättigung` und `Helligkeit`:

- **Farbton**
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 keine Farbe ist (es wird als Graustufe erscheinen) und 100% die volle Farbsättigung ist.
- **Helligkeit**: Wie hell ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 keine Helligkeit ist (es wird vollständig schwarz erscheinen) und 100% volle Helligkeit (es wird vollständig weiß erscheinen).

Der `hsl()`-Farbwert hat auch einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) getrennt ist, der die Alpha-Transparenz darstellt.

Aktualisieren wir das RGB-Beispiel, um stattdessen HSL-Farben zu verwenden:

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

Genau wie bei `rgb()` kann man auch `hsl()` einen Alpha-Parameter übergeben, um die Deckkraft zu spezifizieren:

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

Der [`<image>`](/de/docs/Web/CSS/image) Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()` Funktion angegeben wird, oder ein Verlauf.

Im folgenden Beispiel haben wir ein Bild und einen Verlauf als Wert für die CSS `background-image` Eigenschaft demonstriert.

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
> Es gibt einige andere mögliche Werte für `<image>`, diese sind jedoch neuer und werden derzeit von Browsern schlecht unterstützt. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie mehr darüber erfahren möchten.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp repräsentiert einen Satz von 2D-Koordinaten, die dazu verwendet werden, ein Element wie ein Hintergrundbild (über [`background-position`](/de/docs/Web/CSS/background-position)) zu positionieren. Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` verwenden, um Elemente mit bestimmten Grenzen eines 2D-Felds zu auszurichten, zusammen mit Längen, die Offsets von den oberen und linken Rändern der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste setzt die Position horizontal, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px von oben und vom rechten Rand des Containers mit einem Schlüsselwort positioniert. Spielen Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.

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

## Zeichenketten und Bezeichner

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>` Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Daher werden sie nicht zitiert — sie werden nicht als Zeichenketten behandelt.

Es gibt Stellen, an denen Sie Zeichenketten in CSS verwenden. Zum Beispiel [wenn Sie generierte Inhalte angeben](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu zeigen, dass es sich um eine Zeichenkette handelt. Im folgenden Beispiel verwenden wir unquotierte Farb-Schlüsselwörter zusammen mit einer zitierten generierten Content-Zeichenkette.

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

In der Programmierung ist eine Funktion ein Stück Code, das eine spezifische Aufgabe erfüllt. Funktionen sind nützlich, weil Sie Code einmal schreiben und dann viele Dinge wiederverwenden können, anstatt dieselbe Logik immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern kommen auch mit praktischen eingebauten Funktionen für gängige Aufgaben, sodass Sie diese nicht selbst von Grund auf schreiben müssen.

CSS hat ebenfalls [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die auf ähnliche Weise wie Funktionen in anderen Sprachen funktionieren. Tatsächlich haben wir bereits CSS-Funktionen in dem [Farbabschnitt](#farbe) oben gesehen mit den Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl).

Abgesehen von der Farbanwendung können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun. Zum Beispiel sind [Transform-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#transform_functions) eine übliche Methode, um Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren. Sie können [`translate()`](/de/docs/Web/CSS/transform-function/translate) für das horizontale oder vertikale Bewegen verwenden, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) um etwas zu drehen oder [`scale()`](/de/docs/Web/CSS/transform-function/scale) um etwas größer oder kleiner zu machen.

### Mathematik-Funktionen

Wenn Sie Stile für ein Projekt erstellen, werden Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Zeitdauern anfangen. Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie etwas Mathematik betreiben. Sie könnten den Prozentsatz eines Werts berechnen oder eine Zahl zu einer anderen hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematik-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions), die es uns ermöglichen, Berechnungen auszuführen, anstatt sich auf statische Werte zu verlassen oder die Mathematik in JavaScript zu erledigen. Eine der häufigsten Mathematik-Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die es Ihnen ermöglicht, Operationen wie Addition, Subtraktion, Multiplikation und Division auszuführen.

Zum Beispiel wollen wir die Breite eines Elements auf 20% des übergeordneten Containers plus 100px setzen. Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn das übergeordnete Element eine prozentuale Breite (oder eine relative Einheit wie `em` oder `rem`) verwendet, dann variiert es je nach Kontext, in dem es verwendet wird, und anderen Faktoren wie das Gerät oder die Browserfensterbreite des Benutzers. Doch wir können `calc()` verwenden, um die Breite des Elements auf 20% seines übergeordneten Containers plus 100px einzustellen. Die 20% basieren auf der Breite des übergeordneten Containers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere Mathematik-Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max) und [`clamp()`](/de/docs/Web/CSS/clamp); diese erlauben es Ihnen jeweils, den kleinsten, größten oder mittleren Wert aus einer Sammlung von Werten auszuwählen. Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos) und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel zum Drehen von Elementen um einen Punkt zu berechnen oder Farben zu wählen, die einen [Farbwinkel](/de/docs/Web/CSS/hue) als Parameter verwenden. [Exponentielle Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#exponential_functions) könnten auch für Animationen und Übergänge verwendet werden, wenn Sie sehr spezifische Kontrolle darüber benötigen, wie sich etwas bewegt und aussieht.

Es ist nützlich, von CSS-Funktionen zu wissen, damit Sie sie erkennen, wenn Sie ihnen begegnen. Sie sollten beginnen, mit ihnen in ihren Projekten zu experimentieren — sie helfen Ihnen, benutzerdefinierten oder wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erzielen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Values).

## Zusammenfassung

Dies war ein kurzer Überblick über die häufigsten Typen von Werten und Einheiten, denen Sie begegnen könnten. Sie können sich alle verschiedenen Typen auf der Modulseite [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) ansehen — Sie werden vielen dieser Typen begegnen, während Sie diese Lektionen durchlaufen.

Das Wichtigste, was Sie sich merken sollten, ist, dass jede Eigenschaft eine definierte Liste zugelassener Wertetypen hat, und jeder Wertetyp hat eine Definition, die erklärt, was die Werte sind. Sie können dann die Einzelheiten hier auf MDN nachschlagen. Zum Beispiel, das Verstehen, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch erlaubt, einen Farbverlauf zu erstellen, ist nützlich, aber vielleicht nicht offensichtliches Wissen zu haben!

Im nächsten Artikel schauen wir uns an, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
