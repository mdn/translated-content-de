---
title: baseline-source
slug: Web/CSS/Reference/Properties/baseline-source
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

Die **`baseline-source`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, welche [Baseline](/de/docs/Web/CSS/Reference/Values/baseline-position) verwendet werden soll, wenn Inline-Elemente mehrere mögliche Baselines haben, wie z.B. mehrzeilige [Inline-Blocks](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout) oder Inline-[Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts#the_flex_container).
Die Werte erlauben die Auswahl zwischen der Ausrichtung an der ersten Baseline, der letzten Baseline des Boxes, oder überlassen dem Browser die Entscheidung basierend auf dem Box-Typ.

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
  - : Gibt die Ausrichtung an der [`letzten Baseline`](/de/docs/Web/CSS/Reference/Values/baseline-position#last_baseline) für Inline-Block-Elemente an und die Ausrichtung an der [`ersten Baseline`](/de/docs/Web/CSS/Reference/Values/baseline-position#first_baseline) für alles andere.
- `first`
  - : Gibt die Ausrichtung an der `ersten Baseline` an.
- `last`
  - : Gibt die Ausrichtung an der `letzten Baseline` an.

## Formaldefinition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Baseline-Auswahl in Inline-Flex-Containern

Dieses Beispiel zeigt die Verwendung der `baseline-source` Eigenschaft zur Steuerung der Baseline-Ausrichtung von Inline-Flex-Containern.

#### HTML

Unser HTML enthält mehrere {{htmlelement("span")}}-Elemente, die generische Inline-Container für phrasierten Inhalt darstellen.
Drei der `<span>`-Elemente enthalten geschachtelte `<span>`-Kinder.

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
  border: 2px solid #888 888;
  width: 50px;
}

span {
  padding: 0.4rem;
}
```

Wir definieren alle Boxen als Inline-Flex-Container.
Die `.first` Box soll die erste Baseline verwenden, die `.auto` Box verwendet die Standard-Baseline (was für Inline-Flex-Container die `erste` ist), und die `.last` Box verwendet die letzte Baseline.

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
- [CSS Box-Ausrichtung Überblick](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
