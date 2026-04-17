---
title: "`:stalled` CSS-Pseudoklasse"
short-title: :stalled
slug: Web/CSS/Reference/Selectors/:stalled
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Der **`:stalled`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Selektor repräsentiert ein Element, das abspielbar ist, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn die Wiedergabe ins Stocken geraten ist. Eine Ressource wird als ins Stocken geraten betrachtet, wenn der Benutzer die Wiedergabe einer bestimmten Position in der Medienressource angefordert hat, aber es für eine gewisse Zeitspanne keine Daten erhält. Dies unterscheidet sich von {{cssxref(":buffering")}} darin, dass das Media-Element unerwartet keine Daten lädt, wenn es ins Stocken gerät (z.B. aufgrund eines Netzwerkfehlers) für etwa 3 Sekunden (die genaue Dauer ist [benutzeragentenabhängig](https://html.spec.whatwg.org/multipage/media.html#stall-timeout)).

> [!NOTE]
> Wie bei der {{cssxref(":buffering")}} Pseudoklasse wird das Element weiterhin als "spielend" betrachtet, wenn es "ins Stocken geraten" ist.
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
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event) Ereignis
