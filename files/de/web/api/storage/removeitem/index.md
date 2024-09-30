---
title: "Storage: removeItem() Methode"
short-title: removeItem()
slug: Web/API/Storage/removeItem
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Storage API")}}

Die **`removeItem()`** Methode des [`Storage`](/de/docs/Web/API/Storage)-Interface entfernt, wenn sie mit einem Schlüsselnamen aufgerufen wird, diesen Schlüssel aus dem gegebenen `Storage`-Objekt, sofern er existiert.
Das **`Storage`**-Interface der [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet Zugriff auf den Sitzungs- oder lokalen Speicher einer bestimmten Domain.

Existiert kein Element, das dem angegebenen Schlüssel zugeordnet ist, unternimmt diese Methode nichts.

## Syntax

```js-nolint
removeItem(keyName)
```

### Parameter

- `keyName`
  - : Ein String, der den Namen des Schlüssels enthält, den Sie entfernen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Die folgende Funktion erstellt drei Datenelemente im lokalen Speicher und entfernt dann das `image`-Datenelement.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");

  localStorage.removeItem("image");
}
```

Wir können dasselbe für den Sitzungsspeicher tun.

```js
function populateStorage() {
  sessionStorage.setItem("bgcolor", "red");
  sessionStorage.setItem("font", "Helvetica");
  sessionStorage.setItem("image", "myCat.png");

  sessionStorage.removeItem("image");
}
```

> [!NOTE]
> Um dies in einem Beispiel aus der realen Welt zu sehen, lesen Sie unser [Web Storage-Demo](https://mdn.github.io/dom-examples/web-storage/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
