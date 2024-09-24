---
title: NavigationCurrentEntryChangeEvent
slug: Web/API/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`NavigationCurrentEntryChangeEvent`**-Schnittstelle der {{domxref("Navigation API", "Navigation API", "", "nocode")}} ist das Ereignisobjekt für das {{domxref("Navigation/currententrychange_event", "currententrychange")}}-Ereignis, das ausgelöst wird, wenn sich das {{domxref("Navigation.currentEntry")}} geändert hat.

Dieses Ereignis wird bei Navigationsvorgängen im selben Dokument (z. B. {{domxref("Navigation.back", "back()")}} oder {{domxref("Navigation.traverseTo", "traverseTo()")}}), Ersetzungen (d. h. ein {{domxref("Navigation.navigate", "navigate()")}}-Aufruf mit `history` auf `replace` gesetzt) oder anderen Aufrufen, die den Zustand des Eintrags ändern (z. B. {{domxref("Navigation.updateCurrentEntry", "updateCurrentEntry()")}} oder die {{domxref("History API", "History API", "", "nocode")}}'s {{domxref("History.replaceState()")}}), ausgelöst.

Dieses Ereignis wird nach dem Binden der Navigation ausgelöst, was bedeutet, dass sich die sichtbare URL geändert hat und das {{domxref("NavigationHistoryEntry")}} aktualisiert wurde. Es ist nützlich für den Umstieg von der Nutzung älterer API-Funktionen wie der {{domxref("Window/hashchange_event", "hashchange")}}- oder {{domxref("Window/popstate_event", "popstate")}}-Ereignisse.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("NavigationCurrentEntryChangeEvent.NavigationCurrentEntryChangeEvent", "NavigationCurrentEntryChangeEvent()")}} {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `NavigationCurrentEntryChangeEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("Event")}}._

- {{domxref("NavigationCurrentEntryChangeEvent.from", "from")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die {{domxref("NavigationHistoryEntry")}} zurück, von der aus navigiert wurde.
- {{domxref("NavigationCurrentEntryChangeEvent.navigationType", "navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der Navigation zurück, die zur Änderung geführt hat.

## Beispiele

Berichterstattung von Navigationsdaten:

```js
navigation.addEventListener("currententrychange", () => {
  const data = navigation.currentEntry.getState();
  submitAnalyticsData(data.analytics);
});
```

Einrichtung eines ereignisspezifischen Eintrags:

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
