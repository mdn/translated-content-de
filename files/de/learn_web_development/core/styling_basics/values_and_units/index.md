---
title: CSS-Werte und -Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir einige der am häufigsten verwendeten Wertetypen betrachten, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) enthält einen Syntax-Abschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (siehe
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
          <li>Vertrautheit mit den grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenketten und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und den Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

CSS-Werte definieren, welche Werttypen für jede CSS-Eigenschaft gültig sind. Zum Beispiel können Sie Farben für die Werte von {{cssxref("color")}} oder {{cssxref("border-color")}} angeben, aber nicht Längen oder Prozentsätze.

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie von spitzen Klammern (`<`, `>`) umgeben sind — wie [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jeden gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie auf der [`<color>`](/de/docs/Web/CSS/color_value) Referenzseite aufgelistet.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}} Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value) Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welchen Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber es sollte aus dem Kontext klar sein, welche Sie betrachten. Wenn Sie sich nicht sicher sind, versuchen Sie, danach auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie etwas in CSS als Datentyp bezeichnet sehen, ist es eigentlich nur eine elegante Art zu sagen, Wertetyp. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Textfarbe unserer Überschrift mit einem Farbschlüsselwort festgelegt und den Hintergrund mit einem anderen Farbwerttyp — der `rgb()`-Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Werttyp in CSS definiert eine Sammlung von zulässigen Werten. Das bedeutet, dass Sie, wenn Sie `<color>` als gültig sehen, sich nicht fragen müssen, welche der verschiedenen Farbwerttypen verwendet werden können — Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _jedes_ verfügbare `<color>`-Wert, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert bietet Ihnen Informationen über die Browser-Unterstützung. Wenn Sie beispielsweise die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, werden Sie sehen, dass der Abschnitt zur Browser-Kompatibilität verschiedene Typen von Farbwerten und deren Unterstützung auflistet.

Sehen wir uns einige der Typen von Werten und Einheiten an, denen Sie häufig begegnen können, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentsätze

Es gibt verschiedene numerische Wertetypen, die Sie möglicherweise in CSS verwenden. Die folgenden sind alle als numerisch klassifiziert:

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
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar — sie kann mit oder ohne Dezimalpunkt sein. Zum Beispiel, <code>0.255</code>, <code>128</code>, oder <code>-1.2</code>.
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
        <code>&#x3C;number></code>-Wert mit einer Einheit. Zum Beispiel, <code>45deg</code>, <code>5s</code> oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine Oberkategorie, die {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
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
        Wertes dar. Zum Beispiel, <code>50%</code>. Prozentwerte sind immer
        relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines
        Elements relativ zur Länge seines übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relativ und absolut. Es ist wichtig zu wissen, was der Unterschied ist, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und werden allgemein als immer gleich groß betrachtet.

| Einheit | Name              | Entspricht               |
| ------- | ----------------- | ------------------------ |
| `cm`    | Zentimeter        | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter        | 1mm = 1/10 von 1cm       |
| `Q`     | Viertelmillimeter | 1Q = 1/40 von 1cm        |
| `in`    | Zoll              | 1in = 2.54cm = 96px      |
| `pc`    | Picas             | 1pc = 1/6 von 1in        |
| `pt`    | Punkte            | 1pt = 1/72 von 1in       |
| `px`    | Pixel             | 1px = 1/96 von 1in       |

Die meisten dieser Einheiten sind nützlicher im Druck, anstatt auf dem Bildschirm. Beispielsweise verwenden wir normalerweise keine `cm` (Zentimeter) auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

Beachten Sie, dass `1px` nicht unbedingt einem physischen Gerät-Pixel entspricht. Auf HD-Displays kann es sich über mehrere physische Pixel erstrecken.
Ebenso entspricht `1cm` in CSS häufig nicht einem hundertstel [SI](https://en.wikipedia.org/wiki/International_System_of_Units)-Meter. Auf einem großen Fernsehbildschirm ist es typischerweise länger als das.
Die Längen sind wahrnehmungsbasiert: `16px` sieht ungefähr gleich aus auf einem Telefon-, Laptop- oder Fernsehbildschirm bei typischen Betrachtungsabständen.

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn für {{cssxref("font-size")}} verwendet. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten ist, dass Sie mit ein wenig sorgfältiger Planung erreichen können, dass die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skaliert. Für eine vollständige Liste der verfügbaren relativen Einheiten sehen Sie sich die Referenzseite für den {{cssxref("length")}}-Typ an.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erkunden.

#### Untersuchung eines Beispiels

Im untenstehenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Die erste Box hat eine {{cssxref("width")}}, die in Pixeln festgelegt ist. Als absolute Einheit bleibt diese Breite gleich, egal was sich sonst ändert.

Die zweite Box hat eine Breite, die in `vw` (Ansichtsbreite) Einheiten festgelegt ist. Dieser Wert ist relativ zur Ansichtsbreite, und daher sind `10vw` 10 Prozent der Breite des Ansichtsfensters. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe der Box verändern. Da dieses Beispiel jedoch mithilfe eines [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) in die Seite eingebettet ist, wird dies nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie [das Beispiel öffnen, nachdem Sie es in einem eigenen Browsertab geöffnet haben](https://mdn.github.io/css-examples/learn/values-units/length.html).

Die dritte Box verwendet `em` Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem enthaltenen {{htmlelement("div")}} festgelegt, das eine Klasse `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em` und Sie werden sehen, dass alle Elemente größer werden, aber nur das letzte Element wird breiter, da seine Breite relativ zur Schriftgröße ist.

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

`em` und `rem` sind die beiden relativen Längen, denen Sie am häufigsten begegnen werden, wenn Sie alles von Boxen bis Text dimensionieren. Es lohnt sich zu verstehen, wie diese funktionieren und die Unterschiede zwischen ihnen, insbesondere wenn Sie anfangen, sich mit komplexeren Themen wie [Text-Styling](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) zu beschäftigen. Das folgende Beispiel bietet eine Demonstration.

Das nächste Beispiel ist ein Satz verschachtelter Listen — wir haben insgesamt zwei Listen und beide Beispiele haben den gleichen HTML-Code. Der einzige Unterschied besteht darin, dass die erste eine Klasse _ems_ hat und die zweite eine Klasse _rems_.

Zunächst setzen wir `16px` als Schriftgröße auf das `<html>`-Element.

Zur Wiederholung, die `em` Einheit bedeutet **"die Schriftgröße meines Elternelements"**, wenn für `font-size` verwendet, und **"meine eigene Schriftgröße"**, wenn für etwas anderes verwendet. Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` nehmen ihre Größe von ihrem Elternteil. Also wird jede aufeinanderfolgende Verschachtelungsebene schrittweise größer, da jede ihre Schriftgröße auf `1.3em` festgelegt hat — das 1,3-fache der Schriftgröße ihres Elternteils.

Zur Wiederholung, die `rem` Einheit bedeutet **"Die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größe vom Wurzelelement (`<html>`). Das bedeutet, dass jede aufeinanderfolgende Verschachtelungsebene nicht immer größer wird.

Wenn Sie jedoch die `font-size` im CSS des `<html>`-Elements ändern, werden alle anderen relativ dazu geändert — sowohl `rem`- als auch `em`-großer Text. Versuchen Sie dies jetzt im MDN Playground.

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

### Prozentsätze

In vielen Fällen wird ein Prozentsatz auf die gleiche Weise wie eine Länge behandelt. Der Unterschied bei Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert festgelegt werden. Wenn Sie beispielsweise die `font-size` eines Elements als Prozentsatz festlegen, wird es ein Prozentsatz der `font-size` des übergeordneten Elements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, wird er ein Prozentsatz der `width` des Elternteils sein.

Im nächsten Beispiel haben die beiden Paare von prozentual und pixelgroßen Boxen die gleichen Klassennamen. Die Boxen in jedem Paar sind `40%` bzw. `200px` breit.

Der Unterschied besteht darin, dass das zweite Paar der beiden Boxen in einem Wrapper ist, der `400px` breit ist. Die zweite `200px` breite Box hat die gleiche Breite wie die erste, aber die zweite `40%` Box ist jetzt `40%` von `400px` — viel schmaler als die erste!

Versuchen Sie, die Breite des Wrappers oder den Prozentwert zu ändern, um zu sehen, wie das funktioniert:

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

Das nächste Beispiel hat Schriftgrößen, die in Prozentsätzen festgelegt sind. Jedes `<li>` hat eine `font-size` von `80%`, sodass die verschachtelten Listenelemente allmählich kleiner werden, da sie ihre Größe von ihrem Elternteil erben.

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

Beachten Sie, dass, obwohl viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur Längen akzeptieren. Sie können sehen, welche Werte auf den MDN-Eigenschaftsreferenzseiten akzeptiert werden. Wenn der erlaubte Wert {{cssxref("length-percentage")}} beinhaltet, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` beinhaltet, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren berechnungslos Zahlen; ein Beispiel ist die `opacity`-Eigenschaft, die die Deckkraft eines Elements (wie transparent es ist) steuert. Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im untenstehenden Beispiel versuchen Sie, den Wert der `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern, um zu sehen, wie die Box und ihre Inhalte mehr oder weniger undurchsichtig werden:

```html live-sample___opacity
<div class="wrapper">
  <div class="box">I am a box with opacity</div>
</div>
```

```css live-sample___opacity
.wrapper {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  background-repeat: no-repeat;
  background-position: bottom left;
  padding: 20px;
}

.box {
  margin: 40px auto;
  width: 200px;
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 30px;
  opacity: 0.6;
}
```

{{EmbedLiveSample("opacity", "", "210px")}}

> [!NOTE]
> Wenn Sie eine Zahl in CSS als Wert verwenden, sollte sie nicht in Anführungszeichen gesetzt werden.

## Farbe

Farbwerte können an vielen Orten in CSS verwendet werden, sei es, um die Farbe von Text, Hintergründen, Rahmen und vielem mehr zu spezifizieren.
Es gibt viele Möglichkeiten, in CSS Farben festzulegen, mit denen Sie viele aufregende Eigenschaften steuern können.

Das standardisierte Farbformat moderner Computer unterstützt 24-Bit-Farben, was es ermöglicht, etwa 16,7 Millionen unterschiedliche Farben darzustellen, indem verschiedene Kombinationen von Rot-, Grün- und Blaukanälen mit jeweils 256 unterschiedlichen Werten verwendet werden (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt schauen wir uns zunächst die am häufigsten gesehenen Arten an, Farben zu spezifizieren: mit Schlüsselwörtern, hexadezimalen und `rgb()`-Werten.
Wir werfen auch einen kurzen Blick auf zusätzliche Farb-Funktionen, damit Sie diese erkennen können, wenn Sie ihnen begegnen, oder mit verschiedenen Methoden zur Farbgebung experimentieren können.

Sie werden wahrscheinlich eine Farbpalette festlegen und diese Farben — und Ihre bevorzugte Methode zur Spezifizierung von Farbe — über Ihr gesamtes Projekt hinweg verwenden.
Sie können Farbmodelle mischen und anpassen, aber es ist in der Regel am besten, wenn Ihr gesamtes Projekt die gleiche Methode zur Deklaration von Farben für Konsistenz verwendet!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder "benannte Farben") in vielen MDN-Codebeispielen verwenden sehen. Da der [`<named-color>`](/de/docs/Web/CSS/named-color) Datentyp nur eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie nicht häufig auf Produktionswebsites mit einem anspruchsvollen Gestaltungsraster verwendet. Auf der anderen Seite werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu machen, welche Farbe erwartet wird, damit der Lernende sich auf den gelehrten Inhalt konzentrieren kann.

Im nächsten Beispiel versuchen Sie, mit verschiedenen Farb-Schlüsselwörtern zu spielen, um besser zu verstehen, wie sie funktionieren. Sie können sie mit dem [`<named-color>`](/de/docs/Web/CSS/named-color) Referenzseite suchen.

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

Der nächste Farbwerttyp, auf den Sie stoßen werden, sind hexadezimale (hex) Codes.

Hexadezimale Zahlen verwenden 16 Zeichen von `0-9` und `a-f`, sodass die gesamte Reichweite `0123456789abcdef` ist. Jeder hexadezimale Farbwert besteht aus einem Rautezeichen (`#`) gefolgt von sechs hexadezimalen Zeichen (`#ffc0cb`, zum Beispiel). Jedes **Paar** von hexadezimalen Zeichen repräsentiert einen der Kanäle eines RGB-Farbtons — rot, grün und blau — und ermöglicht es uns, einen der 256 verfügbaren Werte für jeden Kanal festzulegen (16 x 16 = 256).

Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, da Sie damit _jeden_ RGB-Farbton darstellen können.

Im nächsten Beispiel versuchen Sie, die Werte zu ändern, um zu sehen, wie sich die Farben variieren:

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

> [!NOTE]
> Sie könnten hexadezimale Farbcodes mit drei Zeichen anstelle von sechs geschrieben sehen. Dies ist eine Abkürzung, die verwendet werden kann, wenn die Zeichen in jedem Paar gleich sind. Zum Beispiel sind `#ff00ff` und `#f0f` gleichwertig. Sie könnten auch hexadezimale Farbcodes mit acht (oder vier) Zeichen geschrieben sehen, wobei der vierte Wert die Alpha-Transparenz der vorhergehenden drei Werte darstellt — zum Beispiel `#ff00ff66`.

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter dar, die die **rot**, **grün**, und **blau** Kanäle der Farben darstellen, mit einem optionalen vierten Wert, durch einen Schrägstrich (`/`) getrennt, der die Transparenz darstellt, ähnlich wie bei hexadezimalen Werten. Der Unterschied bei RGB ist, dass jeder Kanal nicht durch zwei hexadezimale Ziffern, sondern durch eine Dezimalzahl von `0` bis `255` oder einen Prozentsatz von `0%` bis `100%` (aber kein Mischwert von beiden) repräsentiert wird.

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

#### Ein RGB-Beispiel mit Transparenz

Im nächsten Beispiel haben wir ein Hintergrundbild zum umschließenden Block unserer farbigen Boxen hinzugefügt. Wir haben dann die Boxen mit unterschiedlichen Transparenzwerten eingestellt — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alphakanalwert kleiner ist. Wenn Sie diesen Wert auf `0` setzen, macht es die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig machen wird. Werte dazwischen geben Ihnen verschiedene Stufen der Transparenz.

Versuchen Sie die Werte des Alphakanals zu ändern, um zu sehen, wie er die Farbausgabe beeinflusst.

```html live-sample___color-rgba
<div class="wrapper">
  <div class="box one">rgb(2 121 139 / .3)</div>
  <div class="box two">rgb(197 93 161 / .7)</div>
  <div class="box three">rgb(18 138 125 / .9)</div>
</div>
```

```css live-sample___color-rgba
.wrapper {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
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

> [!NOTE]
> Einen Alphakanal bei einer Farbe einzustellen hat einen Hauptunterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir vorher erwähnt haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin transparent, während die Verwendung von RGB mit einem Alpha-Parameter nur die Farbe, die Sie spezifizieren, transparent macht.

### Verwendung von Farbtönen zur Farbspezifizierung

Wenn Sie über Schlüsselwörter, Hexadezimal- und `rgb()`-Farben hinausgehen wollen, könnten Sie die Verwendung von [`<hue>`](/de/docs/Web/CSS/hue) ausprobieren.
Hue ist der Wertetyp, der es uns erlaubt, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.
Das Schlüsselkonzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) spezifizieren können, da die meisten Farbmodelle Farbtöne mit einem {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt mehrere Farbfunktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue)-Komponente enthalten, einschließlich `hsl()`, `hwb()`, und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farbfunktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend darauf, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, lesen Sie den [Leitfaden zur Anwendung von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), die [`<color>`](/de/docs/Web/CSS/color_value)-Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften bietet, die Farbwerte verwenden.

### HWB

Ein guter Ausgangspunkt, um Farbtöne in CSS zu verwenden, ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion, die eine `srgb()` Farbe spezifiziert.
Die drei Teile sind:

- **Hue**: Der Basisfarbton der Farbe. Dieser nimmt einen [`<hue>`](/de/docs/Web/CSS/hue)-Wert zwischen `0` und `360` an, der die Winkel um einen Farbkreis darstellt.
- **Whiteness**: Wie weiß ist die Farbe? Dieser nimmt einen Wert von `0%` (keine Weißheit) bis `100%` (volle Weißheit) an.
- **Blackness**: Wie schwarz ist die Farbe? Dieser nimmt einen Wert von `0%` (keine Schwärze) bis `100%` (volle Schwärze) an.

### HSL

Ähnlich wie die `hwb()`-Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die ebenfalls eine `srgb()` Farbe spezifiziert.
HSL verwendet `Hue`, zusätzlich zu `Saturation` und `Lightness`:

- **Hue**: Wiederum repräsentiert dieser den Basisfarbton der Farbe.
- **Saturation**: Wie gesättigt ist die Farbe? Dieser nimmt einen Wert von `0`–`100%` an, wobei `0` keine Farbe ist (es wird als Graustufe erscheinen), und `100%` ist volle Farbsättigung.
- **Lightness**: Wie hell oder leuchtend ist die Farbe? Dieser nimmt einen Wert von `0`–`100%` an, wobei `0` kein Licht ist (es wird vollständig schwarz erscheinen) und `100%` volle Helligkeit (es wird vollständig weiß erscheinen).

Der `hsl()`-Farbwert hat auch einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) getrennt von der Farbe entfernt, die die Alpha-Transparenz darstellt.

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

Genau wie bei `rgb()` können Sie `hsl()` einen Alphaparameter übergeben, um die Opazität anzugeben:

```html live-sample___color-hsla
<div class="wrapper">
  <div class="box one">hsl(188 97% 28% / .3)</div>
  <div class="box two">hsl(321 47% 57% / .7)</div>
  <div class="box three">hsl(174 77% 31% / .9)</div>
</div>
```

```css live-sample___color-hsla
.wrapper {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
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

Bevor Sie weitermachen, versuchen Sie, die vorherigen beiden Beispiele zu ändern, um einige farbtonbasierte Farbwerte zu verwenden. Versuchen Sie, den Farbtonwert in jedem Fall zu variieren, um zu sehen, wie dies den Basisfarbton beeinflusst, und dann versuchen Sie auch die anderen Parameter zu variieren.

## Bilder

Der [`<image>`](/de/docs/Web/CSS/image) Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion angegeben wird, oder ein Verlauf.

Im untenstehenden Beispiel verwenden wir ein Bild und einen Verlauf als Werte für die CSS-`background-image`-Eigenschaft.

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
  background-image: url("https://mdn.github.io/shared-assets/images/examples/big-star.png");
}

.gradient {
  background-image: linear-gradient(
    90deg,
    rgb(119 0 255 / 39%),
    rgb(0 212 255 / 25%)
  );
}
```

{{EmbedLiveSample("image", "", "380px")}}

> [!NOTE]
> Es gibt einige andere mögliche Werte für `<image>`, aber diese sind neuer und haben derzeit eine schlechte Browserunterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie mehr darüber lesen möchten.

Sie werden später in unserem Artikel [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) mehr über Bildwerte lernen.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp repräsentiert eine Menge von 2D-Koordinaten, die verwendet werden, um ein Element wie ein Hintergrundbild zu positionieren (über [`background-position`](/de/docs/Web/CSS/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` akzeptieren, um Elemente mit spezifischen Grenzen eines 2D-Kastens auszurichten, und Längen, die Offsets von der oberen und linken Kante des Kastens darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste setzt die Position horizontal, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild `60px` vom oberen und `right` vom Container aus mit einem Schlüsselwort positioniert.

Versuchen Sie, mit diesen Werten zu experimentieren, um zu sehen, wie Sie das Bild verschieben können.

```html live-sample___position
<div class="box"></div>
```

```css live-sample___position
.box {
  height: 200px;
  width: 400px;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/big-star.png");
  background-repeat: no-repeat;
  background-position: right 60px;
  margin: 20px auto;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("position", "100%", "260px")}}

## Zeichenketten und Bezeichner

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>`-Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Als solche werden sie nicht zitiert — sie werden nicht als Zeichenketten behandelt.

Es gibt Stellen, an denen Sie Zeichenketten in CSS verwenden. Zum Beispiel, [bei der Spezifizierung von generiertem Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu verdeutlichen, dass es sich um eine Zeichenkette handelt. Im untenstehenden Beispiel verwenden wir unzitierte Farb-Schlüsselwörter zusammen mit einer zitierten generierten Inhaltszeichenkette.

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

{{EmbedLiveSample("strings-idents", "100%", "80")}}

## Funktionen

In der Programmierung ist eine Funktion ein Stück Code, das eine bestimmte Aufgabe ausführt. Funktionen sind nützlich, weil Sie Code einmal schreiben und dann mehrmals wiederverwenden können, anstatt die gleiche Logik immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern haben auch praktische eingebaute Funktionen für alltägliche Aufgaben, sodass Sie sie nicht von Grund auf selbst schreiben müssen.

CSS hat auch [Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions), die ähnlich wie Funktionen in anderen Sprachen arbeiten. Tatsächlich haben wir schon CSS-Funktionen im Abschnitt [Farbe](#farbe) oben gesehen, wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl).

Abgesehen von der Anwendung von Farben können Sie mit Funktionen in CSS viele andere Dinge tun. Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#transform_functions) eine häufige Möglichkeit, Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren. Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu bewegen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate), um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale), um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, werden Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Dauern beginnen. Wenn Sie möchten, dass diese Werte basierend auf anderen Werten geändert werden, müssen Sie einige Berechnungen durchführen. Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen Nummer hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematische Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#math_functions), die es uns ermöglichen, Berechnungen in CSS durchzuführen, anstatt sich auf statische Werte zu verlassen oder die Berechnungen in JavaScript durchzuführen. Eine der häufigsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die Ihnen erlaubt, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Zum Beispiel, sagen wir, wir möchten die Breite eines Elements auf `20%` seines übergeordneten Containers plus `100px` festlegen. Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn das Elternteil eine Prozentbreite (oder eine relative Einheit wie `em` oder `rem`) verwendet, wird es je nach Kontext, in dem es verwendet wird, und anderen Faktoren wie dem Gerät des Benutzers oder der Breite des Browserfensters variieren. Jedoch können wir `calc()` verwenden, um die Breite des Elements auf `20%` seines übergeordneten Containers plus `100px` festzulegen. Die `20%` beziehen sich auf die Breite des übergeordneten Containers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max), und [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie jeweils den kleinsten, größten oder mittleren Wert aus einem Satz von Werten wählen. Erkunden Sie unsere [CSS-Wertfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) Referenzseite, um alle verfügbaren CSS-Funktionen zu überprüfen.

Die Kenntnis über CSS-Funktionen ist nützlich, damit Sie sie erkennen, wenn Sie ihnen begegnen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen, benutzerdefinierten oder sich wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erreichen können.

## Zusammenfassung

Dies war ein schneller Überblick über die häufigsten Typen von Werten und Einheiten, denen Sie begegnen könnten. Sie können alle verschiedenen Typen auf der [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul-Seite einsehen — viele davon werden Sie beim Durcharbeiten dieser Lektionen verwenden.

Der entscheidende Punkt, den Sie sich merken sollten, ist, dass jede Eigenschaft eine definierte Liste von erlaubten Wertetypen hat, und jeder Werttyp hat eine Definition, die erklärt, was die Werte sind. Sie können dann die Einzelheiten hier auf MDN nachschlagen. Zum Beispiel ist es nützlich, zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch erlaubt, einen Farbverlauf zu erstellen, aber vielleicht nicht offensichtlich ist, dies zu wissen!

Im nächsten Artikel werden wir einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen, die wir über Werte und Einheiten bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}
