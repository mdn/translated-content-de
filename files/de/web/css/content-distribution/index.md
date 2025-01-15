---
title: <content-distribution>
slug: Web/CSS/content-distribution
l10n:
  sourceCommit: 25924970e8dbf0cdccfb5d47654eaaa143ed60e2
---

{{CSSRef}}

Der **`<content-distribution>`** {{Glossary("enumerated", "Aufzählungs")}} Wertetyp wird von den Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} sowie der Kurznotation {{cssxref("place-content")}} verwendet, um den zusätzlichen Platz eines Containers unter seinen {{Glossary("alignment_subject", "Ausrichtungsobjekten")}} zu verteilen.

## Syntax

```plain
<content-distribution> = space-between | space-around | space-evenly | stretch
```

## Werte

Die folgenden Schlüsselwerte werden durch den grammatikalischen Begriff `<content-distribution>` dargestellt:

- `space-between`

  - : Verteilt das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} gleichmäßig innerhalb des {{Glossary("alignment_container", "Ausrichtungscontainers")}}. Das erste Element wird bündig mit der Anfangskante des Ausrichtungscontainers platziert, das letzte Element bündig mit der Endkante des Ausrichtungscontainers, und die verbleibenden Elemente werden so gleichmäßig verteilt, dass der Abstand zwischen zwei benachbarten Elementen gleich ist. Die Standard-Fallback-Ausrichtung für `space-between` ist `safe flex-start` für das Flex-Layout und `start` ansonsten. Befindet sich nur ein Element im Container, wird dieses Element bündig mit der Anfangskante sein.

- `space-around`

  - : Die Elemente sind gleichmäßig im Container verteilt, mit einem halb so großen Abstand an beiden Enden. Der Abstand zwischen zwei benachbarten Elementen ist gleich, und der Abstand vor dem ersten und nach dem letzten Element ist halb so groß wie die anderen Abstände. Die Standard-Fallback-Ausrichtung für `space-around` ist `safe center`. Hat der Container nur ein Kind, wird das Element zentriert.

- `space-evenly`

  - : Die Elemente sind gleichmäßig im Container verteilt, mit einem gleich großen Abstand an beiden Enden. Der Abstand zwischen zwei benachbarten Elementen, vor dem ersten Element und nach dem letzten Element ist überall gleich. Die Standard-Fallback-Ausrichtung für `space-evenly` ist `safe center`. Hat der Container nur ein Kind, wird das Element zentriert.

- `stretch`

  - : Wenn die kombinierte Größe der Elemente kleiner als die Größe des Containers ist, wird die Größe aller Elemente, die wachsen können, gleich (nicht proportional) vergrößert, wobei die durch {{cssxref("max-height")}}, {{cssxref("max-width")}} oder gleichwertige Funktionalitäten auferlegten Beschränkungen respektiert werden, sodass die kombinierte Größe der Elemente den Container genau füllt. Die Standard-Fallback-Ausrichtung für `stretch` ist `flex-start` im Flexbox-Modus und `start` in anderen Layoutmodi. Befindet sich nur ein Element im Container und kann dieses wachsen, wird es so groß werden, dass es den Container füllt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("baseline-position")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- Modul [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- Modul [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
