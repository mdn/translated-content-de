---
title: any-hover
slug: Web/CSS/@media/any-hover
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`any-hover`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob _irgendein_ verfügbares Eingabegerät über Elemente schweben kann.

## Syntax

Das `any-hover`-Merkmal wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Keines der verfügbaren Eingabegeräte kann bequem schweben oder es gibt kein zeigendes Eingabegerät.
- `hover`
  - : Eines oder mehrere der verfügbaren Eingabegeräte können bequem über Elemente schweben.

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

- [das `hover`-Medienmerkmal](/de/docs/Web/CSS/@media/hover)
