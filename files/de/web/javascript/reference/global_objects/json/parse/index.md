---
title: JSON.parse()
short-title: parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: a1aa79c09717761fc72c20bac94bb9c430ed487a
---

Die statische Methode **`JSON.parse()`** analysiert eine JSON-Zeichenfolge und erzeugt den darin beschriebenen JavaScript-Wert oder das Objekt. Optional kann eine _Reviver_-Funktion angegeben werden, die das Ergebnis vor der Rückgabe transformiert.

{{InteractiveExample("JavaScript Demo: JSON.parse()")}}

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
  - : Die Zeichenfolge, die als JSON analysiert werden soll. Eine Beschreibung der JSON-Syntax finden Sie beim Objekt {{jsxref("JSON")}}.
- `reviver` {{optional_inline}}
  - : Falls eine Funktion angegeben wird, legt sie fest, wie jeder beim Analysieren erzeugte Wert vor der Rückgabe transformiert wird. Werte, die nicht aufgerufen werden können, werden ignoriert. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `key`
      - : Der dem Wert zugeordnete Schlüssel.
    - `value`
      - : Der beim Analysieren erzeugte Wert.
    - `context`
      - : Ein Kontextobjekt mit Informationen zum aktuellen Ausdruck, dessen Wert wiederhergestellt wird. Bei jedem Aufruf der Reviver-Funktion wird ein neues Objekt erstellt.
        - `source` {{optional_inline}}
          - : Die ursprüngliche JSON-Zeichenfolge, die diesen Wert darstellt. Diese Eigenschaft ist nur bei der Wiederherstellung primitiver Werte vorhanden, nicht jedoch, wenn `value` ein Objekt oder Array ist.

### Rückgabewert

Der dem angegebenen JSON-`text` entsprechende Wert: ein {{jsxref("Object")}}, ein {{jsxref("Array")}}, eine Zeichenfolge, eine Zahl, ein boolescher Wert oder `null`.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn die zu analysierende Zeichenfolge kein gültiges JSON ist.

## Beschreibung

`JSON.parse()` analysiert eine JSON-Zeichenfolge gemäß der [JSON-Grammatik](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar) und wertet sie anschließend wie einen JavaScript-Ausdruck aus. Nur beim Schlüssel `"__proto__"` kann ein JSON-Text einen anderen Wert darstellen als der entsprechende JavaScript-Ausdruck – siehe [Objektliteral-Syntax im Vergleich zu JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Der Parameter `reviver`

Wenn ein `reviver` angegeben ist, wird der beim Analysieren ermittelte Wert vor der Rückgabe _transformiert_. Dazu werden der ermittelte Wert und alle seine Eigenschaften einzeln an den `reviver` übergeben. Die Verarbeitung erfolgt in [Tiefensuche](https://en.wikipedia.org/wiki/Depth-first_search): Sie beginnt bei den am tiefsten verschachtelten Eigenschaften und endet beim ursprünglichen Wert selbst.

Der `reviver` wird mit dem Objekt, das die gerade verarbeitete Eigenschaft enthält, als `this` und mit drei Argumenten aufgerufen: `key`, `value` und `context`. Wenn Sie den `reviver` als Pfeilfunktion definieren, gibt es keine eigene `this`-Bindung. Der Schlüssel ist auch bei Arrays eine Zeichenfolge. Bei primitiven Werten enthält das Argument `context` ein Feld namens `source` mit dem ursprünglichen Text dieses Werts. Gibt die `reviver`-Funktion {{jsxref("undefined")}} oder keinen Wert zurück – etwa weil das Ende der Funktion erreicht wird –, wird die Eigenschaft aus dem Objekt gelöscht. Andernfalls erhält die Eigenschaft den zurückgegebenen Wert. Wenn der `reviver` nur bestimmte Werte transformiert, müssen Sie alle unveränderten Werte unverändert zurückgeben. Andernfalls werden sie aus dem Ergebnis gelöscht.

Ähnlich wie beim Parameter `replacer` von {{jsxref("JSON.stringify()")}} wird `reviver` bei Arrays und Objekten zuletzt für den Wurzelwert aufgerufen, mit einer leeren Zeichenfolge als `key` und dem Wurzelobjekt als `value`. Bei anderen gültigen JSON-Werten wird `reviver` entsprechend einmal aufgerufen, mit einer leeren Zeichenfolge als `key` und dem Wert selbst als `value`.

Wenn Sie aus `reviver` einen anderen Wert zurückgeben, ersetzt dieser den ursprünglich analysierten Wert vollständig. Das gilt auch für den Wurzelwert. Beispiel:

```js
const transformedObj = JSON.parse('[1,5,{"s":1}]', (key, value) =>
  typeof value === "object" ? undefined : value,
);

console.log(transformedObj); // undefined
```

Dafür gibt es keine allgemeingültige Umgehung. Sie können den Fall eines leeren `key` nicht einfach gesondert behandeln, da JSON-Objekte ebenfalls Schlüssel enthalten können, die leere Zeichenfolgen sind. Bei der Implementierung des Revivers müssen Sie daher genau wissen, welche Transformation für jeden Schlüssel erforderlich ist.

Beachten Sie, dass `reviver` erst nach dem Analysieren des Werts ausgeführt wird. Zahlen im JSON-Text wurden zu diesem Zeitpunkt beispielsweise bereits in JavaScript-Zahlen umgewandelt und haben dabei möglicherweise an Genauigkeit verloren. Eine Möglichkeit, große Zahlen ohne Genauigkeitsverlust zu übertragen, besteht darin, sie als Zeichenfolgen zu serialisieren und anschließend als [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) oder in einem anderen geeigneten Format mit beliebiger Genauigkeit wiederherzustellen.

Sie können auch über die Eigenschaft `context.source` auf den ursprünglichen JSON-Quelltext zugreifen, der den Wert darstellt, wie im folgenden Beispiel gezeigt:

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

### JSON.parse() verwenden

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### Den Parameter `reviver` verwenden

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

### `reviver` zusammen mit dem `replacer` von JSON.stringify() verwenden

Damit ein Wert nach der Serialisierung und Deserialisierung wieder dem ursprünglichen Objekt entspricht, muss die Serialisierung die Typinformationen bewahren. Dazu können Sie beispielsweise den Parameter `replacer` von {{jsxref("JSON.stringify()")}} verwenden:

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

Da die JSON-Syntax keine Möglichkeit bietet, Typmetadaten anzugeben, müssen Sie zur Wiederherstellung von Werten, die keine einfachen Objekte sind, eine der folgenden Möglichkeiten in Betracht ziehen:

- Das gesamte Objekt als Zeichenfolge serialisieren und ein Typkennzeichen voranstellen.
- Den Typ aus der Datenstruktur „erraten“ (beispielsweise bei einem Array aus Arrays mit jeweils zwei Elementen).
- Bei fest vorgegebener Struktur der Daten den Typ anhand des Eigenschaftsnamens bestimmen (beispielsweise wenn alle Eigenschaften namens `registry` `Map`-Objekte enthalten).

### Ungültiges JSON

Wenn `JSON.parse` eine Zeichenfolge erhält, die nicht der JSON-Grammatik entspricht, wird ein `SyntaxError` ausgelöst.

Arrays und Objekte dürfen in JSON keine [abschließenden Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON-Zeichenfolgen müssen durch doppelte Anführungszeichen begrenzt sein, nicht durch einfache:

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

Wenn Sie JSON innerhalb eines JavaScript-Zeichenfolgenliterals schreiben, sollten Sie entweder das JavaScript-Zeichenfolgenliteral durch einfache Anführungszeichen begrenzen oder die doppelten Anführungszeichen des JSON-Texts maskieren:

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für das moderne Verhalten von `JSON.parse` (Parameter `context` des Revivers) in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON.stringify()")}}
