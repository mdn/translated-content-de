---
title: Manipulator in the Middle (MITM)
slug: Web/Security/Attacks/MITM
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Bei einem Manipulator in the Middle (MITM)-Angriff schaltet sich der Angreifer zwischen zwei Einheiten, die versuchen, miteinander zu kommunizieren.

Im Web findet ein MITM-Angriff in der Regel zwischen dem Browser des Benutzers und dem Server statt und ermöglicht es dem Angreifer, den gesamten über HTTP ausgetauschten Datenverkehr zu sehen und möglicherweise zu modifizieren.

Eine übliche Methode für einen Angreifer, einen MITM-Angriff auszuführen, besteht darin, einen drahtlosen Zugangspunkt an einem öffentlichen Ort, wie einem Café oder einem Flughafen, einzurichten und darauf zu warten, dass ein Opfer sich damit verbindet. Wenn sich ein Opfer verbindet, kann der Angreifer alle zwischen dem Browser des Benutzers und den von ihm besuchten Websites ausgetauschten Daten lesen und modifizieren.

## Abwehrmaßnahmen gegen MITM

Die primäre Abwehrmaßnahme gegen MITM besteht darin, Ihre Website über {{Glossary("HTTPS", "HTTPS")}} (HTTP über {{Glossary("TLS", "TLS")}}) bereitzustellen. HTTPS verhindert, dass ein Angreifer den Datenverkehr lesen oder in vorhersagbarer Weise modifizieren kann.

Sie sollten alle Seiten über HTTPS bereitstellen, nicht nur die Seiten, die Sie für besonders sensibel halten.

### Verwenden Sie eine sichere TLS-Konfiguration

Um HTTPS zu unterstützen, benötigt eine Website ein TLS-Zertifikat. [Let's Encrypt](https://letsencrypt.org/) ist eine weit verbreitete gemeinnützige Zertifizierungsstelle, die kostenlose TLS-Zertifikate ausstellt.

Nicht alle TLS-Konfigurationen sind gleichermaßen sicher: Wenn Sie Ihren eigenen Server konfigurieren müssen, konsultieren Sie eine Ressource wie Mozillas [TLS Recommended Configurations](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations).

Moderne Webhosting-Dienste unterstützen HTTPS für Sie, entweder standardmäßig oder durch eine Konfigurationseinstellung. In diesem Fall wird wahrscheinlich der Hosting-Dienst Ihr Zertifikat verwalten und den Server in Ihrem Namen konfigurieren.

### Laden Sie Subressourcen über HTTPS

Wenn eine Seite Ressourcen (Skripte, Stylesheets, Schriftarten, Bilder usw.) lädt, sollten diese Ressourcen ebenfalls über HTTPS bereitgestellt werden. Wenn eine Seite über HTTPS geladen wird und versucht, Ressourcen über HTTP zu laden, wird der Browser entweder versuchen, die Ladeanforderung auf HTTPS upzugraden oder die Anforderung blockieren: Dies wird als [Mixed Content Blocking](/de/docs/Web/Security/Defenses/Mixed_content) bezeichnet.

Wenn es Ihnen nicht möglich ist, Ihren Code zu aktualisieren, um Ressourcen von HTTPS-URLs zu laden (zum Beispiel, weil Ihr HTML archiviert wurde), kann Ihr Server eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) setzen, die die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests)-Direktive enthält, und der Browser wird diese Anfragen automatisch zu HTTPS upgraden.

### Verwenden Sie HSTS beim Upgraden von HTTP-Anfragen

Auch wenn Ihre Website nur über HTTPS bereitgestellt wird, können Benutzer sie dennoch über HTTP anfragen: zum Beispiel, indem sie `http://example.org` in die Adressleiste eingeben. Um Ihre Seite in solchen Fällen zugänglich zu machen, können Sie auf HTTP-Anfragen lauschen und eine [301 Moved Permanently](/de/docs/Web/HTTP/Reference/Status/301)-Antwort verwenden, um auf die HTTPS-Version umzuleiten.

Dies gibt jedoch Angreifern die Möglichkeit, den ersten Austausch abzufangen und dann zu verhindern, dass das Upgrade auf HTTPS erfolgt. Dies wird manchmal als _SSL-Stripping_-Angriff bezeichnet ({{Glossary("SSL", "SSL")}} ist der Vorgänger von TLS).

Um das Risiko dieses Angriffs zu verringern, sollte Ihr Server auch den {{httpheader("Strict-Transport-Security")}} HTTP-Antwortheader senden (auch als HSTS bekannt): Dies informiert die Clients darüber, dass Sie möchten, dass sie HTTPS verwenden, und der Browser wird bei jedem nachfolgenden Besuch direkt über HTTPS verbinden, selbst bei Anforderungen, die HTTP-URLs verwenden.

Mit HSTS wird SSL-Stripping verhindert, außer beim ersten Versuch des Browsers, sich mit Ihrer Website zu verbinden (oder, da HSTS ein Ablaufdatum hat, beim ersten Versuch nach Ablauf eines HSTS-Eintrags im Browser). Um Ihre Website auch beim ersten Verbindung oder Ablauf des HSTS-Eintrags zu schützen, führt Chrome eine Liste von Domains namens [HSTS Preload List](https://hstspreload.org/): Wenn sich eine Domain auf dieser Liste befindet, wird Chrome immer die HTTP-Anfrage auf HTTPS upgraden, was effektiv so funktioniert, als hätte der Server bereits den HSTS-Header gesendet. Safari und Firefox zeigen ein ähnliches Verhalten, da sie eine Liste verwenden, die von der Chrome-Liste abgeleitet ist.

## Zusammenfassung der Abwehrmaßnahmen

- Stellen Sie alle Seiten und Subressourcen Ihrer Website über HTTPS bereit.
- Wenn Sie HTTP-Anfragen auf HTTPS umleiten möchten, verwenden Sie HSTS und erwägen Sie, Ihre Website zur HSTS-Preload-Liste hinzuzufügen.

## Siehe auch

- [Let's Encrypt](https://letsencrypt.org/)
- [TLS Recommended Configurations](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)
- [HTTP Strict Transport Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
