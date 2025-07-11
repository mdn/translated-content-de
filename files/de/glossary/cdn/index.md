---
title: CDN
slug: Glossary/CDN
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **CDN** (Content Delivery Network) ist eine Gruppe von Servern, die über viele Standorte verteilt sind. Diese Server speichern Duplikate von Daten, sodass Anfragen basierend auf der Nähe der jeweiligen Endbenutzer von den nächstgelegenen Servern erfüllt werden können. CDNs sorgen für einen schnellen Service, der weniger von hohem Datenverkehr betroffen ist.

CDNs werden häufig verwendet, um Stylesheets und JavaScript-Dateien (statische Assets) von Bibliotheken wie Bootstrap, jQuery usw. bereitzustellen. Die Verwendung eines CDN für diese Bibliotheksdateien ist aus mehreren Gründen vorzuziehen:

- Die Bereitstellung der statischen Assets von Bibliotheken über ein CDN reduziert die Anfragelast auf den eigenen Servern einer Organisation.
- Die meisten CDNs haben weltweit Server, sodass die CDN-Server geografisch näher bei den Benutzern liegen können als die eigenen Server. Die geografische Entfernung beeinflusst die Latenz proportional.
- CDNs sind bereits mit den richtigen Cache-Einstellungen konfiguriert. Die Nutzung eines CDN spart zusätzliche Konfigurationen für statische Assets auf Ihren eigenen Servern.

Tatsächlich können komplette Websites von CDNs bereitgestellt werden, insbesondere {{Glossary("SSG", "statische")}} Websites, die vollständig aus statischen HTML-, CSS- und JavaScript-Dateien bestehen.

Es gibt auch Nachteile bei der Verwendung von CDNs im Vergleich zum Selbst-Hosting von statischen Assets:

- Es wird eine zusätzliche Abhängigkeit von einem Drittanbieterdienst eingeführt. Wenn das CDN ausfällt, in einer Region blockiert wird oder dauerhaft abgeschaltet wird, funktioniert Ihre Website nicht mehr.
- Es wird ein zusätzlicher Angriffsvektor eingeführt. Angreifer könnten das CDN kompromittieren und bösartige Inhalte an Ihre Benutzer ausliefern. Dadurch sind Gegenmaßnahmen wie [Subresource Integrity (SRI)](/de/docs/Web/Security/Practical_implementation_guides/SRI) notwendig.
- Entgegen der weit verbreiteten Meinung kann ein CDN die Leistung tatsächlich _verringern_. Durch die Verbindung mit einer Drittanbieter-Website muss der Browser des Benutzers mehr DNS-Abfragen, Inhaltsverhandlungen usw. durchlaufen. Zudem teilen moderne Browser den Cache aus Datenschutzgründen nicht zwischen verschiedenen Ursprüngen für dieselbe Ressource, sodass der Benutzer dasselbe Asset (z.B. jQuery) auf verschiedenen Websites mehrfach herunterladen muss.

## Siehe auch

- [Hosten Sie Ihre statischen Assets selbst](https://csswizardry.com/2019/05/self-host-your-static-assets/) von Harry Roberts (2019)
