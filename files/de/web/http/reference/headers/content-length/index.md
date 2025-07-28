---
title: Content-Length header
short-title: Content-Length
slug: Web/HTTP/Reference/Headers/Content-Length
l10n:
  sourceCommit: 89835e4310224a4b87d97ed2214556aa5d5ccb1e
---

Der HTTP **`Content-Length`** Header gibt die Größe des Nachrichtenkörpers in Bytes an, der an den Empfänger gesendet wird.

`Content-Length` hat die Einschränkung, dass die Nachrichtengröße im Voraus bekannt sein muss, bevor die Header gesendet werden. Dies stellt ein Problem dar, wenn Inhalte dynamisch generiert oder gestreamt werden.

- In HTTP/1.0 ist es erforderlich.
- In HTTP/1.1 kann es durch {{httpheader("Transfer-Encoding", "Transfer-Encoding: chunked")}} ersetzt werden, da die Antworten in Teilen gesendet werden, während deren Größe berechnet wird.
- In HTTP/2 ist `Content-Length` überflüssig, da die Inhaltslänge aus den DATA-Frames abgeleitet werden kann. Es kann dennoch zur Abwärtskompatibilität enthalten sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}},
        {{Glossary("Content_header", "Content-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-erlaubter Response-Header")}}
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Length: <length>
```

## Direktiven

- `<length>`
  - : Die Länge in Oktetten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Transfer-Encoding")}}
