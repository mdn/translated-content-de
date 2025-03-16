---
title: CSS-Werte und -Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 1fda2016527c5588db8949a63a04fc53b440e346
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir einige der am häufigsten verwendeten Wertetypen betrachten, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) hat einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studium der
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS-Grundsyntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen annehmen können und was diese Typen darstellen.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenfolgen und Bezeichner sowie Funktionen.</li>
          <li>Verständnis der absoluten und relativen Einheiten und der Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie in spitzen Klammern (`<`, `>`) eingeschlossen sind, z. B. [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jede gültige Farbe als Wert für diese Eigenschaft verwenden können, wie sie auf der Referenzseite [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt ist.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value) Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welchen Fall Sie jeweils studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber es sollte aus dem Kontext klar sein, welchen Sie gerade betrachten. Wenn Sie sich nicht sicher sind, versuchen Sie es auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie etwas in CSS als Datentyp bezeichnen, ist es im Grunde nur eine vornehme Art, Wertetyp zu sagen. Der Begriff _Wert_ bezieht sich auf jeden konkreten Ausdruck, der von einem Wertetyp unterstützt wird und den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mithilfe eines Schlüsselworts festgelegt und den Hintergrund mit der `rgb()`-Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung von zulässigen Werten zu definieren. Das bedeutet, dass wenn Sie `<color>` als gültig sehen, Sie sich nicht Gedanken darüber machen müssen, welche der verschiedenen Farbwerttypen verwendet werden kann - Schlüsselwörter, Hexadezimalwerte, `rgb()`-Funktionen usw. Sie können _jeden_ verfügbaren `<color>`-Wert verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browser-Unterstützung. Wenn Sie sich zum Beispiel die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, werden Sie sehen, dass der Abschnitt zur Browser-Kompatibilität die verschiedenen Typen von Farbwerten auflistet und deren Unterstützung.

Werfen wir einen Blick auf einige der Typen von Werten und Einheiten, die Sie häufig antreffen werden, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

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
        Ein <code>&#x3C;number></code> repräsentiert eine Dezimalzahl — sie kann mit oder ohne Dezimalpunkt und einem Bruchteil sein. Zum
        Beispiel <code>0.255</code>, <code>128</code>, oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Eine <code>&#x3C;dimension></code> ist ein
        <code>&#x3C;number></code> mit einer Einheit. Zum Beispiel,
        <code>45deg</code>, <code>5s</code>, oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine übergeordnete Kategorie, die die
        {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
        >, <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code
        >, und
        <code
          ><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code
        >
        Typen umfasst.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> repräsentiert einen Bruchteil eines
        anderen Wertes. Zum Beispiel <code>50%</code>.
        Prozentwerte sind immer relativ zu einer anderen Größe.
        Zum Beispiel ist die Länge eines Elements relativ zur Länge seines
        Eltern-Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, auf den Sie am häufigsten stoßen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relativ und absolut. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden Längeneinheiten sind **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und werden allgemein als immer gleich groß angesehen.

| Einheit | Name              | Entspricht                |
| ------- | ----------------- | ------------------------- |
| `cm`    | Zentimeter        | 1 cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter        | 1mm = 1/10 von 1cm        |
| `Q`     | Viertelmillimeter | 1Q = 1/40 von 1cm         |
| `in`    | Zoll              | 1in = 2.54cm = 96px       |
| `pc`    | Picas             | 1pc = 1/6 von 1in         |
| `pt`    | Punkte            | 1pt = 1/72 von 1in        |
| `px`    | Pixel             | 1px = 1/96 von 1in        |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck verwendet werden, anstatt für die Bildschirmausgabe. Zum Beispiel verwenden wir typischerweise keine `cm` (Zentimeter) auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des Elternelements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Root-Elements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Ansichtsfensters, entsprechend.

Der Vorteil der Verwendung von relativen Einheiten ist, dass Sie mit sorgfältiger Planung erreichen können, dass die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skaliert wird. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den {{cssxref("length")}} Typ.

In diesem Abschnitt werden wir einige der gängigsten relativen Einheiten erkunden.

#### Ein Beispiel erkunden

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Die erste Box hat eine {{cssxref("width")}} in Pixeln festgelegt. Als eine absolute Einheit bleibt diese Breite unverändert, egal was sich sonst ändert.

Die zweite Box hat eine Breite in `vw` (Ansichtsbreite) Einheiten festgelegt. Dieser Wert ist relativ zur Breite des Ansichtsfensters, daher sind 10vw 10 Prozent der Breite des Ansichtsfensters. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe der Box ändern. Da dieses Beispiel jedoch in die Seite eingebettet ist, wird es nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie das [Beispiel öffnen, nachdem Sie es in einem eigenen Browser-Tab geöffnet haben](https://mdn.github.io/css-examples/learn/values-units/length.html).

Die dritte Box verwendet `em` Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umgebenden {{htmlelement("div")}} festgelegt, der eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert in `1.5em` und Sie werden sehen, dass sich die Schriftgröße aller Elemente vergrößert, aber nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie die obigen Anweisungen befolgt haben, versuchen Sie, mit den Werten auf andere Weise zu spielen, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die beiden relativen Längen, auf die Sie wahrscheinlich am häufigsten stoßen werden, wenn Sie alles von Boxen bis hin zu Textgrößen gestalten möchten. Es ist es wert, zu verstehen, wie diese funktionieren und die Unterschiede zwischen ihnen, besonders wenn Sie zu komplexeren Themen wie [Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) kommen. Das untenstehende Beispiel liefert eine Demonstration.

Der unten illustrierte HTML-Code ist eine Anordnung von verschachtelten Listen — wir haben insgesamt zwei Listen und beide Beispiele haben denselben HTML-Code. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Anfangs setzen wir 16px als Schriftgröße auf dem `<html>`-Element.

**Zur Erinnerung: Die `em` Einheit bedeutet "mein Eltern-Element's Schriftgröße"** wenn es für `font-size` verwendet wird (und "meine eigene Schriftgröße" wenn es für etwas anderes verwendet wird). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` nehmen ihre Größenordnung von ihrem Elternteil an. Also wird jede tiefere Nestung progressiv größer, da jede ihre Schriftgröße auf `1.3em` setzt — 1.3 mal die Schriftgröße ihres Eltern-Elements.

**Zur Erinnerung: Die `rem` Einheit bedeutet "die Schriftgröße des Stamm-Elements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größenordnung von dem Wurzelelement (`<html>`) an. Das bedeutet, dass jede tiefere Nestung nicht fortlaufend größer wird.

Wenn Sie jedoch die `font-size` des `<html>`-Elements im CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu ändert — sowohl `rem`- als auch `em`-großer Text.

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

`lh` und `rlh` sind relative Längeneinheiten, die `em` und `rem` ähneln. Der Unterschied zwischen `lh` und `rlh` ist, dass die erste relativ zur Zeilenhöhe des Elements selbst ist, während die zweite relativ zur Zeilenhöhe des Wurzelelements, üblicherweise `<html>`, ist.

Mit diesen Einheiten können wir Textdekorationsboxen präzise an den Text anpassen. In diesem Beispiel verwenden wir die `lh` Einheit, um Notizblock-ähnliche Linien mit [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) zu erstellen. Es spielt keine Rolle, was die Zeilenhöhe des Textes ist, die Linien beginnen immer an der richtigen Stelle.

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

In vielen Fällen wird ein Prozentsatz wie eine Länge behandelt. Das Problem mit Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert gesetzt werden. Zum Beispiel, wenn Sie die `font-size` eines Elements als Prozentsatz festlegen, wird es ein Prozentsatz der `font-size` des Elternelements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, wird es ein Prozentsatz der `width` des Elternteils sein.

Im folgenden Beispiel haben die beiden prozentual großen Boxen und die beiden pixelgroßen Boxen dieselben Klassennamen. Die Sets sind jeweils 40% und 200px breit.

Der Unterschied besteht darin, dass das zweite Set aus zwei Boxen in einem Wrapper liegt, der 400 Pixel breit ist. Die zweite 200px breite Box hat dieselbe Breite wie die erste, aber die zweite 40% Box ist jetzt 40% von 400px — viel schmaler als die erste!

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

Das nächste Beispiel hat Schriftgrößen, die in Prozentangaben festgelegt sind. Jedes `<li>` hat eine `font-size` von 80%; daher werden die geschachtelten Listenelemente progressiv kleiner, da sie ihre Größenordnung von ihrem Elternteil erben.

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

Beachten Sie, dass, obwohl viele Wertetypen sowohl eine Länge als auch einen Prozentsatz akzeptieren, es einige gibt, die nur Länge akzeptieren. Sie können auf den MDN-Eigenschaftsreferenzseiten sehen, welche Werte akzeptiert werden. Wenn der zulässige Wert {{cssxref("length-percentage")}} enthält, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der zulässige Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen, ohne dass eine Einheit hinzugefügt wird. Ein Beispiel für eine Eigenschaft, die eine einheitslose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Opazität eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im folgenden Beispiel versuchen Sie, den Wert der `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und sehen, wie die Box und ihr Inhalt mehr oder weniger transparent werden:

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

Farbwerte können in vielen Bereichen von CSS verwendet werden, sei es bei der Angabe der Farbe von Texten, Hintergründen, Rahmen und vielem mehr. Es gibt viele Möglichkeiten, in CSS Farbe festzulegen, die Ihnen die Kontrolle über viele aufregende Eigenschaften ermöglichen.

Das Standard-Farbsystem, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, die es ermöglichen, etwa 16,7 Millionen unterschiedliche Farben über eine Kombination von unterschiedlichen Rot-, Grün- und Blaukanälen mit jeweils 256 verschiedenen Werten anzuzeigen (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir uns die am häufigsten gesehenen Methoden zur Spezifizierung von Farben ansehen: die Verwendung von Schlüsselwörtern, Hexadezimal- und `rgb()`-Werten. Wir werden auch einen kurzen Blick auf zusätzliche Farb-Funktionen werfen, um sie bei Bedarf zu erkennen oder um mit verschiedenen Methoden zur Farbgebung zu experimentieren.

Wahrscheinlich werden Sie sich für eine Farbpalette entscheiden und dann diese Farben - und Ihre bevorzugte Methode zur Farbgebung - in Ihrem gesamten Projekt verwenden. Sie können Farbmodelle mischen und anpassen, aber es ist in der Regel am besten, wenn Ihr gesamtes Projekt die gleiche Methode zur Farberklärung verwendet, um Konsistenz zu gewährleisten!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder "benannte Farben") in vielen MDN-Beispielcodes sehen. Da der [`<named-color>`](/de/docs/Web/CSS/named-color) Datentyp nur eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie nicht häufig auf Produktionswebsites mit einer ausgeklügelten Designsprache verwendet. Auf der anderen Seite werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu sagen, welche Farbe erwartet wird, damit der Lernende sich auf den vermittelten Inhalt konzentrieren kann.

Versuchen Sie, mit verschiedenen Farbwerten in den Live-Beispielen unten zu spielen, um mehr zu erfahren, wie sie funktionieren:

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

Der nächste Typ von Farbwert, auf den Sie wahrscheinlich stoßen werden, sind hexadezimale Codes. Hexadezimal verwendet 16 Zeichen von `0-9` und `a-f`, sodass die gesamte Bandbreite `0123456789abcdef` ist. Jeder hexadezimale Farbwert besteht aus einem Raute-/Pfund-Symbol (`#`) gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb`, zum Beispiel), mit einem optionalen ein oder zwei hexadezimalen Zeichen, die die Alpha-Transparenz der vorherigen drei oder sechs Zeichen Farbe darstellen.

Wenn hexadezimal zur Beschreibung von RGB-Werten verwendet wird, ist jedes **Paar** von hexadezimalen Zeichen eine Dezimalzahl, die einen der Kanäle — rot, grün und blau — darstellt und uns ermöglicht, einen der 256 verfügbaren Werte für jeden zu spezifizieren (16 x 16 = 256). Diese Werte sind weniger intuitiv als Schlüsselwörter für die Definition von Farben, aber sie sind weitaus vielseitiger, weil sie jede RGB-Farbe damit darstellen können.

Versuchen Sie, die Werte zu ändern, um zu sehen, wie sich die Farben ändern:

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

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion drei Parameter entgegen, die die **rot**, **grün** und **blau** Kanalwerte der Farbe repräsentieren, mit einem optionalen vierten Wert, der durch einen Schrägstrich ('/') getrennt ist und die Opazität in ähnlicher Weise wie hexadezimale Werte darstellt. Der Unterschied zu RGB besteht darin, dass jeder Kanal nicht durch zwei hexadezimale Ziffern, sondern durch eine Dezimalzahl zwischen 0 und 255 oder einen Prozentsatz zwischen 0% und 100% inklusive (aber keine Mischung aus beiden) dargestellt wird.

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

Sie können einen vierten Parameter zu `rgb()` hinzufügen, der den Alphakanal der Farbe repräsentiert, der die Opazität steuert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen geben Ihnen unterschiedliche Transparenzstufen.

> [!NOTE]
> Das Setzen eines Alphakanals auf eine Farbe hat einen entscheidenden Unterschied zur Verwendung der {{cssxref("opacity")}} Eigenschaft, die wir zuvor betrachtet haben. Wenn Sie die Deckkraft verwenden, machen Sie das Element und alles in ihm undurchsichtig, während die Verwendung von RGB mit einem Alpha-Parameter nur die Farbe undurchsichtig macht, die Sie angeben.

Im Beispiel unten haben wir ein Hintergrundbild zum umgebenden Block unserer farbigen Boxen hinzugefügt. Wir haben dann die Boxen mit unterschiedlichen Opazitätswerten versehen - beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanalwert kleiner ist. In diesem Beispiel versuchen Sie, die Werte des Alpha-Kanals zu ändern, um zu sehen, wie sich die Farbausgabe verändert.

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

Der `sRGB` Farbraum definiert Farben im **rot** (r), **grün** (g), und **blau** (b) Farbraum.

### Verwendung von Hues zur Bestimmung einer Farbe

Wenn Sie über Schlüsselwörter, Hexadecimal and `rgb()` für Farben hinausgehen möchten, könnten Sie versuchen [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Hue ist die Eigenschaft, die es uns erlaubt, den Unterschied oder die Ähnlichkeit zwischen Farben wie rot, orange, gelb, grün, blau usw. zu erkennen. Das Schlüsselkonzept ist, dass ein Hue-Wert in einem [`<angle>`](/de/docs/Web/CSS/angle) angegeben werden kann, weil die meisten Farbsysteme Hues mit einem {{Glossary("color_wheel", "Farbrad")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten, darunter `hsl()`, `hwb()`, und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farbfunktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich den [Applying color to HTML elements using CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) Leitfaden an, die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie man Farben in CSS verwenden kann, und das [CSS color module](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtpyen in CSS bietet und die Eigenschaften, die Farbwerte verwenden.

### HWB

Ein großartiger Ausgangspunkt für die Verwendung von Hues in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion, die eine `srgb()` Farbe spezifiziert. Die drei Teile sind:

- **Hue**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen 0 und 360, der die Winkel um ein Farbrad repräsentiert.
- **Weißgehalt**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weißgehalt) bis `100%` (voller Weißgehalt).
- **Schwarzgehalt**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von 0% (kein Schwarzgehalt) bis 100% (voller Schwarzgehalt).

### HSL

Ähnlich wie die `hwb()` Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die auch eine `srgb()` Farbe spezifiziert. HSL verwendet `Hue`, zusätzlich zu `Saturation` und `Lightness`:

- **Hue**
- **Saturation**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 keine Farbe ist (es wird als Grauton erscheinen), und 100% ist volle Farbsättigung.
- **Lightness**: Wie hell oder grell ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 kein Licht ist (es wird komplett schwarz erscheinen) und 100% ist voll Licht (es wird komplett weiß erscheinen).

Der `hsl()` Farbwert hat auch einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) von der Farbe getrennt, die die Alpha-Transparenz darstellt.

Lassen Sie uns das RGB-Beispiel aktualisieren, um HSL-Farben anstelle zu verwenden:

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

Genau wie bei `rgb()` können Sie einen Alpha-Parameter zu `hsl()` hinzufügen, um die Opazität zu spezifizieren:

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

Der [`<image>`](/de/docs/Web/CSS/image) Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()` Funktion angezeigt wird, oder ein Verlauf.

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
> Es gibt einige andere mögliche Werte für `<image>`, aber diese sind neuer und haben derzeit eine schlechte Browserunterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie darüber lesen möchten.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp repräsentiert eine Menge von 2D-Koordinaten, die dazu verwendet werden, ein Element wie ein Hintergrundbild zu positionieren (über [`background-position`](/de/docs/Web/CSS/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right`, und `center` annehmen, um Elemente mit bestimmten Begrenzungen eines 2D-Felds auszurichten, zusammen mit Längen, die Offsets von den oberen und linken Kanten des Felds darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste setzt die Position horizontal, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` standardisiert.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px von der oberen und rechten Seite des Containers positioniert, indem wir ein Schlüsselwort verwenden. Experimentieren Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.

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

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (z.B. `<color>` Schlüsselwörter wie `red`, `black`, `rebeccapurple`, und `goldenrod`). Diese Schlüsselwörter werden korrekterweise als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Daher sind sie nicht in Anführungszeichen gesetzt — sie werden nicht als Zeichenfolgen behandelt.

Es gibt Stellen, an denen Sie Zeichenfolgen in CSS verwenden. Zum Beispiel, [wenn spezifizierter erzeugter Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu demonstrieren, dass es sich um eine Zeichenfolge handelt. Im Beispiel unten verwenden wir nicht zitiert Farb-Schlüsselwörter zusammen mit einer zitierten erzeugten Inhaltszeichenfolge.

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

In der Programmierung ist eine Funktion ein Codeschnipsel, der eine bestimmte Aufgabe ausführt. Funktionen sind nützlich, weil Sie Code einmal schreiben und dann viele Male wiederverwenden können, anstatt die gleiche Logik immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern besitzen auch praktische eingebaute Funktionen für häufige Aufgaben, damit Sie sie nicht von Grund auf selbst schreiben müssen.

CSS hat auch [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die auf ähnliche Weise wie Funktionen in anderen Sprachen arbeiten. Tatsächlich haben wir bereits CSS-Funktionen im [Farbe](#farbe) Abschnitt oben mit den Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) gesehen.

Neben der Farbgebung können Sie Funktionen in CSS verwenden, um eine Menge anderer Dinge zu tun. Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#transform_functions) eine verbreitete Methode, um Elemente auf einer Seite zu verschieben, drehen und skalieren. Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu verschieben, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale), um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, werden Sie wahrscheinlich mit Werten wie `300px` für Längen oder `200ms` für Dauer beginnen. Wenn Sie diese Werte basierend auf anderen Werten ändern möchten, müssen Sie etwas Mathematik betreiben. Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen Nummer hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS hat Unterstützung für [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions), die es uns ermöglichen, Berechnungen durchzuführen, anstatt auf statische Werte angewiesen zu sein oder die Mathematik in JavaScript auszuführen. Eine der häufigsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die es Ihnen ermöglicht, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Zum Beispiel, wenn wir die Breite eines Elements auf 20% seines übergeordneten Containers plus 100px setzen möchten. Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn der Elternteil eine prozentuale Breite verwendet (oder eine relative Einheit wie `em` oder `rem`), dann variiert er je nach Kontext, in dem er verwendet wird, sowie anderen Faktoren wie das Gerät des Benutzers oder die Breite des Browserfensters. Wir können jedoch `calc()` verwenden, um die Breite des Elements auf 20% seines übergeordneten Containers plus 100px zu setzen. Die 20% basieren auf der Breite des übergeordneten Containers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max), und [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie respektive den kleinsten, größten oder mittleren Wert aus einer Menge von Werten wählen. Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos), und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel für das Drehen von Elementen um einen Punkt zu berechnen, oder Farben auszuwählen, die einen [Farbwinkel](/de/docs/Web/CSS/hue) als Parameter haben. [Exponentialfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#exponential_functions) könnten auch für Animationen und Übergänge verwendet werden, wenn Sie sehr spezifische Kontrolle darüber benötigen, wie sich etwas bewegt und aussieht.

Das Wissen über CSS-Funktionen ist nützlich, damit Sie sie erkennen, wenn Sie ihnen begegnen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen dabei, das Schreiben von maßgeschneidertem oder wiederholendem Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit üblichen CSS erreichen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können ein paar weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_tasks).

## Zusammenfassung

Dies war ein kurzer Durchlauf der häufigsten Typen von Werten und Einheiten, die Sie antreffen könnten. Sie können sich alle verschiedenen Typen auf der [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modulseite ansehen — Sie werden viele davon in der Anwendung sehen, während Sie diese Lektionen durcharbeiten.

Das Wichtigste, was Sie sich merken sollten, ist, dass jede Eigenschaft eine definierte Liste erlaubter Wertetypen hat, und jeder Wertetyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die spezifischen Details dazu hier auf MDN nachlesen. Zum Beispiel zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) auch erlaubt, einen Farbverlauf zu erstellen, ist nützlich, aber vielleicht nicht sofort offensichtlich!

Im nächsten Artikel werfen wir einen Blick darauf, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
