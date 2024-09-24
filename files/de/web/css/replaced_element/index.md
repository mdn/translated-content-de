---
title: Ersetzte Elemente
slug: Web/CSS/Replaced_element
l10n:
  sourceCommit: 71f57bc7f6065d835a5af7c3ced3ef26263c809f
---

{{CSSRef}}

In [CSS](/de/docs/Web/CSS) ist ein **ersetztes Element** ein Element, dessen Darstellung außerhalb des Bereichs von CSS liegt; es sind externe Objekte, deren Darstellung unabhängig vom CSS-Formatierungsmodell ist.

Einfacher ausgedrückt sind es Elemente, deren Inhalte nicht von den Stilen des aktuellen Dokuments beeinflusst werden. Die Position des ersetzten Elements kann mit CSS beeinflusst werden, jedoch nicht der Inhalt des ersetzten Elements selbst. Einige ersetzte Elemente, wie {{HTMLElement("iframe")}}-Elemente, können eigene Stylesheets haben, erben jedoch nicht die Stile des übergeordneten Dokuments.

Der einzige weitere Einfluss, den CSS auf ein ersetztes Element haben kann, ist, dass es Eigenschaften gibt, die die Positionierung des Inhalts des Elements innerhalb seines Rahmens unterstützen. Weitere Informationen finden Sie unter [Positionierung von Objekten innerhalb der Inhaltsbox steuern](#positionierung_von_objekten_innerhalb_der_inhaltsbox_steuern).

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

Die HTML-Spezifikation sagt auch, dass ein {{HTMLElement("input")}}-Element ersetzt werden kann, weil {{HTMLElement("input")}}-Elemente vom Typ `"image"` ersetzte Elemente ähnlich wie {{HTMLElement("img")}} sind. Andere Formularelemente, einschließlich anderer Arten von {{HTMLElement("input")}}-Elementen, werden jedoch ausdrücklich als nicht ersetzte Elemente aufgeführt (die Spezifikation beschreibt deren standardmäßige plattformspezifische Darstellung mit dem Begriff "Widgets").

Objekte, die mit der CSS-Eigenschaft {{cssxref("content")}} eingefügt werden, sind _anonyme ersetzte Elemente_. Sie sind "anonym", weil sie nicht im HTML-Markup existieren.

## Verwendung von CSS mit ersetzten Elementen

CSS behandelt ersetzte Elemente in einigen Fällen speziell, wie zum Beispiel bei der Berechnung von Rändern und einigen `auto`-Werten.

Es ist zu beachten, dass einige, aber nicht alle ersetzten Elemente intrinsische Abmessungen oder eine definierte Basislinie haben, die von einigen CSS-Eigenschaften wie {{cssxref("vertical-align")}} verwendet wird. Nur ersetzte Elemente können jemals intrinsische Abmessungen haben.

### Positionierung von Objekten innerhalb der Inhaltsbox steuern

Bestimmte CSS-Eigenschaften können verwendet werden, um festzulegen, wie das innerhalb des ersetzten Elements enthaltene Objekt innerhalb des Bereichs des Elements platziert werden soll. Diese werden von der [CSS Images](https://drafts.csswg.org/css-images/)-Spezifikation definiert:

- {{cssxref("object-fit")}}
  - : Gibt an, wie das Inhaltsobjekt des ersetzten Elements an den Rahmen des enthaltenen Elements angepasst werden soll. Die `object-fit`-Eigenschaft hat keine Wirkung auf {{HTMLElement("iframe")}}-, {{HTMLElement("embed")}}- und {{HTMLElement("fencedframe")}}-Elemente.
- {{cssxref("object-position")}}
  - : Gibt die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb des Rahmens des Elements an.

## Siehe auch

- [HTML Spec](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
- {{glossary("void element", "Leere Elemente")}}
- Wichtige Konzepte von CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Rules](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Syntax der Wertedefinition](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise von Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
