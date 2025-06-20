---
title: JSON.stringify()
short-title: stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`JSON.stringify()`** statische Methode wandelt einen JavaScript-Wert in einen JSON-String um. Optional können Werte ersetzt werden, falls eine Ersetzungsfunktion angegeben ist, oder nur die angegebenen Eigenschaften eingeschlossen werden, wenn ein Ersetzungsarray angegeben ist.

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
  - : Der Wert, der in einen JSON-String konvertiert werden soll.
- `replacer` {{optional_inline}}
  - : Eine Funktion, die das Verhalten des Stringifizierungsprozesses ändert, oder ein Array von Zeichenfolgen und Zahlen, das die Eigenschaften von `value` angibt, die in die Ausgabe eingeschlossen werden sollen. Wenn `replacer` ein Array ist, werden alle Elemente in diesem Array, die keine Zeichenfolgen oder Zahlen sind (entweder primitives oder Wrapper-Objekte), einschließlich {{jsxref("Symbol")}}-Werten, vollständig ignoriert. Wenn `replacer` etwas anderes als eine Funktion oder ein Array ist (z. B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben), werden alle zeichenfolgenindizierten Eigenschaften des Objekts im resultierenden JSON-String eingeschlossen.
- `space` {{optional_inline}}

  - : Eine Zeichenfolge oder Zahl, die zur Einfügung von Leerzeichen (einschließlich Einrückung, Zeilenumbruchzeichen usw.) in den Ausgabe-JSON-String für bessere Lesbarkeit verwendet wird.

    Wenn dies eine Zahl ist, gibt sie die Anzahl der Leerzeichen an, die als Einrückung verwendet werden sollen, wobei sie auf 10 begrenzt ist (d.h. jede Zahl größer als `10` wird behandelt, als wäre sie `10`). Werte kleiner als 1 bedeuten, dass keine Leerzeichen verwendet werden sollen.

    Wenn dies eine Zeichenfolge ist, wird die Zeichenfolge (oder die ersten 10 Zeichen der Zeichenfolge, wenn sie länger ist) vor jedem verschachtelten Objekt oder Array eingefügt.

    Wenn `space` etwas anderes als eine Zeichenfolge oder Zahl ist (entweder ein primitives oder ein Wrapper-Objekt) - zum Beispiel [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben - werden keine Leerzeichen verwendet.

### Rückgabewert

Ein JSON-String, der den angegebenen Wert darstellt, oder undefined.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `value` enthält einen zyklischen Verweis.
    - Ein {{jsxref("BigInt")}}-Wert wird angetroffen.

## Beschreibung

`JSON.stringify()` wandelt einen Wert in die JSON-Notation um, die den Wert darstellt. Werte werden folgendermaßen stringifiziert:

- {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}} und {{jsxref("BigInt")}} (erhältlich über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) Objekte werden während der Stringifizierung in die entsprechenden primitiven Werte umgewandelt, gemäß der traditionellen Konversionssemantik. {{jsxref("Symbol")}}-Objekte (erhältlich über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden als normale Objekte behandelt.
- Der Versuch, {{jsxref("BigInt")}}-Werte zu serialisieren, wird scheitern. Hat der BigInt jedoch eine `toJSON()`-Methode (durch Monkey Patching: `BigInt.prototype.toJSON = ...`), kann diese Methode das Serialisierungsergebnis liefern. Diese Einschränkung stellt sicher, dass immer ein korrektes Serialisierungsverhalten (und sehr wahrscheinlich auch das entsprechende Deserialisierungsverhalten) explizit vom Benutzer bereitgestellt wird.
- {{jsxref("undefined")}}, {{jsxref("Function")}} und {{jsxref("Symbol")}}-Werte sind keine gültigen JSON-Werte. Sollte ein solcher Wert während der Umwandlung angetroffen werden, wird er entweder weggelassen (wenn im Objekt gefunden) oder in [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) geändert (wenn im Array gefunden). `JSON.stringify()` kann `undefined` zurückgeben, wenn "pure" Werte wie `JSON.stringify(() => {})` oder `JSON.stringify(undefined)` übergeben werden.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}}, sowie der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), werden alle als `null` betrachtet. (Im Gegensatz zu den Werten des vorherigen Punktes, würden diese jedoch nie weggelassen.)
- Arrays werden als Arrays serialisiert (eingeschlossen in eckige Klammern). Nur Array-Indizes zwischen 0 und `length - 1` (einschließlich) werden serialisiert; andere Eigenschaften werden ignoriert.
- Das spezielle rohe JSON-Objekt, das mit {{jsxref("JSON.rawJSON()")}} erstellt wurde, wird als der rohe JSON-Text serialisiert, den es enthält (durch Zugriff auf seine `rawJSON`-Eigenschaft).
- Für andere Objekte:

  - Alle {{jsxref("Symbol")}}-indizierten Eigenschaften werden vollständig ignoriert, selbst wenn der [`replacer`](#der_replacer-parameter)-Parameter verwendet wird.

  - Hat der Wert eine `toJSON()`-Methode, ist es verantwortlich, welche Daten serialisiert werden. Anstatt das Objekt zu serialisieren, wird der Wert, der von der `toJSON()`-Methode zurückgegeben wird, serialisiert. `JSON.stringify()` ruft `toJSON` mit einem Parameter `key` auf, der den gleichen semantischen Wert wie der `key`-Parameter der [`replacer`](#der_replacer-parameter)-Funktion hat:

    - Wenn dieses Objekt ein Eigenschaftswert ist, der Eigenschaftenname
    - Wenn es in einem Array ist, der Index im Array, als Zeichenfolge
    - Wenn `JSON.stringify()` direkt auf dieses Objekt angewendet wird, eine leere Zeichenfolge

    Alle {{jsxref("Temporal")}}-Objekte implementieren die `toJSON()`-Methode, die eine Zeichenfolge (gleich dem Aufruf von `toString()`) zurückgibt. Daher werden sie als Zeichenfolgen serialisiert. Ebenso implementieren {{jsxref("Date")}}-Objekte `toJSON()`, das dasselbe wie [`toISOString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) zurückgibt.

  - Es werden nur [enumerable own properties](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) besucht. Dies bedeutet, dass {{jsxref("Map")}}, {{jsxref("Set")}} usw. zu `"{}"` werden. Sie können den [`replacer`](#der_replacer-parameter)-Parameter verwenden, um sie in etwas Nützlicheres zu serialisieren.

    Eigenschaften werden mit dem gleichen Algorithmus wie [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) besucht, der eine wohldefinierte Reihenfolge hat und implementierungsübergreifend stabil ist. Zum Beispiel wird `JSON.stringify` auf demselben Objekt immer denselben String produzieren, und `JSON.parse(JSON.stringify(obj))` würde ein Objekt mit derselben Schlüsselreihenfolge wie das Original produzieren (vorausgesetzt, das Objekt ist vollständig JSON-serialisierbar).

### Der replacer-Parameter

Der `replacer`-Parameter kann entweder eine Funktion oder ein Array sein.

Als Array geben seine Elemente die Namen der Eigenschaften im Objekt an, die in den resultierenden JSON-String aufgenommen werden sollen. Nur Zeichenketten- und Zahlenwerte werden berücksichtigt; Symbolschlüssel werden ignoriert.

Als Funktion nimmt es zwei Parameter: den `key` und den `value`, der stringifiziert werden soll. Das Objekt, in dem der Schlüssel gefunden wurde, wird als `this`-Kontext der `replacer`-Funktion bereitgestellt.

Die `replacer`-Funktion wird auch für das initial stringifizierte Objekt aufgerufen, in welchem Fall der `key` eine leere Zeichenfolge (`""`) ist. Anschließend wird sie für jede Eigenschaft des Objekts oder Arrays aufgerufen, das stringifiziert wird. Array-Indizes werden in ihrer Zeichenform als `key` bereitgestellt. Der aktuelle Eigenschaftswert wird durch den Rückgabewert der `replacer`-Funktion für die Stringifizierung ersetzt. Das bedeutet:

- Wenn Sie eine Zahl, Zeichenkette, boolean oder `null` zurückgeben, wird dieser Wert direkt serialisiert und als Eigenschaftswert verwendet. (Die Rückgabe eines BigInt löst ebenfalls einen Fehler aus.)
- Wenn Sie eine {{jsxref("Function")}}, {{jsxref("Symbol")}} oder {{jsxref("undefined")}} zurückgeben, wird die Eigenschaft in der Ausgabe nicht enthalten.
- Wenn Sie ein anderes Objekt zurückgeben, wird das Objekt rekursiv stringifiziert, indem die `replacer`-Funktion auf jede Eigenschaft angewendet wird.

> [!NOTE]
> Beim Analysieren von JSON, das mit `replacer`-Funktionen erzeugt wurde, möchten Sie möglicherweise den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter)-Parameter verwenden, um die Umkehrung der Operation durchzuführen.

Typischerweise würde sich der Index von Array-Elementen niemals verschieben (selbst wenn das Element ein ungültiger Wert wie eine Funktion ist, wird es `null` statt ausgelassen). Die Verwendung der `replacer`-Funktion erlaubt die Kontrolle der Reihenfolge der Array-Elemente, indem ein unterschiedliches Array zurückgegeben wird.

### Der space-Parameter

Der `space`-Parameter kann verwendet werden, um den Abstand im finalen String zu kontrollieren.

- Wenn es eine Zahl ist, werden aufeinanderfolgende Ebenen der Stringifizierung jeweils durch diese Anzahl an Leerzeichen eingerückt.
- Wenn es eine Zeichenkette ist, werden aufeinanderfolgende Ebenen durch diese Zeichenkette eingerückt.

Jede Ebene der Einrückung wird niemals länger als 10 sein. Zahlenwerte von `space` werden auf 10 begrenzt, und Zeichenfolgenwerte werden auf 10 Zeichen gekürzt.

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

### Verwendung einer Funktion als replacer

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

Wenn Sie möchten, dass der `replacer` ein initiales Objekt von einem Schlüssel mit einer leeren Zeichenkettens-Eigenschaft unterscheidet (da beide den leeren String als Schlüssel und möglicherweise ein Objekt als Wert geben würden), müssen Sie die Iterationsanzahl verfolgen (wenn sie über der ersten Iteration liegt, handelt es sich um einen echten leeren Zeichenfolgeschlüssel).

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

### Verwendung eines Arrays als replacer

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

### Verwendung des space-Parameters

Indizieren Sie die Ausgabe mit einem Leerzeichen:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Durch die Verwendung eines Tab-Zeichens wird das Erscheinungsbild eines Standard-Pretty-Prints imitiert:

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

### toJSON()-Verhalten

Das Definieren von `toJSON()` für ein Objekt ermöglicht das Überschreiben seines Serialisierungsverhaltens.

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

### Problem bei der Serialisierung von zyklischen Referenzen

Da das [JSON-Format](https://www.json.org/) keine Objektreferenzen unterstützt (obwohl ein [IETF-Draft existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), wird ein {{jsxref("TypeError")}} ausgelöst, wenn man versucht, ein Objekt mit zyklischen Referenzen zu kodieren.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Um zyklische Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die sie unterstützt (z. B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford) oder selbst eine Lösung implementieren, die das Finden und Ersetzen (oder Entfernen) der zyklischen Referenzen durch serialisierbare Werte erfordert.

Wenn Sie `JSON.stringify()` verwenden, um ein Objekt tiefgreifend zu kopieren, möchten Sie stattdessen möglicherweise [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, das zyklische Referenzen unterstützt. JavaScript-Engine-APIs zur binären Serialisierung, wie [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), unterstützen ebenfalls zyklische Referenzen.

### Verwendung von JSON.stringify() mit localStorage

In einem Fall, in dem Sie ein vom Benutzer erstelltes Objekt speichern und es auch nach dem Schließen des Browsers wiederherstellen möchten, ist das folgende Beispiel ein Modell für die Anwendbarkeit von `JSON.stringify()`:

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

### Well-formed JSON.stringify()

Engines, die die [well-formed JSON.stringify-Spezifikation](https://github.com/tc39/proposal-well-formed-stringify) implementieren, werden einzelne Surrogate (jedes Codepunkt von U+D800 bis U+DFFF) mit Unicode-Escape-Sequenzen anstelle von wörtlichen Surrogaten stringifizieren. Vor dieser Änderung konnten solche Zeichenfolgen nicht in gültigem UTF-8 oder UTF-16 codiert werden:

```js
JSON.stringify("\uD800"); // '"�"'
```

Mit dieser Änderung stellt `JSON.stringify()` einzelne Surrogate mit JSON-Escape-Sequenzen dar, die _in_ gültigem UTF-8 oder UTF-16 codiert werden können:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Diese Änderung sollte rückwärtskompatibel sein, solange Sie das Ergebnis von `JSON.stringify()` an APIs wie `JSON.parse()` übergeben, die jeden gültigen JSON-Text akzeptieren, da sie Unicode-Escapes einzelner Surrogate als identisch mit den einzelnen Surrogaten selbst behandeln. _Nur_ wenn Sie das Ergebnis von `JSON.stringify()` direkt interpretieren, müssen Sie `JSON.stringify()`s zwei mögliche Codierungen dieser Codepunkte sorgfältig handhaben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.stringify`-Verhaltens (Symbol, wohlgeformte Unicode, rohes JSON) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
