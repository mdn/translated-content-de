---
title: "URL: host-Eigenschaft"
short-title: host
slug: Web/API/URL/host
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`host`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle ist ein String, der den Host enthält, was dem [`hostname`](/de/docs/Web/API/URL/hostname) entspricht, gefolgt von einem `":"`, falls der {{Glossary("port", "Port")}} der URL nicht leer ist, und dem [`port`](/de/docs/Web/API/URL/port) der URL. Wenn die URL keinen `hostname` hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um sowohl den Hostnamen als auch den Port der URL zu ändern. Wenn das Schema der URL nicht [hierarchisch](https://www.rfc-editor.org/info/rfc3986/#section-1.2.3) ist (was der URL-Standard als "[spezielle Schemata](https://url.spec.whatwg.org/#special-scheme)" bezeichnet), hat sie kein Konzept eines Hosts, und das Setzen dieser Eigenschaft hat keine Wirkung.

> [!NOTE]
> Wenn der angegebene Wert für die `host`-Setter-Methode keinen `port` enthält, ändert sich der `port` der URL nicht. Dies kann unerwartet sein, da der `host`-Getter eine URL-Port-Zeichenfolge zurückgibt, sodass man annehmen könnte, dass der Setter immer beide "zurücksetzt".

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

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der sie gehört.
