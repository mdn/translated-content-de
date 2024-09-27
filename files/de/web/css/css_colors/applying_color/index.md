---
title: Farbe auf HTML-Elemente mit CSS anwenden
short-title: Farbe auf HTML-Elemente anwenden
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: cdb23fdf261a071951e1e46a0a6c7bc6daa691ff
---

{{CSSRef}}

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Ihren [HTML](/de/docs/Web/HTML) [Elementen](/de/docs/Web/HTML/Element) Farbe hinzuzufügen, um das gewünschte Aussehen zu erzeugen. Dieser Leitfaden ist eine Einführung, wie CSS verwendet werden kann, um Farben auf HTML-Elemente anzuwenden. Dieser Leitfaden beinhaltet [Listen der CSS-Eigenschaften, die Farbe in ihren Werten festlegen](#eigenschaften,_die_farbe_haben_können) und wie Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_möglichkeiten,_farben_zu_verwenden) verwendet werden können.

> [!NOTE]
> Es ist wichtig, [Farben mit Bedacht zu verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus und stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, und berücksichtigen Sie stets die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, lesen Sie die Referenz zum [CSS `<color>`-Datentyp](/de/docs/Web/CSS/color_value) und den [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values).

## Eigenschaften, die Farbe haben können

Auf Elementebene kann alles in HTML mit Farbe versehen werden. Betrachten wir die verschiedenen Elemente, die auf der Seite angezeigt werden, wie beispielsweise Text, Rahmen etc. Wir stellen Listen der CSS-Eigenschaften bereit, die Farbe auf jedes Element anwenden.

Auf fundamentaler Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf nahezu jedes Element angewendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seines Hintergrunds und jeglicher Verzierungen auf dem Text zu bestimmen.

- {{cssxref("color")}}

  - : Die Farbe, die beim Zeichnen des Textes und jeglicher [Textdekorationen](/de/docs/Learn/CSS/Styling_text/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) verwendet wird (z. B. das Hinzufügen von Unter- oder Überstrichen, Durchstreichungen usw.).

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}

  - : Konfiguriert einen Schatteneffekt, der auf den Text angewendet wird. Zu den Optionen für den Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern verwischt und mit dem Hintergrund vermischt wird). Siehe [Text-Drop-Schatten](/de/docs/Learn/CSS/Styling_text/Fundamentals#text_drop_shadows), um mehr zu erfahren.

- {{cssxref("text-decoration-color")}}

  - : Die Standardfarbe für Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) ist [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color`-Eigenschaft. Sie können diesen Wert jedoch überschreiben und eine andere Farbe für sie mit der `text-decoration-color`-Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}

  - : Die Farbe, die beim Rendern von Hervorhebungssymbolen neben jedem Zeichen im Text verwendet wird. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}

  - : Die Farbe, die beim Zeichnen des [Cursors](/de/docs/Glossary/caret) (manchmal als Texteingabecursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur bei bearbeitbaren Elementen nützlich, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elemente, deren HTML-`contenteditable`-Attribut auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit irgendeiner Art von Inhalt und hat zusätzlich zu dem, was die Box enthalten mag, einen Hintergrund und einen Rahmen.

- [Ränder](#borders_2)

  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Ränder einer Box festzulegen.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}

  - : Konfiguriert Einlegeschatten- und Drop-Schatten-Effekte auf der Box. Zu den Optionen für jeden Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern verwischt und mit dem Hintergrund vermischt wird).

- {{cssxref("column-rule-color")}}

  - : Die Farbe, die beim Zeichnen der Linie verwendet wird, die Textspalten bei Verwendung des [CSS-Mehrspaltenlayouts](/de/docs/Web/CSS/CSS_multicol_layout) trennt.

- {{cssxref("outline-color")}}

  - : Die Farbe, die beim Zeichnen einer Umrandung um das Element verwendet wird. Diese Umrandung unterscheidet sich vom Rahmen dadurch, dass dafür im Dokument kein Platz vorgesehen wird. Umrandungen nehmen nicht am [Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model) teil und überlappen andere Inhalte. Umrandungen werden allgemein als Fokusindikatoren verwendet, um anzuzeigen, welches Element derzeit den Fokus hat und Tastatureingabeereignisse empfangen wird.

### Ränder

Jedes Element kann einen [Rand](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) um sich herumgezeichnet haben. Ein grundlegender Elementrand ist eine Linie, die um die Ränder des Inhalts des Elements gezogen wird. Siehe [Das Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model), um mehr über die Beziehung zwischen Elementen und ihren Rändern zu erfahren, und den Artikel [Anwenden von Stilen auf Ränder mit CSS](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders), um mehr über die Anwendung von Stilen auf Ränder zu erfahren.

Sie können die {{cssxref("border")}}-Kurzform-Eigenschaft verwenden, mit der Sie alles über den Rand auf einmal konfigurieren können (einschließlich nicht-farblicher Eigenschaften von Rändern, wie seine [Breite](/de/docs/Web/CSS/border-width), [Stil](/de/docs/Web/CSS/border-style) (durchgezogene Linie, gestrichelt, usw.), und mehr.

- {{cssxref("border-color")}} Kurzform

  - : Legt eine einzelne Farbe fest, die für jede Seite des Elementrandes verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}

  - : Ermöglicht es Ihnen, die Farbe der entsprechenden Seite des Elementrandes festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}

  - : Mit diesen können Sie die Farbe festlegen, die zum Zeichnen der Ränder verwendet wird, die dem Start und Ende des Blocks, den der Rand umgibt, am nächsten sind. In einem von links nach rechts verlaufenden Schreibmodus (wie es beim Englischen der Fall ist) ist der Blockstart-Rand die obere Kante und das Blockende die untere. Dies unterscheidet sich vom Inline-Start und -Ende, die die linken und rechten Kanten sind (entsprechend, wo jede Textzeile in der Box beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}

  - : Diese lassen Sie die Kanten des Randes färben, die am Anfang und Ende des Textzeilenanfangs innerhalb der Box am nächsten sind. Welche Seite dies ist, variiert je nach {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}-Eigenschaften, die typischerweise (aber nicht immer) verwendet werden, um die Textrichtung basierend auf der anzuzeigenden Sprache anzupassen. Wenn beispielsweise der Text der Box von rechts nach links gerendert wird, wird die `border-inline-start-color` auf die rechte Seite des Randes angewendet.

## Farben als Werte in Stylesheets angeben

Jetzt, wo Sie wissen, welche [CSS-Eigenschaften Ihnen ermöglichen, Farben auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie anfangen, Farben zu Ihren Webseiten hinzuzufügen. Lassen Sie uns einige Beispiele anschauen, wie Farben innerhalb eines [Stylesheets](/de/docs/Glossary/stylesheet) verwendet werden. In diesem Beispiel verwenden wir mehrere der zuvor erwähnten Eigenschaften, wobei das Konzept des Farbauftrags in CSS dasselbe bleibt, egal welche Eigenschaft verwendet wird.

Sehen wir uns zuerst das Ergebnis an, bevor wir uns den Code ansehen, den wir dafür benötigen:

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

Hier haben wir ein wrapper {{HTMLElement("div")}}, das zwei Kind-`<div>`s enthält, von denen jedes einen einzelnen Kind-Absatz ({{HTMLElement("p")}}) hat. Jede Inhalts-`<div>` erhält ein anderes Aussehen.

### CSS

Betrachten wir das CSS, das das obige Ergebnis stückweise erstellt.

> [!NOTE]
> Wir verwenden mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/CSS_colors/Color_values) in diesem Beispiel, um deren Verwendung zu demonstrieren. Dies wird für Produktionscode nicht empfohlen. Beim Schreiben von CSS verwenden Sie den für Sie und Ihr Team intuitivsten Werttyp.

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

Die `.wrapper`-Klasse wird verwendet, um Stile auf das {{HTMLElement("div")}} anzuwenden, das all unsere anderen Inhalte umschließt. Dies legt die Höhe des Containers mit {{cssxref("height")}} fest und ermöglicht, dass die Breite dieses Blockelementes standardmäßig 100% seines Elternteils beträgt. Durch Setzen von {{cssxref("display")}} auf `flex` und Hinzufügen eines `10px`-{{cssxref("gap")}} wird ein Flex-Container erstellt, um die Kinder nebeneinander mit einem Abstand zwischen den Kindern des Containers anzuordnen. Wir verwenden {{cssxref("flex")}}, um die Flex-Kinder wachsen zu lassen, um den Container auszufüllen; es wirkt sich nicht auf den Flex-Container selbst aus.

Von größerem Interesse für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rand um den Außenrand des Elements zu erstellen. Dieser Rand ist eine durchgezogene Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, die verwendet wird, um die Box links zu gestalten, legt die Farbe des Hintergrunds und der Umrandung fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Werts der CSS-{{cssxref("background-color")}}-Eigenschaft in `rgb(245 130 130)` festgelegt, wobei die {{CSSXref("color_value/rgb", "rgb()")}}-funktionale Notation verwendet wird.
- Eine Umrandung wird für die Box definiert. Im Gegensatz zu dem häufiger verwendeten {{cssxref("border")}}, hat {{cssxref("outline")}} keinerlei Einfluss auf das Layout; es wird über das gezeichnet, was außerhalb der Box des Elements sein mag, anstatt Platz zu machen, wie `border` es tut. Diese Umrandung ist eine durchgezogene, dunkle rote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred`-Schlüsselworts beim Festlegen der Farbe.
- Beachten Sie, dass wir die Textfarbe nicht explizit festlegen. Dies bedeutet, dass der Wert von {{cssxref("color")}} vom nächstgelegenen Containing-Element, das sie definiert, vererbt wird. Standardmäßig ist das schwarz.

```css
.boxRight {
  background-color: hwb(270deg 63% 13%);
  outline: 4px dashed #6e1478;
  color: hsl(0deg 100% 100%);
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: #8f8;
  text-decoration: underline wavy #8f8;
  text-shadow: 2px 2px 3px black;
}
```

> [!NOTE]
> Wir haben die `text-decoration-*`-Stile separat eingeschlossen, da Safari {{cssxref("text-decoration")}} nicht als Kurzform-Eigenschaft unterstützt.

Abschließend legt die `.boxRight`-Klasse mehrere Stile auf der Box fest, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedenen Möglichkeiten zur Deklaration von [Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)):

- Der `background-color` wird unter Verwendung der {{CSSXref("color_value/hwb", "hwb()")}}-funktionalen Notation festgelegt – `hwb(270deg 63% 13%)`. Dies ist eine mittlere violette Farbe.
- Die `outline` der Box wird verwendet, um anzugeben, dass die Box von einer vier Pixel dicken gestrichelten Linie umschlossen werden soll, deren Farbe ein etwas tieferes Violett mit dem sechsstelligen {{cssxref("hex-color")}}-Wert `#6e1478` ist.
- Die Vordergrundfarbe (Text) wird durch Festlegen der {{cssxref("color")}}-Eigenschaft mit der {{CSSXref("color_value/hsl", "hsl()")}}-funktionalen Notation angegeben – `hsl(0deg 100% 100%)`. Dies ist eine von vielen Möglichkeiten, die Farbe Weiß anzugeben.
- Wir fügen mit der {{cssxref("text-decoration")}}-Kurzform und der Langformkomponente für Browser-Kompatibilität eine grüne Wellenlinie unter dem Text hinzu. Wir haben den 3-stelligen {{cssxref("hex-color")}} `#8f8` verwendet, was dem Äquivalent von `#88ff88` entspricht.
- Schließlich wird dem Text mit {{cssxref("text-shadow")}} ein kleiner Schatten hinzugefügt. Sein `color`-Parameter wird auf `schwarz`, ein {{cssxref("named-color")}}, gesetzt.

Wir haben fünf verschiedene Farbschreibweisen verwendet, um zu demonstrieren, was möglich ist. In der realen Welt würden Sie und Ihr Team vorzugsweise eine bevorzugte Farbnotation wählen, wobei alle, die an einem Codebasis arbeiten, dieselbe Syntax verwenden.

## Andere Möglichkeiten, Farben zu verwenden

CSS ist nicht die einzige Web-Technologie, die Farbe unterstützt. Weitere Beispiele beinhalten:

- Die HTML [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Erlaubt das Zeichnen von 2D-Bitmap-Grafiken in einem {{HTMLElement("canvas")}}-Element. Siehe unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial), um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht das Erstellen von Bildern mithilfe von Befehlen, die spezifische Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in eine Webseite eingebettet oder mithilfe des {{HTMLElement("img")}}-Elements auf der Seite platziert werden, genau wie jede andere Art von Bild.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zum Zeichnen von Hochleistungs-2D- und 3D-Grafiken im Web. Siehe unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial), um mehr zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), ein Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige jetzt veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [CSS Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values) Leitfaden
- [Farben mit Bedacht verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Grafiken im Web](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#other_graphics_on_the_web)
