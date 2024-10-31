---
title: CSS-Werte und Einheiten
slug: Learn/CSS/Building_blocks/Values_and_units
l10n:
  sourceCommit: b68db31ae68960ce01641442bd26f6b6d82e667d
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede Eigenschaft, die in CSS verwendet wird, hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie zulässig sind. In dieser Lektion schauen wir uns einige der am häufigsten verwendeten Wertetypen an, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) hat einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um die verschiedenen Arten von Werten und Einheiten kennenzulernen, die in CSS-Eigenschaften verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In den CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie in spitzen Klammern angezeigt werden, wie z.B. [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jeden gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie auf der Seite [`<color>`](/de/docs/Web/CSS/color_value) referenziert.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie etwas in CSS als Datentyp bezeichnen, ist es im Grunde nur ein hochtrabender Ausdruck für Wertetyp. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

> [!NOTE]
> CSS-Wertetypen sind dazu geneigt, in spitzen Klammern (`<`, `>`) eingeschlossen zu werden, um sie von CSS-Eigenschaften zu unterscheiden.
> Zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp.
> Dies sollte nicht mit HTML-Elementen verwechselt werden, da diese ebenfalls spitze Klammern verwenden, aber der Kontext sollte klarstellen, was gemeint ist.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort und den Hintergrund mit der `rgb()`-Funktion festgelegt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung zulässiger Werte zu definieren. Das bedeutet, dass wenn Ihnen `<color>` als gültig erscheint, Sie sich nicht fragen müssen, welcher der verschiedenen Farbwerttypen verwendet werden kann — wie Schlüsselwörter, Hexwerte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browser-Unterstützung. Wenn Sie zum Beispiel auf die Seite für [`<color>`](/de/docs/Web/CSS/color_value) schauen, werden Sie sehen, dass im Abschnitt "Browser-Kompatibilität" verschiedene Farbwerttypen und ihre Unterstützung aufgelistet sind.

Schauen wir uns einige der Werttypen und Einheiten an, auf die Sie häufig stoßen werden, mit Beispielen, sodass Sie verschiedene mögliche Werte ausprobieren können.

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
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar – sie kann
        oder kann keinen Dezimalpunkt mit einem Bruchteil haben. Zum
        Beispiel: <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Ein <code>&#x3C;dimension></code> ist ein
        <code>&#x3C;number></code> mit einer Einheit. Zum Beispiel
        <code>45deg</code>, <code>5s</code> oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine Oberkategorie, die
        {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
        >, <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code
        > und
        <code
          ><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code
        >
        Typen enthält.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> repräsentiert einen Bruchteil eines
        anderen Wertes. Zum Beispiel: <code>50%</code>. Prozentwerte sind
        immer relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines
        Elements relativ zur Länge des Elternelements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, auf den Sie am häufigsten stoßen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. In CSS gibt es zwei Arten von Längen - relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und gelten im Allgemeinen als immer gleich groß.

| Einheit | Name               | Entspricht               |
| ------- | ------------------ | ------------------------ |
| `cm`    | Zentimeter         | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter         | 1mm = 1/10 von 1cm       |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 von 1cm        |
| `in`    | Zoll               | 1in = 2.54cm = 96px      |
| `pc`    | Picas              | 1pc = 1/6 von 1in        |
| `pt`    | Punkt              | 1pt = 1/72 von 1in       |
| `px`    | Pixel              | 1px = 1/96 von 1in       |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck anstelle der Bildschirmausgabe verwendet werden. Zum Beispiel verwenden wir typischerweise `cm` (Zentimeter) nicht auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Verwandte Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des Elternelements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Viewports.

Der Vorteil der Verwendung von relativen Einheiten besteht darin, dass Sie mit etwas Planung die Größe von Text oder anderen Elementen im Verhältnis zu allem anderen auf der Seite skalieren können. Für eine vollständige Liste der verfügbaren relativen Einheiten siehe die Referenzseite für den {{cssxref("length")}} Typ.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erforschen.

#### Ein Beispiel erkunden

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Die erste Box hat eine {{cssxref("width")}} in Pixeln festgelegt. Als absolute Einheit bleibt diese Breite gleich, egal was sonst passiert.

Die zweite Box hat eine Breite in `vw` (Viewport-Breite) Einheiten festgelegt. Dieser Wert ist relativ zur Breite des Viewports, sodass 10vw 10 Prozent der Breite des Viewports beträgt. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe der Box ändern. Dieses Beispiel ist jedoch in die Seite eingebettet, daher funktioniert dies nicht. Um dies in Aktion zu sehen, müssen Sie [das Beispiel nach dem Öffnen in einem eigenen Browser-Tab ausprobieren](https://mdn.github.io/css-examples/learn/values-units/length.html).

Die dritte Box verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umgebenden {{htmlelement("div")}} festgelegt, das eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert in `1.5em` und Sie werden sehen, dass die Schriftgröße aller Elemente zunimmt, aber nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

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

`em` und `rem` sind die beiden relativen Längen, denen Sie am häufigsten begegnen werden, wenn Sie alles von Boxen bis Text skalieren. Es lohnt sich, zu verstehen, wie diese funktionieren, und die Unterschiede zwischen ihnen, insbesondere wenn Sie anfangen, sich mit komplexeren Themen wie [Text stilisieren](/de/docs/Learn/CSS/Styling_text) oder [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) zu beschäftigen. Das unten stehende Beispiel bietet eine Demonstration.

Der HTML-Code unten zeigt eine Reihe von verschachtelten Listen – wir haben insgesamt zwei Listen und beide Beispiele haben denselben HTML-Code. Der einzige Unterschied ist, dass die erste einen Klassenwert von _ems_ hat und die zweite einen von _rems_.

Zunächst setzen wir 16px als Schriftgröße auf dem `<html>`-Element.

**Zusammenfassend: Die Einheit `em` bedeutet "die Schriftgröße meines Elternelements"**, wenn sie für `font-size` verwendet wird (und "meine eigene Schriftgröße", wenn sie für etwas anderes verwendet wird). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` beziehen ihre Größe von ihrem Elternteil. So wird jede nachfolgende Verschachtelungsebene immer größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat – 1.3 mal die Schriftgröße ihres Elternteils.

**Zusammenfassend: Die Einheit `rem` bedeutet "die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größe vom Wurzelelement (`<html>`). Das bedeutet, dass jede nachfolgende Verschachtelungsebene nicht weiter wächst.

Wenn Sie jedoch in der CSS die `font-size` des `<html>`-Elements ändern, sehen Sie, dass sich alles andere relativ dazu ändert — sowohl `rem`- als auch `em`-größerer Text.

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

#### Linienhöheneinheiten

`lh` und `rlh` sind relative Längeneinheiten, ähnlich wie `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` besteht darin, dass die erste relativ zur Linienhöhe des Elements selbst ist, während die zweite relativ zur Linienhöhe des Wurzelelements ist, normalerweise `<html>`.

Mit diesen Einheiten können wir die Box-Dekoration präzise am Text ausrichten. In diesem Beispiel verwenden wir die `lh`-Einheit, um Notizblock-ähnliche Linien mit Hilfe von [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) zu erstellen. Es spielt keine Rolle, was die Linienhöhe des Textes ist, die Linien beginnen immer an der richtigen Stelle.

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

In vielen Fällen wird ein Prozentsatz wie eine Länge behandelt. Das Besondere an Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert festgelegt werden. Wenn Sie z.B. die `font-size` eines Elements als Prozentsatz setzen, ist es ein Prozentsatz der `font-size` des Elternelements. Wenn Sie ein Prozentsatz für einen `width`-Wert verwenden, wird er ein Prozentsatz der `width` des Elternteils sein.

Im folgenden Beispiel haben die beiden prozentual bemessenen Boxen und die beiden pixelgroßen Boxen dieselben Klassennamen. Die Sets sind jeweils 40% bzw. 200px breit.

Der Unterschied besteht darin, dass das zweite Set von zwei Boxen innerhalb eines Wrappers ist, der 400 Pixel breit ist. Die zweite 200px breite Box ist gleich breit wie die erste, aber die zweite 40%-Box ist jetzt 40% von 400px — viel schmaler als die erste!

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

Das nächste Beispiel hat Schriftgrößen in Prozent gesetzt. Jedes `<li>` hat eine `font-size` von 80%; daher werden die verschachtelten Listenelemente immer kleiner, da sie ihre Größe von ihrem Elternteil erben.

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

Beachten Sie, dass, obwohl viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur Längen akzeptieren. Sie können auf den MDN-Eigenschaftsreferenzseiten sehen, welche Werte akzeptiert werden. Wenn der zulässige Wert {{cssxref("length-percentage")}} enthält, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der zulässige Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen, ohne dass eine Einheit hinzugefügt wird. Ein Beispiel für eine Eigenschaft, die eine zahllose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Deckkraft eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig deckend).

Im folgenden Beispiel, versuchen Sie den Wert von `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und sehen Sie, wie die Box und ihr Inhalt mehr oder weniger deckend werden:

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
> Wenn Sie eine Zahl in CSS als Wert verwenden, sollte diese nicht in Anführungszeichen gesetzt werden.

## Farbe

Farbwerte können an vielen Stellen in CSS verwendet werden, egal ob Sie die Farbe von Text, Hintergründen, Rahmen und vielem mehr festlegen. Es gibt viele Möglichkeiten, Farben in CSS einzustellen, die Ihnen die Kontrolle über viele aufregende Eigenschaften ermöglichen.

Das Standardfarbsystem auf modernen Computern unterstützt 24-Bit-Farben, das etwa 16,7 Millionen verschiedene Farben über eine Kombination aus unterschiedlichen Rot-, Grün- und Blau-Kanälen mit jeweils 256 Werten pro Kanal anzeigen kann (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir uns zunächst die am häufigsten verwendeten Methoden zum Festlegen von Farben ansehen: die Verwendung von Schlüsselwörtern, hexadezimalen Werten und `rgb()`-Werten. Wir werden auch kurz einige zusätzliche Farb-Funktionen betrachten, damit Sie diese erkennen, wenn Sie sie sehen, oder mit verschiedenen Möglichkeiten des Farbauftrags experimentieren können.

Sie werden wahrscheinlich eine Farbpalette wählen und dann diese Farben — und Ihre bevorzugte Methode zur Farbangabe — während Ihres gesamten Projekts verwenden. Sie können Farbmodelle mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt dieselbe Methode zur Farbdeklaration verwendet, um Konsistenz zu gewährleisten.

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder 'benannte Farben') in vielen MDN-Code-Beispielen verwendet sehen. Da die Datenart [`<named-color>`s](/de/docs/Web/CSS/named-color) eine sehr begrenzte Anzahl von Farbwerten enthält, werden diese auf Produktionswebsites nicht häufig verwendet. Da das Schlüsselwort die Farbe als menschenlesbaren Textwert darstellt, werden benannte Farben in Code-Beispielen verwendet, um dem Benutzer klar mitzuteilen, welche Farbe erwartet wird, sodass der Lernende sich auf den behandelten Inhalt konzentrieren kann.

Versuchen Sie, mit verschiedenen Farbwerten in den Live-Beispielen unten zu spielen, um ein besseres Verständnis dafür zu bekommen, wie sie funktionieren:

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

Die nächste Art von Farbwert, mit der Sie wahrscheinlich in Kontakt kommen werden, sind hexadezimale Codes. Hexadezimal verwendet 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` ist. Jeder Hex-Farbwert besteht aus einem Hash-Symbol (`#`), gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb`, zum Beispiel), mit einem optionalen ein- oder zweistelligen hexadezimalen Zeichen, das die Alpha-Transparenz der vorherigen drei oder sechs Zeichen darstellt.

Bei der Verwendung von Hexadezimal zur Beschreibung von RGB-Werten ist jedes **Paar** von hexadezimalen Zeichen eine Dezimalzahl, die einen der Kanäle darstellt — rot, grün und blau — und es ermöglicht uns, einen der 256 verfügbaren Werte für jeden zu spezifizieren (16 x 16 = 256). Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, da Sie mit ihnen jede RGB-Farbe darstellen können.

Versuchen Sie, die Werte zu ändern, um zu sehen, wie die Farben variieren:

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

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion drei Parameter, die **rot**, **grün** und **blau** Kanalwerte der Farben darstellen, mit einem optionalen vierten Wert, der durch einen Schrägstrich ('/') getrennt ist und die Deckkraft darstellt, ähnlich wie bei Hex-Werten. Der Unterschied bei RGB besteht darin, dass jeder Kanal nicht durch zwei hexadezimale Ziffern, sondern durch eine Dezimalzahl zwischen 0 und 255 oder einen Prozentsatz zwischen 0% und 100% einschließlich beschrieben wird (jedoch sind keine deren Mischung erlaubt).

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

Sie können einen vierten Parameter an `rgb()` übergeben, der den Alpha-Kanal der Farbe darstellt, welcher die Deckkraft kontrolliert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Zwischenwerte geben Ihnen unterschiedliche Transparenzstufen.

> [!NOTE]
> Ein Alpha-Kanal auf einer Farbe einzustellen, hat einen wesentlichen Unterschied zur Verwendung der zuvor besprochenen {{cssxref("opacity")}}-Eigenschaft. Wenn Sie Opazität verwenden, machen Sie das Element und alles darin undurchsichtig, während Sie bei RGB mit einem Alpha-Parameter nur die Farbe, die Sie angeben, undurchsichtig machen.

Im folgenden Beispiel haben wir ein Hintergrundbild zum Containerblock unserer farbigen Boxen hinzugefügt. Wir haben dann die Boxen so eingestellt, dass sie unterschiedliche Deckkraftwerte haben — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanalwert kleiner ist. In diesem Beispiel, versuchen Sie, die Alpha-Kanal-Werte zu ändern, um zu sehen, wie es die Farbausgabe beeinflusst.

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

Der `sRGB`-Farbraum definiert Farben im **rot** (r), **grün** (g) und **blau** (b) Farbraum.

### Verwendung von Farbton zur Farbspezifikation

Wenn Sie über Schlüsselwörter, hexadezimale Werte und `rgb()` für Farben hinausgehen möchten, sollten Sie erwägen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Der Farbton ist die Eigenschaft, die es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen. Das Schlüsselkonzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) angeben können, da die meisten Farbmodelle die Farbtöne mit einem {{Glossary("color_wheel", "Farbrad")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten, darunter `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farb-Funktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend darauf, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, lesen Sie den [Leitfaden zur Anwendung von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften gibt, die Farbwerte verwenden.

### HWB

Ein guter Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Funktion, die eine `srgb()`-Farbe festlegt. Die drei Teile sind:

- **Hue**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue)-Wert zwischen 0 und 360, der die Winkel um ein Farbrad darstellt.
- **Whiteness**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (keine Weißheit) bis `100%` (volle Weißheit).
- **Blackness**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von 0% (keine Schwärze) bis 100% (volle Schwärze).

### HSL

Ähnlich wie bei der `hwb()`-Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Funktion, die ebenfalls eine `srgb()`-Farbe festlegt. HSL verwendet `Hue`, zusätzlich zu `Saturation` und `Lightness`:

- **Hue**
- **Saturation**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 keine Farbe ist (es erscheint als Graustufe), und 100% ist volle Farbsättigung.
- **Lightness**: Wie hell oder wie stark ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 kein Licht ist (es erscheint vollständig schwarz) und 100% volles Licht ist (es erscheint vollständig weiß).

Der `hsl()`-Farbwert hat ebenfalls einen optionalen vierten Wert, getrennt von der Farbe mit einem Schrägstrich (`/`), der die Alpha-Deckkraft darstellt.

Lassen Sie uns das RGB-Beispiel so aktualisieren, dass HSL-Farben verwendet werden:

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

Der Wertetyp [`<image>`](/de/docs/Web/CSS/image) wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, auf die über eine `url()`-Funktion zugegriffen wird, oder ein Gradient.

Im folgenden Beispiel haben wir ein Bild und einen Gradient als Wert für die CSS-Eigenschaft `background-image` demonstriert.

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
> Es gibt einige andere mögliche Werte für `<image>`, jedoch sind diese neuer und derzeit schlecht im Browser unterstützt. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie mehr darüber lesen möchten.

## Position

Der Wertetyp [`<position>`](/de/docs/Web/CSS/position_value) stellt einen Satz von 2D-Koordinaten dar, der verwendet wird, um ein Element wie ein Hintergrundbild zu positionieren (über [`background-position`](/de/docs/Web/CSS/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` verwenden, um Elemente mit spezifischen Begrenzungen einer 2D-Box auszurichten, zusammen mit Längen, die Verschiebungen von der oberen und linken Kante der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die horizontale Position fest, der zweite die vertikale. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` standardisiert.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px von der Oberseite und zur rechten Seite des Containers mit einem Schlüsselwort positioniert. Spielen Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.

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

## Zeichenketten und Bezeichner

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (z.B. `<color>` Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Als solche werden sie nicht in Anführungszeichen gesetzt — sie werden nicht als Zeichenketten behandelt.

Es gibt Stellen, an denen Sie Zeichenketten in CSS verwenden. Zum Beispiel [wenn Sie generierten Inhalt angeben](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#generating_content_with_before_and_after). In diesem Fall wird der Wert in Anführungszeichen gesetzt, um zu demonstrieren, dass es sich um eine Zeichenkette handelt. Im folgenden Beispiel verwenden wir unbequitierte Farb-Schlüsselwörter zusammen mit einer in Anführungszeichen gesetzte generierten Inhaltskette.

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

In der Programmierung ist eine Funktion ein Stück Code, das eine spezifische Aufgabe erfüllt.
Funktionen sind nützlich, weil Sie einmal Code schreiben und ihn dann viele Male wiederverwenden können, anstatt die gleiche Logik immer wieder neu zu schreiben.
Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern kommen auch mit praktischen eingebauten Funktionen für häufige Aufgaben, sodass Sie diese nicht selbst von Grund auf neu schreiben müssen.

CSS hat auch [Funktionen](/de/docs/Web/CSS/CSS_Functions), die ähnlich wie Funktionen in anderen Sprachen arbeiten.
Tatsächlich haben wir bereits CSS-Funktionen im Abschnitt [Farbe](#farbe) oben gesehen, wie die Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl).

Neben der Anwendung von Farben können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun.
Beispielsweise sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Functions#transform_functions) eine übliche Methode, um Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren.
Sie können [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu verschieben, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) zum Drehen von etwas oder [`scale()`](/de/docs/Web/CSS/transform-function/scale) um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Zeitdauern.
Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie einige Berechnungen durchführen.
Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions), die es uns ermöglichen, Berechnungen durchzuführen, anstatt auf statische Werte zu setzen oder die Mathematik in JavaScript zu erledigen.
Eine der gebräuchlichsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die es Ihnen ermöglicht, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Zum Beispiel, sagen wir, wir möchten die Breite eines Elements auf 20% seines Elternelements plus 100px setzen.
Wir können diesen Wert nicht mit einem statischen Wert angeben – wenn das Elternelement eine prozentuale Breite (oder eine relative Einheit wie `em` oder `rem`) verwendet, variiert es je nach dem Kontext, in dem es verwendet wird, und anderen Faktoren wie der Benutzergeräte- oder Browserfensterbreite.
Wir können jedoch `calc()` verwenden, um die Breite des Elements auf 20% seines Elternelements plus 100px zu setzen.
Die 20% basieren auf der Breite des Elternelements (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max) and [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie jeweils den kleinsten, größten oder mittleren Wert aus einer Menge von Werten wählen.
Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos) und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel für das Drehen von Elementen um einen Punkt zu berechnen, oder Farben wählen, die einen [Farbwinkel](/de/docs/Web/CSS/hue) als Parameter übernehmen.
[Exponentielle Funktionen](/de/docs/Web/CSS/CSS_Functions#exponential_functions) können auch für Animationen und Übergänge verwendet werden, wenn Sie sehr spezifische Kontrolle darüber benötigen, wie sich etwas bewegt und aussieht.

Das Wissen über CSS-Funktionen ist nützlich, um sie zu erkennen, wenn Sie sie sehen. Sie sollten damit beginnen, sie in Ihren Projekten auszuprobieren — sie helfen Ihnen dabei, benutzerdefinierten oder sich wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erreichen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie sich diese Informationen gemerkt haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_tasks).

## Zusammenfassung

Dies war ein kurzer Überblick über die häufigsten Arten von Werten und Einheiten, auf die Sie stoßen könnten. Sie können sich alle verschiedenen Arten auf der [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Referenzseite ansehen — Sie werden vielen von ihnen begegnen, während Sie diese Lektionen durcharbeiten.

Das Wichtigste ist, sich zu merken, dass jede Eigenschaft eine definierte Liste zulässiger Werttypen hat, und jeder Werttyp hat eine Definition, die erklärt, was die Werte sind. Sie können dann die Details hier auf MDN nachschlagen. Zum Beispiel ist es nützlich, aber vielleicht nicht offensichtliches Wissen, zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) es Ihnen auch erlaubt, einen Farbverlauf zu erstellen!

Im nächsten Artikel werden wir uns ansehen, wie [Elemente in CSS dimensioniert werden](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}
