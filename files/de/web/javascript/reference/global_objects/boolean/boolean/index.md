---
title: Boolean() Konstruktor
short-title: Boolean()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`Boolean()`**-Konstruktor erzeugt {{jsxref("Boolean")}}-Objekte. Wenn er als Funktion aufgerufen wird, gibt er primitive Werte des Typs Boolean zurück.

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

> [!NOTE]
> `Boolean()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value`
  - : Der Anfangswert des `Boolean`-Objekts.

### Rückgabewert

Wenn `Boolean()` als Funktion aufgerufen wird (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)), wird `value` [in einen booleschen primitiven Wert umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Wenn `Boolean()` als Konstruktor (mit `new`) aufgerufen wird, wird `value` in einen booleschen primitiven Wert umgewandelt und gibt ein umgebendes {{jsxref("Boolean")}}-Objekt zurück, welches **kein** primitiver Wert ist.

> [!WARNING]
> Sie sollten `Boolean` als Konstruktor selten verwenden.

## Beschreibung

Der Wert, der als erster Parameter übergeben wird, wird [in einen booleschen Wert konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion). Wenn der Wert weggelassen wird oder `0`, `-0`, `0n`, [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}} oder der leere String (`""`) ist, dann hat das Objekt einen Anfangswert von `false`. Alle anderen Werte, einschließlich jedes Objekts, ein leeres Array (`[]`) oder der String `"false"`, erzeugen ein Objekt mit einem Anfangswert von `true`.

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

Beachten Sie, dass die Umwandlung eines `Boolean`-Objekts in einen primitiven Wert mit `Boolean()` immer `true` ergibt, selbst wenn das Objekt einen Wert von `false` enthält. Daher wird stets empfohlen, die Erstellung von `Boolean`-Wrapper-Objekten zu vermeiden.

Wenn Sie den primitiven Wert aus dem Wrapper-Objekt extrahieren müssen, verwenden Sie stattdessen die [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf)-Methode des Objekts und nicht die `Boolean()`-Funktion.

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
