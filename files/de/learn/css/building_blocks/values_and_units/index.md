---
title: CSS-Werte und Einheiten
slug: Learn/CSS/Building_blocks/Values_and_units
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben kann. In dieser Lektion werden wir einen Blick auf einige der am häufigsten verwendeten Wertetypen werfen, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftenseite](/de/docs/Web/CSS/Reference#index) enthält einen Syntaxabschnitt, der die Werttypen auflistet, die Sie mit dieser Eigenschaft verwenden können.

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
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS-Erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Kennenlernen der verschiedenen Wertetypen und Einheiten, die in
        CSS-Eigenschaften verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN werden Sie Wertetypen erkennen, da sie durch spitze Klammern gekennzeichnet sind, wie z.B. [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie sehen, dass der Wertetyp `<color>` für eine bestimmte Eigenschaft gültig ist, bedeutet das, dass Sie jeden gültigen Farbwert für diese Eigenschaft verwenden können, wie auf der Referenzseite für [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt.

> [!NOTE]
> Sie werden sehen, dass CSS-Wertetypen als _Datentypen_ bezeichnet werden. Die Begriffe sind im Grunde austauschbar — wenn Sie in CSS etwas als Datentyp bezeichnet sehen, ist es einfach eine elegante Art zu sagen, Werttyp. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, den Sie als Werttyp verwenden können.

> [!NOTE]
> CSS-Wertetypen sind dazu neigen, in spitzen Klammern (`<`, `>`) eingeschlossen zu sein, um sie von CSS-Eigenschaften zu unterscheiden. Beispielsweise gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp. Das soll nicht mit HTML-Elementen verwechselt werden, da diese auch spitze Klammern verwenden, aber dies ist etwas zu beachten, was der Kontext klar machen sollte.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort und den Hintergrund mit der `rgb()`-Funktion festgelegt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung von zulässigen Werten zu definieren. Das bedeutet, dass Sie nicht darüber nachdenken müssen, welcher der verschiedenen Farbwerttypen verwendet werden kann — Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _jede_ verfügbare `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN für jeden Wert gibt Ihnen Informationen über die Browser-Unterstützung. Wenn Sie beispielsweise die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, sehen Sie, dass der Abschnitt zur Browser-Kompatibilität verschiedene Typen von Farbwerten und deren Unterstützung auflistet.

Schauen wir uns einige der Wert- und Einheitstypen an, auf die Sie häufig stoßen könnten, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

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
        Ein <code>&#x3C;number></code> stellt eine Dezimalzahl dar — er hat möglicherweise einen Dezimalpunkt mit einer Bruchkomponente. Zum Beispiel <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
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
        <code>&#x3C;number></code> mit einer Einheit. Beispielsweise
        <code>45deg</code>, <code>5s</code> oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine Oberkategorie, zu der {{cssxref("length")}} gehört,
        <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code>,
        <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code>
        und <code><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code>
        -Typen zählt.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> stellt einen Bruch eines anderen Wertes dar. Beispiel: <code>50%</code>. Prozentwerte sind immer relativ zu einer anderen Größe. Beispielsweise ist die Länge eines Elements relativ zur Länge seines Elternelements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, dem Sie am häufigsten begegnen, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. In CSS werden zwei Arten von Längen verwendet — relative und absolute. Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß Dinge werden.

#### Absolute Längeneinheiten

Die folgenden sind alles **absolute** Längeneinheiten — sie sind nicht relativ zu etwas anderem und werden im Allgemeinen immer als gleich groß betrachtet.

| Einheit | Name                 | Entspricht                 |
| ---- | ------------------- | ------------------------ |
| `cm` | Zentimeter          | 1cm = 37.8px = 25.2/64in |
| `mm` | Millimeter          | 1mm = 1/10 eines cm      |
| `Q`  | Viertelmillimeter   | 1Q = 1/40 eines cm       |
| `in` | Zoll                | 1in = 2.54cm = 96px      |
| `pc` | Picas               | 1pc = 1/6 eines in       |
| `pt` | Punkte              | 1pt = 1/72 eines in      |
| `px` | Pixel               | 1px = 1/96 eines in      |

Die meisten dieser Einheiten sind nützlicher beim Drucken als bei der Bildschirmausgabe. Wir verwenden zum Beispiel typischerweise keine `cm` (Zentimeter) auf dem Bildschirm. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements, oder zur Schriftgröße des Elternelements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe bzw. Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie bei sorgfältiger Planung die Größe von Text oder anderen Elementen relativ zum Rest der Seite skalieren können. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der gebräuchlichsten relativen Einheiten erkunden.

#### Erkundung eines Beispiels

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Das erste Feld hat eine {{cssxref("width")}}, die in Pixeln festgelegt ist. Als absolute Einheit bleibt diese Breite gleich, egal was sich sonst ändert.

Das zweite Feld hat eine Breite, die in `vw` (Viewport-Breite) Einheiten angegeben ist. Dieser Wert bezieht sich auf die Viewport-Breite, und daher sind 10vw 10 Prozent der Breite des Viewports. Wenn Sie die Breite Ihres Browserfensters ändern, ändert sich die Größe des Feldes. Da dieses Beispiel jedoch in die Seite mit einem [`<iframe>`](/de/docs/Web/HTML/Element/iframe) eingebettet ist, funktioniert dies nicht. Sie müssen [das Beispiel in einem eigenen Browser-Tab öffnen, um es in Aktion zu sehen](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Feld verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem enthaltenden {{htmlelement("div")}} festgelegt, das eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em` und Sie werden sehen, dass sich die Schriftgröße aller Elemente erhöht, aber nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie den obigen Anweisungen gefolgt sind, versuchen Sie, mit den Werten auf andere Weise zu spielen, um zu sehen, was Sie erhalten.

{{EmbedGHLiveSample("css-examples/learn/values-units/length.html", '100%', 900)}}

#### ems und rems

`em` und `rem` sind die beiden relativen Längen, denen Sie am häufigsten begegnen werden, wenn Sie alles, von Kästchen bis Text, dimensionieren. Es ist lohnenswert, zu verstehen, wie diese funktionieren, und die Unterschiede zwischen ihnen, besonders wenn Sie sich an komplexere Themen wie [Textstilgebung](/de/docs/Learn/CSS/Styling_text) oder [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) heranwagen. Das untenstehende Beispiel bietet eine Demonstration.

Der unten dargestellte HTML-Code ist eine Reihe von verschachtelten Listen — wir haben insgesamt zwei Listen, und beide Beispiele haben denselben HTML-Code. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ hat und die zweite eine Klasse von _rems_.

Zuerst setzen wir 16px als Schriftgröße auf dem `<html>`-Element.

**Um es noch einmal zusammenzufassen, bedeutet die `em`-Einheit "die Schriftgröße meines Elternelements"**, wenn es für `font-size` verwendet wird (und "meine eigene Schriftgröße", wenn es für etwas anderes verwendet wird). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}}, mit einer `class` von `ems` nehmen ihre Größenanpassung von ihrem Elternteil. So wird jede nachfolgende Verschachtelungsebene stetig größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat — 1.3-mal die Schriftgröße ihres Elternelements.

**Um es noch einmal zusammenzufassen, bedeutet die `rem`-Einheit "die Schriftgröße des Wurzelelements"** (rem steht für "root em"). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größenanpassung vom Wurzelelement (`<html>`). Das bedeutet, dass jede nachfolgende Verschachtelungsebene nicht stetig größer wird.

Allerdings, wenn Sie die `font-size` des `<html>`-Elements im CSS ändern, werden Sie sehen, dass sich alles andere relativ dazu ändert — sowohl `rem`- als auch `em`-größenveränderter Text.

{{EmbedGHLiveSample("css-examples/learn/values-units/em-rem.html", '100%', 1100)}}

#### Zeilenhöhe-Einheiten

`lh` und `rlh` sind relative Längeneinheiten ähnlich wie `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` besteht darin, dass der erste relativ zur Zeilenhöhe des Elements selbst ist, während der zweite relativ zur Zeilenhöhe des Wurzelelements ist, üblicherweise `<html>`.

Mit diesen Einheiten können wir Box-Dekorationen präzise an den Text anpassen. In diesem Beispiel verwenden wir die `lh`-Einheit, um notizblockartige Linien mit [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) zu erstellen. Es spielt keine Rolle, wie hoch die Zeilenhöhe des Textes ist, die Linien werden immer an der richtigen Stelle beginnen.

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

In vielen Fällen wird ein Prozentsatz ähnlich wie eine Länge behandelt. Das Besondere an Prozentsätzen ist, dass sie immer relativ zu einem anderen Wert ergeben werden. Zum Beispiel, wenn Sie die `font-size` eines Elements als Prozentsatz festlegen, wird es ein Prozentsatz der `font-size` des übergeordneten Elements sein. Wenn Sie einen Prozentsatz für einen `width`-Wert verwenden, wird es ein Prozentsatz der `width` des übergeordneten Elements sein.

Im unteren Beispiel haben die beiden prozentual dimensionierten Boxen und die beiden pixelgroßen Boxen die gleichen Klassennamen. Die Sets sind jeweils 40% und 200px breit.

Der Unterschied liegt darin, dass das zweite Set von zwei Boxen in einem Wrapper ist, der 400 Pixel breit ist. Die zweite 200px breite Box hat die gleiche Breite wie die erste, aber die zweite 40%-Box ist nun 40% von 400px — viel schmaler als die erste!

**Versuchen Sie, die Breite des Wrappers oder den Prozentsatzwert zu ändern, um zu sehen, wie es funktioniert.**

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage.html", '100%', 1000)}}

Im nächsten Beispiel sind Schriftgrößen in Prozentsätzen festgelegt. Jede `<li>` hat eine `font-size` von 80%; daher werden die verschachtelten Listenelemente immer kleiner, da sie ihre Größe von ihrem Elternteil erben.

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage-fonts.html", '100%', 800)}}

Beachten Sie, dass, obwohl viele Wertetypen eine Länge oder einen Prozentsatz akzeptieren, es einige gibt, die nur Länge akzeptieren. Sie können auf den MDN-Eigenschaftenreferenzseiten sehen, welche Werte akzeptiert werden. Wenn der erlaubte Wert {{cssxref("length-percentage")}} enthält, können Sie sowohl eine Länge als auch einen Prozentsatz verwenden. Wenn der erlaubte Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentsatz zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen, ohne dass eine Einheit hinzugefügt wird. Ein Beispiel für eine Eigenschaft, die eine einheitslose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Opazität eines Elements steuert (wie durchsichtig es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig durchsichtig) und `1` (vollständig undurchsichtig).

**Versuchen Sie im folgenden Beispiel, den Wert von `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1` zu ändern und beobachten Sie, wie die Box und ihr Inhalt mehr oder weniger durchsichtig wird.**

{{EmbedGHLiveSample("css-examples/learn/values-units/opacity.html", '100%', 600)}}

> [!NOTE]
> Wenn Sie eine Zahl in CSS als Wert verwenden, sollte sie nicht in Anführungszeichen eingeschlossen sein.

## Farbe

Farbwerte können an vielen Stellen in CSS verwendet werden, sei es, um die Farbe von Text, Hintergründen, Rahmen und viele weitere Dinge zu spezifizieren. Es gibt viele Möglichkeiten, in CSS Farben festzulegen, was Ihnen erlaubt, viele spannende Eigenschaften zu kontrollieren.

Das Standardfarbsystem, das in modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, die es ermöglichen, etwa 16,7 Millionen verschiedene Farben über eine Kombination verschiedener Rot-, Grün- und Blaukanäle mit jeweils 256 verschiedenen Werten anzuzeigen (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt werfen wir zuerst einen Blick auf die am häufigsten verwendeten Methoden zur Angabe von Farben: mit Schlüsselwörtern, Hexadezimal- und `rgb()`-Werten. Wir werfen auch einen kurzen Blick auf zusätzliche Farb-Funktionen, damit Sie sie erkennen können, wenn Sie sie sehen oder mit verschiedenen Möglichkeiten, Farbe anzuwenden, experimentieren können.

Sie werden wahrscheinlich eine Farbpalette festlegen und diese Farben — und Ihre bevorzugte Methode zur Angabe von Farben — im gesamten Projekt verwenden. Sie können Farbmodelle mischen und kombinieren, aber es ist normalerweise am besten, wenn Ihr ganzes Projekt dieselbe Methode zur Deklaration von Farben für Konsistenz verwendet!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder 'benannte Farben') in vielen MDN-Codebeispielen sehen. Da der Datentyp [`<named-color>`s](/de/docs/Web/CSS/named-color) eine sehr endliche Anzahl von Farbwerten enthält, werden diese nicht häufig auf Produktionswebseiten verwendet. Da das Schlüsselwort die Farbe als menschenlesbaren Textwert darstellt, werden benannte Farben in Codebeispielen verwendet, um dem Benutzer klar zu machen, welche Farbe erwartet wird, damit der Lerner sich auf den zu vermittelnden Inhalt konzentrieren kann.

**Versuchen Sie, mit verschiedenen Farbwerten in den untenstehenden Live-Beispielen zu spielen, um ein besseres Verständnis dafür zu bekommen, wie sie funktionieren.**

{{EmbedGHLiveSample("css-examples/learn/values-units/color-keywords.html", '100%', 800)}}

### Hexadezimale RGB-Werte

Der nächste Farbwerttyp, dem Sie begegnen werden, sind Hexadezimalcodes. Hexadezimal verwendet 16 Zeichen von `0-9` und `a-f`. Der gesamte Bereich lautet `0123456789abcdef`. Jeder Hex-Farbwert besteht aus einem Hash-Symbol (`#`) gefolgt von drei oder sechs Hexadezimalzeichen (`#fcc` oder `#ffc0cb` zum Beispiel) mit optional ein oder zwei Hexadezimalzeichen, die die Alpha-Transparenz der vorherigen drei oder sechs Zeichenfarbenwerte repräsentieren.

Wenn Sie Hexadezimal verwenden, um RGB-Werte zu beschreiben, ist jedes **Paar** von Hexadezimalzeichen eine Dezimalzahl, die einen der Kanäle — Rot, Grün und Blau — darstellt, und erlaubt es uns, einen der 256 verfügbaren Werte für jeden zu spezifizieren (16 x 16 = 256). Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, da Sie mit ihnen jede RGB-Farbe darstellen können.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hex.html", '100%', 800)}}

**Versuchen Sie erneut, die Werte zu ändern, um zu sehen, wie sich die Farben variieren.**

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Funktion drei Parameter, die **Rot**, **Grün** und **Blau**-Kanäle der Farben repräsentieren, mit einem optionalen vierten Wert, getrennt durch einen Schrägstrich ('/') darstellt, der die Opazität ähnelt den Hexwerten. Der Unterschied bei RGB besteht darin, dass jeder Kanal nicht durch zwei Hex-Zahlen, sondern durch eine Dezimalzahl von 0 bis 255 oder einen Prozentsatz zwischen 0% und 100% inklusiv dargestellt wird (jedoch nicht eine Mischung aus beiden).

Schreiben wir unser letztes Beispiel um, um RGB-Farben zu verwenden:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgb.html", '100%', 800)}}

Sie können einen vierten Parameter an `rgb()` übergeben, der den Alpha-Kanal der Farbe darstellt, der die Opazität steuert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig undurchsichtig macht. Werte dazwischen geben Ihnen verschiedene Stufen der Transparenz.

> [!NOTE]
> Das Setzen eines Alpha-Kanals auf eine Farbe hat einen wichtigen Unterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir zuvor betrachtet haben. Wenn Sie `opacity` verwenden, machen Sie das Element und alles darin undurchsichtig. Wenn Sie jedoch RGB mit einem Alpha-Parameter verwenden, färben Sie nur die Farbe, die Sie angeben, undurchsichtig.

Im Beispiel unten haben wir dem umgebenden Block unserer farbigen Boxen ein Hintergrundbild hinzugefügt. Wir haben dann die Boxen so gesetzt, dass sie unterschiedliche Opazitätswerte haben — beachten Sie, wie der Hintergrund mehr durchscheint, wenn der Alpha-Kanalwert kleiner ist.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgba.html", '100%', 900)}}

**Versuchen Sie in diesem Beispiel, die Alpha-Kanal-Werte zu ändern, um zu sehen, wie sich dies auf das Farbergebnis auswirkt.**

### SRGB-Werte

Der `sRGB`-Farbraum definiert Farben im **Rot** (r), **Grün** (g) und **Blau** (b) Farbraum.

### Verwendung von Farbtönen zur Spezifizierung einer Farbe

Wenn Sie über Schlüsselwörter, Hexadezimal- und `rgb()` hinausgehen möchten, um Farben anzugeben, möchten Sie vielleicht [`<hue>`](/de/docs/Web/CSS/hue) verwenden. Der Farbton ist das Merkmal, das es uns ermöglicht, den Unterschied oder die Ähnlichkeit zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu erkennen. Der Hauptgedanke ist, dass Sie einen Farbton in einem [`<angle>`](/de/docs/Web/CSS/angle) angeben können, weil die meisten Farbmodelle Farbtöne mit einem [Farbkreis](/de/docs/Glossary/color_wheel) beschreiben.

Es gibt mehrere Farbfunktionen, die eine [`<hue>`](/de/docs/Web/CSS/hue)-Komponente enthalten, einschließlich `hsl()`, `hwb()`, und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farbfunktionen, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend darauf, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, lesen Sie den [Farbauftrag auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) Leitfaden, die [`<color>`](/de/docs/Web/CSS/color_value) Referenz, die alle verschiedenen Möglichkeiten auflistet, wie Sie Farben in CSS verwenden können, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbtypen in CSS und die Eigenschaften, die Farbwerte verwenden, bietet.

### HWB

Ein großartiger Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Funktion, die eine `srgb()`-Farbe spezifiziert. Die drei Teile sind:

- **Farbton**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue)-Wert zwischen 0 und 360, der die Winkel um einen Farbkreis darstellt.
- **Weißgrad**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (kein Weißgrad) bis `100%` (voller Weißgrad).
- **Schwärze**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von 0% (keine Schwärze) bis 100% (volle Schwärze).

### HSL

Ähnlich der `hwb()` Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktion, die auch eine `srgb()` Farbe spezifiziert. HSL verwendet `Farbton`, zusätzlich zu `Sättigung` und `Helligkeit`:

- **Farbton**
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 keine Farbe ist (erscheint als Graustufen), und 100% ist volle Farbsättigung.
- **Helligkeit**: Wie hell oder leuchtend ist die Farbe? Dies nimmt einen Wert von 0–100%, wobei 0 keine Helligkeit ist (erscheint vollständig schwarz) und 100% volle Helligkeit ist (erscheint vollständig weiß).

Der `hsl()` Farbwert hat auch einen optionalen vierten Wert, der von der Farbe mit einem Schrägstrich (`/`) getrennt wird, der die Alpha-Transparenz darstellt.

Aktualisieren wir unser RGB-Beispiel, um HSL-Farben zu verwenden:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsl.html", '100%', 800)}}

Ähnlich wie bei `rgb()` können Sie einen Alpha-Parameter an `hsl()` übergeben, um die Opazität zu spezifizieren:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsla.html", '100%', 900)}}

## Bilder

Der Wertetyp [`<image>`](/de/docs/Web/CSS/image) wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()` Funktion referenziert wird, oder ein Farbverlauf.

Im folgenden Beispiel haben wir ein Bild und einen Farbverlauf als Wert für die CSS-Eigenschaft `background-image` demonstriert.

{{EmbedGHLiveSample("css-examples/learn/values-units/image.html", '100%', 900)}}

> [!NOTE]
> Es gibt einige andere mögliche Werte für `<image>`, jedoch sind diese neuer und haben derzeit eine schlechte Browser-Unterstützung. Schauen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image) Datentyp an, wenn Sie mehr darüber lesen möchten.

## Position

Der Wertetyp [`<position>`](/de/docs/Web/CSS/position_value) stellt ein Set von 2D-Koordinaten dar, das verwendet wird, um ein Element wie ein Hintergrundbild zu positionieren (über [`background-position`](/de/docs/Web/CSS/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` verwenden, um Elemente mit bestimmten Grenzen eines 2D-Rahmens auszurichten, zusammen mit Längen, die Offsets von den oberen und linken Rändern des Rahmens darstellen.

Ein typischer Positionswert besteht aus zwei Werten — der erste setzt die Position horizontal, der zweite vertikal. Wenn Sie nur Werte für eine Achse angeben, wird die andere standardmäßig auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px vom oberen und rechten Rand des Containers unter Verwendung eines Schlüsselworts positioniert.

{{EmbedGHLiveSample("css-examples/learn/values-units/position.html", '100%', 800)}}

**Spielen Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.**

## Zeichenfolgen und Bezeichner

In den obigen Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>` Schlüsselwörter wie `red`, `black`, `rebeccapurple`, und `goldenrod`). Diese Schlüsselwörter werden korrekter als _Bezeichner_ beschrieben, ein spezieller Wert, den CSS versteht. Daher werden sie nicht als Zeichenfolgen behandelt.

Es gibt Stellen, an denen Sie Zeichenfolgen in CSS verwenden. Zum Beispiel [bei der Spezifizierung generierter Inhalte](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#generating_content_with_before_and_after). In diesem Fall wird der Wert als Zeichenfolge behandelt, um zu demonstrieren, dass es sich um eine Zeichenkette handelt. Im folgenden Beispiel verwenden wir unzitiierte Farbschlüsselwörter zusammen mit einer zitierten generierten Inhaltszeichenfolge.

{{EmbedGHLiveSample("css-examples/learn/values-units/strings-idents.html", '100%', 600)}}

## Funktionen

In der Programmierung ist eine Funktion ein Code-Stück, das eine spezifische Aufgabe erfüllt. Funktionen sind nützlich, weil Sie einmal Code schreiben können, dann können Sie ihn viele Male wieder verwenden, anstatt die gleiche Logik immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern kommen auch mit praktischen eingebauten Funktionen für gängige Aufgaben, damit Sie sie nicht von Grund auf selbst schreiben müssen.

CSS hat auch [Funktionen](/de/docs/Web/CSS/CSS_Functions), die auf ähnliche Weise wie Funktionen in anderen Sprachen arbeiten. Tatsächlich haben wir bereits CSS-Funktionen im [Farbe](#farbe)-Abschnitt oben mit den Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) gesehen.

Abgesehen von der Anwendung von Farben können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun. Zum Beispiel sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Functions#transform_functions) eine gängige Methode, um Elemente auf einer Seite zu verschieben, zu drehen und zu skalieren. Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) sehen, um etwas horizontal oder vertikal zu bewegen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate), um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale), um etwas größer oder kleiner zu machen.

### Mathematikfunktionen

Wenn Sie Stile für ein Projekt erstellen, werden Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Dauer beginnen. Wenn Sie möchten, dass sich diese Werte basierend auf anderen Werten ändern, müssen Sie etwas Mathematik betreiben. Sie könnten den Prozentsatz eines Wertes berechnen oder eine Zahl zu einer anderen addieren und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS hat Unterstützung für [Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions#math_functions), die es uns erlauben, Berechnungen durchzuführen, anstatt auf statische Werte zu setzen oder die Mathematik in JavaScript zu machen. Eine der häufigsten Mathematikfunktionen ist [`calc()`](/de/docs/Web/CSS/calc), die es Ihnen ermöglicht, Operationen wie Addition, Subtraktion, Multiplikation und Division auszuführen.

Zum Beispiel, sagen wir, wir wollen die Breite eines Elements auf 20% seines übergeordneten Containers plus 100px setzen. Wir können diesen Wert nicht mit einem statischen Wert angeben — wenn der übergeordnete Container eine prozentuale Breite verwendet (oder eine relative Einheit wie `em` oder `rem`), dann wird es je nach Kontext, in dem es verwendet wird, variieren, und andere Faktoren wie das Gerät des Benutzers oder die Breite des Browserfensters. Allerdings können wir `calc()` verwenden, um die Breite des Elements auf 20% seines übergeordneten Containers plus 100px zu setzen. Die 20% basieren auf der Breite des übergeordneten Containers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

{{EmbedGHLiveSample("css-examples/learn/values-units/calc.html", '100%', 500)}}

Es gibt viele andere Mathematikfunktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max), und [`clamp()`](/de/docs/Web/CSS/clamp); diese ermöglichen es Ihnen respektive, den kleinsten, größten oder mittleren Wert aus einer Menge von Werten auszuwählen. Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos) und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel für die Rotation von Elementen um einen Punkt zu berechnen oder Farben auszuwählen, die einen [Farbwinkel](/de/docs/Web/CSS/hue) als Parameter nehmen. [Exponentialfunktionen](/de/docs/Web/CSS/CSS_Functions#exponential_functions) könnten auch für Animationen und Übergänge verwendet werden, wenn Sie sehr spezifische Kontrolle darüber benötigen, wie sich etwas bewegt und aussieht.

Zu wissen, dass es CSS-Funktionen gibt, ist nützlich, damit Sie sie erkennen, wenn Sie sie sehen. Sie sollten anfangen, mit ihnen in Ihren Projekten zu experimentieren — sie werden Ihnen helfen, benutzerdefinierten oder wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erreichen können.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_tasks).

## Zusammenfassung

Dies war ein schneller Durchgang durch die am häufigsten vorkommenden Arten von Werten und Einheiten, auf die Sie stoßen könnten. Sie können die verschiedenen Typen auf der [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Referenzseite ansehen — Sie werden vielen von ihnen begegnen, während Sie diese Lektionen durcharbeiten.

Der Schlüssel ist, sich daran zu erinnern, dass jede Eigenschaft eine definierte Liste zulässiger Wertetypen hat, und jeder Wertetyp hat eine Definition, die erklärt, was die Werte sind. Sie können sich dann die Einzelheiten hier auf MDN ansehen. Zum Beispiel, zu verstehen, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch erlaubt, einen Farbverlauf zu erstellen, ist nützlich, aber vielleicht nicht offensichtlich zu wissen!

Im nächsten Artikel werden wir uns ansehen, wie [Elemente in CSS dimensioniert werden](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}
