---
title: "Element: activeViewTransition-Eigenschaft"
short-title: activeViewTransition
slug: Web/API/Element/activeViewTransition
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("View Transition API")}}{{SeeCompatTable}}

Die schreibgeschützte **`activeViewTransition`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt eine [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz zurück, die die aktuell aktive [View-Transition](/de/docs/Web/API/View_Transition_API) auf einem Element darstellt. Sie bietet eine konsistente Methode, um auf eine aktive [element-spezifische View-Transition](/de/docs/Web/API/View_Transition_API/Using_element-scoped) zuzugreifen, ohne dass die Notwendigkeit besteht, sich eine Referenz für später zu speichern.

Eine element-spezifische [`ViewTransition`](/de/docs/Web/API/ViewTransition) kann auch über den Rückgabewert von [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) abgerufen werden.

## Wert

Ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) oder `null`, wenn das Element keine aktive View-Transition hat.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt, wie `activeViewTransition` verwendet wird, um eine Referenz zu einer laufenden View-Transition abzurufen.

```js
const myElement = document.querySelector(".my-element");

// ...

function handleVT() {
  const vt = myElement.startViewTransition(() => {
    updateDOMSomehow();
  });
}

// Returns a reference to vt if the transition is still ongoing
myElement.activeViewTransition;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition)
- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- [Verwendung von element-spezifischen View-Transitions](/de/docs/Web/API/View_Transition_API/Using_element-scoped)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
