---
title: NavigationTransition
slug: Web/API/NavigationTransition
l10n:
  sourceCommit: bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationTransition`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert eine laufende Navigation, das heißt, eine Navigation, die noch nicht das Stadium [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) erreicht hat.

Es wird über die Eigenschaft [`Navigation.transition`](/de/docs/Web/API/Navigation/transition) abgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`finished`](/de/docs/Web/API/NavigationTransition/finished) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird, oder abgelehnt wird, wenn das [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis ausgelöst wird.
- [`from`](/de/docs/Web/API/NavigationTransition/from) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, von dem der Übergang ausgeht.
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

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)
