---
title: "HTMLAnchorElement: search-Eigenschaft"
short-title: search
slug: Web/API/HTMLAnchorElement/search
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`search`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist ein Suchstring, auch _Querystring_ genannt. Es handelt sich hierbei um einen String, der ein `"?"` enthält, gefolgt von den Parametern des `href` des `<a>`-Elements. Falls die URL keine Suchanfrage enthält, wird diese Eigenschaft als leerer String, `""`, zurückgegeben.

Diese Eigenschaft kann gesetzt werden, um den Querystring der URL zu ändern. Beim Setzen wird ein einzelnes `"?"` als Präfix zum bereitgestellten Wert hinzugefügt, falls dies nicht bereits vorhanden ist. Wenn der Wert auf `""` gesetzt wird, wird der Querystring entfernt.

Die Anfrage wird beim Setzen {{Glossary("Percent-encoding", "percent-codiert")}}, aber beim Lesen nicht percent-decodiert.

Moderne Browser bieten
[`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples)
und 
[`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples) 
an, um die Parameter aus dem Querystring einfach auszulesen.

Weitere Informationen finden Sie unter [`URL.search`](/de/docs/Web/API/URL/search).

## Wert

Ein String.

## Beispiele

### Den Suchstring aus einem Anker-Link auslesen

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement?q=123"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.search; // returns '?q=123'
```

### Erweiterte Analyse mit URLSearchParams

Alternativ kann [`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples) verwendet werden:

```js
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q")); // returns the number 123
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem es gehört.
