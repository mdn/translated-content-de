---
title: "NavigationHistoryEntry: getState()-Methode"
short-title: getState()
slug: Web/API/NavigationHistoryEntry/getState
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`getState()`**-Methode der {{domxref("NavigationHistoryEntry")}}-Schnittstelle gibt eine Kopie des vom Entwickler bereitgestellten Zustands zurück, der mit diesem Verlaufseintrag verknüpft ist.

## Syntax

```js-nolint
getState()
```

### Parameter

Keine.

### Rückgabewert

Ein Wert, der den Zustand darstellt. Dies kann jeder [strukturierter-klonbarer](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Datentyp sein.

Wenn kein Zustand definiert ist oder das aktuelle Dokument nicht vollständig aktiv ist, wird `undefined` zurückgegeben.

### Ausnahmen

Keine.

## Beispiele

```js
async function handleReload() {
  // Aktualisieren Sie den vorhandenen Zustand über reload()
  await navigation.reload({
    state: { ...navigation.currentEntry.getState(), newState: 3 },
  });

  // Aktuellen Zustand in die Konsole ausgeben
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
- [Erläuterung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
- Methoden, die es ermöglichen, den Zustand zu aktualisieren — {{domxref("Navigation.navigate()")}}, {{domxref("Navigation.reload()")}}, und {{domxref("Navigation.updateCurrentEntry()")}}
