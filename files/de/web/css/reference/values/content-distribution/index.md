---
title: <content-distribution>
slug: Web/CSS/Reference/Values/content-distribution
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<content-distribution>`** {{Glossary("enumerated", "enumerierte")}} Werttyp wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}}, sowie der Kurzschreibweise {{cssxref("place-content")}}, verwendet, um den zusätzlichen Raum eines Containers unter seinen {{Glossary("alignment_subject", "Ausrichtungsobjekten")}} zu verteilen.

## Syntax

```plain
<content-distribution> = space-between | space-around | space-evenly | stretch
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<content-distribution>` Grammatikterm repräsentiert:

- `space-between`

  - : Verteilt das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} gleichmäßig innerhalb des {{Glossary("alignment_container", "Ausrichtungscontainers")}}. Das erste Element wird bündig mit der Startkante des Ausrichtungscontainers platziert, das letzte Element bündig mit der Endkante, und die restlichen Elemente werden so gleichmäßig verteilt, dass der Abstand zwischen zwei benachbarten Elementen derselbe ist. Die standardmäßige Fallback-Ausrichtung für `space-between` ist `safe flex-start` für das Flexlayout und `start` in anderen Fällen. Wenn es nur ein Element gibt, wird dieses bündig mit der Startkante sein.

- `space-around`

  - : Die Elemente werden gleichmäßig im Container verteilt, mit einem halben Abstand an beiden Enden. Der Abstand zwischen zwei benachbarten Elementen ist derselbe, und der Abstand vor dem ersten und nach dem letzten Element ist halb so groß wie der übrige Abstand. Die standardmäßige Fallback-Ausrichtung für `space-around` ist `safe center`. Wenn der Container nur ein Kind hat, wird dieses zentriert.

- `space-evenly`

  - : Die Elemente werden gleichmäßig im Container verteilt, mit einem vollen Abstand an beiden Enden. Der Abstand zwischen zwei benachbarten Elementen, vor dem ersten und nach dem letzten Element ist derselbe. Die standardmäßige Fallback-Ausrichtung für `space-evenly` ist `safe center`. Wenn der Container nur ein Kind hat, wird dieses zentriert.

- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die des Containers, wird die Größe jedes wachstumsfähigen Elements gleichmäßig (nicht proportional) erhöht, unter Beachtung der durch {{cssxref("max-height")}}, {{cssxref("max-width")}} oder gleichwertige Funktionalität auferlegten Einschränkungen, sodass die kombinierte Größe der Elemente den Container genau ausfüllt. Die standardmäßige Fallback-Ausrichtung für `stretch` ist `flex-start` im Flexbox-Layout und `start` in anderen Layoutmodi. Wenn es nur ein wachstumsfähiges Element gibt, wird dieses wachsen, um den Container auszufüllen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("baseline-position")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
