---
title: <overflow-position>
slug: Web/CSS/overflow-position
l10n:
  sourceCommit: 35f63ce08742ec649bca904ea12e11a3b018ad6f
---

{{CSSRef}}

Der **`<overflow-position>`** {{Glossary("enumerated", "enumerated")}} Wertetyp definiert, wie ein Ausrichtungsobjekt, das größer als sein Ausrichtungscontainer ist, diesen Container überlaufen wird. Zum Beispiel, wenn zentrierte Elemente breiter als ihr Container sind, kann der Überlauf über die Startkante des Viewports angezeigt werden, die nicht gescrollt werden kann. Der `<overflow-position>` Wert definiert, ob der Ausrichtungsmodus überschrieben werden soll, um sicherzustellen, dass der Inhalt sichtbar ist (`safe`), oder ob der Ausrichtungsmodus eingehalten werden muss (`unsafe`).

Dieser Datentyp ist gültig für die {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Eigenschaften sowie die {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzschreibweisen.
Wenn er weggelassen wird, ist die Standard-Überlauf-Ausrichtung eine Mischung aus `safe` und `unsafe`.

## Syntax

```plain
<overflow-position> = unsafe | safe
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<overflow-position>` Grammatikbegriff dargestellt:

- `safe`

  - : Wenn die Größe des {{Glossary("alignment_subject", "alignment subject")}} den {{Glossary("alignment_container", "alignment container")}} überläuft, wird das Ausrichtungsobjekt stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.

- `unsafe`
  - : Ungeachtet der relativen Größen des Ausrichtungsobjekts und des Ausrichtungscontainers wird der gegebene Ausrichtungswert eingehalten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("baseline-position")}} und {{cssxref("self-position")}}
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
