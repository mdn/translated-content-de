---
title: :muted
slug: Web/CSS/:muted
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`:muted`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das in der Lage ist, Ton zu erzeugen, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, aber stummgeschaltet (stumm erzwungen) ist.

`Muted` unterscheidet sich von {{cssxref(":volume-locked")}} dadurch, dass der Seitenautor die Kontrolle darüber hat, ob ein Medienelement stummgeschaltet oder wieder aktiviert werden kann.
Benutzeragenten können den Wert `muted` von Medien gemäß den Benutzerpräferenzen setzen (z.B. den zuletzt gesetzten Wert über Sitzungen hinweg, pro Seite oder auf andere Weise merken).
Ein Element, das `:volume-locked` ist, kann aufgrund einer Betriebssystem- oder Benutzeragentenpräferenz nicht stummgeschaltet, aktiviert oder in seiner Lautstärke über JavaScript verändert werden.

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
- [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten
