---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

Die statische Methode **`JSON.stringify()`** konvertiert einen JavaScript-Wert in einen JSON-String, wobei optional Werte ersetzt werden, wenn eine Ersetzungsfunktion angegeben ist, oder optional nur die spezifizierten Eigenschaften einbezogen werden, wenn ein Ersetzungsarray angegeben ist.

{{EmbedInteractiveExample("pages/js/json-stringify.html", "taller")}}

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
  - : Eine Funktion, die das Verhalten des Stringifizierungsprozesses beeinflusst, oder ein Array von Strings und Zahlen, das die zu berücksichtigenden Eigenschaften von `value` im Ausgabestring spezifiziert. Wenn `replacer` ein Array ist, werden alle Elemente in diesem Array, die keine Strings oder Zahlen (entweder Primitive oder Wrapper-Objekte) sind, einschließlich {{jsxref("Symbol")}}-Werten, vollständig ignoriert. Wenn `replacer` etwas anderes als eine Funktion oder ein Array ist (z.B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben), werden alle String-gekoppelten Eigenschaften des Objekts im resultierenden JSON-String enthalten.
- `space` {{optional_inline}}

  - : Ein String oder eine Zahl, die verwendet wird, um Leerzeichen (einschließlich Einrückung, Zeilenumbruchzeichen usw.) in den ausgegebenen JSON-String für Lesbarkeitszwecke einzufügen.

    Wenn dies eine Zahl ist, gibt sie die Anzahl der Leerzeichen an, die als Einrückung verwendet werden sollen, wobei sie auf 10 begrenzt ist (das heißt, jede Zahl größer als `10` wird behandelt, als wäre sie `10`). Werte kleiner als 1 deuten darauf hin, dass kein Leerzeichen verwendet werden soll.

    Wenn dies ein String ist, wird der String (oder die ersten 10 Zeichen des Strings, wenn er länger ist) vor jedem geschachtelten Objekt oder Array eingefügt.

    Wenn `space` etwas anderes als ein String oder eine Zahl ist (kann entweder ein primitiver oder ein Wrapper-Objekt sein) — zum Beispiel [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben — wird kein Leerraum verwendet.

### Rückgabewert

Ein JSON-String, der den angegebenen Wert darstellt, oder undefined.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `value` enthält eine zirkuläre Referenz.
    - Ein {{jsxref("BigInt")}}-Wert wird angetroffen.

## Beschreibung

`JSON.stringify()` konvertiert einen Wert in die JSON-Notation, die den Wert darstellt. Werte werden auf folgende Weise stringifiziert:

- {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}}, und {{jsxref("BigInt")}} (erhältlich über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) Objekte werden während der Stringifizierung in die entsprechenden primitiven Werte konvertiert, gemäß der traditionellen Konvertierungssemantik. {{jsxref("Symbol")}} Objekte (erhältlich über [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden als normale Objekte behandelt.
- Der Versuch, {{jsxref("BigInt")}} Werte zu serialisieren, wird einen Fehler auslösen. Hat das BigInt jedoch eine `toJSON()` Methode (durch Affenhacken: `BigInt.prototype.toJSON = ...`), kann diese Methode das Serialisierungsergebnis bereitstellen. Diese Einschränkung stellt sicher, dass ein ordnungsgemäßes Serialisierungsverhalten (und höchstwahrscheinlich seine begleitende Deserialisierung) immer explizit vom Benutzer bereitgestellt wird.
- {{jsxref("undefined")}}, {{jsxref("Function")}}, und {{jsxref("Symbol")}} Werte sind keine gültigen JSON-Werte. Wenn solche Werte während der Konvertierung angetroffen werden, werden sie entweder weggelassen (wenn in einem Objekt gefunden) oder in [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) geändert (wenn in einem Array gefunden). `JSON.stringify()` kann `undefined` zurückgeben, wenn "reine" Werte wie `JSON.stringify(() => {})` oder `JSON.stringify(undefined)` übergeben werden.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}}, sowie der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), gelten alle als `null`. (Aber anders als die Werte im vorherigen Punkt, würden sie niemals ausgelassen.)
- Arrays werden als Arrays serialisiert (eingeschlossen in eckige Klammern). Nur Array-Indizes zwischen 0 und `length - 1` (einschließlich) werden serialisiert; andere Eigenschaften werden ignoriert.
- Das spezielle rohe JSON-Objekt, das mit {{jsxref("JSON.rawJSON()")}} erstellt wurde, wird als der rohe JSON-Text serialisiert, den es enthält (indem auf seine `rawJSON` Eigenschaft zugegriffen wird).
- Für andere Objekte:

  - Alle {{jsxref("Symbol")}}-gekoppelten Eigenschaften werden vollständig ignoriert, auch wenn der [`replacer`](#der_replacer-parameter) Parameter verwendet wird.

  - Wenn der Wert eine `toJSON()` Methode hat, liegt es in deren Verantwortung, zu definieren, welche Daten serialisiert werden. Anstelle des Objekts, das serialisiert wird, wird der Wert serialisiert, der von der `toJSON()`-Methode zurückgegeben wird, wenn sie aufgerufen wird. `JSON.stringify()` ruft `toJSON` mit einem Parameter auf, dem `key`, der die gleiche Semantik wie der `key`-Parameter der [`replacer`](#der_replacer-parameter) Funktion hat:

    - wenn dieses Objekt ein Eigenschaftswert ist, der Eigenname
    - wenn es in einem Array ist, der Index im Array, als String
    - wenn `JSON.stringify()` direkt auf dieses Objekt aufgerufen wurde, ein leerer String

    {{jsxref("Date")}} Objekte implementieren die [`toJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON) Methode, die einen String zurückgibt (dasselbe wie [`date.toISOString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)). Daher werden sie als Strings stringifiziert.

  - Nur [enumerierbare eigene Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) werden besucht. Das bedeutet, {{jsxref("Map")}}, {{jsxref("Set")}}, etc. werden zu `"{}"`. Sie können den [`replacer`](#der_replacer-parameter) Parameter verwenden, um sie zu etwas nützlicherem zu serialisieren.

    Eigenschaften werden mit dem gleichen Algorithmus wie [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) besucht, welche eine gut definierte Reihenfolge hat und über Implementierungen hinweg stabil ist. Zum Beispiel wird `JSON.stringify` auf dem gleichen Objekt immer denselben String erzeugen und `JSON.parse(JSON.stringify(obj))` würde ein Objekt mit derselben Schlüsselreihenfolge wie das Original erzeugen (vorausgesetzt, das Objekt ist komplett JSON-serialisierbar).

### Der replacer-Parameter

Der `replacer` Parameter kann entweder eine Funktion oder ein Array sein.

Als Array geben seine Elemente die Namen der Eigenschaften im Objekt an, die im resultierenden JSON-String enthalten sein sollen. Nur String- und Zahlenwerte werden berücksichtigt; Symbolschlüssel werden ignoriert.

Als Funktion nimmt er zwei Parameter an: den `key` und den `value`, die stringifiziert werden. Das Objekt, in dem der Schlüssel gefunden wurde, wird als `this` Kontext des `replacers` bereitgestellt.

Die `replacer` Funktion wird auch für das initial stringifizierte Objekt aufgerufen, in diesem Fall ist der `key` ein leerer String (`""`). Es wird dann für jede Eigenschaft des Objekts oder Arrays aufgerufen, das stringifiziert wird. Array-Indizes werden als `key` in ihrer String-Form übergeben. Der aktuelle Eigenschaftswert wird durch den Rückgabewert des `replacers` für die Stringifizierung ersetzt. Das bedeutet:

- Wenn Sie eine Zahl, einen String, ein Boolean oder `null` zurückgeben, wird dieser Wert direkt serialisiert und als Eigenschaftswert verwendet. (Die Rückgabe eines BigInts löst ebenfalls einen Fehler aus.)
- Wenn Sie eine {{jsxref("Function")}}, {{jsxref("Symbol")}}, oder {{jsxref("undefined")}} zurückgeben, wird die Eigenschaft nicht in die Ausgabe einbezogen.
- Wenn Sie ein anderes Objekt zurückgeben, wird das Objekt rekursiv stringifiziert, wobei die `replacer` Funktion für jede Eigenschaft aufgerufen wird.

> [!NOTE]
> Beim Parsen von JSON, das mit `replacer` Funktionen erstellt wurde, möchten Sie wahrscheinlich den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) Parameter verwenden, um die Umkehroperation durchzuführen.

Typischerweise würde sich der Index von Array-Elementen nie verschieben (selbst wenn das Element ein ungültiger Wert wie eine Funktion ist, wird es `null` statt ausgelassen). Die Verwendung der `replacer` Funktion ermöglicht es Ihnen, die Reihenfolge der Array-Elemente zu kontrollieren, indem Sie ein anderes Array zurückgeben.

### Der space-Parameter

Der `space` Parameter kann verwendet werden, um den Abstand in der endgültigen Zeichenkette zu steuern.

- Wenn es sich um eine Zahl handelt, werden aufeinanderfolgende Ebenen in der Stringifizierung jeweils durch so viele Leerzeichen eingerückt.
- Wenn es sich um einen String handelt, werden aufeinanderfolgende Ebenen durch diesen String eingerückt.

Jede Einrückungsebene wird niemals länger als 10 sein. Zahlenwerte von `space` sind auf 10 begrenzt, und Stringwerte sind auf 10 Zeichen beschränkt.

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

Wenn Sie möchten, dass der `replacer` ein initiales Objekt von einem Schlüssel mit einer leeren Zeichenkette unterscheidet (da beide die leere Zeichenkette als Schlüssel und potenziell ein Objekt als Wert geben würden), müssen Sie den Iterationszähler verfolgen (wenn es über die erste Iteration hinausgeht, ist es ein echter leerer Schlüssel).

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

Einrücken der Ausgabe mit einem Leerzeichen:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Die Verwendung eines Tab-Zeichens imitiert das standardmäßige Format für gut lesbare Ausgabe:

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

### toJSON() Verhalten

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

### Problem mit der Serialisierung von zirkulären Referenzen

Da das [JSON-Format](https://www.json.org/) keine Objektverweise unterstützt (obwohl ein [IETF-Entwurf existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, ein Objekt mit zirkulären Referenzen zu kodieren.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Um zirkuläre Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die sie unterstützt (z.B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford), oder selbst eine Lösung implementieren, die das Finden und Ersetzen (oder Entfernen) der zyklischen Referenzen durch serialisierbare Werte erfordert.

Wenn Sie `JSON.stringify()` verwenden, um ein Objekt tief zu kopieren, möchten Sie stattdessen möglicherweise [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, das zirkuläre Referenzen unterstützt. JavaScript-Engine-APIs für die Binärserialisierung, wie [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), unterstützen ebenfalls zirkuläre Referenzen.

### Verwendung von JSON.stringify() mit localStorage

In einem Fall, in dem Sie ein vom Benutzer erstelltes Objekt speichern und ermöglichen möchten, es auch nach dem Schließen des Browsers wiederherzustellen, ist das folgende Beispiel ein Modell für die Anwendbarkeit von `JSON.stringify()`:

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

Engines, die die [Well-formed JSON.stringify Spezifikation](https://github.com/tc39/proposal-well-formed-stringify) implementieren, werden einzelne Surrogate (jedes Codepunkt von U+D800 bis U+DFFF) mit Unicode-Escape-Sequenzen stringifizieren und nicht wortwörtlich (siehe Ausgabe einzelner Surrogate). Vor dieser Änderung konnten solche Zeichenfolgen nicht in gültigem UTF-8 oder UTF-16 kodiert werden:

```js
JSON.stringify("\uD800"); // '"�"'
```

Mit dieser Änderung stellt `JSON.stringify()` einzelne Surrogate mit JSON-Escape-Sequenzen dar, die in gültigem UTF-8 oder UTF-16 kodiert werden _können_:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Diese Änderung sollte rückwärtskompatibel sein, solange Sie das Ergebnis von `JSON.stringify()` an APIs wie `JSON.parse()` übergeben, die jeden gültigen JSON-Text akzeptieren, da sie Unicode-Escapes von einzelnen Surrogaten als identisch mit den Surrogaten selbst behandeln. _Nur_ wenn Sie das Ergebnis von `JSON.stringify()` direkt interpretieren, müssen Sie `JSON.stringify()`'s zwei mögliche Kodierungen dieser Codepunkte sorgfältig behandeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für modernes `JSON.stringify` Verhalten (Symbol, wohlgeformtes Unicode, rohes JSON) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
