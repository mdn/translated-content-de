---
title: CSS-Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten zulässig ist. In dieser Lektion werden wir uns einige der am häufigsten verwendeten Wertetypen ansehen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) hat einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
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
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenfolgen und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und den Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie in spitze Klammern (`<`, `>`) eingeschlossen sind, wie zum Beispiel [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jeden gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie auf der Referenzseite zu [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt.

Manchmal können Wertetypen und Eigenschaften den gleichen oder ähnlichen Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp. Sie können die spitzen Klammern verwenden, um zu bestimmen, welchen Sie in jedem Fall untersuchen. HTML-Elemente verwenden ebenfalls spitze Klammern, aber es sollte aus dem Kontext klar sein, worauf Sie schauen. Wenn Sie nicht sicher sind, versuchen Sie danach auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie etwas in CSS als Datentyp bezeichnet sehen, ist es eigentlich nur eine anspruchsvolle Art, Wertetyp zu sagen. Der Begriff _Wert_ bezieht sich auf einen bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort festgelegt und den Hintergrund mit der `rgb()`-Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung zulässiger Werte zu definieren. Das bedeutet, dass, wenn Sie `<color>` als gültig sehen, müssen Sie sich nicht fragen, welcher der verschiedenen Farbwerttypen verwendet werden kann — Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _jede_ verfügbare `<color>` Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browser-Unterstützung. Wenn Sie sich zum Beispiel die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, sehen Sie, dass der Abschnitt über die Browser-Kompatibilität verschiedene Farbwerttypen und deren Unterstützung auflistet.

Schauen wir uns einige der Arten von Werten und Einheiten an, denen Sie häufig begegnen können, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

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
        Ein <code>&#x3C;number></code> repräsentiert eine Dezimalzahl — sie kann
        einen Dezimalpunkt mit einer Bruchkomponente enthalten oder auch nicht.
        Zum Beispiel <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
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
        <code>&#x3C;number></code> mit einer Einheit. Zum Beispiel
        <code>45deg</code>, <code>5s</code> oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine Überkategorie, die die
        {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
        >, <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code
        > und
        <code
          ><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code
        >
        Typen einschließt.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> repräsentiert einen Bruchteil eines
        anderen Wertes. Zum Beispiel <code>50%</code>. Prozentwerte sind immer
        relativ zu einer anderen Menge. Zum Beispiel ist die Länge eines Elements
        relativ zur Länge des übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relativ und absolut. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und werden allgemein als immer gleich groß betrachtet.

| Einheit | Name               | Entspricht              |
| ---- | ----------------- | -------------------- |
| `cm` | Zentimeter        | 1cm = 37.8px = 25.2/64in |
| `mm` | Millimeter        | 1mm = 1/10 eines 1cm   |
| `Q`  | Viertelmillimeter | 1Q = 1/40 eines 1cm   |
| `in` | Zoll              | 1in = 2.54cm = 96px    |
| `pc` | Picas             | 1pc = 1/6 eines 1in   |
| `pt` | Punkt             | 1pt = 1/72 eines 1in  |
| `px` | Pixel             | 1px = 1/96 eines 1in  |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck verwendet werden, anstatt für die Bildschirmausgabe. Zum Beispiel verwenden wir typischerweise nicht `cm` (Zentimeter) auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit etwas sorgfältiger Planung die Größe des Textes oder anderer Elemente relativ zu allem anderen auf der Seite skalierbar machen können. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt erkunden wir einige der häufigsten relativen Einheiten.

#### Ein Beispiel erkunden

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Das erste Kästchen hat eine {{cssxref("width")}} in Pixeln gesetzt. Als absolute Einheit bleibt diese Breite gleich, unabhängig davon, was sich sonst noch ändert.

Das zweite Kästchen hat eine in `vw` (Ansichtfensterbreite) Einheiten gesetzte Breite. Dieser Wert ist relativ zur Breite des Fensterrahmens und 10vw sind daher 10 Prozent der Breite des Fensterrahmens. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Kästchens ändern. Allerdings wird dieses Beispiel in die Seite mittels eines [`<iframe>`](/de/docs/Web/HTML/Element/iframe) eingebettet, sodass dies nicht funktionieren wird. Um dies in Aktion zu sehen, müssen Sie [das Beispiel ausprobieren, indem Sie es in einem eigenen Browser-Tab öffnen](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Kästchen verwendet `em` Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umschließenden {{htmlelement("div")}} festgelegt, das die Klasse `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em`, und Sie werden sehen, dass die Schriftgröße aller Elemente zunimmt, aber nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie den obigen Anweisungen gefolgt sind, versuchen Sie, mit den Werten auf andere Weise zu experimentieren, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die zwei relativen Längen, auf die Sie am häufigsten stoßen werden, wenn Sie irgendetwas von Kästchen bis Text skalieren. Es lohnt sich, zu verstehen, wie sie funktionieren und die Unterschiede zwischen ihnen zu kennen, insbesondere wenn Sie mit komplexeren Themen wie der [Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) beginnen. Das folgende Beispiel bietet eine Demonstration.

Das unten gezeigte HTML ist eine Reihe verschachtelter Listen — wir haben insgesamt zwei Listen und beide Beispiele haben das gleiche HTML. Der einzige Unterschied ist, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Zunächst legen wir auf dem `<html>`-Element 16px als Schriftgröße fest.

**Zusammenfassend bedeutet die `em`-Einheit "die Schriftgröße meines Elternelements"**, wenn sie für `font-size` verwendet wird (und "meine eigene Schriftgröße", wenn sie für etwas anderes verwendet wird). Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `ems` übernehmen ihre Größe von ihrem übergeordneten Element. Daher wird jede nachfolgende Verschachtelungsebene immer größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat — 1.3-mal die Schriftgröße ihres Elternelements.

**Zusammenfassend bedeutet die `rem`-Einheit "die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `rems` übernehmen ihre Größe vom Wurzelelement (`<html>`). Das bedeutet, dass jede nachfolgende Verschachtelungsebene nicht immer größer wird.

Wenn Sie jedoch die `font-size` des `<html>`-Elements im CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu ändert — sowohl `rem`- als auch `em`-großer Text.

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

#### Zeilenhöhe-Einheiten

`lh` und `rlh` sind relative Längeneinheiten, ähnlich wie `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` besteht darin, dass ersteres relativ zur Zeilenhöhe des Elements selbst ist, während letzteres relativ zur Zeilenhöhe des Wurzelelements ist, normalerweise `<html>`.

Mit diesen Einheiten können wir Dekorationen präzise an den Text anpassen. In diesem Beispiel verwenden wir die `lh`-Einheit, um notizblockähnliche Zeilen mit [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) zu erstellen. Es spielt keine Rolle, welche Zeilenhöhe der Text hat, die Linien werden immer an der richtigen Stelle beginnen.

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

In vielen Fällen wird ein Prozentsatz auf die gleiche Weise wie eine Länge behandelt. Bei Prozentsätzen ist das Besondere, dass sie immer relativ zu einem anderen Wert gesetzt werden. Zum Beispiel, wenn Sie die `font-size` eines Elements als Prozentsatz setzen, wird es ein Prozentsatz der `font-size` des übergeordneten Elements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, wird es ein Prozentsatz der Breite des übergeordneten Elements sein.

Im folgenden Beispiel haben die zwei prozentual dimensionierten Kästchen und die zwei pixelgröße Kästen die gleichen Klassennamen. Die Sätze sind jeweils 40% und 200px breit.

Der Unterschied ist, dass das zweite Set von zwei Kästchen in einem Wrapper ist, der 400 Pixel breit ist. Das zweite 200px breite Kästchen hat die gleiche Breite wie das erste, aber das zweite 40%-Kästchen ist jetzt 40% von 400px — viel schmaler als das erste!

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

Das nächste Beispiel hat Schriftgrößen, die in Prozentsätzen festgelegt sind. Jedes `<li>` hat eine `font-size` von 80%; daher werden die verschachtelten Listenpunkte immer kleiner, da sie ihre Größe von ihrem übergeordneten Element erben.

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

Beachten Sie, dass, während viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur eine Länge akzeptieren. Sie können sehen, welche Werte auf den MDN-Eigenschaftsreferenzseiten akzeptiert werden. Wenn der erlaubte Wert {{cssxref("length-percentage")}} enthält, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen, ohne dass eine Einheit hinzugefügt werden muss. Ein Beispiel für eine Eigenschaft, die eine einheitslose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Deckkraft eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im folgenden Beispiel versuchen Sie, den Wert von `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und sehen, wie das Kästchen und sein Inhalt mehr oder weniger undurchsichtig werden:

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
> Wenn Sie eine Zahl in CSS als Wert verwenden, sollte sie nicht in Anführungszeichen gesetzt werden.

## Farbe

Farbwerte können an vielen Stellen in CSS verwendet werden, unabhängig davon, ob Sie die Farbe des Textes, des Hintergrunds, der Rahmen und vieles mehr angeben. Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, sodass Sie viele aufregende Eigenschaften kontrollieren können.

Das standardmäßige Farbsystem, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, wodurch etwa 16,7 Millionen verschiedene Farben angezeigt werden können, indem verschiedene rote, grüne und blaue Kanäle mit jeweils 256 verschiedenen Werten kombiniert werden (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt betrachten wir zuerst die am häufigsten gesehenen Möglichkeiten, Farben zu spezifizieren: mit Schlüsselwörtern, Hexadezimal- und `rgb()`-Werten. Wir werden auch einen kurzen Blick auf zusätzliche Farbfuntionen werfen, damit Sie sie erkennen können, wenn Sie sie sehen oder mit verschiedenen Arten, Farben anzuwenden, experimentieren können.

Sie werden wahrscheinlich eine Farbpalette festlegen und dann diese Farben — und Ihre bevorzugte Art der Farbdeklaration — in Ihrem gesamten Projekt verwenden. Sie können Farbmodelle mischen und kombinieren, aber es ist normalerweise am besten, wenn das gesamte Projekt dieselbe Methode zur Farbangabe verwendet, um Konsistenz zu gewährleisten!

### Farb-Schlüsselwörter

Sie werden Farb-Schlüsselwörter (oder 'benannte Farben') in vielen MDN-Code-Beispielen sehen. Da der [`<named-color>`s](/de/docs/Web/CSS/named-color) Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden diese nicht häufig auf Produktionswebsites verwendet. Da das Schlüsselwort die Farbe als menschenlesbaren Textwert repräsentiert, werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu sagen, welche Farbe erwartet wird, damit der Lernende sich auf den gelehrten Inhalt konzentrieren kann.

Versuchen Sie, mit verschiedenen Farbwerten in den Live-Beispielen unten zu spielen, um besser zu verstehen, wie sie funktionieren:

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

Der nächste Farbwerttyp, auf den Sie wahrscheinlich stoßen werden, sind hexadezimale Codes. Hexadezimal verwendet 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` ist. Jeder Hex-Farbwert besteht aus einem Rautezeichen (#) gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb` zum Beispiel), mit einem optionalen ein oder zwei hexadezimalen Zeichen, die die Alpha-Transparenz der vorherigen drei oder sechs Zeichen-Farbwerte darstellen.

Bei der Verwendung von Hexadezimal zur Beschreibung von RGB-Werten sind jedes **Paar** von hexadezimalen Zeichen eine Dezimalzahl, die einen der Kanäle — rot, grün und blau — darstellt und es uns ermöglicht, einen der 256 verfügbaren Werte für jeden zu spezifizieren (16 x 16 = 256). Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, da Sie jede RGB-Farbe mit ihnen darstellen können.

Ändern Sie die Werte, um zu sehen, wie sich die Farben variieren:

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

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion drei Parameter auf, die die Kanalwerte für **rot**, **grün** und **blau** der Farben darstellen, mit einem optionalen vierten Wert, der durch einen Schrägstrich ('/') getrennt ist und die Deckkraft darstellt, ähnlich wie bei Hex-Werten. Der Unterschied zu RGB besteht darin, dass jeder Kanal nicht durch zwei Hex-Ziffern, sondern durch eine Dezimalzahl zwischen 0 und 255 oder einen Prozentsatz zwischen 0 und 100% inklusive (aber nicht eine Mischung aus beiden) dargestellt wird.

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

Sie können einen vierten Parameter an `rgb()` übergeben, der den Alpha-Kanal der Farbe darstellt, der die Deckkraft steuert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen geben Ihnen unterschiedliche Transparenzgrade.

> [!NOTE]
> Das Setzen eines Alpha-Kanals auf eine Farbe unterscheidet sich in einer Hinsicht von der Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir zuvor betrachtet haben. Wenn Sie die Deckkraft verwenden, machen Sie das Element und alles darin unsichtbar, während die Verwendung von RGB mit einem Alpha-Parameter nur die von Ihnen spezifizierte Farbe unsichtbar macht.

Im folgenden Beispiel haben wir ein Hintergrundbild auf den enthaltenen Block unserer farbigen Kästchen hinzugefügt. Dann haben wir die Kästchen mit unterschiedlichen Deckkraftwerten versehen — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alphakanalwert kleiner ist. In diesem Beispiel versuchen Sie, die Alphakanalwerte zu ändern, um zu sehen, wie sich dies auf die Farbausgabe auswirkt.

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

### Verwendung von Farbtönen zur Farbenspezifikation

Wenn Sie über Schlüsselwörter, Hexadezimal- und `rgb()`-Werte für Farben hinausgehen möchten, könnten Sie versuchen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Farbton ist die Eigenschaft, die uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen. Das Schlüsselkonzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) spezifizieren können, da die meisten Farbmodelle Farbtöne unter Verwendung eines {{Glossary("color_wheel", "Farbkreises")}} beschreiben.

Es gibt mehrere Farbfuntionen, die eine [`<hue>`](/de/docs/Web/CSS/hue)-Komponente beinhalten, einschließlich `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farbfuntionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend darauf, was Menschen sehen können.

Wenn Sie mehr über diese Funtionen und Farbräume erfahren möchten, sehen Sie sich den [Leitfaden zum Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften, die Farbwerte verwenden, bietet.

### HWB

Ein großartiger Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Funktion, die eine `srgb()`-Farbe spezifiziert. Die drei Teile sind:

- **Farbton**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue)-Wert zwischen 0 und 360 an, der die Winkel um einen Farbkreis darstellt.
- **Weißgehalt**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weiß) bis `100%` (voller Weißgehalt) an.
- **Schwarzwert**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von 0% (kein Schwarzwert) bis 100% (voller Schwarzwert) an.

### HSL

Ähnlich wie die `hwb()`-Funktion ist auch die [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Funktion, die ebenfalls eine `srgb()`-Farbe spezifiziert. HSL verwendet `Farbton` zusätzlich zu `Sättigung` und `Helligkeit`:

- **Farbton**
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0–100% an, wobei 0 keine Farbe ist (es wird als Grauton angezeigt), und 100% ist volle Farbsättigung.
- **Helligkeit**: Wie licht oder hell ist die Farbe? Dies nimmt einen Wert von 0–100% an, wobei 0 kein Licht (es wird vollständig schwarz erscheinen) und 100% volles Licht (es wird vollständig weiß erscheinen) ist.

Der `hsl()`-Farbwert hat auch einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) von der Farbe getrennt ist und die Alpha-Transparenz darstellt.

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

Genau wie bei `rgb()` können Sie einen Alpha-Parameter an `hsl()` übergeben, um die Deckkraft zu spezifizieren:

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

Im folgenden Beispiel haben wir ein Bild und einen Verlauf als Wert für die CSS-`background-image`-Eigenschaft demonstriert.

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
> Es gibt einige andere mögliche Werte für `<image>`, diese sind jedoch neuer und haben derzeit eine schlechte Browser-Unterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie darüber lesen möchten.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp repräsentiert ein Set von 2D-Koordinaten, das verwendet wird, um ein Element wie ein Hintergrundbild zu positionieren (über [`background-position`](/de/docs/Web/CSS/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` verwenden, um Elemente mit bestimmten Grenzen einer 2D-Box zu auszurichten, zusammen mit Längen, die Offsets von den oberen und linken Kanten der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die Position horizontal fest, der zweite vertikal. Wenn Sie lediglich Werte für eine Achse angeben, wird die andere auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px von oben und rechts vom Container aus mithilfe eines Schlüsselworts positioniert. Experimentieren Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.

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

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>`-Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Deshalb werden sie nicht in Anführungszeichen gesetzt — sie werden nicht als Zeichenfolgen behandelt.

Es gibt Stellen, an denen Sie Zeichenfolgen in CSS verwenden. Zum Beispiel [beim Spezifizieren von generierten Inhalten](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall ist der Wert in Anführungszeichen gesetzt, um zu zeigen, dass er eine Zeichenfolge ist. Im folgenden Beispiel verwenden wir unquotierte Farb-Schlüsselwörter zusammen mit einer gequoteten generierten Inhaltszeichenfolge.

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

In der Programmierung ist eine Funktion ein Code-Abschnitt, der eine bestimmte Aufgabe ausführt. Funktionen sind nützlich, weil Sie einen Code einmal schreiben und dann viele Male wiederverwenden können, anstatt die gleiche Logik immer wieder neu schreiben zu müssen. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern auch praktische eingebaute Funktionen für allgemeine Aufgaben, damit Sie sie nicht selbst von Grund auf neu schreiben müssen.

CSS hat auch [Funktionen](/de/docs/Web/CSS/CSS_Functions), die auf ähnliche Weise wie Funktionen in anderen Sprachen arbeiten. Tatsächlich haben wir CSS-Funktionen bereits im [Farbabschnitt](#farbe) oben mit den Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) gesehen.

Neben der Anwendung von Farben können Sie mit CSS-Funktionen auch viele andere Dinge tun. Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Functions#transform_functions) eine übliche Möglichkeit, um Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren. Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu bewegen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale) um etwas größer oder kleiner zu machen.

### Mathematik Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie möglicherweise mit Zahlen wie `300px` für Längen oder `200ms` für Dauern. Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie einige Mathematik durchführen. Sie könnten den Prozentsatz eines Werts berechnen oder eine Zahl zu einer anderen hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions), mit denen wir Berechnungen durchführen können, anstatt sich auf statische Werte zu verlassen oder die Berechnungen in Javascript durchzuführen. Eine der häufigsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), mit der Sie Operationen wie Addition, Subtraktion, Multiplikation und Division durchführen können.

Angenommen, wir möchten die Breite eines Elements auf 20% seines übergeordneten Containers plus 100px festlegen. Dies können wir nicht mit einem statischen Wert angeben — wenn das übergeordnete Element eine prozentuale Breite (oder eine relative Einheit wie `em` oder `rem`) verwendet, dann variiert es je nach verwendetem Kontext und anderen Faktoren wie dem Gerät des Benutzers oder der Fensterbreite des Browsers. Wir können jedoch `calc()` verwenden, um die Breite des Elements auf 20% seines übergeordneten Containers plus 100px zu setzen. Die 20% basieren auf der Breite des übergeordneten Containers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max) und [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie jeweils den kleinsten, größten oder mittleren Wert aus einem Satz von Werten auswählen. Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos) und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel zum Drehen von Elementen um einen Punkt zu berechnen oder Farben auszuwählen, die einen [Farbtonwinkel](/de/docs/Web/CSS/hue) als Parameter verwenden. [Exponentialfunktionen](/de/docs/Web/CSS/CSS_Functions#exponential_functions) könnten auch für Animationen und Übergänge verwendet werden, wenn Sie sehr spezifische Kontrolle darüber haben möchten, wie sich etwas bewegt und aussieht.

Zu wissen über CSS-Funktionen ist nützlich, damit Sie sie erkennen, wenn Sie sie sehen. Sie sollten beginnen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen, benutzerdefinierten oder wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erzielen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_tasks).

## Zusammenfassung

Dies war ein schneller Durchlauf der häufigsten Arten von Werten und Einheiten, denen Sie begegnen könnten. Sie können sich alle verschiedenen Typen auf der [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Referenzseite ansehen — Sie werden viele dieser Verwendungen kennenlernen, während Sie diese Lektionen durchgehen.

Das Wichtigste ist zu bedenken, dass jede Eigenschaft eine definierte Liste zulässiger Wertetypen hat und jeder Wertetyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Details hier auf MDN nachschlagen. Zum Beispiel ist es nützlich, zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch erlaubt, einen Farbverlauf zu erstellen, ist jedoch vielleicht nicht sofort ersichtliches Wissen!

Im nächsten Artikel werden wir uns anschauen, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
