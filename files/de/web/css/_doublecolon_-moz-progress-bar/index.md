---
title: "::-moz-progress-bar"
slug: Web/CSS/::-moz-progress-bar
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-progress-bar`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die die Fortschrittsleiste innerhalb eines {{HTMLElement("progress")}}-Elements darstellt. (Die Leiste zeigt an, welcher Fortschritt erzielt wurde.)

Wenn Sie den unfertigen Teil von {{HTMLElement("progress")}} in Mozilla auswählen möchten, wählen Sie bitte direkt das {{HTMLElement("progress")}} aus.

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
<progress max="100">Unbestimmt</progress>
```

### CSS

```css
::-moz-progress-bar {
  background-color: red;
}

/* Erzwingen, dass unbestimmte Balken eine Breite von null haben */
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
