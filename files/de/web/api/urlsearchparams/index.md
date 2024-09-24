---
title: URLSearchParams
slug: Web/API/URLSearchParams
l10n:
  sourceCommit: 6cca2796f0dcfe90e2b6a069b5e10e0d139278a3
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`URLSearchParams`**-Schnittstelle definiert Hilfsmethoden zur Arbeit mit der Abfragezeichenfolge einer URL.

`URLSearchParams`-Objekte sind [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), sodass sie direkt in einer {{jsxref("Statements/for...of", "for...of")}}-Struktur verwendet werden können, um über Schlüssel/Wert-Paare in derselben Reihenfolge zu iterieren, wie sie in der Abfragezeichenfolge erscheinen. Zum Beispiel sind die folgenden zwei Zeilen gleichwertig:

```js
for (const [key, value] of mySearchParams) {
}
for (const [key, value] of mySearchParams.entries()) {
}
```

Obwohl `URLSearchParams` funktional ähnlich wie eine {{jsxref("Map")}} ist, kann es beim Iterieren auf einige [Fallstricke](/de/docs/Web/JavaScript/Reference/Iteration_protocols#concurrent_modifications_when_iterating) stoßen, die bei `Map` aufgrund der Implementierung nicht auftreten.

## Konstruktor

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - : Gibt eine `URLSearchParams`-Objektinstanz zurück.

## Instanzeigenschaften

- {{domxref("URLSearchParams.size", 'size')}} {{ReadOnlyInline}}
  - : Gibt die Gesamtzahl der Einträge der Suchparameter an.

## Instanzmethoden

- `URLSearchParams[Symbol.iterator]()`
  - : Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück, der die Iteration über alle Schlüssel/Wert-Paare in diesem Objekt in der Reihenfolge ermöglicht, wie sie in der Abfragezeichenfolge erscheinen.
- {{domxref("URLSearchParams.append()")}}
  - : Fügt ein bestimmtes Schlüssel/Wert-Paar als neuen Suchparameter hinzu.
- {{domxref("URLSearchParams.delete()")}}
  - : Löscht Suchparameter, die mit einem Namen und optionalem Wert übereinstimmen, aus der Liste aller Suchparameter.
- {{domxref("URLSearchParams.entries()")}}
  - : Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück, der die Iteration über alle Schlüssel/Wert-Paare in diesem Objekt in der Reihenfolge ermöglicht, wie sie in der Abfragezeichenfolge erscheinen.
- {{domxref("URLSearchParams.forEach()")}}
  - : Ermöglicht die Iteration über alle in diesem Objekt enthaltenen Werte über eine Callback-Funktion.
- {{domxref("URLSearchParams.get()")}}
  - : Gibt den ersten Wert zurück, der mit dem angegebenen Suchparameter verknüpft ist.
- {{domxref("URLSearchParams.getAll()")}}
  - : Gibt alle Werte zurück, die mit einem angegebenen Suchparameter verknüpft sind.
- {{domxref("URLSearchParams.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein bestimmter Parameter oder ein Parameter-Wert-Paar existiert.
- {{domxref("URLSearchParams.keys()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der die Iteration über alle Schlüssel der in diesem Objekt enthaltenen Schlüssel/Wert-Paare ermöglicht.
- {{domxref("URLSearchParams.set()")}}
  - : Legt den Wert fest, der mit einem bestimmten Suchparameter verknüpft ist. Wenn es mehrere Werte gibt, werden die anderen gelöscht.
- {{domxref("URLSearchParams.sort()")}}
  - : Sortiert alle Schlüssel/Wert-Paare, falls vorhanden, nach deren Schlüsseln.
- {{domxref("URLSearchParams.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die eine Abfragezeichenfolge enthält, die für die Verwendung in einer URL geeignet ist.
- {{domxref("URLSearchParams.values()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der die Iteration über alle Werte der in diesem Objekt enthaltenen Schlüssel/Wert-Paare ermöglicht.

## Beispiele

```js
const paramsString = "q=URLUtils.searchParams&topic=api";
const searchParams = new URLSearchParams(paramsString);

// Iteration der Suchparameter
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
// Suchparameter können auch ein Objekt sein
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
console.log(searchParams.get("foo")); // bar, gibt nur den ersten Wert zurück
console.log(searchParams.getAll("foo")); // ["bar", "baz"]
```

### Keine URL-Analyse

Der `URLSearchParams`-Konstruktor analysiert _nicht_ vollständige URLs. Er wird jedoch ein anfängliches führendes `?` aus einer Zeichenfolge entfernen, falls vorhanden.

```js
const paramsString1 = "http://example.com/search?query=%40";
const searchParams1 = new URLSearchParams(paramsString1);

console.log(searchParams1.has("query")); // false
console.log(searchParams1.has("http://example.com/search?query")); // true

console.log(searchParams1.get("query")); // null
console.log(searchParams1.get("http://example.com/search?query")); // "@" (entspricht decodeURIComponent('%40'))

const paramsString2 = "?query=value";
const searchParams2 = new URLSearchParams(paramsString2);
console.log(searchParams2.has("query")); // true

const url = new URL("http://example.com/search?query=%40");
const searchParams3 = new URLSearchParams(url.search);
console.log(searchParams3.has("query")); // true
```

### Pluszeichen beibehalten

Der `URLSearchParams`-Konstruktor interpretiert Pluszeichen (`+`) als Leerzeichen, was Probleme verursachen kann. Im folgenden Beispiel verwenden wir [hexadezimale Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hexadecimal_escape_sequences), um eine Zeichenfolge zu imitieren, die Binärdaten enthält (wobei jedes Byte Informationen trägt), die in die URL-Suchparameter gespeichert werden müssen. Beachten Sie, wie die durch `btoa()` erzeugte codierte Zeichenfolge `+` enthält und nicht von `URLSearchParams` beibehalten wird.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams(`bin=${base64Data}`); // 'bin=E+AXQB+A'
const binQuery = searchParams.get("bin"); // 'E AXQB A', '+' wird durch Leerzeichen ersetzt

console.log(atob(binQuery) === rawData); // false
```

Sie können dies vermeiden, indem Sie die Daten mit {{jsxref("encodeURIComponent", "encodeURIComponent()")}} codieren.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'
const encodedBase64Data = encodeURIComponent(base64Data); // 'E%2BAXQB%2BA'

const searchParams = new URLSearchParams(`bin=${encodedBase64Data}`); // 'bin=E%2BAXQB%2BA'
const binQuery = searchParams.get("bin"); // 'E+AXQB+A'

console.log(atob(binQuery) === rawData); // true
```

### Leerer Wert vs. kein Wert

`URLSearchParams` unterscheidet nicht zwischen einem Parameter ohne etwas nach dem `=`, und einem Parameter, der überhaupt kein `=` hat.

```js
const emptyVal = new URLSearchParams("foo=&bar=baz");
console.log(emptyVal.get("foo")); // gibt ''
const noEquals = new URLSearchParams("foo&bar=baz");
console.log(noEquals.get("foo")); // gibt auch ''
console.log(noEquals.toString()); // 'foo=&bar=baz'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- Die {{domxref("URL")}}-Schnittstelle.
- [Google Developers: Einfache URL-Manipulation mit URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
