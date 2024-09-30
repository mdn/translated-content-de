---
title: ":stalled"
slug: Web/CSS/:stalled
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`:stalled`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)-Selektor repräsentiert ein Element, das abspielbar ist, wie zum Beispiel {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn die Wiedergabe ins Stocken geraten ist. Eine Ressource wird als ins Stocken geraten angesehen, wenn der Benutzer die Wiedergabe einer bestimmten Position in der Medienressource angefordert hat, diese jedoch für eine bestimmte Zeitspanne keine Daten empfangen hat. Dies unterscheidet sich von {{cssxref(":buffering")}} dadurch, dass das Media-Element unerwartet keine Daten lädt, wenn es ins Stocken gerät (z. B. aufgrund eines Netzwerkfehlers) für etwa 3 Sekunden (die genaue Zeit ist [benutzeragentenabhängig](https://html.spec.whatwg.org/multipage/media.html#stall-timeout)).

> [!NOTE]
> Wie bei der {{cssxref(":buffering")}}-Pseudoklasse wird das Element immer noch als "abspielend" betrachtet, wenn es "ins Stocken geraten" ist.
> Wenn `:stalled` mit einem Element übereinstimmt, passt auch {{cssxref(":playing")}} auf dieses Element.

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
