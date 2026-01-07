---
title: "Navigation: navigateerror-Ereignis"
short-title: navigateerror
slug: Web/API/Navigation/navigateerror_event
l10n:
  sourceCommit: e7ffb2866dc8b67280801535c7f58bf073a5aaf9
---

{{APIRef("Navigation API")}}

Das **`navigateerror`**-Ereignis der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle wird ausgelöst, wenn eine Navigation fehlschlägt.

Zum Beispiel, wenn das Netzwerk nicht verfügbar ist, wird jede mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode initiierte Navigation fehlschlagen, und der Fehler wird an `navigateerror` weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js-nolint
addEventListener("navigateerror", (event) => { })

onnavigateerror = (event) => { }
```

## Ereignistyp

Ein [`ErrorEvent`](/de/docs/Web/API/ErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ErrorEvent")}}

## Beispiele

Sie könnten mit einer erfolgreichen Navigation umgehen, indem Sie ein zuvor angezeigtes Fortschrittsanzeige verbergen, wie hier:

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

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
