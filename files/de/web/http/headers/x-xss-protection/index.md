---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}{{Non-standard_header}}

Der HTTP-Header **`X-XSS-Protection`** war eine Funktion von Internet Explorer, Chrome und Safari, die das Laden von Seiten stoppte, wenn reflektierte Cross-Site-Scripting-Angriffe ({{Glossary("Cross-site_scripting", "XSS")}}) erkannt wurden. Diese Schutzmaßnahmen sind in modernen Browsern weitgehend unnötig, wenn Websites eine starke {{HTTPHeader("Content-Security-Policy")}} implementieren, die die Verwendung von inline JavaScript (`'unsafe-inline'`) deaktiviert.

> [!WARNING]
> Obwohl diese Funktion Benutzer älterer Webbrowser, die noch keine Unterstützung für {{Glossary("CSP", "CSP")}} haben, schützen kann, kann der XSS-Schutz in einigen Fällen **XSS-Schwachstellen** in ansonsten sicheren Websites erzeugen. Weitere Informationen finden Sie im Abschnitt unten.

> [!NOTE]
>
> - Chrome hat den [XSS Auditor entfernt](https://chromestatus.com/feature/5021976655560704)
> - Firefox hat ihn nicht und wird [auch nicht `X-XSS-Protection` implementieren](https://bugzil.la/528661)
> - Edge hat ihren [XSS-Filter eingestellt](https://blogs.windows.com/windows-insider/2018/07/25/announcing-windows-10-insider-preview-build-17723-and-build-18204/)
>
> Das bedeutet, wenn Sie keine Unterstützung für veraltete Browser benötigen, wird empfohlen, [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) ohne zulässige `unsafe-inline`-Skripte zu verwenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response Header")}}</td>
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

- 0
  - : Deaktiviert das XSS-Filtering.
- 1
  - : Aktiviert das XSS-Filtering (in der Regel in Browsern standardmäßig). Wenn ein Cross-Site-Scripting-Angriff erkannt wird, wird der Browser die Seite bereinigen (die unsicheren Teile entfernen).
- 1; mode=block
  - : Aktiviert das XSS-Filtering. Anstatt die Seite zu bereinigen, wird der Browser das Rendern der Seite verhindern, wenn ein Angriff erkannt wird.
- 1; report=\<reporting-URI> (nur Chromium)
  - : Aktiviert das XSS-Filtering. Wenn ein Cross-Site-Scripting-Angriff erkannt wird, bereinigt der Browser die Seite und meldet den Verstoß. Dies nutzt die Funktionalität der CSP {{CSP("report-uri")}}-Direktive, um einen Bericht zu senden.

## Schwachstellen verursacht durch XSS-Filtering

Betrachten Sie das folgende Beispiel von HTML-Code für eine Webseite:

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

Dieser Code ist völlig sicher, wenn der Browser kein XSS-Filtering durchführt. Führt er es jedoch aus und die Suchabfrage ist `?something=%3Cscript%3Evar%20productionMode%20%3D%20true%3B%3C%2Fscript%3E`, könnte der Browser die Skripte auf der Seite ausführen und `<script>var productionMode = true;</script>` ignorieren (in der Annahme, der Server habe es in die Antwort eingefügt, weil es in der URI war), wodurch `window.productionMode` als `undefined` ausgewertet wird und unsicherer Debug-Code ausgeführt wird.

Das Setzen des `X-XSS-Protection` Headers auf entweder `0` oder `1; mode=block` verhindert Schwachstellen wie die oben beschriebene. Ersteres würde den Browser alle Skripte ausführen lassen, und letzteres würde verhindern, dass die Seite überhaupt verarbeitet wird (obwohl dieser Ansatz anfällig für [Seitenkanalangriffe](https://portswigger.net/research/abusing-chromes-xss-auditor-to-steal-tokens) sein könnte, sofern die Website in einem `<iframe>` eingebettet werden kann).

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
