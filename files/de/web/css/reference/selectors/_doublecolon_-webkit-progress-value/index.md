---
title: "`::-webkit-progress-value` CSS pseudo-element"
short-title: ::-webkit-progress-value
slug: Web/CSS/Reference/Selectors/::-webkit-progress-value
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{Non-standard_header}}

Das **`::-webkit-progress-value`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den ausgefüllten Teil der Leiste eines {{HTMLElement("progress")}}-Elements. Es ist ein Kind des {{cssxref("::-webkit-progress-bar")}}-Pseudoelements.

> [!NOTE]
> Damit `::-webkit-progress-value` wirksam wird, muss das {{cssxref("appearance")}} auf `none` für das `<progress>`-Element gesetzt werden.

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

Eine Fortschrittsanzeige im oben genannten Stil würde so aussehen:

![Ein langes oranges und graues Feld. Die linken 20% sind orange. Die rechten 80% sind grau.](progress-value.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von WebKit/Blink verwendeteten Pseudoelemente, um andere Teile eines {{HTMLElement("progress")}}-Elements zu stylen:
  - {{ cssxref("::-webkit-progress-bar") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
