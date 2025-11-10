---
title: isolation
slug: Web/CSS/Reference/Properties/isolation
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`isolation`**-Eigenschaft von [CSS](/de/docs/Web/CSS) bestimmt, ob ein Element einen neuen {{Glossary("stacking_context", "Stacking Context")}} erstellen muss.

{{InteractiveExample("CSS Demo: isolation")}}

```css interactive-example-choice
isolation: auto;
```

```css interactive-example-choice
isolation: isolate;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="background-container">
    <div id="example-element">
      <img src="/shared-assets/images/examples/firefox-logo.svg" />
      <p><code>mix-blend-mode: multiply;</code></p>
    </div>
  </div>
</section>
```

```css interactive-example
.background-container {
  background-color: #f4f460;
  width: 250px;
}

#example-element {
  border: 1px solid black;
  margin: 2em;
}

#example-element * {
  mix-blend-mode: multiply;
  color: #8245a3;
}
```

Diese Eigenschaft ist besonders nützlich in Verbindung mit {{cssxref("mix-blend-mode")}} und {{cssxref("z-index")}}.

## Syntax

```css
/* Keyword values */
isolation: auto;
isolation: isolate;

/* Global values */
isolation: inherit;
isolation: initial;
isolation: revert;
isolation: revert-layer;
isolation: unset;
```

Die `isolation`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `auto`
  - : Ein neuer Stacking Context wird nur erstellt, wenn eine der auf das Element angewendeten Eigenschaften dies erfordert.
- `isolate`
  - : Ein neuer Stacking Context muss erstellt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erzwingen eines neuen Stacking Contexts für ein Element

#### HTML

```html
<div class="big-square">
  <div class="isolation-auto">
    <div class="small-square">auto</div>
  </div>
  <div class="isolation-isolate">
    <div class="small-square">isolate</div>
  </div>
</div>
```

#### CSS

```css
.isolation-auto {
  isolation: auto;
}

.isolation-isolate {
  isolation: isolate;
}

.big-square {
  background-color: lime;
  width: 200px;
  height: 210px;
}

.small-square {
  background-color: lime;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 2px;
  mix-blend-mode: difference;
}
```

#### Ergebnis

{{ EmbedLiveSample('Forcing_a_new_stacking_context_for_an_element', 230, 230) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}, {{cssxref("background-blend-mode")}}
