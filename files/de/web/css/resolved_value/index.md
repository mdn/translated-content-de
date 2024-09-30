---
title: Resolved Value
slug: Web/CSS/resolved_value
l10n:
  sourceCommit: 24c2196fd3f32dd271a8b5e9a34d38a2060484d5
---

{{CSSRef}}

Der **resolved value** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert nach Anwendung der aktiven Stylesheets und Auflösung etwaiger grundlegender Berechnungen, die diese Werte enthalten können. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-`CSSStyleDeclaration`-Objekt zurück, das die auf ein bestimmtes Element angewendeten resolved values aller CSS-Eigenschaften enthält.

Historisch gesehen gab `getComputedStyle()` den [computed value](/de/docs/Web/CSS/computed_value) eines Elements oder Pseudo-Elements zurück. Mit der Weiterentwicklung von CSS entwickelte sich auch das Konzept des "computed value", aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Rückwärtskompatibilität mit bereitgestellten Skripten gleich bleiben. Diese Werte sind die "resolved values".

Für die meisten Eigenschaften ist der resolved value der [computed value](/de/docs/Web/CSS/computed_value), aber für einige veraltete Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der [used value](/de/docs/Web/CSS/used_value). Details finden Sie im unten stehenden Spezifikationslink.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- [`CSSStyleDeclaration.getPropertyValue`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- Werte
  - [Initialwerte](/de/docs/Web/CSS/initial_value)
  - [Computed values](/de/docs/Web/CSS/computed_value)
  - [Used values](/de/docs/Web/CSS/used_value)
  - [Actual values](/de/docs/Web/CSS/actual_value)
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [At-rules](/de/docs/Web/CSS/At-rule)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Wertdefinitions-Syntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
