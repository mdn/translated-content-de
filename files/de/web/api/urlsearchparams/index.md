---
title: URLSearchParams
slug: Web/API/URLSearchParams
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die Schnittstelle **`URLSearchParams`** definiert Hilfsmethoden für die Arbeit mit dem Query-String einer URL.

`URLSearchParams`-Objekte sind [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). Sie können daher direkt in einer {{jsxref("Statements/for...of", "for...of")}}-Schleife verwendet werden, um Schlüssel-Wert-Paare in derselben Reihenfolge zu durchlaufen, in der sie im Query-String vorkommen. Die folgenden beiden Zeilen sind beispielsweise gleichwertig:

```js
for (const [key, value] of mySearchParams) {
}
for (const [key, value] of mySearchParams.entries()) {
}
```

Obwohl `URLSearchParams` funktional einer {{jsxref("Map")}} ähnelt, können beim Iterieren aufgrund seiner Implementierung einige [Fallstricke](/de/docs/Web/JavaScript/Reference/Iteration_protocols#concurrent_modifications_when_iterating) auftreten, die bei `Map` nicht vorkommen.

## Konstruktor

- [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams)
  - : Gibt eine Instanz eines `URLSearchParams`-Objekts zurück.

## Instanzeigenschaften

- [`size`](/de/docs/Web/API/URLSearchParams/size) {{ReadOnlyInline}}
  - : Gibt die Gesamtzahl der Suchparametereinträge an.

## Instanzmethoden

- `URLSearchParams[Symbol.iterator]()`
  - : Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück, mit dem sich alle in diesem Objekt enthaltenen Schlüssel-Wert-Paare in derselben Reihenfolge durchlaufen lassen, in der sie im Query-String vorkommen.
- [`URLSearchParams.append()`](/de/docs/Web/API/URLSearchParams/append)
  - : Fügt ein angegebenes Schlüssel-Wert-Paar als neuen Suchparameter hinzu.
- [`URLSearchParams.delete()`](/de/docs/Web/API/URLSearchParams/delete)
  - : Entfernt Suchparameter mit einem bestimmten Namen und optional einem bestimmten Wert aus der Liste aller Suchparameter.
- [`URLSearchParams.entries()`](/de/docs/Web/API/URLSearchParams/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück, mit dem sich alle in diesem Objekt enthaltenen Schlüssel-Wert-Paare in derselben Reihenfolge durchlaufen lassen, in der sie im Query-String vorkommen.
- [`URLSearchParams.forEach()`](/de/docs/Web/API/URLSearchParams/forEach)
  - : Ermöglicht es, mithilfe einer Callback-Funktion alle in diesem Objekt enthaltenen Werte zu durchlaufen.
- [`URLSearchParams.get()`](/de/docs/Web/API/URLSearchParams/get)
  - : Gibt den ersten Wert zurück, der dem angegebenen Suchparameter zugeordnet ist.
- [`URLSearchParams.getAll()`](/de/docs/Web/API/URLSearchParams/getAll)
  - : Gibt alle Werte zurück, die einem angegebenen Suchparameter zugeordnet sind.
- [`URLSearchParams.has()`](/de/docs/Web/API/URLSearchParams/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein bestimmter Parameter oder ein bestimmtes Parameter-Wert-Paar vorhanden ist.
- [`URLSearchParams.keys()`](/de/docs/Web/API/URLSearchParams/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, mit dem sich alle Schlüssel der in diesem Objekt enthaltenen Schlüssel-Wert-Paare durchlaufen lassen.
- [`URLSearchParams.set()`](/de/docs/Web/API/URLSearchParams/set)
  - : Setzt den Wert eines angegebenen Suchparameters auf den angegebenen Wert. Wenn mehrere Werte vorhanden sind, werden die anderen entfernt.
- [`URLSearchParams.sort()`](/de/docs/Web/API/URLSearchParams/sort)
  - : Sortiert alle vorhandenen Schlüssel-Wert-Paare nach ihren Schlüsseln.
- [`URLSearchParams.toString()`](/de/docs/Web/API/URLSearchParams/toString)
  - : Gibt einen String zurück, der einen für die Verwendung in einer URL geeigneten Query-String enthält.
- [`URLSearchParams.values()`](/de/docs/Web/API/URLSearchParams/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, mit dem sich alle Werte der in diesem Objekt enthaltenen Schlüssel-Wert-Paare durchlaufen lassen.

## Beispiele

### URLSearchParams verwenden

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

Suchparameter können auch als Objekt angegeben werden.

```js
const paramsObj = { foo: "bar", baz: "bar" };
const searchParams = new URLSearchParams(paramsObj);

console.log(searchParams.toString()); // "foo=bar&baz=bar"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // "bar"
```

### window.location parsen

Anders als [`URL`](/de/docs/Web/API/URL) stellt die Schnittstelle [`Location`](/de/docs/Web/API/Location) keine direkt verfügbare Eigenschaft `searchParams` bereit. Sie können `location.search` mit `URLSearchParams` parsen.

```js
// Assume page has location:
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams?foo=a
const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
console.log(searchParams.get("foo")); // a
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

### Keine URL-Verarbeitung

Der Konstruktor `URLSearchParams` parst _keine_ vollständigen URLs. Er entfernt jedoch ein führendes `?` aus einem String, falls eines vorhanden ist.

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

`URLSearchParams`-Objekte {{Glossary("Percent-encoding", "prozentkodieren")}} alle Zeichen aus dem [Prozentkodierungs-Zeichensatz von `application/x-www-form-urlencoded`](https://url.spec.whatwg.org/#application-x-www-form-urlencoded-percent-encode-set) (dieser umfasst alle Codepunkte außer alphanumerischen ASCII-Zeichen, `*`, `-`, `.` und `_`) und kodieren das Leerzeichen U+0020 SPACE als `+`. Die Prozentkodierung erfolgt jedoch nur beim Serialisieren und Deserialisieren der vollständigen Syntax von URL-Suchparametern. Bei der Arbeit mit einzelnen Schlüsseln und Werten verwenden Sie stets die unkodierte Form.

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

Wenn Sie ein Schlüssel-Wert-Paar mit einem prozentkodierten Schlüssel hinzufügen, wird dieser Schlüssel als unkodiert behandelt und erneut kodiert.

```js
const params = new URLSearchParams();

params.append("%24%26", "value");
params.toString(); // "%2524%2526=value"
```

### Pluszeichen beibehalten

Der Konstruktor `URLSearchParams` interpretiert Pluszeichen (`+`) als Leerzeichen, was zu Problemen führen kann. Im folgenden Beispiel verwenden wir [hexadezimale Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hexadecimal_escape_sequences), um einen String mit Binärdaten nachzubilden, bei denen jedes Byte Informationen trägt und die in den URL-Suchparametern gespeichert werden sollen. Beachten Sie, dass der von `btoa()` erzeugte kodierte String ein `+` enthält, das von `URLSearchParams` nicht beibehalten wird.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams(`bin=${base64Data}`); // 'bin=E+AXQB+A'
const binQuery = searchParams.get("bin"); // 'E AXQB A', '+' is replaced by spaces

console.log(atob(binQuery) === rawData); // false
```

Erstellen Sie `URLSearchParams`-Objekte niemals mit dynamisch interpolierten Strings. Verwenden Sie stattdessen die Methode `append()`, die, wie oben erwähnt, alle Zeichen unverändert interpretiert.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams();
searchParams.append("bin", base64Data); // 'bin=E%2BAXQB%2BA'
const binQuery = searchParams.get("bin"); // 'E+AXQB+A'

console.log(atob(binQuery) === rawData); // true
```

### Zusammenspiel mit URL.searchParams

Die Eigenschaft [`URL.searchParams`](/de/docs/Web/API/URL/searchParams) stellt den String [`search`](/de/docs/Web/API/URL/search) der URL als `URLSearchParams`-Objekt bereit. Wenn dieses `URLSearchParams`-Objekt aktualisiert wird, wird auch `search` der URL mit der serialisierten Form aktualisiert. `URL.search` kodiert jedoch nur eine Teilmenge der Zeichen, die `URLSearchParams` kodiert, und kodiert Leerzeichen als `%20` statt als `+`. Das kann zu unerwartetem Verhalten führen: Wenn Sie `searchParams` aktualisieren, kann die URL anders serialisiert werden, selbst wenn die Werte gleich bleiben.

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

### Leerer Wert oder kein Wert

`URLSearchParams` unterscheidet nicht zwischen einem Parameter, bei dem auf das `=` nichts folgt, und einem Parameter ohne `=`.

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

- [Polyfill für `URLSearchParams` in `core-js`](https://core-js.io/docs/features/web-standards/url)
- Die Schnittstelle [`URL`](/de/docs/Web/API/URL).
- [Google Developers: Einfache URL-Bearbeitung mit URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
