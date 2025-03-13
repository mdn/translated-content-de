---
title: X-XSS-Protection
slug: Web/HTTP/Reference/Headers/X-XSS-Protection
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{Non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Obwohl diese Funktion Benutzer älterer Webbrowser schützen kann, die {{Glossary("CSP", "CSP")}} nicht unterstützen, kann `X-XSS-Protection` in einigen Fällen **XSS-Schwachstellen** in ansonsten sicheren Websites erzeugen.
> Siehe den Abschnitt [Sicherheitsüberlegungen](#sicherheitsüberlegungen) unten für weitere Informationen.

Der HTTP **`X-XSS-Protection`** {{Glossary("response_header", "Antwortheader")}} war eine Funktion von Internet Explorer, Chrome und Safari, die Seiten am Laden hinderte, wenn reflektierte Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe erkannt wurden.
Diese Schutzmaßnahmen sind in modernen Browsern weitgehend überflüssig, wenn Websites eine starke {{HTTPHeader("Content-Security-Policy")}} implementieren, die die Verwendung von inline JavaScript (`'unsafe-inline'`) deaktiviert.

Es wird empfohlen, anstelle der XSS-Filterung die [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) zu verwenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

## Direktiven

- `0`
  - : Deaktiviert die XSS-Filterung.
- `1`
  - : Aktiviert die XSS-Filterung (normalerweise Standard in Browsern). Wenn ein Cross-Site-Scripting-Angriff erkannt wird, wird der Browser die Seite bereinigen (die unsicheren Teile entfernen).
- `1; mode=block`
  - : Aktiviert die XSS-Filterung. Anstatt die Seite zu bereinigen, wird der Browser das Rendern der Seite verhindern, wenn ein Angriff erkannt wird.
- `1; report=<reporting-URI>` (nur Chromium)
  - : Aktiviert die XSS-Filterung. Wenn ein Cross-Site-Scripting-Angriff erkannt wird, wird der Browser die Seite bereinigen und den Verstoß melden. Dies verwendet die Funktionalität der CSP {{CSP("report-uri")}} Direktive, um einen Bericht zu senden.

## Sicherheitsüberlegungen

### Durch XSS-Filterung verursachte Schwachstellen

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

Dieser Code ist völlig sicher, wenn der Browser keine XSS-Filterung durchführt. Wenn er es jedoch tut und die Suchanfrage `?something=%3Cscript%3Evar%20productionMode%20%3D%20true%3B%3C%2Fscript%3E` lautet, könnte der Browser die Skripte auf der Seite ausführen und dabei `<script>var productionMode = true;</script>` ignorieren (im Glauben, der Server habe es in die Antwort eingefügt, weil es in der URI war), wodurch `window.productionMode` als `undefined` bewertet wird und der unsichere Debug-Code ausgeführt wird.

Das Setzen des Headers `X-XSS-Protection` auf entweder `0` oder `1; mode=block` verhindert Schwachstellen wie die oben beschriebene. Ersteres würde den Browser alle Skripte ausführen lassen, und Letzteres würde verhindern, dass die Seite überhaupt verarbeitet wird (obwohl dieser Ansatz anfällig sein könnte für [Seitenkanalangriffe](https://portswigger.net/research/abusing-chromes-xss-auditor-to-steal-tokens), wenn die Website in einem `<iframe>` eingebettet werden kann).

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

Kein Teil von Spezifikationen oder Entwürfen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [Controlling the XSS Filter – Microsoft](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/controlling-the-xss-filter)
- [Understanding XSS Auditor – Virtue Security](https://www.virtuesecurity.com/understanding-xss-auditor/)
- [The misunderstood X-XSS-Protection – blog.innerht.ml](https://web.archive.org/web/20230527023943/https://blog.innerht.ml/the-misunderstood-x-xss-protection/)
