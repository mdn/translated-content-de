---
title: ":stalled"
slug: Web/CSS/:stalled
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`:stalled`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie zum Beispiel {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn die Wiedergabe stockt.
Eine Ressource gilt als gestoppt, wenn der Benutzer die Wiedergabe einer bestimmten Position in der Medienressource angefordert hat, aber es nicht gelungen ist, über einen bestimmten Zeitraum Daten zu empfangen.
Dies unterscheidet sich von {{cssxref(":buffering")}} darin, dass das Media-Element unerwartet keine Daten lädt, wenn es gestoppt ist (z. B. aufgrund eines Netzwerkfehlers) für etwa 3 Sekunden (die genaue Zeit hängt vom [Benutzeragenten](https://html.spec.whatwg.org/multipage/media.html#stall-timeout) ab).

> [!NOTE]
> Wie bei der Pseudoklasse {{cssxref(":buffering")}} wird das Element weiterhin als "spielend" angesehen, wenn es "gestoppt" ist.
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

## Browserkompatibilität

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
