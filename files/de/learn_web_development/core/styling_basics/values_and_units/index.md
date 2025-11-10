---
title: CSS Werte und Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Arten von Werten zulässig sind. In dieser Lektion werden wir uns einige der am häufigsten verwendeten Wertetypen ansehen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS Property-Seite](/de/docs/Web/CSS/Reference#index) enthält einen Syntaxabschnitt, in dem die Wertetypen aufgeführt sind, die bei dieser Eigenschaft verwendet werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">Grundlegende CSS-Syntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftenwerte viele verschiedene Typen annehmen können und was diese Typen darstellen.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenketten und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und der Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

CSS-Werte definieren, welche Wertetypen für jede CSS-Eigenschaft gültig sind. Zum Beispiel können Sie Farben für die Werte von {{cssxref("color")}} oder {{cssxref("border-color")}} angeben, aber keine Längen oder Prozentsätze.

In CSS-Spezifikationen und auf den Property-Seiten hier auf MDN können Sie Wertetypen erkennen, da sie von spitzen Klammern (`<`, `>`) umgeben sind — wie zum Beispiel [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jede gültige Farbe als Wert für diese Eigenschaft verwenden können, wie auf der Referenzseite für [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) aufgelistet.

Manchmal können Wertetypen und Eigenschaften identische oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Datentyp. Sie können die spitzen Klammern verwenden, um festzustellen, welches Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber es sollte aus dem Kontext klar sein, welches Sie sich ansehen. Wenn Sie unsicher sind, versuchen Sie, danach auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie in CSS etwas als Datentyp bezeichnet sehen, ist es wirklich nur eine vornehme Art zu sagen, dass es sich um einen Wertetyp handelt. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Textfarbe unserer Überschrift mit einem Farbkeyword festgelegt und den Hintergrund mit einem anderen Farbwerttyp — der `rgb()`-Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS definiert eine Sammlung zulässiger Werte. Das bedeutet, dass Sie, wenn Sie sehen, dass `<color>` gültig ist, nicht überlegen müssen, welcher der verschiedenen Farbwerttypen verwendet werden kann — Keywords, Hex-Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen zur Browser-Unterstützung. Wenn Sie sich beispielsweise die Seite für [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) ansehen, sehen Sie, dass der Abschnitt zur Browser-Kompatibilität verschiedene Farbwerttypen und deren Unterstützung auflistet.

Lassen Sie uns einige der Wertetypen und Einheiten betrachten, denen Sie häufig begegnen könnten, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentsätze

Es gibt verschiedene numerische Wertetypen, die Sie möglicherweise in CSS verwenden. Die folgenden gelten alle als numerisch:

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
        <code><a href="/de/docs/Web/CSS/Reference/Values/integer">&#x3C;integer></a></code>
      </td>
      <td>
        Ein <code>&#x3C;integer></code> ist eine ganze Zahl wie
        <code>1024</code> oder <code>-55</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></code>
      </td>
      <td>
        Ein <code>&#x3C;number></code> repräsentiert eine Dezimalzahl — es kann oder kann auch kein Dezimalpunkt mit einem Bruchteil sein. Zum
        Beispiel, <code>0.255</code>, <code>128</code>, oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/Reference/Values/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Eine <code>&#x3C;dimension></code> ist ein <code>&#x3C;number></code> mit einer
        Einheit angehängt. Zum Beispiel, <code>45deg</code>, <code>5s</code>,
        oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine
        Oberkategorie, die die {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/Reference/Values/angle">&#x3C;angle></a></code
        >, <code><a href="/de/docs/Web/CSS/Reference/Values/time">&#x3C;time></a></code
        >, und
        <code
          ><a href="/de/docs/Web/CSS/Reference/Values/resolution">&#x3C;resolution></a></code
        >
        Typen umfasst.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> repräsentiert einen Bruchteil eines anderen
        Wertes. Zum Beispiel, <code>50%</code>. Prozentwerte sind immer
        relativ zu einer anderen Größe. Beispielsweise ist die Länge eines Elements
        relativ zur Länge seines übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Beispielsweise `10px` (Pixel) oder `30em`. In CSS gibt es zwei Arten von Längen — relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und werden allgemein als immer gleich groß angesehen.

| Einheit | Name               | Entspricht               |
| ------- | ------------------ | ------------------------ |
| `cm`    | Zentimeter         | 1cm = 37,8px = 25,2/64in |
| `mm`    | Millimeter         | 1mm = 1/10 eines 1cm     |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines 1cm      |
| `in`    | Zoll               | 1in = 2,54cm = 96px      |
| `pc`    | Picas              | 1pc = 1/6 eines 1in      |
| `pt`    | Punkte             | 1pt = 1/72 eines 1in     |
| `px`    | Pixel              | 1px = 1/96 eines 1in     |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck und nicht für die Bildschirmausgabe verwendet werden. Beispielsweise verwenden wir `cm` (Zentimeter) normalerweise nicht auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

Beachten Sie, dass `1px` nicht unbedingt einem physischen Gerätepixel entspricht. Auf HD-Displays kann es mehrere physische Pixel umfassen. Ebenso entspricht `1cm` in CSS oft nicht einem Hundertstel eines [SI](https://en.wikipedia.org/wiki/International_System_of_Units)-Meters. Auf einem großen Fernsehbildschirm ist es in der Regel länger als das. Die Längen sind wahrnehmungsbasiert: `16px` sieht auf einem Telefon, Laptop oder Fernsehbildschirm bei typischer Betrachtungsdistanz etwa gleich aus.

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Root-Elements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Viewports.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit ein wenig sorgfältiger Planung die Größe von Text oder anderen Elementen so skalieren können, dass sie proportional zum Rest der Seite ist. Für eine vollständige Liste der verfügbaren relativen Einheiten lesen Sie die Referenzseite für den {{cssxref("length")}} Typ.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erforschen.

#### Ein Beispiel erkunden

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Das erste Kästchen hat eine {{cssxref("width")}} in Pixeln gesetzt. Als absolute Einheit bleibt diese Breite unabhängig von anderen Änderungen gleich.

Das zweite Kästchen hat eine Breite in `vw` (Viewportbreite) Einheiten gesetzt. Dieser Wert ist relativ zur Viewportbreite, sodass `10vw` 10 Prozent der Breite des Viewports entspricht. Ändern Sie die Breite Ihres Browserfensters, sollte sich die Größe des Kästchens ändern. Da dieses Beispiel jedoch mit einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) in die Seite eingebettet ist, funktioniert dies nicht. Um dies in Aktion zu sehen, müssen Sie das [Beispiel in einem eigenen Browser-Tab ausprobieren](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Kästchen verwendet `em` Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umschließenden {{htmlelement("div")}} festgelegt, der eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em`, und Sie werden sehen, dass die Schriftgröße aller Elemente zunimmt, jedoch nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

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

`em` und `rem` sind die beiden relativen Längen, die Ihnen beim Größen von allem, von Boxen bis Text, wahrscheinlich am häufigsten begegnen. Es lohnt sich zu verstehen, wie diese funktionieren und die Unterschiede zwischen ihnen, insbesondere wenn Sie auf komplexere Themen wie [Textstyling](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) eingehen. Das folgende Beispiel bietet eine Demonstration.

Das nächste Beispiel ist ein Satz verschachtelter Listen — wir haben insgesamt zwei Listen und beide Beispiele haben denselben HTML-Code. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ hat und die zweite eine Klasse von _rems_.

Zunächst setzen wir `16px` als Schriftgröße des `<html>` Elements.

Zur Wiederholung bedeutet die `em` Einheit **"die Schriftgröße meines übergeordneten Elements"**, wenn sie für `font-size` verwendet wird, und **"meine eigene Schriftgröße"**, wenn sie für etwas anderes verwendet wird. Die {{htmlelement("li")}} Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `ems` orientieren sich an ihrer übergeordneten Schriftgröße. Daher wird jede nachfolgende Ebene der Verschachtelung progressiv größer, da jedes seine Schriftgröße auf `1.3em` — 1,3 mal die Schriftgröße seines übergeordneten Elements — eingestellt hat.

Zur Wiederholung bedeutet die `rem` Einheit **"die Schriftgröße des Root-Elements"** (rem steht für "root em"). Die {{htmlelement("li")}} Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `rems` orientieren sich an der Schriftgröße des Root-Elements (`<html>`). Dies bedeutet, dass jede nachfolgende Ebene der Verschachtelung nicht zunehmend größer wird.

Wenn Sie jedoch die Schriftgröße des `<html>` Elements in CSS ändern, werden alle anderen Elemente entsprechend geändert — sowohl `rem`- als auch `em`-große Texte. Versuchen Sie dies jetzt im MDN Playground.

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

In vielen Fällen wird ein Prozentsatz genauso behandelt wie eine Länge. Bei Prozentsätzen ist jedoch zu beachten, dass sie immer relativ zu einem anderen Wert gesetzt werden. Wenn Sie zum Beispiel die `font-size` eines Elements als Prozentsatz setzen, ist es ein Prozentsatz der `font-size` des übergeordneten Elements. Wenn Sie einen Prozentsatz für einen `width` Wert verwenden, ist es ein Prozentsatz der `width` des übergeordneten Elements.

Im nächsten Beispiel haben die beiden Paare von prozentual bemessenen und pixelbasierten Boxen dieselben Klassennamen. Die Boxen in jedem Paar sind jeweils `40%` und `200px` breit.

Der Unterschied besteht darin, dass das zweite Paar von zwei Boxen in einem Wrapper liegt, der `400px` breit ist. Die zweite `200px` breite Box hat dieselbe Breite wie die erste, aber die zweite `40%` Box ist jetzt `40%` von `400px` — viel schmaler als die erste!

Versuchen Sie, die Breite des Wrappers oder den Prozentsatz zu ändern, um zu sehen, wie dies funktioniert:

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

Das nächste Beispiel hat Schriftgrößen, die in Prozentsätzen gesetzt sind. Jedes `<li>` hat eine `font-size` von `80%`; daher werden die verschachtelten Listenelemente schrittweise kleiner, da sie ihre Größe vom übergeordneten Element erben.

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

Obwohl viele Eigenschaften entweder eine Länge oder einen Prozentsatz als Wert akzeptieren, gibt es einige, die nur eine Länge akzeptieren, wie zum Beispiel {{cssxref("border-width")}}. Die Property-Referenzseiten von MDN geben an, welche Wertetypen sie akzeptieren. Wenn der erlaubte Wert {{cssxref("length-percentage")}} enthält, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren zahlenfreie Zahlen; ein Beispiel ist die `opacity` Eigenschaft, die die Transparenz eines Elements steuert (wie durchsichtig es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im untenstehenden Beispiel versuchen Sie die `opacity` Werte zwischen `0` und `1` zu ändern und beobachten, wie das Kästchen und sein Inhalt mehr oder weniger durchsichtig werden:

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
> Wenn Sie eine Zahl in CSS als Wert verwenden, sollte sie nicht in Anführungszeichen stehen.

## Farbe

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es zur Festlegung der Farbe von Texten, Hintergründen, Rahmen und vielem mehr. Es gibt viele Möglichkeiten, Farben in CSS zu setzen, sodass Sie viele aufregende Eigenschaften steuern können.

Das übliche Farbsystem, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, die es ermöglichen, etwa 16,7 Millionen verschiedene Farben darzustellen, über eine Kombination von unterschiedlichen Rot-, Grün- und Blaukanälen mit 256 verschiedenen Werten pro Kanal (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir zunächst die am häufigsten gesehenen Möglichkeiten zur Spezifizierung von Farben betrachten: die Verwendung von Keywords, hexadezimalen und `rgb()` Werten. Wir werden auch einen kurzen Blick auf zusätzliche Farb

funktionen werfen, die Ihnen ermöglichen, diese zu erkennen, wenn Sie sie sehen oder mit verschiedenen Möglichkeiten, Farben anzuwenden, zu experimentieren.

Sie werden wahrscheinlich eine Farbpalette festlegen und dann diese Farben — und Ihre bevorzugte Möglichkeit, Farbe anzugeben — während Ihres Projekts verwenden. Sie können Farbsysteme mischen und kombinieren, aber es ist in der Regel am besten, wenn Ihr gesamtes Projekt die gleiche Methode zur Angabe von Farben verwendet, um Konsistenz zu gewährleisten!

### Farbkeywords

Sie werden die Farbkeywords (oder "benannte Farben") in vielen MDN-Codebeispielen sehen. Da der [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color) Datentyp eine sehr endliche Anzahl von Farbwerten enthält, werden sie nicht häufig auf Produktionswebsites mit einer ausgeklügelten Designsprache verwendet. Andererseits werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu sagen, welche Farbe erwartet wird, damit der Lernende sich auf den gelehrten Inhalt konzentrieren kann.

Im nächsten Beispiel versuchen Sie, mit verschiedenen Farbkeywords zu experimentieren, um ein besseres Verständnis dafür zu bekommen, wie sie funktionieren. Sie können sie über die [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color) Referenzseite nachschlagen.

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

Der nächste Farbwerttyp, dem Sie wahrscheinlich begegnen werden, sind hexadezimale (Hex) Codes.

Hexadezimale Zahlen verwenden 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` ist. Jeder Hex-Farbwert besteht aus einem Hash/Pfund-Symbol (`#`), gefolgt von sechs hexadezimalen Zeichen (zum Beispiel `#ffc0cb`). Jede **Paar** hexadezimale Zeichen repräsentiert einen der Kanäle einer RGB-Farbe — rot, grün und blau — und ermöglicht es uns, einen der 256 verfügbaren Werte für jeden zu spezifizieren (16 x 16 = 256).

Diese Werte sind weniger intuitiv als Keywords zur Definition von Farben, aber sie sind viel vielseitiger, weil Sie mit ihnen _jede_ RGB-Farbe darstellen können.

Im nächsten Beispiel versuchen Sie, die Werte zu ändern, um zu sehen, wie sich die Farben ändern:

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
> Möglicherweise sehen Sie Hex-Farbwerte mit drei Zeichen anstelle von sechs geschrieben. Dies ist eine Abkürzung, die verwendet werden kann, wenn die Zeichen in jedem Paar gleich sind. Zum Beispiel sind `#ff00ff` und `#f0f` gleichwertig. Möglicherweise sehen Sie auch Hex-Farbwerte, die mit acht (oder vier) Zeichen geschrieben sind, wobei der vierte Wert die Alpha-Transparenz der vorherigen drei Werte darstellt — zum Beispiel `#ff00ff66`.

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Funktion drei Parameter entgegen, die die **roten**, **grünen** und **blauen** Kanalwerte der Farben darstellen, mit einem optionalen vierten Wert, der durch einen Schrägstrich (`/`) getrennt ist und die Transparenz ähnlich wie bei Hex-Werten darstellt. Der Unterschied zu RGB besteht darin, dass jeder Kanal nicht durch zwei Hex-Ziffern, sondern durch eine Dezimalzahl im Bereich von `0` bis `255` oder einen Prozentsatz im Bereich von `0%` bis `100%` (aber keine Mischung aus beiden) dargestellt wird.

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

#### Ein RGB-Beispiel mit Transparenz

Im nächsten Beispiel haben wir ein Hintergrundbild zum umgebenden Block unserer Farbkästen hinzugefügt. Wir haben dann die Boxen so eingestellt, dass sie unterschiedliche Transparenzwerte haben — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanalwert kleiner ist. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen ergeben verschiedene Transparenzgrade.

Versuchen Sie, die Alpha-Kanal-Werte zu ändern, um zu sehen, wie sich die Farbausgabe auswirkt.

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
> Das Einstellen eines Alpha-Kanals auf eine Farbe hat einen wesentlichen Unterschied zur Verwendung der {{cssxref("opacity")}} Eigenschaft, die wir zuvor erwähnt haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin transparent, während die Verwendung von RGB mit einem Alpha-Parameter nur die Farbe, die Sie angeben, transparent macht.

### Verwenden von Farbtönen zur Farbbestimmung

Wenn Sie über Keywords, hexadezimal und `rgb()` hinaus Farben verwenden möchten, können Sie versuchen, [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue) zu verwenden. Hue ist der Wertetyp, der es uns ermöglicht, zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu unterscheiden oder Ähnlichkeiten zu erkennen. Das Hauptkonzept besteht darin, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) angeben können, da die meisten Farbmodelle Farben mit einem {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt mehrere Farb

funktionen, die eine [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue) Komponente enthalten, einschließlich `hsl()`, `hwb()`, und [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch). Andere Farb

funktionen, wie [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich den [Anleitung zur Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color) an, die [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften bietet, die Farbwerte verwenden.

### HWB

Ein guter Ausgangspunkt zur Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) Funktion, die eine `srgb()` Farbe angibt. Die drei Teile sind:

- **Hue**: Der Basiston der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue) Wert zwischen `0` und `360` an, der die Winkel um einen Farbkreis repräsentiert.
- **Whiteness**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (keine Weißheit) bis `100%` (volle Weißheit).
- **Blackness**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von `0%` (keine Schwärze) bis `100%` (volle Schwärze).

### HSL

Ähnlich zur `hwb()` Funktion ist die [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Funktion, die auch eine `srgb()` Farbe angibt. HSL verwendet `Hue`, zusätzlich zu `Saturation` und `Lightness`:

- **Hue**: Auch dies stellt den Basiston der Farbe dar.
- **Saturation**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von `0`–`100%` an, wobei `0` keine Farbe ist (sie erscheint als Grauton) und `100%` volle Farbsättigung ist.
- **Lightness**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von `0`–`100%` an, wobei `0` kein Licht ist (sie erscheint vollständig schwarz) und `100%` volles Licht ist (sie erscheint vollständig weiß).

Der `hsl()` Farbwert hat auch einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) von der Farbe getrennt ist und die Alpha-Transparenz darstellt.

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

Genau wie bei `rgb()` können Sie einen Alpha-Parameter an `hsl()` übergeben, um die Transparenz festzulegen:

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

Bevor Sie fortfahren, versuchen Sie, die vorherigen beiden Beispiele zu ändern, um einige auf Farbtönen basierende Farbwerte zu verwenden. Versuchen Sie, den Hue-Wert in jedem Fall zu variieren, um zu sehen, wie sich dies auf die Basisfarbe auswirkt, und probieren Sie dann die Variation der anderen Parameter aus.

## Bilder

Der [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()` Funktion angezeigt wird, oder ein Farbverlauf.

Im Beispiel unten verwenden wir ein Bild und einen Farbverlauf als Werte für die CSS `background-image` Eigenschaft.

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
> Es gibt einige andere mögliche Werte für `<image>`, diese sind jedoch neuer und haben derzeit eine schlechte Browserunterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Datentyp an, wenn Sie mehr darüber erfahren möchten.

Sie werden später in unserem Artikel über [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) mehr über Bildwerte erfahren.

## Position

Der [`<position>`](/de/docs/Web/CSS/Reference/Values/position_value) Wertetyp repräsentiert ein Set von 2D-Koordinaten, die verwendet werden, um ein Element wie ein Hintergrundbild (über [`background-position`](/de/docs/Web/CSS/Reference/Properties/background-position)) zu positionieren. Es kann Keywords wie `top`, `left`, `bottom`, `right` und `center` annehmen, um Elemente mit spezifischen Begrenzungen einer 2D-Box auszurichten, und Längen, die Verschiebungen von den oberen und linken Kanten der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die Position horizontal, der zweite vertikal fest. Wenn Sie nur Werte für eine Achse angeben, wird die andere standardmäßig auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild `60px` von oben und rechts des Containers positioniert, indem wir ein Keyword verwenden.

Versuchen Sie, mit diesen Werten zu spielen, um zu sehen, wie Sie das Bild verschieben können.

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

## Strings und Bezeichner

Durch die obigen Beispiele haben wir Orte gesehen, an denen Keywords als Wert verwendet werden (zum Beispiel `<color>` Keywords wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Keywords werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Daher stehen sie nicht in Anführungszeichen — sie werden nicht als Strings behandelt.

Es gibt Stellen, an denen Sie Strings in CSS verwenden. Zum Beispiel [bei der Spezifikation generierter Inhalte](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu zeigen, dass es sich um einen String handelt. Im Beispiel unten verwenden wir unzitierten Farbkewords zusammen mit einem zitierten generierten Inhaltsstring.

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

In der Programmierung ist eine Funktion ein Stück Code, das eine bestimmte Aufgabe ausführt. Funktionen sind nützlich, weil Sie einmal Code schreiben und dann viele Male wiederverwenden können, anstatt die gleiche Logik immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern enthalten auch praktische eingebaute Funktionen für allgemeine Aufgaben, damit Sie sie nicht selbst von Grund auf neu schreiben müssen.

CSS hat auch [Funktionen](/de/docs/Web/CSS/Reference/Values/Functions), die ähnlich wie Funktionen in anderen Sprachen funktionieren. Tatsächlich haben wir bereits CSS-Funktionen im Abschnitt [Farbe](#farbe) oben gesehen, wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl).

Neben dem Anwenden von Farben können Sie Funktionen in CSS nutzen, um viele andere Dinge zu tun. Beispielsweise sind [Transformationsfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#transform_functions) eine übliche Möglichkeit, Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren. Möglicherweise sehen Sie [`translate()`](/de/docs/Web/CSS/Reference/Values/transform-function/translate) für das horizontale oder vertikale Verschieben von etwas, [`rotate()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate), um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/Reference/Values/transform-function/scale), um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Dauer. Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie einige Berechnungen durchführen. Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen addieren, dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [mathematische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions), die es uns ermöglichen, Berechnungen in CSS durchzuführen, anstatt auf statische Werte zu setzen oder die Berechnungen in JavaScript durchzuführen. Eine der häufigsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/Reference/Values/calc), mit der Sie Operationen wie Addition, Subtraktion, Multiplikation und Division durchführen können.

Zum Beispiel, wenn wir die Breite eines Elements auf `20%` seines übergeordneten Containers plus `100px` einstellen wollen. Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn das übergeordnete Element eine prozentuale Breite (oder eine relative Einheit wie `em` oder `rem`) verwendet, variiert es je nach Kontext, in dem es verwendet wird, und anderen Faktoren wie dem Gerät oder der Breite des Browserfensters des Benutzers. Allerdings können wir `calc()` verwenden, um die Breite des Elements auf `20%` seines übergeordneten Containers plus `100px` einzustellen. Die `20%` basieren auf der Breite des übergeordneten Containers (`.wrapper`), und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/Reference/Values/min), [`max()`](/de/docs/Web/CSS/Reference/Values/max), und [`clamp()`](/de/docs/Web/CSS/Reference/Values/clamp); diese ermöglichen es Ihnen, den kleinsten, größten oder mittleren Wert aus einem Satz von Werten auszuwählen. Erkunden Sie unsere [CSS-Wertfunktionen](/de/docs/Web/CSS/Reference/Values/Functions) Referenzseite, um alle verfügbaren CSS-Funktionen zu überprüfen.

Das Wissen über CSS-Funktionen ist hilfreich, damit Sie sie erkennen, wenn Sie sie sehen. Sie sollten beginnen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen, benutzerdefinierte oder sich wiederholende Codes zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erhalten können.

## Zusammenfassung

Dies war ein kurzer Durchlauf der häufigsten Typen von Werten und Einheiten, denen Sie begegnen könnten. Sie können alle verschiedenen Typen auf der [CSS Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul-Seite ansehen — Sie werden vielen dieser Arten in Verwendung begegnen, wenn Sie diese Lektionen durcharbeiten.

Das Wichtigste, an das Sie sich erinnern sollten, ist, dass jede Eigenschaft eine definierte Liste zulässiger Werttypen hat und jeder Werttyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Einzelheiten hier auf MDN nachschlagen. Zum Beispiel zu wissen, dass [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Ihnen auch ermöglicht, einen Farbverlauf zu erstellen, ist nützlich, aber vielleicht nicht offensichtlich zu wissen!

Im nächsten Artikel werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie die von uns bereitgestellten Informationen zu Werten und Einheiten verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}
