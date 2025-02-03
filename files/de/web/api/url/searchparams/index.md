---
title: "URL: searchParams-Eigenschaft"
short-title: searchParams
slug: Web/API/URL/searchParams
l10n:
  sourceCommit: bfe3107430ad0646713b57262e02625a2e155fd4
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`searchParams`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle gibt ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt zurück, das den Zugriff auf die dekodierten {{httpmethod("GET")}}-Abfrageargumente ermöglicht, die in der URL enthalten sind.

## Wert

Ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt.

## Beispiele

### Grundlegende Verwendung

```js
const params = new URL("https://example.com/?name=Jonathan%20Smith&age=18")
  .searchParams;
const name = params.get("name");
const age = parseInt(params.get("age"));

console.log(`name: ${name}`); // name: Jonathan Smith
console.log(`age: ${age}`); // age: 18
```

### Interaktion mit Suche

Die `searchParams`-Eigenschaft stellt den [`URL.search`](/de/docs/Web/API/URL/search)-String als ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt dar. Wenn dieses `URLSearchParams` aktualisiert wird, wird die `search` der URL mit ihrer Serialisierung aktualisiert. Allerdings kodiert `URL.search` eine Teilmenge von Zeichen, die `URLSearchParams` nicht kodiert, und kodiert Leerzeichen als `%20` anstelle von `+`. Dies kann zu einigen überraschenden Interaktionen führen—wenn Sie `searchParams` aktualisieren, selbst mit denselben Werten, kann die URL unterschiedlich serialisiert werden.

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
