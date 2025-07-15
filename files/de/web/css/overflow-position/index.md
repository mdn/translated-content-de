---
title: <overflow-position>
slug: Web/CSS/overflow-position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<overflow-position>`** {{Glossary("enumerated", "enumerated")}} Wertetyp definiert, wie ein Ausrichtungssubjekt, das größer als sein Ausrichtungscontainer ist, über diesen Container hinausfließen wird. Zum Beispiel, wenn zentrierte Elemente breiter als ihr Container sind, kann das Überlaufen jenseits der Startkante des Ansichtsfensters angezeigt werden, die nicht gescrollt werden kann. Der `<overflow-position>` Wert definiert, ob der Ausrichtungsmodus überschrieben werden soll, um sicherzustellen, dass der Inhalt sichtbar ist (`safe`) oder ob der Ausrichtungsmodus eingehalten werden muss (`unsafe`).

Dieser Datentyp ist gültig für die {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Eigenschaften sowie die {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}} Kurzschreibweiseigenschaften. Wenn nicht angegeben, ist die Standardüberlauf-Ausrichtung eine Mischung aus `safe` und `unsafe`.

## Syntax

```plain
<overflow-position> = unsafe | safe
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<overflow-position>` Grammatikterm dargestellt:

- `safe`
  - : Wenn die Größe des {{Glossary("alignment_subject", "Ausrichtungssubjekts")}} den {{Glossary("alignment_container", "Ausrichtungscontainer")}} überläuft, wird das Ausrichtungssubjekt stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.

- `unsafe`
  - : Unabhängig von den relativen Größen des Ausrichtungssubjekts und des Ausrichtungscontainers wird der gegebene Ausrichtungswert beachtet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("baseline-position")}}, und {{cssxref("self-position")}}
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Gitter-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
