---
title: JSON.rawJSON()
short-title: rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`JSON.rawJSON()`** statische Methode erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält. Wenn es zu JSON serialisiert wird, wird das rohe JSON-Objekt so behandelt, als wäre es bereits ein JSON-Stück. Dieser Text muss gültiges JSON sein.

## Syntax

```js-nolint
JSON.rawJSON(string)
```

### Parameter

- `string`
  - : Der JSON-Text. Muss ein gültiges JSON **darstellend einen primitiven Wert** sein.

### Rückgabewert

Ein Objekt, das verwendet werden kann, um JSON-Text mit dem exakt gleichen Inhalt wie der bereitgestellte `string` zu erstellen, ohne Anführungszeichen um den String selbst. Dieses Objekt [hat `null` Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und [ist eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) (daher wird es niemals versehentlich als reguläres Objekt durch eine Art primitivem Konvertierung serialisiert) und hat die folgende Eigenschaft:

- `rawJSON`
  - : Der ursprüngliche JSON-`string`, der bereitgestellt wurde.

Darüber hinaus hat es ein [privates Feld](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), das sich selbst als rohes JSON-Objekt kennzeichnet. Dies ermöglicht es {{jsxref("JSON.stringify()")}} und {{jsxref("JSON.isRawJSON()")}}, es zu identifizieren.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der `string` kein gültiges JSON ist oder wenn er ein Objekt oder Array darstellt.

## Beschreibung

Ein rohes JSON-Objekt kann als eine unveränderliche, atomare Datenstruktur angesehen werden wie jede Art von [Primitive](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values). Es ist kein reguläres Objekt und enthält keine anderen Daten als den rohen JSON-Text. Es wird verwendet, um Daten zu „voraus-zu-serialisieren“ in Formate, die `JSON.stringify` selbst aus verschiedenen Gründen nicht erzeugen kann. Der typischste Anwendungsfall ist das Problem des Verlusts der Genauigkeit bei Gleitkommazahlen. Zum Beispiel:

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

Der Wert ist nicht mehr genau gleichwertig mit der ursprünglichen Zahl! Dies liegt daran, dass JavaScript für alle Zahlen die Gleitkommadarstellung verwendet, sodass es nicht alle Ganzzahlen exakt darstellen kann. Das Zahlenliteral `12345678901234567890` selbst wird bereits auf die nächstliegende darstellbare Zahl gerundet, wenn es von JavaScript geparst wird.

Ohne `JSON.rawJSON` gibt es keine Möglichkeit, `JSON.stringify` anzuweisen, das Zahlenliteral `12345678901234567890` zu erzeugen, da es schlichtweg keinen entsprechenden JavaScript-Zahlenwert gibt. Mit rohem JSON können Sie `JSON.stringify()` direkt mitteilen, wie ein bestimmter Wert als String serialisiert werden soll:

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

Ein vollständigeres Beispiel dafür finden Sie unter [Verlustfreie Zahlenspeicherung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

Beachten Sie, dass obwohl wir einen String zu `JSON.rawJSON()` übergeben haben, wird er dennoch im finalen JSON zu einer Zahl. Dies liegt daran, dass der String den wörtlichen JSON-Text darstellt. Wenn Sie einen String serialisieren möchten, sollten Sie `JSON.rawJSON()` mit einem in Anführungszeichen eingeschlossenen Stringwert verwenden:

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

`JSON.rawJSON` erlaubt Ihnen, beliebigen JSON-Text einzufügen, erlaubt es jedoch nicht, ungültiges JSON zu erstellen. Alles, was durch die JSON-Syntax nicht erlaubt ist, ist auch durch `JSON.rawJSON()` nicht erlaubt:

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // Syntax error, because line breaks are not allowed in JSON strings
```

Darüber hinaus können Sie `JSON.rawJSON()` nicht verwenden, um JSON-Objekte oder Arrays zu erstellen.

## Beispiele

### Verwendung von JSON.rawJSON(), um JSON-Ausdrücke unterschiedlicher Typen zu erstellen

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

### Verwendung von JSON.rawJSON(), um maskierte Zeichenfolgenliterale zu erstellen

Abgesehen von Zahlen gibt es nur einen weiteren Typ, der keine eins-zu-eins Entsprechung zwischen JavaScript-Werten und JSON-Text hat: Strings. Wenn Strings zu JSON serialisiert werden, werden alle Codepunkte, außer denen, die in JSON-Stringliteralen nicht legal sind (wie Zeilenumbrüche), wörtlich ausgegeben:

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

Dies ist möglicherweise nicht wünschenswert, da der Empfänger dieses Strings Unicode möglicherweise unterschiedlich behandelt. Um die Interoperabilität zu verbessern, können Sie den zu serialisierenden String explizit mit Escape-Sequenzen angeben:

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(objStr); // {"value":"\ud83d\ude04"}
console.log(JSON.parse(objStr).value); // 😄
```

Beachten Sie, dass die doppelten Backslashes im `rawJSON` tatsächlich ein einzelnes Backslash-Zeichen darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `JSON.rawJSON` in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.isRawJSON()")}}
- {{jsxref("JSON.stringify()")}}
