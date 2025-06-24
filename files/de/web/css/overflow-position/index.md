---
title: <overflow-position>
slug: Web/CSS/overflow-position
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`<overflow-position>`** {{Glossary("enumerated", "enumerated")}} Wertetyp definiert, wie ein Ausrichtungsobjekt, das größer ist als sein Ausrichtungscontainer, diesen Container überlaufen wird. Zum Beispiel, wenn zentrierte Elemente breiter als ihr Container sind, kann der Überlauf über die Startkante des Ansichtsfensters hinaus angezeigt werden, auf die nicht gescrollt werden kann. Der `<overflow-position>` Wert definiert, ob der Ausrichtungsmodus überschrieben werden soll, um sicherzustellen, dass der Inhalt sichtbar ist (`safe`), oder ob der Ausrichtungsmodus eingehalten werden muss (`unsafe`).

Dieser Datentyp ist gültig für die {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Eigenschaften sowie die {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}} Kurzschreibweise-Eigenschaften.
Wenn er weggelassen wird, ist die standardmäßige Überlauf-Ausrichtung eine Mischung aus `safe` und `unsafe`.

## Syntax

```plain
<overflow-position> = unsafe | safe
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<overflow-position>` Grammatikausdruck dargestellt:

- `safe`

  - : Wenn die Größe des {{Glossary("alignment_subject", "Ausrichtungsobjekts")}} den {{Glossary("alignment_container", "Ausrichtungscontainer")}} überläuft, wird das Ausrichtungsobjekt so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.

- `unsafe`
  - : Unabhängig von den relativen Größen des Ausrichtungsobjekts und des Ausrichtungscontainers wird der angegebene Ausrichtungswert eingehalten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("baseline-position")}}, und {{cssxref("self-position")}}
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS-Flexibler-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
