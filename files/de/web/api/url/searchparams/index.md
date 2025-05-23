---
title: "URL: searchParams-Eigenschaft"
short-title: searchParams
slug: Web/API/URL/searchParams
l10n:
  sourceCommit: 1eabc08d295e60d7d8eab6bce858d2fb0833be2b
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`searchParams`**-Eigenschaft der
[`URL`](/de/docs/Web/API/URL)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt zurückgibt. Dies ermöglicht den Zugriff auf die im URL enthaltenen, decodierten {{httpmethod("GET")}}-Abfrageargumente.

## Wert

Ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt.

## Beispiele

### Grundlegende Verwendung

```js
const params = new URL("https://example.com/?name=Jonathan%20Smith&age=18")
  .searchParams;
const name = params.get("name");
const age = parseInt(params.get("age"), 10);

console.log(`name: ${name}`); // name: Jonathan Smith
console.log(`age: ${age}`); // age: 18
```

### Interaktion mit `search`

Die `searchParams`-Eigenschaft stellt den [`URL.search`](/de/docs/Web/API/URL/search)-String als ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt dar. Wenn dieses `URLSearchParams` aktualisiert wird, wird die `search` des URL mit seiner Serialisierung aktualisiert. Allerdings kodiert `URL.search` eine Teilmenge der Zeichen, die `URLSearchParams` kodiert, und kodiert Leerzeichen als `%20` anstelle von `+`. Dies kann zu einigen überraschenden Interaktionen führen – wenn Sie `searchParams` aktualisieren, selbst mit denselben Werten, kann der URL unterschiedlich serialisiert werden.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
