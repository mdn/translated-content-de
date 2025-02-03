---
title: ":seeking"
slug: Web/CSS/:seeking
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{CSSRef}}

Der **`:seeking`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-](/de/docs/Web/CSS/Pseudo-classes) Selektor repräsentiert ein Element, das abspielbar ist, wie zum Beispiel {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn das abspielbare Element eine Abspielposition in der Medienressource sucht.
Eine Ressource gilt als "suche", wenn der Nutzer die Wiedergabe einer bestimmten Position in der Medienressource angefordert hat, das Medienelement diese Position jedoch noch nicht erreicht hat.

"Suchen" unterscheidet sich von {{cssxref(":buffering")}}, insofern das Medienelement momentan keine Daten lädt, sondern zu einer neuen Position in der Medienressource springt.
Für weitere Informationen siehe den [Leitfaden zu Medienpufferung, Suchen und Zeitbereichen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

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
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
