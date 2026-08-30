---
title: Privacy Sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: 744c45b373cc38e639945bcc74b281a65f5d97c1
---

Googles **Privacy Sandbox**-Projekt ist eine Reihe von Vorschlägen, um plattformübergreifende Anwendungsfälle zu erfüllen, ohne Drittanbieter-Cookies oder andere Trackingmechanismen zu verwenden, und bereitet das Web auf eine Zukunft vor, in der Drittanbieter-Cookies entfernt wurden. Zu den Themen gehören Identitäts- und Verfolgungsschutz, datenschutzfreundlichere Werbelösungen, Verhinderung verdeckter Verfolgung und sicheres Teilen von Daten über Browserkontexte hinweg.

> [!WARNING]
> Einige dieser Funktionen werden derzeit von einem oder mehreren Browseranbietern abgelehnt.
> Weitere Details finden Sie in den spezifischen API-Einstiegspunkten.

> [!NOTE]
> Google Chrome hat einige der Privacy Sandbox-Funktionen abgeschafft und die Aufnahme neuer Organisationen in die Privacy Sandbox-Konsole ausgesetzt. Einige Privacy Sandbox-Funktionen erfordern eine Anmeldung. Siehe Abschnitt [Anmeldung](#anmeldung) für Details.

## Unterstützte Funktionen

- [Vermeidung von Bounce-Tracking](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations)
  - : Die Vermeidung von Bounce-Tracking schützt Benutzer vor Bounce-Tracking, indem Tracker-Seiten mittels einer Heuristik identifiziert und periodisch Cookies und andere Zustandsdaten, die mit ihnen verbunden sind, gelöscht werden.
- [Cookies mit unabhängiger partitionierter Zustandsverwaltung (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies)
  - : Auch bekannt als **partitionierte Cookies**, ermöglicht CHIPS Entwicklern, ein Cookie in die partitionierte Speicherung einzubinden, mit einem separaten Cookie-Jar pro oberste Ebene der Webseite.
- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
  - : Bietet einen Mechanismus, um Vertrauen in die Authentizität eines Benutzers von einem Browserkontext zu einem anderen zu vermitteln, ohne die Identität des Benutzers oder seine Aktivität auf Websites nachverfolgen zu können.

## Abgeschaffte Privacy Sandbox-Funktionen

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
  - : Ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel wenn ein Benutzer auf eine in eine Website eingebettete Anzeige klickt und dann auf der Website des Anbieters den Artikel kauft — und Berichte zu diesen Konversionen zuzugreifen. Dies geschieht ohne die Abhängigkeit von Drittanbieter-Tracking-Cookies.
- Protected Audience API {{deprecated_inline}}
  - : Seit Chrome 152 werfen alle Aufrufe der Protected Audience API Fehler oder liefern Platzhalterinformationen zurück. Chrome wird API-Stubs zu einem späteren Zeitpunkt entfernen. Die Protected Audience API ermöglichte geräteinterne Werbeauktionen, um Remarketings und benutzerdefinierte Zielgruppen zu bedienen, ohne plattformübergreifendes Drittanbieter-Tracking.
- Private Aggregation API {{deprecated_inline}}
  - : Seit Chrome 152 ist die Private Aggregation API nicht mehr erreichbar. Vor der Entfernung bot die Private Aggregation API das Aggregieren und Berichten über plattformübergreifende Daten in datenschutzfreundlicher Weise. Mit der Private Aggregation konnten Entwickler aggregierte Datenberichte unter Verwendung von Daten aus Protected Audience und plattformübergreifenden Daten von der Shared Storage API erstellen.
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
  - : Seit Chrome 152 werfen alle Aufrufe der Shared Storage API Fehler oder liefern Platzhalterinformationen zurück. Chrome wird API-Stubs zu einem späteren Zeitpunkt entfernen. Ein clientseitiger Speichermechanismus, der nicht partitionierten, plattformübergreifenden Datenzugriff ermöglicht, während die Privatsphäre gewahrt bleibt (d.h. ohne von Tracking-Cookies abhängig zu sein). Die Shared Storage API könnte in Verbindung mit der Private Aggregation API verwendet werden, um aggregierte Datenberichte aus plattformübergreifenden Daten zu erstellen.
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API) {{deprecated_inline}}
  - : Bietet Funktionen zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elemente eingebettet sind, die es ermöglichen, Inhalte einzubetten und gleichzeitig die Datenschutzprobleme von {{htmlelement("iframe")}}s zu lösen.
- [Verwandte Website-Sets](https://privacysandbox.google.com/cookies/related-website-sets-integration) {{deprecated_inline}}
  - : Ein Mechanismus, der es einem Unternehmen ermöglicht, Beziehungen zwischen verschiedenen Websites zu erklären. Unterstützende Browser erlauben dann begrenzten Drittanbieter-Cookie-Zugriff über diese Websites hinweg für spezifische Zwecke, über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).
- [Topics API](/de/docs/Web/API/Topics_API) {{deprecated_inline}}
  - : Bietet einen Mechanismus für Entwickler, um Anwendungsfälle wie **interessenbasierte Werbung (IBA)** zu implementieren, basierend auf Themen, die vom Browser gesammelt werden, während der Benutzer verschiedene Seiten besucht, statt vom Entwickler gesammelt, indem die Reise des Benutzers über verschiedene Websites mit Drittanbieter-Cookies verfolgt wird.

## Anmeldung

Google hat einige Privacy Sandbox-Funktionen abgeschafft und die Aufnahme neuer Websites und Organisationen in die Privacy Sandbox-Konsole ausgesetzt.

### Funktionen, die eine Anmeldung erfordern

Die folgenden Funktionen erfordern eine Anmeldung, um nutzbar zu sein:

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
- Protected Audience API {{deprecated_inline}}
- Private Aggregation API {{deprecated_inline}}
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
- [Topics API](/de/docs/Web/API/Topics_API) {{deprecated_inline}}

Die Dokumentation zu jeder Funktion enthält weitere Details darüber, welche Unterfunktionen ausfallen werden, wenn die Anmeldung nicht abgeschlossen ist, und wie.

## Siehe auch

- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
