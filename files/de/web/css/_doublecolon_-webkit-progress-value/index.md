---
title: ::-webkit-progress-value
slug: Web/CSS/::-webkit-progress-value
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-progress-value`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den ausgefüllten Teil der Leiste eines {{HTMLElement("progress")}}-Elements. Es ist ein Kind des {{cssxref("::-webkit-progress-bar")}} Pseudo-Elements.

> [!NOTE]
> Damit `::-webkit-progress-value` wirksam wird, muss {{cssxref("appearance")}} auf `none` beim `<progress>`-Element gesetzt werden.

## Syntax

```css
::-webkit-progress-value {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nur in Browsern, die auf Blink oder WebKit basieren.

### HTML

```html
<progress value="10" max="50"></progress>
```

### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-value {
  background-color: orange;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 200, 50)}}

### Ergebnis-Screenshot

Eine Fortschrittsanzeige mit dem obigen Stil würde so aussehen:

![Eine lange orange-graue Box. Die linken 20% sind orange. Die rechten 80% sind grau.](progress-value.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudo-Elemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{HTMLElement("progress")}}-Elements zu stylen:

  - {{ cssxref("::-webkit-progress-bar") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
