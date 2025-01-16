---
title: <content-position>
slug: Web/CSS/content-position
l10n:
  sourceCommit: a7c8d7fda7dae7094d6e7a73e72682d5d73b431b
---

{{CSSRef}}

Der **`<content-position>`** {{Glossary("enumerated", "Enumerationswert")}} wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}}, sowie der Kurzschrift {{cssxref("place-content")}}, verwendet, um den Inhalt einer Box innerhalb derselben auszurichten.

## Syntax

```plain
<content-position> = center | start | end | flex-start | flex-end
```

## Werte

Der `<content-position>` Enumerationswert wird mithilfe eines der folgenden Schlüsselbegriffe angegeben.

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Alignment-Subjekt")}} innerhalb seines {{Glossary("alignment_container", "Alignment-Containers")}}.
- `start`
  - : Richtet das Alignment-Subjekt bündig mit der Startkante des Alignment-Containers aus.
- `end`
  - : Richtet das Alignment-Subjekt bündig mit der Endkante des Alignment-Containers aus.
- `flex-start`
  - : Im Flex-Layout richtet es das Alignment-Subjekt bündig mit der Kante des Alignment-Containers aus, die dem Haupt- oder Querstart des Flex-Containers entspricht. Es ist identisch zu `start` für andere Layout-Modi als das Flex-Layout.
- `flex-end`
  - : Im Flex-Layout richtet es das Alignment-Subjekt bündig mit der Kante des Alignment-Containers aus, die dem Haupt- oder Querende des Flex-Containers entspricht. Identisch zu `end` für andere Layout-Modi als das Flex-Layout.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind vom `<content-position>` ausgeschlossen, obwohl sie gültige positionsbezogene Anpassungswerte für die `justify-*` Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, und {{cssxref("justify-items")}}) sind, da sie in den `align-*` Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}}, und {{cssxref("align-items")}}) nicht erlaubt sind. Sie sind stattdessen explizit in den Grammatiken der `justify-*` Eigenschaften enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
