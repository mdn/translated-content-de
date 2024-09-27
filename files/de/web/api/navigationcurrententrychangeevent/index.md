---
title: NavigationCurrentEntryChangeEvent
slug: Web/API/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationCurrentEntryChangeEvent`** Interface der [Navigation API](/de/docs/Web/API/Navigation_API) ist das Ereignisobjekt für das [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) Ereignis, das ausgelöst wird, wenn sich der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) geändert hat.

Dieses Ereignis wird bei gleichbleibenden Dokumentnavigationen (z.B. [`back()`](/de/docs/Web/API/Navigation/back) oder [`traverseTo()`](/de/docs/Web/API/Navigation/traverseTo)), Ersetzungen (d.h. ein [`navigate()`](/de/docs/Web/API/Navigation/navigate) Aufruf mit `history` auf `replace` gesetzt) oder andere Aufrufe, die den Zustand eines Eintrags ändern (z.B. [`updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) oder die [History API](/de/docs/Web/API/History_API) mit [`History.replaceState()`](/de/docs/Web/API/History/replaceState)).

Dieses Ereignis wird ausgelöst, nachdem die Navigation festgeschrieben wurde, was bedeutet, dass sich die sichtbare URL geändert hat und die Aktualisierung des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erfolgt ist. Es ist nützlich für die Migration von älteren API-Funktionen wie der [`hashchange`](/de/docs/Web/API/Window/hashchange_event) oder [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignisse.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigationCurrentEntryChangeEvent()`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/NavigationCurrentEntryChangeEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz eines `NavigationCurrentEntryChangeEvent` Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`from`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/from) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, von dem navigiert wurde.
- [`navigationType`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der Navigation zurück, die zur Änderung führte.

## Beispiele

Navigationsdaten-Berichterstattung:

```js
navigation.addEventListener("currententrychange", () => {
  const data = navigation.currentEntry.getState();
  submitAnalyticsData(data.analytics);
});
```

Einrichten eines ereignisbezogenen Eintrags:

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

- [Moderne clientseitige Routenerstellung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
