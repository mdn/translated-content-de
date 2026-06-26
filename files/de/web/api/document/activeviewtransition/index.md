---
title: "Dokument: activeViewTransition Eigenschaft"
short-title: activeViewTransition
slug: Web/API/Document/activeViewTransition
l10n:
  sourceCommit: 3114d1b72a4d46d314caa7f73f775a1f6f7407dc
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`activeViewTransition`** der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt eine [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz zurück, die die derzeit aktive [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) auf dem Dokument darstellt.

Die aktuelle [`ViewTransition`](/de/docs/Web/API/ViewTransition) kann auf andere Weise abgerufen werden:

- Der Rückgabewert von [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) im Falle von Ansichtsübergängen im selben Dokument.
- Die `viewTransition`-Eigenschaft der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) und [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisobjekte im Falle von dokumentübergreifenden Ansichtsübergängen.

Jedoch bietet die Eigenschaft `activeViewTransition` eine konsistente Möglichkeit, um auf den aktiven Ansichtsübergang in jedem Kontext zuzugreifen, ohne sich darum kümmern zu müssen, eine Referenz dafür später zu speichern.

## Wert

Eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) oder `null`, wenn kein aktiver Ansichtsübergang vorhanden ist.

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
- [`Element.activeViewTransition`](/de/docs/Web/API/Element/activeViewTransition)
- [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis
- [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
