---
title: "Navigation: navigatesuccess Ereignis"
short-title: navigatesuccess
slug: Web/API/Navigation/navigatesuccess_event
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`navigatesuccess`** Ereignis der [`Navigation`](/de/docs/Web/API/Navigation) Schnittstelle wird ausgelöst, wenn eine erfolgreiche Navigation abgeschlossen ist.

Im Fall einer abgefangenen Navigation würde dies nach der Erfüllung aller von Ihrem [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) Handler zurückgegebenen Versprechen geschehen. Auch das [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Versprechen wird gleichzeitig erfüllt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("navigatesuccess", (event) => {});

onnavigatesuccess = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sie könnten eine erfolgreiche Navigation behandeln, indem Sie einen zuvor angezeigten Fortschrittsindikator ausblenden, wie folgt:

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
