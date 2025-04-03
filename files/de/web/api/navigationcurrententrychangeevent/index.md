---
title: NavigationCurrentEntryChangeEvent
slug: Web/API/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationCurrentEntryChangeEvent`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) ist das Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Ereignis, welches ausgelöst wird, wenn sich die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.

Dieses Ereignis wird für Navigationen im selben Dokument ausgelöst (z.B. [`back()`](/de/docs/Web/API/Navigation/back) oder [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)), Ersetzungen (d.h. ein Aufruf von [`navigate()`](/de/docs/Web/API/Navigation/navigate) mit `history` auf `replace` gesetzt), oder andere Aufrufe, die den Zustand des Eintrags ändern (z.B. [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry), oder die [History API](/de/docs/Web/API/History_API) mit [`History.replaceState()`](/de/docs/Web/API/History/replaceState)).

Dieses Ereignis wird ausgelöst, nachdem die Navigation bestätigt wurde, was bedeutet, dass sich die sichtbare URL geändert hat und das [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) aktualisiert wurde. Es ist nützlich für die Migration von der Nutzung älterer API-Funktionen wie der [`hashchange`](/de/docs/Web/API/Window/hashchange_event)- oder [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignisse.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigationCurrentEntryChangeEvent()`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `NavigationCurrentEntryChangeEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`from`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/from) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, von dem aus navigiert wurde.
- [`navigationType`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der Navigation zurück, die zu der Änderung geführt hat.

## Beispiele

Navigation-Datenbericht:

```js
navigation.addEventListener("currententrychange", () => {
  const data = navigation.currentEntry.getState();
  submitAnalyticsData(data.analytics);
});
```

Einrichten eines pro-Eintrag-Ereignisses:

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

- [Moderne client-seitige Routinen: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API erläutert](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
