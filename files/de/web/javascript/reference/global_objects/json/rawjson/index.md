---
title: JSON.rawJSON()
short-title: rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{JSRef}}

Die statische Methode **`JSON.rawJSON()`** erstellt ein "Roh-JSON"-Objekt, das ein Stück JSON-Text enthält. Wenn es zu JSON serialisiert wird, wird das Roh-JSON-Objekt behandelt, als ob es bereits ein JSON-Stück ist. Dieser Text muss ein gültiges JSON sein.

## Syntax

```js-nolint
JSON.rawJSON(string)
```

### Parameter

- `string`
  - : Der JSON-Text. Muss ein gültiges JSON **darstellen, das einen primitiven Wert** repräsentiert.

### Rückgabewert

Ein Objekt, das verwendet werden kann, um JSON-Text mit demselben Inhalt wie der angegebene `string` zu erstellen, ohne Anführungszeichen um den String selbst. Dieses Objekt [hat `null` Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) und [ist eingefroren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) (damit es nie versehentlich als reguläres Objekt durch irgendeine Art von primitiver Umwandlung serialisiert wird) und weist die folgende Eigenschaft auf:

- `rawJSON`
  - : Der ursprüngliche angegebene JSON-`string`.

Des Weiteren verfügt es über ein [privates Feld](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), das es als Roh-JSON-Objekt kennzeichnet. Dies ermöglicht es, von {{jsxref("JSON.stringify()")}} und {{jsxref("JSON.isRawJSON()")}} erkannt zu werden.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der `string` kein gültiges JSON ist oder wenn er ein Objekt oder Array darstellt.

## Beschreibung

Ein Roh-JSON-Objekt kann als eine unveränderliche, atomare Datenstruktur wie jede Art von [Primitive](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) gesehen werden. Es ist kein reguläres Objekt und enthält keine Daten außer dem Roh-JSON-Text. Es wird verwendet, um Daten vorzu-serialisieren in Formate, die `JSON.stringify` selbst aus verschiedenen Gründen nicht erzeugen kann. Der häufigste Anwendungsfall ist das Problem der Verlust an Genauigkeit von Gleitkommazahlen. Zum Beispiel:

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

Der Wert entspricht nicht mehr genau dem ursprünglichen Wert! Dies liegt daran, dass JavaScript eine Gleitkomma-Darstellung für alle Zahlen verwendet und daher nicht alle Ganzzahlen genau darstellen kann. Das Zahlenliteral `12345678901234567890` wird bereits beim Parsen durch JavaScript auf die nächste darstellbare Zahl gerundet.

Ohne `JSON.rawJSON` gibt es keine Möglichkeit, `JSON.stringify` anzuweisen, das Zahlenliteral `12345678901234567890` zu erzeugen, da es einfach keinen entsprechenden JavaScript-Zahlenwert gibt. Mit Roh-JSON können Sie `JSON.stringify()` direkt mitteilen, als was ein bestimmter Wert serialisiert werden soll:

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

Für ein vollständigeres Beispiel dazu, siehe [Verlustfreie Zahlenspeicherung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

Beachten Sie, dass, obwohl wir einen String an `JSON.rawJSON()` übergeben haben, er im endgültigen JSON dennoch eine Zahl wird. Das liegt daran, dass der String den wörtlichen JSON-Text darstellt. Wenn Sie einen String serialisieren möchten, sollten Sie `JSON.rawJSON()` mit einem in Anführungszeichen eingeschlossenen Stringwert verwenden:

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

`JSON.rawJSON` ermöglicht es Ihnen, beliebigen JSON-Text einzufügen, erlaubt jedoch nicht die Erstellung von ungültigem JSON. Alles, was von der JSON-Syntax nicht erlaubt war, ist auch nicht durch `JSON.rawJSON()` erlaubt:

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // Syntax error, because line breaks are not allowed in JSON strings
```

Weiterhin können Sie mit `JSON.rawJSON()` keine JSON-Objekte oder -Arrays erstellen.

## Beispiele

### Verwendung von JSON.rawJSON(), um JSON-Ausdrücke verschiedener Typen zu erstellen

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

Sie können jedoch nicht `JSON.rawJSON()` verwenden, um JSON-Objekte oder -Arrays zu erstellen:

```js example-bad
const arrJSON = JSON.rawJSON("[1, 2, 3]");
const objJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### Verwendung von JSON.rawJSON(), um maskierte Zeichenfolgenliterale zu erstellen

Abgesehen von Zahlen gibt es nur einen weiteren Typ, der keine Eins-zu-eins-Entsprechung zwischen JavaScript-Werten und JSON-Text aufweist: Strings. Wenn Strings zu JSON serialisiert werden, werden alle Codepunkte, die nicht legal innerhalb von JSON-Stringliteralen sind (wie z.B. Zeilenumbrüche), wörtlich ausgegeben:

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

Dies ist möglicherweise nicht wünschenswert, da der Empfänger dieses Strings Unicode möglicherweise anders verarbeitet. Um die Interoperabilität zu verbessern, können Sie explizit angeben, dass der String mit Escape-Sequenzen serialisiert werden soll:

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(objStr); // {"value":"\ud83d\ude04"}
console.log(JSON.parse(objStr).value); // 😄
```

Beachten Sie, dass die doppelten Rückwärtsschrägstriche in `rawJSON` tatsächlich ein einzelnes Schrägstrichzeichen darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `JSON.rawJSON` in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.isRawJSON()")}}
- {{jsxref("JSON.stringify()")}}
