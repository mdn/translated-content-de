---
title: "Navigation: currententrychange event"
short-title: currententrychange
slug: Web/API/Navigation/currententrychange_event
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`currententrychange`** Ereignis der [`Navigation`](/de/docs/Web/API/Navigation) Schnittstelle wird ausgelöst, wenn sich [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.

Dieses Ereignis wird bei folgenden Aktionen ausgelöst:

- Navigationen im selben Dokument (z. B. [`back()`](/de/docs/Web/API/Navigation/back) oder [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)).

- Ersetzungen (d.h. ein Aufruf von [`navigate()`](/de/docs/Web/API/Navigation/navigate) mit `history` auf `replace` gesetzt).

- Andere Aufrufe, die den Zustand des Eintrags ändern (z. B. [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) oder das [History API](/de/docs/Web/API/History_API) mit [`History.replaceState()`](/de/docs/Web/API/History/replaceState)).

Dieses Ereignis wird ausgelöst, nachdem die Navigation festgeschrieben wurde, was bedeutet, dass sich die sichtbare URL geändert hat und das [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) aktualisiert wurde. Es ist nützlich für die Migration von der Verwendung älterer API-Funktionen wie der [`hashchange`](/de/docs/Web/API/Window/hashchange_event) oder [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignisse.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("currententrychange", (event) => { })

oncurrententrychange = (event) => { }
```

## Ereignistyp

Ein [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("NavigationCurrentEntryChangeEvent")}}

## Beispiele

Navigation Datenberichterstattung:

```js
navigation.addEventListener("currententrychange", () => {
  const data = navigation.currentEntry.getState();
  submitAnalyticsData(data.analytics);
});
```

Einrichten eines ereignisgebundenen Handlers pro Eintrag:

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
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
