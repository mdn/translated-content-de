---
title: <content-position>
slug: Web/CSS/Reference/Values/content-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<content-position>`** {{Glossary("enumerated", "aufzählbarer")}} Wertetyp wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} sowie der Kurzform {{cssxref("place-content")}} verwendet, um den Inhalt des Boxen innerhalb der Box selbst auszurichten.

## Syntax

```plain
<content-position> = center | start | end | flex-start | flex-end
```

## Werte

Der `<content-position>` aufzählbare Wertetyp wird durch die Verwendung eines der folgenden Schlüsselbegriffe angegeben.

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} innerhalb seines {{Glossary("alignment_container", "Ausrichtungscontainers")}}.
- `start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Startkante des Ausrichtungscontainers aus.
- `end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Endkante des Ausrichtungscontainers aus.
- `flex-start`
  - : Im Flex-Layout wird das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers ausgerichtet, die der Haupt-Start- oder Kreuz-Start-Seite des Flex-Containers entspricht, je nach Bedarf. Es ist identisch mit `start` für andere Layout-Modi als das Flex-Layout.
- `flex-end`
  - : Im Flex-Layout wird das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers ausgerichtet, die der Haupt-Ende- oder Kreuz-Ende-Seite des Flex-Containers entspricht, je nach Bedarf. Identisch mit `end` für andere Layout-Modi als das Flex-Layout.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind von `<content-position>` ausgeschlossen, obwohl sie gültige positionsbezogene Ausrichtungswerte für die `justify-*` Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, und {{cssxref("justify-items")}}) sind, weil sie in den `align-*` Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}}, und {{cssxref("align-items")}}) nicht erlaubt sind. Sie sind stattdessen explizit in den Grammatiken der `justify-*` Eigenschaften enthalten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtung-Datentypen: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, `content-position`, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
