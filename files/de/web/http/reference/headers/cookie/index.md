---
title: Cookie header
short-title: Cookie
slug: Web/HTTP/Reference/Headers/Cookie
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Cookie`**-{{Glossary("request_header", "Anforderungs-Header")}} enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die mit dem Server in Verbindung stehen (d.h. zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet oder in JavaScript mithilfe von [`Document.cookie`](/de/docs/Web/API/Document/cookie) gesetzt).

Der `Cookie`-Header ist optional und kann ausgelassen werden, wenn zum Beispiel die Datenschutzeinstellungen des Browsers Cookies blockieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
