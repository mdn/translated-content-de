---
title: Intl.Collator.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.Collator")}}-Instanzen gibt ein neues Objekt zurück, das Eigenschaften enthält, die die während der Initialisierung dieses `Collator`-Objekts errechneten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.Collator.prototype.resolvedOptions")}}

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

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `Collator`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Das BCP 47 Sprach-Tag für das tatsächlich verwendete Gebietsschema, das durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) bestimmt wurde. Nur die Unicode-Erweiterungsschlüssel `co`, `kn` und `kf` können, falls angefordert und unterstützt, in der Ausgabe enthalten sein.
- `usage`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert, mit ausgefülltem Standardwert, falls benötigt. Er ist entweder `"sort"` oder `"search"`. Der Standardwert ist `"sort"`.
- `sensitivity`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert, mit ausgefülltem Standardwert, falls benötigt. Es ist entweder `"base"`, `"accent"`, `"case"` oder `"variant"`. Der Standardwert ist `"variant"` für die Verwendung `"sort"`; er ist gebietsschemaabhängig für die Verwendung `"search"`.
- `ignorePunctuation`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert, mit ausgefülltem Standardwert, falls benötigt. Es ist ein boolean. Der Standardwert ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.
- `collation`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert, oder der über den Unicode-Erweiterungsschlüssel `"co"` angegebene Wert, mit ausgefülltem Standardwert, falls benötigt. Es ist ein unterstützter [Kollationstyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) für dieses Gebietsschema. Der Standardwert ist `"default"`.
- `numeric`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert, oder der über den Unicode-Erweiterungsschlüssel `"kn"` angegebene Wert, mit ausgefülltem Standardwert, falls benötigt. Es ist ein boolean. Der Standardwert ist `false`. Falls die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft weggelassen.
- `caseFirst`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert, oder der über den Unicode-Erweiterungsschlüssel `"kf"` angegebene Wert, mit ausgefülltem Standardwert, falls benötigt. Es ist entweder `"upper"`, `"lower"` oder `"false"`. Der Standardwert ist `"false"`. Falls die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft weggelassen.

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
