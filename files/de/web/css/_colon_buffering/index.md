---
title: ":buffering"
slug: Web/CSS/:buffering
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Der **`:buffering`** [CSS](/de/docs/Web/CSS)-[Pseudo-Klassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie z. B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn das abspielbare Element einen Medieninhalt puffert.

Ein Element wird als puffernd betrachtet, wenn es nicht weiter abgespielt werden kann, da es versucht, Mediendaten zu laden, aber noch nicht genügend Daten hat, um mit der Wiedergabe zu beginnen oder diese fortzusetzen. Für weitere Informationen lesen Sie den [Media buffering, seeking, and time ranges](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable)-Leitfaden.

> [!NOTE]
> Ein Element wird weiterhin als {{cssxref(":playing")}} betrachtet, wenn es „puffert“.
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
