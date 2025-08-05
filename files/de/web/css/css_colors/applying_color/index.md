---
title: Anwenden von Farbe auf HTML-Elemente mit CSS
short-title: Anwenden von Farbe auf HTML-Elemente
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Farbe zu Ihren [HTML](/de/docs/Web/HTML) [Elementen](/de/docs/Web/HTML/Reference/Elements) hinzuzufügen, um das gewünschte Aussehen zu erzielen. Dieser Leitfaden ist eine Einführung in die Anwendung von Farben auf HTML-Elemente mithilfe von CSS. Dieser Leitfaden enthält [Listen der CSS-Eigenschaften, die Farben in ihren Werten setzen](#eigenschaften,_die_farbe_haben_können) und wie Sie Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_möglichkeiten,_farbe_zu_verwenden) verwenden können.

> [!NOTE]
> Es ist wichtig, [Farben sorgfältig zu verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie stets passende Farben aus und stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten. Berücksichtigen Sie immer die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, sehen Sie sich die Referenz zum [CSS `<color>` Datentyp](/de/docs/Web/CSS/color_value) und den [CSS-Farbwerte-Leitfaden](/de/docs/Web/CSS/CSS_colors/Color_values) an.

## Eigenschaften, die Farbe haben können

Auf der Elementebene kann alles in HTML mit Farbe angewendet werden. Schauen wir uns die verschiedenen auf der Seite gerenderten Elemente an — wie Text, Rahmen usw. Wir werden Listen der CSS-Eigenschaften bereitstellen, die Farbe auf jedes dieser Elemente anwenden.

Auf fundamentaler Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf fast jedem Element verwendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seines Hintergrunds und jeglicher Dekorationen auf dem Text zu bestimmen.

- {{cssxref("color")}}
  - : Die Farbe, die beim Zeichnen des Textes und jeglicher [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) verwendet wird (wie das Hinzufügen von Unter- oder Überstrichen, Durchstreichlinien usw.).

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}
  - : Konfiguriert einen Schatteneffekt, der auf Text angewendet wird. Zu den Optionen für den Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern unscharf und mit dem Hintergrund vermischt wird). Sehen Sie sich [Textschlagschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows) an, um mehr zu erfahren.

- {{cssxref("text-decoration-color")}}
  - : Die Standardfarbe der Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) ist [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Schlüsselwort steht für den aktuellen Wert der `color`-Eigenschaft. Sie können diesen Wert jedoch überschreiben und eine andere Farbe für sie verwenden, indem Sie die `text-decoration-color`-Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}
  - : Die Farbe, die bei der Darstellung von Betonungszeichen neben jedem Zeichen im Text verwendet wird. Diese wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}
  - : Die Farbe, die beim Zeichnen des {{Glossary("caret", "Carets")}} (manchmal auch als Texteingabecursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur in bearbeitbaren Elementen nützlich, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elemente, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit irgendeiner Art von Inhalt und hat neben dem eigentlichen Inhalt des Elements einen Hintergrund und einen Rahmen.

- [Ränder](#borders_2)
  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Ränder einer Box festzulegen.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}
  - : Konfiguriert Einschlüsse und Schlagschatteneffekte auf der Box. Zu den Optionen für jeden Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern unscharf und mit jedem Hintergrund vermischt wird).

- {{cssxref("column-rule-color")}}
  - : Die Farbe, die beim Zeichnen der Linie verwendet wird, die Textspalten trennt, bei Verwendung des [CSS-Mehrspaltenlayouts](/de/docs/Web/CSS/CSS_multicol_layout).

- {{cssxref("outline-color")}}
  - : Die Farbe, die verwendet wird, wenn eine Umrandung um das äußere Element gezeichnet wird. Diese Umrandung unterscheidet sich vom Rahmen darin, dass sie keinen Raum im Dokument reserviert. Umrisse nehmen nicht am [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) teil, sondern überlappen andere Inhalte. Umrisse werden allgemein als Fokusindikatoren verwendet, um anzuzeigen, welches Element derzeit den Fokus hat und Tastatureingabeereignisse erhält.

### Ränder

Jedes Element kann einen umrandeten Rahmen gezeichnet haben. Ein grundlegender Elementrahmen ist eine Linie, die um die Kanten des Inhalts des Elements gezeichnet wird. Sehen Sie sich [Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) an, um mehr über das Verhältnis zwischen Elementen und ihren Rändern zu erfahren, und den Artikel [Styling von Rändern mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders), um mehr darüber zu erfahren, wie man Stile auf Ränder anwendet.

Sie können die {{cssxref("border")}}-Kurzform-Eigenschaft verwenden, die es Ihnen ermöglicht, alles über den Rahmen auf einmal zu konfigurieren (einschließlich nicht-Farbenmerkmale von Rahmen, wie seine [Breite](/de/docs/Web/CSS/border-width), [Stil](/de/docs/Web/CSS/border-style) (solide, gestrichelt usw.) und so weiter.

- {{cssxref("border-color")}}-Kurzform
  - : Gibt eine einzelne Farbe an, die für jede Seite des Rahmens des Elements verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}} und {{cssxref("border-bottom-color")}}
  - : Ermöglicht es Ihnen, die Farbe der entsprechenden Seite des Rahmen des Elements festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}
  - : Mit diesen können Sie die Farbe festlegen, die zum Zeichnen der Ränder verwendet wird, die dem Anfang und Ende des Blockes am nächsten liegen, den der Rand umgibt. In einem von links nach rechts verlaufenden Schreibmodus (wie es im Englischen der Fall ist) ist der Blockanfang-Rand die obere Kante und das Blockende die untere. Dies unterscheidet sich vom Inline-Anfang und -Ende, die die linke und rechte Kanten sind (entsprechend dem Punkt, an dem jede Textzeile im Kasten beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}
  - : Diese ermöglichen es Ihnen, die Kanten des Rahmens zu färben, die dem Anfang und Ende der Zeilenanfänge im Kasten am nächsten liegen. Welche Seite dies ist, variiert je nach {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}-Eigenschaften, die typischerweise (aber nicht immer) verwendet werden, um die Richtung des Textes basierend auf der angezeigten Sprache anzupassen. Beispielsweise wird, wenn der Text des Kastens von rechts nach links gerendert wird, die `border-inline-start-color`-Eigenschaft auf die rechte Seite des Rahmens angewendet.

## Farben als Werte in Stylesheets angeben

Da Sie nun wissen, welche [CSS-Eigenschaften es Ihnen ermöglichen, Farbe auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie damit beginnen, Farben zu Ihren Websites hinzuzufügen. Schauen wir uns einige Beispiele dafür an, wie Farbe in einem {{Glossary("stylesheet", "Stylesheet")}} verwendet wird. In diesem Beispiel verwenden wir mehrere vorher erwähnte Eigenschaften, wobei das Konzept der Anwendung von Farben in CSS dasselbe bleibt, unabhängig von der Eigenschaft.

Schauen wir uns zuerst das Ergebnis an, bevor wir uns anschauen, welchen Code wir benötigen, um es zu erstellen:

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

Hier haben wir einen Wrapper-{{HTMLElement("div")}}, der zwei Kind-`<div>`-Elemente enthält, die jeweils ein einzelnes Kind-Absatz-({{HTMLElement("p")}}) enthalten. Jeder Inhalt-`<div>` hat ein unterschiedliches Aussehen und Gefühl.

### CSS

Schauen wir uns CSS an, das das obige Ergebnis Stück für Stück erstellt.

> [!NOTE]
> Wir verwenden in diesem Beispiel mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/CSS_colors/Color_values), um deren Verwendung zu demonstrieren. Dies wird nicht für Produktionscode empfohlen. Beim Schreiben von CSS verwenden Sie den für Sie und Ihr Team intuitivsten Werttyp.

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

Die `.wrapper`-Klasse wird verwendet, um Stile auf das {{HTMLElement("div")}} anzuwenden, das all unsere anderen Inhalte umschließt. Dies legt die Höhe des Containers fest, und erlaubt es, die Breite dieses Blockebenelements standardmäßig auf 100% seines Elternteils einzustellen. Durch das Setzen von {{cssxref("display")}} auf `flex` und das Hinzufügen eines `10px` {{cssxref("gap")}} wird ein Flex-Container erstellt, der die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers anordnet. Wir verwenden {{cssxref("flex")}}, um den Flex-Kindern das Wachstum zu erlauben und den Container zu füllen; es hat keinen Effekt auf den Flex-Container selbst.

Für unsere Diskussion hier ist von größerem Interesse die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rahmen um die äußere Kante des Elements zu etablieren. Dieser Rahmen ist eine durchgezogene Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, die verwendet wird, um die Box auf der linken Seite zu stylen, legt die Hintergrundfarbe und die Umrandung fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Werts der CSS-{{cssxref("background-color")}}-Eigenschaft auf `rgb(245 130 130)` festgelegt, wobei die {{CSSXref("color_value/rgb", "rgb()")}}-Funktionalnotation verwendet wird.
- Eine Umrandung wird für die Box definiert. Im Gegensatz zur häufiger verwendeten {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; sie wird über das gezeichnet, was sich zufällig außerhalb des Boxelements befinden mag, anstatt wie `border` Platz zu schaffen. Diese Umrandung ist eine durchgezogene, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des Keywords `darkred` bei der Angabe der Farbe.
- Beachten Sie, dass wir die Textfarbe nicht explizit einstellen. Das bedeutet, dass der Wert von {{cssxref("color")}} vom nächstgelegenen, enthaltenden Element geerbt wird, das es definiert. Standardmäßig ist dies schwarz.

```css
.boxRight {
  background-color: hwb(270deg 63% 13%);
  outline: 4px dashed #6e1478;
  color: hsl(0deg 100% 100%);
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: #8f8;
  text-decoration: underline wavy #8f8;
  text-shadow: 2px 2px 3px black;
}
```

> [!NOTE]
> Wir haben die `text-decoration-*`-Stile separat aufgenommen, weil Safari {{cssxref("text-decoration")}} nicht als Kurzform-Eigenschaft unterstützt.

Schließlich legt die `.boxRight`-Klasse mehrere Stile auf der Box fest, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedenen Möglichkeiten zur Deklaration von [Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)):

- Die `background-color` wird mit der {{CSSXref("color_value/hwb", "hwb()")}}-Funktionalnotation festgelegt — `hwb(270deg 63% 13%)`. Dies ist eine mittelviolette Farbe.
- Die `outline` der Box wird verwendet, um festzulegen, dass die Box in eine vier Pixel dicke gestrichelte Linie eingeschlossen werden soll, deren Farbe ein etwas tieferes Violett ist, das den sechsstelligen {{cssxref("hex-color")}}-Wert `#6e1478` verwendet.
- Die Vordergrundfarbe (Textfarbe) wird durch das Setzen der {{cssxref("color")}}-Eigenschaft mittels der {{CSSXref("color_value/hsl", "hsl()")}}-Funktionalnotation festgelegt — `hsl(0deg 100% 100%)`. Dies ist eine von vielen Möglichkeiten, die Farbe Weiß anzugeben.
- Wir fügen eine grüne gewellte Linie unter dem Text mit der {{cssxref("text-decoration")}}-Kurzform hinzu, zusammen mit der Langform-Komponente für die Browser-Kompatibilität. Wir verwendeten den 3-stelligen {{cssxref("hex-color")}}-Wert `#8f8`, der gleichbedeutend mit `#88ff88` ist.
- Schließlich wird mit {{cssxref("text-shadow")}} ein kleiner Schatten zum Text hinzugefügt. Sein `color`-Parameter ist auf `black` gesetzt, einen {{cssxref("named-color")}}-Wert.

Wir haben fünf verschiedene Farbschreibweisen verwendet, um zu demonstrieren, was möglich ist. In der realen Welt werden Sie und Ihr Team vorzugsweise eine bevorzugte Farbschreibweise auswählen, wobei jeder, der an einer Codebasis arbeitet, dieselbe Farbschreibweise verwendet.

## Andere Möglichkeiten, Farbe zu verwenden

CSS ist nicht die einzige Webtechnologie, die Farbe unterstützt. Andere Beispiele sind:

- Die HTML [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht es Ihnen, 2D-Bitmaps in einem {{HTMLElement("canvas")}}-Element zu zeichnen. Sehen Sie sich unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) an, um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht es Ihnen, Bilder mit Befehlen zu erstellen, die spezifische Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in eine Webseite eingebettet oder mit dem {{HTMLElement("img")}}-Element in die Seite eingebaut werden, genau wie jede andere Art von Bild.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zum Zeichnen von hochleistungsfähigen 2D- und 3D-Grafiken im Web. Sehen Sie sich unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) an, um mehr darüber zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), einen Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige mittlerweile veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values) Leitfaden
- [Farben sorgfältig verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
