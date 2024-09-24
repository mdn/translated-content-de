---
title: ":buffering"
slug: Web/CSS/:buffering
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`:buffering`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) Selektor repräsentiert ein Element, das abspielbar ist, wie z.B. ein {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn das abspielbare Element eine Medienressource puffert.

Ein Element wird als puffernd betrachtet, wenn es nicht weiterspielen kann, weil es versucht, Medieninhalte zu laden, aber noch nicht genügend Daten hat, um die Wiedergabe zu beginnen oder fortzusetzen. Für weitere Informationen siehe den Leitfaden zu [Medienpufferung, -suche und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

> [!NOTE]
> Ein Element wird weiterhin als {{cssxref(":playing")}} betrachtet, wenn es "puffert".
> Wenn `:buffering` einem Element entspricht, wird `:playing` ebenfalls diesem Element entsprechen.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
