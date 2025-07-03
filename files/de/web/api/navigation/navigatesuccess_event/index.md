---
title: "Navigation: navigatesuccess Ereignis"
short-title: navigatesuccess
slug: Web/API/Navigation/navigatesuccess_event
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`navigatesuccess`** Ereignis der [`Navigation`](/de/docs/Web/API/Navigation) Schnittstelle wird ausgelöst, wenn eine erfolgreiche Navigation abgeschlossen ist.

Im Fall einer abgefangenen Navigation würde dies nach Erfüllung aller von Ihrem [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) Handler zurückgegebenen Versprechen (Promises) eintreten. Das [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Versprechen wird ebenfalls zur gleichen Zeit erfüllt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("navigatesuccess", (event) => { })

onnavigatesuccess = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sie könnten eine erfolgreiche Navigation handhaben, indem Sie einen zuvor angezeigten Fortschrittsanzeiger ausblenden, wie hier:

```js
navigation.addEventListener("navigatesuccess", (event) => {
  loadingIndicator.hidden = true;
});
```

Oder Sie könnten eine Fehlermeldung bei einem Fehler anzeigen:

```js
navigation.addEventListener("navigateerror", (event) => {
  loadingIndicator.hidden = true; // also hide indicator
  showMessage(`Failed to load page: ${event.message}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
