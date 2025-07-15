---
title: <content-distribution>
slug: Web/CSS/content-distribution
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<content-distribution>`** {{Glossary("enumerated", "aufzählbare")}} Werttyp wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} sowie der Kurzform {{cssxref("place-content")}} verwendet, um den zusätzlichen Platz in einem Container unter seinen {{Glossary("alignment_subject", "Ausrichtungsobjekten")}} zu verteilen.

## Syntax

```plain
<content-distribution> = space-between | space-around | space-evenly | stretch
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<content-distribution>`-Grammatikbegriff dargestellt:

- `space-between`
  - : Verteilt das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} gleichmäßig innerhalb des {{Glossary("alignment_container", "Ausrichtungscontainers")}}. Das erste Element wird bündig mit der Anfangskante des Ausrichtungscontainers platziert, das letzte Element bündig mit der Endkante, und die übrigen Elemente werden gleichmäßig verteilt, sodass der Abstand zwischen zwei benachbarten Elementen derselbe ist. Die Standardersatz-Ausrichtung für `space-between` ist `safe flex-start` im Flexlayout und `start` ansonsten. Wenn es nur ein Element gibt, wird dieses bündig an der Anfangskante angeordnet.

- `space-around`
  - : Die Elemente sind gleichmäßig im Container verteilt, mit einem halben Platz an beiden Enden. Der Abstand zwischen zwei benachbarten Elementen ist derselbe, und der Abstand vor dem ersten und nach dem letzten Element beträgt die Hälfte des anderen Abstands. Die Standardersatz-Ausrichtung für `space-around` ist `safe center`. Wenn der Container nur ein Kind hat, wird dieses zentriert.

- `space-evenly`
  - : Die Elemente sind gleichmäßig im Container verteilt, mit einem vollen Abstand an beiden Enden. Der Abstand zwischen zwei benachbarten Elementen sowie vor dem ersten und nach dem letzten Element ist derselbe. Die Standardersatz-Ausrichtung für `space-evenly` ist `safe center`. Wenn der Container nur ein Kind hat, wird dieses zentriert.

- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die des Containers, wird jedes Element, das wachsen kann, seine Größe gleichmäßig (nicht proportional) erhöhen, wobei die durch {{cssxref("max-height")}}, {{cssxref("max-width")}} oder ähnliche Funktionalität auferlegten Beschränkungen respektiert werden, sodass die kombinierte Größe der Elemente exakt den Container ausfüllt. Die Standardersatz-Ausrichtung für `stretch` ist `flex-start` im Flexbox, und `start` in anderen Layout-Modi. Wenn es nur ein Element gibt und dieses wachsen kann, füllt es den Container aus.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("baseline-position")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS-Flexibles-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
