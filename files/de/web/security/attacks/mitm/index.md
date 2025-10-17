---
title: Man-in-the-Middle (MITM)
slug: Web/Security/Attacks/MITM
l10n:
  sourceCommit: b07e3b87504a8984cf31d7a735ec373d33a11cd5
---

Bei einem Man-in-the-Middle (MITM)-Angriff schaltet sich der Angreifer zwischen zwei Einheiten, die versuchen, miteinander zu kommunizieren.

Im Web erfolgt ein MITM-Angriff in der Regel zwischen dem Browser des Benutzers und dem Server und ermöglicht es dem Angreifer, jeglichen über HTTP ausgetauschten Datenverkehr zu sehen und möglicherweise zu modifizieren.

Eine gängige Methode für einen Angreifer, einen MITM-Angriff durchzuführen, ist das Einrichten eines drahtlosen Zugangspunkts an einem öffentlichen Ort, wie einem Café oder einem Flughafen, und darauf zu warten, dass sich ein Opfer mit diesem verbindet. Wenn sich ein Opfer verbindet, kann der Angreifer alle Daten lesen und modifizieren, die zwischen dem Browser des Benutzers und den von ihm besuchten Websites ausgetauscht werden.

## Abwehrmaßnahmen gegen MITM

Die primäre Verteidigung gegen MITM besteht darin, Ihre Website über {{Glossary("HTTPS", "HTTPS")}} (HTTP über {{Glossary("TLS", "TLS")}}) bereitzustellen. HTTPS verhindert, dass ein Angreifer den Datenverkehr lesen oder auf vorhersehbare Weise modifizieren kann.

Sie sollten alle Seiten über HTTPS bereitstellen, nicht nur Seiten, die Sie als besonders sensibel betrachten.

### Verwenden Sie eine sichere TLS-Konfiguration

Um HTTPS zu unterstützen, benötigt eine Website ein TLS-Zertifikat. [Let's Encrypt](https://letsencrypt.org/) ist eine weit verbreitete gemeinnützige Zertifizierungsstelle, die kostenlose TLS-Zertifikate ausstellt.

Nicht alle TLS-Konfigurationen sind gleichermaßen sicher: Wenn Sie Ihren eigenen Server konfigurieren müssen, konsultieren Sie eine Ressource wie Mozillas [TLS Recommended Configurations](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations).

Moderne Webhosting-Dienste unterstützen HTTPS für Sie, entweder standardmäßig oder über eine Konfigurationseinstellung. In diesem Fall verwaltet der Hosting-Dienst wahrscheinlich Ihr Zertifikat und konfiguriert den Server in Ihrem Namen.

### Laden Sie Unterressourcen über HTTPS

Wenn eine Seite Ressourcen lädt (Skripte, Stylesheets, Schriftarten, Bilder usw.), sollten diese Ressourcen ebenfalls über HTTPS bereitgestellt werden. Wenn eine Seite über HTTPS geladen wird und versucht, Ressourcen über HTTP zu laden, wird der Browser entweder versuchen, die Ladeanforderung auf HTTPS umzustellen oder die Anforderung blockieren: Dies wird als [mixed content blocking](/de/docs/Web/Security/Mixed_content) bezeichnet.

Wenn es Ihnen nicht möglich ist, Ihren Code zu aktualisieren, um Ressourcen von HTTPS-URLs zu laden (zum Beispiel, weil Ihr HTML archiviert wurde), kann Ihr Server eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) einstellen, die die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests) Direktive enthält, und der Browser wird diese Anfragen automatisch auf HTTPS umstellen.

### Verwenden Sie HSTS beim Upgraden von HTTP-Anfragen

Selbst wenn Ihre Website nur über HTTPS bereitgestellt wird, können Benutzer sie dennoch über HTTP anfordern: Zum Beispiel, indem sie `http://example.org` in die Adressleiste eingeben. Um Ihre Website in solch einem Fall funktionsfähig zu machen, können Sie auf HTTP-Anfragen hören und mit einer [301 Moved Permanently](/de/docs/Web/HTTP/Reference/Status/301) Antwort auf die HTTPS-Version umleiten.

Dies gibt Angreifern jedoch die Möglichkeit, den anfänglichen Austausch abzufangen und dann das Upgrade auf HTTPS zu verhindern. Dies wird manchmal als _SSL-Stripping_-Angriff bezeichnet ({{Glossary("SSL", "SSL")}} ist der Vorgänger von TLS).

Um das Risiko dieses Angriffs zu verringern, sollte Ihr Server auch den {{httpheader("Strict-Transport-Security")}} HTTP-Antwortheader senden (auch bekannt als HSTS): Dies informiert die Clients, dass Sie HTTPS verwenden möchten, und wird den Browser dazu veranlassen, bei zukünftigen Besuchen direkt über HTTPS zu verbinden, auch bei Anfragen über HTTP-URLs.

Mit HSTS wird SSL-Stripping verhindert, außer beim ersten Mal, wenn der Browser versucht, sich mit Ihrer Website zu verbinden (oder, da HSTS ein Ablaufdatum hat, beim ersten Mal nach dem Ablauf eines HSTS-Eintrags im Browser). Um Ihre Website sogar bei der ersten Verbindung oder dem Ablauf eines HSTS-Eintrags zu schützen, pflegt Chrome eine Liste von Domains, die als [HSTS preload list](https://hstspreload.org/) bezeichnet wird: Wenn eine Domain auf dieser Liste steht, wird Chrome HTTP-Anfragen immer auf HTTPS umstellen, als ob der Server bereits den HSTS-Header gesendet hätte. Safari und Firefox haben ein ähnliches Verhalten und verwenden eine Liste, die von der Chrome-Liste abgeleitet ist.

## Zusammenfassende Checkliste zur Verteidigung

- Stellen Sie alle Seiten und Unterressourcen Ihrer Website über HTTPS bereit.
- Wenn Sie HTTP-Anfragen auf HTTPS umleiten möchten, verwenden Sie HSTS und ziehen Sie in Betracht, Ihre Website zur HSTS-Vorliste hinzuzufügen.

## Siehe auch

- [Let's Encrypt](https://letsencrypt.org/)
- [TLS Recommended Configurations](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)
- [HTTP Strict Transport Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
