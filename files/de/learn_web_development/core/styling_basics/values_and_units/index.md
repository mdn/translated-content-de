---
title: CSS-Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen.
Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben kann.
In dieser Lektion werden wir uns einige der häufig verwendeten Wertetypen ansehen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) verfügt über einen Syntaxabschnitt, der die Werttypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">Grundlegende CSS-Syntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen haben können und was diese Typen repräsentieren.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenketten und Bezeichner sowie Funktionen.</li>
          <li>Verstehen was absolute und relative Einheiten sind und den Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN werden Sie Wertetypen erkennen, da sie von spitzen Klammern (`<`, `>`) umgeben sind, wie etwa [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jede gültige Farbe als Wert für diese Eigenschaft verwenden können, wie auf der Referenzseite zu [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt.

Manchmal können Wertetypen und Eigenschaften dieselben oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welchen Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber es sollte aus dem Kontext klar sein, welches Sie betrachten. Wenn Sie nicht sicher sind, versuchen Sie, danach auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Wesentlichen austauschbar — wenn Sie etwas in CSS als Datentyp bezeichnet sehen, ist es im Grunde nur eine ausgefallene Art zu sagen, Wertetyp. Der Begriff _Wert_ bezieht sich auf einen bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort und den Hintergrund mit der `rgb()`-Funktion gesetzt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung zulässiger Werte zu definieren. Das bedeutet, wenn Sie `<color>` als gültig sehen, müssen Sie nicht grübeln, welche der verschiedenen Farbwerttypen verwendet werden können — Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Unterstützung durch verschiedene Browser. Wenn Sie sich zum Beispiel die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, finden Sie im Abschnitt zur Browser-Kompatibilität eine Auflistung der verschiedenen Farbwerttypen und deren Unterstützung.

Lassen Sie uns einige der Typen von Werten und Einheiten betrachten, die Sie möglicherweise häufig antreffen, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentsätze

Es gibt verschiedene numerische Wertetypen, die Sie in CSS verwenden könnten. Die folgenden werden alle als numerisch klassifiziert:

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
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar - sie kann
        oder kann keinen Dezimalpunkt mit einer Bruchkomponente haben. Zum
        Beispiel, <code>0.255</code>, <code>128</code>, oder <code>-1.2</code>.
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
        <code>&#x3C;number></code> mit einer Einheit angehängt. Zum Beispiel,
        <code>45deg</code>, <code>5s</code>, oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine Oberkategorie, die die
        {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
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
        Ein <code>&#x3C;percentage></code> repräsentiert einen Bruchteil von
        einem anderen Wert. Zum Beispiel, <code>50%</code>.
        Prozentwerte sind immer relativ zu einer anderen Größe. Zum Beispiel ist
        die Länge eines Elements relativ zur Länge des Elternelements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Zum Beispiel, `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und gelten allgemein als immer gleich groß.

| Einheit | Name               | Entspricht               |
| ------- | ------------------ | ------------------------ |
| `cm`    | Zentimeter         | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter         | 1mm = 1/10 eines 1cm     |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines 1cm      |
| `in`    | Zoll               | 1in = 2.54cm = 96px      |
| `pc`    | Picas              | 1pc = 1/6 eines 1in      |
| `pt`    | Punkte             | 1pt = 1/72 eines 1in     |
| `px`    | Pixel              | 1px = 1/96 eines 1in     |

Die meisten dieser Einheiten sind nützlicher beim Drucken als bei der Bildschirmwiedergabe. Beispielsweise verwenden wir auf dem Bildschirm typischerweise nicht `cm` (Zentimeter). Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des Elternelements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe bzw. Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten ist, dass Sie mit etwas sorgfältiger Planung erreichen können, dass die Größe von Text oder anderen Elementen in Relation zu allem anderen auf der Seite skaliert. Für eine vollständige Liste der verfügbaren relativen Einheiten, sehen Sie sich die Referenzseite für den {{cssxref("length")}} Typ an.

In diesem Abschnitt werden wir einige der gebräuchlichsten relativen Einheiten erkunden.

#### Ein Beispiel erkunden

Im untenstehenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Die erste Box hat eine {{cssxref("width")}} in Pixeln gesetzt. Als absolute Einheit bleibt diese Breite unverändert, egal was sonst noch passiert.

Die zweite Box hat eine Breite in `vw` (Viewport-Breite) Einheiten gesetzt. Dieser Wert ist relativ zur Breite des Ansichtsfensters, und so sind 10vw 10 Prozent der Breite des Ansichtsfensters. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe der Box ändern. Dieses Beispiel ist jedoch in die Seite mit einem [`<iframe>`](/de/docs/Web/HTML/Element/iframe) eingebettet, sodass es nicht funktionieren wird. Um dies in Aktion zu sehen, müssen Sie das [Beispiel in einem eigenen Browsertab öffnen](https://mdn.github.io/css-examples/learn/values-units/length.html).

Die dritte Box verwendet `em` Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` für das umgebende {{htmlelement("div")}} gesetzt, das die Klasse `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em` und Sie werden sehen, dass sich die Schriftgröße aller Elemente vergrößert, aber nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie die obigen Anweisungen befolgt haben, versuchen Sie, auf andere Weise mit den Werten zu experimentieren, um zu sehen, was Sie erhalten.

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

#### Ems und Rems

`em` und `rem` sind die beiden relativen Längen, denen Sie wahrscheinlich am häufigsten begegnen werden, wenn Sie irgendetwas von Boxen bis Text dimensionieren. Es ist wertvoll, zu verstehen, wie diese funktionieren und die Unterschiede zwischen ihnen, besonders wenn Sie anfangen, sich mit komplexeren Themen wie [Textstilierung](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) zu beschäftigen. Das untenstehende Beispiel bietet eine Demonstration.

Das unten dargestellte HTML ist eine Reihe von verschachtelten Listen — wir haben insgesamt zwei Listen und beide Beispiele haben dasselbe HTML. Der einzige Unterschied ist, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Zu Beginn setzen wir 16px als Schriftgröße auf dem `<html>` Element.

**Um zusammenzufassen, bedeutet die `em` Einheit "die Schriftgröße meines übergeordneten Elements"**, wenn sie für `font-size` verwendet wird (und "meine eigene Schriftgröße", wenn sie für etwas anderes verwendet wird). Die {{htmlelement("li")}} Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` übernehmen ihre Größe von ihrem Übergeordneten. So wird jede nachfolgende Verschachtelungsebene zunehmend größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat — 1,3-mal die Schriftgröße ihres übergeordneten Elements.

**Um zusammenzufassen, die `rem` Einheit bedeutet "die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}} Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` beziehen ihre Größe vom Wurzelement (`<html>`). Das bedeutet, dass jede nachfolgende Verschachtelungsebene nicht kontinuierlich größer wird.

Wenn Sie jedoch die `font-size` des `<html>` Elements im CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu ändert — sowohl `rem`- als auch `em`-große Texte.

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

`lh` und `rlh` sind relative Längeneinheiten ähnlich wie `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` besteht darin, dass die erste relativ zur Zeilenhöhe des Elements selbst ist, während die zweite relativ zur Zeilenhöhe des Wurzelelements ist, normalerweise `<html>`.

Mit diesen Einheiten können wir die Boxdekoration präzise am Text ausrichten. In diesem Beispiel verwenden wir die `lh` Einheit, um notizblockartige Linien mithilfe von [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) zu erstellen. Es ist egal, welche Zeilenhöhe der Text hat, die Linien beginnen immer an der richtigen Stelle.

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

In vielen Fällen wird ein Prozentsatz genauso behandelt wie eine Länge. Das Besondere an Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert gesetzt sind. Wenn Sie beispielsweise die `font-size` eines Elements als Prozentsatz festlegen, ist es ein Prozentsatz der `font-size` des Elternelements. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, ist es ein Prozentsatz der `width` des Elternteils.

Im untenstehenden Beispiel haben die beiden prozentualen Boxen und die beiden boxen in Pixeln dieselben Klassennamen. Die Sets sind jeweils 40% und 200px breit.

Der Unterschied besteht darin, dass sich das zweite Set von zwei Boxen in einem Wrapper befindet, der 400 Pixel breit ist. Die zweite Box mit 200px Breite ist genauso breit wie die erste, aber die zweite 40%-Box ist jetzt 40% von 400px — viel schmaler als die erste!

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

Das nächste Beispiel hat Schriftgrößen in Prozentangaben. Jedes `<li>` hat eine `font-size` von 80%; daher werden die verschachtelten Listenelemente zunehmend kleiner, da sie ihre Größe vom übergeordneten Element erben.

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

Beachten Sie, dass, während viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur eine Länge akzeptieren. Auf den MDN-Eigenschafts-Referenzseiten können Sie sehen, welche Werte akzeptiert werden. Wenn der erlaubte Wert {{cssxref("length-percentage")}} beinhaltet, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` beinhaltet, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen, ohne dass eine Einheit hinzugefügt wird. Ein Beispiel für eine Eigenschaft, die eine einheitslose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Opazität eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig opak).

Im folgenden Beispiel, versuchen Sie den Wert der `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu setzen und sehen Sie, wie die Box und ihr Inhalt mehr oder weniger opak werden:

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

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es, um die Farbe von Text, Hintergründen, Rahmen und vieles mehr festzulegen. Es gibt viele Möglichkeiten, Farbe in CSS zu setzen, die es Ihnen ermöglichen, viele spannende Eigenschaften zu steuern.

Das standardmäßige Farbsystem, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, die es ermöglichen, etwa 16,7 Millionen verschiedene Farben durch eine Kombination verschiedener Rot-, Grün- und Blaukanäle mit 256 verschiedenen Werten pro Kanal darzustellen (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir uns zunächst die am häufigsten gesehenen Möglichkeiten zur Angabe von Farben ansehen: Verwendung von Schlüsselwörtern, hexadezimale und `rgb()` Werte. Wir werden auch einen kurzen Blick auf zusätzliche Farb-Funktionen werfen, die es Ihnen ermöglichen, sie zu erkennen, wenn Sie sie sehen, oder mit verschiedenen Möglichkeiten zur Anwendung von Farbe zu experimentieren.

Sie werden wahrscheinlich eine Farbpalette auswählen und dann diese Farben - und Ihre bevorzugte Methode zur Angabe von Farben - in Ihrem gesamten Projekt verwenden. Sie können Farbmodelle mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt die gleiche Methode zur Deklaration von Farben für Konsistenz verwendet!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder 'benannte Farben') in vielen MDN-Codebeispielen sehen. Da der Datentyp [`<named-color>`s](/de/docs/Web/CSS/named-color) eine sehr endliche Anzahl von Farbwerten enthält, werden diese auf Produktionswebsites nicht häufig verwendet. Da das Schlüsselwort die Farbe als menschenlesbaren Textwert repräsentiert, werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu sagen, welche Farbe erwartet wird, damit der Lernende sich auf den gelehrten Inhalt konzentrieren kann.

Versuchen Sie, mit verschiedenen Farbwerten in den Live-Beispielen unten zu spielen, um besser zu verstehen, wie sie funktionieren:

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

Der nächste Farbwerttyp, den Sie wahrscheinlich antreffen werden, sind hexadezimale Codes. Hexadezimal verwendet 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` umfasst. Jedes Hex-Farbwert besteht aus einem Hash/Raute-Symbol (`#`), gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb`, zum Beispiel), mit optionalen ein oder zwei hexadezimalen Zeichen, die die Alpha-Transparenz der vorherigen drei oder sechs Zeichen-Farbwerte darstellen.

Bei der Beschreibung von RGB-Werten mit Hexadezimal beschreibt jedes **Paar** von Hexadezimal-Zeichen eine Dezimalzahl, die einen der Kanäle darstellt — Rot, Grün und Blau — und ermöglicht es uns, jeden der 256 verfügbaren Werte für jeden anzugeben (16 x 16 = 256). Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, weil Sie jede RGB-Farbe mit ihnen darstellen können.

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

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter, die die Werte der **Rot**, **Grün**, und **Blau** Kanäle der Farben repräsentieren, mit einem optionalen vierten Wert, getrennt durch einen Schrägstrich ('/'), der die Opazität darstellt, ähnlich wie bei Hex-Werten. Der Unterschied bei RGB ist, dass jeder Kanal nicht durch zwei Hex-Ziffern, sondern durch eine Dezimalzahl zwischen 0 und 255 oder einen Prozentwert zwischen 0% und 100% inklusive dargestellt wird (aber nicht eine Mischung aus beiden).

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

Sie können der `rgb()`-Funktion einen vierten Parameter hinzufügen, der den Alphakanal der Farbe darstellt, der die Opazität steuert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen ergeben unterschiedliche Transparenzstufen.

> [!NOTE]
> Das Setzen eines Alpha-Kanals auf eine Farbe hat einen wesentlichen Unterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir zuvor betrachtet haben. Wenn Sie opacity verwenden, machen Sie das Element und alles darin undurchsichtig, während Sie mit RGB mit einem Alpha-Parameter nur die Farbe undurchsichtig machen, die Sie angeben.

Im folgenden Beispiel haben wir ein Hintergrundbild zum enthaltenen Block unserer farbigen Boxen hinzugefügt. Wir haben dann die Boxen so eingestellt, dass sie unterschiedliche Opazitätswerte haben — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanal-Wert kleiner ist. In diesem Beispiel versuchen Sie, die Alpha-Kanal-Werte zu ändern, um zu sehen, wie sie die Farbausgabe beeinflussen.

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

Der `sRGB` Farbraum definiert Farben im **Rot** (r), **Grün** (g), und **Blau** (b) Farbraum.

### Verwendung von Farbtönen zur Festlegung einer Farbe

Wenn Sie über Schlüsselwörter, hexadezimale und `rgb()` hinaus für Farben gehen möchten, könnten Sie versuchen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Farbton ist die Eigenschaft, die uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen. Das Schlüsselkonzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) angeben können, da die meisten Farbsysteme Farben mit einem {{Glossary("color_wheel", "Farbrad")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten, einschließlich `hsl()`, `hwb()`, und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farb-Funktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend darauf, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich den [Anleitung: Anwenden von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) Leitfaden, die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors) an, das einen Überblick über alle Farbtypen in CSS und die Eigenschaften, die Farbwerte verwenden, gibt.

### HWB

Ein guter Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion, die eine `srgb()` Farbe angibt. Die drei Teile sind:

- **Farbton**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen 0 und 360 an, der die Winkel um ein Farbkreis darstellt.
- **Weißheit**: Wie hell ist die Farbe? Dies nimmt einen Wert von `0%` (keine Weißheit) bis `100%` (volle Weißheit) an.
- **Schwarzheit**: Wie dunkel ist die Farbe? Dies nimmt einen Wert von 0% (keine Schwarzheit) bis 100% (volle Schwarzheit) an.

### HSL

Ähnlich der `hwb()` Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die ebenfalls eine `srgb()` Farbe angibt. HSL verwendet `Hue`, zusätzlich zu `Saturation` und `Lightness`:

- **Farbton**
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0–100% an, wobei 0 keine Farbe ist (es wird als Grauton erscheinen) und 100% ist volle Farbsättigung.
- **Helligkeit**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von 0–100% an, wobei 0 kein Licht ist (es wird vollständig schwarz erscheinen) und 100% ist volles Licht (es wird vollständig weiß erscheinen).

Der `hsl()`-Farbwert hat ebenfalls einen optionalen vierten Wert, getrennt von der Farbe mit einem Schrägstrich (`/`), die die Alpha-Transparenz darstellt.

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

Genau wie bei `rgb()` können Sie `hsl()` einen Alpha-Parameter hinzufügen, um die Opazität anzugeben:

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

Der [`<image>`](/de/docs/Web/CSS/image) Wertetyp wird verwendet, wo auch immer ein Bild ein gültiger Wert ist. Dies könnte eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion angegeben wird, oder ein Verlauf.

Im folgenden Beispiel haben wir ein Bild und einen Verlauf als Wert für die CSS `background-image` Eigenschaft gezeigt.

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
> Es gibt einige andere mögliche Werte für `<image>`, die jedoch neuer sind und derzeit eine schlechte Browser-Unterstützung haben. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie über sie lesen möchten.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp stellt eine Reihe von 2D-Koordinaten dar, die verwendet werden, um ein Element wie ein Hintergrundbild zu positionieren (via [`background-position`](/de/docs/Web/CSS/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right`, und `center` verwenden, um Elemente an spezifischen Grenzen einer 2D-Box auszurichten, zusammen mit Längen, die Offsets von den oberen und linken Kanten der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten - der erste setzt die Position horizontal, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px vom oberen Rand und rechts vom Container ausgehend positioniert, indem ein Schlüsselwort verwendet wurde. Experimentieren Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.

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

In den obigen Beispielen haben wir Orte gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>` Schlüsselwörter wie `red`, `black`, `rebeccapurple`, und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Sie werden daher nicht zitiert — sie werden nicht als Zeichenketten behandelt.

Es gibt Orte, an denen Sie Zeichenketten in CSS verwenden. Zum Beispiel [wenn Sie generierten Inhalt angeben](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu zeigen, dass es sich um eine Zeichenkette handelt. Im Beispiel unten verwenden wir unzitierte Farb-Schlüsselwörter zusammen mit einer zitierten generierten Inhaltszeichenkette.

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

In der Programmierung ist eine Funktion ein Stück Code, das eine spezifische Aufgabe erledigt. Funktionen sind nützlich, weil Sie einmaligen Code schreiben und dann viele Male wiederverwenden können, anstatt die gleiche Logik immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern bieten auch praktische eingebaute Funktionen für häufige Aufgaben, sodass Sie sie nicht von Grund auf neu schreiben müssen.

CSS hat ebenfalls [Funktionen](/de/docs/Web/CSS/CSS_Functions), die ähnlich wie Funktionen in anderen Sprachen arbeiten. Tatsächlich haben wir bereits CSS-Funktionen im [Farb](#farbe)-Abschnitt oben mit [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktionen gesehen.

Neben der Anwendung von Farben können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun. Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Functions#transform_functions) eine gängige Methode, um Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren. Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu bewegen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate), um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale), um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Zeitdauern. Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie einige Berechnungen durchführen. Sie könnten den Prozentsatz eines Wertes oder eine Zahl zu einer anderen Zahl hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions), die es uns ermöglichen, Berechnungen durchzuführen, anstatt auf statische Werte angewiesen zu sein oder die Mathematik in JavaScript durchzuführen. Eine der häufigsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die es Ihnen ermöglicht, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Zum Beispiel, nehmen wir an, wir möchten die Breite eines Elements auf 20% seines Elternelements plus 100px setzen. Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn das Elternelement eine prozentuale Breite (oder eine relative Einheit wie `em` oder `rem`) verwendet, wird es je nachdem, in welchem Kontext es verwendet wird, und anderen Faktoren wie der Benutzergerät- oder Browserfenstergröße variieren. Wir können jedoch `calc()` verwenden, um die Breite des Elements auf 20% seines Elternelements plus 100px zu setzen. Die 20% basieren auf der Breite des Elternelements (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max), und [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie jeweils den kleinsten, größten oder mittleren Wert aus einem Satz von Werten auswählen. Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos), und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel für die Drehung von Elementen um einen Punkt zu berechnen oder Farben zu wählen, die einen [Farbwinkel](/de/docs/Web/CSS/hue) als Parameter übernehmen. [Exponentielle Funktionen](/de/docs/Web/CSS/CSS_Functions#exponential_functions) könnten auch für Animationen und Übergänge verwendet werden, wenn Sie sehr spezielle Kontrolle über die Bewegung und das Aussehen von etwas benötigen.

Das Wissen über CSS-Funktionen ist nützlich, damit Sie sie erkennen, wenn Sie sie sehen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen, benutzerdefinierten oder sich wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit normalem CSS erreichen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_tasks).

## Zusammenfassung

Dies war ein kurzer Überblick über die häufigsten Typen von Werten und Einheiten, denen Sie begegnen könnten. Sie können sich die verschiedenen Typen auf der [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modulseite ansehen — viele davon werden Ihnen begegnen, während Sie diese Lektionen durcharbeiten.

Der Schlüssel ist, sich daran zu erinnern, dass jede Eigenschaft eine definierte Liste von zulässigen Wertetypen hat und jeder Wertetyp eine Definition enthält, die erklärt, was die Werte sind. Sie können dann die Details hier auf MDN nachsehen. Zum Beispiel ist das Verständnis, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch ermöglicht, einen Farbverlauf zu erstellen, nützlich, aber vielleicht nicht offensichtlich!

Im nächsten Artikel werden wir uns ansehen, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
