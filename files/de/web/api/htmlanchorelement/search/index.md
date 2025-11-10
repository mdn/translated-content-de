---
title: "HTMLAnchorElement: search-Eigenschaft"
short-title: search
slug: Web/API/HTMLAnchorElement/search
l10n:
  sourceCommit: 1eabc08d295e60d7d8eab6bce858d2fb0833be2b
---

{{ApiRef("HTML DOM")}}

Die **`search`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist eine Suchzeichenfolge, auch _query string_ genannt. Sie ist eine Zeichenkette, die ein `"?"` gefolgt von den Parametern des `href` der `<a>`-Element enthält. Wenn die URL keine Suchanfrage hat, enthält diese Eigenschaft eine leere Zeichenkette, `""`.

Diese Eigenschaft kann gesetzt werden, um die Abfragezeichenfolge der URL zu ändern. Beim Setzen wird ein einzelnes `"?"` als Präfix zu dem bereitgestellten Wert hinzugefügt, wenn es nicht bereits vorhanden ist. Wenn sie auf `""` gesetzt wird, wird die Abfragezeichenfolge entfernt.

Die Abfrage wird beim Setzen {{Glossary("Percent-encoding", "prozentcodiert")}}, aber nicht prozentdekoriert beim Lesen.

Moderne Browser bieten
[`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples)
und
[`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples)
an, um einfach die Parameter aus der Abfragezeichenfolge zu extrahieren.

Weitere Informationen finden Sie unter [`URL.search`](/de/docs/Web/API/URL/search).

## Wert

Eine Zeichenkette.

## Beispiele

### Die Suchzeichenfolge aus einem Anker-Link abrufen

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement?q=123"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.search; // returns '?q=123'
```

### Erweiterte Analyse mit URLSearchParams

Alternativ kann [`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples) verwendet werden:

```js
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q"), 10); // returns the number 123
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem es gehört.
