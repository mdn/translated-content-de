---
title: "ViewTransition: skipTransition()-Methode"
short-title: skipTransition()
slug: Web/API/ViewTransition/skipTransition
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("View Transitions API")}}

Die **`skipTransition()`**-Methode der {{domxref("ViewTransition")}}-Schnittstelle überspringt den Animationspart der Ansichtstransition, überspringt jedoch nicht die Ausführung des zugehörigen Ansichtsupdates.

## Syntax

```js-nolint
skipTransition()
```

### Parameter

Keine.

### Rückgabewert

`undefined`.

## Beispiele

### Überspringen einer SPA-Ansichtstransition

```js
// neue Ansichtstransition starten
const transition = document.startViewTransition(() => displayNewImage());

// die Animation überspringen und nur das DOM aktualisieren
transition.skipTransition();
```

### Überspringen einer MPA-Ansichtstransition

```js
// Ausgelöst auf der aktuellen (ausgehenden) Seite
document.addEventListener("pageswap", (event) => {
  event.viewTransition?.skipTransition();
});

// Ausgelöst auf der Zielseite (eingehend)
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
