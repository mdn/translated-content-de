---
title: Anwenden von Farbe auf HTML-Elemente mit CSS
short-title: Farbe auf HTML-Elemente anwenden
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Farbe zu Ihren [HTML](/de/docs/Web/HTML) [Elementen](/de/docs/Web/HTML/Reference/Elements) hinzuzufügen, um das gewünschte Aussehen zu erreichen. Dieser Leitfaden ist ein Einstieg, wie CSS verwendet werden kann, um Farben auf HTML-Elemente anzuwenden. Der Leitfaden enthält [Listen der CSS-Eigenschaften, die Farbe in ihren Werten setzen](#eigenschaften,_die_farbe_haben_können) und wie man Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_möglichkeiten,_farbe_zu_verwenden) verwendet.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus, um sicherzustellen, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit sicherzustellen, und berücksichtigen Sie stets die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, sehen Sie die Referenz zum [CSS-`<color>`-Datentyp](/de/docs/Web/CSS/color_value) und den [CSS-Farbwert-Leitfaden](/de/docs/Web/CSS/CSS_colors/Color_values).

## Eigenschaften, die Farbe haben können

Auf Elementebene kann alles in HTML mit Farbe versehen werden. Sehen wir uns die verschiedenen Elemente an, die auf der Seite angezeigt werden, wie Text, Ränder usw. Wir geben Listen der CSS-Eigenschaften an, die Farbe auf jedes anwenden.

Auf grundlegender Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft die Hintergrundfarbe des Elements. Diese können auf nahezu jedes Element angewendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seines Hintergrunds und jeglicher Dekorationen am Text zu bestimmen.

- {{cssxref("color")}}
  - : Die Farbe, die verwendet wird, um den Text und jegliche [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) zu zeichnen (wie die Hinzufügung von Unter- oder Überlinien, Durchstreichungen usw.).

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}
  - : Konfiguriert einen Schatteneffekt, der auf den Text angewendet wird. Zu den Optionen für den Schatten gehört die Basisfarbe des Schattens (der dann basierend auf den anderen Parametern unscharf gemacht und mit dem Hintergrund vermischt wird). Siehe [Textschlagschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows), um mehr zu erfahren.

- {{cssxref("text-decoration-color")}}
  - : Die Standardfarbe für Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) ist [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color`-Eigenschaft. Sie können diesen Wert jedoch überschreiben und eine andere Farbe dafür verwenden mit der `text-decoration-color`-Eigenschaft.

- {{cssxref("text-emphasis-color")}}
  - : Die Farbe, die verwendet wird, um Betonungssymbole neben jedem Zeichen im Text darzustellen. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}
  - : Die Farbe, die verwendet wird, um den {{Glossary("caret", "Caret")}} (manchmal als Texteingabe-Cursor bezeichnet) innerhalb des Elements zu zeichnen. Dies ist nur in Elementen nützlich, die bearbeitbar sind, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elemente, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit irgendeinem Inhalt und hat einen Hintergrund und einen Rand zusätzlich zu dem, was der Inhalt der Box sein mag.

- [Ränder](#borders_2)
  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Ränder einer Box zu setzen.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe in Bereichen des Elements verwenden, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}
  - : Konfiguriert Schatteneffekte im Rahmen und Außenschatten-Effekte auf der Box. Zu den Optionen für jeden Schatten gehört die Basisfarbe des Schattens (die dann unscharf gemacht und mit einem Hintergrund gemäß den anderen Parametern vermischt wird).

- {{cssxref("column-rule-color")}}
  - : Die Farbe, die verwendet wird, um die Linie zu zeichnen, die Spalten von Text trennt, wenn man [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) verwendet.

- {{cssxref("outline-color")}}
  - : Die Farbe, die verwendet wird, um eine Umrandung um die Außenseite des Elements zu zeichnen. Diese Umrandung unterscheidet sich von dem Rand dahingehend, dass dafür im Dokument kein Platz freigegeben wird. Umrandungen beteiligen sich nicht am [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) und überlappen andere Inhalte. Umrandungen werden im Allgemeinen als Fokusanzeiger verwendet, die anzeigen, welches Element aktuell den Fokus hat und Tastatureingaben empfängt.

### Ränder

Jedes Element kann einen Rand um sich herum gezeichnet haben. Ein grundlegender Elementrand ist eine Linie, die um die Ränder des Inhalts eines Elements gezeichnet wird. Sehen Sie sich [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) an, um mehr über die Beziehung zwischen Elementen und deren Rändern zu erfahren, und den Artikel [Ränder mit CSS gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders), um mehr über das Anwenden von Stilen auf Ränder zu erfahren.

Sie können die Kurzschreibweise der {{cssxref("border")}}-Eigenschaft verwenden, die es Ihnen erlaubt, alles über den Rand in einem Zug zu konfigurieren (einschließlich nicht farbbezogener Merkmale von Rändern, wie ihre [Breite](/de/docs/Web/CSS/Reference/Properties/border-width), [Stil](/de/docs/Web/CSS/Reference/Properties/border-style) (durchgezogen, gestrichelt usw.) und so weiter).

- {{cssxref("border-color")}} Kurzschreibweise
  - : Gibt eine einzelne Farbe an, die für jede Seite des Randes des Elements verwendet wird.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}
  - : Ermöglicht es Ihnen, die Farbe der entsprechenden Seite des Randes des Elements festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}
  - : Damit können Sie die Farbe einstellen, die verwendet wird, um die Ränder zu zeichnen, die dem Beginn und dem Ende des Blocks, den der Rand umschließt, am nächsten sind. In einem von links nach rechts Schreibrichtung (wie im Englischen geschrieben wird) ist der Blockanfang-Rand die obere Kante und das Blockende die untere. Dies unterscheidet sich vom Inline-Anfang und -Ende, die die linken und rechten Kanten sind (die den Punkt angeben, an dem jede Textzeile in dem Kasten beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}
  - : Diese ermöglichen es Ihnen, die Kanten des Randes zu färben, die dem Anfang und dem Ende der Linien im Text am nächsten liegen. Welche Seite das ist, variiert in Abhängigkeit von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}, die typischerweise (aber nicht immer) verwendet werden, um die Textrichtung basierend auf der angezeigten Sprache anzupassen. Wenn zum Beispiel der Text des Kastens von rechts nach links gerendert wird, wird die `border-inline-start-color` auf die rechte Seite des Randes angewandt.

## Farben als Werte in Stylesheets angeben

Da Sie nun wissen, welche [CSS-Eigenschaften es Ihnen erlauben, Farbe auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie beginnen, Farben zu Ihren Websites hinzuzufügen. Lassen Sie uns einige Beispiele für die Verwendung von Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} betrachten. In diesem Beispiel verwenden wir mehrere der zuvor erwähnten Eigenschaften, wobei das Konzept des Anwenden von Farben in CSS dasselbe ist, unabhängig von der Eigenschaft.

Schauen wir uns zuerst das Ergebnis an, bevor wir den Code betrachten, den wir dafür erstellen müssen:

{{EmbedLiveSample("Specifying colors as values in stylesheets", 650, 150)}}

### HTML

Das hier gezeigte HTML ist verantwortlich für die Erstellung des obigen Beispiels:

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

Hier haben wir eine Wrapper-{{HTMLElement("div")}}, die zwei untergeordnete `<div>`s enthält, von denen jedes einen untergeordneten Paragraphen ({{HTMLElement("p")}}) hat. Jeder Inhalts-`<div>` wird mit einem unterschiedlichen Aussehen und Gefühl versehen.

### CSS

Schauen wir uns das CSS an, das das obige Ergebnis Stück für Stück erzeugt.

> [!NOTE]
> Wir verwenden in diesem Beispiel mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/CSS_colors/Color_values), um deren Verwendung zu demonstrieren. Dies wird nicht für Code empfohlen, der in Produktionsumgebungen eingesetzt wird. Beim Schreiben von CSS sollten Sie den für Sie und Ihr Team intuitivsten Werttyp verwenden.

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

Die `.wrapper`-Klasse wird verwendet, um Stile auf das {{HTMLElement("div")}} anzuwenden, das all unsere weiteren Inhalte umschließt. Dies legt die Höhe des Containers fest, indem {{cssxref("height")}} verwendet wird, so dass die Breite dieses Block-Elements standardmäßig auf 100 % seines Elternteils festgelegt wird. Durch das Setzen von {{cssxref("display")}} auf `flex` und das Hinzufügen einer `10px` {{cssxref("gap")}} wird ein Flex-Container erstellt, um die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers anzuordnen. Wir verwenden {{cssxref("flex")}}, um die Flex-Kinder wachsen zu lassen, um den Container auszufüllen; es beeinflusst nicht den Flex-Container selbst.

Interessanter für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um eine Umrandung um den äußeren Rand des Elements zu etablieren. Diese Umrandung ist eine solide Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, die verwendet wird, um die Box auf der linken Seite zu stylen, setzt die Farbe des Hintergrunds und der Umrandung:

- Die Hintergrundfarbe der Box wird gesetzt, indem der Wert der CSS-{{cssxref("background-color")}}-Eigenschaft auf `rgb(245 130 130)` geändert wird, verwenden Sie die {{CSSXref("color_value/rgb", "rgb()")}} Funktionsnotation.
- Für die Box wird eine Umrandung definiert. Im Gegensatz zu dem häufiger verwendeten {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; es wird über allem gezeichnet, was sich möglicherweise außerhalb des Elements befindet, anstatt Raum wie `border` zu schaffen. Diese Umrandung ist eine solide, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred`-Schlüsselworts, wenn Sie die Farbe angeben.
- Beachten Sie, dass wir nicht explizit die Textfarbe setzen. Das bedeutet, dass der Wert der {{cssxref("color")}}-Eigenschaft vom nächsten beinhaltenden Element geerbt wird, das es definiert. Standardmäßig ist das Schwarz.

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
> Wir haben die `text-decoration-*` Stile separat hinzugefügt, weil Safari {{cssxref("text-decoration")}} als Kurzschreibweise nicht unterstützt.

Schließlich setzt die `.boxRight`-Klasse mehrere Stile auf der Box, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedenen Arten der Deklaration von [Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)):

- Die `background-color` wird mit {{CSSXref("color_value/hwb", "hwb()")}} Funktionsnotation — `hwb(270deg 63% 13%)` gesetzt. Dies ist eine mittlere violette Farbe.
- Die `outline` der Box wird verwendet, um anzugeben, dass die Box mit einer vier Pixel dicken gestrichelten Linie umgeben sein soll, deren Farbe ein etwas dunkleres Violett ist, unter Verwendung der sechsstelligen {{cssxref("hex-color")}} `#6e1478`.
- Die Vordergrund-(Text-)Farbe wird angegeben, indem die {{cssxref("color")}}-Eigenschaft unter Verwendung der {{CSSXref("color_value/hsl", "hsl()")}} Funktionsnotation — `hsl(0deg 95% 95%)` gesetzt wird. Dies ist eine sehr helle rosa Farbe.
- Mit der {{cssxref("text-decoration")}} Kurzschreibweise und der Langhandkomponente für die Browser-Kompatibilität ziehen wir eine grüne gewellte Linie unter dem Text. Wir verwenden die 3-stellige {{cssxref("hex-color")}} `#8f8`, die gleichbedeutend mit `#88ff88` ist.
- Schließlich wird ein wenig Schatten zum Text mit {{cssxref("text-shadow")}} hinzugefügt. Sein `color`-Parameter wird auf `black` gesetzt, einen {{cssxref("named-color")}}-Wert.

Wir haben fünf verschiedene Farbsyntaxen verwendet, um zu demonstrieren, was möglich ist. In der realen Welt werden Sie und Ihr Team vorzugsweise eine bevorzugte Farbschreibweise auswählen, wobei jeder im Codebasierteam dieselbe Farbschreibweise verwendet.

## Andere Möglichkeiten, Farbe zu verwenden

CSS ist nicht die einzige Web-Technologie, die Farbe unterstützt. Weitere Beispiele umfassen:

- Die HTML-[Canvas API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht das Zeichnen von 2D-Bitmap-Grafiken in einem {{HTMLElement("canvas")}} Element. Siehe unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial), um mehr zu erfahren.

- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht das Erstellen von Bildern mithilfe von Befehlen, die spezifische Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in einer Webseite eingebettet oder mithilfe des {{HTMLElement("img")}} Elements in der Seite platziert werden, genauso wie jeder andere Bildtyp.

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES-basierende API zum Zeichnen von leistungsstarken 2D- und 3D-Grafiken im Web. Sehen Sie sich unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) an, um mehr darüber zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), ein Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige mittlerweile veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}} Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [CSS-Farbwert-Leitfaden](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
