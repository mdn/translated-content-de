---
title: Intl.Segmenter.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.Segmenter")}} Instanzen gibt ein neues Objekt zurück, das die Optionen widerspiegelt, die während der Initialisierung dieses `Segmenter` Objekts berechnet wurden.

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
  - : Das {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} für die tatsächlich verwendete Sprache, bestimmt durch den [Sprachauswahlprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Es wird kein Unicode-Erweiterungsschlüssel im Ergebnis enthalten sein.
- `granularity`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit Standardwerten, soweit erforderlich. Es ist entweder `"grapheme"`, `"word"` oder `"sentence"`. Der Standardwert ist `"grapheme"`.

## Beispiele

### Grundlegende Nutzung

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

### Fallback-Sprache

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
