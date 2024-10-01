---
title: "HTMLAnchorElement: hash-Eigenschaft"
short-title: hash
slug: Web/API/HTMLAnchorElement/hash
l10n:
  sourceCommit: 3e301467a02808e9fc488d7012f1f49eb66a5980
---

{{ APIRef("HTML DOM") }}

Die **`HTMLAnchorElement.hash`**-Eigenschaft gibt einen String zurück, der ein `'#'` enthält, gefolgt vom Fragmentbezeichner der URL.

Das Fragment ist {{Glossary("Percent-encoding", "prozentkodiert")}}. Wenn die URL keinen Fragmentbezeichner hat, enthält diese Eigenschaft einen leeren String, `""`.

## Wert

Ein String.

## Beispiele

### Den Hash aus einem Ankerlink erhalten

Gegeben dieses HTML

```html
<a id="myAnchor" href="/en-US/docs/Web/API/HTMLAnchorElement/hash#examples">
  Examples
</a>
```

können Sie den Hash des Ankers so erhalten:

```js
const anchor = document.getElementById("myAnchor");
anchor.hash; // '#examples'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem es gehört.
