---
title: Replaced elements
slug: Web/CSS/Replaced_element
l10n:
  sourceCommit: 71f57bc7f6065d835a5af7c3ced3ef26263c809f
---

{{CSSRef}}

In [CSS](/de/docs/Web/CSS) ist ein **replaced element** ein Element, dessen Darstellung außerhalb des Bereichs von CSS liegt; es sind externe Objekte, deren Darstellung unabhängig vom CSS-Formatierungsmodell ist.

Einfacher ausgedrückt, sind es Elemente, deren Inhalt nicht von den Stilen des aktuellen Dokuments beeinflusst wird. Die Position des ersetzten Elements kann mit CSS beeinflusst werden, jedoch nicht der Inhalt des ersetzten Elements selbst. Einige ersetzte Elemente, wie z.B. {{HTMLElement("iframe")}}-Elemente, können eigene Stylesheets haben, erben jedoch nicht die Stile des übergeordneten Dokuments.

Der einzige andere Einfluss, den CSS auf ein ersetzt Element haben kann, ist, dass es Eigenschaften gibt, die die Positionierung des Inhalts des Elements innerhalb seines Kastens steuern. Siehe [Positionierung des Objekts innerhalb des Inhaltskastens steuern](#positionierung_des_objekts_innerhalb_des_inhaltskastens_steuern) für weitere Informationen.

## Ersetzte Elemente

Typische ersetzte Elemente sind:

- {{HTMLElement("img")}}
- {{HTMLElement("video")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fencedframe")}}

Einige Elemente werden nur in bestimmten Fällen als ersetzte Elemente behandelt:

- {{HTMLElement("option")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}

Die HTML-Spezifikation besagt auch, dass ein {{HTMLElement("input")}}-Element ersetzt werden kann, da {{HTMLElement("input")}}-Elemente des Typs `"image"` ersetzte Elemente ähnlich zu {{HTMLElement("img")}} sind. Andere Formularelemente, einschließlich anderer Typen von {{HTMLElement("input")}}-Elementen, sind jedoch ausdrücklich als nicht ersetzte Elemente aufgeführt (die Spezifikation beschreibt ihre standardmäßige plattformspezifische Darstellung mit dem Begriff "Widgets").

Objekte, die mit der CSS-Eigenschaft {{cssxref("content")}} eingefügt werden, sind _anonyme ersetzte Elemente_. Sie sind „anonym“, weil sie im HTML-Markup nicht vorhanden sind.

## Verwendung von CSS mit ersetzten Elementen

CSS behandelt ersetzte Elemente in einigen Fällen spezifisch, wie beim Berechnen von Rändern und einigen `auto`-Werten.

Beachten Sie, dass einige, aber nicht alle, ersetzte Elemente intrinsische Abmessungen oder eine definierte Baseline haben, die von einigen CSS-Eigenschaften wie {{cssxref("vertical-align")}} verwendet wird. Nur ersetzte Elemente können jemals intrinsische Abmessungen haben.

### Positionierung des Objekts innerhalb des Inhaltskastens steuern

Bestimmte CSS-Eigenschaften können verwendet werden, um festzulegen, wie das innerhalb des ersetzten Elements enthaltene Objekt innerhalb des Bereichs des Elements positioniert werden soll. Diese sind in der [CSS Images](https://drafts.csswg.org/css-images/)-Spezifikation definiert:

- {{cssxref("object-fit")}}
  - : Gibt an, wie das Inhaltsobjekt des ersetzten Elements an den Kasten des enthaltenen Elements angepasst werden sollte. Die `object-fit`-Eigenschaft hat keine Wirkung auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}}-Elemente.
- {{cssxref("object-position")}}
  - : Gibt die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb des Kastens des Elements an.

## Siehe auch

- [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
- {{Glossary("void_element", "Leere Elemente")}}
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Syntax der Wertedefinition](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
