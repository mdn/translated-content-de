---
title: Pragma header
short-title: Pragma
slug: Web/HTTP/Reference/Headers/Pragma
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der HTTP-**`Pragma`**-Header ist ein implementierungsspezifischer Header, der in der Anforderungs-Antwort-Kette verschiedene Effekte haben kann. Dieser Header dient der Abwärtskompatibilität mit HTTP/1.0 Caches, die den HTTP/1.1 {{HTTPHeader("Cache-Control")}}-Header nicht unterstützen.

> [!NOTE]
> Der `Pragma`-Header ist für HTTP-Antworten nicht spezifiziert und daher kein zuverlässiger Ersatz für den HTTP/1.1 `Cache-Control`-Header, obwohl sein Verhalten dasselbe ist wie `Cache-Control: no-cache`, wenn das `Cache-Control`-Headerfeld in einer Anfrage weggelassen wird.
> Verwenden Sie `Pragma` nur für die Abwärtskompatibilität mit HTTP/1.0-Clients.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (Antwortverhalten ist nicht spezifiziert und implementierungsspezifisch).
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Entspricht `Cache-Control: no-cache`. Erzwingt, dass Caches die Anfrage an den Ursprungsserver zur Validierung senden, bevor eine zwischengespeicherte Kopie freigegeben wird.

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
