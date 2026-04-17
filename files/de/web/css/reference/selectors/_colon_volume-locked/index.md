---
title: "`:volume-locked` CSS-Pseudoklasse"
short-title: :volume-locked
slug: Web/CSS/Reference/Selectors/:volume-locked
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Der **`:volume-locked`** [CSS](/de/docs/Web/CSS) [Pseudoklassen]-Selektor repräsentiert ein Element, das in der Lage ist, Töne zu erzeugen, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, aber das Audio-Volumen des Medien-Elements ist derzeit vom Benutzer "gesperrt".

Benutzeragenten können Medienwerte für [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) oder [`volume`](/de/docs/Web/API/HTMLMediaElement/volume) gemäß den Benutzerpräferenzen festlegen (z.B. indem sie den zuletzt eingestellten Wert über Sitzungen hinweg, auf Standortbasis oder anderweitig speichern). Ein Element, das `:volume-locked` ist, kann nicht stummgeschaltet, entstummt oder sein Volumen per JavaScript geändert werden. Der gesperrte Status ist eine Betriebssystem- oder Benutzeragenten-Präferenz.

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
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
- [`volume`](/de/docs/Web/API/HTMLMediaElement/volume)-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten
