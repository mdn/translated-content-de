---
title: JSON.rawJSON()
short-title: rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`JSON.rawJSON()`** erstellt ein „Raw-JSON-Objekt“, das einen JSON-Text enthält. Bei der Serialisierung in JSON wird das Raw-JSON-Objekt so behandelt, als wäre es bereits JSON-Text. Dieser Text muss gültiges JSON sein.

## Syntax

```js-nolint
JSON.rawJSON(string)
```

### Parameter

- `string`
  - : Der JSON-Text. Er muss gültiges JSON sein, das **einen primitiven Wert darstellt**.

### Rückgabewert

Ein Objekt, mit dem sich JSON-Text erstellen lässt, dessen Inhalt exakt dem übergebenen `string` entspricht, ohne Anführungszeichen um die Zeichenfolge selbst. Dieses Objekt [hat einen `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und [ist eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) (damit es bei einer Umwandlung in einen primitiven Wert nicht versehentlich als gewöhnliches Objekt serialisiert wird). Es besitzt die folgende Eigenschaft:

- `rawJSON`
  - : Der ursprünglich übergebene JSON-`string`.

Außerdem besitzt es ein [privates Feld](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), das es als Raw-JSON-Objekt kennzeichnet. Dadurch können {{jsxref("JSON.stringify()")}} und {{jsxref("JSON.isRawJSON()")}} es erkennen.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn `string` kein gültiges JSON ist oder ein Objekt oder Array darstellt.

## Beschreibung

Ein Raw-JSON-Objekt kann als unveränderliche, atomare Datenstruktur betrachtet werden, ähnlich einem [primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values). Es ist kein gewöhnliches Objekt und enthält außer dem Raw-JSON-Text keine Daten. Es wird verwendet, um Daten vorab in Formate zu serialisieren, die `JSON.stringify` aus verschiedenen Gründen selbst nicht erzeugen kann. Der häufigste Anwendungsfall ist der Verlust an Genauigkeit bei Gleitkommazahlen. Zum Beispiel:

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

Der Wert entspricht nicht mehr exakt der ursprünglichen Zahl! Das liegt daran, dass JavaScript für alle Zahlen eine Gleitkommadarstellung verwendet und daher nicht alle Ganzzahlen exakt darstellen kann. Schon das Zahlenliteral `12345678901234567890` wird beim Parsen durch JavaScript auf die nächstliegende darstellbare Zahl gerundet.

Ohne `JSON.rawJSON` gibt es keine Möglichkeit, `JSON.stringify` zur Ausgabe des Zahlenliterals `12345678901234567890` zu veranlassen, da kein entsprechender JavaScript-Zahlenwert existiert. Mit Raw-JSON können Sie `JSON.stringify()` direkt vorgeben, als welcher Text ein bestimmter Wert serialisiert werden soll:

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

Ein ausführlicheres Beispiel dazu finden Sie unter [Verlustfreie Serialisierung von Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

Beachten Sie: Obwohl wir eine Zeichenfolge an `JSON.rawJSON()` übergeben haben, wird daraus im endgültigen JSON eine Zahl. Das liegt daran, dass die Zeichenfolge den JSON-Text wortgetreu darstellt. Wenn Sie eine Zeichenfolge serialisieren möchten, sollten Sie `JSON.rawJSON()` einen in Anführungszeichen eingeschlossenen Zeichenfolgenwert übergeben:

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

Mit `JSON.rawJSON` können Sie beliebigen JSON-Text einfügen, aber kein ungültiges JSON erzeugen. Was die JSON-Syntax nicht erlaubt, erlaubt auch `JSON.rawJSON()` nicht:

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // Syntax error, because line breaks are not allowed in JSON strings
```

Außerdem können Sie mit `JSON.rawJSON()` keine JSON-Objekte oder -Arrays erstellen.

## Beispiele

### JSON.rawJSON() zum Erstellen von JSON-Ausdrücken verschiedener Typen verwenden

```js
const numJSON = JSON.rawJSON("123");
const strJSON = JSON.rawJSON('"Hello world"');
const boolJSON = JSON.rawJSON("true");
const nullJSON = JSON.rawJSON("null");

console.log(
  JSON.stringify({
    age: numJSON,
    message: strJSON,
    isActive: boolJSON,
    nothing: nullJSON,
  }),
);

// {"age":123,"message":"Hello world","isActive":true,"nothing":null}
```

Sie können mit `JSON.rawJSON()` jedoch keine JSON-Objekte oder -Arrays erstellen:

```js example-bad
const arrJSON = JSON.rawJSON("[1, 2, 3]");
const objJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### JSON.rawJSON() zum Erstellen von Zeichenfolgenliteralen mit Escape-Sequenzen verwenden

Neben Zahlen gibt es nur einen weiteren Typ, bei dem JavaScript-Werte und JSON-Text einander nicht eindeutig entsprechen: Zeichenfolgen. Wenn Zeichenfolgen in JSON serialisiert werden, werden alle Codepunkte wörtlich ausgegeben, außer denen, die in JSON-Zeichenfolgenliteralen nicht zulässig sind (etwa Zeilenumbrüche):

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

Das ist möglicherweise unerwünscht, da der Empfänger dieser Zeichenfolge Unicode anders verarbeiten könnte. Um die Interoperabilität zu verbessern, können Sie die zu serialisierende Zeichenfolge ausdrücklich mit Escape-Sequenzen angeben:

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(objStr); // {"value":"\ud83d\ude04"}
console.log(JSON.parse(objStr).value); // 😄
```

Beachten Sie, dass die doppelten Backslashes in `rawJSON` tatsächlich jeweils ein einzelnes Backslash-Zeichen darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `JSON.rawJSON` in `core-js`](https://core-js.io/docs/features/ecmascript/json)
- {{jsxref("JSON")}}
- {{jsxref("JSON.isRawJSON()")}}
- {{jsxref("JSON.stringify()")}}
