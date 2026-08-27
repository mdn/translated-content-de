---
title: CSS Werte und Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), die wiederum aus Eigenschaften und Werten bestehen.
Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf.
In dieser Lektion werden wir uns einige der am häufigsten verwendeten Wertetypen ansehen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) hat einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >HTML-Grundsyntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS Grundsyntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen annehmen können und was diese Typen repräsentieren.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenfolgen und Identifikatoren sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und der Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

CSS-Werte definieren, welche Werttypen für jede CSS-Eigenschaft gültig sind. Beispielsweise können Sie Farben für die Werte von {{cssxref("color")}} oder {{cssxref("border-color")}} angeben, jedoch keine Längen oder Prozentsätze.

In den CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie von spitzen Klammern (`<`, `>`) umgeben sind — wie zum Beispiel {{cssxref("&lt;color&gt;")}} oder {{cssxref("length")}}. Wenn Sie sehen, dass der Wertetyp `<color>` für eine bestimmte Eigenschaft gültig ist, bedeutet dies, dass Sie jeden gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie auf der {{cssxref("&lt;color&gt;")}}-Referenzseite aufgeführt.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen {{cssxref("&lt;color&gt;")}}-Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welchen Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber anhand des Kontexts sollte klar sein, welches Sie sich ansehen. Wenn Sie unsicher sind, versuchen Sie, es auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass in CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Wesentlichen austauschbar — wenn Sie etwas in CSS als Datentyp bezeichnet sehen, ist dies nur eine schicke Art zu sagen Wertetyp. Der Begriff _Wert_ bezieht sich auf jeden speziellen Ausdruck, der von einem Wertetyp unterstützt wird und den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Textfarbe unserer Überschrift mit einem Farbkeyword und den Hintergrund mit einem anderen Farbwerttyp — der `rgb()`-Funktion festgelegt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS definiert eine Sammlung von zulässigen Werten. Das bedeutet, dass wenn Sie `<color>` als gültig sehen, müssen Sie sich nicht fragen, welcher der verschiedenen Farbwerttypen verwendet werden kann — Keywords, Hexwerte, `rgb()`-Funktionen usw. Sie können _jede_ verfügbare `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browser-Unterstützung. Wenn Sie beispielsweise die Seite für {{cssxref("&lt;color&gt;")}} ansehen, sehen Sie, dass der Abschnitt zur Browser-Kompatibilität die verschiedenen Arten von Farbwerten und ihre Unterstützung auflistet.

Lassen Sie uns einige der Wert- und Einheitstypen ansehen, denen Sie häufig begegnen, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentsätze

Es gibt verschiedene numerische Wertetypen, die Sie möglicherweise in CSS verwenden. Die folgenden sind alle als numerisch eingestuft:

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
        Ein <code>&#x3C;number></code> repräsentiert eine Dezimalzahl — sie kann
        oder kann keinen Dezimalpunkt mit einem Bruchteil haben. Zum
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
        Eine <code>&#x3C;dimension></code> ist eine <code>&#x3C;number></code> mit einer
        angehängten Einheit. Zum Beispiel, <code>45deg</code>, <code>5s</code>,
        oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine Oberkategorie,
        die die {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/Reference/Values/angle">&#x3C;angle></a></code
        >, <code><a href="/de/docs/Web/CSS/Reference/Values/time">&#x3C;time></a></code
        >, und
        <code
          ><a href="/de/docs/Web/CSS/Reference/Values/resolution">&#x3C;resolution></a></code
        >
        Typen beinhaltet.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Eine <code>&#x3C;percentage></code> repräsentiert einen Bruchteil eines anderen
        Werts. Zum Beispiel, <code>50%</code>. Prozentwerte sind immer
        relativ zu einer anderen Menge. Zum Beispiel ist die Länge eines Elements
        relativ zur Länge seines Elternelements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relativ und absolut. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absoluten** Längeneinheiten — sie sind nicht relativ zu etwas anderem und werden allgemein als immer gleich groß angesehen.

| Einheit | Name               | Entsprechung                 |
| ------- | ------------------ | ---------------------------- |
| `cm`    | Zentimeter         | 1cm = 37.8px = 25.2/64in     |
| `mm`    | Millimeter         | 1mm = 1/10 eines Zentimeters |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines Zentimeters  |
| `in`    | Zoll               | 1in = 2.54cm = 96px          |
| `pc`    | Picas              | 1pc = 1/6 von 1in            |
| `pt`    | Punkte             | 1pt = 1/72 von 1in           |
| `px`    | Pixel              | 1px = 1/96 von 1in           |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck und nicht für die Bildschirmausgabe verwendet werden. Zum Beispiel verwenden wir `cm` (Zentimeter) normalerweise nicht auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

Beachten Sie, dass `1px` nicht unbedingt einem physischen Gerätepixel entspricht. Auf HD-Displays kann es sich über mehrere physische Pixel erstrecken.
Ebenso entspricht `1cm` in CSS oft nicht einem hundertstel Meter im [SI](https://en.wikipedia.org/wiki/International_System_of_Units). Auf einem großen Fernsehbildschirm ist es typischerweise länger als das.
Die Längen sind perceptual: `16px` sieht auf einem Telefon, Laptop oder TV-Bildschirm aus typischer Betrachtungsentfernung ungefähr gleich aus.

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des Elternelements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe bzw. Breite des Viewports.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie bei sorgfältiger Planung die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skalieren können. Für eine vollständige Liste der verfügbaren relativen Einheiten siehe die Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der gebräuchlichsten relativen Einheiten erkunden.

#### Ein Beispiel erkunden

Im folgenden Beispiel sehen Sie, wie sich einige relative und absolute Längeneinheiten verhalten. Das erste Feld hat eine in Pixeln festgelegte {{cssxref("width")}}. Als absolute Einheit bleibt diese Breite gleich, egal was sich sonst ändert.

Das zweite Feld hat eine Breite, die in `vw` (Viewport-Breite) Einheiten festgelegt ist. Dieser Wert ist relativ zur Breite des Viewports, und so sind `10vw` 10 Prozent der Breite des Viewports. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Feldes ändern. Da dieses Beispiel jedoch mit einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) in die Seite eingebettet ist, wird dies nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie [das Beispiel ausprobieren, nachdem Sie es in einem eigenen Browser-Tab geöffnet haben](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Feld verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf das enthaltende {{htmlelement("div")}} gesetzt, das eine Klasse `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em` und Sie werden sehen, dass die Schriftgröße aller Elemente zunimmt, aber nur das letzte Element wird breiter, da seine Breite relativ zur Schriftgröße ist.

Versuchen Sie, nach den obigen Anweisungen zu handeln und dann auf andere Weise mit den Werten zu experimentieren, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die beiden relativen Längen, denen Sie wahrscheinlich am häufigsten begegnen werden, wenn Sie alles von Boxen bis zu Text in der Größe ändern. Es lohnt sich zu verstehen, wie diese funktionieren, und der Unterschied zwischen ihnen, besonders wenn Sie zu komplizierteren Themen wie [Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) kommen. Das folgende Beispiel bietet eine Demonstration.

Das nächste Beispiel ist ein Satz verschachtelter Listen — wir haben zwei Listen insgesamt und beide Beispiele haben dasselbe HTML. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Zuerst setzen wir `16px` als Schriftgröße auf dem `<html>`-Element.

Zur Wiederholung, die `em`-Einheit bedeutet **"die Schriftgröße meines Elternelements"**, wenn sie für `font-size` verwendet wird, und **"meine eigene Schriftgröße"**, wenn sie für etwas anderes verwendet wird. Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` nehmen ihre Größe von ihrem Elternteil. Also wird jede aufeinanderfolgende Verschachtelungsebene progressiv größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat — 1.3 mal die Schriftgröße ihres Elternelements.

Zur Wiederholung bedeutet die `rem`-Einheit **"die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größe vom Wurzelelement (`<html>`). Dies bedeutet, dass jede aufeinanderfolgende Verschachtelungsebene nicht ständig größer wird.

Wenn Sie jedoch die `font-size` des `<html>`-Elements in der CSS ändern, werden Sie sehen, dass sich alles andere im Verhältnis ändert — sowohl `rem`- als auch `em`-großer Text. Versuchen Sie dies jetzt im MDN Playground.

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

In vielen Fällen wird ein Prozentsatz auf die gleiche Weise wie eine Länge behandelt. Das Besondere an Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert festgelegt werden. Wenn Sie beispielsweise die `font-size` eines Elements als Prozentsatz festlegen, wird dies ein Prozentsatz der `font-size` des Elternelements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, wird dies ein Prozentsatz der `width` des Elternelements sein.

Im nächsten Beispiel haben die beiden Paare von prozentualer Größe und pixelgroßen Boxen dieselben Klassennamen. Die Boxen innerhalb jedes Paars sind jeweils `40%` und `200px` breit.

Der Unterschied ist, dass das zweite Set von zwei Boxen sich in einem Wrapper befindet, der `400px` breit ist. Die zweite `200px` breite Box ist genauso breit wie die erste, jedoch ist die zweite `40%`-Box nun `40%` von `400px` — viel schmaler als die erste!

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

Das nächste Beispiel hat Schriftgrößen, die in Prozent festgelegt sind. Jedes `<li>` hat eine `font-size` von `80%`; daher werden die verschachtelten Listenelemente progressiv kleiner, da sie ihre Größen von ihrem Elternelement erben.

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

Während viele Eigenschaften sowohl eine Länge als auch einen Prozentsatz als Wert akzeptieren, akzeptieren einige nur eine Länge, beispielsweise {{cssxref("border-width")}}. Auf den Eigenschaftsreferenzseiten von MDN wird im Detail beschrieben, welche Wertetypen sie akzeptieren. Wenn der zulässige Wert {{cssxref("length-percentage")}} umfasst, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der zulässige Wert nur `<length>` umfasst, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren zahlenlose Zahlen; ein Beispiel ist die `opacity`-Eigenschaft, die die Opazität eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im folgenden Beispiel, versuchen Sie den Wert von `opacity` zu ändern, um verschiedene Dezimalwerte zwischen `0` und `1` zu testen und zu sehen, wie die Box und ihre Inhalte mehr oder weniger undurchsichtig werden:

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

Farbwerte können in vielen Bereichen von CSS verwendet werden, egal ob Sie die Farbe von Text, Hintergründen, Rahmen und vielem mehr angeben.
Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, sodass Sie viele aufregende Eigenschaften steuern können.

Das Standardsystem für Farben, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, wodurch etwa 16.7 Millionen verschiedene Farben über eine Kombination von verschiedenen Rot-, Grün- und Blaukanälen mit 256 verschiedenen Werten pro Kanal angezeigt werden können (256 x 256 x 256 = 16,777,216).

In diesem Abschnitt werden wir uns zuerst die gebräuchlichsten Methoden zur Angabe von Farben ansehen: mit Schlüsselwörtern, Hexadezimalwerten und `rgb()`-Werten.
Wir werden auch kurz auf zusätzliche Farbfunktionsweisen eingehen, sodass Sie diese erkennen können, wenn Sie sie sehen oder mit verschiedenen Methoden der Farbgebung experimentieren möchten.

Sie werden wahrscheinlich eine Farbpalette erstellen und dann diese Farben — und Ihre bevorzugte Methode zur Farbdeklaration — während Ihres Projekts verwenden.
Sie können Farbmodelle mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt für Konsistenz dieselbe Methode zur Deklaration von Farben verwendet!

### Farb-Keywords

Sie werden die Farb-Keywords (oder "benannte Farben") in vielen MDN-Codebeispielen sehen. Da der {{cssxref("named-color")}}-Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie nicht häufig auf Produktionswebsites mit einer ausgeklügelten Designsprache verwendet. Auf der anderen Seite werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu zeigen, welche Farbe erwartet wird, damit der Lernende sich auf den vermittelten Inhalt konzentrieren kann.

Im nächsten Beispiel versuchen Sie mit verschiedenen Farb-Keywords zu spielen, um eine bessere Vorstellung davon zu bekommen, wie sie funktionieren. Sie können sie mithilfe der {{cssxref("named-color")}}-Referenzseite nachschlagen.

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

Der nächste Farbwerttyp, dem Sie wahrscheinlich begegnen werden, sind hexadezimale (hex) Codes.

Hexadezimale Zahlen verwenden 16 Zeichen von `0-9` und `a-f`, sodass die gesamte Reihe `0123456789abcdef` ist. Jeder Hex-Farbwert besteht aus einem Hash- oder Pfund-Symbol (`#`) gefolgt von sechs hexadezimalen Zeichen (`#ffc0cb`, zum Beispiel). Jedes **Paar** hexadezimaler Zeichen repräsentiert einen der Kanäle einer RGB-Farbe — Rot, Grün und Blau — und erlaubt uns, einen der 256 verfügbaren Werte für jeden (16 x 16 = 256) zu spezifizieren.

Diese Werte sind weniger intuitiv als Keywords zur Definition von Farben, aber sie sind viel vielseitiger, da Sie damit _jede_ RGB-Farbe darstellen können.

Im nächsten Beispiel versuchen Sie, die Werte zu ändern, um zu sehen, wie die Farben variieren:

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
> Sie könnten hexadezimale Farbwerte sehen, die mit drei Zeichen anstelle von sechs geschrieben sind. Dies ist eine Abkürzung, die verwendet werden kann, wenn die Zeichen in jedem Paar gleich sind. Zum Beispiel, `#ff00ff` und `#f0f` sind gleichwertig. Sie könnten auch hexadezimale Farbwerte finden, die mit acht (oder vier) Zeichen geschrieben sind, wobei der vierte Wert die Alpha-Transparenz der vorherigen drei Werte repräsentiert — zum Beispiel `#ff00ff66`.

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die {{cssxref("color_value/rgb")}}-Funktion drei Parameter, die **Rot**-, **Grün**- und **Blau**kanalwerte der Farben repräsentieren, mit einem optionalen vierten Wert, der durch einen Slash (`/`) getrennt ist und die Opazität darstellt, ähnlich wie Hex-Werte. Der Unterschied zu RGB ist, dass jeder Kanal nicht durch zwei hexadezimale Ziffern, sondern durch eine Dezimalzahl zwischen `0` und `255` oder einen Prozentsatz zwischen `0%` und `100%` repräsentiert wird (jedoch keine Mischung der beiden).

Schreiben wir unser letztes Beispiel mit RGB-Farben neu:

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

Im nächsten Beispiel haben wir dem enthaltenden Block unserer farbigen Boxen ein Hintergrundbild hinzugefügt. Wir haben dann die Boxen mit unterschiedlichen Opazitätswerten versehen — beachten Sie, wie der Hintergrund durchscheint, wenn der Alpha-Kanalwert kleiner ist. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen geben Ihnen unterschiedliche Transparenzstufen.

Ändern Sie die Alpha-Kanal-Werte, um zu sehen, wie sie die Farbausgabe beeinflussen.

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
> Wenn Sie einen Alpha-Kanal auf einer Farbe setzen, gibt es einen wichtigen Unterschied zu der Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir zuvor erwähnt haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin transparent, während die Verwendung von RGB mit einem Alpha-Parameter nur die Farbe, die Sie spezifizieren, transparent macht.

### Verwendung von Farbnuancen zur Farbdefinition

Wenn Sie über Schlüsselwörter, Hexadezimal und {{cssxref("color_value/rgb")}} für Farben hinausgehen möchten, könnten Sie versuchen, {{cssxref("hue")}} zu verwenden.
Farbnuance ist der Wertetyp, der es ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. festzustellen.
Das Schlüsselkonzept ist, dass Sie eine Farbnuance in einem {{cssxref("angle")}} angeben können, weil die meisten der Farbmodelle Farbnuancen mit einem {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt mehrere Farbfunktionsmöglichkeiten, die eine {{cssxref("hue")}}-Komponente enthalten, einschließlich {{cssxref("color_value/hsl")}}, {{cssxref("color_value/hwb")}}, und {{cssxref("color_value/lch")}}. Andere Farbfunktionsmöglichkeiten, wie {{cssxref("color_value/lab")}}, definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich die [Anwendung von Farbe auf HTML-Elemente mithilfe von CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color) Leitfaden, die {{cssxref("&lt;color&gt;")}}-Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors) an, das einen Überblick über alle Farbtypen in CSS bietet und die Eigenschaften, die Farbwerte verwenden.

### HWB

Ein großartiger Ausgangspunkt für die Verwendung von Farbnuancen in CSS ist die {{cssxref("color_value/hwb")}}-Funktion, die eine `srgb()`-Farbe spezifiziert.
Die drei Teile sind:

- **Hue**: Der Grundfarbton der Farbe. Dies nimmt einen {{cssxref("hue")}}-Wert zwischen `0` und `360` an, der die Winkel um einen Farbkreis repräsentiert.
- **Whiteness**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weiß) bis `100%` (vollständiges Weiß) an.
- **Blackness**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von `0%` (kein Schwarz) bis `100%` (vollständiges Schwarz) an.

### HSL

Ähnlich der {{cssxref("color_value/hwb")}}-Funktion ist die {{cssxref("color_value/hsl")}}-Funktion, die auch eine `srgb()`-Farbe spezifiziert.
HSL verwendet `Hue`, zusätzlich zu `Saturation` und `Lightness`:

- **Hue**: Wiederum repräsentiert dies den Grundfarbton der Farbe.
- **Saturation**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von `0`–`100%` an, wobei `0` keine Farbe ist (sie wird als Graustufe erscheinen), und `100%` volle Farbintensität ist.
- **Lightness**: Wie hell oder hell ist die Farbe? Dies nimmt einen Wert von `0`–`100%` an, wobei `0` kein Licht ist (sie wird vollständig schwarz erscheinen) und `100%` volles Licht ist (sie wird vollständig weiß erscheinen).

Der {{cssxref("color_value/hsl")}}-Farbwert hat auch einen optionalen vierten Wert, der durch einen Slash (`/`) von der Farbe getrennt ist und die Alphatransparenz repräsentiert.

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

Genau wie bei `rgb()` können Sie ein Alpha-Parameter an `hsl()` übergeben, um die Opazität anzugeben:

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

Bevor Sie weitermachen, versuchen Sie, die vorherigen zwei Beispiele zu ändern, um einige farbbasierte Farbwerte zu verwenden. Versuchen Sie, den Farbwert in jedem Fall zu variieren, um zu sehen, wie sich dies auf die Grundfarbe auswirkt, und dann versuchen Sie, die anderen Parameter ebenfalls zu ändern.

## Bilder

Der {{cssxref("image")}}-Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion angegeben wird, oder ein Verlauf.

Im folgenden Beispiel verwenden wir ein Bild und einen Verlauf als Werte für die CSS `background-image`-Eigenschaft.

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
> Es gibt einige andere mögliche Werte für `<image>`, diese sind jedoch neuer und haben derzeit eine schlechte Browserunterstützung. Schauen Sie sich die Seite auf MDN für den {{cssxref("image")}}-Datentyp an, wenn Sie mehr darüber lesen möchten.

Sie werden später mehr über Bildwerte in unserem Artikel [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) lernen.

## Position

Der {{cssxref("&lt;position&gt;")}}-Wertetyp repräsentiert ein Set von 2D-Koordinaten, die verwendet werden, um ein Element wie ein Hintergrundbild (über {{cssxref("background-position")}}) zu positionieren. Er kann Keywords wie `top`, `left`, `bottom`, `right` und `center` annehmen, um Elemente mit bestimmten Begrenzungen einer 2D-Box auszurichten, und Längen, die Verschiebungen von den oberen und linken Kanten der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste setzt die Position horizontal, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` standardmäßig.

Im folgenden Beispiel haben wir ein Hintergrundbild `60px` von oben und rechts des Containers mit einem Schlüsselwort positioniert.

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

## Zeichenfolgen und Identifikatoren

In den obigen Beispielen haben wir gesehen, wo Keywords als Wert verwendet werden (zum Beispiel `<color>`-Keywords wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Keywords werden genauer als _Identifikatoren_ beschrieben, ein spezieller Wert, den CSS versteht. Daher werden sie nicht in Anführungszeichen gesetzt — sie werden nicht als Zeichenfolgen behandelt.

Es gibt Orte, an denen Sie in CSS Zeichenfolgen verwenden. Beispielsweise [bei der Spezifikation von generiertem Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall ist der Wert in Anführungszeichen gesetzt, um zu zeigen, dass es sich um eine Zeichenfolge handelt. Im folgenden Beispiel verwenden wir unquotierte Farb-Keywords zusammen mit einer gequoteten generierten Inhaltzeichenfolge.

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

In der Programmierung ist eine Funktion ein Codeabschnitt, der eine spezifische Aufgabe erledigt.
Funktionen sind nützlich, weil Sie Code einmal schreiben und dann viele Male wiederverwenden können, anstatt dieselbe Logik immer wieder zu schreiben.
Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern bieten auch bequeme eingebaute Funktionen für allgemeine Aufgaben, sodass Sie diese nicht selbst von Grund auf schreiben müssen.

CSS hat auch [Funktionen](/de/docs/Web/CSS/Reference/Values/Functions), die ähnlich wie Funktionen in anderen Sprachen arbeiten.
Tatsächlich haben wir bereits im [Farbe](#farbe) Abschnitt oben CSS-Funktionen gesehen, wie {{cssxref("color_value/rgb")}} und {{cssxref("color_value/hsl")}}.

Abgesehen von der Farbgebung, können Sie in CSS Funktionen verwenden, um viele andere Dinge zu tun.
Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#transform_functions) eine häufige Möglichkeit, um Elemente auf einer Seite zu verschieben, zu drehen und zu skalieren.
Sie könnten {{cssxref("transform-function/translate")}} sehen, um etwas horizontal oder vertikal zu bewegen, {{cssxref("transform-function/rotate")}}, um etwas zu drehen, oder {{cssxref("transform-function/scale")}}, um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Dauerzeiten.
Wenn Sie möchten, dass sich diese Werte auf der Grundlage anderer Werte ändern, müssen Sie etwas Mathematik betreiben.
Sie könnten den Prozentsatz eines Wertes berechnen oder einer Zahl eine andere Zahl hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions), mit denen wir in CSS Berechnungen durchführen können, anstatt uns auf statische Werte zu verlassen oder die Mathematik in JavaScript zu machen.
Eine der häufigsten mathematischen Funktionen ist {{cssxref("calc()")}}, mit der Sie Operationen wie Addition, Subtraktion, Multiplikation und Division durchführen können.

Zum Beispiel sagen wir, wir möchten die Breite eines Elements auf `20%` seines Elternelements plus `100px` setzen.
Wir können diese Breite nicht mit einem statischen Wert angeben — wenn der Elternteil eine prozentuale Breite (oder eine relative Einheit wie `em` oder `rem`) verwendet, wird sie je nach den verwendeten Umständen variieren, sowie anderen Faktoren wie dem Gerät des Benutzers oder der Fensterbreite des Browsers.
Jedoch können wir `calc()` verwenden, um die Breite des Elements auf `20%` seines Elternelements plus `100px` zu setzen.
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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie {{cssxref("min()")}}, {{cssxref("max()")}}, und {{cssxref("clamp()")}}; diese lassen Sie den kleinsten, größten oder mittleren Wert eines Wertesatzes auswählen. Erforschen Sie unsere [CSS-Wertfunktionen](/de/docs/Web/CSS/Reference/Values/Functions) Referenzseite, um alle verfügbaren CSS-Funktionen zu erkunden.

Das Wissen über CSS-Funktionen ist nützlich, damit Sie sie erkennen, wenn Sie auf sie stoßen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie werden Ihnen helfen, benutzerdefinierten oder wiederholten Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erhalten können.

## Zusammenfassung

Dies war ein kurzer Durchlauf der häufigsten Wert- und Einheitstypen, denen Sie begegnen könnten. Sie können sich alle verschiedenen Typen auf der [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modulseite ansehen — viele davon werden Ihnen in der Praxis begegnen, während Sie diese Lektionen durcharbeiten.

Das Wichtigste, an das Sie sich erinnern sollten, ist, dass jede Eigenschaft eine definierte Liste zulässiger Werttypen hat und jeder Werttyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Angaben hier auf MDN nachschlagen. Zum Beispiel, das Verständnis, dass {{cssxref("image")}} Ihnen auch erlaubt, einen Farbverlauf zu erstellen, ist nützlich, aber vielleicht nicht offensichtlich.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu prüfen, wie gut Sie das Verständnis und die Informationen zu Werten und Einheiten, die wir bereitgestellt haben, behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}
