---
title: Anwenden von Farben auf HTML-Elemente mit CSS
short-title: Anwenden von Farben auf HTML-Elemente
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Ihren [HTML](/de/docs/Web/HTML)-[Elementen](/de/docs/Web/HTML/Reference/Elements) Farben hinzuzufügen, um das gewünschte Aussehen zu erzeugen. Dieser Leitfaden ist eine Einführung, wie CSS verwendet werden kann, um Farben auf HTML-Elemente anzuwenden. Dieser Leitfaden enthält [Listen der CSS-Eigenschaften, die Farbe in ihren Werten setzen](#eigenschaften,_die_farben_haben_können) und wie Farben sowohl [in Stylesheets](#farben_in_stylesheets_als_werte_angeben) als auch [auf andere Weise](#andere_möglichkeiten,_farben_zu_verwenden) verwendet werden.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus und stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten. Berücksichtigen Sie immer die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, sehen Sie sich die Referenz zum [CSS `<color>`-Datentyp](/de/docs/Web/CSS/Reference/Values/color_value) und den [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/Guides/Colors/Color_values) an.

## Eigenschaften, die Farben haben können

Auf Elementebene kann alles in HTML mit Farbe versehen werden. Schauen wir uns die verschiedenen auf der Seite gerenderten Elemente an – wie Text, Ränder usw. Wir werden Listen der CSS-Eigenschaften bereitstellen, die auf jedes dieser Elemente Farbe anwenden.

Auf einer grundlegenden Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf nahezu jedem Element verwendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seines Hintergrunds und aller Dekorationen des Textes zu bestimmen.

- {{cssxref("color")}}
  - : Die Farbe, die beim Zeichnen des Textes und aller [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (wie das Hinzufügen von Unter- oder Überthalbstrichen, Durchstreichungen usw.) verwendet wird.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}
  - : Konfiguriert einen Schattierungseffekt, der auf den Text angewendet wird. Unter den Optionen für den Schatten ist die Basisfarbe des Schattens (die dann aufgrund anderer Parameter mit dem Hintergrund verschwommen und vermischt wird). Sehen Sie [Textschlagschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows), um mehr zu erfahren.

- {{cssxref("text-decoration-color")}}
  - : Die Standardfarbe für Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) ist [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color`-Eigenschaft. Allerdings kann dieser Wert überschrieben werden, und Sie können eine andere Farbe für sie mit der `text-decoration-color`-Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}
  - : Die Farbe, die beim Rendern von Betonungssymbolen neben jedem Zeichen im Text verwendet wird. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}
  - : Die Farbe, die beim Zeichnen des {{Glossary("caret", "Cursors")}} (manchmal als Texteingabecursor bezeichnet) im Element verwendet wird. Dies ist nur in editierbaren Elementen nützlich, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder in Elementen, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit irgendeiner Art von Inhalt und hat zusätzlich zu dem, was sich in der Box befindet, einen Hintergrund und einen Rand.

- [Ränder](#borders_2)
  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Ränder einer Box festzulegen.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}
  - : Konfiguriert Schattierungseffekte innerhalb und außerhalb der Box. Unter den Optionen für jeden Schatten ist die Basisfarbe des Schattens (die dann aufgrund anderer Parameter mit einem Hintergrund verschwommen und vermischt wird).

- {{cssxref("column-rule-color")}}
  - : Die Farbe, die beim Zeichnen der Linie verwendet wird, die Textspalten bei Verwendung des [CSS-Mehrspalten-Layouts](/de/docs/Web/CSS/Guides/Multicol_layout) trennt.

- {{cssxref("outline-color")}}
  - : Die Farbe, die verwendet wird, um eine Umrandung um das Element zu zeichnen. Diese Umrandung unterscheidet sich vom Rand, da sie keinen Platz im Dokument reserviert. Umrandungen beteiligen sich nicht am [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) und überlappen andere Inhalte. Umrandungen werden im Allgemeinen als Fokusanzeiger verwendet, um anzuzeigen, welches Element aktuell den Fokus hat und Tastatureingaben erhält.

### Ränder

Jedes Element kann einen Rand haben, der um es gezeichnet wird. Ein einfacher Elementrand ist eine Linie, die um die Ränder des Inhalts des Elements gezeichnet wird. Sehen Sie [Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um mehr über die Beziehung zwischen Elementen und ihren Rändern zu erfahren, und den Artikel [Styling von Rändern mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders), um mehr darüber zu erfahren, wie Sie Styles auf Ränder anwenden können.

Sie können die {{cssxref("border")}}-Kurzschreibweise verwenden, mit der Sie alles, was den Rand betrifft, auf einmal konfigurieren können (einschließlich nicht-farbbezogener Merkmale von Rändern, wie z.B. deren [Breite](/de/docs/Web/CSS/Reference/Properties/border-width), [Stil](/de/docs/Web/CSS/Reference/Properties/border-style) (durchgehend, gestrichelt usw.):

- {{cssxref("border-color")}} Kurzschreibweise
  - : Gibt eine einzelne Farbe an, die für jede Seite des Randes eines Elements verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}
  - : Ermöglicht es Ihnen, die Farbe der entsprechenden Seite des Randes eines Elements festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}
  - : Mit diesen können Sie die Farbe festlegen, die beim Zeichnen der Ränder verwendet wird, die der Anfangs- und Endseite des Blocks am nächsten liegen, den der Rand umgibt. In einem von links nach rechts ausgerichteten Schreibmodus (wie beim Englischen) ist der Blockanfangsrand der obere Rand und der Blockendrand der untere Rand. Dies unterscheidet sich von den Inline-Anfang und -Ende, die die linken und rechten Ränder sind (entsprechend, wo jede Textzeile in der Box beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}
  - : Diese ermöglichen es Ihnen, die Ränder zu färben, die dem Anfang und Ende jeder Textzeile in der Box am nächsten sind. Welche Seite das ist, hängt von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} ab, die typischerweise (aber nicht immer) verwendet werden, um die Textausrichtung basierend auf der angezeigten Sprache anzupassen. Zum Beispiel, wenn der Text in der Box von rechts nach links rendert, wird die `border-inline-start-color` auf die rechte Seite des Randes angewendet.

## Farben in Stylesheets als Werte angeben

Nun, da Sie wissen, welche [CSS-Eigenschaften es Ihnen ermöglichen, Farben auf Elemente anzuwenden](#eigenschaften,_die_farben_haben_können), können Sie beginnen, Farben zu Ihren Webseiten hinzuzufügen. Lassen Sie uns einige Beispiele für die Verwendung von Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} betrachten. In diesem Beispiel nutzen wir mehrere zuvor erwähnte Eigenschaften, wobei das Konzept, Farben in CSS anzuwenden, dasselbe bleibt, unabhängig von der Eigenschaft.

Sehen wir uns zuerst das Ergebnis an, bevor wir uns den Code ansehen, den wir dafür brauchen:

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

Hier haben wir einen Wrapper {{HTMLElement("div")}}, der zwei untergeordnete `<div>`-Elemente enthält, jedes mit einem einzelnen untergeordneten Absatz ({{HTMLElement("p")}}). Jedes Content-`<div>` erhält ein anderes Aussehen und Gefühl.

### CSS

Schauen wir uns das CSS, das das oben gezeigte Ergebnis erzeugt, Stück für Stück an.

> [!NOTE]
> Wir verwenden in diesem Beispiel mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/Guides/Colors/Color_values), um deren Verwendung zu demonstrieren. Dies wird für Produktionscode nicht empfohlen. Verwenden Sie beim Schreiben von CSS den intuitivsten Werttyp für Sie und Ihr Team.

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

Die `.wrapper`-Klasse wird verwendet, um Styles auf das {{HTMLElement("div")}} anzuwenden, das all unsere weiteren Inhalte umschließt. Dadurch wird die Höhe des Containers mit {{cssxref("height")}} festgelegt, wobei die Breite dieses Blockelementes standardmäßig 100% seines übergeordneten Elements beträgt. Das {{cssxref("display")}} wird auf `flex` gesetzt und ein `10px`-{{cssxref("gap")}} hinzugefügt, wodurch ein flexibler Container geschaffen wird, um die Kinder nebeneinander mit einem Abstand zwischen allen untergeordneten Elementen des Containers zu platzieren. Wir verwenden {{cssxref("flex")}}, um den flexiblen Kindern zu ermöglichen, den Container auszufüllen; es wirkt sich nicht auf den flexiblen Container selbst aus.

Interessanter für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rand um den äußeren Rand des Elements zu etablieren. Dieser Rand ist eine durchgehende Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/Reference/Values/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, die verwendet wird, um die Box auf der linken Seite zu stylen, setzt die Farbe des Hintergrunds und der Umrandung fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Wertes der CSS-{{cssxref("background-color")}}-Eigenschaft auf `rgb(245 130 130)` festgelegt, wobei die {{CSSXref("color_value/rgb", "rgb()")}}-Funktionsnotation verwendet wird.
- Eine Umrandung ist für die Box definiert. Anders als die häufiger verwendete {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; es wird über dem gezeichnet, was sich außerhalb der Box des Elements befindet, anstatt Platz, wie `border` es tut, zu schaffen. Diese Umrandung ist eine durchgehende, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred`-Schlüsselworts bei der Spezifikation der Farbe.
- Beachten Sie, dass wir die Textfarbe nicht ausdrücklich einstellen. Das bedeutet, dass der Wert von {{cssxref("color")}} von dem nächstgelegenen, enthaltenden Element, das ihn definiert, vererbt wird. Standardmäßig ist das Schwarz.

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
> Wir haben die `text-decoration-*`-Styles separat hinzugefügt, weil Safari {{cssxref("text-decoration")}} nicht als Kurzschreibweise unterstützt.

Schließlich setzt die `.boxRight`-Klasse mehrere Styles auf der Box, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (mit fünf verschiedenen Möglichkeiten zur Deklaration von [Farbwerten](/de/docs/Web/CSS/Guides/Colors/Color_values)):

- Die `background-color` wird mithilfe der {{CSSXref("color_value/hwb", "hwb()")}}-Funktionsnotation festgelegt — `hwb(270deg 63% 13%)`. Dies ist eine mittelviolette Farbe.
- Die `outline` der Box wird genutzt, um anzugeben, dass die Box in einer vier Pixel dicken gestrichelten Linie umschlossen werden soll, deren Farbe ein etwas tieferes Violett mit dem sechsstelligen {{cssxref("hex-color")}} `#6e1478` ist.
- Die Vordergrundfarbe (Text) wird festgelegt, indem die {{cssxref("color")}}-Eigenschaft mithilfe der {{CSSXref("color_value/hsl", "hsl()")}}-Funktionsnotation festgelegt wird — `hsl(0deg 95% 95%)`. Dies ist eine sehr helle rosa Farbe.
- Wir fügen eine grüne Wellenlinie unter dem Text mit der {{cssxref("text-decoration")}}-Kurzschreibweise hinzu, zusammen mit der Langhand-Komponente für die Browser-Kompatibilität. Wir haben den 3-stelligen {{cssxref("hex-color")}} `#8f8` verwendet, der dem Wert `#88ff88` entspricht.
- Schließlich wird dem Text mit {{cssxref("text-shadow")}} ein leichter Schatten hinzugefügt. Sein `color`-Parameter ist auf `black` gesetzt, ein {{cssxref("named-color")}}-Wert.

Wir haben fünf verschiedene Farbsyntaxen verwendet, um zu demonstrieren, was möglich ist. In der realen Welt bevorzugen Sie und Ihr Team es, eine bevorzugte Farbnotation auszuwählen, wobei jeder, der an einer Codebasis arbeitet, dieselbe Farbsyntax verwendet.

## Andere Möglichkeiten, Farben zu verwenden

CSS ist nicht die einzige Webtechnologie, die Farben unterstützt. Andere Beispiele umfassen:

- Die HTML [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht es Ihnen, 2D-Bitmap-Grafiken in einem {{HTMLElement("canvas")}}-Element zu zeichnen. Sehen Sie unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial), um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht es Ihnen, Bilder mithilfe von Befehlen zu erstellen, die spezifische Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in eine Webseite eingebettet oder mit dem {{HTMLElement("img")}}-Element in die Seite eingebettet werden, genau wie jeder andere Bildtyp.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zum Zeichnen von leistungsstarken 2D- und 3D-Grafiken im Web. Sehen Sie unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial), um mehr zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), ein Nachfolger für WebGL für moderne GPUs.

> [!NOTE]
> Einige mittlerweile veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}}- und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp
- [CSS-Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values) Leitfaden
- [Farben weise verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
