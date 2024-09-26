---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der Antwortheader **`Access-Control-Expose-Headers`** ermöglicht es einem Server anzugeben, welche Antwortheader den im Browser ausgeführten Skripten im Zuge einer Cross-Origin-Anfrage zugänglich gemacht werden sollen.

Nur die {{Glossary("CORS-safelisted response header", "CORS-safelisted response headers")}} sind standardmäßig zugänglich. Damit Clients auf andere Header zugreifen können, muss der Server sie im `Access-Control-Expose-Headers`-Header aufführen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Expose-Headers: [<header-name>[, <header-name>]*]
Access-Control-Expose-Headers: *
```

## Direktiven

- \<header-name>
  - : Eine Liste von null oder mehr durch Kommas getrennten [Header-Namen](/de/docs/Web/HTTP/Headers), auf die Clients über eine Antwort zugreifen dürfen. Diese sind _zusätzlich_ zu den {{Glossary("CORS-safelisted response header", "CORS-safelisted response headers")}}.
- `*` (Wildcard)
  - : Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Berechtigungsnachweise (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen).
    Bei Anfragen mit Berechtigungsnachweisen wird er als der literal Header-Name `*` behandelt.

## Beispiele

Die {{Glossary("CORS-safelisted response header", "CORS-safelisted response headers")}} sind: {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, {{HTTPHeader("Last-Modified")}}, {{HTTPHeader("Pragma")}}. Um einen nicht-CORS-safelisted Antwortheader freizugeben, können Sie angeben:

```http
Access-Control-Expose-Headers: Content-Encoding
```

Um zusätzlich einen benutzerdefinierten Header, wie `Kuma-Revision`, freizugeben, können Sie mehrere Header durch ein Komma getrennt angeben:

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

Für Anfragen ohne Berechtigungsnachweise kann ein Server auch mit einem Wildcard-Wert antworten:

```http
Access-Control-Expose-Headers: *
```

Ein Server kann auch auf Anfragen mit Berechtigungsnachweisen mit dem `*` Wert antworten, in diesem Fall würde er sich auf einen Header namens `*` beziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
