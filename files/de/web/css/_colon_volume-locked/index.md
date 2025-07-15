---
title: :volume-locked
slug: Web/CSS/:volume-locked
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`:volume-locked`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)-Selektor repräsentiert ein Element, das in der Lage ist, Geräusche zu erzeugen, wie zum Beispiel {{htmlelement("audio")}} oder {{htmlelement("video")}}, dessen Audio-Lautstärke jedoch derzeit vom Benutzer "gesperrt" ist.

Benutzeragenten können Medienwerte [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) oder [`volume`](/de/docs/Web/API/HTMLMediaElement/volume) gemäß den Vorlieben der Benutzer einstellen (z.B. durch das Speichern des zuletzt festgelegten Wertes über Sitzungen hinweg, auf einer Pro-Site-Basis oder anderweitig). Ein Element, das `:volume-locked` ist, kann nicht stummgeschaltet, die Stummschaltung aufgehoben oder die Lautstärke über JavaScript geändert werden. Der gesperrte Status ist eine Betriebssystem- oder Benutzeragentenpräferenz.

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
- [`volume`](/de/docs/Web/API/HTMLMediaElement/volume)-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten
