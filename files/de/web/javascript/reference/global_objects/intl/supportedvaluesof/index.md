---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: c420b9b3126451f53d112afe33e007d6efdb605d
---

{{JSRef}}

Die statische Methode **`Intl.supportedValuesOf()`** gibt ein Array zurück, das die unterstützten Kalender-, Kollations-, Währungs- und Nummerierungssystem- oder Einheit-Werte enthält, die von der Implementierung unterstützt werden.

Doppelte Werte werden ausgelassen, und das Array wird in aufsteigender lexikografischer Reihenfolge sortiert (oder genauer gesagt, unter Verwendung von {{jsxref("Array/sort", "Array.prototype.sort()")}} mit einer `undefined` Vergleichsfunktion).

Die Methode kann verwendet werden, um zu testen, ob Werte in einer bestimmten Implementierung unterstützt werden, und nur falls notwendig, ein Polyfill herunterzuladen.
Sie kann auch verwendet werden, um Benutzeroberflächen zu erstellen, die es Benutzern ermöglichen, ihre bevorzugten lokalisierten Werte auszuwählen, beispielsweise wenn die Benutzeroberfläche mit WebGL oder serverseitig erstellt wird.

{{EmbedInteractiveExample("pages/js/intl-supportedvaluesof.html", "taller")}}

## Syntax

```js-nolint
Intl.supportedValuesOf(key)
```

### Parameter

- `key`
  - : Ein Schlüssel-String, der die Kategorie der zurückzugebenden Werte angibt. Diese kann sein: `"calendar"`, `"collation"`, `"currency"`, `"numberingSystem"`, `"timeZone"`, `"unit"`.

### Rückgabewert

Ein sortiertes Array mit eindeutigen Zeichenkettenwerten, die die von der Implementierung für den angegebenen Schlüssel unterstützten Werte angeben.

> [!NOTE]
> Während sich die IANA-Datenbank von Zeit zu Zeit ändert, behält die Unicode CLDR-Datenbank (die von Browsern verwendet wird) ältere Zeitzonennamen aus Stabilitätsgründen bei. Einige Browser können den alten Namen verwenden, während andere ihn mit dem neuen Namen überschreiben. Weitere Informationen finden Sie unter {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ein nicht unterstützter Schlüssel als Parameter übergeben wurde.

## Beispiele

### Feature-Testen

Sie können überprüfen, ob die Methode unterstützt wird, indem Sie mit `undefined` vergleichen:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // method is supported
}
```

### Alle Werte für einen Schlüssel abrufen

Um die unterstützten Werte für Kalender zu erhalten, rufen Sie die Methode mit dem Schlüssel `"calendar"` auf.
Sie können dann durch das zurückgegebene Array iterieren, wie unten gezeigt:

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

> [!NOTE]
> Das für Kalenderwerte zurückgegebene Array wird immer den Wert "gregory" (gregorianisch) enthalten.

Die anderen Werte werden auf die gleiche Weise erhalten:

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

- [Polyfill von `Intl.supportedValuesOf` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-supportedvaluesof/)
- {{jsxref("Intl")}}
