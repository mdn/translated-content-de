---
title: Cookie
slug: Web/HTTP/Reference/Headers/Cookie
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Cookie`** {{Glossary("request_header", "Request-Header")}} enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die mit dem Server assoziiert sind (d. h. zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet oder in JavaScript mit [`Document.cookie`](/de/docs/Web/API/Document/cookie) gesetzt).

Der `Cookie`-Header ist optional und kann weggelassen werden, wenn beispielsweise die Datenschutzeinstellungen des Browsers Cookies blockieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

## Direktiven

- `<cookie-list>`
  - : Eine Liste von Name-Wert-Paaren in der Form von `<cookie-name>=<cookie-value>`.
    Paare in der Liste werden durch ein Semikolon und ein Leerzeichen getrennt.

## Beispiele

```http
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("413", "413 Content Too Large")}}
- {{HTTPHeader("Set-Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
