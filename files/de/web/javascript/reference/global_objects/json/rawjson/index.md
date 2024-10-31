---
title: JSON.rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 0e8730e1a9bdfaa1710530c47135f79cedc3e94b
---

{{JSRef}}

Die statische Methode **`JSON.rawJSON()`** erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält. Wenn es in JSON serialisiert wird, wird das rohe JSON-Objekt behandelt, als wäre es bereits ein JSON-Stück. Dieser Text muss gültiges JSON sein.

## Syntax

```js-nolint
JSON.rawJSON(string)
```

### Parameter

- `string`
  - : Der JSON-Text. Muss gültiges JSON **darstellen, das einen primitiven Wert repräsentiert**.

### Rückgabewert

Ein Objekt, das verwendet werden kann, um JSON-Text mit genau demselben Inhalt wie der bereitgestellte `string` zu erstellen, ohne Anführungszeichen um den String selbst. Dieses Objekt [hat ein `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und [ist eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) (so dass es niemals versehentlich als reguläres Objekt durch irgendeine Art von primitiver Umwandlung serialisiert wird), und es hat die folgende Eigenschaft:

- `rawJSON`
  - : Der ursprüngliche JSON-`string`, der bereitgestellt wurde.

Darüber hinaus hat es eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), die es als rohes JSON-Objekt kennzeichnet. Dies ermöglicht es, von {{jsxref("JSON.stringify()")}} und {{jsxref("JSON.isRawJSON()")}} erkannt zu werden.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der `string` kein gültiges JSON ist oder wenn er ein Objekt oder Array darstellt.

## Beschreibung

Ein rohes JSON-Objekt kann als eine unveränderliche, atomare Datenstruktur betrachtet werden, ähnlich wie jede Art von [Primärwert](/de/docs/Web/JavaScript/Data_structures#primitive_values). Es ist kein reguläres Objekt und enthält keine Daten außer dem rohen JSON-Text. Es wird verwendet, um Daten „vorzuserialisieren“ zu Formaten, die `JSON.stringify` selbst aus verschiedenen Gründen nicht erzeugen kann. Der typischste Anwendungsfall ist das Problem des Gleitkomma-Präzisionsverlusts. Zum Beispiel:

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

Der Wert ist nicht mehr genau äquivalent zur ursprünglichen Zahl! Dies liegt daran, dass JavaScript eine Gleitpunktdarstellung für alle Zahlen verwendet, sodass nicht alle Ganzzahlen exakt dargestellt werden können. Das Zahlenliteral `12345678901234567890` wird bereits gerundet, um die nächst darstellbare Zahl zu sein, wenn es von JavaScript geparst wird.

Ohne `JSON.rawJSON` gibt es keine Möglichkeit, `JSON.stringify` zu sagen, dass es das Zahlenliteral `12345678901234567890` erzeugen soll, da es einfach keinen entsprechenden JavaScript-Zahlenwert gibt. Mit rohem JSON können Sie direkt angeben, wie `JSON.stringify()` einen bestimmten Wert serialisieren soll:

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

Für ein vollständigeres Beispiel dazu siehe [Verlustfreie Zahlen-Serialisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

Beachten Sie, dass obwohl wir einen String an `JSON.rawJSON()` übergeben haben, er dennoch eine Zahl im endgültigen JSON wird. Dies liegt daran, dass der String den wörtlichen JSON-Text darstellt. Wenn Sie einen String serialisieren möchten, sollten Sie `JSON.rawJSON()` mit einem in Anführungszeichen eingeschlossenen String-Wert verwenden:

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

`JSON.rawJSON` ermöglicht es Ihnen, beliebigen JSON-Text einzufügen, erlaubt aber nicht die Erstellung von ungültigem JSON. Alles, was durch die JSON-Syntax nicht erlaubt war, ist auch bei `JSON.rawJSON()` nicht erlaubt:

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // Syntax error, because line breaks are not allowed in JSON strings
```

Außerdem können Sie `JSON.rawJSON()` nicht verwenden, um JSON-Objekte oder -Arrays zu erstellen.

## Beispiele

### Nutzung von JSON.rawJSON() zur Erstellung von JSON-Ausdrücken verschiedener Typen

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

Sie können jedoch `JSON.rawJSON()` nicht verwenden, um JSON-Objekte oder -Arrays zu erstellen:

```js example-bad
const arrJSON = JSON.rawJSON("[1, 2, 3]");
const objJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### Verwendung von JSON.rawJSON() zur Erstellung von Escape-Zeichenfolgenliteralen

Neben Zahlen gibt es nur einen anderen Typ, der keine eins-zu-eins Entsprechung zwischen JavaScript-Werten und JSON-Text hat: Zeichenfolgen. Wenn Zeichenfolgen in JSON serialisiert werden, werden alle Codepunkte, mit Ausnahme derer, die in JSON-Zeichenfolgenliteralen nicht zulässig sind (wie etwa Zeilenumbrüche), wörtlich ausgegeben:

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

Dies kann unerwünscht sein, da der Empfänger dieser Zeichenfolge Unicode möglicherweise anders handhabt. Um die Interoperabilität zu verbessern, können Sie explizit angeben, wie die Zeichenfolge mit Escape-Sequenzen serialisiert werden soll:

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(objStr); // {"value":"\ud83d\ude04"}
console.log(JSON.parse(objStr).value); // 😄
```

Beachten Sie, dass die doppelten Rückwärtsschrägstriche in der `rawJSON` tatsächlich ein einzelnes Schrägstrichzeichen darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `JSON.rawJSON` in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.isRawJSON()")}}
- {{jsxref("JSON.stringify()")}}
