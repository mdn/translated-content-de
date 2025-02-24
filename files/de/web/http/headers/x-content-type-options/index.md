---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`X-Content-Type-Options`** {{Glossary("response_header", "Antwort-Header")}} zeigt an, dass die im {{HTTPHeader("Content-Type")}} Header angegebenen [MIME-Typen](/de/docs/Web/HTTP/MIME_types) respektiert und nicht geändert werden sollten.
Der Header ermöglicht es Ihnen, das [MIME-Type-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) zu vermeiden, indem er angibt, dass die MIME-Typen bewusst konfiguriert sind.

Sicherheitstester für Websites erwarten normalerweise, dass dieser Header gesetzt ist.

> [!NOTE]
> Der `X-Content-Type-Options` Header gilt nur für das Sperren von Anfragen [aufgrund von `nosniff`](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff) für [Anfrageziele](/de/docs/Web/API/Request/destination) vom Typ `"script"` und `"style"`.
> Er aktiviert jedoch auch [Cross-Origin Read Blocking (CORB)](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md#determining-whether-a-response-is-corb_protected) Schutz für HTML-, TXT-, JSON- und XML-Dateien (ausgenommen SVG `image/svg+xml`).

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
  - : Blockiert eine Anfrage, wenn das Anfrageziel vom Typ
    `style` ist und der MIME-Typ nicht `text/css` ist,
    oder vom Typ `script` und der MIME-Typ kein [JavaScript MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Type")}}
- Die [ursprüngliche Definition](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) von X-Content-Type-Options durch Microsoft.
- Verwenden Sie [HTTP Observatory](/en-US/observatory), um die Sicherheitskonfiguration von Websites zu testen (einschließlich dieses Headers).
- [Abschwächung von MIME-Verwirrungsangriffen in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Cross-Origin Read Blocking (CORB)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB-Erklärer](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)
