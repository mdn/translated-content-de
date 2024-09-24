---
title: Pragma
slug: Web/HTTP/Headers/Pragma
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der **`Pragma`** HTTP/1.0-Generalkopf ist ein implementierungsspezifischer Header, der verschiedene Effekte entlang der Anfrage-Antwort-Kette haben kann. Dieser Header dient der Abwärtskompatibilität mit den HTTP/1.0-Caches, die keinen {{HTTPHeader("Cache-Control")}} HTTP/1.1-Header haben.

> **Note:** `Pragma` ist nicht für HTTP-Antworten spezifiziert und ist daher kein verlässlicher Ersatz für den allgemeinen HTTP/1.1-`Cache-Control`-Header, obwohl sein Verhalten dem von `Cache-Control: no-cache` entspricht, wenn das `Cache-Control`-Headerfeld in einer Anfrage weggelassen wird. Verwenden Sie `Pragma` nur für die Abwärtskompatibilität mit HTTP/1.0-Clients.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}} (das Verhalten bei Antworten ist nicht spezifiziert und daher implementierungsspezifisch).
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
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
  - : Entspricht `Cache-Control: no-cache`. Erzwingt, dass Caches die Anfrage zur Validierung an den Ursprungsserver senden, bevor eine zwischengespeicherte Kopie freigegeben wird.

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
