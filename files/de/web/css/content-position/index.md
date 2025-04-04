---
title: <content-position>
slug: Web/CSS/content-position
l10n:
  sourceCommit: 35f63ce08742ec649bca904ea12e11a3b018ad6f
---

{{CSSRef}}

Der **`<content-position>`** {{Glossary("enumerated", "enumerierte")}} Wertetyp wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}}, sowie der Kurzschreibweise {{cssxref("place-content")}} verwendet, um den Inhalt eines Kastens innerhalb desselben auszurichten.

## Syntax

```plain
<content-position> = center | start | end | flex-start | flex-end
```

## Werte

Der enumerierte Wertetyp `<content-position>` wird mit einem der folgenden Schlüsselbegriffe spezifiziert.

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} innerhalb seines {{Glossary("alignment_container", "Ausrichtungscontainers")}}.
- `start`
  - : Richtet das Ausrichtungsobjekt bündig mit dem Start-Rand des Ausrichtungscontainers aus.
- `end`
  - : Richtet das Ausrichtungsobjekt bündig mit dem End-Rand des Ausrichtungscontainers aus.
- `flex-start`
  - : Im Flex-Layout richtet es das Ausrichtungsobjekt bündig mit dem Rand des Ausrichtungscontainers aus, der der `main-start`- oder `cross-start`-Seite des Flex-Containers entspricht, je nach Bedarf. Es ist identisch zu `start` für andere Layoutmodi als das Flex-Layout.
- `flex-end`
  - : Im Flex-Layout richtet es das Ausrichtungsobjekt bündig mit dem Rand des Ausrichtungscontainers aus, der der `main-end`- oder `cross-end`-Seite des Flex-Containers entspricht, je nach Bedarf. Es ist identisch zu `end` für andere Layoutmodi als das Flex-Layout.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind aus `<content-position>` ausgeschlossen, obwohl sie gültige Werte für die Positionierung der `justify-*`-Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, und {{cssxref("justify-items")}}) sind, da sie in den `align-*`-Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}}, und {{cssxref("align-items")}}) nicht erlaubt sind. Stattdessen sind sie explizit in den Grammatiken der `justify-*`-Eigenschaften enthalten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp nutzen: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
