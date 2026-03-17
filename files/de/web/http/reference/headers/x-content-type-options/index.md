---
title: X-Content-Type-Options header
short-title: X-Content-Type-Options
slug: Web/HTTP/Reference/Headers/X-Content-Type-Options
l10n:
  sourceCommit: e20c8ff4a722842bf3a09b3e0536dd140be5f629
---

Der HTTP **`X-Content-Type-Options`** {{Glossary("response_header", "Antwort-Header")}} gibt an, dass die in den {{HTTPHeader("Content-Type")}}-Headern angegebenen [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) respektiert und nicht geändert werden sollten. Der Header ermöglicht es Ihnen, [MIME-Typ-Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) zu vermeiden, indem angegeben wird, dass die MIME-Typen absichtlich konfiguriert sind.

Sicherheitstester von Webseiten erwarten normalerweise, dass dieser Header gesetzt ist (und dass der `Content-Type`-Header für alle Ressourcen korrekt gesetzt ist).

Die `nosniff`-Direktive hat je nach Kontext zwei Auswirkungen:

- **Anfrageblockierung**: Bei Anfragen mit einem [Ziel](/de/docs/Web/API/Request/destination) von `"script"` oder `"style"` blockiert der Browser die Antwort, wenn der MIME-Typ nicht dem erwarteten Typ entspricht (ein [JavaScript MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) für Skripte oder `text/css` für Stylesheets). Weitere Details finden Sie in der [Fetch-Spezifikation](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff).
- **MIME-Typ-Sniffing deaktiviert**: Für andere Antworttypen, einschließlich Navigationen zu einem neuen HTML-Dokument, verwendet der Browser den bereitgestellten {{HTTPHeader("Content-Type")}} unverändert, anstatt den Inhalt zu untersuchen, um den Typ zu ermitteln. Beispielsweise, wenn ein Server eine Antwort mit `Content-Type: text/plain` und `X-Content-Type-Options: nosniff` sendet, wird der Browser sie nicht als HTML interpretieren, selbst wenn der Inhalt HTML-Markup enthält. Dies verhindert [XSS-Angriffe](/de/docs/Web/Security/Attacks/XSS), bei denen vom Benutzer hochgeladene Inhalte als HTML-Dokument ausgeführt werden, selbst wenn der Browser angegeben hat, dass sie als reiner Text (oder ein anderer Typ) behandelt werden sollten. Weitere Details finden Sie in der [MIME Sniffing Spezifikation](https://mimesniff.spec.whatwg.org/#mime-type-sniffing-algorithm).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Antwort-Header-Name")}}</th>
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
  - : Blockiert eine Anfrage, wenn das Anfrageziel vom Typ `style` ist und der MIME-Typ nicht `text/css` ist, oder vom Typ `script` ist und der MIME-Typ nicht ein [JavaScript MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) ist.

    Es verhindert auch das MIME-Typ-Sniffing für alle anderen Antworttypen, indem der Browser den deklarierten {{HTTPHeader("Content-Type")}} verwendet, ohne den Antwortinhalt zu prüfen. Insbesondere verhindert es, dass ein Browser eine Antwort als `text/html` behandelt, wenn sie in einem Browserkontext geladen wird und der `Content-Type`-Header fehlt oder einen nicht-HTML-Typ angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Type")}}
- Die [ursprüngliche Definition](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) von X-Content-Type-Options durch Microsoft.
- Verwenden Sie [HTTP Observatory](/en-US/observatory), um die Sicherheitskonfiguration von Webseiten (einschließlich dieses Headers) zu testen.
- [Abschwächung von MIME-Verwirrungs-Angriffen in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
