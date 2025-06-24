---
title: Anwenden von Farbe auf HTML-Elemente mit CSS
short-title: Anwenden von Farbe auf HTML-Elemente
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Farbe zu Ihren [HTML](/de/docs/Web/HTML)-[Elementen](/de/docs/Web/HTML/Reference/Elements) hinzuzufügen, um das gewünschte Aussehen zu erzielen. Dieser Leitfaden ist eine Einführung, wie CSS verwendet werden kann, um Farben auf HTML-Elemente anzuwenden. Dieser Leitfaden enthält [Listen der CSS-Eigenschaften, die Farbe in ihren Werten festlegen](#eigenschaften,_die_farbe_haben_können) und wie Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_möglichkeiten,_farbe_zu_verwenden) verwendet werden können.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus, stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, und berücksichtigen Sie immer die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, siehe die Referenz für den [CSS `<color>`-Datentyp](/de/docs/Web/CSS/color_value) und den [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values).

## Eigenschaften, die Farbe haben können

Auf der Elementebene kann alles in HTML eine Farbe erhalten. Schauen wir uns die verschiedenen auf der Seite gerenderten Elemente an — wie Text, Rahmen usw. Wir werden Listen der CSS-Eigenschaften bereitstellen, die Farbe auf jedes anwenden.

Auf einer fundamentalen Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf nahezu jedem Element verwendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seines Hintergrunds und aller Textdekorationen zu bestimmen.

- {{cssxref("color")}}

  - : Die Farbe, die verwendet wird, um den Text und alle [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) zu zeichnen (wie das Hinzufügen von Unter- oder Überstreichungen, Durchstreichungen und so weiter).

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}

  - : Konfiguriert einen Schattierungseffekt, der auf den Text angewendet wird. Zu den Optionen für den Schatten gehört die Basisfarbe des Schattens (die dann basierend auf den anderen Parametern mit dem Hintergrund verwischt und vermischt wird). Siehe [Textschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows), um mehr zu erfahren.

- {{cssxref("text-decoration-color")}}

  - : Die Farbe der standardmäßigen Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) ist [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color`-Eigenschaft. Sie können diesen Wert jedoch überschreiben und eine andere Farbe mit der `text-decoration-color`-Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}

  - : Die Farbe, die beim Rendern von Hervorhebungssymbolen neben jedem Zeichen im Text verwendet wird. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}
  - : Die Farbe, die verwendet wird, um den {{Glossary("caret", "Caret")}} (manchmal auch als Texteingabecursor bezeichnet) innerhalb des Elements zu zeichnen. Dies ist nur in editierbaren Elementen nützlich, wie z.B. {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder in Elementen, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit einer Art von Inhalt und hat neben dem Inhalt eine Hintergrundfarbe und ein Rahmen.

- [Rahmen](#borders_2)

  - : Siehe den Abschnitt [Rahmen](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben eines Rahmen zu setzen.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}

  - : Konfiguriert Einsetzschatten und Abwurf-Schattierungseffekte auf der Box. Zu den Optionen für jeden Schatten gehört die Basisfarbe des Schattens (die dann basierend auf den anderen Parametern mit jedem Hintergrund verwischt und vermischt wird).

- {{cssxref("column-rule-color")}}

  - : Die Farbe, die verwendet wird, um die Linie zu zeichnen, die Textspalten trennt, wenn das [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) verwendet wird.

- {{cssxref("outline-color")}}
  - : Die Farbe, die verwendet wird, um eine Umrandung um die Außenseite des Elements zu zeichnen. Diese Umrandung unterscheidet sich vom Rahmen darin, dass sie nicht im Dokument Platz beansprucht. Umrandungen nehmen nicht am [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) teil und überlappen andere Inhalte. Umrandungen werden im Allgemeinen als Fokusindikatoren verwendet, um anzuzeigen, welches Element derzeit den Fokus hat und Tastatureingaben empfängt.

### Rahmen

Jedes Element kann einen Rahmen um sich herum haben. Ein einfacher Elementrahmen ist eine Linie, die um die Kanten des Inhalts eines Elements gezeichnet wird. Siehe [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um mehr über die Beziehung zwischen Elementen und ihren Rahmen zu erfahren, sowie den Artikel [Rahmen mit CSS stylen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders), um mehr über das Anwenden von Stilen auf Rahmen zu erfahren.

Sie können die {{cssxref("border")}}-Kurzschreibweise verwenden, mit der Sie alles über den Rahmen auf einmal konfigurieren können (einschließlich nicht-farbiger Merkmale des Rahmens, wie seine [Breite](/de/docs/Web/CSS/border-width), [Stil](/de/docs/Web/CSS/border-style) (solide, gestrichelt usw.) und so weiter).

- {{cssxref("border-color")}} Kurzschreibweise

  - : Gibt eine einzelne Farbe an, die für jede Seite des Rahmens des Elements verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}} und {{cssxref("border-bottom-color")}}

  - : Ermöglicht es Ihnen, die Farbe der entsprechenden Seite des Rahmen des Elements festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}

  - : Mit diesen können Sie die Farbe festlegen, die verwendet wird, um die Rahmen zu zeichnen, die den Anfang und das Ende des blocks, den der Rahmen umgibt, am nächsten sind. In einem von links nach rechts gerichteten Schreibmodus (wie es bei der englischen Schreibweise der Fall ist) ist der Blockanfang der obere Rand und das Blockende der untere Rand. Dies unterscheidet sich vom Inline-Anfang und -Ende, die die linken und rechten Kanten sind (entsprechend dem Beginn und Ende jeder Textzeile im Kasten).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}
  - : Diese ermöglichen es Ihnen, die Kanten des Rahmens zu färben, die dem Anfang und dem Ende der Startlinien des Textes innerhalb des Kastens am nächsten sind. Welche Seite das ist, hängt von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} ab, die typischerweise (aber nicht immer) verwendet werden, um die Textrichtung abhängig von der angezeigten Sprache anzupassen. Zum Beispiel, wenn der Text des Kastens von rechts nach links gerendert wird, wird die `border-inline-start-color` auf die rechte Seite des Rahmens angewendet.

## Farben als Werte in Stylesheets angeben

Jetzt, da Sie wissen, welche [CSS-Eigenschaften es Ihnen ermöglichen, Farbe auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie beginnen, Farben zu Ihren Webseiten hinzuzufügen. Schauen wir uns einige Beispiele für die Verwendung von Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} an. In diesem Beispiel verwenden wir mehrere vorher erwähnte Eigenschaften, wobei das Konzept der Farbverwendung in CSS unabhängig von der Eigenschaft dasselbe ist.

Schauen wir uns zuerst das Ergebnis an, bevor wir uns mit dem Code beschäftigen, den wir dazu erstellen müssen:

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

Hier haben wir einen Wrapper {{HTMLElement("div")}}, der zwei untergeordnete `<div>`s enthält, jeweils mit einem untergeordneten Absatz ({{HTMLElement("p")}}). Jedes Inhalt-`<div>` erhält ein unterschiedliches Aussehen und Gefühl.

### CSS

Schauen wir uns das CSS an, das das obige Ergebnis Stück für Stück erstellt.

> [!NOTE]
> Wir verwenden mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/CSS_colors/Color_values) in diesem Beispiel, um deren Verwendung zu demonstrieren. Dies wird für Produktionscode nicht empfohlen. Wenn Sie CSS schreiben, verwenden Sie den für Sie und Ihr Team am intuitivsten Wertetyp.

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

Die Klasse `.wrapper` wird verwendet, um Stil auf den {{HTMLElement("div")}} anzuwenden, der alle anderen Inhalte umschließt. Dies legt die Höhe des Containers mithilfe von {{cssxref("height")}} fest und ermöglicht dem Blockelement, standardmäßig 100% der Breite seines übergeordneten Elements zu verwenden. Durch das Setzen von {{cssxref("display")}} auf `flex` und das Hinzufügen eines `10px` {{cssxref("gap")}} wird ein Flex-Container erstellt, um die Kinder nebeneinander mit einem Abstand zwischen allen Elementen des Containers anzuordnen. Wir verwenden {{cssxref("flex")}}, um die Flex-Kinder wachsen zu lassen, um den Container zu füllen; es beeinflusst den Flex-Container selbst nicht.

Interessanter für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rahmen um den äußeren Rand des Elements zu schaffen. Dieser Rahmen ist eine solide Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die Klasse `.boxLeft`, die verwendet wird, um die Box auf der linken Seite zu gestalten, legt die Farbe des Hintergrunds und der Umrandung fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Werts der CSS-{{cssxref("background-color")}}-Eigenschaft in `rgb(245 130 130)` gesetzt, mit der {{CSSXref("color_value/rgb", "rgb()")}}-Funktion.
- Eine Umrandung ist für die Box definiert. Im Gegensatz zur häufiger verwendeten {{cssxref("border")}}-Eigenschaft beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; sie wird über das gezeichnet, was sich möglicherweise außerhalb der Box des Elements befindet, anstatt wie `border` Platz zu machen. Diese Umrandung ist eine durchgezogene, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred`-Schlüsselworts bei der Spezifizierung der Farbe.
- Beachten Sie, dass wir die Textfarbe nicht explizit setzen. Das bedeutet, dass der Wert von {{cssxref("color")}} von dem nächstgelegenen enthaltenden Element geerbt wird, das es definiert. Standardmäßig ist das Schwarz.

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
> Wir haben die `text-decoration-*`-Stile separat eingeschlossen, da Safari {{cssxref("text-decoration")}} nicht als Kurzform unterstützt.

Schließlich setzt die Klasse `.boxRight` mehrere Stile auf der Box, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (mit fünf verschiedenen Möglichkeiten, [Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values) zu deklarieren):

- Die `background-color` wird mit der {{CSSXref("color_value/hwb", "hwb()")}}-Funktion festgelegt — `hwb(270deg 63% 13%)`. Dies ist eine mittlere lila Farbe.
- Die `outline` der Box wird verwendet, um anzugeben, dass die Box in eine vier Pixel dicke gestrichelte Linie eingeschlossen werden soll, deren Farbe ein etwas tiefes Lila ist, mit dem sechsstelligen {{cssxref("hex-color")}} `#6e1478`.
- Die Vordergrund- (Text-) Farbe wird durch Setzen der {{cssxref("color")}}-Eigenschaft unter Verwendung der {{CSSXref("color_value/hsl", "hsl()")}}-Funktion — `hsl(0deg 100% 100%)` festgelegt. Dies ist eine von vielen Möglichkeiten, die Farbe Weiß zu spezifizieren.
- Wir fügen eine grüne wellige Linie unter dem Text mit der {{cssxref("text-decoration")}}-Kurzform hinzu, zusammen mit der Langformkomponente für die Browser-Kompatibilität. Wir haben den 3-stelligen {{cssxref("hex-color")}} `#8f8` verwendet, was dem Äquivalent von `#88ff88` entspricht.
- Schließlich wird dem Text mit {{cssxref("text-shadow")}} ein wenig Schatten hinzugefügt. Sein `color`-Parameter ist auf `black`, einen {{cssxref("named-color")}}-Wert, gesetzt.

Wir haben fünf verschiedene Farb-Syntaxen verwendet, um zu zeigen, was möglich ist. In der realen Welt werden Sie und Ihr Team vorzugsweise eine bevorzugte Farbnotation wählen, wobei jeder, der an einem Code-Basis arbeitet, dieselbe Farb-Syntax verwendet.

## Andere Möglichkeiten, Farbe zu verwenden

CSS ist nicht die einzige Webtechnologie, die Farbe unterstützt. Weitere Beispiele sind:

- Die HTML [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht das Zeichnen von 2D-Bitmap-Grafiken in einem {{HTMLElement("canvas")}}-Element. Siehe unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial), um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht die Erstellung von Bildern mit Befehlen, die spezifische Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in eine Webseite eingebettet oder mit dem {{HTMLElement("img")}}-Element, wie jede andere Art von Bild, auf der Seite platziert werden.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zum Zeichnen von hochleistungsfähigen 2D- und 3D-Grafiken im Web. Siehe unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial), um mehr zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), einen Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige jetzt veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
