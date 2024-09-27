---
title: isolation
slug: Web/CSS/isolation
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{CSSRef}}

Die **`isolation`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element einen neuen [Stacking-Kontext](/de/docs/Glossary/stacking_context) erstellen muss.

{{EmbedInteractiveExample("pages/css/isolation.html")}}

Diese Eigenschaft ist besonders hilfreich, wenn sie in Verbindung mit {{cssxref("mix-blend-mode")}} und {{cssxref("z-index")}} verwendet wird.

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

Die `isolation` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `auto`
  - : Ein neuer Stacking-Kontext wird nur erstellt, wenn eine der auf das Element angewendeten Eigenschaften dies erfordert.
- `isolate`
  - : Es muss ein neuer Stacking-Kontext erstellt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen neuen Stacking-Kontext für ein Element erzwingen

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
