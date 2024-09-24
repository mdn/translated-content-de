---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Der **`X-Content-Type-Options`** Antwort-HTTP-Header ist ein Marker, der vom Server verwendet wird, um anzuzeigen, dass die im {{HTTPHeader("Content-Type")}} Header angegebenen [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) befolgt und nicht geändert werden sollten. Der Header ermöglicht es, [MIME-Typ Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) zu vermeiden, indem er angibt, dass die MIME-Typen absichtlich konfiguriert sind.

Dieser Header wurde von Microsoft in IE 8 eingeführt, um Webmastern eine Möglichkeit zu geben, Content-Sniffing zu blockieren, das nicht-executable MIME-Typen in executable MIME-Typen umwandeln konnte. Seitdem haben auch andere Browser diesen Header eingeführt, selbst wenn ihre MIME-Sniffing-Algorithmen weniger aggressiv waren.

Ab Firefox 72 vermeiden auch Top-Level-Dokumente MIME-Sniffing (wenn {{HTTPHeader("Content-type")}} bereitgestellt wird). Dies kann dazu führen, dass HTML-Webseiten heruntergeladen werden, anstatt gerendert zu werden, wenn sie mit einem anderen MIME-Typ als `text/html` bereitgestellt werden. Sorgen Sie dafür, dass beide Header korrekt gesetzt sind.

Sicherheitstester von Websites erwarten in der Regel, dass dieser Header gesetzt ist.

> **Hinweis:** `X-Content-Type-Options` gelten nur für das Blockieren von Anfragen [aufgrund von `nosniff`](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff) für [Anfrageziele](https://fetch.spec.whatwg.org/#concept-request-destination) vom Typ "`script`" und "`style`".
> Es aktiviert jedoch auch den Schutz durch [Cross-Origin Read Blocking (CORB)](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md#determining-whether-a-response-is-corb_protected) für HTML-, TXT-, JSON- und XML-Dateien (ohne SVG `image/svg+xml`).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Content-Type-Options: nosniff
```

## Direktiven

- `nosniff`
  - : Blockiert eine Anfrage, wenn das Anfrageziel vom Typ `style` ist und der MIME-Typ nicht `text/css` ist, oder vom Typ `script` und der MIME-Typ kein [JavaScript MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) ist.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

### Browser-spezifische Hinweise

- Firefox 72 aktiviert `X-Content-Type-Options: nosniff` für Top-Level-Dokumente

## Siehe auch

- {{HTTPHeader("Content-Type")}}
- Die [ursprüngliche Definition](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) von X-Content-Type-Options von Microsoft.
- Verwenden Sie [HTTP Observatory](/en-US/observatory), um die Sicherheitskonfiguration von Websites (einschließlich dieses Headers) zu testen.
- [Minderung von MIME-Confusion-Angriffen in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Cross-Origin Read Blocking (CORB)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB Erklärung](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)
