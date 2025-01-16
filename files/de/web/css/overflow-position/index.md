---
title: <overflow-position>
slug: Web/CSS/overflow-position
l10n:
  sourceCommit: a7c8d7fda7dae7094d6e7a73e72682d5d73b431b
---

{{CSSRef}}

Der **`<overflow-position>`**{{Glossary("enumerated", "enumerierte")}} Wertetyp definiert, wie ein Ausrichtungssubjekt, das größer als sein Ausrichtungscontainer ist, diesen Container überläuft. Zum Beispiel, wenn zentrierte Elemente breiter als ihr Container sind, kann das Überlaufen jenseits des Startbereichs des Viewports angezeigt werden, der nicht gescrollt werden kann. Der `<overflow-position>`-Wert definiert, ob der Ausrichtungsmodus überschrieben werden soll, um sicherzustellen, dass der Inhalt sichtbar ist (`safe`), oder ob der Ausrichtungsmodus eingehalten werden muss (`unsafe`).

Dieser Datentyp ist gültig für die {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Eigenschaften sowie die {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzschreibweise-Eigenschaften. Wenn er weggelassen wird, ist die Standard-Überlauf-Ausrichtung eine Mischung aus `safe` und `unsafe`.

## Syntax

```plain
<overflow-position> = unsafe | safe
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<overflow-position>` Grammatikbegriff dargestellt:

- `safe`

  - : Wenn die Größe des {{Glossary("alignment_subject", "Ausrichtungssubjekts")}} den {{Glossary("alignment_container", "Ausrichtungscontainer")}} überläuft, wird das Ausrichtungssubjekt stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.

- `unsafe`
  - : Unabhängig von den relativen Größen des Ausrichtungssubjekts und des Ausrichtungscontainers wird der angegebene Ausrichtungswert beachtet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("baseline-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
