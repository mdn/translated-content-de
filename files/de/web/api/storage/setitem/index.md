---
title: "Storage: setItem() Methode"
short-title: setItem()
slug: Web/API/Storage/setItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Web Storage API")}}

Die **`setItem()`** Methode der [`Storage`](/de/docs/Web/API/Storage)
Schnittstelle, fügt einen Schlüssel zu dem angegebenen `Storage`-Objekt hinzu, wenn ihr ein Schlüsselname und ein Wert übergeben werden, oder aktualisiert den Wert dieses Schlüssels, falls er bereits existiert.

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

- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird ausgelöst, wenn der Speicherplatz erschöpft ist oder der Benutzer Ihnen nicht mehr Speicherplatz gewährt hat.

## Beispiele

Die folgende Funktion erstellt drei Datenobjekte im lokalen Speicher.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");
}
```

> [!NOTE]
> Um dies in einem realen Beispiel zu sehen, besuchen Sie unser [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

`Storage` unterstützt nur das Speichern und Abrufen von Strings. Wenn Sie andere Datentypen speichern möchten, müssen Sie diese in Strings umwandeln. Für einfache Objekte und Arrays können Sie {{jsxref("JSON.stringify()")}} verwenden.

```js
const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }
```

Es gibt jedoch keinen generischen Weg, um beliebige Datentypen zu speichern. Zudem ist das abgerufene Objekt eine {{Glossary("Deep_copy", "Tiefenkopie")}} des ursprünglichen Objekts und Änderungen daran wirken sich nicht auf das ursprüngliche Objekt aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Storage.getItem()](/de/docs/Web/API/Storage/getItem)
- [Storage.removeItem()](/de/docs/Web/API/Storage/removeItem)
- [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
