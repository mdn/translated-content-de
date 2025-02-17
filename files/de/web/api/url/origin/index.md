---
title: "URL: origin-Eigenschaft"
short-title: origin
slug: Web/API/URL/origin
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`origin`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces gibt einen String zurück, der die Unicode-Serialisierung des Ursprungs der repräsentierten URL enthält.

Die genaue Struktur variiert je nach Typ der URL:

- Für URLs mit den Schemas `ftp:`, `http:`, `https:`, `ws:` und `wss:` wird das [`protocol`](/de/docs/Web/API/URL/protocol), gefolgt von `//` und anschließend dem [`host`](/de/docs/Web/API/URL/host), zurückgegeben. Wie bei `host` wird der [`port`](/de/docs/Web/API/URL/port) nur einbezogen, wenn er nicht der Standardwert für das Protokoll ist.
- Für URLs mit dem Schema `file:` ist der Wert vom Browser abhängig.
- Für URLs mit dem Schema `blob:` ist der Ursprung die URL, die dem `blob:` folgt, jedoch nur, wenn diese URL das Schema `http:`, `https:` oder `file:` verwendet. Zum Beispiel hat `blob:https://mozilla.org` den Ursprung `https://mozilla.org`.

In allen anderen Fällen wird der String `"null"` zurückgegeben.

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
- {{Glossary("origin", "origin")}} Glossareintrag
