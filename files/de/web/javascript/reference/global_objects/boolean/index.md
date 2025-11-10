---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Boolean`**-Werte können einen von zwei Werten annehmen: `true` oder `false`, die den Wahrheitswert eines logischen Ausdrucks darstellen.

## Beschreibung

Boolean-Werte werden typischerweise von [Relationalen Operatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators), [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators) und [logischem NOT (`!`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT) erzeugt. Sie können auch durch Funktionen erzeugt werden, die Bedingungen darstellen, wie {{jsxref("Array.isArray()")}}. Beachten Sie, dass [binäre logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) wie `&&` und `||` die Werte der Operanden zurückgeben, die möglicherweise keine boolean Werte sind.

Boolean-Werte werden typischerweise in Bedingungsprüfungen verwendet, wie zum Beispiel die Bedingung für {{jsxref("Statements/if...else", "if...else")}}- und {{jsxref("Statements/while", "while")}}-Anweisungen, den [trinitischen Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) (`? :`), oder den prädikatsbezogenen Rückgabewert von {{jsxref("Array.prototype.filter()")}}.

Es ist selten notwendig, etwas explizit in einen boolean Wert zu konvertieren, da JavaScript dies automatisch in boolean Kontexten tut. Sie können also jeden Wert verwenden, als wäre er ein Boolean, basierend auf seiner [Wahrhaftigkeit](#boolean-koerzierung). Es wird empfohlen, `if (condition)` und `if (!condition)` anstelle von `if (condition === true)` oder `if (condition === false)` in Ihrem eigenen Code zu verwenden, um diese Konvention zu nutzen. Dennoch kann es hilfreich sein, sicherzustellen, dass Werte, die Bedingungen darstellen, immer boolean sind, um die Absicht Ihres Codes zu verdeutlichen.

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

### Primitive Boolean-Werte und Boolean-Objekte

Um nicht-Boolean-Werte in Boolean umzuwandeln, verwenden Sie `Boolean` als Funktion oder den [doppelten NOT](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!) Operator. Verwenden Sie nicht den `Boolean()`-Konstruktor mit `new`.

```js example-good
const good = Boolean(expression);
const good2 = !!expression;
```

```js example-bad
const bad = new Boolean(expression); // don't use this!
```

Der Grund dafür ist, dass _alle_ Objekte, einschließlich eines `Boolean`-Objekts, dessen wrapped Wert `false` ist, {{Glossary("truthy", "truthy")}} sind und in Bedingungen zu `true` ausgewertet werden. (Siehe auch den Abschnitt [Boolean-Koerzierung](#boolean-koerzierung) unten.)

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
> Sie sollten selten den `Boolean`-Konstruktor verwenden.

### Boolean-Koerzierung

Viele eingebaute Operationen, die Booleans erwarten, koerzieren ihre Argumente zuerst zu Booleans. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean) kann wie folgt zusammengefasst werden:

- Booleans werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `false`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `false`.
- `0`, `-0` und `NaN` werden zu `false`, andere Zahlen zu `true`.
- `0n` wird zu `false`, andere [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) zu `true`.
- Der leere String `""` wird zu `false`, andere Strings zu `true`.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werden zu `true`.
- Alle Objekte werden zu `true`.

> [!NOTE]
> Ein veraltetes Verhalten führt dazu, dass [`document.all`](/de/docs/Web/API/Document/all) `false` zurückgibt, wenn es als Boolean verwendet wird, obwohl es ein Objekt ist. Diese Eigenschaft ist veraltet und nicht standardisiert und sollte nicht verwendet werden.

> [!NOTE]
> Anders als bei anderen Typumwandlungen wie [String-Koerzierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) oder [Zahlen-Koerzierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) versucht die boolean Koerzierung nicht, [Objekte in Primitive umzuwandeln](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem Benutzermethoden aufgerufen werden.

Mit anderen Worten, es gibt nur eine Handvoll Werte, die zu `false` koerziert werden — diese werden {{Glossary("Falsy", "falsy")}} genannt. Alle anderen Werte werden {{Glossary("Truthy", "truthy")}} genannt. Die Wahrhaftigkeit eines Wertes ist wichtig, wenn er mit logischen Operatoren, in Bedingungen oder in jedem boolean Kontext verwendet wird.

Es gibt zwei Möglichkeiten, denselben Effekt in JavaScript zu erreichen.

- [Doppeltes NOT](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!): `!!x` negiert `x` zweimal, was `x` unter Verwendung desselben Algorithmus wie oben in einen boolean umwandelt.
- Die [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) Funktion: `Boolean(x)` verwendet denselben Algorithmus wie oben, um `x` zu konvertieren.

Beachten Sie, dass Wahrhaftigkeit nicht dasselbe ist wie [lockere Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Equality) zu `true` oder `false`.

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

`[]` ist truthy, aber auch locker gleich `false`. Es ist truthy, weil alle Objekte truthy sind. Aber wenn man es mit `false` vergleicht, das ein Primitive ist, wird `[]` auch in ein Primitive umgewandelt, was `""` über {{jsxref("Array.prototype.toString()")}} ist. Beim Vergleichen von Strings und Booleans werden beide in [Zahlen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), und sie werden beide `0`, sodass `[] == false` `true` ist. Im Allgemeinen unterscheiden sich Falsizität und `== false` in den folgenden Fällen:

- `NaN`, `undefined` und `null` sind falsy, aber nicht locker gleich `false`.
- `"0"` (und andere String-Literale, die nicht `""` sind, aber [in 0 umgewandelt werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)) sind truthy, aber locker gleich `false`.
- Objekte sind immer truthy, aber ihre Primitivdarstellung kann locker gleich `false` sein.

Truthy-Werte sind noch unwahrscheinlicher, locker gleich `true` zu sein. Alle Werte sind entweder truthy oder falsy, aber die meisten Werte sind weder locker gleich `true` noch `false`.

## Konstruktor

- {{jsxref("Boolean/Boolean", "Boolean()")}}
  - : Erstellt `Boolean`-Objekte. Beim Aufruf als Funktion gibt es primitive Werte des Typs Boolean zurück.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Boolean.prototype` definiert und werden von allen `Boolean`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Boolean.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Boolean`-Instanzen ist der Ausgangswert der {{jsxref("Boolean/Boolean", "Boolean")}}-Konstruktor.

## Instanzmethoden

- {{jsxref("Boolean.prototype.toString()")}}
  - : Gibt einen String von entweder `true` oder `false` zurück, abhängig vom Wert des Objekts. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des `Boolean`-Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.

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

- {{Glossary("Boolean", "Boolean")}}
- [Primitive Boolean-Werte](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- [Boolean-Datentyp](https://en.wikipedia.org/wiki/Boolean_data_type) auf Wikipedia
