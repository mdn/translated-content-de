---
title: Cookie header
short-title: Cookie
slug: Web/HTTP/Reference/Headers/Cookie
l10n:
  sourceCommit: efc22e586d21b91311f504a99c54437bbbbe96ef
---

Der HTTP-**`Cookie`**-{{Glossary("request_header", "Request-Header")}} enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die mit dem Server assoziiert sind (d.h. zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet oder in JavaScript mit [`Document.cookie`](/de/docs/Web/API/Document/cookie) gesetzt).

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

### Senden von Cookies

```http
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

### Cookies mit demselben Namen

Mehrere Cookies können denselben Namen haben, wenn sie mit unterschiedlichen `Path`- oder `Domain`-Attributen gesetzt wurden.
Dies schließt den Fall ein, in dem ein Cookie mit einem `Domain`-Attribut gesetzt wurde und ein anderes ohne, selbst wenn sie für denselben Host gelten. Wenn mehr als eines einer Anforderung entspricht, kann der Browser alle in den `Cookie`-Header aufnehmen.

Partitionierte Cookies sind auch auf der obersten Sitebene verankert, sodass Cookies denselben Namen haben können, wenn sie vom selben Host in zwei verschiedenen Einbettungskontexten gesetzt werden. Siehe [CHIPS](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

Beispielsweise setzen separate Antworten vom selben Host diese Cookies:

```http
Set-Cookie: theme=light; Path=/
Set-Cookie: theme=dark; Path=/docs
```

Eine Anforderung an `/docs` kann beide enthalten:

```http
Cookie: theme=dark; theme=light
```

Der `Cookie`-Header enthält nicht die Attribute der Cookies, und die Cookie-Einträge sind ungeordnet, sodass der Server ihre Pfade oder Domains nicht allein aus dem Header bestimmen kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("413", "413 Content Too Large")}}
- {{HTTPHeader("Set-Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
