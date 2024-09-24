---
title: Anwenden von Farbe auf HTML-Elemente mittels CSS
short-title: Anwenden von Farbe auf HTML-Elemente
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: cdb23fdf261a071951e1e46a0a6c7bc6daa691ff
---

{{CSSRef}}

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Ihren [HTML](/de/docs/Web/HTML) [Elementen](/de/docs/Web/HTML/Element) Farben hinzuzufügen, um das gewünschte Aussehen zu erzielen. Dieser Leitfaden ist eine Einführung, wie CSS verwendet werden kann, um Farben auf HTML-Elemente anzuwenden. Dieser Leitfaden enthält [Listen der CSS-Eigenschaften, die in ihren Werten Farbe festlegen](#eigenschaften,_die_farbe_haben_können) und wie Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_möglichkeiten,_farbe_zu_verwenden) verwendet werden können.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie stets geeignete Farben, um sicherzustellen, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, und berücksichtigen Sie immer die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, sehen Sie sich die Referenz zum [CSS `<color>` Datentyp](/de/docs/Web/CSS/color_value) und den [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values) an.

## Eigenschaften, die Farbe haben können

Auf Elementebene kann in HTML alles mit Farbe versehen werden. Lassen Sie uns die verschiedenen auf der Seite gerenderten Elemente betrachten — wie Text, Ränder usw. Wir bieten Listen der CSS-Eigenschaften, die auf jedes Element Farbe anwenden.

Auf fundamentaler Ebene definiert die Eigenschaft {{cssxref("color")}} die Vordergrundfarbe des Inhalts eines HTML-Elements und die Eigenschaft {{cssxref("background-color")}} definiert die Hintergrundfarbe des Elements. Diese können auf nahezu jedes Element angewendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seinen Hintergrund und alle Dekorationen des Textes zu bestimmen.

- {{cssxref("color")}}

  - : Die Farbe, die beim Zeichnen des Textes und aller [Textdekorationen](/de/docs/Learn/CSS/Styling_text/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) verwendet wird (wie das Hinzufügen von Unter- oder Überstrichen, Durchstreichungen usw.).

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}

  - : Konfiguriert einen Schatteneffekt, der auf Text angewendet werden soll. Einer der Optionen für den Schatten ist die Basisfarbe des Schattens (der dann abhängig von den anderen Parametern verwischt und mit dem Hintergrund vermischt wird). Siehe [Text Schatten](/de/docs/Learn/CSS/Styling_text/Fundamentals#text_drop_shadows), um mehr zu erfahren.

- {{cssxref("text-decoration-color")}}

  - : Die Standardfarben der Textdekorationen (wie Unterstriche, Durchstreichungen usw.) entsprechen `currentcolor`, einem [CSS-Schlüsselwort](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Keyword repräsentiert den aktuellen Wert der `color`-Eigenschaft. Sie können diesen Wert jedoch überschreiben und eine andere Farbe für sie mit der `text-decoration-color`-Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}

  - : Die Farbe, die beim Rendern von Hervorhebungssymbolen neben jedem Zeichen im Text verwendet wird. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}

  - : Die Farbe, die beim Zeichnen des {{Glossary("caret")}} (manchmal als Texteingabecursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur in bearbeitbaren Elementen nützlich, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elemente, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit einer Art von Inhalt und hat neben dem Inhalt der Box einen Hintergrund und einen Rand.

- [Ränder](#borders_2)

  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Ränder einer Box zu setzen.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}

  - : Konfiguriert eingesenkte Schatten- und Tropfschatteneinstellungen auf der Box. Eine der Optionen für jeden Schatten ist die Basisfarbe des Schattens (der dann abhängig von den anderen Parametern verwischt und mit jedem Hintergrund vermischt wird).

- {{cssxref("column-rule-color")}}

  - : Die Farbe, um die Linie zu zeichnen, die Textspalten trennt, wenn das [CSS-Multicolumn-Layout](/de/docs/Web/CSS/CSS_multicol_layout) verwendet wird.

- {{cssxref("outline-color")}}

  - : Die Farbe, die zum Zeichnen einer Umrisslinie um die Außenseite des Elements verwendet wird. Diese Umrisslinie unterscheidet sich vom Rand darin, dass sie keinen Platz im Dokument beansprucht. Umrisse nehmen nicht an dem [Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model) teil und überlagern andere Inhalte. Umrisse werden im Allgemeinen als Fokusindikatoren verwendet, um anzuzeigen, welches Element gerade den Fokus hat und welche Tastatureingabeevents empfängt.

### Ränder

Jedes Element kann einen [Rand](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) um sich herum gezeichnet haben. Ein einfacher Elementrand ist eine Linie, die um die Kanten des Inhalts des Elements gezeichnet wird. Sehen Sie sich [Das Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model) an, um die Beziehung zwischen Elementen und ihren Rändern zu verstehen, und den Artikel [Stilisierung von Rändern mit CSS](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders), um mehr darüber zu erfahren, wie Sie Stile auf Ränder anwenden.

Sie können die Kurzschreibweise der Eigenschaft {{cssxref("border")}} verwenden, mit der Sie alles über den Rand in einem Schritt konfigurieren können (einschließlich nicht farblicher Merkmale der Ränder, wie ihre [Breite](/de/docs/Web/CSS/border-width), [Stil](/de/docs/Web/CSS/border-style) (solide, gestrichelt usw.) und so weiter.

- {{cssxref("border-color")}} Kurzschreibweise

  - : Gibt eine einzelne Farbe an, die für jede Seite des Rands des Elements verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}} und {{cssxref("border-bottom-color")}}

  - : Ermöglicht das Festlegen der Farbe der entsprechenden Seite des Randes des Elements.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}

  - : Mit diesen können Sie die Farbe festlegen, die verwendet wird, um die Ränder zu zeichnen, die dem Anfang und Ende des Blocks, den der Rand umgibt, am nächsten sind. In einem von Links-nach-Rechts-Schreibmodus (wie dem in dem Englisch geschrieben wird), ist der Blockanfangsrand die obere Kante und das Blockende die untere. Dies unterscheidet sich vom Inline-Anfang und -Ende, die die linke und rechte Kante sind (entsprechend, wo jede Textzeile in der Box beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}

  - : Diese ermöglichen es Ihnen, die Kanten des Randes in der Nähe des Beginns und des Endes der Textzeilen im Kasten zu färben. Welche Seite das ist, variiert je nach den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}, die typischerweise (aber nicht immer) verwendet werden, um den Textfluss basierend auf der angezeigten Sprache anzupassen. Wenn zum Beispiel der Text im Kasten von rechts nach links gerendert wird, wird die `border-inline-start-color` auf der rechten Seite des Randes angewendet.

## Farben als Werte in Stylesheets angeben

Nun, da Sie wissen, welche [CSS-Eigenschaften Sie verwenden können, um Farbe auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie beginnen, Ihren Websites Farben hinzuzufügen. Lassen Sie uns einige Beispiele für die Verwendung von Farbe innerhalb eines {{Glossary("Stylesheets")}} betrachten. In diesem Beispiel verwenden wir mehrere zuvor erwähnte Eigenschaften, wobei das Konzept des Anwendens von Farben in CSS das gleiche ist, unabhängig von der Eigenschaft.

Lassen Sie uns zuerst das Ergebnis ansehen, bevor wir uns den Code ansehen, den wir dafür erstellen müssen:

{{EmbedLiveSample("Specifying colors as values in stylesheets", 650, 150)}}

### HTML

Der HTML-Code, der für die Erstellung des obigen Beispiels verantwortlich ist, wird hier dargestellt:

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

Hier haben wir eine Wrapper-{{HTMLElement("div")}}, die zwei untergeordnete `<div>`-Elemente enthält, die jeweils einen einzigen untergeordneten Absatz ({{HTMLElement("p")}}) haben. Jedes Inhalts-`<div>` erhält ein unterschiedliches Aussehen und Gefühl.

### CSS

Sehen wir uns das CSS an, das das obige Ergebnis stückweise erstellt.

> [!NOTE]
> Wir verwenden in diesem Beispiel mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/CSS_colors/Color_values), um deren Verwendung zu demonstrieren. Dies wird nicht für Produktionscode empfohlen. Beim Schreiben von CSS verwenden Sie den für Sie und Ihr Team am intuitivsten Werttyp.

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

Die `.wrapper`-Klasse wird verwendet, um Stile auf das {{HTMLElement("div")}} zuzuweisen, das den gesamten anderen Inhalt umschließt. Dies legt die Höhe des Containers mit {{cssxref("height")}} fest und erlaubt es dieser Blockebenelement, die Breite standardmäßig auf 100 % ihres übergeordneten Elements zu setzen. Die Einstellung des {{cssxref("display")}} auf `flex` und das Hinzufügen einer `10px` {{cssxref("gap")}} erzeugt einen Flex-Container, um die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers anzuordnen. Wir verwenden {{cssxref("flex")}}, um zu erlauben, dass sich die Flex-Kinder ausdehnen, um den Container auszufüllen; es beeinflusst nicht den Flex-Container selbst.

Von größerem Interesse für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rand um den Außenrand des Elements zu etablieren. Dieser Rand ist eine durchgehende Linie, 6 Pixel breit, in der benannten Farbe [mediumturquoise](/de/docs/Web/CSS/named-color).

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, verwendet für den Stil der Box links, legt die Farbe des Hintergrunds und des Umrisses fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Werts der CSS-{{cssxref("background-color")}}-Eigenschaft auf `rgb(245 130 130)` festgelegt, unter Verwendung der {{CSSXref("color_value/rgb", "rgb()")}} Funktionsnotation.
- Ein Umriss wird für die Box definiert. Im Gegensatz zum häufiger verwendeten {{cssxref("border")}}, beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; er zeichnet über das hinweg, was sich zufällig außerhalb der Box des Elements befinden kann, anstatt Platz zu schaffen, wie `border` es tut. Dieser Umriss ist eine durchgehende, dunkelrote Linie, zwei Pixel dick. Beachten Sie die Verwendung des `darkred`-Keywörter, wenn die Farbe angegeben wird.
- Beachten Sie, dass wir die Textfarbe nicht explizit einstellen. Das bedeutet, dass der Wert von {{cssxref("color")}} vom nächsten enthaltenen Element geerbt wird, das es definiert. Standardmäßig ist das Schwarz.

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
> Wir haben die `text-decoration-*`-Stile separat aufgenommen, da Safari {{cssxref("text-decoration")}} nicht als Kurzschreibweise unterstützt.

Schließlich setzt die `.boxRight`-Klasse mehrere Stile auf die Box, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedenen Methoden der Deklaration von [Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)):

- Die `background-color` wird mit der {{CSSXref("color_value/hwb", "hwb()")}} Funktionsnotation festgelegt — `hwb(270deg 63% 13%)`. Dies ist eine mittlere Lila-Farbe.
- Der `outline` der Box wird verwendet, um anzugeben, dass die Box in eine vier Pixel dicke gestrichelte Linie eingeschlossen werden soll, deren Farbe ein etwas dunklerer Lila-Ton ist, unter Verwendung des sechsstelligen {{cssxref("hex-color")}} `#6e1478`.
- Die Vordergrundfarbe (Text) wird durch Einstellen der {{cssxref("color")}}-Eigenschaft mit der {{CSSXref("color_value/hsl", "hsl()")}} Funktionsnotation — `hsl(0deg 100% 100%)` — angegeben. Dies ist eine von vielen Möglichkeiten, die Farbe Weiß festzulegen.
- Wir fügen unter dem Text eine grüne gewellte Linie mit der Kurzschreibweise von {{cssxref("text-decoration")}} hinzu, zusammen mit der Langformkomponente für die Browserkompatibilität. Wir haben die dreistellige {{cssxref("hex-color")}} `#8f8` verwendet, was dem `#88ff88` entspricht.
- Schließlich wird dem Text mit {{cssxref("text-shadow")}} ein wenig Schatten hinzugefügt. Sein `color`-Parameter wird auf `black`, einen {{cssxref("named-color")}}-Wert gesetzt.

Wir haben fünf verschiedene Farbsyntaxis verwendet, um zu zeigen, was möglich ist. In der realen Welt bevorzugen Sie und Ihr Team wahrscheinlich eine bevorzugte Farbschreibweise, bei der jeder, der an einer Codebasis arbeitet, die gleiche Farbschreibweise verwendet.

## Andere Möglichkeiten, Farbe zu verwenden

CSS ist nicht die einzige Webtechnologie, die Farbe unterstützt. Weitere Beispiele sind:

- Die HTML [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht es Ihnen, 2D-Bitmap-Grafiken in einem {{HTMLElement("canvas")}}-Element zu zeichnen. Siehe unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial), um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Skalierbare Vektorgrafiken)
  - : Erlaubt das Erstellen von Bildern mit Befehlen, die spezifische Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in eine Webseite eingebettet oder wie jedes andere Bild in der Seite mit dem {{HTMLElement("img")}}-Element platziert werden.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web-Grafikbibliothek ist eine auf OpenGL ES basierende API zum Zeichnen von hochleistungsfähigen 2D- und 3D-Grafiken im Web. Siehe unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial), um mehr darüber zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), einen Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige mittlerweile veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values) Leitfaden
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Grafiken im Web](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#other_graphics_on_the_web)
