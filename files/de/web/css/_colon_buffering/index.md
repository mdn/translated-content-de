---
title: ":buffering"
slug: Web/CSS/:buffering
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`:buffering`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie beispielsweise {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn das abspielbare Element eine Medienressource puffert.

Ein Element wird als puffern angesehen, wenn es nicht weiter abgespielt werden kann, weil es versucht, Mediendaten zu laden, aber noch nicht genügend Daten hat, um die Wiedergabe zu beginnen oder fortzusetzen. Für weitere Informationen siehe den [Leitfaden zu Media-Buffering, Suchen und Zeitbereichen](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

> [!NOTE]
> Ein Element wird immer noch als {{cssxref(":playing")}} angesehen, wenn es „puffert“.
> Wenn `:buffering` zu einem Element passt, wird `:playing` auch zu diesem Element passen.

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
