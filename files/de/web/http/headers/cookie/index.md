---
title: Cookie
slug: Web/HTTP/Headers/Cookie
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Cookie`** {{Glossary("request_header", "Anforderungsheader")}} enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die mit dem Server verknüpft sind (d. h. zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet oder in JavaScript mit [`Document.cookie`](/de/docs/Web/API/Document/cookie) gesetzt).

Der `Cookie`-Header ist optional und kann weggelassen werden, wenn z.B. die Datenschutzeinstellungen des Browsers Cookies blockieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Eine Liste von Name-Wert-Paaren in der Form `<cookie-name>=<cookie-value>`.
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
