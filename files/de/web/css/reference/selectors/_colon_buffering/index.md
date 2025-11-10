---
title: :buffering
slug: Web/CSS/Reference/Selectors/:buffering
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`:buffering`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein abspielbares Element, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn das abspielbare Element eine Mediendatei puffert.

Ein Element wird als puffernd betrachtet, wenn es nicht weiter abspielen kann, weil es versucht, Mediendaten zu laden, aber noch nicht genügend Daten hat, um die Wiedergabe zu beginnen oder fortzusetzen. Weitere Informationen finden Sie im [Leitfaden zu Medienpufferung, -suche und Zeitbereichen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

> [!NOTE]
> Ein Element wird weiterhin als {{cssxref(":playing")}} betrachtet, wenn es "puffert".
> Wenn `:buffering` auf ein Element zutrifft, wird `:playing` auch auf dieses Element zutreffen.

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
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
