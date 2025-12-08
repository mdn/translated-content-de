---
title: "NavigationTransition: finished-Eigenschaft"
short-title: finished
slug: Web/API/NavigationTransition/finished
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`finished`** schreibgeschützte Eigenschaft der [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das zu dem Zeitpunkt erfüllt wird, an dem das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird, oder fehlschlägt, wenn das [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis ausgelöst wird.

## Wert

Ein {{jsxref("Promise")}}, das auf `undefined` aufgelöst wird.

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

- [Modernes clientseitiges Routing: die Navigation-API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erklärung der Navigation-API](https://github.com/WICG/navigation-api/blob/main/README.md)
