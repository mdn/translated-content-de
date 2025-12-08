---
title: "Navigation: entries()-Methode"
short-title: entries()
slug: Web/API/Navigation/entries
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`entries()`**-Methode der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle gibt ein Array von [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekten zurück, die alle vorhandenen Verlaufs-Einträge darstellen.

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

### Anzahl der Einträge im Verlauf zurückgeben

```js
let numOfEntries = navigation.entries().length - 1;
```

### Ein intelligenter "Zurück"-Button

Ein von der Seite bereitgestellter "Zurück"-Button kann Sie zurückbringen, selbst nach dem Neuladen, indem er die vorherigen Verlaufs-Einträge überprüft:

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

- [Moderner client-seitiger Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
