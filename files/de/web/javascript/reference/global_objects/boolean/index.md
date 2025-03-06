---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

**`Boolean`**-Werte können einen von zwei Werten haben: `true` oder `false`, die den Wahrheitswert eines logischen Ausdrucks darstellen.

## Beschreibung

Boolean-Werte werden typischerweise von [Relationsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators), [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators) und [logischem NICHT (`!`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT) erzeugt. Sie können auch von Funktionen erzeugt werden, die Bedingungen repräsentieren, wie z.B. {{jsxref("Array.isArray()")}}. Beachten Sie, dass [binäre logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) wie `&&` und `||` die Werte der Operanden zurückgeben, die möglicherweise keine booleschen Werte sind.

Boolean-Werte werden typischerweise in bedingten Prüfungen verwendet, wie etwa bei der Bedingung für {{jsxref("Statements/if...else", "if...else")}} und {{jsxref("Statements/while", "while")}} Anweisungen, beim [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) (`? :`) oder dem Rückgabewert von Prädikaten wie {{jsxref("Array.prototype.filter()")}}.

Sie müssen selten etwas explizit in einen booleschen Wert umwandeln, da JavaScript dies in booleschen Kontexten automatisch tut, sodass Sie jeden Wert so verwenden können, als wäre er ein boolescher Wert, basierend auf seiner [Truthiness](#boolean-koerzierung). Es wird auch empfohlen, `if (condition)` und `if (!condition)` anstelle von `if (condition === true)` oder `if (condition === false)` in Ihrem eigenen Code zu verwenden, um von dieser Konvention zu profitieren. Allerdings kann es hilfreich sein, sicherzustellen, dass Werte, die Bedingungen repräsentieren, immer Booleans sind, um die Absicht Ihres Codes zu verdeutlichen.

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

Um Nicht-Boolean-Werte in Boolean-Werte umzuwandeln, verwenden Sie `Boolean` als Funktion oder verwenden Sie den [doppelten NICHT](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!) Operator. Verwenden Sie nicht den `Boolean()` Konstruktor mit `new`.

```js example-good
const good = Boolean(expression);
const good2 = !!expression;
```

```js example-bad
const bad = new Boolean(expression); // don't use this!
```

Dies liegt daran, dass _alle_ Objekte, einschließlich eines `Boolean`-Objekts, dessen eingeschlossener Wert `false` ist, {{Glossary("truthy", "wahrhaftig")}} sind und in Bereichen wie bedingten Anweisungen zu `true` ausgewertet werden. (Siehe auch den Abschnitt [Boolean-Koerzierung](#boolean-koerzierung) weiter unten.)

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
> Sie sollten selten den `Boolean` als Konstruktor verwenden.

### Boolean-Koerzierung

Viele eingebaute Operationen, die Booleans erwarten, erzwingen zuerst die Umwandlung ihrer Argumente zu Booleans. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean) lässt sich wie folgt zusammenfassen:

- Booleans werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird in `false` umgewandelt.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird in `false` umgewandelt.
- `0`, `-0` und `NaN` werden in `false` umgewandelt; andere Zahlen in `true`.
- `0n` wird in `false` umgewandelt; andere [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden in `true` umgewandelt.
- Der leere String `""` wird in `false` umgewandelt; andere Strings in `true`.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werden in `true` umgewandelt.
- Alle Objekte werden zu `true`.

> [!NOTE]
> Ein Legacy-Verhalten sorgt dafür, dass [`document.all`](/de/docs/Web/API/Document/all) `false` zurückgibt, wenn es als Boolean verwendet wird, obwohl es ein Objekt ist. Diese Eigenschaft ist veraltet und nicht standardisiert und sollte nicht verwendet werden.

> [!NOTE]
> Im Gegensatz zu anderen Typumwandlungen, wie [String-Koerzierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) oder [Nummern-Koerzierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), versucht die Boolean-Koerzierung nicht, [Objekte durch Aufrufen von Benutzermethoden in primitive Typen umzuwandeln](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).

Mit anderen Worten, es gibt nur eine Handvoll von Werten, die in `false` umgewandelt werden — diese werden als {{Glossary("Falsy", "falsy")}} Werte bezeichnet. Alle anderen Werte werden als {{Glossary("Truthy", "truthy")}} Werte bezeichnet. Die Wahrheit eines Wertes ist wichtig, wenn er mit logischen Operatoren, bedingten Anweisungen oder einem beliebigen booleschen Kontext verwendet wird.

Es gibt zwei Möglichkeiten, denselben Effekt in JavaScript zu erzielen.

- [Doppelter NICHT](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!): `!!x` negiert `x` zweimal, was `x` in einen booleschen Wert konvertiert, basierend auf dem oben genannten Algorithmus.
- Die [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) Funktion: `Boolean(x)` verwendet denselben Algorithmus, um `x` zu konvertieren.

Beachten Sie, dass Truthiness nicht dasselbe ist wie die [lose Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Equality) mit `true` oder `false`.

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

`[]` ist wahrhaftig, aber es ist auch lose gleich `false`. Es ist wahrhaftig, weil alle Objekte wahrhaftig sind. Wenn jedoch mit `false` verglichen wird, das ein primitiver Wert ist, wird `[]` auch in einen primitiven Wert umgewandelt, was `""` über {{jsxref("Array.prototype.toString()")}} entspricht. Wenn Strings und Booleans verglichen werden, werden beide [in Zahlen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), und sie werden beide zu `0`, sodass `[] == false` `true` ist. Im Allgemeinen unterscheiden sich Falschheit und `== false` in den folgenden Fällen:

- `NaN`, `undefined` und `null` sind falsy, aber nicht lose gleich `false`.
- `"0"` (und andere Stringliterale, die nicht `""` sind, aber [zu 0 umgewandelt werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)) sind wahrhaftig, aber lose gleich `false`.
- Objekte sind immer wahrhaftig, aber ihre primitive Darstellung kann lose gleich `false` sein.

Truthy-Werte sind noch unwahrscheinlicher lose gleich `true`. Alle Werte sind entweder wahrhaftig oder falsy, aber die meisten Werte sind lose weder gleich `true` noch `false`.

## Konstruktor

- {{jsxref("Boolean/Boolean", "Boolean()")}}
  - : Erstellt `Boolean`-Objekte. Wenn sie als Funktion aufgerufen wird, gibt sie primitive Werte des Typs Boolean zurück.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Boolean.prototype` definiert und werden von allen `Boolean`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Boolean.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Boolean`-Instanzen ist der Anfangswert der {{jsxref("Boolean/Boolean", "Boolean")}}-Konstruktor.

## Instanzmethoden

- {{jsxref("Boolean.prototype.toString()")}}
  - : Gibt einen String von entweder `true` oder `false` zurück, je nach Wert des Objekts. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des `Boolean`-Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.

## Beispiele

### Erstellen von false-Werten

```js
const bNoParam = Boolean();
const bZero = Boolean(0);
const bNull = Boolean(null);
const bEmptyString = Boolean("");
const bfalse = Boolean(false);
```

### Erstellen von true-Werten

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
- [Boolean-Primitiven](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- [Boolean-Datentyp](https://en.wikipedia.org/wiki/Boolean_data_type) auf Wikipedia
