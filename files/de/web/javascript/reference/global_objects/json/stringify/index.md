---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die **`JSON.stringify()`** statische Methode konvertiert einen JavaScript-Wert in einen JSON-String, optional können Werte ersetzt werden, wenn eine Ersetzungsfunktion angegeben wurde, oder optional nur die angegebenen Eigenschaften, wenn ein Ersetzungs-Array angegeben wurde.

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
  - : Eine Funktion, die das Verhalten des Stringifizierungsvorgangs ändert, oder ein Array von Strings und Zahlen, das die Eigenschaften von `value` angibt, die in die Ausgabe aufgenommen werden sollen. Wenn `replacer` ein Array ist, werden alle Elemente in diesem Array, die keine Strings oder Zahlen sind (entweder primitive oder Wrapper-Objekte), einschließlich {{jsxref("Symbol")}}-Werten, vollständig ignoriert. Wenn `replacer` etwas anderes als eine Funktion oder ein Array ist (z.B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben), werden alle string-beschlüsselten Eigenschaften des Objekts in den resultierenden JSON-String aufgenommen.
- `space` {{optional_inline}}

  - : Ein String oder eine Zahl, die verwendet wird, um Leerzeichen (einschließlich Einrückungen, Zeilenumbrüche usw.) in den Ausgabe-JSON-String für Lesbarkeitszwecke einzufügen.

    Wenn dies eine Zahl ist, gibt sie die Anzahl der Leerzeichen an, die als Einrückung verwendet werden sollen, begrenzt auf 10 (das heißt, jede Zahl größer als `10` wird so behandelt, als wäre sie `10`). Werte kleiner als 1 bedeuten, dass keine Leerzeichen verwendet werden sollen.

    Wenn dies ein String ist, wird der String (oder die ersten 10 Zeichen des Strings, wenn er länger ist) vor jedem verschachtelten Objekt oder Array eingefügt.

    Wenn `space` etwas anderes als ein String oder eine Zahl ist (kann entweder ein primitiver oder ein Wrapper-Objekt sein) – zum Beispiel [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben – werden keine Leerzeichen verwendet.

### Rückgabewert

Ein JSON-String, der den angegebenen Wert darstellt, oder `undefined`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `value` enthält einen zyklischen Verweis.
    - Ein {{jsxref("BigInt")}}-Wert wird angetroffen.

## Beschreibung

`JSON.stringify()` konvertiert einen Wert in die von dem Wert dargestellte JSON-Notation. Werte werden auf folgende Weise stringifiziert:

- {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}} und {{jsxref("BigInt")}} Objekte (erhältlich über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden während der Stringifizierung gemäß den traditionellen Konvertierungssemantiken in die entsprechenden primitiven Werte umgewandelt. {{jsxref("Symbol")}}-Objekte (erhältlich über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden wie normale Objekte behandelt.
- Der Versuch, {{jsxref("BigInt")}}-Werte zu serialisieren, führt zu einem Fehler. Wenn das BigInt jedoch eine `toJSON()`-Methode hat (durch Monkey-Patching: `BigInt.prototype.toJSON = ...`), kann diese Methode das Serialisierungsergebnis bereitstellen. Diese Einschränkung stellt sicher, dass immer ein richtiges Serialisierungsverhalten (und sehr wahrscheinlich das zugehörige Deserialisierungsverhalten) explizit vom Benutzer bereitgestellt wird.
- {{jsxref("undefined")}}, {{jsxref("Function")}} und {{jsxref("Symbol")}}-Werte sind keine gültigen JSON-Werte. Wenn während der Konvertierung solche Werte angetroffen werden, werden sie entweder ausgelassen (wenn sie in einem Objekt gefunden werden) oder in [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) geändert (wenn sie in einem Array gefunden werden). `JSON.stringify()` kann `undefined` zurückgeben, wenn "reine" Werte übergeben werden, wie `JSON.stringify(() => {})` oder `JSON.stringify(undefined)`.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}}, sowie der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), werden alle als `null` betrachtet. (Aber im Gegensatz zu den Werten im vorherigen Punkt würden sie nie ausgelassen.)
- Arrays werden als Arrays serialisiert (eingeschlossen in eckige Klammern). Nur Array-Indizes zwischen 0 und `length - 1` (einschließlich) werden serialisiert; andere Eigenschaften werden ignoriert.
- Das spezielle rohe JSON-Objekt, das mit {{jsxref("JSON.rawJSON()")}} erstellt wird, wird als der rohe JSON-Text serialisiert, den es enthält (durch Zugriff auf seine `rawJSON`-Eigenschaft).
- Für andere Objekte:

  - Alle {{jsxref("Symbol")}}-schlüsseligen Eigenschaften werden komplett ignoriert, selbst wenn der [`replacer`](#der_`replacer`_parameter) Parameter verwendet wird.

  - Wenn der Wert eine `toJSON()`-Methode besitzt, ist sie dafür verantwortlich, zu definieren, welche Daten serialisiert werden. Stattdessen wird der Wert, der zurückgegeben wird, wenn die `toJSON()`-Methode aufgerufen wird, serialisiert. `JSON.stringify()` ruft `toJSON` mit einem Parameter auf, dem `key`, der die gleiche Semantik wie der `key`-Parameter der [`replacer`](#der_`replacer`_parameter) Funktion hat:

    - wenn dieses Objekt ein Eigenschaftswert ist, der Eigenname der Eigenschaft
    - wenn es sich in einem Array befindet, der Index im Array, als String
    - wenn `JSON.stringify()` direkt auf dieses Objekt aufgerufen wurde, ein leerer String

    Alle {{jsxref("Temporal")}}-Objekte implementieren die `toJSON()`-Methode, die einen String zurückgibt (dieselbe wie der Aufruf von `toString()`). Daher werden sie als Strings serialisiert. Ebenso implementieren {{jsxref("Date")}}-Objekte `toJSON()`, was denselben Wert wie [`toISOString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) zurückgibt.

  - Nur [enumerable eigene Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) werden besucht. Dies bedeutet, dass {{jsxref("Map")}}, {{jsxref("Set")}}, usw. zu `"{}"` werden. Sie können den [`replacer`](#der_`replacer`_parameter) Parameter verwenden, um sie in etwas Nützlicheres zu serialisieren.

    Eigenschaften werden mit dem gleichen Algorithmus wie [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) besucht, der eine wohldefinierte Reihenfolge hat und implementierungsübergreifend stabil ist. Zum Beispiel wird `JSON.stringify` auf demselben Objekt immer denselben String erzeugen, und `JSON.parse(JSON.stringify(obj))` würde ein Objekt mit derselben Schlüsselanordnung wie das Original erzeugen (vorausgesetzt, das Objekt ist vollständig JSON-serialisierbar).

### Der `replacer` Parameter

Der `replacer` Parameter kann entweder eine Funktion oder ein Array sein.

Als Array geben seine Elemente die Namen der Eigenschaften im Objekt an, die im resultierenden JSON-String enthalten sein sollen. Nur String- und Zahlenwerte werden berücksichtigt; Symbol-Schlüssel werden ignoriert.

Als Funktion nimmt es zwei Parameter: den `key` und den `value`, die gerade stringifiziert werden. Das Objekt, in dem der Schlüssel gefunden wurde, wird als `this`-Kontext des `replacer` bereitgestellt.

Die `replacer`-Funktion wird auch für das ursprüngliche Objekt aufgerufen, das stringifiziert wird, in welchem Fall der `key` ein leerer String (`""`) ist. Danach wird sie für jede Eigenschaft des Objekts oder Arrays aufgerufen, das stringifiziert wird. Array-Indizes werden in ihrer String-Form als `key` bereitgestellt. Der aktuelle Eigenschaftswert wird durch den Rückgabewert der `replacer`-Funktion für die Stringifizierung ersetzt. Das bedeutet:

- Wenn Sie eine Zahl, einen String, einen Boolean oder `null` zurückgeben, wird dieser Wert direkt serialisiert und als Eigenschaftswert verwendet. (Das Zurückgeben eines BigInt führt ebenfalls zu einem Fehler.)
- Wenn Sie eine {{jsxref("Function")}}, ein {{jsxref("Symbol")}} oder {{jsxref("undefined")}} zurückgeben, wird die Eigenschaft nicht in die Ausgabe aufgenommen.
- Wenn Sie ein anderes Objekt zurückgeben, wird das Objekt rekursiv stringifiziert, wobei die `replacer`-Funktion auf jede Eigenschaft aufgerufen wird.

> [!NOTE]
> Wenn Sie JSON analysieren, das mit `replacer`-Funktionen generiert wurde, möchten Sie möglicherweise den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) Parameter verwenden, um die umgekehrte Operation auszuführen.

Normalerweise würde sich der Index von Array-Elementen niemals verschieben (selbst wenn das Element ein ungültiger Wert wie eine Funktion ist, wird es statt ausgelassen zu `null`). Die Verwendung der `replacer`-Funktion ermöglicht es Ihnen, die Reihenfolge der Array-Elemente zu steuern, indem Sie ein anderes Array zurückgeben.

### Der `space` Parameter

Der `space` Parameter kann verwendet werden, um den Abstand im finalen String zu steuern.

- Wenn es eine Zahl ist, werden aufeinanderfolgende Ebenen während der Stringifizierung durch diese Anzahl von Leerzeichen eingerückt.
- Wenn es ein String ist, werden aufeinanderfolgende Ebenen durch diesen String eingerückt.

Jede Einrückungsstufe wird niemals länger als 10 Zeichen sein. Zahlenwerte von `space` werden auf 10 begrenzt und String-Werte auf 10 Zeichen gekürzt.

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

Wenn Sie möchten, dass der `replacer` ein ursprüngliches Objekt von einem Schlüssel mit einer leeren Eigenschaft unterscheidet (da beide den leeren String als Schlüssel und möglicherweise ein Objekt als Wert ergeben würden), müssen Sie die Anzahl der Iterationen verfolgen (wenn sie über der ersten Iteration liegt, ist es ein echter leerer String-Schlüssel).

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

### Verwendung des `space` Parameters

Rücken Sie die Ausgabe mit einem Leerzeichen ein:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Die Verwendung eines Tabulatorzeichens imitiert das Standardaussehen von Pretty-Print:

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

Die Definition von `toJSON()` für ein Objekt ermöglicht das Überschreiben des Serialisierungsverhaltens.

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

### Problem mit der Serialisierung von zyklischen Referenzen

Da das [JSON-Format](https://www.json.org/) keine Objektverweise unterstützt (obwohl ein [IETF-Entwurf existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, ein Objekt mit zyklischen Referenzen zu kodieren.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Um zyklische Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die sie unterstützt (z.B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford) oder selbst eine Lösung implementieren, die das Auffinden und Ersetzen (oder Entfernen) der zyklischen Referenzen durch serialisierbare Werte erfordert.

Wenn Sie `JSON.stringify()` verwenden, um ein Objekt tief zu kopieren, möchten Sie stattdessen vielleicht [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, das zyklische Referenzen unterstützt. JavaScript-Engine-APIs zur binären Serialisierung, wie [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), unterstützen ebenfalls zyklische Referenzen.

### Verwendung von JSON.stringify() mit localStorage

In einem Fall, in dem Sie ein von Ihrem Benutzer erstelltes Objekt speichern möchten und es ermöglichen wollen, dass es auch nach dem Schließen des Browsers wiederhergestellt wird, ist das folgende Beispiel ein Modell für die Anwendbarkeit von `JSON.stringify()`:

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

Engines, die die [spezielle wohlgeformte JSON.stringify Spezifikation](https://github.com/tc39/proposal-well-formed-stringify) implementieren, werden Einzelsurrogate (jedes Codepunkt von U+D800 bis U+DFFF) mit Unicode-Escape-Sequenzen anstelle wörtlich stringifizieren (Ausgabe von Einzelsurrogaten). Vor dieser Änderung konnten solche Strings nicht in gültigem UTF-8 oder UTF-16 kodiert werden:

```js
JSON.stringify("\uD800"); // '"�"'
```

Mit dieser Änderung stellt `JSON.stringify()` Einzelsurrogate unter Verwendung von JSON-Escape-Sequenzen dar, die in gültigem UTF-8 oder UTF-16 _kodiert_ werden können:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Diese Änderung sollte rückwärtskompatibel sein, solange Sie das Ergebnis von `JSON.stringify()` an APIs wie `JSON.parse()` übergeben, die jeden gültigen JSON-Text akzeptieren, da sie Unicode-Escapes von Einzelsurrogaten als identisch zu den Einzelsurrogaten selbst behandeln werden. _Nur_ wenn Sie das Ergebnis von `JSON.stringify()` direkt interpretieren, müssen Sie `JSON.stringify()`'s zwei mögliche Kodierungen dieser Codepunkte sorgfältig behandeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.stringify` Verhaltens (Symbol, wohlgeformte Unicode, rohes JSON) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
