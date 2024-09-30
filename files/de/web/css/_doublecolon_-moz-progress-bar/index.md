---
title: "::-moz-progress-bar"
slug: Web/CSS/::-moz-progress-bar
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-progress-bar`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die die Fortschrittsleiste innerhalb eines {{HTMLElement("progress")}}-Elements darstellt. (Die Leiste repräsentiert den Fortschritt, der gemacht wurde.)

Wenn Sie den nicht vollendeten Teil des {{HTMLElement("progress")}}-Elements in Mozilla auswählen möchten, wählen Sie bitte das {{HTMLElement("progress")}}-Element direkt aus.

## Syntax

```css
::-moz-progress-bar {
  /* ... */
}
```

## Beispiele

### HTML

```html
<progress value="30" max="100">30%</progress>
<progress max="100">Indeterminate</progress>
```

### CSS

```css
::-moz-progress-bar {
  background-color: red;
}

/* Force indeterminate bars to have zero width */
:indeterminate::-moz-progress-bar {
  width: 0;
}
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("progress")}}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
