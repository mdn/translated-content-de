---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{Non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Auch wenn dieses Feature Benutzer älterer Webbrowser, die {{Glossary("CSP", "CSP")}} nicht unterstützen, schützen kann, kann **`X-XSS-Protection` in einigen Fällen XSS-Schwachstellen** auf ansonsten sicheren Websites erzeugen.
> Weitere Informationen finden Sie im Abschnitt [Sicherheitsüberlegungen](#sicherheitsüberlegungen) unten.

Der HTTP **`X-XSS-Protection`** {{Glossary("response_header", "Antwortheader")}} war eine Funktion von Internet Explorer, Chrome und Safari, die das Laden von Seiten stoppte, wenn reflektierte Cross-Site-Scripting- ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe erkannt wurden.
Diese Schutzmaßnahmen sind in modernen Browsern weitgehend unnötig, wenn Websites eine starke {{HTTPHeader("Content-Security-Policy")}} implementieren, die die Verwendung von Inline-JavaScript (`'unsafe-inline'`) deaktiviert.

Es wird empfohlen, stattdessen [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) zu verwenden anstelle der XSS-Filterung.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Aktiviert die XSS-Filterung (normalerweise standardmäßig in Browsern). Wenn ein Cross-Site-Scripting-Angriff erkannt wird, saniert der Browser die Seite (entfernt die unsicheren Teile).
- `1; mode=block`
  - : Aktiviert die XSS-Filterung. Anstatt die Seite zu sanieren, verhindert der Browser das Rendern der Seite, wenn ein Angriff erkannt wird.
- `1; report=<reporting-URI>` (nur Chromium)
  - : Aktiviert die XSS-Filterung. Wenn ein Cross-Site-Scripting-Angriff erkannt wird, saniert der Browser die Seite und meldet den Verstoß. Dies nutzt die Funktionalität der CSP {{CSP("report-uri")}} Direktive, um einen Bericht zu senden.

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

Dieser Code ist vollkommen sicher, wenn der Browser keine XSS-Filterung durchführt. Wenn dies jedoch geschieht und die Suchanfrage `?something=%3Cscript%3Evar%20productionMode%20%3D%20true%3B%3C%2Fscript%3E` ist, könnte der Browser die Skripte auf der Seite ausführen, indem er `<script>var productionMode = true;</script>` ignoriert (da er denkt, der Server hätte es in die Antwort aufgenommen, weil es in der URI enthalten war), was dazu führt, dass `window.productionMode` auf `undefined` ausgewertet wird und der unsichere Debug-Code ausgeführt wird.

Das Setzen des `X-XSS-Protection` Headers auf entweder `0` oder `1; mode=block` verhindert Schwachstellen wie die oben beschriebene. Ersteres würde den Browser alle Skripte ausführen lassen und letzteres würde verhindern, dass die Seite überhaupt verarbeitet wird (obwohl dieser Ansatz anfällig für [Seitenkanalangriffe](https://portswigger.net/research/abusing-chromes-xss-auditor-to-steal-tokens) sein kann, wenn die Website in einem `<iframe>` eingebettet werden kann).

## Beispiel

Verhindern, dass Seiten geladen werden, wenn sie reflektierte XSS-Angriffe erkennen:

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

Teil keiner Spezifikationen oder Entwürfe.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [Steuerung des XSS-Filters – Microsoft](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/controlling-the-xss-filter)
- [Verständnis des XSS-Auditors – Virtue Security](https://www.virtuesecurity.com/understanding-xss-auditor/)
- [Der missverstandene X-XSS-Protection – blog.innerht.ml](https://web.archive.org/web/20230527023943/https://blog.innerht.ml/the-misunderstood-x-xss-protection/)
