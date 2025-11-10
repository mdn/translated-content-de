---
title: Intl.Collator.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.Collator")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die beim Initialisieren dieses `Collator` Objekts berechneten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.Collator.prototype.resolvedOptions()")}}

```js interactive-example
const numberDe = new Intl.NumberFormat("de-DE");
const numberAr = new Intl.NumberFormat("ar");

console.log(numberDe.resolvedOptions().numberingSystem);
// Expected output: "latn"

console.log(numberAr.resolvedOptions().numberingSystem);
// Expected output: "arab"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die beim Initialisieren dieses `Collator` Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Das {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} für die tatsächlich verwendete Sprache, bestimmt durch den Prozess der [Sprachidentifikation und -verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die `co`, `kn` und `kf` Unicode-Erweiterungsschlüssel können, wenn angefordert und unterstützt, in der Ausgabe enthalten sein.
- `usage`
  - : Der für diese Eigenschaft im `options` Argument angegebene Wert, mit Standardwerten ergänzt, falls erforderlich. Er ist entweder `"sort"` oder `"search"`. Der Standardwert ist `"sort"`.
- `sensitivity`
  - : Der für diese Eigenschaft im `options` Argument angegebene Wert, mit Standardwerten ergänzt, falls erforderlich. Er ist entweder `"base"`, `"accent"`, `"case"` oder `"variant"`. Der Standardwert ist `"variant"` bei Verwendung `"sort"`; er ist sprachabhängig bei Verwendung `"search"`.
- `ignorePunctuation`
  - : Der für diese Eigenschaft im `options` Argument angegebene Wert, mit Standardwerten ergänzt, falls erforderlich. Es ist ein boolescher Wert. Der Standardwert ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.
- `collation`
  - : Der für diese Eigenschaft im `options` Argument angegebene Wert oder unter Nutzung des Unicode-Erweiterungsschlüssels `"co"`, mit Standardwerten ergänzt, falls erforderlich. Es ist ein unterstützter [Kollationstyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) für diese Sprache. Der Standardwert ist `"default"`.
- `numeric`
  - : Der für diese Eigenschaft im `options` Argument angegebene Wert oder unter Nutzung des Unicode-Erweiterungsschlüssels `"kn"`, mit Standardwerten ergänzt, falls erforderlich. Es ist ein boolescher Wert. Der Standardwert ist `false`. Wenn die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft weggelassen.
- `caseFirst`
  - : Der für diese Eigenschaft im `options` Argument angegebene Wert oder unter Nutzung des Unicode-Erweiterungsschlüssels `"kf"`, mit Standardwerten ergänzt, falls erforderlich. Es ist entweder `"upper"`, `"lower"` oder `"false"`. Der Standardwert ist `"false"`. Wenn die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft weggelassen.

## Beispiele

### Verwendung der Methode resolvedOptions

```js
const de = new Intl.Collator("de", { sensitivity: "base" });
const usedOptions = de.resolvedOptions();

usedOptions.locale; // "de"
usedOptions.usage; // "sort"
usedOptions.sensitivity; // "base"
usedOptions.ignorePunctuation; // false
usedOptions.collation; // "default"
usedOptions.numeric; // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
