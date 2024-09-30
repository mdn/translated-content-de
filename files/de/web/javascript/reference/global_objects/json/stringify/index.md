---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

Die statische Methode **`JSON.stringify()`** konvertiert einen JavaScript-Wert in einen JSON-String, wobei optional Werte durch eine ersetzende Funktion ersetzt werden oder nur die angegebenen Eigenschaften eingeschlossen werden, wenn ein Ersetzungsarray angegeben ist.

{{EmbedInteractiveExample("pages/js/json-stringify.html", "taller")}}

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
  - : Eine Funktion, die das Verhalten des Stringifizierungsprozesses ändert, oder ein Array von Zeichenfolgen und Zahlen, das die Eigenschaften von `value` angibt, die in die Ausgabe eingeschlossen werden sollen. Wenn `replacer` ein Array ist, werden alle Elemente in diesem Array, die keine Zeichenfolgen oder Zahlen (entweder primitive oder Wrapper-Objekte) sind, einschließlich {{jsxref("Symbol")}}-Werten, vollständig ignoriert. Wenn `replacer` weder eine Funktion noch ein Array ist (z. B. [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben), werden alle string-beschlüsselten Eigenschaften des Objekts im resultierenden JSON-String eingeschlossen.
- `space` {{optional_inline}}

  - : Eine Zeichenfolge oder Zahl, die verwendet wird, um Leerzeichen (einschließlich Einrückungen, Zeilenumbruchszeichen usw.) in den Ausgabe-JSON-String einzufügen, um die Lesbarkeit zu verbessern.

    Wenn dies eine Zahl ist, gibt sie die Anzahl der Leerzeichen an, die als Einrückung verwendet werden sollen, begrenzt auf 10 (d. h. jede Zahl größer als `10` wird behandelt, als wäre sie `10`). Werte kleiner als 1 bedeuten, dass keine Leerzeichen verwendet werden sollen.

    Wenn dies eine Zeichenfolge ist, wird die Zeichenfolge (oder die ersten 10 Zeichen der Zeichenfolge, wenn sie länger ist) vor jedem geschachtelten Objekt oder Array eingefügt.

    Wenn `space` weder eine Zeichenfolge noch eine Zahl ist (kann entweder ein primitiver Wert oder ein Wrapper-Objekt sein) — zum Beispiel [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder nicht angegeben — werden keine Leerzeichen verwendet.

### Rückgabewert

Ein JSON-String, der den gegebenen Wert darstellt, oder undefined.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `value` enthält eine zirkuläre Referenz.
    - Ein {{jsxref("BigInt")}}-Wert wird angetroffen.

## Beschreibung

`JSON.stringify()` konvertiert einen Wert in die JSON-Notation, die den Wert darstellt. Werte werden auf folgende Weise stringifiziert:

- {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}} und {{jsxref("BigInt")}}-Objekte (erreichbar via [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden während der Stringifizierung in die entsprechenden primitiven Werte konvertiert, gemäß den traditionellen Konvertierungssemantiken. {{jsxref("Symbol")}}-Objekte (erreichbar via [`Object()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) werden als einfache Objekte behandelt.
- Der Versuch, {{jsxref("BigInt")}}-Werte zu serialisieren, wird einen Fehler auslösen. Wenn das BigInt jedoch eine `toJSON()`-Methode besitzt (durch Monkey-Patching: `BigInt.prototype.toJSON = ...`), kann diese Methode das Serialisierungsergebnis bereitstellen. Diese Einschränkung stellt sicher, dass ein korrektes Serialisierungsverhalten (und sehr wahrscheinlich das begleitende Deserialisierungsverhalten) immer explizit vom Benutzer bereitgestellt wird.
- {{jsxref("undefined")}}, {{jsxref("Function")}} und {{jsxref("Symbol")}}-Werte sind keine gültigen JSON-Werte. Falls derartige Werte während der Konvertierung angetroffen werden, werden sie entweder weggelassen (wenn sie in einem Objekt vorkommen) oder in [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) geändert (wenn sie in einem Array vorkommen). `JSON.stringify()` kann `undefined` zurückgeben, wenn "reine" Werte wie `JSON.stringify(() => {})` oder `JSON.stringify(undefined)` übergeben werden.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}}, sowie der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werden alle als `null` betrachtet. (Doch im Gegensatz zu den in vorstehenden Punkten genannten Werten, würden sie niemals weggelassen.)
- Arrays werden als Arrays serialisiert (umschlossen von eckigen Klammern). Nur Indizes im Bereich von 0 bis `length - 1` (inklusive) werden serialisiert; andere Eigenschaften werden ignoriert.
- Das spezielle Roh-JSON-Objekt, das mit {{jsxref("JSON.rawJSON()")}} erstellt wurde, wird als der rohe JSON-Text serialisiert, den es enthält (durch Zugriff auf seine `rawJSON`-Eigenschaft).
- Für andere Objekte:

  - Alle {{jsxref("Symbol")}}-geschlüsselten Eigenschaften werden vollständig ignoriert, selbst bei Verwendung des [`replacer`](#der_replacer-parameter)-Parameters.

  - Wenn der Wert eine `toJSON()`-Methode hat, liegt es in seiner Verantwortung zu definieren, welche Daten serialisiert werden. Anstatt dass das Objekt serialisiert wird, wird der Wert serialisiert, der von der `toJSON()`-Methode zurückgegeben wird, wenn sie aufgerufen wird. `JSON.stringify()` ruft `toJSON` mit einem Parameter auf, dem `key`, der dieselbe Semantik wie der `key`-Parameter der [`replacer`](#der_replacer-parameter)-Funktion hat:

    - wenn dieses Objekt ein Eigenschaftswert ist, der Eigenschaftsname
    - wenn es in einem Array ist, der Index im Array, als Zeichenfolge
    - wenn `JSON.stringify()` direkt auf diesem Objekt aufgerufen wurde, ein leerer String

    {{jsxref("Date")}}-Objekte implementieren die [`toJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON)-Methode, die eine Zeichenfolge zurückgibt (dieselbe wie [`date.toISOString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)). Somit werden sie als Zeichenfolgen stringifiziert.

  - Nur [enumerable eigene Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) werden besucht. Das bedeutet, {{jsxref("Map")}}, {{jsxref("Set")}}, usw. werden zu `"{}"`. Sie können den [`replacer`](#der_replacer-parameter)-Parameter verwenden, um diese in etwas Nützlicheres zu serialisieren.

    Eigenschaften werden mit demselben Algorithmus wie [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) besucht, der eine wohl definierte Ordnung hat und über Implementierungen hinweg stabil ist. Zum Beispiel wird `JSON.stringify` auf demselben Objekt immer denselben String erzeugen, und `JSON.parse(JSON.stringify(obj))` würde ein Objekt mit derselben Schlüsselsortierung wie das Original erzeugen (vorausgesetzt, das Objekt ist vollständig JSON-serialisierbar).

### Der replacer-Parameter

Der `replacer`-Parameter kann entweder eine Funktion oder ein Array sein.

Als Array geben seine Elemente die Namen der Eigenschaften im Objekt an, die im resultierenden JSON-String enthalten sein sollen. Es werden nur Zeichenfolgen- und Zahlenwerte berücksichtigt; Symbolschlüssel werden ignoriert.

Als Funktion nimmt er zwei Parameter: den `key` und den zu stringifizierenden `value`. Das Objekt, in dem der Schlüssel gefunden wurde, wird als `this`-Kontext des `replacer` bereitgestellt.

Die `replacer`-Funktion wird auch für das anfängliche Objekt aufgerufen, das stringifiziert wird, in welchem Fall der `key` ein leerer String (`""`) ist. Danach wird sie für jede Eigenschaft des Objekts oder Arrays aufgerufen, das stringifiziert wird. Array-Indizes werden in ihrer string-Form als `key` bereitgestellt. Der aktuelle Eigenschaftswert wird durch den Rückgabewert des `replacer` für die Stringifizierung ersetzt. Dies bedeutet:

- Wenn Sie eine Zahl, Zeichenfolge, ein Boolean oder `null` zurückgeben, wird dieser Wert direkt serialisiert und als Eigenschaftswert verwendet. (Das Zurückgeben eines BigInt wird ebenfalls einen Fehler auslösen.)
- Wenn Sie eine {{jsxref("Function")}}, ein {{jsxref("Symbol")}} oder {{jsxref("undefined")}} zurückgeben, wird die Eigenschaft nicht in die Ausgabe aufgenommen.
- Wenn Sie irgendein anderes Objekt zurückgeben, wird das Objekt rekursiv stringifiziert, wobei die `replacer`-Funktion auf jede Eigenschaft aufgerufen wird.

> [!NOTE]
> Wenn Sie JSON, das mit `replacer`-Funktionen generiert wurde, parsen, möchten Sie wahrscheinlich den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter)-Parameter verwenden, um die umgekehrte Operation durchzuführen.

Normalerweise würden sich Array-Elemente nie verschieben (selbst wenn das Element ein ungültiger Wert wie eine Funktion ist, wird es zu `null` anstatt es auszulassen). Die Verwendung der `replacer`-Funktion erlaubt es Ihnen, die Reihenfolge der Array-Elemente zu steuern, indem Sie ein anderes Array zurückgeben.

### Der space-Parameter

Der `space`-Parameter kann verwendet werden, um den Abstand im endgültigen String zu steuern.

- Wenn es eine Zahl ist, werden aufeinanderfolgende Ebenen in der Stringifizierung jeweils um diese Anzahl von Leerzeichen eingerückt.
- Wenn es eine Zeichenfolge ist, werden aufeinanderfolgende Ebenen um diese Zeichenfolge eingerückt.

Jede Ebene der Einrückung wird nie länger als 10 sein. Zahlenwerte von `space` sind auf 10 begrenzt, und Zeichenfolgenwerte werden auf 10 Zeichen abgeschnitten.

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

Wenn Sie möchten, dass der `replacer` ein Anfangsobjekt von einem Schlüssel mit einer leeren Zeichenfolge unterscheidet (da beide den leeren String als Schlüssel und potenziell ein Objekt als Wert zurückgeben würden), müssen Sie die Iterationsanzahl verfolgen (wenn es über die erste Iteration hinausgeht, ist es ein echter leerer Schlüssel).

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

Die Ausgabe mit einem Leerzeichen einrücken:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Die Verwendung eines Tabulators imitiert das Standard-Erscheinungsbild eines Pretty-Prints:

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

Die Definition von `toJSON()` für ein Objekt erlaubt es, das Serialisierungsverhalten zu überschreiben.

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

### Problem bei der Serialisierung von zirkulären Referenzen

Da das [JSON-Format](https://www.json.org/) keine Objektverweise unterstützt (obwohl ein [IETF-Entwurf existiert](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), wird ein {{jsxref("TypeError")}} ausgelöst, wenn man versucht, ein Objekt mit zirkulären Referenzen zu kodieren.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Um zirkuläre Referenzen zu serialisieren, können Sie eine Bibliothek verwenden, die sie unterstützt (z. B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford) oder selbst eine Lösung implementieren, die das Finden und Ersetzen (oder Entfernen) der zirkulären Referenzen durch serialisierbare Werte erfordert.

Wenn Sie `JSON.stringify()` verwenden, um ein Objekt tief zu kopieren, möchten Sie stattdessen möglicherweise [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) verwenden, das zirkuläre Referenzen unterstützt. JavaScript-Engine-APIs für die binäre Serialisierung, wie zum Beispiel [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), unterstützen ebenfalls zirkuläre Referenzen.

### Verwendung von JSON.stringify() mit localStorage

In einem Fall, in dem Sie ein vom Benutzer erstelltes Objekt speichern und es auch nach dem Schließen des Browsers wiederherstellen möchten, ist das folgende Beispiel ein Modell für die Anwendung von `JSON.stringify()`:

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

Engines, die die [wohlgeformte JSON.stringify-Spezifikation](https://github.com/tc39/proposal-well-formed-stringify) implementieren, werden einzelne Surrogates (jede Code-Punkt von U+D800 bis U+DFFF) mit Unicode-Escape-Sequenzen anstatt wörtlich (Ausgabe von einzelnen Surrogates) stringifizieren. Vor dieser Änderung konnten solche Zeichenfolgen nicht in gültigem UTF-8 oder UTF-16 kodiert werden:

```js
JSON.stringify("\uD800"); // '"�"'
```

Mit dieser Änderung stellt `JSON.stringify()` einzelne Surrogates dar, indem JSON-Escape-Sequenzen verwendet werden, die _in_ gültigem UTF-8 oder UTF-16 kodiert werden können:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Diese Änderung sollte rückwärtskompatibel sein, solange Sie das Ergebnis von `JSON.stringify()` an APIs wie `JSON.parse()` übergeben, die jeden gültigen JSON-Text akzeptieren, da sie Unicode-Escapes von einzelnen Surrogates als identisch zu den einzelnen Surrogates selbst behandeln. _Nur_ wenn Sie das Ergebnis von `JSON.stringify()` direkt interpretieren, müssen Sie `JSON.stringify()`s zwei mögliche Kodierungen dieser Code-Punkte sorgfältig behandeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.stringify`-Verhaltens (Symbol, wohlgeformtes Unicode, raw JSON) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
