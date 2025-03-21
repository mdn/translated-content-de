---
title: Aufgelöster Wert
slug: Web/CSS/resolved_value
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Der **aufgelöste Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, nachdem aktive Stylesheets angewendet wurden und grundlegende Berechnungen dieser Werte durchgeführt wurden. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-Objekt vom Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält.

Historisch gesehen lieferte `getComputedStyle()` den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) eines Elements oder Pseudo-Elements. Mit der Weiterentwicklung von CSS hat sich auch das Konzept des „berechneten Wertes“ weiterentwickelt, aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Rückwärtskompatibilität mit bereits bereitgestellten Skripten gleichbleiben. Diese Werte sind die „aufgelösten Werte“.

Für die meisten Eigenschaften ist der aufgelöste Wert der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), aber bei einigen älteren Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value). Einzelheiten zu spezifischen Eigenschaften entnehmen Sie bitte dem unten stehenden Link zur Spezifikation.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- [`CSSStyleDeclaration.getPropertyValue`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- Werte
  - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Shorthand-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
