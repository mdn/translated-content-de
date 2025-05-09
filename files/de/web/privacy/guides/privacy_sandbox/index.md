---
title: Privacy Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: a8c6558339dafb20c51bc34b2d75c8c1343634ac
---

> [!WARNING]
> Einige dieser Funktionen werden derzeit von einem oder mehreren Browseranbietern abgelehnt.
> Schauen Sie in den spezifischen API-Einträgen für weitere Details.

Googles **Privacy Sandbox**-Projekt ist eine Reihe von Vorschlägen, um standortübergreifende Anwendungsfälle ohne Drittanbieter-Cookies oder andere Tracking-Mechanismen zu erfüllen und sich auf ein zukünftiges Web vorzubereiten, in dem Drittanbieter-Cookies entfernt wurden. Die Themen umfassen Identitäts- und Tracking-Schutz, datenschutzfreundlichere Werbelösungen, Verhinderung verdeckten Trackings und sichere Datenfreigabe über Browser-Kontexte hinweg.

## Funktionen der Privacy Sandbox

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
  - : Ermöglicht Entwicklern, Konversionen zu messen — beispielsweise wenn ein Benutzer auf eine in einer Website eingebettete Anzeige klickt und dann den Artikel auf der Website des Anbieters kauft — und anschließend Berichte über diese Konversionen abzurufen. Dies geschieht, ohne auf Drittanbieter-Tracking-Cookies angewiesen zu sein.
- [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies** ermöglicht CHIPS Entwicklern, ein Cookie in einen partitionierten Speicher zu integrieren, mit einem separaten Cookie-Bereich für jede oberste Website.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalitäten zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind, die das Einbetten von Inhalten ermöglichen, während die Datenschutzprobleme von {{htmlelement("iframe")}}s gelöst werden.
- [Verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : Ein Mechanismus, mit dem ein Unternehmen Beziehungen zwischen verschiedenen Websites erklären kann. Unterstützende Browser erlauben dann begrenzten Drittanbieter-Cookie-Zugriff über diese Websites für spezifische Zwecke, über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - : Ein clientseitiger Speichermechanismus, der nicht-partitionierten, standortübergreifenden Datenzugriff ermöglicht, unter Wahrung der Privatsphäre (d.h. ohne auf Tracking-Cookies angewiesen zu sein).
- [Topics API](/de/docs/Web/API/Topics_API)
  - : Bietet einen Mechanismus für Entwickler zur Implementierung von Anwendungsfällen wie **interessenbasierter Werbung (IBA)** auf Basis von Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten navigiert, anstatt vom Entwickler durch das Verfolgen der Reise des Benutzers über verschiedene Websites hinweg mit Drittanbieter-Cookies gesammelt zu werden.

## Weitere Themen

- [Anmeldung bei der Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Funktionen der Privacy Sandbox zugreifen zu können, müssen Entwickler einen **Anmeldeprozess** abschließen.

## Siehe auch

- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
