---
title: ::-moz-progress-bar
slug: Web/CSS/::-moz-progress-bar
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}{{SeeCompatTable}}

Der **`::-moz-progress-bar`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die die Fortschrittsanzeige innerhalb eines {{HTMLElement("progress")}}-Elements darstellt. (Der Balken stellt den Fortschritt dar, der gemacht wurde.)

Wenn Sie den unfertigen Teil des {{HTMLElement("progress")}} in Mozilla auswählen möchten, wählen Sie bitte direkt das {{HTMLElement("progress")}}-Element aus.

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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("progress")}}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
