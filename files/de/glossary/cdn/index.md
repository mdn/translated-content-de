---
title: CDN
slug: Glossary/CDN
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GlossarySidebar}}

Ein **CDN** (Content Delivery Network) ist eine Gruppe von Servern, die über viele Standorte verteilt sind. Diese Server speichern doppelte Kopien von Daten, sodass Server Datenanfragen basierend darauf erfüllen können, welche Server den jeweiligen Endbenutzern am nächsten sind. CDNs ermöglichen schnellen Service, der weniger von hohem Traffic betroffen ist.

CDNs werden häufig verwendet, um Stylesheets und JavaScript-Dateien (statische Assets) von Bibliotheken wie Bootstrap, jQuery usw. bereitzustellen. Die Verwendung eines CDNs für diese Bibliotheksdateien ist aus mehreren Gründen vorzuziehen:

- Das Bereitstellen statischer Assets von Bibliotheken über ein CDN reduziert die Anfragelast auf den eigenen Servern einer Organisation.
- Die meisten CDNs verfügen über Server auf der ganzen Welt, sodass CDN-Server möglicherweise geografisch näher an Ihren Benutzern sind als Ihre eigenen Server. Die geografische Entfernung beeinflusst die Latenz proportional.
- CDNs sind bereits mit den richtigen Cache-Einstellungen konfiguriert. Die Verwendung eines CDNs spart weitere Konfigurationen für statische Assets auf Ihren eigenen Servern.

Tatsächlich können ganze Websites über ein CDN bereitgestellt werden, insbesondere {{Glossary("SSG", "statische")}} Websites, die vollständig aus statischen HTML-, CSS- und JavaScript-Dateien bestehen.

Es gibt auch Nachteile bei der Verwendung von CDNs im Vergleich zum Selbst-Hosting von statischen Assets:

- Es führt eine zusätzliche Abhängigkeit von einem Drittanbieterdienst ein. Wenn das CDN ausfällt, in einer Region blockiert wird oder dauerhaft eingestellt wird, funktioniert Ihre Website nicht mehr.
- Es bietet einen zusätzlichen Angriffsvektor. Angreifer können das CDN kompromittieren und bösartige Inhalte an Ihre Benutzer ausliefern. Dies erfordert Gegenmaßnahmen wie [Subresource Integrity (SRI)](/de/docs/Web/Security/Practical_implementation_guides/SRI).
- Entgegen der landläufigen Meinung kann ein CDN die Leistung tatsächlich _verringern_. Durch die Verbindung mit einer Drittanbieter-Website muss der Browser des Benutzers mehr DNS-Lookup-Runden, Inhaltsverhandlungen usw. durchlaufen. Darüber hinaus teilen moderne Browser aus Datenschutzgründen keinen Cache zwischen verschiedenen Ursprüngen für die gleiche Ressource, sodass der Benutzer dasselbe Asset (z.B. jQuery) mehrmals auf verschiedenen Websites herunterladen muss.

## Siehe auch

- [Self-host your static assets](https://csswizardry.com/2019/05/self-host-your-static-assets/) von Harry Roberts (2019)
