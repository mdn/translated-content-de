---
title: URLPattern
slug: Web/API/URLPattern
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Das **`URLPattern`**-Interface der [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) gleicht URLs oder Teile von URLs mit einem Muster ab. Das Muster kann Fanggruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

Weitere Informationen zur Syntax von Mustern finden Sie auf der API-Übersichtsseite: [URL Pattern API](/de/docs/Web/API/URL_Pattern_API).

## Konstruktor

- [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern)
  - : Gibt ein neues `URLPattern`-Objekt basierend auf dem angegebenen Muster und der Basis-URL zurück.

## Instanz-Eigenschaften

- [`hash`](/de/docs/Web/API/URLPattern/hash) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _Hash_-Teil einer URL abzugleichen.
- [`hostname`](/de/docs/Web/API/URLPattern/hostname) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _Hostname_-Teil einer URL abzugleichen.
- [`password`](/de/docs/Web/API/URLPattern/password) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _Passwort_-Teil einer URL abzugleichen.
- [`pathname`](/de/docs/Web/API/URLPattern/pathname) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _Pfadname_-Teil einer URL abzugleichen.
- [`port`](/de/docs/Web/API/URLPattern/port) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _Port_-Teil einer URL abzugleichen.
- [`protocol`](/de/docs/Web/API/URLPattern/protocol) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _Protokoll_-Teil einer URL abzugleichen.
- [`search`](/de/docs/Web/API/URLPattern/search) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _Such_-Teil einer URL abzugleichen.
- [`username`](/de/docs/Web/API/URLPattern/username) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _Benutzernamen_-Teil einer URL abzugleichen.

## Instanz-Methoden

- [`exec()`](/de/docs/Web/API/URLPattern/exec)
  - : Gibt ein Objekt mit den übereinstimmenden Teilen der URL oder `null` zurück, wenn die URL nicht übereinstimmt.
- [`test()`](/de/docs/Web/API/URLPattern/test)
  - : Gibt `true` zurück, wenn die URL mit dem angegebenen Muster übereinstimmt, andernfalls `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
- Die Mustersyntax, die von URLPattern verwendet wird, ist ähnlich der Syntax, die von
  [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird.
