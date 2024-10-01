---
title: Subdomain-Übernahmen
slug: Web/Security/Subdomain_takeovers
l10n:
  sourceCommit: 8d766d1d1c60a2d6d2c95bd2aa9d0b297d9c70ac
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Eine Subdomain-Übernahme tritt auf, wenn ein Angreifer die Kontrolle über eine Subdomain einer Ziel-Domain erlangt. Typischerweise geschieht dies, wenn die Subdomain im Domain Name System ({{Glossary("DNS", "DNS")}}) einen kanonischen Namen ([CNAME](https://en.wikipedia.org/wiki/CNAME_record)) hat, aber kein Host dafür Inhalte bereitstellt. Dies kann passieren, weil entweder ein virtueller Host noch nicht veröffentlicht wurde oder ein virtueller Host entfernt wurde. Ein Angreifer kann diese Subdomain übernehmen, indem er seinen eigenen virtuellen Host bereitstellt und dann eigene Inhalte dafür hostet.

Wenn ein Angreifer dies tun kann, ist es ihm potenziell möglich, [Cookies](/de/docs/Web/HTTP/Cookies), die von der Hauptdomain gesetzt wurden, zu lesen, [Cross-Site-Scripting](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss) durchzuführen oder [Content Security Policies](/de/docs/Web/HTTP/CSP) zu umgehen, wodurch er in der Lage wäre, geschützte Informationen (einschließlich Anmeldedaten) zu erfassen oder bösartige Inhalte an nichtsahnende Nutzer zu senden.

Eine Subdomain ist wie eine Steckdose. Wenn Sie Ihr eigenes Gerät (Host) einstecken, ist alles in Ordnung. Wenn Sie jedoch Ihr Gerät aus der Steckdose entfernen (oder noch keines eingesteckt haben), kann jemand anderes ein anderes Gerät einstecken. Sie müssen den Strom am Sicherungskasten (DNS) abschalten, um zu verhindern, dass die Steckdose von jemand anderem verwendet wird.

## Wie entstehen sie?

Wenn der Prozess der Bereitstellung oder Ausmusterung (Entfernung) eines virtuellen Hosts nicht ordnungsgemäß gehandhabt wird, besteht die Möglichkeit, dass ein Angreifer eine Subdomain übernimmt.

### Während der Bereitstellung

Ein Angreifer richtet einen virtuellen Host für einen von Ihnen gekauften Subdomain-Namen beim Hosting-Anbieter ein, bevor Sie dies tun.

Angenommen, Sie kontrollieren die Domain example.com. Sie möchten unter blog.example.com einen Blog hinzufügen und entscheiden sich dafür, einen Hosting-Anbieter zu nutzen, der eine Blogging-Plattform betreibt. (Für "Blog" können Sie "E-Commerce-Plattform", "Kundenservice-Plattform" oder jedes andere "cloud-basierte" virtuelle Hosting-Szenario einsetzen.) Der Prozess, den Sie durchlaufen, könnte folgendermaßen aussehen:

1. Sie registrieren den Namen "blog.example.com" bei einem Domain-Registrar.
2. Sie richten DNS-Einträge ein, um Browser, die auf blog.example.com zugreifen möchten, so zu leiten, dass sie zum virtuellen Host gelangen.
3. Sie erstellen einen virtuellen Host beim Hosting-Anbieter.

Es sei denn, der Hosting-Anbieter ist sehr vorsichtig bei der Überprüfung, ob die Entität, die den virtuellen Host einrichtet, tatsächlich der Besitzer des Subdomain-Namens ist. Ein Angreifer, der schneller ist als Sie, könnte einen virtuellen Host mit demselben Hosting-Anbieter unter Verwendung Ihres Subdomain-Namens erstellen. In einem solchen Fall kann der Angreifer, sobald Sie im Schritt 2 DNS einrichten, Inhalte auf Ihrer Subdomain hosten.

### Während der Ausmusterung

Sie entfernen Ihren virtuellen Host, aber ein Angreifer richtet einen neuen virtuellen Host mit demselben Namen und Hosting-Anbieter ein.

Sie (oder Ihr Unternehmen) entscheiden, dass Sie keinen Blog mehr betreiben möchten, und entfernen den virtuellen Host vom Hosting-Anbieter. Wenn Sie jedoch den DNS-Eintrag, der auf den Hosting-Anbieter verweist, nicht entfernen, kann nun ein Angreifer seinen eigenen virtuellen Host bei diesem Anbieter erstellen, Ihre Subdomain beanspruchen und seine eigenen Inhalte unter dieser Subdomain hosten.

## Wie kann ich sie verhindern?

Das Verhindern von Subdomain-Übernahmen ist eine Frage der Reihenfolge der Vorgänge im Lebenszyklusmanagement für virtuelle Hosts und DNS. Abhängig von der Größe der Organisation kann dies die Kommunikation und Koordination zwischen mehreren Abteilungen erfordern, was die Wahrscheinlichkeit einer anfälligen Fehlkonfiguration erhöhen kann.

- Definieren Sie Standardprozesse für die Bereitstellung und Ausmusterung von Hosts. Führen Sie alle Schritte so eng wie möglich zusammen durch.

  - Beginnen Sie die Bereitstellung, indem Sie den virtuellen Host beanspruchen; erstellen Sie die DNS-Einträge _als letztes_.
  - Beginnen Sie die Ausmusterung, indem Sie die DNS-Einträge _zuerst_ entfernen.

- Erstellen Sie ein Inventar aller Domains und ihrer Hosting-Anbieter Ihrer Organisation und aktualisieren Sie es bei Änderungen, um sicherzustellen, dass nichts offen bleibt.
- Setzen Sie den Druck auf Hosting-Anbieter, Lücken zu schließen; fragen Sie, wie sie überprüfen, dass jemand, der einen virtuellen Host beansprucht, tatsächlich rechtmäßigen Anspruch auf den Domain-Namen hat. Arbeiten Sie innerhalb Ihrer Organisation darauf hin, dies zu einem Teil des Anbieterauswahlprozesses zu machen.

## Meine Subdomain wurde übernommen. Was soll ich tun?

Wenn Sie feststellen, dass eine Subdomain Ihrer Domain übernommen wurde, ist der erste Schritt, wenn möglich, „den Strom abzuschalten“, indem Sie den DNS-Eintrag für die Subdomain entfernen. Wenn Ihre Seite mehrere Ebenen der Virtualisierung hat (z. B. ein {{Glossary("CDN", "CDN")}} zusätzlich zum virtuellen Hosting), müssen Sie möglicherweise jede Ebene untersuchen, um zu sehen, wo genau der Angreifer seinen Anspruch auf virtuellen Host geltend gemacht hat, um Ihre Domain zu übernehmen.

## Mehr erfahren

- [„Deep Thoughts“ zu Subdomain-Übernahme-Schwachstellen](https://claudijd.github.io/2017/02/03/deep-thoughts-on-subdomain-takeovers/)
- [Subdomain-Übernahme: Grundlagen](https://0xpatrik.com/subdomain-takeover-basics/)
