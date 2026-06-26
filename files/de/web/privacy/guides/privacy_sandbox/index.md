---
title: Privacy Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

Googles **Privacy Sandbox**-Projekt ist eine Reihe von Vorschlägen, die ermöglichen sollen, standortübergreifende Anwendungsfälle zu erfüllen, ohne dass Drittanbieter-Cookies oder andere Tracking-Mechanismen erforderlich sind, und gleichzeitig das Web auf eine Zukunft vorzubereiten, in der Drittanbieter-Cookies entfernt wurden. Themen sind Identitäts- und Tracking-Schutz, datenschutzfreundliche Werbelösungen, Verhinderung verdeckten Trackings und sicheres Teilen von Daten über verschiedene Browsing-Kontexte hinweg.

> [!WARNING]
> Einige dieser Funktionen werden derzeit von einem oder mehreren Browser-Anbietern abgelehnt.
> Weitere Details finden Sie bei den spezifischen API-Einstiegspunkten.

> [!NOTE]
> Google Chrome hat einige Privacy Sandbox-Funktionen eingestellt und die Aufnahme neuer Organisationen in die Privacy Sandbox-Konsole ausgesetzt. Einige Funktionen der Privacy Sandbox erfordern eine Registrierung. Siehe den Abschnitt [Registrierung](#registrierung) für Details.

## Funktionen der Privacy Sandbox

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
  - : Ermöglicht Entwicklern das Messen von Konversionen – beispielsweise wenn ein Nutzer auf eine Anzeige auf einer Seite klickt und dann das Produkt auf der Seite des Händlers kauft – und anschließend Zugriff auf Berichte zu diesen Konversionen. Dies geschieht ohne auf das Tracking mit Drittanbieter-Cookies zu verzichten.
- [Bounce Tracking Mitigations](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations)
  - : Bounce Tracking Mitigations schützen Nutzer vor Bounce Tracking, indem sie Tracker-Websites über eine Heuristik identifizieren und periodisch Cookies und andere Zustandsdaten, die mit ihnen verknüpft sind, löschen.
- [Cookies mit unabhängiger partitionierter Speicherung (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht es CHIPS Entwicklern, ein Cookie zur partitionierten Speicherung zu optieren, mit einem separaten Cookie-Jar pro Top-Level-Site.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
  - : Bietet Funktionalität zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind, wodurch es ermöglicht wird, Inhalte einzubetten, während die Datenschutzprobleme von {{htmlelement("iframe")}}s gelöst werden.
- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
  - : Bietet einen Mechanismus, um das Vertrauen in die Authentizität eines Nutzers von einem Browsing-Kontext zu einem anderen zu übertragen, ohne die Identität des Nutzers zu teilen oder seine Aktivitäten über Websites hinweg zu verfolgen.
- [Verknüpfte Website-Sets](https://privacysandbox.google.com/cookies/related-website-sets-integration) {{deprecated_inline}}
  - : Ein Mechanismus, mit dem ein Unternehmen Beziehungen zwischen verschiedenen Seiten deklarieren kann. Unterstützende Browser erlauben dann begrenzten Zugang zu Drittanbieter-Cookies über diese Seiten hinweg für spezifische Zwecke über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
  - : Ein clientseitiger Speichermechanismus, der nicht-partitionierten, standortübergreifenden Datenzugang ermöglicht, indem die Privatsphäre gewahrt bleibt (d.h. ohne sich auf Tracking-Cookies zu verlassen).
- [Topics API](/de/docs/Web/API/Topics_API) {{deprecated_inline}}
  - : Bietet einen Mechanismus für Entwickler zur Implementierung von Anwendungsfällen wie **interessenbasierter Werbung (IBA)**, basierend auf Themen, die vom Browser gesammelt werden, während der Nutzer verschiedene Seiten besucht, anstatt dass der Entwickler die Reise des Nutzers über verschiedene Seiten mit Drittanbieter-Cookies verfolgt.

## Registrierung

Google stellte einige Funktionen der Privacy Sandbox ein und setzte die Registrierung neuer Websites und Organisationen in die Privacy Sandbox Console aus.

### Funktionen, die eine Registrierung erfordern

Die folgenden Funktionen erfordern eine Registrierung, um verwendet werden zu können:

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
- Protected Audience API {{deprecated_inline}}
- Private Aggregation API {{deprecated_inline}}
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
- [Topics API](/de/docs/Web/API/Topics_API) {{deprecated_inline}}

Die Dokumentation jeder Funktion enthält mehr Details darüber, welche Unterfunktionen fehlschlagen, wenn die Registrierung nicht abgeschlossen ist und wie.

## Siehe auch

- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
