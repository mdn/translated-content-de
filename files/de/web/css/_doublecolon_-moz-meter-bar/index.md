---
title: ::-moz-meter-bar
slug: Web/CSS/::-moz-meter-bar
l10n:
  sourceCommit: 829053808519d4e3135e50fea2d6282751ed7d1f
---

{{Non-standard_header}}

Das **`::-moz-meter-bar`** [CSS](/de/docs/Web/CSS) {{Glossary("Pseudo-element", "Pseudo-Element")}} repräsentiert die Anzeige des Messwertes in einem {{HTMLElement("meter")}}-Element. Es wird verwendet, um das Styling der Anzeige innerhalb eines Meter-Elements auszuwählen und anzuwenden.

> [!NOTE]
> Standardmäßig verwendet das `<meter>`-Element ein natives Styling. Um eigene Styles anzuwenden, setzen Sie zunächst `appearance: none` auf das `<meter>`-Element und stylen Sie anschließend mit `::-moz-meter-bar`.

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
