---
title: Pragma
slug: Web/HTTP/Reference/Headers/Pragma
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der HTTP-Header **`Pragma`** ist ein implementierungsspezifischer Header, der entlang der Anforderungs-Antwort-Kette verschiedene Effekte haben kann. Dieser Header dient der Rückwärtskompatibilität mit HTTP/1.0-Caches, die den HTTP/1.1-Header {{HTTPHeader("Cache-Control")}} nicht unterstützen.

> [!NOTE]
> Der `Pragma`-Header ist nicht für HTTP-Antworten spezifiziert und ist daher kein zuverlässiger Ersatz für den HTTP/1.1-Header `Cache-Control`, obwohl sein Verhalten gleich `Cache-Control: no-cache` ist, wenn das `Cache-Control`-Headerfeld bei einer Anfrage weggelassen wird.
> Verwenden Sie `Pragma` nur zur Rückwärtskompatibilität mit HTTP/1.0-Clients.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (Verhalten der Antwort ist nicht spezifiziert und implementierungsspezifisch).
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
