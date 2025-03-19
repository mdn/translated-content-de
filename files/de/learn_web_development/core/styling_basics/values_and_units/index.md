---
title: CSS-Werte und -Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede Eigenschaft, die in CSS verwendet wird, hat einen **Wertetyp**, der beschreibt, welche Art von Werten zulässig ist. In diesem Abschnitt werden wir uns einige der am häufigsten verwendeten Wertetypen ansehen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftenseite](/de/docs/Web/CSS/Reference#index) hat einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (Studium der
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegenden HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">Grundlegende CSS-Syntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen annehmen können und was diese Typen repräsentieren.</li>
          <li>Vertrautheit im Umgang mit den grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenfolgen und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und worin der Unterschied zwischen ihnen besteht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie in spitzen Klammern (`<`, `>`) angezeigt werden, wie z.B. [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jede gültige Farbe als Wert für diese Eigenschaft verwenden können, wie sie auf der Referenzseite für [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt ist.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben – zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp. Sie können die spitzen Klammern verwenden, um festzustellen, welches Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber aus dem Kontext sollte klar sein, welches Sie betrachten. Wenn Sie sich nicht sicher sind, versuchen Sie, danach auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass in CSS Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar – wenn Sie etwas in CSS als Datentyp referenziert sehen, ist es eigentlich nur eine elegante Bezeichnung für Wertetyp. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird und den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort und den Hintergrund mit der `rgb()`-Funktion festgelegt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung zulässiger Werte zu definieren. Das bedeutet, dass wenn Sie `<color>` als gültig sehen, Sie sich nicht fragen müssen, welche der verschiedenen Farbwert-Typen verwendet werden können – Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browserunterstützung. Beispielsweise, wenn Sie sich die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, werden Sie sehen, dass im Abschnitt zur Browser-Kompatibilität verschiedene Typen von Farbwerten und die Unterstützung für diese aufgelistet sind.

Werfen wir einen Blick auf einige der Wert- und Einheitstypen, denen Sie häufig begegnen können, mit Beispielen, sodass Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentsätze

Es gibt verschiedene numerische Wertetypen, die Sie in CSS eventuell verwenden. Die folgenden zählen alle zu numerisch:

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
        Ein <code>&#x3C;number></code> repräsentiert eine Dezimalzahl — es kann
        oder muss keinen Dezimalpunkt mit einer Bruchkomponente haben. Beispielsweise
        <code>0.255</code>, <code>128</code>, oder <code>-1.2</code>.
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
        <code>&#x3C;number></code> mit einer Einheit angehängt. Zum Beispiel,
        <code>45deg</code>, <code>5s</code>, oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine Überkategorie, die die {{cssxref("length")}},
        <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code>,
        <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code>, und
        <code
          ><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code
        >
        Typen beinhaltet.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> repräsentiert einen Bruchteil eines anderen
        Wertes. Zum Beispiel, <code>50%</code>. Prozentwerte sind immer
        relativ zu einer anderen Menge. Zum Beispiel ist die Länge eines Elements
        relativ zur Länge des übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, auf den Sie am häufigsten stoßen werden, ist {{cssxref("length")}}. Beispielsweise `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relativ und absolut. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und gelten im Allgemeinen als immer gleich groß.

| Einheit | Name              | Entspricht               |
| ------- | ----------------- | ------------------------ |
| `cm`    | Zentimeter        | 1cm = 37,8px = 25,2/64in |
| `mm`    | Millimeter        | 1mm = 1/10 von 1cm       |
| `Q`     | Viertelmillimeter | 1Q = 1/40 von 1cm        |
| `in`    | Zoll              | 1in = 2,54cm = 96px      |
| `pc`    | Picas             | 1pc = 1/6 von 1in        |
| `pt`    | Punkte            | 1pt = 1/72 von 1in       |
| `px`    | Pixel             | 1px = 1/96 von 1in       |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck und nicht für den Bildschirmausgang verwendet werden. Zum Beispiel verwenden wir `cm` (Zentimeter) normalerweise nicht auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit etwas sorgfältiger Planung die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skalieren können. Für eine vollständige Liste der verfügbaren relativen Einheiten sehen Sie auf der Referenzseite für den {{cssxref("length")}}-Typ nach.

In diesem Abschnitt werden wir einige der am häufigsten verwendeten relativen Einheiten erkunden.

#### Erkunden eines Beispiels

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Das erste Feld hat eine {{cssxref("width")}}, die in Pixeln gesetzt ist. Als absolute Einheit wird diese Breite unverändert bleiben, egal was sich ändert.

Das zweite Feld hat eine Breite, die in `vw` (Viewport-Breite) Einheiten gesetzt ist. Dieser Wert ist relativ zur Breite des Ansichtsfensters, sodass 10vw 10 Prozent der Breite des Ansichtsfensters sind. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Feldes ändern. Dieses Beispiel ist jedoch in die Seite mit einem [`<iframe>`](/de/docs/Web/HTML/Element/iframe) eingebettet, sodass dies nicht funktioniert. Um dies in Aktion zu sehen, müssen Sie [das Beispiel in einem eigenen Browser-Tab öffnen](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Feld verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umgebenden {{htmlelement("div")}} festgelegt, das eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert zu `1.5em` und Sie werden sehen, dass sich die Schriftgröße aller Elemente vergrößert, aber nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie den Anweisungen oben gefolgt sind, versuchen Sie, mit den Werten auf andere Weise zu experimentieren, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die zwei relativen Längen, auf die Sie am häufigsten stoßen werden, wenn Sie irgendetwas von Kästchen bis hin zu Texten skalieren. Es lohnt sich zu verstehen, wie diese funktionieren, und die Unterschiede zwischen ihnen, insbesondere wenn Sie sich auf komplexere Themen wie [Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) einlassen. Das untenstehende Beispiel liefert eine Demonstration.

Der unten gezeigte HTML-Code ist ein Satz von verschachtelten Listen — wir haben zwei Listen insgesamt und beide Beispiele haben denselben HTML-Code. Der einzige Unterschied ist, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Zu Beginn legen wir 16px als Schriftgröße auf dem `<html>`-Element fest.

**Zusammenfassend bedeutet die `em`-Einheit "die Schriftgröße meines übergeordneten Elements"** wenn für `font-size` verwendet (und "meine eigene Schriftgröße" wenn für etwas anderes verwendet). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` übernehmen ihre Größe von ihrem übergeordneten Element. So wird jede aufeinanderfolgende Verschachtelungsebene zunehmend größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat — 1.3-fache der Schriftgröße ihres übergeordneten Elements.

**Zusammenfassend bedeutet die `rem`-Einheit "die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` übernehmen ihre Größe vom Wurzelelement (`<html>`). Dies bedeutet, dass jede aufeinanderfolgende Verschachtelungsebene nicht weiter größer wird.

Aber wenn Sie die `font-size` des `<html>`-Elements im CSS ändern, werden Sie sehen, dass sich alles andere entsprechend verändert — sowohl `rem`- als auch `em`-größen-basierter Text.

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

#### Zeilenhöheneinheiten

`lh` und `rlh` sind relative Längeneinheiten ähnlich zu `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` besteht darin, dass erstere relativ zur Zeilenhöhe des Elements selbst ist, während letztere sich auf die Zeilenhöhe des Wurzelelements, normalerweise `<html>`, bezieht.

Mit diesen Einheiten können wir die Dekoration von Boxen präzise am Text ausrichten. In diesem Beispiel verwenden wir die `lh`-Einheit, um notizblockartige Linien mit [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) zu erzeugen. Es spielt keine Rolle, wie die Zeilenhöhe des Textes ist, die Linien werden immer an der richtigen Stelle beginnen.

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

In vielen Fällen wird ein Prozentsatz wie eine Länge behandelt. Das Problem mit Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert gesetzt werden. Wenn Sie beispielsweise die `font-size` eines Elements als Prozentsatz setzen, wird es ein Prozentsatz der `font-size` des übergeordneten Elements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, wird es ein Prozentsatz der `width` des übergeordneten Elements sein.

Im untenstehenden Beispiel haben die beiden prozentual dimensionierten Boxen und die beiden pixel-dimensionierten Boxen dieselben Klassennamen. Die Sets sind jeweils 40% und 200px breit.

Der Unterschied ist, dass das zweite Set von zwei Boxen innerhalb eines Wrappers ist, der 400 Pixel breit ist. Die zweite 200px breite Box ist genauso breit wie die erste, aber die zweite 40% Box ist jetzt 40% von 400px — viel schmaler als die erste!

Versuchen Sie die Breite des Wrappers oder den Prozentwert zu ändern, um zu sehen, wie dies funktioniert:

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

Das nächste Beispiel hat Schriftgrößen in Prozent gesetzt. Jedes `<li>` hat eine `font-size` von 80%; daher werden die verschachtelten Listenelemente zunehmend kleiner, da sie ihre Größe von ihrem übergeordneten Element erben.

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

Beachten Sie, dass, während viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur eine Länge akzeptieren. Sie können auf den MDN-Eigenschaftenreferenzseiten sehen, welche Werte akzeptiert werden. Wenn der zulässige Wert {{cssxref("length-percentage")}} enthält, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der zulässige Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen ohne eine hinzugefügte Einheit. Ein Beispiel für eine Eigenschaft, die eine einheitslose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Opazität eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (völlig transparent) und `1` (völlig opak).

Im folgenden Beispiel versuchen Sie den Wert der `opacity` zu ändern, um verschiedene Dezimalwerte zwischen `0` und `1` zu sehen, und beobachten Sie, wie das Feld und sein Inhalt mehr oder weniger opak wird:

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

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es, um die Farbe von Texten, Hintergründen, Rahmen usw. zu bestimmen. Es gibt viele Möglichkeiten, Farben in CSS festzulegen, die es Ihnen erlauben, eine Vielzahl von aufregenden Eigenschaften zu kontrollieren.

Das Standard-Farbsystem, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, was es ermöglicht, etwa 16,7 Millionen verschiedene Farben durch eine Kombination aus unterschiedlichen Rot-, Grün- und Blaukanälen anzuzeigen, wobei jeder Kanal 256 verschiedene Werte erlaubt (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir uns zunächst die gebräuchlichsten Möglichkeiten zur Spezifizierung von Farben ansehen: Schlüsselwörter, Hexadezimal- und `rgb()`-Werte verwenden. Wir werden auch einen kurzen Blick auf zusätzliche Farb-Funktionen werfen, sodass Sie sie erkennen, wenn Sie ihnen begegnen, oder verschiedene Möglichkeiten zur Farbgebung ausprobieren können.

Sie werden wahrscheinlich ein Farbpalette festlegen und diese Farben — und Ihre bevorzugte Methode zur Farbgebung — im gesamten Projekt verwenden. Sie können Farbmodelle mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt dieselbe Methode zur Deklaration von Farben verwendet, um Konsistenz zu gewährleisten!

### Farb-Schlüsselwörter

Sie werden sehen, dass die Farb-Schlüsselwörter (oder "benannte Farben") in vielen MDN-Codebeispielen verwendet werden. Da der [`<named-color>`](/de/docs/Web/CSS/named-color) Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie nicht oft auf Produktiv-Websites mit einer ausgefeilten Designsprache verwendet. Auf der anderen Seite werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu sagen, welche Farbe erwartet wird, damit der Lernende sich auf den vermittelten Inhalt konzentrieren kann.

Versuchen Sie, mit verschiedenen Farbwerten in den unten stehenden Live-Beispielen zu spielen, um mehr darüber zu erfahren, wie sie funktionieren:

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

Der nächste Farbwert-Typ, dem Sie wahrscheinlich begegnen werden, sind hexadezimale Codes. Hexadezimal verwendet 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` ist. Jeder Farbwert im Hexadezimalsystem besteht aus einem Hash-/Pfund-Symbol (`#`), gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb` zum Beispiel), mit optional ein oder zwei zusätzlichen hexadezimalen Zeichen, die die Alpha-Transparenz der vorherigen drei oder sechs Zeichen Farbwerte repräsentieren.

Wenn man Hexadezimal zur Beschreibung von RGB-Werten verwendet, ist jedes **Paar** von hexadezimalen Zeichen eine Dezimalzahl, die einen der Kanäle darstellt — rot, grün und blau — und es uns erlaubt, einen der 256 verfügbaren Werte für jeden zu spezifizieren (16 x 16 = 256). Diese Werte sind weniger intuitiv als Schlüsselwörter zur Farbbestimmung, aber sie sind viel vielseitiger, da Sie damit jede RGB-Farbe darstellen können.

Versuchen Sie, die Werte zu ändern, um zu sehen, wie sich die Farben unterscheiden:

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

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter, die die **rot**, **grün** und **blau** Kanalwerte der Farben repräsentieren, mit einem optionalen vierten Wert getrennt durch einen Schrägstrich ('/') der die Deckkraft ähnlich wie Hex-Werte darstellt. Der Unterschied zu RGB ist, dass jeder Kanal nicht durch zwei Hex-Ziffern, sondern durch eine Dezimalzahl zwischen 0 und 255 oder eine Prozentzahl zwischen 0% und 100% inklusive (aber keine Mischung aus beiden) repräsentiert wird.

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

Sie können einen vierten Parameter an `rgb()` übergeben, der den Alphakanal der Farbe repräsentiert, der die Deckkraft steuert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig opak macht. Werte dazwischen geben Ihnen verschiedene Transparenzstufen.

> [!NOTE]
> Das Setzen eines Alphakanals auf eine Farbe hat einen entscheidenden Unterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir zuvor betrachtet haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles in ihm opak, während die Verwendung von RGB mit einem Alphaparameter nur die Farbe, die Sie festlegen, opak macht.

Im untenstehenden Beispiel haben wir ein Hintergrundbild zum umgebenden Block unserer farbigen Boxen hinzugefügt. Wir haben die Boxen dann mit verschiedenen Deckkraftwerten versehen — beachten Sie, dass der Hintergrund mehr durchscheint, wenn der Alphakanalwert kleiner ist. In diesem Beispiel versuchen Sie die Alphakanalwerte zu ändern, um zu sehen, wie es die Farbgebung beeinflusst.

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

Der `sRGB` Farbraum definiert Farben im **rot** (r), **grün** (g) und **blau** (b) Farbraum.

### Farbton zur Angabe einer Farbe verwenden

Wenn Sie über Schlüsselwörter, Hexadezimal und `rgb()` für Farben hinausgehen möchten, könnten Sie versuchen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Farbton ist die Eigenschaft, die es uns erlaubt, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen. Der Schlüsselbegriff ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) angeben können, da die meisten Farbmodelle Farbtöne mithilfe eines {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue)-Komponente enthalten, einschließlich `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farb-Funktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich die Anleitung [Farben mit CSS auf HTML-Elemente anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color), die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS bietet und die Eigenschaften, die Farbwerte verwenden.

### HWB

Ein guter Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Funktion, die eine `srgb()`-Farbe spezifiziert. Die drei Teile sind:

- **Farbton**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen 0 und 360, der die Winkel eines Farbkreises darstellt.
- **Weißgehalt**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weiß) bis `100%` (vollständig weiß).
- **Schwarzgehalt**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von 0% (kein Schwarz) bis 100% (vollständig schwarz).

### HSL

Ähnlich zur `hwb()`-Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Funktion, die ebenfalls eine `srgb()`-Farbe definiert. HSL verwendet `Farbton`, zusätzlich zu `Sättigung` und `Helligkeit`:

- **Farbton**
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 keine Farbe ist (es wird als Grauton erscheinen) und 100% die volle Farbsättigung ist.
- **Helligkeit**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 kein Licht ist (es wird vollständig schwarz erscheinen) und 100% volles Licht ist (es wird vollständig weiß erscheinen).

Der `hsl()`-Farbwert hat auch einen optionalen vierten Wert, getrennt von der Farbe durch einen Schrägstrich (`/`), der die Alphatransparenz darstellt.

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

Genau wie bei `rgb()` können Sie einen Alphaparameter an `hsl()` übergeben, um die Deckkraft zu spezifizieren:

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

Der [`<image>`](/de/docs/Web/CSS/image) Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion aufgerufen wird, oder ein Verlauf.

Im untenstehenden Beispiel haben wir ein Bild und einen Verlauf als Wert für die CSS-`background-image`-Eigenschaft dargestellt.

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
> Es gibt einige andere mögliche Werte für `<image>`, diese sind jedoch neuer und haben derzeit eine schlechte Browser-Unterstützung. Informieren Sie sich auf der Seite auf MDN über den [`<image>`](/de/docs/Web/CSS/image) Datentyp, wenn Sie mehr darüber erfahren möchten.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp repräsentiert ein Set von 2D-Koordinaten, das zur Positionierung eines Elements wie eines Hintergrundbildes (über [`background-position`](/de/docs/Web/CSS/background-position)) verwendet wird. Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` annehmen, um Elemente mit bestimmten Begrenzungen einer 2D-Box auszurichten, sowie Längen, die Versätze von den oberen und linken Rändern der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die horizontale Position fest, der zweite die vertikale. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` standardisiert.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px vom oberen Rand und rechts vom Container mit einem Schlüsselwort positioniert. Spielen Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.

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

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (z.B. `<color>` Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Daher sind sie nicht zitiert — sie werden nicht als Zeichenfolgen behandelt.

Es gibt Stellen, an denen Sie Zeichenfolgen in CSS verwenden. Zum Beispiel [beim Festlegen von generiertem Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu zeigen, dass es sich um eine Zeichenfolge handelt. Im untenstehenden Beispiel verwenden wir unverzierte Farb-Schlüsselwörter zusammen mit einer zitierten generierten Inhaltszeichenfolge.

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

In der Programmierung ist eine Funktion ein Stück Code, das eine spezifische Aufgabe ausführt. Funktionen sind nützlich, weil Sie Code einmal schreiben und dann mehrfach wiederverwenden können, anstatt immer wieder dieselbe Logik zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern bieten auch praktische eingebaute Funktionen für gängige Aufgaben, sodass Sie sie nicht selbst von Grund auf schreiben müssen.

CSS hat ebenfalls [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die ähnlich funktionieren wie Funktionen in anderen Sprachen. Tatsächlich haben wir bereits CSS-Funktionen im Abschnitt [Farbe](#farbe) oben mit [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktionen gesehen.

Abgesehen von der Anwendung von Farben können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun. Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#transform_functions) eine übliche Möglichkeit, um Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren. Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu bewegen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate), um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale), um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Zeiträume. Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie einige Berechnungen anstellen. Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen addieren und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions), die es uns ermöglichen, Berechnungen durchzuführen, anstatt sich auf statische Werte zu verlassen oder die Berechnungen in JavaScript auszuführen. Eine der häufigsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die es Ihnen ermöglicht, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Zum Beispiel, sagen wir, wir wollen die Breite eines Elements auf 20% seines übergeordneten Containers plus 100px setzen. Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn der übergeordnete Container eine Breite in Prozent (oder eine relative Einheit wie `em` oder `rem`) verwendet, dann variiert er je nach Kontext, in dem er verwendet wird, und anderen Faktoren wie dem Gerät oder der Fenstebreite des Benutzers. Wir können jedoch `calc()` verwenden, um die Breite des Elements auf 20% seines übergeordneten Containers plus 100px zu setzen. Die 20% basieren auf der Breite des übergeordneten Containers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max) und [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie jeweils den kleinsten, größten oder mittleren Wert aus einem Satz von Werten auswählen. Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos) und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel für das Drehen von Elementen um einen Punkt zu berechnen oder Farben auszuwählen, die einen [Farbwinkel](/de/docs/Web/CSS/hue) als Parameter verwenden. [Exponentielle Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#exponential_functions) können auch für Animationen und Übergänge verwendet werden, wenn Sie sehr spezifische Kontrolle darüber benötigen, wie sich etwas bewegt und aussieht.

Es ist nützlich, über CSS-Funktionen Bescheid zu wissen, damit Sie sie erkennen, wenn Sie sie sehen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen, benutzerdefinierten oder sich wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erzielen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu verifizieren, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_tasks).

## Zusammenfassung

Dies war ein schneller Durchlauf durch die am häufigsten vorkommenden Typen von Werten und Einheiten, denen Sie begegnen können. Sie können sich alle verschiedenen Typen auf der [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul-Seite ansehen — Sie werden vielen dieser in Nutzung begegnen, während Sie diese Lektionen durcharbeiten.

Der wichtigste Punkt, den Sie sich merken sollten, ist, dass jede Eigenschaft eine definierte Liste von erlaubten Wertetypen hat, und jeder Wertetyp hat eine Definition, die erklärt, was die Werte sind. Sie können dann die spezifischen Informationen hier auf MDN nachschlagen. Zum Beispiel zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch ermöglicht, einen Farbverlauf zu erstellen, ist nützlich, aber vielleicht nicht sofort offensichtliches Wissen!

Im nächsten Artikel werden wir uns ansehen, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
