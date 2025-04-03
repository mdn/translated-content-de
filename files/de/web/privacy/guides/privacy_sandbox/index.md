---
title: Privacy Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Googles **Privacy Sandbox**-Projekt ist eine Reihe von Vorschlägen, um standortübergreifende Anwendungsfälle ohne erforderliche Drittanbieter-Cookies oder andere Tracking-Mechanismen zu erfüllen. Es bereitet auf eine zukünftige Weblandschaft vor, in der Drittanbieter-Cookies entfernt wurden. Zu den Themen gehören Identitäts- und Tracking-Schutz, datenschutzfreundlichere Werbelösungen, die Verhinderung verdeckter Nachverfolgung und das sichere Teilen von Daten über verschiedene Browser-Kontexte hinweg.

## Funktionen des Privacy Sandbox

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
  - : Ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Benutzer auf eine in eine Website eingebettete Anzeige klickt und dann auf der Website des Anbieters den Artikel kauft — und dann Berichte über diese Konversionen zu erhalten. Dies geschieht ohne die Abhängigkeit von Drittanbieter-Tracking-Cookies.
- [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**. CHIPS ermöglicht es Entwicklern, ein Cookie in einen partitionierten Speicher einzuspeichern, mit einem separaten Cookie-Speicher pro oberster Website-Ebene.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalitäten zur Kontrolle von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind. Diese ermöglichen das Einbetten von Inhalten, während sie die Datenschutzprobleme von {{htmlelement("iframe")}}s lösen.
- [Related website sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : Ein Mechanismus, mit dem ein Unternehmen Beziehungen zwischen verschiedenen Websites deklarieren kann. Unterstützende Browser ermöglichen dann einen begrenzten Drittanbieter-Cookie-Zugriff über diese Websites hinweg für spezifische Zwecke, über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - : Ein clientseitiger Speichermachanismus, der unpartitionierten, standortübergreifenden Datenzugriff ermöglicht und dabei die Privatsphäre wahrt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).
- [Topics API](/de/docs/Web/API/Topics_API)
  - : Bietet einen Mechanismus für Entwickler zur Implementierung von Anwendungsfällen wie **interessenbasierte Werbung (IBA)** basierend auf Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt vom Entwickler gesammelt zu werden, indem die Reise des Benutzers über verschiedene Websites mit Drittanbieter-Cookies verfolgt wird.

## Weitere Themen

- [Privacy Sandbox Anmeldung](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Funktionen des Privacy Sandbox zuzugreifen, müssen Entwickler einen **Anmeldeprozess** abschließen.

## Siehe auch

- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
