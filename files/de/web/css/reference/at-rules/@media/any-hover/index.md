---
title: any-hover
slug: Web/CSS/Reference/At-rules/@media/any-hover
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **`any-hover`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, ob _irgendein_ verfügbares Eingabegerät über Elemente schweben kann.

## Syntax

Das `any-hover` Merkmal wird als ein Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Keines der verfügbaren Eingabegeräte kann bequem schweben, oder es gibt keinen Zeigeeingabemechanismus.
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

- [das `hover` Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media/hover)
