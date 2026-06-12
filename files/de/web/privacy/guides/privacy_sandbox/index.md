---
title: Privacy Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: 793bcbe2dd88fc553d2c4c918c4dec4899704022
---

Googles **Privacy Sandbox**-Projekt ist eine Reihe von Vorschlägen, um plattformübergreifende Anforderungen ohne den Einsatz von Drittanbieter-Cookies oder anderen Tracking-Mechanismen zu erfüllen. Es bereitet das Web auf eine Zukunft vor, in der Drittanbieter-Cookies entfernt wurden. Zu den Themen gehören Identität und Schutz vor Verfolgung, datenschutzfreundlichere Werbelösungen, Verhinderung verdeckten Trackings und sicheres Teilen von Daten über verschiedene Browsing-Kontexte hinweg.

> [!WARNING]
> Einige dieser Funktionen werden derzeit von einem oder mehreren Browseranbietern abgelehnt.
> Siehe die spezifischen API-Einstiegspunkte für weitere Details.

## Features der Privacy Sandbox

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
  - : Ermöglicht Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Benutzer auf eine in eine Website eingebettete Anzeige klickt und dann den Artikel auf der Webseite des Anbieters kauft — und anschließend Berichte über diese Konversionen zu erstellen. Dies geschieht ohne die Verwendung von Drittanbieter-Cookies.
- [Bounce-Tracking-Abmilderungen](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations)
  - : Bounce-Tracking-Abmilderungen schützen Benutzer vor Bounce-Tracking, indem sie Tracker-Seiten mithilfe einer Heuristik identifizieren und periodisch Cookies und andere zugehörige Zustandsdaten löschen.
- [Cookies with Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht CHIPS Entwicklern, einen Cookie in partitionierten Speicher zu übernehmen, mit einem separaten Cookie-Container pro Top-Level-Website.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalität zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind, die es ermöglichen, Inhalte einzubetten und gleichzeitig die Datenschutzprobleme von {{htmlelement("iframe")}}s zu lösen.
- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
  - : Bietet einen Mechanismus zur Übermittlung von Vertrauen in die Authentizität eines Benutzers von einem Browsing-Kontext zu einem anderen, ohne die Identität des Benutzers weiterzugeben oder deren Aktivität über Websites hinweg zu verfolgen.
- [Related Website Sets](https://privacysandbox.google.com/cookies/related-website-sets-integration) {{deprecated_inline}}
  - : Ein Mechanismus für ein Unternehmen, um Beziehungen zwischen verschiedenen Websites zu deklarieren. Unterstützende Browser erlauben dann begrenzten Zugriff auf Drittanbieter-Cookies über diese Websites für bestimmte Zwecke, über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
  - : Ein client-seitiger Speichermechanismus, der partitionierten und plattformübergreifenden Datenzugriff ermöglicht, während die Privatsphäre gewahrt bleibt (d.h. ohne auf Tracking-Cookies zu setzen).
- [Topics API](/de/docs/Web/API/Topics_API) {{deprecated_inline}}
  - : Bietet einen Mechanismus für Entwickler zur Implementierung von Anwendungsfällen wie **interessenbasierte Werbung (IBA)** auf Basis von Themen, die vom Browser gesammelt werden, während der Benutzer unterschiedliche Seiten besucht, anstatt dass der Entwickler den Weg des Benutzers über verschiedene Websites mit Drittanbieter-Cookies verfolgt.

## Weitere Themen

- [Anmeldung für die Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Funktionen der Privacy Sandbox zugreifen zu können, müssen Entwickler einen **Anmeldeprozess** durchlaufen.

## Siehe auch

- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
