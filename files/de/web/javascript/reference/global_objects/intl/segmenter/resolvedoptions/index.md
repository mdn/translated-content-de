---
title: Intl.Segmenter.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
l10n:
  sourceCommit: 3ed94a520e98ab711f5b808d14ae1dbd9033eda0
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.Segmenter")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die Sprach- und Granularitätsoptionen widerspiegeln, die während der Initialisierung dieses `Intl.Segmenter` Objekts berechnet wurden.

{{EmbedInteractiveExample("pages/js/intl-segmenter-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die Sprach- und Sortieroptionen widerspiegeln, die
während der Initialisierung des gegebenen [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) Objekts berechnet wurden.

## Beschreibung

Das resultierende Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Der BCP 47 Sprach-Tag für die tatsächlich verwendete Sprache. Wenn im Eingabe-BCP 47 Sprach-Tag irgendwelche Unicode-Erweiterungswerte angefordert wurden, die zu dieser Sprache führten, sind die angeforderten und für diese Sprache unterstützten Schlüssel-Wert-Paare in `locale` enthalten.
- `granularity`
  - : Der Wert, der für diese Eigenschaft im `options` Argument bereitgestellt wurde, oder als Standardwert ausgefüllt wurde.

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

### Rückfall-Sprache

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
