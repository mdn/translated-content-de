---
title: "NavigationHistoryEntry: getState()-Methode"
short-title: getState()
slug: Web/API/NavigationHistoryEntry/getState
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`getState()`**-Methode der [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Schnittstelle gibt eine Kopie des vom Entwickler bereitgestellten Zustands zurück, der mit diesem Verlaufs-Eintrag verbunden ist.

## Syntax

```js-nolint
getState()
```

### Parameter

Keine.

### Rückgabewert

Ein Wert, der den Zustand darstellt. Dies kann jeder [strukturierbar-kopierbare](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Datentyp sein.

Wenn kein Zustand definiert ist oder das aktuelle Dokument nicht vollständig aktiv ist, wird `undefined` zurückgegeben.

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

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API-Live-Demo](https://gigantic-honored-octagon.glitch.me/)
- Methoden, die es ermöglichen, den Zustand zu aktualisieren — [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate), [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload) und [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry)
