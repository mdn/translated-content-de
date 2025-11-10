---
title: URLPattern
slug: Web/API/URLPattern
l10n:
  sourceCommit: aafad07220c63481570e43cc66a5d9fb7b985ffc
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Das **`URLPattern`**-Interface der [URL Pattern API](/de/docs/Web/API/URL_Pattern_API) vergleicht URLs oder Teile von URLs mit einem Muster. Das Muster kann Erfassungsgruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

Weitere Informationen zur Syntax von Mustern finden Sie auf der API-Übersichtsseite: [URL Pattern API](/de/docs/Web/API/URL_Pattern_API).

## Konstruktor

- [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern)
  - : Gibt ein neues `URLPattern`-Objekt basierend auf dem angegebenen Muster und der Basis-URL zurück.

## Instanzeigenschaften

- [`hash`](/de/docs/Web/API/URLPattern/hash) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _hash_-Teil
    einer URL zu vergleichen.
- [`hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups) {{ReadOnlyInline}}
  - : Ein boolscher Wert, der anzeigt, ob einer der `URLPattern`-Komponenten [Reguläre-Ausdrucks-Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) enthält.
- [`hostname`](/de/docs/Web/API/URLPattern/hostname) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _hostname_
    Teil einer URL zu vergleichen.
- [`password`](/de/docs/Web/API/URLPattern/password) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _password_
    Teil einer URL zu vergleichen.
- [`pathname`](/de/docs/Web/API/URLPattern/pathname) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _pathname_
    Teil einer URL zu vergleichen.
- [`port`](/de/docs/Web/API/URLPattern/port) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _port_-Teil
    einer URL zu vergleichen.
- [`protocol`](/de/docs/Web/API/URLPattern/protocol) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _protocol_
    Teil einer URL zu vergleichen.
- [`search`](/de/docs/Web/API/URLPattern/search) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _search_-Teil
    einer URL zu vergleichen.
- [`username`](/de/docs/Web/API/URLPattern/username) {{ReadOnlyInline}}
  - : Ein String, der ein Muster enthält, um den _username_
    Teil einer URL zu vergleichen.

## Instanzmethoden

- [`exec()`](/de/docs/Web/API/URLPattern/exec)
  - : Gibt ein Objekt mit den übereinstimmenden Teilen der URL zurück oder `null`, wenn die URL
    nicht übereinstimmt.
- [`test()`](/de/docs/Web/API/URLPattern/test)
  - : Gibt `true` zurück, wenn die URL mit dem gegebenen Muster übereinstimmt, andernfalls `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
- Die Mustersyntax, die von URLPattern verwendet wird, ist ähnlich der Syntax von
  [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird.
