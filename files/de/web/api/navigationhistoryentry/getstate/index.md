---
title: "NavigationHistoryEntry: getState()-Methode"
short-title: getState()
slug: Web/API/NavigationHistoryEntry/getState
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`getState()`**-Methode des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Interfaces gibt einen Klon des vom Entwickler bereitgestellten Zustands zurück, der diesem Verlaufs-Eintrag zugeordnet ist.

## Syntax

```js-nolint
getState()
```

### Parameter

Keine.

### Rückgabewert

Ein Wert, der den Zustand darstellt. Dies kann jeder [structured-cloneable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Datentyp sein.

Wenn kein Zustand definiert ist oder wenn das aktuelle Dokument nicht vollständig aktiv ist, wird `undefined` zurückgegeben.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
- Methoden, die es ermöglichen, den Zustand zu aktualisieren — [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate), [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload) und [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry)
