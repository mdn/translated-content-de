---
title: "::-moz-meter-bar"
slug: Web/CSS/::-moz-meter-bar
l10n:
  sourceCommit: 6bef243050a1f49bf5b7f37e9c4552f7aa30e24d
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-moz-meter-bar`** [CSS](/de/docs/Web/CSS)-{{Glossary("Pseudo-element", "Pseudo-Element")}} repräsentiert die Anzeigeleiste (Meter-Gauge) in einem {{HTMLElement("meter")}}-Element. Es wird verwendet, um Stile auf die Anzeigeleiste innerhalb eines `meter`-Elements anzuwenden.

## Syntax

```css
::-moz-meter-bar {
  /* ... */
}
```

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

## Spezifikationen

Gehört zu keinem Standard.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("appearance")}}
- {{cssxref("accent-color")}}
