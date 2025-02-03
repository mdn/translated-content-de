---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: 0f1c0c400eb2735fcd9ed710d437fe18b99bd2fe
---

{{JSRef}}

Die statische Methode **`JSON.parse()`** analysiert einen JSON-String und konstruiert den JavaScript-Wert oder das JavaScript-Objekt, das durch den String beschrieben wird. Es kann eine optionale _Reviver_-Funktion bereitgestellt werden, um eine Transformation des resultierenden Objekts durchzuführen, bevor es zurückgegeben wird.

{{EmbedInteractiveExample("pages/js/json-parse.html")}}

## Syntax

```js-nolint
JSON.parse(text)
JSON.parse(text, reviver)
```

### Parameter

- `text`
  - : Der String, der als JSON analysiert werden soll. Siehe das {{jsxref("JSON")}} Objekt für eine Beschreibung der JSON-Syntax.
- `reviver` {{optional_inline}}
  - : Falls eine Funktion, bestimmt diese, wie jeder ursprünglich durch das Parsen erzeugte Wert vor der Rückgabe transformiert wird. Nicht aufrufbare Werte werden ignoriert. Die Funktion erhält die folgenden Argumente:
    - `key`
      - : Der Schlüssel, der mit dem Wert assoziiert ist.
    - `value`
      - : Der durch das Parsen erzeugte Wert.
    - `context` {{optional_inline}}
      - : Ein Kontextobjekt, das den Zustand enthält, der für den aktuellen Ausdruck, der revitalisiert wird, relevant ist. Es ist ein neues Objekt für jede Aufruf der Reviver-Funktion. Es wird nur bei der Revitalisierung von primitiven Werten übergeben, nicht jedoch, wenn `value` ein Objekt oder Array ist. Es enthält die folgende Eigenschaft:
        - `source`
          - : Der ursprüngliche JSON-String, der diesen Wert darstellt.

### Rückgabewert

Das {{jsxref("Object")}}, {{jsxref("Array")}}, String, Nummer, Boolean oder `null` Wert entsprechend dem gegebenen JSON-`text`.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der String, der analysiert werden soll, kein gültiges JSON ist.

## Beschreibung

`JSON.parse()` analysiert einen JSON-String gemäß der [JSON-Grammatik](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar) und wertet den String aus, als ob er ein JavaScript-Ausdruck wäre. Die einzige Situation, in der ein Stück JSON-Text einen anderen Wert darstellt als der gleiche JavaScript-Ausdruck, ist bei der Behandlung des `"__proto__"` Schlüssels — siehe [Objektliteral-Syntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Der Reviver-Parameter

Wenn ein `reviver` angegeben ist, wird der durch das Parsen berechnete Wert _transformiert_, bevor er zurückgegeben wird. Genauer gesagt, der berechnete Wert und alle seine Eigenschaften (in einer [tiefenanalyseorientierten](https://en.wikipedia.org/wiki/Depth-first_search) Art und Weise, beginnend mit den am tiefsten verschachtelten Eigenschaften und fortschreitend bis hin zum ursprünglichen Wert selbst) werden einzeln durch den `reviver` geführt.

Der `reviver` wird mit dem Objekt, das die bearbeitete Eigenschaft enthält, als `this` aufgerufen (es sei denn, Sie definieren den `reviver` als Pfeilfunktion, in welchem Fall es keine separate `this`-Bindung gibt) und mit zwei Argumenten: `key` und `value`, die den Eigenschaftsnamen als String (auch für Arrays) und den Eigenschaftswert darstellen. Für primitive Werte wird ein zusätzliches `context`-Parameter übergeben, das den Quelltext dieses Wertes enthält. Wenn die `reviver`-Funktion {{jsxref("undefined")}} zurückgibt (oder keinen Wert zurückgibt — zum Beispiel, wenn die Ausführung am Ende der Funktion stoppt), wird die Eigenschaft aus dem Objekt gelöscht. Andernfalls wird die Eigenschaft neu definiert, um den Rückgabewert darzustellen. Wenn der `reviver` nur einige Werte und nicht andere transformiert, achten Sie darauf, alle nicht transformierten Werte unverändert zurückzugeben — sonst werden sie aus dem resultierenden Objekt gelöscht.

Ähnlich dem `replacer`-Parameter von {{jsxref("JSON.stringify()")}}, wird der `reviver` bei Arrays und Objekten zuletzt auf den Wurzelwert mit einem leeren String als `key` und dem Wurzelobjekt als `value` aufgerufen. Für andere gültige JSON-Werte funktioniert `reviver` auf ähnliche Weise und wird einmal mit einem leeren String als `key` und dem Wert selbst als `value` aufgerufen.

Wenn Sie einen anderen Wert vom `reviver` zurückgeben, ersetzt dieser Wert vollständig den ursprünglich analysierten Wert. Dies gilt sogar für den Wurzelwert. Zum Beispiel:

```js
const transformedObj1 = JSON.parse('[1,5,{"s":1}]', (key, value) => {
  return typeof value === "object" ? undefined : value;
});

console.log(transformedObj1); // undefined
```

Es gibt keinen generischen Weg, dies zu umgehen. Sie können nicht speziell den Fall behandeln, in dem `key` ein leerer String ist, weil JSON-Objekte auch Schlüssel mit leeren Strings enthalten können. Sie müssen sehr genau wissen, welche Art von Transformation für jeden Schlüssel benötigt wird, wenn Sie den Reviver implementieren.

Beachten Sie, dass `reviver` ausgeführt wird, nachdem der Wert analysiert wurde. Zum Beispiel wurden Zahlen in JSON-Text bereits in JavaScript-Zahlen konvertiert, und können während dieses Vorgangs an Genauigkeit verlieren. Eine Möglichkeit, große Zahlen ohne Genauigkeitsverlust zu übertragen, besteht darin, sie als Strings zu serialisieren und sie als [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) oder andere geeignete Formate mit beliebiger Genauigkeit zu revitalisieren.

Sie können auch die `context.source`-Eigenschaft verwenden, um auf den ursprünglichen JSON-Quelltext zuzugreifen, der den Wert repräsentiert, wie unten gezeigt:

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

### Verwendung des Reviver-Parameters

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

### Verwendung von Reviver in Kombination mit dem Replacer von JSON.stringify()

Damit ein Wert ordnungsgemäß "rundläuft" (d.h., er wird in dasselbe ursprüngliche Objekt deserialisiert), muss der Serialisierungsprozess die Typinformationen bewahren. Zum Beispiel können Sie den `replacer`-Parameter von {{jsxref("JSON.stringify()")}} hierfür verwenden:

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

Da JSON keinen Syntaxraum für die Annotation von Typ-Metadaten hat, müssen Sie, um Werte, die keine einfachen Objekte sind, wiederzubeleben, eine der folgenden Möglichkeiten in Betracht ziehen:

- Serialisieren Sie das gesamte Objekt zu einem String und versehen Sie es mit einem Typ-Tag.
- "Raten" Sie basierend auf der Struktur der Daten (zum Beispiel ein Array von Arrays mit zwei Mitgliedern)
- Wenn die Struktur der Nutzlast fest definiert ist, basierend auf dem Eigenschaftsnamen (zum Beispiel alle Eigenschaften namens `registry` enthalten `Map` Objekte).

### Ungültiges JSON

Wenn `JSON.parse` einen String erhält, der nicht der JSON-Grammatik entspricht, wirft es einen `SyntaxError`.

Arrays und Objekte dürfen in JSON keine [nachgestellten Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) haben:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON-Strings müssen durch doppelte (nicht einzelne) Anführungszeichen begrenzt sein:

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

Wenn Sie JSON innerhalb eines JavaScript-String-Literals schreiben, sollten Sie entweder einzelne Anführungszeichen verwenden, um das JavaScript-String-Literal zu begrenzen, oder die doppelten Anführungszeichen, die den JSON-String begrenzen, escapen:

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.parse` Verhaltens (Revivers `context` Parameter) in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON.stringify()")}}
