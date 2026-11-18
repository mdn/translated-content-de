---
title: Intl.Segmenter.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
l10n:
  sourceCommit: 42d98fed2b93ad7f7efd643a2965c61e913dbe06
---

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.Segmenter")}}-Instanzen gibt ein neues Objekt zurück, dessen Eigenschaften die bei der Initialisierung dieses `Segmenter`-Objekts ermittelten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter.prototype.resolvedOptions()")}}

```js interactive-example
const segmenter = new Intl.Segmenter("fr-FR");
const options = segmenter.resolvedOptions();

console.log(options.locale);
// Expected output: "fr-FR"

console.log(options.granularity);
// Expected output: "grapheme"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die anhand der an den Konstruktor [`Intl.Segmenter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter) übergebenen Argumente ermittelten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der aufgeführten Reihenfolge:

- `locale`
  - : Der {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tag")}} für die tatsächlich verwendete Locale, die durch den Prozess der [Locale-Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) bestimmt wird. Die Ausgabe enthält keinen Unicode-Erweiterungsschlüssel.
- `granularity`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Der Wert ist entweder `"grapheme"`, `"word"` oder `"sentence"`. Der Standardwert ist `"grapheme"`.

## Beispiele

### Grundlegende Verwendung

```js
const spanishSegmenter = new Intl.Segmenter("es", { granularity: "sentence" });
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "sentence"
```

### Standardwert für `granularity`

```js
const spanishSegmenter = new Intl.Segmenter("es");
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "grapheme"
```

### Fallback-Locale

```js
const banSegmenter = new Intl.Segmenter("ban");
const options = banSegmenter.resolvedOptions();
console.log(options.locale);
// "fr" on a runtime where the Balinese locale
// is not supported and French is the default locale
console.log(options.granularity); // "grapheme"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
