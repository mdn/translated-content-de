---
title: :volume-locked
slug: Web/CSS/:volume-locked
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Der **`:volume-locked`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das in der Lage ist, Ton wiederzugeben, wie z. B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, bei dem die Lautstärke des Media-Elements derzeit vom Benutzer "gesperrt" ist.

Benutzeragenten können Medienwerte [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) oder [`volume`](/de/docs/Web/API/HTMLMediaElement/volume) in Übereinstimmung mit den Benutzerpräferenzen setzen (z. B. durch das Speichern des zuletzt festgelegten Werts über Sitzungen hinweg, pro Website oder auf andere Weise).
Ein Element, das `:volume-locked` ist, kann weder stummgeschaltet noch nicht stummgeschaltet werden, noch kann seine Lautstärke über JavaScript geändert werden. Der gesperrte Status ist eine Betriebssystem- oder Benutzeragenteneinstellung.

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
