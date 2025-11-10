---
title: :stalled
slug: Web/CSS/Reference/Selectors/:stalled
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`:stalled`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Selektor repräsentiert ein Element, das abspielbar ist, wie {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn die Wiedergabe ins Stocken geraten ist. Eine Ressource gilt als ins Stocken geraten, wenn der Benutzer die Wiedergabe einer bestimmten Position in der Medienressource angefordert hat, aber sie für eine gewisse Zeit keine Daten erhalten hat. Dies unterscheidet sich von {{cssxref(":buffering")}} insofern, als das Medienelement unerwartet keine Daten lädt, wenn es ins Stocken gerät (z. B. aufgrund eines Netzwerkfehlers) für etwa 3 Sekunden (die genaue Zeit ist [Benutzeragenten-abhängig](https://html.spec.whatwg.org/multipage/media.html#stall-timeout)).

> [!NOTE]
> Wie bei der Pseudoklasse {{cssxref(":buffering")}} wird das Element weiterhin als „spielend“ betrachtet, wenn es „ins Stocken geraten“ ist.
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
