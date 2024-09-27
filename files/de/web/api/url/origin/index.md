---
title: "URL: origin-Eigenschaft"
short-title: origin
slug: Web/API/URL/origin
l10n:
  sourceCommit: 61362f08e0707711a5c09166affda86c31e4e2b2
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`origin`** des [`URL`](/de/docs/Web/API/URL)-Interfaces gibt einen String zurück, der die Unicode-Darstellung des Ursprungs der dargestellten URL enthält.

Die genaue Struktur variiert je nach URL-Typ:

- Für URLs mit den Schemen `http:` oder `https:` besteht der Ursprung aus dem Schema gefolgt von `//`, gefolgt von der Domain, gefolgt von `:`, gefolgt von dem Port (dem Standardport, `80` bzw. `443`, falls explizit angegeben).
- Für URLs mit dem `file:`-Schema ist der Wert vom Browser abhängig.
- Für URLs mit dem `blob:`-Schema ist es der Ursprung der URL, die auf `blob:` folgt. Zum Beispiel hat `blob:https://mozilla.org` den Ursprung `https://mozilla.org`.

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

- Das [`URL`](/de/docs/Web/API/URL)-Interface
- Glossarbegriff [origin](/de/docs/Glossary/origin)
