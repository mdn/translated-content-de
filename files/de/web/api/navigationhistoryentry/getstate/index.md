---
title: "NavigationHistoryEntry: getState() Methode"
short-title: getState()
slug: Web/API/NavigationHistoryEntry/getState
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`getState()`**-Methode des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Interfaces gibt einen Klon des entwicklerseitig bereitgestellten Zustands zurück, der mit diesem Verlaufseintrag assoziiert ist.

## Syntax

```js-nolint
getState()
```

### Parameter

Keine.

### Rückgabewert

Ein Wert, der den Zustand darstellt. Dies kann jeder [struktur-klonbare](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Datentyp sein.

Falls kein Zustand definiert ist oder das aktuelle Dokument nicht vollständig aktiv ist, wird `undefined` zurückgegeben.

### Ausnahmen

Keine.

## Beispiele

```js
async function handleReload() {
  // Update existing state via reload()
  await navigation.reload({
    state: { ...navigation.currentEntry.getState(), newState: 3 },
  });

  // Print current state to the console
  const current = navigation.currentEntry;
  console.log(current.getState());
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Methoden, die es erlauben, den Zustand zu aktualisieren — [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate), [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload), und [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry)
