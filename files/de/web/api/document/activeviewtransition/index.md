---
title: "Dokument: activeViewTransition-Eigenschaft"
short-title: activeViewTransition
slug: Web/API/Document/activeViewTransition
l10n:
  sourceCommit: 011212609ed5fa7cf7e7994fc974d1bbab90c68e
---

{{APIRef("DOM")}}

Die schreibgeschützte **`activeViewTransition`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt eine [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz zurück, die die derzeit auf dem Dokument aktive [View-Übergang](/de/docs/Web/API/View_Transition_API) darstellt.

Der aktuelle [`ViewTransition`](/de/docs/Web/API/ViewTransition) kann auf andere Weise abgerufen werden:

- Der Rückgabewert von [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) im Falle von View-Übergängen innerhalb desselben Dokuments.
- Die `viewTransition`-Eigenschaft der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)- und [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisobjekte im Falle von View-Übergängen über Dokumentgrenzen hinweg.

Jedoch bietet die `activeViewTransition`-Eigenschaft eine konsistente Möglichkeit, auf den aktiven View-Übergang in jedem Kontext zuzugreifen, ohne sich später um das Speichern für einen einfachen Zugriff kümmern zu müssen.

## Wert

Eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) oder `null`, wenn kein aktiver View-Übergang vorhanden ist.

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
