---
title: :stalled
slug: Web/CSS/:stalled
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`:stalled`** [CSS](/de/docs/Web/CSS) [Pseudoklassen]-Selektor repräsentiert ein Element, das abspielbar ist, wie zum Beispiel {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn die Wiedergabe ins Stocken geraten ist. Eine Ressource gilt als ins Stocken geraten, wenn der Benutzer die Wiedergabe an einer bestimmten Position in der Medienressource angefordert hat, es jedoch nicht gelungen ist, Daten für eine gewisse Zeit zu empfangen. Dies unterscheidet sich von {{cssxref(":buffering")}} darin, dass das Medienelement unerwartet keine Daten lädt, wenn es ins Stocken geraten ist (z. B. aufgrund eines Netzwerkfehlers) für etwa 3 Sekunden (die genaue Zeit ist [benutzeragentenabhängig](https://html.spec.whatwg.org/multipage/media.html#stall-timeout)).

> [!NOTE]
> Wie bei der {{cssxref(":buffering")}} Pseudoklasse wird das Element weiterhin als "spielend" angesehen, wenn es "ins Stocken geraten" ist.
> Wenn `:stalled` auf ein Element zutrifft, wird auch {{cssxref(":playing")}} dieses Element abdecken.

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
