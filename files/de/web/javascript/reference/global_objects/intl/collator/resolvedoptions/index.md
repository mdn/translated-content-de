---
title: Intl.Collator.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.Collator")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `Collator`-Objekts berechneten Optionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `Collator`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat folgende Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Das BCP 47 Sprach-Tag für die tatsächlich verwendete Sprache, bestimmt durch den [Sprachen-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die Unicode-Erweiterungsschlüssel `co`, `kn` und `kf`, wenn angefordert und unterstützt, können in der Ausgabe enthalten sein.
- `usage`
  - : Der in dem `options`-Argument angegebene Wert, mit standardmäßiger Auffüllung, falls notwendig. Er ist entweder `"sort"` oder `"search"`. Der Standardwert ist `"sort"`.
- `sensitivity`
  - : Der in dem `options`-Argument angegebene Wert, mit standardmäßiger Auffüllung, falls notwendig. Er ist entweder `"base"`, `"accent"`, `"case"` oder `"variant"`. Der Standardwert ist `"variant"` für die Verwendung `"sort"`; es ist von der Sprache abhängig für die Verwendung `"search"`.
- `ignorePunctuation`
  - : Der in dem `options`-Argument angegebene Wert, mit standardmäßiger Auffüllung, falls notwendig. Es ist ein boolean. Der Standardwert ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.
- `collation`
  - : Der in dem `options`-Argument angegebene Wert oder mit dem Unicode-Erweiterungsschlüssel `"co"`, mit standardmäßiger Auffüllung, falls notwendig. Es ist ein unterstützter [Kollationstyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) für diese Sprache. Der Standardwert ist `"default"`.
- `numeric`
  - : Der in dem `options`-Argument angegebene Wert oder mit dem Unicode-Erweiterungsschlüssel `"kn"`, mit standardmäßiger Auffüllung, falls notwendig. Es ist ein boolean. Der Standardwert ist `false`. Wenn die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft ausgelassen.
- `caseFirst`
  - : Der in dem `options`-Argument angegebene Wert oder mit dem Unicode-Erweiterungsschlüssel `"kf"`, mit standardmäßiger Auffüllung, falls notwendig. Es ist entweder `"upper"`, `"lower"` oder `"false"`. Der Standardwert ist `"false"`. Wenn die Implementierung diesen Unicode-Erweiterungsschlüssel nicht unterstützt, wird diese Eigenschaft ausgelassen.

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
