---
title: CSS-Werte und Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben kann. In dieser Lektion betrachten wir einige der am häufigsten verwendeten Wertetypen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) enthält einen Abschnitt zur Syntax, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

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
          <li>Verstehen, dass Eigenschaftswerte verschiedene Typen annehmen können und was diese Typen repräsentieren.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenfolgen und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und der Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

CSS-Werte definieren, welche Arten von Werten für jede CSS-Eigenschaft gültig sind. Beispielsweise können Sie Farben für die Werte von {{cssxref("color")}} oder {{cssxref("border-color")}} angeben, aber nicht Längen oder Prozentsätze.

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie von spitzen Klammern (`<`, `>`) umgeben sind — wie etwa {{cssxref("&lt;color&gt;")}} oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jede gültige Farbe als Wert für diese Eigenschaft verwenden können, wie auf der {{cssxref("&lt;color&gt;")}}-Referenzseite aufgeführt.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen {{cssxref("&lt;color&gt;")}}-Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welchen Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber es sollte aus dem Kontext klar sein, welches Sie betrachten. Wenn Sie sich nicht sicher sind, versuchen Sie, danach auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie etwas in CSS als Datentyp bezeichnet sehen, ist es im Grunde nur eine vornehme Art, Wertetyp zu sagen. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Textfarbe unserer Überschrift mit einem Farbschlüsselwort und den Hintergrund mit einem anderen Typ von Farbwert — der `rgb()`-Funktion — festgelegt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS definiert eine Sammlung zulässiger Werte. Das bedeutet, dass, wenn Sie `<color>` als gültig sehen, Sie sich nicht wundern müssen, welcher der verschiedenen Typen von Farbwerten verwendet werden kann — Schlüsselwörter, Hexwerte, `rgb()`-Funktionen, usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, dass sie von Ihrem Browser unterstützt werden. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browser-Unterstützung. Wenn Sie zum Beispiel auf die Seite für {{cssxref("&lt;color&gt;")}} schauen, werden Sie sehen, dass der Abschnitt zur Browser-Kompatibilität verschiedene Arten von Farbwerten und deren Unterstützung auflistet.

Lassen Sie uns einige der häufig auftretenden Arten von Werten und Einheiten betrachten, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

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
        Ein <code>&#x3C;number></code> repräsentiert eine Dezimalzahl — sie kann einen Dezimalpunkt mit einem Bruchteil haben oder nicht. Zum Beispiel, <code>0.255</code>, <code>128</code>, oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/Reference/Values/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Eine <code>&#x3C;dimension></code> ist eine <code>&#x3C;number></code> mit einer Einheit. Zum Beispiel, <code>45deg</code>, <code>5s</code>,
        oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine Oberkategorie, die {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/Reference/Values/angle">&#x3C;angle></a></code
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
        Ein <code>&#x3C;percentage></code> repräsentiert einen Bruchteil eines anderen Wertes. Zum Beispiel, <code>50%</code>. Prozentwerte sind immer relativ zu einer anderen Größe. Zum Beispiel, die Länge eines Elements ist relativ zur Länge seines übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, auf den Sie am häufigsten stoßen werden, ist {{cssxref("length")}}. Zum Beispiel, `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relativ und absolut. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Objekte werden.

#### Absolute Längeneinheiten

Die folgenden sind **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und gelten generell als immer gleich groß.

| Einheit | Name              | Entspricht               |
| ------- | ----------------- | ------------------------ |
| `cm`    | Zentimeter        | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter        | 1mm = 1/10th von 1cm     |
| `Q`     | Viertelmillimeter | 1Q = 1/40th von 1cm      |
| `in`    | Zoll              | 1in = 2.54cm = 96px      |
| `pc`    | Picas             | 1pc = 1/6th von 1in      |
| `pt`    | Punkte            | 1pt = 1/72nd von 1in     |
| `px`    | Pixel             | 1px = 1/96th von 1in     |

Die meisten dieser Einheiten sind nützlicher bei der Arbeit mit Drucken, statt beim Bildschirm-Output. Zum Beispiel verwenden wir `cm` (Zentimeter) typischerweise nicht auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden, ist `px` (Pixel).

Beachten Sie, dass `1px` nicht unbedingt einem physischen Pixel eines Geräts entspricht. Auf HD-Displays kann es mehrere physische Pixel umfassen. Ebenso entsprechen `1cm` in CSS oft nicht einem Hundertstel eines [SI](https://en.wikipedia.org/wiki/International_System_of_Units)-Meters. Auf einem großen Fernsehbildschirm ist es typischerweise länger. Die Längen sind wahrnehmungsbasiert: `16px` sieht ungefähr auf einem Telefon, Laptop oder Fernsehbildschirm bei typischen Betrachtungsabständen gleich aus.

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des Elternelements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe bzw. Breite des Viewports.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit etwas sorgfältiger Planung erreichen können, dass sich die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skaliert. Für eine vollständige Liste der verfügbaren relativen Einheiten schauen Sie auf die Referenzseite des {{cssxref("length")}}-Typs.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erkunden.

#### Ein Beispiel erkunden

Im folgenden Beispiel können Sie sehen, wie einige relative und absolute Längeneinheiten sich verhalten. Das erste Kästchen hat eine {{cssxref("width")}}, die in Pixeln festgelegt ist. Als absolute Einheit bleibt diese Breite unabhängig von allen Änderungen konstant.

Das zweite Kästchen hat eine Breite in `vw` (Viewport-Breite) Einheiten festgelegt. Dieser Wert ist relativ zur Viewport-Breite, und daher sind `10vw` 10 Prozent der Breite des Viewports. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Kästchens ändern. Dieses Beispiel ist jedoch in die Seite mit einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) eingebettet, sodass dies nicht funktioniert. Um dies in Aktion zu sehen, müssen Sie das Beispiel öffnen [Beispiel in einer eigenen Browsertab öffnen](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Kästchen verwendet `em` Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf das umschließende {{htmlelement("div")}} gesetzt, das eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em` und Sie werden sehen, dass die Schriftgröße aller Elemente zunimmt, aber nur das letzte Element wird breiter, da seine Breite relativ zu dieser Schriftgröße ist.

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

#### Ems und Rems

`em` und `rem` sind die beiden relativen Längen, die Ihnen am häufigsten begegnen werden, wenn Sie alles von Boxen bis zu Text dimensionieren. Es ist wertvoll zu verstehen, wie diese funktionieren und die Unterschiede zwischen ihnen, insbesondere wenn Sie anfangen, sich mit komplexeren Themen wie [Textstyling](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) zu beschäftigen. Das folgende Beispiel bietet eine Demonstration.

Das nächste Beispiel ist ein Satz verschachtelter Listen — wir haben insgesamt zwei Listen und beide Beispiele haben dasselbe HTML. Der einzige Unterschied besteht darin, dass das erste eine Klasse von _ems_ und das zweite eine Klasse von _rems_ hat.

Zunächst setzen wir `16px` als Schriftgröße auf dem `<html>`-Element.

Zur Wiederholung: die `em` Einheit bedeutet **"die Schriftgröße meines Elternelements"**, wenn sie für `font-size` verwendet wird, und **"meine eigene Schriftgröße"**, wenn sie für alles andere verwendet wird. Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `ems` nehmen ihre Größe von ihrem Elternteil. So wird jedes aufeinanderfolgende Verschachtelungsniveau schrittweise größer, da jedes seine Schriftgröße auf `1.3em` festgelegt hat — 1,3 mal die Schriftgröße seines Elternelements.

Zur Wiederholung: die `rem` Einheit bedeutet **"die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größe vom Wurzelelement (`<html>`). Dies bedeutet, dass jedes aufeinanderfolgende Verschachtelungsniveau nicht ständig größer wird.

Wenn Sie jedoch die `font-size` des `<html>`-Elements im CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu ändert — sowohl `rem`- als auch `em`-großer Text. Versuchen Sie dies nun im MDN Playground.

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

In vielen Fällen wird ein Prozentsatz ähnlich wie eine Länge behandelt. Der Unterschied bei Prozentsätzen besteht darin, dass sie immer relativ zu einem anderen Wert eingestellt werden. Wenn Sie beispielsweise die `font-size` eines Elements als Prozentsatz festlegen, wird dies ein Prozentsatz der `font-size` des übergeordneten Elements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, wird dies ein Prozentsatz der `width` des übergeordneten Elements sein.

Im nächsten Beispiel haben die beiden Paare von Prozentsatz- und Pixel-großen Boxen dieselben Klassennamen. Die Boxen innerhalb jedes Paares sind `40%` bzw. `200px` breit.

Der Unterschied besteht darin, dass sich das zweite Set von zwei Boxen innerhalb eines Wrappers befindet, der `400px` breit ist. Die zweite `200px` breite Box hat dieselbe Breite wie die erste, aber die zweite `40%` Box ist jetzt `40%` von `400px` — viel schmaler als die erste!

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

Das nächste Beispiel hat Schriftgrößen, die in Prozentsätzen festgelegt sind. Jedes `<li>` hat eine `font-size` von `80%`; daher werden die verschachtelten Listenelemente schrittweise kleiner, da sie ihre Größe von ihrem Elternteil erben.

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

Während viele Eigenschaften eine Länge oder einen Prozentsatz als Wert akzeptieren, akzeptieren einige nur eine Länge, z.B. {{cssxref("border-width")}}. Auf den Eigenschaftsreferenzseiten von MDN finden Sie Details zu den Wertetypen, die sie akzeptieren. Wenn der erlaubte Wert {{cssxref("length-percentage")}} umfasst, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` umfasst, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren zahlenfreie Werte; ein Beispiel ist die `opacity`-Eigenschaft, die die Opazität eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im folgenden Beispiel versuchen Sie, den Wert der `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und sehen, wie das Kästchen und seine Inhalte mehr oder weniger undurchsichtig werden:

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

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es, um die Farbe von Text, Hintergründen, Rahmen und vielem mehr anzugeben. Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, sodass Sie viele aufregende Eigenschaften steuern können.

Das standardmäßige Farbsystem, das auf modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, mit denen etwa 16,7 Millionen verschiedene Farben angezeigt werden können, basierend auf einer Kombination von verschiedenen roten, grünen und blauen Kanälen mit 256 verschiedenen Werten pro Kanal (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir zuerst die am häufigsten gesehenen Möglichkeiten zur Angabe von Farben betrachten: die Verwendung von Schlüsselwörtern, Hexadezimalwerten und `rgb()`-Werten. Wir werfen auch einen kurzen Blick auf zusätzliche Farbfunktionsweisen, sodass Sie sie erkennen können, wenn Sie sie sehen oder mit verschiedenen Möglichkeiten der Farbgebung experimentieren möchten.

Sie werden wahrscheinlich eine Farbpalette bestimmen und dann diese Farben — und Ihre bevorzugte Methode zur Angabe von Farben — in Ihrem gesamten Projekt verwenden. Sie können Farbmodelle mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt dieselbe Methode zur Deklaration von Farben verwendet, um Konsistenz zu gewährleisten!

### Farb-Schlüsselwörter

Sie werden die Farbschlüsselwörter (oder "benannten Farben") in vielen MDN-Codebeispielen sehen. Da der {{cssxref("named-color")}} Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie nicht häufig auf Produktionswebsites mit einem anspruchsvollen Design verwendet. Andererseits werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu sagen, welche Farbe erwartet wird, damit sich der Lernende auf den zu vermittelnden Inhalt konzentrieren kann.

Im nächsten Beispiel versuchen Sie, mit verschiedenen Farbschlüsselwörtern zu spielen, um ein besseres Verständnis dafür zu bekommen, wie sie funktionieren. Sie können sie mit der {{cssxref("named-color")}} Referenzseite nachschlagen.

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

Der nächste Farbwerttyp, dem Sie begegnen werden, sind hexadezimale (Hex) Codes.

Hexadezimale Zahlen verwenden 16 Zeichen von `0-9` und `a-f`, also lautet der gesamte Bereich `0123456789abcdef`. Jeder hexadezimale Farbwert besteht aus einem Hash-Pfund-Symbol (`#`) gefolgt von sechs hexadezimalen Zeichen (`#ffc0cb`, zum Beispiel). Jedes **Paar** hexadezimaler Zeichen repräsentiert einen der Kanäle einer RGB-Farbe — rot, grün und blau — und ermöglicht es uns, einen der 256 verfügbaren Werte für jeden anzugeben (16 x 16 = 256).

Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, weil Sie _jede_ RGB-Farbe mit ihnen darstellen können.

Im nächsten Beispiel versuchen Sie, die Werte zu ändern, um zu sehen, wie sich die Farben unterscheiden:

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
> Sie könnten sehen, dass Hex-Farbwerte mit drei Zeichen anstelle von sechs geschrieben werden. Dies ist eine Kurzform, die verwendet werden kann, wenn die Zeichen in jedem Paar gleich sind. Zum Beispiel sind `#ff00ff` und `#f0f` äquivalent. Sie könnten auch Hex-Farbwerte sehen, die mit acht (oder vier) Zeichen geschrieben werden, wobei der vierte Wert die Alphas-Transparenz der vorherigen drei Werte repräsentiert — zum Beispiel `#ff00ff66`.

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die {{cssxref("color_value/rgb")}}-Funktion drei Parameter, die die **Rot-, Grün- und Blau**-Kanalwerte der Farben darstellen, mit einem optionalen vierten Wert, der durch einen Schrägstrich (`/`) getrennt ist und die Opazität in ähnlicher Weise wie Hex-Werte darstellt. Der Unterschied zu RGB besteht darin, dass jeder Kanal nicht durch zwei Hex-Ziffern, sondern durch eine Dezimalzahl dargestellt wird, die von `0` bis `255` reicht oder einen Prozentsatz von `0%` bis `100%` darstellt (aber keine Mischung aus beiden).

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

#### Ein RGB-Beispiel mit Opazität

Im nächsten Beispiel haben wir ein Hintergrundbild zum enthaltenden Block unserer farbigen Boxen hinzugefügt. Dann haben wir den Boxen unterschiedliche Opazitätswerte zugewiesen — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanalwert kleiner ist. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Zwischenwerte geben Ihnen unterschiedliche Transparenzstufen.

Versuchen Sie, die Alpha-Kanal-Werte zu ändern, um zu sehen, wie sich dies auf die Farbgebung auswirkt.

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
> Ein Alpha-Kanal auf eine Farbe zu setzen, hat einen entscheidenden Unterschied zur Nutzung der {{cssxref("opacity")}}-Eigenschaft, die wir früher erwähnten. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin transparent, während die Verwendung von RGB mit einem Alpha-Parameter nur die von Ihnen spezifizierte Farbe transparent macht.

### Verwendung von Farbtönen zur Spezifikation einer Farbe

Wenn Sie über Schlüsselwörter, Hexadezimalwerte und {{cssxref("color_value/rgb")}} hinaus bei Farben gehen möchten, könnten Sie versuchen, {{cssxref("hue")}} zu verwenden. Hue ist der Wertetyp, der es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen. Das Schlüsselkonzept besteht darin, dass Sie einen Farbton in einem {{cssxref("angle")}} spezifizieren können, da die meisten Farbmodelle Farbtöne mithilfe eines {{Glossary("color_wheel", "Farbkreises")}} beschreiben.

Es gibt mehrere Farbfunktionsweisen, die einen {{cssxref("hue")}}-Komponenten beinhalten, einschließlich {{cssxref("color_value/hsl")}}, {{cssxref("color_value/hwb")}} und {{cssxref("color_value/lch")}}. Andere Farbfunktionsweisen wie {{cssxref("color_value/lab")}} definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionsweisen und Farbräume erfahren möchten, sehen Sie sich den Leitfaden zum [Auftragen von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color), die {{cssxref("&lt;color&gt;")}}-Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) an, das einen Überblick über alle Farbtypen in CSS und die Eigenschaften bietet, die Farbwerte verwenden.

### HWB

Ein großartiger Ausgangspunkt für die Nutzung von Farbtönen in CSS ist die {{cssxref("color_value/hwb")}}-Funktion, die eine `srgb()` Farbe spezifiziert. Die drei Teile sind:

- **Hue**: Der grundlegende Farbton der Farbe. Dies nimmt einen {{cssxref("hue")}} Wert zwischen `0` und `360`, der die Winkel um einen Farbkreis repräsentiert.
- **Whiteness**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (keine Weiße) bis `100%` (volle Weiße).
- **Blackness**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von `0%` (keine Schwärze) bis `100%` (volle Schwärze).

### HSL

Ähnlich wie die {{cssxref("color_value/hwb")}}-Funktion ist die {{cssxref("color_value/hsl")}}-Funktion, die ebenfalls eine `srgb()`-Farbe spezifiziert. HSL verwendet `Hue` zusätzlich zu `Saturation` und `Lightness`:

- **Hue**: Auch hier repräsentiert dies den Grundfarbton der Farbe.
- **Saturation**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von `0`–`100%`, wobei `0` keine Farbe ist (es erscheint als Grauton), und `100%` volle Farbsättigung ist.
- **Lightness**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von `0`–`100%`, wobei `0` kein Licht ist (es erscheint komplett schwarz) und `100%` volles Licht ist (es erscheint komplett weiß).

Der {{cssxref("color_value/hsl")}}-Farbwert hat auch einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) von der Farbe getrennt ist, der die Alphatransparenz darstellt.

Lassen Sie uns das RGB-Beispiel aktualisieren, um HSL-Farben anstelle von RGB zu verwenden:

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

Genau wie bei `rgb()` können Sie einen Alpha-Parameter an `hsl()` übergeben, um die Deckkraft zu bestimmen:

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

Bevor Sie weitermachen, versuchen Sie, die vorherigen beiden Beispiele zu ändern, um einige farbtonbasierte Farbwerte zu verwenden. Versuchen Sie, den Farbtonwert in jedem Fall zu variieren, um zu sehen, wie sich dies auf die Grundfarbe auswirkt, und versuchen Sie dann auch, die anderen Parameter zu variieren.

## Bilder

Der {{cssxref("image")}}-Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion angegeben wird, oder ein Gradient.

Im folgenden Beispiel verwenden wir ein Bild und einen Farbverlauf als Werte für die CSS-`background-image`-Eigenschaft.

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
> Es gibt einige andere mögliche Werte für `<image>`, diese sind jedoch neuer und haben derzeit eine schlechte Browserunterstützung. Schauen Sie sich die Seite auf MDN für den {{cssxref("image")}}-Datentyp an, wenn Sie darüber lesen möchten.

Sie werden mehr über Bildwerte in unserem Artikel zu [Hintergründen und Rändern](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) erfahren.

## Position

Der {{cssxref("&lt;position&gt;")}}-Wertetyp repräsentiert ein Set von 2D-Koordinaten, das verwendet wird, um ein Element wie ein Hintergrundbild zu positionieren (via {{cssxref("background-position")}}). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` verwenden, um Elemente mit spezifischen Begrenzungen einer 2D-Box auszurichten, und Längen, die Verschiebungen von den oberen und linken Rändern der Box repräsentieren.

Ein typischer Positionswert besteht aus zwei Werten — der erste setzt die Position horizontal, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` standardmäßig eingestellt.

Im folgenden Beispiel haben wir ein Hintergrundbild `60px` von oben und `right` vom Container unter Verwendung eines Schlüsselworts positioniert.

Versuchen Sie, diese Werte zu ändern, um zu sehen, wie Sie das Bild bewegen können.

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

## Zeichenfolgen und Bezeichner

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Werte verwendet werden (zum Beispiel `<color>`-Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Aus diesem Grund werden sie nicht als Zeichenfolgen behandelt und sind nicht in Anführungszeichen gesetzt.

Es gibt Stellen, an denen Sie Zeichenfolgen in CSS verwenden. Zum Beispiel [wenn Sie generierten Inhalt angeben](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall ist der Wert in Anführungszeichen gesetzt, um zu zeigen, dass es sich um eine Zeichenfolge handelt. Im folgenden Beispiel verwenden wir unquoted Farb-Schlüsselwörter zusammen mit einer zitierten generierten Inhalt-Zeichenfolge.

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

In der Programmierung ist eine Funktion ein Stück Code, das eine spezifische Aufgabe erfüllt. Funktionen sind nützlich, weil Sie Code einmal schreiben und dann viele Male wiederverwenden können, anstatt dieselbe Logik immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen Funktionen nicht nur, sondern enthalten auch nützliche eingebaute Funktionen für gängige Aufgaben, sodass Sie sie nicht selbst von Grund auf neu schreiben müssen.

CSS hat auch [Funktionen](/de/docs/Web/CSS/Reference/Values/Functions), die auf ähnliche Weise wie Funktionen in anderen Sprachen funktionieren. Tatsächlich haben wir bereits CSS-Funktionen im [Farben](#farbe)-Abschnitt oben gesehen, wie zum Beispiel {{cssxref("color_value/rgb")}} und {{cssxref("color_value/hsl")}}.

Abgesehen von der Anwendung von Farben können Sie Funktionen in CSS verwenden, um eine Menge anderer Dinge zu tun. Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#transform_functions) eine gängige Möglichkeit, um Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren. Sie könnten {{cssxref("transform-function/translate")}} zum horizontalen oder vertikalen Bewegen von etwas, {{cssxref("transform-function/rotate")}} zum Drehen oder {{cssxref("transform-function/scale")}} zum Vergrößern oder Verkleinern verwenden.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, werden Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Dauer beginnen. Wenn Sie diese Werte basierend auf anderen Werten ändern möchten, müssen Sie einige Berechnungen durchführen. Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen Zahl addieren und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions), die es uns ermöglichen, Berechnungen in CSS durchzuführen, statt sich auf statische Werte oder Berechnungen in JavaScript zu verlassen. Eine der häufigsten mathematischen Funktionen ist {{cssxref("calc()")}}, die es Ihnen erlaubt, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Zum Beispiel nehmen wir an, wir möchten die Breite eines Elements auf `20%` seines Elternelements plus `100px` setzen. Wir können diese Breite nicht mit einem statischen Wert angeben — wenn das Elternteil eine Breite in Prozent (oder eine relative Einheit wie `em` oder `rem`) verwendet, dann variiert sie je nach Nutzungskontext und anderen Faktoren wie dem Gerät oder der Browserfensterbreite des Nutzers. Allerdings können wir `calc()` verwenden, um die Breite des Elements auf `20%` seines Elternelements plus `100px` zu setzen. Die `20%` basieren auf der Breite des Elternelements (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie {{cssxref("min()")}}, {{cssxref("max()")}} und {{cssxref("clamp()")}}; diese lassen Sie jeweils den kleinsten, größten oder mittleren Wert aus einem Satz von Werten auswählen. Durchstöbern Sie unsere [CSS-Werte-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) Referenzseite, um alle verfügbaren CSS-Funktionen zu entdecken.

Das Wissen über CSS-Funktionen ist nützlich, um diese zu erkennen, wenn Sie sie sehen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen, kundenspezifische oder sich wiederholende Codes zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erhalten können.

## Zusammenfassung

Dies war ein kurzer Durchlauf der am häufigsten vorkommenden Arten von Werten und Einheiten, auf die Sie stoßen könnten. Sie können sich alle verschiedenen Typen auf der Seite des Moduls [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) ansehen — viele davon werden Ihnen beim Durcharbeiten dieser Lektionen begegnen.

Das Schlüsselkonzept ist, dass jede Eigenschaft eine definierte Liste erlaubter Wertetypen hat und jeder Wertetyp eine Definition hat, die erklärt, was die Werte sind. Sie können die spezifischen Informationen dann hier auf MDN nachschlagen. Zum Beispiel ist es nützlich zu wissen, dass {{cssxref("image")}} Ihnen auch erlaubt, einen Farbverlauf zu erstellen, auch wenn dies vielleicht nicht offensichtlich ist.

Im nächsten Artikel werden wir Ihnen einige Tests bereitstellen, mit denen Sie überprüfen können, wie gut Sie die bereitgestellten Informationen über Werte und Einheiten verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}
