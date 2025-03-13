---
title: X-Content-Type-Options
slug: Web/HTTP/Reference/Headers/X-Content-Type-Options
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`X-Content-Type-Options`** {{Glossary("response_header", "Antwort-Header")}} gibt an, dass die im {{HTTPHeader("Content-Type")}} Header angekündigten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) respektiert und nicht geändert werden sollten. Der Header erlaubt es Ihnen, [MIME-Typ Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) zu vermeiden, indem er spezifiziert, dass die MIME-Typen absichtlich konfiguriert sind.

Sicherheitstester von Websites erwarten üblicherweise, dass dieser Header gesetzt ist.

> [!NOTE]
> Der `X-Content-Type-Options` Header gilt nur für die Anforderungsblockierung [aufgrund von `nosniff`](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff) für [Anforderungsziele](/de/docs/Web/API/Request/destination) vom Typ `"script"` und `"style"`.
> Er aktiviert jedoch auch den Schutz von [Cross-Origin Read Blocking (CORB)](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md#determining-whether-a-response-is-corb_protected) für HTML-, TXT-, JSON- und XML-Dateien (ausgenommen SVG `image/svg+xml`).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Blockiert eine Anfrage, wenn das Anforderungsziel vom Typ `style` ist und der MIME-Typ nicht `text/css` ist oder vom Typ `script` und der MIME-Typ kein [JavaScript MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Type")}}
- Die [ursprüngliche Definition](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) von X-Content-Type-Options durch Microsoft.
- Verwenden Sie das [HTTP Observatory](/en-US/observatory) zur Überprüfung der Sicherheitskonfiguration von Websites (einschließlich dieses Headers).
- [Vermeidung von MIME-Verwirrungsangriffen in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Cross-Origin Read Blocking (CORB)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB Erklärung](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)
