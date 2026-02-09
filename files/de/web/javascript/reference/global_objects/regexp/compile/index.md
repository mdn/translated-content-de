---
title: RegExp.prototype.compile()
short-title: compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
l10n:
  sourceCommit: 349c079914071c205d842a323f22dd95da74d31f
---

{{Deprecated_Header}}

> [!NOTE]
> Die Methode `compile()` ist nur aus Kompatibilitätsgründen spezifiziert. Die Verwendung von `compile()` führt dazu, dass die ansonsten unveränderlichen Regex-Quelle und -Flags veränderlich werden, was die Erwartungen der Benutzer möglicherweise bricht. Sie können stattdessen den [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)-Konstruktor verwenden, um ein neues reguläres Ausdrucksobjekt zu erstellen.

Die **`compile()`**-Methode von {{jsxref("RegExp")}}-Instanzen wird verwendet, um einen regulären Ausdruck mit einer neuen Quelle und neuen Flags neu zu kompilieren, nachdem das `RegExp`-Objekt bereits erstellt wurde.

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
  - : Wird ausgelöst, wenn der `this`-Wert keine Instanz des `RegExp`-Konstruktors des aktuellen Realm ist.
    Dies schließt eine Unterklasse von `RegExp` und den `RegExp`-Konstruktor aus einem anderen Realm ein.

## Beispiele

### Verwendung von compile()

Das folgende Beispiel zeigt, wie man einen regulären Ausdruck mit einem neuen Muster und einem neuen Flag neu kompiliert.

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
