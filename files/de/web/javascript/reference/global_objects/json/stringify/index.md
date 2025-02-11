---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`JSON.stringify()`** konvertiert einen JavaScript-Wert in einen JSON-String. Optional können Werte ersetzt werden, falls eine `replacer`-Funktion angegeben wird, oder es können nur die angegebenen Eigenschaften einbezogen werden, falls ein `replacer`-Array angegeben wird.

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
  - : Der Wert, der in einen JSON-String umgewandelt werden soll.
- `replacer` {{optional_inline}}
  - : Eine Funktion, die das Verhalten des Stringifizierungsprozesses ändert, oder ein Array von Strings und Zahlen, das die einzuschließenden Eigenschaften von `value` im Ergebnis definiert. Wenn `replacer` ein Array ist, werden alle Elemente, die keine Strings oder Zahlen (entweder primitive Werte oder Wrapper-Objekte) sind, einschließlich {{jsxref("Symbol")}}-Werte, vollständig ignoriert. Falls `replacer` keine Funktion oder kein Array ist (z.B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben), werden alle stringbezogenen Eigenschaften des Objekts in den resultierenden JSON-String einbezogen.
- `space` {{optional_inline}}

  - : Ein String oder eine Zahl, die verwendet wird, um Leerzeichen (z. B. Einrückung, Zeilenumbrüche usw.) im JSON-String zur besseren Lesbarkeit einzufügen.

    Wenn dies eine Zahl ist, gibt sie die Anzahl der Leerzeichen an, die für die Einrückung verwendet werden sollen. Werte größer als `10` werden auf `10` begrenzt, und Werte kleiner als `1` bedeuten, dass keine Leerzeichen verwendet werden.

    Wenn dies ein String ist, wird der String (oder die ersten 10 Zeichen des Strings, falls er länger ist) vor jedes geschachtelte Objekt oder Array eingefügt.

    Falls `space` kein String oder keine Zahl ist (kann sowohl primitiv als auch ein Wrapper-Objekt sein) — z. B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben — wird kein Leerraum verwendet.

### Rückgabewert

Ein JSON-String, der den angegebenen Wert darstellt, oder `undefined`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `value` enthält eine zirkuläre Referenz.
    - Ein {{jsxref("BigInt")}}-Wert wird angetroffen.

## Beschreibung

`JSON.stringify()` konvertiert einen Wert in die JSON-Notation, die diesen Wert darstellt. Die Werte werden folgendermaßen stringifiziert:

- {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}}, und {{jsxref("BigInt")}}-Objekte (erzeugt mit [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden gemäß den traditionellen Umwandlungssemantiken in entsprechende primitive Werte umgewandelt. {{jsxref("Symbol")}}-Objekte (erzeugt mit [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden als gewöhnliche Objekte behandelt.
- Der Versuch, {{jsxref("BigInt")}}-Werte zu serialisieren, wird fehlschlagen. Falls das `BigInt` jedoch eine `toJSON()`-Methode hat (zum Beispiel durch Monkey Patching: `BigInt.prototype.toJSON = ...`), kann diese Methode das Serialisierungsergebnis bereitstellen. Diese Beschränkung stellt sicher, dass ein korrektes Serialisierungs- (und wahrscheinlich auch Deserialisierungs-)Verhalten vom Benutzer ausdrücklich bereitgestellt wird.
- {{jsxref("undefined")}}, {{jsxref("Function")}}, und {{jsxref("Symbol")}}-Werte sind keine gültigen JSON-Werte. Falls solche Werte während der Konvertierung gefunden werden, werden sie entweder ausgelassen (wenn sie in einem Objekt gefunden werden) oder auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) geändert (wenn sie in einem Array gefunden werden). `JSON.stringify()` kann `undefined` zurückgeben, wenn "reine" Werte wie `JSON.stringify(() => {})` oder `JSON.stringify(undefined)` übergeben werden.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}} sowie der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werden alle als `null` betrachtet. (Aber anders als die in der vorherigen Aussage genannten Werte werden sie niemals ausgelassen.)
- Arrays werden als Arrays serialisiert (eingeschlossen von eckigen Klammern). Nur Array-Indizes zwischen 0 und `length - 1` (inklusiv) werden serialisiert; andere Eigenschaften werden ignoriert.
- Das spezielle rohe JSON-Objekt, das durch {{jsxref("JSON.rawJSON()")}} erzeugt wird, wird als der unverarbeitete JSON-Text, den es enthält (durch Zugriff auf seine Eigenschaft `rawJSON`), serialisiert.
- Für andere Objekte:
  - Alle {{jsxref("Symbol")}}-bezogenen Eigenschaften werden vollständig ignoriert, selbst bei Verwendung des [`replacer`](#der_parameter_`replacer`)-Parameters.
  - Falls der Wert eine `toJSON()`-Methode hat, definiert diese Methode, welche Daten serialisiert werden. Statt das Objekt zu serialisieren, wird der Wert, der durch die `toJSON()`-Methode zurückgegeben wird, serialisiert. `JSON.stringify()` ruft `toJSON` mit einem Parameter auf, dem `key`, der dieselbe Semantik hat wie der `key`-Parameter der [`replacer`](#der_parameter_`replacer`)-Funktion:
    - Wenn sich dieses Objekt in einer Eigenschaft befindet, ist `key` der Eigenschaftsname.
    - Wenn es sich in einem Array befindet, ist `key` der Index im Array, als String.
    - Falls `JSON.stringify()` direkt auf diesem Objekt aufgerufen wird, ist `key` ein leerer String.
      Alle {{jsxref("Temporal")}}-Objekte implementieren die `toJSON()`-Methode, die einen String zurückgibt (dieselbe wie der Aufruf von `toString()`). Somit werden sie als Strings serialisiert. Ebenso implementieren {{jsxref("Date")}}-Objekte `toJSON()`, was dasselbe zurückgibt wie [`toISOString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
  - Nur [enumerierbare eigene Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) werden bearbeitet. Dies bedeutet, dass {{jsxref("Map")}}, {{jsxref("Set")}}, usw. zu `"{}"` werden. Sie können den [`replacer`](#der_parameter_`replacer`)-Parameter verwenden, um sie in etwas Nützlicheres zu serialisieren.
    Eigenschaften werden nach demselben Algorithmus besucht wie [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), welche eine gut definierte Reihenfolge hat und stabil über Implementierungen hinweg ist. Beispielsweise wird `JSON.stringify` für dasselbe Objekt immer denselben String erzeugen, und `JSON.parse(JSON.stringify(obj))` würde ein Objekt mit derselben Schlüsselsortierung wie das Original erzeugen (vorausgesetzt, das Objekt ist vollständig JSON-serialisierbar).

### Der Parameter `replacer`

Der Parameter `replacer` kann entweder eine Funktion oder ein Array sein.

Als Array geben seine Elemente die Namen der Eigenschaften an, die im resultierenden JSON-String enthalten sein sollen. Nur String- und Zahlenwerte werden berücksichtigt; Symbol-Schlüssel werden ignoriert.

Als Funktion nimmt sie zwei Parameter: den `key` und den `value`, der serialisiert wird. Das Objekt, in dem der Schlüssel gefunden wurde, dient als `this`-Kontext des `replacer`.

Die `replacer`-Funktion wird auch für das ursprüngliche Objekt aufgerufen, das stringifiziert wird. In diesem Fall ist der `key` ein leerer String (`""`). Anschließend wird sie für jede Eigenschaft des Objekts oder Arrays aufgerufen, das serialisiert wird. Array-Indizes werden in ihrer Zeichenfolgenform als `key` angegeben. Der aktuelle Eigenschaftenwert wird für die Serialisierung durch den von `replacer` zurückgegebenen Wert ersetzt. Dies bedeutet:

- Wenn Sie eine Zahl, einen String, einen Boolean oder `null` zurückgeben, wird dieser Wert direkt serialisiert und als Eigenschaftswert verwendet. (Die Rückgabe eines BigInt löst ebenfalls einen Fehler aus.)
- Wenn Sie eine {{jsxref("Function")}}, {{jsxref("Symbol")}} oder {{jsxref("undefined")}} zurückgeben, wird die Eigenschaft nicht im Ergebnis enthalten sein.
- Wenn Sie ein anderes Objekt zurückgeben, wird dieses Objekte rekursiv stringifiziert, wobei die `replacer`-Funktion für jede Eigenschaft aufgerufen wird.

> [!NOTE]
> Beim Parsen von JSON, das mit `replacer`-Funktionen generiert wurde, möchten Sie wahrscheinlich den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter)-Parameter verwenden, um die Gegenoperation auszuführen.

Typischerweise wird der Index von Array-Elementen niemals verschoben (selbst, wenn das Element einen ungültigen Wert wie eine Funktion enthält, wird es zu `null`, anstatt ausgelassen zu werden). Mit der `replacer`-Funktion können Sie über die Rückgabe eines anderen Arrays die Reihenfolge der Array-Elemente steuern.

### Der Parameter `space`

Der Parameter `space` kann verwendet werden, um Leerzeichen im finalen String zu kontrollieren.

- Handelt es sich um eine Zahl, so werden aufeinanderfolgende Ebenen in der Stringifizierung jeweils um diese Anzahl von Leerzeichen eingerückt.
- Handelt es sich um einen String, so werden aufeinanderfolgende Ebenen mit diesem String eingerückt.

Jede Einrückungsebene wird niemals länger als 10 sein. Zahlenwerte von `space` werden auf 10 begrenzt, und String-Werte werden auf 10 Zeichen gekürzt.

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

### Verwendung einer Funktion als `replacer`

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

Wenn Sie möchten, dass der `replacer` ein anfängliches Objekt von einem Schlüssel mit einer leeren String-Eigenschaft unterscheidet (da beide den leeren String als Schlüssel und möglicherweise ein Objekt als Wert ergeben würden), müssen Sie die Iterationsanzahl verfolgen (falls es über die erste Iteration hinausgeht, handelt es sich um einen echten leeren String-Schlüssel).

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

### Verwendung eines Arrays als `replacer`

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

### Verwendung des Parameters `space`

Das Ergebnis mit einem Leerzeichen einrücken:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Die Verwendung eines Tabulators imitiert eine typische Pretty-Print-Darstellung:

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

### Verhalten von toJSON()

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

### Problem beim Serialisieren zirkulärer Referenzen

Da das [JSON-Format](https://www.json.org/) keine Objektverweise unterstützt (obwohl ein [IETF-Entwurf existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), wird eine {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, ein Objekt mit zirkulären Referenzen zu kodieren.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Um zirkuläre Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die sie unterstützt (z. B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford), oder eine eigene Lösung implementieren, die zirkuläre Referenzen durch serialisierbare Werte ersetzt (oder entfernt).

Falls Sie `JSON.stringify()` zur Tiefenkopie eines Objekts verwenden möchten, sollten Sie stattdessen [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, da dieses zirkuläre Referenzen unterstützt. JavaScript-Engine-APIs für binäre Serialisierung, wie z. B. [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), unterstützen ebenfalls zirkuläre Referenzen.

### Verwendung von JSON.stringify() mit localStorage

Falls Sie ein vom Benutzer erstelltes Objekt speichern und dessen Wiederherstellung auch nach dem Schließen des Browsers ermöglichen wollen, zeigt das folgende Beispiel eine Anwendungsweise von `JSON.stringify()`:

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

### Gut-formatiertes JSON.stringify()

Engines, die die [gut-formatierte JSON.stringify-Spezifikation](https://github.com/tc39/proposal-well-formed-stringify) implementieren, werden alleinstehende Surrogaten (jede Codepunkt von U+D800 bis U+DFFF) mithilfe von Unicode-Escape-Sequenzen statt wörtlich darstellen. Vor dieser Änderung konnten solche Strings nicht in gültigem UTF-8 oder UTF-16 codiert werden:

```js
JSON.stringify("\uD800"); // '"�"'
```

Mit dieser Änderung jedoch repräsentiert `JSON.stringify()` alleinstehende Surrogaten mittels JSON-Escape-Sequenzen, die in gültigem UTF-8 oder UTF-16 kodiert werden können:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Diese Änderung sollte rückwärtskompatibel sein, solange Sie das Ergebnis von `JSON.stringify()` an APIs wie `JSON.parse()` übergeben, die gültigen JSON-Text akzeptieren, weil sie Unicode-Escapes alleinstehender Surrogaten als identisch mit den alleinstehenden Surrogaten selbst behandeln. _Nur_, wenn Sie direkt das Ergebnis von `JSON.stringify()` interpretieren, müssen Sie sorgfältig mit den zwei möglichen Codierungen dieser Codepunkte umgehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für modernes `JSON.stringify`-Verhalten (Symbol, gut-formatiertes Unicode, rohes JSON) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
