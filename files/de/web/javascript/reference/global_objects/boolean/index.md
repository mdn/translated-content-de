---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Boolean`** Werte können einen von zwei Werten annehmen: `true` oder `false`, die den Wahrheitswert eines logischen Vorschlags darstellen.

## Beschreibung

Boolean-Werte werden typischerweise durch [Beziehungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators), [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators) und [logisches NICHT (`!`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT) erzeugt. Sie können auch durch Funktionen erzeugt werden, die Bedingungen darstellen, wie z. B. {{jsxref("Array.isArray()")}}. Bitte beachten Sie, dass [binäre logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) wie `&&` und `||` die Werte der Operanden zurückgeben, die möglicherweise keine booleschen Werte sind.

Boolean-Werte werden typischerweise in bedingten Prüfungen verwendet, wie z.B. der Bedingung für {{jsxref("Statements/if...else", "if...else")}} und {{jsxref("Statements/while", "while")}} Anweisungen, den [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) (`? :`), oder den Prädikatrückgabewert von {{jsxref("Array.prototype.filter()")}}.

Es ist selten notwendig, etwas explizit in einen Boolean-Wert zu konvertieren, da JavaScript dies automatisch in booleschen Kontexten tut. Sie können jeden Wert nutzen, als ob er ein Boolean wäre, basierend auf seiner [Wahrheit]#boolean_coercion). Sie sind auch ermutigt, `if (condition)` und `if (!condition)` statt `if (condition === true)` oder `if (condition === false)` in ihrem eigenen Code zu verwenden, um von dieser Konvention zu profitieren. Allerdings kann sichergestellt werden, dass Werte, die Bedingungen darstellen, immer Booleans sind, da dies die Absicht Ihres Codes verdeutlichen kann.

```js
// Do this:
// This always returns a boolean value
const isObject = (obj) => !!obj && typeof obj === "object";

// Or this:
const isObject = (obj) => Boolean(obj) && typeof obj === "object";

// Or this:
const isObject = (obj) => obj !== null && typeof obj === "object";

// Instead of this:
// This may return falsy values that are not equal to false
const isObject = (obj) => obj && typeof obj === "object";
```

### Boolean-Primitiven und Boolean-Objekte

Um Nicht-Boolean-Werte in Boolean zu konvertieren, verwenden Sie `Boolean` als Funktion oder verwenden Sie den [doppelten NOT](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!) Operator. Verwenden Sie nicht den `Boolean()` Konstruktor mit `new`.

```js example-good
const good = Boolean(expression);
const good2 = !!expression;
```

```js example-bad
const bad = new Boolean(expression); // don't use this!
```

Dies liegt daran, dass _alle_ Objekte, einschließlich eines `Boolean` Objekts, dessen eingeschlossene Wert `false` ist, [truthy](/de/docs/Glossary/truthy) sind und in Anweisungen wie bedingten Anweisungen als `true` ausgewertet werden. (Siehe auch den Abschnitt [Boolean-Koerzierung](#boolean-koerzierung) weiter unten.)

```js
if (new Boolean(true)) {
  console.log("This log is printed.");
}

if (new Boolean(false)) {
  console.log("This log is ALSO printed.");
}

const myFalse = new Boolean(false); // myFalse is a Boolean object (not the primitive value false)
const g = Boolean(myFalse); // g is true
const myString = new String("Hello"); // myString is a String object
const s = Boolean(myString); // s is true
```

> [!WARNING]
> Sie sollten es vermeiden, `Boolean` als Konstruktor zu verwenden.

### Boolean-Koerzierung

Viele eingebauten Operationen, die Booleans erwarten, wandeln zuerst ihre Argumente in Booleans um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean) kann folgendermaßen zusammengefasst werden:

- Booleans werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `false`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `false`.
- `0`, `-0` und `NaN` werden zu `false`; andere Zahlen werden zu `true`.
- `0n` wird zu `false`; andere [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden zu `true`.
- Der leere String `""` wird zu `false`; andere Strings werden zu `true`.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werden zu `true`.
- Alle Objekte werden zu `true`.

> [!NOTE]
> Ein veraltetes Verhalten macht, dass [`document.all`](/de/docs/Web/API/Document/all) `false` zurückgibt, wenn es als Boolean verwendet wird, trotz dass es ein Objekt ist. Diese Eigenschaft ist veraltet und nicht standardisiert und sollte nicht verwendet werden.

> [!NOTE]
> Im Gegensatz zu anderen Typumwandlungen wie [String-Koerzierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) oder [Zahlen-Koerzierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), versucht die Boolean-Koerzierung nicht, [Objekte in Primitive umzuwandeln](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem sie Benutzermethoden aufruft.

Mit anderen Worten, es gibt nur eine Handvoll von Werten, die zu `false` umgewandelt werden - diese werden [falsy](/de/docs/Glossary/Falsy) Werte genannt. Alle anderen Werte werden [truthy](/de/docs/Glossary/Truthy) genannt. Die Wahrheit eines Wertes ist wichtig, wenn er mit logischen Operatoren, bedingten Anweisungen oder in jeglichem Boolean-Kontext verwendet wird.

Es gibt zwei Möglichkeiten, denselben Effekt in JavaScript zu erzielen.

- [Doppeltes NICHT](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!) : `!!x` negiert `x` zweimal, was `x` in einen Boolean umwandelt, indem der oben beschriebene Algorithmus verwendet wird.
- Die [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) Funktion: `Boolean(x)` verwendet den gleichen Algorithmus wie oben, um `x` zu konvertieren.

Beachten Sie, dass die Wahrheit nicht dasselbe ist wie [locker gleich](/de/docs/Web/JavaScript/Reference/Operators/Equality) zu `true` oder `false` zu sein.

```js
if ([]) {
  console.log("[] is truthy");
}
if ([] == false) {
  console.log("[] == false");
}
// [] is truthy
// [] == false
```

`[]` ist truthy, aber es ist auch locker gleich zu `false`. Es ist truthy, weil alle Objekte truthy sind. Wenn allerdings mit `false` verglichen wird, das ein Primitive ist, wird `[]` auch in ein Primitive umgewandelt, was durch {{jsxref("Array.prototype.toString()")}} zu `""` wird. Beim Vergleich von Strings und Booleans werden beide [in Zahlen konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), und sie werden beide zu `0`, sodass `[] == false` `true` ist. Im Allgemeinen unterscheiden sich Falschheit und `== false` in folgenden Fällen:

- `NaN`, `undefined` und `null` sind falsy, aber nicht locker gleich `false`.
- `"0"` (und andere String-Literale, die nicht `""` sind, aber [auf 0 umgewandelt werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)) ist truthy, aber locker gleich `false`.
- Objekte sind immer truthy, aber ihre primitive Darstellung kann locker gleich `false` sein.

Truthy-Werte sind noch unwahrscheinlicher, locker gleich `true` zu sein. Alle Werte sind entweder truthy oder falsy, aber die meisten Werte sind locker weder `true` noch `false` gleich.

## Konstruktor

- {{jsxref("Boolean/Boolean", "Boolean()")}}
  - : Erstellt `Boolean` Objekte. Wenn als Funktion aufgerufen, gibt es primitive Werte des Typs Boolean zurück.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Boolean.prototype` definiert und werden von allen `Boolean` Instanzen geteilt.

- {{jsxref("Object/constructor", "Boolean.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Boolean` Instanzen ist der Anfangswert der {{jsxref("Boolean/Boolean", "Boolean")}} Konstruktor.

## Instanzmethoden

- {{jsxref("Boolean.prototype.toString()")}}
  - : Gibt einen String von entweder `true` oder `false` zurück, abhängig vom Wert des Objekts. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des `Boolean` Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}} Methode.

## Beispiele

### Erstellen von falschen Werten

```js
const bNoParam = Boolean();
const bZero = Boolean(0);
const bNull = Boolean(null);
const bEmptyString = Boolean("");
const bfalse = Boolean(false);
```

### Erstellen von wahren Werten

```js
const btrue = Boolean(true);
const btrueString = Boolean("true");
const bfalseString = Boolean("false");
const bSuLin = Boolean("Su Lin");
const bArrayProto = Boolean([]);
const bObjProto = Boolean({});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Boolean](/de/docs/Glossary/Boolean)
- [Boolean-Primitiven](/de/docs/Web/JavaScript/Data_structures#boolean_type)
- [Boolean-Datentyp](https://en.wikipedia.org/wiki/Boolean_data_type) auf Wikipedia
