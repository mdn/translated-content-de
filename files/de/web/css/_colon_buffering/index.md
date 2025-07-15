---
title: :buffering
slug: Web/CSS/:buffering
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`:buffering`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) Selektor repräsentiert ein Element, das abspielbar ist, wie zum Beispiel {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn das abspielbare Element eine Medienressource puffert.

Ein Element wird als puffern betrachtet, wenn es nicht weiter abspielen kann, weil es versucht, Mediendaten zu laden, aber noch nicht genügend Daten vorhanden sind, um die Wiedergabe zu beginnen oder fortzusetzen.
Für weitere Informationen siehe den [Leitfaden zu Media-Puffern, -Suchen und -Zeitbereichen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

> [!NOTE]
> Ein Element wird auch dann noch als {{cssxref(":playing")}} betrachtet, wenn es "puffert".
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
