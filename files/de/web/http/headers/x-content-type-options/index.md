---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`X-Content-Type-Options`** HTTP-Antwort-Header ist ein Marker, der vom Server verwendet wird, um anzuzeigen, dass die im {{HTTPHeader("Content-Type")}}-Header angegebenen [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) eingehalten und nicht geändert werden sollten. Dieser Header ermöglicht es Ihnen, [MIME-Typ-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) zu vermeiden, indem er erklärt, dass die MIME-Typen absichtlich konfiguriert sind.

Dieser Header wurde von Microsoft in IE 8 eingeführt, um Webmastern die Möglichkeit zu geben, das Content-Sniffing zu blockieren, das Nicht-ausführbare MIME-Typen in ausführbare MIME-Typen umwandeln konnte. Seitdem haben auch andere Browser ihn eingeführt, selbst wenn ihre MIME-Sniffing-Algorithmen weniger aggressiv waren.

Ab Firefox 72 vermeiden auch Top-Level-Dokumente MIME-Sniffing (wenn {{HTTPHeader("Content-type")}} bereitgestellt wird). Dies kann dazu führen, dass HTML-Webseiten heruntergeladen anstatt gerendert werden, wenn sie mit einem anderen MIME-Typ als `text/html` bereitgestellt werden. Stellen Sie sicher, dass beide Header korrekt gesetzt sind.

Webseiten-Sicherheitstester erwarten normalerweise, dass dieser Header gesetzt ist.

> **Note:** `X-Content-Type-Options` gilt nur für die Anforderungsblockierung [aufgrund von `nosniff`](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff) für [Anforderungsziele](/de/docs/Web/API/Request/destination) vom Typ `"script"` und `"style"`. Es aktiviert jedoch auch den Schutz durch [Cross-Origin Read Blocking (CORB)](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md#determining-whether-a-response-is-corb_protected) für HTML-, TXT-, JSON- und XML-Dateien (ausgenommen SVG `image/svg+xml`).

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
  - : Blockiert eine Anforderung, wenn das Anforderungsziel vom Typ `style` ist und der MIME-Typ nicht `text/css` ist, oder vom Typ `script` und der MIME-Typ kein [JavaScript MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) ist.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

### Browserspezifische Hinweise

- Firefox 72 aktiviert `X-Content-Type-Options: nosniff` für Top-Level-Dokumente

## Siehe auch

- {{HTTPHeader("Content-Type")}}
- Die [Originaldefinition](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) von X-Content-Type-Options von Microsoft.
- Verwenden Sie [HTTP Observatory](/en-US/observatory), um die Sicherheitskonfiguration von Webseiten zu testen (einschließlich dieses Headers).
- [Vermeidung von MIME-Confusion-Angriffen in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Cross-Origin Read Blocking (CORB)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB-Erklärung](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)