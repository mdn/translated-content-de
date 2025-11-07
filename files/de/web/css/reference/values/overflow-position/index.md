---
title: <overflow-position>
slug: Web/CSS/Reference/Values/overflow-position
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<overflow-position>`** {{Glossary("enumerated", "aufzählbare")}} Wertetyp definiert, wie ein Ausrichtungsobjekt, das größer ist als sein Ausrichtungsbehälter, diesen Behälter überläuft. Zum Beispiel, wenn zentrierte Elemente breiter sind als ihr Behälter, könnte das Überlaufen über den Anfangsrand des Viewports angezeigt werden, der nicht gescrollt werden kann. Der `<overflow-position>` Wert definiert, ob der Ausrichtungsmodus überschrieben werden sollte, um sicherzustellen, dass der Inhalt sichtbar ist (`safe`), oder ob der Ausrichtungsmodus eingehalten werden muss (`unsafe`).

Dieser Datentyp ist gültig für die {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Eigenschaften sowie für die Kurzschreibweisen {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}.
Wird er weggelassen, ist die Standard-Überlauf-Ausrichtung eine Mischung aus `safe` und `unsafe`.

## Syntax

```plain
<overflow-position> = unsafe | safe
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<overflow-position>` Grammatikbegriff repräsentiert:

- `safe`
  - : Wenn die Größe des {{Glossary("alignment_subject", "Ausrichtungsobjekts")}} den {{Glossary("alignment_container", "Ausrichtungsbehälter")}} überläuft, wird das Ausrichtungsobjekt stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.

- `unsafe`
  - : Unabhängig von den relativen Größen des Ausrichtungsobjekts und des Ausrichtungsbehälters wird der angegebene Ausrichtungswert beachtet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("baseline-position")}} und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
