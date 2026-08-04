---
title: "CSSUnparsedValue: length-Eigenschaft"
short-title: length
slug: Web/API/CSSUnparsedValue/length
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`length`** schreibgeschützte Eigenschaft des [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Interfaces gibt die Anzahl der Elemente im Objekt zurück.

## Wert

Ein ganzzahliger Wert.

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel verwenden wir den [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)-Konstruktor und erfragen dann die Länge:

```js
const values = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

console.log(values.length); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
- [`CSSUnparsedValue.entries`](/de/docs/Web/API/CSSUnparsedValue/entries)
- [`CSSUnparsedValue.forEach`](/de/docs/Web/API/CSSUnparsedValue/forEach)
- [`CSSUnparsedValue.keys`](/de/docs/Web/API/CSSUnparsedValue/keys)
- [`CSSUnparsedValue.values`](/de/docs/Web/API/CSSUnparsedValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
