---
title: Intl.Segmenter.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von Instanzen des {{jsxref("Intl.Segmenter")}} gibt ein neues Objekt zurück, das die Optionen widerspiegelt, die bei der Initialisierung dieses `Segmenter`-Objekts berechnet wurden.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter.prototype.resolvedOptions()")}}

```js interactive-example
const segmenter1 = new Intl.Segmenter("fr-FR");
const options1 = segmenter1.resolvedOptions();

console.log(options1.locale);
// Expected output: "fr-FR"

console.log(options1.granularity);
// Expected output: "grapheme"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die bei der Initialisierung dieses `Segmenter`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge ihrer Auflistung:

- `locale`
  - : Das BCP 47-Sprach-Tag für das tatsächlich verwendete Locale, bestimmt durch den [Locale-Verhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Kein Unicode-Erweiterungsschlüssel wird in der Ausgabe enthalten sein.
- `granularity`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde, wobei Standards nach Bedarf ausgefüllt werden. Es ist entweder `"grapheme"`, `"word"` oder `"sentence"`. Der Standardwert ist `"grapheme"`.

## Beispiele

### Grundlegende Nutzung

```js
const spanishSegmenter = new Intl.Segmenter("es", { granularity: "sentence" });
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "sentence"
```

### Standard-Granularität

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
