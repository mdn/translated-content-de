---
title: "ViewTransition: skipTransition() Methode"
short-title: skipTransition()
slug: Web/API/ViewTransition/skipTransition
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("View Transitions API")}}

Die **`skipTransition()`** Methode des [`ViewTransition`](/de/docs/Web/API/ViewTransition) Schnittstelle überspringt den Animationsanteil des View-Übergangs, lässt jedoch die zugehörige Ansicht-Update ausführen.

## Syntax

```js-nolint
skipTransition()
```

### Parameter

Keine.

### Rückgabewert

`undefined`.

## Beispiele

### Überspringen eines SPA-View-Übergangs

```js
// start new view transition
const transition = document.startViewTransition(() => displayNewImage());

// skip the animation and just update the DOM
transition.skipTransition();
```

### Überspringen eines MPA-View-Übergangs

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

- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
