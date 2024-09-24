---
title: "Storage: length-Eigenschaft"
short-title: length
slug: Web/API/Storage/length
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Storage API")}}

Die **`length`** schreibgeschützte Eigenschaft des
{{domxref("Storage")}} Interfaces gibt die Anzahl der Datenitems zurück, die in einem gegebenen
`Storage` Objekt gespeichert sind.

## Wert

Die Anzahl der in dem `Storage` Objekt gespeicherten Items.

## Beispiele

Die folgende Funktion fügt drei Datenitems zur lokalen Speicherung für die aktuelle
Domäne hinzu und gibt dann die Anzahl der Items in der Speicherung zurück:

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "yellow");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "cats.png");

  return localStorage.length; // Sollte 3 zurückgeben
}
```

> [!NOTE]
> Für ein Praxisbeispiel, sehen Sie unser [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
