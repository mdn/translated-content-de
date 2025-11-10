---
title: :volume-locked
slug: Web/CSS/Reference/Selectors/:volume-locked
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`:volume-locked`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, das in der Lage ist, Ton wiederzugeben, wie z. B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, bei dem jedoch die Lautstärke des Medienelements derzeit vom Benutzer "gesperrt" ist.

Benutzeragenten können Medienwerte für [`muted`](/de/docs/Web/API/HTMLMediaElement/muted) oder [`volume`](/de/docs/Web/API/HTMLMediaElement/volume) gemäß den Benutzervorlieben festlegen (z. B. das letzte gesetzte Wert über Sitzungen hinweg speichern, pro Webseite oder auf andere Weise).
Ein `:volume-locked` Element kann nicht über JavaScript stummgeschaltet, die Stummschaltung aufgehoben oder die Lautstärke geändert werden. Der gesperrte Status ist eine Betriebssystem- oder Benutzeragentenpräferenz.

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
- [`volume`](/de/docs/Web/API/HTMLMediaElement/volume) Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Objekten
