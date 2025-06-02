---
title: Übernahme von Subdomains
slug: Web/Security/Subdomain_takeovers
l10n:
  sourceCommit: 86fa532a00024e7c85a4c0d6339adce8b1bd9f61
---

Eine Übernahme einer Subdomain tritt auf, wenn ein Angreifer die Kontrolle über eine Subdomain einer Ziel-Domain erlangt. Typischerweise geschieht dies, wenn die Subdomain einen kanonischen Namen ([CNAME](https://en.wikipedia.org/wiki/CNAME_record)) im Domain Name System ({{Glossary("DNS", "DNS")}}) hat, aber kein Host Inhalte dafür bereitstellt. Dies kann passieren, weil entweder ein virtueller Host noch nicht veröffentlicht wurde oder ein virtueller Host entfernt wurde. Ein Angreifer kann diese Subdomain übernehmen, indem er seinen eigenen virtuellen Host bereitstellt und dann seine eigenen Inhalte dafür hostet.

Wenn ein Angreifer dies tun kann, könnte er möglicherweise [Cookies](/de/docs/Web/HTTP/Guides/Cookies) vom Hauptdomänen setzen, [Cross-Site Scripting](/de/docs/Web/Security/Attacks/XSS) durchführen oder [Content-Security-Policies](/de/docs/Web/HTTP/Guides/CSP) umgehen, wodurch er in der Lage wäre, geschützte Informationen (einschließlich Anmeldungen) zu erfassen oder bösartige Inhalte an ahnungslose Benutzer zu senden.

Eine Subdomain ist wie eine Steckdose. Wenn Sie Ihr eigenes Gerät (Host) eingesteckt haben, ist alles in Ordnung. Wenn Sie jedoch Ihr Gerät aus der Steckdose entfernen (oder noch keines eingesteckt haben), kann jemand anderes ein anderes Gerät einstecken. Sie müssen den Strom am Sicherungskasten oder Sicherungskasten (DNS) abstellen, um zu verhindern, dass die Steckdose von jemand anderem genutzt wird.

## Wie entstehen sie?

Wenn der Prozess des Bereitstellens oder Entfernens eines virtuellen Hosts nicht ordnungsgemäß gehandhabt wird, kann es eine Gelegenheit für einen Angreifer geben, eine Subdomain zu übernehmen.

### Während der Bereitstellung

Ein Angreifer richtet einen virtuellen Host für einen Subdomain-Namen ein, den Sie beim Hosting-Anbieter gekauft haben, bevor Sie ihn einrichten können.

Angenommen, Sie kontrollieren die Domain example.com. Sie möchten einen Blog unter blog.example.com hinzufügen und entscheiden sich für einen Hosting-Anbieter, der eine Blogging-Plattform betreibt. (Für "Blog" können Sie "E-Commerce-Plattform", "Kundendienstplattform" oder ein anderes "cloud-basiertes" virtuelles Hosting-Szenario ersetzen.) Der Prozess, den Sie durchlaufen, könnte folgendermaßen aussehen:

1. Sie registrieren den Namen "blog.example.com" bei einem Domain-Registrar.
2. Sie richten DNS-Einträge ein, um Browser, die blog.example.com aufrufen möchten, zum virtuellen Host weiterzuleiten.
3. Sie erstellen einen virtuellen Host beim Hosting-Anbieter.

Es sei denn, der Hosting-Anbieter ist sehr vorsichtig zu überprüfen, dass die Entität, die den virtuellen Host einrichtet, tatsächlich der Inhaber des Subdomain-Namens ist, könnte ein Angreifer, der schneller als Sie ist, einen virtuellen Host beim gleichen Hosting-Anbieter einrichten, indem er Ihren Subdomain-Namen verwendet. In einem solchen Fall kann der Angreifer, sobald Sie den DNS in Schritt 2 eingerichtet haben, Inhalte auf Ihrer Subdomain hosten.

### Während des Entfernens

Sie nehmen Ihren virtuellen Host herunter, aber ein Angreifer richtet einen neuen virtuellen Host mit dem gleichen Namen und Hosting-Anbieter ein.

Sie (oder Ihr Unternehmen) entscheiden, dass Sie keinen Blog mehr betreiben möchten, also entfernen Sie den virtuellen Host vom Hosting-Anbieter. Wenn Sie jedoch den DNS-Eintrag, der auf den Hosting-Anbieter verweist, nicht entfernen, kann ein Angreifer nun seinen eigenen virtuellen Host mit diesem Anbieter erstellen, Ihre Subdomain beanspruchen und eigene Inhalte unter dieser Subdomain hosten.

## Wie kann ich sie verhindern?

Die Verhinderung von Übernahmen von Subdomains ist eine Frage der Reihenfolge der Abläufe im Lebenszyklusmanagement für virtuelle Hosts und DNS. Je nach Größe der Organisation kann dies die Kommunikation und Koordination mehrerer Abteilungen erfordern, was die Wahrscheinlichkeit einer anfälligen Fehlkonfiguration nur erhöhen kann.

- Definieren Sie Standardprozesse für die Bereitstellung und das Entfernen von Hosts. Führen Sie alle Schritte so nah wie möglich zusammen aus.

  - Beginnen Sie die Bereitstellung, indem Sie den virtuellen Host beanspruchen; erstellen Sie DNS-Einträge _zuletzt_.
  - Beginnen Sie das Entfernen, indem Sie DNS-Einträge _zuerst_ entfernen.

- Erstellen Sie ein Inventar aller Domains und deren Hosting-Anbieter Ihrer Organisation und aktualisieren Sie es bei Änderungen, um sicherzustellen, dass nichts unbeaufsichtigt bleibt.
- Üben Sie Druck auf Hosting-Anbieter aus, um Lücken zu schließen; erkundigen Sie sich, wie sie überprüfen, dass jemand, der einen virtuellen Host beansprucht, tatsächlich ein berechtigter Anspruch auf den Domainnamen hat. Arbeiten Sie innerhalb Ihrer Organisation daran, dies zu einem Bestandteil des Anbieterqualifikationsprozesses zu machen.

## Meine Subdomain wurde übernommen. Was sollte ich tun?

Wenn Sie feststellen, dass eine Subdomain Ihrer Domain übernommen wurde, besteht der erste Schritt darin, "den Strom abzuschalten", indem Sie den DNS-Eintrag für die Subdomain entfernen. Wenn Ihre Seite mehrere Virtualisierungsebenen hat (z. B. ein {{Glossary("CDN", "CDN")}} zusätzlich zum virtuellen Hosting), müssen Sie möglicherweise jede Ebene untersuchen, um festzustellen, wo genau der Angreifer seinen virtuellen Host-Anspruch geltend gemacht hat, um Ihre Domain zu übernehmen.

## Erfahren Sie mehr

- ['Deep Thoughts' on Subdomain Takeover Vulnerabilities](https://claudijd.github.io/2017/02/03/deep-thoughts-on-subdomain-takeovers/)
- [Subdomain Takeover: Basics](https://0xpatrik.com/subdomain-takeover-basics/)
