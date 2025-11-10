---
title: ::-moz-meter-bar
slug: Web/CSS/Reference/Selectors/::-moz-meter-bar
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

Der **`::-moz-meter-bar`** [CSS](/de/docs/Web/CSS) {{Glossary("Pseudo-element", "Pseudoelement")}} repräsentiert die Anzeigenleiste in einem {{HTMLElement("meter")}}-Element. Es wird verwendet, um Stile auf die Anzeigeleiste innerhalb eines `meter`-Elements anzuwenden.

> [!NOTE]
> Standardmäßig verwendet das `<meter>`-Element native Stile. Um eigene Stile anzuwenden, setzen Sie zuerst `appearance: none` auf das `<meter>`-Element und stylen Sie dann mit `::-moz-meter-bar`.

## Syntax

```css
meter {
  appearance: none;
}
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

.styled {
  appearance: none;
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
