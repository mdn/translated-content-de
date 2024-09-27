---
title: Cookie
slug: Web/HTTP/Headers/Cookie
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Cookie`** HTTP-Anforderungs-Header enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die mit dem Server verknüpft sind (d.h. zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}} Header gesendet oder in JavaScript über [`Document.cookie`](/de/docs/Web/API/Document/cookie) gesetzt).

Der `Cookie`-Header ist optional und kann weggelassen werden, wenn beispielsweise die Datenschutzeinstellungen des Browsers Cookies blockieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungsheader](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
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

- \<cookie-list>
  - : Eine Liste von Name-Wert-Paaren in der Form `<cookie-name>=<cookie-value>`. Paare in der Liste werden durch ein Semikolon und ein Leerzeichen (`'; '`) getrennt.

## Beispiele

```http
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Set-Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
