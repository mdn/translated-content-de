---
title: Aufgelöster Wert
slug: Web/CSS/resolved_value
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Der **aufgelöste Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert nach Anwendung der aktiven Stylesheets und der Auflösung jeglicher Basisberechnungen, die diese Werte enthalten können. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-Objekt vom Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält.

Historisch gesehen gab `getComputedStyle()` den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) eines Elements oder Pseudo-Elements zurück. Mit der Entwicklung von CSS entwickelte sich auch das Konzept des „berechneten Wertes“, aber die von `getComputedStyle()` zurückgegebenen Werte mussten gleich bleiben, um die Abwärtskompatibilität mit bereitgestellten Skripten sicherzustellen. Diese Werte sind die „aufgelösten Werte“.

Für die meisten Eigenschaften ist der aufgelöste Wert der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/computed_value), aber für einige veraltete Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}), ist es der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value). Details zu einigen Eigenschaften finden Sie im untenstehenden Spezifikationslink.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- [`CSSStyleDeclaration.getPropertyValue`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- Werte
  - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
