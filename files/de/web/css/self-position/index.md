---
title: <self-position>
slug: Web/CSS/self-position
l10n:
  sourceCommit: a7c8d7fda7dae7094d6e7a73e72682d5d73b431b
---

{{CSSRef}}

Der **`<self-position>`** {{Glossary("enumerated", "aufgezählte")}} Wertedatentyp wird von den Eigenschaften {{cssxref("justify-self")}} und {{cssxref("align-self")}}, sowie der Kurzform {{cssxref("place-self")}} verwendet, um das Box-Element innerhalb seines Ausrichtungscontainers auszurichten. Er wird auch von den Eigenschaften {{cssxref("justify-items")}} und {{cssxref("align-items")}} und der Kurzform {{cssxref("place-items")}} genutzt, um Standardwerte für `justify-self` und `align-self` zu definieren.

## Syntax

```plain
<self-position> = center | start | end | self-start | self-end | flex-start | flex-end
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<self-position>`-Grammatikbegriff dargestellt:

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} innerhalb seines {{Glossary("alignment_container", "Ausrichtungscontainers")}}.
- `start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Startkante des Ausrichtungscontainers aus.
- `end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Endkante des Ausrichtungscontainers aus.
- `self-start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers aus, die der Startseite des Ausrichtungsobjekts entspricht.
- `self-end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers aus, die der Endseite des Ausrichtungsobjekts entspricht.
- `flex-start`
  - : Im Flex-Layout richtet es das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers aus, die der Haupt-Start- oder Kreuz-Start-Seite des Flex-Containers entspricht, wie angebracht. Es ist identisch mit `start` für andere Layout-Modi als das Flex-Layout.
- `flex-end`
  - : Im Flex-Layout richtet es das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers aus, die der Haupt-End- oder Kreuz-End-Seite des Flex-Containers entspricht, wie angebracht. Identisch mit `end` für andere Layout-Modi als das Flex-Layout.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind von `<self-position>` ausgeschlossen, obwohl sie gültige positionsbezogene Ausrichtungswerte für die `justify-*` Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, und {{cssxref("justify-items")}}) sind, da sie in den `align-*` Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}}, und {{cssxref("align-items")}}) nicht erlaubt sind. Sie sind stattdessen ausdrücklich in die Grammatiken der `justify-*` Eigenschaften aufgenommen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-self")}}, {{cssxref("justify-self")}}, {{cssxref("place-self")}}, {{cssxref("align-items")}}, {{cssxref("justify-items")}}, {{cssxref("place-items")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("overflow-position")}}, und {{cssxref("content-position")}}
- Modul [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- Modul [CSS Flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- Modul [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout)
