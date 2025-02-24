---
title: Pragma
slug: Web/HTTP/Headers/Pragma
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der HTTP **`Pragma`**-Header ist ein implementationsspezifischer Header, der entlang der Anforderungs-Antwort-Kette verschiedene Effekte haben kann. Dieser Header dient der Abwärtskompatibilität mit HTTP/1.0-Caches, die den {{HTTPHeader("Cache-Control")}} HTTP/1.1-Header nicht unterstützen.

> [!NOTE]
> Der `Pragma`-Header ist für HTTP-Antworten nicht spezifiziert und daher kein zuverlässiger Ersatz für den HTTP/1.1-`Cache-Control`-Header, obwohl sein Verhalten dem von `Cache-Control: no-cache` ähnelt, falls das `Cache-Control`-Headerfeld in einer Anfrage weggelassen wird. Verwenden Sie `Pragma` nur für die Abwärtskompatibilität mit HTTP/1.0-Clients.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request header")}},
        {{Glossary("Response_header", "Response header")}} (Antwortverhalten ist nicht spezifiziert und implementationsspezifisch).
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sichere Antwort-Header")}}
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
  - : Entspricht `Cache-Control: no-cache`. Zwingt Caches, die Anfrage zur Validierung an den Ursprungsserver zu senden, bevor eine zwischengespeicherte Kopie freigegeben wird.

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
