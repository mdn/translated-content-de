---
title: "Dokument: activeViewTransition-Eigenschaft"
short-title: activeViewTransition
slug: Web/API/Document/activeViewTransition
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("DOM")}}

Die schreibgeschützte **`activeViewTransition`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt eine [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz zurück, die die aktuell aktive [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) des Dokuments darstellt.

Der aktuelle [`ViewTransition`](/de/docs/Web/API/ViewTransition) kann auf andere Weise abgerufen werden:

- Der Rückgabewert von [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) im Fall von gleichseitigen Ansichtsübergängen.
- Die `viewTransition`-Eigenschaft der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)- und [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisobjekte im Fall von übergreifenden Dokumentenübergängen.

Jedoch bietet die `activeViewTransition`-Eigenschaft eine konsistente Möglichkeit, auf den aktiven Ansichtsübergang in jedem Kontext zuzugreifen, ohne sich Sorgen machen zu müssen, diesen für einen späteren einfachen Zugriff zu speichern.

## Wert

Ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) oder `null`, wenn kein aktiver Ansichtsübergang vorhanden ist.

## Beispiele

```js
// Start a view transition
document.startViewTransition(() => {
  // Update the UI to reflect the new state
  updateUI();
});

// Check if a view transition is currently active
if (document.activeViewTransition) {
  console.log("A view transition is currently active");
}

// Respond to view transition finishing
document.activeViewTransition.finished.then(() => {
  console.log("View transition finished");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
