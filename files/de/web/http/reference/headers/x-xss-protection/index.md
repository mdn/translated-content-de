---
title: X-XSS-Protection header
short-title: X-XSS-Protection
slug: Web/HTTP/Reference/Headers/X-XSS-Protection
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{Non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Auch wenn dieses Feature Benutzer älterer Webbrowser, die {{Glossary("CSP", "CSP")}} nicht unterstützen, schützen kann, kann **`X-XSS-Protection` in einigen Fällen XSS-Schwachstellen** in ansonsten sicheren Websites schaffen.
> Weitere Informationen finden Sie im Abschnitt [Sicherheitsüberlegungen](#sicherheitsüberlegungen) unten.

Der HTTP **`X-XSS-Protection`** {{Glossary("response_header", "Response-Header")}} war ein Feature von Internet Explorer, Chrome und Safari, das das Laden von Seiten stoppte, wenn reflektierte Cross-Site-Scripting- ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe erkannt wurden.
Diese Schutzmaßnahmen sind in modernen Browsern größtenteils unnötig, wenn Websites eine starke {{HTTPHeader("Content-Security-Policy")}} implementieren, die die Verwendung von Inline-JavaScript (`'unsafe-inline'`) deaktiviert.

Es wird empfohlen, anstelle der XSS-Filterung [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) zu verwenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

## Direktiven

- `0`
  - : Deaktiviert die XSS-Filterung.
- `1`
  - : Aktiviert die XSS-Filterung (in der Regel Standard in Browsern). Wenn ein Cross-Site-Scripting-Angriff erkannt wird, wird der Browser die Seite bereinigen (die unsicheren Teile entfernen).
- `1; mode=block`
  - : Aktiviert die XSS-Filterung. Anstatt die Seite zu bereinigen, wird der Browser das Rendern der Seite verhindern, wenn ein Angriff erkannt wird.
- `1; report=<reporting-URI>` (nur Chromium)
  - : Aktiviert die XSS-Filterung. Wenn ein Cross-Site-Scripting-Angriff erkannt wird, wird der Browser die Seite bereinigen und den Verstoß melden. Dies nutzt die Funktionalität der CSP-{{CSP("report-uri")}}-Direktive, um einen Bericht zu senden.

## Sicherheitsüberlegungen

### Schwachstellen verursacht durch XSS-Filterung

Betrachten Sie den folgenden Auszug von HTML-Code für eine Webseite:

```html
<script>
  var productionMode = true;
</script>
<!-- [...] -->
<script>
  if (!window.productionMode) {
    // Some vulnerable debug code
  }
</script>
```

Dieser Code ist völlig sicher, wenn der Browser keine XSS-Filterung durchführt. Wenn er es jedoch tut und die Suchanfrage `?something=%3Cscript%3Evar%20productionMode%20%3D%20true%3B%3C%2Fscript%3E` ist, könnte der Browser die Skripte auf der Seite ausführen und `<script>var productionMode = true;</script>` ignorieren (denkend, dass der Server es in die Antwort eingefügt hat, weil es in der URI war), was dazu führt, dass `window.productionMode` auf `undefined` ausgewertet wird und unsicherer Debug-Code ausgeführt wird.

Das Setzen des `X-XSS-Protection`-Headers auf entweder `0` oder `1; mode=block` verhindert Schwachstellen wie die oben beschriebene. Ersteres würde dazu führen, dass der Browser alle Skripte ausführt und Letzteres würde verhindern, dass die Seite überhaupt verarbeitet wird (obwohl dieser Ansatz anfällig für [Seitenkanalangriffe](https://portswigger.net/research/abusing-chromes-xss-auditor-to-steal-tokens) sein könnte, wenn die Website in einem `<iframe>` eingebettet werden kann).

## Beispiel

Blockieren Sie das Laden von Seiten, wenn reflektierte XSS-Angriffe erkannt werden:

```http
X-XSS-Protection: 1; mode=block
```

PHP

```php
header("X-XSS-Protection: 1; mode=block");
```

Apache (.htaccess)

```apacheconf
<IfModule mod_headers.c>
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

Nginx

```nginx
add_header "X-XSS-Protection" "1; mode=block";
```

## Spezifikationen

Nicht Teil von Spezifikationen oder Entwürfen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [Controlling the XSS Filter – Microsoft](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/controlling-the-xss-filter)
- [Understanding XSS Auditor – Virtue Security](https://www.virtuesecurity.com/understanding-xss-auditor/)
- [The misunderstood X-XSS-Protection – blog.innerht.ml](https://web.archive.org/web/20230527023943/https://blog.innerht.ml/the-misunderstood-x-xss-protection/)
