---
title: Boolean()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Der **`Boolean()`**-Konstruktor erstellt {{jsxref("Boolean")}}-Objekte. Wenn er als Funktion aufgerufen wird, gibt er primitive Werte vom Typ Boolean zurück.

{{InteractiveExample("JavaScript Demo: Boolean() constructor")}}

```js interactive-example
const flag = new Boolean();
console.log(typeof flag);
// Expected output: object
console.log(flag === false);
// Expected output: false

const flag2 = Boolean();
console.log(typeof flag2);
// Expected output: boolean
console.log(flag2 === false);
// Expected output: true
```

## Syntax

```js-nolint
new Boolean(value)
Boolean(value)
```

> **Hinweis:** `Boolean()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value`
  - : Der Anfangswert des `Boolean`-Objekts.

### Rückgabewert

Wenn `Boolean()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, wird `value` [in einen booleschen primitiven Wert umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Wenn `Boolean()` als Konstruktor (mit `new`) aufgerufen wird, wird `value` in einen booleschen primitiven Wert umgewandelt und gibt ein umschließendes {{jsxref("Boolean")}}-Objekt zurück, das **kein** primitiver Wert ist.

> [!WARNING]
> Sie sollten sich selten dabei ertappen, `Boolean` als Konstruktor zu verwenden.

## Beschreibung

Der als erster Parameter übergebene Wert wird [in einen booleschen Wert umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion). Wenn der Wert weggelassen wird oder `0`, `-0`, `0n`, [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}} oder der leere String (`""`) ist, hat das Objekt einen Anfangswert von `false`. Alle anderen Werte, einschließlich eines beliebigen Objekts, eines leeren Arrays (`[]`) oder des Strings `"false"`, erstellen ein Objekt mit einem Anfangswert von `true`.

> [!NOTE]
> Wenn die nicht standardmäßige Eigenschaft [`document.all`](/de/docs/Web/API/Document/all) als Argument für diesen Konstruktor verwendet wird, ist das Ergebnis ein `Boolean`-Objekt mit dem Wert `false`. Diese Eigenschaft ist veraltet und nicht standardisiert und sollte nicht verwendet werden.

## Beispiele

### Erstellen von Boolean-Objekten mit einem Anfangswert von false

```js
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean("");
const bfalse = new Boolean(false);

typeof bfalse; // "object"
Boolean(bfalse); // true
```

Beachten Sie, dass das Konvertieren eines `Boolean`-Objekts zu einem primitiven Wert mit `Boolean()` immer `true` ergibt, selbst wenn das Objekt einen Wert von `false` hat. Daher wird empfohlen, `Boolean`-Wrapper-Objekte zu vermeiden.

Wenn Sie den primitiven Wert aus dem Wrapper-Objekt brauchen, verwenden Sie statt der `Boolean()`-Funktion die [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf)-Methode des Objekts.

```js
const bfalse = new Boolean(false);

bfalse.valueOf(); // false
```

### Erstellen von `Boolean`-Objekten mit einem Anfangswert von `true`

```js
const btrue = new Boolean(true);
const btrueString = new Boolean("true");
const bfalseString = new Boolean("false");
const bSuLin = new Boolean("Su Lin");
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Boolean", "Boolean")}}
