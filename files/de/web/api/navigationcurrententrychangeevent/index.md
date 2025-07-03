---
title: NavigationCurrentEntryChangeEvent
slug: Web/API/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`NavigationCurrentEntryChangeEvent`**-Schnittstelle der [Navigation API](/de/docs/Web/API/Navigation_API) ist das Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Ereignis, das ausgelöst wird, wenn sich die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.

Dieses Ereignis wird bei Navigationen im selben Dokument ausgelöst (z. B. [`back()`](/de/docs/Web/API/Navigation/back) oder [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)), bei Ersetzungen (d.h. ein Aufruf von [`navigate()`](/de/docs/Web/API/Navigation/navigate) mit `history` auf `replace` gesetzt) oder anderen Aufrufen, die den Zustand des Eintrags ändern (z. B. [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) oder die [History API](/de/docs/Web/API/History_API) mit [`History.replaceState()`](/de/docs/Web/API/History/replaceState)).

Dieses Ereignis wird ausgelöst, nachdem die Navigation abgeschlossen ist, was bedeutet, dass sich die sichtbare URL geändert hat und das Update des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erfolgt ist. Es ist nützlich für den Wechsel von älteren API-Funktionen wie den [`hashchange`](/de/docs/Web/API/Window/hashchange_event) oder [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignissen.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigationCurrentEntryChangeEvent()`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `NavigationCurrentEntryChangeEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`from`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/from) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, von dem aus navigiert wurde.
- [`navigationType`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der Navigation zurück, die zur Änderung geführt hat.

## Beispiele

Berichterstattung von Navigationsdaten:

```js
navigation.addEventListener("currententrychange", () => {
  const data = navigation.currentEntry.getState();
  submitAnalyticsData(data.analytics);
});
```

Einrichten eines ereignisbasierten Vorgangs pro Eintrag:

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
