---
title: "`<content-distribution>` CSS-Typ"
short-title: <content-distribution>
slug: Web/CSS/Reference/Values/content-distribution
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<content-distribution>`** {{Glossary("enumerated", "enumerierte")}} Wertetyp wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}}, sowie der Kurzform {{cssxref("place-content")}}, verwendet, um den zusätzlichen Raum eines Containers unter seinen {{Glossary("alignment_subject", "Ausrichtungsobjekten")}} zu verteilen.

## Syntax

```plain
<content-distribution> = space-between | space-around | space-evenly | stretch
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<content-distribution>` Grammatikterm dargestellt:

- `space-between`
  - : Verteilt das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} gleichmäßig innerhalb des {{Glossary("alignment_container", "Ausrichtungscontainers")}}. Das erste Element wird bündig mit dem Start-Rand des Ausrichtungscontainers platziert, das letzte Element bündig mit dem End-Rand, und die restlichen Elemente werden gleichmäßig verteilt, sodass der Abstand zwischen zwei benachbarten Elementen gleich ist. Die standardmäßige Fallback-Ausrichtung für `space-between` ist `safe flex-start` für Flex-Layout und `start` sonst. Wenn nur ein Element vorhanden ist, wird es bündig mit dem Start-Rand ausgerichtet.

- `space-around`
  - : Die Elemente werden gleichmäßig im Container verteilt, mit einem Halbmaß Platz an jedem Ende. Der Abstand zwischen zwei benachbarten Elementen ist gleich, und der Abstand vor dem ersten und nach dem letzten Element ist halb so groß wie die anderen Abstände. Die standardmäßige Fallback-Ausrichtung für `space-around` ist `safe center`. Wenn der Container nur ein Kind hat, wird das Element zentriert.

- `space-evenly`
  - : Die Elemente werden gleichmäßig im Container verteilt, mit einem vollen Maß Platz an jedem Ende. Der Abstand zwischen zwei benachbarten Elementen, vor dem ersten Element und nach dem letzten Element ist jeweils gleich. Die standardmäßige Fallback-Ausrichtung für `space-evenly` ist `safe center`. Wenn der Container nur ein Kind hat, wird das Element zentriert.

- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner als die des Containers ist, werden alle Elemente, die wachsen können, ihre Größe gleich (nicht proportional) erhöhen, während dabei die durch {{cssxref("max-height")}}, {{cssxref("max-width")}} oder gleichwertige Funktionalität auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe der Elemente den Container genau ausfüllt. Die standardmäßige Fallback-Ausrichtung für `stretch` ist `flex-start` im Flexbox-Layout und `start` in anderen Layout-Modi. Wenn nur ein Element vorhanden ist und dieses wachsen kann, wird es wachsen, um den Container zu füllen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("baseline-position")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- Modul [CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)
- Modul [CSS Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- Modul [CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
