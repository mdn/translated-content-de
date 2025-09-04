---
title: CSS-Werte und -Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 5ed0891989972a0dbfdc5c1d95fa1d52a58395cb
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten erlaubt ist. In dieser Lektion werden wir uns einige der am häufigsten verwendeten Wertetypen ansehen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) hat einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen in HTML (Studium von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">Grundlegende CSS-Syntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen haben können, und was diese Typen darstellen.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenketten und Identifikatoren sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind, und der Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

CSS-Werte definieren, welche Wertetypen für jede CSS-Eigenschaft gültig sind. Zum Beispiel können Sie Farben für die Werte von {{cssxref("color")}} oder {{cssxref("border-color")}} angeben, aber nicht Längen oder Prozentsätze.

In den CSS-Spezifikationen und auf den Eigenschaftsseiten hier bei MDN können Sie Wertetypen erkennen, da sie von spitzen Klammern (`<`, `>`) umgeben sind — wie [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Werttyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jede gültige Farbe als Wert für diese Eigenschaft verwenden können, wie sie auf der [`<color>`](/de/docs/Web/CSS/color_value)-Referenzseite aufgelistet ist.

Manchmal können Wertetypen und Eigenschaften die gleichen oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welchen Sie in jedem Fall untersuchen. HTML-Elemente verwenden auch spitze Klammern, aber es sollte aus dem Kontext klar sein, welches Sie gerade betrachten. Wenn Sie sich unsicher sind, versuchen Sie, danach bei MDN zu suchen.

> [!NOTE]
> Sie werden CSS-Wertetypen als _Datentypen_ bezeichnet sehen. Die Begriffe sind im Grunde austauschbar - wenn Sie etwas in CSS als Datentyp bezeichnet sehen, ist dies im Grunde nur eine schickere Bezeichnung für Wertetyp. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Textfarbe unserer Überschrift mit einem Farb-Schlüsselwort festgelegt und den Hintergrund mit einem anderen Typ von Farbwert — der `rgb()`-Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS definiert eine Sammlung zulässiger Werte. Das bedeutet, dass, wenn Sie `<color>` als gültig sehen, Sie sich nicht fragen müssen, welcher der verschiedenen Typen von Farbwert verwendet werden kann — Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite bei MDN für jeden Wert gibt Ihnen Informationen über die Browser-Unterstützung. Zum Beispiel, wenn Sie auf der Seite für [`<color>`](/de/docs/Web/CSS/color_value) nachsehen, sehen Sie, dass im Abschnitt zur Browser-Kompatibilität verschiedene Arten von Farbwerten und deren Unterstützung aufgelistet sind.

Lassen Sie uns einige der Wertetypen und Einheiten sehen, die Sie möglicherweise häufig antreffen, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

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
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar — sie kann oder muss keinen Dezimalpunkt mit einem Bruchteil haben. Zum Beispiel <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
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
        <code>&#x3C;number></code> mit einer Einheit. Zum Beispiel,
        <code>45deg</code>, <code>5s</code> oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine Oberkategorie, die die
        {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code>, <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code> und
        <code><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code>-Typen umfasst.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> stellt einen Bruchteil eines anderen Wertes dar. Zum Beispiel <code>50%</code>. Prozentwerte sind immer relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines Elements relativ zur Länge seines Elter-Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relativ und absolut. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß die Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und werden im Allgemeinen als gleich groß angesehen.

| Einheit | Name              | Äquivalent zu            |
| ------- | ----------------- | ------------------------ |
| `cm`    | Zentimeter        | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter        | 1mm = 1/10 eines 1cm     |
| `Q`     | Viertelmillimeter | 1Q = 1/40 eines 1cm      |
| `in`    | Zoll              | 1in = 2.54cm = 96px      |
| `pc`    | Pica              | 1pc = 1/6 einer 1in      |
| `pt`    | Punkt             | 1pt = 1/72 einer 1in     |
| `px`    | Pixel             | 1px = 1/96 einer 1in     |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck und nicht für die Bildschirmausgabe verwendet werden. Zum Beispiel verwenden wir normalerweise keine `cm` (Zentimeter) auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

Beachten Sie, dass `1px` nicht unbedingt einem physischen Geräte-Pixel entspricht. Auf HD-Displays kann es mehrere physische Pixel umfassen. Ebenso entspricht `1cm` in CSS oft nicht einem Hundertstel eines [SI](https://en.wikipedia.org/wiki/International_System_of_Units)-Meters. Auf einem großen Fernseher ist es in der Regel länger. Die Längen sind wahrnehmungsbasiert: `16px` sieht in etwa gleich aus auf einem Handy, Laptop oder Fernseher bei typischer Betrachtungsentfernung.

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des Elter-Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe bzw. Breite des Viewports.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit etwas sorgfältiger Planung die Größe von Text oder anderen Elementen so einrichten können, dass sie relativ zu allem anderen auf der Seite skaliert. Für eine vollständige Liste der verfügbaren relativen Einheiten siehe die Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erkunden.

#### Erkunden eines Beispiels

Im folgenden Beispiel können Sie sehen, wie einige relative und absolute Längeneinheiten sich verhalten. Das erste Kästchen hat eine {{cssxref("width")}} in Pixeln festgelegt. Als absolute Einheit bleibt diese Breite unverändert, egal was sich sonst noch ändert.

Das zweite Kästchen hat eine Breite, die in `vw` (Viewport-Breite) Einheiten festgelegt ist. Dieser Wert ist relativ zur Breite des Viewports, und so sind `10vw` 10 Prozent der Breite des Viewports. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Kästchens ändern. Da dieses Beispiel aber in die Seite über ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) eingebettet ist, funktioniert dies hier nicht. Um dies in Aktion zu sehen, müssen Sie das [Beispiel nach dem Öffnen in einem eigenen Browser-Tab ausprobieren](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Kästchen verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umgebenden {{htmlelement("div")}} gesetzt, der eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em` und Sie werden sehen, dass sich die Schriftgröße aller Elemente erhöht, aber nur der letzte Eintrag breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie die Anweisungen oben verfolgt haben, versuchen Sie, die Werte auf andere Weise zu ändern, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die zwei relativen Längen, denen Sie wahrscheinlich am häufigsten begegnen, wenn Sie alles von Kästchen bis Text dimensionieren. Es lohnt sich zu verstehen, wie diese funktionieren und die Unterschiede zwischen ihnen, insbesondere wenn Sie zu komplexeren Themen wie [Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) übergehen. Das folgende Beispiel bietet eine Demonstration.

Das nächste Beispiel ist ein Satz von verschachtelten Listen — wir haben insgesamt zwei Listen und beide Beispiele haben dasselbe HTML. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Zu Beginn setzen wir `16px` als Schriftgröße auf dem `<html>`-Element.

Zur Erinnerung: Die `em`-Einheit bedeutet **"die Schriftgröße meines Elter-Elements"**, wenn sie für `Schriftgröße` verwendet wird, und **"meine eigene Schriftgröße"**, wenn sie für etwas anderes verwendet wird. Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` übernehmen ihre Größe von ihrem Elter. Somit wird jede aufeinander folgende Verschachtelungsebene zunehmend größer, da jede ihre Schriftgröße auf `1.3em` - 1,3 mal die Schriftgröße ihres Elter-Elements - eingestellt hat.

Zur Erinnerung: Die `rem`-Einheit bedeutet **"Die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` übernehmen ihre Größe vom Wurzelelement (`<html>`). Das bedeutet, dass jede aufeinander folgende Verschachtelungsebene nicht immer größer wird.

Wenn Sie jedoch die `Schriftgröße` des `<html>`-Elements im CSS ändern, werden Sie sehen, dass sich alles andere darauf bezieht — sowohl `rem`- als auch `em`-formatierter Text. Probieren Sie dies jetzt im MDN Playground aus.

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

In vielen Fällen wird ein Prozentsatz auf die gleiche Weise wie eine Länge behandelt. Das Besondere an Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert festgelegt werden. Zum Beispiel, wenn Sie die `Schriftgröße` eines Elements als Prozentsatz festlegen, wird es ein Prozentsatz der `Schriftgröße` des Elter-Elements sein. Wenn Sie einen Prozentsatz für einen `Breiten`-Wert verwenden, bezieht er sich auf die `Breite` des Elter-Elements.

Im nächsten Beispiel haben die beiden Paare von prozentual und pixelgroßen Kästchen die gleichen Klassennamen. Die Kästchen innerhalb jedes Paares sind jeweils `40%` und `200px` breit.

Der Unterschied besteht darin, dass das zweite Set aus zwei Kästchen in einem Wrapper ist, der `400px` breit ist. Das zweite `200px` breite Kästchen hat die gleiche Breite wie das erste, aber das zweite `40%` Kästchen ist jetzt `40%` von `400px` - viel schmaler als das erste!

Versuchen Sie, die Breite des Wrappers oder den Prozentsatz-Wert zu ändern, um zu sehen, wie das funktioniert:

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

Das nächste Beispiel hat Schriftgrößen in Prozent festgelegt. Jede `<li>` hat eine `Schriftgröße` von `80%`; daher werden die verschachtelten Listenelemente zunehmend kleiner, da sie ihre Größe von ihrem Elter erben.

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

Beachten Sie, dass, obwohl viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur eine Länge akzeptieren. Sie können auf den MDN-Eigenschaftsreferenzseiten sehen, welche Werte akzeptiert werden. Wenn der erlaubte Wert {{cssxref("length-percentage")}} beinhaltet, dann können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` beinhaltet, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren einheitslose Zahlen; ein Beispiel ist die `Opacity`-Eigenschaft, die die Durchsichtigkeit eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im folgenden Beispiel, versuchen Sie den Wert der `Opacity` zu verschiedenen Dezimalwerten zwischen `0` und `1` zu ändern und zu sehen, wie das Kästchen und sein Inhalt mehr oder weniger transparent werden:

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

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es, um die Farbe von Text, Hintergründen, Rahmen und vielem mehr anzugeben. Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, sodass Sie viele spannende Eigenschaften steuern können.

Das Standardsystem für Farben, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, das Anzeigen von etwa 16,7 Millionen verschiedenen Farben über eine Kombination von verschiedenen Rot-, Grün- und Blau-Kanälen mit 256 verschiedenen Werten pro Kanal (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir uns zunächst die am häufigsten gesehenen Möglichkeiten zur Angabe von Farben ansehen: unter Verwendung von Schlüsselwörtern, Hexadezimal- und `rgb()`-Werten. Wir werfen auch einen kurzen Blick auf zusätzliche Farb-Funktionen, damit Sie sie erkennen können, wenn Sie sie sehen, oder experimentieren können mit verschiedenen Möglichkeiten zur Anwendung von Farbe.

Sie werden wahrscheinlich eine Farbpalette festlegen und dann diese Farben — und Ihre bevorzugte Methode zur Angabe von Farbe — in Ihrem gesamten Projekt verwenden. Sie können Farbmodelle mischen und kombinieren, aber es ist in der Regel am besten, wenn Ihr gesamtes Projekt dieselbe Methode zur Deklaration von Farben für Konsistenz verwendet!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder "benannte Farben") in vielen MDN-Code-Beispielen sehen. Da der [`<named-color>`](/de/docs/Web/CSS/named-color)-Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie nicht häufig auf Produktions-Websites mit einer ausgefeilten Designsprache verwendet. Auf der anderen Seite werden benannte Farben in Codebeispielen verwendet, um dem Benutzer deutlich zu sagen, welche Farbe erwartet wird, damit der Lernende sich auf den gelehrten Inhalt konzentrieren kann.

Im nächsten Beispiel probieren Sie verschiedene Farb-Schlüsselwörter aus, um ein besseres Verständnis dafür zu bekommen, wie sie funktionieren. Sie können sie mit Hilfe der [`<named-color>`](/de/docs/Web/CSS/named-color) Referenzseite nachschlagen.

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

Die nächste Art von Farbwerten, die Ihnen wahrscheinlich begegnet, sind Hexadezimalcodes (hex).

Hexadezimalzahlen verwenden 16 Zeichen von `0-9` und `a-f`, daher ist der gesamte Bereich `0123456789abcdef`. Jeder Hex-Farbwert besteht aus einem Hash/Nummern Zeichen (`#`) gefolgt von sechs hexadezimalen Zeichen (`#ffc0cb` zum Beispiel). Jedes **Paar** von hexadezimalen Zeichen repräsentiert einen der Kanäle einer RGB-Farbe — rot, grün und blau — und ermöglicht es uns, einen der 256 verfügbaren Werte für jeden anzugeben (16 x 16 = 256).

Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, weil Sie _jede_ RGB-Farbe mit ihnen _darstellen_ können.

Im nächsten Beispiel versuchen Sie die Werte zu ändern, um zu sehen, wie sich die Farben verändern:

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
> Sie könnten Hex-Farbwerte mit drei Zeichen statt sechs geschrieben sehen. Dies ist eine Abkürzung, die verwendet werden kann, wenn die Zeichen in jedem Paar identisch sind. Zum Beispiel `#ff00ff` und `#f0f` sind äquivalent. Sie könnten auch Hex-Farbwerte mit acht (oder vier) Zeichen sehen, wobei der vierte Wert die Alpha-Transparenz der vorherigen drei Werte darstellt — zum Beispiel `#ff00ff66`.

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion drei Parameter auf, die die **roten**, **grünen** und **blauen** Kanalwerte der Farben darstellen, mit einem optionalen vierten Wert, getrennt durch einen Schrägstrich (`/`), der die Transparenz angibt, ähnlich wie bei Hex-Werten. Der Unterschied bei RGB ist, dass jeder Kanal nicht durch zwei hexadezimale Ziffern, sondern durch eine Dezimalzahl im Bereich von `0` bis `255` oder einen Prozentsatz im Bereich von `0%` bis `100%` (aber keine Mischung aus beidem) dargestellt wird.

Jetzt schreiben wir unser letztes Beispiel um, um RGB-Farben zu verwenden:

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

Im nächsten Beispiel haben wir dem umgebenden Block unserer farbigen Kästchen ein Hintergrundbild hinzugefügt. Wir haben dann die Kästchen auf verschiedene Transparenzwerte eingestellt — beachten Sie, wie der Hintergrund mehr sichtbar wird, wenn der Alphawert kleiner ist. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen geben Ihnen unterschiedliche Transparenzstufen.

Versuchen Sie den Alphawert zu ändern, um zu sehen, wie er die Farbausgabe beeinflusst.

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
> Das Festlegen eines Alphawerts auf einer Farbe hat einen wesentlichen Unterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir vorher erwähnt haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin transparent, während es bei der Verwendung von RGB mit einem Alpha-Parameter nur die Farbe transparent ist, die Sie angeben.

### Verwenden von Farbnuancen zur Spezifizierung einer Farbe

Wenn Sie über Schlüsselwörter, Hexadezimal- und `rgb()` für Farben hinaus gehen möchten, könnten Sie versuchen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Farbnuance ist der Wertetyp, der es uns erlaubt, Unterschiede oder Ähnlichkeiten zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen. Das Hauptkonzept ist, dass Sie eine Farbnuance in einem [`<angle>`](/de/docs/Web/CSS/angle) spezifizieren können, da die meisten Farbmodelle Farbnuancen mit einem {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue)-Komponente enthalten, darunter `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farb-Funktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend darauf, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume herausfinden möchten, sehen Sie sich den [Leitfaden zur Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) an, die [`<color>`](/de/docs/Web/CSS/color_value)-Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften, die Farbwerte verwenden, bietet.

### HWB

Ein großartiger Einstiegspunkt für die Verwendung von Farbnuancen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Funktion, die eine `srgb()`-Farbe spezifiziert. Die drei Teile sind:

- **Farbnuance**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue)-Wert zwischen `0` und `360` an, der die Winkel um einen Farbkreis herum repräsentiert.
- **Weißheit**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weiß) bis `100%` (voll Weiß) an.
- **Schwärze**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von `0%` (kein Schwarz) bis `100%` (voll Schwarz) an.

### HSL

Ähnlich der `hwb()`-Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Funktion, die ebenfalls eine `srgb()`-Farbe spezifiziert. HSL verwendet `Hue`, zusätzlich zu `Sättigung` und `Helligkeit`:

- **Farbnuance**: Wiederum repräsentiert dies den Grundton der Farbe.
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von `0`–`100%` an, wobei `0` keine Farbe ist (es erscheint als Grauton) und `100%` volle Farbsättigung ist.
- **Helligkeit**: Wie hell oder strahlend ist die Farbe? Dies nimmt einen Wert von `0`–`100%` an, wobei `0` kein Licht ist (es erscheint vollständig schwarz) und `100%` volles Licht ist (es erscheint vollständig weiß).

Der `hsl()`-Farbwert hat auch einen optionalen vierten Wert, der von der Farbe durch einen Schrägstrich (`/`) getrennt ist und die Alpha-Transparenz darstellt.

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

Genau wie bei `rgb()` können Sie einen Alpha-Parameter an `hsl()` übergeben, um die Transparenz anzugeben:

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

Bevor Sie fortfahren, versuchen Sie, die vorherigen zwei Beispiele zu ändern, um einige farbnuance-basierte Farbwerte zu verwenden. Versuchen Sie, den Farbwert in jedem Fall zu variieren, um zu sehen, wie sich dies auf die Basisfarbe auswirkt, und versuchen Sie dann, auch die anderen Parameter zu variieren.

## Bilder

Der [`<image>`](/de/docs/Web/CSS/image)-Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion angegeben wird, oder ein Verlauf.

Im Beispiel unten verwenden wir ein Bild und einen Verlauf als Werte für die CSS-`background-image`-Eigenschaft.

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
> Es gibt einige andere mögliche Werte für `<image>`, diese sind jedoch neuer und haben derzeit eine schlechte Browser-Unterstützung. Besuchen Sie die Seite bei MDN für den [`<image>`](/de/docs/Web/CSS/image)-Datentyp, wenn Sie mehr darüber lesen möchten.

Sie werden mehr über Bildwerte in unserem Artikel zu [Hintergründen und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) lernen.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value)-Wertetyp stellt ein Set von 2D-Koordinaten dar, die verwendet werden, um ein Element wie ein Hintergrundbild zu positionieren (über [`background-position`](/de/docs/Web/CSS/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` annehmen, um Elemente mit spezifischen Begrenzungen eines 2D-Kastens auszurichten, und Längen, die Offsets von den oberen und linken Rändern des Kastens darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die Position horizontal fest, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere standardmäßig auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild `60px` von oben und nach `rechts` des Containers mit einem Schlüsselwort positioniert.

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

## Zeichenketten und Identifikatoren

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>`-Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Identifikatoren_ beschrieben, ein spezieller Wert, den CSS versteht. Sie sind somit nicht in Anführungszeichen — sie werden nicht als Zeichenketten behandelt.

Es gibt Stellen, an denen Sie in CSS Zeichenketten verwenden. Zum Beispiel, [wenn Sie generierten Inhalt spezifizieren](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu zeigen, dass er eine Zeichenkette ist. Im Beispiel unten verwenden wir nicht zitierte Farb-Schlüsselwörter zusammen mit einer zitierten generierten Inhaltszeichenkette.

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

In der Programmierung ist eine Funktion ein Code-Block, der eine spezifische Aufgabe ausführt. Funktionen sind nützlich, weil Sie einmal geschriebenen Code viele Male wiederverwenden können, anstatt die gleiche Logik immer und immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern kommen auch mit bequemen eingebauten Funktionen für häufige Aufgaben, sodass Sie diese nicht selbst von Grund auf schreiben müssen.

CSS hat auch [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die auf ähnliche Weise wie Funktionen in anderen Sprachen arbeiten. Tatsächlich haben wir bereits CSS-Funktionen im [Farbe](#farbe)-Abschnitt oben gesehen, wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl).

Abgesehen von der Anwendung von Farben können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun. Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#transform_functions) eine häufige Möglichkeit, Elemente auf einer Seite zu verschieben, zu drehen und zu skalieren. Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) für das horizontale oder vertikale Verschieben verwenden, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale) um etwas größer oder kleiner zu machen.

### Mathematik-Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Zeitdauern. Wenn Sie möchten, dass diese Werte basierend auf anderen Werten geändert werden, müssen Sie einige mathematische Berechnungen durchführen. Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematik-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions), die es uns ermöglichen, Berechnungen in CSS durchzuführen, anstatt auf statische Werte angewiesen zu sein oder die Mathematik in JavaScript zu machen. Eine der am häufigsten verwendeten Mathematik-Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die es Ihnen ermöglicht, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Zum Beispiel sagen wir, wir möchten die Breite eines Elements auf `20%` seines Eltern-Containers plus `100px` festlegen. Wir können diesen Breitenwert nicht mit einem statischen Wert angeben — wenn das Eltern-Element eine Prozentbreite (oder eine relative Einheit wie `em` oder `rem`) verwendet, variiert es je nach Kontext, in dem es verwendet wird, und anderen Faktoren wie dem Gerät oder der Browserfenster-Breite des Benutzers. Allerdings können wir `calc()` verwenden, um die Breite des Elements auf `20%` seines Eltern-Containers plus `100px` festzulegen. Die `20%` basieren auf der Breite des Eltern-Containers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere Mathematik-Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max) und [`clamp()`](/de/docs/Web/CSS/clamp); Diese lassen Sie respektive den kleinsten, größten oder mittleren Wert aus einer Menge von Werten auswählen. Erkunden Sie unsere [CSS-Werte-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)-Referenzseite, um alle verfügbaren CSS-Funktionen zu entdecken.

Das Wissen über CSS-Funktionen ist nützlich, da Sie sie erkennen, wenn Sie sie sehen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen, benutzerdefinierten oder wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erreichen können.

## Zusammenfassung

Dies war ein kurzer Überblick über die am häufigsten anzutreffenden Wertetypen und -einheiten. Sie können sich alle verschiedenen Typen auf der [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul-Seite ansehen — viele davon werden Ihnen in der Praxis begegnen, während Sie diese Lektionen durcharbeiten.

Wichtig ist, dass jede Eigenschaft eine definierte Liste zulässiger Wertetypen hat und jeder Wertetyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Details hier bei MDN nachschlagen. Zum Beispiel zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch erlaubt, einen Farbverlauf zu erstellen, ist nützlich, aber vielleicht nicht offensichtliches Wissen, das Sie haben sollten!

Im nächsten Artikel werden wir Ihnen einige Tests anbieten, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen zu Werten und Einheiten, die wir Ihnen gegeben haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}
