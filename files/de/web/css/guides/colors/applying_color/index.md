---
title: Anwenden von Farbe auf HTML-Elemente mit CSS
short-title: Farbe anwenden
slug: Web/CSS/Guides/Colors/Applying_color
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, um Ihren [HTML](/de/docs/Web/HTML) [Elementen](/de/docs/Web/HTML/Reference/Elements) Farben zu verleihen und das gewünschte Aussehen zu erzeugen. Dieser Leitfaden ist ein Einführungskurs, der zeigt, wie CSS verwendet werden kann, um Farben auf HTML-Elemente anzuwenden. Dieser Leitfaden enthält [Listen der CSS-Eigenschaften, die Farbe in ihren Werten setzen](#eigenschaften,_die_farbe_haben_können) und wie man Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_möglichkeiten,_farbe_zu_verwenden) verwenden kann.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus und stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um die Lesbarkeit zu gewährleisten. Berücksichtigen Sie stets die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, siehe die Referenz zum [CSS `<color>` Datentyp](/de/docs/Web/CSS/Reference/Values/color_value) und den [CSS-Farbwerte-Leitfaden](/de/docs/Web/CSS/Guides/Colors/Color_values).

## Eigenschaften, die Farbe haben können

Auf Elementebene kann alles in HTML Farbe erhalten. Lassen Sie uns die verschiedenen Elemente betrachten, die auf der Seite gerendert werden – wie z.B. Text, Ränder, usw. Wir stellen Ihnen Listen der CSS-Eigenschaften zur Verfügung, die Farbe auf jedes Element anwenden.

Auf grundlegender Ebene definiert die {{cssxref("color")}} Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}} Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf nahezu jedes Element angewendet werden.

### Text

Sobald ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seines Hintergrunds und jeglicher Dekorationen auf dem Text zu bestimmen.

- {{cssxref("color")}}
  - : Die Farbe, die beim Zeichnen des Textes und jeglicher [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) verwendet wird (wie das Hinzufügen von Unter- oder Überstreichungen, Durchstreichungen usw.).

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}
  - : Konfiguriert einen Schatteneffekt, der auf den Text angewendet wird. Zu den Optionen für den Schatten gehört die Basisfarbe des Schattens (die dann basierend auf den anderen Parametern mit dem Hintergrund verwischt und gemischt wird). Mehr dazu erfahren Sie unter [Textschlagschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows).

- {{cssxref("text-decoration-color")}}
  - : Die Standardfarbe von Textdekorationen (wie Unterstreichungen, Durchstreichungen usw.) ist [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color` Eigenschaft. Sie können diesen Wert jedoch überschreiben und eine andere Farbe für sie mit der `text-decoration-color` Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}
  - : Die Farbe, die beim Zeichnen von Hervorhebungssymbolen neben jedem Zeichen im Text verwendet wird. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}
  - : Die Farbe, die beim Zeichnen des {{Glossary("caret", "Cursors")}} (manchmal als Texteingabe-Cursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur in bearbeitbaren Elementen nützlich, wie {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elementen, deren HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit irgendeinem Inhalt und hat einen Hintergrund und einen Rahmen zusätzlich zu den Inhalten, die die Box haben kann.

- [Ränder](#borders_2)
  - : Siehe den Abschnitt [Ränder](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Rahmen einer Box festzulegen.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe, die in Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}
  - : Konfiguriert Einlassschatten- und Schlagschatteneffekte auf der Box. Zu den Optionen für jeden Schatten gehört die Basisfarbe des Schattens (die dann basierend auf den anderen Parametern mit jedem Hintergrund verwischt und gemischt wird).

- {{cssxref("column-rule-color")}}
  - : Die Farbe, die verwendet wird, um die Linie zu zeichnen, die Texthäsulen bei Verwendung des [CSS-Mehrspaltenlayouts](/de/docs/Web/CSS/Guides/Multicol_layout) trennt.

- {{cssxref("outline-color")}}
  - : Die Farbe, die verwendet wird, um eine Umrisslinie um das Außerelement des Elements zu zeichnen. Dieser Umriss unterscheidet sich vom Rand dadurch, dass dafür im Dokument kein Platz reserviert wird. Umrisse beteiligen sich nicht am [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) und überlappen anderen Inhalt. Umrisse werden im Allgemeinen als Fokusindikatoren verwendet, um anzuzeigen, welches Element aktuell den Fokus hat und Tastatureingaben erhält.

### Ränder

Jedes Element kann einen Rahmen um sich herum haben. Ein grundlegender Rahmen eines Elements ist eine Linie, die um die Ränder des Inhalts des Elements gezogen wird. Weitere Informationen über die Beziehung zwischen Elementen und ihren Rahmen finden Sie unter [Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) und im Artikel [Stylen von Rahmen mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders), um mehr über das Anwenden von Stilen auf Rahmen zu erfahren.

Sie können die {{cssxref("border")}} Kurzschreibweise verwenden, mit der Sie alles über den Rahmen in einem einzigen Schritt konfigurieren können (einschließlich nicht-farbbezogener Merkmale von Rahmen wie [Breite](/de/docs/Web/CSS/Reference/Properties/border-width), [Stil](/de/docs/Web/CSS/Reference/Properties/border-style) (durchgezogen, gestrichelt usw.).

- {{cssxref("border-color")}} Kurzschreibweise
  - : Gibt eine einzige Farbe an, die für jede Seite des Rahmens des Elements verwendet werden soll.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}
  - : Ermöglicht es Ihnen, die Farbe der entsprechenden Seite des Rahmens des Elements festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}
  - : Damit können Sie die Farbe festlegen, die zum Zeichnen der Rahmen verwendet wird, die am nächsten zum Anfang und Ende des Blocks sind, den der Rahmen umgibt. In einer von links nach rechts verlaufenden Schreibrichtung (wie Englisch geschrieben wird) ist der Blockanfangsrand die obere Kante und der Blockendrand die untere. Dies unterscheidet sich vom Inline-Anfang und -Ende, die die linken und rechten Ränder sind (entsprechend dem Anfang und Ende jeder Textzeile im Kasten).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}
  - : Damit können Sie die Ränder des Rahmens färben, die am nächsten zum Anfang und Ende der Textzeilen innerhalb der Box liegen. Welche Seite dies ist, hängt von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} ab, die typischerweise (aber nicht immer) verwendet werden, um die Schreibrichtung basierend auf der dargestellten Sprache anzupassen. Beispielsweise, wenn der Text der Box von rechts nach links dargestellt wird, wird `border-inline-start-color` auf der rechten Seite des Rahmens angewendet.

## Farben als Werte in Stylesheets angeben

Jetzt, da Sie wissen, welche [CSS-Eigenschaften es Ihnen erlauben, Farbe auf Elemente anzuwenden](#eigenschaften,_die_farbe_haben_können), können Sie beginnen, Farben zu Ihren Websites hinzuzufügen. Lassen Sie uns einige Beispiele für die Verwendung von Farbe innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} betrachten. In diesem Beispiel verwenden wir mehrere zuvor erwähnte Eigenschaften, wobei das Konzept der Anwendung von Farben in CSS unabhängig von der Eigenschaft das gleiche bleibt.

Schauen wir uns zuerst das Ergebnis an, bevor wir den Code betrachten, den wir erstellen müssen:

{{EmbedLiveSample("Specifying colors as values in stylesheets", 650, 150)}}

### HTML

Das für das obige Beispiel verantwortliche HTML wird hier gezeigt:

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

Hier haben wir einen äußeren {{HTMLElement("div")}}, der zwei Kinder `<div>`s enthält, jeweils mit einem einzelnen Kindelement ({{HTMLElement("p")}}). Jedes Inhaltselement `<div>` hat ein unterschiedliches Aussehen.

### CSS

Lassen Sie uns das CSS betrachten, das das obige Ergebnis schrittweise erstellt.

> [!NOTE]
> Wir verwenden mehrere [unterschiedliche CSS-Farbwerttypen](/de/docs/Web/CSS/Guides/Colors/Color_values) in diesem Beispiel, um deren Verwendung zu demonstrieren. Dies wird für Produktionscode nicht empfohlen. Beim Schreiben von CSS verwenden Sie den am intuitivsten Werttyp für Sie und Ihr Team.

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

Die `.wrapper` Klasse wird verwendet, um Stile auf die {{HTMLElement("div")}} anzuwenden, die all unsere anderen Inhalte umschließt. Dies stellt die Höhe des Containers mit {{cssxref("height")}} ein und ermöglicht es der Breite dieses Blockelementes standardmäßig auf 100% seines Elternteils zu wachsen. Das {{cssxref("display")}} wird auf `flex` gesetzt und ein {{cssxref("gap")}} von 10px hinzugefügt, um ein Flex-Container zu erzeugen, um die Kinder nebeneinander mit einem Abstand zwischen allen Kinder des Containers anzuordnen. Wir verwenden {{cssxref("flex")}}, um den flexiblen Kindern zu ermöglichen, den Container auszufüllen; es hat keinen Effekt auf den Flex-Container selbst.

Von größerem Interesse für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}} Eigenschaft, um einen Rahmen um den äußeren Rand des Elements zu erstellen. Dieser Rahmen ist eine durchgezogene Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/Reference/Values/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir eine linke Box und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft` Klasse, die verwendet wird, um den Kasten links zu gestalten, legt die Farbe des Hintergrunds und den Umriss fest:

- Die Hintergrundfarbe der Box wird durch Ändern des Werts der CSS {{cssxref("background-color")}} Eigenschaft auf `rgb(245 130 130)` unter Verwendung der {{CSSXref("color_value/rgb", "rgb()")}} Funktionalschreibweise festgelegt.
- Ein Umriss wird für die Box definiert. Anders als der gebräuchlichere {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; es zeichnet sich über das, was außerhalb des Elements zu finden sein mag, anstatt wie `border` Platz zu beanspruchen. Dieser Umriss ist eine durchgezogene, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des `darkred` Schlüsselworts, wenn Sie die Farbe angeben.
- Beachten Sie, dass wir die Textfarbe nicht explizit setzen. Das bedeutet, dass der Wert von {{cssxref("color")}} vom nächsten übergeordneten Element, das dies definiert, vererbt wird. Standardmäßig ist das schwarz.

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
> Wir haben die `text-decoration-*` Stile separat eingeschlossen, da Safari {{cssxref("text-decoration")}} nicht als Kurzschreibweise unterstützt.

Schließlich setzt die `.boxRight` Klasse mehrere Stile für die Box in der rechten Seite. Dann werden die folgenden Farben festgelegt (unter Verwendung von fünf verschiedenen Arten der Deklaration von [Farbwerten](/de/docs/Web/CSS/Guides/Colors/Color_values)):

- Die `background-color` wird unter Verwendung der {{CSSXref("color_value/hwb", "hwb()")}} Funktionalschreibweise festgelegt — `hwb(270deg 63% 13%)`. Dies ist eine mittlere Purpurfarbe.
- Der `outline` der Box wird verwendet, um anzugeben, dass die Box in einer vier Pixel dicken gestrichelten Linie eingeschlossen werden soll, deren Farbe ein etwas dunkleres Purpur unter Verwendung des sechsstelligen {{cssxref("hex-color")}} `#6e1478` ist.
- Die Vordergrund- (Text)farbe wird durch Setzen der {{cssxref("color")}} Eigenschaft unter Verwendung der {{CSSXref("color_value/hsl", "hsl()")}} Funktionalschreibweise festgelegt — `hsl(0deg 95% 95%)`. Dies ist eine sehr helle, rosa-ähnliche Farbe.
- Wir fügen mit der {{cssxref("text-decoration")}} Kurzschreibweise und der Langhandkomponente für Browser-Kompatibilität eine grüne Wellenlinie unter dem Text hinzu. Wir verwendeten den 3-stelligen {{cssxref("hex-color")}} `#8f8`, was dem Äquivalent von `#88ff88` entspricht.
- Schließlich wird ein wenig Schatten zum Text hinzugefügt mit {{cssxref("text-shadow")}}. Sein `color` Parameter ist auf `black` gesetzt, ein {{cssxref("named-color")}} Wert.

Wir haben fünf verschiedene Farbschreibweisen verwendet, um zu demonstrieren, was möglich ist. In der realen Welt werden Sie und Ihr Team vorzugsweise eine bevorzugte Farbschreibweise wählen, mit der alle Entwickler am gleichen Code-Basis arbeiten.

## Andere Möglichkeiten, Farbe zu verwenden

CSS ist nicht die einzige Web-Technologie, die Farbe unterstützt. Andere Beispiele umfassen:

- Die HTML [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht es Ihnen, 2D-Bitmap-Grafiken in einem {{HTMLElement("canvas")}}-Element zu zeichnen. Sehen Sie sich unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) an, um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht es Ihnen, Bilder mit Befehlen zu erstellen, die spezifische Formen, Muster und Linien zeichnen. SVG-Befehle sind im XML-Format und können direkt in eine Webseite eingebettet oder mit dem {{HTMLElement("img")}}-Element in die Seite platziert werden, genau wie jeder andere Bildtyp.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API, um hochleistungsfähige 2D- und 3D-Grafiken im Web zu zeichnen. Sehen Sie sich unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) an, um mehr zu erfahren. Auch sehen Sie sich [WebGPU](/de/docs/Web/API/WebGPU_API) an, einen Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige nun veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}} Werte.

## Siehe auch

- {{cssxref("&lt;color&gt;")}} Datentyp
- [CSS-Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values) Leitfaden
- [Farben weise verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
