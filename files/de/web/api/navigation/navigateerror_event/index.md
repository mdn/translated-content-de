---
title: "Navigation: navigateerror Ereignis"
short-title: navigateerror
slug: Web/API/Navigation/navigateerror_event
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`navigateerror`** Ereignis der {{domxref("Navigation")}} Schnittstelle wird ausgelöst, wenn eine Navigation fehlschlägt.

Zum Beispiel, wenn das Netzwerk ausgefallen ist, wird jede durch eine Navigation ausgelöste {{domxref("Window/fetch", "fetch()")}} Methode fehlschlagen, und der Fehler wird an `navigateerror` weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("navigateerror", (event) => {});

onnavigateerror = (event) => {};
```

## Ereignistyp

Ein {{domxref("ErrorEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ErrorEvent")}}

## Beispiele

Sie könnten mit einer erfolgreichen Navigation umgehen, indem Sie einen zuvor angezeigten Fortschrittsindikator ausblenden, so:

```js
navigation.addEventListener("navigatesuccess", (event) => {
  loadingIndicator.hidden = true;
});
```

Oder Sie könnten bei einem Fehler eine Fehlermeldung anzeigen:

```js
navigation.addEventListener("navigateerror", (event) => {
  loadingIndicator.hidden = true; // auch den Indikator ausblenden
  showMessage(`Fehler beim Laden der Seite: ${event.message}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
