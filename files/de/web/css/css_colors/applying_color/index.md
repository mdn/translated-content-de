---
title: Anwenden von Farbe auf HTML-Elemente mit CSS
short-title: Anwenden von Farbe auf HTML-Elemente
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: cdb23fdf261a071951e1e46a0a6c7bc6daa691ff
---

{{CSSRef}}

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, Farbe zu Ihren [HTML](/de/docs/Web/HTML) [Elementen](/de/docs/Web/HTML/Element) hinzuzufügen, um das gewünschte Aussehen zu erzielen. Dieser Leitfaden ist eine Einführung in die Verwendung von CSS, um HTML-Elementen Farben zuzuweisen. Dieser Leitfaden umfasst [Listen der CSS-Eigenschaften, die Farbe in ihren Werten einstellen](#eigenschaften,_die_farbe_haben_können) und wie Sie Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#andere_möglichkeiten,_farbe_zu_verwenden) anwenden können.

> [!NOTE]
> Es ist wichtig, [Farben weise zu verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely). Wählen Sie immer geeignete Farben aus und stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, um Lesbarkeit zu gewährleisten, und berücksichtigen Sie stets die Bedürfnisse von Menschen mit unterschiedlichen visuellen Fähigkeiten.

Um mehr über CSS-Farben als Datentyp zu erfahren, sehen Sie sich die Referenz zum [CSS `<color>` Datentyp](/de/docs/Web/CSS/color_value) und den [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/CSS_colors/Color_values) an.

## Eigenschaften, die Farbe haben können

Auf Elementebene kann alles in HTML Farbe erhalten. Schauen wir uns die verschiedenen Elemente an, die auf der Seite gerendert werden – wie Text, Rahmen usw. Wir bieten Listen der CSS-Eigenschaften an, die Farbe auf jedes anwenden.

Auf fundamentaler Ebene definiert die {{cssxref("color")}}-Eigenschaft die Vordergrundfarbe des Inhalts eines HTML-Elements und die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe des Elements. Diese können auf praktisch jedes Element angewendet werden.

### Text

Immer wenn ein Element gerendert wird, werden diese Eigenschaften verwendet, um die Farbe des Textes, seines Hintergrunds und aller Verzierungen auf dem Text zu bestimmen.

- {{cssxref("color")}}

  - : Die Farbe, die beim Zeichnen des Textes und aller [Textverzierungen](/de/docs/Learn/CSS/Styling_text/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (wie das Hinzufügen von Unter- oder Überlinien, Durchstreichlinien usw.) verwendet wird.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}

  - : Konfiguriert einen Schatteneffekt, der auf den Text angewendet wird. Zu den Optionen für den Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern mit dem Hintergrund verwischt und vermischt wird). Weitere Informationen finden Sie unter [Textschlagschatten](/de/docs/Learn/CSS/Styling_text/Fundamentals#text_drop_shadows).

- {{cssxref("text-decoration-color")}}

  - : Die Standardtextverzierungen (wie Unterstreichungen, Durchstreichungen usw.) haben die Farbe [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). Dieses Schlüsselwort repräsentiert den aktuellen Wert der `color`-Eigenschaft. Sie können diesen Wert jedoch überschreiben und eine andere Farbe für sie mit der `text-decoration-color`-Eigenschaft verwenden.

- {{cssxref("text-emphasis-color")}}

  - : Die Farbe, die beim Rendern von Hervorhebungssymbolen neben jedem Zeichen im Text verwendet wird. Dies wird hauptsächlich beim Zeichnen von Text für ostasiatische Sprachen verwendet.

- {{cssxref("caret-color")}}

  - : Die Farbe, die beim Zeichnen des {{Glossary("caret", "Eingabecursors")}} (manchmal auch als Texteingabecursor bezeichnet) innerhalb des Elements verwendet wird. Dies ist nur in editierbaren Elementen nützlich, wie z.B. {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder in Elementen, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit irgendeiner Art von Inhalt und hat neben dem Inhalt eine Hintergrund- und eine Rahmenfarbe.

- [Rahmen](#borders_2)

  - : Sehen Sie den Abschnitt [Rahmen](#borders_2) für eine Liste der CSS-Eigenschaften, die Sie verwenden können, um die Farben der Rahmen einer Box festzulegen.

- {{cssxref("background-color")}}

  - : Die Hintergrundfarbe, die in den Bereichen des Elements verwendet wird, die keinen Vordergrundinhalt haben.

- {{cssxref("box-shadow")}}

  - : Konfiguriert Einfügeschatten- und Abwurfschatteneffekte auf der Box. Zu den Optionen für jeden Schatten gehört die Grundfarbe des Schattens (die dann basierend auf den anderen Parametern mit dem Hintergrund verwischt und vermischt wird).

- {{cssxref("column-rule-color")}}

  - : Die Farbe, die beim Zeichnen der Linie verwendet wird, die Textspalten trennt, wenn der [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) verwendet wird.

- {{cssxref("outline-color")}}

  - : Die Farbe, die beim Zeichnen einer Umrandung um das äußere Element verwendet wird. Diese Umrandung unterscheidet sich vom Rahmen dadurch, dass sie keinen Platz im Dokument einnimmt. Umrandungen nehmen nicht am [Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model) teil und überschneiden sich mit anderem Inhalt. Umrandungen werden im Allgemeinen als Fokusindikatoren verwendet, um anzuzeigen, welches Element derzeit den Fokus hat und Tastatureingaben empfangen wird.

### Rahmen

Jedes Element kann einen [Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) um sich herum gezeichnet haben. Ein grundlegender Elementrahmen ist eine Linie, die um die Kanten des Inhalts des Elements gezeichnet wird. Sehen Sie [Das Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model), um mehr über die Beziehung zwischen Elementen und ihren Rahmen zu erfahren, und den Artikel [Rahmen mit CSS stylen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders), um mehr über das Anwenden von Styles auf Rahmen zu erfahren.

Sie können die {{cssxref("border")}}-Kurzschreibweise verwenden, mit der Sie alles am Rahmen in einem Schritt konfigurieren können (einschließlich nicht farblicher Eigenschaften des Rahmens, wie die [Breite](/de/docs/Web/CSS/border-width), den [Stil](/de/docs/Web/CSS/border-style) (durchgezogen, gestrichelt usw.) und so weiter.

- {{cssxref("border-color")}} Kurzschreibweise

  - : Gibt eine einzelne Farbe an, die für jede Seite des Rahmens des Elements verwendet wird.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, und {{cssxref("border-bottom-color")}}

  - : Ermöglicht es Ihnen, die Farbe der entsprechenden Seite des Rahmens des Elements festzulegen.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}

  - : Mit diesen können Sie die Farbe festlegen, die zum Zeichnen der Grenzen verwendet wird, die dem Start- und Endblock des umgebenden Rahmens am nächsten liegen. In einem von links nach rechts verlaufenden Schreibmodus (wie z.B. im Englischen) ist der Startblockrand der obere Rand und das Ende des Blocks ist der untere Rand. Dies unterscheidet sich vom Inline-Start und -Ende, welche die linken und rechten Ränder sind (entsprechend dort, wo jede Textzeile im Feld beginnt und endet).

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}

  - : Diese ermöglichen es Ihnen, die Ränder des Rahmens zu färben, die dem Beginn und dem Ende des Zeilenanfangs im Textbox am nächsten sind. Welche Seite dies ist, kann je nach {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}-Eigenschaften variieren, die typischerweise (aber nicht immer) verwendet werden, um die Textausrichtung basierend auf der angezeigten Sprache anzupassen. Ist der Text des Feldes beispielsweise von rechts nach links festgelegt, wird die `border-inline-start-color` auf die rechte Seite des Rahmens angewendet.

## Farben als Werte in Stylesheets angeben

Nun, da Sie wissen, welche [CSS-Eigenschaften Farben auf Elemente anwenden](#eigenschaften,_die_farbe_haben_können) können, können Sie beginnen, Farben zu Ihren Websites hinzuzufügen. Lassen Sie uns einige Beispiele für die Verwendung von Farben innerhalb eines {{Glossary("stylesheet", "Stylesheets")}} betrachten. In diesem Beispiel verwenden wir mehrere der zuvor erwähnten Eigenschaften, wobei das Konzept der Farbverwendung in CSS unabhängig von der Eigenschaft dasselbe ist.

Betrachten wir zuerst das Ergebnis, bevor wir den Code betrachten, den wir dafür benötigen:

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

Hier haben wir einen umschließenden {{HTMLElement("div")}}, der zwei Kind-`<div>`s enthält, wobei jedes ein einzelnes Kind-Absatz-Element ({{HTMLElement("p")}}) hat. Jedes Inhalts-`<div>` erhält ein anderes Aussehen.

### CSS

Lassen Sie uns das CSS, das das obige Ergebnis erzeugt, Stück für Stück betrachten.

> [!NOTE]
> Wir verwenden in diesem Beispiel mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/CSS_colors/Color_values), um deren Verwendung zu demonstrieren. Dies wird für Produktionscode nicht empfohlen. Wenn Sie CSS schreiben, verwenden Sie den für Sie und Ihr Team intuitivsten Werttyp.

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

Die `.wrapper`-Klasse wird verwendet, um die Stile für das {{HTMLElement("div")}} festzulegen, das all unsere anderen Inhalte umschließt. Dies legt die Höhe des Containers mithilfe von {{cssxref("height")}} fest und ermöglicht dem Blockschaltelement, standardmäßig 100% seiner Elternelement zu nutzen. Durch Setzen von {{cssxref("display")}} auf `flex` und Hinzufügen eines `10px`-{{cssxref("gap")}} entsteht ein flexibler Container, der die Kinder nebeneinander mit einem Abstand zwischen allen Kindern des Containers anordnet. Wir verwenden {{cssxref("flex")}}, um die flexiblen Kinder wachsen zu lassen, um den Container zu füllen; dies betrifft nicht den Flex-Container selbst.

Interessanter für unsere Diskussion hier ist die Verwendung der {{cssxref("border")}}-Eigenschaft, um einen Rahmen um den äußeren Rand des Elements zu erzeugen. Dieser Rahmen ist eine durchgezogene Linie, 6 Pixel breit, in der [benannten Farbe](/de/docs/Web/CSS/named-color) `mediumturquoise`.

Innerhalb unseres Wrappers haben wir einen linken Kasten und einen rechten Kasten.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die `.boxLeft`-Klasse, die verwendet wird, um den Kasten auf der linken Seite zu stylen, legt die Farbe des Hintergrunds und der Umrandung fest:

- Die Hintergrundfarbe des Kastens wird geändert, indem der Wert der CSS-{{cssxref("background-color")}}-Eigenschaft auf `rgb(245 130 130)` geändert wird, unter Verwendung der {{CSSXref("color_value/rgb", "rgb()")}}-Funktionsnotation.
- Eine Umrandung wird für den Kasten definiert. Im Gegensatz zum herrschenden {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout überhaupt nicht; sie zeichnet über das, was außerhalb des Box-Elements liegt, statt Raum zu nehmen, wie es ein regulärer Rahmen macht. Diese Umrandung ist eine feste, dunkelrote Linie, die zwei Pixel dick ist. Beachten Sie die Verwendung des Schlüsselworts `darkred` bei der Farbangabe.
- Beachten Sie, dass wir die Textfarbe nicht explizit einstellen. Das bedeutet, dass der Wert von {{cssxref("color")}} vom nächstgelegenen umschließenden Element, das ihn definiert, vererbt wird. Standardmäßig ist das Schwarz.

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
> Wir haben die `text-decoration-*`-Stile separat aufgenommen, da Safari {{cssxref("text-decoration")}} als Kurzschreibweise nicht unterstützt.

Abschließend setzt die `.boxRight`-Klasse mehrere Stile auf der Box, die rechts gezeichnet wird. Dann werden folgende Farben (mithilfe von fünf verschiedenen Arten, [Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values) zu deklarieren) festgelegt:

- Die `background-color` wird mit der {{CSSXref("color_value/hwb", "hwb()")}}-Funktionsnotation — `hwb(270deg 63% 13%)` eingestellt. Dies ist eine mittlere Violettfarbe.
- Die Umrandung des Kastens wird mit `outline` verwendet, um zu spezifizieren, dass der Kasten in einer vier Pixel dicken, gestrichelten Linie umrandet werden sollte, deren Farbe ein etwas tieferes Violett mit der sechsstelligen {{cssxref("hex-color")}} `#6e1478` ist.
- Die Vordergrund-(Text-)farbe wird durch Setzen der {{cssxref("color")}}-Eigenschaft mit der {{CSSXref("color_value/hsl", "hsl()")}}-Funktionsnotation — `hsl(0deg 100% 100%)` angegeben. Dies ist eine der vielen Möglichkeiten, die Farbe Weiß anzugeben.
- Wir fügen einen grünen, wellenförmigen Strich unter dem Text mit der {{cssxref("text-decoration")}} Kurzschreibweise hinzu, zusammen mit den Langhänd-Komponenten für die Browser-Kompatibilität. Wir haben den dreistelligen {{cssxref("hex-color")}} `#8f8` verwendet, der dem Äquivalent von `#88ff88` entspricht.
- Schließlich wird dem Text ein wenig Schatten hinzugefügt, indem {{cssxref("text-shadow")}} verwendet wird. Sein `color` Parameter ist auf `black` gesetzt, einem {{cssxref("named-color")}} Wert.

Wir haben fünf verschiedene Farb-Syntaxen verwendet, um zu demonstrieren, was möglich ist. In der realen Welt sollten Sie und Ihr Team vorzugsweise eine bevorzugte Farbschreibweise wählen, wobei jeder, der an einem Code-Bestand arbeitet, dieselbe Farbsyntax verwendet.

## Andere Möglichkeiten, Farbe zu verwenden

CSS ist nicht die einzige Web-Technologie, die Farbe unterstützt. Andere Beispiele sind:

- Die HTML [Canvas API](/de/docs/Web/API/Canvas_API)
  - : Ermöglicht das Zeichnen von 2D-Bitmapped-Grafiken in einem {{HTMLElement("canvas")}}-Element. Siehe unser [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial), um mehr zu erfahren.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht das Erstellen von Bildern mit Befehlen, die bestimmte Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert und können direkt in eine Webseite eingebettet oder mit dem {{HTMLElement("img")}}-Element auf der Seite platziert werden, genau wie ein anderer Bildtyp.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API für das Zeichnen von hochleistungsfähigen 2D- und 3D-Grafiken im Web. Siehe unser [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial), um mehr zu erfahren. Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), einen Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige inzwischen veraltete HTML-Attribute akzeptierten Farben als Werte, wie `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}} und drei- oder sechsstellige {{cssxref("hex-color")}} Werte.

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values) Leitfaden
- [Farben weise nutzen](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS Farbmodul](/de/docs/Web/CSS/CSS_colors)
- [Grafiken zeichnen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Grafiken im Web](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#other_graphics_on_the_web)
