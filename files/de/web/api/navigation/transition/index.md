---
title: "Navigation: transition Eigenschaft"
short-title: transition
slug: Web/API/Navigation/transition
l10n:
  sourceCommit: 4a873b9316fad777692bc15abaacac2f7648b9e8
---

{{APIRef("Navigation API")}}

Die schreibgeschützte Eigenschaft **`transition`** der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle gibt ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekt zurück, das den Status einer laufenden Navigation repräsentiert, das zur Verfolgung verwendet werden kann.

`Navigation.transition` wird nur während der Zeit gefüllt, in der der [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept)-Handler nicht aufgelöst ist (d.h. während einer [Navigationsabfangung](/de/docs/Web/API/Navigation/navigate_event#handling_a_navigation_using_intercept)), und ansonsten ist es `null`.

## Wert

Ein [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Objekt oder `null`, wenn derzeit keine Navigation im Gange ist.

## Beispiele

```js
async function handleTransition() {
  if (navigation.transition) {
    showLoadingSpinner();
    await navigation.transition.finished;
    hideLoadingSpinner();
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
