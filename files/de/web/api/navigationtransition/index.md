---
title: NavigationTransition
slug: Web/API/NavigationTransition
l10n:
  sourceCommit: 4a873b9316fad777692bc15abaacac2f7648b9e8
---

{{APIRef("Navigation API")}}

Das **`NavigationTransition`** Interface der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert eine laufende Navigation — eine Navigation, die noch nicht das Stadium [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) erreicht hat.

Es wird über die [`Navigation.transition`](/de/docs/Web/API/Navigation/transition) Eigenschaft zugegriffen. Beachten Sie, dass diese Eigenschaft nur während der [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) Handler unerfüllt ist (d.h. während einer [Navigationsabfang](/de/docs/Web/API/Navigation/navigate_event#handling_a_navigation_using_intercept)) und ansonsten `null` ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`finished`](/de/docs/Web/API/NavigationTransition/finished) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das zur gleichen Zeit erfüllt wird, zu der das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis ausgelöst wird, oder abgelehnt wird, wenn das [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) Ereignis ausgelöst wird.
- [`from`](/de/docs/Web/API/NavigationTransition/from) {{ReadOnlyInline}}
  - : Gibt das [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, von dem die Transition kommt.
- [`navigationType`](/de/docs/Web/API/NavigationTransition/navigationType) {{ReadOnlyInline}}
  - : Gibt den Typ der laufenden Navigation zurück.
- [`to`](/de/docs/Web/API/NavigationTransition/to) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) zurück, zu dem die Transition navigiert.

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

- [Moderne client-seitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
