---
title: Intl.Collator.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
l10n:
  sourceCommit: 643fa96e963ecaf2959cca5ddb573751a3efafac
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.Collator")}} Instanzen gibt ein neues Objekt zurück, dessen Eigenschaften die während der Initialisierung dieses `Collator`-Objekts berechneten Optionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `Collator`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Der BCP 47-Sprachcode für das tatsächlich verwendete Gebietsschema, bestimmt durch den [Sprachverhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die Unicode-Erweiterungsschlüssel `co`, `kn` und `kf`, wenn angefordert und unterstützt, können in der Ausgabe enthalten sein.
- `usage`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wird, wobei Standardwerte bei Bedarf ergänzt werden. Er ist entweder `"sort"` oder `"search"`. Der Standardwert ist `"sort"`.
- `sensitivity`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wird, wobei Standardwerte bei Bedarf ergänzt werden. Er ist entweder `"base"`, `"accent"`, `"case"` oder `"variant"`. Der Standardwert ist `"variant"` für die Verwendung `"sort"`; es ist vom Gebietsschema abhängig für die Verwendung `"search"`.
- `ignorePunctuation`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wird, wobei Standardwerte bei Bedarf ergänzt werden. Es ist ein boolean. Der Standardwert ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.
- `collation`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wird, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"co"`, wobei Standardwerte bei Bedarf ergänzt werden. Es ist ein unterstützter [Kollationstyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations#supported_collation_types) für dieses Gebietsschema. Der Standardwert ist `"default"`.
- `numeric`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wird, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"kn"`, wobei Standardwerte bei Bedarf ergänzt werden. Es ist ein boolean. Der Standardwert ist `false`. Wenn die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft ausgelassen.
- `caseFirst`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wird, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"kf"`, wobei Standardwerte bei Bedarf ergänzt werden. Er ist entweder `"upper"`, `"lower"` oder `"false"`. Der Standardwert ist `"false"`. Wenn die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft ausgelassen.

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
