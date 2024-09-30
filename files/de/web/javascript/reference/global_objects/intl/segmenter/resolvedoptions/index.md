---
title: Intl.Segmenter.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
l10n:
  sourceCommit: 643fa96e963ecaf2959cca5ddb573751a3efafac
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von Instanzen von {{jsxref("Intl.Segmenter")}} gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `Segmenter`-Objekts berechneten Optionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-segmenter-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `Segmenter`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Der BCP 47-Sprachcode für die tatsächlich verwendete Sprache, bestimmt durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Es wird kein Unicode-Erweiterungsschlüssel im Ergebnis enthalten sein.
- `granularity`
  - : Der in den `options`-Argument angegebene Wert für diese Eigenschaft, bei Bedarf mit Standardwerten ausgefüllt. Es ist entweder `"grapheme"`, `"word"` oder `"sentence"`. Der Standardwert ist `"grapheme"`.

## Beispiele

### Grundlegende Verwendung

```js
const spanishSegmenter = new Intl.Segmenter("es", { granularity: "sentence" });
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "sentence"
```

### Standard Granularität

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
