---
title: "`::-webkit-progress-value` CSS pseudo-element"
short-title: ::-webkit-progress-value
slug: Web/CSS/Reference/Selectors/::-webkit-progress-value
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

Das **`::-webkit-progress-value`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den gefüllten Teil der Leiste eines {{HTMLElement("progress")}}-Elements. Es ist ein Kind des {{cssxref("::-webkit-progress-bar")}}-Pseudoelements.

> [!NOTE]
> Damit `::-webkit-progress-value` wirksam wird, muss das {{cssxref("appearance")}}-Attribut auf `none` beim `<progress>`-Element gesetzt werden.

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

### Bildschirmfoto des Ergebnisses

Eine Fortschrittsleiste, die den obigen Stil verwendet, würde so aussehen:

![Eine lange orange und graue Box. Die linken 20% sind orange. Die rechten 80% sind grau.](progress-value.png)

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoelemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{HTMLElement("progress")}}-Elements zu stylen:
  - {{ cssxref("::-webkit-progress-bar") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
