---
title: "RangeError: form muss einer von 'NFC', 'NFD', 'NFKC' oder 'NFKD' sein"
slug: Web/JavaScript/Reference/Errors/Form_must_be_one_of
l10n:
  sourceCommit: f8d33c90138ac3f3703f9339ef03372977458475
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "form muss einer von 'NFC', 'NFD', 'NFKC' oder 'NFKD' sein" tritt auf, wenn eine nicht erkannte Zeichenkette an die Methode {{jsxref("String.prototype.normalize()")}} übergeben wird.

## Nachricht

```plain
RangeError: The normalization form should be one of NFC, NFD, NFKC, NFKD. (V8-based)
RangeError: form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD' (Firefox)
RangeError: argument does not match any normalization form (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}

## Was ging schief?

Die Methode {{jsxref("String.prototype.normalize()")}} akzeptiert nur die folgenden vier Werte als ihr `form`-Argument: `"NFC"`, `"NFD"`, `"NFKC"`, oder `"NFKD"`. Wenn Sie einen anderen Wert übergeben, wird ein Fehler ausgelöst. Lesen Sie die Referenz von `normalize()`, um mehr über die verschiedenen Normalisierungsformen zu erfahren.

## Beispiele

### Ungültige Fälle

```js example-bad
"foo".normalize("nfc"); // RangeError
"foo".normalize(" NFC "); // RangeError
```

### Gültige Fälle

```js example-good
"foo".normalize("NFC"); // 'foo'
```

## Siehe auch

- {{jsxref("String.prototype.normalize()")}}
