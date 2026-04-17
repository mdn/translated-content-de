---
title: "`::-webkit-progress-bar` CSS pseudo-element"
short-title: ::-webkit-progress-bar
slug: Web/CSS/Reference/Selectors/::-webkit-progress-bar
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

Das **`::-webkit-progress-bar`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert die gesamte Leiste eines {{HTMLElement("progress")}}-Elements. Normalerweise ist es nur als der ungefüllte Teil der Leiste sichtbar, da es standardmäßig unterhalb des {{ cssxref("::-webkit-progress-value") }} Pseudoelements gerendert wird. Es ist ein Kind des {{cssxref("::-webkit-progress-inner-element")}} Pseudoelements und das übergeordnete Element des {{cssxref("::-webkit-progress-value")}} Pseudoelements.

> [!NOTE]
> Damit `::-webkit-progress-value` Wirkung zeigt, muss {{cssxref("appearance")}} auf `none` im `<progress>`-Element gesetzt werden.

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

### Ergebnisscreenshot

Der obige Code führt zu einer Fortschrittsleiste, die in einem WebKit- oder Blink-Browser folgendermaßen aussieht:

![Die Fortschrittsleiste ist eine horizontale Leiste etwa in der Höhe eines Buchstabens. Die linken 20% sind grün. Die rechten 80% sind orange.](progress-bar.png)

## Spezifikationen

Ist kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoelemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{HTMLElement("progress")}}-Elements zu stylen:
  - {{ cssxref("::-webkit-progress-value") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
