---
title: "Navigation: navigatesuccess Ereignis"
short-title: navigatesuccess
slug: Web/API/Navigation/navigatesuccess_event
l10n:
  sourceCommit: e7ffb2866dc8b67280801535c7f58bf073a5aaf9
---

{{APIRef("Navigation API")}}

Das **`navigatesuccess`** Ereignis der [`Navigation`](/de/docs/Web/API/Navigation) Schnittstelle wird ausgelöst, wenn eine erfolgreiche Navigation abgeschlossen ist.

Im Falle einer abgefangenen Navigation würde dies auftreten, nachdem alle Versprechen, die von Ihrem [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) Handler zurückgegeben wurden, erfüllt sind. Das [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Versprechen wird ebenfalls zur selben Zeit erfüllt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("navigatesuccess", (event) => { })

onnavigatesuccess = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sie könnten eine erfolgreiche Navigation behandeln, indem Sie einen zuvor angezeigten Fortschrittsanzeiger ausblenden, zum Beispiel so:

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
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
