---
title: "HTMLAreaElement: port-Eigenschaft"
short-title: port
slug: Web/API/HTMLAreaElement/port
l10n:
  sourceCommit: 354f23773b65bad14192eca53e4a63471061b158
---

{{ApiRef("HTML DOM")}}

Die **`port`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle ist ein String, der die Portnummer der URL enthält, oder ein leerer String, wenn der Port der Standardwert für das Protokoll ist.

> [!NOTE]
> Wenn sich das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Objekt auf eine URL bezieht, die keine explizite Portnummer enthält (z.B. `https://localhost`) oder eine Portnummer enthält, die der Standardportnummer entspricht, die zum Protokollteil der URL gehört (z.B. `https://localhost:443`), dann ist die `port`-Eigenschaft ein leerer String: `''`.

## Wert

Ein String.

## Beispiele

### Den Port von einem Bereichslink abrufen

```js
// An <area id="myArea" href="https://developer.mozilla.org:443/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementByID("myArea");
area.port; // Returns ''
```

```js
// Another <area id="myArea" href="https://developer.mozilla.org:8888/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementByID("myArea");
area.port; // Returns:'8888'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle, zu der es gehört.
