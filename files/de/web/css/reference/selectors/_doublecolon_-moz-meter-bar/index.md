---
title: "`::-moz-meter-bar` CSS pseudo-element"
short-title: ::-moz-meter-bar
slug: Web/CSS/Reference/Selectors/::-moz-meter-bar
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

Das **`::-moz-meter-bar`** [CSS](/de/docs/Web/CSS) {{Glossary("Pseudo-element", "Pseudoelement")}} repräsentiert die Anzeigeskala in einem {{HTMLElement("meter")}}-Element. Es wird verwendet, um Stile für die Skala innerhalb eines Meter-Elements auszuwählen und anzuwenden.

> [!NOTE]
> Standardmäßig verwendet das `<meter>`-Element ein natives Styling. Um eigene Stile anzuwenden, setzen Sie zunächst `appearance: none` auf das `<meter>`-Element und stylen Sie dann mit `::-moz-meter-bar`.

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

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("appearance")}}
- {{cssxref("accent-color")}}
