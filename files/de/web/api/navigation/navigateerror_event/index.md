---
title: "Navigation: navigateerror Ereignis"
short-title: navigateerror
slug: Web/API/Navigation/navigateerror_event
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`navigateerror`** Ereignis der [`Navigation`](/de/docs/Web/API/Navigation) Schnittstelle wird ausgelöst, wenn eine Navigation fehlschlägt.

Zum Beispiel, wenn das Netzwerk nicht verfügbar ist, schlägt jede Methode [`fetch()`](/de/docs/Web/API/Window/fetch) fehl, die aufgerufen wird, um eine Navigation zu handhaben, und der Fehler wird an `navigateerror` weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("navigateerror", (event) => {});

onnavigateerror = (event) => {};
```

## Ereignistyp

Ein [`ErrorEvent`](/de/docs/Web/API/ErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ErrorEvent")}}

## Beispiele

Sie könnten mit einer erfolgreichen Navigation umgehen, indem Sie einen zuvor angezeigten Fortschrittindikator ausblenden, wie hier:

```js
navigation.addEventListener("navigatesuccess", (event) => {
  loadingIndicator.hidden = true;
});
```

Oder Sie könnten bei einem Fehler eine Fehlermeldung anzeigen:

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
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
