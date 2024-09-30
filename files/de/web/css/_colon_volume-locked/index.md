---
title: ":volume-locked"
slug: Web/CSS/:volume-locked
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{CSSRef}}

Der **`:volume-locked`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) Selektor repräsentiert ein Element, das in der Lage ist, Ton abzuspielen, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, aber das Audiovolumen des Medienelements ist derzeit vom Benutzer "gesperrt".

Benutzeragenten können Medien [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) oder [`volume`](/de/docs/Web/API/HTMLMediaElement/volume) Werte gemäß den Benutzereinstellungen festlegen (z.B. das letzte eingestellte Volumen über Sitzungen hinweg merken, pro Seite oder auf andere Weise).
Ein Element, das `:volume-locked` ist, kann weder stummgeschaltet, entstummt noch kann sein Volumen über JavaScript geändert werden. Der gesperrte Status ist eine Voreinstellung des Betriebssystems oder des Benutzeragenten.

## Syntax

```css
:volume-locked {
  /* ... */
}
```

## Beispiele

### CSS

```css
:volume-locked {
  border: 5px solid green;
}

video:volume-locked {
  border: 5px solid aqua;
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
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [`volume`](/de/docs/Web/API/HTMLMediaElement/volume) Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Objekten
