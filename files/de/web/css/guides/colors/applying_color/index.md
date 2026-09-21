---
title: Anwenden von Farbe auf HTML-Elemente mit CSS
short-title: Farbe anwenden
slug: Web/CSS/Guides/Colors/Applying_color
l10n:
  sourceCommit: 13d38933aaeea619fe441656e9d8e1bec263331b
---

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Ihren [HTML](/de/docs/Web/HTML)-[Elementen](/de/docs/Web/HTML/Reference/Elements) Farbe hinzuzufügen, um das gewünschte Aussehen zu erzeugen. Dieser Leitfaden ist eine Einführung dazu, wie CSS zum Anwenden von Farben auf HTML-Elemente verwendet werden kann. Dieser Leitfaden enthält [Listen der CSS-Eigenschaften, die in ihren Werten Farbe festlegen](#eigenschaften,_die_farbe_enthalten_können), sowie Informationen dazu, wie Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_möglichkeiten_zur_verwendung_von_farbe) verwendet werden.

> [!NOTE]
> Es ist wichtig, [Farben sinnvoll einzusetzen](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely). Wählen Sie stets geeignete Farben aus und stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten. Berücksichtigen Sie außerdem stets die Bedürfnisse von Personen mit unterschiedlichen Sehfähigkeiten.

Weitere Informationen zu CSS-Farben als Datentyp finden Sie in der Referenz zum [CSS-Datentyp `<color>`](/de/docs/Web/CSS/Reference/Values/color_value) und im [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/Guides/Colors/Color_values).

## Eigenschaften, die Farbe enthalten können

Auf Elementebene kann auf alles in HTML Farbe angewendet werden. Sehen wir uns die verschiedenen auf der Seite dargestellten Elemente an — beispielsweise Text, Rahmen usw. Wir stellen Listen der CSS-Eigenschaften bereit, die auf jedes davon Farbe anwenden.

Auf einer grundlegenden Ebene definiert die Eigenschaft {{cssxref("color")}} die Vordergrundfarbe des Inhalts eines HTML-Elements, und die Eigenschaft {{cssxref("background-color")}} definiert die Hintergrundfarbe des Elements. Diese können auf nahezu jedes Element angewendet werden.

### Text

Wenn ein Element dargestellt wird, bestimmen diese Eigenschaften die Farbe des Textes, seines Hintergrunds und jeglicher Textdekorationen.

- {{cssxref("color")}}
  - : Die Farbe, die beim Zeichnen des Textes und jeglicher [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) verwendet wird, etwa beim Hinzufügen von Unter- oder Überstreichungen, Durchstreichungen usw.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}
  - : Konfiguriert einen Schatteneffekt, der auf Text angewendet wird. Zu den Optionen für den Schatten gehört dessen Grundfarbe, die anschließend anhand der anderen Parameter weichgezeichnet und mit dem Hintergrund vermischt wird. Weitere Informationen finden Sie unter [Schlagschatten für Text](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows).

- {{cssxref("text-decoration-color")}}
  - : Die Farbe der standardmäßigen Textdekorationen, etwa Unterstreichungen, Durchstreichungen usw., ist [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword). Dieses Schlüsselwort stellt den aktuellen Wert der Eigenschaft `color` dar. Sie können diesen Wert jedoch überschreiben und mit der Eigenschaft `text-decoration-color` eine andere Farbe dafür verwenden.

- {{cssxref("text-emphasis-color")}}
  - : Die Farbe, die beim Darstellen von Hervorhebungssymbolen neben jedem Zeichen im Text verwendet wird. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}
  - : Die Farbe, die beim Zeichnen der {{Glossary("caret", "Einfügemarke")}} verwendet wird, die manchmal als Texteingabecursor bezeichnet wird. Dies ist nur bei bearbeitbaren Elementen nützlich, beispielsweise {{HTMLElement("input")}} und {{HTMLElement("textarea")}}, oder bei Elementen, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit einer Art von Inhalt und verfügt neben dem möglichen Inhalt der Box über einen Hintergrund und einen Rahmen.

- [Rahmen](#borders_2)
  - : Eine Liste der CSS-Eigenschaften, mit denen Sie die Farben der Rahmen einer Box festlegen können, finden Sie im Abschnitt [Rahmen](#borders_2).

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe, die in Bereichen des Elements ohne Vordergrundinhalt verwendet wird.

- {{cssxref("box-shadow")}}
  - : Konfiguriert Innenschatten- und Schlagschatteneffekte für die Box. Zu den Optionen für jeden Schatten gehört dessen Grundfarbe, die anschließend anhand der anderen Parameter weichgezeichnet und mit einem Hintergrund vermischt wird.

- {{cssxref("column-rule-color")}}
  - : Die Farbe, die beim Zeichnen der Linie verwendet wird, welche Textspalten bei Verwendung des [CSS-Mehrspaltenlayouts](/de/docs/Web/CSS/Guides/Multicol_layout) trennt.

- {{cssxref("outline-color")}}
  - : Die Farbe, die beim Zeichnen einer Umrandung außerhalb des Elements verwendet wird. Diese Umrandung unterscheidet sich vom Rahmen dadurch, dass im Dokument kein Platz für sie reserviert wird. Umrandungen nehmen nicht am [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) teil und überlappen anderen Inhalt. Umrandungen werden im Allgemeinen als Fokusanzeigen verwendet und geben an, welches Element aktuell den Fokus hat und Tastatureingabeereignisse empfängt.

### Rahmen

Jedes Element kann mit einem Rahmen versehen werden. Ein einfacher Elementrahmen ist eine Linie, die um die Kanten des Elementinhalts gezeichnet wird. Informationen zur Beziehung zwischen Elementen und ihren Rahmen finden Sie unter [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model). Weitere Informationen zum Anwenden von Stilen auf Rahmen finden Sie im Artikel [Gestalten von Rahmen mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders).

Sie können die Kurzform-Eigenschaft {{cssxref("border")}} verwenden, mit der Sie alles zum Rahmen auf einmal konfigurieren können, einschließlich nicht farbbezogener Eigenschaften des Rahmens, etwa seiner [Breite](/de/docs/Web/CSS/Reference/Properties/border-width), seines [Stils](/de/docs/Web/CSS/Reference/Properties/border-style) (durchgezogen, gestrichelt usw.) und weiterer Eigenschaften.

- Kurzform {{cssxref("border-color")}}
  - : Gibt eine einzelne Farbe an, die für jede Seite des Elementrahmens verwendet wird.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}} und {{cssxref("border-bottom-color")}}
  - : Ermöglichen es Ihnen, die Farbe der entsprechenden Seite des Elementrahmens festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}
  - : Damit können Sie die Farbe festlegen, die zum Zeichnen der Rahmen verwendet wird, welche dem Anfang und Ende des Blocks, den der Rahmen umgibt, am nächsten liegen. In einem Schreibrichtungssystem von links nach rechts, wie es beispielsweise für Englisch verwendet wird, ist der Blockanfangsrahmen die obere Kante und das Blockende die untere Kante. Dies unterscheidet sich von Inline-Anfang und -Ende, die die linke und rechte Kante sind und den Stellen entsprechen, an denen jede Textzeile in der Box beginnt und endet.

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}
  - : Damit können Sie die Kanten des Rahmens einfärben, die dem Anfang und Ende der Textzeilen in der Box am nächsten liegen. Welche Seite dies ist, hängt von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} ab, die üblicherweise, jedoch nicht immer, verwendet werden, um die Textrichtung entsprechend der dargestellten Sprache anzupassen. Wenn beispielsweise der Text der Box von rechts nach links dargestellt wird, wird `border-inline-start-color` auf die rechte Seite des Rahmens angewendet.

## Farben als Werte in Stylesheets angeben

Da Sie nun wissen, welche [CSS-Eigenschaften Ihnen das Anwenden von Farbe auf Elemente ermöglichen](#eigenschaften,_die_farbe_enthalten_können), können Sie beginnen, Ihren Websites Farben hinzuzufügen. Sehen wir uns einige Beispiele für die Verwendung von Farbe in einem {{Glossary("style_sheet", "Stylesheet")}} an. In diesem Beispiel verwenden wir mehrere zuvor erwähnte Eigenschaften, wobei das Konzept zum Anwenden von Farben in CSS unabhängig von der Eigenschaft gleich ist.

Sehen wir uns zunächst das Ergebnis an, bevor wir den Code betrachten, den wir dafür benötigen:

{{EmbedLiveSample("Specifying colors as values in stylesheets", 650, 150)}}

### HTML

Das HTML, das für die Erstellung des obigen Beispiels verantwortlich ist, wird hier gezeigt:

```html
<div class="wrapper">
  <div class="boxLeft">
    <p>This is the first box.</p>
  </div>
  <div class="boxRight">
    <p>This is the second box.</p>
  </div>
</div>
```

Hier haben wir ein umschließendes {{HTMLElement("div")}}, das zwei untergeordnete `<div>`s enthält, die jeweils einen einzelnen untergeordneten Absatz ({{HTMLElement("p")}}) enthalten. Jedes Inhalts-`<div>` erhält ein anderes Erscheinungsbild.

### CSS

Sehen wir uns das CSS, das das obige Ergebnis erzeugt, Schritt für Schritt an.

> [!NOTE]
> In diesem Beispiel verwenden wir mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/Guides/Colors/Color_values), um deren Verwendung zu demonstrieren. Dies wird für Produktionscode nicht empfohlen. Verwenden Sie beim Schreiben von CSS den für Sie und Ihr Team intuitivsten Werttyp.

```css
.wrapper {
  height: 110px;
  padding: 10px;
  display: flex;
  gap: 10px;
  text-align: center;
  font:
    28px "Marker Felt",
    "Zapfino",
    cursive;
  border: 6px solid mediumturquoise;
}

div {
  flex: 1;
}
```

Die Klasse `.wrapper` wird verwendet, um dem {{HTMLElement("div")}}, das unseren gesamten anderen Inhalt umschließt, Stile zuzuweisen. Sie legt die Höhe des Containers mit {{cssxref("height")}} fest, wodurch die Breite dieses Block-Level-Elements standardmäßig 100 % seines Elternelements beträgt. Das Setzen von {{cssxref("display")}} auf `flex` und das Hinzufügen eines {{cssxref("gap")}} von `10px` erstellt einen Flex-Container, um die Kindelemente nebeneinander mit einem Abstand zwischen allen Kindelementen des Containers anzuordnen. Wir verwenden {{cssxref("flex")}}, damit die Flex-Kindelemente wachsen und den Container ausfüllen können; dies beeinflusst nicht den Flex-Container selbst.

Für unsere Diskussion hier interessanter ist die Verwendung der Eigenschaft {{cssxref("border")}}, um einen Rahmen um die Außenkante des Elements festzulegen. Dieser Rahmen ist eine durchgezogene, 6 Pixel breite Linie in der [benannten Farbe](/de/docs/Web/CSS/Reference/Values/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die Klasse `.boxLeft`, die zum Gestalten der linken Box verwendet wird, legt die Farbe des Hintergrunds und der Umrandung fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Werts der CSS-Eigenschaft {{cssxref("background-color")}} auf `rgb(245 130 130)` festgelegt, wobei die funktionale Notation {{CSSXref("color_value/rgb", "rgb()")}} verwendet wird.
- Für die Box wird eine Umrandung definiert. Im Gegensatz zu dem häufiger verwendeten {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; es wird über alles gezeichnet, was sich außerhalb der Box des Elements befinden kann, anstatt wie `border` Platz dafür zu schaffen. Diese Umrandung ist eine durchgezogene, dunkelrote Linie mit einer Stärke von zwei Pixeln. Beachten Sie die Verwendung des Schlüsselworts `darkred` bei der Angabe der Farbe.
- Beachten Sie, dass wir die Textfarbe nicht explizit festlegen. Das bedeutet, dass der Wert von {{cssxref("color")}} vom nächstgelegenen enthaltenden Element geerbt wird, das ihn definiert. Standardmäßig ist dies Schwarz.

```css
.boxRight {
  background-color: hwb(270deg 63% 13%);
  outline: 4px dashed #6e1478;
  color: hsl(0deg 95% 95%);
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: #8f8;
  text-decoration: underline wavy #8f8;
  text-shadow: 2px 2px 3px black;
}
```

> [!NOTE]
> Wir haben die Stile `text-decoration-*` getrennt aufgenommen, weil Safari {{cssxref("text-decoration")}} nicht als Kurzform-Eigenschaft unterstützt.

Schließlich legt die Klasse `.boxRight` mehrere Stile für die rechts dargestellte Box fest. Anschließend werden die folgenden Farben festgelegt, wobei fünf verschiedene Arten zur Deklaration von [Farbwerten](/de/docs/Web/CSS/Guides/Colors/Color_values) verwendet werden:

- `background-color` wird mit der funktionalen Notation {{CSSXref("color_value/hwb", "hwb()")}} auf `hwb(270deg 63% 13%)` gesetzt. Dies ist ein mittlerer Lilaton.
- `outline` der Box wird verwendet, um anzugeben, dass die Box von einer vier Pixel dicken gestrichelten Linie umgeben sein soll, deren Farbe ein etwas dunkleres Violett ist, das mit dem sechsstelligen {{cssxref("hex-color")}} `#6e1478` angegeben wird.
- Die Vordergrundfarbe (Textfarbe) wird durch Setzen der Eigenschaft {{cssxref("color")}} mithilfe der funktionalen Notation {{CSSXref("color_value/hsl", "hsl()")}} auf `hsl(0deg 95% 95%)` angegeben. Dies ist ein sehr heller Rosaton.
- Mit der Kurzform {{cssxref("text-decoration")}} fügen wir eine grüne gewellte Linie unter dem Text hinzu, zusammen mit der Langform-Komponente für Browser-Kompatibilität. Wir verwenden den dreistelligen {{cssxref("hex-color")}} `#8f8`, der dem Wert `#88ff88` entspricht.
- Schließlich wird dem Text mit {{cssxref("text-shadow")}} ein wenig Schatten hinzugefügt. Dessen Parameter `color` wird auf `black` gesetzt, einen {{cssxref("named-color")}}-Wert.

Wir haben fünf verschiedene Farbsyntaxen verwendet, um zu demonstrieren, was möglich ist. In der Praxis werden Sie und Ihr Team vorzugsweise eine bevorzugte Farbnotation wählen, sodass alle Personen, die an einer Codebasis arbeiten, dieselbe Farbsyntax verwenden.

## Andere Möglichkeiten zur Verwendung von Farbe

CSS ist nicht die einzige Webtechnologie, die Farbe unterstützt. Weitere Beispiele sind:

- Die HTML-[Canvas API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht es Ihnen, 2D-Bitmapgrafiken in einem {{HTMLElement("canvas")}}-Element zu zeichnen. Weitere Informationen finden Sie in unserem [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht es Ihnen, Bilder mithilfe von Befehlen zu erstellen, die bestimmte Formen, Muster und Linien zeichnen. SVG-Befehle werden als XML formatiert und können direkt in eine Webseite eingebettet oder wie jeder andere Bildtyp mit dem Element {{HTMLElement("img")}} auf der Seite platziert werden.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zum Zeichnen leistungsfähiger 2D- und 3D-Grafiken im Web. Weitere Informationen finden Sie in unserem [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial). Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), einen Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige inzwischen veraltete HTML-Attribute akzeptierten Farben als Werte, etwa `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}}- sowie drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- Datentyp {{cssxref("&lt;color&gt;")}}
- [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/Guides/Colors/Color_values)
- [Farben sinnvoll einsetzen](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
