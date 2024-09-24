---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTTPSidebar}}

Der **`X-Content-Type-Options`** HTTP-Antwortheader ist ein
Marker, der vom Server verwendet wird, um anzugeben, dass die [MIME-Typen](/de/docs/Web/HTTP/MIME_types), die in den
{{HTTPHeader("Content-Type")}}-Headern angegeben sind, befolgt werden sollen und nicht geändert werden dürfen. Der Header ermöglicht es, [MIME-Typ-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) zu vermeiden, indem angegeben wird, dass die MIME-Typen bewusst konfiguriert sind.

Dieser Header wurde von Microsoft in IE 8 eingeführt, um Webmastern die Möglichkeit zu geben, das Sniffing von Inhalten zu blockieren, das ausgeführt wurde und das nicht ausführbare MIME-Typen in ausführbare MIME-Typen umwandeln konnte. Seitdem haben auch andere Browser ihn eingeführt, obwohl ihre MIME-Sniffing-Algorithmen weniger aggressiv waren.

Ab Firefox 72 vermeiden auch Top-Level-Dokumente das MIME-Sniffing (sofern {{HTTPHeader("Content-type")}} bereitgestellt wird). Dies kann dazu führen, dass HTML-Webseiten heruntergeladen werden, anstatt gerendert zu werden, wenn sie mit einem anderen MIME-Typ als `text/html` bereitgestellt werden. Stellen Sie sicher, dass beide Header korrekt eingestellt sind.

In der Regel erwarten Sicherheitstester, dass dieser Header gesetzt ist.

> **Note:** `X-Content-Type-Options` gilt nur für das Blockieren von Anfragen [aufgrund von `nosniff`](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff) für [Anfrageziele](/de/docs/Web/API/Request/destination) des Typs `"script"` und `"style"`.
> Es [aktiviert jedoch auch Cross-Origin Read Blocking (CORB)](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md#determining-whether-a-response-is-corb_protected) Schutz für HTML-, TXT-, JSON- und XML-Dateien (ausgenommen SVG `image/svg+xml`).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Blockiert eine Anfrage, wenn das Anfrageziel vom Typ
    `style` ist und der MIME-Typ nicht `text/css` ist,
    oder vom Typ `script` ist und der MIME-Typ kein [JavaScript-MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Browser-spezifische Anmerkungen

- Firefox 72 aktiviert `X-Content-Type-Options: nosniff` für Top-Level-Dokumente

## Siehe auch

- {{HTTPHeader("Content-Type")}}
- Die [ursprüngliche Definition](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) von X-Content-Type-Options durch Microsoft.
- Verwenden Sie [HTTP Observatory](/en-US/observatory), um die Sicherheitskonfiguration von Websites (einschließlich dieses Headers) zu testen.
- [Minderung von MIME-Verwirrungsangriffen in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Cross-Origin Read Blocking (CORB)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB-Erklärung](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)
