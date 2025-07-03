---
title: NavigationTransition
slug: Web/API/NavigationTransition
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationTransition`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert eine laufende Navigation, das heißt, eine Navigation, die noch nicht das Stadium [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) erreicht hat.

Es wird über die Eigenschaft [`Navigation.transition`](/de/docs/Web/API/Navigation/transition) aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`finished`](/de/docs/Web/API/NavigationTransition/finished) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu dem Zeitpunkt erfüllt wird, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird, oder abgelehnt wird, wenn das [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis ausgelöst wird.
- [`from`](/de/docs/Web/API/NavigationTransition/from) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, von dem die Transition kommt.
- [`navigationType`](/de/docs/Web/API/NavigationTransition/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der laufenden Navigation zurück.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
