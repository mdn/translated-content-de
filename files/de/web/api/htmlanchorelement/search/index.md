---
title: "HTMLAnchorElement: search-Eigenschaft"
short-title: search
slug: Web/API/HTMLAnchorElement/search
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{ApiRef("HTML DOM")}}

Die **`search`**-Eigenschaft der Schnittstelle [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) ist eine Suchzeichenfolge, auch _Query String_ genannt. Sie enthält ein `"?"`, gefolgt von den Parametern des `href`-Attributs des `<a>`-Elements. Wenn die URL keine Suchabfrage enthält, enthält diese Eigenschaft eine leere Zeichenfolge, `""`.

Diese Eigenschaft kann festgelegt werden, um den Query String der URL zu ändern. Beim Festlegen wird dem angegebenen Wert ein einzelnes Präfix `"?"` hinzugefügt, sofern es nicht bereits vorhanden ist. Das Festlegen auf `""` entfernt den Query String.

Die Abfrage wird beim Festlegen {{Glossary("Percent-encoding", "prozentkodiert")}}, beim Lesen jedoch nicht prozentdekodiert.

Die Eigenschaft [`URL.searchParams`](/de/docs/Web/API/URL/searchParams) ist ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt, das das Parsen der Parameter aus dem Query String ermöglicht. Siehe auch [`URL.search`](/de/docs/Web/API/URL/search).

## Wert

Eine Zeichenfolge.

## Beispiele

### Abrufen der Suchzeichenfolge aus einem Anchor-Link

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement?q=123"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.search; // returns '?q=123'
```

### Erweitertes Parsen mit URLSearchParams

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

- Die Schnittstelle [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement), zu der sie gehört.
