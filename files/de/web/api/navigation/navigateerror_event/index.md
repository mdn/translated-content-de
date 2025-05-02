---
title: "Navigation: navigateerror-Ereignis"
short-title: navigateerror
slug: Web/API/Navigation/navigateerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`navigateerror`**-Ereignis des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces wird ausgelöst, wenn eine Navigation fehlschlägt.

Beispielsweise, wenn das Netzwerk ausfällt, wird jede [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode, die aufgerufen wird, um eine Navigation zu verarbeiten, fehlschlagen, und der Fehler wird an `navigateerror` weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("navigateerror", (event) => { })

onnavigateerror = (event) => { }
```

## Ereignistyp

Ein [`ErrorEvent`](/de/docs/Web/API/ErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ErrorEvent")}}

## Beispiele

Sie könnten eine erfolgreiche Navigation verarbeiten, indem Sie ein zuvor angezeigtes Fortschrittsindikator ausblenden, wie in diesem Beispiel:

```js
navigation.addEventListener("navigatesuccess", (event) => {
  loadingIndicator.hidden = true;
});
```

Oder Sie könnten im Fehlerfall eine Fehlermeldung anzeigen:

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
