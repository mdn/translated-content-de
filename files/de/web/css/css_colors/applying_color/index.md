---
title: Farbe auf HTML-Elemente mit CSS anwenden
short-title: Farbe auf HTML-Elemente anwenden
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, um Farbe zu Ihren [HTML](/de/docs/Web/HTML)-[Elementen](/de/docs/Web/HTML/Element) hinzuzufügen, um das gewünschte Aussehen zu erzielen. Dieser Leitfaden ist eine Einführung, wie CSS verwendet werden kann, um HTML-Elementen Farbe zu verleihen. Dieser Leitfaden enthält [Listen der CSS-Eigenschaften, die Farbe in ihren Werten setzen](#eigenschaften,_die_farbe_haben_können) und wie Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_möglichkeiten,_farbe_zu_verwenden) verwendet werden können.

> [!NOTE]
> Es ist wichtig, [Farben klug zu verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus, stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, und behalten Sie stets die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten im Auge.

Um mehr über CSS-Farben als Datentyp zu erfahren, sehen Sie sich die Referenz zum [CSS `<color>` Datentyp](/de/docs/Web/CSS/color_value) und den [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values) an.

## Eigenschaften, die Farbe haben können

Auf Elementebene kann in HTML alles mit Farbe versehen werden. Schauen wir uns die verschiedenen Elemente an, die auf der Seite gerendert werden — wie Text, Ränder usw. Wir werden Listen der CSS-Eigenschaften bereitstellen, die Farbe auf jedes anwenden.

Auf grundlegender Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf nahezu jedes Element angewendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seines Hintergrunds und jeglicher Dekorationen auf dem Text zu bestimmen.

- {{cssxref("color")}}

  - : Die Farbe, die beim Zeichnen des Textes und jeglicher [Textdekorationen](/de/docs/Learn/CSS/Styling_text/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) verwendet wird (wie das Hinzufügen von Unter- oder Überstrichen, Durchstreichlinien usw.).

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}

  - : Konfiguriert einen Schatteneffekt, der auf den Text angewendet wird. Zu den Optionen für den Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern mit dem Hintergrund verschwommen und gemischt wird). Siehe [Textschlagschatten](/de/docs/Learn/CSS/Styling_text/Fundamentals#text_drop_shadows), um mehr zu erfahren.

- {{cssxref("text-decoration-color")}}

  - : Die Standardfarbe der Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) ist [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color`-Eigenschaft. Sie können diesen Wert jedoch überschreiben und eine andere Farbe für sie mit der `text-decoration-color`-Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}

  - : Die Farbe, die beim Rendern von Betonungssymbolen neben jedem Zeichen im Text verwendet wird. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}

  - : Die Farbe, die beim Zeichnen der {{Glossary("caret", "Einfügemarke")}} (manchmal als Texteingabemarke bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur in Elementen nützlich, die bearbeitbar sind, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elementen, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit einer Art von Inhalt und hat zusätzlich zu den Inhalten der Box einen Hintergrund und einen Rahmen.

- [Ränder](#borders_2)

  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Ränder einer Box festzulegen.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}

  - : Konfiguriert eingelassene Schatten- und Abwurfschatteneffekte auf der Box. Zu den Optionen für jeden Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern mit dem Hintergrund verschwommen und gemischt wird).

- {{cssxref("column-rule-color")}}

  - : Die Farbe, die beim Zeichnen der Linie verwendet wird, die Spalten des Textes trennt, wenn das [CSS-Multispalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) verwendet wird.

- {{cssxref("outline-color")}}

  - : Die Farbe, die beim Zeichnen einer Umrisslinie um das äußere Element verwendet wird. Dieser Umriss unterscheidet sich vom Rahmen darin, dass er keinen Platz im Dokument beansprucht. Umrisse nehmen nicht am [Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) teil, sondern überlappen andere Inhalte. Umrisse werden im Allgemeinen als Fokusanzeigen verwendet, die anzeigen, welches Element derzeit fokussiert ist und Tastatureingabeereignisse empfängt.

### Ränder

Jedes Element kann einen [Rand](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) um sich herum haben. Ein grundlegender Elementrand ist eine Linie, die um die Ränder des Inhalts des Elements gezeichnet wird. Lesen Sie [Das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model), um mehr über die Beziehung zwischen Elementen und ihren Rändern zu erfahren, und den Artikel [Styling borders using CSS](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders), um mehr über das Anwenden von Stil auf Ränder zu lernen.

Sie können die {{cssxref("border")}}-Kurzform-Eigenschaft verwenden, die es Ihnen ermöglicht, alles über den Rand auf einmal zu konfigurieren (einschließlich nicht-farbiger Merkmale von Rändern, wie ihre [Breite](/de/docs/Web/CSS/border-width), [Stil](/de/docs/Web/CSS/border-style) (durchgezogen, gestrichelt usw.) und so weiter.

- {{cssxref("border-color")}} Kurzform

  - : Gibt eine einzelne Farbe an, die für jede Seite des Elementrands verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}

  - : Ermöglicht es Ihnen, die Farbe der entsprechenden Seite des Elementrands festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}

  - : Damit können Sie die Farbe festlegen, die verwendet wird, um die Ränder zu zeichnen, die am nächsten zum Anfang und Ende des Blocks liegen, den der Rand umgibt. In einem von links nach rechts gerichteten Schreibmodus (wie der im Englischen verwendete) ist der Anfangsrand der oberen Kante und das Ende der unteren Kante. Dies unterscheidet sich vom Inline-Anfang und -Ende, die die linke und rechte Kante sind (entsprechend, wo jede Textzeile im Kasten beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}

  - : Damit können Sie die Ränder des Randes färben, die am nächsten zum Beginn und zum Ende der Textzeilen innerhalb der Box liegen. Welche Seite das sein wird, hängt von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} ab, die typischerweise (aber nicht immer) verwendet werden, um die Schreibrichtung des Textes basierend auf der angezeigten Sprache anzupassen. Zum Beispiel, wenn der Text des Kästchens von rechts nach links dargestellt wird, wird die `border-inline-start-color`-Eigenschaft auf die rechte Seite des Randes angewendet.

## Farben als Werte in Stylesheets angeben

Jetzt, da Sie wissen, welche [CSS-Eigenschaften es ermöglichen, Farbe auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie damit beginnen, Farben zu Ihren Websites hinzuzufügen. Schauen wir uns einige Beispiele an, in denen Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} verwendet wird. In diesem Beispiel verwenden wir mehrere der zuvor genannten Eigenschaften, wobei das Konzept der Anwendung von Farben in CSS unabhängig von der Eigenschaft dasselbe ist.

Schauen wir uns zuerst das Ergebnis an, bevor wir uns den Code ansehen, den wir dafür erstellen müssen:

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

Hier haben wir einen Wrapper-{{HTMLElement("div")}}, der zwei Kinder-`<div>`-Elemente enthält, von denen jedes einen einzelnen Kind-Absatz ({{HTMLElement("p")}}) enthält. Jedem Inhalts-`<div>` wird ein anderes Aussehen und Gefühl verliehen.

### CSS

Schauen wir uns das CSS an, das das oben gezeigte Ergebnis Stück für Stück erstellt.

> [!NOTE]
> Wir verwenden in diesem Beispiel mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/CSS_colors/Color_values), um ihre Verwendung zu demonstrieren. Dies wird nicht für Produktivcode empfohlen. Beim Schreiben von CSS verwenden Sie den für Sie und Ihr Team am intuitivsten Werttyp.

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

Die Klasse `.wrapper` wird verwendet, um Stile auf das {{HTMLElement("div")}}-Element anzuwenden, das unseren gesamten anderen Inhalt umschließt. Dies legt die Höhe des Containers mit {{cssxref("height")}} fest, sodass die Breite dieses Blockebenen-Elements standardmäßig 100% seines Elternteils beträgt. Durch das Setzen von {{cssxref("display")}} auf `flex` und das Hinzufügen eines `10px` {{cssxref("gap")}} erstellen Sie einen Flex-Container, der die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers anordnet. Wir verwenden {{cssxref("flex")}}, um die Flex-Kinder wachsen zu lassen, um den Container zu füllen; das beeinflusst nicht den Flex-Container selbst.

Von mehr Interesse für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rahmen um den äußeren Rand des Elements zu erstellen. Dieser Rahmen ist eine durchgezogene Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die Klasse `.boxLeft`, die verwendet wird, um die Box auf der linken Seite zu stylen, legt die Hintergrundfarbe und die Umrisslinie fest:

- Die Hintergrundfarbe der Box wird festgelegt, indem der Wert der CSS-Eigenschaft {{cssxref("background-color")}} auf `rgb(245 130 130)` geändert wird, unter Verwendung der {{CSSXref("color_value/rgb", "rgb()")}}-Funktion.
- Ein Umriss wird für die Box definiert. Im Gegensatz zum häufiger verwendeten {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; er überdeckt alles, was sich möglicherweise außerhalb der Box des Elements befindet, anstatt Platz zu schaffen, wie dies beim `border` der Fall ist. Dieser Umriss ist eine solide, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred`-Schlüsselworts, wenn Sie die Farbe angeben.
- Beachten Sie, dass wir die Textfarbe nicht explizit festlegen. Das bedeutet, dass der Wert von {{cssxref("color")}} vom nächsten umschließenden Element geerbt wird, das es definiert. Standardmäßig ist das schwarz.

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
> Wir haben die `text-decoration-*`-Stile separat aufgenommen, da Safari {{cssxref("text-decoration")}} nicht als Kurzform unterstützt.

Abschließend setzt die Klasse `.boxRight` mehrere Stile auf die Box, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedenen Möglichkeiten der Deklaration von [Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)):

- Die `background-color` wird unter Verwendung der {{CSSXref("color_value/hwb", "hwb()")}}-Funktion festgelegt — `hwb(270deg 63% 13%)`. Dies ist eine mittlere violette Farbe.
- Der Umriss der Box wird verwendet, um anzugeben, dass die Box von einer vier Pixel dicken gestrichelten Linie umgeben sein soll, deren Farbe ein etwas tieferes Violett mit dem sechsstelligen {{cssxref("hex-color")}} `#6e1478` ist.
- Die Vordergrund-(Text-)farbe wird durch Setzen der {{cssxref("color")}}-Eigenschaft unter Verwendung der {{CSSXref("color_value/hsl", "hsl()")}}-Funktion festgelegt — `hsl(0deg 100% 100%)`. Dies ist eine der vielen Möglichkeiten, die Farbe Weiß anzugeben.
- Wir fügen mit der {{cssxref("text-decoration")}}-Kurzform und den Longhand-Komponenten für Browser-Kompatibilität eine grüne Wellenlinie unter dem Text hinzu. Wir verwendeten den 3-stelligen {{cssxref("hex-color")}} `#8f8`, der dem `#88ff88` entspricht.
- Schließlich wird dem Text mit {{cssxref("text-shadow")}} ein leichter Schatten hinzugefügt. Sein `color`-Parameter ist auf `black` gesetzt, ein {{cssxref("named-color")}}-Wert.

Wir haben fünf verschiedene Farbsyntaxen verwendet, um zu demonstrieren, was möglich ist. In der realen Welt werden Sie und Ihr Team vorzugsweise eine bevorzugte Farbdarstellung wählen, wobei alle, die an einer Code-Basis arbeiten, dieselbe Farbsyntax verwenden.

## Andere Möglichkeiten, Farbe zu verwenden

CSS ist nicht die einzige Webtechnologie, die Farbe unterstützt. Weitere Beispiele sind:

- Die [Canvas API](/de/docs/Web/API/Canvas_API) von HTML
  - : Ermöglicht das Zeichnen von 2D-Bitmap-Grafiken in einem {{HTMLElement("canvas")}}-Element. Sehen Sie sich unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) an, um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht das Erstellen von Bildern mit Befehlen, die bestimmte Formen, Muster und Linien zeichnen. SVG-Befehle sind im XML-Format und können direkt in eine Webseite eingebettet oder mit dem {{HTMLElement("img")}}-Element eingebunden werden, genau wie jede andere Art von Bild.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zum Zeichnen von hochleistungsfähigen 2D- und 3D-Grafiken im Web. Sehen Sie sich unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) an, um mehr darüber zu erfahren. Auch [WebGPU](/de/docs/Web/API/WebGPU_API), ein Nachfolger von WebGL für moderne GPUs, ist erwähnenswert.

> [!NOTE]
> Einige inzwischen veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farben klug verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Grafiken im Web](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#other_graphics_on_the_web)
