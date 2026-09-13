---
title: RegExp.prototype.compile()
short-title: compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Die `compile()`-Methode ist nur aus Kompatibilitätsgründen spezifiziert. Die Verwendung von `compile()` führt dazu, dass die ansonsten unveränderlichen Regex-Quelle und -Flags veränderbar werden, was die Erwartungen der Benutzer brechen kann. Sie können stattdessen den [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)-Konstruktor verwenden, um ein neues reguläres Ausdrucksobjekt zu erstellen.

Die **`compile()`**-Methode von {{jsxref("RegExp")}}-Instanzen wird verwendet, um einen regulären Ausdruck mit neuer Quelle und neuen Flags neu zu kompilieren, nachdem das `RegExp`-Objekt bereits erstellt wurde.

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

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `this`-Wert keine Instanz des `RegExp`-Konstruktors des aktuellen Bereichs ist. Dies schließt eine Unterklasse von `RegExp` und den `RegExp`-Konstruktor aus einem anderen Bereich ein.

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
