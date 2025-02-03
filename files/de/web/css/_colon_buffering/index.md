---
title: ":buffering"
slug: Web/CSS/:buffering
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{CSSRef}}

Der **`:buffering`** [CSS](/de/docs/Web/CSS) [Pseudoklasse-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie etwa ein {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn das abspielbare Element eine Medienressource puffert.

Ein Element wird als puffern betrachtet, wenn es nicht weiter abspielen kann, weil es versucht, Mediendaten zu laden, aber noch nicht genug Daten hat, um die Wiedergabe zu beginnen oder fortzusetzen.
Weitere Informationen finden Sie im [Leitfaden zu Medien-Puffern, Suchen und Zeitbereichen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

> [!NOTE]
> Ein Element wird immer noch als {{cssxref(":playing")}} betrachtet, wenn es "puffert".
> Wenn `:buffering` auf ein Element zutrifft, wird `:playing` ebenfalls auf dieses Element zutreffen.

## Syntax

```css
:buffering {
  /* ... */
}
```

## Beispiele

### CSS

```css
:buffering {
  outline: 5px solid red;
}

video:buffering {
  outline: 5px solid blue;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
