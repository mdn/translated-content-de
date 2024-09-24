---
title: URLPattern
slug: Web/API/URLPattern
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`URLPattern`**-Schnittstelle der {{domxref("URL Pattern API", "", "", "nocode")}} gleicht URLs oder Teile von URLs mit einem Muster ab. Das Muster kann Erfassungsgruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

Weitere Informationen zur Syntax von Mustern finden Sie auf der API-Übersichtsseite: {{domxref("URL Pattern API", "", "", "nocode")}}.

## Konstruktor

- {{domxref("URLPattern.URLPattern", "URLPattern()")}} {{Experimental_Inline}}
  - : Gibt ein neues `URLPattern`-Objekt basierend auf dem gegebenen Muster und der Basis-URL zurück.

## Instanz-Eigenschaften

- {{domxref("URLPattern.hash", "hash")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Hash_-Teil
    einer URL abzugleichen.
- {{domxref("URLPattern.hostname", "hostname")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Hostname_-
    Teil einer URL abzugleichen.
- {{domxref("URLPattern.password", "password")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Passwort_-
    Teil einer URL abzugleichen.
- {{domxref("URLPattern.pathname", "pathname")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Pfadnamen_-
    Teil einer URL abzugleichen.
- {{domxref("URLPattern.port", "port")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Port_-
    Teil einer URL abzugleichen.
- {{domxref("URLPattern.protocol", "protocol")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Protokoll_-
    Teil einer URL abzugleichen.
- {{domxref("URLPattern.search", "search")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Such_-Teil
    einer URL abzugleichen.
- {{domxref("URLPattern.username", "username")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der ein Muster enthält, um den _Benutzernamen_-
    Teil einer URL abzugleichen.

## Instanz-Methoden

- {{domxref("URLPattern.exec", "exec()")}} {{Experimental_Inline}}
  - : Gibt ein Objekt mit den übereinstimmenden Teilen der URL oder `null` zurück, wenn die URL nicht übereinstimmt.
- {{domxref("URLPattern.test", "test()")}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die URL mit dem gegebenen Muster übereinstimmt, andernfalls `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
- Die von URLPattern verwendete Mustersyntax ist ähnlich der Syntax, die von
  [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird.
