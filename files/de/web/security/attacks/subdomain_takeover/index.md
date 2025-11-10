---
title: Subdomain-Übernahme
slug: Web/Security/Attacks/Subdomain_takeover
l10n:
  sourceCommit: df8445288d6a7c39ef7d7c711af2189790b23831
---

Eine Subdomain-Übernahme tritt auf, wenn ein Angreifer die Kontrolle über eine Subdomain einer Ziel-Domain erlangt. Typischerweise geschieht dies, wenn die Subdomain einen kanonischen Namen ([CNAME](https://en.wikipedia.org/wiki/CNAME_record)) im Domain Name System ({{Glossary("DNS", "DNS")}}) hat, aber kein Host Inhalte dafür bereitstellt. Dies kann passieren, weil entweder ein virtueller Host noch nicht veröffentlicht wurde oder ein virtueller Host entfernt wurde. Ein Angreifer kann diese Subdomain übernehmen, indem er seinen eigenen virtuellen Host bereitstellt und dann eigene Inhalte dafür hostet.

Wenn ein Angreifer dies tun kann, könnte er potenziell [Cookies](/de/docs/Web/HTTP/Guides/Cookies) lesen, die von der Hauptdomain gesetzt wurden, [Cross-Site-Scripting](/de/docs/Web/Security/Attacks/XSS) durchführen oder [Content Security Policies](/de/docs/Web/HTTP/Guides/CSP) umgehen, was ihm ermöglicht, geschützte Informationen (einschließlich Logins) zu erfassen oder bösartige Inhalte an ahnungslose Benutzer zu senden.

Eine Subdomain ist wie eine Steckdose. Wenn Sie Ihr eigenes Gerät (Host) daran angeschlossen haben, ist alles in Ordnung. Wenn Sie jedoch Ihr Gerät aus der Steckdose entfernen (oder noch keines angeschlossen haben), kann jemand anderes es anschließen. Sie müssen die Stromzufuhr am Sicherungskasten oder Schutzschalter (DNS) unterbrechen, um zu verhindern, dass die Steckdose von jemand anderem benutzt wird.

## Wie kommen sie zustande?

Wenn der Prozess der Bereitstellung oder Deinstallation (Entfernung) eines virtuellen Hosts nicht ordnungsgemäß gehandhabt wird, kann es zu einer Möglichkeit für einen Angreifer kommen, eine Subdomain zu übernehmen.

### Während der Bereitstellung

Ein Angreifer richtet einen virtuellen Host für einen Subdomain-Namen ein, den Sie beim Hosting-Anbieter gekauft haben, bevor Sie es tun.

Angenommen, Sie kontrollieren die Domain example.com. Sie möchten einen Blog unter blog.example.com hinzufügen und entscheiden sich, einen Hosting-Anbieter zu nutzen, der eine Blogging-Plattform betreibt. (Für "Blog" können Sie "E-Commerce-Plattform", "Kundendienstplattform" oder jedes andere "cloud-basierte" virtuellen Hosting-Szenario einsetzen.) Der von Ihnen durchgeführte Prozess könnte so aussehen:

1. Sie registrieren den Namen "blog.example.com" bei einem Domain-Registrar.
2. Sie richten DNS-Einträge ein, um Browser, die blog.example.com aufrufen möchten, zum virtuellen Host zu leiten.
3. Sie erstellen einen virtuellen Host beim Hosting-Anbieter.

Es sei denn, der Hosting-Anbieter ist sehr sorgfältig darin zu verifizieren, dass die Entität, die den virtuellen Host einrichtet, tatsächlich der Inhaber des Subdomain-Namens ist. Ein Angreifer, der schneller als Sie ist, könnte einen virtuellen Host beim gleichen Hosting-Anbieter mit Ihrem Subdomain-Namen erstellen. In einem solchen Fall, sobald Sie DNS in Schritt 2 einrichten, kann der Angreifer Inhalte auf Ihrer Subdomain hosten.

### Während der Deinstallation

Sie entfernen Ihren virtuellen Host, aber ein Angreifer richtet einen neuen virtuellen Host unter Verwendung des gleichen Namens und Anbieters ein.

Sie (oder Ihr Unternehmen) entscheiden, dass Sie keinen Blog mehr unterhalten möchten, also entfernen Sie den virtuellen Host vom Hosting-Anbieter. Sollten Sie jedoch den DNS-Eintrag, der auf den Hosting-Anbieter verweist, nicht entfernen, kann ein Angreifer jetzt seinen eigenen virtuellen Host bei diesem Anbieter erstellen, Ihre Subdomain beanspruchen und seine eigenen Inhalte unter dieser Subdomain hosten.

## Abwehrmaßnahmen gegen Subdomain-Übernahmen

Das Verhindern von Subdomain-Übernahmen erfordert die richtige Reihenfolge der Operationen im Lebenszyklusmanagement für virtuelle Hosts und DNS. Abhängig von der Größe der Organisation kann dies Kommunikation und Koordination über mehrere Abteilungen hinweg erfordern, was die Wahrscheinlichkeit einer anfälligen Fehlkonfiguration nur erhöhen kann.

- Definieren Sie standardisierte Prozesse für die Bereitstellung und Deinstallation von Hosts. Führen Sie alle Schritte so nah wie möglich beieinander durch.
  - Beginnen Sie die Bereitstellung, indem Sie den virtuellen Host beanspruchen; erstellen Sie DNS-Einträge _zuletzt_.
  - Beginnen Sie die Deinstallation, indem Sie DNS-Einträge _zuerst_ entfernen.

- Erstellen Sie ein Inventar aller Domains Ihrer Organisation und ihrer Hosting-Anbieter und aktualisieren Sie es, wenn sich Dinge ändern, um sicherzustellen, dass nichts offen bleibt.
- Setzen Sie Hosting-Anbieter unter Druck, Lücken zu schließen; fragen Sie, wie sie verifizieren, dass jemand, der einen virtuellen Host beansprucht, tatsächlich einen legitimen Anspruch auf den Domain-Namen hat. Arbeiten Sie in Ihrer Organisation darauf hin, dass dies Teil des Anbieterqualifizierungsprozesses wird.

## Meine Subdomain wurde übernommen. Was soll ich tun?

Wenn Sie feststellen, dass eine Subdomain Ihrer Domain übernommen wurde, ist der erste Schritt, wenn möglich, die "Stromzufuhr" zu unterbrechen, indem Sie den DNS-Eintrag für die Subdomain entfernen. Wenn Ihre Website mehrere Virtualisierungsebenen hat (z. B. ein {{Glossary("CDN", "CDN")}} zusätzlich zum virtuellen Hosting), müssen Sie möglicherweise jede Ebene untersuchen, um festzustellen, wo genau der Angreifer seinen Anspruch auf die Übernahme Ihrer Domain geltend gemacht hat.

## Mehr erfahren

- ['Deep Thoughts' on Subdomain Takeover Vulnerabilities](https://claudijd.github.io/2017/02/03/deep-thoughts-on-subdomain-takeovers/)
- [Subdomain Takeover: Basics](https://0xpatrik.com/subdomain-takeover-basics/)
