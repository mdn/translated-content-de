---
title: Privacy Sandbox
slug: Web/Privacy/Privacy_sandbox
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

Googles **Privacy Sandbox**-Projekt ist eine Reihe von Vorschlägen, um standortübergreifende Anwendungsfälle zu erfüllen, ohne auf Drittanbieter-Cookies oder andere Tracking-Mechanismen angewiesen zu sein. Es bereitet eine zukünftige Webumgebung vor, in der Drittanbieter-Cookies entfernt wurden. Die Themen umfassen Identitäts- und Tracking-Schutz, datenschutzfreundlichere Werbelösungen, die Verhinderung von verdecktem Tracking und das sichere Teilen von Daten über verschiedene Browsing-Kontexte hinweg.

## Funktionen der Privacy Sandbox

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
  - : Ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Benutzer auf eine auf einer Webseite eingebettete Anzeige klickt und das Produkt anschließend auf der Webseite des Verkäufers kauft — und dann Berichte über diese Konversionen zu erhalten. Dies geschieht, ohne auf Drittanbieter-Tracking-Cookies angewiesen zu sein.
- [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht CHIPs Entwicklern, ein Cookie in einen partitionierten Speicher aufzunehmen, mit einem separaten Cookie-Jar pro Top-Level-Seite.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalität zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind, die es ermöglichen, Inhalte einzubetten und gleichzeitig die Datenschutzprobleme von {{htmlelement("iframe")}}s zu lösen.
- [Verwandte Webseiten-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : Ein Mechanismus, mit dem ein Unternehmen Beziehungen zwischen verschiedenen Websites deklarieren kann. Unterstützende Browser erlauben dann begrenzten Zugriff auf Drittanbieter-Cookies zwischen diesen Websites für spezifische Zwecke über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - : Ein clientseitiger Speichermekanismus, der nicht partitionierten, standortübergreifenden Datenzugriff ermöglicht und dabei die Privatsphäre wahrt (d. h. ohne auf Tracking-Cookies angewiesen zu sein).
- [Topics API](/de/docs/Web/API/Topics_API)
  - : Bietet einen Mechanismus für Entwickler, um Anwendungsfälle wie **interessenbasierte Werbung (IBA)** zu implementieren, basierend auf Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten navigiert, anstatt vom Entwickler durch das Tracking der Benutzerreise über verschiedene Websites mit Drittanbieter-Cookies gesammelt zu werden.

## Weitere Themen

- [Registrierung zur Privacy Sandbox](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Funktionen der Privacy Sandbox zugreifen zu können, müssen Entwickler einen **Registrierungsprozess** abschließen.

## Siehe auch

- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
