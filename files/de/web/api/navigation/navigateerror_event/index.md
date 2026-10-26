---
title: "Navigation: navigateerror-Ereignis"
short-title: navigateerror
slug: Web/API/Navigation/navigateerror_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Navigation API")}}

Das **`navigateerror`**-Ereignis der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle wird ausgelöst, wenn eine Navigation fehlschlägt.

Wenn beispielsweise die Netzwerkverbindung unterbrochen ist, schlägt jede [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode fehl, die zur Verarbeitung einer Navigation aufgerufen wird. Der Fehler wird dann an `navigateerror` weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("navigateerror", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onnavigateerror = (event) => { }
```

## Ereignistyp

Ein [`ErrorEvent`](/de/docs/Web/API/ErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ErrorEvent")}}

## Beispiele

Nach einer erfolgreichen Navigation können Sie beispielsweise einen zuvor angezeigten Fortschrittsindikator ausblenden:

```js
navigation.addEventListener("navigatesuccess", (event) => {
  loadingIndicator.hidden = true;
});
```

Bei einem Fehler können Sie stattdessen eine Fehlermeldung anzeigen:

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
