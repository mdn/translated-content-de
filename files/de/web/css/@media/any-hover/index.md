---
title: any-hover
slug: Web/CSS/@media/any-hover
l10n:
  sourceCommit: 0fd3414a0e35e6e30a2cd34977de607a23000bef
---

{{CSSRef}}

Die **`any-hover`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob _irgendein_ verfügbares Eingabegerät über Elemente schweben kann.

## Syntax

Das `any-hover` Feature wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Keines der verfügbaren Eingabegeräte kann bequem schweben, oder es gibt kein Zeige-Eingabegerät.
- `hover`
  - : Eines oder mehrere der verfügbaren Eingabegeräte können bequem über Elemente schweben.

## Beispiele

### Testen, ob Eingabemethoden schweben können

#### HTML

```html
<a href="#">Versuchen Sie, über mich zu schweben!</a>
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

- [das `hover` Media-Feature](/de/docs/Web/CSS/@media/hover)
