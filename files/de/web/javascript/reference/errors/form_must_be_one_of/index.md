---
title: "RangeError: form muss einer von 'NFC', 'NFD', 'NFKC' oder 'NFKD' sein"
slug: Web/JavaScript/Reference/Errors/Form_must_be_one_of
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "form muss einer von 'NFC', 'NFD', 'NFKC' oder 'NFKD' sein" tritt auf, wenn ein nicht erkannter String an die Methode {{jsxref("String.prototype.normalize()")}} übergeben wird.

## Meldung

```plain
RangeError: The normalization form should be one of NFC, NFD, NFKC, NFKD. (V8-based)
RangeError: form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD' (Firefox)
RangeError: argument does not match any normalization form (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Die Methode {{jsxref("String.prototype.normalize()")}} akzeptiert nur die folgenden vier Werte als `form`-Argument: `"NFC"`, `"NFD"`, `"NFKC"` oder `"NFKD"`. Wenn ein anderer Wert übergeben wird, wird ein Fehler ausgelöst. Lesen Sie die Referenz von `normalize()`, um mehr über die verschiedenen Normalisierungsformen zu erfahren.

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
