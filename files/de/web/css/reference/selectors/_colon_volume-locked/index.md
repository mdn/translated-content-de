---
title: :volume-locked
slug: Web/CSS/Reference/Selectors/:volume-locked
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der **`:volume-locked`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Selektor repräsentiert ein Element, das in der Lage ist, Ton wiederzugeben, wie z. B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, aber das Audio-Volumen des Medienelements ist derzeit vom Benutzer "gesperrt".

Benutzeragenten können Medienwerte [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) oder [`volume`](/de/docs/Web/API/HTMLMediaElement/volume) gemäß den Benutzerpräferenzen festlegen (z. B. das letzte eingestellte Wert über Sitzungen hinweg, standortbezogen oder auf andere Weise merken).
Ein Element, das `:volume-locked` ist, kann nicht über JavaScript stummgeschaltet, die Stummschaltung aufgehoben oder die Lautstärke geändert werden. Der gesperrte Status ist eine Präferenz des Betriebssystems oder des Benutzeragenten.

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
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [`volume`](/de/docs/Web/API/HTMLMediaElement/volume) Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Objekten
