---
title: Privacy Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

Googles **Privacy Sandbox** Projekt ist eine Reihe von Vorschlägen, um Anwendungsfälle über Websites hinweg zu erfüllen, ohne dass Drittanbieter-Cookies oder andere Tracking-Mechanismen erforderlich sind, und bereitet auf ein zukünftiges Web vor, in dem Drittanbieter-Cookies entfernt wurden. Die Themen umfassen Identitäts- und Tracking-Schutz, datenschutzfreundlichere Werbelösungen, Vermeidung von verdecktem Tracking und sicheres Teilen von Daten über verschiedene Browser-Kontexte hinweg.

> [!WARNING]
> Einige dieser Funktionen werden derzeit von einem oder mehreren Browser-Anbietern abgelehnt.
> Siehe spezifische API-Einstiegspunkte für weitere Details.

## Funktionen der Privacy Sandbox

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
  - : Ermöglicht Entwicklern, Konversionen zu messen – zum Beispiel wenn ein Benutzer auf eine auf einer Website eingebettete Anzeige klickt und dann den Artikel auf der Website des Anbieters kauft – und dann Berichte über diese Konversionen abzurufen. Dies geschieht ohne den Einsatz von Drittanbieter-Tracking-Cookies.
- [Bounce Tracking Mitigations](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations)
  - : Bounce Tracking Mitigations schützen Benutzer vor Bounce Tracking, indem Trackerseiten mittels Heuristik identifiziert und Cookies sowie andere Zustandsdaten, die mit ihnen verbunden sind, regelmäßig gelöscht werden.
- [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht CHIPS Entwicklern, ein Cookie in einen partitionierten Speicher zu optieren, mit einem separaten Cookie-Glas pro Top-Level-Seite.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionen zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind, die es ermöglichen, Inhalte einzubetten und gleichzeitig die Datenschutzprobleme von {{htmlelement("iframe")}}s zu lösen.
- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
  - : Bietet einen Mechanismus zur Übermittlung von Vertrauen in die Authentizität eines Benutzers von einem Browser-Kontext zu einem anderen, ohne die Identität des Benutzers zu teilen oder deren Aktivität über Websites hinweg zu verfolgen.
- [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : Ein Mechanismus, mit dem ein Unternehmen Beziehungen zwischen verschiedenen Websites deklarieren kann. Unterstützende Browser ermöglichen dann begrenzten Zugriff auf Drittanbieter-Cookies über diese Websites zu spezifischen Zwecken über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
  - : Ein clientseitiger Speichermechanismus, der einen nicht partitionierten, websitesübergreifenden Datenzugriff ermöglicht, wobei die Privatsphäre gewahrt bleibt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).
- [Topics API](/de/docs/Web/API/Topics_API) {{deprecated_inline}}
  - : Bietet einen Mechanismus für Entwickler, um Anwendungsfälle wie **interessenbezogene Werbung (IBA)** zu implementieren, basierend auf Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt dass der Entwickler die Reise des Benutzers über verschiedene Seiten mit Drittanbieter-Cookies verfolgt.

## Weitere Themen

- [Privacy Sandbox Enrollment](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Funktionen der Privacy Sandbox zuzugreifen, müssen Entwickler einen **Enrollment**-Prozess durchlaufen.

## Siehe auch

- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
