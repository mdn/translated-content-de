---
title: Ersetzte Elemente
slug: Web/CSS/Replaced_element
l10n:
  sourceCommit: 93f54a9e0ceb65880b951986cc47bee87336f156
---

{{CSSRef}}

In [CSS](/de/docs/Web/CSS) ist ein **ersetztes Element** ein Element, dessen Darstellung außerhalb des Anwendungsbereichs von CSS liegt; es sind externe Objekte, deren Darstellung unabhängig vom CSS-Formatierungsmodell ist.

Einfacher ausgedrückt sind es Elemente, deren Inhalte nicht von den Stilen des aktuellen Dokuments beeinflusst werden. Die Position des ersetzten Elements kann zwar mit CSS beeinflusst werden, jedoch nicht der Inhalt des ersetzten Elements selbst. Einige ersetzte Elemente, wie {{HTMLElement("iframe")}}-Elemente, können eigene Stylesheets haben, aber sie erben nicht die Stile des übergeordneten Dokuments.

Der einzige weitere Einfluss, den CSS auf ein ersetztes Element haben kann, ist, dass es Eigenschaften gibt, die die Positionierung des Inhalts des Elements innerhalb seines Rahmens steuern. Siehe [Positionierung von Objekten innerhalb des Inhaltsrahmens steuern](#positionierung_von_objekten_innerhalb_des_inhaltsrahmens_steuern) für weitere Informationen.

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

Die HTML-Spezifikation besagt auch, dass ein {{HTMLElement("input")}}-Element ersetzt werden kann, weil {{HTMLElement("input")}}-Elemente vom Typ `"image"` ersetzte Elemente ähnlich wie {{HTMLElement("img")}} sind. Andere Formularelemente, einschließlich anderer Typen von {{HTMLElement("input")}}-Elementen, werden jedoch ausdrücklich als nicht ersetzte Elemente aufgeführt (die Spezifikation beschreibt deren standardmäßige plattformabhängige Darstellung mit dem Begriff "Widgets").

Objekte, die mit der CSS-Eigenschaft {{cssxref("content")}} eingefügt werden, sind _anonyme ersetzte Elemente_. Sie sind "anonym", weil sie im HTML-Markup nicht existieren.

## Verwendung von CSS mit ersetzten Elementen

CSS behandelt ersetzte Elemente in bestimmten Fällen speziell, wie zum Beispiel bei der Berechnung von Rändern und einigen `auto`-Werten.

Beachten Sie, dass einige, aber nicht alle ersetzten Elemente intrinsische Abmessungen oder eine definierte Baseline haben, die von einigen CSS-Eigenschaften verwendet wird, wie z. B. {{cssxref("vertical-align")}}. Nur ersetzte Elemente können jemals intrinsische Abmessungen haben.

### Positionierung von Objekten innerhalb des Inhaltsrahmens steuern

Bestimmte CSS-Eigenschaften können verwendet werden, um festzulegen, wie das Objekt, das sich innerhalb des ersetzten Elements befindet, innerhalb des Rahmens des Elements positioniert werden soll. Diese werden durch die [CSS Images](https://drafts.csswg.org/css-images/) Spezifikation definiert:

- {{cssxref("object-fit")}}
  - : Gibt an, wie das Inhaltselement des ersetzten Elements in den Rahmen des enthaltenen Elements eingepasst werden soll. Die `object-fit`-Eigenschaft hat keine Auswirkungen auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}}-Elemente.
- {{cssxref("object-position")}}
  - : Gibt die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb des Elementrahmens an.

## Siehe auch

- [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
- {{Glossary("void_element", "Leere Elemente")}}
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertdefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
