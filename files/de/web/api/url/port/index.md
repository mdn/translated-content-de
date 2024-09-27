---
title: "URL: port Eigenschaft"
short-title: port
slug: Web/API/URL/port
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`port`** Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces ist
ein String, der die Portnummer der URL enthält.

> [!NOTE]
> Wenn ein Eingabestring, der an den [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor übergeben wird, keine explizite Portnummer enthält (z. B. `https://localhost`) oder eine Portnummer enthält, die der Standardportnummer entspricht, die zum Protokollteil des Eingabestrings gehört (z. B. `https://localhost:443`), dann wird der Wert der Port-Eigenschaft im [`URL`](/de/docs/Web/API/URL)-Objekt, das der Konstruktor zurückgibt, der leere String sein: `''`.

## Wert

Ein String.

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
