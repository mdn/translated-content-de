---
title: Anwenden von Farbe auf HTML-Elemente mit CSS
short-title: Anwenden von Farbe auf HTML-Elemente
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

{{CSSRef}}

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Farbe zu Ihren [HTML](/de/docs/Web/HTML) [Elementen](/de/docs/Web/HTML/Reference/Elements) hinzuzufügen, um das gewünschte Aussehen zu erzeugen. Dieser Leitfaden ist eine Einführung, wie CSS verwendet werden kann, um Farben auf HTML-Elemente anzuwenden. Dieser Leitfaden enthält [Listen der CSS-Eigenschaften, die Farbe in ihren Werten setzen](#eigenschaften,_die_farbe_haben_können) sowie wie Farben sowohl [in Stylesheets](#angabe_von_farben_als_werte_in_stylesheets) als auch [auf andere Weise](#andere_möglichkeiten,_farbe_zu_verwenden) verwendet werden können.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus und stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, und berücksichtigen Sie stets die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, siehe die Referenz zum [CSS `<color>` Datentyp](/de/docs/Web/CSS/color_value) und den [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values).

## Eigenschaften, die Farbe haben können

Auf der Elementebene kann alles in HTML mit Farbe versehen werden. Schauen wir uns die verschiedenen auf der Seite gerenderten Elemente an — wie Text, Ränder usw. Wir werden Listen der CSS-Eigenschaften bereitstellen, die Farbe auf jedes anwenden.

Auf einer grundlegenden Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements, und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf fast jedes Element angewendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seinen Hintergrund und eventuelle Dekorationen auf dem Text zu bestimmen.

- {{cssxref("color")}}

  - : Die Farbe, die beim Zeichnen des Textes und aller [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (wie das Hinzufügen von Unter- oder Überstrichen, Durchstreichlinien usw.) verwendet werden soll.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}

  - : Konfiguriert einen Schatteneffekt, der auf Text angewendet wird. Zu den Optionen für den Schatten gehört die Basisfarbe des Schattens (die dann basierend auf den anderen Parametern verwischt und mit dem Hintergrund vermischt wird). Siehe [Textschlagschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows), um mehr zu erfahren.

- {{cssxref("text-decoration-color")}}

  - : Die Standardfarbe für Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) ist [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color`-Eigenschaft. Sie können diesen Wert jedoch überschreiben und mit der `text-decoration-color`-Eigenschaft eine andere Farbe verwenden.

- {{cssxref("text-emphasis-color")}}

  - : Die Farbe, die beim Rendern von Emphasissymbolen neben jedem Zeichen im Text verwendet wird. Diese wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}

  - : Die Farbe, die beim Zeichnen des {{Glossary("caret", "Cursors")}} (manchmal auch als Texteingabecursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur in bearbeitbaren Elementen nützlich, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elementen, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit einem bestimmten Inhalt und hat einen Hintergrund und einen Rand zusätzlich zu dem, was die Box möglicherweise auch enthält.

- [Ränder](#borders_2)

  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Ränder einer Box festzulegen.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}

  - : Konfiguriert Einfassungs- und Schlagschatteneffekte auf der Box. Zu den Optionen für jeden Schatten gehört die Basisfarbe des Schattens (die dann basierend auf den anderen Parametern verwischt und mit jedem Hintergrund vermischt wird).

- {{cssxref("column-rule-color")}}

  - : Die Farbe, die beim Zeichnen der Linie verwendet wird, die Spalten von Text bei Verwendung eines [CSS-Mehrspaltenlayouts](/de/docs/Web/CSS/CSS_multicol_layout) trennt.

- {{cssxref("outline-color")}}

  - : Die Farbe, die beim Zeichnen einer Umrandung um das äußere Element verwendet wird. Diese Umrandung unterscheidet sich vom Rand, da für sie im Dokument kein Platz reserviert wird. Umrandungen nehmen nicht am [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) teil und überlappen andere Inhalte. Umrandungen werden im Allgemeinen als Fokusindikatoren verwendet, die anzeigen, welches Element derzeit den Fokus hat und Ereignisse für Tastatureingaben empfängt.

### Ränder

Jedes Element kann einen um es herum gezeichneten Rand haben. Ein grundlegender Rand eines Elements ist eine Linie, die um die Kanten des Inhalts des Elements gezeichnet wird. Siehe [Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um mehr über die Beziehung zwischen Elementen und ihren Rändern zu erfahren, und den Artikel [Stilvorlagen für Ränder mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders), um mehr über das Anwenden von Stilen auf Ränder zu erfahren.

Sie können die Kurzform-Eigenschaft {{cssxref("border")}} verwenden, die es Ihnen ermöglicht, alles über den Rand in einem Durchgang zu konfigurieren (einschließlich nicht-farbiger Merkmale von Grenzen, wie ihre [Breite](/de/docs/Web/CSS/border-width), [Stil](/de/docs/Web/CSS/border-style) (durchgezogen, gestrichelt usw.) und so weiter.

- {{cssxref("border-color")}} Kurzform

  - : Gibt eine einzelne Farbe an, die für jede Seite des Randes des Elements verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}

  - : Ermöglicht Ihnen das Festlegen der Farbe der entsprechenden Seite des Randes des Elements.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}

  - : Mit diesen können Sie die Farbe festlegen, die verwendet wird, um die Ränder zu zeichnen, die dem Start und Ende des Blocks am nächsten sind, den der Rand umgibt. In einem von links nach rechts gerichteten Schreibmodus (wie bei der englischen Sprache) ist der Block-Start-Rand die obere Kante und der Block-Ende der untere. Dies unterscheidet sich vom Inline-Start und -Ende, das die linken und rechten Kanten sind (entsprechend dem Ort, an dem jede Textzeile im Block beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}

  - : Diese ermöglichen es Ihnen, die Kanten des Randes einzufärben, die dem Anfang und dem Ende der Anfangszeilen des Textes innerhalb der Box am nächsten liegen. Welche Seite das ist, hängt von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} ab, die typischerweise (aber nicht immer) verwendet werden, um die Richtung des Textes basierend auf der dargestellten Sprache anzupassen. Beispielsweise wird, wenn der Text der Box von rechts nach links gerendert wird, die `border-inline-start-color` auf die rechte Seite des Randes angewendet.

## Angabe von Farben als Werte in Stylesheets

Nachdem Sie nun wissen, welche [CSS-Eigenschaften es Ihnen ermöglichen, Farben auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie beginnen, Farben zu Ihren Webseiten hinzuzufügen. Schauen wir uns einige Beispiele für die Verwendung von Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} an. In diesem Beispiel verwenden wir mehrere zuvor erwähnte Eigenschaften, wobei das Konzept der Farbverwendung in CSS unabhängig von der Eigenschaft gleich ist.

Schauen wir uns zuerst das Ergebnis an, bevor wir auf den Code eingehen, den wir dazu erstellen müssen:

{{EmbedLiveSample("Specifying colors as values in stylesheets", 650, 150)}}

### HTML

Das für die Erstellung des obigen Beispiels verantwortliche HTML wird hier gezeigt:

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

Hier haben wir einen Wrapping-{{HTMLElement("div")}}, der zwei untergeordnete `<div>`-Elemente enthält, von denen jedes einen einzelnen untergeordneten Paragraphen ({{HTMLElement("p")}}) hat. Jedes Inhalts-`<div>` erhält ein anderes Aussehen und Gefühl.

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

Die `.wrapper`-Klasse wird verwendet, um Stile auf das {{HTMLElement("div")}} anzuwenden, das all unseren anderen Inhalt umschließt. Dadurch wird die Höhe des Containers mit {{cssxref("height")}} festgelegt, wobei die Breite dieses Blocklevel-Elements standardmäßig auf 100 % des übergeordneten Elements eingestellt wird. Das Festlegen von {{cssxref("display")}} auf `flex` und das Hinzufügen einer `10px` {{cssxref("gap")}} erstellt einen flexiblen Container, um die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers zu layouten. Wir verwenden {{cssxref("flex")}}, um die flexiblen Kinder den Container ausfüllen zu lassen; es wirkt sich nicht auf den flexiblen Container selbst aus.

Für unser Thema von Interesse ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rand um die Außenkante des Elements zu erstellen. Dieser Rand ist eine durchgezogene Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, die zum Stylen der Box links verwendet wird, legt die Farbe des Hintergrunds und des Rahmens fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Wertes der CSS-{{cssxref("background-color")}}-Eigenschaft auf `rgb(245 130 130)` festgelegt, wobei das {{CSSXref("color_value/rgb", "rgb()")}} Funktionsnotierung verwendet wird.
- Ein Rahmen wird für die Box definiert. Im Gegensatz zur häufiger verwendeten {{cssxref("border")}}-Eigenschaft wirkt sich {{cssxref("outline")}} überhaupt nicht auf das Layout aus; es zeichnet über alles, was sich außerhalb der Box des Elements befinden könnte, anstatt Platz wie `border` zu schaffen. Dieser Rahmen ist eine durchgezogene, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred`-Schlüsselworts bei der Angabe der Farbe.
- Beachten Sie, dass wir die Textfarbe nicht ausdrücklich festlegen. Das bedeutet, dass der Wert von {{cssxref("color")}} von dem nächstgelegenen enthaltenen Element geerbt wird, das ihn definiert. Standardmäßig ist diese Farbe Schwarz.

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
> Wir haben die `text-decoration-*`-Stile separat beibehalten, da Safari {{cssxref("text-decoration")}} nicht als Kurzform-Eigenschaft unterstützt.

Schließlich legt die `.boxRight`-Klasse mehrere Stile für die Box fest, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (mit fünf verschiedenen Arten der Deklarierung von [Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)):

- Die `background-color` wird mit {{CSSXref("color_value/hwb", "hwb()")}} Funktionsnotierung festgelegt — `hwb(270deg 63% 13%)`. Dies ist eine mittelschattige Lila Farbe.
- Der Rahmen der Box wird mit einem vier Pixel dicken gestrichelten Rahmen versehen, dessen Farbe ein etwas tieferer Lilaton ist, mit dem sechsstelligen {{cssxref("hex-color")}} `#6e1478`.
- Die Vordergrundfarbe (Text) wird durch Festlegen der {{cssxref("color")}}-Eigenschaft mit {{CSSXref("color_value/hsl", "hsl()")}} Funktionsnotierung angegeben — `hsl(0deg 100% 100%)`. Dies ist eine der vielen Möglichkeiten, die Farbe Weiß anzugeben.
- Wir fügen eine grüne gewellte Linie unter den Text mit der {{cssxref("text-decoration")}}-Kurzform hinzu, zusammen mit der Langformkomponente für die Browser-Kompatibilität. Wir verwendeten den 3-stelligen {{cssxref("hex-color")}} `#8f8`, was dem Wert `#88ff88` entspricht.
- Schließlich wird dem Text ein wenig Schatten mit {{cssxref("text-shadow")}} hinzugefügt. Sein `color`-Parameter ist auf `black`, einen {{cssxref("named-color")}}-Wert, gesetzt.

Wir haben fünf verschiedene Farbsyntaxen verwendet, um zu demonstrieren, was möglich ist. In der realen Welt wählen Sie und Ihr Team vorzugsweise eine bevorzugte Farbschreibweise, wobei jeder, der an einem Code-Basis arbeitet, dieselbe Farbsyntax verwendet.

## Andere Möglichkeiten, Farbe zu verwenden

CSS ist nicht die einzige Webtechnologie, die Farbe unterstützt. Weitere Beispiele sind:

- Die HTML [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht das Zeichnen von 2D-Bitmap-Grafiken in einem {{HTMLElement("canvas")}}-Element. Siehe unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial), um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Erlaubt das Erstellen von Bildern mithilfe von Befehlen, die bestimmte Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in eine Webseite eingebettet oder mit dem {{HTMLElement("img")}}-Element auf der Seite platziert werden, genau wie bei jedem anderen Bildtyp.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zum Zeichnen von leistungsstarken 2D- und 3D-Grafiken im Web. Sehen Sie sich unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) an, um mehr zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), einen Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige inzwischen veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
