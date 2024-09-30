---
title: URLPattern
slug: Web/API/URLPattern
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Das **`URLPattern`**-Interface der [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) vergleicht URLs oder Teile von URLs mit einem Muster. Das Muster kann Erfassungsgruppen enthalten, die Teile der abgeglichenen URL extrahieren.

Weitere Informationen zur Syntax von Mustern finden Sie auf der API-Übersichtsseite: [URL Pattern API](/de/docs/Web/API/URL_Pattern_API).

## Konstruktor

- [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern) {{Experimental_Inline}}
  - : Gibt ein neues `URLPattern`-Objekt basierend auf dem angegebenen Muster und der Basis-URL zurück.

## Instanzeigenschaften

- [`hash`](/de/docs/Web/API/URLPattern/hash) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _hash_-Teil
    einer URL abzugleichen.
- [`hostname`](/de/docs/Web/API/URLPattern/hostname) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _hostname_-
    Teil einer URL abzugleichen.
- [`password`](/de/docs/Web/API/URLPattern/password) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _password_-
    Teil einer URL abzugleichen.
- [`pathname`](/de/docs/Web/API/URLPattern/pathname) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _pathname_-
    Teil einer URL abzugleichen.
- [`port`](/de/docs/Web/API/URLPattern/port) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _port_-Teil
    einer URL abzugleichen.
- [`protocol`](/de/docs/Web/API/URLPattern/protocol) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _protocol_-
    Teil einer URL abzugleichen.
- [`search`](/de/docs/Web/API/URLPattern/search) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _search_-Teil
    einer URL abzugleichen.
- [`username`](/de/docs/Web/API/URLPattern/username) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _username_-
    Teil einer URL abzugleichen.

## Instanzmethoden

- [`exec()`](/de/docs/Web/API/URLPattern/exec) {{Experimental_Inline}}
  - : Gibt ein Objekt mit den abgeglichenen Teilen der URL oder `null` zurück, wenn die URL
    nicht übereinstimmt.
- [`test()`](/de/docs/Web/API/URLPattern/test) {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die URL dem angegebenen Muster entspricht, andernfalls `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill für `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
- Die Syntax der von URLPattern verwendeten Muster ähnelt der Syntax, die von
  [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird.
