---
title: Privacy Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

Googles **Privacy Sandbox** Projekt ist eine Reihe von Vorschlägen, um cross-site Anwendungsfälle zu erfüllen, ohne dass Drittanbieter-Cookies oder andere Tracking-Mechanismen erforderlich sind. Dies bereitet auf eine Zukunft im Web vor, in der Drittanbieter-Cookies entfernt wurden. Die Themen umfassen Identitäts- und Tracking-Schutz, datenschutzfreundlichere Anzeigenlösungen, Vermeidung von verdecktem Tracking und die sichere Weitergabe von Daten über Browsing-Kontexte hinweg.

## Funktionen der Privacy Sandbox

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
  - : Ermöglicht Entwicklern die Messung von Konversionen — zum Beispiel, wenn ein Benutzer auf eine Anzeige auf einer Seite klickt und dann auf der Seite des Anbieters das Produkt kauft — und dann Zugang zu Berichten über diese Konversionen erhält. Dies erfolgt ohne die Abhängigkeit von Drittanbieter-Tracking-Cookies.
- [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht CHIPS Entwicklern, ein Cookie in partitionierten Speicher zu optieren, mit einem separaten Cookie-Speicher pro oberster Webseite.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalität zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind, welche das Einbetten von Inhalten ermöglichen, während die Datenschutzprobleme von {{htmlelement("iframe")}}s gelöst werden.
- [Related website sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : Ein Mechanismus für ein Unternehmen, Beziehungen zwischen verschiedenen Websites zu deklarieren. Unterstützende Browser erlauben dann begrenzten Drittanbieter-Cookie-Zugriff über diese Websites hinweg für spezifische Zwecke, über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - : Ein clientseitiger Speichermechanismus, der unpartitionierten, cross-site Datenzugriff ermöglicht, während die Privatsphäre gewahrt bleibt (d.h. ohne auf Tracking-Cookies zu setzen).
- [Topics API](/de/docs/Web/API/Topics_API)
  - : Bietet Entwicklern einen Mechanismus zur Implementierung von Anwendungsfällen wie **interest-based advertising (IBA)** basierend auf Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt vom Entwickler zu sammeln, indem die Reise des Benutzers über verschiedene Websites mit Drittanbieter-Cookies nachverfolgt wird.

## Weitere Themen

- [Privacy Sandbox-Anmeldung](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Funktionen der Privacy Sandbox zugreifen zu können, müssen Entwickler einen **Anmeldeprozess** durchlaufen.

## Siehe auch

- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
