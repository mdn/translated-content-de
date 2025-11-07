---
title: :seeking
slug: Web/CSS/Reference/Selectors/:seeking
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`:seeking`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn das abspielbare Element eine Wiedergabeposition in der Medienressource sucht.
Eine Ressource wird als suchend betrachtet, wenn der Benutzer die Wiedergabe einer bestimmten Position in der Medienressource angefordert hat, aber das Medienelement diese Position noch nicht erreicht hat.

Das Suchen ist anders als {{cssxref(":buffering")}}, da das Medienelement derzeit keine Daten lädt, sondern stattdessen zu einer neuen Position in der Medienressource springt. Weitere Informationen finden Sie im [Leitfaden zu Medienpufferung, Suchen und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

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
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
