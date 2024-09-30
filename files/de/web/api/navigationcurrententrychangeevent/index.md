---
title: NavigationCurrentEntryChangeEvent
slug: Web/API/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`NavigationCurrentEntryChangeEvent`** Schnittstelle der [Navigation API](/de/docs/Web/API/Navigation_API) ist das Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) Ereignis, das ausgelöst wird, wenn sich der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.

Dieses Ereignis wird bei Navigieren im selben Dokument ausgelöst (z.B. [`back()`](/de/docs/Web/API/Navigation/back) oder [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)), bei Ersetzungen (d.h. ein Aufruf von [`navigate()`](/de/docs/Web/API/Navigation/navigate) mit `history` auf `replace` gesetzt), oder bei anderen Aufrufen, die den Zustand des Eintrags ändern (z.B. [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry), oder die [History API](/de/docs/Web/API/History_API) mit [`History.replaceState()`](/de/docs/Web/API/History/replaceState)).

Dieses Ereignis wird nach der Festschreibung der Navigation ausgelöst, was bedeutet, dass die sichtbare URL verändert ist und das [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) aktualisiert wurde. Es ist nützlich für die Migration von der Nutzung älterer API-Funktionen wie der [`hashchange`](/de/docs/Web/API/Window/hashchange_event) oder [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignisse.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigationCurrentEntryChangeEvent()`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des Objekts `NavigationCurrentEntryChangeEvent`.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`from`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/from) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, von dem aus navigiert wurde.
- [`navigationType`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der Navigation zurück, der zur Änderung geführt hat.

## Beispiele

Berichterstattung von Navigationsdaten:

```js
navigation.addEventListener("currententrychange", () => {
  const data = navigation.currentEntry.getState();
  submitAnalyticsData(data.analytics);
});
```

Ein Ereignis pro Eintrag einrichten:

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

- [Modernes Client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
