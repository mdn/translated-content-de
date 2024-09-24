---
title: "NavigationCurrentEntryChangeEvent: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationCurrentEntryChangeEvent/navigationType
l10n:
  sourceCommit: df3316c2c702c57514bfd8daba389765464ea653
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`navigationType`**-Eigenschaft der {{domxref("NavigationCurrentEntryChangeEvent")}}-Schnittstelle gibt den Typ der Navigation zurück, die die Änderung verursacht hat. Die Eigenschaft kann `null` sein, wenn die Änderung durch {{domxref("Navigation.updateCurrentEntry()")}} stattfindet.

## Wert

Ein Aufzählungswert, der den Typ der Navigation darstellt.

Die möglichen Werte sind:

- `push`: Es wird ein neuer Standort navigiert, wodurch ein neuer Eintrag in die Verlaufsliste eingefügt wird.
- `reload`: Der {{domxref("Navigation.currentEntry")}} wird neu geladen.
- `replace`: Der {{domxref("Navigation.currentEntry")}} wird durch einen neuen Eintrag im Verlauf ersetzt. Dieser neue Eintrag wird den gleichen {{domxref("NavigationHistoryEntry.key", "key")}} wiederverwenden, aber eine andere {{domxref("NavigationHistoryEntry.id", "id")}} zugewiesen bekommen.
- `traverse`: Der Browser navigiert von einem existierenden Eintrag im Verlauf zu einem anderen existierenden Eintrag im Verlauf.

## Beispiele

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.navigationType);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routenplanung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
