---
title: "URL: origin-Eigenschaft"
short-title: origin
slug: Web/API/URL/origin
l10n:
  sourceCommit: 61362f08e0707711a5c09166affda86c31e4e2b2
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`origin`** schreibgeschützte Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle gibt einen String zurück, der die Unicode-Serialisierung des Ursprungs der repräsentierten URL enthält.

Die genaue Struktur variiert je nach Art der URL:

- Für URLs mit den Schemen `http:` oder `https:`: das Schema gefolgt von `//`, gefolgt von der Domain, gefolgt von `:`, gefolgt vom Port (der Standardport, `80` bzw. `443`, falls explizit angegeben).
- Für URLs mit dem `file:`-Schema ist der Wert vom Browser abhängig.
- Für URLs mit dem `blob:`-Schema ist der Ursprung der URL nach `blob:`. Zum Beispiel, `blob:https://mozilla.org` wird `https://mozilla.org` haben.

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

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle
- {{Glossary("origin", "origin")}} Glossarbegriff
