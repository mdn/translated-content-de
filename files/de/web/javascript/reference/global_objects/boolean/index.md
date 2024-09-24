---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Boolean`** Werte können einen von zwei Werten annehmen: `true` oder `false`, die den Wahrheitswert einer logischen Aussage darstellen.

## Beschreibung

Boolean-Werte werden typischerweise von [relationsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators), [gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators) und [logischem NICHT (`!`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT) erzeugt. Sie können auch von Funktionen erzeugt werden, die Bedingungen repräsentieren, wie zum Beispiel {{jsxref("Array.isArray()")}}. Beachten Sie, dass [binäre logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) wie `&&` und `||` die Werte der Operanden zurückgeben, die möglicherweise keine boolean-Werte sind.

Boolean-Werte werden typischerweise in bedingtem Testing verwendet, wie die Bedingung für {{jsxref("Statements/if...else", "if...else")}} und {{jsxref("Statements/while", "while")}} Anweisungen, der [Bedingungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) (`? :`), oder der Rückgabewert des Prädikats von {{jsxref("Array.prototype.filter()")}}.

In den meisten Fällen ist es nicht notwendig, etwas explizit in einen boolean-Wert umzuwandeln, da JavaScript dies automatisch in boolean-Kontexten tut, sodass Sie jeden Wert so verwenden können, als wäre er ein boolean, basierend auf seiner [Wahrhaftigkeit](#boolean-konvertierung). Es wird auch dazu geraten, `if (condition)` und `if (!condition)` anstelle von `if (condition === true)` oder `if (condition === false)` in Ihrem eigenen Code zu verwenden, um von dieser Konvention zu profitieren. Dennoch kann es helfen, sicherzustellen, dass Werte, die Bedingungen darstellen, immer booleans sind, um die Absicht Ihres Codes zu verdeutlichen.

```js
// Machen Sie das:
// Dies gibt immer einen boolean-Wert zurück
const isObject = (obj) => !!obj && typeof obj === "object";

// Oder dies:
const isObject = (obj) => Boolean(obj) && typeof obj === "object";

// Oder dies:
const isObject = (obj) => obj !== null && typeof obj === "object";

// Anstatt dies zu tun:
// Dies kann falsy-Werte zurückgeben, die nicht gleich false sind
const isObject = (obj) => obj && typeof obj === "object";
```

### Boolean-Primitiven und Boolean-Objekte

Für die Umwandlung von Nicht-Boolean-Werten in Boolean, verwenden Sie `Boolean` als Funktion oder den [doppelten NICHT](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!) Operator. Verwenden Sie nicht den `Boolean()` Konstruktor mit `new`.

```js example-good
const good = Boolean(expression);
const good2 = !!expression;
```

```js example-bad
const bad = new Boolean(expression); // Verwenden Sie dies nicht!
```

Dies liegt daran, dass _alle_ Objekte, einschließlich eines `Boolean` Objekts, dessen eingepackter Wert `false` ist, {{glossary("truthy")}} sind und in Umgebungen wie bedingten Anweisungen zu `true` auswerten. (Siehe auch den Abschnitt [Boolean-Konvertierung](#boolean-konvertierung) unten.)

```js
if (new Boolean(true)) {
  console.log("Diese Ausgabe wird gedruckt.");
}

if (new Boolean(false)) {
  console.log("Diese Ausgabe wird AUCH gedruckt.");
}

const myFalse = new Boolean(false); // myFalse ist ein Boolean-Objekt (nicht der primitive Wert false)
const g = Boolean(myFalse); // g ist true
const myString = new String("Hello"); // myString ist ein String-Objekt
const s = Boolean(myString); // s ist true
```

> [!WARNING]
> Sie sollten selten `Boolean` als Konstruktor verwenden.

### Boolean-Konvertierung

Viele eingebaute Operationen, die Booleans erwarten, erzwingen zuerst eine Konvertierung ihrer Argumente in Booleans. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean) kann wie folgt zusammengefasst werden:

- Booleans werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `false`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `false`.
- `0`, `-0` und `NaN` werden zu `false`; andere Zahlen werden zu `true`.
- `0n` wird zu `false`; andere [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden zu `true`.
- Der leere String `""` wird zu `false`; andere Strings werden zu `true`.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werden zu `true`.
- Alle Objekte werden zu `true`.

> [!NOTE]
> Ein legacy-Verhalten sorgt dafür, dass [`document.all`](/de/docs/Web/API/Document/all) `false` zurückgibt, wenn es als boolean verwendet wird, obwohl es ein Objekt ist. Diese Eigenschaft ist nicht standardisiert und sollte nicht verwendet werden.

> [!NOTE]
> Im Gegensatz zu anderen Typkonvertierungen wie [String-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) oder [Zahlen-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) versucht die Boolean-Konvertierung nicht, [Objekte in Primitive zu konvertieren](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem Benutzer-Methoden aufgerufen werden.

Mit anderen Worten, es gibt nur eine Handvoll von Werten, die zu `false` konvertiert werden — diese werden als [falsy](/de/docs/Glossary/Falsy) Werte bezeichnet. Alle anderen Werte werden als [truthy](/de/docs/Glossary/Truthy) Werte bezeichnet. Die Wahrhaftigkeit eines Wertes ist wichtig, wenn sie mit logischen Operatoren, bedingten Anweisungen oder in jedem boolean-Kontext verwendet wird.

Es gibt zwei Möglichkeiten, denselben Effekt in JavaScript zu erzielen.

- [Doppelter NICHT](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!): `!!x` negiert `x` zweimal, was `x` in einen boolean umwandelt, indem derselbe Algorithmus wie oben verwendet wird.
- Die [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) Funktion: `Boolean(x)` verwendet denselben Algorithmus wie oben, um `x` zu konvertieren.

Beachten Sie, dass Wahrhaftigkeit nicht das gleiche ist wie lose Gleichheit mit `true` oder `false`.

```js
if ([]) {
  console.log("[] ist truthy");
}
if ([] == false) {
  console.log("[] == false");
}
// [] ist truthy
// [] == false
```

`[]` ist truthy, aber es ist auch lose gleich `false`. Es ist truthy, weil alle Objekte truthy sind. Beim Vergleich mit `false`, welches ein primitiver Wert ist, wird auch `[]` in einen primitiven Wert konvertiert, was `""` durch {{jsxref("Array.prototype.toString()")}} ergibt. Beim Vergleich von String- und Boolean-Werten werden beide in Zahlen umgewandelt und sie werden beide zu `0`, daher ist `[] == false` `true`. Im Allgemeinen unterscheiden sich Falschheit und `== false` in den folgenden Fällen:

- `NaN`, `undefined` und `null` sind falsy, aber nicht lose gleich `false`.
- `"0"` (und andere String-Literale, die nicht `""` sind, aber [zu 0 konvertiert werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)) ist truthy, aber lose gleich `false`.
- Objekte sind immer truthy, aber ihre primitive Darstellung kann lose gleich `false` sein.

Truthy-Werte sind noch unwahrscheinlicher, lose gleich `true` zu sein. Alle Werte sind entweder truthy oder falsy, aber die meisten Werte sind weder lose gleich `true` noch `false`.

## Konstruktor

- {{jsxref("Boolean/Boolean", "Boolean()")}}
  - : Erstellt `Boolean` Objekte. Wenn es als Funktion aufgerufen wird, gibt es primitive Werte des Typs Boolean zurück.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Boolean.prototype` definiert und werden von allen `Boolean` Instanzen geteilt.

- {{jsxref("Object/constructor", "Boolean.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Boolean` Instanzen ist der Anfangswert der {{jsxref("Boolean/Boolean", "Boolean")}} Konstruktor.

## Instanzmethoden

- {{jsxref("Boolean.prototype.toString()")}}
  - : Gibt einen String von entweder `true` oder `false` zurück, abhängig vom Wert des Objekts. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des `Boolean` Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}} Methode.

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
- [Boolean Datentyp](https://en.wikipedia.org/wiki/Boolean_data_type) auf Wikipedia
