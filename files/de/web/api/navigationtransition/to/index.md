---
title: "NavigationTransition: Eigenschaft to"
short-title: to
slug: Web/API/NavigationTransition/to
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{APIRef("Navigation API")}}

Die schreibgeschützte Eigenschaft **`to`** der Schnittstelle [`NavigationTransition`](/de/docs/Web/API/NavigationTransition) gibt das [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) zurück, zu dem navigiert wird.

Sie entspricht der Eigenschaft [`NavigateEvent.destination`](/de/docs/Web/API/NavigateEvent/destination), ist anders als diese jedoch auch außerhalb des Event-Handlers für [`navigate`](/de/docs/Web/API/Navigation/navigate_event) verfügbar. Das ist besonders nützlich, wenn Funktionen aufgerufen werden, bevor sich die URL ändert (z. B. während der Precommit-Phase oder bei einem Fehler).

## Wert

Ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt.

## Beispiele

### Behandeln eines Navigationsfehlers

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
