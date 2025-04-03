---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die **`JSON.stringify()`** statische Methode konvertiert einen JavaScript-Wert in einen JSON-String. Dabei können optional Werte ersetzt werden, falls eine Ersetzungsfunktion angegeben wird, oder es können nur die angegebenen Eigenschaften einbezogen werden, falls ein Ersetzungsarray spezifiziert wird.

{{InteractiveExample("JavaScript Demo: JSON.stringify()", "taller")}}

```js interactive-example
console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: '{"x":5,"y":6}'

console.log(
  JSON.stringify([new Number(3), new String("false"), new Boolean(false)]),
);
// Expected output: '[3,"false",false]'

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] }));
// Expected output: '{"x":[10,null,null,null]}'

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Expected output: '"2006-01-02T15:04:05.000Z"'
```

## Syntax

```js-nolint
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
```

### Parameter

- `value`
  - : Der zu konvertierende Wert in einen JSON-String.
- `replacer` {{optional_inline}}
  - : Eine Funktion, die das Verhalten des Stringifizierungsprozesses verändert, oder ein Array aus Zeichenfolgen und Zahlen, das die Eigenschaften von `value` spezifiziert, die in der Ausgabe enthalten sein sollen. Wenn `replacer` ein Array ist, werden alle Elemente in diesem Array, die keine Zeichenfolgen oder Zahlen sind (entweder primitive oder Wrapper-Objekte), einschließlich {{jsxref("Symbol")}}-Werte, komplett ignoriert. Wenn `replacer` etwas anderes als eine Funktion oder ein Array ist (z.B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht bereitgestellt), werden alle string-bezogenen Eigenschaften des Objekts im resultierenden JSON-String enthalten.
- `space` {{optional_inline}}

  - : Eine Zeichenfolge oder Zahl, die verwendet wird, um Leerzeichen (einschließlich Einrückungen, Zeilenumbrüche etc.) in den ausgegebenen JSON-String einzufügen, um die Lesbarkeit zu erhöhen.

    Ist dies eine Zahl, gibt sie die Anzahl der Leerzeichen an, die als Einrückung verwendet werden sollen, begrenzt auf 10 (das heißt, jede Zahl größer als `10` wird behandelt, als wäre sie `10`). Werte kleiner als 1 bedeuten, dass kein Leerzeichen verwendet werden soll.

    Ist dies eine Zeichenfolge, wird die Zeichenfolge (oder die ersten 10 Zeichen der Zeichenfolge, wenn sie länger ist) vor jedem verschachtelten Objekt oder Array eingefügt.

    Wenn `space` etwas anderes als eine Zeichenfolge oder Zahl ist (kann entweder ein Primitiv oder ein Wrapper-Objekt sein) — z.B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht bereitgestellt — werden keine Leerzeichen verwendet.

### Rückgabewert

Ein JSON-String, der den gegebenen Wert darstellt, oder `undefined`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `value` enthält eine zirkuläre Referenz.
    - Ein {{jsxref("BigInt")}}-Wert wird angetroffen.

## Beschreibung

`JSON.stringify()` konvertiert einen Wert in die JSON-Notation, die den Wert darstellt. Werte werden auf folgende Weise stringifiziert:

- {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}} und {{jsxref("BigInt")}} (erreichbar über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) Objekte werden während des Stringifizierens in die entsprechenden primitiven Werte konvertiert, gemäß der traditionellen Konvertierungssemantik. {{jsxref("Symbol")}}-Objekte (erreichbar über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden als einfache Objekte behandelt.
- Der Versuch, {{jsxref("BigInt")}}-Werte zu serialisieren, wird einen Fehler auslösen. Hat das BigInt jedoch eine `toJSON()`-Methode (durch Monkey Patching: `BigInt.prototype.toJSON = ...`), kann diese Methode das Serialisierungsergebnis liefern. Diese Einschränkung stellt sicher, dass ein ordnungsgemäßes Serialisierungsverhalten (und sehr wahrscheinlich das zugehörige Deserialisierungsverhalten) immer explizit vom Benutzer bereitgestellt wird.
- {{jsxref("undefined")}}, {{jsxref("Function")}}, und {{jsxref("Symbol")}}-Werte sind keine gültigen JSON-Werte. Wenn solche Werte während der Konvertierung angetroffen werden, werden sie entweder ausgelassen (wenn sie sich in einem Objekt befinden) oder in [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) geändert (wenn sie in einem Array gefunden werden). `JSON.stringify()` kann `undefined` zurückgeben, wenn "reine" Werte wie `JSON.stringify(() => {})` oder `JSON.stringify(undefined)` übergeben werden.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}} sowie der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werden alle als `null` betrachtet. (Aber im Gegensatz zu den Werten im vorherigen Punkt werden sie niemals ausgelassen.)
- Arrays werden als Arrays serialisiert (eingeschlossen in eckige Klammern). Nur Array-Indizes zwischen 0 und `length - 1` (einschließlich) werden serialisiert; andere Eigenschaften werden ignoriert.
- Das spezielle Roh-JSON-Objekt, das mit {{jsxref("JSON.rawJSON()")}} erstellt wurde, wird als das rohe JSON-Text serialisiert, das es enthält (durch Zugriff auf seine `rawJSON`-Eigenschaft).
- Für andere Objekte:

  - Alle {{jsxref("Symbol")}}-Eigenschaften werden komplett ignoriert, auch wenn der [`replacer`](#der_`replacer`_parameter) Parameter verwendet wird.

  - Wenn der Wert eine `toJSON()`-Methode hat, ist es verantwortlich zu definieren, welche Daten serialisiert werden. Anstelle des Objekts wird der Wert serialisiert, der von der `toJSON()`-Methode zurückgegeben wird, wenn sie aufgerufen wird. `JSON.stringify()` ruft `toJSON` mit einem Parameter auf, dem `key`, welcher dieselben Semantiken wie der `key`-Parameter der [`replacer`](#der_`replacer`_parameter)-Funktion hat:

    - Wenn dieses Objekt ein Eigenschaftswert ist, der Eigenschaftenname.
    - Wenn es in einem Array ist, der Index im Array, als Zeichenfolge.
    - Wenn `JSON.stringify()` direkt auf diesem Objekt aufgerufen wurde, ein leerer String.

    Alle {{jsxref("Temporal")}}-Objekte implementieren die `toJSON()`-Methode, die eine Zeichenfolge zurückgibt (dieselbe wie ein Aufruf von `toString()`). Daher werden sie als Zeichenfolgen serialisiert. Ähnlich implementieren {{jsxref("Date")}}-Objekte `toJSON()`, was dasselbe zurückgibt wie [`toISOString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).

  - Es werden nur [zählbare eigenen Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) besucht. Das bedeutet, {{jsxref("Map")}}, {{jsxref("Set")}} usw. werden zu `"{}"`. Sie können den [`replacer`](#der_`replacer`_parameter) Parameter verwenden, um sie in etwas Nützlicheres zu serialisieren.

    Eigenschaften werden mit demselben Algorithmus besucht wie [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), der eine gut definierte Reihenfolge hat und stabil über Implementationen hinweg ist. Zum Beispiel wird `JSON.stringify` auf demselben Objekt immer denselben String erzeugen, und `JSON.parse(JSON.stringify(obj))` würde ein Objekt mit derselben Schlüsselfolge wie das Original erzeugen (vorausgesetzt, dass das Objekt komplett JSON-serialisierbar ist).

### Der `replacer` Parameter

Der `replacer` Parameter kann entweder eine Funktion oder ein Array sein.

Als Array geben seine Elemente die Namen der Eigenschaften des Objekts an, die im resultierenden JSON-String enthalten sein sollen. Nur Zeichenfolgen und Zahlenwerte werden berücksichtigt; Symbol-Schlüssel werden ignoriert.

Als Funktion nimmt es zwei Parameter: den `key` und den `value`, der stringifiziert wird. Das Objekt, in dem der Schlüssel gefunden wurde, wird als `this` Kontext des `replacer` bereitgestellt.

Die `replacer` Funktion wird auch für das initial zu stringifizierende Objekt aufgerufen, in diesem Fall ist der `key` ein leerer String (`""`). Sie wird dann für jede Eigenschaft auf dem Objekt oder Array, das stringifiziert wird, aufgerufen. Array-Indizes werden in ihrer Zeichenform als `key` bereitgestellt. Der aktuelle Eigenschaftswert wird für die Stringifizierung durch den Rückgabewert des `replacer` ersetzt. Das bedeutet:

- Wenn Sie eine Zahl, Zeichenfolge, Boolean oder `null` zurückgeben, wird dieser Wert direkt serialisiert und als Eigenschaftswert verwendet. (Das Zurückgeben eines BigInt wird ebenfalls einen Fehler auslösen.)
- Wenn Sie eine {{jsxref("Function")}}, ein {{jsxref("Symbol")}} oder {{jsxref("undefined")}} zurückgeben, wird die Eigenschaft nicht in die Ausgabe aufgenommen.
- Wenn Sie ein anderes Objekt zurückgeben, wird das Objekt rekursiv stringifiziert, wobei die `replacer` Funktion auf jede Eigenschaft aufgerufen wird.

> [!NOTE]
> Wenn Sie JSON analysieren, das mit `replacer` Funktionen generiert wurde, möchten Sie wahrscheinlich den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) Parameter verwenden, um die umgekehrte Operation durchzuführen.

Typischerweise würden sich Array-Elemente nicht verschieben (auch wenn das Element ein ungültiger Wert wie eine Funktion ist, wird es `null` statt ausgelassen). Die Verwendung der `replacer` Funktion ermöglicht es Ihnen, die Reihenfolge der Array-Elemente zu steuern, indem Sie ein anderes Array zurückgeben.

### Der `space` Parameter

Der `space` Parameter kann verwendet werden, um den Abstand im endgültigen String zu steuern.

- Wenn er eine Zahl ist, wird jede nachfolgende Ebene in der Stringifizierung um diese Anzahl von Leerzeichen eingezogen.
- Wenn er eine Zeichenfolge ist, werden nachfolgende Ebenen mit dieser Zeichenfolge eingezogen.

Jede Einrückungsebene wird niemals länger als 10 sein. Zahlwerte von `space` sind auf 10 begrenzt, und Zeichenfolgenwerte sind auf 10 Zeichen gekürzt.

## Beispiele

### Verwendung von JSON.stringify

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(1906, 0, 2, 15, 4, 5));
// '"1906-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]);
// '[3,"false",false]'

// String-keyed array elements are not enumerable and make no sense in JSON
const a = ["foo", "bar"];
a["baz"] = "quux"; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] });
// '{"x":[10,null,null,null]}'

// Standard data structures
JSON.stringify([
  new Set([1]),
  new Map([[1, 2]]),
  new WeakSet([{ a: 1 }]),
  new WeakMap([[{ a: 1 }, 2]]),
]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([
  new Uint8Array([1]),
  new Uint8ClampedArray([1]),
  new Uint16Array([1]),
  new Uint32Array([1]),
]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({
  x: 5,
  y: 6,
  toJSON() {
    return this.x + this.y;
  },
});
// '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, (k, v) => {
  if (typeof k === "symbol") {
    return "a symbol";
  }
});
// undefined

// Non-enumerable properties:
JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  }),
);
// '{"y":"y"}'

// BigInt values throw
JSON.stringify({ x: 2n });
// TypeError: BigInt value can't be serialized in JSON
```

### Verwendung einer Funktion als Ersetzer

```js
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'
```

Wenn Sie möchten, dass der `replacer` ein initiales Objekt von einem Schlüssel mit einer leeren Zeichenfolge unterscheidet (da beide die leere Zeichenfolge als Schlüssel geben würden und potenziell ein Objekt als Wert), müssen Sie die Anzahl der Iterationen verfolgen (wenn es über die erste Iteration hinausgeht, ist es ein echter leerer Zeichenfolgeschlüssel).

```js
function makeReplacer() {
  let isInitial = true;

  return (key, value) => {
    if (isInitial) {
      isInitial = false;
      return value;
    }
    if (key === "") {
      // Omit all properties with name "" (except the initial object)
      return undefined;
    }
    return value;
  };
}

const replacer = makeReplacer();
console.log(JSON.stringify({ "": 1, b: 2 }, replacer)); // "{"b":2}"
```

### Verwendung eines Arrays als Ersetzer

```js
const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', only keep "week" and "month" properties
```

### Verwendung des space Parameters

Rücken Sie die Ausgabe mit einem Leerzeichen ein:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Die Verwendung eines Tab-Zeichens ahmt ein standardmäßiges hübsch bedrucktes Erscheinungsbild nach:

<!-- markdownlint-disable MD010 -->

```js
console.log(JSON.stringify({ uno: 1, dos: 2 }, null, "\t"));
/*
{
	"uno": 1,
	"dos": 2
}
*/
```

<!-- markdownlint-enable MD010 -->

### `toJSON()` Verhalten

Die Definition von `toJSON()` für ein Objekt ermöglicht das Überschreiben seines Serialisierungsverhaltens.

```js
const obj = {
  data: "data",

  toJSON(key) {
    return key ? `Now I am a nested object under key '${key}'` : this;
  },
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj });
// '{"obj":"Now I am a nested object under key 'obj'"}'

JSON.stringify([obj]);
// '["Now I am a nested object under key '0'"]'
```

### Problem beim Serialisieren von zirkulären Referenzen

Da das [JSON-Format](https://www.json.org/) keine Objektreferenzen unterstützt (obwohl ein [IETF-Entwurf existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, ein Objekt mit zirkulären Referenzen zu kodieren.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Um zirkuläre Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die sie unterstützt (z.B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford) oder eine Lösung selbst implementieren, die es erfordert, die zyklischen Referenzen durch serialisierbare Werte zu finden und zu ersetzen (oder zu entfernen).

Wenn Sie `JSON.stringify()` verwenden, um ein Objekt tief zu kopieren, möchten Sie stattdessen vielleicht [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, das zirkuläre Referenzen unterstützt. JavaScript-Engine-APIs für die binäre Serialisierung, wie [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), unterstützen ebenfalls zirkuläre Referenzen.

### Verwendung von JSON.stringify() mit localStorage

Falls Sie ein vom Benutzer erstelltes Objekt speichern und es wiederherstellen möchten, selbst nachdem der Browser geschlossen wurde, ist das folgende Beispiel ein Modell für die Anwendbarkeit von `JSON.stringify()`:

```js
// Creating an example of JSON
const session = {
  screens: [],
  state: true,
};
session.screens.push({ name: "screenA", width: 450, height: 250 });
session.screens.push({ name: "screenB", width: 650, height: 350 });
session.screens.push({ name: "screenC", width: 750, height: 120 });
session.screens.push({ name: "screenD", width: 250, height: 60 });
session.screens.push({ name: "screenE", width: 390, height: 120 });
session.screens.push({ name: "screenF", width: 1240, height: 650 });

// Converting the JSON string with JSON.stringify()
// then saving with localStorage in the name of session
localStorage.setItem("session", JSON.stringify(session));

// Example of how to transform the String generated through
// JSON.stringify() and saved in localStorage in JSON object again
const restoredSession = JSON.parse(localStorage.getItem("session"));

// Now restoredSession variable contains the object that was saved
// in localStorage
console.log(restoredSession);
```

### Wohlgeformtes JSON.stringify()

Engines, die die [wohlgeformte JSON.stringify-Spezifikation](https://github.com/tc39/proposal-well-formed-stringify) implementieren, werden alleinstehende Surrogates (jedes Code-Punkt von U+D800 bis U+DFFF) unter Verwendung von Unicode-Escape-Sequenzen anstatt buchstäblich (Ausgabe von alleinstehenden Surrogates) stringifizieren. Vor dieser Änderung konnten solche Zeichenfolgen nicht in gültigem UTF-8 oder UTF-16 kodiert werden:

```js
JSON.stringify("\uD800"); // '"�"'
```

Aber mit dieser Änderung stellt `JSON.stringify()` alleinstehende Surrogates unter Verwendung von JSON-Escape-Sequenzen dar, die _in_ validem UTF-8 oder UTF-16 kodiert werden können:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Diese Änderung sollte rückwärtskompatibel sein, solange Sie das Ergebnis von `JSON.stringify()` an APIs wie `JSON.parse()` übergeben, die jeden gültigen JSON-Text akzeptieren, da sie Unicode-Escapes von alleinstehenden Surrogates genauso behandeln wie die alleinstehenden Surrogates selbst. _Nur_ wenn Sie das Ergebnis von `JSON.stringify()` direkt interpretieren, müssen Sie die beiden möglichen Kodierungen dieser Code-Punkte von `JSON.stringify()` sorgfältig handhaben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.stringify`-Verhaltens (Symbol, wohlgeformtes Unicode, rohes JSON) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
