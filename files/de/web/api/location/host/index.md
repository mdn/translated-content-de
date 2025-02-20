---
title: "Location: host-Eigenschaft"
short-title: host
slug: Web/API/Location/host
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("Location")}}

Die **`host`**-Eigenschaft der [`Location`](/de/docs/Web/API/Location)-Schnittstelle ist ein String, der den Host enthält, also den [`hostname`](/de/docs/Web/API/Location/hostname), und dann, falls der {{Glossary("port", "port")}} der URL nicht leer ist, ein `":"`, gefolgt vom [`port`](/de/docs/Web/API/Location/port) der URL. Hat die URL keinen `hostname`, enthält diese Eigenschaft einen leeren String, `""`.

Weitere Informationen finden Sie unter [`URL.host`](/de/docs/Web/API/URL/host).

## Wert

Ein String.

## Beispiele

```js
const anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/en-US/Location.host";
console.log(anchor.host === "developer.mozilla.org");

anchor.href = "https://developer.mozilla.org:443/en-US/Location.host";
console.log(anchor.host === "developer.mozilla.org");
// The port number is not included because 443 is the scheme's default port

anchor.href = "https://developer.mozilla.org:4097/en-US/Location.host";
console.log(anchor.host === "developer.mozilla.org:4097");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
