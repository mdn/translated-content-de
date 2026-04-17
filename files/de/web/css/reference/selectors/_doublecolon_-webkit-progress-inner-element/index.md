---
title: "`::-webkit-progress-inner-element` CSS pseudo-element"
short-title: ::-webkit-progress-inner-element
slug: Web/CSS/Reference/Selectors/::-webkit-progress-inner-element
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

Das **`::-webkit-progress-inner-element`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den äußersten Container des {{HTMLElement("progress")}}-Elements. Es ist das übergeordnete Element des {{cssxref("::-webkit-progress-bar")}}-Pseudoelements.

> [!NOTE]
> Damit `::-webkit-progress-value` wirksam wird, muss {{cssxref("appearance")}} auf `none` beim `<progress>`-Element gesetzt werden.

## Syntax

```css
::-webkit-progress-inner-element {
  /* ... */
}
```

## Beispiele

Diese Beispiele funktionieren nur unter Blink und WebKit.

### Einen schwarzen Rand um die Fortschrittsleiste hinzufügen

In diesem Beispiel wird ein 2px breiter schwarzer Rand um die Fortschrittsleiste hinzugefügt.

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

#### Screenshot des Ergebnisses

Wenn Sie keinen Blink- oder WebKit-Browser verwenden, sieht die obige Code-Fortschrittsleiste wie folgt aus:

![Die Fortschrittsleiste ist ein langes grünes und graues Kästchen mit einem schwarzen Rand. Die linken 20% des Kästchens sind grün. Die rechten 80% sind grau.](-webkit-progress-inner-element_example.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoelemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{HTMLElement("progress")}}-Elements zu stylen:
  - {{cssxref("::-webkit-progress-bar")}}
  - {{cssxref("::-webkit-progress-value")}}

- {{cssxref("::-moz-progress-bar")}}
