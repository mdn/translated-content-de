---
title: "`any-hover` CSS-Media-Feature"
short-title: any-hover
slug: Web/CSS/Reference/At-rules/@media/any-hover
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`any-hover`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, ob _irgendein_ verfügbares Eingabegerät in der Lage ist, über Elemente zu schweben.

## Syntax

Das `any-hover` Feature ist als Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `none`
  - : Keines der verfügbaren Eingabegeräte kann bequem schweben, oder es gibt kein zeigendes Eingabegerät.
- `hover`
  - : Ein oder mehrere verfügbare Eingabegeräte können bequem über Elemente schweben.

## Beispiele

### Testen, ob Eingabemethoden schweben können

#### HTML

```html
<a href="#">Try hovering over me!</a>
```

#### CSS

```css
@media (any-hover: hover) {
  a:hover {
    background: yellow;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Testing_whether_input_methods_can_hover")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [das `hover` Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media/hover)
