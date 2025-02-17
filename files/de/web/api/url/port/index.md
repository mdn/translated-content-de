---
title: "URL: port-Eigenschaft"
short-title: port
slug: Web/API/URL/port
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`port`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces ist eine Zeichenkette, die die Portnummer der URL enthält. Wenn der Port der Standardport für das Protokoll ist (`80` für `ws:` und `http:`, `443` für `wss:` und `https:`, und `21` für `ftp:`), enthält diese Eigenschaft eine leere Zeichenkette, `""`.

Diese Eigenschaft kann gesetzt werden, um den Port der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/URL/host) hat oder das Schema `file:` ist, hat das Setzen dieser Eigenschaft keine Wirkung. Ungültige Portnummern werden ebenfalls stillschweigend ignoriert.

## Wert

Eine Zeichenkette.

## Beispiele

```js
// https protocol with non-default port number
new URL("https://example.com:5443/svn/Repos/").port; // '5443'
// http protocol with non-default port number
new URL("http://example.com:8080/svn/Repos/").port; // '8080'
// https protocol with default port number
new URL("https://example.com:443/svn/Repos/").port; // '' (empty string)
// http protocol with default port number
new URL("http://example.com:80/svn/Repos/").port; // '' (empty string)
// https protocol with no explicit port number
new URL("https://example.com/svn/Repos/").port; // '' (empty string)
// http protocol with no explicit port number
new URL("https://example.com/svn/Repos/").port; // '' (empty string)
// ftp protocol with non-default port number
new URL("ftp://example.com:221/svn/Repos/").port; // '221'
// ftp protocol with default port number
new URL("ftp://example.com:21/svn/Repos/").port; // '' (empty string)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.
