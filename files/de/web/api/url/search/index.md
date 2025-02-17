---
title: "URL: search Eigenschaft"
short-title: search
slug: Web/API/URL/search
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`search`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces ist eine Suchzeichenfolge, auch _Abfragezeichenfolge_ (query string) genannt. Sie besteht aus einer Zeichenkette, die ein `"?"` gefolgt von den Parametern der URL enthält. Falls die URL keine Suchabfrage enthält, gibt diese Eigenschaft einen leeren String, `""`, zurück.

Diese Eigenschaft kann gesetzt werden, um die Abfragezeichenfolge der URL zu ändern. Beim Setzen wird ein einzelnes `"?"`-Präfix zur bereitgestellten Zeichenkette hinzugefügt, falls es nicht bereits vorhanden ist. Wenn sie auf `""` gesetzt wird, wird die Abfragezeichenfolge entfernt.

Die Abfrage wird {{Glossary("Percent-encoding", "prozentcodiert")}}, wenn sie gesetzt wird, aber nicht prozentdecodiert, wenn sie gelesen wird.

Moderne Browser bieten die [`URL.searchParams`](/de/docs/Web/API/URL/searchParams)-Eigenschaft, um das Parsen der Parameter aus der Abfragezeichenfolge zu erleichtern.

## Wert

Ein String.

## Beispiele

### Grundlegende Nutzung

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/search?q=123",
);
console.log(url.search); // Logs "?q=123"
```

### Interaktion mit searchParams

Die [`URL.searchParams`](/de/docs/Web/API/URL/searchParams)-Eigenschaft stellt die `search`-Zeichenfolge als ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt dar. Wenn dieses `URLSearchParams` aktualisiert wird, wird die `search`-Eigenschaft der URL entsprechend ihrer Serialisierung aktualisiert. Allerdings kodiert `URL.search` eine Teilmenge von Zeichen, die `URLSearchParams` kodiert, und kodiert Leerzeichen als `%20` statt als `+`. Dies kann zu unerwarteten Interaktionen führen—wenn Sie `searchParams` aktualisieren, selbst mit den gleichen Werten, könnte die URL unterschiedlich serialisiert werden.

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

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.
