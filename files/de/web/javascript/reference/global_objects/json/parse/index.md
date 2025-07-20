---
title: JSON.parse()
short-title: parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Methode **`JSON.parse()`** analysiert einen JSON-String und konstruiert den durch den String beschriebenen JavaScript-Wert oder das Objekt. Es kann eine optionale _reviver_-Funktion bereitgestellt werden, um eine Transformation des resultierenden Objekts durchzuführen, bevor es zurückgegeben wird.

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
  - : Der String, der als JSON analysiert werden soll. Siehe das {{jsxref("JSON")}}-Objekt für eine Beschreibung der JSON-Syntax.
- `reviver` {{optional_inline}}
  - : Wenn es sich um eine Funktion handelt, legt diese fest, wie jeder Wert, der ursprünglich durch das Parsen erzeugt wurde, vor der Rückgabe transformiert wird. Nicht-aufrufbare Werte werden ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `key`
      - : Der Schlüssel, der mit dem Wert verknüpft ist.
    - `value`
      - : Der durch das Parsen erzeugte Wert.
    - `context` {{optional_inline}}
      - : Ein Kontextobjekt, das den Status enthält, der für den aktuellen Ausdruck relevant ist, der wiederbelebt wird. Es ist ein neues Objekt für jeden Aufruf der Reviver-Funktion. Es wird nur beim Wiederbeleben primitiver Werte übergeben, jedoch nicht, wenn `value` ein Objekt oder Array ist. Es enthält folgende Eigenschaft:
        - `source`
          - : Der ursprüngliche JSON-String, der diesen Wert darstellt.

### Rückgabewert

Der {{jsxref("Object")}}, {{jsxref("Array")}}, String, die Zahl, der Boolean oder der `null`-Wert, der dem gegebenen JSON-`text` entspricht.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der zu parsende String kein gültiges JSON ist.

## Beschreibung

`JSON.parse()` analysiert einen JSON-String entsprechend der [JSON-Grammatik](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar) und bewertet den String, als ob er ein JavaScript-Ausdruck wäre. Der einzige Fall, in dem ein JSON-Text einen anderen Wert darstellt als der gleiche JavaScript-Ausdruck, tritt bei dem Schlüssel `"__proto__"` auf — siehe [Objektliteral-Syntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Der Reviver-Parameter

Wenn ein `reviver` angegeben ist, wird der durch das Parsen berechnete Wert _transformiert_, bevor er zurückgegeben wird. Insbesondere werden der berechnete Wert und alle seine Eigenschaften (in einer [Tiefensuche](https://en.wikipedia.org/wiki/Depth-first_search) beginnend mit den am tiefsten verschachtelten Eigenschaften weiter zur ursprünglichen Wert selbst) einzeln durch den `reviver` geführt.

Der `reviver` wird mit dem Objekt aufgerufen, das die zu verarbeitende Eigenschaft enthält, als `this` (es sei denn, Sie definieren den `reviver` als Arrow-Funktion, in diesem Fall gibt es keine separate `this`-Bindung) und zwei Argumenten: `key` und `value`, die den Eigenschaftsnamen als String (auch für Arrays) und den Eigenschaftswert darstellen. Für primitive Werte wird ein zusätzlicher `context`-Parameter übergeben, der den Quelltext dieses Wertes enthält. Wenn die `reviver`-Funktion {{jsxref("undefined")}} zurückgibt (oder keinen Wert zurückgibt — zum Beispiel, wenn die Ausführung am Ende der Funktion endet), wird die Eigenschaft aus dem Objekt gelöscht. Andernfalls wird die Eigenschaft neu definiert, um der Rückgabewert zu sein. Wenn der `reviver` nur einige Werte transformiert und andere nicht, sollten alle untransformierten Werte unverändert zurückgegeben werden — andernfalls werden sie aus dem resultierenden Objekt gelöscht.

Ähnlich wie beim `replacer`-Parameter von {{jsxref("JSON.stringify()")}} wird `reviver` bei Arrays und Objekten zuletzt auf den Wurzelwert mit einem leeren String als `key` und dem Wurzelobjekt als `value` aufgerufen. Für andere gültige JSON-Werte funktioniert `reviver` ähnlich und wird einmal mit einem leeren String als `key` und dem Wert selbst als `value` aufgerufen.

Wenn Sie einen anderen Wert von `reviver` zurückgeben, ersetzt dieser Wert den ursprünglich geparsten Wert vollständig. Dies gilt auch für den Wurzelwert. Ein Beispiel:

```js
const transformedObj = JSON.parse('[1,5,{"s":1}]', (key, value) =>
  typeof value === "object" ? undefined : value,
);

console.log(transformedObj); // undefined
```

Es gibt keine generische Möglichkeit, dies zu umgehen. Sie können den Fall, bei dem `key` ein leerer String ist, nicht speziell behandeln, da JSON-Objekte auch Schlüssel haben können, die leere Strings sind. Sie müssen sehr genau wissen, welche Art von Transformation für jeden Schlüssel erforderlich ist, wenn Sie den Reviver implementieren.

Beachten Sie, dass `reviver` ausgeführt wird, nachdem der Wert geparst wurde. So werden beispielsweise Zahlen im JSON-Text bereits in JavaScript-Zahlen konvertiert und können dabei an Genauigkeit verlieren. Eine Möglichkeit, große Zahlen ohne Genauigkeitsverlust zu übertragen, ist, sie als Strings zu serialisieren und sie in [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) oder andere geeignete Formate mit beliebiger Genauigkeit wiederzubeleben.

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

### Verwendung des Revivers in Kombination mit dem Replacer von JSON.stringify()

Damit ein Wert ordnungsgemäß "round-tript" (d.h. er wird auf das gleiche ursprüngliche Objekt deserialisiert), muss der Serialisierungsprozess die Typinformationen beibehalten. Beispielsweise können Sie hierfür den `replacer`-Parameter von {{jsxref("JSON.stringify()")}} verwenden:

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

Da JSON keinen syntaktischen Raum zur Annotation von Typ-Metadaten hat, müssen Sie eine der folgenden Möglichkeiten in Betracht ziehen, um Werte zu beleben, die keine einfachen Objekte sind:

- Serialisieren Sie das gesamte Objekt zu einem String und versehen Sie es mit einem Typ-Tag.
- "Erraten" basierend auf der Struktur der Daten (z. B. ein Array von Zweier-Arrays)
- Wenn die Form der Nutzlast festgelegt ist, basierend auf dem Eigenschaftsnamen (z. B. halten alle Eigenschaften namens `registry` `Map`-Objekte).

### Ungültiges JSON

Wenn `JSON.parse` einen String erhält, der nicht der JSON-Grammatik entspricht, wird eine `SyntaxError`-Ausnahme ausgelöst.

Arrays und Objekte dürfen in JSON keine [nachgestellten Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) haben:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON-Strings müssen durch doppelte (nicht einfache) Anführungszeichen begrenzt werden:

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

Wenn Sie JSON in einem JavaScript-Stringliteral schreiben, sollten Sie entweder einfache Anführungszeichen verwenden, um das JavaScript-Stringliteral zu begrenzen, oder die doppelten Anführungszeichen, die das JSON-String begrenzen, maskieren:

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.parse`-Verhaltens (`context`-Parameter des Revivers) in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON.stringify()")}}
