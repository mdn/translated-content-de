---
title: "URL: port-Eigenschaft"
short-title: port
slug: Web/API/URL/port
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`port`**-Eigenschaft des {{domxref("URL")}}-Interfaces ist
ein String, der die Portnummer der URL enthält.

> [!NOTE]
> Wenn ein Eingabestring, der an den [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor übergeben wird, keine explizite Portnummer enthält (z.B. `https://localhost`) oder eine Portnummer enthält, die der Standardportnummer entspricht, die dem Protokollteil des Eingabestrings entspricht (z.B. `https://localhost:443`), dann wird im [`URL`](/de/docs/Web/API/URL)-Objekt, das der Konstruktor zurückgibt, der Wert der port-Eigenschaft der leere String sein: `''`.

## Wert

Ein String.

## Beispiele

```js
// https-Protokoll mit nicht-standardmäßiger Portnummer
new URL("https://example.com:5443/svn/Repos/").port; // '5443'
// http-Protokoll mit nicht-standardmäßiger Portnummer
new URL("http://example.com:8080/svn/Repos/").port; // '8080'
// https-Protokoll mit Standardportnummer
new URL("https://example.com:443/svn/Repos/").port; // '' (leerer String)
// http-Protokoll mit Standardportnummer
new URL("http://example.com:80/svn/Repos/").port; // '' (leerer String)
// https-Protokoll ohne explizite Portnummer
new URL("https://example.com/svn/Repos/").port; // '' (leerer String)
// http-Protokoll ohne explizite Portnummer
new URL("https://example.com/svn/Repos/").port; // '' (leerer String)
// ftp-Protokoll mit nicht-standardmäßiger Portnummer
new URL("ftp://example.com:221/svn/Repos/").port; // '221'
// ftp-Protokoll mit Standardportnummer
new URL("ftp://example.com:21/svn/Repos/").port; // '' (leerer String)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das zugehörige {{domxref("URL")}}-Interface.
