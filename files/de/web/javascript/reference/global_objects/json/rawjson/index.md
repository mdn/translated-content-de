---
title: JSON.rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 91e28c4fca37647aeae71365d811d0cca9024fe0
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`JSON.rawJSON()`** erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält. Wenn es in JSON serialisiert wird, wird das rohe JSON-Objekt behandelt, als wäre es bereits ein Stück JSON. Dieser Text muss gültiges JSON sein.

## Syntax

```js-nolint
JSON.rawJSON(string)
```

### Parameter

- `string`
  - : Der JSON-Text. Muss gültiges JSON sein, das **einen primitiven Wert** darstellt.

### Rückgabewert

Ein Objekt, das verwendet werden kann, um JSON-Text mit dem exakt gleichen Inhalt wie der bereitgestellte `string` zu erstellen, jedoch ohne Anführungszeichen um den String selbst. Dieses Objekt [hat das `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und [ist eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) (damit es niemals versehentlich als reguläres Objekt durch irgendeine Art primitiver Konversion serialisiert wird) und hat die folgende Eigenschaft:

- `rawJSON`
  - : Der originale JSON-`string`, der bereitgestellt wurde.

Außerdem verfügt es über eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), die es als rohes JSON-Objekt markiert. Dadurch kann es durch {{jsxref("JSON.stringify()")}} und {{jsxref("JSON.isRawJSON()")}} identifiziert werden.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der `string` kein gültiges JSON ist oder wenn er ein Objekt oder Array darstellt.

## Beschreibung

Ein rohes JSON-Objekt kann als unveränderbare, atomare Datenstruktur wie jede Art von [Primitive](/de/docs/Web/JavaScript/Data_structures#primitive_values) angesehen werden. Es ist kein reguläres Objekt und enthält keine Daten außer dem rohen JSON-Text. Es wird verwendet, um Daten "vorzuserialisieren", in Formate, die `JSON.stringify` aus verschiedenen Gründen selbst nicht erzeugen kann. Der häufigste Anwendungsfall ist das Problem des Präzisionsverlusts von Gleitkommazahlen. Zum Beispiel:

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

Der Wert entspricht nicht mehr genau der ursprünglichen Zahl! Dies liegt daran, dass JavaScript eine Gleitpunktdarstellung für alle Zahlen verwendet und daher nicht alle Ganzzahlen exakt darstellen kann. Die Zahlenliterale `12345678901234567890` selbst werden bereits beim Parsen durch JavaScript auf die nächste darstellbare Zahl gerundet.

Ohne `JSON.rawJSON` gibt es keine Möglichkeit, `JSON.stringify` zu sagen, dass das Zahlenliteral `12345678901234567000` produziert werden soll, weil es einfach keinen entsprechenden JavaScript-Zahlenwert gibt. Mit rohem JSON können Sie direkt `JSON.stringify()` mitteilen, wie ein bestimmter Wert serialisiert werden soll:

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

Für ein vollständigeres Beispiel siehe [Verlustfreie Zahlenspeicherung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

Beachten Sie, dass, obwohl wir einen String an `JSON.rawJSON()` übergeben haben, er im endgültigen JSON dennoch zu einer Zahl wird. Dies liegt daran, dass der String den wörtlichen JSON-Text darstellt. Wenn Sie einen String serialisieren möchten, sollten Sie `JSON.rawJSON()` mit einem in Anführungszeichen eingeschlossenen Stringwert verwenden:

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

Mit `JSON.rawJSON` können Sie beliebigen JSON-Text einfügen, aber kein ungültiges JSON erstellen. Alles, was durch die JSON-Syntax nicht erlaubt war, ist auch durch `JSON.rawJSON()` nicht erlaubt:

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // Syntaxfehler, da Zeilenumbrüche in JSON-Strings nicht erlaubt sind
```

Darüber hinaus können Sie mit `JSON.rawJSON()` keine JSON-Objekte oder -Arrays erstellen.

## Beispiele

### Verwendung von JSON.rawJSON() zur Erstellung von JSON-Ausdrücken verschiedener Typen

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

Allerdings können Sie `JSON.rawJSON()` nicht verwenden, um JSON-Objekte oder -Arrays zu erstellen:

```js example-bad
const arrJSON = JSON.rawJSON("[1, 2, 3]");
const objJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### Verwendung von JSON.rawJSON() zur Erstellung von Escape-Zeichenfolgenliteralen

Abgesehen von Zahlen gibt es nur einen weiteren Typ, der keine eins-zu-eins Entsprechung zwischen JavaScript-Werten und JSON-Text hat: Strings. Wenn Strings in JSON serialisiert werden, werden alle Zeichen außer denen, die in JSON-Stringliteralen nicht erlaubt sind (wie Zeilenumbrüche), wörtlich gedruckt:

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

Dies ist möglicherweise nicht wünschenswert, da der Empfänger dieses Strings Unicode möglicherweise unterschiedlich handhabt. Um die Interoperabilität zu verbessern, können Sie explizit den zu serialisierenden String mit Escape-Sequenzen angeben:

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(JSON.parse(objStr).value); // 😄
```

Beachten Sie, dass die doppelten Rückwärtsschrägstriche im `rawJSON` tatsächlich ein einzelnes Schrägstrichzeichen darstellen, sodass der JSON-Text folgendermaßen aussieht:

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
