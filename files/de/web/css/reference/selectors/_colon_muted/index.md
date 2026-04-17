---
title: "`:muted` CSS-Pseudoklasse"
short-title: :muted
slug: Web/CSS/Reference/Selectors/:muted
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Der **`:muted`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, das in der Lage ist, Ton zu erzeugen, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, jedoch stummgeschaltet (erzwungen stumm) ist.

`Muted` unterscheidet sich von {{cssxref(":volume-locked")}} dadurch, dass der Seitenautor die Kontrolle darüber hat, ob ein Medienelement stummgeschaltet oder die Stummschaltung aufgehoben werden kann.
Benutzeragenten können den `muted`-Wert von Medien entsprechend der Nutzerpräferenzen festlegen (z.B. indem der zuletzt eingestellte Wert über Sitzungen hinweg, für jede Website einzeln oder auf andere Weise gemerkt wird).
Ein Element, das `:volume-locked` ist, kann aufgrund einer Präferenz des Betriebssystems oder des Benutzeragenten nicht stummgeschaltet, die Stummschaltung aufgehoben oder seine Lautstärke über JavaScript geändert werden.

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
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
- [`muted`](/de/docs/Web/API/HTMLMediaElement/muted)-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten
