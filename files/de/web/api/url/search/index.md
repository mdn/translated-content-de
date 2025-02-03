---
title: "URL: search-Eigenschaft"
short-title: search
slug: Web/API/URL/search
l10n:
  sourceCommit: bfe3107430ad0646713b57262e02625a2e155fd4
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`search`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle
ist eine Suchzeichenkette, auch _Query-String_ genannt, die aus einem `'?'` gefolgt von den Parametern der
URL besteht.

Moderne Browser bieten die [`URL.searchParams`](/de/docs/Web/API/URL/searchParams)-Eigenschaft, um es einfach zu machen, die Parameter aus dem Query-String zu extrahieren.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/search?q=123",
);
console.log(url.search); // Logs "?q=123"
```

### Interaktion mit searchParams

Die [`URL.searchParams`](/de/docs/Web/API/URL/searchParams)-Eigenschaft stellt die `search`-Zeichenkette als ein `URLSearchParams`-Objekt zur Verfügung. Wenn dieses `URLSearchParams` aktualisiert wird, wird die `search` der URL mit ihrer Serialisierung aktualisiert. Allerdings kodiert `URL.search` eine Teilmenge von Zeichen, die `URLSearchParams` tut, und kodiert Leerzeichen als `%20` anstelle von `+`. Dies kann zu einigen überraschenden Interaktionen führen – wenn Sie `searchParams` aktualisieren, selbst mit denselben Werten, kann die URL unterschiedlich serialisiert werden.

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

## Siehe auch

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der sie gehört.
