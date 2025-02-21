---
title: Aufgelöster Wert
slug: Web/CSS/resolved_value
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Der **aufgelöste Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert nach Anwendung aktiver Stylesheets und der Auflösung jeglicher grundlegender Berechnungen, die diese Werte enthalten können. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-Objekt vom Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält.

Historisch lieferte `getComputedStyle()` den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) eines Elements oder Pseudo-Elements. Mit der Weiterentwicklung von CSS entwickelte sich auch das Konzept des "berechneten Werts", aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Abwärtskompatibilität mit bereitgestellten Skripten gleich bleiben. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/computed_value). Für einige wenige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es jedoch der [benutzte Wert](/de/docs/Web/CSS/CSS_cascade/used_value). Details zu einigen Eigenschaften finden Sie im untenstehenden Spezifikationslink.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- [`CSSStyleDeclaration.getPropertyValue`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- Werte
  - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
  - [Benutzte Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
