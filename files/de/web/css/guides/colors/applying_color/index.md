---
title: Farbe auf HTML-Elemente mit CSS anwenden
short-title: Farbe anwenden
slug: Web/CSS/Guides/Colors/Applying_color
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Farbe zu Ihren [HTML](/de/docs/Web/HTML) [Elementen](/de/docs/Web/HTML/Reference/Elements) hinzuzufügen, um das gewünschte Aussehen zu erzielen. Dieser Leitfaden ist eine Einführung, wie CSS verwendet werden kann, um Farben auf HTML-Elemente anzuwenden. Dieser Leitfaden beinhaltet [Listen der CSS-Eigenschaften, die Farben in ihren Werten festlegen](#eigenschaften,_die_farben_haben_können) und wie man Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_möglichkeiten,_farbe_zu_verwenden) verwendet.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus, um sicherzustellen, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, und behalten Sie stets die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten im Hinterkopf.

Um mehr über CSS-Farben als Datentyp zu erfahren, lesen Sie die Referenz des [CSS `<color>` Datentyps](/de/docs/Web/CSS/Reference/Values/color_value) und den [CSS-Farbwerte-Leitfaden](/de/docs/Web/CSS/Guides/Colors/Color_values).

## Eigenschaften, die Farben haben können

Auf Elementebene kann allem in HTML eine Farbe zugewiesen werden. Lassen Sie uns die verschiedenen Elemente betrachten, die auf der Seite angezeigt werden — wie Text, Ränder usw. Wir bieten Listen der CSS-Eigenschaften, die Farbe auf jedes anwenden.

Auf fundamentaler Ebene definiert die Eigenschaft {{cssxref("color")}} die Vordergrundfarbe des Inhalts eines HTML-Elements und die Eigenschaft {{cssxref("background-color")}} definiert die Hintergrundfarbe des Elements. Diese können auf nahezu jedes Element angewendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, dessen Hintergrund und aller Dekorationen am Text zu bestimmen.

- {{cssxref("color")}}
  - : Die Farbe, die beim Zeichnen des Textes und der [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) verwendet wird (wie das Hinzufügen von Unter- oder Oberstrichen, Durchstreichungen usw.).

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}
  - : Konfiguriert einen Schattierungseffekt, der auf Text angewendet wird. Zu den Optionen für den Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern mit dem Hintergrund verwischt und vermischt wird). Siehe [Textschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows), um mehr zu erfahren.

- {{cssxref("text-decoration-color")}}
  - : Die Farbe der Standard-Textdekorationen (wie Unterstriche, Durchstreichungen usw.) ist [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color`-Eigenschaft. Sie können diesen Wert jedoch überschreiben und eine andere Farbe für sie mit der `text-decoration-color`-Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}
  - : Die Farbe, die beim Rendern von Hervorhebungssymbolen neben jedem Zeichen im Text verwendet wird. Diese wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}
  - : Die Farbe, die beim Zeichnen des {{Glossary("caret", "Cursors")}} (manchmal als Texteingabe-Cursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur in bearbeitbaren Elementen nützlich, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elemente, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Kästen

Jedes Element ist ein Kasten mit einer Art Inhalt und hat einen Hintergrund und eine Begrenzung zusätzlich zu dem, was der Kasten möglicherweise enthält.

- [Ränder](#borders_2)
  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, mit denen Sie die Farben der Ränder eines Kastens festlegen können.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}
  - : Konfiguriert Einfügungs- und Schatteneffekte auf dem Kasten. Zu den Optionen für jeden Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern mit jedem Hintergrund verwischt und vermischt wird).

- {{cssxref("column-rule-color")}}
  - : Die Farbe, die beim Zeichnen der Linie verwendet wird, die Spalten von Text bei Verwendung des [CSS-Mehrspaltenlayouts](/de/docs/Web/CSS/Guides/Multicol_layout) trennt.

- {{cssxref("outline-color")}}
  - : Die Farbe, die beim Zeichnen eines Umrisses um die Außenseite des Elements verwendet wird. Dieser Umriss unterscheidet sich von der Rand, da ihm im Dokument kein Platz zugewiesen wird. Umrisse nehmen nicht am [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) teil und überlappen sich mit anderen Inhalten. Umrisse werden im Allgemeinen als Fokus-Indikatoren verwendet, um anzuzeigen, welches Element aktuell den Fokus hat und Tastatureingabe-Ereignisse erhält.

### Ränder

Jedes Element kann einen Rand um sich haben. Ein einfacher Elementrand ist eine Linie, die um die Kanten des Inhalts des Elements gezeichnet wird. Siehe [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um die Beziehung zwischen Elementen und ihren Rändern zu lernen, und den Artikel [Ränder mit CSS stylen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders), um mehr darüber zu lernen, wie man Stile auf Ränder anwendet.

Sie können die {{cssxref("border")}} Kurzschreibweise verwenden, die es Ihnen ermöglicht, alles über den Rand in einem Schritt zu konfigurieren (einschließlich nicht-farbiger Merkmale von Rändern, wie [Breite](/de/docs/Web/CSS/Reference/Properties/border-width), [Stil](/de/docs/Web/CSS/Reference/Properties/border-style) (solide, gestrichelt usw.) und so weiter.

- {{cssxref("border-color")}} Kurzform
  - : Gibt eine einzelne Farbe an, die für jede Seite des Randes eines Elements verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}
  - : Ermöglicht es Ihnen, die Farbe der entsprechenden Seite des Randes des Elements festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}
  - : Damit können Sie die Farbe festlegen, die verwendet wird, um die Ränder zu zeichnen, die dem Anfang und dem Ende des Blocks, den der Rand umgibt, am nächsten sind. In einem von links nach rechts verlaufenden Schreibmodus (so wie Englisch geschrieben wird), ist der Blockanfangrand die obere Kante und das Blockende ist die untere. Dies unterscheidet sich vom Inline-Anfang und -Ende, die die linken und rechten Kanten sind (entsprechend dem, wo jede Textzeile im Kasten beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}
  - : Diese ermöglichen es Ihnen, die Kanten des Randes zu färben, die dem Anfang und Ende der Anfangslinien des Textes innerhalb des Kastens am nächsten sind. Welche Seite dies ist, variiert je nach der Verwendung der Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}, die typischerweise (aber nicht immer) verwendet werden, um die Textrichtung basierend auf der angezeigten Sprache anzupassen. Beispielsweise wird, wenn der Text des Kastens von rechts nach links gerendert wird, die `border-inline-start-color` auf die rechte Seite des Randes angewendet.

## Farben als Werte in Stylesheets angeben

Jetzt, da Sie wissen, welche [CSS-Eigenschaften es Ihnen ermöglichen, Farbe auf Elemente anzuwenden](#eigenschaften,_die_farben_haben_können), können Sie beginnen, Farben zu Ihren Websites hinzuzufügen. Lassen Sie uns einige Beispiele für die Verwendung von Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} betrachten. In diesem Beispiel verwenden wir mehrere der zuvor genannten Eigenschaften, wobei das Konzept der Anwendung von Farben in CSS unabhängig von der Eigenschaft dasselbe ist.

Schauen wir uns zuerst das Ergebnis an, bevor wir uns den Code ansehen, den wir dazu benötigen:

{{EmbedLiveSample("Specifying colors as values in stylesheets", 650, 150)}}

### HTML

Der HTML-Code, der dafür verantwortlich ist, das obige Beispiel zu erstellen, wird hier gezeigt:

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

Hier haben wir ein Wrapping-{{HTMLElement("div")}}, das zwei Kind-`<div>`s enthält, jeweils mit einem einzelnen Kind-Paragraf ({{HTMLElement("p")}}). Jedes Inhalts-`<div>` erhält ein anderes Aussehen und Gefühl.

### CSS

Lassen Sie uns uns das CSS ansehen, das das obige Ergebnis Stück für Stück erstellt.

> [!NOTE]
> Wir verwenden mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/Guides/Colors/Color_values) in diesem Beispiel, um deren Verwendung zu demonstrieren. Dies wird für Produktionscode nicht empfohlen. Wenn Sie CSS schreiben, verwenden Sie den intuitivsten Werttyp für Sie und Ihr Team.

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

Die `.wrapper`-Klasse wird verwendet, um Stile auf das {{HTMLElement("div")}} anzuwenden, das all unseren anderen Inhalt umschließt. Dies legt die Höhe des Containers unter Verwendung von {{cssxref("height")}} fest und erlaubt, dass die Breite dieses Blocklevel-Elements auf 100% seines Elternteils standardmäßig gesetzt wird. Das Setzen von {{cssxref("display")}} auf `flex` mit einem {{cssxref("gap")}} von `10px` erstellt einen Flex-Container, um die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers anzuordnen. Wir verwenden {{cssxref("flex")}}, um die Flex-Kinder in den Container wachsen zu lassen; es betrifft nicht den Flex-Container selbst.

Von größerem Interesse für unsere Diskussion hier ist die Verwendung der Eigenschaft {{cssxref("border")}}, um einen Rand um den äußeren Rand des Elements zu etablieren. Dieser Rand ist eine solide Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/Reference/Values/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, die verwendet wird, um die Box links zu stylen, legt die Hintergrundfarbe und den Umriss fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Werts der CSS-Eigenschaft {{cssxref("background-color")}} auf `rgb(245 130 130)` gesetzt, unter Verwendung der {{CSSXref("color_value/rgb", "rgb()")}} Funktionsnotation.
- Für die Box wird ein Umriss definiert. Anders als der häufiger verwendete {{cssxref("border")}} wirkt sich {{cssxref("outline")}} nicht auf das Layout aus; es wird über die Spitze dessen gezeichnet, was sich möglicherweise außerhalb des Box-Elements befindet, anstatt Platz zu schaffen, wie es `border` tut. Dieser Umriss ist eine solide, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred`-Schlüsselworts beim Angeben der Farbe.
- Beachten Sie, dass wir die Textfarbe nicht explizit setzen. Das bedeutet, dass der Wert von {{cssxref("color")}} von dem nächsten umgebenden Element, das es definiert, geerbt wird. Standardmäßig ist das Schwarz.

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
> Wir haben die `text-decoration-*` Stile separat aufgenommen, weil Safari {{cssxref("text-decoration")}} nicht als Kurzform-Eigenschaft unterstützt.

Schließlich setzt die `.boxRight`-Klasse mehrere Stile auf die Box, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedenen Möglichkeiten, [Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values) anzugeben):

- Die `background-color` wird mit der Notation {{CSSXref("color_value/hwb", "hwb()")}} gesetzt — `hwb(270deg 63% 13%)`. Dies ist eine mittlere lila Farbe.
- Der `outline` der Box wird verwendet, um anzugeben, dass die Box von einer vier Pixel dicken gestrichelten Linie umgeben sein soll, dessen Farbe ein etwas tieferes Lila ist, unter Verwendung des sechsstelligen {{cssxref("hex-color")}} `#6e1478`.
- Die Vordergrundfarbe (Text) wird festgelegt, indem die Eigenschaft {{cssxref("color")}} unter Verwendung der Notation {{CSSXref("color_value/hsl", "hsl()")}} angegeben wird — `hsl(0deg 95% 95%)`. Dies ist eine sehr helle rosa Farbe.
- Wir fügen mit {{cssxref("text-decoration")}} eine grüne gewellte Linie unter dem Text hinzu, zusammen mit der Langformkomponente für Browser-Kompatibilität. Wir verwendeten die 3-stellige {{cssxref("hex-color")}} `#8f8`, was dem Äquivalent von `#88ff88` entspricht.
- Schließlich wird mit {{cssxref("text-shadow")}} ein kleiner Schatten dem Text hinzugefügt. Sein `color`-Parameter ist auf `black`, einem {{cssxref("named-color")}}-Wert, gesetzt.

Wir haben fünf verschiedene Farbsynaxen verwendet, um zu zeigen, was möglich ist. In der realen Welt werden Sie und Ihr Team vorzugsweise eine bevorzugte Farbnotation wählen, wobei jeder, der an einem Code-Bereich arbeitet, dieselbe Farbsyntax verwendet.

## Andere Möglichkeiten, Farbe zu verwenden

CSS ist nicht die einzige Web-Technologie, die Farbe unterstützt. Andere Beispiele umfassen:

- Die HTML [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht das Zeichnen von 2D-Pixelgrafiken in einem {{HTMLElement("canvas")}}-Element. Siehe unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial), um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht das Erstellen von Bildern mit Befehlen, die spezifische Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in eine Webseite eingebettet oder über das {{HTMLElement("img")}}-Element platziert werden, genau wie jeder andere Bildtyp.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API für das Zeichnen von Hochleistungs-2D- und 3D-Grafiken im Web. Siehe unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial), um mehr zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), ein Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige mittlerweile veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp
- [CSS-Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values) Leitfaden
- [Farben weise verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
