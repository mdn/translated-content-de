---
title: "NavigationTransition: finished-Eigenschaft"
short-title: finished
slug: Web/API/NavigationTransition/finished
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`finished`** der [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das zur gleichen Zeit erfüllt wird, zu der das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird, oder abgelehnt wird, wenn das [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis ausgelöst wird.

## Wert

Ein {{jsxref("Promise")}}, das zu `undefined` aufgelöst wird.

## Beispiele

```js
async function cleanupNavigation() {
  await navigation.transition.finished;
  // Navigation has completed successfully
  // Cleanup any ongoing monitoring
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
