---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: c3951963f6d3397d21624cfc94a72203acad6412
---

{{JSRef}}

Die statische Methode **`JSON.parse()`** analysiert einen JSON-String und erstellt den JavaScript-Wert oder das Objekt, das durch den String beschrieben wird. Eine optionale _reviver_-Funktion kann bereitgestellt werden, um eine Transformation auf das resultierende Objekt durchzuführen, bevor es zurückgegeben wird.

{{EmbedInteractiveExample("pages/js/json-parse.html")}}

## Syntax

```js-nolint
JSON.parse(text)
JSON.parse(text, reviver)
```

### Parameter

- `text`
  - : Der String, der als JSON analysiert werden soll. Siehe das {{jsxref("JSON")}}-Objekt für eine Beschreibung der JSON-Syntax.
- `reviver` {{optional_inline}}
  - : Wenn eine Funktion, wird vorgeschrieben, wie jeder ursprünglich durch das Parsen erzeugte Wert vor der Rückgabe transformiert wird. Nicht-aufrufbare Werte werden ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `key`
      - : Der Schlüssel, der mit dem Wert verknüpft ist.
    - `value`
      - : Der Wert, der durch das Parsen erzeugt wurde.
    - `context` {{optional_inline}}
      - : Ein Kontextobjekt, das den relevanten Status für den aktuellen Ausdruck enthält, der wiederbelebt wird. Es ist ein neues Objekt für jeden Aufruf der Reviver-Funktion. Es wird nur beim Wiederbeleben primitiver Werte übergeben, nicht jedoch, wenn `value` ein Objekt oder Array ist. Es enthält die folgende Eigenschaft:
        - `source`
          - : Der originale JSON-String, der diesen Wert darstellt.

### Rückgabewert

Der {{jsxref("Object")}}, das {{jsxref("Array")}}, Zeichenkette, Zahl, Wahrheitswert oder das `null`-Wert, das dem gegebenen JSON `text` entspricht.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der zu analysierende String kein gültiges JSON ist.

## Beschreibung

`JSON.parse()` analysiert einen JSON-String gemäß der [JSON Grammatik](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar) und wertet den String aus, als wäre er ein JavaScript-Ausdruck. Die einzige Instanz, in der ein JSON-Text einen anderen Wert als derselbe JavaScript-Ausdruck darstellt, ist beim Umgang mit dem Schlüssel `"__proto__"` — siehe [Objektliteral-Syntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Der Reviver-Parameter

Wenn ein `reviver` angegeben ist, wird der durch das Parsen berechnete Wert _transformiert_, bevor er zurückgegeben wird. Speziell der berechnete Wert und alle seine Eigenschaften (in einer [Tiefensuche](https://en.wikipedia.org/wiki/Depth-first_search) Art, beginnend mit den am tiefsten verschachtelten Eigenschaften und fortschreitend bis zum ursprünglichen Wert selbst) werden einzeln durch den `reviver` geleitet.

Der `reviver` wird mit dem Objekt aufgerufen, das die zu verarbeitende Eigenschaft enthält, als `this` (es sei denn, Sie definieren den `reviver` als Pfeilfunktion, in diesem Fall gibt es keine separate `this`-Bindung) und zwei Argumenten: `key` und `value`, welche den Eigenschaftsnamen als Zeichenkette (auch für Arrays) und den Eigenschaftswert darstellen. Für primitive Werte wird ein zusätzlicher `context`-Parameter übergeben, der den Quelltext dieses Wertes enthält. Wenn die `reviver`-Funktion {{jsxref("undefined")}} zurückgibt (oder keinen Wert zurückgibt – zum Beispiel, wenn die Ausführung über das Ende der Funktion hinausgeht), wird die Eigenschaft aus dem Objekt gelöscht. Andernfalls wird die Eigenschaft neu definiert, um der Rückgabewert zu sein. Wenn der `reviver` nur einige Werte transformiert und nicht andere, stellen Sie sicher, dass alle untransformierten Werte unverändert zurückgegeben werden – andernfalls werden sie aus dem resultierenden Objekt gelöscht.

Ähnlich wie beim `replacer`-Parameter von {{jsxref("JSON.stringify()")}} wird der `reviver` zuletzt auf dem Wurzelwert mit einem leeren String als `key` und dem Wurzelobjekt als `value` aufgerufen. Für andere gültige JSON-Werte arbeitet der `reviver` ähnlich und wird einmal mit einem leeren String als `key` und dem Wert selbst als `value` aufgerufen.

Wenn Sie einen anderen Wert von `reviver` zurückgeben, ersetzt dieser Wert komplett den ursprünglich geparsten Wert. Dies gilt sogar für den Wurzelwert. Zum Beispiel:

```js
const transformedObj1 = JSON.parse('[1,5,{"s":1}]', (key, value) => {
  return typeof value === "object" ? undefined : value;
});

console.log(transformedObj1); // undefined
```

Es gibt keinen allgemeinen Weg, dies zu umgehen. Sie können den Fall, dass `key` ein leerer String ist, nicht speziell behandeln, da JSON-Objekte auch Schlüssel enthalten können, die leere Strings sind. Sie müssen sehr genau wissen, welche Art von Transformation für jeden Schlüssel benötigt wird, wenn Sie den Reviver implementieren.

Beachten Sie, dass der `reviver` ausgeführt wird, nachdem der Wert geparst wurde. Beispielsweise werden Zahlen im JSON-Text bereits in JavaScript-Zahlen konvertiert und können dabei an Genauigkeit verlieren. Eine Möglichkeit, um große Zahlen ohne Genauigkeitsverlust zu übertragen, besteht darin, sie als Strings zu serialisieren und sie zu [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) oder anderen geeigneten Formaten mit beliebiger Genauigkeit zu wiederbeleben.

Sie können auch die `context.source`-Eigenschaft verwenden, um auf den ursprünglichen JSON-Quelltext zuzugreifen, der den Wert darstellt, wie unten gezeigt:

```js
const bigJSON = '{"gross_gdp": 12345678901234567890}';
const bigObj = JSON.parse(bigJSON, (key, value, context) => {
  if (key === "gross_gdp") {
    // Den Wert ignorieren, weil er bereits an Genauigkeit verloren hat
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
      ? value * 2 // gibt value * 2 für Zahlen zurück
      : value, // gibt alles andere unverändert zurück
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

Damit ein Wert richtig round-trip-fähig ist (d. h., er wird in das gleiche Originalobjekt zurückdeserialisiert), muss der Serialisierungsprozess die Typinformationen beibehalten. Beispielsweise können Sie hierfür den `replacer`-Parameter von {{jsxref("JSON.stringify()")}} verwenden:

```js
// Maps werden normalerweise als Objekte ohne Eigenschaften serialisiert.
// Wir können den Replacer verwenden, um die zu serialisierenden Einträge anzugeben.
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

Da JSON keinen Syntaxraum für die Annotation von Typmetadaten hat, müssen Sie, um Werte, die keine einfachen Objekte sind, zu wiederbeleben, eine der folgenden Methoden berücksichtigen:

- Die gesamte Objektstruktur in eine Zeichenkette serialisieren und mit einem Typ-Tag versehen.
- "Raten" basierend auf der Struktur der Daten (z. B. ein Array von zwei-elementigen Arrays)
- Wenn die Form des Payloads fest ist, basierend auf dem Eigenschaftsnamen (z. B. alle Eigenschaften namens `registry` halten `Map`-Objekte).

### Ungültiges JSON

Wenn `JSON.parse` einen String erhält, der nicht der JSON-Grammatik entspricht, löst es einen `SyntaxError` aus.

Arrays und Objekte können in JSON keine [abschließenden Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) haben:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON-Zeichenketten müssen durch doppelte (nicht einzelne) Anführungszeichen begrenzt werden:

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

Wenn Sie JSON innerhalb eines JavaScript-Zeichenkettenliterals schreiben, sollten Sie entweder einfache Anführungszeichen verwenden, um den JavaScript-Zeichenkettenliteral zu begrenzen, oder die doppelten Anführungszeichen, die den JSON-String begrenzen, maskieren:

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `JSON.parse`-Verhaltens (Reviver's` context`-Parameter) in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON.stringify()")}}
