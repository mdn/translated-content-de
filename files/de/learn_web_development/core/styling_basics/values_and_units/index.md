---
title: CSS-Werte und Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten zulässig ist. In dieser Lektion werden wir einige der am häufigsten verwendeten Wertetypen betrachten, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) enthält einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">Grundlegende CSS-Syntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen annehmen können und was diese Typen darstellen.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenketten und Bezeichner sowie Funktionen.</li>
          <li>Verständnis, was absolute und relative Einheiten sind und der Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

CSS-Werte definieren, welche Werttypen für jede CSS-Eigenschaft gültig sind. Zum Beispiel können Sie Farben für die Werte von {{cssxref("color")}} oder {{cssxref("border-color")}} angeben, aber keine Längen oder Prozentsätze.

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Werttypen erkennen, da sie von spitzen Klammern („<“, „>“) umgeben sind — wie [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Werttyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jeden gültigen Farbwert für diese Eigenschaft verwenden können, wie auf der Referenzseite [`<color>`](/de/docs/Web/CSS/color_value) angegeben.

Manchmal können Werttypen und Eigenschaften den gleichen oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value) Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welche Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber es sollte aus dem Kontext klar sein, welches Sie betrachten. Wenn Sie unsicher sind, versuchen Sie auf MDN danach zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie in CSS etwas als Datentyp bezeichnet sehen, ist es nur eine ausgefeilte Art zu sagen, dass es sich um einen Wertetyp handelt. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie zu verwenden wählen.

Im folgenden Beispiel haben wir die Textfarbe unserer Überschrift mit einem Farbkeyword gesetzt und den Hintergrund mit einem anderen Farbwert — der `rgb()`-Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Werttyp in CSS definiert eine Sammlung zulässiger Werte. Das bedeutet, wenn Sie `<color>` als gültig sehen, müssen Sie sich keine Gedanken darüber machen, welcher der verschiedenen Farbwerttypen verwendet werden kann — Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die MDN-Seite für jeden Wert gibt Ihnen Informationen zur Browser-Unterstützung. Wenn Sie sich zum Beispiel die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, werden Sie feststellen, dass der Abschnitt zur Browser-Kompatibilität verschiedene Arten von Farbwerten und deren Unterstützung auflistet.

Schauen wir uns einige der Werttypen und Einheiten an, die Sie häufig begegnen können, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

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
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar — es kann mit oder ohne Dezimalpunkt und Bruchteil vorkommen. Zum Beispiel <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
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
        <code>&#x3C;number></code> mit einer daran angehängten Einheit.
        Zum Beispiel <code>45deg</code>, <code>5s</code> oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine
        Oberkategorie, die die {{cssxref("length")}},
        <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
        >,<code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code
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
        Wertes dar. Zum Beispiel <code>50%</code>. Prozentsätze sind immer
        relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines
        Elements relativ zur Länge seines übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, den Sie am häufigsten antreffen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß die Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und werden im Allgemeinen immer als gleich groß angesehen.

| Einheit | Name              | Entspricht               |
| ------- | ----------------- | ------------------------ |
| `cm`    | Zentimeter        | 1cm = 37,8px = 25,2/64in |
| `mm`    | Millimeter        | 1mm = 1/10th von 1cm     |
| `Q`     | Viertelmillimeter | 1Q = 1/40th von 1cm      |
| `in`    | Zoll              | 1in = 2,54cm = 96px      |
| `pc`    | Pica              | 1pc = 1/6th von 1in      |
| `pt`    | Punkt             | 1pt = 1/72th von 1in     |
| `px`    | Pixel             | 1px = 1/96th von 1in     |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck verwendet werden, anstatt für die Bildschirmwiedergabe. Zum Beispiel verwenden wir typischerweise `cm` (Zentimeter) nicht auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden, ist `px` (Pixel).

Beachten Sie, dass `1px` nicht unbedingt einem physischen Pixel des Geräts entspricht. Auf HD-Displays kann es sich über mehrere physische Pixel erstrecken. Ebenso entspricht `1cm` in CSS oft nicht einem Hundertstel des [SI](https://en.wikipedia.org/wiki/International_System_of_Units)-Meters. Auf einem großen Fernsehbildschirm ist es typischerweise länger. Die Längen sind wahrnehmungsbasiert: `16px` sieht auf einem Telefon, Laptop oder Fernseher aus typischer Betrachtungsdistanz ungefähr gleich aus.

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe bzw. Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit etwas sorgfältiger Planung die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skalieren können. Für eine vollständige Liste der verfügbaren relativen Einheiten siehe die Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erkunden.

#### Ein Beispiel erkunden

Im folgenden Beispiel können Sie sehen, wie einige relative und absolute Längeneinheiten sich verhalten. Die erste Box hat eine {{cssxref("width")}} in Pixeln festgelegt. Als absolute Einheit bleibt diese Breite gleich, egal was sonst sich ändert.

Die zweite Box hat eine Breite in `vw` (Viewport-Breite)-Einheiten festgelegt. Dieser Wert ist relativ zur Breite des Ansichtsfensters, und so sind `10vw` 10 Prozent der Breite des Ansichtsfensters. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe der Box ändern. Dieses Beispiel ist jedoch in die Seite eingebettet, daher wird dies hier nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie [das Beispiel in einem eigenen Browsertab öffnen](https://mdn.github.io/css-examples/learn/values-units/length.html).

Die dritte Box verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem enthaltenen {{htmlelement("div")}}, das eine Klasse von `.wrapper` hat, festgelegt. Wenn Sie diesen Wert in `1.5em` ändern, werden Sie sehen, dass sich die Schriftgröße aller Elemente erhöht, sich aber nur das letzte Element verbreitert, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie die oben genannten Anweisungen befolgt haben, versuchen Sie, mit den Werten auf andere Weise zu spielen, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die beiden relativen Längen, auf die Sie wahrscheinlich am häufigsten stoßen werden, wenn Sie etwas von Boxen bis zu Text dimensionieren. Es ist wichtig zu verstehen, wie diese funktionieren, und die Unterschiede zwischen ihnen, insbesondere wenn Sie anfangen, sich mit komplexeren Themen wie [Text-Styling](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) zu beschäftigen. Das folgende Beispiel bietet eine Demonstration.

Das nächste Beispiel ist ein Satz verschachtelter Listen — wir haben insgesamt zwei Listen und beide Beispiele haben den gleichen HTML-Code. Der einzige Unterschied besteht darin, dass das erste eine Klasse von _ems_ und das zweite eine Klasse von _rems_ hat.

Zunächst setzen wir `16px` als Schriftgröße auf das `<html>`-Element.

Zur Erinnerung bedeutet die `em`-Einheit **"Schriftgröße des übergeordneten Elements"**, wenn sie für `font-size` verwendet wird, und **"eigene Schriftgröße"**, wenn sie für etwas anderes verwendet wird. Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` übernehmen die Größe von ihrem übergeordneten Element. So wird jede aufeinanderfolgende Verschachtelungsebene progressiv größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat — 1.3 mal der Schriftgröße des übergeordneten Elements.

Zur Erinnerung bedeutet die `rem`-Einheit **"Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größe vom Wurzelelement (`<html>`) an. Dies bedeutet, dass jede aufeinanderfolgende Verschachtelungsebene nicht immer größer wird.

Wenn Sie jedoch die Schriftgröße des `<html>`-Elements im CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu ändert — sowohl `rem`- als auch `em`-großer Text. Versuchen Sie dies jetzt im MDN Playground.

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

In vielen Fällen wird ein Prozentsatz genauso behandelt wie eine Länge. Bei Prozentsätzen ist jedoch immer zu beachten, dass sie relativ zu einem anderen Wert festgelegt werden. Zum Beispiel, wenn Sie die `font-size` eines Elements als Prozentsatz festlegen, wird es ein Prozentsatz der `font-size` seines übergeordneten Elements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, wird er ein Prozentsatz der `width` des übergeordneten Elements sein.

Im nächsten Beispiel haben die beiden Paare von prozentual und pixelgroß dimensionierten Boxen die gleichen Klassennamen. Die Boxen in jedem Paar sind `40%` und `200px` breit.

Der Unterschied besteht darin, dass das zweite Set von zwei Boxen in einem Wrapper ist, der `400px` breit ist. Die zweite `200px` breite Box ist gleich breit wie die erste, aber die zweite `40%` Box ist jetzt `40%` von `400px` — viel schmaler als die erste!

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

Im nächsten Beispiel sind Schriftgrößen in Prozent festgelegt. Jedes `<li>` hat eine `font-size` von `80%`; daher werden die verschachtelten Listenelemente progressiv kleiner, da sie ihre Größe von ihrem übergeordneten Element erben.

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

Beachten Sie, dass, während viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur Länge akzeptieren. Sie können auf den MDN-Eigenschaftsreferenzseiten sehen, welche Werte akzeptiert werden. Wenn der erlaubte Wert {{cssxref("length-percentage")}} enthält, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren nur nummerische Werte ohne Einheitenzusatz; ein Beispiel ist die `opacity`-Eigenschaft, die die Deckkraft eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im folgenden Beispiel versuchen Sie, den Wert der `opacity` zu verschiedenen Dezimalwerten zwischen `0` und `1` zu ändern und sehen Sie, wie die Box und ihr Inhalt mehr oder weniger transparent werden:

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

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es, um die Farbe von Text, Hintergründen, Rändern und vielem mehr anzugeben. Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, die Ihnen die Kontrolle über viele spannende Eigenschaften ermöglichen.

Das Standardsystem für Farbe, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, was die Darstellung von etwa 16,7 Millionen unterschiedlichen Farben ermöglicht, durch eine Kombination von verschiedenen Rot-, Grün- und Blaukanälen mit jeweils 256 verschiedenen Werten pro Kanal (256 x 256 x 256 = 16,777,216).

In diesem Abschnitt werden wir zuerst auf die am häufigsten gesehenen Wege zur Spezifizierung von Farben schauen: unter Verwendung von Schlüsselwörtern, hexadezimalen Werten und `rgb()`-Werten. Wir werfen auch einen kurzen Blick auf zusätzliche Farb-Funktionen, damit Sie diese erkennen können, wenn Sie sie sehen, oder mit verschiedenen Möglichkeiten der Farb-Anwendung experimentieren können.

Sie werden wahrscheinlich eine Farbpalette festlegen und dann diese Farben — und Ihre bevorzugte Art der Farbangabe — im gesamten Projekt verwenden. Sie können Mischungen und Übereinstimmungen von Farbmodellen verwenden, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt die gleiche Methode zur Deklaration von Farben verwendet, um Konsistenz zu gewährleisten!

### Farbschlüsselwörter

Sie werden die Farbschlüsselwörter (oder "benannte Farben") in vielen MDN-Codebeispielen sehen. Da der [`<named-color>`](/de/docs/Web/CSS/named-color) Datentyp nur eine begrenzte Anzahl von Farbwerten enthält, werden sie nicht häufig auf Produktionswebsites mit einer ausgefeilten Designsprache verwendet. Auf der anderen Seite werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu zeigen, welche Farbe erwartet wird, damit der Lernende sich auf den Inhalt konzentrieren kann, der gelehrt wird.

Im folgenden Beispiel versuchen Sie, mit verschiedenen Farbschlüsselwörtern zu spielen, um mehr darüber zu erfahren, wie sie funktionieren. Sie können sie auf der [`<named-color>`](/de/docs/Web/CSS/named-color) Referenzseite nachschlagen.

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

Hexadezimale Zahlen verwenden 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` ist. Jeder Farbinhalt im hexadezimalen Format besteht aus einem Hashtag-Zeichen (`#`), gefolgt von sechs hexadezimalen Zeichen (`#ffc0cb`, zum Beispiel). Jedes **Paar** von hexadezimalen Zeichen repräsentiert einen der RGB-Farbkanäle — Rot, Grün und Blau — und ermöglicht es uns, einen der 256 verfügbaren Werte für jeden Kanal zu spezifizieren (16 x 16 = 256).

Diese Werte sind weniger intuitiv als Schlüsselwörter für die Definition von Farben, aber sie sind viel vielseitiger, da Sie mit ihnen _jede_ RGB-Farbe darstellen können.

Im folgenden Beispiel versuchen Sie, die Werte zu ändern, um zu sehen, wie sich die Farben variieren:

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
> Sie könnten sehen, dass Hexfarbwerte mit drei Charakteren anstelle von sechs geschrieben werden. Dies ist eine Abkürzung, die verwendet werden kann, wenn die Zeichen in jedem Paar gleich sind. Zum Beispiel sind `#ff00ff` und `#f0f` äquivalent. Sie könnten auch sehen, dass Hexfarbwerte mit acht (oder vier) Zeichen geschrieben werden, wobei der vierte Wert die Alpha-Transparenz der vorherigen drei Werte repräsentiert — zum Beispiel `#ff00ff66`.

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter, die die **Rot**, **Grün** und **Blau** Kanalwerte der Farben darstellen, mit einem optionalen vierten Wert durch einen Schrägstrich (`/`) getrennt, der die Deckkraft ähnlich wie bei Hex-Werten repräsentiert. Der Unterschied zu RGB besteht darin, dass jeder Kanal nicht durch zwei Hex-Ziffern, sondern durch eine Dezimalzahl repräsentiert wird, die von `0` bis `255` reicht, oder ein Prozentsatz, der von `0%` bis `100%` reicht (aber nicht eine Mischung aus beiden).

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

#### Ein RGB-Beispiel mit Deckkraft

Im folgenden Beispiel haben wir ein Hintergrundbild in den Rahmen unserer farbigen Boxen gesetzt. Wir haben dann die Boxen so eingestellt, dass sie unterschiedliche Deckkraftwerte haben — beachten Sie, wie der Hintergrund umso mehr durchscheint, je kleiner der Alpha-Kanal-Wert ist. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen geben Ihnen unterschiedliche Transparenzstufen.

Versuchen Sie, die Werte des Alpha-Kanals zu ändern, um zu sehen, wie es sich auf die Farbwiedergabe auswirkt.

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
> Das Setzen eines Alpha-Kanals auf eine Farbe hat einen wesentlichen Unterschied zur Verwendung der {{cssxref("opacity")}} Eigenschaft, die wir bereits erwähnt haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin transparent, während die Verwendung von RGB mit einem Alpha-Parameter nur die spezifierte Farbe transparent macht.

### Farbtöne verwenden, um eine Farbe zu spezifizieren

Wenn Sie über Schlüsselwörter, Hexadezimalwerte und `rgb()` hinausgehen wollen, um Farben zu bestimmen, möchten Sie vielleicht versuchen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Farbton ist der Wertetyp, der es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen. Das Schlüsselkonzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) spezifizieren können, da die meisten Farbmodelle Farbtöne mit einem {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten, darunter `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farb-Funktionen, wie z. B. [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, lesen Sie die [Anwendung von Farbe auf HTML-Elementen mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) Anleitung, die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, Farben in CSS zu verwenden, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften, die Farbwerte verwenden, bietet.

### HWB

Ein hervorragender Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion, die eine `srgb()` Farbe spezifiziert. Die drei Teile sind:

- **Farbton**: Der Basisschatten der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen `0` und `360` an, der die Winkel um einen Farbrad repräsentiert.
- **Weißwert**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weißwert) bis `100%` (voller Weißwert) an.
- **Schwarzwert**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von `0%` (kein Schwarzwert) bis `100%` (voller Schwarzwert) an.

### HSL

Ähnlich der `hwb()` Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die ebenfalls eine `srgb()` Farbe spezifiziert. HSL verwendet `Farbton`, zusätzlich zu `Sättigung` und `Helligkeit`:

- **Farbton**: Auch hier repräsentiert dies den Basisschatten der Farbe.
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von `0`–`100%` an, wobei `0` keine Farbe ist (wird als Grauton erscheinen) und `100%` volle Farbintensität ist.
- **Helligkeit**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von `0`–`100%` an, wobei `0` kein Licht ist (es wird vollständig schwarz erscheinen) und `100%` volles Licht (es wird vollständig weiß erscheinen).

Der `hsl()`-Farbwert hat auch einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) getrennt ist und die Alphatransparenz darstellt.

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

Bevor Sie fortfahren, versuchen Sie, die beiden vorherigen Beispiele zu ändern, um einige farbbasierte Farbwerte zu verwenden. Versuchen Sie, den Farbwert in jedem Fall zu variieren, um zu sehen, wie dies die Grundfarbe beeinflusst, und variieren Sie dann auch die anderen Parameter.

## Bilder

Der [`<image>`](/de/docs/Web/CSS/image) Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion angegeben wird, oder ein Verlauf.

Im folgenden Beispiel verwenden wir ein Bild und einen Verlauf als Werte für die CSS-`background-image` Eigenschaft.

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
> Es gibt einige andere mögliche Werte für `<image>`, diese sind jedoch neuer und haben derzeit geringe Browser-Unterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie mehr darüber lesen möchten.

Sie werden mehr über Bildwerte in unserem Artikel über [Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) später erfahren.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp repräsentiert einen Satz von 2D-Koordinaten, die verwendet werden, um ein Element wie ein Hintergrundbild (über [`background-position`](/de/docs/Web/CSS/background-position)) zu positionieren. Er kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` annehmen, um Elemente mit bestimmten Grenzen einer 2D-Box zu auszurichten, und Längen, die Versatz von der oberen und linken Kante der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die Position horizontal fest, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` standardmäßig gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild `60px` von oben und `right` des Containers mit einem Schlüsselwort positioniert.

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

## Zeichenketten und Bezeichner

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>`-Schlüsselwörter wie `red`, `black`, `rebeccapurple`, und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Daher werden sie nicht zitiert — sie werden nicht als Zeichenketten behandelt.

Es gibt Stellen, an denen Sie Zeichenketten in CSS verwenden. Zum Beispiel [wenn Sie generierten Inhalt angeben](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert in Anführungszeichen gesetzt, um zu zeigen, dass er eine Zeichenkette ist. Im folgenden Beispiel verwenden wir unzitierten Farb-Schlüsselwörter zusammen mit einer zitierten generierten Inhalts-Zeichenkette.

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

In der Programmierung ist eine Funktion ein Codeabschnitt, der eine spezifische Aufgabe ausführt. Funktionen sind nützlich, weil Sie einmal geschriebenen Code viele Male wiederverwenden können, anstatt die gleiche Logik immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern bieten auch bequeme eingebaute Funktionen für gängige Aufgaben, sodass Sie sie nicht von Grund auf neu schreiben müssen.

CSS hat auch [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die ähnlich wie Funktionen in anderen Sprachen funktionieren. Tatsächlich haben wir CSS-Funktionen bereits im [Farbe](#farbe) Abschnitt oben gesehen, wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl).

Zusätzlich zur Farbverwendung können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun. Beispielsweise sind [Transform-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#transform_functions) eine gängige Methode, um Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren. Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu bewegen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale), um etwas größer oder kleiner zu machen.

### Mathematik-Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Werten wie `300px` für Längen oder `200ms` für Zeiten. Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie einige Berechnungen durchführen. Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen Zahl addieren und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematik-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions), die es uns ermöglichen, Berechnungen in CSS durchzuführen, anstatt sich auf statische Werte zu verlassen oder die Berechnungen in JavaScript durchzuführen. Eine der häufigsten Mathematik-Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), mit der Sie Operationen wie Addition, Subtraktion, Multiplikation und Division durchführen können.

Zum Beispiel sagen wir, dass wir die Breite eines Elements auf `20%` seines übergeordneten Containers plus `100px` setzen möchten. Wir können diesen Breite nicht mit einem statischen Wert angeben — wenn das übergeordnete Element eine Breite in Prozent (oder einer relativen Einheit wie `em` oder `rem`) verwendet, dann wird es variiert, abhängig vom Kontext, in dem es verwendet wird, und anderen Faktoren wie dem Gerät oder der Browserfensterbreite des Benutzers. Jedoch können wir `calc()` verwenden, um die Breite des Elements auf `20%` seines übergeordneten Containers plus `100px` festzulegen. Die `20%` basieren auf der Breite des übergeordneten Containers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere Mathematik-Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max), und [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie den kleinsten, größten oder mittleren Wert aus einem Satz von Werten auswählen. Erkunden Sie unsere [CSS-Wertfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) Referenzseite, um alle verfügbaren CSS-Funktionen zu erkunden.

Das Wissen über CSS-Funktionen ist nützlich, sodass Sie sie erkennen, wenn Sie sie sehen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen dabei, das Schreiben von individuell-angepasstem oder sich wiederholendem Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erzielen können.

## Zusammenfassung

Dies war ein schneller Überblick über die häufigsten Arten von Werten und Einheiten, auf die Sie stoßen könnten. Sie können sich alle verschiedenen Typen auf der [CSS-Werte- und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul-Seite ansehen — Sie werden viele davon im Laufe dieser Lektionen im Einsatz sehen.

Das Wichtigste, was Sie sich merken sollten, ist, dass jede Eigenschaft eine definierte Liste von erlaubten Werttypen hat und jeder Werttyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Einzelheiten hier auf MDN nachschlagen. Zum Beispiel ist es nützlich zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) es Ihnen auch ermöglicht, einen Farbverlauf zu erstellen, dies ist jedoch vielleicht nicht offensichtliches Wissen!

Im nächsten Artikel werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie die Informationen, die wir Ihnen zu Werten und Einheiten bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}
