---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`JSON.parse()`** analysiert eine JSON-Zeichenkette und erstellt den JavaScript-Wert oder das Objekt, das durch die Zeichenkette beschrieben wird. Eine optionale _reviver_-Funktion kann bereitgestellt werden, um eine Transformation des resultierenden Objekts durchzuführen, bevor es zurückgegeben wird.

{{InteractiveExample("JavaScript-Demo: JSON.parse()")}}

```js interactive-example
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true
```

## Syntax

```js-nolint
JSON.parse(text)
JSON.parse(text, reviver)
```

### Parameter

- `text`
  - : Die zu analysierende Zeichenkette als JSON. Siehe das {{jsxref("JSON")}}-Objekt für eine Beschreibung der JSON-Syntax.
- `reviver` {{optional_inline}}
  - : Wenn eine Funktion angegeben wird, legt diese fest, wie jeder durch das Parsen ursprünglich erzeugte Wert transformiert wird, bevor er zurückgegeben wird. Nicht-aufrufbare Werte werden ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `key`
      - : Der Schlüssel, der dem Wert zugeordnet ist.
    - `value`
      - : Der Wert, der durch das Parsen erzeugt wurde.
    - `context` {{optional_inline}}
      - : Ein Kontextobjekt, das den Status enthält, der für den aktuellen Ausdruck relevant ist, der wiederbelebt wird. Es handelt sich um ein neues Objekt für jeden Aufruf der reviver-Funktion. Es wird nur beim Wiederbeleben von primitiven Werten übergeben, nicht jedoch, wenn `value` ein Objekt oder ein Array ist. Es enthält die folgende Eigenschaft:
        - `source`
          - : Die ursprüngliche JSON-Zeichenkette, die diesen Wert darstellt.

### Rückgabewert

Das entsprechende {{jsxref("Object")}}, {{jsxref("Array")}}, die Zeichenkette, Zahl, boolescher Wert oder der `null`-Wert, der aus dem angegebenen JSON-`text` resultiert.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn die zu analysierende Zeichenkette kein gültiges JSON ist.

## Beschreibung

`JSON.parse()` analysiert eine JSON-Zeichenkette gemäß der [JSON-Grammatik](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar) und wertet die Zeichenkette so aus, als ob sie ein JavaScript-Ausdruck wäre. Der einzige Fall, in dem ein JSON-Textstück einen anderen Wert als derselbe JavaScript-Ausdruck darstellt, betrifft den Schlüssel `"__proto__"` – siehe [Objektsyntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Der reviver-Parameter

Wenn ein `reviver` angegeben ist, wird der durch das Parsen berechnete Wert _transformiert_, bevor er zurückgegeben wird. Insbesondere werden der berechnete Wert und alle seine Eigenschaften (in einer [tiefenorientierten](https://de.wikipedia.org/wiki/Tiefensuche) Reihenfolge, beginnend mit den verschachteltsten Eigenschaften und fortschreitend bis hin zum ursprünglichen Wert selbst) einzeln durch den `reviver` verarbeitet.

Der `reviver` wird aufgerufen, wobei das Objekt, das die aktuell bearbeitete Eigenschaft enthält, als `this` fungiert (es sei denn, der `reviver` wird als Pfeilfunktion definiert, in welchem Fall es keine separate `this`-Bindung gibt). Es werden zwei Argumente übergeben: `key` und `value`, die den Eigenschaftsnamen als Zeichenkette (auch für Arrays) und den Eigenschaftswert repräsentieren. Für primitive Werte wird ein zusätzliches `context`-Argument übergeben, das den Quelltext dieses Wertes enthält. Wenn die `reviver`-Funktion {{jsxref("undefined")}} zurückgibt (oder keinen Wert zurückgibt – z. B. wenn die Ausführung am Ende der Funktion endet), wird die Eigenschaft aus dem Objekt entfernt. Andernfalls wird die Eigenschaft so definiert, dass sie den Rückgabewert hat. Wenn der `reviver` nur einige Werte transformiert und andere nicht, müssen Sie sicherstellen, dass alle nicht transformierten Werte unverändert zurückgegeben werden – andernfalls werden sie aus dem resultierenden Objekt gelöscht.

Ähnlich wie der `replacer`-Parameter von {{jsxref("JSON.stringify()")}} wird für Arrays und Objekte der `reviver` zuletzt für den ursprünglichen Wert mit einem leeren Zeichenfolgen-`key` und dem ursprünglichen Objekt als `value` aufgerufen. Für andere gültige JSON-Werte funktioniert der `reviver` ähnlich und wird einmal mit einem leeren Zeichenfolgen-`key` und dem Wert selbst als `value` aufgerufen.

Wenn Sie einen anderen Wert vom `reviver` zurückgeben, wird dieser Wert den ursprünglich geparsten Wert vollständig ersetzen. Dies gilt auch für den Ursprungswert. Zum Beispiel:

```js
const transformedObj1 = JSON.parse('[1,5,{"s":1}]', (key, value) => {
  return typeof value === "object" ? undefined : value;
});

console.log(transformedObj1); // undefined
```

Es gibt keine Möglichkeit, dies allgemein zu umgehen. Sie können den Fall, in dem `key` eine leere Zeichenkette ist, nicht speziell behandeln, da JSON-Objekte auch Schlüssel mit leeren Zeichenketten enthalten können. Sie müssen sehr genau wissen, welche Art von Transformation für jeden Schlüssel erforderlich ist, wenn Sie den Reviver implementieren.

Beachten Sie, dass der `reviver` ausgeführt wird, nachdem der Wert analysiert wurde. Zahlen in JSON-Texten werden also bereits in JavaScript-Zahlen umgewandelt und können dabei an Genauigkeit verlieren. Eine Möglichkeit, große Zahlen verlustfrei zu übertragen, besteht darin, sie als Zeichenfolgen zu serialisieren und zu [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) oder zu anderen geeigneten Formaten mit willkürlicher Genauigkeit zu konvertieren.

Sie können auch die Eigenschaft `context.source` verwenden, um auf den ursprünglichen JSON-Quelltext zuzugreifen, der den Wert darstellt, wie unten gezeigt:

```js
const bigJSON = '{"gross_gdp": 12345678901234567890}';
const bigObj = JSON.parse(bigJSON, (key, value, context) => {
  if (key === "gross_gdp") {
    // Ignore the value because it has already lost precision
    return BigInt(context.source);
  }
  return value;
});
```

## Beispiele

### Verwendung von JSON.parse()

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### Verwendung des reviver-Parameters

```js
JSON.parse(
  '{"p": 5}',
  (key, value) =>
    typeof value === "number"
      ? value * 2 // return value * 2 for numbers
      : value, // return everything else unchanged
);
// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key);
  return value;
});
// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### Verwendung von reviver in Kombination mit dem replacer von JSON.stringify()

Damit ein Wert korrekt "rundläuft" (d.h. er wird in dasselbe ursprüngliche Objekt deserialisiert), muss der Serialisierungsprozess die Typinformationen beibehalten. Zum Beispiel können Sie dafür den `replacer`-Parameter von {{jsxref("JSON.stringify()")}} verwenden:

```js
// Maps are normally serialized as objects with no properties.
// We can use the replacer to specify the entries to be serialized.
const map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const jsonText = JSON.stringify(map, (key, value) =>
  value instanceof Map ? Array.from(value.entries()) : value,
);

console.log(jsonText);
// [[1,"one"],[2,"two"],[3,"three"]]

const map2 = JSON.parse(jsonText, (key, value) =>
  Array.isArray(value) && value.every(Array.isArray) ? new Map(value) : value,
);

console.log(map2);
// Map { 1 => "one", 2 => "two", 3 => "three" }
```

Da JSON keinen Syntaxbereich für die Annotation von Typ-Metadaten hat, müssen Sie zum Wiederbeleben von Werten, die keine einfachen Objekte sind, eine der folgenden Methoden in Betracht ziehen:

- Serialisieren Sie das gesamte Objekt als Zeichenkette und versehen Sie es mit einem Typ-Tag.
- "Erraten" Sie basierend auf der Struktur der Daten (z. B. ein Array aus zweigliedrigen Arrays).
- Wenn die Form der Nutzlast festgelegt ist, basierend auf dem Namen der Eigenschaft (z. B. halten alle Eigenschaften namens `registry` `Map`-Objekte).

### Ungültiges JSON

Wenn `JSON.parse` eine Zeichenkette erhält, die nicht der JSON-Grammatik entspricht, wird eine `SyntaxError`-Ausnahme ausgelöst.

Arrays und Objekte dürfen in JSON keine [Abschließenden Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON-Zeichenketten müssen durch doppelte (nicht einzelne) Anführungszeichen begrenzt sein:

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

Wenn Sie JSON in einem JavaScript-Zeichenfolgenliteral schreiben, sollten Sie entweder einzelne Anführungszeichen zur Begrenzung des JavaScript-Zeichenfolgenliterals verwenden oder die doppelten Anführungszeichen, die die JSON-Zeichenkette begrenzen, maskieren:

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.parse`-Verhaltens (reviver's `context`-Parameter) in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON.stringify()")}}
