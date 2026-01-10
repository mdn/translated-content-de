---
title: baseline-source
slug: Web/CSS/Reference/Properties/baseline-source
l10n:
  sourceCommit: 5ebca2edd6095fb3f61d442ed3146fa37fffbf7d
---

Die **`baseline-source`**-Eigenschaft [CSS](/de/docs/Web/CSS) definiert, welche [Grundlinie](/de/docs/Web/CSS/Reference/Values/baseline-position) verwendet werden soll, wenn Inline-Level-Boxen mehrere mögliche Grundlinien haben, wie z.B. mehrzeilige [Inline-Blöcke](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout) oder Inline-[Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts#the_flex_container). Die Werte ermöglichen die Auswahl zwischen der Ausrichtung an der ersten Grundlinie der Box, der letzten Grundlinie oder der automatischen Entscheidung durch den Browser basierend auf dem Boxtyp.

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
  - : Gibt die Ausrichtung an der [`letzten Grundlinie`](/de/docs/Web/CSS/Reference/Values/baseline-position#last_baseline) für Inline-Block, die Ausrichtung an der [`ersten Grundlinie`](/de/docs/Web/CSS/Reference/Values/baseline-position#first_baseline) für alles andere an.
- `first`
  - : Gibt die Ausrichtung an der `ersten Grundlinie` an.
- `last`
  - : Gibt die Ausrichtung an der `letzten Grundlinie` an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl der Grundlinie in Inline-Flex-Containern

Dieses Beispiel demonstriert die Verwendung der `baseline-source`-Eigenschaft zur Steuerung der Grundlinienausrichtung von Inline-Flex-Containern.

#### HTML

Unser HTML enthält mehrere {{htmlelement("span")}}-Elemente, die generische Inline-Container für phrasierende Inhalte sind. Drei der `<span>`-Elemente enthalten verschachtelte `<span>`-Kinder.

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
  border: 2px solid #888888;
  width: 50px;
}

span {
  padding: 0.4rem;
}
```

Wir definieren alle Boxen als Inline-Flex-Container. Wir setzen die `.first`-Box, um die erste Grundlinie zu verwenden, die `.auto`-Box verwendet die Standardgrundlinie (die für Inline-Flex-Container `first` ist), und die `.last`-Box verwendet die letzte Grundlinie.

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

- {{cssxref("vertical-align")}}-Eigenschaft
- [CSS-Box-Ausrichtungsübersicht](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
