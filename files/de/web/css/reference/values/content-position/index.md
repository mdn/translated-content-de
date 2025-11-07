---
title: <content-position>
slug: Web/CSS/Reference/Values/content-position
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<content-position>`** {{Glossary("enumerated", "aufgezählte")}} Wertetyp wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} sowie dem Kurzschreibwert {{cssxref("place-content")}} verwendet, um den Inhalt eines Kastens innerhalb desselben auszurichten.

## Syntax

```plain
<content-position> = center | start | end | flex-start | flex-end
```

## Werte

Der `<content-position>` Wertetyp wird mit einem der folgenden Schlüsselbegriffe angegeben.

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} innerhalb seines {{Glossary("alignment_container", "Ausrichtungscontainers")}}.
- `start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Startkante des Ausrichtungscontainers aus.
- `end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Endkante des Ausrichtungscontainers aus.
- `flex-start`
  - : Im Flex-Layout wird das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers ausgerichtet, die der flex-container's main-start- oder cross-start-Seite entspricht, je nachdem. Für andere Layoutmodi als das Flex-Layout ist es identisch mit `start`.
- `flex-end`
  - : Im Flex-Layout wird das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers ausgerichtet, die der flex-container's main-end- oder cross-end-Seite entspricht, je nachdem. Für andere Layoutmodi als das Flex-Layout ist es identisch mit `end`.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind vom `<content-position>` ausgeschlossen, obwohl sie gültige positionsbezogene Ausrichtungswerte für die `justify-*` Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, und {{cssxref("justify-items")}}) sind. Sie sind nicht in den `align-*` Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}}, und {{cssxref("align-items")}}) erlaubt. Stattdessen sind sie explizit in den Grammatiken der `justify-*` Eigenschaften enthalten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, `content-position`, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS box alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
