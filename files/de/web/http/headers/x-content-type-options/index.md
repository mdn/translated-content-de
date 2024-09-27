---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`X-Content-Type-Options`** HTTP-Header der Antwort ist ein Marker, der vom Server verwendet wird, um anzuzeigen, dass die im {{HTTPHeader("Content-Type")}}-Header angegebenen [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) befolgt und nicht geändert werden sollten. Der Header ermöglicht es, [MIME-Typ-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) zu vermeiden, indem er sagt, dass die MIME-Typen absichtlich konfiguriert sind.

Dieser Header wurde von Microsoft in IE 8 eingeführt, um Webmastern die Möglichkeit zu geben, Content-Sniffing zu blockieren, das nicht-ausführbare MIME-Typen in ausführbare umwandeln konnte. Seitdem haben andere Browser ihn übernommen, auch wenn ihre MIME-Sniffing-Algorithmen weniger aggressiv waren.

Ab Firefox 72 vermeiden auch Top-Level-Dokumente MIME-Sniffing (wenn {{HTTPHeader("Content-type")}} angegeben ist). Dies kann dazu führen, dass HTML-Webseiten heruntergeladen statt gerendert werden, wenn sie mit einem anderen MIME-Typ als `text/html` geliefert werden. Stellen Sie sicher, beide Header korrekt einzustellen.

Sicherheitstester von Websites erwarten in der Regel, dass dieser Header gesetzt ist.

> **Note:** `X-Content-Type-Options` gilt nur für Anfragen, die [aufgrund von `nosniff` blockiert werden](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff) für [Anfrageziele](/de/docs/Web/API/Request/destination) von `"script"` und `"style"`.
> Darüber hinaus aktiviert es auch den [Cross-Origin Read Blocking (CORB)](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md#determining-whether-a-response-is-corb_protected)-Schutz für HTML-, TXT-, JSON- und XML-Dateien (mit Ausnahme von SVG `image/svg+xml`).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Response-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Content-Type-Options: nosniff
```

## Direktiven

- `nosniff`
  - : Blockiert eine Anfrage, wenn das Antragsziel vom Typ `style` ist und der MIME-Typ nicht `text/css` ist, oder vom Typ `script` und der MIME-Typ kein [JavaScript MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Browser-spezifische Hinweise

- Firefox 72 aktiviert `X-Content-Type-Options: nosniff` für Top-Level-Dokumente

## Siehe auch

- {{HTTPHeader("Content-Type")}}
- Die [ursprüngliche Definition](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) von X-Content-Type-Options durch Microsoft.
- Verwenden Sie das [HTTP Observatory](/en-US/observatory), um die Sicherheitskonfiguration von Websites (einschließlich dieses Headers) zu testen.
- [Minderung von MIME-Verwirrungsangriffen in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Cross-Origin Read Blocking (CORB)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB-Erklärung](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)
