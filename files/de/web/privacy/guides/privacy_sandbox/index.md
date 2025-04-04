---
title: Privacy Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

Googles **Privacy Sandbox**-Projekt ist eine Reihe von Vorschlägen, um bereichsübergreifende Anwendungsfälle ohne die Notwendigkeit von Drittanbieter-Cookies oder anderen Tracking-Mechanismen zu erfüllen. Ziel ist es, das zukünftige Web auf einen Zustand vorzubereiten, in dem Drittanbieter-Cookies entfernt wurden. Themen umfassen Identitäts- und Tracking-Schutz, datenschutzfreundlichere Werbelösungen, die Vermeidung von verdecktem Tracking und die sichere Freigabe von Daten über verschiedene Browsing-Kontexte hinweg.

## Funktionen des Privacy Sandbox

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
  - : Ermöglicht Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Nutzer auf eine Anzeige klickt, die auf einer Seite eingebettet ist, und dann das Produkt auf der Seite des Anbieters kauft — und Zugriff auf Berichte über diese Konversionen zu erhalten. Dies geschieht ohne die Verwendung von Drittanbieter-Tracking-Cookies.
- [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht CHIPS Entwicklern, ein Cookie in partitionierten Speicher einzubeziehen, mit einem separaten Cookie-Speicher für jede Top-Level-Seite.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalitäten zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind, die es ermöglichen, Inhalte einzubetten und gleichzeitig die Datenschutzprobleme von {{htmlelement("iframe")}}s zu lösen.
- [Verwandte Webseiten-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : Ein Mechanismus, mit dem ein Unternehmen Beziehungen zwischen verschiedenen Seiten deklarieren kann. Unterstützende Browser ermöglichen dann einen begrenzten Zugriff auf Drittanbieter-Cookies über diese Seiten hinweg für bestimmte Zwecke über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - : Ein clientseitiger Speichermechanismus, der nicht partitionierten, bereichsübergreifenden Datenzugriff ermöglicht und dabei die Privatsphäre wahrt (d.h. ohne sich auf Tracking-Cookies zu verlassen).
- [Topics API](/de/docs/Web/API/Topics_API)
  - : Bietet einen Mechanismus, mit dem Entwickler Anwendungsfälle wie **interessenbasierte Werbung (IBA)** implementieren können, basierend auf Themen, die vom Browser gesammelt werden, während der Nutzer verschiedene Seiten besucht. Dies geschieht anstatt durch den Entwickler, der die Reise des Nutzers über verschiedene Seiten mit Drittanbieter-Cookies verfolgt.

## Weitere Themen

- [Privacy Sandbox Registrierung](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Funktionen der Privacy Sandbox zuzugreifen, müssen Entwickler einen **Registrierungsprozess** abschließen.

## Siehe auch

- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
