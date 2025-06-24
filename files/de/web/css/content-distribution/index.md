---
title: <content-distribution>
slug: Web/CSS/content-distribution
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`<content-distribution>`** {{Glossary("enumerated", "enumerated")}} Werttyp wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} sowie der {{cssxref("place-content")}} Kurzform verwendet, um den zusätzlichen Raum eines Containers auf seine {{Glossary("alignment_subject", "alignment subjects")}} zu verteilen.

## Syntax

```plain
<content-distribution> = space-between | space-around | space-evenly | stretch
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<content-distribution>` Grammatikbegriff dargestellt:

- `space-between`

  - : Verteilt das {{Glossary("alignment_subject", "alignment subject")}} gleichmäßig innerhalb des {{Glossary("alignment_container", "alignment container")}}. Das erste Element liegt bündig an der Startkante des Ausrichtungscontainers an, das letzte Element liegt bündig an der Endkante des Ausrichtungscontainers an, und die übrigen Elemente werden gleichmäßig verteilt, sodass der Abstand zwischen zwei angrenzenden Elementen gleich ist. Die Standard-Rückfallausrichtung für `space-between` ist `safe flex-start` bei Flex-Layout, und `start` sonst. Wenn es nur ein Element gibt, liegt dieses Element bündig an der Startkante.

- `space-around`

  - : Die Elemente werden gleichmäßig im Container verteilt, mit einem halb so großen Abstand an beiden Enden. Der Abstand zwischen zwei angrenzenden Elementen ist derselbe, und der Abstand vor dem ersten und nach dem letzten Element beträgt die Hälfte des anderen Abstands. Die Standard-Rückfallausrichtung für `space-around` ist `safe center`. Wenn der Container nur ein Kind hat, wird das Element zentriert.

- `space-evenly`

  - : Die Elemente werden gleichmäßig im Container verteilt, mit vollem Abstand an beiden Enden. Der Abstand zwischen zwei angrenzenden Elementen, vor dem ersten Element und nach dem letzten Element ist überall gleich. Die Standard-Rückfallausrichtung für `space-evenly` ist `safe center`. Wenn der Container nur ein Kind hat, wird das Element zentriert.

- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Containers, wird jedes Element, das wachsen kann, gleichmäßig (nicht proportional) vergrößert, während die durch {{cssxref("max-height")}}, {{cssxref("max-width")}} oder gleichwertige Funktionalitäten auferlegten Beschränkungen respektiert werden, sodass die kombinierte Größe der Elemente genau den Container füllt. Die Standard-Rückfallausrichtung für `stretch` ist `flex-start` im Flexboxmodell und `start` in anderen Layoutmodi. Gibt es nur ein Element, das wachsen kann, wird es die Größe des Containers einnehmen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Alignment-Datentypen: {{cssxref("baseline-position")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
