---
title: Ersetzte Elemente
slug: Web/CSS/Replaced_element
l10n:
  sourceCommit: 71f57bc7f6065d835a5af7c3ced3ef26263c809f
---

{{CSSRef}}

In [CSS](/de/docs/Web/CSS) ist ein **ersetztes Element** ein Element, dessen Darstellung außerhalb des Geltungsbereichs von CSS liegt; es handelt sich um externe Objekte, deren Darstellung unabhängig vom CSS-Formatierungsmodell ist.

Einfacher ausgedrückt sind es Elemente, deren Inhalte von den Stilen des aktuellen Dokuments nicht beeinflusst werden. Die Position des ersetzten Elements kann mit CSS beeinflusst werden, nicht jedoch der Inhalt des ersetzten Elements selbst. Einige ersetzte Elemente, wie z. B. {{HTMLElement("iframe")}}-Elemente, können eigene Stylesheets haben, erben jedoch nicht die Stile des übergeordneten Dokuments.

Die einzige weitere Auswirkung, die CSS auf ein ersetztes Element haben kann, besteht darin, dass es Eigenschaften gibt, die die Positionierung des Inhalts des Elements innerhalb seines Kastens steuern können. Weitere Informationen finden Sie unter [Steuerung der Objektposition innerhalb des Inhaltskastens](#steuerung_der_objektposition_innerhalb_des_inhaltskastens).

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

Die HTML-Spezifikation sagt auch, dass ein {{HTMLElement("input")}}-Element ersetzt werden kann, da {{HTMLElement("input")}}-Elemente des Typs `"image"` ersetzte Elemente ähnlich wie {{HTMLElement("img")}} sind. Andere Formularelemente, einschließlich anderer Typen von {{HTMLElement("input")}}-Elementen, werden ausdrücklich als nicht ersetzte Elemente aufgeführt (die Spezifikation beschreibt deren standardmäßige plattformspezifische Darstellung mit dem Begriff "Widgets").

Objekte, die mithilfe der CSS-{{cssxref("content")}}-Eigenschaft eingefügt werden, sind _anonyme ersetzte Elemente_. Sie sind "anonym", weil sie im HTML-Markup nicht existieren.

## Verwendung von CSS mit ersetzten Elementen

CSS behandelt ersetzte Elemente in einigen Fällen speziell, zum Beispiel bei der Berechnung von Rändern und einigen `auto`-Werten.

Beachten Sie, dass einige, aber nicht alle, ersetzte Elemente intrinsische Dimensionen oder eine definierte Grundlinie haben, die von einigen CSS-Eigenschaften verwendet wird, wie z. B. {{cssxref("vertical-align")}}. Nur ersetzte Elemente können jemals intrinsische Dimensionen haben.

### Steuerung der Objektposition innerhalb des Inhaltskastens

Bestimmte CSS-Eigenschaften können verwendet werden, um zu spezifizieren, wie das Objekt, das innerhalb des ersetzten Elements enthalten ist, innerhalb des Kastens des Elements positioniert werden soll. Diese werden in der [CSS Images](https://drafts.csswg.org/css-images/)-Spezifikation definiert:

- {{cssxref("object-fit")}}
  - : Spezifiziert, wie das Inhaltsobjekt des ersetzten Elements in den Kasten des enthaltenden Elements eingepasst werden soll. Die `object-fit`-Eigenschaft hat keine Wirkung auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}}-Elemente.
- {{cssxref("object-position")}}
  - : Gibt die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb des Kastens des Elements an.

## Siehe auch

- [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
- [Leere Elemente](/de/docs/Glossary/void_element)
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
