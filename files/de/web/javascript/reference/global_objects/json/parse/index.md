---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: c3951963f6d3397d21624cfc94a72203acad6412
---

{{JSRef}}

Die statische Methode **`JSON.parse()`** analysiert einen JSON-String und erstellt den JavaScript-Wert oder das JavaScript-Objekt, das durch den String beschrieben wird. Eine optionale _reviver_-Funktion kann bereitgestellt werden, um eine Transformation des resultierenden Objekts vorzunehmen, bevor es zurückgegeben wird.

{{EmbedInteractiveExample("pages/js/json-parse.html")}}

## Syntax

```js-nolint
JSON.parse(text)
JSON.parse(text, reviver)
```

### Parameter

- `text`
  - : Der zu parsende String als JSON. Siehe das {{jsxref("JSON")}}-Objekt für eine Beschreibung der JSON-Syntax.
- `reviver` {{optional_inline}}
  - : Wenn eine Funktion, legt dies fest, wie jeder ursprünglich durch das Parsen erzeugte Wert vor der Rückgabe transformiert wird. Nicht-aufrufbare Werte werden ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `key`
      - : Der Schlüssel, der dem Wert zugeordnet ist.
    - `value`
      - : Der durch das Parsen erzeugte Wert.
    - `context` {{optional_inline}}
      - : Ein Kontextobjekt, das den Zustand hält, der für den aktuellen Ausdruck relevant ist, der wiederbelebt wird. Es ist ein neues Objekt für jeden Aufruf der Reviver-Funktion. Es wird nur bei der Wiederbelebung primitiver Werte übergeben, aber nicht wenn `value` ein Objekt oder Array ist. Es enthält die folgende Eigenschaft:
        - `source`
          - : Der ursprüngliche JSON-String, der diesen Wert darstellt.

### Rückgabewert

Das {{jsxref("Object")}}, {{jsxref("Array")}}, der String, die Zahl, der boolesche Wert oder der `null`-Wert, der dem gegebenen JSON `text` entspricht.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der zu parsierende String kein gültiges JSON ist.

## Beschreibung

`JSON.parse()` analysiert einen JSON-String entsprechend der [JSON-Grammatik](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar) und wertet den String aus, als wäre er ein JavaScript-Ausdruck. Der einzige Fall, in dem ein JSON-Text einen anderen Wert als der gleiche JavaScript-Ausdruck darstellt, ist, wenn der `"__proto__"`-Schlüssel berücksichtigt wird — sehen Sie [Objektliteral-Syntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Der Reviver-Parameter

Wenn ein `reviver` angegeben ist, wird der durch das Parsen berechnete Wert _transformiert_, bevor er zurückgegeben wird. Genauer gesagt, werden der berechnete Wert und alle seine Eigenschaften (in einer [tiefensuchenden](https://en.wikipedia.org/wiki/Depth-first_search) Methode, beginnend mit den am meisten verschachtelten Eigenschaften und fortfahrend bis zum ursprünglichen Wert selbst) einzeln durch den `reviver` geführt.

Der `reviver` wird mit dem Objekt aufgerufen, das die verarbeitete Eigenschaft als `this` enthält (es sei denn, Sie definieren den `reviver` als Pfeilfunktion, in diesem Fall gibt es keine separate `this`-Bindung), und zwei Argumenten: `key` und `value`, die den Eigenschaftsnamen als String (auch für Arrays) und den Eigenschaftswert darstellen. Für primitive Werte wird ein zusätzliches `context`-Parameter übergeben, das den Quelltext dieses Wertes enthält. Wenn die `reviver`-Funktion {{jsxref("undefined")}} zurückgibt (oder keinen Wert zurückgibt – zum Beispiel, wenn die Ausführung am Ende der Funktion beendet wird), wird die Eigenschaft aus dem Objekt gelöscht. Andernfalls wird die Eigenschaft als der Rückgabewert neu definiert. Wenn der `reviver` nur einige Werte transformiert und nicht andere, sollten Sie darauf achten, alle nicht transformierten Werte unverändert zurückzugeben – andernfalls werden sie aus dem resultierenden Objekt gelöscht.

Ähnlich wie beim `replacer`-Parameter von {{jsxref("JSON.stringify()")}} wird `reviver` für Arrays und Objekte zuletzt auf dem Wurzelwert mit einem leeren String als `key` und dem Wurzelobjekt als `value` aufgerufen. Für andere gültige JSON-Werte funktioniert `reviver` ähnlich und wird einmal mit einem leeren String als `key` und dem Wert selbst als `value` aufgerufen.

Wenn Sie einen anderen Wert aus `reviver` zurückgeben, wird dieser Wert den ursprünglich geparsten Wert vollkommen ersetzen. Dies trifft auch auf den Wurzelwert zu. Zum Beispiel:

```js
const transformedObj1 = JSON.parse('[1,5,{"s":1}]', (key, value) => {
  return typeof value === "object" ? undefined : value;
});

console.log(transformedObj1); // undefined
```

Es gibt keinen allgemeinen Weg, dies zu umgehen. Sie können den Fall, in dem `key` ein leerer String ist, nicht speziell behandeln, weil JSON-Objekte auch Schlüssel enthalten können, die leere Strings sind. Sie müssen sehr genau wissen, welche Art von Transformation für jeden Schlüssel benötigt wird, wenn Sie den Reviver implementieren.

Beachten Sie, dass `reviver` ausgeführt wird, nachdem der Wert geparst wurde. So werden zum Beispiel Zahlen im JSON-Text bereits in JavaScript-Zahlen konvertiert und können dabei an Präzision verlieren. Ein Weg, um große Zahlen verlustfrei zu übertragen, ist sie als Strings zu serialisieren und sie in [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) oder andere geeignete Formate für beliebige Präzus übertragen.

Sie können auch die `context.source`-Eigenschaft verwenden, um auf den originalen JSON-Quelltext zuzugreifen, der den Wert darstellt, wie unten gezeigt:

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

### Verwendung des Reviver in Kombination mit dem Replacer von JSON.stringify()

Damit ein Wert korrekt hin- und zurücktransportiert wird (d. h., er wird in das gleiche ursprüngliche Objekt deserialisiert), muss der Serialisierungsprozess die Typ-Informationen beibehalten. Zum Beispiel können Sie dafür den `replacer`-Parameter von {{jsxref("JSON.stringify()")}} verwenden:

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
  Array.isArray(value) ? new Map(value) : value,
);

console.log(map2);
// Map { 1 => "one", 2 => "two", 3 => "three" }
```

Da JSON keinen syntaktischen Raum für das Kommentieren von Typ-Metadaten hat, müssen Sie, um Werte wiederzubeleben, die keine einfachen Objekte sind, eine der folgenden Möglichkeiten in Betracht ziehen:

- Das gesamte Objekt in einen String serialisieren und es mit einem Typ-Tag versehen.
- "Raten" auf Basis der Struktur der Daten (zum Beispiel ein Array von Zwei-Element-Arrays)
- Wenn die Form der Nutzlast fest ist, basierend auf dem Eigenschaftsnamen (zum Beispiel alle Eigenschaften mit dem Namen `registry` enthalten `Map`-Objekte).

### Ungültiges JSON

Wenn `JSON.parse` einen String erhält, der nicht der JSON-Grammatik entspricht, wird ein `SyntaxError` ausgelöst.

Arrays und Objekte können in JSON keine [nachgestellten Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) haben:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON-Strings müssen durch doppelte (nicht einfache) Anführungszeichen begrenzt sein:

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

Wenn Sie JSON innerhalb eines JavaScript-String-Literals schreiben, sollten Sie entweder einfache Anführungszeichen verwenden, um das JavaScript-String-Literal zu begrenzen, oder die doppelten Anführungszeichen, die den JSON-String begrenzen, maskieren:

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.parse`-Verhaltens (Reviver's `context`-Parameter) in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON.stringify()")}}
