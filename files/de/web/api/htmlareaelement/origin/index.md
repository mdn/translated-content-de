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

- Für URLs, die `http` oder `https` verwenden, das Schema gefolgt von `'://'`, gefolgt von der Domain, gefolgt von `':'`, gefolgt von dem Port (der Standardport, `80` und `443` jeweils, wenn explizit angegeben);
- Für URLs, die das `file:`-Schema verwenden, ist der Wert abhängig vom Browser;
- Für URLs, die das `blob:`-Schema verwenden, ist der Ursprung der URL, die auf `blob:` folgt. Z.B. wird `"blob:https://mozilla.org"` `"https://mozilla.org"` als Ursprung haben. 

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

- Das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interface, zu dem es gehört.
