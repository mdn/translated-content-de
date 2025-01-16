---
title: <content-distribution>
slug: Web/CSS/content-distribution
l10n:
  sourceCommit: a7c8d7fda7dae7094d6e7a73e72682d5d73b431b
---

{{CSSRef}}

Der Werttyp **`<content-distribution>`** wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} sowie der Kurzhand-Eigenschaft {{cssxref("place-content")}} verwendet, um den zusätzlichen Raum eines Containers unter seinen {{Glossary("alignment_subject", "Ausrichtungsobjekten")}} zu verteilen.

## Syntax

```plain
<content-distribution> = space-between | space-around | space-evenly | stretch
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<content-distribution>`-Grammatikbegriff dargestellt:

- `space-between`

  - : Verteilt die {{Glossary("alignment_subject", "Ausrichtungsobjekte")}} gleichmäßig innerhalb des {{Glossary("alignment_container", "Ausrichtungscontainers")}}. Das erste Element wird bündig mit der Anfangskante des Ausrichtungscontainers platziert, das letzte Element bündig mit der Endkante des Ausrichtungscontainers, und die verbleibenden Elemente werden so gleichmäßig verteilt, dass der Abstand zwischen zwei benachbarten Elementen gleich ist. Die Standardersatzausrichtung für `space-between` ist `safe flex-start` für Flex-Layout und `start` ansonsten. Wenn es nur ein Element gibt, wird dieses bündig mit der Anfangskante sein.

- `space-around`

  - : Die Elemente werden gleichmäßig im Container verteilt, mit einem halb so großen Abstand an beiden Enden. Der Abstand zwischen zwei benachbarten Elementen ist gleich, und der Abstand vor dem ersten und nach dem letzten Element ist halb so groß wie der andere Abstand. Die Standardersatzausrichtung für `space-around` ist `safe center`. Wenn der Container nur ein Kind hat, wird das Element zentriert.

- `space-evenly`

  - : Die Elemente werden gleichmäßig im Container verteilt, mit einem vollwertigen Abstand an beiden Enden. Der Abstand zwischen zwei benachbarten Elementen, vor dem ersten Element und nach dem letzten Element, ist überall gleich. Die Standardersatzausrichtung für `space-evenly` ist `safe center`. Wenn der Container nur ein Kind hat, wird das Element zentriert.

- `stretch`

  - : Wenn die kombinierte Größe der Elemente kleiner als die Größe des Containers ist, wird die Größe aller Elemente, die wachsen können, gleichmäßig (nicht proportional) erhöht, unter Beachtung der durch {{cssxref("max-height")}}, {{cssxref("max-width")}} oder gleichwertige Funktionalität auferlegten Einschränkungen, sodass die kombinierte Größe der Elemente den Container genau ausfüllt. Die Standardersatzausrichtung für `stretch` ist `flex-start` im Flexbox-Layout und `start` in anderen Layout-Modi. Wenn es nur ein Element gibt und dieses wachsen kann, wird es wachsen, um den Container zu füllen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("baseline-position")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- Modul [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- Modul [CSS Flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- Modul [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
