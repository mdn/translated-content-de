---
title: "`<overflow-position>` CSS-Typ"
short-title: <overflow-position>
slug: Web/CSS/Reference/Values/overflow-position
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<overflow-position>`** {{Glossary("enumerated", "enumerierte")}} Wertetyp definiert, wie ein Ausrichtungsobjekt, das größer als sein Ausrichtungscontainer ist, diesen Container überlaufen wird. Zum Beispiel, wenn zentrierte Elemente breiter als ihr Container sind, kann das Überlauf außerhalb der Startkante des Viewports angezeigt werden, die nicht gescrollt werden kann. Der `<overflow-position>`-Wert definiert, ob der Ausrichtungsmodus überschrieben werden soll, um sicherzustellen, dass der Inhalt sichtbar ist (`safe`), oder ob der Ausrichtungsmodus eingehalten werden muss (`unsafe`).

Dieser Datentyp ist gültig für die Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} sowie die Kurzschreibweiseigenschaften {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}.
Wenn ausgelassen, ist die standardmäßige Überlaufausrichtung eine Mischung aus `safe` und `unsafe`.

## Syntax

```plain
<overflow-position> = unsafe | safe
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<overflow-position>`-Grammatikbegriff dargestellt:

- `safe`
  - : Wenn die Größe des {{Glossary("alignment_subject", "Ausrichtungsobjekts")}} den {{Glossary("alignment_container", "Ausrichtungscontainer")}} überläuft, wird das Ausrichtungsobjekt stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.

- `unsafe`
  - : Unabhängig von den relativen Größen des Ausrichtungsobjekts und des Ausrichtungscontainers wird der angegebene Ausrichtungswert beibehalten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}
- Andere Datenarten der Box-Ausrichtung: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("baseline-position")}}, und {{cssxref("self-position")}}
- [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment)
- [CSS-Flexible-Box-Layout-Modul](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- [CSS-Grid-Layout-Modul](/de/docs/Web/CSS/Guides/Grid_layout)
