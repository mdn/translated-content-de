---
title: "`<content-position>` CSS-Typ"
short-title: <content-position>
slug: Web/CSS/Reference/Values/content-position
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<content-position>`** {{Glossary("enumerated", "aufgezählte")}} Wertetyp wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} sowie der Kurzform {{cssxref("place-content")}} verwendet, um den Inhalt des Box-Elements innerhalb der Box zu platzieren.

## Syntax

```plain
<content-position> = center | start | end | flex-start | flex-end
```

## Werte

Der `<content-position>` aufgezählte Wertetyp wird unter Verwendung eines der folgenden Schlüsselbegriffe angegeben.

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} innerhalb seines {{Glossary("alignment_container", "Ausrichtungscontainers")}}.
- `start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Startkante des Ausrichtungscontainers aus.
- `end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Endkante des Ausrichtungscontainers aus.
- `flex-start`
  - : Im Flex-Layout richtet es das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers aus, die der main-start oder cross-start Seite des Flex-Containers entspricht, je nach Bedarf. Es ist identisch mit `start` für Layoutmodi, die keine Flex-Layouts sind.
- `flex-end`
  - : Im Flex-Layout richtet es das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers aus, die der main-end oder cross-end Seite des Flex-Containers entspricht, je nach Bedarf. Es ist identisch mit `end` für Layoutmodi, die keine Flex-Layouts sind.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind von `<content-position>` ausgeschlossen, obwohl sie gültige positionsbezogene Ausrichtungswerte für die Eigenschaften `justify-*` ({{cssxref("justify-content")}}, {{cssxref("justify-self")}} und {{cssxref("justify-items")}}) sind, da sie in den `align-*` Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}} und {{cssxref("align-items")}}) nicht erlaubt sind. Stattdessen sind sie explizit in den Grammatiken der `justify-*` Eigenschaften enthalten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, `content-position`, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment)
- [CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Gitter-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
