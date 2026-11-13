---
title: NavigationTransition
slug: Web/API/NavigationTransition
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{APIRef("Navigation API")}}

Die **`NavigationTransition`**-Schnittstelle der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert eine laufende Navigation – eine Navigation, die das Stadium [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) noch nicht erreicht hat.

Der Zugriff erfolgt über die Eigenschaft [`Navigation.transition`](/de/docs/Web/API/Navigation/transition).
Beachten Sie, dass diese Eigenschaft nur einen Wert enthält, solange der [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept)-Handler noch nicht abgeschlossen ist (also während einer [Navigationsabfangung](/de/docs/Web/API/Navigation/navigate_event#handling_a_navigation_using_intercept)). Andernfalls ist sie `null`.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`committed`](/de/docs/Web/API/NavigationTransition/committed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) aktualisiert und die neue URL im Browser angezeigt wird. Damit gilt die Navigation als übernommen.
- [`finished`](/de/docs/Web/API/NavigationTransition/finished) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das gleichzeitig mit dem Auslösen des Ereignisses [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) erfüllt oder gleichzeitig mit dem Auslösen des Ereignisses [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) abgelehnt wird.
- [`from`](/de/docs/Web/API/NavigationTransition/from) {{ReadOnlyInline}}
  - : Gibt den [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, von dem die Navigation ausgeht.
- [`navigationType`](/de/docs/Web/API/NavigationTransition/navigationType) {{ReadOnlyInline}}
  - : Gibt den Typ der laufenden Navigation zurück.
- [`to`](/de/docs/Web/API/NavigationTransition/to) {{ReadOnlyInline}}
  - : Gibt das [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) zurück, zu dem die Navigation führt.

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
- [Erläuterung zur Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Live-Demo der Navigation API](https://mdn.github.io/dom-examples/navigation-api/) ([Quellcode der Demo ansehen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
