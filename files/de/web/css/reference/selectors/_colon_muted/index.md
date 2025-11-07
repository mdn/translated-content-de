---
title: :muted
slug: Web/CSS/Reference/Selectors/:muted
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`:muted`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, das in der Lage ist, Ton wiederzugeben, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, aber stummgeschaltet ist (erzwungen leise).

`Muted` unterscheidet sich von {{cssxref(":volume-locked")}}, da der Seitenautor die Kontrolle darüber hat, ob ein Medienelement stummgeschaltet oder aktiviert werden kann.
Benutzeragenten können den Medienwert `muted` entsprechend den Benutzervorlieben setzen (z.B. das letzte festgelegte Wert über Sitzungen hinweg zu speichern, auf einer per-Site-Basis oder anderweitig).
Ein Element, das `:volume-locked` ist, kann aufgrund von Betriebs- oder Benutzeragentenvoreinstellungen nicht stummgeschaltet, aktiviert oder seine Lautstärke per JavaScript verändert werden.

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
- [`muted`]-Eigenschaft von [`HTMLMediaElement`]-Objekten (/de/docs/Web/API/HTMLMediaElement/muted)
