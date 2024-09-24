---
title: ":muted"
slug: Web/CSS/:muted
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{CSSRef}}

Der **`:muted`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) Selektor repräsentiert ein Element, das in der Lage ist, Ton wiederzugeben, wie z. B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, aber stummgeschaltet (erzwungene Stille) ist.

Stummgeschaltet unterscheidet sich von {{cssxref(":volume-locked")}} dadurch, dass der Seitenautor die Kontrolle darüber hat, ob ein Medienelement stummgeschaltet oder wieder aktiviert werden kann.
Benutzeragenten können den `muted` Wert gemäß den Nutzungsvorlieben einstellen (z. B. indem sie den zuletzt eingestellten Wert über Sitzungen hinweg, pro Seite oder anderweitig speichern).
Ein Element, das `:volume-locked` ist, kann aufgrund einer Betriebssystem- oder Benutzeragentenpräferenz nicht stummgeschaltet, reaktiviert oder seine Lautstärke über JavaScript geändert werden.

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
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) Eigenschaft von {{domxref("HTMLMediaElement")}} Objekten
