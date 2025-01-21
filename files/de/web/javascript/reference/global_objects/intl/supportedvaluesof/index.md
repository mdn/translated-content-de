---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die statische Methode **`Intl.supportedValuesOf()`** gibt ein Array zurück, das die unterstützten Kalender-, Kollations-, Währungs-, Nummerierungssysteme- oder Einheit-Werte enthält, die von der Implementierung unterstützt werden.

Duplikate werden ausgelassen und das Array wird in aufsteigender lexikographischer Reihenfolge sortiert (oder genauer gesagt, mit {{jsxref("Array/sort", "Array.prototype.sort()")}} mit einer `undefined` Vergleichsfunktion).

Die Methode kann verwendet werden, um zu testen, ob Werte in einer bestimmten Implementierung unterstützt werden, und ein Polyfill nur dann herunterzuladen, wenn es notwendig ist. Sie kann auch verwendet werden, um Benutzeroberflächen zu erstellen, die es Nutzern ermöglichen, ihre bevorzugten lokalisierten Werte auszuwählen, insbesondere wenn die Benutzeroberfläche von WebGL oder serverseitig erstellt wird.

{{EmbedInteractiveExample("pages/js/intl-supportedvaluesof.html", "taller")}}

## Syntax

```js-nolint
Intl.supportedValuesOf(key)
```

### Parameter

- `key`
  - : Ein Schlüssel-String, der die Kategorie der zurückzugebenden Werte angibt. Dies ist einer von: `"calendar"`, `"collation"`, `"currency"`, `"numberingSystem"`, `"timeZone"`, `"unit"`.

### Rückgabewert

Ein sortiertes Array eindeutiger Zeichenfolgen, das die von der Implementierung für den angegebenen Schlüssel unterstützten Werte angibt.

> [!NOTE]
> Die Standardisierung von `Temporal` erfordert, dass Browser immer den primären Bezeichner in der IANA-Datenbank zurückgeben, der sich im Laufe der Zeit ändern kann. Weitere Informationen finden Sie unter [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ein nicht unterstützter Schlüssel als Parameter übergeben wurde.

## Beispiele

### Feature-Testing

Sie können überprüfen, ob die Methode unterstützt wird, indem Sie mit `undefined` vergleichen:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // method is supported
}
```

### Alle Werte für einen Schlüssel erhalten

Um die unterstützten Werte für einen Kalender zu erhalten, rufen Sie die Methode mit dem Schlüssel `"calendar"` auf. Sie können dann das zurückgegebene Array wie unten gezeigt durchlaufen:

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

> [!NOTE]
> Das für Kalenderwerte zurückgegebene Array wird immer den Wert "gregory" (gregorianisch) enthalten.

Die anderen Werte werden auf dieselbe Weise erhalten:

```js
Intl.supportedValuesOf("collation").forEach((collation) => {
  // "compat", "dict", "emoji", etc.
});

Intl.supportedValuesOf("currency").forEach((currency) => {
  // "ADP", "AED", "AFA", "AFN", "ALK", "ALL", "AMD", etc.
});

Intl.supportedValuesOf("numberingSystem").forEach((numberingSystem) => {
  // "adlm", "ahom", "arab", "arabext", "bali", etc.
});

Intl.supportedValuesOf("timeZone").forEach((timeZone) => {
  // "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", etc.
});

Intl.supportedValuesOf("unit").forEach((unit) => {
  // "acre", "bit", "byte", "celsius", "centimeter", etc.
});
```

### Ungültiger Schlüssel wirft RangeError

```js
try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  //Error: RangeError: invalid key: "someInvalidKey"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.supportedValuesOf` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-supportedvaluesof/)
- {{jsxref("Intl")}}
