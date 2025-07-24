---
title: CSS-Werte und -Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: a745bd9eaab91b3166ebd1354ec8817abfc29831
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen.
Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf.
In dieser Lektion werden wir einen Blick auf einige der am häufigsten verwendeten Wertetypen werfen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftenseite](/de/docs/Web/CSS/Reference#index) hat einen Syntaxabschnitt, der die Wertetypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS-Grundsyntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen annehmen können, und was diese Typen darstellen.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenketten und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind, und den Unterschied zwischen ihnen kennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

CSS-Werte definieren, welche Wertetypen für jede CSS-Eigenschaft gültig sind. Beispielsweise können Sie Farben für die Werte von {{cssxref("color")}} oder {{cssxref("border-color")}} angeben, aber keine Längen oder Prozentsätze.

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen daran erkennen, dass sie von spitzen Klammern (`<`, `>`) umgeben sind — wie zum Beispiel [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Werttyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jede gültige Farbe als Wert für diese Eigenschaft verwenden können, wie auf der [`<color>`](/de/docs/Web/CSS/color_value) Referenzseite aufgelistet.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnlichen Namen haben — zum Beispiel gibt es eine {{cssxref("color")}} Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value) Datentyp. Sie können die spitzen Klammern verwenden, um festzustellen, welches von beiden Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber es sollte aus dem Kontext klar sein, welches Sie betrachten. Wenn Sie sich nicht sicher sind, versuchen Sie, auf MDN danach zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie etwas in CSS als einen Datentyp sehen, ist es im Grunde nur eine ausgefeilte Art, Wertetyp zu sagen. Der Begriff _Wert_ bezieht sich auf einen bestimmten Ausdruck, der von einem Wertetyp unterstützt wird und den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Textfarbe unserer Überschrift mit einem Farbstichwort und den Hintergrund mit einem anderen Farbwerttyp — der `rgb()`-Funktion — festgelegt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS definiert eine Sammlung zulässiger Werte. Dies bedeutet, dass, wenn Sie `<color>` als gültig sehen, Sie nicht überlegen müssen, welche der verschiedenen Farbstichworttypen verwendet werden können — Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, dass sie von Ihrem Browser unterstützt werden. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über Browser-Unterstützung. Beispielsweise wird, wenn Sie die Seite für [`<color>`](/de/docs/Web/CSS/color_value) aufrufen, im Abschnitt zur Browser-Kompatibilität aufgelistet, welche Farbwerttypen unterstützt werden.

Sehen wir uns einige der Wert- und Einheitstypen an, die Ihnen häufig begegnen können, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

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
        <code><a href="/de/docs/Web/CSS/integer">&#x3C;integer></a></code>
      </td>
      <td>
        Ein <code>&#x3C;integer></code> ist eine Ganzzahl wie
        <code>1024</code> oder <code>-55</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/CSS/number">&#x3C;number></a></code>
      </td>
      <td>
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar — sie kann einen Dezimalpunkt mit einem Bruchanteil haben oder auch nicht. Zum Beispiel, <code>0.255</code>, <code>128</code>, oder <code>-1.2</code>.
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
        <code>&#x3C;number></code> mit einer Einheit angehängt. Zum Beispiel, <code>45deg</code>, <code>5s</code>, oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine Oberkategorie, die {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code>, <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code>, und
        <code
          ><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code> Typen enthält.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> stellt einen Bruchteil eines anderen Wertes dar. Zum Beispiel, <code>50%</code>. Prozentwerte sind immer relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines Elements relativ zur Länge des übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, auf den Sie am häufigsten stoßen werden, ist {{cssxref("length")}}. Zum Beispiel, `10px` (Pixel) oder `30em`. Es gibt zwei Typen von Längen, die in CSS verwendet werden — relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind nicht relativ zu irgendetwas anderem und gelten im Allgemeinen als immer gleich groß.

| Einheit | Name               | Entspricht               |
| ------- | ------------------ | ------------------------ |
| `cm`    | Zentimeter         | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter         | 1mm = 1/10 eines 1cm     |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines 1cm      |
| `in`    | Zoll               | 1in = 2.54cm = 96px      |
| `pc`    | Picas              | 1pc = 1/6 eines 1in      |
| `pt`    | Punkt              | 1pt = 1/72 eines 1in     |
| `px`    | Pixel              | 1px = 1/96 eines 1in     |

Die meisten dieser Einheiten sind nützlicher für den Druck als für die Bildschirmausgabe. Beispielsweise verwenden wir `cm` (Zentimeter) auf dem Bildschirm in der Regel nicht. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

Beachten Sie, dass `1px` nicht unbedingt einem physischen Gerätepixel entspricht. Auf HD-Displays kann es sich über mehrere physische Pixel erstrecken.
Ähnlich verhält es sich bei `1cm` in CSS oft nicht mit einem Hundertstel eines [SI](https://en.wikipedia.org/wiki/International_System_of_Units) Meters. Auf einem großen Fernsehbildschirm ist es in der Regel länger als das.
Die Längen sind perzeptiv: `16px` sieht auf einem Telefon, Laptop oder Fernseher bei typischer Betrachtungsentfernung ungefähr gleich aus.

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit etwas sorgfältiger Planung die Größe des Textes oder anderer Elemente relativ zu allem anderen auf der Seite skalierbar machen können. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den {{cssxref("length")}} Typ.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erkunden.

#### Ein Beispiel erkunden

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Das erste Kästchen hat eine {{cssxref("width")}} in Pixeln. Als absolute Einheit bleibt diese Breite gleich, egal was sich sonst noch ändert.

Das zweite Kästchen hat eine Breite in `vw` (Ansichtsfensterbreite) Einheiten. Dieser Wert ist relativ zur Ansichtsfensterbreite, und `10vw` sind 10 Prozent der Breite des Ansichtsfensters. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Kästchens ändern. Da dieses Beispiel jedoch auf der Seite mit einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) eingebettet ist, wird dies nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie [das Beispiel öffnen, nachdem Sie es in einem eigenen Browser-Tab geöffnet haben](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Kästchen verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem enthaltenen {{htmlelement("div")}} festgelegt, das eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em`, und Sie werden sehen, dass die Schriftgröße aller Elemente zunimmt, aber nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie die obigen Anweisungen befolgt haben, versuchen Sie, mit den Werten auf andere Weise zu experimentieren, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die beiden relativen Längen, auf die Sie bei der Größenänderung von allem von Boxen bis Text am häufigsten stoßen werden. Es ist wichtig, zu verstehen, wie diese funktionieren, und die Unterschiede zwischen ihnen zu kennen, insbesondere wenn Sie anfangen, sich mit komplexeren Themen wie dem [Stil von Texten](/de/docs/Learn_web_development/Core/Text_styling) oder der [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) zu befassen. Das folgende Beispiel bietet eine Demonstration.

Das nächste Beispiel ist eine Reihe von verschachtelten Listen — wir haben insgesamt zwei Listen, und beide Beispiele haben dasselbe HTML. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ hat und die zweite eine Klasse von _rems_.

Zu Beginn setzen wir `16px` als Schriftgröße auf dem `<html>`-Element.

Zum Rekapitulieren, die `em`-Einheit bedeutet **"die Schriftgröße des übergeordneten Elements"** wenn sie für `font-size` verwendet wird, und **"meine eigene Schriftgröße"** wenn sie für etwas anderes verwendet wird. Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `ems` übernehmen ihre Größenanpassung von ihrem übergeordneten Element. Also wird jede weitere Verschachtelungsebene zunehmend größer, da jede Schriftgröße auf `1.3em` festgelegt ist — 1,3 mal die Schriftgröße des übergeordneten Elements.

Um es zusammenzufassen, die `rem`-Einheit bedeutet **"die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb des {{htmlelement("ul")}} mit einer `class` von `rems` übernehmen ihre Größenanpassung vom Wurzel-Element (`<html>`). Das bedeutet, dass jede weitere Ebene der Verschachtelung nicht weiter größer wird.

Wenn Sie jedoch die `font-size` des `<html>`-Elements im CSS ändern, werden Sie sehen, dass sich alles andere im Verhältnis dazu ändert — sowohl `rem`- als auch `em`-großer Text. Versuchen Sie das jetzt im MDN Playground.

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

### Prozentangaben

In vielen Fällen wird ein Prozentsatz genauso behandelt wie eine Länge. Das Problem mit Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert festgelegt werden. Wenn Sie zum Beispiel die `font-size` eines Elements als Prozentsatz festlegen, wird es ein Prozentsatz der `font-size` des übergeordneten Elements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, wird es ein Prozentsatz der `width` des übergeordneten Elements sein.

Im nächsten Beispiel haben die beiden Paare von prozentual und pixelgroß bemessenen Boxen dieselben Klassennamen. Die Boxen innerhalb jedes Paares sind `40%` und `200px` breit.

Der Unterschied besteht darin, dass das zweite Satz von zwei Boxen sich in einem Wrapper befindet, der `400px` breit ist. Die zweite `200px` breite Box ist genauso breit wie die erste, aber die zweite `40%`-Box ist jetzt `40%` von `400px` — viel schmaler als die erste!

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

Das nächste Beispiel hat Schriftgrößen in Prozent festgelegt. Jedes `<li>` hat eine `font-size` von `80%`; daher werden die verschachtelten Listenelemente zunehmend kleiner, da sie ihre Größenanpassung von ihrem übergeordneten Element erben.

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

Beachten Sie, dass, während viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur eine Länge akzeptieren. Sie können sehen, welche Werte auf den Referenzseiten für MDN-Eigenschaften akzeptiert werden. Wenn der erlaubte Wert {{cssxref("length-percentage")}} enthält, können Sie eine Länge oder einen Prozentwert verwenden. Wenn der erlaubte Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Werttypen akzeptieren zahlenlose Zahlen; ein Beispiel ist die `opacity`-Eigenschaft, die die Transparenz eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im untenstehenden Beispiel versuchen Sie, den Wert von `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und sehen, wie das Kästchen und sein Inhalt mehr oder weniger undurchsichtig wird:

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
  padding: 30px;
  opacity: 0.6;
}
```

{{EmbedLiveSample("opacity", "", "210px")}}

> [!NOTE]
> Wenn Sie eine Zahl in CSS als Wert verwenden, sollte sie nicht in Anführungszeichen stehen.

## Farbe

Farbwerte können an vielen Stellen in CSS verwendet werden, egal ob Sie die Farbe von Text, Hintergründen, Rahmen und vielem mehr angeben.
Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, was es Ihnen ermöglicht, viele spannende Eigenschaften zu kontrollieren.

Das Standardfarbsystem, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, was die Anzeige von etwa 16,7 Millionen verschiedenen Farben über eine Kombination von unterschiedlichen Rot-, Grün- und Blaukanälen mit 256 verschiedenen Werten pro Kanal ermöglicht (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir zunächst die am häufigsten gesehenen Methoden zur Spezifizierung von Farben betrachten: die Verwendung von Schlüsselwörtern, Hexadezimalwerten und `rgb()`-Werten.
Wir werfen auch einen kurzen Blick auf zusätzliche Farb-Funktionen, die Ihnen helfen, sie zu erkennen, wenn Sie sie sehen, oder mit verschiedenen Wegen, Farben anzuwenden, zu experimentieren.

Sie werden wahrscheinlich eine Farbpalette auswählen und dann diese Farben — und Ihre bevorzugte Methode zur Farbspezifizierung — im gesamten Projekt verwenden.
Sie können unterschiedliche Farbmodelle mischen und kombinieren, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt dieselbe Methode zur Deklaration von Farben verwendet, um Konsistenz zu wahren!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder "benannte Farben") in vielen MDN-Codebeispielen sehen. Da der [`<named-color>`](/de/docs/Web/CSS/named-color) Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie auf Produktionswebsites mit einer ausgefeilten Designsprache nicht häufig verwendet. Andererseits werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu sagen, welche Farbe erwartet wird, sodass der Lernende sich auf den gelehrten Inhalt konzentrieren kann.

Im nächsten Beispiel versuchen Sie, mit verschiedenen Farb-Schlüsselwörtern zu spielen, um eine bessere Vorstellung davon zu bekommen, wie sie funktionieren. Sie können sie auf der [`<named-color>`](/de/docs/Web/CSS/named-color) Referenzseite nachlesen.

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

Der nächste Farbwerttyp, auf den Sie wahrscheinlich stoßen werden, sind hexadezimale (Hex-) Codes.

Hexadezimalzahlen verwenden 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` ist. Jeder Hex-Farbwert besteht aus einem Rautezeichen (`#`) gefolgt von sechs hexadezimalen Zeichen (`#ffc0cb`, zum Beispiel). Jedes **Paar** von hexadezimalen Zeichen repräsentiert einen der Kanäle einer RGB-Farbe — Rot, Grün und Blau — und erlaubt es uns, einen der 256 verfügbaren Werte für jeden darzustellen (16 x 16 = 256).

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
> Sie könnten sehen, dass Hex-Farbwerte mit drei Zeichen anstelle von sechs geschrieben werden. Dies ist eine Abkürzung, die verwendet werden kann, wenn die Zeichen in jedem Paar gleich sind. Zum Beispiel, `#ff00ff` und `#f0f` sind gleichwertig. Sie könnten auch sehen, dass Hex-Farbwerte mit acht (oder vier) Zeichen geschrieben werden, wobei der vierte Wert die Alpha-Transparenz der vorherigen drei Werte darstellt — zum Beispiel `#ff00ff66`.

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter auf, die die **Rot**, **Grün**, und **Blau** Kanäle der Farben darstellen, mit einem optionalen vierten Wert getrennt durch einen Schrägstrich (`/`) der die Opazität darstellt, ähnlich wie bei Hex-Werten. Der Unterschied bei RGB ist, dass jeder Kanal nicht durch zwei Hexadezimalziffern, sondern durch eine Dezimalzahl von `0` bis `255` oder einen Prozentsatz von `0%` bis `100%` (aber keine Mischung aus beiden) repräsentiert wird.

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

Im nächsten Beispiel haben wir ein Hintergrundbild in den enthaltenen Block unserer gefärbten Kästen hinzugefügt. Wir haben die Kästen dann mit verschiedenen Opazitätswerten versehen — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alphakanal kleiner ist. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen geben Ihnen verschiedene Transparenzgrade.

Versuchen Sie, die Alpha-Kanalwerte zu ändern, um zu sehen, wie sie sich auf die Farbe auswirken.

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

> [!NOTE]
> Das Setzen eines Alpha-Kanals auf eine Farbe hat einen wesentlichen Unterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir zuvor erwähnt haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin transparent, während die Verwendung von RGB mit einem Alphaparameter nur die von Ihnen angegebene Farbe transparent macht.

### Verwendung von Farbton zur Spezifizierung einer Farbe

Wenn Sie über Schlüsselwörter, Hexadezimalwerte und `rgb()` für Farben hinausgehen möchten, könnten Sie versuchen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden.
Farbton ist der Werttyp, der es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen.
Das grundlegende Konzept ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) angeben können, weil die meisten Farbmodelle Farbtöne mit einem {{Glossary("color_wheel", "Farbrad")}} beschreiben.

Es gibt mehrere Farbfunktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten, einschließlich `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farbfunktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend darauf, was Menschen wahrnehmen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich den [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) Leitfaden an, die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften, die Farbwerte verwenden, bietet.

### HWB

Ein guter Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion, die eine `srgb()` Farbe angibt.
Die drei Teile sind:

- **Farbton**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen `0` und `360` an, der die Winkel um ein Farbrad darstellt.
- **Weißgrad**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (ohne Weißanteil) bis `100%` (vollständiger Weißanteil) an.
- **Schwarzanteil**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von `0%` (ohne Schwarzanteil) bis `100%` (vollständiger Schwarzanteil) an.

### HSL

Ähnlich zur `hwb()` Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die ebenfalls eine `srgb()` Farbe angibt.
HSL verwendet `Farbton`, zusätzlich zur `Sättigung` und `Helligkeit`:

- **Farbton**: Wiederum stellt dies den Grundton der Farbe dar.
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von `0`–`100%` an, wobei `0` keine Farbe ist (es wird als Grauschattierung erscheinen), und `100%` volle Farbsättigung ist.
- **Helligkeit**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von `0`–`100%` an, wobei `0` kein Licht ist (es wird vollständig schwarz erscheinen) und `100%` volles Licht ist (es wird vollständig weiß erscheinen).

Der `hsl()` Farbwert hat auch einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) von der Farbe getrennt ist, der die Alphatransparenz darstellt.

Lassen Sie uns das RGB-Beispiel aktualisieren, um HSL-Farben stattdessen zu verwenden:

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

Genauso wie mit `rgb()` können Sie ein Alphaparameter an `hsl()` übergeben, um die Opazität anzugeben:

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

Bevor Sie weitermachen, versuchen Sie, die vorherigen zwei Beispiele zu modifizieren, um einige auf Farbtönen basierende Farbwerte zu verwenden. Versuchen Sie, den Farbtonwert in jedem Fall zu variieren, um zu sehen, wie sich dies auf die Grundfarbe auswirkt, und dann versuchen Sie, die anderen Parameter ebenfalls zu variieren.

## Bilder

Der [`<image>`](/de/docs/Web/CSS/image) Werttyp wird verwendet, wann immer ein Bild ein gültiger Wert ist. Dies kann einerseits eine tatsächliche Bilddatei sein, die über eine `url()` Funktion angegeben wird, oder andererseits ein Farbverlauf.

Im Beispiel unten verwenden wir ein Bild und einen Farbverlauf als Werte für die CSS `background-image` Eigenschaft.

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
    rgb(0 212 255 / 25%)
  );
}
```

{{EmbedLiveSample("image", "", "380px")}}

> [!NOTE]
> Es gibt einige andere mögliche Werte für `<image>`, diese sind jedoch neuer und haben derzeit eine geringe Browser-Unterstützung. Sehen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie mehr darüber erfahren möchten.

Sie werden mehr über Bildwerte in unserem [Hintergrund und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) Artikel später erfahren.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Werttyp repräsentiert einen Satz von 2D-Koordinaten, die verwendet werden, um ein Element wie ein Hintergrundbild (über [`background-position`](/de/docs/Web/CSS/background-position)) zu positionieren. Er kann Schlüsselwörter wie `top`, `left`, `bottom`, `right`, und `center` annehmen, um Elemente mit spezifischen Grenzen einer 2D-Box auszurichten, sowie Längen, die Versätze von den oberen und linken Kanten der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die Position horizontal fest, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere standardmäßig auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild `60px` von oben und `right` von dem Container aus mit einem Schlüsselwort positioniert.

Versuchen Sie, mit diesen Werten zu experimentieren, um zu sehen, wie Sie das Bild verschieben können.

```html live-sample___position
<div class="box"></div>
```

```css live-sample___position
.box {
  height: 200px;
  width: 400px;
  background-image: url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
  background-repeat: no-repeat;
  background-position: right 60px;
  margin: 20px auto;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("position", "100%", "260px")}}

## Zeichenketten und Bezeichner

In all den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>` Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Als solcher werden sie nicht in Anführungszeichen gesetzt — sie werden nicht als Zeichenketten behandelt.

Es gibt Stellen, an denen Sie Zeichenketten in CSS verwenden. Zum Beispiel [beim Spezifizieren von generierten Inhalten](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu zeigen, dass es sich um eine Zeichenkette handelt. Im Beispiel unten verwenden wir unzitiert Farb-Schlüsselwörter zusammen mit einer zitierten generierten Inhaltszeichenkette.

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

In der Programmierung ist eine Funktion ein Stück Code, das eine spezifische Aufgabe ausführt.
Funktionen sind nützlich, weil Sie Code einmal schreiben und dann viele Male wiederverwenden können, anstatt die gleiche Logik immer wieder zu schreiben.
Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern kommen auch mit praktischen integrierten Funktionen für häufige Aufgaben, sodass Sie sie nicht selbst von Grund auf neu schreiben müssen.

CSS hat ebenfalls [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die auf ähnliche Weise arbeiten wie Funktionen in anderen Sprachen.
Tatsächlich haben wir CSS-Funktionen bereits im [Farben](#farbe) Abschnitt oben gesehen, wie z.B. [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl).

Abgesehen davon, Farben anzuwenden, können Sie Funktionen in CSS verwenden, um eine Menge anderer Dinge zu tun.
Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#transform_functions) eine übliche Methode, um Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren.
Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu bewegen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate), um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale), um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, werden Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Zeiten beginnen.
Wenn Sie möchten, dass diese Werte basierend auf anderen Werten ändern, müssen Sie einige Berechnungen durchführen.
Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions), die es uns ermöglichen, Berechnungen in CSS auszuführen, anstatt uns auf statische Werte zu verlassen oder die Berechnungen in JavaScript durchzuführen.
Eine der häufigsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die es Ihnen ermöglicht, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Zum Beispiel, nehmen wir an, wir wollen die Breite eines Elements auf `20%` seines übergeordneten Containers plus `100px` setzen.
Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn das übergeordnete Element eine prozentuale Breite (oder eine relative Einheit wie `em` oder `rem`) verwendet, dann variiert sie je nach verwendetem Kontext und anderen Faktoren, wie dem Gerät des Benutzers oder der Größe des Browser-Fensters.
Jedoch können wir `calc()` verwenden, um die Breite des Elements auf `20%` seines übergeordneten Containers plus `100px` einzustellen.
Die `20%` basieren auf der Breite des übergeordneten Containers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie zum Beispiel [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max), und [`clamp()`](/de/docs/Web/CSS/clamp); diese erlauben Ihnen, den kleinsten, größten oder mittleren Wert aus einer Menge von Werten auszuwählen. Erkunden Sie unsere [CSS-Wertfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) Referenzseite, um alle verfügbaren CSS-Funktionen zu überprüfen.

Wissen über CSS-Funktionen zu haben ist nützlich, sodass Sie sie erkennen, wenn Sie sie sehen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen, maßgeschneiderte oder sich wiederholende Codes zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erreichen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Values).

## Zusammenfassung

Dies war ein schneller Durchlauf der häufigsten Wert- und Einheitstypen, denen Sie begegnen könnten. Sie können sich alle verschiedenen Typen auf der [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modulseite ansehen — Sie werden vielen davon in der Anwendung begegnen, während Sie diese Lektionen durcharbeiten.

Der Schlüsselpunkt, den Sie im Kopf behalten sollten, ist, dass jede Eigenschaft eine definierte Liste von zulässigen Wertetypen hat und jeder Wertetyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Einzelheiten hier auf MDN nachlesen. Zum Beispiel ist es nützlich, aber vielleicht nicht so offensichtliches Wissen, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch erlaubt, einen Farbverlauf zu erstellen!

Im nächsten Artikel werden wir uns ansehen, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
