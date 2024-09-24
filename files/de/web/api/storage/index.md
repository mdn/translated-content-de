---
title: Speicher
slug: Web/API/Storage
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Storage API")}}

Das **`Storage`** Interface der [Web Storage API](/de/docs/Web/API/Web_Storage_API) ermöglicht den Zugriff auf den Sitzungs- oder lokalen Speicher einer bestimmten Domäne. Es erlaubt beispielsweise das Hinzufügen, Ändern oder Löschen von gespeicherten Datenobjekten.

Um den Sitzungsspeicher einer Domäne zu manipulieren, wird ein Aufruf an {{domxref("Window.sessionStorage")}} vorgenommen; für lokalen Speicher erfolgt der Aufruf an {{domxref("Window.localStorage")}}.

## Instanzeigenschaften

- {{domxref("Storage.length")}} {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der im `Storage` Objekt gespeicherten Datenobjekte darstellt.

## Instanzmethoden

- {{domxref("Storage.key()")}}
  - : Wenn eine Zahl `n` übergeben wird, gibt diese Methode den Namen des n-ten Schlüssels im Speicher zurück.
- {{domxref("Storage.getItem()")}}
  - : Wenn ein Schlüsselname übergeben wird, wird der Wert dieses Schlüssels zurückgegeben.
- {{domxref("Storage.setItem()")}}
  - : Wenn ein Schlüsselname und ein Wert übergeben werden, wird dieser Schlüssel dem Speicher hinzugefügt oder der Wert des Schlüssels aktualisiert, falls dieser bereits existiert.
- {{domxref("Storage.removeItem()")}}
  - : Bei übergebenem Schlüsselname wird dieser Schlüssel aus dem Speicher entfernt.
- {{domxref("Storage.clear()")}}
  - : Wenn aufgerufen, werden alle Schlüssel aus dem Speicher entfernt.

## Beispiele

Hier greifen wir auf ein `Storage` Objekt zu, indem wir `localStorage` aufrufen. Wir testen zunächst, ob der lokale Speicher Datenobjekte enthält, indem wir `!localStorage.getItem('bgcolor')` verwenden. Falls vorhanden, führen wir eine Funktion namens `setStyles()` aus, die die Datenobjekte mit {{domxref("Storage.getItem()")}} abruft und diese Werte verwendet, um die Seitenstile zu aktualisieren. Falls nicht, führen wir eine andere Funktion `populateStorage()` aus, die {{domxref("Storage.setItem()")}} verwendet, um die Elementwerte einzustellen und anschließend `setStyles()` ausführt.

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
> Um dies als vollständiges, funktionierendes Beispiel zu sehen, siehe unser [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
- {{domxref("Window.sessionStorage")}}
- {{domxref("CacheStorage")}}
