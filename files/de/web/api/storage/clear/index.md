---
title: "Storage: clear()-Methode"
short-title: clear()
slug: Web/API/Storage/clear
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Storage API")}}

Die **`clear()`**-Methode der {{domxref("Storage")}}-Schnittstelle löscht alle Schlüssel, die in einem gegebenen `Storage`-Objekt gespeichert sind.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Die folgende Funktion erstellt drei Dateneinträge im lokalen Speicher und löscht sie dann mit `clear()`.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "miGato.png");

  localStorage.clear();
}
```

> [!NOTE]
> Für ein Beispiel aus der Praxis, siehe unser [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
