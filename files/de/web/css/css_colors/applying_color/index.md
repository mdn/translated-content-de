---
title: Anwenden von Farbe auf HTML-Elemente mit CSS
short-title: Anwenden von Farbe auf HTML-Elemente
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Ihren [HTML](/de/docs/Web/HTML)-[Elementen](/de/docs/Web/HTML/Reference/Elements) Farbe hinzuzufügen, um das gewünschte Aussehen zu erzielen. Dieser Leitfaden ist eine Einführung, wie CSS verwendet werden kann, um Farben auf HTML-Elemente anzuwenden. Dieser Leitfaden enthält [Listen der CSS-Eigenschaften, die in ihrem Wert Farbe setzen](#eigenschaften,_die_farbe_haben_können) und wie Sie Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_festlegen) als auch [auf andere Weise](#andere_methoden_zur_verwendung_von_farbe) verwenden können.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie stets geeignete Farben aus und stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, und berücksichtigen Sie stets die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, lesen Sie den [CSS-`<color>`-Datentyp](/de/docs/Web/CSS/color_value) und den [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values).

## Eigenschaften, die Farbe haben können

Auf Elementebene kann alles in HTML mit Farbe versehen werden. Schauen wir uns die verschiedenen Elemente an, die auf der Seite gerendert werden - wie Text, Ränder usw. Wir werden Listen der CSS-Eigenschaften bereitstellen, die Farbe auf jedes anwenden.

Auf fundamentaler Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf nahezu jedes Element angewendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seines Hintergrunds und jeglicher Dekorationen darauf zu bestimmen.

- {{cssxref("color")}}
  - : Die Farbe, die beim Zeichnen des Textes und jeglicher [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (wie das Hinzufügen von Unter- oder Oberstrichen, Durchstreichlinien usw.) verwendet wird.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}
  - : Konfiguriert einen Schatteneffekt, der auf den Text angewendet wird. Unter den Optionen für den Schatten ist die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern unscharf und mit dem Hintergrund vermischt wird). Weitere Informationen finden Sie unter [Textschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows).

- {{cssxref("text-decoration-color")}}
  - : Die Standardfarben für Textdekorationen (wie Unterstriche, Durchstreichungen usw.) ist [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Schlüsselwort steht für den aktuellen Wert der `color`-Eigenschaft. Sie können diesen Wert jedoch überschreiben und eine andere Farbe mit der `text-decoration-color`-Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}
  - : Die Farbe, die beim Rendern von Betonungssymbolen neben jedem Zeichen im Text verwendet wird. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}
  - : Die Farbe, die beim Zeichnen des {{Glossary("caret", "Caret")}} (manchmal auch als Texteingabecursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur in bearbeitbaren Elementen nützlich, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elementen, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit einem bestimmten Inhalt und hat einen Hintergrund und eine Grenze zusätzlich zu den Inhalten, die die Box möglicherweise hat.

- [Ränder](#borders_2)
  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Ränder einer Box festzulegen.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}
  - : Konfiguriert Ein- und Ausblend-Schatteneffekte auf der Box. Unter den Optionen für jeden Schatten ist die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern mit jedem Hintergrund verwischt und vermischt wird).

- {{cssxref("column-rule-color")}}
  - : Die Farbe, die beim Zeichnen der Trennlinie zwischen Textspalten beim Verwenden des [CSS-Multispalten-Layouts](/de/docs/Web/CSS/CSS_multicol_layout) verwendet wird.

- {{cssxref("outline-color")}}
  - : Die Farbe, die verwendet wird, wenn eine Kontur um die Außenseite des Elements gezeichnet wird. Diese Kontur unterscheidet sich vom Rand darin, dass sie keinen Platz im Dokument einnimmt. Konturen nehmen nicht am [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) teil und überlappen andere Inhalte. Konturen werden generell als Fokusindikatoren verwendet, um anzuzeigen, welches Element derzeit den Fokus hat und Eingaben über die Tastatur empfängt.

### Ränder

Jedes Element kann von einem Rand umgeben sein. Ein grundlegender Elementrand ist eine Linie, die um die Kanten des Inhalts des Elements gezeichnet wird. Siehe [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um mehr über die Beziehung zwischen Elementen und ihren Rändern zu erfahren, und den Artikel [Ränder mit CSS gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders), um mehr über die Anwendung von Stilen auf Ränder zu erfahren.

Sie können die {{cssxref("border")}}-Kurzschreibweise verwenden, die es Ihnen ermöglicht, alles über den Rand in einem Zug zu konfigurieren (einschließlich nichtfarbiger Merkmale des Randes, wie seine [Breite](/de/docs/Web/CSS/border-width), [Stil](/de/docs/Web/CSS/border-style) (solide, gestrichelt usw.) und so weiter).

- {{cssxref("border-color")}} Kurzschreibweise
  - : Gibt eine einzelne Farbe an, die für jede Seite des Elements verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}
  - : Erlaubt es Ihnen, die Farbe der entsprechenden Seite des Randes des Elements einzustellen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}
  - : Mit diesen können Sie die Farbe einstellen, die zum Zeichnen der Ränder verwendet wird, die dem Anfang und Ende des Blocks am nächsten liegen. In einem von links nach rechts gerichteten Schreibmodus (wie es in Englisch der Fall ist) ist der Blockanfangsrand die obere Kante und das Blockende die untere. Dies unterscheidet sich vom Inline-Anfang und -Ende, die die linken und rechten Kanten sind (entsprechend dem Anfang und Ende jeder Textzeile im Element).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}
  - : Diese ermöglichen es Ihnen, die Ränder zu färben, die dem Anfang und Ende der Textzeilen innerhalb der Box am nächsten liegen. Welche Seite das ist, hängt von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} ab, die typischerweise (aber nicht immer) verwendet werden, um die Textausrichtung basierend auf der angezeigten Sprache anzupassen. Wenn der Text der Box beispielsweise von rechts nach links gerendert wird, wird die `border-inline-start-color` auf die rechte Seite des Randes angewendet.

## Farben als Werte in Stylesheets festlegen

Jetzt, da Sie wissen, welche [CSS-Eigenschaften es Ihnen ermöglichen, Farbe auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie anfangen, Farben zu Ihren Webseiten hinzuzufügen. Schauen wir uns einige Beispiele für die Verwendung von Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheet")}} an. In diesem Beispiel verwenden wir mehrere zuvor erwähnte Eigenschaften, wobei das Konzept der Anwendung von Farben in CSS unabhängig von der Eigenschaft gleich bleibt.

Schauen wir uns zuerst das Ergebnis an, bevor wir den Code ansehen, den wir zum Erstellen benötigen:

{{EmbedLiveSample("Specifying colors as values in stylesheets", 650, 150)}}

### HTML

Das HTML, das für die Erstellung des obigen Beispiels verantwortlich ist, wird hier angezeigt:

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

Hier haben wir ein umschließendes {{HTMLElement("div")}}, das zwei Kind-`<div>`s enthält, jeweils mit einem einzelnen Kind-Absatz ({{HTMLElement("p")}}). Jedes Inhalts-`<div>` erhält ein unterschiedliches Aussehen.

### CSS

Schauen wir uns das CSS an, das das obige Ergebnis stückweise erstellt.

> [!NOTE]
> In diesem Beispiel verwenden wir mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/CSS_colors/Color_values), um deren Verwendung zu demonstrieren. Dies wird für Produktionscode nicht empfohlen. Beim Schreiben von CSS verwenden Sie den intuitivsten Werttyp für sich und Ihr Team.

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

Die Klasse `.wrapper` wird verwendet, um Stile auf das {{HTMLElement("div")}} anzuwenden, das unseren gesamten restlichen Inhalt umschließt. Dies legt die Höhe des Containers mit {{cssxref("height")}} fest, wobei die Breite dieses Block-Level-Elements standardmäßig 100% seines Elternteils beträgt. Das Setzen von {{cssxref("display")}} auf `flex` und das Hinzufügen eines `10px` {{cssxref("gap")}} erstellt einen Flex-Container, um die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers zu platzieren. Wir verwenden {{cssxref("flex")}}, um die Flex-Kinder wachsen zu lassen, um den Container zu füllen; es beeinflusst nicht den Flex-Container selbst.

Von größerem Interesse für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rand um den Außenrand des Elements zu etablieren. Dieser Rand ist eine solide Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die Klasse `.boxLeft`, die verwendet wird, um die Box auf der linken Seite zu stylen, legt die Farbe des Hintergrunds und der Kontur fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Wertes der CSS-{{cssxref("background-color")}}-Eigenschaft auf `rgb(245 130 130)` gesetzt, unter Verwendung der Funktionalnotation {{CSSXref("color_value/rgb", "rgb()")}}.
- Für die Box wird eine Kontur definiert. Im Gegensatz zum häufiger verwendeten {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; es wird über alles gezeichnet, was sich möglicherweise außerhalb des Elements befindet, anstatt Platz zu schaffen, wie es `border` tut. Diese Kontur ist eine solide, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred`-Schlüsselwortes, wenn die Farbe angegeben wird.
- Beachten Sie, dass wir die Textfarbe nicht explizit setzen. Das bedeutet, dass der Wert von {{cssxref("color")}} von dem nächstgelegenen umschließenden Element vererbt wird, das es definiert. Standardmäßig ist das schwarz.

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
> Wir haben die `text-decoration-*`-Stile separat aufgenommen, da Safari {{cssxref("text-decoration")}} nicht als Kurzschreibweise unterstützt.

Zuletzt legt die Klasse `.boxRight` mehrere Stile auf der Box fest, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedenen Möglichkeiten, [Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values) zu deklarieren):

- Die `background-color` wird unter Verwendung der Funktionalnotation {{CSSXref("color_value/hwb", "hwb()")}} festgelegt — `hwb(270deg 63% 13%)`. Dies ist eine mittlere violette Farbe.
- Die `outline` der Box wird verwendet, um anzugeben, dass die Box in einer vier Pixel dicken gestrichelten Linie eingeschlossen werden soll, deren Farbe ein etwas tieferes Violett ist, unter Verwendung des sechsstelligen {{cssxref("hex-color")}} `#6e1478`.
- Die Vordergrundfarbe (Text) wird durch Setzen der {{cssxref("color")}}-Eigenschaft unter Verwendung der Funktionalnotation {{CSSXref("color_value/hsl", "hsl()")}} angegeben — `hsl(0deg 95% 95%)`. Dies ist eine sehr helle rosa Farbe.
- Wir fügen eine grüne wellige Linie unter dem Text mit der {{cssxref("text-decoration")}}-Kurzschreibweise hinzu, zusammen mit der ausführlichen Komponente für die Browser-Kompatibilität. Wir verwendeten den 3-stelligen {{cssxref("hex-color")}} `#8f8`, der dem Wert von `#88ff88` entspricht.
- Schließlich wird dem Text mit {{cssxref("text-shadow")}} ein wenig Schatten hinzugefügt. Sein `color`-Parameter wird auf `black` gesetzt, ein {{cssxref("named-color")}}-Wert.

Wir verwendeten fünf verschiedene Farbsynxtaxen, um zu demonstrieren, was möglich ist. In der realen Welt werden Sie und Ihr Team vorzugsweise eine bevorzugte Farbnotation verwenden, wobei jeder, der an einem Code-Basis arbeitet, dieselbe Farbsyntax verwendet.

## Andere Methoden zur Verwendung von Farbe

CSS ist nicht die einzige Webtechnologie, die Farbe unterstützt. Andere Beispiele schließen ein:

- Die HTML-[Canvas-API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht Ihnen, 2D-Pixelgrafiken in einem {{HTMLElement("canvas")}}-Element zu zeichnen. Siehe unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial), um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht Ihnen das Erstellen von Bildern unter Verwendung von Befehlen, die spezifische Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in eine Webseite eingebettet oder wie andere Bildtypen mit dem {{HTMLElement("img")}}-Element auf der Seite platziert werden.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web-Graphics-Library ist eine auf OpenGL ES basierende API zum Zeichnen von hochleistungsfähigen 2D- und 3D-Grafiken im Web. Siehe unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial), um mehr zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), ein Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige mittlerweile veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
