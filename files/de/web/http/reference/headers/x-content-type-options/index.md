---
title: X-Content-Type-Options header
short-title: X-Content-Type-Options
slug: Web/HTTP/Reference/Headers/X-Content-Type-Options
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`X-Content-Type-Options`** {{Glossary("response_header", "Antwortheader")}} gibt an, dass die im {{HTTPHeader("Content-Type")}}-Header angegebenen [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) respektiert und nicht verändert werden sollen. Der Header ermöglicht es Ihnen, [MIME-Type-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) zu vermeiden, indem Sie spezifizieren, dass die MIME-Typen bewusst konfiguriert sind.

Sicherheitstester von Websites erwarten normalerweise, dass dieser Header gesetzt ist.

> [!NOTE]
> Der `X-Content-Type-Options`-Header blockiert Anfragen nur [aufgrund von `nosniff`](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff) für [Request-Ziele](/de/docs/Web/API/Request/destination) von `"script"` und `"style"`.
> Er aktiviert jedoch auch den [Cross-Origin Read Blocking (CORB)](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md#determining-whether-a-response-is-corb_protected) Schutz für HTML-, TXT-, JSON- und XML-Dateien (mit Ausnahme von SVG `image/svg+xml`).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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
  - : Blockiert eine Anfrage, wenn das Ziel der Anfrage vom Typ `style` ist und der MIME-Typ nicht `text/css` ist, oder wenn es vom Typ `script` ist und der MIME-Typ kein [JavaScript MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Type")}}
- Die [ursprüngliche Definition](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) von X-Content-Type-Options von Microsoft.
- Verwenden Sie das [HTTP Observatory](/en-US/observatory), um die Sicherheitskonfiguration von Websites zu testen (einschließlich dieses Headers).
- [Minderung von MIME-Verwechslungsangriffen in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Cross-Origin Read Blocking (CORB)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB erklären](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)
