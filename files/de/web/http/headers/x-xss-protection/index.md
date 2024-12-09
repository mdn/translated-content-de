---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}{{Non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Auch wenn dieses Feature Benutzer älterer Webbrowser schützen kann, die {{Glossary("CSP", "CSP")}} nicht unterstützen, kann **`X-XSS-Protection` in manchen Fällen XSS-Schwachstellen** auf ansonsten sicheren Webseiten erzeugen.
> Weitere Informationen finden Sie im Abschnitt [Sicherheitsüberlegungen](#sicherheitsüberlegungen) weiter unten.

Der HTTP-**`X-XSS-Protection`**-{{Glossary("response_header", "Response-Header")}} war eine Funktion von Internet Explorer, Chrome und Safari, die verhinderte, dass Seiten geladen wurden, wenn reflektierte Cross-Site-Scripting-Angriffe ({{Glossary("Cross-site_scripting", "XSS")}}) erkannt wurden.
Diese Schutzmaßnahmen sind in modernen Browsern weitgehend überflüssig, wenn Websites eine starke {{HTTPHeader("Content-Security-Policy")}} implementieren, die die Verwendung von inline JavaScript (`'unsafe-inline'`) deaktiviert.

Es wird empfohlen, anstelle des XSS-Filters [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) zu verwenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Aktiviert die XSS-Filterung (in der Regel Standard in Browsern). Wenn ein Cross-Site-Scripting-Angriff erkannt wird, bereinigt der Browser die Seite (entfernt die unsicheren Teile).
- `1; mode=block`
  - : Aktiviert die XSS-Filterung. Anstatt die Seite zu bereinigen, verhindert der Browser die Anzeige der Seite, wenn ein Angriff erkannt wird.
- `1; report=<reporting-URI>` (nur Chromium)
  - : Aktiviert die XSS-Filterung. Wenn ein Cross-Site-Scripting-Angriff erkannt wird, bereinigt der Browser die Seite und meldet den Verstoß. Dies nutzt die Funktionalität der CSP-{{CSP("report-uri")}}-Direktive, um einen Bericht zu senden.

## Sicherheitsüberlegungen

### Durch XSS-Filterung verursachte Schwachstellen

Betrachten Sie den folgenden Ausschnitt von HTML-Code für eine Webseite:

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

Dieser Code ist völlig sicher, wenn der Browser keine XSS-Filterung durchführt. Wenn dies jedoch der Fall ist und die Suchanfrage `?something=%3Cscript%3Evar%20productionMode%20%3D%20true%3B%3C%2Fscript%3E` lautet, könnte der Browser die Skripte auf der Seite ausführen, wobei er `<script>var productionMode = true;</script>` ignoriert (weil er denkt, der Server hat es aufgrund der URI in die Antwort eingefügt), wodurch `window.productionMode` auf `undefined` gesetzt wird und der unsichere Debug-Code ausgeführt wird.

Das Setzen des `X-XSS-Protection`-Headers auf entweder `0` oder `1; mode=block` verhindert Schwachstellen wie die oben beschriebene. Ersteres würde den Browser alle Skripte ausführen lassen, während letzteres verhindern würde, dass die Seite überhaupt verarbeitet wird (obwohl dieser Ansatz anfällig für [Seitenkanalangriffe](https://portswigger.net/research/abusing-chromes-xss-auditor-to-steal-tokens) sein könnte, wenn die Website in einem `<iframe>` eingebettet werden kann).

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
- [Controlling the XSS Filter – Microsoft](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/controlling-the-xss-filter)
- [Understanding XSS Auditor – Virtue Security](https://www.virtuesecurity.com/understanding-xss-auditor/)
- [The misunderstood X-XSS-Protection – blog.innerht.ml](https://web.archive.org/web/20230527023943/https://blog.innerht.ml/the-misunderstood-x-xss-protection/)
