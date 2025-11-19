---
title: <overflow-position>
slug: Web/CSS/Reference/Values/overflow-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<overflow-position>`** {{Glossary("enumerated", "aufzählbare")}} Wertetyp definiert, wie ein Ausrichtungsgegenstand, der größer ist als sein Ausrichtungscontainer, diesen Container überlaufen wird. Wenn beispielsweise zentrierte Elemente breiter als ihr Container sind, könnte das Überlaufen jenseits der Startkante des Viewports angezeigt werden, welche nicht gescrollt werden kann. Der `<overflow-position>` Wert definiert, ob der Ausrichtungsmodus überschrieben werden soll, um sicherzustellen, dass der Inhalt sichtbar ist (`safe`), oder ob der Ausrichtungsmodus beibehalten werden muss (`unsafe`).

Dieser Datentyp ist gültig für die Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} sowie für die Kurzschreibweisen {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}.
Wenn weggelassen, ist die Standard-Überlauf-Ausrichtung eine Mischung aus `safe` und `unsafe`.

## Syntax

```plain
<overflow-position> = unsafe | safe
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<overflow-position>` Grammatik-Begriff dargestellt:

- `safe`
  - : Wenn die Größe des {{Glossary("alignment_subject", "Ausrichtungsgegenstands")}} den {{Glossary("alignment_container", "Ausrichtungscontainer")}} überläuft, wird der Ausrichtungsgegenstand stattdessen ausgerichtet, als wäre der Ausrichtungsmodus `start`.

- `unsafe`
  - : Unabhängig von den relativen Größen des Ausrichtungsgegenstands und des Ausrichtungscontainers wird der gegebene Ausrichtungswert beachtet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("baseline-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtungs](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS Flexibler Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
