---
title: CSS-Werte und Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die aus Eigenschaften und Werten bestehen.
Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf.
In dieser Lektion werfen wir einen Blick auf einige der am häufigsten verwendeten Wertetypen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigentumsseite](/de/docs/Web/CSS/Reference#index) hat einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">Grundlegende CSS-Syntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen annehmen können, und was diese Typen darstellen.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenfolgen und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und der Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

CSS-Werte definieren, welche Wertetypen für jede CSS-Eigenschaft gültig sind. Zum Beispiel können Sie Farben für die Werte von {{cssxref("color")}} oder {{cssxref("border-color")}} angeben, aber keine Längen oder Prozentsätze.

In den CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie durch spitze Klammern (`<`, `>`) umgeben sind — wie [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jeden gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie auf der Referenzseite [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value) Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welches Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber es sollte aus dem Kontext klar sein, welches Sie betrachten. Wenn Sie sich nicht sicher sind, versuchen Sie, danach auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie in CSS etwas als Datentyp genannt sehen, ist das wirklich nur eine elegante Art, Wertetyp zu sagen. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Textfarbe unserer Überschrift mit einem Farbschlüsselwort festgelegt und den Hintergrund mit einem anderen Typ von Farbwert — der `rgb()`-Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS definiert eine Sammlung von zulässigen Werten. Das bedeutet, dass wenn Sie `<color>` als gültig sehen, Sie sich keine Gedanken darüber machen müssen, welcher der verschiedenen Farbwerttypen verwendet werden kann — Schlüsselwörter, Hexadecimalwerte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen zur Browserunterstützung. Wenn Sie sich die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, werden Sie sehen, dass der Bereich für die Browser-Kompatibilität unterschiedliche Typen von Farbwerten und deren Unterstützung auflistet.

Schauen wir uns einige der Typen von Werten und Einheiten an, auf die Sie häufig stoßen, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

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
        Ein <code>&#x3C;number></code> repräsentiert eine Dezimalzahl — sie kann einen Dezimalpunkt mit einer Bruchzahlkomponente haben oder nicht. Beispielsweise <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Ein <code>&#x3C;dimension></code> ist ein <code>&#x3C;number></code> mit einer Einheit angehängt. Zum Beispiel, <code>45deg</code>, <code>5s</code>,
        oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine Oberkategorie, die die {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
        >, <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code
        >, und
        <code
          ><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code
        >
        Typen einschließt.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> stellt einen Bruchteil eines anderen Wertes dar. Zum Beispiel, <code>50%</code>. Prozentwerte sind immer relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines Elements relativ zur Länge des Elternelements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und werden allgemein als immer gleich groß angesehen.

| Einheit | Name               | Entspricht                   |
| ------- | ------------------ | ---------------------------- |
| `cm`    | Zentimeter         | 1cm = 37,8px = 25,2/64in     |
| `mm`    | Millimeter         | 1mm = 1/10 eines Zentimeters |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines Zentimeters  |
| `in`    | Zoll               | 1in = 2,54cm = 96px          |
| `pc`    | Picas              | 1pc = 1/6 Zoll               |
| `pt`    | Punkte             | 1pt = 1/72 Zoll              |
| `px`    | Pixel              | 1px = 1/96 Zoll              |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck und nicht für die Bildschirmausgabe verwendet werden. Zum Beispiel verwenden wir normalerweise nicht `cm` (Zentimeter) auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

Beachten Sie, dass `1px` nicht unbedingt einem physischen Gerätepixel entspricht. Auf HD-Displays kann es mehrere physische Pixel umfassen.
Ähnlich entspricht `1cm` in CSS oft nicht einem hundertstel [SI](https://de.wikipedia.org/wiki/Internationale_Einheitensystem) Meter. Auf einem großen Fernsehbildschirm ist es in der Regel länger als das. Die Längen sind wahrnehmbar: `16px` sieht ungefähr auf einem Telefon, Laptop oder Fernsehbildschirm in typischen Betrachtungsabständen gleich aus.

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des Elternelements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit ein wenig Planung die Größe von Texten oder anderen Elementen so gestalten können, dass sie relativ zu allem anderen auf der Seite skaliert. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erkunden.

#### Erforschen eines Beispiels

Im folgenden Beispiel können Sie sehen, wie einige relative und absolute Längeneinheiten sich verhalten. Das erste Feld hat eine {{cssxref("width")}} in Pixeln. Als absolute Einheit bleibt diese Breite gleich, egal wie sich sonst etwas ändert.

Das zweite Feld hat eine Breite, die in `vw` (Viewport-Breite) Einheiten festgelegt ist. Dieser Wert ist relativ zur Ansichtsfensterbreite, somit sind `10vw` 10 Prozent der Breite des Ansichtsfensters. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Feldes ändern. Da dieses Beispiel in die Seite unter Verwendung eines [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) eingebettet ist, wird dies hier nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie das Beispiel [nach dem Öffnen in einem neuen Browsertab ausprobieren](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Feld verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` beim umgebenden {{htmlelement("div")}} mit einer Klasse von `.wrapper` festgelegt. Ändern Sie diesen Wert auf `1.5em` und Sie werden sehen, dass die Schriftgröße aller Elemente zunimmt, aber nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie die oben stehenden Anweisungen befolgt haben, versuchen Sie, die Werte auf andere Weise zu ändern, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die zwei relativen Längen, auf die Sie am häufigsten stoßen werden, wenn Sie etwas von Boxen bis zu Texten dimensionieren. Es ist wertvoll zu verstehen, wie diese funktionieren, und der Unterschiede zwischen ihnen, besonders wenn Sie mit komplexeren Themen wie [Textformatierung](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) beginnen. Das folgende Beispiel bietet eine Demonstration.

Das nächste Beispiel ist eine Reihe von verschachtelten Listen — wir haben insgesamt zwei Listen und beide Beispiele haben denselben HTML-Code. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Zunächst setzen wir `16px` als Schriftgröße auf dem `<html>`-Element.

Zur Wiederholung: Die Einheit `em` bedeutet **"die Schriftgröße meines Elternelements"**, wenn sie für `font-size` verwendet wird, und **"meine eigene Schriftgröße"** wenn sie für irgendetwas anderes verwendet wird. Die {{htmlelement("li")}} Elemente in dem {{htmlelement("ul")}}, das eine `class` von `ems` hat, nehmen ihre Größen von ihrem Elternelement. So wird jede nachfolgende Ebene der Verschachtelung progressiv größer, da jede ihre Schriftgröße auf `1.3em` eingestellt hat — 1,3 mal die Schriftgröße des Elternelements.

Zur Wiederholung: Die Einheit `rem` bedeutet **"die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}} Elemente in dem {{htmlelement("ul")}}, das eine `class` von `rems` hat, nehmen ihre Größen vom Wurzelelement (`<html>`). Das bedeutet, dass jede nachfolgende Ebene der Verschachtelung nicht kontinuierlich größer wird.

Wenn Sie jedoch die `font-size` des `<html>`-Elements im CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu ändert — sowohl `rem`- als auch `em`-größe Texte. Versuchen Sie dies jetzt im MDN Playground.

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

In vielen Fällen wird ein Prozentsatz auf die gleiche Weise wie eine Länge behandelt. Bei Prozentsätzen ist es so, dass sie immer relativ zu einem anderen Wert festgelegt werden. Beispielsweise, wenn Sie die `font-size` eines Elements als Prozentsatz setzen, wird es ein Prozentsatz der `font-size` des Elternelements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, wird es ein Prozentsatz der `Breite` des Elternelements sein.

Im nächsten Beispiel haben die zwei Paare von prozentualen und pixelbasierten Boxen dieselben Klassennamen. Die Boxen innerhalb jedes Paars sind jeweils `40%` und `200px` breit.

Der Unterschied ist, dass das zweite Set von zwei Boxen innerhalb eines Wrappers ist, der `400px` breit ist. Die zweite `200px` breite Box ist genauso breit wie die erste, aber die zweite `40%` Box ist jetzt `40%` von `400px` — viel schmaler als die erste!

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

Das nächste Beispiel hat Schriftgrößen, die in Prozentsätzen gesetzt sind. Jedes `<li>` hat eine `font-size` von `80%`; daher werden die verschachtelten Listenelemente progressiv kleiner, da sie ihre Größe von ihrem Elternelement erben.

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

Während viele Eigenschaften eine Länge oder einen Prozentsatz als Wert akzeptieren, akzeptieren einige nur eine Länge, beispielsweise {{cssxref("border-width")}}. Die Eigenschaftsreferenzseiten von MDN geben an, welche Wertetypen sie akzeptieren. Wenn der erlaubte Wert {{cssxref("length-percentage")}} enthält, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren zahlenlose Zahlen; ein Beispiel ist die `opacity`-Eigenschaft, die die Transparenz eines Elements steuert (wie durchsichtig es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig opak).

Im folgenden Beispiel versuchen Sie, den Wert von `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und sehen, wie das Feld und seine Inhalte mehr oder weniger opak werden:

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

Farbwerte können in vielen Bereichen in CSS verwendet werden, sei es beim Bestimmen der Farbe von Texten, Hintergründen, Rändern und vielem mehr. Es gibt viele Möglichkeiten, in CSS Farben festzulegen, die es Ihnen ermöglichen, viele aufregende Eigenschaften zu steuern.

Das standardmäßige Farbsystem, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, die etwa 16,7 Millionen unterschiedliche Farben anzeigen können, durch eine Kombination von verschiedenen Rot-, Grün- und Blaukanälen mit 256 verschiedene Werte pro Kanal (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir uns zunächst die am häufigsten gesehenen Möglichkeiten zur Spezifizierung von Farben ansehen: die Verwendung von Schlüsselwörtern, Hexadezimal- und `rgb()`-Werten. Wir werden auch einen kurzen Blick auf zusätzliche Farbfunktionen werfen, um Ihnen die Möglichkeit zu geben, sie zu erkennen, wenn Sie sie sehen, oder mit verschiedenen Möglichkeiten zur Anwendung von Farbe zu experimentieren.

Sie werden wahrscheinlich eine Farbpalette wählen und dann diese Farben — und Ihre bevorzugte Methode zur Festlegung von Farben — im gesamten Projekt verwenden. Sie können Farbmodelle mischen und abgleichen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt die gleiche Methode zur Deklaration von Farben für Konsistenz verwendet!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder "benannte Farben") in vielen MDN-Codebeispielen sehen. Da der [`<named-color>`](/de/docs/Web/CSS/named-color) Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie nicht häufig auf Produktionswebsites mit einem ausgeklügelten Design verwendet. Andererseits werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu sagen, welche Farbe erwartet wird, damit der Lerner sich auf den behandelten Inhalt konzentrieren kann.

Im nächsten Beispiel versuchen Sie, mit verschiedenen Farb-Schlüsselwörtern zu experimentieren, um mehr darüber zu erfahren, wie sie funktionieren. Sie können sie nachschlagen, indem Sie die [`<named-color>`](/de/docs/Web/CSS/named-color) Referenzseite verwenden.

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

Der nächste Farbwerttyp, auf den Sie wahrscheinlich stoßen werden, sind Hexadezimalcodes.

Hexadezimale Zahlen verwenden 16 Zeichen von `0-9` und `a-f`, so dass der gesamte Bereich `0123456789abcdef` ist. Jeder Hex-Farbwert besteht aus einem Hash-Symbol (Pound-Symbol) (`#`) gefolgt von sechs Hexadezimalzeichen (`#ffc0cb`, zum Beispiel). Jedes **Paar** von hexadezimalen Zeichen stellt einen der Kanäle eines RGB-Farbwerts dar — Rot, Grün und Blau — und ermöglicht es uns, einen der 256 verfügbaren Werte für jeden (16 x 16 = 256) anzugeben.

Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, weil Sie mit ihnen jede RGB-Farbe _darstellen_ können.

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
> Sie könnten sehen, dass Hex-Farbwerte mit drei Zeichen anstelle von sechs geschrieben werden. Dies ist eine Abkürzung, die verwendet werden kann, wenn die Zeichen in jedem Paar gleich sind. Zum Beispiel, `#ff00ff` und `#f0f` sind äquivalent. Sie könnten auch sehen, dass Hex-Farbwerte mit acht (oder vier) Zeichen geschrieben werden, wobei der vierte Wert die Alpha-Transparenz der vorherigen drei Werte darstellt — zum Beispiel `#ff00ff66`.

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter, die **Rot**, **Grün** und **Blau** Kanalwerte der Farben darstellen, mit einem optionalen vierten Wert, der durch einen Schrägstrich (`/`) getrennt ist und die Opazität in ähnlicher Weise wie Hex-Werte repräsentiert. Der Unterschied bei RGB ist, dass jeder Kanal nicht durch zwei Hex-Ziffern, sondern durch eine Dezimalzahl zwischen `0` und `255` oder einen Prozentsatz zwischen `0%` und `100%` dargestellt wird (aber keine Mischung aus beiden).

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

#### Ein RGB-Beispiel mit Opazität

Im nächsten Beispiel haben wir ein Hintergrundbild zum blockierenden Container unserer farbigen Boxen hinzugefügt. Wir haben dann die Boxen mit unterschiedlichen Opazitätswerten eingestellt — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanalwert kleiner ist. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig opak macht. Werte dazwischen geben Ihnen verschiedene Transparenzgrade.

Versuchen Sie die Alpha-Kanalwerte zu ändern, um zu sehen, wie es die Farbausgabe beeinflusst.

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
> Einen Alpha-Kanal auf eine Farbe zu setzen hat einen wesentlichen Unterschied zur Verwendung des {{cssxref("opacity")}}-Eigenschaft, die wir zuvor erwähnt haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin transparent, während die Verwendung von RGB mit einem Alpha-Parameter nur die von Ihnen angegebene Farbe transparent macht.

### Verwenden von Farbtönen zur Farbbestimmung

Wenn Sie über Schlüsselwörter, Hexadezimal- und `rgb()`-Farben hinausgehen möchten, könnten Sie das Verwenden von [`<hue>`](/de/docs/Web/CSS/hue) in Betracht ziehen.
Farbton ist der Wertetyp, der uns erlaubt, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.
Das Schlüsselkonzept ist, dass Sie einen Farbton mit einem [`<angle>`](/de/docs/Web/CSS/angle) angeben können, da die meisten Farbmodelle Farbtöne mit einem {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue)-Komponente enthalten, einschließlich `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch).
Andere Farb-Funktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, lesen Sie den [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)-Leitfaden, die [`<color>`](/de/docs/Web/CSS/color_value)-Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften, die Farbwerte verwenden, bietet.

### HWB

Ein guter Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Funktion, die eine `srgb()`-Farbe angibt.
Die drei Teile sind:

- **Farbton**: Der Basisfarbton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue)-Wert zwischen `0` und `360` an, der die Winkel um einen Farbkreis darstellt.
- **Weißanteil**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weißanteil) bis `100%` (voller Weißanteil) an.
- **Schwarzanteil**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von `0%` (kein Schwarzanteil) bis `100%` (voller Schwarzanteil) an.

### HSL

Ähnlich zur `hwb()` Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Funktion, die ebenfalls eine `srgb()`-Farbe angibt.
HSL verwendet `Farbton`, zusätzlich zu `Sättigung` und `Helligkeit`:

- **Farbton**: Wiederum stellt dies den Basisfarbton der Farbe dar.
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von `0–100%` an, wobei `0` keine Farbe ist (es wird als Grauton erscheinen), und `100%` ist volle Farbsättigung.
- **Helligkeit**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von `0–100%` an, wobei `0` kein Licht ist (es wird vollständig schwarz erscheinen) und `100%` ist volles Licht (es wird vollständig weiß erscheinen).

Der `hsl()` Farbwert hat auch einen optionalen vierten Wert, getrennt von der Farbe mit einem Schrägstrich (`/`), der die Alphatransparenz repräsentiert.

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

Genau wie mit `rgb()` können Sie einen Alpha-Parameter an `hsl()` übergeben, um die Opazität anzugeben:

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

Bevor Sie weitergehen, versuchen Sie, die vorherigen zwei Beispiele zu modifizieren, um einige farbtonbasierte Farbwerte zu verwenden. Versuchen Sie, den Farbwert in jedem Fall zu variieren, um zu sehen, wie sich dies auf die Basisfarbe auswirkt, und versuchen Sie dann auch, die anderen Parameter zu variieren.

## Bilder

Der [`<image>`](/de/docs/Web/CSS/image) Wertetyp wird verwendet, wo immer ein Bild als gültiger Wert akzeptiert wird. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion aufgerufen wird, oder ein Verlauf.

Im folgenden Beispiel verwenden wir ein Bild und ein Verlauf als Werte für die CSS `background-image`-Eigenschaft.

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
> Es gibt einige andere mögliche Werte für `<image>`, allerdings sind diese neuer und haben derzeit eine geringe Browserunterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie darüber lesen möchten.

Sie werden mehr über Bildwerte in unserem Artikel zu [Hintergründen und Rändern](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) später erfahren.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp repräsentiert eine Menge von 2D-Koordinaten, die verwendet werden, um ein Element wie ein Hintergrundbild zu positionieren (über [`background-position`](/de/docs/Web/CSS/Reference/Properties/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right`, und `center` annehmen, um Elemente an spezifischen Grenzen eines 2D-Felds auszurichten, und Längen, die Versätze von den oberen und linken Kanten des Felds darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die Position horizontal fest, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere standardmäßig auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild `60px` vom oberen Rand und zur `right` des Containers mit einem Schlüsselwort positioniert.

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

## Zeichenfolgen und Bezeichner

In den obigen Beispielen haben wir gesehen, wo Schlüsselwörter als Wert verwendet werden können (zum Beispiel `<color>` Schlüsselwörter wie `red`, `black`, `rebeccapurple`, und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Daher werden sie nicht zitiert — sie werden nicht als Zeichenfolgen behandelt.

Es gibt Stellen, an denen Sie Zeichenfolgen in CSS verwenden. Zum Beispiel, [beim Festlegen von generierten Inhalten](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu zeigen, dass es sich um eine Zeichenfolge handelt. Im folgenden Beispiel verwenden wir nicht zitierte Farb-Schlüsselwörter zusammen mit einer zitierten Zeichenfolgen, die generierten Inhalt darstellt.

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

In der Programmierung ist eine Funktion ein Stück Code, das eine spezifische Aufgabe erfüllt.
Funktionen sind nützlich, weil Sie Code einmal schreiben und dann viele Male wiederverwenden können, anstatt die gleiche Logik immer wieder neu zu schreiben.
Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern kommen auch mit praktischen eingebauten Funktionen für häufige Aufgaben, so dass Sie diese nicht selbst von Grund auf schreiben müssen.

CSS hat ebenfalls [Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions), die ähnlich wie Funktionen in anderen Sprachen funktionieren.
Tatsächlich haben wir schon CSS-Funktionen im Abschnitt [Farbe](#farbe) oben gesehen, wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl).

Außer der Anwendung von Farben können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun.
Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#transform_functions) eine übliche Möglichkeit, Elemente auf einer Seite zu verschieben, zu rotieren und zu skalieren.
Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) zum horizontalen oder vertikalen Verschieben sehen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) zum Rotieren eines Elements, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale) um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Dauern.
Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie einige Berechnungen durchführen.
Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen Zahl hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematische Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#math_functions), die es uns erlauben, Berechnungen in CSS auszuführen, anstatt sich auf statische Werte zu verlassen oder die Mathe in JavaScript zu machen.
Eine der häufigsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die Ihnen erlaubt, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Angenommen, wir möchten die Breite eines Elements auf `20%` seines Elterncontainers plus `100px` setzen.
Wir können diese Breite nicht mit einem statischen Wert angeben — wenn das Elternteil eine prozentuale Breite (oder eine relative Einheit wie `em` oder `rem`) verwendet, dann wird es je nach Kontext, in dem es verwendet wird, und anderen Faktoren wie dem Gerät des Benutzers oder der Breite des Browserfensters variieren.
Wir können jedoch `calc()` verwenden, um die Breite des Elements auf `20%` seines Elterncontainers plus `100px` zu setzen.
Die `20%` basieren auf der Breite des Elternelements (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max), und [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie den kleinsten, größten, oder mittleren Wert aus einem Satz von Werten wählen. Erkunden Sie unsere [CSS-Werte-Funktionsreferenzseite](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions), um alle verfügbaren CSS-Funktionen zu prüfen.

Zu wissen, dass es CSS-Funktionen gibt, ist nützlich, damit Sie sie erkennen, wenn Sie sie sehen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie werden Ihnen helfen, benutzerdefinierten oder repetitiven Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erzielen können.

## Zusammenfassung

Dies war ein schneller Durchlauf der häufigsten Wertetypen und Einheiten, auf die Sie stoßen könnten. Sie können einen Blick auf alle verschiedenen Typen auf der [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modulseite werfen - Sie werden viele dieser in Gebrauch sehen, während Sie an diesen Lektionen arbeiten.

Der wichtige Punkt zu erinnern ist, dass jede Eigenschaft eine definierte Liste von zulässigen Wertetypen hat und jeder Wertetyp hat eine Definition, die erklärt, was die Werte sind. Sie können dann die Details hier bei MDN nachschlagen. Zum Beispiel, das Verständnis, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch erlaubt, einen Farbverlauf zu erstellen, ist nützlich, aber vielleicht nicht offensichtlich zu wissen!

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen über Werte und Einheiten, die wir bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}
