---
title: Aufgelöster Wert
slug: Web/CSS/resolved_value
l10n:
  sourceCommit: 24c2196fd3f32dd271a8b5e9a34d38a2060484d5
---

{{CSSRef}}

Der **aufgelöste Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert nach Anwendung der aktiven Stylesheets und der Auflösung jeglicher grundlegender Berechnung, die diese Werte enthalten können. Die Methode {{domxref("Window.getComputedStyle", "getComputedStyle()")}} gibt ein Live-{{domxref("CSSStyleDeclaration")}}-Objekt zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält.

Historisch gesehen lieferte `getComputedStyle()` den [berechneten Wert](/de/docs/Web/CSS/computed_value) eines Elements oder Pseudo-Elements. Mit der Weiterentwicklung von CSS entwickelte sich auch das Konzept des "berechneten Wertes", aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Rückwärtskompatibilität mit bereits verwendeten Skripten gleich bleiben. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der [berechnete Wert](/de/docs/Web/CSS/computed_value), aber für einige wenige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der [verwendete Wert](/de/docs/Web/CSS/used_value). Einzelheiten zu bestimmten Eigenschaften finden Sie im unten angegebenen Link zur Spezifikation.

## Specifications

{{Specifications}}

## Siehe auch

- {{domxref("window.getComputedStyle")}}
- {{domxref("CSSStyleDeclaration.getPropertyValue")}}
- Werte
  - [Initialwerte](/de/docs/Web/CSS/initial_value)
  - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
  - [Verwendete Werte](/de/docs/Web/CSS/used_value)
  - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
