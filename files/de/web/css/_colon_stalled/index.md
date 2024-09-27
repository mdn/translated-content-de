---
title: ":stalled"
slug: Web/CSS/:stalled
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`:stalled`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn die Wiedergabe ins Stocken geraten ist. Eine Ressource gilt als gestockt, wenn der Benutzer die Wiedergabe an einer spezifischen Stelle in der Medienressource angefordert hat, aber über eine gewisse Zeitspanne keine Daten empfangen wurden. Dies unterscheidet sich von {{cssxref(":buffering")}} darin, dass das Medienelement unerwartet keine Daten lädt, wenn es gestockt ist (z. B. aufgrund eines Netzwerkfehlers) für etwa 3 Sekunden (die genaue Zeit ist [vom Benutzeragenten abhängig](https://html.spec.whatwg.org/multipage/media.html#stall-timeout)).

> [!NOTE]
> Wie bei der {{cssxref(":buffering")}}-Pseudoklasse wird das Element weiterhin als "spielend" betrachtet, wenn es "gestockt" ist.
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
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event) Event
