---
title: "ViewTransition: ÜbergangRoot-Eigenschaft"
short-title: transitionRoot
slug: Web/API/ViewTransition/transitionRoot
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("View Transition API")}}{{SeeCompatTable}}

Die **`transitionRoot`** schreibgeschützte Eigenschaft der [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Schnittstelle ist eine Referenz auf das root [`Element`](/de/docs/Web/API/Element) des Bereichs der [View Transition](/de/docs/Web/API/View_Transition_API/Using).

## Wert

Ein [`Element`](/de/docs/Web/API/Element).

- Für dokumentenbasierte View Transitions ist `transitionRoot` eine Referenz auf die [`Document.documentElement`](/de/docs/Web/API/Document/documentElement)-Eigenschaft, die für standardmäßige Web-Dokumente eine Referenz auf das {{htmlelement("html")}}-Element ist.
- Für [element-basierte View Transitions](/de/docs/Web/API/View_Transition_API/Using_element-scoped) ist `transitionRoot` eine Referenz auf das `Element`, auf das [`startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) aufgerufen wurde, um die View Transition zu erstellen.

## Beispiele

### Grundlegende Verwendung

Dieser Ausschnitt zeigt, wie `transitionRoot` verwendet wird, um eine Referenz auf das Element abzurufen, auf dem die View Transition erstellt wurde.

```js
const myElement = document.querySelector(".my-element");

// ...

function handleVT() {
  const vt = myElement.startViewTransition(() => {
    updateDOMSomehow();
  });

  // ...

  // Returns reference to myElement
  vt.transitionRoot;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung element-basierter View Transitions](/de/docs/Web/API/View_Transition_API/Using_element-scoped)
