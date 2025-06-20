---
title: Intl.Collator.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.Collator")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `Collator`-Objekts berechneten Optionen widerspiegeln.

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

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `Collator`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgeführt sind:

- `locale`
  - : Der BCP 47-Sprachcode für das tatsächlich verwendete Gebietsschema, bestimmt durch den [Sprachverhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die Unicode-Erweiterungsschlüssel `co`, `kn` und `kf`, falls angefordert und unterstützt, können in der Ausgabe enthalten sein.
- `usage`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, wobei der Standardwert bei Bedarf ausgefüllt wird. Es ist entweder `"sort"` oder `"search"`. Der Standardwert ist `"sort"`.
- `sensitivity`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, wobei der Standardwert bei Bedarf ausgefüllt wird. Es ist entweder `"base"`, `"accent"`, `"case"` oder `"variant"`. Der Standardwert ist `"variant"` für `"sort"`; es ist für `"search"` gebietsabhängig.
- `ignorePunctuation`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, wobei der Standardwert bei Bedarf ausgefüllt wird. Es ist ein Boolescher Wert. Der Standardwert ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.
- `collation`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt oder mithilfe des Unicode-Erweiterungsschlüssels `"co"` festgelegt wurde, wobei der Standardwert bei Bedarf ausgefüllt wird. Es ist ein unterstützter [Sortiertyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) für dieses Gebietsschema. Der Standardwert ist `"default"`.
- `numeric`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt oder mithilfe des Unicode-Erweiterungsschlüssels `"kn"` festgelegt wurde, wobei der Standardwert bei Bedarf ausgefüllt wird. Es ist ein Boolescher Wert. Der Standardwert ist `false`. Wenn die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft weggelassen.
- `caseFirst`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt oder mithilfe des Unicode-Erweiterungsschlüssels `"kf"` festgelegt wurde, wobei der Standardwert bei Bedarf ausgefüllt wird. Es ist entweder `"upper"`, `"lower"` oder `"false"`. Der Standardwert ist `"false"`. Wenn die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft weggelassen.

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
