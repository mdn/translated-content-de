---
title: "Navigation: navigatesuccess-Ereignis"
short-title: navigatesuccess
slug: Web/API/Navigation/navigatesuccess_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Navigation API")}}

Das **`navigatesuccess`**-Ereignis der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle wird ausgelöst, wenn eine Navigation erfolgreich abgeschlossen wurde.

Bei einer abgefangenen Navigation geschieht dies, nachdem alle von Ihrem [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept)-Handler zurückgegebenen Promises erfüllt wurden. Das Promise [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) wird ebenfalls zu diesem Zeitpunkt erfüllt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("navigatesuccess", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onnavigatesuccess = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Nach einer erfolgreichen Navigation können Sie beispielsweise eine zuvor angezeigte Fortschrittsanzeige ausblenden:

```js
navigation.addEventListener("navigatesuccess", (event) => {
  loadingIndicator.hidden = true;
});
```

Bei einem Fehlschlag können Sie stattdessen eine Fehlermeldung anzeigen:

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
- [Erläuterung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
