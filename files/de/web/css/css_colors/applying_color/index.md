---
title: Farbe auf HTML-Elemente mit CSS anwenden
short-title: Farbe auf HTML-Elemente anwenden
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Farbe zu Ihren [HTML](/de/docs/Web/HTML) [Elementen](/de/docs/Web/HTML/Reference/Elements) hinzuzufügen, um das gewünschte Aussehen zu erzielen. Dieser Leitfaden ist eine Einführung, wie CSS verwendet werden kann, um Farben auf HTML-Elemente anzuwenden. Dieser Leitfaden enthält [Listen von CSS-Eigenschaften, die Farbe in ihren Werten setzen](#eigenschaften,_die_farbe_haben_können) und wie man Farben sowohl [in Stylesheets](#spezifizieren_von_farben_als_werte_in_stylesheets) als auch [auf andere Arten](#andere_möglichkeiten_zur_verwendung_von_farbe) verwendet.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus, stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, und berücksichtigen Sie immer die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, sehen Sie sich die Referenz zum [CSS `<color>` Datentyp](/de/docs/Web/CSS/color_value) und den [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values) an.

## Eigenschaften, die Farbe haben können

Auf Elementebene kann in HTML alles Farbe erhalten. Lassen Sie uns die verschiedenen Elemente betrachten, die auf der Seite gerendert werden — wie Text, Ränder usw. Wir werden Listen der CSS-Eigenschaften bereitstellen, die Farbe auf jedes anwenden.

Auf einer grundlegenden Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf nahezu jedes Element angewendet werden.

### Text

Immer wenn ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seinen Hintergrund und jegliche Dekorationen auf dem Text zu bestimmen.

- {{cssxref("color")}}
  - : Die Farbe, die beim Zeichnen des Textes und aller [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) verwendet wird (wie das Hinzufügen von Unter- oder Überstrichen, Durchstreichlinien usw.).

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}
  - : Konfiguriert einen Schatteneffekt, der auf den Text angewendet wird. Zu den Optionen für den Schatten gehört die Basisfarbe des Schattens (die dann basierend auf den anderen Parametern mit dem Hintergrund verschwommen und vermischt wird). Weitere Informationen finden Sie unter [Textschlagschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows).

- {{cssxref("text-decoration-color")}}
  - : Die Standardfarben der Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) ist [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color`-Eigenschaft. Sie können diesen Wert jedoch überschreiben und mit der `text-decoration-color`-Eigenschaft eine andere Farbe verwenden.

- {{cssxref("text-emphasis-color")}}
  - : Die Farbe, die verwendet wird, wenn Hervorhebungssymbole neben jedem Zeichen im Text gerendert werden. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}
  - : Die Farbe, die beim Zeichnen des {{Glossary("caret", "Cursors")}} (manchmal als Texteingabecursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur in editierbaren Elementen nützlich, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elemente, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit einer Art Inhalt und hat einen Hintergrund und einen Rand zusätzlich zu dem, was die Box auch enthalten mag.

- [Ränder](#borders_2)
  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, mit denen Sie die Farben der Ränder einer Box festlegen können.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}
  - : Konfiguriert Einsetzschatten- und Schlagschatteneffekte auf der Box. Zu den Optionen für jeden Schatten gehört die Basisfarbe des Schattens (die dann basierend auf den anderen Parametern mit dem Hintergrund verschwommen und vermischt wird).

- {{cssxref("column-rule-color")}}
  - : Die Farbe, die beim Zeichnen der Linie verwendet wird, die Textspalten trennt, wenn das [CSS-Multisäulen-Layout](/de/docs/Web/CSS/CSS_multicol_layout) verwendet wird.

- {{cssxref("outline-color")}}
  - : Die Farbe, die beim Zeichnen einer Umrandung um die Außenseite des Elements verwendet wird. Diese Umrandung unterscheidet sich vom Rand darin, dass ihr im Dokument kein Platz zugewiesen wird. Umrandungen nehmen nicht am [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) teil, sondern überlagern andere Inhalte. Umrandungen werden im Allgemeinen als Fokusindikatoren verwendet, um anzuzeigen, welches Element derzeit den Fokus hat und Tastatureingaben empfängt.

### Ränder

Jedes Element kann einen um sich herum gezeichneten Rand haben. Ein einfacher Elementrand ist eine Linie, die um die Kanten des Inhalts des Elements gezeichnet wird. Siehe [Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um mehr über die Beziehung zwischen Elementen und ihren Rändern zu erfahren, und den Artikel [Ränder mit CSS stylen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders), um mehr über das Anwenden von Styles auf Ränder zu erfahren.

Sie können die Kurzschreibweise für die Eigenschaft {{cssxref("border")}} verwenden, die es Ihnen ermöglicht, alles über den Rand in einem Schritt zu konfigurieren (einschließlich nicht-farblicher Merkmale von Rändern, wie ihre [Breite](/de/docs/Web/CSS/border-width), [Stil](/de/docs/Web/CSS/border-style) (solid, gestrichelt usw.), und so weiter).

- {{cssxref("border-color")}} Kurzschreibweise
  - : Gibt eine einzige Farbe an, die für jede Seite des Randes des Elements verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}
  - : Ermöglicht das Setzen der Farbe der entsprechenden Seite des Randes des Elements.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}
  - : Damit können Sie die Farbe festlegen, die verwendet wird, um die Ränder zu zeichnen, die am nächsten zum Anfang und Ende des Blocks sind, den der Rand umgibt. In einem Links-nach-Rechts-Schreibmodus (wie er in Englisch geschrieben wird) ist der Startblockrand die obere Kante und das Blockende ist die untere Kante. Dies unterscheidet sich von den Inline-Start- und Endkanten, die die linken und rechten Ränder sind (entsprechend dort, wo jede Textzeile in der Box beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}
  - : Diese lassen Sie die Ränder einfärben, die am nächsten zum Anfang und Ende der Linien im Textkasten sind. Welche Seite dies ist, hängt von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} ab, die typischerweise (aber nicht immer) verwendet werden, um die Textrichtung basierend auf der Sprache anzupassen, die angezeigt wird. Wenn zum Beispiel der Text der Box von rechts nach links gerendert wird, wird die `border-inline-start-color` auf die rechte Seite des Randes angewendet.

## Spezifizieren von Farben als Werte in Stylesheets

Nun, da Sie wissen, welche [CSS-Eigenschaften das Anwenden von Farben auf Elemente ermöglichen](#eigenschaften,_die_farbe_haben_können), können Sie anfangen, Farben zu Ihren Websites hinzuzufügen. Lassen Sie uns einige Beispiele für die Verwendung von Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} betrachten. In diesem Beispiel verwenden wir mehrere zuvor erwähnte Eigenschaften, wobei das Konzept des Farbauftragens in CSS dasselbe bleibt, egal welche Eigenschaft.

Lassen Sie uns zuerst das Ergebnis betrachten, bevor wir uns den benötigten Code ansehen:

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

Hier haben wir ein Wrapper-{{HTMLElement("div")}}, das zwei Kind-`<div>`s enthält, von denen jedes einen einzelnen Kind-Absatz ({{HTMLElement("p")}}) hat. Jedes Inhalts-`<div>` erhält ein anderes Aussehen.

### CSS

Lassen Sie uns das CSS betrachten, das das obige Ergebnis Stück für Stück erstellt.

> [!NOTE]
> Wir verwenden in diesem Beispiel mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/CSS_colors/Color_values), um deren Verwendung zu demonstrieren. Dies wird für Produktionscode nicht empfohlen. Beim Schreiben von CSS verwenden Sie den am intuitivsten Wertetyp für Sie und Ihr Team.

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

Die `.wrapper`-Klasse wird verwendet, um die Styles auf das {{HTMLElement("div")}} zuzuweisen, das unseren gesamten anderen Inhalt umschließt. Dies legt die Höhe des Containers unter Verwendung von {{cssxref("height")}} fest, wodurch die Breite dieses Block-Elementes standardmäßig 100% seines Elternteils beträgt. Mit der Einstellung von {{cssxref("display")}} auf `flex` und einem `10px` {{cssxref("gap")}} wird ein Flex-Container erstellt, um die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers anzuordnen. Wir verwenden {{cssxref("flex")}}, um die Flex-Kinder wachsen zu lassen, um den Container zu füllen. Es betrifft nicht den Flex-Container selbst.

Von größerem Interesse für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rand um den äußeren Rand des Elements zu schaffen. Dieser Rand ist eine durchgezogene Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir ein linkes und ein rechtes Kästchen.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, die verwendet wird, um das Kästchen auf der linken Seite zu stylen, legt die Farbe des Hintergrunds und der Umrandung fest:

- Die Hintergrundfarbe des Kästchens wird durch Ändern des Wertes der CSS-Eigenschaft {{cssxref("background-color")}} auf `rgb(245 130 130)`, unter Verwendung der {{CSSXref("color_value/rgb", "rgb()")}}-Funktionsnotation, eingestellt.
- Eine Umrandung wird für das Kästchen definiert. Im Gegensatz zum häufiger verwendeten {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; es zeichnet sich über alles, was sich zufällig außerhalb des Box des Elements befindet im Gegensatz dazu, wie `border` Platz macht. Diese Umrandung ist eine durchgezogene, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des Schlüsselwortes `darkred`, wenn Sie die Farbe angeben.
- Beachten Sie, dass wir die Textfarbe nicht explizit einstellen. Das bedeutet, dass der Wert von {{cssxref("color")}} vom nächsten enthaltenen Element, das sie definiert, geerbt wird. Standardmäßig ist das Schwarz.

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
> Wir haben die `text-decoration-*`-Styles separat eingefügt, da Safari {{cssxref("text-decoration")}} nicht als Kurzschreibweise unterstützt.

Schließlich setzt die `.boxRight`-Klasse verschiedene Styles auf dem Kästchen, das rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedenen Möglichkeiten zur Deklaration von [Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)):

- Die `background-color` wird mithilfe der {{CSSXref("color_value/hwb", "hwb()")}}-Funktionsnotation eingestellt — `hwb(270deg 63% 13%)`. Dies ist eine mittelviolette Farbe.
- Die `outline` des Kästchens wird verwendet, um anzugeben, dass das Kästchen in einer vier Pixel dicken gestrichelten Linie eingeschlossen sein soll, deren Farbe ein etwas tieferes Violett ist, mithilfe des sechsstelligen {{cssxref("hex-color")}} `#6e1478`.
- Die Vordergrundfarbe (Textfarbe) wird durch das Setzen der {{cssxref("color")}}-Eigenschaft unter Verwendung der {{CSSXref("color_value/hsl", "hsl()")}}-Funktionsnotation — `hsl(0deg 100% 100%)`, angegeben. Dies ist eine von vielen Möglichkeiten, die Farbe Weiß zu spezifizieren.
- Wir fügen eine grüne gewellte Linie unter dem Text mit der {{cssxref("text-decoration")}}-Kurzform hinzu, zusammen mit der Langformkomponente für die Browser-Kompatibilität. Wir haben die 3-stellige {{cssxref("hex-color")}} `#8f8` verwendet, was dem `#88ff88` entspricht.
- Zum Schluss wird mit der Verwendung von {{cssxref("text-shadow")}} ein kleiner Schatten auf den Text hinzugefügt. Sein `color`-Parameter ist auf `black` gesetzt, ein {{cssxref("named-color")}}-Wert.

Wir haben fünf verschiedene Farbsyntaxen verwendet, um zu demonstrieren, was möglich ist. In der realen Welt sollten Sie und Ihr Team jedoch bevorzugt eine bevorzugte Farbschreibweise wählen, bei der alle, die an einer Codebasis arbeiten, dieselbe Farbsyntax verwenden.

## Andere Möglichkeiten zur Verwendung von Farbe

CSS ist nicht die einzige Web-Technologie, die Farbe unterstützt. Andere Beispiele umfassen:

- Die HTML [Canvas-API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht das Zeichnen von 2D-Bitmap-Grafiken in einem {{HTMLElement("canvas")}}-Element. Siehe unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial), um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht Ihnen das Erstellen von Bildern durch Befehle, die bestimmte Formen, Muster und Linien zeichnen. SVG-Befehle sind im XML-Format und können direkt in eine Webseite eingebettet oder mit dem {{HTMLElement("img")}}-Element auf der Seite platziert werden, genau wie jede andere Art von Bild.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES-basierende API zum Zeichnen von hochleistungsfähigen 2D- und 3D-Grafiken im Web. Siehe unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial), um mehr zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), einen Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige nun veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
