---
title: "Navigation: navigatesuccess Ereignis"
short-title: navigatesuccess
slug: Web/API/Navigation/navigatesuccess_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`navigatesuccess`** Ereignis des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces wird ausgelöst, wenn eine erfolgreiche Navigation abgeschlossen ist.

Im Falle einer abgefangenen Navigation tritt dies ein, nachdem alle Versprechen, die von Ihrem [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept)-Handler zurückgegeben wurden, erfüllt sind. Das [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Versprechen wird ebenfalls zur gleichen Zeit erfüllt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("navigatesuccess", (event) => { })

onnavigatesuccess = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sie könnten bei einer erfolgreichen Navigation einen zuvor angezeigten Fortschrittsanzeiger ausblenden, wie in diesem Beispiel:

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

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung zur Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
