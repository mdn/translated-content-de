---
title: baseline-source
slug: Web/CSS/Reference/Properties/baseline-source
l10n:
  sourceCommit: caab35a9191642d8d0362bba385f260b40683ccf
---

Die **`baseline-source`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, welche [Basislinie](/de/docs/Web/CSS/Reference/Values/baseline-position) verwendet werden soll, wenn Inline-Elemente mehrere mögliche Basislinien haben, wie z.B. mehrzeilige [Inline-Blöcke](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout) oder inline [Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts#the_flex_container). Die Werte erlauben die Wahl zwischen der Ausrichtung zur ersten Basislinie des Elements, der letzten Basislinie oder dem automatischen Entscheiden des Browsers basierend auf dem Typ des Elements.

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
  - : Spezifiziert die Ausrichtung zur [`letzten Basislinie`](/de/docs/Web/CSS/Reference/Values/baseline-position#last_baseline) für Inline-Blöcke, und zur [`ersten Basislinie`](/de/docs/Web/CSS/Reference/Values/baseline-position#first_baseline) für alles andere.
- `first`
  - : Spezifiziert die Ausrichtung zur `ersten Basislinie`.
- `last`
  - : Spezifiziert die Ausrichtung zur `letzten Basislinie`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl der Basislinie in Inline-Flex-Containern

Dieses Beispiel demonstriert die Nutzung der `baseline-source` Eigenschaft, um die Ausrichtung der Basislinie von Inline-Flex-Containern zu steuern.

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
  border: 2px solid #888;
  width: 50px;
}

span {
  padding: 0.4rem;
}
```

Wir definieren alle Boxen als Inline-Flex-Container. Wir setzen die `.first`-Box, um die erste Basislinie zu verwenden, die `.auto`-Box nutzt die Standard-Basislinie (die für Inline-Flex-Container `first` ist), und die `.last`-Box verwendet die letzte Basislinie.

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

- [`vertical-align`](/de/docs/Web/CSS/Reference/Properties/vertical-align) Eigenschaft
- [Überblick der CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
