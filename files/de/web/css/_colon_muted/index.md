---
title: ":muted"
slug: Web/CSS/:muted
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{CSSRef}}

Der **`:muted`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das in der Lage ist, Töne zu erzeugen, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, jedoch stummgeschaltet ist (erzwungene Stille).

`Muted` unterscheidet sich von {{cssxref(":volume-locked")}}, da der Seitenautor die Kontrolle darüber hat, ob ein Medienelement stummgeschaltet oder wieder eingeschaltet werden kann.
Benutzeragenten können den `muted`-Wert des Mediums gemäß den Nutzungsvorlieben festlegen (z.B. indem sie den zuletzt festgelegten Wert über Sitzungen hinweg, pro Website oder anderweitig merken).
Ein Element, das `:volume-locked` ist, kann aufgrund einer Betriebssystem- oder Benutzeragentenpräferenz nicht stummgeschaltet, un-stummgeschaltet oder dessen Lautstärke über JavaScript geändert werden.

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
