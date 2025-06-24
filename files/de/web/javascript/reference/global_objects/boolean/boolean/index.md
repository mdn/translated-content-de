---
title: Boolean() Konstruktor
short-title: Boolean()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Boolean()`** Konstruktor erstellt {{jsxref("Boolean")}} Objekte. Wenn er als Funktion aufgerufen wird, gibt er primitive Werte vom Typ Boolean zurück.

{{InteractiveExample("JavaScript-Demo: Boolean() Konstruktor")}}

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

> [!NOTE] > `Boolean()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, hat jedoch unterschiedliche Effekte. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value`
  - : Der Anfangswert des `Boolean` Objekts.

### Rückgabewert

Wenn `Boolean()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, gibt es `value` [in einen booleschen primitiven Wert umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion) zurück.

Wenn `Boolean()` als Konstruktor (mit `new`) aufgerufen wird, wird `value` in einen booleschen primitiven Wert umgewandelt und es wird ein umhüllendes {{jsxref("Boolean")}} Objekt zurückgegeben, das **kein** Primitivwert ist.

> [!WARNING]
> Sie sollten selten `Boolean` als Konstruktor verwenden.

## Beschreibung

Der als erster Parameter übergebene Wert wird [in einen booleschen Wert konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion). Wenn der Wert weggelassen wird oder `0`, `-0`, `0n`, [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}} oder der leere String (`""`) ist, hat das Objekt einen Anfangswert von `false`. Alle anderen Werte, einschließlich jedes Objekts, eines leeren Arrays (`[]`) oder des Strings `"false"`, erzeugen ein Objekt mit einem Anfangswert von `true`.

> [!NOTE]
> Wenn die nicht-standardmäßige Eigenschaft [`document.all`](/de/docs/Web/API/Document/all) als Argument für diesen Konstruktor verwendet wird, ist das Ergebnis ein `Boolean` Objekt mit dem Wert `false`. Diese Eigenschaft ist veraltet und sollte nicht verwendet werden.

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

Beachten Sie, wie das Konvertieren eines `Boolean` Objekts in ein primitives mit `Boolean()` immer `true` ergibt, selbst wenn das Objekt den Wert `false` hält. Daher wird immer geraten, `Boolean` Umhüllungsobjekte zu vermeiden.

Wenn Sie den primitiven Wert des Umhüllungsobjekts benötigen, verwenden Sie anstelle der `Boolean()` Funktion die [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf) Methode des Objekts.

```js
const bfalse = new Boolean(false);

bfalse.valueOf(); // false
```

### Erstellen von `Boolean` Objekten mit einem Anfangswert von `true`

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
