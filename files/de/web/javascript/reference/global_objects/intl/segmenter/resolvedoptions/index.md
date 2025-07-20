---
title: Intl.Segmenter.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.Segmenter")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `Segmenter`-Objekts berechneten Optionen widerspiegeln.

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

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `Segmenter`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Der BCP 47-Sprachcode für die tatsächlich verwendete Locale, bestimmt durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Kein Unicode-Erweiterungsschlüssel wird in der Ausgabe enthalten sein.
- `granularity`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert, mit standardmäßigen Fallbacks nach Bedarf. Es ist entweder `"grapheme"`, `"word"` oder `"sentence"`. Der Standardwert ist `"grapheme"`.

## Beispiele

### Grundlegende Verwendung

```js
const spanishSegmenter = new Intl.Segmenter("es", { granularity: "sentence" });
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "sentence"
```

### Standardmäßige Granularität

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
