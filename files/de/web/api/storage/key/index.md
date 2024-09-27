---
title: "Storage: key()-Methode"
short-title: key()
slug: Web/API/Storage/key
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Storage API")}}

Die **`key()`**-Methode des [`Storage`](/de/docs/Web/API/Storage)-Interfaces,
gibt, wenn eine Zahl `n` übergeben wird, den Namen des n-ten Schlüssels in einem gegebenen `Storage`-Objekt zurück. Die Reihenfolge der Schlüssel wird durch den Benutzeragenten definiert, daher sollten Sie sich nicht darauf verlassen.

## Syntax

```js-nolint
key(index)
```

### Parameter

- `index`
  - : Ein ganzzahliger Wert, der die Nummer des Schlüssels repräsentiert, dessen Name Sie erhalten möchten. Dies ist ein nullbasiertes Index.

### Rückgabewert

Ein String, der den Namen des Schlüssels enthält. Wenn der Index nicht existiert,
wird `null` zurückgegeben.

## Beispiele

Die folgende Funktion iteriert über die lokalen Speicher-Schlüssel:

```js
function forEachKey(callback) {
  for (let i = 0; i < localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}
```

Die folgende Funktion iteriert über die lokalen Speicher-Schlüssel und erhält den für jeden Schlüssel gesetzten Wert:

```js
for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
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
