---
title: RegExp.prototype.compile()
short-title: compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> Die Methode `compile()` ist nur aus Kompatibilitätsgründen spezifiziert. Die Nutzung von `compile()` führt dazu, dass die ansonsten unveränderliche Regex-Quelle und -Flags veränderlich werden, was die Erwartungen der Benutzer möglicherweise beeinträchtigen kann. Sie können stattdessen den [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)-Konstruktor verwenden, um ein neues reguläres Ausdrucksobjekt zu erstellen.

Die **`compile()`**-Methode von {{jsxref("RegExp")}}-Instanzen wird verwendet, um einen regulären Ausdruck mit neuem Quelltext und neuen Flags zu kompilieren, nachdem das `RegExp`-Objekt bereits erstellt wurde.

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
const regexObj = /foo/gi;
regexObj.compile("new foo", "g");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp")}}
