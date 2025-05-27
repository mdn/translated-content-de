---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Die Methode `compile()` ist nur aus Kompatibilitätsgründen spezifiziert. Die Verwendung von `compile()` führt dazu, dass der ansonsten unveränderliche RegEx-Quelltext und die Flags veränderbar werden, was die Erwartungen der Benutzer enttäuschen kann. Sie können stattdessen den [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)-Konstruktor verwenden, um ein neues reguläres Ausdrucksobjekt zu erstellen.

Die **`compile()`**-Methode von {{jsxref("RegExp")}}-Instanzen wird verwendet, um einen regulären Ausdruck mit neuem Quelltext und neuen Flags neu zu kompilieren, nachdem das `RegExp`-Objekt bereits erstellt wurde.

## Syntax

```js-nolint
compile(pattern, flags)
```

### Parameter

- `pattern`
  - : Der Text des regulären Ausdrucks.
- `flags`
  - : Jede Kombination von [Flag-Werten](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#flags).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von compile()

Das folgende Beispiel zeigt, wie ein regulärer Ausdruck mit einem neuen Muster und einem neuen Flag neu kompiliert wird.

```js
const regexObj = /foo/gi;
regexObj.compile("new foo", "g");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp")}}
