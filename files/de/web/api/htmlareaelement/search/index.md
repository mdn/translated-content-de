---
title: "HTMLAreaElement: search-Eigenschaft"
short-title: search
slug: Web/API/HTMLAreaElement/search
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`search`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle ist eine Suchzeichenkette, auch _query string_ genannt. Es handelt sich dabei um eine Zeichenkette, die ein `"?"` gefolgt von den Parametern des `href`-Attributs des `<area>`-Elements enthält. Wenn die URL keine Suchabfrage besitzt, enthält diese Eigenschaft eine leere Zeichenkette, `""`.

Diese Eigenschaft kann gesetzt werden, um die Suchzeichenkette der URL zu ändern. Beim Setzen wird der Wert mit einem vorangestellten `"?"` versehen, falls dieser nicht bereits vorhanden ist. Wird der Wert auf `""` gesetzt, wird die Suchzeichenkette entfernt.

Die Suchzeichenkette wird beim Setzen {{Glossary("Percent-encoding", "percent-codiert")}}, jedoch beim Lesen nicht percent-decodiert.

Moderne Browser bieten
[`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples)
und
[`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples),
um das Parsen der Parameter aus der Suchzeichenkette zu erleichtern.

Weitere Informationen finden Sie unter [`URL.search`](/de/docs/Web/API/URL/search).

## Wert

Ein Zeichenkette.

## Beispiele

### Abfragen der Suchzeichenkette von einem `area`-Link

```js
// An <area id="myArea" href="/en-US/docs/HTMLAreaElement?q=123"> element is in the document
const area = document.getElementById("myArea");
area.search; // returns '?q=123'
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

- Die [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle, zu der sie gehört.
