---
title: "ShadowRoot: Methode getAnimations()"
short-title: getAnimations()
slug: Web/API/ShadowRoot/getAnimations
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Die **`getAnimations()`** Methode der {{domxref("ShadowRoot")}}-Schnittstelle gibt ein Array aller derzeit wirksamen {{domxref("Animation")}}-Objekte zurück, deren Zielelemente Nachkommen des Schattenbaums sind. Dieses Array umfasst [CSS Animationen](/de/docs/Web/CSS/CSS_animations), [CSS Transitionen](/de/docs/Web/CSS/CSS_transitions) und [Web Animationen](/de/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von {{domxref("Animation")}}-Objekten, die jeweils eine Animation darstellen, die derzeit mit Elementen verknüpft ist, die Nachkommen der {{domxref("ShadowRoot")}} sind, auf der sie aufgerufen wurde.

## Beispiele

Der folgende Codeausschnitt verlangsamt alle Animationen in einem Schattenbaum, indem er ihre {{domxref("Animation.playbackRate")}} halbiert.

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
- [CSS Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS Transitionen](/de/docs/Web/CSS/CSS_transitions)
- {{domxref("Element.getAnimations()")}} - Abrufen nur der Animationen auf einem einzelnen {{domxref("Element")}} und seinen Nachkommen.
- {{domxref("Animation")}}
