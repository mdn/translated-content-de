---
title: <self-position>
slug: Web/CSS/self-position
l10n:
  sourceCommit: 25924970e8dbf0cdccfb5d47654eaaa143ed60e2
---

{{CSSRef}}

Der **`<self-position>`** {{Glossary("enumerated", "aufgezählte")}} Wertedatentyp wird von den Eigenschaften {{cssxref("justify-self")}} und {{cssxref("align-self")}}, sowie der {{cssxref("place-self")}} Kurzform verwendet, um das Box-Element innerhalb seines Ausrichtungscontainers zu positionieren. Er wird auch von den Eigenschaften {{cssxref("justify-items")}} und {{cssxref("align-items")}}, sowie der Kurzform {{cssxref("place-items")}} verwendet, um Standardwerte für `justify-self` und `align-self` anzugeben.

## Syntax

```plain
<self-position> = center | start | end | self-start | self-end | flex-start | flex-end
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<self-position>` Grammatikbegriff dargestellt:

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} innerhalb seines {{Glossary("alignment_container", "Ausrichtungscontainers")}}.
- `start`
  - : Richtet das Ausrichtungsobjekt bündig an der Startkante des Ausrichtungscontainers aus.
- `end`
  - : Richtet das Ausrichtungsobjekt bündig an der Endkante des Ausrichtungscontainers aus.
- `self-start`
  - : Richtet das Ausrichtungsobjekt bündig an der Kante des Ausrichtungscontainers aus, die der Startseite des Ausrichtungsobjekts entspricht.
- `self-end`
  - : Richtet das Ausrichtungsobjekt bündig an der Kante des Ausrichtungscontainers aus, die der Endseite des Ausrichtungsobjekts entspricht.
- `flex-start`
  - : In Flex-Layout richtet es das Ausrichtungsobjekt bündig an der Kante des Ausrichtungscontainers aus, die der Haupt-Start- oder Quer-Startseite des Flex-Containers entspricht, je nachdem, was zutrifft. Es ist identisch zu `start` für andere Layoutmodi als das Flex-Layout.
- `flex-end`
  - : In Flex-Layout richtet es das Ausrichtungsobjekt bündig an der Kante des Ausrichtungscontainers aus, die der Haupt-Ende- oder Quer-Endseite des Flex-Containers entspricht, je nachdem, was zutrifft. Es ist identisch zu `end` für andere Layoutmodi als das Flex-Layout.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind von `<self-position>` ausgeschlossen, obwohl sie gültige Positionsausrichtungswerte für die `justify-*` Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, und {{cssxref("justify-items")}}) sind, da sie in den `align-*` Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}}, und {{cssxref("align-items")}}) nicht erlaubt sind. Sie sind stattdessen explizit in die Grammatiken der `justify-*` Eigenschaften eingeschlossen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-self")}}, {{cssxref("justify-self")}}, {{cssxref("place-self")}}, {{cssxref("align-items")}}, {{cssxref("justify-items")}}, {{cssxref("place-items")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("overflow-position")}}, und {{cssxref("content-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
