---
title: Anwenden von Farben auf HTML-Elemente mit CSS
short-title: Anwenden von Farben
slug: Web/CSS/Guides/Colors/Applying_color
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, um Ihren [HTML](/de/docs/Web/HTML)-[Elementen](/de/docs/Web/HTML/Reference/Elements) Farbe hinzuzufügen und das gewünschte Aussehen zu erzielen. Dieser Leitfaden ist eine Einführung, die zeigt, wie CSS verwendet werden kann, um HTML-Elemente farblich zu gestalten. Dieser Leitfaden enthält [Listen der CSS-Eigenschaften, die Farbe in ihren Werten festlegen](#eigenschaften,_die_farbe_haben_können) und wie Farben sowohl [in Stylesheets](#spezifizieren_von_farben_als_werte_in_stylesheets) als auch [auf andere Weise](#andere_möglichkeiten_zur_verwendung_von_farbe) verwendet werden können.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely). Wählen Sie immer geeignete Farben, stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, und berücksichtigen Sie stets die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, siehe die Referenz zum [CSS `<color>`-Datentyp](/de/docs/Web/CSS/Reference/Values/color_value) und den [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/Guides/Colors/Color_values).

## Eigenschaften, die Farbe haben können

Auf Elementebene kann alles in HTML farblich gestaltet werden. Schauen wir uns die verschiedenen Elemente an, die auf der Seite gerendert werden — wie Text, Ränder etc. Wir geben Listen mit den CSS-Eigenschaften an, die Farbe auf jedes anwenden.

Auf einer grundlegenden Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf fast jedes Element angewendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seines Hintergrunds und seiner Verzierungen zu bestimmen.

- {{cssxref("color")}}
  - : Die zu verwendende Farbe beim Zeichnen des Textes und aller [Textverzierungen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (wie das Hinzufügen von Unter- oder Überstrichen, Durchstreichlinien usw.).

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}
  - : Konfiguriert einen Schatteneffekt für den Text. Zu den Optionen für den Schatten gehört die Basisfarbe des Schattens (die dann basierend auf anderen Parametern mit dem Hintergrund verwischt und gemischt wird). Siehe [Textschlagschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows), um mehr zu erfahren.

- {{cssxref("text-decoration-color")}}
  - : Die Standardfarbe der Textverzierungen (wie Unterstriche, Durchstreichungen usw.) ist [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword). Dieses Schlüsselwort stellt den aktuellen Wert der `color`-Eigenschaft dar. Sie können diesen Wert jedoch überschreiben und eine andere Farbe mit der `text-decoration-color`-Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}
  - : Die zu verwendende Farbe beim Rendern von Betonungssymbolen neben jedem Zeichen im Text. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}
  - : Die zu verwendende Farbe beim Zeichnen des {{Glossary("caret", "Cursors")}} (manchmal auch als Texteingabecursor bezeichnet) innerhalb des Elements. Dies ist nur in bearbeitbaren Elementen nützlich, z. B. {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elemente, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit einer Art Inhalt und hat zusätzlich zu jeglichem Inhalt, den die Box haben mag, einen Hintergrund und eine Umrandung.

- [Ränder](#borders_2)
  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Umrandungen einer Box festzulegen.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet werden soll, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}
  - : Konfiguriert eingedrückte Schatten- und Schlagschatteneffekte auf der Box. Zu den Optionen für jeden Schatten gehört die Basisfarbe des Schattens (die dann basierend auf anderen Parametern mit jedem Hintergrund verwischt und gemischt wird).

- {{cssxref("column-rule-color")}}
  - : Die zu verwendende Farbe beim Zeichnen der Linie, die Textspalten bei Verwendung des [CSS-Multispalten-Layouts](/de/docs/Web/CSS/Guides/Multicol_layout) trennt.

- {{cssxref("outline-color")}}
  - : Die zu verwendende Farbe beim Zeichnen einer Umrandung um die Außenseite des Elements. Diese Umrandung unterscheidet sich von der Randlinie dadurch, dass dafür im Dokument kein Platz reserviert wird. Umrandungen nehmen nicht am [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) teil und überlappen sich mit anderem Inhalt. Umrandungen werden im Allgemeinen als Fokusindikatoren verwendet, um anzuzeigen, welches Element derzeit den Fokus hat und Tastatureingaben erhält.

### Ränder

Jedes Element kann eine Umrandung um sich herum gezeichnet haben. Eine grundlegende Elementumrandung ist eine Linie, die um die Ränder des Inhalts des Elements gezogen wird. Siehe [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um mehr über die Beziehung zwischen Elementen und ihren Umrandungen zu erfahren, und den Artikel [Ränder mit CSS gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders), um mehr darüber zu erfahren, wie man Ränder stilisiert.

Sie können die {{cssxref("border")}}-Kurzschreibweise verwenden, die es Ihnen ermöglicht, alles über die Randlinieneigenschaften in einem Schritt zu konfigurieren (einschließlich nicht-farblicher Merkmale der Ränder, wie ihre [Breite](/de/docs/Web/CSS/Reference/Properties/border-width), [Stil](/de/docs/Web/CSS/Reference/Properties/border-style) (solid, gepunktet usw.) und so weiter.

- {{cssxref("border-color")}} Kurzform
  - : Gibt eine einzelne Farbe an, die für alle Seiten der Umrandung des Elements verwendet wird.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}} und {{cssxref("border-bottom-color")}}
  - : Ermöglicht es Ihnen, die Farbe der entsprechenden Seite der Umrandung des Elements festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}
  - : Damit können Sie die Farbe festlegen, die zum Zeichnen der Ränder verwendet wird, die dem Anfang und Ende des Blocks, den die Umrandung umgibt, am nächsten sind. In einer von links nach rechts gerichteten Textausrichtung (wie im Englischen geschrieben) ist der Blockanfang oben und der Blockende unten. Dies unterscheidet sich vom Inline-Anfang und -Ende, die die linken und rechten Kanten sind (entsprechend dem Beginn und Ende jeder Textzeile im Feld).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}
  - : Diese ermöglichen es Ihnen, die Ränder zu färben, die dem Beginn und dem Ende des Textbeginns in den Zeilen innerhalb des Feldes am nächsten sind. Welche Seite dies ist, hängt von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} ab, die typischerweise (aber nicht immer) verwendet werden, um die Textausrichtung basierend auf der angezeigten Sprache zu ändern. Zum Beispiel, wenn der Text der Box von rechts nach links gerendert wird, dann wird `border-inline-start-color` auf die rechte Seite des Rands angewendet.

## Spezifizieren von Farben als Werte in Stylesheets

Jetzt, da Sie wissen, welche [CSS-Eigenschaften Ihnen ermöglichen, Farbe auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie beginnen, Farben zu Ihren Websites hinzuzufügen. Schauen wir uns einige Beispiele für die Verwendung von Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} an. In diesem Beispiel verwenden wir mehrere zuvor erwähnte Eigenschaften, wobei das Konzept des Farbauftrags in CSS unabhängig von der Eigenschaft dasselbe ist.

Schauen wir uns zuerst das Ergebnis an, bevor wir uns den Code ansehen, den wir dafür benötigen:

{{EmbedLiveSample("Specifying colors as values in stylesheets", 650, 150)}}

### HTML

Das HTML, das für das oben gezeigte Beispiel verantwortlich ist, wird hier gezeigt:

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

Hier haben wir einen Wrapper-{{HTMLElement("div")}}, der zwei Kinder-`<div>`s enthält, jeweils mit einem einzelnen Kind-Absatz ({{HTMLElement("p")}}). Jedes Inhalts-`<div>` hat ein anderes Aussehen.

### CSS

Schauen wir uns das CSS an, das das obige Ergebnis erstellt, Stück für Stück.

> [!NOTE]
> Wir verwenden in diesem Beispiel mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/Guides/Colors/Color_values), um deren Verwendung zu demonstrieren. Dies wird für Produktionscode nicht empfohlen. Verwenden Sie beim Schreiben von CSS den für Sie und Ihr Team intuitivsten Wertetyp.

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

Die `.wrapper`-Klasse wird verwendet, um Stile auf das {{HTMLElement("div")}} anzuwenden, das all unsere anderen Inhalte umgibt. Dies legt die Höhe des Containers unter Verwendung von {{cssxref("height")}} fest und ermöglicht es, dass die Breite dieses Blocklevel-Elements standardmäßig auf 100 % seiner Eltern eingestellt ist. Das Setzen von {{cssxref("display")}} auf `flex` und das Hinzufügen eines `10px`-{{cssxref("gap")}} erstellt einen Flex-Container, um die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers anzuordnen. Wir verwenden {{cssxref("flex")}}, um die Flex-Kinder wachsen zu lassen, um den Container zu füllen; es betrifft nicht den Flex-Container selbst.

Von mehr Interesse für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um eine Umrandung um die Außenkante des Elements zu etablieren. Diese Umrandung ist eine durchgehende Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/Reference/Values/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, die verwendet wird, um die Box links zu stylen, legt die Farbe des Hintergrunds und der Kontur fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Wertes der CSS-{{cssxref("background-color")}}-Eigenschaft auf `rgb(245 130 130)` festgelegt, unter Verwendung der {{CSSXref("color_value/rgb", "rgb()")}}-Funktionsnotation.
- Eine Umrandung ist für die Box definiert. Anders als das häufiger verwendete {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; es überzeichnet einfach alles, was sich außerhalb der Box des Elements befinden mag, anstatt wie `border` Platz zu schaffen. Diese Umrandung ist eine durchgehende, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred`-Schlüsselworts, wenn Sie die Farbe angeben.
- Beachten Sie, dass wir die Textfarbe nicht explizit festlegen. Das bedeutet, dass der Wert von {{cssxref("color")}} vom nächstgelegenen enthaltenen Element, das ihn definiert, geerbt wird. Standardmäßig ist das schwarz.

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
> Wir haben die `text-decoration-*`-Stile separat aufgenommen, weil Safari {{cssxref("text-decoration")}} als Kurzform nicht unterstützt.

Schließlich setzt die `.boxRight`-Klasse mehrere Stile auf die Box, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedenen Wegen, [Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values) zu deklarieren):

- Der `background-color` wird unter Verwendung der {{CSSXref("color_value/hwb", "hwb()")}}-Funktionsnotation eingestellt — `hwb(270deg 63% 13%)`. Dies ist eine mittelviolette Farbe.
- Die `outline` der Box wird verwendet, um anzugeben, dass die Box in einer vier Pixel dicken gestrichelten Linie eingeschlossen werden soll, deren Farbe ein etwas dunkleres Violett mit dem sechsstelligen {{cssxref("hex-color")}} `#6e1478` ist.
- Die Vordergrundfarbe (Text) wird durch das Setzen der {{cssxref("color")}}-Eigenschaft unter Verwendung der {{CSSXref("color_value/hsl", "hsl()")}}-Funktionsnotation festgelegt — `hsl(0deg 95% 95%)`. Dies ist eine sehr leichte rosafarbene Farbe.
- Wir fügen eine grüne wellige Linie unter den Text mit der {{cssxref("text-decoration")}}-Kurzform hinzu, zusammen mit der Langformkomponente für die Browser-Kompatibilität. Wir verwendeten den dreistelligen {{cssxref("hex-color")}} `#8f8`, was dem `#88ff88` entspricht.
- Schließlich wird ein kleiner Schatten zum Text mit {{cssxref("text-shadow")}} hinzugefügt. Sein `color`-Parameter ist auf `black` gesetzt, ein {{cssxref("named-color")}}-Wert.

Wir haben fünf verschiedene Farben-Syntaxen verwendet, um zu demonstrieren, was möglich ist. In der realen Welt werden Sie und Ihr Team vorzugsweise eine bevorzugte Farbnotation wählen, wobei jeder, der an einem Code-Basis arbeitet, dieselbe Farbsyntax verwendet.

## Andere Möglichkeiten zur Verwendung von Farbe

CSS ist nicht die einzige Web-Technologie, die Farben unterstützt. Andere Beispiele sind:

- Die HTML-[Canvas-API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht es Ihnen, 2D-Grafiken in einem {{HTMLElement("canvas")}}-Element zu zeichnen. Siehe unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial), um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht es Ihnen, Bilder zu erstellen, indem Sie Befehle verwenden, die bestimmte Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in eine Webseite eingebettet oder über das {{HTMLElement("img")}}-Element auf der Seite platziert werden, genau wie jeder andere Bildtyp.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zur Darstellung von leistungsstarken 2D- und 3D-Grafiken im Web. Siehe unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial), um mehr zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), einen Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige mittlerweile veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} sowie drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- Datentyp [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)
- [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/Guides/Colors/Color_values)
- [Farben weise verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors)
- [Zeichnen von Grafiken](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
