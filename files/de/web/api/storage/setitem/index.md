---
title: "Storage: setItem() Methode"
short-title: setItem()
slug: Web/API/Storage/setItem
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Storage API")}}

Die **`setItem()`**-Methode der [`Storage`](/de/docs/Web/API/Storage)-Schnittstelle fügt, wenn ein Schlüsselname und ein Wert übergeben werden, diesen Schlüssel dem gegebenen `Storage`-Objekt hinzu oder aktualisiert den Wert des Schlüssels, falls er bereits existiert.

## Syntax

```js-nolint
setItem(keyName, keyValue)
```

### Parameter

- `keyName`
  - : Ein String, der den Namen des Schlüssels enthält, den Sie erstellen/aktualisieren möchten.
- `keyValue`
  - : Ein String, der den Wert enthält, den Sie dem Schlüssel geben möchten, den Sie erstellen/aktualisieren.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Speicherplatz erschöpft ist oder der Benutzer es abgelehnt hat, Ihnen mehr Speicherplatz zu gewähren.

## Beispiele

Die folgende Funktion erstellt drei Dateneinträge im lokalen Speicher.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");
}
```

> [!NOTE]
> Um dies in einem realen Beispiel zu sehen, sehen Sie sich unser [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/) an.

`Storage` unterstützt nur das Speichern und Abrufen von Strings. Wenn Sie andere Datentypen speichern möchten, müssen Sie diese in Strings umwandeln. Für einfache Objekte und Arrays können Sie {{jsxref("JSON.stringify()")}} verwenden.

```js
const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }
```

Es gibt jedoch keine generische Methode, um beliebige Datentypen zu speichern. Außerdem ist das abgerufene Objekt eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) des Originalobjekts, und Änderungen daran wirken sich nicht auf das Originalobjekt aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Storage.getItem()](/de/docs/Web/API/Storage/getItem)
- [Storage.removeItem()](/de/docs/Web/API/Storage/removeItem)
- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
