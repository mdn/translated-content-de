---
title: "Navigation: navigatesuccess-Ereignis"
short-title: navigatesuccess
slug: Web/API/Navigation/navigatesuccess_event
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`navigatesuccess`**-Ereignis der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle wird ausgelöst, wenn eine erfolgreiche Navigation abgeschlossen ist.

Im Falle einer abgefangenen Navigation würde dies nach Abschluss aller von Ihrem [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept)-Handler zurückgegebenen Versprechen auftreten. Das [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Versprechen wird ebenfalls gleichzeitig erfüllt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("navigatesuccess", (event) => {});

onnavigatesuccess = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sie könnten mit einer erfolgreichen Navigation umgehen, indem Sie einen zuvor angezeigten Fortschrittsanzeiger ausblenden, wie zum Beispiel:

```js
navigation.addEventListener("navigatesuccess", (event) => {
  loadingIndicator.hidden = true;
});
```

Oder Sie könnten bei einem Scheitern eine Fehlermeldung anzeigen:

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

- [Moderne Client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
