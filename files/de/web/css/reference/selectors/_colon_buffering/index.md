---
title: "`:buffering` CSS-Pseudoklasse"
short-title: :buffering
slug: Web/CSS/Reference/Selectors/:buffering
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Der **`:buffering`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Selektor repräsentiert ein Element, das abspielbar ist, wie zum Beispiel ein {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn das abspielbare Element eine Medienressource puffert.

Ein Element wird als puffert betrachtet, wenn es nicht weiter abspielen kann, weil es versucht, Mediendaten zu laden, aber noch nicht genügend Daten hat, um die Wiedergabe zu starten oder fortzusetzen. Für weitere Informationen siehe den [Leitfaden zu Medienpufferung, Suchvorgängen und Zeitbereichen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

> [!NOTE]
> Ein Element wird immer noch als {{cssxref(":playing")}} betrachtet, wenn es "puffert".
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
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
