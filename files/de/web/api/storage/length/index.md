---
title: "Storage: length Eigenschaft"
short-title: length
slug: Web/API/Storage/length
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Storage API")}}

Die schreibgeschützte **`length`**-Eigenschaft der
[`Storage`](/de/docs/Web/API/Storage)-Schnittstelle gibt die Anzahl der Datenelemente zurück, die in einem bestimmten `Storage`-Objekt gespeichert sind.

## Wert

Die Anzahl der Elemente, die im `Storage`-Objekt gespeichert sind.

## Beispiele

Die folgende Funktion fügt dem lokalen Speicher für die aktuelle Domain drei Datenelemente hinzu und gibt dann die Anzahl der Elemente im Speicher zurück:

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "yellow");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "cats.png");

  return localStorage.length; // Should return 3
}
```

> [!NOTE]
> Für ein Beispiel aus der Praxis siehe unser [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
