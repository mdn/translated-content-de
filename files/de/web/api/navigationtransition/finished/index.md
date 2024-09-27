---
title: "NavigationTransition: finished-Eigenschaft"
short-title: finished
slug: Web/API/NavigationTransition/finished
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`finished`** des [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das zur gleichen Zeit erfüllt wird, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird, oder es wird zur gleichen Zeit abgelehnt, wenn das [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis ausgelöst wird.

## Wert

Ein {{jsxref("Promise")}}, das sich zu `undefined` auflöst.

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
