---
title: Anwenden von Farben auf HTML-Elemente mit CSS
short-title: Anwenden von Farben auf HTML-Elemente
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Ihren [HTML](/de/docs/Web/HTML)-[Elementen](/de/docs/Web/HTML/Element) Farbe hinzuzufügen, um das gewünschte Aussehen zu erzielen. Dieser Leitfaden ist eine Einführung, wie CSS verwendet werden kann, um Farben auf HTML-Elemente anzuwenden. Dieser Leitfaden enthält [Listen der CSS-Eigenschaften, die Farbe in ihren Werten festlegen](#eigenschaften,_die_farbe_haben_können) und wie Sie Farben [in Stylesheets](#spezifizieren_von_farben_als_werte_in_stylesheets) und [auf andere Weise](#andere_möglichkeiten,_farbe_zu_verwenden) verwenden können.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus, um sicherzustellen, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, und berücksichtigen Sie immer die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, lesen Sie die Referenzen zum [CSS-`<color>`-Datentyp](/de/docs/Web/CSS/color_value) und den [CSS-Farbwerte-Leitfaden](/de/docs/Web/CSS/CSS_colors/Color_values).

## Eigenschaften, die Farbe haben können

Auf Elementebene kann alles in HTML Farbe erhalten. Schauen wir uns die verschiedenen Elemente an, die auf der Seite gerendert werden — wie Text, Ränder usw. Wir werden Listen der CSS-Eigenschaften bereitstellen, die Farbe auf jedes anwenden.

Auf fundamentaler Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf fast jedes Element angewendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seines Hintergrunds und aller Verzierungen auf dem Text zu bestimmen.

- {{cssxref("color")}}

  - : Die Farbe, die beim Zeichnen des Textes und aller [Textdekorationen](/de/docs/Learn/CSS/Styling_text/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (wie die Hinzufügung von Unter- oder Oberstrichen, Durchstreichungen usw.) verwendet wird.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}

  - : Konfiguriert einen Schatteneffekt, der auf den Text angewendet wird. Zu den Optionen für den Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern unscharf gemacht und mit dem Hintergrund vermischt wird). Sehen Sie sich [Textschlagschatten](/de/docs/Learn/CSS/Styling_text/Fundamentals#text_drop_shadows) an, um mehr zu erfahren.

- {{cssxref("text-decoration-color")}}

  - : Die Standard-Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) haben die Farbe [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color`-Eigenschaft. Sie können diesen Wert jedoch überschreiben und eine andere Farbe für sie mit der `text-decoration-color`-Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}

  - : Die Farbe, die beim Rendern von Betonungssymbolen neben jedem Zeichen im Text verwendet wird. Diese wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}

  - : Die Farbe, die beim Zeichnen der {{Glossary("caret", "Einfügemarke")}} (manchmal als Texteingabecursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur nützlich in bearbeitbaren Elementen wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elementen, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit irgendeiner Art von Inhalt und hat einen Hintergrund und einen Rahmen zusätzlich zu den Inhalten, die die Box möglicherweise hat.

- [Ränder](#borders_2)

  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Ränder einer Box festzulegen.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}

  - : Konfiguriert Schatten nach innen und Effekte abwerfender Schatteneffekte auf die Box. Unter den Optionen für jeden Schatten ist die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern unscharf gemacht und mit einem Hintergrund vermischt wird).

- {{cssxref("column-rule-color")}}

  - : Die Farbe, die beim Zeichnen der Linie zwischen Textspalten verwendet wird, wenn ein [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) verwendet wird.

- {{cssxref("outline-color")}}

  - : Die Farbe, die beim Zeichnen einer Umrisslinie um die Außenseite des Elements verwendet wird. Dieser Umriss unterscheidet sich vom Rahmen dadurch, dass dafür im Dokument kein Platz reserviert wird. Umrisse beteiligen sich nicht am [Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) und überlappen andere Inhalte. Umrisse werden im Allgemeinen als Fokusindikatoren verwendet, um anzuzeigen, welches Element derzeit fokussiert ist und Tastatureingabeereignisse empfängt.

### Ränder

Jedes Element kann einen um seine Kanten gezeichneten [Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) haben. Ein grundlegender Elementrahmen ist eine Linie, die um die Kanten des Inhalts des Elements gezeichnet wird. Sehen Sie sich [Das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) an, um mehr über die Beziehung zwischen Elementen und ihren Rändern zu erfahren, und den Artikel [Styling borders using CSS](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders), um mehr darüber zu erfahren, wie Stile auf Ränder angewendet werden.

Sie können die {{cssxref("border")}}-Kurzschreibmethode verwenden, mit der Sie alles über den Rahmen in einem Schritt konfigurieren können (einschließlich nicht farbbezogener Merkmale von Rahmen, wie die [Breite](/de/docs/Web/CSS/border-width), [Stil](/de/docs/Web/CSS/border-style) (vollständig, gestrichelt usw.) und so weiter.

- {{cssxref("border-color")}} Kurzform

  - : Gibt eine einzige Farbe an, die für jede Seite des Rahmen des Elements verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}} und {{cssxref("border-bottom-color")}}

  - : Ermöglicht es Ihnen, die Farbe der entsprechenden Seite des Rahmen des Elements festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}

  - : Mit diesen können Sie die Farbe einstellen, die verwendet wird, um die Ränder zu zeichnen, die dem Anfang und dem Ende des Blocks am nächsten liegen, den der Rahmen umgibt. In einem von links nach rechts Schreibmodus (wie die Art wie Englisch geschrieben wird) ist der Blockstart-Rahmen die obere Kante und das Blockende ist die untere Kante. Dies unterscheidet sich vom Inline-Anfang und Ende, die die linken und rechten Kanten sind (entsprechend dem Punkt, an dem jede Textzeile in der Box beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}

  - : Diese ermöglichen es Ihnen, die Ränder der Kante zu färben, die dem Beginn und dem Ende der Textzeilen innerhalb der Box am nächsten ist. Welche Seite das ist, variiert je nach den {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}-Eigenschaften, die typischerweise (aber nicht immer) verwendet werden, um die Textrichtung basierend auf der angezeigten Sprache anzupassen. Beispielsweise wird, wenn der Text der Box von rechts nach links gerendert wird, die `border-inline-start-color` auf die rechte Seite des Rahmens angewendet.

## Spezifizieren von Farben als Werte in Stylesheets

Nun, da Sie wissen, welche [CSS-Eigenschaften es Ihnen ermöglichen, Farbe auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie beginnen, Farben zu Ihren Webseiten hinzuzufügen. Lassen Sie uns einige Beispiele für die Verwendung von Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} ansehen. In diesem Beispiel verwenden wir mehrere zuvor erwähnte Eigenschaften, wobei das Konzept, Farben in CSS anzuwenden, unabhängig von der Eigenschaft dasselbe ist.

Schauen wir uns zuerst das Ergebnis an, bevor wir uns den Code ansehen, den wir dafür benötigen:

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

Hier haben wir einen `div`, der zwei untergeordnete `<div>`-Elemente enthält, von denen jedes einen einzelnen untergeordneten Absatz ({{HTMLElement("p")}}) enthält. Jede Inhalts`<div>` erhält ein unterschiedliches Aussehen und Gefühl.

### CSS

Sehen wir uns das CSS an, das das oben gezeigte Ergebnis Stück für Stück erstellt.

> [!NOTE]
> Wir verwenden in diesem Beispiel mehrere [unterschiedliche CSS-Farbwerttypen](/de/docs/Web/CSS/CSS_colors/Color_values), um deren Verwendung zu demonstrieren. Dies wird nicht für Produktionscode empfohlen. Beim Schreiben von CSS verwenden Sie den für Sie und Ihr Team am intuitivsten Wertetyp.

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

Die `.wrapper`-Klasse wird verwendet, um Stile auf das {{HTMLElement("div")}} anzuwenden, das unseren gesamten anderen Inhalt einschließt. Dies legt die Höhe des Containers mithilfe von {{cssxref("height")}} fest und erlaubt der Breite dieses Blocklevel-Elements, standardmäßig 100 % seines Elternteils zu betragen. Das Setzen des {{cssxref("display")}} auf `flex` und das Hinzufügen eines `10px`-{{cssxref("gap")}} erzeugt einen Flex-Container, um die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers zu gestalten. Wir verwenden {{cssxref("flex")}}, um die flexiblen Kinder wachsen zu lassen, um den Container zu füllen; es beeinflusst nicht den Flex-Container selbst.

Interessanter für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rahmen um die Außenseite des Elements zu erstellen. Dieser Rahmen ist eine solide Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, die verwendet wird, um die Box auf der linken Seite zu gestalten, legt die Farbe des Hintergrunds und des Umrisses fest:

- Die Hintergrundfarbe der Box wird geändert, indem der Wert der CSS-{{cssxref("background-color")}}-Eigenschaft auf `rgb(245 130 130)` gesetzt wird, unter Verwendung der {{CSSXref("color_value/rgb", "rgb()")}}-Funktionsnotation.
- Ein Umriss wird für die Box definiert. Im Gegensatz zum häufiger verwendeten {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; es zeichnet über das, was sich möglicherweise außerhalb der Box des Elements befindet, anstatt wie `border` Platz zu machen. Dieser Umriss ist eine solide, dunkelrote Linie mit einer Dicke von zwei Pixeln. Beachten Sie die Verwendung des `darkred`-Schlüsselworts beim Festlegen der Farbe.
- Beachten Sie, dass wir die Textfarbe nicht explizit festlegen. Das bedeutet, dass der Wert von {{cssxref("color")}} vom nächsten enthaltenen Element geerbt wird, das ihn definiert. Standardmäßig ist das Schwarz.

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
> Wir haben die `text-decoration-*`-Stile getrennt hinzugefügt, da Safari {{cssxref("text-decoration")}} als Kurzform nicht unterstützt.

Schließlich legt die `.boxRight`-Klasse mehrere Stile auf die Box fest, die rechts gezeichnet wird. Danach werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedenen Möglichkeiten zur Deklaration von [Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)):

- Die `background-color` wird mit der {{CSSXref("color_value/hwb", "hwb()")}}-Funktionsnotation festgelegt — `hwb(270deg 63% 13%)`. Dies ist eine mittlere Purpurfarbe.
- Der Umriss der Box wird verwendet, um anzugeben, dass die Box in einer vier Pixel dicken gestrichelten Linie eingeschlossen sein soll, deren Farbe ein etwas tieferes Purpur mit dem sechsstelligen {{cssxref("hex-color")}} `#6e1478` ist.
- Die Vordergrundfarbe (Textfarbe) wird durch Setzen der {{cssxref("color")}}-Eigenschaft mit der {{CSSXref("color_value/hsl", "hsl()")}}-Funktionsnotation festgelegt — `hsl(0deg 100% 100%)`. Dies ist eine von vielen Möglichkeiten, die Farbe Weiß zu spezifizieren.
- Wir fügen eine grüne, gewellte Linie unter dem Text mit der {{cssxref("text-decoration")}}-Kurzform hinzu, zusammen mit der Langformkomponente für Browser-Kompatibilität. Wir haben den 3-stelligen {{CSSXref("hex-color")}} `#8f8` verwendet, der dem `#88ff88` entspricht.
- Schließlich wird ein wenig Schatten mit {{cssxref("text-shadow")}} auf den Text gelegt. Sein `color`-Parameter ist auf `black` gesetzt, ein {{cssxref("named-color")}}-Wert.

Wir haben fünf verschiedene Farbsyntaxe verwendet, um zu demonstrieren, was möglich ist. In der realen Welt wählen Sie und Ihr Team vorzugsweise eine bevorzugte Farbnomenklatur, wobei jeder auf einer Codebasis mit derselben Farbsyntax arbeitet.

## Andere Möglichkeiten, Farbe zu verwenden

CSS ist nicht die einzige Web-Technologie, die Farbe unterstützt. Andere Beispiele umfassen:

- Die HTML-[Canvas-API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht es Ihnen, 2D-Bitmap-Grafiken in einem {{HTMLElement("canvas")}}-Element zu zeichnen. Sehen Sie sich unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) an, um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht es Ihnen, Bilder mithilfe von Befehlen zu erstellen, die bestimmte Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in eine Webseite eingebettet oder mithilfe des {{HTMLElement("img")}}-Elements genauso platziert werden wie jede andere Art von Bild.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zum Zeichnen von hochleistungsfähigen 2D- und 3D-Grafiken im Internet. Sehen Sie sich unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) an, um mehr zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), einen Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige jetzt veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [CSS-Farbwerte-Leitfaden](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Grafiken im Web](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#other_graphics_on_the_web)
