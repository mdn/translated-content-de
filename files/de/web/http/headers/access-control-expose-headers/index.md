---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Access-Control-Expose-Headers`** Antwort-Header ermöglicht es einem Server, anzugeben, welche Antwort-Header für Skripte im Browser verfügbar gemacht werden sollen, als Antwort auf eine Cross-Origin-Anfrage.

Standardmäßig sind nur die [CORS-safelisted Antwort-Header](/de/docs/Glossary/CORS-safelisted_response_header) zugänglich. Damit Clients auf andere Header zugreifen können, muss der Server sie im `Access-Control-Expose-Headers` Header auflisten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Eine Liste von null oder mehr durch Kommata getrennten [Header-Namen](/de/docs/Web/HTTP/Headers), auf die Clients aus einer Antwort zugreifen dürfen. Diese kommen _zusätzlich_ zu den [CORS-safelisted Antwort-Headern](/de/docs/Glossary/CORS-safelisted_response_header).
- `*` (Wildcard)
  - : Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldedaten (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentisierungsinformationen).
    Bei Anfragen mit Anmeldedaten wird es als der literale Header-Name `*` behandelt.

## Beispiele

Die [CORS-safelisted Antwort-Header](/de/docs/Glossary/CORS-safelisted_response_header) sind: {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, {{HTTPHeader("Last-Modified")}}, {{HTTPHeader("Pragma")}}. Um einen nicht CORS-safelisted Antwort-Header offenzulegen, können Sie angeben:

```http
Access-Control-Expose-Headers: Content-Encoding
```

Um zusätzlich einen benutzerdefinierten Header, wie `Kuma-Revision`, offenzulegen, können Sie mehrere Header durch Kommata getrennt angeben:

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

Für Anfragen ohne Anmeldedaten kann ein Server auch mit einem Wildcard-Wert antworten:

```http
Access-Control-Expose-Headers: *
```

Ein Server kann auch mit dem Wert `*` für Anfragen mit Anmeldedaten antworten, aber in diesem Fall würde er sich auf einen Header namens `*` beziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
