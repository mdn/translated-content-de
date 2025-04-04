---
title: <content-distribution>
slug: Web/CSS/content-distribution
l10n:
  sourceCommit: 35f63ce08742ec649bca904ea12e11a3b018ad6f
---

{{CSSRef}}

Der **`<content-distribution>`** {{Glossary("enumerated", "aufgezählte")}} Wertetyp wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}}, sowie dem Kurzschreibweise {{cssxref("place-content")}} verwendet, um den zusätzlichen Raum eines Containers unter seinen {{Glossary("alignment_subject", "Ausrichtungsobjekten")}} zu verteilen.

## Syntax

```plain
<content-distribution> = space-between | space-around | space-evenly | stretch
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<content-distribution>` Grammatikausdruck repräsentiert:

- `space-between`

  - : Verteilt das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} gleichmäßig innerhalb des {{Glossary("alignment_container", "Ausrichtungscontainers")}}. Das erste Element wird bündig mit der Startkante des Ausrichtungscontainers platziert, das letzte Element bündig mit der Endkante, und die verbleibenden Elemente werden so gleichmäßig verteilt, dass der Abstand zwischen zwei benachbarten Elementen gleich ist. Die standardmäßige Fallback-Ausrichtung für `space-between` ist `safe flex-start` für das Flexlayout und `start` in anderen Fällen. Wenn es nur ein Element gibt, wird dieses bündig mit der Startkante sein.

- `space-around`

  - : Die Elemente werden gleichmäßig im Container verteilt, wobei an beiden Enden ein halb so großer Abstand vorhanden ist. Der Abstand zwischen zwei benachbarten Elementen ist der gleiche, und der Abstand vor dem ersten und nach dem letzten Element ist halb so groß wie der andere Abstand. Die standardmäßige Fallback-Ausrichtung für `space-around` ist `safe center`. Wenn der Container nur ein Kind hat, wird das Element zentriert.

- `space-evenly`

  - : Die Elemente werden gleichmäßig im Container verteilt, mit einem gleich großen Abstand an beiden Enden. Der Abstand zwischen zwei benachbarten Elementen, vor dem ersten Element und nach dem letzten Element, ist überall gleich. Die standardmäßige Fallback-Ausrichtung für `space-evenly` ist `safe center`. Wenn der Container nur ein Kind hat, wird das Element zentriert.

- `stretch`

  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Containers, wird die Größe aller wachsenden Elemente gleichmäßig (nicht proportional) erhöht, während die durch {{cssxref("max-height")}}, {{cssxref("max-width")}} oder gleichwertige Funktionen auferlegten Einschränkungen beachtet werden, sodass die kombinierte Größe der Elemente genau den Container füllt. Die standardmäßige Fallback-Ausrichtung für `stretch` ist `flex-start` im Flexbox, und `start` in anderen Layoutmodi. Wenn es nur ein Element gibt und dieses wachsen kann, wird es wachsen, um den Container zu füllen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("baseline-position")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
