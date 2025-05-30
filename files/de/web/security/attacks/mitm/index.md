---
title: Man-in-the-Middle (MITM)
slug: Web/Security/Attacks/MITM
l10n:
  sourceCommit: 3a85d6936bfd1caec0727291cbfb65e3f7e70c4a
---

Bei einem Man-in-the-Middle-Angriff (MITM) schaltet sich der Angreifer zwischen zwei Entitäten, die versuchen, miteinander zu kommunizieren.

Im Web erfolgt ein MITM-Angriff im Allgemeinen zwischen dem Browser des Benutzers und dem Server und ermöglicht dem Angreifer, den gesamten über HTTP ausgetauschten Datenverkehr einzusehen und möglicherweise zu modifizieren.

Ein häufiger Weg für einen Angreifer, einen MITM-Angriff auszuführen, besteht darin, einen drahtlosen Zugangspunkt an einem öffentlichen Ort wie einem Café oder einem Flughafen einzurichten und darauf zu warten, dass sich ein Opfer damit verbindet. Wenn sich ein Opfer verbindet, kann der Angreifer alle zwischen dem Browser des Nutzers und den von ihm besuchten Seiten ausgetauschten Daten lesen und modifizieren.

## Abwehrmaßnahmen gegen MITM

Die primäre Abwehr gegen MITM besteht darin, Ihre Website über {{Glossary("HTTPS", "HTTPS")}} (HTTP über {{Glossary("TLS", "TLS")}}) bereitzustellen. HTTPS verhindert, dass ein Angreifer den Datenverkehr lesen oder ihn auf vorhersehbare Weise modifizieren kann.

Sie sollten alle Seiten über HTTPS bereitstellen, nicht nur die Seiten, die Sie als besonders sensibel erachten.

### Verwenden Sie eine sichere TLS-Konfiguration

Um HTTPS zu unterstützen, benötigt eine Website ein TLS-Zertifikat. [Let's Encrypt](https://letsencrypt.org/) ist eine weit verbreitete gemeinnützige Zertifizierungsstelle, die kostenlose TLS-Zertifikate ausstellt.

Nicht alle TLS-Konfigurationen sind gleichermaßen sicher: Wenn Sie Ihren eigenen Server konfigurieren müssen, konsultieren Sie eine Ressource wie Mozillas [TLS empfohlene Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations).

Moderne Webhosting-Dienste unterstützen HTTPS für Sie, entweder standardmäßig oder durch eine Konfigurationseinstellung. In diesem Fall wird der Hosting-Dienst wahrscheinlich Ihr Zertifikat verwalten und den Server in Ihrem Namen konfigurieren.

### Laden Sie Subressourcen über HTTPS

Wenn eine Seite Ressourcen (Skripte, Stylesheets, Schriftarten, Bilder usw.) lädt, sollten diese Ressourcen ebenfalls über HTTPS bereitgestellt werden. Wenn eine Seite über HTTPS geladen wird und versucht, Ressourcen über HTTP zu laden, wird der Browser entweder versuchen, die Ladeanforderung auf HTTPS zu aktualisieren oder die Anfrage blockieren: dies wird als [gemischter Inhaltsblock](/de/docs/Web/Security/Mixed_content) bezeichnet.

Wenn es Ihnen nicht möglich ist, Ihren Code zu aktualisieren, um Ressourcen von HTTPS-URLs zu laden (z.B. weil Ihr HTML archiviert wurde), kann Ihr Server eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) einstellen, die die Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests) enthält, und der Browser wird diese Anfragen automatisch auf HTTPS aktualisieren.

### Verwenden Sie HSTS bei der Aktualisierung von HTTP-Anfragen

Auch wenn Ihre Seite nur über HTTPS bereitgestellt wird, können Benutzer sie trotzdem über HTTP anfordern: zum Beispiel, indem sie `http://example.org` in die Adressleiste eingeben. Um Ihre Seite in solchen Fällen funktionsfähig zu machen, können Sie auf HTTP-Anfragen lauschen und eine [301 Moved Permanently](/de/docs/Web/HTTP/Reference/Status/301)-Antwort verwenden, um zur HTTPS-Version weiterzuleiten.

Dies gibt Angreifern jedoch die Möglichkeit, den Erstkontakt abzufangen und zu verhindern, dass das Upgrade auf HTTPS stattfindet. Dies wird manchmal als _SSL-Stripping-Angriff_ bezeichnet ({{Glossary("SSL", "SSL")}} ist der Vorgänger von TLS).

Um das Risiko dieses Angriffs zu verringern, sollte Ihr Server auch den {{httpheader("Strict-Transport-Security")}} HTTP-Antwort-Header senden (auch bekannt als HSTS): dies informiert die Clients darüber, dass Sie möchten, dass sie HTTPS verwenden, und führt dazu, dass der Browser bei nachfolgenden Besuchen, selbst bei Anfragen über HTTP-URLs, direkt über HTTPS verbindet.

Mit HSTS wird SSL Stripping verhindert, außer beim ersten Versuch des Browsers, sich mit Ihrer Seite zu verbinden (oder, da HSTS ein Ablaufdatum hat, beim ersten Versuch nach dem Ablauf eines HSTS-Datensatzes im Browser). Um Ihre Seite auch bei der ersten Verbindung oder beim Ablauf eines HSTS-Datensatzes zu schützen, pflegt Chrome eine Liste von Domains, die als [HSTS-Preload-Liste](https://hstspreload.org/) bezeichnet wird: Wenn eine Domain auf dieser Liste steht, wird Chrome HTTP-Anfragen immer auf HTTPS aktualisieren, was im Wesentlichen dem Verhalten entspricht, als hätte der Server bereits den HSTS-Header gesendet. Safari und Firefox verhalten sich ähnlich und verwenden eine Liste, die von der Chrome-Liste abgeleitet ist.

### Zusammenfassung der Abwehrmaßnahmen

- Stellen Sie alle Seiten und Subressourcen Ihrer Website über HTTPS bereit.
- Wenn Sie HTTP-Anfragen auf HTTPS umleiten möchten, verwenden Sie HSTS und ziehen Sie in Betracht, Ihre Website zur HSTS-Preload-Liste hinzuzufügen.

## Siehe auch

- [Let's Encrypt](https://letsencrypt.org/)
- [TLS empfohlene Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)
- [HTTP Strict Transport Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
