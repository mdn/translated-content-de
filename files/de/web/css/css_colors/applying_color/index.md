---
title: Farben auf HTML-Elemente mit CSS anwenden
short-title: Farben auf HTML-Elemente anwenden
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Farbe zu Ihren [HTML](/de/docs/Web/HTML) [Elementen](/de/docs/Web/HTML/Reference/Elements) hinzuzufügen, um das gewünschte Aussehen zu erzielen. Dieser Leitfaden ist eine Einführung in die Anwendung von Farben auf HTML-Elemente mit CSS. Der Leitfaden enthält [Listen der CSS-Eigenschaften, die Farben in ihren Werten setzen](#eigenschaften,_die_farben_haben_können) und wie man Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_möglichkeiten,_farbe_zu_verwenden) verwendet.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus und stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten, unter Berücksichtigung der Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, schauen Sie sich die Referenz zum [CSS `<color>` Datentyp](/de/docs/Web/CSS/color_value) und den [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values) an.

## Eigenschaften, die Farben haben können

Auf Elementebene kann in HTML alles mit Farbe versehen werden. Schauen wir uns die verschiedenen Elemente an, die auf der Seite gerendert werden - wie Text, Rahmen usw. Wir stellen Listen der CSS-Eigenschaften bereit, die Farben auf jedes anwenden.

Auf fundamentaler Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft die Hintergrundfarbe des Elements. Diese können für praktisch jedes Element verwendet werden.

### Text

Wann immer ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seinen Hintergrund und alle Dekorationen auf dem Text zu bestimmen.

- {{cssxref("color")}}

  - : Die Farbe, die beim Zeichnen des Textes und aller [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (wie z.B. das Hinzufügen von Unter- oder Oberstrichen, Durchstreichungen usw.) verwendet wird.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}

  - : Konfiguriert einen Schatteneffekt, der auf den Text angewendet wird. Unter den Optionen für den Schatten ist die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern verschwommen und mit dem Hintergrund vermischt wird). Mehr erfahren unter [Textschatteneffekte](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows).

- {{cssxref("text-decoration-color")}}

  - : Die Standard-Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) Farbe ist [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color`-Eigenschaft. Sie können jedoch diesen Wert überschreiben und eine andere Farbe für sie mit der `text-decoration-color`-Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}

  - : Die Farbe, die beim Rendern von Betonungssymbolen neben jedem Zeichen im Text verwendet wird. Dies wird hauptsächlich beim Zeichnen von Text in ostasiatischen Sprachen verwendet.

- {{cssxref("caret-color")}}

  - : Die Farbe, die beim Zeichnen des {{Glossary("caret", "Cursors")}} (manchmal auch als Texteingabecursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur in Elementen nützlich, die bearbeitbar sind, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elementen, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit irgendeinem Inhalt und hat einen Hintergrund und einen Rahmen zusätzlich zu allem, was der Boxinhalt darstellen kann.

- [Rahmen](#borders_2)

  - : Siehe den Abschnitt [Rahmen](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Rahmen einer Box festzulegen.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe, die in Bereichen des Elements ohne Vordergrundinhalt verwendet wird.

- {{cssxref("box-shadow")}}

  - : Konfiguriert Einlagen- und Schlagschatteneffekte auf der Box. Unter den Optionen für jeden Schatten ist die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern verschwommen und mit einem Hintergrund vermischt wird).

- {{cssxref("column-rule-color")}}

  - : Die Farbe, die beim Zeichnen der Linie verwendet wird, die Textspalten trennt, wenn das [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) verwendet wird.

- {{cssxref("outline-color")}}

  - : Die Farbe, die beim Zeichnen einer Umrisslinie um die Außenseite des Elements verwendet wird. Dieser Umriss unterscheidet sich vom Rahmen dadurch, dass er keinen Platz im Dokument beansprucht. Umrisse nehmen nicht am [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) teil und überlappen anderen Inhalt. Umrisse werden allgemein als Fokusindikatoren verwendet, um anzuzeigen, welches Element derzeit den Fokus hat und Tastatureingabeereignisse erhält.

### Rahmen

Jedes Element kann einen Rahmen um sich herum haben. Ein grundlegender Elementrahmen ist eine Linie, die um die Kanten des Elementinhalts gezeichnet wird. Siehe [Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um mehr über die Beziehung zwischen Elementen und ihren Rahmen zu erfahren und den Artikel [Rahmengestaltung mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders), um mehr über die Anwendung von Stilen auf Rahmen zu erfahren.

Sie können die {{cssxref("border")}}-Kurzschreibweise verwenden, mit der Sie alles über den Rahmen in einem Schritt konfigurieren können (einschließlich nicht-Farbmerkmale des Rahmens, wie seine [Breite](/de/docs/Web/CSS/border-width), [Stil](/de/docs/Web/CSS/border-style) (solid, gestrichelt usw.) und weitere.

- {{cssxref("border-color")}}-Kurzschreibweise

  - : Gibt eine einzige Farbe an, die für jede Seite des Elementrahmens verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}

  - : Ermöglicht es Ihnen, die Farbe der jeweiligen Seite des Elementrahmens festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}

  - : Damit können Sie die Farbe festlegen, die zum Zeichnen der Rahmen verwendet wird, die am nächsten zum Anfang und Ende des Blocks, den der Rahmen umgibt, sind. In einem von links nach rechts Schreibmodus (wie Englisch geschrieben wird) ist der Anfangsrahmen die obere Kante und das Ende der untere. Dies unterscheidet sich vom Inline-Anfang und -Ende, die die linken und rechte Kanten sind (entsprechend dem Beginn und Ende jeder Textzeile in der Box).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}

  - : Diese ermöglichen es Ihnen, die Kanten des Rahmens einzufärben, die am nächsten zu Beginn und Ende der Textzeilen innerhalb der Box liegen. Welche Seite dies ist, hängt von den {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}-Eigenschaften ab, die typischerweise (aber nicht immer) verwendet werden, um die Textrichtung basierend auf der angezeigten Sprache anzupassen. Zum Beispiel, wenn der Text der Box von rechts nach links gerendert wird, dann wird `border-inline-start-color` auf die rechte Seite des Rahmens angewendet.

## Farben als Werte in Stylesheets angeben

Nun, da Sie wissen, welche [CSS-Eigenschaften es Ihnen ermöglichen, Farbe auf Elemente anzuwenden](#eigenschaften,_die_farben_haben_können), können Sie beginnen, Farben zu Ihren Webseiten hinzuzufügen. Schauen wir uns einige Beispiele an, wie man Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} verwendet. In diesem Beispiel verwenden wir mehrere zuvor erwähnte Eigenschaften, wobei das Konzept der Anwendung von Farben in CSS dasselbe ist, unabhängig von der Eigenschaft.

Schauen wir uns zunächst das Ergebnis an, bevor wir uns den Code genauer ansehen, den wir dafür benötigen:

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

Hier haben wir einen Wrapper {{HTMLElement("div")}}, der zwei Kind-`<div>`s enthält, jede mit einem einzelnen Kindabsatz ({{HTMLElement("p")}}). Jeder Inhalt `<div>` erhält ein anderes Aussehen und Gefühl.

### CSS

Schauen wir uns das CSS an, das das obige Ergebnis Stück für Stück erstellt.

> [!NOTE]
> Wir verwenden in diesem Beispiel mehrere verschiedene [CSS-Farbwerttypen](/de/docs/Web/CSS/CSS_colors/Color_values), um deren Verwendung zu demonstrieren. Dies wird für Produktivcode nicht empfohlen. Wenn Sie CSS schreiben, verwenden Sie den intuitivsten Werttyp für Sie und Ihr Team.

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

Die `.wrapper`-Klasse wird verwendet, um Stile dem {{HTMLElement("div")}}, das unseren gesamten anderen Inhalt einschließt, zuzuweisen. Dadurch wird die Höhe des Containers mit {{cssxref("height")}} festgelegt, wobei die Breite dieses Blockelementes standardmäßig 100% seines übergeordneten Elements entspricht. Die Festlegung von {{cssxref("display")}} auf `flex` und die Hinzufügung von `10px` {{cssxref("gap")}} erzeugt einen Flexcontainer, um die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers anzuordnen. Wir verwenden {{cssxref("flex")}}, um die Flex-Kinder wachsen zu lassen, um den Container auszufüllen; es wirkt sich nicht auf den Flexcontainer selbst aus.

Von größerem Interesse für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rahmen um die Außenkante des Elements zu etablieren. Dieser Rahmen ist eine durchgezogene Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, die verwendet wird, um die Box auf der linken Seite zu stylen, legt die Farbe des Hintergrunds und des Rahmens fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Wertes der CSS-{{cssxref("background-color")}}-Eigenschaft in `rgb(245 130 130)` festgelegt, unter Verwendung der {{CSSXref("color_value/rgb", "rgb()")}} Funktionsnotation.
- Ein Rahmen ist für die Box definiert. Im Gegensatz zu der häufiger verwendeten {{cssxref("border")}} wirkt sich {{cssxref("outline")}} überhaupt nicht auf das Layout aus; es wird über was auch immer außerhalb des Elemente-Boxes liegt, anstelle Platz zu schaffen wie `border`. Dieser Rahmen ist eine durchgehende, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred` Schlüsselworts bei der Festlegung der Farbe.
- Beachten Sie, dass wir die Textfarbe nicht explizit festlegen. Das bedeutet, dass der Wert von {{cssxref("color")}} vom nächstgelegenen enthaltenden Element, das es definiert, geerbt wird. Standardmäßig ist das schwarz.

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
> Wir haben die `text-decoration-*`-Stile separat aufgenommen, weil Safari {{cssxref("text-decoration")}} als Kurzschreibweise nicht unterstützt.

Schließlich setzt die `.boxRight`-Klasse mehrere Stile auf der Box, die rechts gezeichnet wird. Dann werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedenen Möglichkeiten zur Deklaration von [Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)):

- Der `background-color` wird mit der {{CSSXref("color_value/hwb", "hwb()")}} Funktionsnotation festgelegt — `hwb(270deg 63% 13%)`. Dies ist eine mittlere lila Farbe.
- Der Rahmen (`outline`) der Box wird verwendet, um anzugeben, dass die Box in einer vier Pixel dicken gestrichelten Linie eingeschlossen werden soll, deren Farbe ein etwas dunkleres Lila ist, mit dem sechsstelligen {{cssxref("hex-color")}} `#6e1478`.
- Die Vordergrund-(Text)-Farbe wird durch Festlegen der {{cssxref("color")}}-Eigenschaft mit der {{CSSXref("color_value/hsl", "hsl()")}} Funktionsnotation — `hsl(0deg 100% 100%)` angegeben. Dies ist eine von vielen Möglichkeiten, die Farbe Weiß zu spezifizieren.
- Wir fügen mit dem {{cssxref("text-decoration")}}-Kurzschreibweise, zusammen mit der Langhandkomponente zur Browser-Kompatibilität, eine grüne wellenförmige Linie unter dem Text hinzu. Wir benutzten den 3-stelligen {{cssxref("hex-color")}} `#8f8`, was dem `#88ff88` entspricht.
- Schließlich wird ein kleiner Schatten dem Text mit {{cssxref("text-shadow")}} hinzugefügt. Sein `Farb`-Parameter ist auf `black`, einen {{cssxref("named-color")}}-Wert, eingestellt.

Wir verwendeten fünf verschiedene Farb-Syntaxe, um zu demonstrieren, was möglich ist. In der realen Welt werden Sie und Ihr Team vorzugsweise eine bevorzugte Farbnotation auswählen, wobei alle, die an einer Codebasis arbeiten, dieselbe Farbsyntax verwenden.

## Andere Möglichkeiten, Farbe zu verwenden

CSS ist nicht die einzige Web-Technologie, die Farbe unterstützt. Andere Beispiele beinhalten:

- Die HTML [Canvas-API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht das Zeichnen zweidimensionaler Bitmap-Grafiken in einem {{HTMLElement("canvas")}}-Element. Siehe unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial), um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht es Ihnen, Bilder mit Befehlen zu erstellen, die spezifische Formen, Muster und Linien zeichnen. SVG-Befehle sind im XML-Format verfasst und können direkt in eine Webseite eingebettet oder mit dem {{HTMLElement("img")}}-Element wie jede andere Art von Bild platziert werden.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zum Zeichnen von hochleistungsfähigen 2D- und 3D-Grafiken im Web. Siehe unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial), um mehr zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), ein Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige mittlerweile veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
