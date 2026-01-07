---
title: "Navigation: currententrychange-Ereignis"
short-title: currententrychange
slug: Web/API/Navigation/currententrychange_event
l10n:
  sourceCommit: e7ffb2866dc8b67280801535c7f58bf073a5aaf9
---

{{APIRef("Navigation API")}}

Das **`currententrychange`**-Ereignis der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle wird ausgelöst, wenn sich der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ändert.

Dieses Ereignis wird ausgelöst bei:

- Navigationen im selben Dokument (z. B. [`back()`](/de/docs/Web/API/Navigation/back) oder [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)).

- Ersetzungen (d.h. ein Aufruf von [`navigate()`](/de/docs/Web/API/Navigation/navigate) mit `history` auf `replace` gesetzt).

- Anderen Aufrufen, die den Zustand des Eintrags ändern (z. B. [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) oder der [`History.replaceState()`](/de/docs/Web/API/History/replaceState)-Aufruf der [History API](/de/docs/Web/API/History_API)).

Dieses Ereignis wird ausgelöst, nachdem die Navigation festgeschrieben wurde, was bedeutet, dass die sichtbare URL geändert wurde und das [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Update erfolgt ist. Es ist nützlich für die Migration von der Nutzung älterer API-Funktionen wie den [`hashchange`](/de/docs/Web/API/Window/hashchange_event)- oder [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignissen.

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

Einrichtung eines Ereignisses pro Eintrag:

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

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
