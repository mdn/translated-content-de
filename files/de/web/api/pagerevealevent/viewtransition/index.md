---
title: "PageRevealEvent: viewTransition-Eigenschaft"
short-title: viewTransition
slug: Web/API/PageRevealEvent/viewTransition
l10n:
  sourceCommit: 011212609ed5fa7cf7e7994fc974d1bbab90c68e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`viewTransition`**-Eigenschaft des [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)-Interfaces enthält ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das die aktive View-Transition für die Dokumenten-übergreifende Navigation repräsentiert.

> [!NOTE]
> Die aktive View-Transition kann auch über die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)-Eigenschaft abgerufen werden.

## Wert

Ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt oder `null`, wenn keine View-Transition aktiv ist, wenn das Ereignis ausgelöst wird.

## Beispiele

Siehe die Hauptseite [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
