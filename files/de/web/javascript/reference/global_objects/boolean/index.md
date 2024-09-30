---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Boolean`**-Werte können einen von zwei Werten haben: `true` oder `false`, die den Wahrheitswert eines logischen Satzes darstellen.

## Beschreibung

Boolean-Werte werden typischerweise von [Relationsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators), [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators) und dem [logischen NICHT (`!`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT) erzeugt. Sie können auch durch Funktionen erzeugt werden, die Bedingungen repräsentieren, wie z.B. {{jsxref("Array.isArray()")}}. Beachten Sie, dass [binäre logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) wie `&&` und `||` die Werte der Operanden zurückgeben, die möglicherweise keine Boolean-Werte sind.

Boolean-Werte werden typischerweise in Bedingungstests verwendet, wie z.B. in der Bedingung der {{jsxref("Statements/if...else", "if...else")}}- und {{jsxref("Statements/while", "while")}}-Anweisungen, dem [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) (`? :`), oder dem Prädikatrückgabewert von {{jsxref("Array.prototype.filter()")}}.

Es ist selten notwendig, etwas explizit in einen Boolean-Wert umzuwandeln, da JavaScript dies automatisch in Boolean-Kontexten tut, sodass Sie jeden Wert so verwenden können, als ob er ein Boolean wäre, basierend auf seiner [Wahrhaftigkeit](#boolean_umwandlung). Es wird empfohlen, möglichst `if (condition)` und `if (!condition)` anstelle von `if (condition === true)` oder `if (condition === false)` in Ihrem eigenen Code zu verwenden, um diesen Konvention nutzen zu können. Dennoch kann es hilfreich sein, sicherzustellen, dass Werte, die Bedingungen darstellen, immer Booleans sind, um die Absicht Ihres Codes zu verdeutlichen.

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

Um Nicht-Boolean-Werte in Boolean-Werte umzuwandeln, verwenden Sie `Boolean` als Funktion oder den [doppelten NICHT](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!) Operator. Verwenden Sie nicht `Boolean()`-Konstruktor mit `new`.

```js example-good
const good = Boolean(expression);
const good2 = !!expression;
```

```js example-bad
const bad = new Boolean(expression); // don't use this!
```

Dies liegt daran, dass _alle_ Objekte, einschließlich eines `Boolean`-Objekts, dessen umschlossener Wert `false` ist, [wahrheitsgemäß](/de/docs/Glossary/truthy) sind und in Fällen wie bedingten Anweisungen zu `true` ausgewertet werden. (Siehe auch den Abschnitt [boolean coercion](#boolean_umwandlung) unten.)

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
> Sie sollten selten `Boolean` als Konstruktor verwenden.

### Boolean Umwandlung

Viele eingebaute Operationen, die Booleans erwarten, wandeln ihre Argumente zuerst in Booleans um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean) kann wie folgt zusammengefasst werden:

- Booleans werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `false`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `false`.
- `0`, `-0` und `NaN` werden zu `false`; andere Zahlen werden zu `true`.
- `0n` wird zu `false`; andere [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden zu `true`.
- Der leere String `""` wird zu `false`; andere Strings werden zu `true`.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werden zu `true`.
- Alle Objekte werden `true`.

> [!NOTE]
> Ein Legacy-Verhalten sorgt dafür, dass [`document.all`](/de/docs/Web/API/Document/all) `false` zurückgibt, wenn es als Boolean verwendet wird, obwohl es ein Objekt ist. Diese Eigenschaft ist veraltet und nicht standardisiert und sollte nicht verwendet werden.

> [!NOTE]
> Anders als bei anderen Typumwandlungen wie [String-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) oder [Zahl-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), versucht die Boolean-Umwandlung nicht, [Objekte in Primitiven umzuwandeln](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) durch den Aufruf von Benutzerfunktionen.

Mit anderen Worten, es gibt nur wenige Werte, die zu `false` umgewandelt werden - diese werden als [falsy](/de/docs/Glossary/Falsy) bezeichnet. Alle anderen Werte werden als [truthy](/de/docs/Glossary/Truthy) bezeichnet. Die Wahrhaftigkeit eines Wertes ist wichtig, wenn sie mit logischen Operatoren, bedingten Anweisungen oder in einem Boolean-Kontext verwendet wird.

Es gibt zwei Möglichkeiten, denselben Effekt in JavaScript zu erzielen.

- [Doppelter NICHT](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!): `!!x` negiert `x` zweimal, was `x` anhand des oben genannten Algorithmus in einen Boolean umwandelt.
- Die [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) Funktion: `Boolean(x)` verwendet den gleichen Algorithmus wie oben, um `x` zu konvertieren.

Beachten Sie, dass Wahrhaftigkeit nicht dasselbe ist wie die [lose Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Equality) zu `true` oder `false`.

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

`[]` ist wahrheitsgemäß, aber es ist auch lose gleich `false`. Es ist wahrheitsgemäß, weil alle Objekte wahrheitsgemäß sind. Beim Vergleich mit `false`, das ein Primitive ist, wird `[]` auch in ein Primitive umgewandelt, das über {{jsxref("Array.prototype.toString()")}} `""` ergibt. Beim Vergleich von Strings und Booleans werden beide in Zahlen [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), und beide werden zu `0`, so dass `[] == false` `true` ist. Allgemein unterscheiden sich Falschheit und `== false` in den folgenden Fällen:

- `NaN`, `undefined` und `null` sind falsch, aber nicht lose gleich `false`.
- `"0"` (und andere String-Literale, die nicht `""` sind, aber [zu 0 umgewandelt werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)) sind wahrheitsgemäß, aber lose gleich `false`.
- Objekte sind immer wahrheitsgemäß, aber ihre primitive Repräsentation kann lose gleich `false` sein.

Wahrheitsgemäße Werte sind sogar noch weniger wahrscheinlich, lose gleich `true` zu sein. Alle Werte sind entweder wahrheitsgemäß oder falsch, aber die meisten Werte sind lose weder `true` noch `false` gleich.

## Konstruktor

- {{jsxref("Boolean/Boolean", "Boolean()")}}
  - : Erstellt `Boolean`-Objekte. Bei einem Funktionsaufruf gibt er primitive Werte des Typs Boolean zurück.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Boolean.prototype` definiert und werden von allen `Boolean`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Boolean.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Boolean`-Instanzen ist der Anfangswert der {{jsxref("Boolean/Boolean", "Boolean")}}-Konstruktor.

## Instanzmethoden

- {{jsxref("Boolean.prototype.toString()")}}
  - : Gibt einen String mit entweder `true` oder `false` zurück, abhängig vom Wert des Objekts. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des `Boolean`-Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}} Methode.

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

- [Boolean](/de/docs/Glossary/Boolean)
- [Boolean-Primitiven](/de/docs/Web/JavaScript/Data_structures#boolean_type)
- [Boolean-Datentyp](https://en.wikipedia.org/wiki/Boolean_data_type) auf Wikipedia
