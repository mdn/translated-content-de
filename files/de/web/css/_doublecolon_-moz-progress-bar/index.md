---
title: ::-moz-progress-bar
slug: Web/CSS/::-moz-progress-bar
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-progress-bar`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den Fortschrittsbalken innerhalb eines {{HTMLElement("progress")}}-Elements darstellt. (Der Balken repräsentiert den Fortschritt, der gemacht wurde.)

Wenn Sie den nicht abgeschlossenen Teil von {{HTMLElement("progress")}} in Mozilla auswählen möchten, wählen Sie bitte das {{HTMLElement("progress")}} direkt aus.

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
