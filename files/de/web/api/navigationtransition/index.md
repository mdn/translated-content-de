---
title: NavigationTransition
slug: Web/API/NavigationTransition
l10n:
  sourceCommit: bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationTransition`** Interface der {{domxref("Navigation API", "Navigation-API", "", "nocode")}} repräsentiert eine laufende Navigation, das heißt, eine Navigation, die noch nicht das Stadium {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} oder {{domxref("Navigation/navigateerror_event", "navigateerror")}} erreicht hat.

Es wird über die Eigenschaft {{domxref("Navigation.transition")}} aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("NavigationTransition.finished", "finished")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das gleichzeitig erfüllt wird, wenn das {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}}-Ereignis ausgelöst wird, oder abgelehnt wird, wenn das {{domxref("Navigation/navigateerror_event", "navigateerror")}}-Ereignis ausgelöst wird.
- {{domxref("NavigationTransition.from", "from")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das {{domxref("NavigationHistoryEntry")}} zurück, von dem der Übergang ausgeht.
- {{domxref("NavigationTransition.navigationType", "navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der laufenden Navigation zurück.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routings: die Navigation-API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Demo der Navigation-API](https://gigantic-honored-octagon.glitch.me/)
