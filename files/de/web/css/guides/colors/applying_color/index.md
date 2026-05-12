---
title: Anwenden von Farbe auf HTML-Elemente mit CSS
short-title: Anwenden von Farbe
slug: Web/CSS/Guides/Colors/Applying_color
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Ihren [HTML](/de/docs/Web/HTML) [Elementen](/de/docs/Web/HTML/Reference/Elements) Farbe hinzuzufügen, um das gewünschte Aussehen zu erzielen. Dieser Leitfaden ist ein Einführungskurs, wie CSS verwendet werden kann, um Farben auf HTML-Elemente anzuwenden. Dieser Leitfaden umfasst [Listen der CSS-Eigenschaften, die in ihren Werten Farbe festlegen](#eigenschaften,_die_farbe_haben_können) und wie Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_möglichkeiten,_farbe_zu_verwenden) verwendet werden können.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus und stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, und berücksichtigen Sie stets die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, sehen Sie sich die Referenz zum [CSS `<color>` Datentyp](/de/docs/Web/CSS/Reference/Values/color_value) und den [CSS-Farbwerte-Leitfaden](/de/docs/Web/CSS/Guides/Colors/Color_values) an.

## Eigenschaften, die Farbe haben können

Auf Elementebene kann allem in HTML Farbe zugewiesen werden. Lassen Sie uns die verschiedenen auf der Seite gerenderten Elemente betrachten — wie Text, Rahmen usw. Wir werden Listen der CSS-Eigenschaften bereitstellen, die Farbe auf jedes Element anwenden.

Auf fundamentaler Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf nahezu jedes Element angewendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seines Hintergrunds und jeglicher Dekorationen des Textes zu bestimmen.

- {{cssxref("color")}}
  - : Die Farbe, die beim Zeichnen des Textes und jeglicher [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (wie das Hinzufügen von Unter- oder Überstrichen, Durchstreichungslinien usw.) verwendet wird.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}
  - : Konfiguriert einen Schatteneffekt, der auf den Text angewendet wird. Zu den Optionen für den Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern verschwommen und mit dem Hintergrund gemischt wird). Weitere Informationen finden Sie unter [Textschlagschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows).

- {{cssxref("text-decoration-color")}}
  - : Die Standardfarbe für Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) ist [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color`-Eigenschaft. Dennoch können Sie diesen Wert überschreiben und mit der `text-decoration-color`-Eigenschaft eine andere Farbe festlegen.

- {{cssxref("text-emphasis-color")}}
  - : Die Farbe zur Darstellung von Hervorhebungssymbolen neben jedem Zeichen im Text. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}
  - : Die Farbe, die bei der Darstellung der {{Glossary("caret", "Einfügemarke")}} (manchmal auch als Textcursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur in bearbeitbaren Elementen nützlich, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder in Elementen, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit irgendeiner Art von Inhalt und hat einen Hintergrund und einen Rahmen zusätzlich zu den Inhalten, die die Box haben könnte.

- [Rahmen](#borders_2)
  - : Siehe den Abschnitt [Rahmen](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Ränder einer Box festzulegen.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet werden soll, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}
  - : Konfiguriert Schatteneffekte an der Innenseite und herabfallende Schatten auf der Box. Zu den Optionen für jeden Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern verschwommen und mit dem Hintergrund gemischt wird).

- {{cssxref("column-rule-color")}}
  - : Die Farbe, die beim Zeichnen der Linie verwendet wird, die Textspalten trennt, wenn [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout) verwendet wird.

- {{cssxref("outline-color")}}
  - : Die Farbe, die beim Zeichnen eines Umrisses um die Außenseite des Elements verwendet wird. Dieser Umriss unterscheidet sich vom Rahmen dadurch, dass ihm im Dokument kein Platz zugewiesen wird. Umrisse nehmen nicht an dem [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) teil und überlappen andere Inhalte. Umrisse werden im Allgemeinen als Fokusindikatoren verwendet, die anzeigen, welches Element derzeit den Fokus hat und Tastatureingaben erhalten wird.

### Rahmen

Jedes Element kann einen Rahmen haben, der darum gezeichnet wird. Ein grundlegender Elementrahmen ist eine Linie, die um die Kanten des Inhalts des Elements gezeichnet wird. Um mehr über die Beziehung zwischen Elementen und ihren Rahmen zu erfahren, siehe [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model). Mehr darüber, wie man Rahmenstile anwendet, erfahren Sie in dem Artikel [Rahmen mit CSS gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders).

Sie können die {{cssxref("border")}} Kurzschreibweise verwenden, die es Ihnen ermöglicht, alles über den Rahmen auf einmal zu konfigurieren (einschließlich nicht-farbbezogener Merkmale von Rahmen, wie seine [Breite](/de/docs/Web/CSS/Reference/Properties/border-width), [Stil](/de/docs/Web/CSS/Reference/Properties/border-style) (solid, gestrichelt, usw.) und so weiter.

- {{cssxref("border-color")}} Kurzschreibweise
  - : Gibt eine einzige Farbe an, die für jede Seite des Rahmen des Elements verwendet wird.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}
  - : Ermöglicht es, die Farbe der entsprechenden Seite des Rahmen des Elements festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}
  - : Damit können Sie die Farbe festlegen, die verwendet wird, um die Rahmen zu zeichnen, die dem Anfang und Ende des Blocks am nächsten sind, den der Rahmen umgibt. In einem von links nach rechts Schreibrichtungsmodus (wie im Englischen) ist der Startblockrahmen die obere Kante und das Ende des Blocks die untere. Dies unterscheidet sich von den inline Start- und Endrahmen, die die linke und rechte Kante sind (entsprechend dem, wo jede Textzeile in der Box beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}
  - : Diese ermöglichen es Ihnen, die Kanten des Rahmens zu färben, die dem Anfang und Ende der Textzeilen in der Box am nächsten liegen. Welche Seite dies ist, hängt von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} ab, die typischerweise (aber nicht immer) verwendet werden, um die Textausrichtung basierend auf der angezeigten Sprache anzupassen. Wenn zum Beispiel der Text der Box von rechts nach links gerendert wird, wird die `border-inline-start-color` auf die rechte Seite des Rahmens angewendet.

## Farben als Werte in Stylesheets angeben

Nachdem Sie nun wissen, welche [CSS-Eigenschaften es Ihnen ermöglichen, Farbe auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie beginnen, Farben auf Ihre Webseiten hinzuzufügen. Lassen Sie uns einige Beispiele für die Verwendung von Farbe in einem {{Glossary("style_sheet", "Stylesheet")}} betrachten. In diesem Beispiel verwenden wir mehrere zuvor erwähnte Eigenschaften, wobei das Konzept des Anwendens von Farben in CSS dasselbe ist, unabhängig von der Eigenschaft.

Schauen wir uns zuerst das Ergebnis an, bevor wir uns dem erforderlichen Code widmen:

{{EmbedLiveSample("Specifying colors as values in stylesheets", 650, 150)}}

### HTML

Das HTML, das für das obige Beispiel verantwortlich ist, wird hier gezeigt:

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

Hier haben wir einen Wrapper {{HTMLElement("div")}}, der zwei untergeordnete `<div>`s enthält, von denen jedes ein einziges untergeordnetes Paragraphen-Element ({{HTMLElement("p")}}) enthält. Jedes Inhalts-`<div>` erhält einen anderen Look und Feel.

### CSS

Lassen Sie uns die CSS betrachten, die das obige Ergebnis schrittweise erstellt.

> [!NOTE]
> Wir verwenden in diesem Beispiel mehrere [unterschiedliche CSS-Farbwerttypen](/de/docs/Web/CSS/Guides/Colors/Color_values), um deren Verwendung zu demonstrieren. Dies wird für den Produktivcode nicht empfohlen. Beim Schreiben von CSS sollten Sie den intuitivsten Werttyp für Sie und Ihr Team verwenden.

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

Die `.wrapper`-Klasse wird verwendet, um Stile dem {{HTMLElement("div")}} zuzuweisen, der alle unsere anderen Inhalte umschließt. Dies legt die Höhe des Containers mithilfe von {{cssxref("height")}} fest und ermöglicht es, dass die Breite dieses Block-Level-Elements standardmäßig 100 % seiner Eltern beträgt. Das Setzen von {{cssxref("display")}} auf `flex` und das Hinzufügen eines `10px` {{cssxref("gap")}} erzeugt einen Flexcontainer, um die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers anzuordnen. Wir verwenden {{cssxref("flex")}}, um den Flex-Kindern zu erlauben, den Container zu füllen; es beeinflusst nicht den Flexcontainer selbst.

Interessanter für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rand um den äußeren Rand des Elements zu etablieren. Dieser Rand ist eine solide Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/Reference/Values/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, die verwendet wird, um die Box auf der linken Seite zu gestalten, legt die Farbe des Hintergrunds und des Umrisses fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Werts der CSS-{{cssxref("background-color")}}-Eigenschaft auf `rgb(245 130 130)` festgelegt, unter Verwendung der {{CSSXref("color_value/rgb", "rgb()")}} Funktionsnotation.
- Ein Umriss wird für die Box definiert. Im Gegensatz zu dem häufiger verwendeten {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; es wird über allem gezeichnet, was sich außerhalb der Box des Elements befinden mag, anstatt Platz zu beanspruchen, wie es `border` tut. Dieser Umriss ist eine solide, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred` Schlüsselworts beim Angeben der Farbe.
- Beachten Sie, dass wir die Textfarbe nicht explizit festlegen. Das bedeutet, dass der Wert der {{cssxref("color")}}-Eigenschaft vom nächstgelegenen enthaltenen Element, das sie definiert, übernommen wird. Standardmäßig ist das schwarz.

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
> Wir haben die `text-decoration-*`-Stile separat beigefügt, weil Safari {{cssxref("text-decoration")}} nicht als Kurzschreibweise unterstützt.

Zuletzt setzt die `.boxRight`-Klasse mehrere Stile auf die Box, die rechts gezeichnet wird. Die folgenden Farben werden dann (unter Verwendung von fünf verschiedenen Arten der Deklaration von [Farbwerten](/de/docs/Web/CSS/Guides/Colors/Color_values)) festgelegt:

- Die `background-color` wird unter Verwendung der {{CSSXref("color_value/hwb", "hwb()")}} Funktionsnotation eingestellt — `hwb(270deg 63% 13%)`. Dies ist eine mittlere violette Farbe.
- Der `outline` der Box wird verwendet, um anzugeben, dass die Box von einer vier Pixel dicken gestrichelten Linie umgeben sein sollte, deren Farbe ein etwas tieferes Violett ist, unter Verwendung des sechsstelligen {{cssxref("hex-color")}} `#6e1478`.
- Die Vordergrundfarbe (Text) wird durch das Setzen der {{cssxref("color")}}-Eigenschaft unter Verwendung der {{CSSXref("color_value/hsl", "hsl()")}} Funktionsnotation festgelegt — `hsl(0deg 95% 95%)`. Dies ist eine sehr hellrosa Farbe.
- Wir fügen eine grüne gewellte Linie unter dem Text hinzu, {{cssxref("text-decoration")}} mit dem Kürzel, zusammen mit der Langhandschrift für die Browser-Kompatibilität. Wir verwenden den 3-stelligen {{cssxref("hex-color")}} `#8f8`, was dem `#88ff88` entspricht.
- Schließlich wird dem Text ein kleiner Schatten mit {{cssxref("text-shadow")}} hinzugefügt. Sein `color`-Parameter wird auf `black`, ein {{cssxref("named-color")}}-Wert, eingestellt.

Wir haben fünf verschiedene Farbsyntaxen verwendet, um zu demonstrieren, was möglich ist. In der realen Welt werden Sie und Ihr Team vorzugsweise eine bevorzugte Farbschreibweise wählen, bei der jeder, der an einer Codebasis arbeitet, dieselbe Farbsyntax verwendet.

## Andere Möglichkeiten, Farbe zu verwenden

CSS ist nicht die einzige Webtechnologie, die Farbe unterstützt. Andere Beispiele sind:

- Die HTML [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht das Zeichnen von 2D-Bitmap-Grafiken in einem {{HTMLElement("canvas")}}-Element. Sehen Sie sich unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) an, um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht die Erstellung von Bildern mithilfe von Befehlen, die bestimmte Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in eine Webseite eingebettet oder mithilfe des {{HTMLElement("img")}}-Elements in die Seite eingefügt werden, wie jedes andere Bild auch.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zum Zeichnen von hochleistungsfähigen 2D- und 3D-Grafiken im Web. Um mehr zu erfahren, sehen Sie sich unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) an. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), die Nachfolge-API von WebGL für moderne GPUs.

> [!NOTE]
> Einige mittlerweile veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}} Werte.

## Siehe auch

- {{cssxref("&lt;color&gt;")}} Datentyp
- [CSS-Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values) Leitfaden
- [Farben weise verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
