---
title: NavigationCurrentEntryChangeEvent
slug: Web/API/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Das **`NavigationCurrentEntryChangeEvent`** Interface des [Navigation API](/de/docs/Web/API/Navigation_API) ist das Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) Ereignis, das ausgelöst wird, wenn sich [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.

Dieses Ereignis wird bei Navigationen im selben Dokument ausgelöst (z.B. [`back()`](/de/docs/Web/API/Navigation/back) oder [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)), Ersetzungen (d.h. ein [`navigate()`](/de/docs/Web/API/Navigation/navigate)-Aufruf mit `history` auf `replace` gesetzt) oder anderen Aufrufen, die den Status des Eintrags ändern (z.B. [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry), oder das [History API](/de/docs/Web/API/History_API)'s [`History.replaceState()`](/de/docs/Web/API/History/replaceState)).

Dieses Ereignis wird ausgelöst, nachdem die Navigation abgeschlossen ist, was bedeutet, dass die sichtbare URL geändert wurde und die Aktualisierung des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erfolgt ist. Es ist nützlich für die Migration von der Nutzung älterer API-Funktionen wie der [`hashchange`](/de/docs/Web/API/Window/hashchange_event) oder [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignisse.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigationCurrentEntryChangeEvent()`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/NavigationCurrentEntryChangeEvent)
  - : Erstellt eine neue Instanz des `NavigationCurrentEntryChangeEvent` Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`from`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/from) {{ReadOnlyInline}}
  - : Gibt das [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, von dem aus navigiert wurde.
- [`navigationType`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/navigationType) {{ReadOnlyInline}}
  - : Gibt den Typ der Navigation zurück, die zu der Änderung geführt hat.

## Beispiele

Navigationsdatenberichterstattung:

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
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demoquelle anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
