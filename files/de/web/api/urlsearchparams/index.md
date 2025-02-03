---
title: URLSearchParams
slug: Web/API/URLSearchParams
l10n:
  sourceCommit: bfe3107430ad0646713b57262e02625a2e155fd4
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Das **`URLSearchParams`** Interface definiert Hilfsmethoden, um mit der Abfragezeichenfolge einer URL zu arbeiten.

`URLSearchParams` Objekte sind [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), sodass sie direkt in einer {{jsxref("Statements/for...of", "for...of")}} Struktur verwendet werden können, um über Schlüssel/Wert-Paare in der gleichen Reihenfolge zu iterieren, wie sie in der Abfragezeichenfolge erscheinen. Zum Beispiel sind die folgenden zwei Zeilen äquivalent:

```js
for (const [key, value] of mySearchParams) {
}
for (const [key, value] of mySearchParams.entries()) {
}
```

Obwohl `URLSearchParams` funktional einem {{jsxref("Map")}} ähnelt, kann es beim Iterieren zu einigen [Fallstricken](/de/docs/Web/JavaScript/Reference/Iteration_protocols#concurrent_modifications_when_iterating) kommen, denen `Map` aufgrund seiner Implementierung nicht begegnet.

## Konstruktor

- [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams)
  - : Gibt eine Instanz eines `URLSearchParams` Objekts zurück.

## Instanz-Eigenschaften

- [`size`](/de/docs/Web/API/URLSearchParams/size) {{ReadOnlyInline}}
  - : Gibt die Gesamtzahl der Einträge der Suchparameter an.

## Instanz-Methoden

- `URLSearchParams[Symbol.iterator]()`
  - : Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück, der die Iteration über alle in diesem Objekt enthaltenen Schlüssel/Wert-Paare in der Reihenfolge ermöglicht, wie sie in der Abfragezeichenfolge erscheinen.
- [`URLSearchParams.append()`](/de/docs/Web/API/URLSearchParams/append)
  - : Fügt ein angegebenes Schlüssel/Wert-Paar als neuen Suchparameter hinzu.
- [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete)
  - : Löscht Suchparameter, die mit einem Namen und optionalem Wert übereinstimmen, aus der Liste aller Suchparameter.
- [`URLSearchParams.entries()`](/de/docs/Web/API/URLSearchParams/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück, der die Iteration über alle in diesem Objekt enthaltenen Schlüssel/Wert-Paare in der Reihenfolge ermöglicht, wie sie in der Abfragezeichenfolge erscheinen.
- [`URLSearchParams.forEach()`](/de/docs/Web/API/URLSearchParams/forEach)
  - : Ermöglicht die Iteration über alle in diesem Objekt enthaltenen Werte mittels einer Callback-Funktion.
- [`URLSearchParams.get()`](/de/docs/Web/API/URLSearchParams/get)
  - : Gibt den ersten Wert zurück, der mit dem angegebenen Suchparameter verknüpft ist.
- [`URLSearchParams.getAll()`](/de/docs/Web/API/URLSearchParams/getAll)
  - : Gibt alle Werte zurück, die mit einem bestimmten Suchparameter verknüpft sind.
- [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob ein bestimmter Parameter oder Parameter-Wert-Paar existiert.
- [`URLSearchParams.keys()`](/de/docs/Web/API/URLSearchParams/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der die Iteration über alle Schlüssel der in diesem Objekt enthaltenen Schlüssel/Wert-Paare ermöglicht.
- [`URLSearchParams.set()`](/de/docs/Web/API/URLSearchParams/set)
  - : Setzt den Wert, der mit einem bestimmten Suchparameter verknüpft ist, auf den angegebenen Wert. Wenn es mehrere Werte gibt, werden die anderen gelöscht.
- [`URLSearchParams.sort()`](/de/docs/Web/API/URLSearchParams/sort)
  - : Sortiert alle Schlüssel/Wert-Paare, falls vorhanden, nach ihren Schlüsseln.
- [`URLSearchParams.toString()`](/de/docs/Web/API/URLSearchParams/toString)
  - : Gibt einen String zurück, der eine für die Verwendung in einer URL geeignete Abfragezeichenfolge enthält.
- [`URLSearchParams.values()`](/de/docs/Web/API/URLSearchParams/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der die Iteration über alle Werte der in diesem Objekt enthaltenen Schlüssel/Wert-Paare ermöglicht.

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

### Keine URL-Analyse

Der `URLSearchParams` Konstruktor analysiert _nicht_ komplette URLs. Er entfernt jedoch ein anfängliches führendes `?` von einem String, falls vorhanden.

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

### Prozentkodierung

`URLSearchParams` Objekte {{Glossary("Percent-encoding", "prozent-kodieren")}} alles im [`application/x-www-form-urlencoded` Prozent-Kodierungsset](https://url.spec.whatwg.org/#application-x-www-form-urlencoded-percent-encode-set) (das alle Codepunkte außer ASCII-Alphanumerik, `*`, `-`, `.` und `_` enthält) und kodieren U+0020 SPACE als `+`. Allerdings erfolgt die Prozentkodierung nur beim Serialisieren und Deserialisieren des vollständigen URL-Suchparametersyntax. Bei der Interaktion mit einzelnen Schlüsseln und Werten verwenden Sie immer die nicht kodierte Version.

```js
// Creation from parsing a string: percent-encoding is decoded
const params = new URLSearchParams("%24%25%26=%28%29%2B");
// Retrieving all keys/values: only decoded values are returned
console.log([...params]); // [["$%&", "()+"]]
// Getting an individual value: use the decoded key and get the decoded value
console.log(params.get("$%&")); // "()+"
console.log(params.get("%24%25%26")); // null
// Setting an individual value: use the unencoded key and value
params.append("$%&$#@+", "$#&*@#()+");
// Serializing: percent-encoding is applied
console.log(params.toString());
// "%24%25%26=%28%29%2B&%24%25%26%24%23%40%2B=%24%23%26*%40%23%28%29%2B"
```

Wenn Sie ein Schlüssel/Wert-Paar mit einem prozentkodierten Schlüssel anhängen, wird dieser Schlüssel als nicht kodiert behandelt und erneut kodiert.

```js
const params = new URLSearchParams();

params.append("%24%26", "value");
params.toString(); // "%2524%2526=value"
```

### Pluszeichen beibehalten

Der `URLSearchParams` Konstruktor interpretiert Pluszeichen (`+`) als Leerzeichen, was zu Problemen führen kann. Im folgenden Beispiel verwenden wir [hexadezimale Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hexadecimal_escape_sequences), um einen String zu simulieren, der Binärdaten enthält (wo jedes Byte Informationen trägt), die in den URL-Suchparametern gespeichert werden sollen. Beachten Sie, wie der von `btoa()` erzeugte kodierte String `+` enthält und nicht von `URLSearchParams` beibehalten wird.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams(`bin=${base64Data}`); // 'bin=E+AXQB+A'
const binQuery = searchParams.get("bin"); // 'E AXQB A', '+' is replaced by spaces

console.log(atob(binQuery) === rawData); // false
```

Konstruktion von `URLSearchParams` Objekten mit dynamisch interpolierten Strings ist zu vermeiden. Verwenden Sie stattdessen die `append()` Methode, die, wie oben erwähnt, alle Zeichen so interpretiert, wie sie sind.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams();
searchParams.append("bin", base64Data); // 'bin=E%2BAXQB%2BA'
const binQuery = searchParams.get("bin"); // 'E+AXQB+A'

console.log(atob(binQuery) === rawData); // true
```

### Interaktion mit URL.searchParams

Die [`URL.searchParams`](/de/docs/Web/API/URL/searchParams) Eigenschaft gibt die [`search`](/de/docs/Web/API/URL/search) Zeichenfolge der URL als `URLSearchParams` Objekt frei. Wenn Sie dieses `URLSearchParams` aktualisieren, wird die `search` der URL mit ihrer Serialisierung aktualisiert. Allerdings kodiert `URL.search` eine Teilmenge der Zeichen, die `URLSearchParams` kodiert, und kodiert Leerzeichen als `%20` statt als `+`. Dies kann zu überraschenden Interaktionen führen - wenn Sie `searchParams` aktualisieren, selbst mit den gleichen Werten, kann die URL anders serialisiert werden.

```js
const url = new URL("https://example.com/?a=b ~");
console.log(url.href); // "https://example.com/?a=b%20~"
console.log(url.searchParams.toString()); // "a=b+%7E"
// This should be a no-op, but it changes the URL's query to the
// serialization of its searchParams
url.searchParams.sort();
console.log(url.href); // "https://example.com/?a=b+%7E"

const url2 = new URL("https://example.com?search=1234&param=my%20param");
console.log(url2.search); // "?search=1234&param=my%20param"
url2.searchParams.delete("search");
console.log(url2.search); // "?param=my+param"
```

### Leerer Wert vs. kein Wert

`URLSearchParams` unterscheidet nicht zwischen einem Parameter mit nichts nach dem `=`, und einem Parameter, der überhaupt kein `=` hat.

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
- Das [`URL`](/de/docs/Web/API/URL) Interface.
- [Google Developers: Einfaches URL-Manipulieren mit URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
