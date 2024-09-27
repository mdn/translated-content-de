---
title: Privacy Sandbox
slug: Web/Privacy/Privacy_sandbox
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

Das **Privacy Sandbox**-Projekt von Google ist eine Reihe von Vorschlägen zur Erfüllung von Use Cases über mehrere Websites hinweg, ohne dass Drittanbieter-Cookies oder andere Tracking-Mechanismen erforderlich sind. Es bereitet das Web der Zukunft darauf vor, dass Drittanbieter-Cookies entfernt werden. Themen umfassen Identitäts- und Tracking-Schutz, mehr datenschutzfreundliche Werbelösungen, die Vermeidung von verdecktem Tracking und das sichere Teilen von Daten über verschiedene Browsing-Kontexte hinweg.

## Funktionen der Privacy Sandbox

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
  - : Ermöglicht es Entwicklern, Konversionen zu messen – zum Beispiel, wenn ein Benutzer auf eine Anzeige auf einer Website klickt und anschließend den Artikel auf der Website des Anbieters kauft – und dann Berichte über diese Konversionen abzurufen. Dies geschieht ohne den Einsatz von Drittanbieter-Tracking-Cookies.
- [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht CHIPS Entwicklern, ein Cookie in partitionierten Speicher aufzunehmen, wobei für jede Top-Level-Website ein separates Cookie-Jar bereitgestellt wird.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalitäten zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind, die es ermöglichen, Inhalte einzubetten und gleichzeitig die Datenschutzprobleme von {{htmlelement("iframe")}}s zu lösen.
- [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : Ein Mechanismus für ein Unternehmen, um Beziehungen zwischen verschiedenen Websites zu deklarieren. Unterstützende Browser ermöglichen dann begrenzten Drittanbieter-Cookie-Zugriff über diese Websites hinweg für spezifische Zwecke über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - : Ein clientseitiger Speichermechanismus, der nicht-partitionierten, Website-übergreifenden Datenzugriff ermöglicht und dabei die Privatsphäre wahrt (d. h. ohne auf Tracking-Cookies angewiesen zu sein).
- [Topics API](/de/docs/Web/API/Topics_API)
  - : Bietet einen Mechanismus für Entwickler, um Use Cases wie **Interest-Based Advertising (IBA)** basierend auf Themen, die vom Browser beim Navigieren des Benutzers auf verschiedenen Seiten gesammelt werden, zu implementieren, anstatt dass der Entwickler die Reise des Benutzers über verschiedene Websites mit Drittanbieter-Cookies verfolgt.

## Weitere Themen

- [Privacy Sandbox Enrollment](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Privacy-Sandbox-Funktionen zuzugreifen, müssen Entwickler einen **Anmeldungsprozess** durchführen.

## Siehe auch

- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
