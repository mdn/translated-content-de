---
title: :seeking
slug: Web/CSS/:seeking
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`:seeking`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn das abspielbare Element eine Wiedergabeposition in der Medienressource sucht.
Eine Ressource wird als suchend betrachtet, wenn der Benutzer die Wiedergabe einer bestimmten Position in der Medienressource angefordert hat, aber das Medienelement diese Position noch nicht erreicht hat.

Das Suchen unterscheidet sich von {{cssxref(":buffering")}}, da das Medienelement aktuell keine Daten lädt, sondern stattdessen zu einer neuen Position in der Medienressource springt.
Weitere Informationen finden Sie im [Leitfaden zu Media-Pufferung, Suchen und Zeitbereichen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

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
