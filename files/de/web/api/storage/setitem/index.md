---
title: "Storage: setItem()-Methode"
short-title: setItem()
slug: Web/API/Storage/setItem
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Storage API")}}

Die **`setItem()`**-Methode des [`Storage`](/de/docs/Web/API/Storage)-Interfaces fügt, wenn sie mit einem Schlüsselname und einem Wert aufgerufen wird, diesen Schlüssel dem angegebenen `Storage`-Objekt hinzu oder aktualisiert den Wert des Schlüssels, falls er bereits existiert.

## Syntax

```js-nolint
setItem(keyName, keyValue)
```

### Parameter

- `keyName`
  - : Ein String, der den Namen des Schlüssels enthält, den Sie erstellen/aktualisieren möchten.
- `keyValue`
  - : Ein String, der den Wert enthält, den Sie dem zu erstellenden/aktualisierenden Schlüssel zuweisen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Speicher das Speicherkontingent überschreitet oder der Benutzer Ihnen nicht mehr Speicherplatz gewähren möchte.

## Beispiele

Die folgende Funktion erstellt drei Datenelemente im lokalen Speicher.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");
}
```

> [!NOTE]
> Um dies in einem realen Beispiel zu sehen, schauen Sie sich unser [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/) an.

`Storage` unterstützt nur das Speichern und Abrufen von Strings. Wenn Sie andere Datentypen speichern möchten, müssen Sie diese in Strings umwandeln. Für einfache Objekte und Arrays können Sie {{jsxref("JSON.stringify()")}} verwenden.

```js
const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }
```

Es gibt jedoch keinen generischen Weg, um beliebige Datentypen zu speichern. Außerdem ist das zurückgegebene Objekt eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) des ursprünglichen Objekts, und Änderungen daran wirken sich nicht auf das ursprüngliche Objekt aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Storage.getItem()](/de/docs/Web/API/Storage/getItem)
- [Storage.removeItem()](/de/docs/Web/API/Storage/removeItem)
- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
