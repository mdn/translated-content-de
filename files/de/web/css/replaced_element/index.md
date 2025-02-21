---
title: Ersetzte Elemente
slug: Web/CSS/Replaced_element
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

In [CSS](/de/docs/Web/CSS) ist ein **ersetztes Element** ein Element, dessen Darstellung außerhalb des CSS-Scope liegt; es sind externe Objekte, deren Darstellung unabhängig vom CSS-Formatierungsmodell ist.

Einfacher gesagt sind es Elemente, deren Inhalte nicht von den Stilen des aktuellen Dokuments beeinflusst werden. Die Position des ersetzten Elements kann mit CSS beeinflusst werden, nicht jedoch die Inhalte des ersetzten Elements selbst. Einige ersetzte Elemente, wie {{HTMLElement("iframe")}}-Elemente, können eigene Stylesheets haben, aber sie erben nicht die Stile des übergeordneten Dokuments.

Der einzige weitere Einfluss, den CSS auf ein ersetztes Element haben kann, besteht darin, dass es Eigenschaften gibt, die die Positionierung des Inhalts des Elements innerhalb seines Rahmens steuern. Weitere Informationen finden Sie unter [Steuern der Objektposition innerhalb des Inhaltsrahmens](#steuern_der_objektposition_innerhalb_des_inhaltsrahmens).

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

In der HTML-Spezifikation wird auch festgelegt, dass ein {{HTMLElement("input")}}-Element ersetzt werden kann, da {{HTMLElement("input")}}-Elemente des Typs `"image"` ersetzten Elementen wie {{HTMLElement("img")}} ähneln. Andere Formularelemente, einschließlich anderer Typen von {{HTMLElement("input")}}-Elementen, sind jedoch ausdrücklich als nicht ersetzte Elemente gelistet (die Spezifikation beschreibt deren standardmäßige plattformabhängige Darstellung mit dem Begriff "Widgets").

Mit der CSS-{{cssxref("content")}}-Eigenschaft eingefügte Objekte sind _anonyme ersetzte Elemente_. Sie sind "anonym", weil sie im HTML-Markup nicht existieren.

## Verwendung von CSS mit ersetzten Elementen

CSS behandelt ersetzte Elemente speziell in einigen Fällen, wie bei der Berechnung von Abständen und einigen `auto`-Werten.

Beachten Sie, dass einige, aber nicht alle, ersetzte Elemente intrinsische Dimensionen oder eine definierte Basislinie haben, die von einigen CSS-Eigenschaften wie {{cssxref("vertical-align")}} verwendet wird. Nur ersetzte Elemente können jemals intrinsische Dimensionen haben.

### Steuern der Objektposition innerhalb des Inhaltsrahmens

Bestimmte CSS-Eigenschaften können verwendet werden, um anzugeben, wie das in dem ersetzten Element enthaltene Objekt innerhalb des Rahmens des Elements positioniert werden soll. Diese sind in der [CSS Images](https://drafts.csswg.org/css-images/) Spezifikation definiert:

- {{cssxref("object-fit")}}
  - : Gibt an, wie das Inhaltsobjekt des ersetzten Elements an den umgebenden Rahmen des Elements angepasst werden soll. Die `object-fit`-Eigenschaft hat keine Wirkung auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}}-Elemente.
- {{cssxref("object-position")}}
  - : Gibt die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb des Rahmens des Elements an.

## Siehe auch

- [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
- {{Glossary("void_element", "Leere Elemente")}}
- CSS Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibeigenschaften](/de/docs/Web/CSS/Shorthand_properties)
