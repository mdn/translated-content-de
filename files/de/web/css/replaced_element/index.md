---
title: Ersetzte Elemente
slug: Web/CSS/Replaced_element
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

In [CSS](/de/docs/Web/CSS) ist ein **ersetztes Element** ein Element, dessen Darstellung außerhalb des Geltungsbereichs von CSS liegt; es handelt sich um externe Objekte, deren Darstellung unabhängig vom CSS-Formatierungsmodell ist.

Einfacher ausgedrückt: Es handelt sich um Elemente, deren Inhalte nicht von den Stilen des aktuellen Dokuments beeinflusst werden. Die Position des ersetzten Elements kann mithilfe von CSS beeinflusst werden, jedoch nicht der Inhalt des ersetzten Elements selbst. Einige ersetzte Elemente, wie zum Beispiel {{HTMLElement("iframe")}}-Elemente, können eigene Stylesheets haben, aber sie erben nicht die Stile des übergeordneten Dokuments.

Der einzige weitere Effekt, den CSS auf ein ersetztes Element haben kann, ist, dass es Eigenschaften gibt, die die Positionierung des Inhalts des Elements innerhalb seines Rahmens steuern. Weitere Informationen hierzu finden Sie unter [Positionierung von Objekten innerhalb des Inhaltsrahmens](#positionierung_von_objekten_innerhalb_des_inhaltsrahmens).

## Ersetzte Elemente

Typische ersetzte Elemente sind:

- {{HTMLElement("img")}}
- {{HTMLElement("video")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fencedframe")}}

Einige Elemente werden nur unter bestimmten Umständen als ersetzte Elemente behandelt:

- {{HTMLElement("option")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}

Die HTML-Spezifikation besagt auch, dass ein {{HTMLElement("input")}}-Element ersetzt werden kann, da {{HTMLElement("input")}}-Elemente des Typs `"image"` ersetzte Elemente ähnlich wie {{HTMLElement("img")}} sind. Andere Formularsteuerelemente, einschließlich anderer Typen von {{HTMLElement("input")}}-Elementen, werden jedoch explizit als nicht ersetzte Elemente aufgeführt (die Spezifikation beschreibt deren standardmäßige plattformabhängige Darstellung mit dem Begriff "Widgets").

Objekte, die mit der CSS-Eigenschaft {{cssxref("content")}} eingefügt werden, sind _anonyme ersetzte Elemente_. Sie sind "anonym", weil sie nicht im HTML-Markup enthalten sind.

## Verwendung von CSS mit ersetzten Elementen

CSS verarbeitet ersetzte Elemente in einigen Fällen speziell, zum Beispiel beim Berechnen von Abständen und einigen `auto`-Werten.

Beachten Sie, dass einige, aber nicht alle, ersetzten Elemente intrinsische Abmessungen oder eine definierte Basislinie haben, die von einigen CSS-Eigenschaften wie {{cssxref("vertical-align")}} verwendet wird. Nur ersetzte Elemente können überhaupt intrinsische Abmessungen haben.

### Positionierung von Objekten innerhalb des Inhaltsrahmens

Bestimmte CSS-Eigenschaften können verwendet werden, um zu bestimmen, wie das Objekt innerhalb des ersetzten Elements im Rahmen des Elements positioniert werden soll. Diese Eigenschaften sind in der [CSS Images](https://drafts.csswg.org/css-images/)-Spezifikation definiert:

- {{cssxref("object-fit")}}
  - : Gibt an, wie das Inhaltsobjekt des ersetzten Elements in den Rahmen des enthaltenen Elements eingepasst werden soll. Die `object-fit`-Eigenschaft hat keine Wirkung auf die Elemente {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}}.
- {{cssxref("object-position")}}
  - : Gibt die Ausrichtung des Inhaltsobjekts des ersetzten Elements im Rahmen des Elements an.

## Siehe auch

- [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
- {{Glossary("void_element", "Leere Elemente")}}
- CSS Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modelle](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Zusammenfallende Ränder](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
