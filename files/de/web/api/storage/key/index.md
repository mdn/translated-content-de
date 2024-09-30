---
title: "Storage: Methode key()"
short-title: key()
slug: Web/API/Storage/key
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Storage API")}}

Die **`key()`**-Methode der [`Storage`](/de/docs/Web/API/Storage)-Schnittstelle gibt, wenn sie mit einer Zahl n aufgerufen wird, den Namen des n-ten Schlüssels in einem gegebenen `Storage`-Objekt zurück. Die Reihenfolge der Schlüssel wird vom Benutzeragenten definiert, daher sollten Sie sich nicht darauf verlassen.

## Syntax

```js-nolint
key(index)
```

### Parameter

- `index`
  - : Eine ganze Zahl, die die Nummer des Schlüssels darstellt, dessen Namen Sie erhalten möchten. Dies ist ein nullbasierter Index.

### Rückgabewert

Ein String, der den Namen des Schlüssels enthält. Wenn der Index nicht existiert,
wird `null` zurückgegeben.

## Beispiele

Die folgende Funktion iteriert über die Schlüssel des lokalen Speichers:

```js
function forEachKey(callback) {
  for (let i = 0; i < localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}
```

Die folgende Funktion iteriert über die Schlüssel des lokalen Speichers und ruft den für jeden Schlüssel gesetzten Wert ab:

```js
for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
```

> [!NOTE]
> Für ein Praxisbeispiel siehe unser [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
