---
title: <overflow-position>
slug: Web/CSS/overflow-position
l10n:
  sourceCommit: 25924970e8dbf0cdccfb5d47654eaaa143ed60e2
---

{{CSSRef}}

Der **`<overflow-position>`** {{Glossary("enumerated", "aufgezählte")}} Wertetyp definiert, wie ein Ausrichtungsobjekt, das größer ist als sein Ausrichtungscontainer, diesen Container überlaufen wird. Zum Beispiel, wenn zentrierte Elemente breiter sind als ihr Container, kann das Überlauf jenseits des Startkants des Ansichtsfensters angezeigt werden, das nicht durch Scrollen erreicht werden kann. Der `<overflow-position>`-Wert definiert, ob der Ausrichtungsmodus überschrieben werden soll, um sicherzustellen, dass der Inhalt sichtbar ist (`safe`), oder ob der Ausrichtungsmodus unbedingt eingehalten werden muss (`unsafe`).

Dieser Datentyp ist gültig für die {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Eigenschaften sowie die {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}} Kurzschreibweise-Eigenschaften. Wenn er weggelassen wird, ist die standardmäßige Überlauf-Ausrichtung eine Mischung aus `safe` und `unsafe`.

## Syntax

```plain
<overflow-position> = unsafe | safe
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<overflow-position>`-Grammatikbegriff dargestellt:

- `safe`

  - : Wenn die Größe des {{Glossary("alignment_subject", "Ausrichtungsobjekts")}} den {{Glossary("alignment_container", "Ausrichtungscontainer")}} überläuft, wird das Ausrichtungsobjekt stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.

- `unsafe`
  - : Ungeachtet der relativen Größen des Ausrichtungsobjekts und des Ausrichtungscontainers wird der angegebene Ausrichtungswert beibehalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("baseline-position")}}, und {{cssxref("self-position")}}
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
