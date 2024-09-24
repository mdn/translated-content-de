---
title: Intl.Segmenter.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
l10n:
  sourceCommit: 3ed94a520e98ab711f5b808d14ae1dbd9033eda0
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von Instanzen des {{jsxref("Intl.Segmenter")}} gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `Intl.Segmenter`-Objekts berechneten Lokalisierungs- und Granularitätsoptionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-segmenter-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung des gegebenen [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)-Objekts berechneten Lokalisierungs- und Sortieroptionen widerspiegeln.

## Beschreibung

Das resultierende Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Das BCP-47-Sprach-Tag für die tatsächlich verwendete Lokalisierung. Wenn in dem Eingabe-BCP-47-Sprach-Tag, das zu dieser Lokalisierung führte, Unicode-Erweiterungswerte angefordert wurden, sind die angeforderten und unterstützten Schlüssel-Wert-Paare für diese Lokalisierung in `locale` enthalten.
- `granularity`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert oder der als Standardwert eingetragene.

## Beispiele

### Grundlegende Verwendung

```js
const spanishSegmenter = new Intl.Segmenter("es", { granularity: "sentence" });
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "sentence"
```

### Standardgranularität

```js
const spanishSegmenter = new Intl.Segmenter("es");
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "grapheme"
```

### Fallback-Lokalisierung

```js
const banSegmenter = new Intl.Segmenter("ban");
const options = banSegmenter.resolvedOptions();
console.log(options.locale);
// "fr" in einer Laufzeitumgebung, in der die balinesische Lokalisierung
// nicht unterstützt wird und Französisch die Standardlokalisierung ist
console.log(options.granularity); // "grapheme"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
