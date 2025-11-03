---
title: :muted
slug: Web/CSS/Reference/Selectors/:muted
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der **`:muted`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, das fähig ist, Ton zu erzeugen, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, aber stummgeschaltet (erzwungen stumm) ist.

`Muted` unterscheidet sich von {{cssxref(":volume-locked")}}, da der Seitenautor die Kontrolle darüber hat, ob ein Medienelement stummgeschaltet oder nicht stummgeschaltet werden kann.
Benutzeragenten können den Medienwert `muted` entsprechend den Benutzervorlieben setzen (z.B. Erinnern des zuletzt gesetzten Wertes über Sitzungen hinweg, auf einer pro-Website-Basis oder anders). 
Ein Element, das `:volume-locked` ist, kann aufgrund einer Betriebssystem- oder Benutzeragentenpräferenz nicht stummgeschaltet, un-stummgeschaltet oder seine Lautstärke über JavaScript geändert werden.

## Syntax

```css
:muted {
  /* ... */
}
```

## Beispiele

### CSS

```css
:muted {
  outline: 5px solid red;
}

video:muted {
  outline: 5px solid blue;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":buffering")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [`muted`](/de/docs/Web/API/HTMLMediaElement/muted)-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten
