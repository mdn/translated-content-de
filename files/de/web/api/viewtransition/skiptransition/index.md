---
title: "ViewTransition: skipTransition() Methode"
short-title: skipTransition()
slug: Web/API/ViewTransition/skipTransition
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("View Transitions API")}}

Die **`skipTransition()`** Methode der [`ViewTransition`](/de/docs/Web/API/ViewTransition) Schnittstelle überspringt den Animationsanteil der Ansichtsübergänge, führt aber das zugehörige Ansichtsupdate dennoch aus.

## Syntax

```js-nolint
skipTransition()
```

### Parameter

Keine.

### Rückgabewert

`undefined`.

## Beispiele

### Überspringen eines SPA-Ansichtsübergangs

```js
// start new view transition
const transition = document.startViewTransition(() => displayNewImage());

// skip the animation and just update the DOM
transition.skipTransition();
```

### Überspringen eines MPA-Ansichtsübergangs

```js
// Fired on the current (outgoing) page
document.addEventListener("pageswap", (event) => {
  event.viewTransition?.skipTransition();
});

// Fired on the destination (inbound) page
document.addEventListener("pagereveal", (event) => {
  event.viewTransition?.skipTransition();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
