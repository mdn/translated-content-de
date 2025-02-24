---
title: CDN
slug: Glossary/CDN
l10n:
  sourceCommit: 02d43de59a09b408db25ac451f5687678903375d
---

{{GlossarySidebar}}

Ein **CDN** (Content Delivery Network) ist eine Gruppe von Servern, die über viele Standorte verteilt sind. Diese Server speichern Duplikate von Daten, damit Anfragen basierend auf der Nähe zu den jeweiligen Endnutzern erfüllt werden können. CDNs ermöglichen einen schnellen Dienst, der weniger von hohem Datenverkehr betroffen ist.

CDNs werden häufig zur Bereitstellung von Stylesheets und JavaScript-Dateien (statische Ressourcen) von Bibliotheken wie Bootstrap, jQuery usw. verwendet. Die Nutzung eines CDNs für diese Bibliotheksdateien ist aus mehreren Gründen vorzuziehen:

- Das Bereitstellen der statischen Ressourcen von Bibliotheken über ein CDN verringert die Anfragelast auf den eigenen Servern einer Organisation.
- Die meisten CDNs verfügen über Server auf der ganzen Welt, sodass CDN-Server geografisch näher an Ihren Nutzern sein können als Ihre eigenen Server. Die geografische Entfernung beeinflusst die Latenz proportional.
- CDNs sind bereits mit den richtigen Cache-Einstellungen konfiguriert. Die Verwendung eines CDNs spart zusätzliche Konfigurationen für statische Ressourcen auf Ihren eigenen Servern.

Tatsächlich können ganze Websites von CDNs bereitgestellt werden, insbesondere {{Glossary("SSG", "statische")}} Websites, die vollständig aus statischen HTML-, CSS- und JavaScript-Dateien bestehen.

Es gibt auch Nachteile bei der Nutzung von CDNs im Vergleich zum eigenständigen Hosting statischer Ressourcen:

- Es führt zu einer zusätzlichen Abhängigkeit von einem Drittanbieterdienst. Wenn das CDN ausfällt, in einer Region blockiert ist oder dauerhaft abgeschaltet wird, funktioniert Ihre Website nicht mehr.
- Es eröffnet eine zusätzliche Angriffsfläche. Angreifer können das CDN kompromittieren und bösartige Inhalte an Ihre Nutzer liefern. Dies erfordert Gegenmaßnahmen wie [Subresource Integrity (SRI)](/de/docs/Web/Security/Practical_implementation_guides/SRI).
- Entgegen der landläufigen Meinung kann ein CDN die Leistung tatsächlich _verringern_. Durch die Herstellung der Verbindung mit einer Drittanbieter-Website muss der Browser des Benutzers mehr DNS-Lookups, Content-Verhandlungen und dergleichen durchlaufen. Außerdem teilen moderne Browser nicht aus Datenschutzgründen den Cache zwischen verschiedenen Ursprüngen für die gleiche Ressource, sodass der Benutzer das gleiche Asset (z.B. jQuery) trotzdem auf verschiedenen Websites mehrfach herunterladen muss.

## Siehe auch

- [Selbsthosten Ihrer statischen Ressourcen](https://csswizardry.com/2019/05/self-host-your-static-assets/) von Harry Roberts (2019)
