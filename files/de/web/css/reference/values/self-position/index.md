---
title: <self-position>
slug: Web/CSS/Reference/Values/self-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<self-position>`** {{Glossary("enumerated", "aufzählungsbasierte")}} Wertedatentyp wird von den Eigenschaften {{cssxref("justify-self")}} und {{cssxref("align-self")}}, sowie von der Kurzform {{cssxref("place-self")}} verwendet, um das Feld innerhalb seines Ausrichtungscontainer auszurichten. Er wird auch von den Eigenschaften {{cssxref("justify-items")}} und {{cssxref("align-items")}} sowie von der Kurzform {{cssxref("place-items")}} genutzt, um Standardwerte für `justify-self` und `align-self` festzulegen.

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
  - : Beim Flex-Layout wird das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers ausgerichtet, die der Hauptstart- oder Kreuzstartseite des Flex-Containers entspricht, je nach Bedarf. Es ist für andere Layoutmodi als das Flex-Layout identisch mit `start`.
- `flex-end`
  - : Beim Flex-Layout wird das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers ausgerichtet, die der Hauptende- oder Kreuzende-Seite des Flex-Containers entspricht, je nach Bedarf. Es ist für andere Layoutmodi als das Flex-Layout identisch mit `end`.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind in `<self-position>` ausgeschlossen, obwohl sie gültige Positionsausrichtungswerte für die `justify-*`-Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, und {{cssxref("justify-items")}}) sind, weil sie in den `align-*`-Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}}, und {{cssxref("align-items")}}) nicht erlaubt sind. Stattdessen sind sie ausdrücklich in die Grammatiken der `justify-*`-Eigenschaften einbezogen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-self")}}, {{cssxref("justify-self")}}, {{cssxref("place-self")}}, {{cssxref("align-items")}}, {{cssxref("justify-items")}}, {{cssxref("place-items")}}
- Andere Box-Ausrichtungstypen: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("overflow-position")}}, und {{cssxref("content-position")}}
- [CSS-Box-Ausrichtungs\-Modul](/de/docs/Web/CSS/Guides/Box_alignment)
- [CSS flexibles Box-Layout\-Modul](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- [CSS-Rasterlayout\-Modul](/de/docs/Web/CSS/Guides/Grid_layout)
