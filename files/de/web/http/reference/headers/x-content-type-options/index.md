---
title: X-Content-Type-Options header
short-title: X-Content-Type-Options
slug: Web/HTTP/Reference/Headers/X-Content-Type-Options
l10n:
  sourceCommit: d5c3db4df1e063769b8113567f4558ad4298b00b
---

Der HTTP **`X-Content-Type-Options`** {{Glossary("response_header", "Response-Header")}} zeigt an, dass die in den {{HTTPHeader("Content-Type")}}-Headern angegebenen [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) respektiert und nicht verändert werden sollten. Der Header ermöglicht es Ihnen, das [MIME-Type-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) zu vermeiden, indem er angibt, dass die MIME-Typen bewusst konfiguriert sind.

Sicherheitstester von Websites erwarten normalerweise, dass dieser Header gesetzt ist.

> [!NOTE]
> Der `X-Content-Type-Options`-Header gilt nur für Anfragen, die aufgrund von `nosniff` [geblockt werden](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff), und zwar für [Request-Ziele](/de/docs/Web/API/Request/destination) vom Typ `"script"` und `"style"`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Content-Type-Options: nosniff
```

## Direktiven

- `nosniff`
  - : Blockiert eine Anfrage, wenn das Request-Ziel vom Typ `style` ist und der MIME-Typ nicht `text/css` ist, oder vom Typ `script` und der MIME-Typ kein [JavaScript MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Type")}}
- Die [ursprüngliche Definition](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) von X-Content-Type-Options von Microsoft.
- Verwenden Sie [HTTP Observatory](/en-US/observatory), um die Sicherheitskonfiguration von Websites zu testen (einschließlich dieses Headers).
- [Minderung von MIME-Verwirrungsangriffen in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
