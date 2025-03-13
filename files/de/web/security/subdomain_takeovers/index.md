---
title: Subdomain-Übernahmen
slug: Web/Security/Subdomain_takeovers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Eine Subdomain-Übernahme tritt auf, wenn ein Angreifer die Kontrolle über eine Subdomain einer Zieldomain gewinnt. Typischerweise passiert dies, wenn die Subdomain einen kanonischen Namen ([CNAME](https://en.wikipedia.org/wiki/CNAME_record)) im Domain Name System ({{Glossary("DNS", "DNS")}}) hat, aber kein Host Inhalte dafür bereitstellt. Dies kann passieren, weil entweder ein virtueller Host noch nicht veröffentlicht wurde oder ein virtueller Host entfernt wurde. Ein Angreifer kann diese Subdomain übernehmen, indem er seinen eigenen virtuellen Host bereitstellt und dann eigene Inhalte dafür hostet.

Wenn ein Angreifer dies tun kann, kann er potenziell [Cookies](/de/docs/Web/HTTP/Guides/Cookies) lesen, die von der Hauptdomain gesetzt wurden, [cross-site scripting](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss) durchführen oder [Content Security Policies](/de/docs/Web/HTTP/Guides/CSP) umgehen. Dadurch können sie geschützte Informationen (einschließlich Logins) erfassen oder bösartige Inhalte an ahnungslose Benutzer senden.

Eine Subdomain ist wie eine Steckdose. Wenn Sie Ihr eigenes Gerät (Host) daran angeschlossen haben, ist alles in Ordnung. Wenn Sie jedoch Ihr Gerät aus der Steckdose entfernen (oder noch keines angeschlossen haben), kann jemand ein anderes anschließen. Sie müssen den Strom am Sicherungs- oder Schaltkasten (DNS) abschalten, um zu verhindern, dass die Steckdose von jemand anderem verwendet wird.

## Wie treten sie auf?

Wenn der Prozess der Bereitstellung oder des Entfernens eines virtuellen Hosts nicht ordnungsgemäß gehandhabt wird, kann es eine Gelegenheit für einen Angreifer geben, eine Subdomain zu übernehmen.

### Während der Bereitstellung

Ein Angreifer richtet einen virtuellen Host für einen Subdomain-Namen ein, den Sie beim Hosting-Anbieter gekauft haben, bevor Sie dies tun.

Angenommen, Sie kontrollieren die Domain example.com. Sie möchten einen Blog unter blog.example.com hinzufügen und entscheiden sich, einen Hosting-Anbieter zu verwenden, der eine Blogging-Plattform bereitstellt. (Anstelle von "Blog" können Sie "E-Commerce-Plattform", "Kundendienstplattform" oder jede andere "cloudbasierte" virtuelle Hosting-Situation einsetzen.) Der Prozess könnte folgendermaßen aussehen:

1. Sie registrieren den Namen "blog.example.com" bei einem Domain-Registrar.
2. Sie richten DNS-Einträge ein, um Browser, die auf blog.example.com zugreifen möchten, zum virtuellen Host zu leiten.
3. Sie erstellen einen virtuellen Host beim Hosting-Anbieter.

Es sei denn, der Hosting-Anbieter ist sehr sorgfältig bei der Überprüfung, dass die Entität, die den virtuellen Host einrichtet, tatsächlich der Eigentümer des Subdomain-Namens ist, könnte ein Angreifer, der schneller ist als Sie, einen virtuellen Host beim selben Anbieter mit Ihrem Subdomain-Namen einrichten. In einem solchen Fall kann der Angreifer, sobald Sie in Schritt 2 DNS einrichten, Inhalte in Ihrer Subdomain hosten.

### Während der Entfernung

Sie nehmen Ihren virtuellen Host herunter, aber ein Angreifer richtet einen neuen virtuellen Host mit demselben Namen und Anbieter ein.

Sie (oder Ihr Unternehmen) entscheiden, dass Sie keinen Blog mehr betreiben möchten, daher entfernen Sie den virtuellen Host vom Hosting-Anbieter. Wenn Sie jedoch nicht den DNS-Eintrag entfernen, der auf den Hosting-Anbieter verweist, kann ein Angreifer sich jetzt einen eigenen virtuellen Host bei diesem Anbieter einrichten, Ihre Subdomain beanspruchen und eigene Inhalte unter dieser Subdomain hosten.

## Wie kann ich sie verhindern?

Das Verhindern von Subdomain-Übernahmen ist eine Frage der Reihenfolge der Operationen im Lebenszyklusmanagement für virtuelle Hosts und DNS. Abhängig von der Größe der Organisation kann dies Kommunikation und Koordination über mehrere Abteilungen erfordern, was die Wahrscheinlichkeit einer anfälligen Fehlkonfiguration erhöhen kann.

- Definieren Sie Standardprozesse für die Bereitstellung und das Entfernen von Hosts. Führen Sie alle Schritte so nah wie möglich zeitlich zusammen durch.

  - Beginnen Sie die Bereitstellung, indem Sie den virtuellen Host beanspruchen; erstellen Sie DNS-Einträge _zuletzt_.
  - Beginnen Sie die Entfernung, indem Sie DNS-Einträge _zuerst_ entfernen.

- Erstellen Sie ein Inventar aller Domains Ihrer Organisation und deren Hosting-Anbieter, und aktualisieren Sie es, wenn sich etwas ändert, um sicherzustellen, dass nichts offen bleibt.
- Üben Sie Druck auf die Hosting-Anbieter aus, um Lücken zu schließen; fragen Sie, wie sie überprüfen, dass jemand, der einen virtuellen Host beansprucht, tatsächlich ein berechtigter Anspruch auf den Domainnamen hat. Arbeiten Sie innerhalb Ihrer Organisation daran, dies zum Teil des Lieferantenqualifizierungsprozesses zu machen.

## Meine Subdomain wurde übernommen. Was soll ich tun?

Wenn Sie entdecken, dass eine Subdomain Ihrer Domain übernommen wurde, ist der erste Schritt, sofern möglich, den "Strom abzuschalten", indem Sie den DNS-Eintrag für die Subdomain entfernen. Wenn Ihre Site mehrere Virtualisierungsebenen hat (z. B. ein {{Glossary("CDN", "CDN")}} zusätzlich zum virtuellen Hosting), müssen Sie möglicherweise jede Ebene untersuchen, um festzustellen, wo genau der Angreifer seinen virtuellen Host beansprucht hat, um Ihre Domain zu übernehmen.

## Erfahren Sie mehr

- ['Deep Thoughts' on Subdomain Takeover Vulnerabilities](https://claudijd.github.io/2017/02/03/deep-thoughts-on-subdomain-takeovers/)
- [Subdomain Takeover: Basics](https://0xpatrik.com/subdomain-takeover-basics/)
