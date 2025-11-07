---
title: <content-distribution>
slug: Web/CSS/Reference/Values/content-distribution
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<content-distribution>`** {{Glossary("enumerated", "enumerierte")}} Wertetyp wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} sowie der Kurzform {{cssxref("place-content")}} verwendet, um den zusätzlichen Raum eines Containers unter seinen {{Glossary("alignment_subject", "Ausrichtungszielen")}} zu verteilen.

## Syntax

```plain
<content-distribution> = space-between | space-around | space-evenly | stretch
```

## Werte

Die folgenden Schlüsselwortwerte werden durch das `<content-distribution>` Grammatikziel dargestellt:

- `space-between`
  - : Verteilt die {{Glossary("alignment_subject", "Ausrichtungsziele")}} gleichmäßig im {{Glossary("alignment_container", "Ausrichtungscontainer")}}. Das erste Element wird bündig mit der Startkante des Ausrichtungscontainers platziert, das letzte Element bündig mit der Endkante, und die verbleibenden Elemente werden so verteilt, dass der Abstand zwischen jedem zwei benachbarten Elementen gleich ist. Die Standard-Ersatz-Ausrichtung für `space-between` ist `safe flex-start` für Flex-Layout und `start` sonst. Wenn es nur ein Element gibt, wird das Element bündig mit der Startkante platziert.

- `space-around`
  - : Die Elemente werden gleichmäßig im Container verteilt, mit einem halb so großen Abstand an beiden Enden. Der Abstand zwischen jedem zwei benachbarten Elementen ist gleich, und der Abstand vor dem ersten und nach dem letzten Element ist halb so groß wie die anderen Abstände. Die Standard-Ersatz-Ausrichtung für `space-around` ist `safe center`. Wenn der Container nur ein Kind hat, wird das Element zentriert.

- `space-evenly`
  - : Die Elemente werden gleichmäßig im Container verteilt, mit einem vollen Abstand an beiden Enden. Der Abstand zwischen jedem zwei benachbarten Elementen, vor dem ersten Element und nach dem letzten Element ist überall gleich. Die Standard-Ersatz-Ausrichtung für `space-evenly` ist `safe center`. Wenn der Container nur ein Kind hat, wird das Element zentriert.

- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Containers, wird die Größe aller wachsenden Elemente gleichmäßig (nicht proportional) erhöht, während die durch {{cssxref("max-height")}}, {{cssxref("max-width")}} oder gleichwertige Funktionalität auferlegten Einschränkungen eingehalten werden, sodass die kombinierte Größe der Elemente genau den Container ausfüllt. Die Standard-Ersatz-Ausrichtung für `stretch` ist `flex-start` bei Flexbox und `start` in anderen Layout-Modi. Wenn es nur ein Element gibt und dieses wachsen kann, wird es wachsen, um den Container zu füllen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("baseline-position")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
