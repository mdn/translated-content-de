---
title: Privacy Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: 6317c2391f3a94e8c4fba467a1d5bebc46417385
---

Googles **Privacy Sandbox**-Projekt ist eine Reihe von Vorschlägen, um plattformübergreifende Anwendungsfälle zu erfüllen, ohne auf Drittanbieter-Cookies oder andere Tracking-Mechanismen angewiesen zu sein, und bereitet eine Zukunft vor, in der Drittanbieter-Cookies entfernt wurden. Themen sind unter anderem Identitäts- und Tracking-Schutz, datenschutzfreundlichere Werbelösungen, Vermeidung verdeckter Nachverfolgung und sichere Datenfreigabe über Browser-Kontexte hinweg.

> [!WARNING]
> Einige dieser Funktionen werden derzeit von einem oder mehreren Browser-Anbietern abgelehnt.
> Weitere Details finden Sie in den spezifischen API-Einstiegspunkten.

## Datenschutz-Sandbox-Funktionen

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
  - : Ermöglicht Entwicklern, Konversionen zu messen – zum Beispiel, wenn ein Nutzer auf eine Anzeige auf einer Website klickt und dann den Artikel auf der Website des Anbieters kauft – und anschließend Berichte über diese Konversionen abzurufen. Dies erfolgt ohne die Nutzung von Drittanbieter-Cookies für das Tracking.
- [Schutzmaßnahmen gegen Bounce-Tracking](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations)
  - : Schutzmaßnahmen gegen Bounce-Tracking schützen Nutzer vor Bounce-Tracking, indem sie Tracker-Websites durch Heuristiken identifizieren und regelmäßig Cookies und andere Zustandsspeicher, die mit ihnen verbunden sind, löschen.
- [Cookies mit unabhängigen partitionierten Zuständen (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht CHIPS Entwicklern, ein Cookie in partitionierten Speicher aufzunehmen, mit einem separaten Cookie-Speicher pro Top-Level-Site.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalität zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind, welche ermöglichen, Inhalte einzubetten und dabei die Datenschutzprobleme von {{htmlelement("iframe")}}s zu lösen.
- [Verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : Ein Mechanismus, mit dem ein Unternehmen Beziehungen zwischen verschiedenen Websites deklarieren kann. Unterstützende Browser ermöglichen dann eingeschränkten Drittanbieter-Cookie-Zugang über diese Sites hinweg für spezifische Zwecke, über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - : Ein clientseitiger Speichermechanismus, der ungepartitionierten, übergreifenden Datenzugriff ermöglicht und gleichzeitig die Privatsphäre wahrt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).
- [Topics API](/de/docs/Web/API/Topics_API)
  - : Stellt einen Mechanismus bereit, mit dem Entwickler Anwendungsfälle wie **interessenbasierte Werbung (IBA)** umsetzen können, basierend auf Themen, die vom Browser gesammelt wurden, während der Nutzer verschiedene Seiten besucht, anstatt vom Entwickler durch das Nachverfolgen des Nutzerverhaltens mit Drittanbieter-Cookies.

## Andere Themen

- [Enrollment in die Datenschutz-Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Funktionen der Datenschutz-Sandbox zuzugreifen, müssen Entwickler einen **Einschreibungsprozess** abschließen.

## Siehe auch

- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
