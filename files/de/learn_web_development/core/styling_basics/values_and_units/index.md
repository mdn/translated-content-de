---
title: CSS-Werte und -Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: c942ddb3ee3608d5fab06141175d719a60473987
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Arten von Werten zulässig sind. In dieser Lektion werfen wir einen Blick auf einige der am häufigsten verwendeten Wertetypen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) hat einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

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
          <li>Verstehen, dass Eigenschaftenwerte viele verschiedene Typen annehmen können und was diese Typen repräsentieren.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenfolgen und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und der Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

CSS-Werte definieren, welche Art von Werten für jede CSS-Eigenschaft gültig sind. Beispielsweise können Sie Farben für die Werte von {{cssxref("color")}} oder {{cssxref("border-color")}} angeben, aber nicht Längen oder Prozentsätze.

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier bei MDN können Sie Wertetypen erkennen, da sie von spitzen Klammern (`<`, `>`) umgeben sind – wie [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jeden gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie er auf der [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Referenzseite aufgeführt ist.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben – zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welche Sie in jedem Fall studieren. HTML-Elemente verwenden auch spitze Klammern, aber aus dem Kontext sollte klar sein, welche Sie gerade betrachten. Wenn Sie sich nicht sicher sind, versuchen Sie, danach bei MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar – wenn Sie etwas in CSS als einen Datentyp sehen, ist es im Grunde nur eine vornehme Art zu sagen, dass es sich um einen Wertetyp handelt. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Textfarbe unserer Überschrift mit einem Farb-Schlüsselwort festgelegt und den Hintergrund mit einem anderen Farbwerttyp – der `rgb()`-Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS definiert eine Sammlung zulässiger Werte. Das bedeutet, dass Sie, wenn Sie `<color>` als gültig sehen, sich nicht fragen müssen, welcher der verschiedenen Farbwerttypen verwendet werden kann – Schlüsselwörter, Hexadezimalwerte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browserunterstützung. Wenn Sie sich beispielsweise die Seite für [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) ansehen, werden Sie sehen, dass im Abschnitt zur Browser-Kompatibilität die verschiedenen Farbwerttypen und ihre Unterstützung aufgelistet sind.

Schauen wir uns einige der Typen von Werten und Einheiten an, die Ihnen häufig begegnen können, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

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
        <code><a href="/de/docs/Web/CSS/Reference/Values/integer">&#x3C;integer></a></code>
      </td>
      <td>
        Ein <code>&#x3C;integer></code> ist eine ganze Zahl, wie
        <code>1024</code> oder <code>-55</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></code>
      </td>
      <td>
        Ein <code>&#x3C;number></code> repräsentiert eine Dezimalzahl – sie kann einen Dezimalpunkt mit einer Bruchkomponente haben oder nicht. Zum Beispiel, <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
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
        oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine Oberkategorie,
        die die {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/Reference/Values/angle">&#x3C;angle></a></code
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
        relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines Elements
        relativ zur Länge des übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden – relativ und absolut. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alles **absolute** Längeneinheiten – sie sind zu nichts anderem relativ und gelten im Allgemeinen als immer gleich groß.

| Einheit | Name              | Entspricht               |
| ------- | ----------------- | ------------------------ |
| `cm`    | Zentimeter        | 1cm = 37,8px = 25,2/64in |
| `mm`    | Millimeter        | 1mm = 1/10 eines cm      |
| `Q`     | Viertelmillimeter | 1Q = 1/40 eines cm       |
| `in`    | Zoll              | 1in = 2,54cm = 96px      |
| `pc`    | Picas             | 1pc = 1/6 eines Zoll     |
| `pt`    | Punkte            | 1pt = 1/72 eines Zoll    |
| `px`    | Pixel             | 1px = 1/96 eines Zoll    |

Die meisten dieser Einheiten sind nützlicher beim Drucken als bei der Bildschirmwiedergabe. Zum Beispiel verwenden wir typischerweise kein `cm` (Zentimeter) auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

Beachten Sie, dass `1px` nicht unbedingt einem physischen Gerätepixel entspricht. Auf HD-Displays kann es sich über mehrere physische Pixel erstrecken.
Ebenso entspricht `1cm` in CSS oft nicht einem Hundertstel eines [SI](https://en.wikipedia.org/wiki/International_System_of_Units)-Meter. Auf einem großen Fernsehbildschirm ist es typischerweise länger.
Die Längen sind perzeptuell: `16px` sieht auf einem Handy, Laptop oder Fernseher ungefähr gleich aus bei typischen Betrachtungsabständen.

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße des Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie bei sorgfältiger Planung die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skalieren können. Für eine vollständige Liste der verfügbaren relativen Einheiten siehe die Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erkunden.

#### Erforschung eines Beispiels

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Die erste Box hat eine {{cssxref("width")}} in Pixeln gesetzt. Als absolute Einheit bleibt diese Breite gleich, egal was sich sonst ändert.

Die zweite Box hat eine Breite, die in `vw` (Ansichtsfensterbreite) Einheiten gesetzt ist. Dieser Wert ist relativ zur Ansichtsfensterbreite, und so sind `10vw` 10 Prozent der Breite des Ansichtsfensters. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe der Box ändern. Da dieses Beispiel jedoch in die Seite mit einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) eingebunden ist, wird dies nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie [das Beispiel öffnen, nachdem Sie es in einem eigenen Browser-Tab geöffnet haben](https://mdn.github.io/css-examples/learn/values-units/length.html).

Die dritte Box verwendet `em` Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem enthaltenen {{htmlelement("div")}} gesetzt, das die Klasse `.wrapper` hat. Ändern Sie diesen Wert zu `1.5em` und Sie werden sehen, dass sich die Schriftgröße aller Elemente vergrößert, jedoch wird nur das letzte Element breiter, da seine Breite relativ zu dieser Schriftgröße ist.

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

`em` und `rem` sind die zwei relativen Längen, denen Sie am häufigsten begegnen werden, wenn Sie alles von Boxen bis zu Texten dimensionieren. Es ist es wert zu verstehen, wie diese funktionieren, und die Unterschiede zwischen ihnen, vor allem, wenn Sie anfangen, sich mit komplexeren Themen wie [Stil für Text](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) zu befassen. Das untenstehende Beispiel bietet eine Demonstration.

Das nächste Beispiel ist eine Reihe verschachtelter Listen – wir haben insgesamt zwei Listen und beide Beispiele haben das gleiche HTML. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Zuerst setzen wir `16px` als Schriftgröße auf dem `<html>`-Element.

Zur Erinnerung: Die `em`-Einheit bedeutet **"die Schriftgröße meines übergeordneten Elements"**, wenn sie für `font-size` verwendet wird, und **"meine eigene Schriftgröße"**, wenn sie für etwas anderes verwendet wird. Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` beziehen ihre Größen von ihrem übergeordneten Element. Daher wird jede aufeinander folgende Verschachtelungsebene schrittweise größer, da jede ihre Schriftgröße auf `1.3em` setzt – 1,3 mal die Schriftgröße ihres übergeordneten Elements.

Zur Erinnerung: Die `rem`-Einheit bedeutet **"die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` beziehen ihre Größen vom Wurzelelement (`<html>`). Dies bedeutet, dass jede aufeinander folgende Verschachtelungsebene nicht ständig größer wird.

Wenn Sie jedoch die `font-size` des `<html>`-Elements im CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu ändert – sowohl der `rem`- als auch der `em`-dimensionierte Text. Versuchen Sie es jetzt im MDN Playground.

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

In vielen Fällen wird ein Prozentsatz genauso behandelt wie eine Länge. Das Problem mit Prozentangaben ist, dass sie immer relativ zu einem anderen Wert gesetzt werden. Zum Beispiel, wenn Sie die `font-size` eines Elements als Prozentsatz festlegen, wird es ein Prozentsatz der `font-size` des übergeordneten Elements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, wird es ein Prozentsatz der `width` des übergeordneten Elements sein.

Im nächsten Beispiel haben die beiden Paare von Boxen mit prozentualer und pixelweiser Größe dieselben Klassennamen. Die Boxen innerhalb jedes Paares sind jeweils `40%` und `200px` breit.

Der Unterschied ist, dass das zweite Set von zwei Boxen in einem Wrapper ist, der `400px` breit ist. Die zweite `200px` breite Box ist genauso breit wie die erste, aber die zweite `40%` Box ist jetzt `40%` von `400px` - viel schmaler als die erste!

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

Das nächste Beispiel hat Schriftgrößen, die in Prozent angegeben sind. Jedes `<li>` hat eine `font-size` von `80%`; daher werden die verschachtelten Listenelemente schrittweise kleiner, da sie ihre Größe vom übergeordneten Element erben.

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

Auch wenn viele Eigenschaften eine Länge oder einen Prozentsatz als Wert akzeptieren, akzeptieren manche nur eine Länge, beispielsweise {{cssxref("border-width")}}. Die Referenzseiten zu MDN-Eigenschaften detaillieren, welche Wertetypen sie akzeptieren. Wenn der zulässige Wert {{cssxref("length-percentage")}} einschließt, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der zulässige Wert nur `<length>` einschließt, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren zahlenlose Zahlen; ein Beispiel ist die `opacity`-Eigenschaft, die die Undurchsichtigkeit eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im untenstehenden Beispiel, versuchen Sie den Wert von `opacity` auf verschiedene Dezimalzahlen zwischen `0` und `1` zu ändern und beobachten Sie, wie die Box und ihr Inhalt mehr oder weniger undurchsichtig wird:

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
> Wenn Sie eine Zahl in CSS als Wert verwenden, sollte diese nicht in Anführungszeichen gesetzt werden.

## Farbe

Farbwerte können an vielen Stellen in CSS verwendet werden, egal ob Sie die Farbe von Text, Hintergründen, Rändern und vieles mehr angeben. Es gibt viele Möglichkeiten, Farben in CSS zu setzen, die Ihnen erlauben, viele aufregende Eigenschaften zu kontrollieren.

Das standardmäßige Farbsystem, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, die es ermöglichen, etwa 16,7 Millionen verschiedene Farben über eine Kombination von verschiedenen roten, grünen und blauen Kanälen mit 256 verschiedenen Werten pro Kanal darzustellen (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir zuerst die am häufigsten gesehenen Möglichkeiten zur Angabe von Farben betrachten: die Verwendung von Schlüsselwörtern, hexadezimalen und `rgb()`-Werten. Wir werden auch einen kurzen Blick auf zusätzliche Farb-Funktionen werfen, die Ihnen ermöglichen, sie zu erkennen, wenn Sie sie sehen oder mit verschiedenen Arten der Farbgebung zu experimentieren.

Sie werden wahrscheinlich eine Farbpalette auswählen und dann diese Farben – und Ihre bevorzugte Art, Farben anzugeben – im gesamten Projekt verwenden. Sie können verschiedene Farbmodelle mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt die gleiche Methode zur Deklaration von Farben für Konsistenz verwendet!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder „benannte Farben“) in vielen MDN-Codebeispielen sehen. Da der [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color)-Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie nicht häufig auf Produktionswebsites mit einer ausgefeilten Designsprache verwendet. Andererseits werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu sagen, welche Farbe erwartet wird, damit der Lernende sich auf den vermittelten Inhalt konzentrieren kann.

Im nächsten Beispiel versuchen Sie, mit verschiedenen Farb-Schlüsselwörtern zu spielen, um ein besseres Verständnis dafür zu bekommen, wie sie funktionieren. Sie können sie mit der [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color)-Referenzseite nachschlagen.

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

Der nächste Farbwerttyp, dem Sie wahrscheinlich begegnen werden, sind hexadezimale (Hex) Zahlen.

Hexadezimale Zahlen verwenden 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` ist. Jeder Hex-Farbwert besteht aus einem Hash-Symbol (`#`), gefolgt von sechs hexadezimalen Zeichen (`#ffc0cb`, zum Beispiel). Jedes **Paar** von hexadezimalen Zeichen repräsentiert einen der Kanäle einer RGB-Farbe – rot, grün und blau – und ermöglicht es uns, einen der 256 verfügbaren Werte für jeden zu spezifizieren (16 x 16 = 256).

Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, da Sie _jede_ RGB-Farbe mit ihnen darstellen können.

Im nächsten Beispiel, versuchen Sie, die Werte zu ändern, um zu sehen, wie sich die Farben ändern:

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
> Sie können Hex-Farbwerte mit drei statt sechs Zeichen geschrieben sehen. Dies ist eine Abkürzung, die verwendet werden kann, wenn die Zeichen in jedem Paar gleich sind. Zum Beispiel sind `#ff00ff` und `#f0f` äquivalent. Sie können auch Hex-Farbwerte mit acht (oder vier) Zeichen geschrieben sehen, wobei der vierte Wert die Alphatransparenz der vorherigen drei Werte darstellt – zum Beispiel `#ff00ff66`.

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Funktion drei Parameter, die die **rot**, **grün** und **blau**-Kanalwerte der Farben darstellen, mit einem optionalen vierten Wert, getrennt durch einen Schrägstrich (`/`), der die Opazität darstellt, ähnlich wie bei Hex-Werten. Der Unterschied zu RGB besteht darin, dass jeder Kanal nicht durch zwei Hexziffern, sondern durch eine Dezimalzahl von `0` bis `255` oder einen Prozentsatz von `0%` bis `100%` dargestellt wird (aber nicht eine Mischung aus den beiden).

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

Im nächsten Beispiel haben wir ein Hintergrundbild zum enthaltenen Block unserer farbigen Boxen hinzugefügt. Dann haben wir die Boxen so eingestellt, dass sie unterschiedliche Opazitätswerte haben – beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alphakanalwert kleiner ist. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe völlig transparent, während `1` sie völlig opak macht. Werte dazwischen geben Ihnen unterschiedliche Transparenzstufen.

Versuchen Sie, die Alphakanalwerte zu ändern, um zu sehen, wie sie die Farbwiedergabe beeinflussen.

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
> Einen Alphakanal auf eine Farbe zu setzen, hat einen wesentlichen Unterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir früher erwähnt haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin transparent, während die Verwendung von RGB mit einem Alphaparameter nur die spezifizierte Farbe transparent macht.

### Verwenden von Farbton zur Farbspezifikation

Wenn Sie über Schlüsselwörter, Hexadezimal und [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) für Farben hinausgehen möchten, können Sie erwägen, [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue) zu verwenden. Farbton ist der Wertetyp, der uns erlaubt, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen. Das Hauptkonzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) spezifizieren können, da die meisten Farbmodelle Farbtöne in einem {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt verschiedene Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue) Komponente enthalten, einschließlich [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) und [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch). Andere Farb-Funktionen, wie [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, siehe den [Leitfaden zum Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color), die [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften bietet, die Farbwerte verwenden.

### HWB

Ein guter Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) Funktion, die eine `srgb()` Farbe spezifiziert. Die drei Teile sind:

- **Farbton**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue) Wert zwischen `0` und `360`, der die Winkel um einen Farbkreis darstellt.
- **Weißgrad**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weiß) bis `100%` (voller Weißgrad).
- **Schwarzgrad**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von `0%` (kein Schwarz) bis `100%` (voller Schwarzgrad).

### HSL

Ähnlich zur [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) Funktion ist die [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Funktion, die ebenfalls eine `srgb()` Farbe spezifiziert. HSL verwendet `Farbton` in Verbindung mit `Sättigung` und `Helligkeit`:

- **Farbton**: Auch hier repräsentiert dies den Grundton der Farbe.
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von `0`–`100%`, wobei `0` keine Farbe ist (es erscheint als Grauton), und `100%` ist volle Farbsättigung.
- **Helligkeit**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von `0`–`100%`, wobei `0` keine Helligkeit ist (es erscheint völlig schwarz) und `100%` volle Helligkeit ist (es erscheint völlig weiß).

Der [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbwert hat auch einen optionalen vierten Wert, getrennt von der Farbe durch einen Schrägstrich (`/`), der die Alphatransparenz darstellt.

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

Genau wie bei `rgb()` können Sie ein Alphaparameter an `hsl()` übergeben, um die Opazität zu spezifizieren:

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

Bevor Sie weitermachen, versuchen Sie, die vorherigen beiden Beispiele zu ändern, um einige auf Farbtönen basierende Farbwerte zu verwenden. Versuchen Sie, den Farbtonwert in jedem Fall zu variieren, um zu sehen, wie dies die Grundfarbe beeinflusst, und dann versuchen Sie, die anderen Parameter zu variieren.

## Bilder

Der [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()` Funktion enthalten wird, oder ein Gradient.

Im Beispiel unten verwenden wir ein Bild und einen Gradient als Werte für die CSS `background-image`-Eigenschaft.

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
> Es gibt einige andere mögliche Werte für `<image>`, jedoch sind diese neuer und haben derzeit eine schlechte Browserunterstützung. Schauen Sie auf der Seite bei MDN für den [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Datentyp nach, wenn Sie darüber lesen möchten.

Sie werden über Bildwerte ausführlicher in unserem späteren [Hintergrund- und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) Artikel lernen.

## Position

Der [`<position>`](/de/docs/Web/CSS/Reference/Values/position_value) Wertetyp repräsentiert ein Set von 2D-Koordinaten, das verwendet wird, um ein Element wie ein Hintergrundbild zu positionieren (über [`background-position`](/de/docs/Web/CSS/Reference/Properties/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` verwenden, um Elemente mit spezifischen Grenzen einer 2D-Box auszurichten, sowie Längen, die Offsets von den oberen und linken Kanten der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten – der erste legt die Position horizontal fest, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere standardmäßig auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild `60px` vom oberen Rand und nach `rechts` des Containers mit einem Schlüsselwort positioniert.

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

In den oben genannten Beispielen haben wir Orte gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>` Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Als solche sind sie nicht zitiert – sie werden nicht als Zeichenketten behandelt.

Es gibt Orte, an denen Sie Zeichenketten in CSS verwenden. Zum Beispiel, [wenn Sie generierten Inhalt spezifizieren](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu demonstrieren, dass es sich um eine Zeichenkette handelt. Im Beispiel unten verwenden wir unquoted Farb-Schlüsselwörter zusammen mit einer zitierten generierten Inhaltszeichenkette.

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

In der Programmierung ist eine Funktion ein Codeabschnitt, der eine bestimmte Aufgabe erfüllt. Funktionen sind nützlich, weil man den Code einmal schreiben kann und ihn dann viele Male wiederverwenden kann, anstatt die gleiche Logik immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern kommen auch mit praktischen eingebauten Funktionen für allgemeine Aufgaben, sodass man sie nicht selbst von Grund auf neu schreiben muss.

CSS hat auch [Funktionen](/de/docs/Web/CSS/Reference/Values/Functions), die auf ähnliche Weise wie Funktionen in anderen Sprachen arbeiten. Tatsächlich haben wir CSS-Funktionen bereits im [Farben](#farbe) Abschnitt oben gesehen, wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl).

Neben dem Anwenden von Farben können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun. Zum Beispiel sind [Transform-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#transform_functions) ein gewöhnlicher Weg, um Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren. Sie können [`translate()`](/de/docs/Web/CSS/Reference/Values/transform-function/translate) sehen, um etwas horizontal oder vertikal zu bewegen, [`rotate()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate), um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/Reference/Values/transform-function/scale), um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, werden Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Dauern beginnen. Wenn Sie möchten, dass diese Werte basierend auf anderen Werten ändern, müssen Sie etwas Mathematik machen. Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen Zahl hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS hat Unterstützung für [Mathematische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions), die es uns ermöglichen, Berechnungen in CSS durchzuführen, anstatt sich auf statische Werte zu verlassen oder die Mathematik in JavaScript zu erledigen. Eine der häufigsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/Reference/Values/calc), die es Ihnen erlaubt, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Zum Beispiel, sagen wir, wir möchten die Breite eines Elements so einstellen, dass es `20%` seines übergeordneten Containers plus `100px` beträgt. Wir können diesen Breitewert nicht mit einem statischen Wert spezifizieren – wenn das übergeordnete Element eine Prozentbreite (oder eine relative Einheit wie `em` oder `rem`) verwendet, dann variiert es je nachdem, in welchem Kontext es verwendet wird und andere Faktoren wie das Gerät des Benutzers oder die Fensterbreite des Browsers. Allerdings können wir `calc()` verwenden, um die Breite des Elements so einzustellen, dass es `20%` des übergeordneten Containers plus `100px` beträgt. Die `20%` basieren auf der Breite des übergeordneten Containers (`.wrapper`), und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/Reference/Values/min), [`max()`](/de/docs/Web/CSS/Reference/Values/max), und [`clamp()`](/de/docs/Web/CSS/Reference/Values/clamp); diese lassen Sie respektiv den kleinsten, größten oder mittleren Wert aus einem Satz von Werten wählen. Erkunden Sie unsere [CSS-Wert-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) Referenzseite, um alle verfügbaren CSS-Funktionen zu überprüfen.

Es ist nützlich, über CSS-Funktionen Bescheid zu wissen, damit Sie sie erkennen, wenn Sie sie sehen. Sie sollten beginnen, mit ihnen in Ihren Projekten zu experimentieren – sie werden Ihnen helfen, benutzerdefinierten oder sich wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erhalten können.

## Zusammenfassung

Dies war ein schneller Durchlauf der meisten gängigen Wertetypen und Einheiten, auf die Sie stoßen könnten. Sie können sich alle verschiedenen Typen auf der [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul-Seite ansehen – Sie werden viele dieser Typen im Einsatz antreffen, während Sie diese Lektionen durchgehen.

Das Wichtigste, was Sie sich merken sollten, ist, dass jede Eigenschaft eine definierte Liste von erlaubten Wertetypen hat und jeder Wertetyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Einzelheiten hier bei MDN nachschlagen. Zum Beispiel, zu verstehen, dass [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Ihnen auch ermöglicht, einen Farbverlauf zu erstellen, ist nützlicher, vielleicht nicht offensichtlicher Kenntnis.

Im nächsten Artikel stellen wir Ihnen einige Tests vor, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen über Werte und Einheiten verstanden und behalten haben, die wir Ihnen zur Verfügung gestellt haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}
