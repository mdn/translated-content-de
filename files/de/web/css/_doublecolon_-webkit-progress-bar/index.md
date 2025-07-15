---
title: ::-webkit-progress-bar
slug: Web/CSS/::-webkit-progress-bar
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Das **`::-webkit-progress-bar`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die gesamte Leiste eines {{HTMLElement("progress")}}-Elements. Normalerweise ist es nur als der nicht ausgefüllte Teil der Leiste sichtbar, da es standardmäßig unter dem {{cssxref("::-webkit-progress-value")}} Pseudo-Element gerendert wird. Es ist ein Kind des {{cssxref("::-webkit-progress-inner-element")}} Pseudo-Elements und das Elternteil des {{cssxref("::-webkit-progress-value")}} Pseudo-Elements.

> [!NOTE]
> Damit `::-webkit-progress-value` wirksam wird, muss {{cssxref("appearance")}} auf `none` beim `<progress>`-Element gesetzt werden.

## Syntax

```css
::-webkit-progress-bar {
  /* ... */
}
```

## Beispiele

### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-bar {
  background-color: orange;
}
```

### HTML

```html
<progress value="10" max="50"></progress>
```

### Ergebnis

{{EmbedLiveSample("Examples", 200, 50)}}

### Ergebnis-Screenshot

Der obige Code ergibt eine Fortschrittsleiste, die in einem WebKit- oder Blink-Browser so aussieht:

![Die Fortschrittsleiste ist eine horizontale Leiste etwa in Buchstabenhöhe. Die linken 20% sind grün. Die rechten 80% sind orange.](progress-bar.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudo-Elemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{HTMLElement("progress")}}-Elements zu stylen:
  - {{ cssxref("::-webkit-progress-value") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
