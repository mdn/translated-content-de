---
title: Privacy-Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: 8e1d984b2be887877a587dbbf2f0bc595095258a
---

Googles **Privacy-Sandbox**-Projekt ist eine Reihe von Vorschlägen, die darauf abzielen, plattformübergreifende Anwendungsfälle ohne die Verwendung von Drittanbieter-Cookies oder anderen Tracking-Mechanismen zu ermöglichen. Es bereitet sich auf eine zukünftige Weblandschaft vor, in der Drittanbieter-Cookies entfernt wurden. Themen sind dabei Identitäts- und Tracking-Schutz, datenschutzfreundlichere Werbelösungen, Verhinderung von verdecktem Tracking und sicheres Teilen von Daten in verschiedenen Browsing-Kontexten.

> [!WARNING]
> Einige dieser Funktionen werden derzeit von einem oder mehreren Browser-Anbietern abgelehnt.
> Weitere Details finden Sie in den spezifischen API-Einstiegspunkten.

## Funktionen der Privacy-Sandbox

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
  - : Ermöglicht Entwicklern die Messung von Conversions – zum Beispiel, wenn ein Benutzer auf eine Anzeige auf einer Website klickt und dann auf der Seite des Anbieters den Artikel kauft – und den Zugriff auf Berichte zu diesen Conversions. Dies geschieht ohne die Verwendung von Drittanbieter-Tracking-Cookies.
- [Schutzmaßnahmen gegen Bounce-Tracking](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations)
  - : Schutzmaßnahmen gegen Bounce-Tracking schützen Benutzer, indem sie Tracker-Sites über eine Heuristik identifizieren und regelmäßig Cookies und andere Statusdaten, die mit ihnen verbunden sind, löschen.
- [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, erlaubt CHIPS Entwicklern, ein Cookie in einen partitionierten Speicher zu überführen, mit einem separaten Cookie-Speicher pro oberster Website.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalität zur Kontrolle von in {{htmlelement("fencedframe")}}-Elementen eingebettetem Inhalt, die es ermöglicht, Inhalte einzubetten, während die Datenschutzprobleme von {{htmlelement("iframe")}}s gelöst werden.
- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
  - : Bietet einen Mechanismus, um Vertrauen in die Authentizität eines Benutzers von einem Browsing-Kontext in einen anderen zu übertragen, ohne die Identität des Benutzers oder dessen Aktivitäten über Websites hinweg zu teilen oder zu verfolgen.
- [Verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) {{deprecated_inline}}
  - : Ein Mechanismus, der es einem Unternehmen ermöglicht, Beziehungen zwischen verschiedenen Websites zu deklarieren. Unterstützende Browser erlauben dann einen begrenzten Zugriff auf Drittanbieter-Cookies über diese Seiten hinweg für spezifische Zwecke, über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
  - : Ein client-seitiger Speichermechanismus, der nicht-partitionierten plattformübergreifenden Datenzugriff ermöglicht, während die Privatsphäre gewahrt bleibt (d.h. ohne die Verwendung von Tracking-Cookies).
- [Topics API](/de/docs/Web/API/Topics_API) {{deprecated_inline}}
  - : Bietet einen Mechanismus für Entwickler, um Anwendungsfälle wie **interessenbasierte Werbung (IBA)** zu implementieren, die auf Themen basiert, die der Browser sammelt, während sich der Benutzer auf verschiedenen Seiten bewegt, anstatt durch den Entwickler durch Verfolgung der Benutzerreise über verschiedene Seiten mit Drittanbieter-Cookies gesammelt zu werden.

## Weitere Themen

- [Anmeldung zur Privacy-Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Funktionen der Privacy-Sandbox zuzugreifen, müssen Entwickler einen **Anmeldeprozess** abschließen.

## Siehe auch

- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
