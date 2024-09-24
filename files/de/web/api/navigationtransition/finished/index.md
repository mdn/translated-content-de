---
title: "NavigationTransition: Eigenschaft finished"
short-title: finished
slug: Web/API/NavigationTransition/finished
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`finished`** schreibgeschützte Eigenschaft der {{domxref("NavigationTransition")}} Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das gleichzeitig erfüllt wird, wenn das {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}}-Ereignis ausgelöst wird, oder abgelehnt wird, wenn das {{domxref("Navigation/navigateerror_event", "navigateerror")}}-Ereignis ausgelöst wird.

## Wert

Ein {{jsxref("Promise")}}, das sich zu `undefined` auflöst.

## Beispiele

```js
async function cleanupNavigation() {
  await navigation.transition.finished;
  // Navigation wurde erfolgreich abgeschlossen
  // Bereinigung jeglicher laufender Überwachung
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärungsdokument](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
