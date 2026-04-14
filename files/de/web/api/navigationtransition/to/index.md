---
title: "NavigationTransition: to-Eigenschaft"
short-title: to
slug: Web/API/NavigationTransition/to
l10n:
  sourceCommit: ef78a9a3336c884fb3587e4ff833e64704296f01
---

{{APIRef("Navigation API")}}{{seecompattable}}

Die schreibgeschützte **`to`**-Eigenschaft des [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Interfaces gibt das [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) zurück, zu dem die Transition navigiert.

Dies spiegelt die [`NavigateEvent.destination`](/de/docs/Web/API/NavigateEvent/destination)-Eigenschaft wider, steht jedoch im Gegensatz dazu außerhalb des [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Event-Handlers zur Verfügung. Sie ist besonders nützlich, wenn Funktionen aufgerufen werden, bevor sich die URL ändert (z. B. während des Precommit oder bei Fehlern).

## Wert

Ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt.

## Beispiele

### Umgang mit einem Navigationsfehler

```js
navigation.onnavigateerror = (e) => {
  if (navigation.transition?.to?.url === loginPageURL) {
    /* do something when failing to go to login page */
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes Client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
