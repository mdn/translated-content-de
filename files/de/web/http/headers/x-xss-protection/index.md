---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}{{Non-standard_header}}

Der HTTP **`X-XSS-Protection`** Antwort-Header war eine Funktion von Internet Explorer, Chrome und Safari, die das Laden von Seiten stoppte, wenn reflektierte Cross-Site-Scripting ([XSS](/de/docs/Glossary/Cross-site_scripting)) Angriffe erkannt wurden. Diese Schutzmaßnahmen sind in modernen Browsern größtenteils unnötig, wenn Websites eine starke {{HTTPHeader("Content-Security-Policy")}} implementieren, die die Verwendung von Inline-JavaScript (`'unsafe-inline'`) deaktiviert.

> [!WARNING]
> Obwohl dieses Feature Benutzer älterer Webbrowser schützen kann, die noch keine [CSP](/de/docs/Glossary/CSP) unterstützen, kann in einigen Fällen **der XSS-Schutz XSS-Schwachstellen** auf ansonsten sicheren Websites erzeugen. Siehe den Abschnitt unten für weitere Informationen.

> [!NOTE]
>
> - Chrome hat [seinen XSS Auditor entfernt](https://chromestatus.com/feature/5021976655560704)
> - Firefox hat nicht, und [wird `X-XSS-Protection` nicht implementieren](https://bugzil.la/528661)
> - Edge hat [seinen XSS-Filter zurückgezogen](https://blogs.windows.com/windows-insider/2018/07/25/announcing-windows-10-insider-preview-build-17723-and-build-18204/)
>
> Das bedeutet, wenn Sie keine Unterstützung für ältere Browser benötigen, wird empfohlen, [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) zu verwenden, ohne `unsafe-inline` Skripte zuzulassen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

- 0
  - : Deaktiviert XSS-Filterung.
- 1
  - : Aktiviert XSS-Filterung (meistens Standard in Browsern). Wenn ein Cross-Site-Scripting-Angriff erkannt wird, wird der Browser die Seite bereinigen (die unsicheren Teile entfernen).
- 1; mode=block
  - : Aktiviert XSS-Filterung. Anstatt die Seite zu bereinigen, wird der Browser die Darstellung der Seite verhindern, wenn ein Angriff erkannt wird.
- 1; report=\<reporting-URI> (nur Chromium)
  - : Aktiviert XSS-Filterung. Wenn ein Cross-Site-Scripting-Angriff erkannt wird, wird der Browser die Seite bereinigen und den Verstoß melden. Dies nutzt die Funktionalität der CSP {{CSP("report-uri")}} Direktive, um einen Bericht zu senden.

## Durch XSS-Filterung verursachte Schwachstellen

Betrachten Sie das folgende HTML-Codebeispiel für eine Webseite:

Dieser Code ist völlig sicher, wenn der Browser keine XSS-Filterung durchführt. Wenn jedoch eine Filterung erfolgt und die Suchanfrage `?something=%3Cscript%3Evar%20productionMode%20%3D%20true%3B%3C%2Fscript%3E` ist, könnte der Browser die Skripte auf der Seite ausführen und dabei `<script>var productionMode = true;</script>` ignorieren (denkenderweise, dass der Server dies in die Antwort aufgenommen hat, weil es in der URI war), was dazu führt, dass `window.productionMode` auf `undefined` gesetzt wird und unsicherer Debug-Code ausgeführt wird.

Das Setzen des `X-XSS-Protection` Headers auf entweder `0` oder `1; mode=block` verhindert Schwachstellen wie die oben beschriebene. Ersteres würde den Browser alle Skripte ausführen lassen und letzteres würde die Verarbeitung der Seite komplett verhindern (obwohl dieser Ansatz anfällig für [Seitenkanal-Angriffe](https://portswigger.net/research/abusing-chromes-xss-auditor-to-steal-tokens) sein könnte, wenn die Website in einem `<iframe>` eingebettet werden kann).

## Beispiel

Blockieren Sie Seiten am Laden, wenn reflektierte XSS-Angriffe erkannt werden:

PHP

Apache (.htaccess)

Nginx

## Spezifikationen

Nicht Teil von Spezifikationen oder Entwürfen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [Controlling the XSS Filter – Microsoft](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/controlling-the-xss-filter)
- [Understanding XSS Auditor – Virtue Security](https://www.virtuesecurity.com/understanding-xss-auditor/)
- [The misunderstood X-XSS-Protection – blog.innerht.ml](https://web.archive.org/web/20230527023943/https://blog.innerht.ml/the-misunderstood-x-xss-protection/)
