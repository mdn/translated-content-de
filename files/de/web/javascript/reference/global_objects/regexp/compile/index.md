---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Die `compile()`-Methode wird nur aus Kompatibilitätsgründen spezifiziert. Die Verwendung von `compile()` bewirkt, dass der ansonsten unveränderliche Regex-Quellcode und die Flags veränderlich werden, was die Erwartungen der Benutzer beeinträchtigen kann. Sie können stattdessen den [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)-Konstruktor verwenden, um ein neues reguläres Ausdrucksobjekt zu erstellen.

Die **`compile()`**-Methode von {{jsxref("RegExp")}}-Instanzen wird verwendet, um einen regulären Ausdruck mit einem neuen Quelltext und neuen Flags zu rekonstruieren, nachdem das `RegExp`-Objekt bereits erstellt wurde.

## Syntax

```js-nolint
compile(pattern, flags)
```

### Parameter

- `pattern`
  - : Der Text des regulären Ausdrucks.
- `flags`
  - : Eine beliebige Kombination von [Flag-Werten](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#flags).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von compile()

Das folgende Beispiel zeigt, wie ein regulärer Ausdruck mit einem neuen Muster und einem neuen Flag rekonstruiert wird.

```js
const regexObj = new RegExp("foo", "gi");
regexObj.compile("new foo", "g");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp")}}
