---
title: "URL: origin-Eigenschaft"
short-title: origin
slug: Web/API/URL/origin
l10n:
  sourceCommit: ad6c8d26d4d447c83e1003696b82bfcc10606c71
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`origin`** schreibgeschützte Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle gibt einen String zurück, der die Unicode-Serialisierung des Ursprungs der dargestellten URL enthält.

Die genaue Struktur variiert je nach URL-Typ:

- Für URLs mit den Schemas `ftp:`, `http:`, `https:`, `ws:` und `wss:` besteht sie aus dem [`protocol`](/de/docs/Web/API/URL/protocol) gefolgt von `//` und dem [`host`](/de/docs/Web/API/URL/host). Wie beim `host` wird der [`port`](/de/docs/Web/API/URL/port) nur dann einbezogen, wenn er nicht der Standardport für das Protokoll ist.
- Für URLs mit dem `file:`-Schema ist der Wert vom Browser abhängig.
- Für URLs mit dem `blob:`-Schema der Ursprung der URL nach `blob:`, aber nur, wenn diese URL das `http:`, `https:` oder `file:`-Schema verwendet. Zum Beispiel hat `blob:https://mozilla.org` den Ursprung `https://mozilla.org`.

In allen anderen Fällen wird der String `"null"` zurückgegeben.

## Wert

Ein String.

## Beispiele

Die folgenden Beispiele zeigen, wie die `origin`-Eigenschaft für eine `blob:`-URL, eine `http:`-URL und eine mit einem nicht-standardmäßigen Port berechnet wird:

```js
const url = new URL("blob:https://mozilla.org:443/");
console.log(url.origin); // 'https://mozilla.org'
```

```js
const url = new URL("http://localhost:80/");
console.log(url.origin); // 'http://localhost'
```

```js
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
