---
title: ::-webkit-progress-inner-element
slug: Web/CSS/::-webkit-progress-inner-element
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-progress-inner-element`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den äußersten Container des {{HTMLElement("progress")}} Elements. Es ist das übergeordnete Element des {{cssxref("::-webkit-progress-bar")}} Pseudoelements.

> [!NOTE]
> Damit `::-webkit-progress-value` wirksam wird, muss {{cssxref("appearance")}} auf `none` für das `<progress>` Element gesetzt werden.

## Syntax

```css
::-webkit-progress-inner-element {
  /* ... */
}
```

## Beispiele

Diese Beispiele funktionieren nur in Blink und WebKit.

### Einen schwarzen Rahmen um die Fortschrittsleiste hinzufügen

In diesem Beispiel wird ein 2px schwarzer Rahmen um die Fortschrittsleiste hinzugefügt.

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

#### Ergebnis Screenshot

Wenn Sie keinen Blink- oder WebKit-Browser verwenden, führt der obige Code zu einer Fortschrittsleiste, die so aussieht:

![Die Fortschrittsleiste ist eine lange grün-graue Box mit einem schwarzen Rahmen. Die linken 20% der Box sind grün. Die rechten 80% sind grau.](-webkit-progress-inner-element_example.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoelemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{HTMLElement("progress")}} Elements zu stylen:

  - {{cssxref("::-webkit-progress-bar")}}
  - {{cssxref("::-webkit-progress-value")}}

- {{cssxref("::-moz-progress-bar")}}
