---
title: "CSSUnparsedValue: entries()-Methode"
short-title: entries()
slug: Web/API/CSSUnparsedValue/entries
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`entries()`**-Methode der Schnittstelle [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) gibt einen neuen _Array-Iterator_ zurück, der für jedes Element im Objekt `[index, value]`-Paare liefert.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

### Über Index/Wert-Paare iterieren

```js
const value = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

for (const [index, fragment] of value.entries()) {
  console.log(index, fragment);
}
// 0 "1em"
// 1 "#445566"
// 2 "-45px"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
- [`CSSUnparsedValue.length`](/de/docs/Web/API/CSSUnparsedValue/length)
- [`CSSUnparsedValue.values()`](/de/docs/Web/API/CSSUnparsedValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
