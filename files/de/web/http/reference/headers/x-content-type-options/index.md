---
title: X-Content-Type-Options header
short-title: X-Content-Type-Options
slug: Web/HTTP/Reference/Headers/X-Content-Type-Options
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP-**`X-Content-Type-Options`**-{{Glossary("response_header", "Response-Header")}} gibt an, dass die im {{HTTPHeader("Content-Type")}}-Header beworbenen [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) respektiert und nicht verändert werden sollten. Der Header ermöglicht es Ihnen, [MIME-Type-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) zu vermeiden, indem Sie festlegen, dass die MIME-Typen absichtlich konfiguriert sind.

Sicherheitstester von Websites erwarten in der Regel, dass dieser Header gesetzt ist.

> [!NOTE]
> Der `X-Content-Type-Options`-Header gilt nur für Request-Blocking [aufgrund von `nosniff`](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff) für [Request-Ziele](/de/docs/Web/API/Request/destination) vom Typ `"script"` und `"style"`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Content-Type-Options: nosniff
```

## Direktiven

- `nosniff`
  - : Blockiert eine Anfrage, wenn das Anfrageziel vom Typ `style` ist und der MIME-Typ nicht `text/css` ist oder vom Typ `script` ist und der MIME-Typ nicht ein [JavaScript-MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Type")}}
- Die [ursprüngliche Definition](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) von X-Content-Type-Options von Microsoft.
- Verwenden Sie [HTTP Observatory](/en-US/observatory), um die Sicherheitskonfiguration von Websites zu testen (einschließlich dieses Headers).
- [Abmilderung von MIME-Confusion-Angriffen in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
