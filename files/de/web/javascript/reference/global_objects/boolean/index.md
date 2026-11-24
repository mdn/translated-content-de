---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

**`Boolean`**-Werte können einen von zwei Werten annehmen: `true` oder `false`. Sie repräsentieren den Wahrheitswert einer logischen Aussage.

## Beschreibung

Boolean-Werte entstehen typischerweise durch [relationale Operatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators), [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators) und [logisches NICHT (`!`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT). Sie können auch von Funktionen zurückgegeben werden, die Bedingungen prüfen, etwa {{jsxref("Array.isArray()")}}. Beachten Sie, dass [binäre logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) wie `&&` und `||` die Werte ihrer Operanden zurückgeben, die Boolean-Werte sein können, aber nicht müssen.

Boolean-Werte werden typischerweise für bedingte Prüfungen verwendet, etwa als Bedingung in {{jsxref("Statements/if...else", "if...else")}}- und {{jsxref("Statements/while", "while")}}-Anweisungen, beim [bedingten Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) (`? :`) oder als Rückgabewert der Prädikatfunktion von {{jsxref("Array.prototype.filter()")}}.

Sie müssen einen Wert nur selten ausdrücklich in einen Boolean-Wert umwandeln, da JavaScript dies in booleschen Kontexten automatisch tut. Sie können daher jeden Wert entsprechend seinem [Wahrheitswert](#boolean-konvertierung) wie einen Boolean-Wert verwenden. Nutzen Sie in Ihrem Code nach Möglichkeit `if (condition)` und `if (!condition)` statt `if (condition === true)` oder `if (condition === false)`, um diese Konvention zu nutzen. Wenn Werte, die Bedingungen repräsentieren, immer Boolean-Werte sind, kann das jedoch die Absicht Ihres Codes verdeutlichen.

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

### Boolean-Primitivwerte und Boolean-Objekte

Um Werte, die keine Boolean-Werte sind, umzuwandeln, verwenden Sie `Boolean` als Funktion oder den Operator [doppeltes NICHT](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!). Verwenden Sie den `Boolean()`-Konstruktor nicht mit `new`.

```js example-good
const good = Boolean(expression);
const good2 = !!expression;
```

```js example-bad
const bad = new Boolean(expression); // don't use this!
```

Der Grund dafür ist, dass _alle_ Objekte {{Glossary("truthy", "truthy")}} sind und in Kontexten wie bedingten Anweisungen als `true` ausgewertet werden – auch ein `Boolean`-Objekt, dessen gekapselter Wert `false` ist. (Siehe auch den Abschnitt [Boolean-Konvertierung](#boolean-konvertierung) weiter unten.)

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
> Sie sollten `Boolean` nur selten als Konstruktor verwenden.

### Boolean-Konvertierung

Viele integrierte Operationen, die Boolean-Werte erwarten, konvertieren ihre Argumente zunächst in Boolean-Werte. [Diese Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean) lässt sich wie folgt zusammenfassen:

- Boolean-Werte werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `false`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `false`.
- `0`, `-0` und `NaN` werden zu `false`; andere Zahlen werden zu `true`.
- `0n` wird zu `false`; andere [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden zu `true`.
- Die leere Zeichenfolge `""` wird zu `false`; andere Zeichenfolgen werden zu `true`.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werden zu `true`.
- Alle Objekte werden zu `true`.

> [!NOTE]
> Aufgrund eines veralteten Verhaltens ergibt [`document.all`](/de/docs/Web/API/Document/all) bei der Verwendung als Boolean-Wert `false`, obwohl es ein Objekt ist. Diese Eigenschaft ist veraltet und nicht standardisiert und sollte nicht verwendet werden.

> [!NOTE]
> Anders als bei anderen Typumwandlungen, etwa der [Konvertierung in Zeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) oder der [Konvertierung in Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wird bei der Boolean-Konvertierung nicht versucht, [Objekte durch den Aufruf benutzerdefinierter Methoden in Primitivwerte umzuwandeln](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).

Mit anderen Worten: Nur wenige Werte werden zu `false` konvertiert. Diese werden als {{Glossary("Falsy", "falsy")}} bezeichnet. Alle anderen Werte werden als {{Glossary("Truthy", "truthy")}} bezeichnet. Ob ein Wert truthy ist, spielt bei logischen Operatoren, bedingten Anweisungen und in jedem anderen booleschen Kontext eine Rolle.

In JavaScript gibt es zwei Möglichkeiten, denselben Effekt zu erzielen:

- [Doppeltes NICHT](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!): `!!x` negiert `x` zweimal und wandelt `x` dabei nach dem oben beschriebenen Algorithmus in einen Boolean-Wert um.
- Die Funktion [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean): `Boolean(x)` verwendet denselben Algorithmus, um `x` umzuwandeln.

Beachten Sie, dass ein Wert nicht allein deshalb truthy oder falsy ist, weil er mit `true` beziehungsweise `false` [lose gleich](/de/docs/Web/JavaScript/Reference/Operators/Equality) ist.

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

`[]` ist truthy, aber auch lose gleich `false`. Es ist truthy, weil alle Objekte truthy sind. Beim Vergleich mit dem Primitivwert `false` wird `[]` jedoch ebenfalls in einen Primitivwert umgewandelt: über {{jsxref("Array.prototype.toString()")}} in `""`. Beim Vergleich einer Zeichenfolge mit einem Boolean-Wert werden [beide in Zahlen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Beide werden zu `0`, sodass `[] == false` den Wert `true` ergibt. Im Allgemeinen unterscheiden sich Falsy-Werte und Werte, für die `== false` gilt, in folgenden Fällen:

- `NaN`, `undefined` und `null` sind falsy, aber nicht lose gleich `false`.
- `"0"` (und andere Zeichenfolgenliterale, die nicht `""` sind, aber [zu 0 konvertiert werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)) ist truthy, aber lose gleich `false`.
- Objekte sind immer truthy, ihre primitive Repräsentation kann aber lose gleich `false` sein.

Noch seltener sind truthy-Werte lose gleich `true`. Jeder Wert ist entweder truthy oder falsy, die meisten Werte sind jedoch weder mit `true` noch mit `false` lose gleich.

### Das Boolean.prototype-Objekt

Aus Gründen der Abwärtskompatibilität ist `Boolean.prototype` ein `Boolean`-Objekt, das den Wert `false` kapselt.

```js
console.log(Boolean.prototype.valueOf()); // false (expected to throw error)
console.log(Boolean(Boolean.prototype)); // true (still a truthy object)
```

## Konstruktor

- {{jsxref("Boolean/Boolean", "Boolean()")}}
  - : Erstellt `Boolean`-Objekte. Bei einem Aufruf als Funktion gibt `Boolean()` Primitivwerte vom Typ Boolean zurück.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Boolean.prototype` definiert und werden von allen `Boolean`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Boolean.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Boolean`-Instanzen ist der Anfangswert der {{jsxref("Boolean/Boolean", "Boolean")}}-Konstruktor.

## Instanzmethoden

- {{jsxref("Boolean.prototype.toString()")}}
  - : Gibt abhängig vom Wert des Objekts die Zeichenfolge `true` oder `false` zurück. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : Gibt den Primitivwert des `Boolean`-Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.

## Beispiele

### false-Werte erstellen

```js
const bNoParam = Boolean();
const bZero = Boolean(0);
const bNull = Boolean(null);
const bEmptyString = Boolean("");
const bfalse = Boolean(false);
```

### true-Werte erstellen

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
- [Boolean-Primitivwerte](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- [Boolescher Datentyp](https://en.wikipedia.org/wiki/Boolean_data_type) auf Wikipedia
