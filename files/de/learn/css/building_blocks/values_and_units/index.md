---
title: CSS-Werte und Einheiten
slug: Learn/CSS/Building_blocks/Values_and_units
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Syntax#css_declarations), die sich wiederum aus Eigenschaften und Werten zusammensetzen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten zulässig ist. In dieser Lektion werfen wir einen Blick auf einige der am häufigsten verwendeten Wertetypen, was sie sind und wie sie funktionieren.

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
        >, Grundkenntnisse im
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
        Die verschiedenen Arten von Werten und Einheiten in CSS-Eigenschaften zu erlernen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier bei MDN können Sie Wertetypen erkennen, da sie in spitzen Klammern umschlossen sind, wie z.B. [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet das, dass Sie jeden gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie auf der Referenzseite für [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie in CSS von einem Datentyp sprechen, ist das einfach eine schicke Art zu sagen, dass es sich um einen Wertetyp handelt. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

> [!NOTE]
> CSS-Wertetypen neigen dazu, in spitzen Klammern (`<`, `>`) eingeschlossen zu werden, um sie von CSS-Eigenschaften zu unterscheiden.
> Zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value) Datentyp.
> Dies ist nicht mit HTML-Elementen zu verwechseln, da diese ebenfalls spitze Klammern verwenden, aber dies sollte der Kontext klären.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort festgelegt und den Hintergrund mit der `rgb()`-Funktion:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung zulässiger Werte zu definieren. Das bedeutet, wenn Sie `<color>` als gültig sehen, müssen Sie sich nicht wundern, welche der verschiedenen Arten von Farbwerten verwendet werden können — Schlüsselwörter, hexadezimale Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browser-Unterstützung. Wenn Sie sich die Seite für [`<color>`](/de/docs/Web/CSS/color_value) anschauen, werden Sie sehen, dass der Abschnitt Browser-Kompatibilität verschiedene Arten von Farbwerten und deren Unterstützung auflistet.

Lassen Sie uns einige der Werttypen und Einheiten betrachten, denen Sie häufig begegnen können, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

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
        einen Dezimalpunkt mit einer Bruchkomponente haben oder nicht. Zum
        Beispiel <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
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
        <code>&#x3C;number></code> mit einer Einheit angehängt. Zum Beispiel
        <code>45deg</code>, <code>5s</code> oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine Oberkategorie, die das
        {{cssxref("length")}}, <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code
        >, <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code
        >, und
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
        relativ zu einer anderen Größe. Zum Beispiel ist die Länge eines
        Elements relativ zur Länge seines übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. Es gibt zwei Arten von Längen, die in CSS verwendet werden — relativ und absolut. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeeinheiten

Die folgenden sind alle **absolute** Längeeinheiten — sie sind nicht relativ zu etwas anderem und werden im Allgemeinen immer als gleich groß angesehen.

| Einheit | Name              | Entspricht               |
| ------- | ----------------- | ------------------------ |
| `cm`    | Zentimeter        | 1cm = 37,8px = 25,2/64in |
| `mm`    | Millimeter        | 1mm = 1/10 von 1cm       |
| `Q`     | Viertelmillimeter | 1Q = 1/40 von 1cm        |
| `in`    | Zoll              | 1in = 2,54cm = 96px      |
| `pc`    | Picas             | 1pc = 1/6 von 1in        |
| `pt`    | Punkte            | 1pt = 1/72 von 1in       |
| `px`    | Pixel             | 1px = 1/96 von 1in       |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck verwendet werden, als für die Bildschirmausgabe. Zum Beispiel verwenden wir `cm` (Zentimeter) auf dem Bildschirm normalerweise nicht. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeeinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Viewports, jeweils.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit etwas sorgfältiger Planung dafür sorgen können, dass die Größe von Text oder anderen Elementen relativ zu allem anderen auf der Seite skaliert wird. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den {{cssxref("length")}} Typ.

In diesem Abschnitt werden wir einige der gebräuchlichsten relativen Einheiten erkunden.

#### Beispiel erkunden

Im folgenden Beispiel sehen Sie, wie sich einige relative und absolute Längeeinheiten verhalten. Das erste Feld hat eine {{cssxref("width")}} in Pixeln gesetzt. Als absolute Einheit bleibt diese Breite gleich, egal was sich ändert.

Das zweite Feld hat eine Breite in `vw` (Viewport-Breite) Einheiten. Dieser Wert ist relativ zur Breite des Viewports, und so sind 10vw 10 Prozent der Breite des Viewports. Wenn Sie die Breite Ihres Browserfensters ändern, sollte sich die Größe des Feldes ändern. Dieses Beispiel ist jedoch in die Seite eingebettet unter Verwendung eines [`<iframe>`](/de/docs/Web/HTML/Element/iframe), sodass dies nicht funktioniert. Um dies in Aktion zu sehen, müssen Sie [das Beispiel ausprobieren, nachdem Sie es in einem eigenen Browser-Tab geöffnet haben](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Feld verwendet `em` Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umschließenden {{htmlelement("div")}} gesetzt, das eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em`, und Sie werden sehen, dass die Schriftgröße aller Elemente zunimmt, aber nur das letzte Element wird breiter, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie den obigen Anweisungen gefolgt sind, versuchen Sie, mit den Werten auf andere Weise zu spielen, um zu sehen, was Sie erhalten.

{{EmbedGHLiveSample("css-examples/learn/values-units/length.html", '100%', 900)}}

#### ems und rems

`em` und `rem` sind die beiden relativen Längen, denen Sie wahrscheinlich am häufigsten begegnen werden, wenn es darum geht, alles von Boxen bis zu Text zu skalieren. Es lohnt sich, zu verstehen, wie sie funktionieren und die Unterschiede zwischen ihnen zu verstehen, besonders wenn Sie beginnen, komplexere Themen wie [Text gestalten](/de/docs/Learn/CSS/Styling_text) oder [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) zu erkunden. Das untenstehende Beispiel bietet eine Demonstration.

Der unten dargestellte HTML-Code ist eine Reihe von verschachtelten Listen — wir haben insgesamt zwei Listen und beide Beispiele haben denselben HTML-Code. Der einzige Unterschied besteht darin, dass die erste die Klasse _ems_ und die zweite die Klasse _rems_ hat.

Zu Beginn setzen wir 16px als Schriftgröße auf dem `<html>` Element.

**Zusammenfassend bedeutet die `em` Einheit "die Schriftgröße meines übergeordneten Elements"**, wenn sie für `font-size` verwendet wird (und "meine eigene Schriftgröße", wenn sie für etwas anderes verwendet wird). Die {{htmlelement("li")}} Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` nehmen ihre Größe von ihrem übergeordneten Element. Daher wird jedes nachfolgende Verschachtelungsniveau sukzessive größer, da jedes seine Schriftgröße auf `1.3em` gesetzt hat — 1,3 mal die Schriftgröße seines übergeordneten Elements.

**Zusammenfassend bedeutet die `rem` Einheit "die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}} Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größe vom Wurzelelement (`<html>`) an. Dies bedeutet, dass sich jedes nachfolgende Verschachtelungsniveau nicht ständig vergrößert.

Wenn Sie jedoch die `font-size` des `<html>` Elements im CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu ändert — sowohl `rem`- als auch `em`-skalierter Text.

{{EmbedGHLiveSample("css-examples/learn/values-units/em-rem.html", '100%', 1100)}}

#### Liniendickeneinheiten

`lh` und `rlh` sind relative Längeeinheiten ähnlich wie `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` besteht darin, dass die erste relativ zur Zeilenhöhe des Elements selbst ist, während die zweite relativ zur Zeilenhöhe des Wurzelelements ist, normalerweise `<html>`.

Mit diesen Einheiten können Sie die Box-Dekoration genau auf den Text ausrichten. In diesem Beispiel verwenden wir die `lh` Einheit, um notizblockartige Linien mit [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) zu erstellen. Es spielt keine Rolle, wie hoch die Zeilenhöhe des Textes ist, die Linien beginnen immer am richtigen Ort.

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

In vielen Fällen wird ein Prozentsatz ebenso wie eine Länge behandelt. Das Besondere an Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert festgelegt werden. Wenn Sie beispielsweise die `font-size` eines Elements als Prozentsatz festlegen, wird es ein Prozentsatz der `font-size` des übergeordneten Elements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, ist dieser ein Prozentsatz der `width` des übergeordneten Elements.

Im folgenden Beispiel haben die zwei prozentual skalierten Boxen und die zwei pixelbasierten Boxen dieselben Klassennamen. Die Sets sind jeweils 40% und 200px breit.

Der Unterschied besteht darin, dass das zweite Set von zwei Boxen in einem Wrapper ist, der 400 Pixel breit ist. Die zweite 200px breite Box hat dieselbe Breite wie die erste, aber die zweite 40% Box ist jetzt 40% von 400px — viel schmaler als die erste!

**Versuchen Sie, die Breite des Wrappers oder den Prozentwert zu ändern, um zu sehen, wie dies funktioniert.**

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage.html", '100%', 1000)}}

Das nächste Beispiel hat Schriftgrößen, die in Prozent angegeben sind. Jedes `<li>` hat eine `font-size` von 80%; daher werden die verschachtelten Listenelemente nach und nach kleiner, da sie ihre Größen von ihrem übergeordneten Element erben.

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage-fonts.html", '100%', 800)}}

Beachten Sie, dass viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es gibt jedoch einige, die nur Länge akzeptieren. Sie können sehen, welche Werte auf den MDN Eigenschaftsreferenzseiten akzeptiert werden. Wenn der zulässige Wert {{cssxref("length-percentage")}} enthält, können Sie eine Länge oder einen Prozentsatz verwenden. Wenn der zulässige Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen, ohne dass ihnen eine Einheit hinzugefügt wird. Ein Beispiel für eine Eigenschaft, die eine einheitslose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Undurchsichtigkeit eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

**Im folgenden Beispiel versuchen Sie, den Wert der `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und beobachten, wie die Box und ihr Inhalt mehr oder weniger durchsichtig werden.**

{{EmbedGHLiveSample("css-examples/learn/values-units/opacity.html", '100%', 600)}}

> [!NOTE]
> Wenn Sie eine Zahl in CSS als Wert verwenden, sollte sie nicht in Anführungszeichen eingeschlossen werden.

## Farbe

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es, um die Farbe von Text, Hintergründen, Rahmen und vieles mehr zu bestimmen. Es gibt viele Möglichkeiten, Farbe in CSS festzulegen, die es Ihnen ermöglichen, viele aufregende Eigenschaften zu steuern.

Das standardmäßig in modernen Computern verfügbare Farbsystem unterstützt 24-Bit-Farben, was es ermöglicht, etwa 16,7 Millionen verschiedene Farben durch eine Kombination verschiedener roter, grüner und blauer Kanäle mit 256 verschiedenen Werten pro Kanal darzustellen (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werden wir zuerst die am häufigsten gesehenen Methoden zur Spezifizierung von Farben betrachten: die Verwendung von Schlüsselwörtern, Hexadezimal- und `rgb()`-Werten. Wir werden auch einen kurzen Blick auf zusätzliche Farb-Funktionen werfen, die es Ihnen ermöglichen, sie zu erkennen, wenn Sie sie sehen, oder verschiedene Möglichkeiten der Farbgebung zu erforschen.

Sie werden wahrscheinlich eine Farbpalette auswählen und dann diese Farben — und Ihre bevorzugte Methode zur Farbspezifizierung — in Ihrem gesamten Projekt verwenden. Sie können Farbmodelle mischen und anpassen, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt die gleiche Methode zur Deklaration von Farben für Konsistenz verwendet!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder 'benannte Farben') in vielen MDN-Codebeispielen sehen. Da der [`<named-color>`s](/de/docs/Web/CSS/named-color) Datentyp eine sehr endliche Anzahl von Farbwerten enthält, werden diese nicht häufig auf Produktionswebsites verwendet. Da das Schlüsselwort die Farbe als menschenlesbaren Textwert darstellt, werden benannte Farben in Code-Beispielen verwendet, um dem Benutzer eindeutig mitzuteilen, welche Farbe erwartet wird, sodass der Lernende sich auf den zu vermittelnden Inhalt konzentrieren kann.

**Spielen Sie mit verschiedenen Farbwerten in den Live-Beispielen unten, um eine bessere Vorstellung davon zu bekommen, wie sie funktionieren.**

{{EmbedGHLiveSample("css-examples/learn/values-units/color-keywords.html", '100%', 800)}}

### Hexadezimale RGB-Werte

Die nächste Art von Farbwert, der Ihnen wahrscheinlich begegnen wird, sind hexadezimale Codes. Das Hexadezimalsystem verwendet 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` besteht. Jeder hexadezimale Farbwert besteht aus einem Hash-/Raute-Symbol (`#`), gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb`, zum Beispiel), mit einem optionalen ein oder zwei hexadezimalen Zeichen, die die Alpha-Transparenz der vorhergehenden drei oder sechs Zeichenfarbwerte darstellen.

Bei Verwendung von Hexadezimal zur Beschreibung von RGB-Werten repräsentiert jedes **Paar** hexadezimaler Zeichen eine Dezimalzahl, die einen der Kanäle — rot, grün und blau — darstellt und es uns ermöglicht, einen der 256 verfügbaren Werte für jeden zu spezifizieren (16 x 16 = 256). Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, da Sie jede RGB-Farbe mit ihnen darstellen können.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hex.html", '100%', 800)}}

**Ändern Sie erneut die Werte, um zu sehen, wie sich die Farben unterscheiden.**

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion drei Parameter entgegen, die **rote**, **grüne** und **blaue** Kanalwerte der Farben darstellen, mit einem optionalen vierten Wert, der durch einen Schrägstrich ('/') getrennt ist, der die Undurchsichtigkeit auf ähnliche Weise wie Hex-Werte darstellt. Der Unterschied bei RGB besteht darin, dass jeder Kanal nicht durch zwei Hex-Ziffern, sondern durch eine Dezimalzahl zwischen 0 und 255 oder einen Prozentsatz zwischen 0% und 100% inklusive (jedoch keine Mischung aus beiden) dargestellt wird.

Schreiben wir unser letztes Beispiel um, um RGB-Farben zu verwenden:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgb.html", '100%', 800)}}

Sie können einen vierten Parameter an `rgb()` übergeben, der den Alphakanal der Farbe darstellt, der die Opazität steuert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen ergeben unterschiedliche Transparenzstufen.

> [!NOTE]
> Das Setzen eines Alpha-Kanals auf eine Farbe unterscheidet sich in einem wichtigen Punkt von der Verwendung der {{cssxref("opacity")}} Eigenschaft, die wir weiter oben angesehen haben. Wenn Sie Opazität verwenden, machen Sie das Element und alles darin durchsichtig, während bei der Verwendung von RGB mit einem Alpha-Parameter nur die von Ihnen spezifizierte Farbe durchsichtig wird.

Im Beispiel unten haben wir ein Hintergrundbild zum umgebenden Block unserer farbigen Boxen hinzugefügt. Wir haben dann die Boxen so eingestellt, dass sie unterschiedliche Opazitätswerte haben — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanalwert kleiner ist.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgba.html", '100%', 900)}}

**Versuchen Sie in diesem Beispiel, die Werte des Alpha-Kanals zu ändern, um zu sehen, wie dies die Farbausgabe beeinflusst.**

### SRGB-Werte

Der `sRGB` Farbraum definiert Farben im **roten** (r), **grünen** (g) und **blauen** (b) Farbraum.

### Verwenden von Farbton zur Spezifizierung einer Farbe

Wenn Sie über Schlüsselwörter, Hexadezimal und `rgb()` hinaus Farben verwenden möchten, könnten Sie versuchen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Farbton ist die Eigenschaft, die es uns ermöglicht, zwischen Farben wie rot, orange, gelb, grün, blau usw. zu unterscheiden oder Ähnlichkeiten zu erkennen. Der Schlüsselkonzept besteht darin, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) spezifizieren können, da die meisten Farbmodelle Farbtöne mithilfe eines [Farbkreises](/de/docs/Glossary/color_wheel) beschreiben.

Es gibt mehrere Farb-Funktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue) Komponente enthalten, einschließlich `hsl()`, `hwb()` und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farb-Funktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend darauf, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, lesen Sie den [Farbauftrag auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) Leitfaden, die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften gibt, die Farbwerte verwenden.

### HWB

Ein großartiger Einstiegspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion, die eine `srgb()` Farbe spezifiziert. Die drei Teile sind:

- **Farbton**: Der Basiston der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue) Wert zwischen 0 und 360 an, der die Winkel auf einem Farbkreis darstellt.
- **Weißheit**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (keine Weißheit) bis `100%` (volle Weißheit) an.
- **Schwärze**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von `0%` (keine Schwärze) bis `100%` (volle Schwärze) an.

### HSL

Ähnlich zur `hwb()` Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die eine `srgb()` Farbe ebenfalls spezifiziert. HSL verwendet `Farbton`, zusätzlich `Sättigung` und `Helligkeit`:

- **Farbton**
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 keine Farbe ist (es erscheint in einem Grauton) und 100% volle Farbsättigung ist.
- **Helligkeit**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 kein Licht ist (es erscheint vollständig schwarz) und 100% volles Licht ist (es scheint vollständig weiß).

Der `hsl()` Farbwert hat auch einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) von der Farbe getrennt ist und die Alpha-Transparenz darstellt.

Lassen Sie uns das RGB-Beispiel aktualisieren, um stattdessen HSL-Farben zu verwenden:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsl.html", '100%', 800)}}

Genau wie mit `rgb()` können Sie einen Alpha-Parameter an `hsl()` übergeben, um die Opazität zu spezifizieren:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsla.html", '100%', 900)}}

## Bilder

Der [`<image>`](/de/docs/Web/CSS/image) Wertetyp wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()` Funktion angegeben wird, oder ein Verlauf.

Im folgenden Beispiel haben wir ein Bild und einen Verlauf als Wert für die CSS-Eigenschaft `background-image` demonstriert.

{{EmbedGHLiveSample("css-examples/learn/values-units/image.html", '100%', 900)}}

> [!NOTE]
> Es gibt einige andere mögliche Werte für `<image>`, jedoch sind diese neuer und haben derzeit eine schlechte Browser-Unterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie mehr darüber lesen möchten.

## Position

Der [`<position>`](/de/docs/Web/CSS/position_value) Wertetyp repräsentiert ein Set von 2D-Koordinaten, die verwendet werden, um ein Element wie ein Hintergrundbild (über [`background-position`](/de/docs/Web/CSS/background-position)) zu positionieren. Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` annehmen, um Elemente mit bestimmten Begrenzungen eines 2D-Feldes auszurichten, zusammen mit Längen, die Offsets vom oberen und linken Rand des Feldes darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste legt die horizontale Position fest, der zweite die vertikale. Wenn Sie nur Werte für eine Achse angeben, wird die andere standardmäßig auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px von oben und rechts des Containers positioniert, indem wir ein Schlüsselwort verwenden.

{{EmbedGHLiveSample("css-examples/learn/values-units/position.html", '100%', 800)}}

**Experimentieren Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.**

## Zeichenfolgen und Bezeichner

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet wurden (zum Beispiel `<color>` Schlüsselwörter wie `rot`, `schwarz`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Als solcher werden sie nicht zitiert — sie werden nicht als Zeichenfolgen behandelt.

Es gibt Stellen, an denen Sie Zeichenfolgen in CSS verwenden. Zum Beispiel [bei der Spezifizierung generierter Inhalte](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#generating_content_with_before_and_after). In diesem Fall wird der Wert zitiert, um zu zeigen, dass es sich um eine Zeichenfolge handelt. Im folgenden Beispiel verwenden wir unzitierte Farb-Schlüsselwörter zusammen mit einer zitierten generierten Zeichenfolgeninhaltzeichenfolge.

{{EmbedGHLiveSample("css-examples/learn/values-units/strings-idents.html", '100%', 600)}}

## Funktionen

In der Programmierung ist eine Funktion ein Stück Code, das eine bestimmte Aufgabe erledigt.
Funktionen sind nützlich, weil Sie Code einmal schreiben und dann mehrfach wiederverwenden können, anstatt die gleiche Logik immer und immer wieder zu schreiben.
Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern bieten auch praktische eingebaute Funktionen für häufige Aufgaben, damit Sie sie nicht von Grund auf neu schreiben müssen.

CSS hat auch [Funktionen](/de/docs/Web/CSS/CSS_Functions), die ähnlich funktionieren wie Funktionen in anderen Sprachen.
Tatsächlich haben wir bereits CSS-Funktionen im [Farbe](#farbe) Abschnitt oben mit [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktionen gesehen.

Abgesehen von der Anwendung von Farben können Sie Funktionen in CSS für viele andere Dinge verwenden.
Zum Beispiel sind [Transformfunktionen](/de/docs/Web/CSS/CSS_Functions#transform_functions) eine gängige Möglichkeit, Elemente auf einer Seite zu verschieben, zu drehen und zu skalieren.
Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu verschieben, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate), um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale), um etwas größer oder kleiner zu machen.

### Math-Funktionen

Wenn Sie Stile für ein Projekt erstellen, beginnen Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Zeitdauern.
Wenn Sie möchten, dass diese Werte auf Basis anderer Werte variieren, müssen Sie etwas Mathematik anwenden.
Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen Zahl hinzufügen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS unterstützt [Math-Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions), die es uns ermöglichen, Berechnungen durchzuführen, anstatt auf statische Werte angewiesen zu sein oder die Mathematik in JavaScript durchzuführen.
Eine der häufigsten Math-Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die es Ihnen ermöglicht, Operationen wie Addition, Substraktion, Multiplikation und Division durchzuführen.

Zum Beispiel, nehmen wir an, wir möchten die Breite eines Elements als 20% seines übergeordneten Containers plus 100px festlegen.
Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn das übergeordnete Element eine prozentuale Breite (oder eine relative Einheit wie `em` oder `rem`) verwendet, variiert es je nach Kontext, in dem es verwendet wird, und anderen Faktoren wie dem Gerät des Benutzers oder der Fensterbreite des Browsers.
Wir können jedoch `calc()` verwenden, um die Breite des Elements als 20% seines übergeordneten Containers plus 100px zu setzen.
Die 20% beziehen sich auf die Breite des übergeordneten Containers (`.wrapper`) und wenn diese Breite sich ändert, ändert sich die Berechnung ebenfalls:

{{EmbedGHLiveSample("css-examples/learn/values-units/calc.html", '100%', 500)}}

Es gibt viele andere Math-Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max), und [`clamp()`](/de/docs/Web/CSS/clamp); diese erlauben Ihnen jeweils, den kleinsten, größten oder mittleren Wert aus einem Set aus Werten auszuwählen.
Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos) und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel für die Drehung von Elementen um einen Punkt zu berechnen oder Farben auszuwählen, die einen [Farbwinkel](/de/docs/Web/CSS/hue) als Parameter annehmen.
[Exponentialfunktionen](/de/docs/Web/CSS/CSS_Functions#exponential_functions) könnten auch für Animationen und Übergänge verwendet werden, wenn Sie sehr spezifische Kontrolle über die Bewegung und das Aussehen von etwas benötigen.

Das Wissen über CSS-Funktionen ist nützlich, damit Sie sie erkennen, wenn Sie ihnen begegnen. Sie sollten beginnen, mit ihnen in Ihren Projekten zu experimentieren — sie werden Ihnen helfen, benutzerdefinierten oder wiederholten Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erreichen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_tasks).

## Zusammenfassung

Dies war ein kurzer Durchgang durch die häufigsten Arten von Werten und Einheiten, denen Sie begegnen könnten. Sie können alle verschiedenen Typen auf der [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Referenzseite nachschlagen — Sie werden viele davon verwenden, während Sie diese Lektionen durcharbeiten.

Das Wichtigste, was zu beachten ist, ist, dass jede Eigenschaft eine definierte Liste zulässiger Wertetypen hat und jeder Wertetyp eine Definition enthält, die erklärt, was die Werte sind. Dadurch können Sie die Details hier auf MDN nachschlagen. Zum Beispiel ist es nützlich, zu wissen, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch ermöglicht, einen Farbverlauf zu erstellen, aber diese Information ist vielleicht nicht sofort offensichtlich!

Im nächsten Artikel werfen wir einen Blick darauf, wie [Elemente in CSS skaliert werden](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}
