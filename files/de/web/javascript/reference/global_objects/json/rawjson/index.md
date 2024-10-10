---
title: JSON.rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 88da904e9e2dc2c35d5608916242a60b8bdcbe3c
---

{{JSRef}}

Die **`JSON.rawJSON()`** statische Methode erstellt ein "rohes JSON"-Objekt, das einen JSON-Text enthält. Bei der Serialisierung zu JSON wird das rohe JSON-Objekt behandelt, als ob es bereits ein Stück JSON ist. Dieser Text muss gültiges JSON sein.

## Syntax

```js-nolint
JSON.rawJSON(string)
```

### Parameter

- `string`
  - : Der JSON-Text. Muss gültiges JSON **für einen primitiven Wert darstellen**.

### Rückgabewert

Ein Objekt, das verwendet werden kann, um JSON-Text mit dem exakt gleichen Inhalt wie der bereitgestellte `string` zu erstellen, ohne Anführungszeichen um den String selbst. Dieses Objekt [hat den Prototyp `null`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und [ist eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) (damit es niemals versehentlich als reguläres Objekt durch eine Art von primitiver Umwandlung serialisiert wird) und verfügt über folgende Eigenschaft:

- `rawJSON`
  - : Der ursprüngliche JSON `string`, der bereitgestellt wurde.

Darüber hinaus besitzt es eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), die es als rohes JSON-Objekt kennzeichnet. Dies ermöglicht es, von {{jsxref("JSON.stringify()")}} und {{jsxref("JSON.isRawJSON()")}} identifiziert zu werden.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der `string` kein gültiges JSON ist oder wenn er ein Objekt oder Array darstellt.

## Beschreibung

Ein rohes JSON-Objekt kann als eine unveränderliche, atomare Datenstruktur angesehen werden, ähnlich wie jede Art von [Primitiv](/de/docs/Web/JavaScript/Data_structures#primitive_values). Es ist kein reguläres Objekt und enthält keine anderen Daten als den rohen JSON-Text. Es wird verwendet, um Daten auf "vor-serialisierte" Formate zu bringen, die `JSON.stringify` aus verschiedenen Gründen nicht erzeugen kann. Der häufigste Anwendungsfall ist das Problem des Verlusts von Genauigkeit bei Fließkommazahlen. Zum Beispiel:

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

Der Wert ist nicht mehr genau gleich dem ursprünglichen Wert! Das liegt daran, dass JavaScript Fließkommadarstellungen für alle Zahlen verwendet, sodass es nicht alle Ganzzahlen genau darstellen kann. Das Zahlenliteral `12345678901234567890` wird bereits auf die nächstliegende darstellbare Zahl gerundet, wenn es von JavaScript geparst wird.

Ohne `JSON.rawJSON` gibt es keine Möglichkeit, `JSON.stringify` anzuweisen, das Zahlenliteral `12345678901234567890` zu erzeugen, da es keinen entsprechenden JavaScript-Zahlenwert gibt. Mit rohem JSON können Sie `JSON.stringify()` direkt mitteilen, wie ein bestimmter Wert stringifiziert werden soll:

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

Ein vollständigeres Beispiel dazu finden Sie unter [Verlustfreie Zahlenserialization](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

Beachten Sie, dass wir, obwohl wir einen String an `JSON.rawJSON()` übergeben haben, es dennoch im endgültigen JSON eine Zahl wird. Dies liegt daran, dass der String den unveränderten JSON-Text darstellt. Wenn Sie einen String serialisieren möchten, sollten Sie `JSON.rawJSON()` mit einem in Anführungszeichen eingeschlossenen Stringwert verwenden:

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

`JSON.rawJSON` erlaubt Ihnen, beliebigen JSON-Text einzufügen, erlaubt aber nicht, ungültiges JSON zu erstellen. Alles, was durch die JSON-Syntax nicht erlaubt war, ist auch durch `JSON.rawJSON()` nicht erlaubt:

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // Syntax error, because line breaks are not allowed in JSON strings
```

Darüber hinaus können Sie `JSON.rawJSON()` nicht verwenden, um JSON-Objekte oder Arrays zu erstellen.

## Beispiele

### Verwendung von JSON.rawJSON() zur Erstellung von JSON-Ausdrücken unterschiedlicher Typen

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

Allerdings können Sie `JSON.rawJSON()` nicht verwenden, um JSON-Objekte oder Arrays zu erstellen:

```js example-bad
const arrJSON = JSON.rawJSON("[1, 2, 3]");
const objJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### Verwendung von JSON.rawJSON() zur Erstellung von escaped String-Literalen

Neben Zahlen gibt es nur einen weiteren Typ, der keine Eins-zu-Eins-Entsprechung zwischen JavaScript-Werten und JSON-Text hat: Strings. Wenn Strings zu JSON serialisiert werden, werden alle Codepunkte, außer denen, die in JSON-String-Literalen nicht erlaubt sind (wie z.B. Zeilenumbrüche), wörtlich gedruckt:

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

Dies ist möglicherweise nicht wünschenswert, da der Empfänger dieses Strings Unicode anders behandeln könnte. Um die Interoperabilität zu verbessern, können Sie explizit den String mit Escape-Sequenzen angeben, der serialisiert werden soll:

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(JSON.parse(objStr).value); // 😄
```

Beachten Sie, dass die doppelten Backslashes im `rawJSON` tatsächlich ein einzelnes Schrägstrich-Zeichen darstellen, sodass der JSON-Text folgendermaßen aussieht:

```json-nolint
{"value":"\ud83d\ude04"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `JSON.rawJSON` in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.isRawJSON()")}}
- {{jsxref("JSON.stringify()")}}
