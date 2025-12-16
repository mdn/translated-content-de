---
title: baseline-source
slug: Web/CSS/Reference/Properties/baseline-source
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`baseline-source`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, welche [Baseline](/de/docs/Web/CSS/Reference/Values/baseline-position) verwendet werden soll, wenn Inline-Level-Boxen mehrere mögliche Baselines haben, wie z. B. mehrzeilige [Inline-Blöcke](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout) oder Inline-[Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts#the_flex_container). Die Werte erlauben es, zwischen der Ausrichtung zur ersten Baseline der Box, der letzten Baseline oder einer automatischen Entscheidung des Browsers basierend auf dem Boxtyp zu wählen.

## Syntax

```css
/* Keyword values */
baseline-source: auto;
baseline-source: first;
baseline-source: last;

/* Global values */
baseline-source: inherit;
baseline-source: initial;
baseline-source: revert;
baseline-source: revert-layer;
baseline-source: unset;
```

### Werte

- `auto`
  - : Spezifiziert [`letzte Baseline`](/de/docs/Web/CSS/Reference/Values/baseline-position#last_baseline) Ausrichtung für inline-block, [`erste Baseline`](/de/docs/Web/CSS/Reference/Values/baseline-position#first_baseline) Ausrichtung für alle anderen.
- `first`
  - : Spezifiziert `erste Baseline` Ausrichtung.
- `last`
  - : Spezifiziert `letzte Baseline` Ausrichtung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl der Baseline in Inline-Flex-Containern

Dieses Beispiel zeigt die Verwendung der `baseline-source` Eigenschaft zur Steuerung der Baseline-Ausrichtung von Inline-Flex-Containern.

#### HTML

Unser HTML enthält mehrere {{htmlelement("span")}} Elemente, die generische Inline-Container für phrasierte Inhalte sind. Drei der `<span>` Elemente enthalten verschachtelte `<span>` Kinder.

```html
<span>Baseline ___</span>

<span class="box first">
  <span>First</span>
  <span>A</span>
  <span>B</span>
  <span>C</span>
</span>

<span class="box auto">
  <span>Auto</span>
  <span>A</span>
  <span>B</span>
  <span>C</span>
</span>

<span class="box last">
  <span>A</span>
  <span>B</span>
  <span>C</span>
  <span>Last</span>
</span>
```

#### CSS

```css hidden
body {
  font-family: sans-serif;
}

.box {
  border: 2px solid #888;
  width: 50px;
}

span {
  padding: 0.4rem;
}
```

Wir definieren alle Boxen als Inline-Flex-Container. Wir setzen die `.first` Box, um die erste Baseline zu verwenden, die `.auto` Box verwendet die Standard-Baseline (die für Inline-Flex-Container `first` ist) und die `.last` Box verwendet die letzte Baseline.

```css
.box {
  display: inline-flex;
  flex-direction: column;
}

.first {
  baseline-source: first;
}

.auto {
  baseline-source: auto;
}

.last {
  baseline-source: last;
}
```

#### Ergebnis

{{EmbedLiveSample('baseline_selection_in_inline_flex_containers', '100%', 260)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}} Eigenschaft
- [CSS Box-Ausrichtung Übersicht](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
