---
title: CSS-Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Werttyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werfen wir einen Blick auf einige der am häufigsten verwendeten Werttypen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) hat einen Syntaxabschnitt, der die Werttypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a>), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS-Grundsyntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen annehmen können und was diese Typen repräsentieren.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenketten und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und der Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Werttypen erkennen, da sie von spitzen Klammern (`<`, `>`) umgeben sind, wie zum Beispiel [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Werttyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jeden gültigen Farbwert für diese Eigenschaft verwenden können, wie auf der Referenzseite für [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt.

Manchmal können Werttypen und Eigenschaften den gleichen oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value) Datentyp. Sie können die spitzen Klammern verwenden, um festzustellen, welche Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber aus dem Kontext sollte ersichtlich sein, welches Sie sich ansehen. Wenn Sie unsicher sind, versuchen Sie, danach auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Werttypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Wesentlichen austauschbar — wenn Sie in CSS etwas als Datentyp bezeichnet sehen, ist es nur eine elegante Art zu sagen, dass es ein Werttyp ist. Der Begriff _Wert_ bezieht sich auf jeden speziellen Ausdruck, der von einem Werttyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort und den Hintergrund mit der `rgb()` Funktion festgelegt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Werttyp in CSS ist eine Möglichkeit, eine Sammlung zulässiger Werte zu definieren. Das bedeutet, dass Sie sich, wenn Sie `<color>` als gültig sehen, nicht fragen müssen, welche der verschiedenen Farbwerte verwendet werden können — Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen zur Browserunterstützung. Wenn Sie sich zum Beispiel die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, sehen Sie, dass der Abschnitt zur Browser-Kompatibilität verschiedene Arten von Farbwerten und deren Unterstützung auflistet.

Werfen wir einen Blick auf einige der Werttypen und Einheiten, die Sie häufig begegnen werden, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentsätze

Es gibt verschiedene numerische Werttypen, die Sie möglicherweise in CSS verwenden. Die folgenden sind alle als numerisch klassifiziert:

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
        Ein <code>&#x3C;number></code> repräsentiert eine Dezimalzahl — sie kann einen Dezimalpunkt mit einem Bruchteil haben oder nicht. Zum Beispiel <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Eine <code>&#x3C;dimension></code> ist eine
        <code>&#x3C;number></code> mit einer Einheit. Zum Beispiel <code>45deg</code>, <code>5s</code> oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine Oberkategorie, die das {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code> , <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code> und <code><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code> Typen umfasst.
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

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Typen von Längen, die in CSS verwendet werden — relativ und absolut. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und werden im Allgemeinen als immer gleich groß angesehen.

| Einheit | Name              | Entspricht               |
| ------- | ----------------- | ------------------------ |
| `cm`    | Zentimeter        | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter        | 1mm = 1/10 eines 1cm     |
| `Q`     | Viertelmillimeter | 1Q = 1/40 eines 1cm      |
| `in`    | Zoll              | 1in = 2.54cm = 96px      |
| `pc`    | Picas             | 1pc = 1/6 eines 1in      |
| `pt`    | Punkte            | 1pt = 1/72 eines 1in     |
| `px`    | Pixel             | 1px = 1/96 eines 1in     |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck und nicht für die Bildschirmanzeige verwendet werden. Zum Beispiel verwenden wir typischerweise keine `cm` (Zentimeter) auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Viewports.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit sorgfältiger Planung dafür sorgen können, dass sich die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skaliert. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den {{cssxref("length")}} Typ.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erkunden.

#### Ein Beispiel erkunden

Im untenstehenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Das erste Feld hat eine {{cssxref("width")}}, die in Pixeln gesetzt ist. Als absolute Einheit bleibt diese Breite gleich, egal was sonst passiert.

Das zweite Feld hat eine Breite, die in `vw` (Viewport-Breite) Einheiten gesetzt ist. Dieser Wert ist relativ zur Breite des Viewports, und daher sind 10vw 10 Prozent der Breite des Viewports. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Felds ändern. Da dieses Beispiel jedoch über ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe) in die Seite eingebettet ist, funktioniert dies nicht. Um dies in Aktion zu sehen, müssen Sie das [Beispiel nach dem Öffnen in einem eigenen Browser-Tab ausprobieren](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Feld verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umschließenden {{htmlelement("div")}} festgelegt, das eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em` und Sie werden sehen, dass die Schriftgröße aller Elemente zunimmt, aber nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

Versuchen Sie nach den obigen Anweisungen, mit den Werten auf andere Weise zu experimentieren, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die zwei relativen Längen, denen Sie wahrscheinlich am häufigsten begegnen werden, wenn Sie irgendetwas von Boxen bis zu Texten dimensionieren. Es ist wert, zu verstehen, wie diese funktionieren und die Unterschiede zwischen ihnen, insbesondere wenn Sie anfangen, auf komplexere Themen wie [Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) einzugehen. Das folgende Beispiel bietet eine Demonstration.

Das unten dargestellte HTML ist ein Satz verschachtelter Listen — wir haben zwei Listen insgesamt und beide Beispiele haben das gleiche HTML. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Zu Beginn setzen wir 16px als Schriftgröße auf dem `<html>` Element.

**Zur Wiederholung, die `em` Einheit bedeutet "die Schriftgröße meines übergeordneten Elements"** wenn sie für `font-size` verwendet wird (und "meine eigene Schriftgröße", wenn sie für etwas anderes verwendet wird). Die {{htmlelement("li")}} Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `ems` nehmen ihre Größe von ihrem übergeordneten Element. So wird jede nachfolgende Verschachtelungsebene immer größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat — 1.3 mal die Schriftgröße ihres übergeordneten Elements.

**Zur Wiederholung, die `rem` Einheit bedeutet "die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größe vom Wurzelelement (`<html>`). Das bedeutet, dass jede nachfolgende Verschachtelungsebene nicht kontinuierlich größer wird.

Wenn Sie jedoch die `font-size` des `<html>`-Elements im CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu verändert — sowohl `rem`- als auch `em`-Größen.

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

`lh` und `rlh` sind relative Längeneinheiten ähnlich wie `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` besteht darin, dass die erste relativ zur Zeilenhöhe des Elements selbst ist, während die zweite relativ zur Zeilenhöhe des Wurzelelements, normalerweise `<html>`, ist.

Mit diesen Einheiten können wir die Box-Dekoration präzise am Text ausrichten. In diesem Beispiel verwenden wir die `lh`-Einheit, um Notizblock-ähnliche Linien mit [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) zu erstellen. Es spielt keine Rolle, wie hoch die Zeilenhöhe des Textes ist, die Linien beginnen immer an der richtigen Stelle.

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

In vielen Fällen wird ein Prozentsatz ebenso behandelt wie eine Länge. Das Problem bei Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert gesetzt sind. Wenn Sie beispielsweise die `font-size` eines Elements als Prozentsatz festlegen, wird es ein Prozentsatz der `font-size` des übergeordneten Elements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, ist es ein Prozentsatz der `width` des übergeordneten Elements.

Im folgenden Beispiel haben die beiden boxen mit Prozentgröße und die beiden boxen mit Pixelgröße die gleichen Klassennamen. Die Sätze sind jeweils 40% und 200px breit.

Der Unterschied ist, dass der zweite Satz von zwei boxen in einem Wrapper liegt, der 400 Pixel breit ist. Die zweite 200px breite box hat die gleiche Breite wie die erste, aber die zweite 40% box ist jetzt 40% von 400px — viel schmaler als die erste!

Versuchen Sie, die Breite des Wrappers oder dem Prozentwert zu ändern, um zu sehen, wie dies funktioniert:

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

Das nächste Beispiel hat Schriftarten in Prozentsätzen festgelegt. Jedes `<li>` hat eine `font-size` von 80%; daher werden die verschachtelten Listenelemente immer kleiner, da sie ihre Größe von ihrem übergeordneten Element erben.

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

Beachten Sie, dass, obwohl viele Werttypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur eine Länge akzeptieren. Auf den MDN-Eigenschaftsreferenzseiten können Sie sehen, welche Werte akzeptiert werden. Wenn der erlaubte Wert {{cssxref("length-percentage")}} enthält, dann können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Werttypen akzeptieren Zahlen ohne hinzufügte Einheit. Ein Beispiel für eine Eigenschaft, die eine einheitslose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Deckkraft eines Elements steuert (wie durchsichtig es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig durchsichtig) und `1` (vollständig deckend).

Im untenstehenden Beispiel, versuchen Sie den Wert von `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und zu sehen, wie die box und ihr Inhalt mehr oder weniger undurchsichtig werden:

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
> Wenn Sie eine Zahl als Wert in CSS verwenden, sollte sie nicht in Anführungszeichen gesetzt sein.

## Farbe

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es, dass Sie die Farbe von Text, Hintergründen, Rahmen und vieles mehr festlegen. Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, sodass Sie viele aufregende Eigenschaften steuern können.

Das standardmäßige Farbsystem, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, wodurch etwa 16,7 Millionen unterschiedliche Farben über eine Kombination von unterschiedlichen Rot-, Grün- und Blaukanälen mit 256 verschiedenen Werten pro Kanal (256 x 256 x 256 = 16.777.216) dargestellt werden können.

In diesem Abschnitt werden wir uns zunächst die am häufigsten gesehenen Möglichkeiten zur Farbspezifizierung ansehen: mit Schlüsselwörtern, hexadezimalen und `rgb()`-Werten. Wir werden auch kurz einen Blick auf zusätzliche Farbfunktionsmöglichkeiten werfen, sodass Sie sie erkennen können, wenn Sie sie sehen, oder mit verschiedenen Wegen zur Farbgebung experimentieren können.

Sie werden wahrscheinlich eine Farbpalette entscheiden und dann diese Farben — und Ihre bevorzugte Möglichkeit zur Farbspezifizierung — während Ihres Projekts verwenden. Sie können Farbsysteme mischen und kombinieren, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt die gleiche Methode zur Farbangabe verwendet, um Konsistenz zu gewährleisten!

### Farb-Schlüsselwörter

Sie werden sehen, dass die Farb-Schlüsselwörter (oder 'benannte Farben') in vielen MDN-Codebeispielen verwendet werden. Da der [`<named-color>`s](/de/docs/Web/CSS/named-color) Datentyp nur eine sehr endliche Anzahl von Farbwerten enthält, werden diese nicht häufig auf Produktionswebsites verwendet. Da das Schlüsselwort die Farbe als menschenlesbarer Textwert darstellt, werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar mitzuteilen, welche Farbe erwartet wird, sodass der Lernende sich auf den gelehrten Inhalt konzentrieren kann.

Versuchen Sie, mit verschiedenen Farbwerten in den Live-Beispielen unten zu spielen, um einen besseren Überblick darüber zu bekommen, wie sie funktionieren:

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

Die nächste Art von Farbwert, auf die Sie wahrscheinlich stoßen werden, sind hexadezimale Codes. Hexadezimal verwendet 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` umfasst. Jeder hexadezimale Farbwert besteht aus einem Hash-/Pfund-Symbol (`#`) gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb` z.B.), mit optionalen ein oder zwei hexadezimalen Zeichen, die die Alpha-Transparenz der vorherigen drei oder sechs Zeichenfarbe repräsentieren.

Beim Verwenden von Hexadezimal zur RGB-Wertbeschreibung stellt jedes **Paar** von hexadezimalen Zeichen eine Dezimalzahl dar, die einen der Kanäle — Rot, Grün und Blau — repräsentiert und uns ermöglicht, einen der 256 verfügbaren Werte für jeden (16 x 16 = 256) zu spezifizieren. Diese Werte sind weniger intuitiv als Schlüsselwörter zur Farbbestimmung, aber sie sind wesentlich vielseitiger, da Sie jede RGB-Farbe damit repräsentieren können.

Versuchen Sie, die Werte zu ändern, um zu sehen, wie sich die Farben variieren:

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

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter auf, die die **Rot**-, **Grün**- und **Blau**-Kanalwerte der Farben repräsentieren, mit einem optionalen vierten Wert getrennt durch einen Schrägstrich ('/'), der die Deckkraft ähnlich wie Hex-Werte darstellt. Der Unterschied bei RGB ist, dass jeder Kanal nicht durch zwei Hex-Ziffern dargestellt wird, sondern durch eine Dezimalzahl zwischen 0 und 255 oder ein Prozent zwischen 0% und 100% inklusive (aber keine Mischung der beiden).

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

Sie können einen vierten Parameter zu `rgb()` hinzufügen, der den Alpha-Kanal der Farbe darstellt und die Deckkraft steuert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig durchsichtig und wenn Sie ihn auf `1` setzen, wird er vollständig deckend. Werte dazwischen geben Ihnen unterschiedliche Transparenzstufen.

> [!NOTE]
> Das Setzen eines Alpha-Kanals auf einer Farbe unterscheidet sich in einem entscheidenden Punkt von der Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir früher gesehen haben. Wenn Sie die Opazität verwenden, machen Sie das Element und alles darin undurchsichtig, während die Verwendung von RGB mit einem Alpha-Parameter nur die Farbe undurchsichtig macht, die Sie spezifizieren.

Im Beispiel unten haben wir ein Hintergrundbild zum enthaltenden Block unserer farbigen Boxen hinzugefügt. Wir haben dann die Boxen mit unterschiedlichen Alpha-Werten gesetzt — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanal-Wert kleiner ist. In diesem Beispiel versuchen Sie, die Werte des Alpha-Kanals zu ändern, um zu sehen, wie es das Farbergebnis beeinflusst.

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

Der `sRGB` Farbraum definiert Farben im **Rot** (r), **Grün** (g) und **Blau** (b) Farbraum.

### Verwenden von Hues zur Farbspezifizierung

Wenn Sie über Schlüsselwörter, Hexadezimal und `rgb()` für Farben hinausgehen möchten, könnten Sie erwägen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Der Farbton (Hue) ist die Eigenschaft, die es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen. Das Schlüsselkonzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) spezifizieren können, da die meisten der Farbreferenzen Hues mit einem {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt verschiedene Farbfunktionsmöglichkeiten, die einen [`<hue>`](/de/docs/Web/CSS/hue) Bestandteil enthalten, wie `hsl()`, `hwb()`, und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farbfunktionsmöglichkeiten, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich den [Leitfaden zum Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), den [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, mit denen Sie Farben in CSS verwenden können, und dem [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) an, das einen Überblick über alle Farbtypen in CSS und die Eigenschaften, die Farbwerte verwenden, gibt.

### HWB

Ein guter Ausgangspunkt für die Verwendung von Hues in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion, die eine `srgb()` Farbe spezifiziert. Die drei Teile sind:

- **Hue**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen 0 und 360 an und stellt die Winkel um einen Farbkreis dar.
- **Weißanteil**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weißanteil) bis `100%` (voller Weißanteil) an.
- **Schwarzanteil**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von 0% (kein Schwarzanteil) bis 100% (voller Schwarzanteil) an.

### HSL

Ähnlich wie bei der `hwb()`-Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die ebenfalls eine `srgb()`-Farbe spezifiziert. HSL verwendet `Hue`, zusätzlich zu `Saturation` und `Lightness`:

- **Hue**
- **Saturation**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0-100% an, wobei 0 bedeutet, dass keine Farbe vorhanden ist (sie erscheint als Grauton), und 100% bedeutet volle Farbsättigung.
- **Lightness**: Wie hell oder lebendig ist die Farbe? Dies nimmt einen Wert von 0-100% an, wobei 0 bedeutet, dass keine Helligkeit vorhanden ist (sie erscheint vollständig schwarz) und 100% volle Helligkeit bedeutet (sie erscheint vollständig weiß).

Der `hsl()`-Farbwert bietet auch einen optionalen vierten Wert, der von der Farbe durch einen Schrägstrich (`/`) getrennt ist und die Alpha-Transparenz darstellt.

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

Wie bei `rgb()` können Sie einen Alpha-Parameter an `hsl()` übergeben, um die Deckkraft zu spezifizieren:

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

Der [`<image>`](/de/docs/Web/CSS/image) Werttyp wird verwendet, wo immer ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion angezeigt wird, oder ein Gradient.

Im folgenden Beispiel haben wir ein Bild und einen Farbverlauf als Wert für die CSS `background-image` Eigenschaft angezeigt.

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
> Es gibt einige andere mögliche Werte für `<image>`, aber diese sind neuer und haben derzeit eine schlechte Browserunterstützung. Schauen Sie sich die Seite auf MDN zum [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie mehr darüber lesen möchten.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Werttyp repräsentiert ein Set von 2D-Koordinaten, das verwendet wird, um einen Gegenstand wie ein Hintergrundbild zu positionieren (über [`background-position`](/de/docs/Web/CSS/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right`, und `center` annehmen, um Elemente mit spezifischen Begrenzungen eines 2D-Kastens auszurichten, zusammen mit Längen, die Versätze von den oberen und linken Kanten des Kastens darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die Position horizontal fest, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` standardgesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px von oben und rechts des Containers mit einem Schlüsselwort positioniert. Experimentieren Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.

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

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>` Schlüsselwörter wie `red`, `black`, `rebeccapurple`, und `goldenrod`). Diese Schlüsselwörter werden genauer beschrieben als _Bezeichner_, ein spezieller Wert, den CSS versteht. Als solche werden sie nicht in Anführungszeichen gesetzt — sie werden nicht als Zeichenfolgen behandelt.

Es gibt Orte, an denen Sie Zeichenfolgen in CSS verwenden. Beispielweise [beim Spezifizieren von generierten Inhalten](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert in Anführungszeichen gesetzt, um zu zeigen, dass es sich um eine Zeichenkette handelt. Im Beispiel unten verwenden wir nicht zitierte Farbkeywords zusammen mit einer zitierten generierten Inhaltszeichenkette.

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

In der Programmierung ist eine Funktion ein Codeabschnitt, der eine bestimmte Aufgabe ausführt. Funktionen sind nützlich, weil Sie den Code einmal schreiben und dann viele Male wiederverwenden können, anstatt die gleiche Logik immer und immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern bieten auch praktische integrierte Funktionen für häufige Aufgaben, sodass Sie sie nicht selbst von Grund auf schreiben müssen.

CSS hat ebenfalls [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die ähnlich wie Funktionen in anderen Sprachen funktionieren. Tatsächlich haben wir bereits CSS-Funktionen im [Farbe](#farbe) Abschnitt oben mit den [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktionen gesehen.

Abgesehen von der Anwendung von Farben können Sie Funktionen in CSS für viele andere Dinge verwenden. Beispielsweise sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#transform_functions) eine gängige Möglichkeit, Elemente auf einer Seite zu verschieben, zu drehen und zu skalieren. Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu verschieben, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) um etwas zu drehen oder [`scale()`](/de/docs/Web/CSS/transform-function/scale), um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Dauer. Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie etwas Mathematik durchführen. Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen Zahl addieren und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions), die es uns ermöglichen, Berechnungen durchzuführen, anstatt sich auf feste Werte zu verlassen oder die Mathematik in JavaScript zu machen. Eine der häufigsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die es Ihnen ermöglicht, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Zum Beispiel, sagen wir, wir wollen die Breite eines Elements setzen, um 20% seines übergeordneten Containers plus 100px zu sein. Wir können diese Breite nicht mit einem festen Wert angeben — wenn das übergeordnete Element eine Prozentbreite (oder eine relative Einheit wie `em` oder `rem`) verwendet, dann variiert es je nach Kontext, in dem es verwendet wird, und andere Faktoren wie das Gerät des Benutzers oder die Breite des Browserfensters. Wir können jedoch `calc()` verwenden, um die Breite des Elements auf 20% seines übergeordneten Containers plus 100px zu setzen. Die 20% basieren auf der Breite des übergeordneten Containers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max), und [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie den kleinsten, größten oder mittleren Wert aus einer Anzahl von Werten auswählen. Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos) und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel zum Drehen von Elementen um einen Punkt zu berechnen oder Farben auszuwählen, die einen [Farbwinkel](/de/docs/Web/CSS/hue) als Parameter verwenden. [Exponentialfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#exponential_functions) können auch für Animationen und Übergänge verwendet werden, wenn Sie sehr spezifische Kontrolle darüber benötigen, wie sich etwas bewegt und aussieht.

Zu wissen, dass es CSS-Funktionen gibt, ist nützlich, damit Sie sie erkennen, wenn Sie sie sehen. Sie sollten beginnen, mit ihnen in Ihren Projekten zu experimentieren — sie werden Ihnen helfen, benutzerdefinierten oder wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erzielen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_tasks).

## Zusammenfassung

Dies war ein schneller Überblick über die häufigsten Typen von Werten und Einheiten, denen Sie begegnen könnten. Sie können sich alle verschiedenen Typen auf der [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul-Seite ansehen — viele davon werden Ihnen im Laufe dieser Lektionen begegnen.

Das Wesentliche, an das Sie sich erinnern sollten, ist, dass jede Eigenschaft eine definierte Liste erlaubter Werttypen hat und jeder Werttyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Spezifika hier auf MDN nachschlagen. Zum Beispiel, zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch ermöglicht, einen Farbgradienten zu erstellen, ist nützlich, aber vielleicht nicht offensichtlich vorhandenes Wissen!

Im nächsten Artikel werden wir uns ansehen, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
