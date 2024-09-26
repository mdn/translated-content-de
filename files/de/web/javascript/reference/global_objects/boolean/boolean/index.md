---
title: Boolean() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`Boolean()`** Konstruktor erzeugt {{jsxref("Boolean")}} Objekte. Wird er als Funktion aufgerufen, gibt er primitive Werte vom Typ Boolean zurück.

{{EmbedInteractiveExample("pages/js/boolean-constructor.html", "shorter")}}

## Syntax

```js-nolint
new Boolean(value)
Boolean(value)
```

> **Note:** `Boolean()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, hat aber unterschiedliche Effekte. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value`
  - : Der Anfangswert des `Boolean` Objekts.

### Rückgabewert

Wenn `Boolean()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, gibt sie `value` [zu einem Boolean-Primitiv gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion) zurück.

Wenn `Boolean()` als Konstruktor (mit `new`) aufgerufen wird, zwingt sie `value` zu einem Boolean-Primitiv und gibt ein umschließendes {{jsxref("Boolean")}} Objekt zurück, welches **kein** Primitiv ist.

> [!WARNING]
> Sie sollten `Boolean` selten als Konstruktor verwenden.

## Beschreibung

Der als erster Parameter übergebene Wert wird [in einen Boolean-Wert konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion). Wenn der Wert weggelassen wird oder `0`, `-0`, `0n`, [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}} oder der leere String (`""`) ist, hat das Objekt einen Anfangswert von `false`. Alle anderen Werte, einschließlich jedes Objekts, eines leeren Arrays (`[]`) oder des Strings `"false"`, erzeugen ein Objekt mit einem Anfangswert von `true`.

> [!NOTE]
> Wenn die nicht standardisierte Eigenschaft [`document.all`](/de/docs/Web/API/Document/all) als Argument für diesen Konstruktor verwendet wird, ist das Ergebnis ein `Boolean` Objekt mit dem Wert `false`. Diese Eigenschaft ist veraltet, nicht standardisiert und sollte nicht verwendet werden.

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

Beachten Sie, dass die Konvertierung eines `Boolean` Objekts in ein Primitiv mit `Boolean()` immer `true` ergibt, auch wenn das Objekt einen Wert von `false` hält. Es wird daher immer empfohlen, keine `Boolean` Wrapper-Objekte zu konstruieren.

Wenn Sie den primitiven Wert aus dem Wrapper-Objekt entnehmen müssen, verwenden Sie stattdessen die [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf) Methode des Objekts anstelle der `Boolean()` Funktion.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Boolean](/de/docs/Glossary/Boolean)