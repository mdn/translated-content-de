---
title: "Storage: getItem()-Methode"
short-title: getItem()
slug: Web/API/Storage/getItem
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Storage API")}}

Die **`getItem()`**-Methode des [`Storage`](/de/docs/Web/API/Storage)-Interfaces liefert, wenn sie mit einem Schlüsselnamen aufgerufen wird, den Wert dieses Schlüssels oder `null`, wenn der Schlüssel im angegebenen `Storage`-Objekt nicht existiert.

## Syntax

```js-nolint
getItem(keyName)
```

### Parameter

- `keyName`
  - : Ein String, der den Namen des Schlüssels enthält, dessen Wert Sie abrufen möchten.

### Rückgabewert

Ein String, der den Wert des Schlüssels enthält. Wenn der Schlüssel nicht existiert, wird `null` zurückgegeben.

## Beispiele

Die folgende Funktion ruft drei Datenobjekte aus dem lokalen Speicher ab und verwendet sie dann, um benutzerdefinierte Styles auf einer Seite festzulegen.

```js
function setStyles() {
  const currentColor = localStorage.getItem("bgcolor");
  const currentFont = localStorage.getItem("font");
  const currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = `#${currentColor}`;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

> [!NOTE]
> Um dies in einem realen Beispiel zu sehen, siehe unser [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Storage.setItem()](/de/docs/Web/API/Storage/setItem)
- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
