---
title: "Navigation: navigatesuccess-Ereignis"
short-title: navigatesuccess
slug: Web/API/Navigation/navigatesuccess_event
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`navigatesuccess`**-Ereignis der {{domxref("Navigation")}}-Schnittstelle wird ausgelöst, wenn eine erfolgreiche Navigation abgeschlossen ist.

Im Falle einer abgefangenen Navigation tritt dies ein, nachdem alle von Ihrem {{domxref("NavigateEvent.intercept", "intercept()")}}-Handler zurückgegebenen Versprechen erfüllt wurden. Das {{domxref("NavigationTransition.finished")}}-Versprechen wird ebenfalls gleichzeitig erfüllt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("navigatesuccess", (event) => {});

onnavigatesuccess = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Sie könnten bei einer erfolgreichen Navigation einen zuvor angezeigten Fortschrittsanzeiger ausblenden, so wie hier:

```js
navigation.addEventListener("navigatesuccess", (event) => {
  loadingIndicator.hidden = true;
});
```

Oder Sie zeigen bei einem Fehler eine Fehlermeldung an:

```js
navigation.addEventListener("navigateerror", (event) => {
  loadingIndicator.hidden = true; // auch Indikator ausblenden
  showMessage(`Failed to load page: ${event.message}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
