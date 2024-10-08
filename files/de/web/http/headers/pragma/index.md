---
title: Pragma
slug: Web/HTTP/Headers/Pragma
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der HTTP/1.0-Allgemeinheader **`Pragma`** ist ein implementierungsspezifischer Header, der entlang der Anfrage-Antwort-Kette verschiedene Auswirkungen haben kann. Dieser Header dient der Abwärtskompatibilität mit den HTTP/1.0-Caches, die keinen HTTP/1.1-Header {{HTTPHeader("Cache-Control")}} besitzen.

> **Note:** `Pragma` ist nicht für HTTP-Antworten spezifiziert und daher kein zuverlässiger Ersatz für den allgemeinen HTTP/1.1 `Cache-Control`-Header, obwohl sein Verhalten das gleiche ist wie bei `Cache-Control: no-cache`, wenn das `Cache-Control`-Headerfeld in einer Anfrage weggelassen wird. Verwenden Sie `Pragma` nur zur Abwärtskompatibilität mit HTTP/1.0-Clients.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request header")}},
        {{Glossary("Response_header", "Response header")}} (Antwortverhalten ist nicht spezifiziert und daher implementierungsspezifisch).
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
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
