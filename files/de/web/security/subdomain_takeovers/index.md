---
title: Übernahme von Subdomains
slug: Web/Security/Subdomain_takeovers
l10n:
  sourceCommit: 8d766d1d1c60a2d6d2c95bd2aa9d0b297d9c70ac
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Eine Übernahme von Subdomains erfolgt, wenn ein Angreifer die Kontrolle über eine Subdomain einer Ziel-Domain erlangt. Dies geschieht typischerweise, wenn die Subdomain im Domain Name System ([DNS](/de/docs/Glossary/DNS)) einen kanonischen Namen ([CNAME](https://en.wikipedia.org/wiki/CNAME_record)) hat, aber kein Host Inhalte dafür bereitstellt. Dies kann geschehen, weil entweder ein virtueller Host noch nicht veröffentlicht wurde oder ein virtueller Host entfernt wurde. Ein Angreifer kann diese Subdomain übernehmen, indem er seinen eigenen virtuellen Host bereitstellt und dann eigene Inhalte dafür hostet.

Wenn ein Angreifer dies tun kann, könnte er potenziell [Cookies](/de/docs/Web/HTTP/Cookies) lesen, die von der Hauptdomain gesetzt wurden, [Cross-Site-Scripting](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss) durchführen oder [Content-Sicherheitsrichtlinien](/de/docs/Web/HTTP/CSP) umgehen. Dadurch kann er geschützte Informationen (einschließlich Anmeldedaten) erfassen oder bösartige Inhalte an ahnungslose Benutzer senden.

Eine Subdomain ist wie eine Steckdose. Wenn Sie Ihr eigenes Gerät (Host) daran angeschlossen haben, ist alles in Ordnung. Wenn Sie jedoch Ihr Gerät von der Steckdose entfernen (oder noch keines angeschlossen haben), kann jemand ein anderes anschließen. Sie müssen den Strom am Sicherungskasten (DNS) abschalten, um zu verhindern, dass die Steckdose von jemand anderem genutzt wird.

## Wie passieren sie?

Wenn der Prozess der Bereitstellung oder Aufhebung (Entfernung) eines virtuellen Hosts nicht ordnungsgemäß gehandhabt wird, kann sich eine Gelegenheit für einen Angreifer ergeben, eine Subdomain zu übernehmen.

### Während der Bereitstellung

Ein Angreifer richtet einen virtuellen Host für einen von Ihnen gekauften Subdomain-Namen beim Hosting-Anbieter ein, bevor Sie dies tun.

Angenommen, Sie kontrollieren die Domain example.com. Sie möchten ein Blog auf blog.example.com hinzufügen und entscheiden sich für einen Hosting-Anbieter, der eine Blogplattform betreibt. (Für "Blog" können Sie "E-Commerce-Plattform", "Kundendienstplattform" oder ein anderes "cloud-basiertes" virtuelles Hosting-Szenario einsetzen.) Der Prozess könnte folgendermaßen aussehen:

1. Sie registrieren den Namen "blog.example.com" bei einem Domain-Registrar.
2. Sie richten DNS-Einträge ein, um Browser, die auf blog.example.com zugreifen möchten, zum virtuellen Host zu leiten.
3. Sie erstellen einen virtuellen Host beim Hosting-Anbieter.

Es sei denn, der Hosting-Anbieter stellt sehr sorgfältig sicher, dass die Entität, die den virtuellen Host einrichtet, tatsächlich der Besitzer des Subdomain-Namens ist. Ein Angreifer, der schneller ist als Sie, könnte einen virtuellen Host mit dem gleichen Hosting-Anbieter erstellen, indem er Ihren Subdomain-Namen verwendet. In einem solchen Fall kann der Angreifer, sobald Sie in Schritt 2 DNS einrichten, Inhalte auf Ihrer Subdomain hosten.

### Während der Aufhebung

Sie nehmen Ihren virtuellen Host herunter, aber ein Angreifer richtet einen neuen virtuellen Host mit demselben Namen und Hosting-Anbieter ein.

Sie (oder Ihr Unternehmen) entscheiden, dass Sie kein Blog mehr pflegen möchten, also entfernen Sie den virtuellen Host vom Hosting-Anbieter. Wenn Sie jedoch den DNS-Eintrag, der auf den Hosting-Anbieter zeigt, nicht entfernen, kann ein Angreifer jetzt seinen eigenen virtuellen Host bei diesem Anbieter erstellen, Ihre Subdomain beanspruchen und eigene Inhalte unter dieser Subdomain hosten.

## Wie kann ich sie verhindern?

Das Verhindern von Subdomain-Übernahmen ist eine Frage der Reihenfolge der Operationen im Lebenszyklusmanagement für virtuelle Hosts und DNS. Je nach Größe der Organisation kann dies eine Kommunikation und Koordination zwischen mehreren Abteilungen erfordern, was die Wahrscheinlichkeit von anfälligen Fehlkonfigurationen nur erhöhen kann.

- Definieren Sie Standardprozesse für die Bereitstellung und Aufhebung von Hosts. Führen Sie alle Schritte so nah wie möglich zusammen aus.

  - Beginnen Sie die Bereitstellung, indem Sie den virtuellen Host beanspruchen; erstellen Sie DNS-Einträge _als letztes_.
  - Beginnen Sie die Aufhebung, indem Sie DNS-Einträge _zuerst_ entfernen.

- Erstellen Sie ein Inventar aller Domains Ihrer Organisation und deren Hosting-Anbieter und aktualisieren Sie es bei Änderungen, um sicherzustellen, dass nichts unbeaufsichtigt bleibt.
- Setzen Sie Hosting-Anbieter unter Druck, Lücken zu schließen; fragen Sie, wie sie überprüfen, dass jemand, der einen virtuellen Host beansprucht, tatsächlich ein rechtmäßiges Anrecht auf den Domain-Namen hat. Arbeiten Sie innerhalb Ihrer Organisation daran, dies zu einem Teil des Anbieterqualifizierungsprozesses zu machen.

## Meine Subdomain wurde übernommen. Was soll ich tun?

Wenn Sie feststellen, dass eine Subdomain Ihrer Domain übernommen wurde, besteht der erste Schritt, falls möglich, darin, die "Stromversorgung zu unterbrechen", indem Sie den DNS-Eintrag für die Subdomain entfernen. Wenn Ihre Website mehrere Virtualisierungsebenen hat (z.B. ein [CDN](/de/docs/Glossary/CDN) zusätzlich zum virtuellen Hosting), müssen Sie möglicherweise jede Schicht untersuchen, um herauszufinden, wo genau der Angreifer seinen Anspruch auf den virtuellen Host geltend gemacht hat, um Ihre Domain zu übernehmen.

## Weitere Informationen

- ['Deep Thoughts' on Subdomain Takeover Vulnerabilities](https://claudijd.github.io/2017/02/03/deep-thoughts-on-subdomain-takeovers/)
- [Subdomain Takeover: Basics](https://0xpatrik.com/subdomain-takeover-basics/)
