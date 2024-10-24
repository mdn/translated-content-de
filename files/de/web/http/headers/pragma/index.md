---
title: Pragma
slug: Web/HTTP/Headers/Pragma
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der HTTP-Header **`Pragma`** ist ein implementationsspezifischer Header, der entlang der Anforderungs-Antwort-Kette verschiedene Effekte haben kann.
Dieser Header dient der Abwärtskompatibilität mit HTTP/1.0-Caches, die den HTTP/1.1-Header {{HTTPHeader("Cache-Control")}} nicht unterstützen.

> [!NOTE]
> Der `Pragma`-Header ist für HTTP-Antworten nicht spezifiziert und ist daher kein verlässlicher Ersatz für den HTTP/1.1-Header `Cache-Control`, obwohl sein Verhalten dem von `Cache-Control: no-cache` entspricht, wenn das `Cache-Control`-Header-Feld in einer Anforderung weggelassen wird.
> Verwenden Sie `Pragma` nur für die Abwärtskompatibilität mit HTTP/1.0-Clients.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (das Verhalten in der Antwort ist nicht spezifiziert und implementationsspezifisch).
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Entspricht `Cache-Control: no-cache`. Zwingt Caches, die Anfrage zur Validierung an den Origin-Server zu senden, bevor eine zwischengespeicherte Kopie freigegeben wird.

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
