---
title: Anwenden von Farbe auf HTML-Elemente mit CSS
short-title: Anwenden von Farbe auf HTML-Elemente
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, um Ihren [HTML](/de/docs/Web/HTML) [Elementen](/de/docs/Web/HTML/Element) Farbe hinzuzufügen, um das gewünschte Aussehen zu erzeugen. Dieser Leitfaden ist eine Einführung, wie CSS verwendet werden kann, um HTML-Elementen Farben zuzuweisen. Dieser Leitfaden enthält [Listen der CSS-Eigenschaften, die Farbe in ihren Werten festlegen](#eigenschaften,_die_farbe_haben_können) und wie Sie Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_wege,_farb_zu_verwenden) verwenden können.

> [!NOTE]
> Es ist wichtig, [Farben weise einzusetzen](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie immer passende Farben aus, stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, und berücksichtigen Sie stets die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, sehen Sie sich die [CSS `<color>` Datentyp]-Referenz](/de/docs/Web/CSS/color_value) und den [CSS: Farbwerte-Leitfaden](/de/docs/Web/CSS/CSS_colors/Color_values) an.

## Eigenschaften, die Farbe haben können

Auf Elementebene kann alles in HTML mit Farbe versehen werden. Schauen wir uns die verschiedenen Objekte an, die auf der Seite gerendert werden – wie Text, Rahmen usw. Wir bieten Listen der CSS-Eigenschaften, die Farbe auf jedes anwenden.

Auf einer grundlegenden Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können bei nahezu jedem Element verwendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, dessen Hintergrund und jeglichen Dekorationen auf dem Text zu bestimmen.

- {{cssxref("color")}}

  - : Die Farbe, die beim Zeichnen des Textes und jeglicher [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (wie z. B. das Hinzufügen von Unter- oder Überstrichen, Durchstreichlinien usw.) verwendet wird. 

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}

  - : Konfiguriert einen Schatteneffekt, der auf den Text angewendet wird. Zu den Optionen für den Schatten gehört die Grundfarbe des Schattens (die dann auf Basis der anderen Parameter verschwommen und mit dem Hintergrund vermischt wird). Weitere Informationen finden Sie unter [Textschlagschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows).

- {{cssxref("text-decoration-color")}}

  - : Die Farbe der Standard-Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) ist [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Schlüsselwort stellt den aktuellen Wert der `color`-Eigenschaft dar. Sie können diesen Wert jedoch überschreiben und mit der `text-decoration-color`-Eigenschaft eine andere Farbe für sie verwenden.

- {{cssxref("text-emphasis-color")}}

  - : Die Farbe, die zum Rendern von Betonungssymbolen neben jedem Zeichen im Text verwendet wird. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}

  - : Die Farbe, die beim Zeichnen des {{Glossary("caret", "Cursors")}} (manchmal als Texteingabecursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur bei Elementen nützlich, die bearbeitbar sind, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder bei Elementen, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit einer Art von Inhalt und hat zusätzlich zu allem, was der Boxinhalt sein mag, einen Hintergrund und einen Rahmen.

- [Rahmen](#borders_2)

  - : Sehen Sie sich den Abschnitt [Rahmen](#borders_2) für eine Liste der CSS-Eigenschaften an, mit denen Sie die Farben der Rahmen einer Box festlegen können.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}

  - : Konfiguriert Innen- und Abwurfschatteneffekte auf der Box. Zu den Optionen für jeden Schatten gehört die Grundfarbe des Schattens (die dann verschwommen und auf der Basis weiterer Parameter mit jedem Hintergrund vermischt wird).

- {{cssxref("column-rule-color")}}

  - : Die Farbe, die beim Zeichnen der Linie verwendet wird, die Spalten von Texten trennt, wenn das [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) verwendet wird.

- {{cssxref("outline-color")}}

  - : Die Farbe, die zum Zeichnen eines Umrisses um die Außenseite des Elements verwendet wird. Dieser Umriss unterscheidet sich vom Rahmen darin, dass er keinen Platz dafür im Dokument reserviert. Umrisse nehmen nicht am [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) teil und überlappen andere Inhalte. Umrisse werden in der Regel als Fokusindikatoren verwendet, um anzuzeigen, welches Element derzeit den Fokus hat und Keyboard-Ereignisse empfängt.

### Rahmen

Jedes Element kann einen Rahmen um sich herum gezeichnet haben. Ein grundlegender Elementrahmen ist eine Linie, die um die Ränder des Inhalts des Elements gezeichnet wird. Siehe [Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um mehr über die Beziehung zwischen Elementen und ihren Rahmen zu erfahren, und den Artikel [Styling von Rahmen mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders), um mehr über die Anwendung von Styles auf Rahmen zu erfahren.

Sie können die {{cssxref("border")}}-Kurzbeschreibung verwenden, mit der Sie alles am Rahmen in einem Durchgang konfigurieren können (einschließlich nichtfarblicher Merkmale von Rahmen, wie seine [Breite](/de/docs/Web/CSS/border-width), [Stil](/de/docs/Web/CSS/border-style) (solid, dotted, etc.) usw.).

- {{cssxref("border-color")}} Kurzbeschreibung

  - : Gibt eine einzelne Farbe an, die für jede Seite des Rahmens des Elements verwendet wird.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}

  - : Damit können Sie die Farbe der entsprechenden Seite des Rahmens des Elements einstellen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}

  - : Mit diesen können Sie die Farbe einstellen, die verwendet wird, um die Rahmen zu zeichnen, die dem Start und Ende des Blocks am nächsten sind, den der Rahmen umgibt. In einem links-nach-rechts-Schreibmodus (wie es bei englischer Sprache der Fall ist) ist der Block-Start-Rahmen die obere Kante und der Block-Ende-Rahmen die untere. Dies unterscheidet sich vom Inline-Start und -Ende, die die linken und rechten Kanten sind (entsprechend dem, wo jede Textzeile in der Box beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}

  - : Damit können Sie die Kanten des Rahmens einfärben, die dem Beginn und dem Ende des Textanfangs innerhalb der Box am nächsten sind. Welche Seite dies ist, hängt vom {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}-Eigenschaft ab, die typischerweise (aber nicht immer) verwendet werden, um die Textausrichtung basierend auf der angezeigten Sprache anzupassen. Wenn zum Beispiel der Text der Box von rechts nach links gerendert wird, wird die `border-inline-start-color` auf die rechte Seite des Rahmens angewendet.

## Farben als Werte in Stylesheets angeben

Nun, da Sie wissen, welche [CSS-Eigenschaften es Ihnen erlauben, Farbe auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie beginnen, Farben zu Ihren Websites hinzuzufügen. Lassen Sie uns einige Beispiele für die Verwendung von Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} ansehen. In diesem Beispiel verwenden wir mehrere der zuvor erwähnten Eigenschaften, wobei das Konzept der Anwendung von Farben in CSS dasselbe ist, unabhängig von der Eigenschaft.

Lassen Sie uns zuerst das Ergebnis ansehen, bevor wir uns den Code ansehen, den wir dafür benötigen:

{{EmbedLiveSample("Specifying colors as values in stylesheets", 650, 150)}}

### HTML

Das für die Erstellung des obigen Beispiels verantwortliche HTML wird hier angezeigt:

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

Hier haben wir ein Wrapper-{{HTMLElement("div")}}, das zwei untergeordnete `<div>`s enthält, von denen jedes einen einzelnen untergeordneten Absatz ({{HTMLElement("p")}}) hat. Jedes Inhalts-`<div>` erhält ein anderes Aussehen und Gefühl.

### CSS

Schauen wir uns das CSS, das das obige Ergebnis erzeugt, stückweise an.

> [!NOTE]
> Wir verwenden mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/CSS_colors/Color_values) in diesem Beispiel, um deren Verwendung zu demonstrieren. Dies wird für Produktionscode nicht empfohlen. Beim Schreiben von CSS verwenden Sie den für Sie und Ihr Team intuitivsten Werttyp.

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

Die `.wrapper`-Klasse wird verwendet, um Styles auf das {{HTMLElement("div")}} anzuwenden, das unseren gesamten anderen Inhalt umschließt. Dies legt die Höhe des Containers mithilfe von {{cssxref("height")}} fest und ermöglicht es, dass die Breite dieses Block-Elementes standardmäßig 100% seines Elternteils ist. Durch das Setzen von {{cssxref("display")}} auf `flex` und das Hinzufügen eines `10px` {{cssxref("gap")}} wird ein Flex-Container erstellt, um die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers anzuordnen. Wir verwenden {{cssxref("flex")}}, um die Flex-Kinder wachsen zu lassen, um den Container zu füllen; es wirkt sich nicht auf den Flex-Container selbst aus.

Von größerem Interesse für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um eine Umrandung um die Außenkante des Elements zu etablieren. Diese Umrandung ist eine durchgezogene Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft` Klasse, die zur Formatierung der Box auf der linken Seite verwendet wird, richtet die Farbe des Hintergrunds und des Umrisses ein:

- Die Hintergrundfarbe der Box wird durch Ändern des Wertes der CSS-{{cssxref("background-color")}}-Eigenschaft auf `rgb(245 130 130)` gesetzt, unter Verwendung der {{CSSXref("color_value/rgb", "rgb()")}}-Funktionale Notation.
- Ein Umriss wird für die Box definiert. Im Gegensatz zum häufiger verwendeten {{cssxref("border")}} wirkt sich {{cssxref("outline")}} überhaupt nicht auf das Layout aus; es zeichnet über das, was vielleicht außerhalb des Box-Inhalts des Elements ist, anstatt Raum dafür zu schaffen, wie es `border` tut. Dieser Umriss ist eine solide, dunkle rote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred` Schlüsselworts bei der Angabe der Farbe.
- Beachten Sie, dass wir die Textfarbe nicht explizit festlegen. Das bedeutet, dass der Wert von {{cssxref("color")}} vom nächstgelegenen enthaltenen Element, das ihn definiert, vererbt wird. Standardmäßig ist dies schwarz.

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
> Wir haben die `text-decoration-*` Styles separat eingebaut, weil Safari {{cssxref("text-decoration")}} nicht als Kurzbeschreibungs-Eigenschaft unterstützt.

Zuletzt setzt die `.boxRight` Klasse mehrere Styles auf die Box, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedene Wege, [Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values) anzugeben):

- Die `background-color` wird unter Verwendung der {{CSSXref("color_value/hwb", "hwb()")}}-funktionalen Notation festgelegt — `hwb(270deg 63% 13%)`. Dies ist eine mittlere lila Farbe.
- Der Umriss der Box wird verwendet, um anzugeben, dass die Box von einer vier Pixel dicken gestrichelten Linie in einer etwas tieferen lila Farbe mit dem sechsstelligen {{cssxref("hex-color")}} `#6e1478` umschlossen wird.
- Die Vordergrundfarbe (Text) wird festgelegt, indem die {{cssxref("color")}}-Eigenschaft mithilfe der {{CSSXref("color_value/hsl", "hsl()")}}-funktionalen Notation festgelegt wird — `hsl(0deg 100% 100%)`. Dies ist eine von vielen Möglichkeiten, die Farbe Weiß anzugeben.
- Wir fügen eine grüne gewellte Linie unter dem Text mit der {{cssxref("text-decoration")}}-Kurzbeschreibung hinzu, zusammen mit der Langhand-Komponente für die Browser-Kompatibilität. Wir haben die 3-stellige {{cssxref("hex-color")}} `#8f8` verwendet, die dem `#88ff88` entspricht.
- Schließlich wird mit {{cssxref("text-shadow")}} ein leichter Schatten auf das Wort angewendet. Der `color`-Parameter ist auf `black` gesetzt, ein {{cssxref("named-color")}}-Wert.

Wir haben fünf verschiedene Farbsyntaxen verwendet, um zu demonstrieren, was möglich ist. In der realen Welt werden Sie und Ihr Team vorzugsweise eine bevorzugte Farbnomenklatur auswählen, wobei jeder, der an einem Codebase arbeitet, dieselbe Farbsyntax verwendet.

## Andere Wege, Farb zu verwenden

CSS ist nicht die einzige Web-Technologie, die Farben unterstützt. Weitere Beispiele sind:

- Die HTML [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Erlaubt Ihnen die Zeichnung von zweidimensionalen Bitmaps in einem {{HTMLElement("canvas")}}-Element. Siehe unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Damit können Sie Bilder mit Befehlen erstellen, die spezifische Formen, Muster und Linien zeichnen. SVG-Befehle sind im XML-Format und können direkt in eine Webseite eingebettet oder mithilfe des {{HTMLElement("img")}}-Elements in die Seite eingebaut werden, genau wie jede andere Art von Bild.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zur Zeichnung von hochleistungsfähigen 2D- und 3D-Grafiken im Web. Siehe unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial), um mehr zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), ein Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige jetzt veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}}- und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [CSS: Farbwerte-Leitfaden](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farben weise einsetzen](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS Farbschema](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
