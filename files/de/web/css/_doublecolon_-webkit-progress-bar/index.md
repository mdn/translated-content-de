---
title: "::-webkit-progress-bar"
slug: Web/CSS/::-webkit-progress-bar
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-progress-bar`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die gesamte Leiste eines {{HTMLElement("progress")}}-Elements. Normalerweise ist es nur als der nicht ausgefüllte Teil der Leiste sichtbar, da es standardmäßig unterhalb des {{ cssxref("::-webkit-progress-value") }} Pseudo-Elements gerendert wird. Es ist ein Kindelement des {{cssxref("::-webkit-progress-inner-element")}} Pseudo-Elements und das Elternelement des {{cssxref("::-webkit-progress-value")}} Pseudo-Elements.

> [!NOTE]
> Damit `::-webkit-progress-value` wirksam wird, muss das {{cssxref("appearance")}} auf `none` für das `<progress>`-Element gesetzt werden.

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

Der obige Code erzeugt eine Fortschrittsleiste, die in einem WebKit- oder Blink-Browser wie folgt aussieht:

![Die Fortschrittsleiste ist eine horizontale Leiste etwa in der Höhe eines Buchstabens. Die linken 20% sind grün. Die rechten 80% sind orange.](progress-bar.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von WebKit/Blink verwendeten Pseudo-Elemente, um andere Teile eines {{HTMLElement("progress")}}-Elements zu gestalten:

  - {{ cssxref("::-webkit-progress-value") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
