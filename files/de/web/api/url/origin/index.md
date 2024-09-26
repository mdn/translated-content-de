---
title: "URL: origin-Eigenschaft"
short-title: origin
slug: Web/API/URL/origin
l10n:
  sourceCommit: 61362f08e0707711a5c09166affda86c31e4e2b2
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`origin`** schreibgeschützte Eigenschaft der {{domxref("URL")}}-Schnittstelle gibt einen String zurück, der die Unicode-Serialisierung des Ursprungs der vertretenen URL enthält.

Die genaue Struktur variiert je nach Art der URL:

- Für URLs, die das `http:`- oder `https:`-Schema verwenden, besteht die Struktur aus dem Schema, gefolgt von `//`, gefolgt von der Domain, gefolgt von `:`, gefolgt vom Port (der Standardport, `80` bzw. `443`, wenn explizit angegeben).
- Für URLs, die das `file:`-Schema verwenden, ist der Wert browserabhängig.
- Für URLs, die das `blob:`-Schema verwenden, ist der Ursprung der URL nach `blob:`. Zum Beispiel hat `blob:https://mozilla.org` den Ursprung `https://mozilla.org`.

## Wert

Ein String.

## Beispiele

```js
const url = new URL("blob:https://mozilla.org:443/");
console.log(url.origin); // 'https://mozilla.org'

const url = new URL("http://localhost:80/");
console.log(url.origin); // 'http://localhost'

const url = new URL("https://mozilla.org:8080/");
console.log(url.origin); // 'https://mozilla.org:8080'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("URL")}}-Schnittstelle
- {{Glossary("origin")}} Glossarbegriff