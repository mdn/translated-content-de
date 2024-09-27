---
title: Übernahme von Subdomains
slug: Web/Security/Subdomain_takeovers
l10n:
  sourceCommit: 8d766d1d1c60a2d6d2c95bd2aa9d0b297d9c70ac
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Eine Übernahme von Subdomains tritt auf, wenn ein Angreifer die Kontrolle über eine Subdomain einer Ziel-Domain erlangt. Typischerweise geschieht dies, wenn die Subdomain einen kanonischen Namen ([CNAME](https://en.wikipedia.org/wiki/CNAME_record)) im Domain Name System ([DNS](/de/docs/Glossary/DNS)) hat, aber kein Host Inhalte dafür bereitstellt. Dies kann passieren, weil entweder ein virtueller Host noch nicht veröffentlicht wurde oder ein virtueller Host entfernt wurde. Ein Angreifer kann diese Subdomain übernehmen, indem er seinen eigenen virtuellen Host bereitstellt und seine eigenen Inhalte dafür hostet.

Wenn ein Angreifer dies tun kann, kann er möglicherweise [Cookies](/de/docs/Web/HTTP/Cookies) lesen, die von der Hauptdomain gesetzt wurden, [Cross-Site Scripting](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss) durchführen oder [Content Security Policies](/de/docs/Web/HTTP/CSP) umgehen, wodurch er geschützte Informationen (einschließlich Anmeldedaten) erfassen oder bösartige Inhalte an ahnungslose Benutzer senden kann.

Eine Subdomain ist wie eine Steckdose. Wenn Sie Ihr eigenes Gerät (Host) daran angeschlossen haben, ist alles in Ordnung. Wenn Sie jedoch Ihr Gerät von der Steckdose entfernen (oder noch keines angeschlossen haben), kann jemand ein anderes Gerät anschließen. Sie müssen den Strom am Sicherungskasten (DNS) abschalten, um zu verhindern, dass die Steckdose von jemand anderem verwendet wird.

## Wie passieren sie?

Wenn der Prozess der Bereitstellung oder Entfernung eines virtuellen Hosts nicht ordnungsgemäß gehandhabt wird, kann es eine Gelegenheit für einen Angreifer geben, eine Subdomain zu übernehmen.

### Während der Bereitstellung

Ein Angreifer richtet einen virtuellen Host für einen Subdomain-Namen ein, den Sie beim Hosting-Provider gekauft haben, bevor Sie dies tun können.

Angenommen, Sie kontrollieren die Domain example.com. Sie möchten einen Blog unter blog.example.com hinzufügen und entscheiden sich für einen Hosting-Provider, der eine Blogging-Plattform betreibt. (Für "Blog" können Sie auch "E-Commerce-Plattform", "Kundendienstplattform" oder jedes andere "cloudbasierte" virtuelle Hosting-Szenario einsetzen.) Der Prozess, den Sie durchlaufen, könnte so aussehen:

1. Sie registrieren den Namen "blog.example.com" bei einem Domain-Registrar.
2. Sie richten DNS-Einträge ein, um Browser, die auf blog.example.com zugreifen möchten, auf den virtuellen Host zu leiten.
3. Sie erstellen einen virtuellen Host beim Hosting-Provider.

Sofern der Hosting-Provider nicht sehr sorgfältig überprüft, dass die Entität, die den virtuellen Host einrichtet, tatsächlich der Inhaber des Subdomain-Namens ist, könnte ein Angreifer, der schneller ist als Sie, einen virtuellen Host beim gleichen Hosting-Provider mit Ihrem Subdomain-Namen einrichten. In einem solchen Fall kann der Angreifer, sobald Sie DNS in Schritt 2 eingerichtet haben, Inhalte auf Ihrer Subdomain hosten.

### Während der Entfernung

Sie nehmen Ihren virtuellen Host herunter, aber ein Angreifer richtet einen neuen virtuellen Host mit demselben Namen und Hosting-Provider ein.

Sie (oder Ihr Unternehmen) entscheiden, dass Sie keinen Blog mehr pflegen möchten, also entfernen Sie den virtuellen Host vom Hosting-Provider. Wenn Sie jedoch den DNS-Eintrag, der auf den Hosting-Provider verweist, nicht entfernen, kann ein Angreifer nun seinen eigenen virtuellen Host bei diesem Provider einrichten, Ihre Subdomain beanspruchen und seine eigenen Inhalte unter dieser Subdomain hosten.

## Wie kann ich sie verhindern?

Das Verhindern von Subdomain-Übernahmen ist eine Frage der Reihenfolge der Schritte im Lebenszyklusmanagement für virtuelle Hosts und DNS. Abhängig von der Größe der Organisation kann dies Kommunikation und Koordination zwischen mehreren Abteilungen erfordern, was nur die Wahrscheinlichkeit einer anfälligen Fehlkonfiguration erhöhen kann.

- Definieren Sie Standardprozesse für die Bereitstellung und Entfernung von Hosts. Führen Sie alle Schritte so nah wie möglich beieinander durch.

  - Beginnen Sie mit der Bereitstellung, indem Sie den virtuellen Host beanspruchen; erstellen Sie DNS-Einträge _zuletzt_.
  - Beginnen Sie mit der Entfernung, indem Sie DNS-Einträge _zuerst_ entfernen.

- Erstellen Sie ein Inventar aller Domains Ihrer Organisation und deren Hosting-Provider und aktualisieren Sie es, wenn sich Dinge ändern, um sicherzustellen, dass nichts in der Luft hängt.
- Üben Sie Druck auf Hosting-Anbieter aus, um Lücken zu schließen; fragen Sie, wie sie überprüfen, ob jemand, der einen virtuellen Host beansprucht, tatsächlich ein berechtigter Anspruch auf den Domain-Namen hat. Arbeiten Sie innerhalb Ihrer Organisation daran, dies zum Teil des Anbieterqualifizierungsprozesses zu machen.

## Meine Subdomain wurde übernommen. Was soll ich tun?

Wenn Sie entdecken, dass eine Subdomain Ihrer Domain übernommen wurde, ist der erste Schritt, wenn möglich, den "Strom abzuschalten", indem Sie den DNS-Eintrag für die Subdomain entfernen. Wenn Ihre Seite mehrere Virtualisierungsebenen hat (z. B. ein [CDN](/de/docs/Glossary/CDN) zusätzlich zum virtuellen Hosting), müssen Sie möglicherweise jede Ebene überprüfen, um festzustellen, wo genau der Angreifer seinen Anspruch auf den virtuellen Host geltend gemacht hat, um Ihre Domain zu übernehmen.

## Erfahren Sie mehr

- ['Deep Thoughts' on Subdomain Takeover Vulnerabilities](https://claudijd.github.io/2017/02/03/deep-thoughts-on-subdomain-takeovers/)
- [Subdomain Takeover: Basics](https://0xpatrik.com/subdomain-takeover-basics/)
