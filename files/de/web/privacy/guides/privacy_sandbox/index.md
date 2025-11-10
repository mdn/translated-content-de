---
title: Privacy Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: 0e638cb6498f7ae7dc1cb5c39fea99b00084c1e7
---

Googles **Privacy Sandbox**-Projekt ist eine Reihe von Vorschlägen, um Cross-Site-Anwendungsfälle zu erfüllen, ohne auf Drittanbieter-Cookies oder andere Tracking-Mechanismen angewiesen zu sein. Es bereitet auf eine Zukunft im Web vor, in der Drittanbieter-Cookies entfernt wurden. Die Themen beinhalten Identitäts- und Tracking-Schutz, datenschutzfreundlichere Anzeigenlösungen, Vermeidung von verstecktem Tracking und sicheres Teilen von Daten über verschiedene Browser-Kontexte hinweg.

> [!WARNING]
> Einige dieser Funktionen werden derzeit von einem oder mehreren Browser-Anbietern abgelehnt.
> Weitere Details finden Sie bei spezifischen API-Einstiegspunkten.

## Funktionen der Privacy Sandbox

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
  - : Ermöglicht es Entwicklern, Konversionen zu messen – beispielsweise wenn ein Benutzer auf eine Werbung klickt, die auf einer Website eingebettet ist, und dann das Produkt auf der Seite des Anbieters kauft – und anschließend Berichte über diese Konversionen zu erhalten. Dies geschieht, ohne auf tracking-cookies von Dritten angewiesen zu sein.
- [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht CHIPS es Entwicklern, ein Cookie in einen partitionierten Speicher zu integrieren, wobei ein separates Cookie-Jar pro oberster Website erstellt wird.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionen zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind, welche die Einbettung von Inhalten ermöglichen und zugleich die Datenschutzprobleme von {{htmlelement("iframe")}}s lösen.
- [Related website sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : Ein Mechanismus, mit dem ein Unternehmen Beziehungen zwischen verschiedenen Websites erklären kann. Unterstützende Browser erlauben in diesen Fällen einen begrenzten Drittanbieter-Cookie-Zugriff über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) hinweg für spezifische Zwecke.
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - : Ein clientseitiger Speichermechanismus, der nicht-partitionierten, Cross-Site-Datenzugriff ermöglicht und gleichzeitig die Privatsphäre wahrt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).
- [Topics API](/de/docs/Web/API/Topics_API)
  - : Bietet Entwicklern einen Mechanismus zur Implementierung von Anwendungsfällen wie **interessenbasierter Werbung (IBA)** auf Basis von Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt diese Themen durch das Verfolgen der Benutzerreise mit Drittanbieter-Cookies zu sammeln.

## Weitere Themen

- [Anmeldung zur Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Funktionen der Privacy Sandbox zuzugreifen, müssen Entwickler einen **Anmeldeprozess** abschließen.

## Siehe auch

- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
