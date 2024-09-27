---
title: URLSearchParams
slug: Web/API/URLSearchParams
l10n:
  sourceCommit: 6cca2796f0dcfe90e2b6a069b5e10e0d139278a3
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Das **`URLSearchParams`**-Interface definiert Hilfsmethoden zur Arbeit mit dem Abfrage-String einer URL.

`URLSearchParams`-Objekte sind [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), sodass sie direkt in einer {{jsxref("Statements/for...of", "for...of")}}-Struktur verwendet werden können, um über Schlüssel/Wert-Paare in der gleichen Reihenfolge zu iterieren, wie sie im Abfrage-String erscheinen. Zum Beispiel sind die folgenden zwei Zeilen gleichwertig:

```js
for (const [key, value] of mySearchParams) {
}
for (const [key, value] of mySearchParams.entries()) {
}
```

Obwohl `URLSearchParams` funktional ähnlich zu einem {{jsxref("Map")}} ist, kann es beim Iterieren einige [Fallstricke](/de/docs/Web/JavaScript/Reference/Iteration_protocols#concurrent_modifications_when_iterating) geben, die `Map` nicht auftritt, aufgrund der Implementierung.

## Konstruktor

- [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams)
  - : Gibt eine `URLSearchParams`-Objektinstanz zurück.

## Instanz-Eigenschaften

- [`size`](/de/docs/Web/API/URLSearchParams/size) {{ReadOnlyInline}}
  - : Gibt die Gesamtzahl der Einträge von Suchparametern an.

## Instanz-Methoden

- `URLSearchParams[Symbol.iterator]()`
  - : Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück, der die Iteration durch alle Schlüssel/Wert-Paare in diesem Objekt in der gleichen Reihenfolge erlaubt, wie sie im Abfrage-String erscheinen.
- [`URLSearchParams.append()`](/de/docs/Web/API/URLSearchParams/append)
  - : Fügt ein angegebenes Schlüssel/Wert-Paar als neuen Suchparameter hinzu.
- [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete)
  - : Löscht Suchparameter, die mit einem Namen und optionalem Wert übereinstimmen, aus der Liste aller Suchparameter.
- [`URLSearchParams.entries()`](/de/docs/Web/API/URLSearchParams/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück, der die Iteration durch alle Schlüssel/Wert-Paare in diesem Objekt in der gleichen Reihenfolge erlaubt, wie sie im Abfrage-String erscheinen.
- [`URLSearchParams.forEach()`](/de/docs/Web/API/URLSearchParams/forEach)
  - : Erlaubt die Iteration durch alle Werte in diesem Objekt über eine Callback-Funktion.
- [`URLSearchParams.get()`](/de/docs/Web/API/URLSearchParams/get)
  - : Gibt den ersten Wert zurück, der mit dem gegebenen Suchparameter assoziiert ist.
- [`URLSearchParams.getAll()`](/de/docs/Web/API/URLSearchParams/getAll)
  - : Gibt alle Werte zurück, die mit einem gegebenen Suchparameter assoziiert sind.
- [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob ein gegebenes Parameter- oder Parameter-und Wert-Paar existiert.
- [`URLSearchParams.keys()`](/de/docs/Web/API/URLSearchParams/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der die Iteration durch alle Schlüssel der Schlüssel/Wert-Paare in diesem Objekt erlaubt.
- [`URLSearchParams.set()`](/de/docs/Web/API/URLSearchParams/set)
  - : Setzt den mit einem gegebenen Suchparameter assoziierten Wert auf den angegebenen Wert. Wenn es mehrere Werte gibt, werden die anderen gelöscht.
- [`URLSearchParams.sort()`](/de/docs/Web/API/URLSearchParams/sort)
  - : Sortiert alle, falls vorhanden, Schlüssel/Wert-Paare nach ihren Schlüsseln.
- [`URLSearchParams.toString()`](/de/docs/Web/API/URLSearchParams/toString)
  - : Gibt einen String zurück, der einen Abfrage-String enthält, der für die Verwendung in einer URL geeignet ist.
- [`URLSearchParams.values()`](/de/docs/Web/API/URLSearchParams/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der die Iteration durch alle Werte der Schlüssel/Wert-Paare in diesem Objekt erlaubt.

## Beispiele

```js
const paramsString = "q=URLUtils.searchParams&topic=api";
const searchParams = new URLSearchParams(paramsString);

// Iterating the search parameters
for (const p of searchParams) {
  console.log(p);
}

console.log(searchParams.has("topic")); // true
console.log(searchParams.has("topic", "fish")); // false
console.log(searchParams.get("topic") === "api"); // true
console.log(searchParams.getAll("topic")); // ["api"]
console.log(searchParams.get("foo") === null); // true
console.log(searchParams.append("topic", "webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=api&topic=webdev"
console.log(searchParams.set("topic", "More webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=More+webdev"
console.log(searchParams.delete("topic"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams"
```

```js
// Search parameters can also be an object
const paramsObj = { foo: "bar", baz: "bar" };
const searchParams = new URLSearchParams(paramsObj);

console.log(searchParams.toString()); // "foo=bar&baz=bar"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // "bar"
```

### Doppelte Suchparameter

```js
const paramStr = "foo=bar&foo=baz";
const searchParams = new URLSearchParams(paramStr);

console.log(searchParams.toString()); // "foo=bar&foo=baz"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // bar, only returns the first value
console.log(searchParams.getAll("foo")); // ["bar", "baz"]
```

### Kein URL-Parsing

Der `URLSearchParams`-Konstruktor parst _nicht_ vollständige URLs. Allerdings wird ein vorangestelltes `?`, falls vorhanden, von einem String entfernt.

```js
const paramsString1 = "http://example.com/search?query=%40";
const searchParams1 = new URLSearchParams(paramsString1);

console.log(searchParams1.has("query")); // false
console.log(searchParams1.has("http://example.com/search?query")); // true

console.log(searchParams1.get("query")); // null
console.log(searchParams1.get("http://example.com/search?query")); // "@" (equivalent to decodeURIComponent('%40'))

const paramsString2 = "?query=value";
const searchParams2 = new URLSearchParams(paramsString2);
console.log(searchParams2.has("query")); // true

const url = new URL("http://example.com/search?query=%40");
const searchParams3 = new URLSearchParams(url.search);
console.log(searchParams3.has("query")); // true
```

### Pluszeichen beibehalten

Der `URLSearchParams`-Konstruktor interpretiert Pluszeichen (`+`) als Leerzeichen, was zu Problemen führen kann. Im Beispiel unten verwenden wir [hexadezimale Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hexadecimal_escape_sequences), um einen String, der Binärdaten enthält (wo jedes Byte Informationen trägt), zu simulieren, der in den URL-Suchparametern gespeichert werden muss. Beachten Sie, wie der von `btoa()` erzeugte kodierte String `+` enthält und nicht von `URLSearchParams` erhalten bleibt.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams(`bin=${base64Data}`); // 'bin=E+AXQB+A'
const binQuery = searchParams.get("bin"); // 'E AXQB A', '+' is replaced by spaces

console.log(atob(binQuery) === rawData); // false
```

Sie können dies vermeiden, indem Sie die Daten mit {{jsxref("encodeURIComponent", "encodeURIComponent()")}} kodieren.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'
const encodedBase64Data = encodeURIComponent(base64Data); // 'E%2BAXQB%2BA'

const searchParams = new URLSearchParams(`bin=${encodedBase64Data}`); // 'bin=E%2BAXQB%2BA'
const binQuery = searchParams.get("bin"); // 'E+AXQB+A'

console.log(atob(binQuery) === rawData); // true
```

### Leerer Wert vs. kein Wert

`URLSearchParams` unterscheidet nicht zwischen einem Parameter ohne Zeichen nach dem `=` und einem Parameter, der überhaupt kein `=` hat.

```js
const emptyVal = new URLSearchParams("foo=&bar=baz");
console.log(emptyVal.get("foo")); // returns ''
const noEquals = new URLSearchParams("foo&bar=baz");
console.log(noEquals.get("foo")); // also returns ''
console.log(noEquals.toString()); // 'foo=&bar=baz'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- Das [`URL`](/de/docs/Web/API/URL)-Interface.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
