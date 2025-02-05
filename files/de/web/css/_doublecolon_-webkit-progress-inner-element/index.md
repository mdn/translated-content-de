---
title: "::-webkit-progress-inner-element"
slug: Web/CSS/::-webkit-progress-inner-element
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-progress-inner-element`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den äußersten Container des {{HTMLElement("progress")}}-Elements. Es ist der Elternteil des {{cssxref("::-webkit-progress-bar")}}-Pseudo-Elements.

> [!NOTE]
> Damit `::-webkit-progress-value` Wirkung zeigt, muss {{cssxref("appearance")}} auf `none` für das `<progress>`-Element gesetzt werden.

## Syntax

```css
::-webkit-progress-inner-element {
  /* ... */
}
```

## Beispiele

Diese Beispiele funktionieren nur in Blink- und WebKit-basierten Browsern.

### Einen schwarzen Rahmen um die Fortschrittsanzeige hinzufügen

In diesem Beispiel wird ein 2px dicker schwarzer Rahmen um die Fortschrittsanzeige hinzugefügt.

#### HTML

```html
<progress value="10" max="50"></progress>
```

#### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-inner-element {
  border: 2px solid black;
}
```

#### Ergebnis

{{EmbedLiveSample("Adding_a_black_border_around_the_progress_bar", 200, 50)}}

#### Ergebnis-Screenshot

Wenn Sie keinen Blink- oder WebKit-Browser verwenden, sieht die Fortschrittsanzeige mit dem obigen Code wie folgt aus:

![Die Fortschrittsanzeige ist ein langes grün-graues Feld mit einem schwarzen Rahmen. Die linken 20 % des Feldes sind grün. Die rechten 80 % sind grau.](-webkit-progress-inner-element_example.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von WebKit/Blink verwendeten Pseudo-Elemente, um andere Teile eines {{HTMLElement("progress")}}-Elements zu gestalten:

  - {{cssxref("::-webkit-progress-bar")}}
  - {{cssxref("::-webkit-progress-value")}}

- {{cssxref("::-moz-progress-bar")}}
