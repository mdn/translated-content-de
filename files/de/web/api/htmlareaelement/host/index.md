---
title: "HTMLAreaElement: host-Eigenschaft"
short-title: host
slug: Web/API/HTMLAreaElement/host
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`host`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle ist ein String, der den Host enthält. Dieser besteht aus dem [`hostname`](/de/docs/Web/API/HTMLAreaElement/hostname) und, falls der {{Glossary("port", "port")}} der URL nicht leer ist, einem `":"`, gefolgt vom [`port`](/de/docs/Web/API/HTMLAreaElement/port) der URL. Wenn die URL keinen `hostname` hat, enthält diese Eigenschaft einen leeren String, `""`.

Weitere Informationen finden Sie unter [`URL.host`](/de/docs/Web/API/URL/host).

## Wert

Ein String.

## Beispiele

```js
const area = document.createElement("area");

area.href = "https://developer.mozilla.org/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org";

area.href = "https://developer.mozilla.org:443/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org";
// The port number is not included because 443 is the scheme's default port

area.href = "https://developer.mozilla.org:4097/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org:4097";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle, zu der es gehört.
