---
title: "::-moz-progress-bar"
slug: Web/CSS/::-moz-progress-bar
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-progress-bar`** [CSS](/de/docs/Web/CSS)-[Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die die Fortschrittsanzeige innerhalb eines {{HTMLElement("progress")}}-Elements darstellt. (Die Leiste stellt den Fortschritt dar, der erreicht wurde.)

Wenn Sie den nicht abgeschlossenen Teil von {{HTMLElement("progress")}} in Mozilla auswählen möchten, wählen Sie bitte direkt das {{HTMLElement("progress")}}-Element aus.

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

Gehört zu keinem Standard.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("progress")}}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
