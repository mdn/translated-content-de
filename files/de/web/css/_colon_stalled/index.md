---
title: ":stalled"
slug: Web/CSS/:stalled
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Der **`:stalled`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie z. B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn die Wiedergabe ins Stocken geraten ist.
Eine Ressource wird als ins Stocken geraten betrachtet, wenn der Benutzer die Wiedergabe einer bestimmten Position in der Mediendatei angefordert hat, es jedoch für eine gewisse Zeitspanne nicht gelungen ist, Daten zu empfangen.
Dies unterscheidet sich von {{cssxref(":buffering")}} darin, dass das Media-Element unerwartet keine Daten lädt, wenn es ins Stocken gerät (z. B. aufgrund eines Netzwerkfehlers) für etwa 3 Sekunden (die genaue Zeit ist [vom Benutzeragenten abhängig](https://html.spec.whatwg.org/multipage/media.html#stall-timeout)).

> [!NOTE]
> Wie bei der Pseudoklasse {{cssxref(":buffering")}} wird das Element weiterhin als "abspielend" betrachtet, wenn es "ins Stocken geraten" ist.
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
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)-Ereignis
