---
title: "HTMLAreaElement: origin-Eigenschaft"
short-title: origin
slug: Web/API/HTMLAreaElement/origin
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`HTMLAreaElement.origin`** ist ein String, der die Unicode-Serialisierung des Ursprungs der dargestellten URL enthält.

Das bedeutet:

- für URLs, die `http` oder `https` verwenden, das Schema gefolgt von `'://'`, gefolgt von der Domain, gefolgt von `':'`, gefolgt von dem Port (der Standardport, `80` und `443` jeweils, falls explizit angegeben);
- für URLs, die das `file:`-Schema verwenden, ist der Wert browserabhängig;
- für URLs, die das `blob:`-Schema verwenden, der Ursprung der URL nach `blob:`. Beispielsweise wird `"blob:https://mozilla.org"` den Wert `"https://mozilla.org"` haben.

## Wert

Ein String.

## Beispiele

```js
// An <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.origin; // returns 'https://developer.mozilla.org'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) Interface, zu dem es gehört.
