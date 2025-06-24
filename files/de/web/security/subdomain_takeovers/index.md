---
title: Subdomain-Übernahme
slug: Web/Security/Subdomain_takeovers
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Eine Subdomain-Übernahme tritt auf, wenn ein Angreifer die Kontrolle über eine Subdomain einer Ziel-Domain erlangt. Typischerweise geschieht dies, wenn die Subdomain einen kanonischen Namen ([CNAME](https://en.wikipedia.org/wiki/CNAME_record)) im Domain Name System ({{Glossary("DNS", "DNS")}}) hat, aber kein Host Inhalte dafür bereitstellt. Dies kann passieren, weil entweder ein virtueller Host noch nicht veröffentlicht wurde oder ein virtueller Host entfernt wurde. Ein Angreifer kann diese Subdomain übernehmen, indem er einen eigenen virtuellen Host bereitstellt und dann eigene Inhalte dafür hostet.

Kann ein Angreifer dies tun, so könnte er möglicherweise [Cookies](/de/docs/Web/HTTP/Guides/Cookies), die von der Hauptdomain gesetzt wurden, lesen, [Cross-Site Scripting](/de/docs/Web/Security/Attacks/XSS) durchführen oder [Content-Security-Policies](/de/docs/Web/HTTP/Guides/CSP) umgehen, und damit in der Lage sein, geschützte Informationen (einschließlich Logins) zu erfassen oder bösartige Inhalte an ahnungslose Benutzer zu senden.

Eine Subdomain ist wie eine Steckdose. Wenn Sie Ihr eigenes Gerät (Host) daran angeschlossen haben, ist alles in Ordnung. Wenn Sie Ihr Gerät jedoch aus der Steckdose entfernen (oder noch keines eingesteckt haben), kann jemand anderes ein anderes Gerät anschließen. Sie müssen den Strom am Sicherungskasten oder Verteiler (DNS) abschalten, um zu verhindern, dass die Steckdose von jemand anderem benutzt wird.

## Wie passieren sie?

Wenn der Prozess des Bereitstellens oder Entfernens eines virtuellen Hosts nicht ordnungsgemäß gehandhabt wird, kann es eine Möglichkeit für einen Angreifer geben, eine Subdomain zu übernehmen.

### Während der Bereitstellung

Ein Angreifer richtet einen virtuellen Host für einen Subdomain-Namen ein, den Sie beim Hosting-Anbieter gekauft haben, bevor Sie dies tun.

Angenommen, Sie kontrollieren die Domain example.com. Sie möchten einen Blog unter blog.example.com hinzufügen und entscheiden sich, einen Hosting-Anbieter zu nutzen, der eine Blogging-Plattform betreibt. (Für "Blog" können Sie "E-Commerce-Plattform", "Kundendienst-Plattform" oder ein anderes "cloud-basiertes" virtuelles Hosting-Szenario einsetzen.) Der Prozess, den Sie durchlaufen, könnte so aussehen:

1. Sie registrieren den Namen "blog.example.com" bei einem Domain-Registrar.
2. Sie richten DNS-Einträge ein, um Browser, die auf blog.example.com zugreifen möchten, so zu leiten, dass sie zum virtuellen Host gelangen.
3. Sie erstellen einen virtuellen Host beim Hosting-Anbieter.

Es sei denn, der Hosting-Anbieter ist sehr sorgfältig bei der Überprüfung, dass die Entität, die den virtuellen Host einrichtet, tatsächlich der Inhaber des Subdomain-Namens ist, könnte ein Angreifer, der schneller ist als Sie, einen virtuellen Host beim gleichen Hosting-Anbieter mit der Verwendung Ihres Subdomain-Namens einrichten. In diesem Fall kann der Angreifer, sobald Sie die DNS in Schritt 2 einrichten, Inhalte auf Ihrer Subdomain hosten.

### Während der Entfernungsphase

Sie nehmen Ihren virtuellen Host herunter, aber ein Angreifer richtet einen neuen virtuellen Host mit dem gleichen Namen und Hosting-Anbieter ein.

Sie (oder Ihr Unternehmen) entscheiden, dass Sie den Blog nicht weiterführen möchten, also entfernen Sie den virtuellen Host vom Hosting-Anbieter. Wenn Sie jedoch den DNS-Eintrag, der auf den Hosting-Anbieter verweist, nicht entfernen, kann ein Angreifer nun seinen eigenen virtuellen Host bei diesem Anbieter einrichten, Ihre Subdomain beanspruchen und seine eigenen Inhalte unter dieser Subdomain hosten.

## Wie kann ich sie verhindern?

Die Verhinderung von Subdomain-Übernahmen hängt von der Reihenfolge der Operationen im Lebenszyklusmanagement für virtuelle Hosts und DNS ab. Abhängig von der Größe der Organisation kann dies Kommunikation und Koordination über mehrere Abteilungen hinweg erfordern, was die Wahrscheinlichkeit einer anfälligen Fehlkonfiguration nur erhöhen kann.

- Definieren Sie Standardprozesse für das Bereitstellen und Entfernen von Hosts. Führen Sie alle Schritte so nah wie möglich beieinander aus.

  - Beginnen Sie die Bereitstellung, indem Sie den virtuellen Host beanspruchen; erstellen Sie DNS-Einträge _zuletzt_.
  - Beginnen Sie die Entfernung, indem Sie DNS-Einträge _zuerst_ entfernen.

- Erstellen Sie ein Inventar aller Domains Ihres Unternehmens und deren Hosting-Anbieter und aktualisieren Sie es, wenn sich Dinge ändern, um sicherzustellen, dass nichts losgelöst bleibt.
- Machen Sie Druck auf Hosting-Anbieter, Lücken zu schließen; fragen Sie, wie sie verifizieren, dass jemand, der einen virtuellen Host beansprucht, tatsächlich ein legitimer Inhaber des Domain-Namens ist. Arbeiten Sie in Ihrer Organisation daran, dies Teil des Anbieterqualifizierungsprozesses zu machen.

## Meine Subdomain wurde übernommen. Was sollte ich tun?

Wenn Sie feststellen, dass eine Subdomain Ihrer Domain übernommen wurde, besteht der erste Schritt, wenn möglich, darin, die "Stromzufuhr zu kappen", indem Sie den DNS-Eintrag für die Subdomain entfernen. Wenn Ihre Website über mehrere Virtualisierungsschichten verfügt (z. B. ein {{Glossary("CDN", "CDN")}} zusätzlich zum virtuellen Hosting), müssen Sie möglicherweise jede Schicht untersuchen, um zu sehen, wo genau der Angreifer seinen virtuellen Host-Anspruch geltend gemacht hat, um Ihre Domain zu übernehmen.

## Mehr erfahren

- ['Deep Thoughts' on Subdomain Takeover Vulnerabilities](https://claudijd.github.io/2017/02/03/deep-thoughts-on-subdomain-takeovers/)
- [Subdomain Takeover: Basics](https://0xpatrik.com/subdomain-takeover-basics/)
