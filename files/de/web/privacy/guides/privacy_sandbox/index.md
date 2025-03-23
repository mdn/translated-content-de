---
title: Datenschutz-Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: 99975be75617c7ca640fd195d0aaffe430b1d42f
---

Googles **Datenschutz-Sandbox**-Projekt ist eine Reihe von Vorschlägen, um bereichsübergreifende Anwendungsfälle zu erfüllen, ohne Drittanbieter-Cookies oder andere Tracking-Mechanismen zu verwenden. Dies bereitet auf eine zukünftige Weblandschaft vor, in der Drittanbieter-Cookies entfernt wurden. Themen umfassen Identitäts- und Tracking-Schutz, datenschutzfreundlichere Werbelösungen, Vermeidung von verdecktem Tracking und sicheres Teilen von Daten über verschiedene Browsing-Kontexte hinweg.

## Funktionen der Datenschutz-Sandbox

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
  - : Ermöglicht Entwicklern, Konversionen zu messen — beispielsweise wenn ein Benutzer auf eine in eine Website eingebettete Anzeige klickt und dann das Produkt beim Anbieter kauft — und dann Berichte über diese Konversionen abzurufen. Dies geschieht, ohne auf Drittanbieter-Cookies angewiesen zu sein.
- [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht CHIPS Entwicklern, ein Cookie in partitionierten Speicher aufzunehmen, mit einem separaten Cookie-Speicher pro oberster Seite.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalität zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind, welche es ermöglichen, Inhalte einzubetten und dabei die Datenschutzprobleme von {{htmlelement("iframe")}}s zu lösen.
- [Sätze verwandter Websites](/de/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : Ein Mechanismus für ein Unternehmen, Beziehungen zwischen verschiedenen Websites zu deklarieren. Unterstützende Browser ermöglichen dann einen eingeschränkten Zugriff auf Drittanbieter-Cookies auf diesen Websites für spezifische Zwecke über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - : Ein clientseitiger Speichermechanismus, der unpartitionierten, bereichsübergreifenden Datenzugriff ermöglicht und dabei die Privatsphäre bewahrt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).
- [Topics API](/de/docs/Web/API/Topics_API)
  - : Bietet einen Mechanismus für Entwickler, Anwendungsfälle wie **interessenbasierte Werbung (IBA)** zu implementieren, basierend auf Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt vom Entwickler gesammelt zu werden, indem der Benutzer mithilfe von Drittanbieter-Cookies über verschiedene Websites hinweg verfolgt wird.

## Weitere Themen

- [Registrierung für die Datenschutz-Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Funktionen der Datenschutz-Sandbox zuzugreifen, müssen Entwickler einen **Registrierungsprozess** durchlaufen.

## Siehe auch

- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
