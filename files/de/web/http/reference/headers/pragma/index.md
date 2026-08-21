---
title: Pragma header
short-title: Pragma
slug: Web/HTTP/Reference/Headers/Pragma
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Der HTTP-**`Pragma`**-Header ist ein implementierungsspezifischer Header, der in der Anforderungs-Antwort-Kette verschiedene Effekte haben kann. Dieser Header dient der Abwärtskompatibilität mit HTTP/1.0-Caches, die den {{HTTPHeader("Cache-Control")}}-HTTP/1.1-Header nicht unterstützen.

> [!NOTE]
> Der `Pragma`-Header ist für HTTP-Antworten nicht spezifiziert und ist daher kein zuverlässiger Ersatz für den HTTP/1.1-`Cache-Control`-Header, auch wenn sein Verhalten dem von `Cache-Control: no-cache` entspricht, wenn das `Cache-Control`-Headerfeld bei einer Anfrage weggelassen wird.
> Verwenden Sie `Pragma` nur für die Abwärtskompatibilität mit HTTP/1.0-Clients.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        {{Glossary("Response_header", "Antwortheader")}} (Antwortverhalten ist nicht spezifiziert und implementierungsspezifisch).
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-Güteklasse Antwortheader")}}
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
  - : Gleich wie `Cache-Control: no-cache`. Erzwingt, dass Caches die Anfrage zur Validierung an den Ursprungsserver senden, bevor eine zwischengespeicherte Kopie freigegeben wird.

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
