---
title: "PageSwapEvent: viewTransition Eigenschaft"
short-title: viewTransition
slug: Web/API/PageSwapEvent/viewTransition
l10n:
  sourceCommit: 011212609ed5fa7cf7e7994fc974d1bbab90c68e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`viewTransition`**-Eigenschaft des [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)-Interfaces enthält ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das den aktiven Ansichtstransition für die Navigation über Dokumente hinweg darstellt.

> [!NOTE]
> Die aktive Ansichtstransition kann auch über die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)-Eigenschaft abgerufen werden.

## Wert

Ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt oder `null`, wenn keine Ansichtstransition aktiv ist, wenn das Ereignis ausgelöst wird.

## Beispiele

Siehe die Hauptseite [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)
