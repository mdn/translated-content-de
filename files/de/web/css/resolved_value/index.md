---
title: Aufgelöster Wert
slug: Web/CSS/resolved_value
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Der **aufgelöste Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, der nach Anwendung der aktiven Stylesheets und der Auflösung jeglicher grundlegender Berechnungen dieser Werte entsteht. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-Objekt vom Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, welches die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält.

Historisch gesehen gab `getComputedStyle()` den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) eines Elements oder Pseudo-Elements zurück. Mit der Weiterentwicklung von CSS hat sich das Konzept des „berechneten Wertes“ verändert, aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Rückwärtskompatibilität mit bestehenden Skripten gleich bleiben. Diese Werte sind die „aufgelösten Werte“.

Für die meisten Eigenschaften ist der aufgelöste Wert der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/computed_value). Für einige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es jedoch der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value). Details zu einzelnen Eigenschaften finden Sie im unten stehenden Link zur Spezifikation.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- [`CSSStyleDeclaration.getPropertyValue`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- Werte
  - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
  - [Aktuelle Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Kurzform-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
