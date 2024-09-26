---
title: Isolation
slug: Web/CSS/isolation
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{CSSRef}}

Die **`isolation`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt, ob ein Element einen neuen {{glossary("stacking context")}} erzeugen muss.

{{EmbedInteractiveExample("pages/css/isolation.html")}}

Diese Eigenschaft ist besonders nützlich, wenn sie in Verbindung mit {{cssxref("mix-blend-mode")}} und {{cssxref("z-index")}} verwendet wird.

## Syntax

```css
/* Schlüsselwortwerte */
isolation: auto;
isolation: isolate;

/* Globale Werte */
isolation: inherit;
isolation: initial;
isolation: revert;
isolation: revert-layer;
isolation: unset;
```

Die `isolation`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `auto`
  - : Ein neuer Stacking Context wird nur erstellt, wenn eine der Eigenschaften, die auf das Element angewendet werden, dies erfordert.
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
<div class="big-square ">
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
  background-color: rgb(0 255 0);
  width: 200px;
  height: 210px;
}

.small-square {
  background-color: rgb(0 255 0);
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