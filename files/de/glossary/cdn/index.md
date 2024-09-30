---
title: CDN
slug: Glossary/CDN
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **CDN** (Content Delivery Network) ist eine Gruppe von Servern, die über viele Standorte verteilt sind. Diese Server speichern Duplikate von Daten, sodass Server Datenanfragen basierend darauf erfüllen können, welche Server den jeweiligen Endbenutzern am nächsten sind. CDNs sorgen für schnelle Dienste, die weniger von hohem Traffic betroffen sind.

CDNs werden häufig verwendet, um Stylesheets und JavaScript-Dateien (statische Assets) von Bibliotheken wie Bootstrap, jQuery usw. bereitzustellen. Die Verwendung eines CDNs für diese Bibliotheksdateien ist aus mehreren Gründen vorzuziehen:

- Das Bereitstellen statischer Assets von Bibliotheken über ein CDN verringert die Anfragelast auf den eigenen Servern einer Organisation.
- Die meisten CDNs haben Server auf der ganzen Welt verteilt, sodass CDN-Server geografisch näher bei Ihren Benutzern sein können als Ihre eigenen Server. Geografische Entfernung beeinflusst die Latenz proportional.
- CDNs sind bereits mit richtigen Cache-Einstellungen konfiguriert. Die Verwendung eines CDNs spart zusätzliche Konfiguration für statische Assets auf Ihren eigenen Servern.
