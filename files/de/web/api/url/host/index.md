---
title: "URL: host-Eigenschaft"
short-title: host
slug: Web/API/URL/host
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`host`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle ist ein String, der den Host enthält. Dieser besteht aus dem [`hostname`](/de/docs/Web/API/URL/hostname) und, falls der {{Glossary("port", "port")}} der URL nicht leer ist, aus einem `":"`, gefolgt vom [`port`](/de/docs/Web/API/URL/port) der URL. Hat die URL keinen `hostname`, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um sowohl den Hostnamen als auch den Port der URL zu ändern. Wenn das Schema der URL nicht [hierarchisch](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) ist (was im URL-Standard als "[special schemes](https://url.spec.whatwg.org/#special-scheme)" bezeichnet wird), hat es kein Konzept eines Hostes, und das Setzen dieser Eigenschaft hat keine Wirkung.

> [!NOTE]
> Wenn der angegebene Wert für den `host`-Setter keinen `port` enthält, wird der `port` der URL nicht geändert. Das kann unerwartet sein, da der `host`-Getter einen String im URL-Port-Format zurückgibt und man somit annehmen könnte, dass der Setter immer sowohl den Host als auch den Port "zurücksetzt".

## Wert

Ein String.

## Beispiele

```js
let url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"

url = new URL("https://developer.mozilla.org:443/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"
// The port number is not included because 443 is the scheme's default port

url = new URL("https://developer.mozilla.org:4097/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org:4097"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der diese Eigenschaft gehört.
