---
title: "Navigation: `entries()`-Methode"
short-title: entries()
slug: Web/API/Navigation/entries
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`entries()`**-Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces gibt ein Array von [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekten zurück, die alle vorhandenen Verlaufseinträge darstellen.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekten.

### Ausnahmen

Keine.

## Beispiele

### Die Anzahl der Einträge im Verlauf zurückgeben

```js
let numOfEntries = navigation.entries().length - 1;
```

### Eine intelligente Zurück-Schaltfläche

Eine auf der Seite bereitgestellte "Zurück"-Schaltfläche kann Sie zurückbringen, sogar nach einem Neuladen, indem sie die vorherigen Verlaufseinträge inspiziert:

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

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
