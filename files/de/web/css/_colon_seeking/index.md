---
title: ":seeking"
slug: Web/CSS/:seeking
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Der **`:seeking`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein abspielbares Element, wie {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn das abspielbare Element eine Wiedergabeposition in der Medienressource sucht.
Eine Ressource wird als "seeking" betrachtet, wenn der Benutzer die Wiedergabe einer bestimmten Position in der Medienressource angefordert hat, das Medienelement diese Position jedoch noch nicht erreicht hat.

"Seeking" unterscheidet sich von {{cssxref(":buffering")}} insofern, als das Medienelement derzeit keine Daten lädt, sondern stattdessen zu einer neuen Position in der Medienressource springt.
Weitere Informationen finden Sie im [Leitfaden zu Media-Buffering, Seeking, und Zeitbereichen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

## Syntax

```css
:seeking {
  /* ... */
}
```

## Beispiele

### CSS

```css
:seeking {
  outline: 5px solid red;
}

video:seeking {
  outline: 5px solid blue;
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
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
