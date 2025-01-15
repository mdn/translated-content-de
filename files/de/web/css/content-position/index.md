---
title: <content-position>
slug: Web/CSS/content-position
l10n:
  sourceCommit: 25924970e8dbf0cdccfb5d47654eaaa143ed60e2
---

{{CSSRef}}

Der **`<content-position>`** {{Glossary("enumerated", "aufgezählte")}} Werttyp wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}}, sowie der Kurzschreibweise {{cssxref("place-content")}}, verwendet, um den Inhalt eines Kastens innerhalb desselben auszurichten.

## Syntax

```plain
<content-position> = center | start | end | flex-start | flex-end
```

## Werte

Der `<content-position>` aufzählbare Werttyp wird mit einem der folgenden Schlüsselbegriffe angegeben.

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} innerhalb seines {{Glossary("alignment_container", "Ausrichtungsbehälters")}}.
- `start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Startkante des Ausrichtungsbehälters aus.
- `end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Endkante des Ausrichtungsbehälters aus.
- `flex-start`
  - : Im Flex-Layout richtet es das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungsbehälters aus, die der Hauptanfangskante oder Queranfangskante des Flex-Containers entspricht, je nachdem, was angemessen ist. Es ist identisch mit `start` für andere Layout-Modi als Flex-Layout.
- `flex-end`
  - : Im Flex-Layout richtet es das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungsbehälters aus, die der Hauptendkante oder Querendkante des Flex-Containers entspricht, je nachdem, was angemessen ist. Identisch zu `end` für andere Layout-Modi als Flex-Layout.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind von `<content-position>` ausgeschlossen, obwohl sie gültige Positionierungs-Ausrichtungswerte für die `justify-*` Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, und {{cssxref("justify-items")}}) sind, da sie in den `align-*` Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}}, und {{cssxref("align-items")}}) nicht erlaubt sind. Stattdessen sind sie explizit in den Grammatiken der `justify-*` Eigenschaften eingeschlossen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungstypen: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
- [CSS-Flexibler-Box-Layout-Modul](/de/docs/Web/CSS/CSS_flexible_box_layout)
