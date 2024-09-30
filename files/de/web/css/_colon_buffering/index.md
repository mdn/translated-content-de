---
title: ":buffering"
slug: Web/CSS/:buffering
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`:buffering`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie zum Beispiel {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn das abspielbare Element eine Mediendatei puffert.

Ein Element wird als puffern betrachtet, wenn dieses Element nicht weiter abspielen kann, weil es versucht, Mediendaten zu laden, aber noch nicht genügend Daten hat, um die Wiedergabe zu starten oder fortzusetzen.
Für weitere Informationen siehe den [Leitfaden zu Media-Pufferung, Suche und Zeitspannen](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

> [!NOTE]
> Ein Element wird weiterhin als {{cssxref(":playing")}} betrachtet, wenn es "puffert".
> Wenn `:buffering` auf ein Element zutrifft, wird auch `:playing` auf dieses Element zutreffen.

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
