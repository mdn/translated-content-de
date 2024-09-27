---
title: Intl.Collator.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.Collator")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses Collator-Objekts berechneten Sprach- und Sortieroptionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung des gegebenen {{jsxref("Intl.Collator")}}-Objekts berechneten Sprach- und Sortieroptionen widerspiegeln.

## Beschreibung

Das resultierende Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Das BCP 47-Sprachtag für die tatsächlich verwendete Sprache. Wenn im Eingabe-BCP 47-Sprachtag angeforderte Unicode-Erweiterungswerte zu dieser Sprache führten, sind die angeforderten und für diese Sprache unterstützten Schlüssel-Wert-Paare in `locale` enthalten.
- `usage`, `sensitivity`, `ignorePunctuation`
  - : Die für diese Eigenschaften im `options`-Argument angegebenen oder als Standardwerte eingesetzten Werte.
- `collation`
  - : Der mit dem Unicode-Erweiterungsschlüssel `"co"` angeforderte Wert, sofern er für `locale` unterstützt wird, oder `"default"`.
- `numeric`, `caseFirst`
  - : Die für diese Eigenschaften im `options`-Argument oder mithilfe der Unicode-Erweiterungsschlüssel `"kn"` und `"kf"` angeforderten oder als Standardwerte eingesetzten Werte. Wenn die Implementierung diese Eigenschaften nicht unterstützt, werden sie weggelassen.

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
