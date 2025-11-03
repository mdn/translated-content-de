---
title: ::-webkit-progress-inner-element
slug: Web/CSS/Reference/Selectors/::-webkit-progress-inner-element
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

Das **`::-webkit-progress-inner-element`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den äußersten Container des {{HTMLElement("progress")}}-Elements. Es ist das übergeordnete Element des {{cssxref("::-webkit-progress-bar")}}-Pseudo-Elements.

> [!NOTE]
> Damit `::-webkit-progress-value` wirksam wird, muss {{cssxref("appearance")}} auf `none` für das `<progress>`-Element gesetzt werden.

## Syntax

```css
::-webkit-progress-inner-element {
  /* ... */
}
```

## Beispiele

Diese Beispiele funktionieren nur in Blink und WebKit.

### Hinzufügen eines schwarzen Rahmens um die Fortschrittsanzeige

In diesem Beispiel wird ein 2px schwarzer Rahmen um die Fortschrittsanzeige hinzugefügt.

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

Wenn Sie keinen Blink- oder WebKit-Browser verwenden, sieht die Fortschrittsanzeige im obigen Code wie folgt aus:

![Fortschrittsbalken ist ein langes grünes und graues Feld mit einem schwarzen Rand. Die linken 20% des Feldes sind grün. Die rechten 80% sind grau.](-webkit-progress-inner-element_example.png)

## Spezifikationen

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudo-Elemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{HTMLElement("progress")}}-Elements zu stylen:
  - {{cssxref("::-webkit-progress-bar")}}
  - {{cssxref("::-webkit-progress-value")}}

- {{cssxref("::-moz-progress-bar")}}
