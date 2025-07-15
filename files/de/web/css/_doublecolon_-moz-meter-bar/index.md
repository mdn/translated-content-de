---
title: ::-moz-meter-bar
slug: Web/CSS/::-moz-meter-bar
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Der **`::-moz-meter-bar`** [CSS](/de/docs/Web/CSS) {{Glossary("Pseudo-element", "Pseudoelement")}} repräsentiert die Messanzeige in einem {{HTMLElement("meter")}}-Element. Es wird verwendet, um Stile auf die Anzeige innerhalb eines Meter-Elements anzuwenden.

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("appearance")}}
- {{cssxref("accent-color")}}
