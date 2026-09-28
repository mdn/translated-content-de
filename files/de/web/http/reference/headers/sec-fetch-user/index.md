---
title: Sec-Fetch-User header
short-title: Sec-Fetch-User
slug: Web/HTTP/Reference/Headers/Sec-Fetch-User
l10n:
  sourceCommit: 7e4e8954972d77196e4beedca4a3f8610da34dc9
---

Der HTTP-[Fetch-Metadata-Request-Header](/de/docs/Web/HTTP/Guides/Fetch_metadata) **`Sec-Fetch-User`** wird bei Anfragen gesendet, die durch eine Benutzeraktivierung ausgelöst werden. Sein Wert ist immer `?1`.

Ein Server kann anhand dieses Headers erkennen, ob eine Navigationsanfrage von einem Dokument, iframe usw. durch einen Benutzer ausgelöst wurde.

Der Header ist nur in Anfragen an [potenziell vertrauenswürdige URLs](/de/docs/Web/Security/Defenses/Secure_Contexts#potentially_trustworthy_urls) enthalten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadata-Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Fetch-User: ?1
```

## Direktiven

Der Wert ist immer `?1`. Wenn eine Anfrage durch etwas anderes als eine Benutzeraktivierung ausgelöst wird, müssen Browser den Header gemäß der Spezifikation vollständig weglassen.

## Beispiele

### Sec-Fetch-User verwenden

Wenn ein Benutzer auf einen Link zu einer anderen Seite desselben Ursprungs klickt, enthält die daraus resultierende Anfrage die folgenden Header:

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Fetch-Metadata-Request-Header {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}} und {{HTTPHeader("Sec-Fetch-Site")}}
- [Schützen Sie Ihre Ressourcen mit Fetch Metadata vor Webangriffen](https://web.dev/articles/fetch-metadata) (web.dev)
- [Testumgebung für Fetch-Metadata-Request-Header](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
