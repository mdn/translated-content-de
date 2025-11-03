---
title: :stalled
slug: Web/CSS/Reference/Selectors/:stalled
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der **`:stalled`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn die Wiedergabe ins Stocken geraten ist.
Ein Medium gilt als ins Stocken geraten, wenn der Benutzer die Wiedergabe einer bestimmten Position in der Medienressource angefordert hat, aber über einen gewissen Zeitraum keine Daten empfangen konnte.
Dies unterscheidet sich von {{cssxref(":buffering")}} darin, dass das Medienelement unerwartet keine Daten lädt, wenn es ins Stocken geraten ist (z. B. aufgrund eines Netzwerkfehlers) für etwa 3 Sekunden (die genaue Zeit ist [nutzeragentenabhängig](https://html.spec.whatwg.org/multipage/media.html#stall-timeout)).

> [!NOTE]
> Wie bei der {{cssxref(":buffering")}} Pseudoklasse wird das Element immer noch als "spielend" betrachtet, wenn es "ins Stocken" geraten ist.
> Wenn `:stalled` auf ein Element zutrifft, wird auch {{cssxref(":playing")}} auf dieses Element zutreffen.

## Syntax

```css
:stalled {
  /* ... */
}
```

## Beispiele

### CSS

```css
:stalled {
  outline: 5px solid red;
}

audio:stalled {
  background-color: red;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":volume-locked")}}
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event) Ereignis
