---
title: ":muted"
slug: Web/CSS/:muted
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Der **`:muted`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das in der Lage ist, Ton wiederzugeben, wie z. B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, jedoch stummgeschaltet (erzwungene Stille) ist.

`Muted` unterscheidet sich von {{cssxref(":volume-locked")}}, da der Seitenautor die Kontrolle darüber hat, ob ein Medien-Element stummgeschaltet oder wieder aktiviert werden kann. Benutzeragenten können den `muted`-Wert eines Mediums gemäß Benutzervorlieben setzen (z. B. durch Speichern des zuletzt eingestellten Wertes über Sitzungen hinweg, pro Webseite oder anderweitig). Ein Element, das `:volume-locked` ist, kann weder stummgeschaltet, wieder aktiviert noch in seiner Lautstärke über JavaScript verändert werden, da dies durch eine Betriebssystem- oder Benutzeragenten-Präferenz verhindert wird.

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
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [`muted`](/de/docs/Web/API/HTMLMediaElement/muted)-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten
