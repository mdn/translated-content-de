---
title: X-XSS-Schutz
slug: Web/HTTP/Headers/X-XSS-Protection
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}{{Non-standard_header}}

Der HTTP **`X-XSS-Protection`** Antwort-Header war eine Funktion von Internet Explorer, Chrome und Safari, die verhinderte, dass Seiten geladen werden, wenn reflektierte Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe erkannt wurden. Diese Schutzmaßnahmen sind in modernen Browsern weitgehend überflüssig, wenn Websites eine starke {{HTTPHeader("Content-Security-Policy")}} implementieren, die die Verwendung von inline JavaScript (`'unsafe-inline'`) deaktiviert.

> [!WARNING]
> Auch wenn diese Funktion Benutzer älterer Webbrowser, die noch keine {{Glossary("CSP")}} unterstützen, schützen kann, kann der XSS-Schutz in einigen Fällen **XSS-Sicherheitslücken** in ansonsten sicheren Websites erzeugen. Weitere Informationen finden Sie im Abschnitt unten.

> [!NOTE]
>
> - Chrome hat [ihren XSS Auditor entfernt](https://chromestatus.com/feature/5021976655560704)
> - Firefox hat nicht und [wird `X-XSS-Protection` nicht implementieren](https://bugzil.la/528661)
> - Edge hat [ihren XSS-Filter abgeschafft](https://blogs.windows.com/windows-insider/2018/07/25/announcing-windows-10-insider-preview-build-17723-and-build-18204/)
>
> Das bedeutet, dass, wenn Sie keine älteren Browser unterstützen müssen, empfohlen wird, dass Sie [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) verwenden, ohne die Ausführung von `unsafe-inline`-Skripten zu erlauben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Verbotener Header-Name")}}</th>
      <td>no</td>
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
  - : Aktiviert das XSS-Filtering (in der Regel Standard in Browsern). Wenn ein Cross-Site-Scripting-Angriff erkannt wird, bereinigt der Browser die Seite (entfernt die unsicheren Teile).
- 1; mode=block
  - : Aktiviert das XSS-Filtering. Anstatt die Seite zu bereinigen, verhindert der Browser das Rendern der Seite, wenn ein Angriff erkannt wird.
- 1; report=\<reporting-URI> (nur Chromium)
  - : Aktiviert das XSS-Filtering. Wenn ein Cross-Site-Scripting-Angriff erkannt wird, bereinigt der Browser die Seite und meldet den Verstoß. Dies nutzt die Funktionalität der CSP {{CSP("report-uri")}} Direktive, um einen Bericht zu senden.

## Durch XSS-Filtering verursachte Sicherheitslücken

Betrachten Sie den folgenden Auszug aus HTML-Code für eine Webseite:

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

Dieser Code ist völlig sicher, wenn der Browser kein XSS-Filtering durchführt. Wenn er es jedoch tut und die Suchabfrage `?something=%3Cscript%3Evar%20productionMode%20%3D%20true%3B%3C%2Fscript%3E` lautet, könnte der Browser die Skripte auf der Seite ausführen und `<script>var productionMode = true;</script>` ignorieren (in der Annahme, dass der Server es in die Antwort eingefügt hat, weil es in der URI war), was dazu führt, dass `window.productionMode` auf `undefined` ausgewertet wird und der unsichere Debug-Code ausgeführt wird.

Das Setzen des `X-XSS-Protection` Headers auf entweder `0` oder `1; mode=block` verhindert Sicherheitslücken wie die oben beschriebene. Ersteres würde den Browser alle Skripte ausführen lassen, während Letzteres verhindern würde, dass die Seite überhaupt verarbeitet wird (obwohl dieser Ansatz anfällig für [Seitenkanalangriffe](https://portswigger.net/research/abusing-chromes-xss-auditor-to-steal-tokens) sein könnte, wenn die Website in einem `<iframe>` eingebettet werden kann).

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
- [Steuerung des XSS-Filters – Microsoft](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/controlling-the-xss-filter)
- [Verständnis des XSS-Auditors – Virtue Security](https://www.virtuesecurity.com/understanding-xss-auditor/)
- [Der missverstandene X-XSS-Schutz – blog.innerht.ml](https://web.archive.org/web/20230527023943/https://blog.innerht.ml/the-misunderstood-x-xss-protection/)
