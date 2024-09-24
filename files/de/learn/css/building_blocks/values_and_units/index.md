---
title: CSS-Werte und -Einheiten
slug: Learn/CSS/Building_blocks/Values_and_units
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}

CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir einige der am häufigsten verwendeten Wertetypen betrachten, was sie sind und wie sie funktionieren.

> [!NOTE]
> Jede [CSS-Eigenschaftsseite](/de/docs/Web/CSS/Reference#index) enthält einen Syntaxabschnitt, in dem die Wertetypen aufgelistet sind, die Sie mit dieser Eigenschaft verwenden können.

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
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um etwas über die verschiedenen Arten von Werten und Einheiten zu lernen,
        die in CSS-Eigenschaften verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein CSS-Wert?

In CSS-Spezifikationen und auf den Eigenschaftsseiten hier auf MDN können Sie Wertetypen erkennen, da sie von spitzen Klammern umgeben sind, wie zum Beispiel [`<color>`](/de/docs/Web/CSS/color_value) oder {{cssxref("length")}}. Wenn Sie den Wertetyp `<color>` als gültig für eine bestimmte Eigenschaft sehen, bedeutet dies, dass Sie einen beliebigen gültigen Farbwert als Wert für diese Eigenschaft verwenden können, wie auf der Referenzseite [`<color>`](/de/docs/Web/CSS/color_value) aufgeführt.

> [!NOTE]
> Sie werden die CSS-Wertetypen als _Datentypen_ bezeichnet sehen. Die Begriffe sind im Grunde austauschbar – wenn Sie etwas in CSS als Datentyp bezeichnet sehen, ist es nur eine elegante Art, Wertetyp zu sagen. Der Begriff _Wert_ bezieht sich auf jeden bestimmten Ausdruck, der von einem Wertetyp unterstützt wird, den Sie verwenden möchten.

> [!NOTE]
> CSS-Wertetypen sind tendenziell in spitzen Klammern (`<`, `>`) eingeschlossen, um sie von CSS-Eigenschaften zu unterscheiden.
> Zum Beispiel gibt es eine {{cssxref("color")}}-Eigenschaft und einen [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp.
> Dies darf nicht mit HTML-Elementen verwechselt werden, da sie auch spitze Klammern verwenden, aber dies ist etwas, das im Kontext klar wird.

Im folgenden Beispiel haben wir die Farbe unserer Überschrift mit einem Schlüsselwort und den Hintergrund mit der `rgb()`-Funktion festgelegt:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Ein Wertetyp in CSS ist eine Möglichkeit, eine Sammlung von zulässigen Werten zu definieren. Das bedeutet, dass Sie bei `<color>` als gültigem Wert nicht darüber nachdenken müssen, welche der verschiedenen Farbwerttypen verwendet werden können – Schlüsselwörter, Hex-Werte, `rgb()`-Funktionen usw. Sie können _alle_ verfügbaren `<color>`-Werte verwenden, vorausgesetzt, sie werden von Ihrem Browser unterstützt. Die Seite auf MDN zu jedem Wert gibt Ihnen Informationen über die Browserunterstützung. Wenn Sie sich beispielsweise die Seite für [`<color>`](/de/docs/Web/CSS/color_value) ansehen, werden Sie feststellen, dass der Abschnitt zur Browserkompatibilität unterschiedliche Farbwerttypen und deren Unterstützung auflistet.

Werfen wir einen Blick auf einige der Wertetypen und Einheiten, die Ihnen häufig begegnen können, mit Beispielen, damit Sie verschiedene mögliche Werte ausprobieren können.

## Zahlen, Längen und Prozentwerte

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
        Eine <code>&#x3C;number></code> stellt eine Dezimalzahl dar – sie kann
        einen Dezimalpunkt mit einem Bruchanteil enthalten oder nicht. Zum Beispiel
        <code>0.255</code>, <code>128</code> oder <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/CSS/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Eine <code>&#x3C;dimension></code> ist eine <code>&#x3C;number></code>
        mit einer angehängten Einheit. Zum Beispiel <code>45deg</code>,
        <code>5s</code> oder <code>10px</code>.
        <code>&#x3C;dimension></code> ist eine übergeordnete Kategorie, die
        die {{cssxref("length")}},
        <code><a href="/de/docs/Web/CSS/angle">&#x3C;angle></a></code>,
        <code><a href="/de/docs/Web/CSS/time">&#x3C;time></a></code>-
        und
        <code><a href="/de/docs/Web/CSS/resolution">&#x3C;resolution></a></code>
        -Typen umfasst.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Ein <code>&#x3C;percentage></code> stellt einen Bruchteil eines anderen
        Wertes dar. Zum Beispiel <code>50%</code>. Prozentwerte sind immer
        relativ zu einer anderen Größe. Beispielsweise ist die Länge eines
        Elements relativ zur Länge des übergeordneten Elements.
      </td>
    </tr>
  </tbody>
</table>

### Längen

Der numerische Typ, mit dem Sie am häufigsten konfrontiert werden, ist {{cssxref("length")}}. Zum Beispiel `10px` (Pixel) oder `30em`. In CSS gibt es zwei Arten von Längen – relative und absolute.
Es ist wichtig, den Unterschied zu kennen, um zu verstehen, wie groß ein Element wird.

#### Absolute Längeneinheiten

Die folgenden sind alle **absoluten** Längeneinheiten – sie sind nicht relativ zu anderem und werden im Allgemeinen als immer gleich groß angesehen.

| Einheit | Name                | Entspricht               |
| ---- | ------------------- | ------------------------ |
| `cm` | Zentimeter         | 1cm = 37,8px = 25,2/64in |
| `mm` | Millimeter         | 1mm = 1/10 eines 1cm      |
| `Q`  | Viertelmillimeter  | 1Q = 1/40 eines 1cm       |
| `in` | Zoll               | 1in = 2,54cm = 96px      |
| `pc` | Pica               | 1pc = 1/6 eines 1in       |
| `pt` | Punkt              | 1pt = 1/72 eines 1in      |
| `px` | Pixel              | 1px = 1/96 eines 1in      |

Die meisten dieser Einheiten sind nützlicher, wenn sie für den Druck als für die Bildschirmausgabe verwendet werden. Wir verwenden beispielsweise normalerweise keine `cm` (Zentimeter) auf Bildschirmen. Der einzige Wert, den Sie häufig verwenden werden, ist `px` (Pixel).

#### Relative Längeneinheiten

Relative Längeneinheiten sind relativ zu etwas anderem. Zum Beispiel:

- `em` ist relativ zur Schriftgröße dieses Elements oder zur Schriftgröße des übergeordneten Elements, wenn es für {{cssxref("font-size")}} verwendet wird. `rem` ist relativ zur Schriftgröße des Wurzelelements.
- `vh` und `vw` sind relativ zur Höhe und Breite des Ansichtsfensters.

Der Vorteil der Verwendung relativer Einheiten besteht darin, dass Sie mit ein wenig Planung die Größe des Textes oder anderer Elemente relativ zu allem anderen auf der Seite skalieren lassen können. Eine vollständige Liste der verfügbaren relativen Einheiten finden Sie auf der Referenzseite für den {{cssxref("length")}}-Typ.

In diesem Abschnitt werden wir einige der gebräuchlichsten relativen Einheiten untersuchen.

#### Ein Beispiel untersuchen

Im folgenden Beispiel können Sie sehen, wie sich einige relative und absolute Längeneinheiten verhalten. Das erste Kästchen hat eine {{cssxref("width")}}, die in Pixeln angegeben ist. Als absolute Einheit bleibt diese Breite gleich, egal was sich sonst ändert.

Das zweite Kästchen hat eine Breite, die in `vw` (Ansichtsfensterbreite) Einheiten angegeben ist. Dieser Wert ist relativ zur Ansichtsfensterbreite, und somit sind 10vw 10 Prozent der Breite des Ansichtsfensters. Ändern Sie die Breite Ihres Browserfensters, sollte sich die Größe des Kästchens ändern. Da dieses Beispiel jedoch auf der Seite mithilfe eines [`<iframe>`](/de/docs/Web/HTML/Element/iframe) eingebettet ist, wird dies hier nicht funktionieren. Um dies in Aktion zu sehen, müssen Sie [das Beispiel in einem neuen Browser-Tab öffnen](https://mdn.github.io/css-examples/learn/values-units/length.html).

Das dritte Kästchen verwendet `em`-Einheiten. Diese sind relativ zur Schriftgröße des Elements. Ich habe eine Schriftgröße von `1em` auf dem umschließenden {{htmlelement("div")}} eingestellt, das eine Klasse von `.wrapper` hat. Ändern Sie diesen Wert auf `1.5em` und Sie werden sehen, dass die Schriftgröße aller Elemente zunimmt, aber nur das letzte Element breiter wird, da seine Breite relativ zu dieser Schriftgröße ist.

Nachdem Sie die oben genannten Anweisungen befolgt haben, versuchen Sie, die Werte auf andere Weise zu ändern, um zu sehen, was Sie erhalten.

{{EmbedGHLiveSample("css-examples/learn/values-units/length.html", '100%', 900)}}

#### ems und rems

`em` und `rem` sind die beiden relativen Längen, denen Sie am häufigsten begegnen werden, wenn es darum geht, alles von Boxen bis zu Texten zu dimensionieren. Es ist es wert, zu verstehen, wie sie funktionieren, und die Unterschiede zwischen ihnen zu kennen, insbesondere wenn Sie dazu übergehen, komplexere Themen wie [Textstyling](/de/docs/Learn/CSS/Styling_text) oder [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) zu behandeln. Das unten stehende Beispiel bietet eine Demonstration.

Der im HTML gezeigte Code ist eine Reihe verschachtelter Listen – wir haben insgesamt zwei Listen und beide Beispiele haben dasselbe HTML. Der einzige Unterschied besteht darin, dass die erste eine Klasse von _ems_ und die zweite eine Klasse von _rems_ hat.

Zunächst setzen wir 16px als Schriftgröße auf das `<html>`-Element.

**Zusammenfassend bedeutet die `em`-Einheit „die Schriftgröße meines übergeordneten Elements”,** wenn sie für `font-size` verwendet wird (und „meine eigene Schriftgröße”, wenn sie für alles andere verwendet wird). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `ems` leiten ihre Größe von ihrem Elternteil ab. Daher wird jede aufeinanderfolgende Ebenenverschachtelung zunehmend größer, da jede ihre Schriftgröße auf `1.3em` gesetzt hat – 1,3 mal die Schriftgröße des übergeordneten Elements.

**Das `rem`-Element bedeutet „die Schriftgröße des Wurzelelements”,** (rem steht für „root em”). Die {{htmlelement("li")}}-Elemente innerhalb der {{htmlelement("ul")}} mit einer `class` von `rems` nehmen ihre Größe vom Wurzelelement (`<html>`) an. Dies bedeutet, dass die aufeinanderfolgende Verschachtelungsebenen nicht kontinuierlich vergrößert werden.

Wenn Sie jedoch die `font-size` des `<html>`-Elements im CSS ändern, werden Sie feststellen, dass sich alles andere relativ dazu ändert – sowohl der in `rem`- als auch `em`-bemessene Text.

{{EmbedGHLiveSample("css-examples/learn/values-units/em-rem.html", '100%', 1100)}}

#### Zeilenhöhe-Einheiten

`lh` und `rlh` sind relative Längeneinheiten, ähnlich wie `em` und `rem`. Der Unterschied zwischen `lh` und `rlh` besteht darin, dass der erste relativ zur Zeilenhöhe des Elements selbst ist, während der zweite relativ zur Zeilenhöhe des Wurzelelements ist, normalerweise `<html>`.

Mit diesen Einheiten können wir Boxdekorationen präzise zum Text ausrichten. In diesem Beispiel haben wir die `lh`-Einheit verwendet, um notizblockähnliche Linien zu erstellen, indem wir [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) verwenden. Es spielt keine Rolle, welche Zeilenhöhe der Text hat, die Linien werden immer an der richtigen Stelle beginnen.

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
    content: "Ihr Browser unterstützt die lh-Einheit derzeit noch nicht";
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
  Der Sommer ist eine Zeit für Abenteuer, und dieses Jahr war keine Ausnahme. Ich hatte viele aufregende Erlebnisse, aber zwei meiner Favoriten waren mein Ausflug an den Strand und meine Woche im Sommerlager.
</p>

<p style="line-height: 4em">
  Am Strand verbrachte ich meine Tage beim Schwimmen, Muscheln sammeln und Sandburgen bauen. Ich machte auch eine Bootsfahrt und sah Delfine neben uns schwimmen.
</p>
```

{{EmbedLiveSample("line_height_units", "100%", "370")}}

### Prozentwerte

In vielen Fällen wird ein Prozentwert auf die gleiche Weise wie eine Länge behandelt. Das Besondere an Prozentwerten ist, dass sie immer relativ zu einem anderen Wert festgelegt sind. Wenn Sie beispielsweise die `font-size` eines Elements als Prozentsatz festlegen, ist sie ein Prozentsatz der `font-size` des übergeordneten Elements. Wenn Sie einen Prozentwert für eine `width`-Eigenschaft verwenden, ist er ein Prozentsatz der `width` des übergeordneten Elements.

Im untenstehenden Beispiel haben die beiden prozentual bemessenen Boxen und die beiden pixelgroßen Boxen dieselben Klassennamen. Die Sets sind jeweils 40% und 200px breit.

Der Unterschied besteht darin, dass das zweite Set von zwei Boxen in einem Wrapper ist, der 400 Pixel breit ist. Die zweite 200px breite Box ist genauso breit wie die erste, aber die zweite 40%-Box ist jetzt 40% von 400px – deutlich schmaler als die erste!

**Versuchen Sie die Breite des Wrappers oder den Prozentsatz zu ändern, um zu sehen, wie dies funktioniert.**

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage.html", '100%', 1000)}}

Das nächste Beispiel hat Schriftgrößen, die in Prozentwerten eingestellt sind. Jedes `<li>` Element hat eine `font-size` von 80%; daher werden die verschachtelten Listenelemente zunehmend kleiner, da sie ihre Größe von ihrem Elternteil erben.

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage-fonts.html", '100%', 800)}}

Beachten Sie, dass, obwohl viele Wertetypen eine Länge oder einen Prozentwert akzeptieren, es einige gibt, die nur eine Länge akzeptieren. Auf den MDN-Eigenschaftsreferenzseiten können Sie sehen, welche Werte akzeptiert werden. Wenn der erlaubte Wert {{cssxref("length-percentage")}} beinhaltet, können Sie eine Länge oder einen Prozentwert verwenden. Wenn der erlaubte Wert nur `<length>` enthält, ist es nicht möglich, einen Prozentwert zu verwenden.

### Zahlen

Einige Wertetypen akzeptieren Zahlen ohne zusätzliche Einheit. Ein Beispiel für eine Eigenschaft, die eine einheitslose Zahl akzeptiert, ist die `opacity`-Eigenschaft, die die Opazität eines Elements steuert (wie transparent es ist). Diese Eigenschaft akzeptiert eine Zahl zwischen `0` (vollständig transparent) und `1` (vollständig undurchsichtig).

**Ändern Sie im folgenden Beispiel den Wert von `opacity` auf verschiedene Dezimalwerte zwischen `0` und `1`, um zu sehen, wie die Box und ihr Inhalt mehr oder weniger opak werden.**

{{EmbedGHLiveSample("css-examples/learn/values-units/opacity.html", '100%', 600)}}

> [!NOTE]
> Wenn Sie eine Zahl als Wert in CSS verwenden, sollte sie nicht in Anführungszeichen gesetzt werden.

## Farbe

Farbwerte können in vielen Bereichen in CSS verwendet werden, egal ob Sie die Farbe von Text, Hintergründen, Rändern und mehr angeben. Es gibt viele Möglichkeiten, Farben in CSS festzulegen, wodurch Sie zahlreiche spannende Eigenschaften kontrollieren können.

Das Standardsystem für Farben, das auf modernen Computern verfügbar ist, unterstützt 24-Bit-Farben, was es ermöglicht, etwa 16,7 Millionen verschiedene Farben darzustellen, indem verschiedene rote, grüne und blaue Kanäle mit jeweils 256 verschiedenen Werten kombiniert werden (256 x 256 x 256 = 16.777.216).

In diesem Abschnitt schauen wir uns zunächst die am häufigsten gesehenen Möglichkeiten an, Farben anzugeben: mit Schlüsselwörtern, Hexadezimalwerten und `rgb()`-Werten. Wir werden auch einen kurzen Blick auf zusätzliche Farbfunktionen werfen, damit Sie sie erkennen können, wenn Sie sie sehen, oder mit verschiedenen Verfahren zur Farbverwendung experimentieren können.

Sie werden wahrscheinlich eine Farbpalette festlegen und diese Farben – und Ihre bevorzugte Methode zur Angabe von Farben – in Ihrem gesamten Projekt verwenden. Sie können Farbbereiche mischen und kombinieren, aber es ist normalerweise am besten, wenn Ihr gesamtes Projekt dieselbe Methode zur Deklaration von Farben aufgrund von Konsistenz verwendet!

### Farb-Schlüsselwörter

Sie werden die Farb-Schlüsselwörter (oder „benannte Farben”) in vielen MDN-Codebeispielen sehen. Da der Datentyp [`<named-color>`](/de/docs/Web/CSS/named-color) eine sehr begrenzte Anzahl von Farbwerten enthält, werden diese normalerweise nicht bei Produktionswebsites eingesetzt. Da das Schlüsselwort die Farbe als menschenlesbaren Text darstellt, werden die benannten Farben in Codebeispielen verwendet, um dem Benutzer klar zu machen, welche Farbe erwartet wird, damit der Lernende sich auf den vermittelten Inhalt konzentrieren kann.

**Versuchen Sie, mit verschiedenen Farbwerten in den Live-Beispielen unten zu spielen, um eine bessere Vorstellung davon zu bekommen, wie sie funktionieren.**

{{EmbedGHLiveSample("css-examples/learn/values-units/color-keywords.html", '100%', 800)}}

### Hexadezimale RGB-Werte

Der nächste Farbwerttyp, dem Sie wahrscheinlich begegnen werden, sind hexadezimale Codes. Hexadezimal verwendet 16 Zeichen von `0-9` und `a-f`, sodass der gesamte Bereich `0123456789abcdef` umfasst. Jeder Hex-Farbwert besteht aus einem Hash- bzw. Pfund-Symbol (`#`), gefolgt von drei oder sechs hexadezimalen Zeichen (`#fcc` oder `#ffc0cb` zum Beispiel), mit einem optionalen ein oder zwei hexadezimalen Zeichen, die die Alphakanal-Transparenz der vorherigen drei oder sechs Zeichen-Farbwerte darstellen.

Wenn wir Hexadezimalzahlen zur Beschreibung von RGB-Werten verwenden, ist jedes **Paar** hexadezimaler Zeichen eine Dezimalzahl, die einen der Kanäle - rot, grün und blau - darstellt und es uns ermöglicht, einen der 256 verfügbaren Werte für jeden anzugeben (16 x 16 = 256). Diese Werte sind weniger intuitiv als Schlüsselwörter zur Definition von Farben, aber sie sind viel vielseitiger, da Sie jede RGB-Farbe damit darstellen können.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hex.html", "100%", "800")}}

**Auch hier: Versuchen Sie, die Werte zu ändern, um zu sehen, wie sich die Farben unterscheiden.**

### RGB-Werte

Um RGB-Werte direkt zu erstellen, nimmt die Funktion [`rgb()`](/de/docs/Web/CSS/color_value/rgb) drei Parameter, die **rot**, **grün** und **blau** Kanalwerte der Farben darstellen, mit einem optionalen vierten Wert, der durch einen Schrägstrich ('/') getrennt ist und Opazität darstellt, auf dieselbe Weise wie Hexadezimalwerte. Der Unterschied bei RGB besteht darin, dass jeder Kanal nicht durch zwei Hexadezimalstellen, sondern durch eine Dezimalzahl zwischen 0 und 255 oder einen Prozentsatz zwischen 0% und 100%, jedoch nicht gemischt, dargestellt wird.

Lassen Sie uns unser letztes Beispiel umschreiben, um RGB-Farben zu verwenden:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgb.html", "100%", "800")}}

Sie können einen vierten Parameter an `rgb()` übergeben, der den Alphakanal der Farbe darstellt, der die Opazität steuert. Wenn Sie diesen Wert auf `0` setzen, wird die Farbe vollständig transparent, während `1` sie vollständig opak macht. Werte dazwischen geben Ihnen unterschiedliche Transparenzgrade.

> [!NOTE]
> Wenn Sie auf einer Farbe einen Alphakanal festlegen, gibt es einen wichtigen Unterschied zur Verwendung der {{cssxref("opacity")}}-Eigenschaft, die wir zuvor gesehen haben. Wenn Sie die Opazität verwenden, machen Sie das Element und alles darin opak, während die Verwendung von RGB mit einem Alpha-Parameter nur die Farbe, die Sie angeben, opak macht.

Im Beispiel unten haben wir dem umschließenden Block unserer farbigen Boxen ein Hintergrundbild hinzugefügt. Wir haben dann die Boxen auf verschiedene Opazitätswerte gesetzt – beachten Sie, wie der Hintergrund bei kleinerem Alphakanalwert mehr durchscheint.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgba.html", "100%", "900")}}

**In diesem Beispiel: Versuchen Sie, die Alpha-Kanal-Werte zu ändern, um zu sehen, wie er die Farbausgabe beeinflusst.**

### SRGB-Werte

Der `sRGB`-Farbraum definiert Farben im **Rot** (r), **Grün** (g) und **Blau** (b) Farbraum.

### Verwenden von Farbtönen, um eine Farbe zu spezifizieren

Wenn Sie über Schlüsselwörter, Hexadezimal- und `rgb()`-Werte für Farben hinausgehen möchten, könnten Sie erwägen, [`<hue>`](/de/docs/Web/CSS/hue) zu verwenden. Farbton ist die Eigenschaft, die uns erlaubt, die Unterschiede oder Ähnlichkeiten zwischen Farben wie Rot, Orange, Gelb, Grün, Blau usw. zu unterscheiden. Das Schlüsselkonzept besteht darin, dass Sie in einem [`<angle>`](/de/docs/Web/CSS/angle) einen Farbton spezifizieren können, da die meisten Farbmodelle Farbtöne mit einem {{glossary("Farbkreis")}} beschreiben.

Es gibt mehrere Farb-Funktionsmöglichkeiten, die einen [`<hue>`](/de/docs/Web/CSS/hue)-Komponent enthalten, darunter `hsl()`, `hwb()`, und [`lch()`](/de/docs/Web/CSS/color_value/lch). Andere Farb-Funktionsmöglichkeiten, wie [`lab()`](/de/docs/Web/CSS/color_value/lab), definieren Farben basierend auf dem, was Menschen sehen können.

Wenn Sie mehr über diese Funktionen und Farbräume erfahren möchten, sehen Sie sich den Leitfaden zu [Farbanwendung auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color) an, das [`<color>`](/de/docs/Web/CSS/color_value) Referenzdokument, das alle verschiedenen Möglichkeiten auflistet, die Sie verwenden können, um Farben in CSS zu verwenden, und das [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors), das einen Überblick über alle Farbetypen in CSS bietet und die Eigenschaften, die Farbwerte verwenden.

### HWB

Ein großartiger Ausgangspunkt für die Verwendung von Farbtönen in CSS ist die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Funktion, die eine `srgb()`-Farbe spezifiziert. Die drei Bereiche sind:

- **Farbton**: Der Grundton der Farbe. Dies nimmt einen [`<hue>`](/de/docs/Web/CSS/hue)-Wert zwischen 0 und 360 an, der die Winkel um einen Farbkreis darstellt.
- **Weißheit**: Wie weiß ist die Farbe? Dies nimmt einen Wert von `0%` (keine Weißheit) bis `100%` (vollständige Weißheit) an.
- **Schwärze**: Wie schwarz ist die Farbe? Dies nimmt einen Wert von 0% (keine Schwärze) bis 100% (vollständige Schwärze) an.

### HSL

Ähnlich wie die `hwb()`-Funktion ist die [`hsl()`](/de/docs/Web/CSS/color_value/hsl)-Funktion, die ebenfalls eine `srgb()`-Farbe spezifiziert. HSL verwendet den `Farbton` in Kombination mit `Sättigung` und `Helligkeit`:

- **Farbton**
- **Sättigung**: Wie gesättigt ist die Farbe? Dies nimmt einen Wert von 0–100% an, wobei 0 keine Farbe (es wird als Graustufen erscheinen) und 100% vollständige Farbsättigung ist.
- **Helligkeit**: Wie hell ist die Farbe? Dies nimmt einen Wert von 0–100% an, wobei 0 keine Helligkeit (es wird vollständig schwarz erscheinen) und 100% vollständige Helligkeit (es wird vollständig weiß erscheinen) ist.

Der `hsl()`-Farbwert hat auch einen optionalen vierten Wert, der durch einen Schrägstrich (`/`) von der Farbe getrennt ist und die Alpha-Transparenz darstellt.

Lassen Sie uns das RGB-Beispiel aktualisieren, um stattdessen HSL-Farben zu verwenden:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsl.html", "100%", "800")}}

Genau wie bei `rgb()` können Sie einen Alpha-Parameter an `hsl()` übergeben, um Opazität zu spezifizieren:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsla.html", "100%", "900")}}

## Bilder

Der Werttyp [`<image>`](/de/docs/Web/CSS/image) wird überall dort verwendet, wo ein Bild ein gültiger Wert ist. Dies kann eine tatsächliche Bilddatei sein, die über eine `url()`-Funktion angegeben wird, oder ein Verlauf.

Im folgenden Beispiel haben wir ein Bild und einen Verlauf als Wert für die CSS-`background-image`-Eigenschaft demonstriert.

{{EmbedGHLiveSample("css-examples/learn/values-units/image.html", "100%", "900")}}

> [!NOTE]
> Es gibt einige andere mögliche Werte für `<image>`, diese sind jedoch neuer und derzeit schlecht unter Browsern entwickelt. Sehen Sie sich die Seite auf MDN für den [`<image>`](/de/docs/Web/CSS/image)-Datentyp an, wenn Sie mehr darüber lesen möchten.

## Position

Der Werttyp [`<position>`](/de/docs/Web/CSS/position_value) stellt ein Satz von 2D-Koordinaten dar, die verwendet werden, um ein Element wie ein Hintergrundbild zu positionieren (über [`background-position`](/de/docs/Web/CSS/background-position)). Es kann Schlüsselwörter wie `top`, `left`, `bottom`, `right` und `center` enthalten, um Elemente mit speziellen Begrenzungen eines 2D-Felds auszurichten, zusammen mit Längen, die Offsets von den oberen und linken Kanten des Feldes darstellen.

Ein typischer Positionswert besteht aus zwei Werten – den ersten, um die Position horizontal festzusetzen, und den zweiten, um die Position vertikal festzusetzen. Wenn Sie nur Werte für eine Achse angeben, wird die andere auf `center` gesetzt.

Im folgenden Beispiel haben wir ein Hintergrundbild 40px vom oberen Rand und der rechten Seite des Containers mit einem Schlüsselwort positioniert.

{{EmbedGHLiveSample("css-examples/learn/values-units/position.html", "100%", "800")}}

**Experimentieren Sie mit diesen Werten, um zu sehen, wie Sie das Bild verschieben können.**

## Zeichenfolgen und Bezeichner

In den oben genannten Beispielen haben wir Stellen gesehen, an denen Schlüsselwörter als Wert verwendet werden (zum Beispiel `<color>`-Schlüsselwörter wie `red`, `black`, `rebeccapurple` und `goldenrod`). Diese Schlüsselwörter werden genauer als _Bezeichner_ beschrieben, einem speziellen Wert, den CSS versteht. Als solcher werden sie nicht zitiert – sie werden nicht als Zeichenfolgen behandelt.

Es gibt Stellen, an denen Sie Zeichenfolgen in CSS verwenden. Zum Beispiel [wenn Sie generierten Inhalt angeben](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#generating_content_with_before_and_after). In diesem Fall ist der Wert zitiert, um darzustellen, dass er eine Zeichenfolge ist. Im folgenden Beispiel verwenden wir nicht zitierte Farb-Schlüsselwörter zusammen mit einer zitierten generierten Inhaltszeichenfolge.

{{EmbedGHLiveSample("css-examples/learn/values-units/strings-idents.html", "100%", "600")}}

## Funktionen

In der Programmierung ist eine Funktion ein Stück Code, das eine bestimmte Aufgabe ausführt. Funktionen sind nützlich, da Sie Code einmal schreiben und dann mehrfach wiederverwenden können, anstatt dieselbe Logik immer wieder zu schreiben. Die meisten Programmiersprachen unterstützen nicht nur Funktionen, sondern bieten auch bequeme eingebaute Funktionen für allgemeine Aufgaben, damit Sie sie nicht von Grund auf neu schreiben müssen.

CSS hat auch [Funktionen](/de/docs/Web/CSS/CSS_Functions), die ähnlich wie Funktionen in anderen Sprachen arbeiten. In der Tat haben wir bereits CSS-Funktionen im [Farb](#farbe) Abschnitt oben mit den Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) gesehen.

Abgesehen vom Anwenden von Farben können Sie Funktionen in CSS verwenden, um viele andere Dinge zu tun. Beispielsweise sind [Transformationsfunktionen](/de/docs/Web/CSS/CSS_Functions#transform_functions) eine übliche Methode, um Elemente auf einer Seite zu bewegen, zu drehen und zu skalieren. Sie könnten [`translate()`](/de/docs/Web/CSS/transform-function/translate) für horizontales oder vertikales Verschieben sehen, [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) um etwas zu drehen, oder [`scale()`](/de/docs/Web/CSS/transform-function/scale) um etwas größer oder kleiner zu machen.

### mathematische Funktionen

Wenn Sie Stile für ein Projekt erstellen, starten Sie wahrscheinlich mit Zahlen wie `300px` für Längen oder `200ms` für Zeitdauern. Wenn Sie möchten, dass diese Werte basierend auf anderen Werten variieren, müssen Sie einige Berechnungen durchführen. Sie könnten den Prozentsatz eines Wertes oder eine Addition zu einer anderen Zahl berechnen und dann Ihr CSS mit dem Ergebnis aktualisieren.

CSS hat Unterstützung für [mathematische Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions), die uns Berechnungen durchführen lassen, anstatt von statischen Werten abzuhängen oder die Berechnung in JavaScript durchzuführen. Eine der gebräuchlichsten mathematischen Funktionen ist [`calc()`](/de/docs/Web/CSS/calc), die Ihnen ermöglicht, Addition, Subtraktion, Multiplikation und Division durchzuführen.

Zum Beispiel: Angenommen, wir möchten die Breite eines Elements auf 20% seines übergeordneten Containers plus 100px einstellen. Wir können diesen Breitenwert nicht mit einem statischen Wert spezifizieren – wenn das Elternteil eine prozentuale Breite verwendet (oder eine relative Einheit wie `em` oder `rem`), variiert es abhängig vom Kontext, in dem es verwendet wird, und anderen Faktoren wie dem Gerät oder der Browserfensterbreite des Benutzers. Mit `calc()` können wir jedoch die Breite des Elements auf 20% seines übergeordneten Containers plus 100px setzen. Die 20% basieren auf der Breite des übergeordneten Containers (`.wrapper`) und wenn sich diese Breite ändert, ändert sich auch die Berechnung:

{{EmbedGHLiveSample("css-examples/learn/values-units/calc.html", "100%", "500")}}

Es gibt viele andere mathematische Funktionen, die Sie in CSS verwenden können, wie [`min()`](/de/docs/Web/CSS/min), [`max()`](/de/docs/Web/CSS/max) und [`clamp()`](/de/docs/Web/CSS/clamp); diese erlauben Ihnen jeweils, den kleinsten, größten oder mittleren Wert aus einer Reihe von Werten auszuwählen. Sie können auch [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Functions#trigonometric_functions) wie [`sin()`](/de/docs/Web/CSS/sin), [`cos()`](/de/docs/Web/CSS/cos) und [`tan()`](/de/docs/Web/CSS/tan) verwenden, um Winkel für Rotationen von Elementen um einen Punkt zu berechnen oder Farben auszuwählen, die einen [Farbtonwinkel](/de/docs/Web/CSS/hue) als Parameter nehmen. [Exponentialfunktionen](/de/docs/Web/CSS/CSS_Functions#exponential_functions) könnten ebenfalls für Animationen und Übergänge verwendet werden, wenn Sie sehr spezifische Kontrolle darüber möchten, wie sich etwas bewegt und aussieht.

Das Wissen über CSS-Funktionen ist nützlich, damit Sie sie erkennen, wenn Sie sie sehen. Sie sollten beginnen, in Ihren Projekten mit ihnen zu experimentieren – sie helfen Ihnen, benutzerdefinierten oder sich wiederholenden Code zu vermeiden, um Ergebnisse zu erzielen, die Sie mit regulärem CSS erreichen könnten.

## Testen Sie Ihre Kenntnisse!

Sie haben das Ende dieses Artikels erreicht, aber erinnern Sie sich an die wichtigsten Informationen?“ Sie können einige weitere Tests finden, um zu prüfen, ob Sie diese Informationen in Erinnerung behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Kenntnisse: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_tasks).

## Zusammenfassung

Dies war ein schneller Überblick über die häufigsten Wertetypen und Einheiten, die Ihnen begegnen können. Sie können sich alle unterschiedlichen Typen auf der [CSS-Werte und -Einheiten Referenzseite](/de/docs/Web/CSS/CSS_Values_and_Units) ansehen – Sie werden viele davon in Verwendung antreffen, während Sie durch diese Lektionen arbeiten.

Das Hauptmerkmal, das Sie sich merken sollten, ist, dass jede Eigenschaft eine definierte Liste von zulässigen Wertetypen hat und jeder Wertetyp hat eine Definition über das, was die Werte sind. Sie können sich dann die Details hier auf MDN ansehen. Zum Beispiel das Verstehen, dass [`<image>`](/de/docs/Web/CSS/image) Ihnen auch ermöglicht, einen Farbverlauf zu erstellen, ist nützlich, aber vielleicht nicht offensichtliches Wissen!

Im nächsten Artikel werden wir uns ansehen, wie [Artikel in CSS dimensioniert werden](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}
