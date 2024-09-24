---
title: ":volume-locked"
slug: Web/CSS/:volume-locked
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{CSSRef}}

Der **`:volume-locked`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das in der Lage ist, Töne zu erzeugen, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, jedoch ist die Lautstärke des Media-Elements derzeit durch den Benutzer "gesperrt".

Benutzeragenten können die Medienwerte [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) oder [`volume`](/de/docs/Web/API/HTMLMediaElement/volume) entsprechend den Benutzerpräferenzen einstellen (z.B. indem der zuletzt eingestellte Wert über Sitzungen hinweg, pro Seite oder auf andere Weise gespeichert wird).
Ein Element, das `:volume-locked` ist, kann nicht stummgeschaltet, entstummt oder dessen Lautstärke per JavaScript geändert werden. Der gesperrte Status ist eine Präferenz des Betriebssystems oder des Benutzeragents.

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
- [`volume`](/de/docs/Web/API/HTMLMediaElement/volume) Eigenschaft von {{domxref("HTMLMediaElement")}} Objekten
