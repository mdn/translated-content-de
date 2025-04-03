---
title: :stalled
slug: Web/CSS/:stalled
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Der **`:stalled`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn die Wiedergabe ins Stocken gerät.
Eine Ressource gilt als ins Stocken geraten, wenn der Benutzer die Wiedergabe einer bestimmten Position in der Medienressource angefordert hat, aber es über einen bestimmten Zeitraum hinweg keine Daten erhalten hat.
Dies unterscheidet sich von {{cssxref(":buffering")}} darin, dass das Medienelement unerwartet keine Daten lädt, wenn es ins Stocken gerät (z.B. aufgrund eines Netzwerkfehlers) für ca. 3 Sekunden (die genaue Zeit ist [benutzeragentenabhängig](https://html.spec.whatwg.org/multipage/media.html#stall-timeout)).

> [!NOTE]
> Wie bei der Pseudoklasse {{cssxref(":buffering")}} wird das Element immer noch als "spielend" betrachtet, wenn es "stalled" ist.
> Wenn `:stalled` auf ein Element zutrifft, wird {{cssxref(":playing")}} ebenfalls auf dieses Element zutreffen.

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
