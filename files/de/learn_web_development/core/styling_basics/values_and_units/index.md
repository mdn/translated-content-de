---
title: CSS-Werte und -Einheiten
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die aus Eigenschaften und Werten bestehen.
Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf.
In dieser Lektion werfen wir einen Blick auf einige der am häufigsten verwendeten Wertetypen, was sie sind und wie sie funktionieren.

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
          <li>Verstehen, dass Eigenschaftswerte viele verschiedene Typen annehmen können und was diese Typen darstellen.</li>
          <li>Vertrautheit im Umgang mit den grundlegenden Typen: Zahlen, Längen, Prozentsätze, Farben, Bilder, Positionen, Zeichenketten und Identifikatoren sowie Funktionen.</li>
          <li>Verstehen, was absolute und relative Einheiten sind und den Unterschied zwischen ihnen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

CSS-Werte definieren, welche Wertetypen für jede CSS-Eigenschaft gültig sind. Zum Beispiel können Sie Farben für die Werte von {{cssxref("color")}} oder {{cssxref("border-color")}} festlegen, aber keine Längen oder Prozentsätze.

In den CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie von spitzen Klammern (`<`, `>`) umgeben sind — wie zum Beispiel [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie sehen, dass der Wertetyp `<color>` für eine bestimmte Eigenschaft gültig ist, bedeutet das, dass Sie jeden gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie auf der Referenzseite [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt.

Manchmal können Wertetypen und Eigenschaften denselben oder ähnliche Namen haben — beispielsweise gibt es eine {{cssxref("color")}} Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value) Datentyp. Sie können die spitzen Klammern verwenden, um festzustellen, welchen Sie in jedem Fall studieren. HTML-Elemente verwenden ebenfalls spitze Klammern, aber der Kontext sollte klar machen, welchen Sie betrachten. Wenn Sie sich unsicher sind, versuchen Sie, danach auf MDN zu suchen.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie etwas in CSS als Datentyp bezeichnet sehen, ist es wirklich nur eine ausgefallene Art zu sagen Wertetyp. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

In dem folgenden Beispiel haben wir die Textfarbe unserer Überschrift mithilfe eines Farbschlüssels festgelegt und den Hintergrund mithilfe eines anderen Farbwerttyps — der `rgb()` Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS definiert eine Sammlung von erlaubten Werten. Das bedeutet, dass wenn Sie `<color>` als gültig sehen, Sie sich nicht fragen müssen, welche der verschiedenen Farbwerttypen verwendet werden können — Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen, etc. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browserunterstützung. Wenn Sie sich zum Beispiel die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, werden Sie feststellen, dass der Abschnitt zur Browser-Kompatibilität verschiedenen Typen von Farbwerten und deren Unterstützung auflistet.

Schauen wir uns einige der Typen von Werten und Einheiten an, die Ihnen häufig begegnen können, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

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
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar — sie kann einen Dezimalpunkt mit einer gebrochenen Komponente haben oder nicht. Zum Beispiel <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Eine <code>&#x3C;dimension></code> ist eine <code>&#x3C;number></code> mit einer angehängten Einheit. Zum Beispiel <code>45deg</code>, <code>5s</code> oder <code>10px</code>. <code>&#x3C;dimension></code> ist eine Oberkategorie, die die {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
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
        Eine <code>&#x3C;percentage></code> stellt einen Bruchteil eines anderen Wertes dar. Zum Beispiel <code>50%</code>. Prozentwerte sind immer relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines Elements relativ zur Länge seines Elternelements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, den Sie am häufigsten antreffen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relativ und absolut. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alle **absolute** Längeneinheiten — sie sind zu nichts anderem relativ und werden allgemein als immer gleich groß angesehen.

| Einheit | Name              | Entspricht               |
| ------- | ----------------- | ------------------------ |
| `cm`    | Zentimeter        | 1cm = 37.8px = 25.2/64in |
| `mm`    | Millimeter        | 1mm = 1/10 von 1cm       |
| `Q`     | Viertelmillimeter | 1Q = 1/40 von 1cm        |
| `in`    | Zoll              | 1in = 2.54cm = 96px      |
| `pc`    | Picas             | 1pc = 1/6 von 1in        |
| `pt`    | Punkte            | 1pt = 1/72 von 1in       |
| `px`    | Pixel             | 1px = 1/96 von 1in       |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck, anstatt für die Bildschirmausgabe verwendet werden. Zum Beispiel verwenden wir auf einem Bildschirm für gewöhnlich keine `cm` (Zentimeter). Der einzige Wert, den Sie üblicherweise verwenden werden, ist `px` (Pixel).

Beachten Sie, dass `1px` nicht unbedingt einem physikalischen Gerätepixel entspricht. Auf HD-Displays kann es sich über mehrere physikalische Pixel erstrecken.
Ebenso entspricht `1cm` in CSS oft nicht einem Hundertstel des [SI](https://en.wikipedia.org/wiki/International_System_of_Units) Meters. Auf einem großen Fernsehbildschirm ist es typischerweise länger als das.
Die Längen sind wahrnehmbar: `16px` sieht auf einem Telefon, Laptop oder Fernsehbildschirm in typischer Entfernung ungefähr gleich aus.

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des Elternelements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe bzw. Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit etwas sorgfältiger Planung sicherstellen können, dass die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skaliert. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der gängigsten relativen Einheiten erkunden.

#### Ein Beispiel erkunden

In dem folgenden Beispiel können Sie sehen, wie einige relative und absolute Längeneinheiten verhalten. Der erste Kasten hat eine {{cssxref("width")}}, die in Pixeln festgelegt ist. Als eine absolute Einheit bleibt diese Breite gleich, egal was sich sonst ändert.

Die zweite Box hat eine Breite, die in `vw` (Ansichtsfensterbreite) Einheiten festgelegt ist. Dieser Wert ist relativ zur Breite des Ansichtsfensters und `10vw` sind also 10 Prozent der Breite des Ansichtsfensters. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Kastens ändern. Dieses Beispiel ist jedoch in die Seite eingebettet mit einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), deshalb wird es nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie [das Beispiel in einem eigenen Browser-Tab öffnen](https://mdn.github.io/css-examples/learn/values-units/length.html).

Die dritte Box verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umschließenden {{htmlelement("div")}} festgelegt, das eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert zu `1.5em` und Sie werden sehen, dass sich die Schriftgröße aller Elemente erhöht, aber nur das letzte Element wird breiter, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie die obigen Anweisungen befolgt haben, probieren Sie, die Werte auf andere Weise zu verändern, um zu sehen, was Sie erhalten.

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

`em` und `rem` sind die zwei relativen Längen, denen Sie am häufigsten begegnen werden, wenn Sie irgendetwas von Kästen bis Text dimensionieren. Es ist wichtig zu verstehen, wie diese funktionieren und die Unterschiede zwischen ihnen, besonders wenn Sie anfangen, sich mit komplexeren Themen wie [Textstyling](/de/docs/Learn_web_development/Core/Text_styling) oder [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) zu beschäftigen. Das folgende Beispiel bietet eine Demonstration.

Das nächste Beispiel ist eine Gruppe von verschachtelten Listen — wir haben insgesamt zwei Listen und beide Beispiele haben dasselbe HTML. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Zunächst setzen wir `16px` als Schriftgröße auf das `<html>`-Element.

Zur Erinnerung: Die `em`-Einheit bedeutet **"die Schriftgröße meines Elternelements"**, wenn sie für `font-size` verwendet wird, und **"meine eigene Schriftgröße"**, wenn sie für alles andere verwendet wird. Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` beziehen ihre Größe von ihrem Elternteil. Daher wird jede nachfolgende Verschachtelungsebene schrittweise größer, da jedes ein Schriftgröße von `1.3em` hat — 1,3 mal die Schriftgröße des Elternelements.

Zur Erinnerung: Die `rem`-Einheit bedeutet **"Die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` beziehen ihre Größe vom Wurzelelement (`<html>`). Dies bedeutet, dass jede nachfolgende Verschachtelungsebene nicht größer wird.

Wenn Sie jedoch die `font-size` des `<html>`-Elements in der CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu ändert — sowohl `rem`- als auch `em`-große Texte. Probieren Sie dies jetzt im MDN Playground aus.

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

In vielen Fällen wird ein Prozentsatz auf die gleiche Weise wie eine Länge behandelt. Das Problem bei Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert eingestellt sind. Zum Beispiel, wenn Sie die `font-size` eines Elements als Prozentsatz festlegen, wird es ein Prozentsatz der `font-size` des Elternelements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, ist es ein Prozentsatz der `width` des Elternelements.

Im nächsten Beispiel haben die beiden Paare von Prozentsatz- und Pixel-breiten Boxen dieselben Klassennamen. Die Boxen in jedem Paar sind jeweils `40%` und `200px` breit.

Der Unterschied ist, dass das zweite Set von zwei Boxen in einem Container ist, der `400px` breit ist. Die zweite `200px` breite Box hat die gleiche Breite wie die erste, aber die zweite `40%` Box ist nun `40%` von `400px` — viel schmaler als die erste!

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

Das nächste Beispiel hat Schriftgrößen, die in Prozentsätzen festgelegt sind. Jedes `<li>` hat eine `font-size` von `80%`; daher werden die verschachtelten Listenelemente schrittweise kleiner, da sie ihre Größe von ihrem Elternteil erben.

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

Beachten Sie, dass während viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur Länge akzeptieren. Sie können auf den MDN-Eigenschaftsreferenzseiten sehen, welche Werte akzeptiert werden. Wenn der erlaubte Wert {{cssxref("length-percentage")}} beinhaltet, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` beinhaltet, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren zahnlose Zahlen; ein Beispiel ist die `opacity`-Eigenschaft, die die Opazität eines Elements steuert (wie durchsichtig es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig opak).

Im folgenden Beispiel versuchen Sie, den Wert von `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und zu sehen, wie sich die Box und ihr Inhalt mehr oder weniger opak werden:

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

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es, dass Sie die Farbe von Text, Hintergründen, Rändern und vielem mehr spezifizieren.
Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, die Ihnen die Kontrolle über viele spannende Eigenschaften ermöglichen.

Das standardmäßige Farbsystem, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, die es ermöglichen, etwa 16.7 Millionen unterschiedliche Farben anzuzeigen, über eine Kombination von verschiedenen roten, grünen und blauen Kanälen mit 256 verschiedenen Werten pro Kanal (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir zunächst die am häufigsten gesehenen Möglichkeiten zur Spezifikation von Farben betrachten: die Verwendung von Schlüsselwörtern, Hexadezimalwerten und `rgb()`-Werten.
Wir werden auch einen kurzen Blick auf zusätzliche Farb-Funktionen werfen, damit Sie sie erkennen, wenn Sie sie sehen, oder mit verschiedenen Möglichkeiten der Farbanwendung experimentieren können.

Wahrscheinlich entscheiden Sie sich für eine Farbpalette und verwenden dann diese Farben – und Ihre bevorzugte Methode zur Farbdefinition – durch Ihr gesamtes Projekt.
Sie können Farbmodelle mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt die gleiche Methode zur Farberklärung verwendet, um Konsistenz zu gewährleisten!

### Farbschlüsselwörter

Sie werden die Farbschlüsselwörter (oder "benannte Farben") in vielen MDN-Beispielen sehen. Da der [`<named-color>`](/de/docs/Web/CSS/named-color) Datentyp eine sehr begrenzte Anzahl von Farbwerten enthält, werden sie auf Produktionswebseiten mit einem anspruchsvollen Design nicht häufig verwendet. Andererseits werden benannte Farben in Code-Beispielen verwendet, um klar zu sagen, welche Farbe erwartet wird, damit der Lernende sich auf den zu lehrenden Inhalt konzentrieren kann.

Im nächsten Beispiel versuchen Sie, mit verschiedenen Farbschlüsselwörtern zu spielen, um mehr zu erfahren, wie sie funktionieren. Sie können sie über die Referenzseite [`<named-color>`](/de/docs/Web/CSS/named-color) nachschlagen.

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

Der nächste Farbwerttyp, dem Sie wahrscheinlich begegnen werden, sind hexadezimale (Hex) Codes.

Hexadezimale Zahlen verwenden 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` ist. Jeder Hex-Farbwert besteht aus einem Hasch/Hash-Symbol (`#`) gefolgt von sechs hexadezimalen Zeichen (`#ffc0cb`, zum Beispiel). Jedes **Paar** von hexadezimalen Zeichen stellt einen der Kanäle einer RGB-Farbe dar — rot, grün und blau — und ermöglicht es uns, einen der 256 verfügbaren Werte für jeden zu spezifizieren (16 x 16 = 256).

Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, weil man mit ihnen jede RGB-Farbe _darstellen_ kann.

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
> Sie könnten sehen, dass hex-Farbwerte mit drei Zeichen anstatt sechs geschrieben werden. Dies ist eine Kurzform, die verwendet werden kann, wenn die Zeichen in jedem Paar gleich sind. Zum Beispiel sind `#ff00ff` und `#f0f` äquivalent. Sie könnten auch sehen, dass hex-Farbwerte mit acht (oder vier) Zeichen geschrieben werden, wobei der vierte Wert die Alpha-Transparenz der vorherigen drei Werte repräsentiert – zum Beispiel `#ff00ff66`.

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter, die die **rot**, **grün** und **blau** Kanalwerte der Farben darstellen, mit einem optionalen vierten Wert, der durch einen Schrägstrich (`/`) von der Deckkraft getrennt ist, ähnlich wie bei den Hex-Werten. Der Unterschied bei RGB ist, dass jeder Kanal nicht durch zwei Hex-Stellen, sondern durch eine Dezimalzahl dargestellt wird, die von `0` bis `255` oder einen Prozentsatz reicht, der von `0%` bis `100%` reicht (aber keine Mischung aus beiden).

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

#### Ein RGB-Beispiel mit Deckkraft

Im nächsten Beispiel haben wir ein Hintergrundbild zum umschließenden Block unserer farbigen Boxen hinzugefügt. Wir haben dann die Boxen mit unterschiedlichen Deckkraftwerten versehen — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Wert des Alpha-Kanals kleiner ist. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen geben Ihnen unterschiedliche Transparenzstufen.

Versuchen Sie, die Werte des Alpha-Kanals zu ändern, um zu sehen, wie es die Farbausgabe beeinflusst.

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
> Die Verwendung eines Alpha-Kanals für eine Farbe hat einen grundlegenden Unterschied zu der Verwendung der oben erwähnten {{cssxref("opacity")}} Eigenschaft. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin transparent, während Sie bei der Verwendung von RGB mit einem Alpha-Parameter nur die von Ihnen spezifizierte Farbe transparent machen.

### Verwendung von Farbtönen zur Bestimmung einer Farbe

Wenn Sie über Schlüsselwörter, Hexadezimalwerte und `rgb()` hinausgehen möchten, könnten Sie versuchen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden.
Farbton ist der Wertetyp, mit dem wir den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. erkennen können.
Der zentrale Gedanke besteht darin, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) spezifizieren können, da die meisten Farbmodelle Farbtöne mit einem {{Glossary("color_wheel", "Farbkreis")}} beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten, darunter `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farbfunktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich den [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) Leitfaden, die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS bietet und die Eigenschaftena, die Farbwerte nutzen.

### HWB

Ein großartiger Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion, die eine `srgb()` Farbe spezifiziert.
Die drei Teile sind:

- **Farbton**: Der Grundton der Farbe. Nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen `0` und `360` an, der die Winkel um einen Farbkreis repräsentiert.
- **Weißheit**: Wie weiß ist die Farbe? Nimmt einen Wert von `0%` (keine Weißheit) bis `100%` (volle Weißheit) an.
- **Schwärze**: Wie schwarz ist die Farbe? Nimmt einen Wert von `0%` (keine Schwärze) bis `100%` (volle Schwärze) an.

### HSL

Ähnlich der `hwb()` Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die ebenfalls eine `srgb()` Farbe spezifiziert.
HSL verwendet `Farbton`, zusätzlich zu `Sättigung` und `Helligkeit`:

- **Farbton**: Dies repräsentiert wieder den Grundton der Farbe.
- **Sättigung**: Wie gesättigt ist die Farbe? Nimmt einen Wert von `0`–`100%` an, wobei `0` keine Farbe ist (sie erscheint als Grauton), und `100%` ist volle Farbsättigung.
- **Helligkeit**: Wie hell oder lebendig ist die Farbe? Nimmt einen Wert von `0`–`100%` an, wobei `0` kein Licht ist (es erscheint vollständig schwarz) und `100%` ist volles Licht (es erscheint vollständig weiß).

Der `hsl()` Farbwert hat ebenfalls einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) von der Farbe getrennt ist und die Alphatransparenz darstellt.

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

Genau wie bei `rgb()` können Sie ein Alpha-Parameter an `hsl()` übergeben, um die Deckkraft zu bestimmen:

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

Bevor Sie fortfahren, versuchen Sie, die vorhergehenden zwei Beispiele zu modifizieren, um einige farbbasierte Farbwerte zu verwenden. Versuchen Sie, den Farbwert in jedem Fall zu variieren, um zu sehen, wie dies die Grundfarbe beeinflusst, und dann die anderen Parameter zu variieren.

## Bilder

Der [`<image>`](/de/docs/Web/CSS/image) Wertetyp wird verwendet, wo immer ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()` Funktion zugeordnet wird, oder ein Verlauf.

Im folgenden Beispiel verwenden wir ein Bild und einen Verlauf als Werte für die CSS-Eigenschaft `background-image`.

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
> Es gibt einige andere mögliche Werte für `<image>`, jedoch sind diese neuer und haben derzeit eine schlechte Browser-Unterstützung. Sehen Sie auf der MDN-Seite zum [`<image>`](/de/docs/Web/CSS/image) Datentyp nach, wenn Sie mehr darüber erfahren möchten.

Sie werden mehr über Bildwerte in unserem Artikel zu [Hintergründen und Rändern](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) später lernen.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp repräsentiert eine Reihe von 2D-Koordinaten, die verwendet werden, um ein Element wie ein Hintergrundbild (über [`background-position`](/de/docs/Web/CSS/background-position)) zu positionieren. Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` annehmen, um Elemente mit spezifischen Grenzen einer 2D-Box auszurichten, sowie Längen, die Versätze von den oberen und linken Kanten der Box darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste setzt die Position horizontal, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild `60px` von oben und nach `right` des Containers mit einem Schlüsselwort positioniert.

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

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>` Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Identifikatoren_ beschrieben, ein spezieller Wert, den CSS versteht. Daher sind sie nicht mit Anführungszeichen versehen — sie werden nicht als Zeichenketten behandelt.

Es gibt Stellen, an denen Sie Zeichenketten in CSS verwenden. Zum Beispiel, [wenn Sie generierten Inhalt angeben](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In diesem Fall wird der Wert mit Anführungszeichen versehen, um anzuzeigen, dass es sich um eine Zeichenkette handelt. Im folgenden Beispiel verwenden wir unquotierte Farbschlüsselwörter zusammen mit einer quotierten generierten Inhaltszeichenkette.

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

In der Programmierung ist eine Funktion ein Stück Code, das eine bestimmte Aufgabe erfüllt.
Funktionen sind nützlich, weil Sie einmal Code schreiben und dann viele Male wiederverwenden können, anstatt die gleiche Logik immer wieder zu schreiben.
Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern kommen auch mit komfortablen eingebauten Funktionen für alltägliche Aufgaben, sodass Sie sie nicht von Grund auf selbst schreiben müssen.

CSS hat ebenfalls [Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die auf ähnliche Weise wie Funktionen in anderen Sprachen funktionieren.
Tatsächlich haben wir CSS-Funktionen bereits im [Farbe](#farbe) Abschnitt oben gesehen, wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl).

Neben der Anwendung von Farben können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun.
Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#transform_functions) eine übliche Methode, um Elemente auf einer Seite zu verschieben, zu drehen und zu skalieren.
Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu verschieben, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) um etwas zu drehen oder [`scale()`](/de/docs/Web/CSS/transform-function/scale) um etwas größer oder kleiner zu machen.

### Mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, werden Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für zeitliche Dauer anfangen.
Wenn Sie möchten, dass diese Werte basierend auf anderen Werten geändert werden, müssen Sie etwas Mathematik betreiben.
Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen hinzuaddieren, dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS hat Unterstützung für [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions), die es uns ermöglichen, Berechnungen in CSS durchzuführen, anstatt auf statische Werte zurückzugreifen oder die Berechnungen in JavaScript durchzuführen zu müssen.
Eine der häufigsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die es Ihnen ermöglicht, Operationen wie Addition, Subtraktion, Multiplikation und Division durchzuführen.

Zum Beispiel, wenn wir die Breite eines Elements auf `20%` seines Elterncontainers plus `100px` setzen möchten.
Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn das Elternteil eine prozentuale Breite (oder eine relative Einheit wie `em` oder `rem`) verwendet, dann wird es je nach Kontext, in dem es verwendet wird, variieren, und aufgrund anderer Faktoren wie dem Gerät des Benutzers oder der Breite des Browserfensters.
Jedoch können wir `calc()` verwenden, um die Breite des Elements auf `20%` seines Elterncontainers plus `100px` zu setzen.
Die `20%` beziehen sich auf die Breite des Elterncontainers (`.wrapper`) und falls sich diese Breite ändert, ändert sich auch die Berechnung:

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

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max) und [`clamp()`](/de/docs/Web/CSS/clamp); jeweils lassen sie Sie den kleinsten, größten oder mittleren Wert aus einem Set von Werten auswählen. Entdecken Sie unsere [CSS-Wertefunktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) Referenzseite, um alle verfügbaren CSS-Funktionen zu überprüfen.

Das Wissen über CSS-Funktionen ist nützlich, sodass Sie sie erkennen, wenn Sie sie sehen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie helfen Ihnen, benutzerdefinierten oder sich wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erreichen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Values).

## Zusammenfassung

Dies war ein schneller Überblick über die häufigsten Arten von Werten und Einheiten, denen Sie begegnen können. Sie können alle verschiedenen Typen auf der Seite zum [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul ansehen — viele davon werden Ihnen in der Anwendung begegnen, wenn Sie diese Lektionen durcharbeiten.

Das Wichtigste, was Sie sich merken sollten, ist, dass jede Eigenschaft eine definierte Liste von erlaubten Wertetypen hat und jeder Wertetyp eine Definition hat, die erklärt, was die Werte sind. Sie können dann die Details hier auf MDN nachlesen. Zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) auch erlaubt, einen Farbverlauf zu erstellen, ist zum Beispiel nützlich, aber vielleicht nicht offensichtliches Wissen!

Im nächsten Artikel werfen wir einen Blick darauf, wie Elemente in CSS dimensioniert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
