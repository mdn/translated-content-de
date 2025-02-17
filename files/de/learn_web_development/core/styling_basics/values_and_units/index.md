---
title: CSS-Werte und -Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten zulässig ist. In dieser Lektion werfen wir einen Blick auf einige der am häufigsten verwendeten Wertetypen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) enthält einen Syntaxabschnitt, in dem die Wertetypen aufgeführt sind, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">Grundlegende CSS-Syntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele unterschiedliche Typen annehmen können und was diese Typen darstellen.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenketten und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und der Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie in spitzen Klammern (`<`, `>`) geschrieben sind, wie z. B. [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet dies, dass Sie jede gültige Farbe als Wert für diese Eigenschaft verwenden können, wie auf der Referenzseite zu [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben — zum Beispiel gibt es die {{cssxref("color")}}-Eigenschaft und den [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welche Sie in jedem Fall untersuchen. Auch HTML-Elemente verwenden spitze Klammern, aber es sollte aus dem Kontext ersichtlich sein, auf welches Sie schauen. Wenn Sie unsicher sind, versuchen Sie, auf MDN danach zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie etwas in CSS als Datentyp sehen, handelt es sich im Wesentlichen um eine andere Bezeichnung für Wertetyp. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden können.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort und den Hintergrund mit der `rgb()`-Funktion festgelegt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung zulässiger Werte zu definieren. Das bedeutet, dass, wenn Sie `<color>` als gültig sehen, Sie nicht überlegen müssen, welcher der verschiedenen Farbwerttypen verwendet werden kann — Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen, etc. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browser-Kompatibilität. Wenn Sie zum Beispiel die Seite zu [`<color>`](/de/docs/Web/CSS/color_value) anschauen, werden Sie sehen, dass der Abschnitt „Browser-Kompatibilität“ verschiedene Farbwerttypen und deren Unterstützung auflistet.

Lassen Sie uns einige der Typen von Werten und Einheiten betrachten, die Sie häufig antreffen werden, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentsätze

Es gibt verschiedene numerische Wertetypen, die Sie möglicherweise in CSS verwenden. Folgende werden alle als numerisch eingestuft:

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
        Ein <code>&#x3C;integer></code> ist eine Ganzzahl wie
        <code>1024</code> oder <code>-55</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/CSS/number">&#x3C;number></a></code>
      </td>
      <td>
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar — sie kann einen Dezimalpunkt mit einem Bruchanteil haben oder nicht. Zum Beispiel <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Eine <code>&#x3C;dimension></code> ist ein <code>&#x3C;number></code> mit einer angehängten Einheit. Zum Beispiel <code>45deg</code>, <code>5s</code> oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine Oberkategorie, die {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
        >, <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code
        > und
        <code
          ><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code
        >
        umfasst.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> stellt einen Bruchteil eines anderen Werts dar. Zum Beispiel <code>50%</code>. Prozentwerte sind immer relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines Elements relativ zur Länge des übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Die numerische Art, die Sie am häufigsten verwenden werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Folgende sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und gelten allgemein als immer gleich groß.

| Einheit | Name               | Entspricht               |
| ------- | ------------------ | ------------------------ |
| `cm`    | Zentimeter         | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter         | 1mm = 1/10 von 1cm       |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 von 1cm        |
| `in`    | Zoll               | 1in = 2.54cm = 96px      |
| `pc`    | Picas              | 1pc = 1/6 von 1in        |
| `pt`    | Punkt              | 1pt = 1/72 von 1in       |
| `px`    | Pixel              | 1px = 1/96 von 1in       |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck als für die Bildschirmausgabe verwendet werden. Beispielsweise verwenden wir auf dem Bildschirm normalerweise nicht `cm` (Zentimeter). Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Viewports.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie bei sorgfältiger Planung die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skalieren können. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den Typ {{cssxref("length")}}.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten genauer betrachten.

#### Ein Beispiel untersuchen

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Das erste Kästchen hat eine {{cssxref("width")}}, die in Pixeln festgelegt ist. Als absolute Einheit bleibt diese Breite gleich, egal was sonst geändert wird.

Das zweite Kästchen hat eine Breite in `vw` (Viewport-Breite) Einheiten. Dieser Wert ist relativ zur Breite des Viewports. 10vw sind also 10 Prozent der Breite des Viewports. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Kästchens ändern. Da dieses Beispiel jedoch in die Seite über ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe) eingebettet ist, wird dies nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie das [Beispiel in einem separaten Browser-Tab öffnen](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Kästchen verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf das umgebende {{htmlelement("div")}} festgelegt, das eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert in `1.5em` und Sie werden sehen, dass sich die Schriftgröße aller Elemente vergrößert, jedoch nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie die obigen Anweisungen befolgt haben, versuchen Sie, die Werte auf andere Weise zu ändern, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die beiden relativen Längen, die Sie höchstwahrscheinlich am häufigsten antreffen werden, wenn Sie irgendetwas von Boxen bis hin zu Texten skalieren. Es lohnt sich, zu verstehen, wie diese funktionieren und worin die Unterschiede zwischen ihnen bestehen, besonders wenn Sie sich mit komplexeren Themen wie [Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) befassen. Das folgende Beispiel gibt eine Demonstration.

Der unten gezeigte HTML-Code beschreibt eine Reihe von verschachtelten Listen – wir haben insgesamt zwei Listen, und beide Beispiele haben denselben HTML-Code. Der einzige Unterschied besteht darin, dass die erste eine Klasse namens _ems_ und die zweite eine Klasse namens _rems_ hat.

Am Anfang setzen wir 16px als Schriftgröße auf dem `<html>`-Element.

**Zusammenfassend bedeutet die Einheit `em` "die Schriftgröße des übergeordneten Elements"**, wenn sie für `font-size` verwendet wird (und "meine eigene Schriftgröße", wenn sie für etwas anderes verwendet wird). Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `ems` übernehmen ihre Größen von ihrem Elternteil. Daher wird jede nachfolgende Verschachtelungsebene progressiv größer, da jede Schriftgröße auf `1.3em` festgelegt ist – 1.3-mal die Schriftgröße ihres Elternteils.

**Zusammenfassend bedeutet die Einheit `rem` "Die Schriftgröße des Wurzelelements"** (rem steht für „root em“). Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `rems` übernehmen ihre Größen vom Wurzelelement (`<html>`). Das bedeutet, dass jede nachfolgende Verschachtelungsebene nicht immer größer wird.

Wenn Sie jedoch die Schriftgröße des `<html>`-Elements in der CSS ändern, werden Sie sehen, dass sich alles andere relativ zu diesem ändert – sowohl `rem`- als auch `em`-skalierter Text.

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

#### Zeilenhöhe-Einheiten

Die Einheiten `lh` und `rlh` sind relative Längeneinheiten, ähnlich wie `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` besteht jedoch darin, dass `lh` relativ zur Zeilenhöhe des Elements selbst ist, während `rlh` relativ zur Zeilenhöhe des Wurzelelements ist, normalerweise `<html>`.

Mit diesen Einheiten können wir präzise eine Dekoration auf den Text ausrichten. In diesem Beispiel verwenden wir die Einheit `lh`, um mit [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) Notizbuchähnliche Linien zu erstellen. Es spielt keine Rolle, wie groß die Zeilenhöhe des Texts ist. Die Linien werden immer an der richtigen Stelle beginnen.

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

In vielen Fällen wird ein Prozentwert ähnlich wie eine Länge behandelt. Der Unterschied bei Prozentsätzen besteht darin, dass sie immer relativ zu einem anderen Wert festgelegt werden. Wenn Sie beispielsweise die Schriftgröße eines Elements als Prozentsatz festlegen, beträgt sie einen Prozentsatz der Schriftgröße des übergeordneten Elements. Wenn Sie für einen `width`-Wert einen Prozentsatz verwenden, ist dieser ein Prozentsatz der Breite des Elternteils.

Im folgenden Beispiel haben die beiden prozentualen Kästen und die beiden Kästen mit Pixelgrößen dieselben Klassennamen. Die Sätze sind jeweils 40% und 200px breit.

Der Unterschied besteht darin, dass das zweite Paar von Kästen in einer äußeren Wrapper-Box ist, die 400 Pixel breit ist. Der zweite 200 Pixel breite Kasten ist genauso breit wie der erste, aber der zweite 40%-Kasten ist jetzt 40% von 400px — viel schmaler als der erste!

Versuchen Sie, die Breite des Wrappers oder den Prozentsatzwert zu ändern, um zu sehen, wie dies funktioniert:

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

Das nächste Beispiel hat Schriftgrößen, die als Prozentsätze festgelegt sind. Jedes `<li>` hat eine Schriftgröße von 80%, wodurch die verschachtelten Listenelemente schrittweise kleiner werden, da sie die Größen von ihrem übergeordneten Element erben.

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

Beachten Sie, dass viele Wertetypen entweder eine Länge oder einen Prozentsatz akzeptieren, aber einige nur eine Länge akzeptieren. Auf den MDN-Referenzseiten zu Eigenschaften sehen Sie die möglichen Werte. Wenn der erlaubte Wert {{cssxref("length-percentage")}} enthält, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen, ohne dass ihnen eine Einheit hinzugefügt wird. Ein Beispiel für eine Eigenschaft, die eine einheitenlose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Opazität eines Elements steuert (wie durchsichtig es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig durchsichtig) und `1` (vollständig deckend).

Im folgenden Beispiel versuchen Sie, den Wert von `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und sehen, wie das Kästchen und sein Inhalt mehr oder weniger durchsichtig werden:

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

Farbwerte können an vielen Stellen in CSS verwendet werden, ob Sie die Farbe von Text, Hintergründen, Rahmen und vielem mehr angeben.
Es gibt viele Möglichkeiten, in CSS Farbe festzulegen, was Ihnen ermöglicht, viele spannende Eigenschaften zu kontrollieren.

Das Standard-Farbsystem, das auf modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, was die Anzeige von etwa 16,7 Millionen unterschiedlichen Farben ermöglicht, durch eine Kombination verschiedener Rot-, Grün- und Blaukanäle mit jeweils 256 unterschiedlichen Werten pro Kanal (256 x 256 x 256 = 16,777,216).

In diesem Abschnitt beschäftigen wir uns zunächst mit den am häufigsten gesehenen Möglichkeiten, Farben anzugeben: mit Schlüsselwörtern, Hexadezimalwerten und `rgb()`-Werten.
Außerdem werfen wir einen kurzen Blick auf zusätzliche Farb-Funktionen, um sie erkennen zu können oder auszuprobieren.

Normalerweise entscheiden Sie sich für eine Farbpalette und verwenden dann diese Farben – sowie Ihre bevorzugte Methode zur Festlegung von Farben – im gesamten Projekt.
Es ist möglich, verschiedene Farbmodelle zu mischen, aber normalerweise ist es besser, wenn Ihr gesamtes Projekt dieselbe Methode zur Angabe von Farben verwendet, um Konsistenz zu gewährleisten!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder 'benannte Farben') in vielen MDN-Codebeispielen sehen. Da der [`<named-color>`s](/de/docs/Web/CSS/named-color)-Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden diese normalerweise nicht auf Produktionswebsites verwendet. Da das Schlüsselwort die Farbe als menschenlesbaren Textwert darstellt, werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar mitzuteilen, welche Farbe erwartet wird, damit der Lernende sich auf den Inhalt konzentrieren kann, der vermittelt werden soll.

Probieren Sie aus, mit verschiedenen Farbwerten in den interaktiven Beispielen unten zu spielen, um ein besseres Verständnis dafür zu bekommen, wie sie funktionieren:

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

Die nächste Art von Farbwerten, die Sie höchstwahrscheinlich antreffen werden, sind Hexadezimalcodes.
Hexadezimal verwendet 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` ist.
Jeder Hex-Farbwert besteht aus einem Rautezeichen (`#`), gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb` beispielsweise), mit einem optionalen ein- oder zweistelligen Hexadezimalwert, der die Alphatransparenz der vorherigen drei oder sechs Zeichen-Farbwerte darstellt.

Beim Verwenden von Hexadezimalwerten für RGB-Farben repräsentiert jedes **Paar** hexadezimaler Zeichen eine Dezimalnummer, die einen der Kanäle — Rot, Grün oder Blau — beschreibt. Dies ermöglicht uns, jeden der 256 verfügbaren Werte für jeden Kanal anzugeben (16 x 16 = 256).
Diese Werte sind im Vergleich zu Schlüsselwörtern weniger intuitiv, um Farben zu definieren, sie sind jedoch viel vielseitiger, weil sie jede RGB-Farbe darstellen können.

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

Um RGB-Werte direkt zu erstellen, nimmt die Funktion [`rgb()`](/de/docs/Web/CSS/color_value/rgb) drei Parameter, die die **Rot-, Grün- und Blaukanalwerte** der Farben repräsentieren, mit einem optionalen vierten Wert, der durch einen Schrägstrich ('/') getrennt ist und die Opazität angibt, ähnlich wie Hexadezimalwerte. Der Unterschied bei RGB ist, dass jeder Kanal nicht durch zwei Hexadezimalziffern, sondern durch eine Dezimalzahl zwischen 0 und 255 oder einen Prozentwert zwischen 0% und 100% angegeben wird (aber keine Mischung aus beiden).

Lassen Sie uns unser letztes Beispiel neu schreiben, um RGB-Farben zu verwenden:

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

Sie können einen vierten Parameter an `rgb()` übergeben, der den Alpha-Kanal der Farbe repräsentiert, der die Deckkraft steuert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen ergeben unterschiedliche Transparenzstufen.

> [!NOTE]
> Die Festlegung eines Alpha-Kanals für eine Farbe hat einen großen Unterschied zur Verwendung der Eigenschaft {{cssxref("opacity")}}, die wir bereits oben beschrieben haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin durchsichtig, während die Verwendung von RGB mit einem Alpha-Parameter nur die Farbe, die Sie angeben, durchsichtig macht.

Im Beispiel unten haben wir dem Containerblock unserer Farbkasten ein Hintergrundbild hinzugefügt. Wir haben dann die Kästen so konfiguriert, dass sie unterschiedliche Werte für den Alpha-Kanal haben — Sie werden feststellen, dass der Hintergrund stärker durchscheint, wenn der Alpha-Kanal-Wert niedriger ist.
In diesem Beispiel versuchen Sie, die Werte des Alpha-Kanals zu ändern, um zu sehen, wie es die Farbdarstellung beeinflusst.

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

Der Farbraum `sRGB` definiert Farben im rot (r)-, grün (g)- und blau (b)-Farbraum.

### Verwendung von Farbtönen zur Farbspezifikation

Wenn Sie über Schlüsselwörter, Hexadezimalwerte und `rgb()` hinausgehen möchten, können Sie für Farben [`<hue>`](/de/docs/Web/CSS/hue) verwenden.
Farbton ist die Eigenschaft, die es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.
Das Schlüsselkonzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) angeben können, da die meisten Farbmodelle Farbtöne mithilfe eines {{Glossary("color_wheel", "Farbrades")}} beschreiben.

Es gibt mehrere Farbfunktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue)-Komponente enthalten, einschließlich `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farbfunktionen wie [`lab()`](/de/docs/Web/CSS/color_value/lab) definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich den Leitfaden [Farben auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) an, die Referenz zu [`<color>`](/de/docs/Web/CSS/color_value), die alle verschiedenen Möglichkeiten auflistet, wie Farben in CSS verwendet werden können, sowie das [CSS-Color-Modul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften, die Farbwerte verwenden, bietet.

### HWB

Ein großartiger Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Funktion, die eine `srgb()`-Farbe angibt.
Die drei Bestandteile sind:

- **Farbton**: Der Basiston der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue)-Wert zwischen 0 und 360, der die Winkel auf einem Farbrad darstellt.
- **Weißanteil**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weiß) bis `100%` (voll Weiß).
- **Schwarzanteil**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von `0%` (kein Schwarz) bis `100%` (voll Schwarz).

### HSL

Ähnlich wie die `hwb()`-Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Funktion, die ebenfalls eine `srgb()`-Farbe angibt.
HSL verwendet `Farbton`, zusätzlich zu `Sättigung` und `Helligkeit`:

- **Farbton**
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 keine Farbe ist (es erscheint als Grauton) und 100% volle Farbsättigung darstellen.
- **Helligkeit**: Wie hell oder dunkel ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 keine Helligkeit (erscheint vollständig schwarz) und 100% volle Helligkeit (erscheint vollständig weiß) bedeuten.

Der `hsl()`-Farbwert hat ebenfalls einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) von der Farbe getrennt ist und die alphatransparenz angibt.

Lassen Sie uns unser RGB-Beispiel aktualisieren, um HSL-Farben zu verwenden:

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

Der [`<image>`](/de/docs/Web/CSS/image)-Wertetyp wird überall verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, auf die über eine `url()`-Funktion verwiesen wird, oder ein Verlauf.

Im Beispiel unten haben wir ein Bild und einen Verlauf als Wert für die CSS-Eigenschaft `background-image` demonstriert.

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
> Es gibt einige andere mögliche Werte für `<image>`, jedoch sind dies neue Einführungen mit derzeit noch eingeschränkter Browser-Unterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image)-Datentyp an, wenn Sie mehr darüber erfahren möchten.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value)-Wertetyp repräsentiert einen Satz von 2D-Koordinaten, die verwendet werden, um ein Element wie ein Hintergrundbild (durch [`background-position`](/de/docs/Web/CSS/background-position)) zu positionieren. Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` verwenden, um Elemente mit spezifischen Begrenzungen einer 2D-Box auszurichten, zusammen mit Längen, die Verschiebungen von den oberen und linken Kanten der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten - der erste legt die horizontale Position fest, der zweite die vertikale. Wenn Sie nur Werte für eine Achse angeben, wird die andere standardmäßig auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px von oben und rechts des Containers mit einem Schlüsselwort positioniert. Spielen Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.

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

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>`-Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter sind genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Daher werden sie nicht zitiert — sie werden nicht als Zeichenketten behandelt.

Es gibt Stellen, an denen Sie Zeichenketten in CSS verwenden. Zum Beispiel [bei der Angabe von generiertem Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu demonstrieren, dass er eine Zeichenkette ist. Im folgenden Beispiel verwenden wir unzitierte Farb-Schlüsselwörter zusammen mit einer zitierten generierten Inhaltszeichenfolge.

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

In der Programmierung ist eine Funktion ein Stück Code, das eine spezifische Aufgabe erfüllt.
Funktionen sind nützlich, weil Sie Code einmal schreiben können und ihn dann viele Male wiederverwenden, anstatt die gleiche Logik immer wieder neu zu schreiben.
Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern bieten auch praktische eingebaute Funktionen für häufige Aufgaben, sodass Sie sie nicht von Grund auf selbst schreiben müssen.

CSS hat ebenfalls [Funktionen](/de/docs/Web/CSS/CSS_Functions), die ähnlich wie Funktionen in anderen Sprachen funktionieren.
Tatsächlich haben wir bereits CSS-Funktionen im Abschnitt [Farbe](#farbe) oben mit den Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) gesehen.

Abgesehen von der Farbzuweisung können Sie Funktionen in CSS für viele andere Dinge nutzen.
Zum Beispiel sind [Transform-Funktionen](/de/docs/Web/CSS/CSS_Functions#transform_functions) eine gängige Möglichkeit, Elemente auf einer Seite zu verschieben, zu drehen und zu skalieren.
Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu bewegen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate), um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale), um etwas größer oder kleiner darzustellen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Zeitdauern.
Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie einige Berechnungen durchführen.
Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen addieren und anschließend Ihr CSS mit dem Ergebnis aktualisieren.

CSS hat Unterstützung für [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions), die es ermöglichen, Berechnungen durchzuführen, anstatt sich auf statische Werte zu verlassen oder die Mathematik in JavaScript zu erledigen.
Eine der am häufigsten genutzten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), welche Addition, Subtraktion, Multiplikation und Division ermöglicht.

Nehmen wir zum Beispiel an, wir möchten die Breite eines Elements auf 20% seines übergeordneten Containers plus 100px setzen.
Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn der übergeordnete Container eine Breite in Prozent (oder eine relative Einheit wie `em` oder `rem`) verwendet, variiert er je nach Kontext und anderen Faktoren wie dem Gerät oder der Fensterbreite des Benutzers.
Wir können jedoch `calc()` verwenden, um die Breite des Elements auf 20% seines übergeordneten Containers plus 100px festzulegen.
Die 20% basieren auf der Breite des übergeordneten Containers (`.wrapper`), und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS nutzen können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max) und [`clamp()`](/de/docs/Web/CSS/clamp); diese ermöglichen es, den kleinsten, größten oder mittleren Wert aus einer Reihe von Werten auszuwählen.
Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos) und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel für die Rotation von Elementen um einen Punkt zu berechnen oder Farben auszuwählen, die einen [Farbton-Winkel](/de/docs/Web/CSS/hue) als Parameter nehmen.
[Exponential-Funktionen](/de/docs/Web/CSS/CSS_Functions#exponential_functions) könnten ebenfalls für Animationen und Übergänge genutzt werden, wenn Sie sehr spezifische Kontrolle darüber benötigen, wie etwas sich bewegt und aussieht.

Das Wissen über CSS-Funktionen ist nützlich, damit Sie sie erkennen können, wenn Sie sie sehen. Sie sollten anfangen, sie in Ihren Projekten auszuprobieren — sie helfen Ihnen, benutzerdefinierten oder sich wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erreichen können.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie sich diese Informationen eingeprägt haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_tasks).

## Zusammenfassung

Dies war eine schnelle Einführung in die gebräuchlichsten Typen von Werten und Einheiten, denen Sie begegnen könnten. Sie können sich alle unterschiedlichen Typen auf der Referenzseite [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) ansehen — viele davon werden Sie bei der Arbeit durch diese Lektionen entdecken.

Das Wichtigste ist, sich daran zu erinnern, dass jede Eigenschaft eine definierte Liste von zulässigen Wertetypen hat, und jeder Wertetyp hat eine Definition, die erläutert, was die Werte sind. Anschließend können Sie die Einzelheiten hier auf MDN nachschlagen. Zum Beispiel zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) auch erlaubt, einen Farbverlauf zu erstellen, ist nützlich, aber möglicherweise nicht offensichtliches Wissen, das man haben sollte!

Im nächsten Artikel betrachten wir, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
