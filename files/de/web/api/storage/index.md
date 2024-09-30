---
title: Storage
slug: Web/API/Storage
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Storage API")}}

Das **`Storage`** Interface der [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet Zugriff auf den Sitzungs- oder lokalen Speicher einer bestimmten Domäne. Es ermöglicht beispielsweise das Hinzufügen, Ändern oder Löschen gespeicherter Datenelemente.

Um zum Beispiel den Sitzungspeicher einer Domäne zu manipulieren, wird ein Aufruf an [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage) gemacht; während für den lokalen Speicher der Aufruf an [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) erfolgt.

## Instanzeigenschaften

- [`Storage.length`](/de/docs/Web/API/Storage/length) {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der im `Storage` Objekt gespeicherten Datenelemente darstellt.

## Instanzmethoden

- [`Storage.key()`](/de/docs/Web/API/Storage/key)
  - : Wenn eine Nummer `n` übergeben wird, gibt diese Methode den Namen des n-ten Schlüssels im Speicher zurück.
- [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem)
  - : Wenn ein Schlüsselname übergeben wird, wird der Wert dieses Schlüssels zurückgegeben.
- [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem)
  - : Wenn ein Schlüsselname und ein Wert übergeben werden, wird dieser Schlüssel dem Speicher hinzugefügt oder der Wert des Schlüssels aktualisiert, falls er bereits existiert.
- [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem)
  - : Wenn ein Schlüsselname übergeben wird, wird dieser Schlüssel aus dem Speicher entfernt.
- [`Storage.clear()`](/de/docs/Web/API/Storage/clear)
  - : Beim Aufruf werden alle Schlüssel aus dem Speicher gelöscht.

## Beispiele

Hier greifen wir auf ein `Storage` Objekt durch den Aufruf von `localStorage` zu. Zunächst überprüfen wir, ob der lokale Speicher Datenelemente enthält, indem wir `!localStorage.getItem('bgcolor')` verwenden. Wenn dieser der Fall ist, führen wir eine Funktion namens `setStyles()` aus, die die Datenelemente mit [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) abruft und diese Werte verwendet, um die Seitenstile zu aktualisieren. Falls nicht, führen wir eine andere Funktion, `populateStorage()`, aus, die [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) verwendet, um die Elementwerte festzulegen, und dann `setStyles()` ausführt.

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}

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
> Um dies als vollständiges funktionierendes Beispiel zu sehen, besuchen Sie unser [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [`Window.localStorage`](/de/docs/Web/API/Window/localStorage)
- [`Window.sessionStorage`](/de/docs/Web/API/Window/sessionStorage)
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
