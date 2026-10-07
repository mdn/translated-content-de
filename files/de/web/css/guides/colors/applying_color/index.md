---
title: HTML-Elemente mit CSS einfärben
short-title: Farben anwenden
slug: Web/CSS/Guides/Colors/Applying_color
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Mit [CSS](/de/docs/Web/CSS) gibt es viele Möglichkeiten, [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) Farben zuzuweisen und so das gewünschte Erscheinungsbild zu gestalten. Dieser Leitfaden führt in die Anwendung von Farben auf HTML-Elemente mit CSS ein. Er enthält [Listen der CSS-Eigenschaften, deren Werte Farben festlegen können](#eigenschaften,_die_farben_annehmen_können), und zeigt, wie Sie Farben sowohl [in Stylesheets](#farben_als_werte_in_stylesheets_angeben) als auch [auf andere Weise](#weitere_möglichkeiten,_farben_zu_verwenden) verwenden können.

> [!NOTE]
> Es ist wichtig, [Farben mit Bedacht einzusetzen](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely). Wählen Sie stets geeignete Farben und achten Sie auf einen ausreichenden Kontrast zwischen Text und Hintergrund, damit der Text gut lesbar ist. Berücksichtigen Sie dabei immer auch die Bedürfnisse von Menschen mit unterschiedlichen Sehfähigkeiten.

Weitere Informationen über CSS-Farben als Datentyp finden Sie in der Referenz zum [CSS-Datentyp `<color>`](/de/docs/Web/CSS/Reference/Values/color_value) und im [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/Guides/Colors/Color_values).

## Eigenschaften, die Farben annehmen können

Auf Elementebene lässt sich allem in HTML eine Farbe zuweisen. Betrachten wir die verschiedenen Bestandteile, die auf einer Seite dargestellt werden – etwa Text oder Rahmen. Für jeden Bestandteil listen wir die CSS-Eigenschaften auf, mit denen sich seine Farbe festlegen lässt.

Grundsätzlich legt die Eigenschaft {{cssxref("color")}} die Vordergrundfarbe des Inhalts eines HTML-Elements fest, während {{cssxref("background-color")}} seine Hintergrundfarbe bestimmt. Beide können für nahezu jedes Element verwendet werden.

### Text

Bei der Darstellung eines Elements bestimmen die folgenden Eigenschaften die Farbe des Textes, seines Hintergrunds und seiner Textdekorationen.

- {{cssxref("color")}}
  - : Die Farbe, mit der der Text und etwaige [Textdekorationen](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) dargestellt werden, beispielsweise Unterstreichungen, Überstreichungen oder durchgestrichene Linien.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe des Textes.

- {{cssxref("text-shadow")}}
  - : Konfiguriert einen Schatteneffekt für den Text. Zu den Einstellungen gehört die Grundfarbe des Schattens, die anhand der übrigen Parameter weichgezeichnet und mit dem Hintergrund überblendet wird. Weitere Informationen finden Sie unter [Textschatten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows).

- {{cssxref("text-decoration-color")}}
  - : Die Farbe von Textdekorationen wie Unterstreichungen und Durchstreichungen ist standardmäßig [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword). Dieses Schlüsselwort steht für den aktuellen Wert der Eigenschaft `color`. Mit `text-decoration-color` können Sie stattdessen eine andere Farbe festlegen.

- {{cssxref("text-emphasis-color")}}
  - : Die Farbe der Hervorhebungszeichen, die neben jedem Zeichen des Textes dargestellt werden. Dies wird vor allem bei Texten in ostasiatischen Sprachen verwendet.

- {{cssxref("caret-color")}}
  - : Die Farbe der {{Glossary("caret", "Einfügemarke")}}, die auch als Texteingabecursor bezeichnet wird. Diese Eigenschaft ist nur bei bearbeitbaren Elementen sinnvoll, etwa {{HTMLElement("input")}} und {{HTMLElement("textarea")}} oder Elementen, deren HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist.

### Boxen

Jedes Element ist eine Box mit einem Inhalt sowie einem Hintergrund und einem Rahmen.

- [Rahmen](#borders_2)
  - : Im Abschnitt [Rahmen](#borders_2) finden Sie eine Liste der CSS-Eigenschaften, mit denen Sie die Farben der Rahmen einer Box festlegen können.

- {{cssxref("background-color")}}
  - : Die Hintergrundfarbe für Bereiche des Elements, in denen kein Vordergrundinhalt dargestellt wird.

- {{cssxref("box-shadow")}}
  - : Konfiguriert innere Schatten und Schlagschatten für die Box. Zu den Einstellungen jedes Schattens gehört seine Grundfarbe, die anhand der übrigen Parameter weichgezeichnet und mit dem jeweiligen Hintergrund überblendet wird.

- {{cssxref("column-rule-color")}}
  - : Die Farbe der Trennlinie zwischen Textspalten bei Verwendung eines [mehrspaltigen CSS-Layouts](/de/docs/Web/CSS/Guides/Multicol_layout).

- {{cssxref("outline-color")}}
  - : Die Farbe einer Konturlinie um die Außenseite des Elements. Anders als für einen Rahmen wird für diese Konturlinie im Dokument kein Platz reserviert. Konturlinien sind nicht Teil des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) und können andere Inhalte überlagern. Sie werden in der Regel als Fokusindikatoren verwendet und zeigen an, welches Element gerade den Fokus hat und Tastatureingaben empfängt.

### Rahmen

Jedes Element kann von einem Rahmen umgeben sein. Ein einfacher Elementrahmen ist eine Linie um die Ränder des Elementinhalts. Unter [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) erfahren Sie mehr über das Verhältnis zwischen Elementen und ihren Rahmen. Der Artikel [Rahmen mit CSS gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) erläutert die Gestaltung von Rahmen.

Mit der Kurzschreibweise {{cssxref("border")}} können Sie sämtliche Rahmeneigenschaften auf einmal festlegen, darunter auch Eigenschaften, die keine Farben sind, etwa die [Breite](/de/docs/Web/CSS/Reference/Properties/border-width) und den [Stil](/de/docs/Web/CSS/Reference/Properties/border-style) (durchgezogen, gestrichelt usw.).

- Kurzschreibweise {{cssxref("border-color")}}
  - : Legt eine einzige Farbe für alle Seiten des Elementrahmens fest.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}} und {{cssxref("border-bottom-color")}}
  - : Legen die Farbe der jeweiligen Seite des Elementrahmens fest.

- {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}}
  - : Legen die Farbe der Rahmenseiten am Anfang und Ende der Blockachse fest. Bei einer Schreibrichtung von links nach rechts, wie im Deutschen, ist der Blockanfang die obere und das Blockende die untere Kante. Davon unterscheiden sich Anfang und Ende der Inline-Achse: Sie entsprechen der linken und rechten Kante, an denen die Textzeilen innerhalb der Box beginnen beziehungsweise enden.

- {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}}
  - : Legen die Farben der Rahmenseiten am Anfang und Ende der Textzeilen innerhalb der Box fest. Welche Seiten das sind, hängt von den Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} ab. Diese werden üblicherweise, aber nicht ausschließlich, verwendet, um die Textrichtung an die dargestellte Sprache anzupassen. Wird der Text in der Box beispielsweise von rechts nach links dargestellt, gilt `border-inline-start-color` für die rechte Rahmenseite.

## Farben als Werte in Stylesheets angeben

Nachdem Sie wissen, mit welchen [CSS-Eigenschaften Sie Elementen Farben zuweisen können](#eigenschaften,_die_farben_annehmen_können), können Sie Ihre Websites einfärben. Sehen wir uns einige Beispiele für die Verwendung von Farben in einem {{Glossary("style_sheet", "Stylesheet")}} an. In diesem Beispiel verwenden wir mehrere der bereits erwähnten Eigenschaften. Das Grundprinzip der Farbzuweisung mit CSS bleibt unabhängig von der jeweiligen Eigenschaft gleich.

Sehen wir uns zuerst das Ergebnis an, bevor wir den dafür benötigten Code betrachten:

{{EmbedLiveSample("Specifying colors as values in stylesheets", 650, 150)}}

### HTML

Das HTML für das obige Beispiel sieht so aus:

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

Hier enthält ein umschließendes {{HTMLElement("div")}} zwei untergeordnete `<div>`-Elemente, die jeweils einen einzelnen Absatz ({{HTMLElement("p")}}) enthalten. Die beiden `<div>`-Elemente erhalten unterschiedliche Gestaltungen.

### CSS

Sehen wir uns das CSS, das dieses Ergebnis erzeugt, Schritt für Schritt an.

> [!NOTE]
> In diesem Beispiel verwenden wir mehrere [verschiedene CSS-Farbwerttypen](/de/docs/Web/CSS/Guides/Colors/Color_values), um ihre Verwendung zu demonstrieren. Für Produktionscode ist das nicht empfehlenswert. Verwenden Sie beim Schreiben von CSS den Werttyp, der für Sie und Ihr Team am verständlichsten ist.

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

Mit der Klasse `.wrapper` gestalten wir das {{HTMLElement("div")}}, das den gesamten übrigen Inhalt umschließt. Mit {{cssxref("height")}} legen wir die Höhe des Containers fest. Die Breite dieses Blockelements bleibt beim Standardwert von 100 % der Breite seines Elternelements. Indem wir {{cssxref("display")}} auf `flex` setzen und mit {{cssxref("gap")}} einen Abstand von `10px` hinzufügen, entsteht ein Flex-Container, der seine untergeordneten Elemente nebeneinander mit Abstand anordnet. Mit {{cssxref("flex")}} sorgen wir dafür, dass die Flex-Elemente wachsen und den Container ausfüllen. Auf den Flex-Container selbst hat diese Eigenschaft keinen Einfluss.

Für unser Thema ist besonders die Eigenschaft {{cssxref("border")}} interessant, mit der wir einen Rahmen um die Außenkante des Elements festlegen. Dieser Rahmen ist eine durchgezogene, sechs Pixel breite Linie in der [benannten Farbe](/de/docs/Web/CSS/Reference/Values/named-color) `mediumturquoise`.

Innerhalb des umschließenden Elements befinden sich eine linke und eine rechte Box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

Die Klasse `.boxLeft` gestaltet die linke Box und legt ihre Hintergrundfarbe und Konturlinie fest:

- Die Hintergrundfarbe der Box wird mit der CSS-Eigenschaft {{cssxref("background-color")}} auf `rgb(245 130 130)` gesetzt. Dabei verwenden wir die funktionale Notation {{CSSXref("color_value/rgb", "rgb()")}}.
- Für die Box wird eine Konturlinie definiert. Anders als der häufiger verwendete {{cssxref("border")}} beeinflusst {{cssxref("outline")}} das Layout nicht: Die Konturlinie wird über Inhalte außerhalb der Elementbox gezeichnet, statt wie bei `border` Platz zu beanspruchen. Hier ist sie eine durchgezogene, zwei Pixel breite dunkelrote Linie. Beachten Sie, dass die Farbe mit dem Schlüsselwort `darkred` angegeben wird.
- Die Textfarbe wird nicht ausdrücklich festgelegt. Daher wird der Wert von {{cssxref("color")}} vom nächstgelegenen umschließenden Element geerbt, das ihn definiert. Standardmäßig ist die Farbe Schwarz.

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
> Wir haben die `text-decoration-*`-Stile einzeln angegeben, weil Safari {{cssxref("text-decoration")}} nicht als Kurzschreibweise unterstützt.

Die Klasse `.boxRight` legt schließlich mehrere Stile für die rechte Box fest. Dabei werden die folgenden Farben mit fünf verschiedenen Arten der Angabe von [Farbwerten](/de/docs/Web/CSS/Guides/Colors/Color_values) festgelegt:

- `background-color` wird mit der funktionalen Notation {{CSSXref("color_value/hwb", "hwb()")}} auf `hwb(270deg 63% 13%)` gesetzt. Das ergibt einen mittleren Lilaton.
- Mit `outline` erhält die Box eine vier Pixel breite gestrichelte Konturlinie. Ihre etwas dunklere violette Farbe wird durch den sechsstelligen {{cssxref("hex-color")}}-Wert `#6e1478` angegeben.
- Die Vordergrundfarbe (Textfarbe) wird über die Eigenschaft {{cssxref("color")}} mit der funktionalen Notation {{CSSXref("color_value/hsl", "hsl()")}} auf `hsl(0deg 95% 95%)` gesetzt. Das ergibt einen sehr hellen Rosaton.
- Mit der Kurzschreibweise {{cssxref("text-decoration")}} fügen wir unter dem Text eine grüne Wellenlinie hinzu. Zusätzlich verwenden wir die zugehörige Einzel-Eigenschaft für die Browser-Kompatibilität. Der dreistellige {{cssxref("hex-color")}}-Wert `#8f8` entspricht `#88ff88`.
- Schließlich erhält der Text mit {{cssxref("text-shadow")}} einen leichten Schatten. Dessen `color`-Parameter wird auf `black` gesetzt, einen {{cssxref("named-color")}}-Wert.

Wir haben fünf verschiedene Farbsyntaxen verwendet, um die Möglichkeiten zu demonstrieren. In der Praxis sollten Sie sich mit Ihrem Team möglichst auf eine bevorzugte Farbnotation einigen, damit alle Beteiligten in derselben Codebasis dieselbe Syntax verwenden.

## Weitere Möglichkeiten, Farben zu verwenden

CSS ist nicht die einzige Webtechnologie, die Farben unterstützt. Weitere Beispiele sind:

- Die HTML-[Canvas API](/de/docs/Web/API/Canvas_API)
  - : Mit ihr können Sie zweidimensionale Rastergrafiken in einem {{HTMLElement("canvas")}}-Element zeichnen. Weitere Informationen finden Sie in unserem [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Damit können Sie Bilder mithilfe von Befehlen erstellen, die bestimmte Formen, Muster und Linien zeichnen. SVG-Befehle sind als XML formatiert. Sie können direkt in eine Webseite eingebettet oder wie andere Bilder mit dem Element {{HTMLElement("img")}} in die Seite eingefügt werden.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Die Web Graphics Library ist eine auf OpenGL ES basierende API zum Zeichnen leistungsfähiger 2D- und 3D-Grafiken im Web. Weitere Informationen finden Sie in unserem [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial). Siehe auch [WebGPU](/de/docs/Web/API/WebGPU_API), einen Nachfolger von WebGL für moderne GPUs.

> [!NOTE]
> Einige inzwischen veraltete HTML-Attribute akzeptierten Farben als Werte, beispielsweise `bgcolor` und `vlink`. Diese Attribute akzeptierten nur {{cssxref("named-color")}}-Werte und drei- oder sechsstellige {{cssxref("hex-color")}}-Werte.

## Siehe auch

- Datentyp {{cssxref("&lt;color&gt;")}}
- [Leitfaden zu CSS-Farbwerten](/de/docs/Web/CSS/Guides/Colors/Color_values)
- [Farben mit Bedacht einsetzen](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [CSS-Farbmodul](/de/docs/Web/CSS/Guides/Colors)
- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
