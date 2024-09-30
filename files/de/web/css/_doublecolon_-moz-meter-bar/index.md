---
title: "::-moz-meter-bar"
slug: Web/CSS/::-moz-meter-bar
l10n:
  sourceCommit: 8d9fbc54cc23d2695b213fb23ff6cbedbe7e503d
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-moz-meter-bar`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Glossary/Pseudo-element) repräsentiert die Anzeigeskala in einem {{HTMLElement("meter")}}-Element. Es wird verwendet, um Stile auf die Skala innerhalb eines Meter-Elements anzuwenden und auszuwählen.

## Syntax

```css
::-moz-meter-bar {
  /* ... */
}
```

## Spezifikationen

Teil keiner Norm.

## Beispiele

### HTML

```html
Normal: <meter min="0" max="10" value="6">Score 6/10</meter>
<br />
Styled: &nbsp;&nbsp;<meter class="styled" min="0" max="10" value="6">
  Score 6/10
</meter>
```

### CSS

```css
meter {
  height: 20px;
  width: 200px;
  vertical-align: -0.4rem;
}

.styled::-moz-meter-bar {
  background: lime;
  box-shadow: 0 2px 3px grey inset;
  border-radius: 5px;
}
```

### Ergebnis

{{ EmbedLiveSample('Examples') }}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("appearance")}}
- {{cssxref("accent-color")}}
