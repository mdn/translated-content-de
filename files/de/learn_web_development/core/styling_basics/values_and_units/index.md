---
title: CSS-Werte und Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: d2317ab6c4301c3774f1f319fa3a532e94ba82f6
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen.
Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten zulässig ist.
In dieser Lektion werden wir einige der am häufigsten verwendeten Wertetypen betrachten, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) enthält einen Syntaxabschnitt, der die Wertetypen auflistet, die mit dieser Eigenschaft verwendet werden können.

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
          <li>Verstehen, dass Eigenschaftswerte verschiedene Typen annehmen können und was diese Typen darstellen.</li>
          <li>Vertrautheit mit der Verwendung der grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenfolgen und Bezeichner sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und worin der Unterschied besteht.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

CSS-Werte definieren, welche Werttypen für jede CSS-Eigenschaft gültig sind. Beispielsweise können Sie für die Werte von {{cssxref("color")}} oder {{cssxref("border-color")}} Farben angeben, jedoch keine Längen oder Prozentsätze.

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie in spitzen Klammern (`<`, `>`) eingeschlossen sind — wie zum Beispiel [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet dies, dass Sie jede gültige Farbe als Wert für diese Eigenschaft verwenden können, wie auf der Referenzseite [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben — zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value) Datentyp. Sie können die spitzen Klammern verwenden, um in jedem Fall zu bestimmen, welches Sie untersuchen. HTML-Elemente verwenden ebenfalls spitze Klammern, aber aus dem Kontext sollte klar sein, welches Sie betrachten. Wenn Sie unsicher sind, versuchen Sie, danach auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass auf CSS-Wertetypen als _Datentypen_ verwiesen wird. Die Begriffe sind im Grunde austauschbar — wenn Sie etwas in CSS als Datentyp bezeichnet sehen, ist es eigentlich nur eine ausgefeilte Art, Wertetyp zu sagen. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird und den Sie verwenden möchten.

Im folgenden Beispiel haben wir die Textfarbe unserer Überschrift mit einem Farbstichwort festgelegt und den Hintergrund mit einem anderen Farbwerttyp — der `rgb()`-Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS definiert eine Sammlung zulässiger Werte. Das bedeutet, dass Sie, wenn Sie `<color>` als gültig sehen, nicht rätseln müssen, welche der verschiedenen Arten von Farbwerten verwendet werden können — Stichwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die MDN-Seite für jeden Wert gibt Ihnen Informationen über die Browser-Kompatibilität. Wenn Sie sich beispielsweise die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, werden Sie sehen, dass der Abschnitt zur Browser-Kompatibilität die verschiedenen Arten von Farbwerten und deren Unterstützung auflistet.

Werfen wir einen Blick auf einige der Wertetypen und Einheiten, die Sie häufig antreffen könnten, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentsätze

Es gibt verschiedene numerische Wertetypen, die Sie möglicherweise in CSS verwenden. Die folgenden werden alle als numerisch eingestuft:

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
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar — sie kann einen oder keinen Dezimalpunkt mit einer Bruchkomponente haben. Zum Beispiel <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
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
        <code>&#x3C;number></code> mit einer angehängten Einheit. Zum Beispiel
        <code>45deg</code>, <code>5s</code> oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine Oberkategorie, die die
        {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle"
          >&#x3C;angle></a
        ></code>, <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code
        > und
        <code
          ><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a
        ></code
        >
        Typen umfasst.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> stellt einen Bruchteil eines
        anderen Wertes dar. Zum Beispiel <code>50%</code>. Prozentangaben sind
        immer relativ zu einer anderen Menge. Zum Beispiel ist die Länge eines
        Elements relativ zur Länge seines übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. In CSS gibt es zwei Arten von Längen — relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alles **absolute** Längeneinheiten — sie sind nicht relativ zu irgendetwas anderem und gelten allgemein als immer gleich groß.

| Einheit | Name               | Entspricht               |
| ------- | ------------------ | ------------------------ |
| `cm`    | Zentimeter         | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter         | 1mm = 1/10 eines cm      |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines cm       |
| `in`    | Zoll               | 1in = 2.54cm = 96px      |
| `pc`    | Picas              | 1pc = 1/6 eines Zolls    |
| `pt`    | Punkte             | 1pt = 1/72 eines Zolls   |
| `px`    | Pixel              | 1px = 1/96 eines Zolls   |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck als für die Bildschirmausgabe verwendet werden. Zum Beispiel verwenden wir typischerweise keine `cm` (Zentimeter) auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn für {{cssxref("font-size")}} verwendet. `rem` ist relativ zur Schriftgröße des Wurzelselements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten ist, dass Sie mit sorgfältiger Planung die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skalieren können. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der häufigsten relativen Einheiten erkunden.

#### Beispiel erkunden

Im Beispiel unten können Sie sehen, wie einige relative und absolute Längeneinheiten funktionieren. Das erste Feld hat eine {{cssxref("width")}} in Pixeln. Als absolute Einheit bleibt diese Breite gleich, unabhängig davon, was sich ändert.

Das zweite Feld hat eine Breite in `vw` (Ansichtsfensterbreite). Dieser Wert ist relativ zur Breite des Ansichtsfensters, und `10vw` entspricht daher 10 Prozent der Breite des Ansichtsfensters. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Felds ändern. Da dieses Beispiel jedoch in die Seite unter Verwendung eines [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) eingebettet ist, wird dies nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie [das Beispiel nach dem Öffnen in einem eigenen Browser-Tab ausprobieren](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Feld verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` für das umschließende {{htmlelement("div")}} festgelegt, das die Klasse `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em` und Sie werden sehen, dass die Schriftgröße aller Elemente zunimmt, aber nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie den obigen Anweisungen gefolgt sind, versuchen Sie, die Werte auf andere Weise zu ändern, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die beiden relativen Längen, auf die Sie beim Größen von allem, von Kästen bis zu Text, am häufigsten stoßen werden. Es lohnt sich, zu verstehen, wie diese funktionieren und welche Unterschiede es zwischen ihnen gibt, insbesondere wenn Sie sich komplexeren Themen wie [Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) zuwenden. Das folgende Beispiel bietet eine Demonstration.

Das nächste Beispiel ist ein Satz von verschachtelten Listen — wir haben insgesamt zwei Listen, und beide Beispiele haben denselben HTML-Code. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Am Anfang setzen wir `16px` als Schriftgröße für das `<html>`-Element.

Zusammenfassend bedeutet die `em`-Einheit **"die Schriftgröße meines Elternelements"**, wenn sie für `font-size` verwendet wird, und **"meine eigene Schriftgröße"**, wenn sie für etwas anderes verwendet wird. Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` nehmen ihre Größe von ihrem übergeordneten Element. So wird jede nachfolgende Verschachtelungsebene progressiv größer, da jede ihre Schriftgröße auf `1.3em` setzt — das 1,3-fache der Schriftgröße ihres übergeordneten Elements.

Zusammenfassend bedeutet die `rem`-Einheit **"Die Schriftgröße des Wurzelselements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größe vom Wurzelselement (`<html>`). Dies bedeutet, dass jede nachfolgende Verschachtelungsebene nicht immer größer wird.

Wenn Sie jedoch die `font-size` des `<html>`-Elements in der CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu ändert — sowohl der Text mit `rem`- als auch mit `em`-Größe. Versuchen Sie dies jetzt im MDN Playground.

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

In vielen Fällen wird ein Prozentsatz auf die gleiche Weise wie eine Länge behandelt. Das Besondere an Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert festgelegt sind. Zum Beispiel, wenn Sie die `font-size` eines Elements als Prozentsatz festlegen, ist es ein Prozentsatz der `font-size` des übergeordneten Elements. Wenn Sie einen Prozentsatz für einen `width` Wert verwenden, ist es ein Prozentsatz der `width` des übergeordneten Elements.

Im nächsten Beispiel haben die beiden Paare von Prozent- und Pixelfeldern dieselben Klassennamen. Die Felder in jedem Paar sind jeweils `40%` und `200px` breit.

Der Unterschied besteht darin, dass das zweite Set von zwei Feldern sich in einem Container befindet, der `400px` breit ist. Das zweite `200px` breite Feld ist so breit wie das erste, aber das zweite `40%` breite Feld ist jetzt `40%` von `400px` — viel schmaler als das erste!

Versuchen Sie, die Breite des Containers oder den Prozentwert zu ändern, um zu sehen, wie dies funktioniert:

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

Das nächste Beispiel hat Schriftgrößen, die in Prozentsätzen festgelegt sind. Jedes `<li>` hat eine `font-size` von `80%`; daher werden die verschachtelten Listenelemente zunehmend kleiner, da sie ihre Größen von ihrem übergeordneten Element erben.

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

Beachten Sie, dass einige Werttypen eine Länge oder einen Prozentsatz akzeptieren, während andere nur Längen akzeptieren. Sie können auf den MDN-Eigenschaftsreferenzseiten sehen, welche Werte akzeptiert werden. Wenn der akzeptierte Wert {{cssxref("length-percentage")}} einschließt, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der akzeptierte Wert nur `<length>` einschließt, ist die Verwendung eines Prozentsatzes nicht möglich.

### Zahlen

Einige Werttypen akzeptieren zahlenlose Zahlen; ein Beispiel ist die `opacity` Eigenschaft, die die Transparenz eines Elements steuert (wie durchsichtig es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

Im Beispiel unten versuchen Sie, den Wert der `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und sehen Sie, wie der Kasten und sein Inhalt mehr oder weniger durchscheinend werden:

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

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es, um die Farbe von Text, Hintergründen, Rahmen und vielem mehr zu spezifizieren.
Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, die Ihnen erlauben, eine Vielzahl spannender Eigenschaften zu kontrollieren.

Das Standardsystem für Farben, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, was die Anzeige von etwa 16,7 Millionen verschiedenen Farben ermöglicht, durch eine Kombination von verschiedenen roten, grünen und blauen Kanälen mit je 256 verschiedenen Werten (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir zunächst die am häufigsten verwendeten Methoden zur Farbspezifikation betrachten: die Verwendung von Stichwörtern, hexadezimal und `rgb()`-Werten.
Wir werden auch einen schnellen Blick auf zusätzliche Farb-Funktionen werfen, die Ihnen ermöglichen, diese zu erkennen, wenn Sie sie sehen, oder verschiedene Arten der Farbgestaltung auszuprobieren.

Sie werden wahrscheinlich eine Farbpalette festlegen und dann diese Farben - und Ihre bevorzugte Methode zur Farbspezifikation - im gesamten Projekt verwenden.
Sie können Farbschemata mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt dieselbe Methode zur Farbfestlegung verwendet, um Konsistenz zu erzielen!

### Farbstichwörter

Sie werden die Farbstichwörter (oder "benannte Farben") in vielen MDN-Codebeispielen sehen. Da der [`<named-color>`](/de/docs/Web/CSS/named-color) Datentyp nur eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie auf Produktionswebsites mit einem ausgeklügelten Design selten verwendet. Andererseits werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu machen, welche Farbe erwartet wird, damit sich der Lernende auf den behandelten Inhalt konzentrieren kann.

Im nächsten Beispiel, versuchen Sie, mit verschiedenen Farbstichwörtern zu spielen, um eine bessere Vorstellung davon zu bekommen, wie sie funktionieren. Sie können sie mithilfe der [`<named-color>`](/de/docs/Web/CSS/named-color) Referenzseite nachschlagen.

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

Der nächste Typ von Farbwerten, dem Sie wahrscheinlich begegnen werden, sind hexadezimale (hex) Codes.

Hexadezimale Zahlen verwenden 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` ist. Jeder hexadezimale Farbwert besteht aus einem Rautezeichen (#), gefolgt von sechs hexadezimalen Zeichen (`#ffc0cb`, zum Beispiel). Jedes **Paar** hexadezimaler Zeichen repräsentiert einen der Kanäle einer RGB-Farbe — rot, grün und blau — und erlaubt uns, einen der 256 verfügbaren Werte für jeden dieser Kanäle zu spezifizieren (16 x 16 = 256).

Diese Werte sind weniger intuitiv als Stichwörter zur Definition von Farben, aber sie sind viel vielseitiger, weil Sie damit jede RGB-Farbe _darstellen_ können.

Im nächsten Beispiel, versuchen Sie, die Werte zu ändern, um zu sehen, wie sich die Farben variieren:

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
> Sie könnten sehen, dass hexadezimale Farbwerte mit drei Zeichen anstelle von sechs geschrieben werden. Dies ist eine Abkürzung, die verwendet werden kann, wenn die Zeichen in jedem Paar gleich sind. Zum Beispiel sind `#ff00ff` und `#f0f` äquivalent. Sie könnten auch hexadezimale Farbwerte mit acht (oder vier) Zeichen sehen, wobei der vierte Wert die Alfa-Transparenz der vorherigen drei Werte repräsentiert — zum Beispiel `#ff00ff66`.

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter, die die **roten**, **grünen** und **blauen** Kanalwerte der Farben repräsentieren, mit einem optionalen vierten Wert, getrennt durch einen Schrägstrich (`/`), der die Opazität in ähnlicher Weise wie hexadezimale Werte darstellt. Der Unterschied bei RGB ist, dass jeder Kanal nicht durch zwei hexadezimale Ziffern, sondern durch eine Dezimalzahl im Bereich von `0` bis `255` oder einen Prozentsatz im Bereich von `0%` bis `100%` (aber nicht eine Mischung aus beiden) dargestellt wird.

Lassen Sie uns unser letztes Beispiel neu schreiben, um RGB-Farben zu verwenden:

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

Im nächsten Beispiel haben wir ein Hintergrundbild zum umgebenden Block unserer farbigen Felder hinzugefügt. Wir haben dann die Felder so eingestellt, dass sie unterschiedliche Opazitätswerte haben — achten Sie darauf, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanal-Wert kleiner ist. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Zwischendurch geben Ihnen verschiedene Werte unterschiedliche Transparenzgrade.

Versuchen Sie, die Alpha-Kanal-Werte zu ändern, um zu sehen, wie sich dies auf die Farbausgabe auswirkt.

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
> Das Setzen eines Alpha-Kanals auf eine Farbe weist einen wesentlichen Unterschied zur Verwendung der {{cssxref("opacity")}} Eigenschaft auf, die wir zuvor erwähnt haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles, was darin ist, transparent, während Sie bei Verwendung von RGB mit einem Alpha-Parameter nur die Farbe, die Sie spezifizieren, transparent machen.

### Verwendung von Farbton zur Angabe einer Farbe

Wenn Sie über Stichwörter, hexadezimale und `rgb()` hinaus bei Farben gehen möchten, möchten Sie möglicherweise eine [`<hue>`](/de/docs/Web/CSS/hue) verwenden.
Farbton ist der Wertetyp, der es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie rot, orange, gelb, grün, blau usw. zu erkennen.
Das Hauptkonzept besteht darin, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) angeben können, da die meisten Farbmodelle Farbtöne mithilfe eines {{Glossary("color_wheel", "Farbkreises")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten, darunter `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farb-Funktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend auf menschlichem Sehen.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich den [Farbgestaltung von HTML-Elementen mit CSS mittels Farbe](/de/docs/Web/CSS/CSS_colors/Applying_color) Leitfaden an, die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten zur Verwendung von Farben in CSS auflistet, und das [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften bietet, die Farbwerte verwenden.

### HWB

Ein großartiger Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion, die eine `srgb()` Farbe spezifiziert.
Die drei Teile sind:

- **Farbton**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen `0` und `360` an, der die Winkel um einen Farbkreis darstellt.
- **Weißgrad**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weißgrad) bis `100%` (voller Weißgrad) an.
- **Schwarzgrad**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von `0%` (kein Schwarzgrad) bis `100%` (voller Schwarzgrad) an.

### HSL

Ähnlich wie die `hwb()` Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die ebenfalls eine `srgb()` Farbe spezifiziert.
HSL verwendet `Farbton`, zusätzlich zu `Sättigung` und `Helligkeit`:

- **Farbton**: Wiederum, dieser repräsentiert den Grundton der Farbe.
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von `0`–`100%` an, wobei `0` keine Farbe bedeutet (es wird als ein Grauton erscheinen) und `100%` eine vollständige Farbsättigung darstellt.
- **Helligkeit**: Wie hell ist die Farbe? Dies nimmt einen Wert von `0`–`100%` an, wobei `0` keine Helligkeit bedeutet (es erscheint komplett schwarz) und `100%` volle Helligkeit darstellt (es erscheint komplett weiß).

Der `hsl()` Farbwert hat auch einen optionalen vierten Wert, der von der Farbe mit einem Schrägstrich (`/`) getrennt ist und die Alpha-Transparenz darstellt.

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

Genau wie bei `rgb()` können Sie einen Alpha-Parameter an `hsl()` übergeben, um die Opazität festzulegen:

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

Bevor Sie fortfahren, versuchen Sie, die vorherigen beiden Beispiele zu modifizieren, um einige farbbasierte Farbwerte zu verwenden. Versuchen Sie, den Farbtonwert in jedem Fall zu variieren, um zu sehen, wie sich dies auf die Grundfarbe auswirkt, und versuchen Sie dann, die anderen Parameter zu variieren.

## Bilder

Der [`<image>`](/de/docs/Web/CSS/image) Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, auf die über eine `url()` Funktion verwiesen wird, oder ein Verlauf.

Im Beispiel unten verwenden wir ein Bild und einen Verlauf als Werte für die CSS-Eigenschaft `background-image`.

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
> Es gibt einige andere mögliche Werte für `<image>`, allerdings sind diese neuer und haben derzeit eine schlechte Browser-Unterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie darüber mehr erfahren möchten.

Sie werden in unserem Artikel [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) später mehr über Bildwerte lernen.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp repräsentiert ein Set von 2D-Koordinaten, die verwendet werden, um ein Element zu positionieren, wie z.B. ein Hintergrundbild (über [`background-position`](/de/docs/Web/CSS/background-position)). Es kann Stichwörter wie `top`, `left`, `bottom`, `right` und `center` annehmen, um Elemente mit bestimmten Grenzen einer 2D-Box auszurichten, sowie Längen, die Versätze vom oberen und linken Rand der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die Position horizontal fest, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere standardmäßig auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild `60px` vom oberen Rand und `right` von der Containerposition ausgehend platziert.

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

## Zeichenfolgen und Bezeichner

In den obigen Beispielen haben wir Stellen gesehen, an denen Stichwörter als Wert verwendet werden (z.B. `<color>` Stichwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Stichwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Daher sind sie nicht in Anführungszeichen gesetzt — sie werden nicht als Zeichenfolgen behandelt.

Es gibt Stellen, an denen Sie Zeichenfolgen in CSS verwenden. Zum Beispiel [bei der Spezifikation generierter Inhalte](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert in Anführungszeichen gesetzt, um zu zeigen, dass es sich um eine Zeichenfolge handelt. Im Beispiel unten verwenden wir unveränderte Farbstichwörter sowie eine in Anführungszeichen gesetzte generierte Inhaltszeichenfolge.

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

In der Programmierung ist eine Funktion ein Codeabschnitt, der eine spezifische Aufgabe erfüllt.
Funktionen sind nützlich, weil Sie Code einmal schreiben und dann mehrmals wiederverwenden können, anstatt die gleiche Logik immer wieder zu schreiben.
Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern bieten auch praktische eingebaute Funktionen für alltägliche Aufgaben, sodass Sie sie nicht von Grund auf selbst schreiben müssen.

CSS hat ebenfalls [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die ähnlich wie Funktionen in anderen Sprachen funktionieren.
Tatsächlich haben wir im Abschnitt [Farbe](#farbe) oben bereits CSS-Funktionen gesehen, wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl).

Neben der Anwendung von Farben können Sie Funktionen in CSS für viele andere Dinge verwenden.
Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#transform_functions) eine häufige Methode, um Elemente auf einer Seite zu verschieben, zu drehen und zu skalieren.
Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu bewegen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate), um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale), um etwas zu vergrößern oder zu verkleinern.

### Mathematik-Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Dauerzeiten.
Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie einige Berechnungen durchführen.
Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Mathematik-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions), die es uns ermöglichen, Berechnungen in CSS durchzuführen, anstatt auf statische Werte zu setzen oder die Mathematik in JavaScript auszuführen.
Eine der häufigsten Mathematik-Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), mit der wir Operationen wie Addition, Subtraktion, Multiplikation und Division durchführen können.

Zum Beispiel, nehmen wir an, wir möchten die Breite eines Elements auf `20%` seines übergeordneten Containers plus `100px` setzen.
Wir können diese Breite nicht mit einem statischen Wert angeben — wenn das übergeordnete Element eine prozentuale Breite verwendet (oder eine relative Einheit wie `em` oder `rem`), dann variiert es abhängig vom Kontext, in dem es verwendet wird, und anderen Faktoren wie dem Gerät des Nutzers oder der Fensterbreite des Browsers.
Aber wir können `calc()` verwenden, um die Breite des Elements auf `20%` seines übergeordneten Containers plus `100px` zu setzen.
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

Es gibt viele andere Mathematik-Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max) und [`clamp()`](/de/docs/Web/CSS/clamp); diese lassen Sie jeweils den kleinsten, größten oder mittleren Wert aus einer Wertemenge auswählen. Besuchen Sie unsere [CSS-Wertefunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) Referenzseite, um alle verfügbaren CSS-Funktionen zu erforschen.

Das Wissen über CSS-Funktionen ist nützlich, damit Sie sie erkennen, wenn Sie sie sehen. Sie sollten mit ihrer Anwendung in Ihren Projekten beginnen — sie helfen Ihnen, benutzerdefinierten oder sich wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erzielen können.

## Prüfen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Vor dem Weitermachen können Sie einige zusätzliche Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben — siehe [Prüfen Sie Ihr Wissen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Values).

## Zusammenfassung

Dies war ein schneller Durchlauf durch die häufigsten Typen von Werten und Einheiten, denen Sie begegnen könnten. Sie können alle verschiedenen Typen auf der [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modulseite ansehen — Sie werden viele von ihnen verwenden, während Sie diese Lektionen durcharbeiten.

Das Wichtigste, was Sie sich merken sollten, ist, dass jede Eigenschaft eine definierte Liste erlaubter Werttypen hat und jeder Werttyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Einzelheiten hier auf MDN nachschlagen. Zum Beispiel kann das Verständnis, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch erlaubt, einen Farbverlauf zu erstellen, nützlich, aber vielleicht nicht offensichtlich sein!

Im nächsten Artikel werden wir uns ansehen, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
