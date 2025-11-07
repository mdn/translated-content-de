---
title: "ShadowRoot: getAnimations() Methode"
short-title: getAnimations()
slug: Web/API/ShadowRoot/getAnimations
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

Die **`getAnimations()`** Methode des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Interfaces
gibt ein Array aller aktuell wirksamen [`Animation`](/de/docs/Web/API/Animation) Objekte zurück, deren
Zielelemente Nachkommen des Shadow-Baums sind. Dieses Array umfasst [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), [CSS-Transitionen](/de/docs/Web/CSS/Guides/Transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von [`Animation`](/de/docs/Web/API/Animation) Objekten, wobei jedes eine
Animation darstellt, die derzeit mit Elementen assoziiert ist, die Nachkommen des
[`ShadowRoot`](/de/docs/Web/API/ShadowRoot) sind, auf dem sie aufgerufen wird.

## Beispiele

Der folgende Code-Schnipsel wird alle Animationen in einem Shadow-Baum verlangsamen, indem ihre
[`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate) halbiert wird.

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
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [CSS-Transitionen](/de/docs/Web/CSS/Guides/Transitions)
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) - Nur die Animationen eines einzelnen
  [`Elements`](/de/docs/Web/API/Element) und seiner Nachkommen abrufen.
- [`Animation`](/de/docs/Web/API/Animation)
