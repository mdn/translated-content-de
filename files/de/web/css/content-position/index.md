---
title: <content-position>
slug: Web/CSS/content-position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<content-position>`** {{Glossary("enumerated", "aufzählbare")}} Wertetyp wird von den {{cssxref("justify-content")}} und {{cssxref("align-content")}} Eigenschaften sowie der {{cssxref("place-content")}} Kurzschreibweise verwendet, um den Inhalt einer Box innerhalb dieser auszurichten.

## Syntax

```plain
<content-position> = center | start | end | flex-start | flex-end
```

## Werte

Der `<content-position>` aufzählbare Wertetyp wird durch einen der folgenden Schlüsselbegriffe spezifiziert.

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} in seinem {{Glossary("alignment_container", "Ausrichtungscontainer")}}.
- `start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Startkante des Ausrichtungscontainers aus.
- `end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Endkante des Ausrichtungscontainers aus.
- `flex-start`
  - : Im Flex-Layout wird das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers ausgerichtet, die der Hauptstart- oder Kreuzstartseite des Flex-Containers entspricht. Es ist identisch mit `start` für andere Layout-Modi als das Flex-Layout.
- `flex-end`
  - : Im Flex-Layout wird das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers ausgerichtet, die der Hauptend- oder Kreuzendseite des Flex-Containers entspricht. Identisch mit `end` für andere Layout-Modi als das Flex-Layout.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind von `<content-position>` ausgeschlossen, obwohl sie gültige positionsbezogene Ausrichtungswerte für die `justify-*` Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}} und {{cssxref("justify-items")}}) sind, da sie in den `align-*` Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}} und {{cssxref("align-items")}}) nicht erlaubt sind. Stattdessen sind sie explizit in den Grammatiken der `justify-*` Eigenschaften enthalten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, `content-position`, {{cssxref("overflow-position")}} und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
