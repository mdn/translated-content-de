---
title: Pragma
slug: Web/HTTP/Headers/Pragma
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{Deprecated_Header}}

Der **`Pragma`** HTTP/1.0-Generalkopf ist ein implementierungsspezifischer Header, der entlang der Anforderungs-Antwort-Kette verschiedene Effekte haben kann. Dieser Header dient der Rückwärtskompatibilität mit HTTP/1.0-Caches, die keinen {{HTTPHeader("Cache-Control")}} HTTP/1.1-Header haben.

> **Hinweis:** `Pragma` ist für HTTP-Antworten nicht spezifiziert und daher kein zuverlässiger Ersatz für den allgemeinen HTTP/1.1 `Cache-Control`-Header, obwohl sein Verhalten dasselbe ist wie bei `Cache-Control: no-cache`, wenn das `Cache-Control`-Headerfeld in einer Anforderung weggelassen wird. Verwenden Sie `Pragma` nur für die Rückwärtskompatibilität mit HTTP/1.0-Clients.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}} (Antwortverhalten ist nicht
        spezifiziert und daher implementierungsspezifisch).
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
  - : Entspricht `Cache-Control: no-cache`. Zwingt Caches, die Anforderung an den Ursprungsserver zur Validierung zu senden, bevor eine zwischengespeicherte Kopie freigegeben wird.

## Beispiele

```http
Pragma: no-cache
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
