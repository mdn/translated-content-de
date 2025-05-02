---
title: "Navigation: currententrychange event"
short-title: currententrychange
slug: Web/API/Navigation/currententrychange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`currententrychange`** Ereignis der [`Navigation`](/de/docs/Web/API/Navigation) Schnittstelle wird ausgelöst, wenn sich [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.

Dieses Ereignis wird ausgelöst bei:

- Navigationen im selben Dokument (z. B. [`back()`](/de/docs/Web/API/Navigation/back) oder [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)).

- Ersetzungen (d.h. ein Aufruf von [`navigate()`](/de/docs/Web/API/Navigation/navigate) mit `history` auf `replace` gesetzt).

- Anderen Aufrufen, die den Zustand des Eintrags ändern (z. B. [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) oder die [History API](/de/docs/Web/API/History_API) [`History.replaceState()`](/de/docs/Web/API/History/replaceState)).

Dieses Ereignis wird ausgelöst, nachdem die Navigation abgeschlossen ist, was bedeutet, dass die sichtbare URL geändert wurde und das `NavigationHistoryEntry`-Update erfolgt ist. Es ist nützlich, um die Nutzung älterer API-Funktionen wie der [`hashchange`](/de/docs/Web/API/Window/hashchange_event) oder [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignisse zu ersetzen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("currententrychange", (event) => { })

oncurrententrychange = (event) => { }
```

## Ereignistyp

Ein [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("NavigationCurrentEntryChangeEvent")}}

## Beispiele

Berichterstattung von Navigationsdaten:

```js
navigation.addEventListener("currententrychange", () => {
  const data = navigation.currentEntry.getState();
  submitAnalyticsData(data.analytics);
});
```

Einrichten eines ereignisbasierten Eintrags:

```js
navigation.addEventListener("currententrychange", () => {
  navigation.currentEntry.addEventListener("dispose", genericDisposeHandler);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routing: das Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation-API](https://gigantic-honored-octagon.glitch.me/)
