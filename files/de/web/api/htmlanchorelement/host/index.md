---
title: "HTMLAnchorElement: host-Eigenschaft"
short-title: host
slug: Web/API/HTMLAnchorElement/host
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`host`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist ein String, der den Host enthält, bestehend aus dem [`hostname`](/de/docs/Web/API/HTMLAnchorElement/hostname) und, falls der {{Glossary("port", "port")}} der URL nicht leer ist, einem `":"`, gefolgt vom [`port`](/de/docs/Web/API/HTMLAnchorElement/port) der URL. Falls die URL keinen `hostname` hat, enthält diese Eigenschaft einen leeren String, `""`.

Siehe [`URL.host`](/de/docs/Web/API/URL/host) für weitere Informationen.

## Wert

Ein String.

## Beispiele

```js
const anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/en-US/HTMLAnchorElement";
anchor.host === "developer.mozilla.org";

anchor.href = "https://developer.mozilla.org:443/en-US/HTMLAnchorElement";
anchor.host === "developer.mozilla.org";
// The port number is not included because 443 is the scheme's default port

anchor.href = "https://developer.mozilla.org:4097/en-US/HTMLAnchorElement";
anchor.host === "developer.mozilla.org:4097";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem es gehört.
