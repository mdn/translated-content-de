---
title: Subdomain-Übernahmen
slug: Web/Security/Subdomain_takeovers
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Eine Subdomain-Übernahme tritt auf, wenn ein Angreifer die Kontrolle über eine Subdomain einer Ziel-Domain erhält. Typischerweise geschieht dies, wenn die Subdomain einen kanonischen Namen ([CNAME](https://en.wikipedia.org/wiki/CNAME_record)) im Domain Name System ({{Glossary("DNS", "DNS")}}) hat, aber kein Host Inhalte dafür bereitstellt. Dies kann passieren, weil entweder ein virtueller Host noch nicht veröffentlicht wurde oder ein virtueller Host entfernt wurde. Ein Angreifer kann diese Subdomain übernehmen, indem er seinen eigenen virtuellen Host bereitstellt und dann eigene Inhalte dafür hostet.

Wenn ein Angreifer dies tun kann, kann er möglicherweise [Cookies](/de/docs/Web/HTTP/Guides/Cookies) aus der Hauptdomain auslesen, [Cross-Site-Scripting](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss) durchführen oder [Content Security Policies](/de/docs/Web/HTTP/Guides/CSP) umgehen. Dadurch kann er geschützte Informationen (einschließlich Logins) erfassen oder bösartige Inhalte an ahnungslose Benutzer senden.

Eine Subdomain ist wie eine Steckdose. Wenn Sie Ihr eigenes Gerät (Host) eingesteckt haben, ist alles in Ordnung. Wenn Sie jedoch Ihr Gerät aus der Steckdose entfernen (oder noch keines eingesteckt haben), kann jemand anderes ein Gerät einstecken. Sie müssen den Strom am Sicherungskasten (DNS) abschalten, um zu verhindern, dass die Steckdose von jemand anderem genutzt wird.

## Wie passiert das?

Wenn der Prozess der Bereitstellung oder der Außerbetriebsetzung (Entfernen) eines virtuellen Hosts nicht ordnungsgemäß behandelt wird, kann es eine Gelegenheit für einen Angreifer geben, eine Subdomain zu übernehmen.

### Während der Bereitstellung

Ein Angreifer richtet einen virtuellen Host für einen Subdomain-Namen ein, den Sie beim Hosting-Anbieter gekauft haben, bevor Sie dies tun.

Angenommen, Sie kontrollieren die Domain example.com. Sie möchten einen Blog unter blog.example.com einrichten und entscheiden sich für einen Hosting-Anbieter, der eine Blogging-Plattform betreibt. (Für "Blog" können Sie "E-Commerce-Plattform", "Kundendienst-Plattform" oder ein anderes "cloud-basiertes" virtuelles Hosting-Szenario einsetzen.) Der Prozess, den Sie durchlaufen, könnte so aussehen:

1. Sie registrieren den Namen "blog.example.com" bei einem Domain-Registrar.
2. Sie richten DNS-Einträge ein, um Browser, die blog.example.com aufrufen möchten, zum virtuellen Host zu leiten.
3. Sie erstellen einen virtuellen Host beim Hosting-Anbieter.

Es sei denn, der Hosting-Anbieter ist sehr sorgfältig darin, zu überprüfen, dass die Person, die den virtuellen Host einrichtet, tatsächlich der Eigentümer des Subdomain-Namens ist, könnte ein Angreifer, der schneller ist als Sie, einen virtuellen Host beim selben Hosting-Anbieter einrichten und Ihren Subdomain-Namen verwenden. In diesem Fall kann der Angreifer, sobald Sie DNS in Schritt 2 einrichten, Inhalte auf Ihrer Subdomain hosten.

### Während der Außerbetriebsetzung

Sie nehmen Ihren virtuellen Host außer Betrieb, aber ein Angreifer richtet einen neuen virtuellen Host mit demselben Namen und Hosting-Anbieter ein.

Sie (oder Ihr Unternehmen) entscheiden, dass Sie den Blog nicht länger betreiben möchten, sodass Sie den virtuellen Host beim Hosting-Anbieter entfernen. Wenn Sie jedoch nicht den DNS-Eintrag entfernen, der auf den Hosting-Anbieter verweist, kann ein Angreifer jetzt seinen eigenen virtuellen Host bei diesem Anbieter erstellen, Ihre Subdomain beanspruchen und eigene Inhalte unter dieser Subdomain hosten.

## Wie kann ich das verhindern?

Das Verhindern von Subdomain-Übernahmen ist eine Frage der Reihenfolge der Abläufe im Lebenszyklusmanagement für virtuelle Hosts und DNS. Abhängig von der Größe der Organisation kann dies Kommunikation und Koordination über mehrere Abteilungen erfordern, was die Wahrscheinlichkeit einer verwundbaren Fehlkonfiguration nur erhöhen kann.

- Definieren Sie Standardprozesse für die Bereitstellung und Außerbetriebnahme von Hosts. Führen Sie alle Schritte so nah wie möglich zusammen durch.

  - Beginnen Sie die Bereitstellung, indem Sie den virtuellen Host beanspruchen; erstellen Sie DNS-Einträge _zuletzt_.
  - Beginnen Sie die Außerbetriebnahme, indem Sie DNS-Einträge _zuerst_ entfernen.

- Erstellen Sie ein Inventar aller Domains Ihrer Organisation und deren Hosting-Anbieter und aktualisieren Sie es, wenn sich etwas ändert, um sicherzustellen, dass nichts unbeaufsichtigt bleibt.
- Üben Sie Druck auf Hosting-Anbieter aus, Lücken zu schließen; fragen Sie, wie sie sicherstellen, dass jemand, der einen virtuellen Host beansprucht, tatsächlich einen legitimen Anspruch auf den Domainnamen hat. Arbeiten Sie innerhalb Ihrer Organisation daran, dies in den Prozess der Anbieterauswahl einzubinden.

## Meine Subdomain wurde übernommen. Was soll ich tun?

Wenn Sie feststellen, dass eine Subdomain Ihrer Domain übernommen wurde, besteht der erste Schritt, sofern möglich, darin, den "Strom abzuschalten", indem Sie den DNS-Eintrag für die Subdomain entfernen. Wenn Ihre Site mehrere Virtualisierungsebenen hat (z. B. ein {{Glossary("CDN", "CDN")}} zusätzlich zum virtuellen Hosting), müssen Sie möglicherweise jede Ebene untersuchen, um herauszufinden, wo genau der Angreifer seinen virtuellen Host-Anspruch geltend gemacht hat, um Ihre Domain zu übernehmen.

## Erfahren Sie mehr

- ['Deep Thoughts' on Subdomain Takeover Vulnerabilities](https://claudijd.github.io/2017/02/03/deep-thoughts-on-subdomain-takeovers/)
- [Subdomain Takeover: Basics](https://0xpatrik.com/subdomain-takeover-basics/)
