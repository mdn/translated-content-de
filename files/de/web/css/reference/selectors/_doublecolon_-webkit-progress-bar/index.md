---
title: ::-webkit-progress-bar
slug: Web/CSS/Reference/Selectors/::-webkit-progress-bar
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

Das **`::-webkit-progress-bar`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den gesamten Balken eines {{HTMLElement("progress")}} Elements. Normalerweise ist es nur als der nicht ausgefüllte Teil des Balkens sichtbar, da es standardmäßig unter dem {{ cssxref("::-webkit-progress-value") }} Pseudo-Element gerendert wird. Es ist ein Kind des {{cssxref("::-webkit-progress-inner-element")}} Pseudo-Elements und das Elternteil des {{cssxref("::-webkit-progress-value")}} Pseudo-Elements.

> [!NOTE]
> Damit `::-webkit-progress-value` wirksam wird, muss {{cssxref("appearance")}} auf `none` am `<progress>` Element gesetzt werden.

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

### Ergebnisbild

Der obige Code ergibt eine Fortschrittsleiste, die in einem WebKit- oder Blink-Browser folgendermaßen aussieht:

![Die Fortschrittsleiste ist ein horizontaler Balken, etwa so hoch wie ein Buchstabe. Die linken 20% sind grün. Die rechten 80% sind orange.](progress-bar.png)

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudo-Elemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{HTMLElement("progress")}} Elements zu stylen:
  - {{ cssxref("::-webkit-progress-value") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
