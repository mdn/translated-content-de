---
title: JSON.stringify()
short-title: stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`JSON.stringify()`** statische Methode konvertiert einen JavaScript-Wert in einen JSON-String. Optional können dabei Werte ersetzt werden, wenn eine `replacer`-Funktion angegeben ist, oder es können nur die spezifizierten Eigenschaften aufgenommen werden, wenn ein `replacer`-Array angegeben ist.

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
  - : Eine Funktion, die das Verhalten des Stringifizierungsprozesses verändert, oder ein Array von Zeichenketten und Zahlen, die die Eigenschaften von `value` spezifizieren, die in das Ausgabeergebnis eingefügt werden sollen. Wenn `replacer` ein Array ist, werden alle Elemente in diesem Array, die keine Zeichenketten oder Zahlen sind (entweder primitive oder Wrapper-Objekte), einschließlich {{jsxref("Symbol")}}-Werten, vollständig ignoriert. Wenn `replacer` etwas anderes als eine Funktion oder ein Array ist (z.B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben), werden alle mit Zeichenketten gekennzeichneten Eigenschaften des Objekts in den resultierenden JSON-String aufgenommen.
- `space` {{optional_inline}}
  - : Eine Zeichenkette oder Zahl, die verwendet wird, um Leerzeichen (einschließlich Einrückungs-, Zeilenumbruchzeichen usw.) in den Ausgabe-JSON-String einzufügen, um die Lesbarkeit zu verbessern.

    Wenn dies eine Zahl ist, gibt sie die Anzahl der Leerzeichen an, die als Einrückung verwendet werden sollen, begrenzt auf 10 (das bedeutet, jede Zahl größer als `10` wird behandelt, als ob sie `10` wäre). Werte kleiner als 1 geben an, dass kein Leerzeichen verwendet werden soll.

    Wenn dies eine Zeichenkette ist, wird die Zeichenkette (oder die ersten 10 Zeichen der Zeichenkette, wenn sie länger ist) vor jedem verschachtelten Objekt oder Array eingefügt.

    Wenn `space` etwas anderes als eine Zeichenkette oder Zahl ist (kann entweder ein primitiver oder ein Wrapper-Objekt sein) — zum Beispiel [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben — werden keine Leerzeichen verwendet.

### Rückgabewert

Ein JSON-String, der den angegebenen Wert repräsentiert, oder `undefined`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `value` enthält eine zirkuläre Referenz.
    - Ein {{jsxref("BigInt")}}-Wert wird angetroffen.

## Beschreibung

`JSON.stringify()` konvertiert einen Wert in die JSON-Notation, die den Wert repräsentiert. Werte werden folgendermaßen stringifiziert:

- {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}}, und {{jsxref("BigInt")}} (erreichbar über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) Objekte werden während der Stringifizierung in die entsprechenden primitiven Werte umgewandelt, gemäß den traditionellen Konvertierungssemantiken. {{jsxref("Symbol")}}-Objekte (erreichbar über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden als einfache Objekte behandelt.
- Der Versuch, {{jsxref("BigInt")}}-Werte zu serialisieren, wird einen Fehler werfen. Wenn das BigInt jedoch eine `toJSON()`-Methode hat (durch Monkey Patching: `BigInt.prototype.toJSON = ...`), kann diese Methode das Serialisierungsresultat liefern. Diese Einschränkung stellt sicher, dass vom Benutzer immer explizit ein korrektes Serialisierungs- (und sehr wahrscheinlich das dazugehörige Deserialisierungs-)Verhalten bereitgestellt wird.
- {{jsxref("undefined")}}, {{jsxref("Function")}}, und {{jsxref("Symbol")}}-Werte sind keine gültigen JSON-Werte. Wenn solche Werte während der Konvertierung angetroffen werden, werden sie entweder ausgelassen (wenn sie in einem Objekt gefunden werden) oder in [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) geändert (wenn sie in einem Array gefunden werden). `JSON.stringify()` kann `undefined` zurückgeben, wenn "reine" Werte übergeben werden, wie `JSON.stringify(() => {})` oder `JSON.stringify(undefined)`.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}}, sowie der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), werden alle als `null` betrachtet. (Aber im Gegensatz zu den Werten im vorhergehenden Punkt, würden sie niemals ausgelassen.)
- Arrays werden als Arrays (eingeschlossen in eckige Klammern) serialisiert. Nur Array-Indizes zwischen 0 und `length - 1` (einschließlich) werden serialisiert; andere Eigenschaften werden ignoriert.
- Das spezielle rohe JSON-Objekt, das mit {{jsxref("JSON.rawJSON()")}} erstellt wird, wird als der rohe JSON-Text serialisiert, den es enthält (durch den Zugriff auf seine `rawJSON`-Eigenschaft).
- Für andere Objekte:
  - Alle {{jsxref("Symbol")}}-gekoppelten Eigenschaften werden vollständig ignoriert, selbst wenn der [`replacer`](#der_`replacer`-parameter) Parameter verwendet wird.

  - Wenn der Wert eine `toJSON()`-Methode hat, ist sie dafür verantwortlich zu definieren, welche Daten serialisiert werden. Anstatt dass das Objekt serialisiert wird, wird der Wert, der von der `toJSON()`-Methode zurückgegeben wird, wenn sie aufgerufen wird, serialisiert. `JSON.stringify()` ruft `toJSON` mit einem Parameter auf, dem `key`, der die gleiche Semantik wie der `key`-Parameter der [`replacer`](#der_`replacer`-parameter) Funktion hat:
    - wenn dieses Objekt ein Eigenschaftswert ist, der Eigenschaftenname
    - wenn es sich in einem Array befindet, der Index im Array, als String
    - wenn `JSON.stringify()` direkt auf dieses Objekt aufgerufen wurde, ein leerer String

    Alle {{jsxref("Temporal")}}-Objekte implementieren die `toJSON()`-Methode, die eine Zeichenkette zurückgibt (dieselbe wie bei Aufruf von `toString()`). Daher werden sie als Zeichenketten serialisiert. Ähnlich implementieren {{jsxref("Date")}}-Objekte `toJSON()`, was dasselbe zurückgibt wie [`toISOString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).

  - Nur [enumerable eigene Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) werden besucht. Dies bedeutet, dass {{jsxref("Map")}}, {{jsxref("Set")}}, usw. zu `"{}"` werden. Sie können den [`replacer`](#der_`replacer`-parameter)-Parameter verwenden, um sie in etwas nützlicheres zu serialisieren.

    Eigenschaften werden mit demselben Algorithmus besucht wie [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), der eine wohl definierte Ordnung hat und konsistent über Implementierungen hinweg ist. Zum Beispiel wird `JSON.stringify` für dasselbe Objekt immer denselben String erzeugen, und `JSON.parse(JSON.stringify(obj))` würde ein Objekt mit derselben Schlüsselreihenfolge wie das Original erzeugen (vorausgesetzt, das Objekt ist vollständig JSON-serialisierbar).

### Der `replacer`-Parameter

Der `replacer`-Parameter kann entweder eine Funktion oder ein Array sein.

Als Array geben seine Elemente die Namen der Eigenschaften im Objekt an, die im resultierenden JSON-String enthalten sein sollten. Es werden nur Zeichenketten- und Zahlenwerte berücksichtigt; Symbol-Schlüssel werden ignoriert.

Als Funktion nimmt er zwei Parameter an: den `key` und den `value`, die stringifiziert werden. Das Objekt, in dem der Schlüssel gefunden wurde, wird als `this`-Kontext des `replacer` bereitgestellt.

Die `replacer`-Funktion wird auch für das ursprünglich stringifizierte Objekt aufgerufen, in welchem Fall der `key` ein leerer String (`""`) ist. Anschließend wird sie für jede Eigenschaft des Objekts oder Arrays, das stringifiziert wird, aufgerufen. Array-Indizes werden als `key` in ihrer String-Form bereitgestellt. Der aktuelle Eigenschaftswert wird mit dem Rückgabewert des `replacer` für die Stringifizierung ersetzt. Das bedeutet:

- Wenn Sie eine Zahl, eine Zeichenkette, einen booleschen Wert oder `null` zurückgeben, wird dieser Wert direkt serialisiert und als Eigenschaftswert verwendet. (Das Zurückgeben eines BigInt wird ebenfalls einen Fehler werfen.)
- Wenn Sie eine {{jsxref("Function")}}, ein {{jsxref("Symbol")}} oder {{jsxref("undefined")}} zurückgeben, wird die Eigenschaft nicht in der Ausgabe enthalten.
- Wenn Sie ein anderes Objekt zurückgeben, wird das Objekt rekursiv stringifiziert, wobei die `replacer`-Funktion für jede Eigenschaft aufgerufen wird.

> [!NOTE]
> Beim Parsen von JSON, das mit `replacer`-Funktionen generiert wurde, möchten Sie wahrscheinlich den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) Parameter verwenden, um die umgekehrte Operation durchzuführen.

Typischerweise verschieben sich Array-Elemente nie (selbst wenn das Element ein ungültiger Wert wie eine Funktion ist, wird es zu `null` statt ausgelassen). Mit der `replacer`-Funktion können Sie die Reihenfolge der Array-Elemente steuern, indem Sie ein anderes Array zurückgeben.

### Der `space`-Parameter

Der `space`-Parameter kann verwendet werden, um Abstände im finalen String zu steuern.

- Wenn er eine Zahl ist, werden nachfolgende Ebenen in der Stringification jeweils um diese Anzahl an Leerzeichen eingerückt.
- Wenn er eine Zeichenkette ist, werden nachfolgende Ebenen mit dieser Zeichenkette eingerückt.

Jede Einrückungsebene wird nie länger als 10 sein. Zahlenwerte von `space` werden auf 10 begrenzt, und Zeichenkettenwerte werden auf 10 Zeichen abgeschnitten.

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

Wenn Sie möchten, dass der `replacer` ein initiales Objekt von einem Schlüssel mit einer leeren Zeichenketten-Eigenschaft unterscheidet (da beide den leeren String als Schlüssel und möglicherweise ein Objekt als Wert geben würden), müssen Sie die Iterationsanzahl verfolgen (wenn es über die erste Iteration hinaus ist, ist es ein echter leerer String-Schlüssel).

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

### Verwendung des `space`-Parameters

Den Ausgabe-String mit einem Leerzeichen einrücken:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Verwendung eines Tabulatorzeichens imitiert das standardmäßige Formatieren von Text:

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

### `toJSON()`-Verhalten

Die Definition von `toJSON()` für ein Objekt ermöglicht es, sein Serialisierungsverhalten zu überschreiben.

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

Da das [JSON-Format](https://www.json.org/) keine Objekt-Referenzen unterstützt (obwohl ein [IETF-Entwurf existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), wird ein {{jsxref("TypeError")}} geworfen, wenn versucht wird, ein Objekt mit zirkulären Referenzen zu kodieren.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Um zirkuläre Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die sie unterstützt (z.B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford) oder eine Lösung selbst implementieren, die das Finden und Ersetzen (oder Entfernen) der zyklischen Referenzen durch serialisierbare Werte erfordert.

Wenn Sie `JSON.stringify()` verwenden, um ein Objekt tief zu kopieren, möchten Sie stattdessen möglicherweise [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, das zirkuläre Referenzen unterstützt. JavaScript-Engine-APIs für die binäre Serialisierung, wie [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), unterstützen ebenfalls zirkuläre Referenzen.

### Verwendung von JSON.stringify() mit localStorage

In einem Fall, in dem Sie ein vom Benutzer erstelltes Objekt speichern und es wiederherstellen möchten, auch nachdem der Browser geschlossen wurde, ist das folgende Beispiel ein Modell für die Anwendbarkeit von `JSON.stringify()`:

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

Engines, die die [well-formed JSON.stringify spec](https://github.com/tc39/proposal-well-formed-stringify) implementieren, werden Lone-Surrogates (beliebiger Codepunkt von U+D800 bis U+DFFF) unter Verwendung von Unicode-Escape-Sequenzen anstelle von wörtlicher Darstellung (Ausgabe von Lone-Surrogates) stringifizieren. Vor dieser Änderung konnten solche Zeichenketten nicht in gültigem UTF-8 oder UTF-16 kodiert werden:

```js
JSON.stringify("\uD800"); // '"�"'
```

Aber mit dieser Änderung stellt `JSON.stringify()` Lone-Surrogates unter Verwendung von JSON-Escape-Sequenzen dar, die _können_ in gültigem UTF-8 oder UTF-16 kodiert werden:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Diese Änderung sollte rückwärtskompatibel sein, solange Sie das Ergebnis von `JSON.stringify()` an APIs wie `JSON.parse()` übergeben, die jeden gültigen JSON-Text akzeptieren, da sie Unicode-Escapes von Lone-Surrogates als identisch mit den Lone-Surrogates selbst behandeln. _Nur_ wenn Sie das Ergebnis von `JSON.stringify()` direkt interpretieren, müssen Sie `JSON.stringify()`'s zwei mögliche Kodierungen dieser Codepunkte sorgfältig handhaben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill of modern `JSON.stringify` behavior (symbol, well-formed unicode, raw JSON) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
