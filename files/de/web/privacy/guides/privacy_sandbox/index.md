---
title: Privacy Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

Googles **Privacy Sandbox**-Projekt ist eine Reihe von Vorschlägen, um Anwendungsfälle über mehrere Websites hinweg zu erfüllen, ohne auf Drittanbieter-Cookies oder andere Tracking-Mechanismen angewiesen zu sein. Es bereitet das Web auf eine Zukunft vor, in der Drittanbieter-Cookies entfernt worden sind. Die Themen umfassen Identitäts- und Tracking-Schutz, datenschutzfreundlichere Werbelösungen, die Verhinderung verdeckter Verfolgung und das sichere Teilen von Daten über Browsing-Kontexte hinweg.

> [!WARNING]
> Einige dieser Funktionen werden derzeit von einem oder mehreren Browser-Anbietern abgelehnt.
> Weitere Details finden Sie bei den spezifischen API-Einstiegspunkten.

## Privacy Sandbox-Funktionen

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
  - : Ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Benutzer auf eine Anzeige auf einer Website klickt und dann den Artikel auf der Website des Anbieters kauft — und dann Berichte über diese Konversionen zu erhalten. Dies geschieht, ohne auf Drittanbieter-Tracking-Cookies angewiesen zu sein.
- [Bounce-Tracking-Maßnahmen](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations)
  - : Schutzmaßnahmen gegen Bounce-Tracking, die Benutzer schützen, indem sie Tracker-Websites mittels einer Heuristik identifizieren und regelmäßig Cookies und andere Zustandsdaten, die damit verbunden sind, löschen.
- [Cookies mit unabhängiger, partitionierter Speicherung (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht es CHIPS Entwicklern, ein Cookie in eine partitionierte Speicherung zu überführen, mit einem separaten Cookie-Container pro Top-Level-Website.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalitäten zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind, welche Inhalte einbetten und gleichzeitig die Datenschutzprobleme von {{htmlelement("iframe")}}s lösen.
- [Verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : Ein Mechanismus, mit dem ein Unternehmen Beziehungen zwischen verschiedenen Websites deklarieren kann. Unterstützende Browser erlauben dann begrenzten Drittanbieter-Cookie-Zugriff über diese Websites für spezifische Zwecke, mittels der [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
  - : Ein clientseitiger Speichermechanismus, der unpartitionierten Datenzugriff über mehrere Websites hinweg ermöglicht, ohne die Privatsphäre zu gefährden (d.h. ohne auf Tracking-Cookies angewiesen zu sein).
- [Topics API](/de/docs/Web/API/Topics_API) {{deprecated_inline}}
  - : Bietet Entwicklern einen Mechanismus, um Anwendungsfälle wie **Interest-Based Advertising (IBA)** basierend auf den Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, anstatt von den Entwicklern durch Verfolgung der Benutzerbewegungen auf verschiedenen Websites mittels Drittanbieter-Cookies.

## Weitere Themen

- [Privacy Sandbox-Anmeldung](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment)
  - : Um auf bestimmte Privacy Sandbox-Funktionen zugreifen zu können, müssen Entwickler einen **Anmeldeprozess** abschließen.

## Siehe auch

- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
