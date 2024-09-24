---
title: "::-webkit-progress-inner-element"
slug: Web/CSS/::-webkit-progress-inner-element
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-progress-inner-element`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert das äußerste Container-Element des {{HTMLElement("progress")}} Elements. Es ist das Elternelement des Pseudo-Elements {{cssxref("::-webkit-progress-bar")}}.

> [!NOTE]
> Damit `::-webkit-progress-value` wirksam wird, muss {{cssxref("appearance")}} auf `none` für das `<progress>` Element gesetzt werden.

## Syntax

```css
::-webkit-progress-inner-element {
  /* ... */
}
```

## Beispiele

Diese Beispiele funktionieren nur in Blink- und WebKit-Browsern.

### Einen schwarzen Rand um die Fortschrittsanzeige hinzufügen

In diesem Beispiel wird ein 2px schwarzer Rand um die Fortschrittsanzeige hinzugefügt.

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

#### Ergebnisbildschirmfoto

Wenn Sie keinen Blink- oder WebKit-Browser verwenden, sieht die obige Codierung wie folgt aus:

![Progressbar ist ein langer grüner und grauer Kasten mit einem schwarzen Rahmen. Die linken 20% des Kastens sind grün. Die rechten 80% sind grau.](-webkit-progress-inner-element_example.png)

## Spezifikationen

Kein Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von WebKit/Blink verwendeten Pseudo-Elemente, um andere Teile eines {{HTMLElement("progress")}} Elements zu stylen:

  - {{cssxref("::-webkit-progress-bar")}}
  - {{cssxref("::-webkit-progress-value")}}

- {{cssxref("::-moz-progress-bar")}}
