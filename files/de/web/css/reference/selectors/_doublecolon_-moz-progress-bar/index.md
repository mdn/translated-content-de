---
title: "`::-moz-progress-bar` CSS pseudo-element"
short-title: ::-moz-progress-bar
slug: Web/CSS/Reference/Selectors/::-moz-progress-bar
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-progress-bar`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die die Fortschrittsanzeige innerhalb eines {{HTMLElement("progress")}}-Elements darstellt. (Der Balken repräsentiert den Fortschritt, der erzielt wurde.)

Wenn Sie in Mozilla den nicht abgeschlossenen Teil von {{HTMLElement("progress")}} auswählen möchten, wählen Sie bitte direkt das {{HTMLElement("progress")}}-Element aus.

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

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("progress")}}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
