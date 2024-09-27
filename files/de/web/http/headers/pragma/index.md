---
title: Pragma
slug: Web/HTTP/Headers/Pragma
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der HTTP/1.0-Allgemein-Header **`Pragma`** ist ein implementierungsspezifischer Header, der entlang der Anforderungs-Antwort-Kette verschiedene Effekte haben kann. Dieser Header dient der Abwärtskompatibilität mit den HTTP/1.0-Caches, die nicht über einen {{HTTPHeader("Cache-Control")}} HTTP/1.1-Header verfügen.

> **Note:** `Pragma` ist für HTTP-Antworten nicht spezifiziert und ist daher kein zuverlässiger Ersatz für den allgemeinen HTTP/1.1-`Cache-Control`-Header, obwohl sein Verhalten das gleiche ist wie `Cache-Control: no-cache`, wenn das `Cache-Control`-Headerfeld in einer Anforderung weggelassen wird. Verwenden Sie `Pragma` nur für die Abwärtskompatibilität mit HTTP/1.0-Clients.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Anforderungs-Header](/de/docs/Glossary/Request_header),
        [Antwort-Header](/de/docs/Glossary/Response_header) (Antwortverhalten ist nicht
        spezifiziert und daher implementierungsspezifisch).
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-safelisted Antwort-Header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Pragma: no-cache
```

## Direktiven

- no-cache
  - : Entspricht `Cache-Control: no-cache`. Erzwingt, dass Caches die Anforderung an den Ursprung-Server zur Validierung übermitteln, bevor eine zwischengespeicherte Kopie freigegeben wird.

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
