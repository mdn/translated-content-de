---
title: Intl.Collator.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.Collator")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die Locale und die Kollationsoptionen widerspiegeln, die während der Initialisierung dieses Collator-Objekts berechnet wurden.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die Locale und die Kollationsoptionen widerspiegeln, die während der Initialisierung des gegebenen {{jsxref("Intl.Collator")}} Objekts berechnet wurden.

## Beschreibung

Das resultierende Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Der BCP 47-Sprachtag für die tatsächlich verwendete Locale. Wenn im Eingabe-BCP 47-Sprachtag Unicode-Erweiterungswerte angefordert wurden, die zu dieser Locale führten, sind die angeforderten und für diese Locale unterstützten Schlüssel-Wert-Paare in `locale` enthalten.
- `usage`, `sensitivity`, `ignorePunctuation`
  - : Die Werte, die für diese Eigenschaften im `options` Argument angegeben oder als Standardwerte ausgefüllt wurden.
- `collation`
  - : Der Wert, der mit dem Unicode-Erweiterungsschlüssel `"co"` angefordert wurde, wenn er für `locale` unterstützt wird, oder `"default"`.
- `numeric`, `caseFirst`
  - : Die Werte, die für diese Eigenschaften im `options` Argument oder mit den Unicode-Erweiterungsschlüsseln `"kn"` und `"kf"` angefordert oder als Standardwerte ausgefüllt wurden. Wenn die Implementierung diese Eigenschaften nicht unterstützt, werden sie weggelassen.

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
