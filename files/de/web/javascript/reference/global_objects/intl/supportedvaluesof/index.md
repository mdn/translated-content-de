---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Intl.supportedValuesOf()`** gibt ein Array zurück, das die von der Implementierung unterstützten Werte für Kalender, Kollation, Währungen, Zahlensysteme oder Einheiten enthält.

Duplikate werden weggelassen und das Array wird in aufsteigender lexikografischer Reihenfolge sortiert (oder präziser gesagt, unter Verwendung von {{jsxref("Array/sort", "Array.prototype.sort()")}} mit einer `undefined` Vergleichsfunktion).

Die Methode kann verwendet werden, um zu testen, ob Werte in einer bestimmten Implementierung unterstützt werden, und um nur bei Bedarf ein Polyfill herunterzuladen. Sie kann auch verwendet werden, um Benutzeroberflächen zu erstellen, die es den Nutzern ermöglichen, ihre bevorzugten lokalen Werte auszuwählen, beispielsweise wenn die Benutzeroberfläche von WebGL oder serverseitig erstellt wird.

{{EmbedInteractiveExample("pages/js/intl-supportedvaluesof.html", "taller")}}

## Syntax

```js-nolint
Intl.supportedValuesOf(key)
```

### Parameter

- `key`
  - : Ein Schlüsselstring, der die Kategorie der zurückzugebenden Werte angibt. Dies ist einer von: `"calendar"`, `"collation"`, `"currency"`, `"numberingSystem"`, `"timeZone"`, `"unit"`.

### Rückgabewert

Ein sortiertes Array von eindeutigen Stringwerten, das die von der Implementierung für den gegebenen Schlüssel unterstützten Werte angibt.

> [!NOTE]
> Während sich die IANA-Datenbank von Zeit zu Zeit ändert, behält die Unicode CLDR-Datenbank (die von Browsern verwendet wird) alte Zeitzonennamen zu Stabilitätszwecken bei. Einige Browser verwenden möglicherweise den alten Namen, während andere ihn mit dem neuen Namen überschreiben. Siehe {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones")}} für mehr Informationen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ein nicht unterstützter Schlüssel als Parameter übergeben wurde.

## Beispiele

### Feature-Testing

Sie können überprüfen, ob die Methode unterstützt wird, indem Sie sie mit `undefined` vergleichen:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // Methode wird unterstützt
}
```

### Alle Werte für einen Schlüssel abrufen

Um die unterstützten Werte für Kalender zu erhalten, rufen Sie die Methode mit dem Schlüssel `"calendar"` auf. Sie können dann durch das zurückgegebene Array iterieren, wie im Folgenden gezeigt:

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

> [!NOTE]
> Das für Kalenderwerte zurückgegebene Array wird immer den Wert "gregory" (gregorianisch) enthalten.

Die anderen Werte werden auf die gleiche Weise abgerufen:

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

### Ungültiger Schlüssel löst RangeError aus

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

- [Polyfill von `Intl.supportedValuesOf` in FormatJS](https://github.com/formatjs/formatjs/tree/main/packages/intl-enumerator)
- {{jsxref("Intl")}}
