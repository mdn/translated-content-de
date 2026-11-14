---
title: Intl.Collator.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.Collator")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die bei der Initialisierung dieses `Collator`-Objekts ermittelten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.Collator.prototype.resolvedOptions()")}}

```js interactive-example
const collator = new Intl.Collator("de-DE", { sensitivity: "base" });
const options = collator.resolvedOptions();

console.log(options.sensitivity);
// Expected output: "base"

console.log(options.usage);
// Expected output: "sort"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die bei der Initialisierung dieses `Collator`-Objekts ermittelten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der aufgeführten Reihenfolge:

- `locale`
  - : Das {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tag")}} für die tatsächlich verwendete Locale, die durch den Prozess der [Locale-Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) bestimmt wird. In der Ausgabe können nur die Unicode-Erweiterungsschlüssel `co`, `kn` und `kf` enthalten sein, sofern sie angefordert wurden und unterstützt werden.
- `usage`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, bei Bedarf ergänzt um den Standardwert. Er ist entweder `"sort"` oder `"search"`. Der Standardwert ist `"sort"`.
- `sensitivity`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, bei Bedarf ergänzt um den Standardwert. Er ist entweder `"base"`, `"accent"`, `"case"` oder `"variant"`. Für `usage` mit dem Wert `"sort"` ist der Standardwert `"variant"`; für `"search"` hängt er von der Locale ab.
- `ignorePunctuation`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, bei Bedarf ergänzt um den Standardwert. Es handelt sich um einen booleschen Wert. Der Standardwert ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.
- `collation`
  - : Der für diese Eigenschaft im Argument `options` oder über den Unicode-Erweiterungsschlüssel `"co"` angegebene Wert, bei Bedarf ergänzt um den Standardwert. Es handelt sich um einen für diese Locale unterstützten [Kollationstyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types). Der Standardwert ist `"default"`.
- `numeric`
  - : Der für diese Eigenschaft im Argument `options` oder über den Unicode-Erweiterungsschlüssel `"kn"` angegebene Wert, bei Bedarf ergänzt um den Standardwert. Es handelt sich um einen booleschen Wert. Der Standardwert ist `false`. Wenn die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft weggelassen.
- `caseFirst`
  - : Der für diese Eigenschaft im Argument `options` oder über den Unicode-Erweiterungsschlüssel `"kf"` angegebene Wert, bei Bedarf ergänzt um den Standardwert. Er ist entweder `"upper"`, `"lower"` oder `"false"`. Der Standardwert ist `"false"`. Wenn die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft weggelassen.

## Beispiele

### Die Methode resolvedOptions verwenden

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
