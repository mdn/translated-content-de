---
title: CSS-Werte und -Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen.
Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten zulässig ist.
In dieser Lektion werden wir uns einige der am häufigsten verwendeten Wertetypen ansehen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) hat einen Abschnitt zur Syntax, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lernen Sie
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
          <li>Verstehen, was absolute und relative Einheiten sind und die Unterschiede zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

CSS-Werte definieren, welche Werttypen für jede CSS-Eigenschaft gültig sind. Beispielsweise können Sie für die Werte von {{cssxref("color")}} oder {{cssxref("border-color")}} Farben angeben, jedoch keine Längen oder Prozentsätze.

In den CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie von spitzen Klammern (`<`, `>`) umgeben sind — wie [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jeden gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie er auf der Referenzseite für [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) aufgeführt ist.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welchen sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber es sollte aus dem Kontext klar sein, welchen Sie sich ansehen. Wenn Sie unsicher sind, versuchen Sie, nach dem Begriff auf MDN zu suchen.

> [!NOTE]
> Sie werden CSS-Wertetypen als _Datentypen_ bezeichnet sehen. Die Begriffe sind im Grunde austauschbar — wenn Sie etwas in CSS als Datentyp bezeichnet sehen, ist das eigentlich nur eine elegante Art zu sagen "Wertetyp". Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Werttyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Textfarbe unserer Überschrift mit einem Farbschlüsselwort und den Hintergrund mit einem anderen Typ von Farbwert — der `rgb()`-Funktion — festgelegt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Werttyp in CSS definiert eine Sammlung erlaubter Werte. Das bedeutet, dass wenn Sie `<color>` als gültig sehen, Sie sich nicht fragen müssen, welche der verschiedenen Typen von Farbwerten verwendet werden können — Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browser-Unterstützung. Zum Beispiel, wenn Sie die Seite für [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) aufrufen, werden Sie sehen, dass der Abschnitt zur Browser-Kompatibilität verschiedene Arten von Farbwerten und deren Unterstützung auflistet.

Schauen wir uns nun einige der Arten von Werten und Einheiten an, die Sie häufig antreffen können, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentsätze

Es gibt verschiedene numerische Wertetypen, die Sie möglicherweise in CSS verwenden werden. Die folgenden sind alle als numerisch klassifiziert:

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
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar — sie kann oder kann nicht einen Dezimalpunkt mit einem Bruchteil haben. Zum
        Beispiel <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/Reference/Values/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Ein <code>&#x3C;dimension></code> ist ein
        <code>&#x3C;number></code> mit einer angehängten Einheit. Zum Beispiel,
        <code>45deg</code>, <code>5s</code> oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine Oberkategorie,
        die die {{cssxref("length")}},
        <code><a href="/de/docs/Web/CSS/Reference/Values/angle">&#x3C;angle></a></code
        >,
        <code><a href="/de/docs/Web/CSS/Reference/Values/time">&#x3C;time></a></code
        > und
        <code
          ><a href="/de/docs/Web/CSS/Reference/Values/resolution">&#x3C;resolution></a></code
        >
        Typen einschließt.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> stellt einen Bruchwert eines anderen
        Wertes dar. Zum Beispiel <code>50%</code>. Prozentwerte sind immer
        relativ zu einer anderen Quantität. Zum Beispiel ist die Länge eines
        Elements relativ zur Länge des übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, den Sie am häufigsten antreffen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. In CSS gibt es zwei Arten von Längen — relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und werden in der Regel als immer gleich groß angesehen.

| Einheit | Name               | Entspricht               |
| ------- | ------------------ | ------------------------ |
| `cm`    | Zentimeter         | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter         | 1mm = 1/10 von 1cm       |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 von 1cm        |
| `in`    | Zoll               | 1in = 2.54cm = 96px      |
| `pc`    | Pica               | 1pc = 1/6 von 1in        |
| `pt`    | Punkt              | 1pt = 1/72 von 1in       |
| `px`    | Pixel              | 1px = 1/96 von 1in       |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck verwendet werden, anstatt für die Bildschirmdarstellung. Zum Beispiel verwenden wir normalerweise keine `cm` (Zentimeter) auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

Beachten Sie, dass `1px` nicht unbedingt einem physischen Geräte-Pixel entspricht. Auf HD-Displays kann es mehrere physische Pixel überspannen.
Ähnlich entspricht `1cm` in CSS oft nicht einem Hundertstel eines [SI](https://en.wikipedia.org/wiki/International_System_of_Units)-Meters. Auf einem großen Fernseher ist es normalerweise länger als das.
Die Längen sind wahrnehmbar: `16px` sieht auf einem Telefon, Laptop oder Fernseher bei typischer Betrachtungsentfernung ungefähr gleich aus.

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` beziehen sich auf die Höhe und Breite des Ansichtsfensters.

Der Vorteil der Verwendung von relativen Einheiten besteht darin, dass Sie mit etwas sorgfältiger Planung die Größe von Text oder anderen Elementen so skalieren können, dass sie relativ zu allem anderen auf der Seite ist. Für eine vollständige Liste der verfügbaren relativen Einheiten, siehe die Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der gängigsten relativen Einheiten untersuchen.

#### Ein Beispiel erkunden

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Das erste Kästchen hat eine {{cssxref("width")}}, die in Pixeln festgelegt ist. Als absolute Einheit bleibt diese Breite gleich, egal was sich sonst ändert.

Das zweite Kästchen hat eine Breite, die in `vw` (Ansichtsfensterbreite) Einheiten festgelegt ist. Dieser Wert ist relativ zur Ansichtsfensterbreite, und `10vw` sind 10 Prozent der Breite des Ansichtsfensters. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich auch die Größe des Kastens ändern. Dieses Beispiel ist jedoch in die Seite mit einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) eingebettet, also funktioniert das so nicht. Um dies in Aktion zu sehen, müssen Sie [das Beispiel ausprobieren, nachdem Sie es in einem eigenen Browsertab geöffnet haben](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Kästchen verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umgebenden {{htmlelement("div")}} festgelegt, der eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em`, und Sie werden sehen, dass sich die Schriftgröße aller Elemente erhöht, aber nur das letzte Element wird breiter, da seine Breite relativ zu dieser Schriftgröße ist.

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

`em` und `rem` sind die zwei relativen Längen, die Sie bei der Größenanpassung von allem häufig antreffen werden, von Kästen bis hin zu Text. Es lohnt sich zu verstehen, wie diese funktionieren und die Unterschiede zwischen ihnen, insbesondere wenn Sie zu komplexeren Themen wie dem [Text-Styling](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) übergehen. Das folgende Beispiel bietet eine Demonstration.

Das nächste Beispiel ist eine Reihe verschachtelter Listen — wir haben zwei Listen insgesamt und beide Beispiele haben dasselbe HTML. Der einzige Unterschied ist, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Zunächst stellen wir `16px` als Schriftgröße für das `<html>`-Element ein.

Als Wiederholung bedeutet die `em` Einheit **"die Schriftgröße meines übergeordneten Elements"**, wenn sie für `font-size` verwendet wird, und **"meine eigene Schriftgröße"**, wenn sie für irgendetwas anderes verwendet wird. Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` nehmen ihre Größe von ihrem übergeordneten Element. Jede nachfolgende Verschachtelungsebene wird daher progressiv größer, da jede ihre Schriftgröße auf `1.3em` — 1.3 mal die Schriftgröße ihres übergeordneten Elements — einstellt.

Zur Wiederholung bedeutet die `rem` Einheit **"die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` entnehmen ihre Größe dem Wurzelelement (`<html>`). Dies bedeutet, dass jede nachfolgende Verschachtelungsebene nicht ständig größer wird.

Ändern Sie jedoch die `font-size` des `<html>`-Elements im CSS, und Sie werden sehen, dass sich alles andere relativ dazu ändert — sowohl `rem`- als auch `em`-lange Texte. Versuchen Sie dies jetzt im MDN Playground.

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

In vielen Fällen wird ein Prozentsatz genauso behandelt wie eine Länge. Das Problem bei Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert festgelegt werden. Beispielsweise wird, wenn Sie die `font-size` eines Elements als Prozentsatz festlegen, es ein Prozentsatz der `font-size` des übergeordneten Elements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, wird es ein Prozentsatz der `width` des Elternteils sein.

Im nächsten Beispiel haben die beiden Paare von in Prozent und Pixel breiten Kästchen dieselben Klassennamen. Die Kästchen innerhalb jedes Paares sind `40%` bzw. `200px` breit.

Der Unterschied ist, dass das zweite Set von zwei Kästchen in einem Container ist, der `400px` breit ist. Das zweite `200px`-breite Kästchen hat dieselbe Breite wie das erste, aber das zweite `40%`-Kästchen ist jetzt `40%` von `400px` — viel schmaler als das erste!

Versuchen Sie, die Breite des Containers oder den Prozentwert zu ändern, um zu sehen, wie das funktioniert:

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

Das nächste Beispiel hat Schriftgrößen, die in Prozentsätzen festgelegt sind. Jedes `<li>` hat eine `font-size` von `80%`; wenn man also die verschachtelten Listenelemente betrachtet, werden diese sukzessive kleiner, da sie ihr Größenverhältnis von ihrem übergeordneten Element erben.

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

Obwohl viele Eigenschaften eine Länge oder einen Prozentsatz als Wert akzeptieren, akzeptieren manche nur eine Länge, zum Beispiel {{cssxref("border-width")}}. Die Eigenschaftsreferenzen auf MDN geben an, welche Werttypen sie akzeptieren. Wenn der erlaubte Wert {{cssxref("length-percentage")}} enthält, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Werttypen akzeptieren zahlenlose Zahlen; ein Beispiel ist die `opacity`-Eigenschaft, die die Transparenz eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert einen Wert zwischen `0` (vollständig transparent) und `1` (vollständig opak).

Im unten stehenden Beispiel versuchen Sie, den Wert der `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern, und sehen, wie die Box und ihr Inhalt mehr oder weniger opak wird:

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

Farbwerte können an vielen Stellen in CSS verwendet werden, ob Sie nun die Farbe von Text, Hintergründen, Rahmen und vielem mehr angeben.
Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, die Ihnen die Kontrolle über viele spannende Eigenschaften ermöglichen.

Das Standardsystem für Farben, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, was die Darstellung von etwa 16,7 Millionen verschiedenen Farben durch eine Kombination verschiedener roter, grüner und blauer Kanäle mit 256 unterschiedlichen Werten pro Kanal ermöglicht (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt sehen wir uns zunächst die am häufigsten verwendeten Methoden zur Angabe von Farben an: die Verwendung von Farb-Schlüsselwörtern, Hexadezimalwerten und `rgb()`-Werten.
Wir werden auch einen kurzen Blick auf zusätzliche Farb-Funktionen werfen, um Ihnen zu helfen, diese zu erkennen, wenn Sie sie sehen, oder um mit unterschiedlichen Möglichkeiten der Farb-Anwendung zu experimentieren.

Wahrscheinlich entscheiden Sie sich für eine Farbpalette und verwenden anschließend diese Farben — und Ihre bevorzugte Methode zur Angabe von Farben — in Ihrem gesamten Projekt.
Sie können Farbmodelle mischen und anpassen, aber es ist in der Regel am besten, wenn Ihr gesamtes Projekt dieselbe Methode zur Deklaration von Farben für Konsistenz verwendet!

### Farbschlüsselwörter

Sie werden die Farbschlüsselwörter (oder "benannte Farben") in vielen MDN-Codebeispielen sehen. Da der [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color) Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie normalerweise nicht auf produktiven Websites mit einem ausgefeilten Design verwendet. Andererseits werden benannte Farben in Codebeispielen verwendet, um dem Nutzer klar zu sagen, welche Farbe erwartet wird, damit der Lernende sich auf den gelehrten Inhalt konzentrieren kann.

Im nächsten Beispiel versuchen Sie, mit unterschiedlichen Farb-Schlüsselwörtern zu experimentieren, um ein besseres Verständnis davon zu bekommen, wie sie funktionieren. Sie können sie auf der [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color) Referenzseite nachschlagen.

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

Der nächste Farbwert, dem Sie wahrscheinlich begegnen werden, sind hexadezimale (Hex) Codes.

Hexadezimale Zahlen verwenden 16 Zeichen von `0-9` und `a-f`, daher ist der gesamte Bereich `0123456789abcdef`. Jeder hexadezimale Farbwert besteht aus einem Hash/Nummernsymbol (`#`) gefolgt von sechs hexadezimalen Zeichen (`#ffc0cb`, zum Beispiel). Jedes **Paar** von hexadezimalen Zeichen stellt einen der Kanäle einer RGB-Farbe dar — rot, grün und blau — und ermöglicht es uns, einen der 256 verfügbaren Werte für jeden anzugeben (16 x 16 = 256).

Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, da Sie _jede_ RGB-Farbe mit ihnen darstellen können.

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
> Möglicherweise sehen Sie hex-Farbwerte, die mit drei Zeichen anstelle von sechs geschrieben sind. Dies ist eine Abkürzung, die verwendet werden kann, wenn die Zeichen in jedem Paar gleich sind. Zum Beispiel sind `#ff00ff` und `#f0f` äquivalent. Möglicherweise sehen Sie auch hex-Farbwerte, die mit acht (oder vier) Zeichen geschrieben sind, wobei der vierte Wert die Alpha-Transparenz der vorherigen drei Werte darstellt — zum Beispiel `#ff00ff66`.

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Funktion drei Parameter, die die **roten**, **grünen**, und **blauen** Kanäle der Farben darstellen, mit einem optionalen vierten Wert, getrennt durch einen Schrägstrich (`/`), der die Opazität in etwa der gleichen Weise darstellt wie hexadezimale Werte. Der Unterschied zu RGB ist, dass jeder Kanal nicht durch zwei Hex-Ziffern, sondern durch eine Dezimalzahl dargestellt wird, die von `0` bis `255` reicht oder ein Prozentsatz von `0%` bis `100%` (jedoch keine Mischung aus beiden) ist.

Schreiben wir unser letztes Beispiel um, um RGB-Farben zu verwenden:

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

Im nächsten Beispiel haben wir der umgebenden Box unserer Farbkästen ein Hintergrundbild hinzugefügt. Wir haben dann die Kästen so eingestellt, dass sie unterschiedliche Opazitätswerte haben — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanalwert kleiner ist. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` die Farbe vollständig opak macht. Werte dazwischen geben Ihnen unterschiedliche Transparenzstufen.

Versuchen Sie, die Alpha-Kanalwerte zu ändern, um zu sehen, wie sie die Farbausgabe beeinflussen.

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
> Einen Alpha-Kanal auf einer Farbe einzustellen hat einen wesentlichen Unterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir früher erwähnt haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles, was es enthält, transparent, während die Verwendung von RGB mit einem Alpha-Parameter nur die Farbe, die Sie angeben, transparent macht.

### Verwendung von Farbtönen zur Farbbestimmung

Wenn Sie über Schlüsselwörter, Hexadezimalwerte und `rgb()` für Farben hinausgehen möchten, könnten Sie erwägen, [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue) zu verwenden.
Hue ist der Wertetyp, der uns ermöglicht, Zwischenstufen oder Ähnlichkeiten zwischen Farben wie Rot, Orange, Gelb, Grün, Blau, etc., zu unterscheiden.
Das Schlüsselkonzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle) angeben können, weil die meisten Farbmodelle Farbtöne mithilfe eines {{Glossary("color_wheel", "Farbkreises")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue) Komponente umfassen, darunter `hsl()`, `hwb()`, und [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch). Andere Farb-Funktionen, wie [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), definieren Farben basierend darauf, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, lesen Sie die [Anwendung von Farbe auf HTML-Elemente unter Verwendung von CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) Anleitung, die [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Referenz, die alle unterschiedlichen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften, die Farbwerte verwenden, bietet.

### HWB

Ein großartiger Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb)-Funktion, die eine `srgb()`-Farbe angibt.
Die drei Teile sind:

- **Hue**: Der Grundton der Farbe. Dieser nimmt einen [`<hue>`](/de/docs/Web/CSS/Reference/Values/hue) Wert zwischen `0` und `360` an, der die Winkel auf einem Farbkreis darstellt.
- **Whiteness**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (keine Weißheit) bis `100%` (volle Weißheit) an.
- **Blackness**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von `0%` (keine Schwärze) bis `100%` (volle Schwärze) an.

### HSL

Ähnlich der `hwb()`-Funktion ist die [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl)-Funktion, die ebenfalls eine `srgb()`-Farbe angibt.
HSL verwendet `Hue`, zusätzlich zu `Saturation` und `Lightness`:

- **Hue**: Auch hier stellt dies den Grundton der Farbe dar.
- **Saturation**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von `0` bis `100%` an, wobei `0` keine Farbe ist (es wird als Graustufen erscheinen), und `100%` volle Farbintensität ist.
- **Lightness**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von `0` bis `100%` an, wobei `0` keine Helligkeit ist (es wird völlig schwarz erscheinen) und `100%` volle Helligkeit (es wird völlig weiß erscheinen).

Der `hsl()`-Farbwert hat ebenfalls einen optionalen vierten Wert, getrennt von der Farbe mit einem Schrägstrich (`/`), der die Alpha-Transparenz darstellt.

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

Genauso wie bei `rgb()` können Sie `hsl()` einen Alpha-Parameter übergeben, um Opazität anzugeben:

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

Bevor Sie weitermachen, versuchen Sie, die vorherigen zwei Beispiele zu modifizieren, um einige farbtonbasierte Farbwerte zu verwenden. Versuchen Sie, den Farbtonwert in jedem Fall zu variieren, um zu sehen, wie sich dies auf die Grundfarbe auswirkt, und versuchen Sie dann auch, die anderen Parameter zu variieren.

## Bilder

Der [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion angegeben wird, oder ein Verlauf.

Im folgenden Beispiel verwenden wir ein Bild und einen Verlauf als Werte für die CSS-`background-image`-Eigenschaft.

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
> Es gibt einige andere mögliche Werte für `<image>`, jedoch sind diese neuer und haben derzeit eine schlechte Browser-Unterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Datentyp an, wenn Sie mehr darüber lesen möchten.

Sie werden mehr über Bildwerte erfahren, wenn wir in unserem [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) Artikel später darauf eingehen.

## Position

Der [`<position>`](/de/docs/Web/CSS/Reference/Values/position_value) Wertetyp repräsentiert einen Satz von 2D-Koordinaten, die verwendet werden, um ein Element zu positionieren, wie zum Beispiel ein Hintergrundbild (via [`background-position`](/de/docs/Web/CSS/Reference/Properties/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` annehmen, um Elemente mit bestimmten Begrenzungen eines 2D-Kastens auszurichten, sowie Längen, die Offsets von den oberen und linken Rändern des Kastens darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste setzt die Position horizontal, der zweite vertikal. Wenn Sie Werte nur für eine Achse angeben, wird die andere auf `center` eingestellt.

Im folgenden Beispiel haben wir ein Hintergrundbild `60px` vom oberen Rand der Box und `right` der Box unter Verwendung eines Schlüsselworts positioniert.

Probieren Sie mit diesen Werten herum, um zu sehen, wie Sie das Bild verschieben können.

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

In den obigen Beispielen haben wir Orte gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>`-Schlüsselwörter wie `red`, `black`, `rebeccapurple`, und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Als solche sind sie nicht zitiert — sie werden nicht als Zeichenfolgen behandelt.

Es gibt Orte, an denen Sie Zeichenfolgen in CSS verwenden. Zum Beispiel, [bei der Spezifikation von generierten Inhalten](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall ist der Wert zitiert, um zu zeigen, dass es sich um eine Zeichenfolge handelt. Im folgenden Beispiel verwenden wir unzitiert Farb-Schlüsselwörter zusammen mit einer zitierten generierten Inhaltszeichenfolge.

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

In der Programmierung ist eine Funktion ein Codeabschnitt, der eine bestimmte Aufgabe ausführt.
Funktionen sind nützlich, weil Sie Code einmal schreiben und dann mehrfach wiederverwenden können, anstatt dieselbe Logik immer wieder zu schreiben.
Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern bieten auch praktische eingebaute Funktionen für allgemeine Aufgaben, so dass Sie nicht alles selbst von Grund auf neu schreiben müssen.

CSS hat ebenfalls [Funktionen](/de/docs/Web/CSS/Reference/Values/Functions), die auf ähnliche Weise wie Funktionen in anderen Sprachen arbeiten.
Tatsächlich haben wir bereits CSS-Funktionen im Abschnitt [Farbe](#farbe) gesehen, wie zum Beispiel [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl).

Neben der Anwendung von Farben können Sie Funktionen in CSS für viele andere Zwecke verwenden.
Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#transform_functions) eine gängige Möglichkeit, Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren.
Sie könnten [`translate()`](/de/docs/Web/CSS/Reference/Values/transform-function/translate) sehen, um etwas horizontal oder vertikal zu bewegen, [`rotate()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate), um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/Reference/Values/transform-function/scale), um etwas größer oder kleiner zu machen.

### Mathematikfunktionen

Wenn Sie Stile für ein Projekt erstellen, werden Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Dauern beginnen.
Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie etwas Mathematik anwenden.
Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen addieren und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions), die es uns ermöglichen, Berechnungen in CSS durchzuführen, anstatt sich auf statische Werte zu verlassen oder die Mathematik in JavaScript durchzuführen.
Eine der häufigsten Mathematikfunktionen ist [`calc()`](/de/docs/Web/CSS/Reference/Values/calc), mit der Sie Operationen wie Addition, Subtraktion, Multiplikation und Division durchführen können.

Sagen wir zum Beispiel, wir möchten die Breite eines Elements auf `20%` seines Übergeordneten und `100px` zusätzlich einstellen.
Wir können diese Breite nicht mit einem statischen Wert angeben — wenn der übergeordnete ein Prozentwert verwendet (oder eine relative Einheit wie `em` oder `rem`), dann variiert er je nach verwendetem Kontext und anderen Faktoren wie das Gerät oder die Fensterbreite des Benutzers.
Jedoch, mit `calc()` kann die Breite eines Elements auf `20%` seines Elterncontainers + `100px` eingestellt werden.
Die `20%` basieren auf der Breite des Elterncontainers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere Mathematik-Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/Reference/Values/min), [`max()`](/de/docs/Web/CSS/Reference/Values/max) und [`clamp()`](/de/docs/Web/CSS/Reference/Values/clamp); diese lassen Sie jeweils den kleinsten, größten oder mittleren Wert aus einer Menge von Werten wählen. Schauen Sie sich unsere [CSS-Werte-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) Referenzseite an, um alle verfügbaren CSS-Funktionen zu erkunden.

Viel über CSS-Funktionen zu wissen ist nützlich, damit Sie sie erkennen, wenn Sie sie sehen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen dabei, benutzerdefinierten oder wiederholten Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erreichen können.

## Zusammenfassung

Dies war ein schneller Überblick über die häufigsten Arten von Werten und Einheiten, auf die Sie stoßen könnten. Sie können sich alle verschiedenen Typen auf der [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modulseite ansehen — viele davon werden Ihnen im Laufe dieser Lektionen begegnen.

Das Wichtigste zu beachten ist, dass jede Eigenschaft eine definierte Liste von erlaubten Wertetypen hat, und jeder Wertetyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Details hier auf MDN nachschlagen. Zum Beispiel ist es nützlich, wenn auch vielleicht nicht offensichtlich zu wissen, dass [`<image>`](/de/docs/Web/CSS/Reference/Values/image) auch ermöglicht, einen Farbverlauf zu erstellen!

Im nächsten Artikel werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie die Informationen, die wir über Werte und Einheiten bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}
