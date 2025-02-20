---
title: Intl.Segmenter.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von Instanzen von {{jsxref("Intl.Segmenter")}} gibt ein neues Objekt zurück, das Eigenschaften enthält, die die während der Initialisierung dieses `Segmenter`-Objekts berechneten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter.prototype.resolvedOptions")}}

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

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `Segmenter`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Der BCP 47-Sprachcode für die tatsächlich verwendete Locale, ermittelt durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Es wird kein Unicode-Erweiterungsschlüssel in der Ausgabe enthalten sein.
- `granularity`
  - : Der Wert, der in den `options`-Argumenten für diese Eigenschaft angegeben wurde, mit standardmäßiger Auffüllung, falls erforderlich. Es ist entweder `"grapheme"`, `"word"` oder `"sentence"`. Der Standardwert ist `"grapheme"`.

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
