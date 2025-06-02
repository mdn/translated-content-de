---
title: CSS-Werte und Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir einige der am häufigsten verwendeten Wertetypen betrachten, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) enthält einen Syntaxabschnitt, in dem die Wertetypen aufgeführt sind, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS-Grundsyntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen haben können und was diese Typen repräsentieren.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenfolgen und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und den Unterschied zwischen ihnen erkennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In den CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie von spitzen Klammern (`<`, `>`) umgeben sind, wie [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jede gültige Farbe als Wert für diese Eigenschaft verwenden können, wie auf der Referenzseite für [`<color>`](/de/docs/Web/CSS/color_value) aufgelistet.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value) Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welches Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber aus dem Kontext sollte klar sein, welches Sie betrachten. Wenn Sie sich nicht sicher sind, versuchen Sie danach auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Wesentlichen austauschbar — wenn Sie in CSS etwas als Datentyp sehen, ist das nur eine elegante Art zu sagen, dass es sich um einen Wertetyp handelt. Der Begriff _Wert_ bezieht sich auf jeden speziellen Ausdruck, der von einem Wertetyp unterstützt wird und den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort gesetzt und den Hintergrund mit der `rgb()`-Funktion festgelegt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung zulässiger Werte zu definieren. Das bedeutet, dass Sie bei `color>` nicht darüber nachdenken müssen, welcher der verschiedenen Farbwerttypen verwendet werden kann — Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen, etc. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, Ihr Browser unterstützt sie. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browserunterstützung. Beispielsweise sehen Sie auf der Seite für [`<color>`](/de/docs/Web/CSS/color_value), dass der Abschnitt zur Browser-Kompatibilität die verschiedenen Arten von Farbwerten und deren Unterstützung auflistet.

Lassen Sie uns einige der Typen von Werten und Einheiten betrachten, mit denen Sie häufig konfrontiert werden, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

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
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar — sie kann einen Dezimalpunkt mit einer Bruchkomponente haben oder auch nicht. Zum Beispiel <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Eine <code>&#x3C;dimension></code> ist eine <code>&#x3C;number></code> mit einer Einheit. Zum Beispiel <code>45deg</code>, <code>5s</code> oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine Oberkategorie, die die {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code>, <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code>, und <code><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code> Typen umfasst.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> repräsentiert einen Bruchteil eines anderen Wertes. Zum Beispiel <code>50%</code>. Prozentwerte sind immer relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines Elements relativ zur Länge seines übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relativ und absolut. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß die Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und werden allgemein als in der Größe konstant angesehen.

| Einheit | Name               | Entspricht               |
| ------- | ------------------ | ------------------------ |
| `cm`    | Zentimeter         | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter         | 1mm = 1/10 von 1cm       |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 von 1cm        |
| `in`    | Zoll               | 1in = 2.54cm = 96px      |
| `pc`    | Picas              | 1pc = 1/6 von 1in        |
| `pt`    | Punkte             | 1pt = 1/72 von 1in       |
| `px`    | Pixel              | 1px = 1/96 von 1in       |

Die meisten dieser Einheiten sind nützlicher, wenn sie für Druck- und nicht für Bildschirmausgaben verwendet werden. Zum Beispiel verwenden wir normalerweise nicht `cm` (Zentimeter) auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Stamm-Elements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie durch sorgfältige Planung erreichen können, dass die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skaliert. Für eine vollständige Liste der verfügbaren relativen Einheiten siehe die Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erkunden.

#### Ein Beispiel untersuchen

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Der erste Kasten hat eine {{cssxref("width")}} in Pixel gesetzt. Als absoluter Wert bleibt diese Breite unabhängig von anderen Änderungen konstant.

Der zweite Kasten hat eine Breite in `vw` (Viewport-Breite) Einheiten gesetzt. Dieser Wert ist relativ zur Breite des Ansichtsfensters, sodass 10vw 10 Prozent der Breite des Ansichtsfensters beträgt. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Kastens ändern. Da dieses Beispiel jedoch in die Seite eingebettet ist und ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) verwendet, wird dies nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie [das Beispiel in einem eigenen Browsertab öffnen](https://mdn.github.io/css-examples/learn/values-units/length.html).

Der dritte Kasten verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem enthaltenden {{htmlelement("div")}} gesetzt, das die Klasse `.wrapper` hat. Ändern Sie diesen Wert zu `1.5em`, und Sie werden sehen, dass sich die Schriftgröße aller Elemente erhöht, aber nur der letzte Artikel wird breiter, da seine Breite relativ zur Schriftgröße ist.

Nachdem Sie den obigen Anweisungen gefolgt sind, probieren Sie die Werte auf andere Weise aus, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die beiden relativen Längen, denen Sie am häufigsten begegnen, wenn Sie etwas von Boxen bis Text dimensionieren. Es lohnt sich zu verstehen, wie diese funktionieren und die Unterschiede zu erkennen, insbesondere wenn Sie auf komplexere Themen wie [Textstile](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) stoßen. Das unten stehende Beispiel bietet eine Demonstration.

Das unten veranschaulichte HTML ist ein Satz verschachtelter Listen — wir haben insgesamt zwei Listen, und beide Beispiele haben dasselbe HTML. Der einzige Unterschied ist, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Zu Beginn setzen wir 16px als die Schriftgröße auf dem `<html>`-Element.

**Zusammengefasst bedeutet die Einheit `em` "Die Schriftgröße meines übergeordneten Elements"** wenn sie für `font-size` verwendet wird (und "Meine eigene Schriftgröße" wenn sie für etwas anderes verwendet wird). Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `ems` nehmen ihre Größe von ihrem Elternteil. So wird jedes aufeinanderfolgende Verschachtelungsniveau progressiv größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat — 1,3 mal die Schriftgröße des übergeordneten Elements.

**Zusammengefasst bedeutet die Einheit `rem` "Die Schriftgröße des Stamm-Elements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größe vom Stamm-Element (`<html>`). Das bedeutet, dass jedes aufeinanderfolgende Verschachtelungsniveau nicht immer größer wird.

Wenn Sie jedoch die `font-size` des `<html>`-Elements im CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu ändert — sowohl `rem`- als auch `em`-dimensionierter Text.

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

#### Zeilenhöheneinheiten

`lh` und `rlh` sind relative Längeneinheiten, ähnlich wie `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` besteht darin, dass die erste relativ zur Zeilenhöhe des Elements selbst ist, während die zweite relativ zur Zeilenhöhe des Stamm-Elements ist, normalerweise `<html>`.

Mit diesen Einheiten können wir die Box-Dekoration präzise zum Text ausrichten. In diesem Beispiel verwenden wir die `lh`-Einheit, um Notizblock-ähnliche Linien mithilfe von [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) zu erstellen. Es ist egal, was die Zeilenhöhe des Textes ist, die Linien werden immer an der richtigen Stelle beginnen.

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

.lh-2 {
  line-height: 2em;
}

.lh-4 {
  line-height: 4em;
}
```

```html
<p class="lh-2">
  Summer is a time for adventure, and this year was no exception. I had many
  exciting experiences, but two of my favorites were my trip to the beach and my
  week at summer camp.
</p>

<p class="lh-4">
  At the beach, I spent my days swimming, collecting shells, and building
  sandcastles. I also went on a boat ride and saw dolphins swimming alongside
  us.
</p>
```

{{EmbedLiveSample("line_height_units", "100%", "370")}}

### Prozentsätze

In vielen Fällen wird ein Prozentsatz auf die gleiche Weise wie eine Länge behandelt. Der Unterschied bei Prozentwerten ist, dass sie immer relativ zu einem anderen Wert festgelegt werden. Wenn Sie beispielsweise die `font-size` eines Elements als Prozentsatz festlegen, beträgt sie einen Prozentsatz der `font-size` des übergeordneten Elements. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, beträgt er einen Prozentsatz der `width` des übergeordneten Elements.

Im unteren Beispiel haben die beiden prozentual dimensionierten Kästen und die beiden pixelbasierten Kästen dieselben Klassennamen. Die Sets sind jeweils 40% und 200px breit.

Der Unterschied besteht darin, dass das zweite Set von zwei Kästen in einem Wrapper ist, der 400 Pixel breit ist. Der zweite 200px breite Kasten ist genauso breit wie der erste, aber der zweite 40% Kasten ist jetzt 40% von 400px — viel schmaler als der erste!

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

Das nächste Beispiel hat Schriftgrößen, die in Prozentsätzen festgelegt sind. Jedes `<li>` hat eine `font-size` von 80%; daher werden die verschachtelten Listenelemente progressiv kleiner, da sie ihre Größe von ihrem Elternteil erben.

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

Beachten Sie, dass, während viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur Längen akzeptieren. Sie können auf den MDN-Eigenschaftsreferenzseiten sehen, welche Werte akzeptiert werden. Wenn der erlaubte Wert {{cssxref("length-percentage")}} beinhaltet, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` beinhaltet, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen, ohne dass eine Einheit hinzugefügt wird. Ein Beispiel für eine Eigenschaft, die eine einheitenlose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Deckkraft eines Elements steuert (wie durchsichtig es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im folgenden Beispiel können Sie versuchen, den Wert von `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und zu sehen, wie der Kasten und sein Inhalt mehr oder weniger undurchsichtig werden:

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
> Wenn Sie in CSS eine Zahl als Wert verwenden, sollte sie nicht in Anführungszeichen eingeschlossen sein.

## Farbe

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es um die Farbe von Text, Hintergründen, Rahmen und vieles mehr zu spezifizieren. Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, sodass Sie die Kontrolle über viele aufregende Eigenschaften haben.

Das standardmäßige Farbensystem, das auf modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, die die Anzeige von etwa 16,7 Millionen verschiedenen Farben ermöglichen, indem verschiedene Rot-, Grün- und Blautöne mit jeweils 256 unterschiedlichen Werten kombiniert werden (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt betrachten wir zunächst die am häufigsten gesehenen Methoden zur Angabe von Farben: mit Schlüsselwörtern, Hexadezimal- und `rgb()`-Werten. Wir werden auch einen kurzen Blick auf zusätzliche Farb-Funktionen werfen, damit Sie sie erkennen können, wenn Sie auf sie stoßen, oder mit verschiedenen Möglichkeiten zur Anwendung von Farbe experimentieren können.

Wahrscheinlich entscheiden Sie sich für eine Farbpalette und verwenden dann diese Farben — und Ihre bevorzugte Methode zur Angabe von Farben — während des gesamten Projekts. Sie können Farbmodelle mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt dieselbe Methode zur Deklaration von Farben verwendet, um Konsistenz zu erreichen!

### Farb-Schlüsselwörter

Sie werden sehen, dass die Farb-Schlüsselwörter (oder "benannte Farben") in vielen MDN-Codebeispielen verwendet werden. Da der [`<named-color>`](/de/docs/Web/CSS/named-color) Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie nicht häufig auf Produktwebseiten mit einer ausgefeilten Designsprache verwendet. Andererseits werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu sagen, welche Farbe erwartet wird, damit der Lernende sich auf die gelehrten Inhalte konzentrieren kann.

Versuchen Sie, mit verschiedenen Farbwerten in den Live-Beispielen unten zu spielen, um ein besseres Gefühl dafür zu bekommen, wie sie funktionieren:

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

Der nächste Farbwerttyp, auf den Sie wahrscheinlich stoßen werden, sind hexadezimale Codes. Hexadezimal verwendet 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` ist. Jeder Hex-Farbwert besteht aus einem Hash/Nummernzeichen (`#`) gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb` zum Beispiel), mit einem optionalen ein oder zwei hexadezimalen Zeichen, die die Alpha-Transparenz der vorhergehenden drei oder sechs Zeichenfarbenwerte darstellen.

Bei der Verwendung von Hexadezimal zur Beschreibung von RGB-Werten ist jedes **Paar** von hexadezimalen Zeichen eine Dezimalzahl, die einen der Kanäle darstellt — rot, grün und blau — und es uns ermöglicht, einen der 256 verfügbaren Werte für jeden anzugeben (16 x 16 = 256). Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, sie sind jedoch viel vielseitiger, da Sie mit ihnen jede RGB-Farbe darstellen können.

Versuchen Sie, die Werte zu ändern, um zu sehen, wie sich die Farben unterscheiden:

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

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion drei Parameter, die die **Rot**-, **Grün**- und **Blau**-Kanalwerte der Farben darstellen, mit einem optionalen vierten Wert, der durch einen Schrägstrich ('/') getrennt ist und die Deckkraft ähnlich wie Hex-Werte repräsentiert. Der Unterschied bei RGB besteht darin, dass jeder Kanal nicht durch zwei Hex-Zahlen, sondern durch eine Dezimalzahl zwischen 0 und 255 oder einen Prozentsatz zwischen 0% und 100% einschließlich (aber keine Mischung der beiden) dargestellt wird.

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

Sie können einen vierten Parameter an `rgb()` übergeben, der den Alpha-Kanal der Farbe darstellt und die Deckkraft steuert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen bieten Ihnen unterschiedliche Transparenzstufen.

> [!NOTE]
> Das Setzen eines Alpha-Kanals auf eine Farbe hat einen wesentlichen Unterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir früher besprochen haben. Wenn Sie die Transparenz verwenden, machen Sie das Element und alles darin undurchsichtig, während die Verwendung von RGB mit einem Alpha-Parameter nur die Farbe undurchsichtig macht, die Sie angeben.

Im Beispiel unten haben wir ein Hintergrundbild zum enthaltenen Block unserer farbigen Kästchen hinzugefügt. Wir haben dann die Kästchen so eingestellt, dass sie unterschiedliche Deckkraftwerte haben — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanal-Wert kleiner ist. In diesem Beispiel können Sie die Werte des Alpha-Kanals ändern, um zu sehen, wie sich dies auf die Farbausgabe auswirkt.

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

Der `sRGB`-Farbraum definiert Farben im **Rot** (r), **Grün** (g) und **Blau** (b) Farbraum.

### Verwendung von Farbtönen zur Angabe einer Farbe

Wenn Sie über Schlüsselwörter, Hexadezimal- und `rgb()` hinaus für Farben gehen möchten, könnten Sie versuchen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Der Farbton ist die Eigenschaft, die es uns ermöglicht, Unterschiede oder Ähnlichkeiten zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen. Der Schlüsselkonzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) angeben können, da die meisten Farbmodelle Farbtöne mit einem {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten, darunter `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farb-Funktionen wie [`lab()`](/de/docs/Web/CSS/color_value/lab) definieren Farben basierend darauf, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich den [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) Leitfaden an, die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften, die Farbwerte verwenden, bietet.

### HWB

Ein guter Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion, die eine `srgb()`-Farbe angibt. Die drei Teile sind:

- **Farbton**: Der Basisschatten der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen 0 und 360, der die Winkel um einen Farbkreis darstellt.
- **Weißanteil**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weißanteil) bis `100%` (voller Weißanteil).
- **Schwarzanteil**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von 0% (kein Schwarzanteil) bis 100% (voller Schwarzanteil).

### HSL

Ähnlich der `hwb()`-Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die ebenfalls eine `srgb()`-Farbe angibt. HSL verwendet `Farbton`, zusätzlich zu `Sättigung` und `Helligkeit`:

- **Farbton**
- **Sättigung**: Wie gesättigt ist die Farbe? Dieser nimmt einen Wert von 0–100%, wobei 0 keine Farbe (es wird als Grauton erscheinen) und 100% voll gesättigte Farbe ist.
- **Helligkeit**: Wie hell oder leuchtend ist die Farbe? Dieser nimmt einen Wert von 0–100%, wobei 0 kein Licht (es wird vollständig schwarz erscheinen) und 100% volles Licht (es wird vollständig weiß erscheinen) ist.

Der `hsl()`-Farbenwert hat ebenfalls einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) von der Farbe getrennt ist und die Alpha-Transparenz darstellt.

Lassen Sie uns das RGB-Beispiel aktualisieren, um HSL-Farben zu verwenden:

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

Genau wie bei `rgb()` können Sie einen Alpha-Parameter an `hsl()` übergeben, um die Deckkraft anzugeben:

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

Der [`<image>`](/de/docs/Web/CSS/image) Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion angegeben wird oder ein Verlauf.

Im folgenden Beispiel haben wir ein Bild und ein Verlauf zur Demonstration als Wert für die CSS `background-image` Eigenschaft verwendet.

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
> Es gibt einige andere mögliche Werte für `<image>`, allerdings sind diese neuer und haben derzeit eine schwache Browser-Unterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie darüber hinaus lesen möchten.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp repräsentiert ein Satz von 2D-Koordinaten, die verwendet werden, um ein Element wie ein Hintergrundbild (über [`background-position`](/de/docs/Web/CSS/background-position)) zu positionieren. Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` verwenden, um Elemente mit bestimmten Begrenzungen eines 2D-Felds auszurichten, sowie Längen, die Offsets von den oberen und linken Rändern des Feldes darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die Position horizontal fest, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere standardmäßig auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px von oben und rechts des Containers mit einem Schlüsselwort positioniert. Probieren Sie diese Werte aus, um zu sehen, wie Sie das Bild verschieben können.

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

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>`-Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Daher werden sie nicht in Anführungszeichen gesetzt — sie werden nicht als Zeichenketten behandelt.

Es gibt Stellen, an denen Sie Zeichenketten in CSS verwenden. Zum Beispiel [bei der Spezifizierung generierter Inhalte](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert in Anführungszeichen gesetzt, um zu zeigen, dass es sich um eine Zeichenkette handelt. Im Beispiel unten verwenden wir nicht zitierte Farbschlüsselwörter zusammen mit einer zitierten generierten Inhaltszeichenkette.

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

In der Programmierung ist eine Funktion ein Stück Code, das eine bestimmte Aufgabe ausführt. Funktionen sind nützlich, weil Sie einmal Code schreiben können und ihn dann mehrmals wiederverwenden können, anstatt dieselbe Logik immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern liefern auch praktische eingebaute Funktionen für häufige Aufgaben, sodass Sie sie nicht selbst von Grund auf neu schreiben müssen.

CSS hat ebenfalls [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die auf ähnliche Weise wie Funktionen in anderen Sprachen arbeiten. Tatsächlich haben wir bereits CSS-Funktionen im [Farb-](#farbe) Abschnitt oben mit [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl)Funktionen gesehen.

Abgesehen von der Anwendung von Farben können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun. Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#transform_functions) eine häufige Methode, um Elemente auf einer Seite zu verschieben, zu drehen und zu skalieren. Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) für horizontale oder vertikale Bewegungen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) für Drehungen oder [`scale()`](/de/docs/Web/CSS/transform-function/scale) verwenden, um etwas größer oder kleiner zu machen.

### Mathematik-Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Zeitdauern. Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie einige Berechnungen anstellen. Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen Zahl hinzuzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS hat Unterstützung für [Mathematik-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions), die uns erlauben, Berechnungen durchzuführen, anstatt auf statische Werte zu setzen oder die Mathematik in JavaScript durchzuführen. Eine der häufigsten Mathematik-Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), mit der Sie Operationen wie Addition, Subtraktion, Multiplikation und Division durchführen können.

Zum Beispiel, sagen wir, wir wollen die Breite eines Elements auf 20% seines übergeordneten Containers plus 100px setzen. Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn das übergeordnete Element eine Prozentsatzbreite (oder eine relative Einheit wie `em` oder `rem`) verwendet, dann wird sie je nach Kontext, in dem es verwendet wird, variieren, sowie in Abhängigkeit von anderen Faktoren wie dem Gerät oder der Breite des Browserfensters des Benutzers. Allerdings können wir `calc()` verwenden, um die Breite des Elements auf 20% des übergeordneten Containers plus 100px zu setzen. Die 20% basieren auf der Breite des übergeordneten Containers (`.wrapper`), und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere Mathematik-Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max), und [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie den kleinsten, größten oder mittleren Wert aus einem Satz von Werten wählen. Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos) und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel für Drehungen von Elementen um einen Punkt zu berechnen oder Farben auszuwählen, die einen [Farbton-Winkel](/de/docs/Web/CSS/hue) als Parameter verwenden. [Exponentialfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#exponential_functions) könnten auch für Animationen und Übergänge verwendet werden, wenn Sie eine sehr spezifische Kontrolle darüber benötigen, wie sich etwas bewegt und aussieht.

Das Wissen über CSS-Funktionen ist nützlich, damit Sie sie erkennen können, wenn Sie sie sehen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie werden Ihnen helfen, benutzerdefinierten oder sich wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erreichen können.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Values).

## Zusammenfassung

Dies war ein schneller Durchlauf durch die häufigsten Typen von Werten und Einheiten, denen Sie begegnen könnten. Sie können sich alle unterschiedlichen Typen ansehen auf der [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul-Seite — Sie werden auf viele davon stoßen, wenn Sie diese Lektionen durcharbeiten.

Der Hauptpunkt, den Sie sich merken sollten, ist, dass jede Eigenschaft eine definierte Liste erlaubter Wertetypen hat und dass jeder Wertetyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Details hier auf MDN nachschlagen. Zum Beispiel, zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch erlaubt, einen Farbverlauf zu erstellen, ist nützlich, jedoch vielleicht nicht sofort offensichtlich Wissen zu haben!

Im nächsten Artikel werden wir uns anschauen, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
