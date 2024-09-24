---
title: "Navigation: currententrychange Ereignis"
short-title: currententrychange
slug: Web/API/Navigation/currententrychange_event
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`currententrychange`**-Ereignis der {{domxref("Navigation")}}-Schnittstelle wird ausgelöst, wenn sich die {{domxref("Navigation.currentEntry")}} geändert hat.

Dieses Ereignis wird ausgelöst bei:

- Navigationen im selben Dokument (z.B. {{domxref("Navigation.back", "back()")}} oder {{domxref("Navigation.traverseTo", "traverseTo()")}}).

- Ersetzungen (d.h. ein {{domxref("Navigation.navigate", "navigate()")}} Aufruf mit `history` auf `replace` gesetzt).

- Anderen Aufrufen, die den Zustand des Eintrags ändern (z.B. {{domxref("Navigation.updateCurrentEntry", "updateCurrentEntry()")}}, oder der {{domxref("History API", "History API", "", "nocode")}}'s {{domxref("History.replaceState()")}}).

Dieses Ereignis wird ausgelöst, nachdem die Navigation abgeschlossen ist, was bedeutet, dass sich die sichtbare URL geändert hat und die {{domxref("NavigationHistoryEntry")}} Aktualisierung stattgefunden hat. Es ist nützlich für die Migration der Nutzung älterer API-Funktionen wie der {{domxref("Window/hashchange_event", "hashchange")}} oder der {{domxref("Window/popstate_event", "popstate")}} Ereignisse.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("currententrychange", (event) => {});

oncurrententrychange = (event) => {};
```

## Ereignistyp

Ein {{domxref("NavigationCurrentEntryChangeEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("NavigationCurrentEntryChangeEvent")}}

## Beispiele

Berichterstattung von Navigationsdaten:

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routenverwaltung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärungsdokument](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
