---
title: URLPattern
slug: Web/API/URLPattern
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Das **`URLPattern`** Interface der [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) vergleicht URLs oder Teile von URLs mit einem Muster. Das Muster kann Erfassungsgruppen enthalten, die Teile der passenden URL extrahieren.

Weitere Informationen über die Syntax von Mustern finden Sie auf der API-Übersichtsseite: [URL Pattern API](/de/docs/Web/API/URL_Pattern_API).

## Konstruktor

- [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern) {{Experimental_Inline}}
  - : Gibt ein neues `URLPattern` Objekt zurück, basierend auf dem gegebenen Muster und der Basis-URL.

## Instanzeigenschaften

- [`hash`](/de/docs/Web/API/URLPattern/hash) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Hash_-Teil
    einer URL zu vergleichen.
- [`hostname`](/de/docs/Web/API/URLPattern/hostname) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Hostname_-Teil
    einer URL zu vergleichen.
- [`password`](/de/docs/Web/API/URLPattern/password) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Password_-Teil
    einer URL zu vergleichen.
- [`pathname`](/de/docs/Web/API/URLPattern/pathname) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Pathname_-Teil
    einer URL zu vergleichen.
- [`port`](/de/docs/Web/API/URLPattern/port) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Port_-Teil
    einer URL zu vergleichen.
- [`protocol`](/de/docs/Web/API/URLPattern/protocol) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Protocol_-Teil
    einer URL zu vergleichen.
- [`search`](/de/docs/Web/API/URLPattern/search) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Search_-Teil
    einer URL zu vergleichen.
- [`username`](/de/docs/Web/API/URLPattern/username) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Username_-Teil
    einer URL zu vergleichen.

## Instanzmethoden

- [`exec()`](/de/docs/Web/API/URLPattern/exec) {{Experimental_Inline}}
  - : Gibt ein Objekt mit den passenden Teilen der URL oder `null` zurück, wenn die URL nicht passt.
- [`test()`](/de/docs/Web/API/URLPattern/test) {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die URL dem gegebenen Muster entspricht, andernfalls `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
- Die Mustersyntax, die von URLPattern verwendet wird, ist ähnlich der Syntax, die von
  [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird.
