---
title: Pragma header
short-title: Pragma
slug: Web/HTTP/Reference/Headers/Pragma
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_Header}}

Der HTTP-Header **`Pragma`** ist ein implementationsspezifischer Header, der verschiedene Effekte entlang der Anfrage-Antwort-Kette haben kann. Dieser Header dient der Rückwärtskompatibilität mit HTTP/1.0-Caches, die den HTTP/1.1-Header {{HTTPHeader("Cache-Control")}} nicht unterstützen.

> [!NOTE]
> Der `Pragma`-Header ist für HTTP-Antworten nicht spezifiziert und daher kein zuverlässiger Ersatz für den HTTP/1.1-`Cache-Control`-Header, obwohl dessen Verhalten dem von `Cache-Control: no-cache` entspricht, wenn das `Cache-Control`-Headerfeld in einer Anfrage weggelassen wird.
> Verwenden Sie `Pragma` nur für die Rückwärtskompatibilität mit HTTP/1.0-Clients.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (Verhalten der Antwort ist nicht spezifiziert und implementationsspezifisch).
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Pragma: no-cache
```

## Direktiven

- `no-cache`
  - : Entspricht `Cache-Control: no-cache`. Zwingt Caches dazu, die Anfrage zur Validierung an den Ursprungsserver zu senden, bevor eine zwischengespeicherte Kopie freigegeben wird.

## Beispiele

```http
Pragma: no-cache
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
