---
title: "NavigationTransition: to-Eigenschaft"
short-title: to
slug: Web/API/NavigationTransition/to
l10n:
  sourceCommit: 4a873b9316fad777692bc15abaacac2f7648b9e8
---

{{APIRef("Navigation API")}}{{seecompattable}}

Die **`to`** schreibgeschützte Eigenschaft der [`NavigationTransition`](/de/docs/Web/API/NavigationTransition)-Schnittstelle gibt das [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) zurück, zu dem die Transition navigiert.

Diese Eigenschaft spiegelt die [`NavigateEvent.destination`](/de/docs/Web/API/NavigateEvent/destination)-Eigenschaft wider, ist jedoch im Gegensatz zu dieser auch außerhalb des [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis-Handlers verfügbar. Sie ist besonders nützlich beim Aufrufen von Funktionen vor der Änderung der URL (z. B. während des „precommit“ oder bei einem Fehler).

## Wert

Ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt.

## Beispiele

### Umgang mit einem Navigationsfehler

```js
navigation.onnavigateerror = (e) => {
  if (navigation.transition?.to?.url === login_page_url) {
    /* do something when failing to go to login page */
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
