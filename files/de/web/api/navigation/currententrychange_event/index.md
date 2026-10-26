---
title: "Navigation: currententrychange-Ereignis"
short-title: currententrychange
slug: Web/API/Navigation/currententrychange_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Navigation API")}}

Das **`currententrychange`**-Ereignis der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle wird ausgelöst, wenn sich [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.

Dieses Ereignis wird ausgelöst bei:

- Navigationen innerhalb desselben Dokuments (z. B. [`back()`](/de/docs/Web/API/Navigation/back) oder [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)).

- Ersetzungen (d.h. einem Aufruf von [`navigate()`](/de/docs/Web/API/Navigation/navigate), bei dem `history` auf `replace` gesetzt ist).

- Anderen Aufrufen, die den Zustand des Eintrags ändern (z. B. [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) oder [`History.replaceState()`](/de/docs/Web/API/History/replaceState) der [History API](/de/docs/Web/API/History_API)).

Dieses Ereignis wird ausgelöst, nachdem die Navigation übernommen wurde. Das bedeutet, dass sich die sichtbare URL geändert hat und der [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) aktualisiert wurde. Es ist hilfreich, wenn Sie von älteren API-Funktionen wie den Ereignissen [`hashchange`](/de/docs/Web/API/Window/hashchange_event) oder [`popstate`](/de/docs/Web/API/Window/popstate_event) umsteigen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("currententrychange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncurrententrychange = (event) => { }
```

## Ereignistyp

Ein [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("NavigationCurrentEntryChangeEvent")}}

## Beispiele

Navigationsdaten erfassen:

```js
navigation.addEventListener("currententrychange", () => {
  const data = navigation.currentEntry.getState();
  submitAnalyticsData(data.analytics);
});
```

Ein Ereignis für einen einzelnen Eintrag einrichten:

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung zur Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
