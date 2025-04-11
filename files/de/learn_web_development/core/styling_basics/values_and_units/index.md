---
title: CSS-Werte und -Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die aus Eigenschaften und Werten bestehen.
Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Arten von Werten erlaubt sind.
In dieser Lektion betrachten wir einige der am häufigsten verwendeten Wertetypen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) verfügt über einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

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
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen annehmen können und was diese Typen darstellen.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenfolgen und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und der Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier bei MDN können Sie Wertetypen erkennen, da sie von spitzen Klammern (`<`, `>`) umgeben sind, wie etwa [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jeden gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie auf der Referenzseite [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben – beispielsweise gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welchen Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber es sollte aus dem Kontext klar sein, welches Sie sich ansehen. Wenn Sie nicht sicher sind, versuchen Sie, danach auf MDN zu suchen.

> [!NOTE]
> Sie werden CSS-Wertetypen als _Datentypen_ bezeichnet sehen. Die Begriffe sind im Grunde austauschbar – wenn Sie etwas in CSS als Datentyp bezeichnet sehen, ist es wirklich nur eine gehobene Art, Wertetyp zu sagen. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort festgelegt und den Hintergrund mit der `rgb()`-Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung erlaubter Werte zu definieren. Das bedeutet, dass Sie, wenn Sie `<color>` als gültigen Wert sehen, nicht darüber nachdenken müssen, welcher der verschiedenen Farbwerttypen verwendet werden kann – Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, sofern sie von Ihrem Browser unterstützt werden. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browserunterstützung. Beispielsweise sehen Sie auf der Seite für [`<color>`](/de/docs/Web/CSS/color_value), dass der Abschnitt zur Browser-Kompatibilität unterschiedliche Farbwerttypen und deren Unterstützung auflistet.

Lassen Sie uns einige der Wertetypen und Einheiten betrachten, die Ihnen häufig begegnen, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentsätze

Es gibt verschiedene numerische Wertetypen, die Sie in CSS verwenden könnten. Die folgenden gelten alle als numerisch:

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
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar — sie kann
        einen Dezimalpunkt mit einer Bruchkomponente haben oder nicht. Zum
        Beispiel, <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
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
        <code>&#x3C;number></code> mit einer Einheit. Zum Beispiel,
        <code>45deg</code>, <code>5s</code>, oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine Oberkategorie, die
        {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
        >, <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code
        >, und
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
        relativ zu einer anderen Größe. Beispielsweise ist die Länge eines
        Elements relativ zur Länge seines Elternelements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, auf den Sie am häufigsten stoßen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. In CSS gibt es zwei Arten von Längen — relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und gelten im Allgemeinen als immer gleich groß.

| Einheit | Name              | Entspricht               |
| ------- | ----------------- | ------------------------ |
| `cm`    | Zentimeter        | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter        | 1mm = 1/10 von 1cm       |
| `Q`     | Viertelmillimeter | 1Q = 1/40 von 1cm        |
| `in`    | Zoll              | 1in = 2.54cm = 96px      |
| `pc`    | Picas             | 1pc = 1/6 von 1in        |
| `pt`    | Punkte            | 1pt = 1/72 von 1in       |
| `px`    | Pixel             | 1px = 1/96 von 1in       |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck, anstatt für die Bildschirmausgabe verwendet werden. Zum Beispiel verwenden wir auf dem Bildschirm normalerweise keine `cm` (Zentimeter). Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des Elternelements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe bzw. Breite des Viewports.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit etwas sorgfältiger Planung erreichen können, dass die Größe von Text oder anderen Elementen relativ zum Rest der Seite skaliert. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der gängigsten relativen Einheiten erkunden.

#### Beispiel untersuchen

Im folgenden Beispiel können Sie sehen, wie einige relative und absolute Längeneinheiten sich verhalten. Die erste Box hat eine {{cssxref("width")}}, die in Pixeln festgelegt ist. Als absolute Einheit bleibt diese Breite gleich, unabhängig davon, was sich sonst ändert.

Die zweite Box hat eine Breite in `vw` (Viewport-Breite) Einheiten. Dieser Wert ist relativ zur Viewport-Breite, und somit sind 10vw 10 Prozent der Breite des Viewports. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe der Box ändern. Dieses Beispiel ist jedoch in die Seite mit einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) eingebettet, daher wird dies hier nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie das Beispiel in einem eigenen Browser-Tab [öffnen](https://mdn.github.io/css-examples/learn/values-units/length.html).

Die dritte Box verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem enthaltenen {{htmlelement("div")}} festgelegt, das die Klasse `.wrapper` hat. Ändern Sie diesen Wert in `1.5em`, und Sie werden sehen, dass sich die Schriftgröße aller Elemente erhöht, aber nur das letzte Element wird breiter, da seine Breite relativ zu dieser Schriftgröße ist.

Versuchen Sie, nach den obigen Anweisungen mit den Werten auf andere Weise zu experimentieren.

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

`em` und `rem` sind die zwei relativen Längen, auf die Sie am häufigsten stoßen werden, wenn Sie etwas von Boxen bis hin zu Texten dimensionieren. Es ist wichtig zu verstehen, wie diese funktionieren und welche Unterschiede es zwischen ihnen gibt, insbesondere wenn Sie sich mit komplexeren Themen wie [Textstilierung](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) befassen. Das folgende Beispiel bietet eine Demonstration.

Der unten abgebildete HTML-Code ist eine Gruppe von verschachtelten Listen — wir haben insgesamt zwei Listen und beide Beispiele haben denselben HTML-Code. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ hat und die zweite eine Klasse von _rems_.

Zu Beginn setzen wir auf dem `<html>`-Element eine Schriftgröße von 16px.

**Zur Erinnerung, die `em`-Einheit bedeutet "die Schriftgröße meines Elternelements"**, wenn sie für `font-size` verwendet wird (und "meine eigene Schriftgröße", wenn sie für etwas anderes genutzt wird). Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `ems` nehmen ihre Größe von ihrem Elternelement. Daher wird jede Ebene der Verschachtelung zunehmend größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat — 1.3 mal die Schriftgröße ihres Elternelements.

**Zur Erinnerung, die `rem`-Einheit bedeutet "die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größe vom Wurzelelement (`<html>`) an. Das bedeutet, dass jede Ebene der Verschachtelung nicht weiter an Größe zunimmt.

Wenn Sie jedoch die `font-size` des `<html>`-Elements im CSS ändern, werden alle anderen Dinge relativ dazu geändert — sowohl `rem`- als auch `em`-große Texte.

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

#### Linienhöhen-Einheiten

`lh` und `rlh` sind relative Längeneinheiten, ähnlich wie `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` besteht darin, dass die erste relativ zur Zeilenhöhe des Elements selbst ist, während die zweite relativ zur Zeilenhöhe des Wurzelelements, normalerweise `<html>`, ist.

Mit diesen Einheiten können wir die Box-Dekoration in Einklang mit dem Text genau ausrichten. In diesem Beispiel verwenden wir die `lh`-Einheit, um Notizblock-artige Linien mithilfe von [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) zu erstellen. Es spielt keine Rolle, wie die Zeilenhöhe des Textes ist, die Linien werden immer an der richtigen Stelle beginnen.

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

In vielen Fällen wird ein Prozentsatz genauso behandelt wie eine Länge. Das Besondere an Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert festgelegt werden. Zum Beispiel wird eine Schriftgröße eines Elements als Prozentsatz immer in Prozent der Schriftgröße des Elternelements sein. Wenn Sie einen Prozentwert für eine `width`-Eigenschaft verwenden, wird dieser ein Prozentsatz der Breite des Elternteils sein.

Im untenstehenden Beispiel haben die beiden Boxen mit Prozentwerten und die beiden Boxen mit Pixelwerten dieselben Klassennamen. Die Sets sind jeweils 40% und 200px breit.

Der Unterschied besteht darin, dass das zweite Set von zwei Boxen sich in einem Wrapper befindet, der 400 Pixel breit ist. Die zweite 200px breite Box hat dieselbe Breite wie die erste, aber die zweite 40%-Box ist jetzt 40% von 400px — wesentlich schmaler als die erste!

Ändern Sie die Breite des Wrappers oder den Prozentwert, um zu sehen, wie dies funktioniert:

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

Das nächste Beispiel hat Schriftgrößen in Prozentwerten festgelegt. Jedes `<li>` hat eine `font-size` von 80%; daher werden die verschachtelten Listenelemente zunehmend kleiner, da sie ihre Größe von ihrem Elternteil erben.

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

Beachten Sie, dass, während viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur eine Länge akzeptieren. Sie können auf den MDN-Eigenschaftsreferenzseiten sehen, welche Werte akzeptiert werden. Wenn der erlaubte Wert {{cssxref("length-percentage")}} einschließt, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` einschließt, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen ohne hinzugefügte Einheit. Ein Beispiel für eine Eigenschaft, die eine einheitenlose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Opazität eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig deckend).

Im unten stehenden Beispiel ändern Sie den Wert von `opacity` in verschiedene Dezimalwerte zwischen `0` und `1` und beobachten, wie die Box und ihre Inhalte mehr oder weniger deckend werden:

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
> Wenn Sie eine Zahl in CSS als Wert verwenden, sollte sie nicht in Anführungszeichen gesetzt sein.

## Farbe

Farbwerte können an vielen Stellen in CSS verwendet werden, ob Sie die Farbe von Text, Hintergründen, Rändern und vielem mehr festlegen.
Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, die Ihnen eine Menge aufregender Eigenschaften an die Hand geben.

Das standardmäßige Farbsystem in modernen Computern unterstützt 24-Bit-Farben, die etwa 16,7 Millionen unterschiedliche Farben anzeigen können, indem verschiedene rote, grüne und blaue Kanäle mit 256 unterschiedlichen Werten pro Kanal kombiniert werden (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir uns zunächst die am häufigsten gesehenen Methoden zur Farbspezifikation ansehen: die Verwendung von Schlüsselwörtern, hexadezimale und `rgb()` Werte.
Wir werden auch einen kurzen Blick auf zusätzliche Farb-Funktionen werfen, damit Sie diese erkennen und mit verschiedenen Methoden der Farbanwendung experimentieren können.

Sie werden wahrscheinlich ein Farbpalette auswählen und dann diese Farben — und Ihre bevorzugte Methode zur Angabe von Farbe — in Ihrem gesamten Projekt verwenden.
Sie können Farbsysteme mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamten Projekt dieselbe Methode zur Deklaration von Farben zur Konsistenz verwendet!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder "benannte Farben") in vielen MDN-Code-Beispielen sehen. Da der [`<named-color>`](/de/docs/Web/CSS/named-color) Datentyp nur eine sehr begrenzte Anzahl von Farbwerten enthält, werden diese nicht häufig auf Produktionswebseiten mit einer ausgeklügelten Design-Sprache verwendet. Andererseits sind benannte Farben in Code-Beispielen verwendet, um dem Benutzer klar zu sagen, welche Farbe erwartet wird, damit der Lernende sich auf den zu vermittelnden Inhalt konzentrieren kann.

Versuchen Sie, mit verschiedenen Farbwerten in den Live-Beispielen unten zu spielen, um eine bessere Vorstellung davon zu bekommen, wie sie funktionieren:

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

Der nächste Farbwerttyp, auf den Sie wahrscheinlich stoßen werden, sind hexadezimale Codes.
Hexadezimal verwendet 16 Zeichen von `0-9` und `a-f`, das ganze Sortiment ist also `0123456789abcdef`.
Jeder hexadezimale Farbwert besteht aus einem Hash/Num Symbol (`#`) gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb`, zum Beispiel) sowie optional einem oder zwei hexadezimalen Zeichen, die die Alpha-Transparenz der vorherigen drei oder sechs Zeichenfarbenwerte darstellen.

Bei der Verwendung von Hexadezimal zur Beschreibung von RGB-Werten repräsentiert jedes **Paar** von hexadezimalen Zeichen eine dezimale Zahl, die einen der Kanäle (rot, grün, blau) beschreibt, und ermöglicht es uns, alle der 256 verfügbaren Werte für jeden davon (16 x 16 = 256) zu spezifizieren.
Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, da Sie mit ihnen jede RGB-Farbe darstellen können.

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

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter, die die roten (**red**), grünen (**green**) und blauen (**blue**) Kanal-Werte der Farben darstellen, sowie einen optionalen vierten Wert, getrennt durch einen Schrägstrich ('/') der die Opazität darstellt, ähnlich wie bei den hexadezimalen Werten. Der Unterschied bei RGB besteht darin, dass jeder Kanal nicht durch zwei hexadezimale, sondern durch eine Dezimalzahl zwischen 0 und 255 oder einen Prozentwert zwischen 0% und 100% inklusive dargestellt wird (aber keine Mischung von beiden).

Lassen Sie uns unser letztes Beispiel mit RGB-Farben umschreiben:

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

Sie können einen vierten Parameter an `rgb()` übergeben, der den Alphakanal der Farbe darstellt, der die Opazität kontrolliert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent gemacht, während `1` sie vollständig undurchsichtig macht. Werte dazwischen geben Ihnen unterschiedliche Transparenzstufen.

> [!NOTE]
> Wenn Sie einen Alphakanal einer Farbe einstellen, gibt es einen wesentlichen Unterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir zuvor betrachtet haben. Wenn Sie Opazität verwenden, machen Sie das Element und alles darin undurchsichtig, während die Verwendung von RGB mit einem Alphakanalparameter nur die von Ihnen angegebene Farbe undurchsichtig macht.

Im folgenden Beispiel haben wir ein Hintergrundbild zum beinhaltenden Block unserer farbigen Boxen hinzugefügt. Wir haben dann die Boxen so eingestellt, dass sie unterschiedliche Alphakanalwerte haben — beachten Sie, wie der Hintergrund mehr sichtbar wird, wenn der Alphakanalwert kleiner ist.
In diesem Beispiel versuchen Sie, die Alphakanalwerte zu ändern, um zu sehen, wie es die Farbausgabe beeinflusst.

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

Der `sRGB`-Farbraum definiert Farben im **Rot** (r), **Grün** (g) und **Blau** (b) Farbraum.

### Farbe durch Farbtöne spezifizieren

Wenn Sie über Schlüsselwörter, hexadezimale und `rgb()`-Farben hinausgehen wollen, könnten Sie versuchen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden.
Der Farbton (Hue) ist die Eigenschaft, die es uns ermöglicht, die Unterschiede oder Ähnlichkeiten zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.
Das Schlüsselkonzept ist, dass Sie einen Farbton mit einem [`<angle>`](/de/docs/Web/CSS/angle) angeben können, da die meisten Farbmodelle Farbtöne mit einem {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten, darunter `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farb-Funktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich den [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) Leitfaden an, die [`<color>`](/de/docs/Web/CSS/color_value) Referenzseite, die alle verschiedenen Möglichkeiten, Farben in CSS zu verwenden, auflistet, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften, die Farbwerte verwenden, bietet.

### HWB

Ein großartiger Ausgangspunkt zur Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion, die eine `srgb()`-Farbe spezifiziert.
Die drei Teile sind:

- **Hue**: Der Basisschatten der Farbe. Dieser nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen 0 und 360 an, der die Winkel um einen Farbkreis herum darstellt.
- **Weißheit**: Wie weiß ist die Farbe? Das nimmt einen Wert von `0%` (keine Weißheit) bis `100%` (vollständige Weißheit) an.
- **Schwärze**: Wie schwarz ist die Farbe? Das nimmt einen Wert von 0% (keine Schwärze) bis 100% (vollständige Schwärze) an.

### HSL

Ähnlich wie die `hwb()`-Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die ebenfalls eine `srgb()` Farbe spezifiziert.
HSL verwendet `Hue`, zusätzlich zu `Saturation` und `Lightness`:

- **Hue**
- **Saturation**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0–100% an, wobei 0 keine Farbe bedeutet (sie erscheint als Graustufenschattierung), und 100% volle Farbsättigung darstellt.
- **Lightness**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von 0–100% an, wobei 0 kein Licht bedeutet (sie erscheint vollständig schwarz) und 100% vollständiges Licht darstellt (sie erscheint vollständig weiß).

Der `hsl()`-Farbwert hat ebenfalls einen optionalen vierten Wert, getrennt von der Farbe mit einem Schrägstrich (`/`), der die Alphatransparenz repräsentiert.

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

Genau wie bei `rgb()` können Sie einen Alphaparameter an `hsl()` übergeben, um die Deckkraft anzugeben:

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

Der [`<image>`](/de/docs/Web/CSS/image) Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion angezeigt wird, oder ein Verlauf.

Im folgenden Beispiel haben wir ein Bild und einen Verlauf als Werte für die CSS-Eigenschaft `background-image` demonstriert.

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
> Es gibt einige andere mögliche Werte für `<image>`, aber diese sind neuer und haben derzeit eine schlechte Browserunterstützung. Schauen Sie auf der Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp vorbei, wenn Sie darüber mehr erfahren wollen.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp stellt eine Gruppe von 2D-Koordinaten dar, die verwendet werden, um einen Gegenstand wie ein Hintergrundbild zu positionieren (via [`background-position`](/de/docs/Web/CSS/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` annehmen, um Elemente an spezifischen Grenzen einer 2D-Box auszurichten, zusammen mit Längen, die Versätze von den oberen und linken Rändern der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die Position horizontal fest, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` voreingestellt.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px vom oberen Rand und rechts vom Container mit einem Schlüsselwort positioniert.
Spielen Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.

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

## Zeichenfolgen und Bezeichner

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet wurden (zum Beispiel `<color>`-Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein besonderer Wert, den CSS versteht. Als solche werden sie nicht in Anführungszeichen gesetzt – sie werden nicht als Zeichenfolgen behandelt.

Es gibt Orte, an denen Sie Zeichenfolgen in CSS verwenden. Zum Beispiel [beim Spezifizieren generierter Inhalte](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall ist der Wert in Anführungszeichen gesetzt, um zu zeigen, dass es sich um eine Zeichenfolge handelt. Im folgenden Beispiel verwenden wir nicht zitierte Farb-Schlüsselwörter zusammen mit einer zitierten generierten Inhaltszeichenfolge.

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

In der Programmierung ist eine Funktion ein Stück Code, das eine spezifische Aufgabe ausführt.
Funktionen sind nützlich, weil Sie Code einmal schreiben und dann viele Male wiederverwenden können, anstatt immer wieder die gleiche Logik zu schreiben.
Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern kommen auch mit bequemen eingebauten Funktionen für allgemeine Aufgaben, damit Sie sie nicht selbst von Grund auf schreiben müssen.

CSS hat ebenfalls [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die ähnlich wie Funktionen in anderen Sprachen funktionieren.
Tatsächlich haben wir bereits CSS-Funktionen im [Farb](#farbe)-Abschnitt oben gesehen, mit den [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktionen.

Abgesehen von der Anwendung von Farben können Sie Funktionen in CSS verwenden, um viele weitere Dinge zu tun.
Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#transform_functions) eine gängige Methode, um Elemente auf einer Seite zu verschieben, zu drehen und zu skalieren.
Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) für die horizontale oder vertikale Verschiebung sehen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) für die Drehung von etwas, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale) um etwas zu vergrößern oder zu verkleinern.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, werden Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Zeitdauern beginnen.
Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie einige Berechnungen durchführen.
Sie könnten den Prozentsatz eines Werts berechnen oder eine Zahl zu einer anderen addieren und dann Ihre CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions), die es uns ermöglichen, Berechnungen durchzuführen, anstatt uns auf statische Werte zu verlassen oder die Mathematik in JavaScript zu erledigen.
Eine der häufigsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), mit der Sie Operationen wie Addition, Subtraktion, Multiplikation und Division durchführen können.

Zum Beispiel, sagen wir, wir wollen die Breite eines Elements auf 20% seines Elterncontainers plus 100px festlegen.
Wir können diesen Wert nicht mit einem statischen Wert spezifizieren — wenn der Elternteil eine prozentuale Breite (oder eine relative Einheit wie `em` oder `rem`) verwendet, dann variiert er abhängig vom Kontext, in dem er verwendet wird, sowie von anderen Faktoren wie dem Gerät des Benutzers oder der Breite des Browserfensters.
Mit `calc()` jedoch können wir die Breite des Elements auf 20% seines Elterncontainers plus 100px festlegen.
Die 20% basieren auf der Breite des Elterncontainers (`.wrapper`), und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max), und [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie jeweils den kleinsten, größten oder mittleren Wert aus einem Satz von Werten auswählen.
Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos), und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel zur Drehung von Elementen um einen Punkt zu berechnen oder Farben auszuwählen, die einen [Farbwinkel](/de/docs/Web/CSS/hue) als Parameter nehmen.
[Exponentialfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#exponential_functions) könnten auch für Animationen und Übergänge verwendet werden, wenn Sie sehr spezifische Kontrolle darüber benötigen, wie sich etwas bewegt und aussieht.

Das Wissen über CSS-Funktionen ist nützlich, sodass Sie sie erkennen, wenn Sie sie sehen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie werden Ihnen helfen, benutzerdefinierten oder sich wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erreichen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — sehen Sie sich [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_tasks) an.

## Zusammenfassung

Das war ein schneller Durchgang der am häufigsten vorkommenden Wertetypen und Einheiten, denen Sie begegnen könnten. Sie können sich alle unterschiedlichen Typen auf der [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modulseite ansehen — Sie werden viele von diesen im Einsatz erleben, während Sie diese Lektionen durcharbeiten.

Das Wesentliche, das Sie behalten sollten, ist, dass jede Eigenschaft eine definierte Liste erlaubter Wertetypen hat und jeder Wertetyp eine Definition hat, die erklärt, was die Werte sind. Dann können Sie hier auf MDN die spezifischen Details nachschlagen. Beispielsweise ist es nützlich, zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch erlaubt, einen Farbverlauf zu erstellen, aber dieses Wissen ist vielleicht nicht sofort offensichtlich!

Im nächsten Artikel werden wir uns ansehen, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
