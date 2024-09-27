---
title: "ShadowRoot: getAnimations() Methode"
short-title: getAnimations()
slug: Web/API/ShadowRoot/getAnimations
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Die **`getAnimations()`** Methode des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Interfaces gibt ein Array aller aktuell wirksamen [`Animation`](/de/docs/Web/API/Animation) Objekte zurück, deren Ziel-Elemente Nachkommen des Shadow-Dom sind. Dieses Array umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von [`Animation`](/de/docs/Web/API/Animation) Objekten, die jeweils eine derzeit mit Elementen assoziierte Animation darstellen, die Nachkommen der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) sind, auf der sie aufgerufen wird.

## Beispiele

Der folgende Code-Schnipsel wird alle Animationen in einem Shadow-Dom verlangsamen, indem ihre [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate) halbiert wird.

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
shadow.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) - Abrufen nur der Animationen eines einzelnen [`Element`](/de/docs/Web/API/Element) und seiner Nachkommen.
- [`Animation`](/de/docs/Web/API/Animation)
