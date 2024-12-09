---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`X-Content-Type-Options`** {{Glossary("response_header", "Response-Header")}} gibt an, dass die im {{HTTPHeader("Content-Type")}}-Header beworbenen [MIME-Typen](/de/docs/Web/HTTP/MIME_types) respektiert und nicht geändert werden sollten. Der Header erlaubt es Ihnen, [MIME-Typ-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) zu vermeiden, indem festgelegt wird, dass die MIME-Typen bewusst konfiguriert sind.

Sicherheitsprüfer von Webseiten erwarten in der Regel, dass dieser Header gesetzt ist.

> [!NOTE]
> Der `X-Content-Type-Options`-Header wendet das Blockieren von Anfragen nur [aufgrund von `nosniff`](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff) für [Request-Ziele](/de/docs/Web/API/Request/destination) der Typen `"script"` und `"style"` an.
> Er ermöglicht jedoch auch den [Cross-Origin Read Blocking (CORB)](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md#determining-whether-a-response-is-corb_protected)-Schutz für HTML-, TXT-, JSON- und XML-Dateien (mit Ausnahme von SVG `image/svg+xml`).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Blockiert eine Anfrage, wenn das Request-Ziel vom Typ
    `style` ist und der MIME-Typ nicht `text/css` ist,
    oder vom Typ `script` ist und der MIME-Typ kein [JavaScript-MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Type")}}
- Die [ursprüngliche Definition](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) von X-Content-Type-Options durch Microsoft.
- Nutzen Sie [HTTP Observatory](/en-US/observatory), um die Sicherheitskonfiguration von Websites (einschließlich dieses Headers) zu testen.
- [Minderung von MIME-Verwirrungsangriffen in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Cross-Origin Read Blocking (CORB)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB-Erklärung](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)
