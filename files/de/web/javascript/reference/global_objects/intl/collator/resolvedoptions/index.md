---
title: Intl.Collator.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von Instanzen des {{jsxref("Intl.Collator")}} gibt ein neues Objekt zurück, das die während der Initialisierung dieses `Collator`-Objekts berechneten Optionen widerspiegelt.

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

Ein neues Objekt, das die während der Initialisierung dieses `Collator`-Objekts berechneten Optionen widerspiegelt. Das Objekt hat folgende Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Das BCP 47 Sprach-Tag für die tatsächlich verwendete Locale, bestimmt durch den [Sprachvarianten-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die `co`, `kn` und `kf` Unicode-Erweiterungsschlüssel, falls angefordert und unterstützt, können im Ausgabe enthalten sein.
- `usage`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert, mit dem Standardwert ausgefüllt, falls erforderlich. Es ist entweder `"sort"` oder `"search"`. Der Standardwert ist `"sort"`.
- `sensitivity`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert, mit dem Standardwert ausgefüllt, falls erforderlich. Es ist entweder `"base"`, `"accent"`, `"case"` oder `"variant"`. Der Standardwert ist `"variant"` für die Nutzung `"sort"`; es ist lokalabhängig für die Nutzung `"search"`.
- `ignorePunctuation`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert, mit dem Standardwert ausgefüllt, falls erforderlich. Es ist ein boolescher Wert. Der Standardwert ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.
- `collation`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert oder unter Verwendung des Unicode-Erweiterungsschlüssels `"co"`, mit dem Standardwert ausgefüllt, falls erforderlich. Es ist ein unterstützter [Kollationstyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) für diese Locale. Der Standardwert ist `"default"`.
- `numeric`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert oder unter Verwendung des Unicode-Erweiterungsschlüssels `"kn"`, mit dem Standardwert ausgefüllt, falls erforderlich. Es ist ein boolescher Wert. Der Standardwert ist `false`. Falls die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft ausgelassen.
- `caseFirst`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert oder unter Verwendung des Unicode-Erweiterungsschlüssels `"kf"`, mit dem Standardwert ausgefüllt, falls erforderlich. Es ist entweder `"upper"`, `"lower"` oder `"false"`. Der Standardwert ist `"false"`. Falls die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft ausgelassen.

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
