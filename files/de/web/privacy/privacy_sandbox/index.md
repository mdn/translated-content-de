---
title: Datenschutz-Sandbox
slug: Web/Privacy/Privacy_sandbox
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

Googles **Datenschutz-Sandbox**-Projekt ist eine Reihe von Vorschlägen, um Anwendungsfälle für Webseiten-übergreifende Nutzung ohne Drittanbieter-Cookies oder andere Tracking-Mechanismen zu erfüllen, mit Blick auf eine zukünftige Web-Welt, in der Drittanbieter-Cookies entfernt wurden. Themenschwerpunkte sind Identitäts- und Tracking-Schutz, mehr datenschutzfreundliche Werbelösungen, Verhinderung verdeckter Verfolgung und sicheres Teilen von Daten über verschiedene Browser-Kontexte.

## Datenschutz-Sandbox-Funktionen

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
  - : Ermöglicht Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Nutzer auf eine auf einer Website eingebettete Werbung klickt und anschließend den Artikel auf der Seite des Anbieters kauft — und dann Berichte über diese Konversionen zuzugreifen. Dies geschieht ohne die Verwendung von Drittanbieter-Tracking-Cookies.
- [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht CHIPS Entwicklern, ein Cookie in einen partitionierten Speicher zu überführen, mit einem separaten Cookie-Speicher pro Top-Level-Website.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalität zur Kontrolle von Inhalten, die in {{htmlelement("fencedframe")}} eingebettet sind, was das Einbetten von Inhalten ermöglicht und gleichzeitig die Datenschutzprobleme von {{htmlelement("iframe")}}s löst.
- [Zusammengehörige Websitesets](/de/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : Ein Mechanismus für ein Unternehmen, Beziehungen zwischen verschiedenen Websites zu deklarieren. Unterstützende Browser erlauben dann einen begrenzten Zugriff auf Drittanbieter-Cookies über diese Websites für bestimmte Zwecke, über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - : Ein clientseitiger Speichermechanismus, der unpartitionierten, cross-site Datenzugriff unter Wahrung der Privatsphäre ermöglicht (d.h. ohne auf Tracking-Cookies angewiesen zu sein).
- [Topics API](/de/docs/Web/API/Topics_API)
  - : Bietet einen Mechanismus für Entwickler, Anwendungsfälle wie **interessenbezogene Werbung (IBA)** basierend auf Themen zu implementieren, die der Browser sammelt, während der Benutzer verschiedene Seiten navigiert, anstatt vom Entwickler durch die Verfolgung des Weges des Benutzers über verschiedene Sites mit Drittanbieter-Cookies gesammelt zu werden.

## Weitere Themen

- [Datenschutz-Sandbox-Registrierung](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Funktionen der Datenschutz-Sandbox zuzugreifen, müssen Entwickler einen **Registrierungsprozess** durchlaufen.

## Siehe auch

- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
