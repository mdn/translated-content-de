---
title: "ViewTransition: skipTransition()-Methode"
short-title: skipTransition()
slug: Web/API/ViewTransition/skipTransition
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("View Transition API")}}

Die **`skipTransition()`**-Methode der
[`ViewTransition`](/de/docs/Web/API/ViewTransition)-Schnittstelle überspringt den Animationsanteil der Ansichtsübertragung, führt jedoch das zugehörige Ansichtsupdate weiterhin aus.

## Syntax

```js-nolint
skipTransition()
```

### Parameter

Keine.

### Rückgabewert

`undefined`.

## Beispiele

### Überspringen einer SPA-Ansichtsübertragung

```js
// start new view transition
const transition = document.startViewTransition(() => displayNewImage());

// skip the animation and just update the DOM
transition.skipTransition();
```

### Überspringen einer MPA-Ansichtsübertragung

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

- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
