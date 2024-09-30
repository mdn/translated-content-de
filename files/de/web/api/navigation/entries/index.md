---
title: "Navigation: `entries()` Methode"
short-title: entries()
slug: Web/API/Navigation/entries
l10n:
  sourceCommit: 30da97f103149960ac51726db2509be38f67efda
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`entries()`** Methode der [`Navigation`](/de/docs/Web/API/Navigation) Schnittstelle gibt ein Array von [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekten zurück, die alle vorhandenen Verlaufseinträge darstellen.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekten.

### Ausnahmen

Keine.

## Beispiele

### Die Anzahl der Einträge im Verlauf zurückgeben

```js
let numOfEntries = navigation.entries().length - 1;
```

### Ein intelligenter Zurück-Button

Ein von der Seite bereitgestellter "Zurück"-Button kann Sie zurückbringen, sogar nach einem Neuladen, indem er die vorherigen Verlaufseinträge inspiziert:

```js
backButtonEl.addEventListener("click", () => {
  if (
    navigation.entries()[navigation.currentEntry.index - 1]?.url ===
    "/product-listing"
  ) {
    navigation.back();
  } else {
    // If the user arrived here in some other way
    // e.g. by typing the URL directly:
    navigation.navigate("/product-listing", { history: "replace" });
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
