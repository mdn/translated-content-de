---
title: ":muted"
slug: Web/CSS/:muted
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{CSSRef}}

Der **`:muted`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) Selektor repräsentiert ein Element, das in der Lage ist, Ton zu erzeugen, wie {{htmlelement("audio")}} oder {{htmlelement("video")}}, aber stummgeschaltet ist (erzwungenes Schweigen).

`:muted` unterscheidet sich von {{cssxref(":volume-locked")}} darin, dass der Seitenautor die Kontrolle darüber hat, ob ein Medienelement stummgeschaltet oder die Stummschaltung aufgehoben werden kann.
Benutzeragenten können den `muted`-Wert eines Mediums gemäß den Benutzerpräferenzen festlegen (z. B. durch das Speichern des zuletzt festgelegten Werts über Sitzungen hinweg, pro Website oder anderweitig).
Ein Element, das `:volume-locked` ist, kann nicht stummgeschaltet, aufgehoben oder dessen Lautstärke über JavaScript geändert werden, aufgrund einer Betriebssystem- oder Benutzeragentenpräferenz.

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
- [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Objekten
