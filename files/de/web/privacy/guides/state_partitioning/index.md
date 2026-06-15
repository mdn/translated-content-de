---
title: State Partitioning
slug: Web/Privacy/Guides/State_Partitioning
l10n:
  sourceCommit: fc801f51100908ad3f4471918cc634d767898874
---

**State Partitioning** ist ein umfassendes Bemühen von Mozilla, die Art und Weise, wie Firefox clientseitigen Status verwaltet (d.h. Daten, die im Browser gespeichert sind), neu zu gestalten, um die Möglichkeit von Websites zu mindern, den Status für Cross-Site-Tracking zu missbrauchen, z.B. über [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

Dieses Bestreben zielt darauf ab, dies zu erreichen, indem jeder Website, die ein Benutzer besucht, ein partitionierter Speicherort zur Verfügung gestellt wird. Dieser Artikel gibt einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie betroffene Websites debuggt werden können.

Ab Firefox 103 ist State Partitioning standardmäßig aktiviert.

## Motivation

### Cross-Site-Tracking mit gemeinsamem Status

Browser verwenden traditionell den Ursprung (oder manchmal die registrierbare Domain) des Ortes, von dem eine Ressource geladen wurde, um den clientseitigen Status zu kennzeichnen. Zum Beispiel werden die Cookies, `localStorage`-Objekte und Caches eines in einem iframe von `https://example.com/hello.html` geladenen Elements durch `example.com` gekennzeichnet. Dies gilt unabhängig davon, ob der Browser derzeit Ressourcen von dieser Domain als _First-Party_-Ressourcen oder als eingebettete _Third-Party_-Ressourcen lädt. Tracker haben diesen Cross-Site-Status genutzt, um Benutzerkennungen zu speichern und über Websites hinweg darauf zuzugreifen. Das folgende Beispiel zeigt, wie `example.com` seinen Cross-Site-Status (in diesem Fall Cookies) verwenden kann, um einen Benutzer über seine eigene Website sowie `A.example` und `B.example` hinweg zu verfolgen.

![Ein Beispiel für Cross-Site-Status](example-cross-site-state.png)

### Frühere Ansätze zur Blockierung von Cross-Site-Tracking

Die früheren Cookie-Richtlinien von Firefox versuchen, Tracking zu mindern, indem der Zugriff auf einige Speicher-APIs (z.B. Cookies und `localStorage`) für bestimmte Domains unter bestimmten Bedingungen blockiert wird. Zum Beispiel verhindert unsere Richtlinie "alle Third-Party-Cookies blockieren", dass alle Domains auf bestimmte Speicher-APIs zugreifen können, wenn sie im Third-Party-Kontext geladen werden. Unsere aktuelle [Standard-Cookie-Richtlinie](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) blockiert den Zugriff im Third-Party-Kontext nur für als Tracker klassifizierte Domains.

## State Partitioning

State Partitioning ist ein anderer Ansatz zur Verhinderung von Cross-Site-Tracking. Anstatt den Zugriff auf bestimmte stateful APIs im Third-Party-Kontext zu blockieren, stellt Firefox eingebetteten Ressourcen für jede oberste Website einen separaten Speicherbereich zur Verfügung. Genauer gesagt, doppelt Firefox alle clientseitigen Status durch den [Ursprung](https://html.spec.whatwg.org/multipage/browsers.html#origin) der geladenen Ressource und durch die oberste [Site](https://html.spec.whatwg.org/multipage/browsers.html#site). In den meisten Fällen ist die oberste Site das Schema und die {{Glossary("registrable_domain", "registrierbare Domain")}} der obersten Seite, die vom Benutzer besucht wird.

Im folgenden Beispiel ist `example.com` in `A.example` und `B.example` eingebettet. Da der Speicher jedoch partitioniert ist, gibt es drei unterschiedliche Speicherbereiche (anstelle eines). Der Tracker kann weiterhin auf den Speicher zugreifen, aber da jeder Speicherbereich zusätzlich unter der obersten Site gekennzeichnet ist, unterscheiden sich die Daten, die er auf A zugänglich hat, von den Daten auf B. Dies verhindert, dass ein Tracker eine Kennung in seinen Cookies speichert, wenn er direkt besucht wird, und diese Kennung dann abruft, wenn er in andere Websites eingebettet ist.

![Ein Beispiel für State Partitioning](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat ein Arbeitselement für die [Client-Side Storage Partitioning](https://privacycg.github.io/storage-partitioning/). Dies dient als Übersicht über die Standardisierungsbemühungen zur Speicherpartitionierung in den betroffenen individuellen Standards. Wir beabsichtigen, unsere Implementierung von State Partitioning mit diesen Bemühungen in Einklang zu bringen, wenn das Arbeitselement standardisiert wird.

### Status der Partitionierung in Firefox

- [**Network Partitioning**](#netzwerkpartitionierung): Standardmäßig für alle Benutzer seit Firefox 85 aktiviert.
- [**Dynamic Partitioning**](#dynamische_partitionierung): Standardmäßig für alle Benutzer seit Firefox 103 aktiviert. Davor:
  - Seit Firefox 86: Aktiviert für Benutzer, die ["Strenge" Datenschutzmaßnahmen](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) aktiviert haben.
  - Seit Firefox 90: Im privaten Browsing aktiviert.

## Statische Partitionierung

### Speicherpartitionierung

Um zu verhindern, dass über JavaScript zugängliche Speicher-APIs für Cross-Site-Tracking verwendet werden, wird zugänglicher Speicher nach der obersten Site partitioniert. Dieses Mechanismus bedeutet, dass im Allgemeinen ein Dritte, der in einer obersten Site eingebettet ist, nicht auf Daten unter einer anderen obersten Site zugreifen kann.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Shared Workers](/de/docs/Web/API/SharedWorker)
- [Service Workers](/de/docs/Web/API/Service_Worker_API)

### Netzwerkpartitionierung

Netzwerkbezogene APIs sind nicht dafür gedacht, dass Websites Daten speichern, aber sie können für Cross-Site-Tracking [missbraucht werden](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/). Daher sind die folgenden Netzwerk-APIs und Caches **dauerhaft** nach der obersten Site partitioniert.

> [!NOTE]
> Netzwerkpartitionierung ist dauerhaft.
> Websites können diese Beschränkungen nicht steuern oder lockern.

### Netzwerk-APIs

- [HTTP Cache](/de/docs/Web/HTTP/Guides/Caching)
- Bild-Cache
- Favicon-Cache
- Verbindungspooling
- Skript-Cache
- Stylesheet-Cache
- {{Glossary("DNS", "DNS")}}
- HTTP-Authentifizierung
- [Alt-Svc](/de/docs/Web/HTTP/Reference/Headers/Alt-Svc)
- Spekulative Verbindungen
- Schriften & Schrift-Cache
- [HSTS](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
- OCSP
- Zwischen-CA-Cache
- TLS-Client-Zertifikate
- TLS-Sitzungskennungen
- Prefetch
- Preconnect
- {{Glossary("Preflight_request", "CORS-preflight")}} Cache
- WebRTC deviceID
- {{Glossary("bfcache", "Backward/forward cache (bfcache)")}}

## Dynamische Partitionierung

Im Allgemeinen, wenn zugänglicher Speicher nach der obersten Site partitioniert ist, kann der Zugriff auf unpartitionierte Cookies von Drittanbietern dennoch gewährt werden, wenn die Storage Access API unterstützt wird:

- unter Verwendung der [Storage Access API](#storage_access_api).
- automatisch, wie für Drittanbieter, die föderale Logins bereitstellen.

Details zu automatischen Berechtigungen werden im Abschnitt [Storage Access Heuristics](#speicherzugriffsheuristiken) bereitgestellt.

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Speicherzugriffsheuristiken

Um die Webkompatibilität zu verbessern, beinhaltet Firefox derzeit einige Heuristiken, um den uneingeschränkten Zugriff auf Cookies automatisch an Drittanbieter zu gewähren, die Benutzerinteraktion erhalten. Diese Heuristiken sollen es ermöglichen, dass einige Drittanbieterintegration, die im Web üblich sind, weiterhin funktionieren.

> [!WARNING]
> Speicherzugriffsheuristiken sind ein Übergangsmerkmal, das dazu gedacht ist, Website-Ausfälle zu vermeiden.
> Sie sollten nicht für aktuelle und zukünftige Webentwicklungen genutzt werden.

#### Opener-Heuristik

Wenn ein partitionierter Drittanbieter ein Popup-Fenster öffnet, das [opener-Zugriff](/de/docs/Web/API/Window/opener) auf das ursprüngliche Dokument hat und der Benutzer mit diesem Popup interagiert, wird dem Drittanbieter der Speicherzugriff auf seinen Einbettungskontext für 30 Tage gewährt.

#### Navigationsheuristik

Nehmen wir an, eine Site unter `a.example` navigiert einen Benutzer zu `b.example` im selben Fenster, der Benutzer interagiert mit `b.example`, dann wird der Benutzer schnell zu `a.example` zurücknavigiert. In einem solchen Fall wird `b.example` Speicherzugriff als Drittanbieter auf `a.example` für 30 Tage gewährt.

## Storage Access API

Drittanbieter-Frames können [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) verwenden, um unpartitionierten Zugriff auf Cookies über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern. Sobald dieser gewährt wird, erhält die anfragende Partei Zugriff auf ihre gesamten First-Party-Cookies (d.h. die Cookies, auf die sie Zugriff hätte, wenn sie als First-Party besuchbar wäre).

> [!WARNING]
> Wenn der Speicherzugriff gewährt wird, kann es trotzdem noch Verweise auf den partitionierten Speicher geben.
> Websites sollten sich jedoch nicht darauf verlassen, sowohl partitionierte als auch unpartitionierte Cookies gleichzeitig nutzen zu können.

## Debugging

Wir ermutigen Website-Besitzer, ihre Websites zu testen, insbesondere solche, die auf Drittanbieterinhalte-Integrationen angewiesen sind. Es gibt mehrere Funktionen in Firefox, die das Testen erleichtern.

### Logging

Hier ist ein Überblick über die Nachrichten, die in der Webkonsole protokolliert werden, wenn im Third-Party-Kontext mit Speicher interagiert wird. In den folgenden Beispielen ist `a.example` die oberste Site, die das Drittanbieter-Frame `b.example` einbettet.

| Grund                                                                                                                         | Konsolennachricht                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Der Speicher eines Drittanbieter-Frames ist partitioniert                                                                     | Partitionierter Cookie- oder Speicherzugriff wurde "b.example" bereitgestellt, da es im Third-Party-Kontext geladen wird und Storage Partitioning aktiviert ist. |
| Zugriff auf unpartitionierte Cookies wird durch [Speicherzugriffsheuristiken](#speicherzugriffsheuristiken) gewährt           | Speicherzugriff für First-Party-Isolierung wurde "b.example" auf "a.example" automatisch gewährt.                                                                |
| Zugriff auf unpartitionierte Cookies wird über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) gewährt | Speicherzugriff für Ursprung "b.example" auf "a.example" gewährt.                                                                                                |

### Dritte-speicher-Zugriff löschen

Wenn ein Drittanbieter-iframe Speicherzugriff auf den übergeordneten Kontext gewährt wird, setzt Firefox eine Berechtigung. Um den Zugriff zu widerrufen, können Sie die Berechtigung über das [Site-Informationspanel](https://support.mozilla.org/en-US/kb/site-information-panel) im Berechtigungsbereich unter "Cross-Site-Cookies" löschen.

### Testeinstellungen

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Einstellungen in einem separaten Firefox-Profil vornehmen oder sie nach dem Testen zurücksetzen.

#### Web-Kompatibilitätsfunktionen deaktivieren

Setzen Sie `privacy.antitracking.enableWebcompat` auf `false`, um alle ETP- und State-Partitioning-Webkompatibilitätsmerkmale zu **deaktivieren**. Die Deaktivierung dieser Funktionen kann beim Testen nützlich sein, um sicherzustellen, dass Ihre Website vollständig mit dem Mechanismus der State Partitioning in Firefox kompatibel ist und nicht auf temporäre Heuristiken angewiesen ist.

Von der Voreinstellung deaktivierte Funktionen beinhalten:

- [Speicherzugriffsheuristiken](#speicherzugriffsheuristiken): Unpartitionierter Zugriff auf Cookies kann nur über die Storage Access API erlangt werden.
- Automatische Speicherzugriff-Gewährungen: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird immer den Benutzer auffordern.
- [SmartBlock's "Entsperren-bei-Zustimmung"-Funktion](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), die bestimmte Tracker erlaubt, wenn Benutzer mit ihnen interagieren.
- Jegliche temporären [Anti-Tracking-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions), die Websites über den Ausnahmelisten-Mechanismus gewährt werden.

#### Heuristiken deaktivieren

Die folgenden Einstellungen können verwendet werden, um individuelle Speicherzugriffsheuristiken über den [Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) zu deaktivieren:

- Navigationsheuristik aktivieren / deaktivieren: `privacy.restrict3rdpartystorage.heuristic.navigation`
- Opener-Heuristik aktivieren / deaktivieren: `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Netzwerkpartitionierung deaktivieren

Die Netzwerkpartitionierung kann mit der Voreinstellung `privacy.partition.network_state` deaktiviert werden.

#### Dynamisches State Partitioning deaktivieren

Um die dynamische Speicherpartitionierung für alle Websites zu deaktivieren, können Sie die `network.cookie.cookieBehavior`-Einstellung verwenden:

| Wert | Beschreibung                                                  |
| ---- | ------------------------------------------------------------- |
| 5    | Partitionierung von Drittanbieterspeicher.                    |
| 4    | Tracker ablehnen (Speicherpartitionierung deaktiviert).       |
| 0    | Alle Speicher erlauben (Speicherpartitionierung deaktiviert). |

Andere Werte dieser Einstellung können die Drittanbieter-Speicherung vollständig deaktivieren.

#### Bestimmte Ursprünge von der Partitionierung ausnehmen

Die dynamische State Partitioning kann für bestimmte Ursprünge mit der Voreinstellung `privacy.restrict3rdpartystorage.skip_list` deaktiviert werden. Diese Voreinstellung enthält eine durch Kommas getrennte Liste von Ursprüngen, die ausgenommen werden sollen. Der Voreinstellungwert sollte das folgende Format befolgen: `first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`.

Um beispielsweise die Partitionierung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Voreinstellung wie folgt setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Platzhalter für entweder die First-Party oder Third-Party verwenden. Um beispielsweise die Partitionierung für `videos.example` auf allen Sites zu deaktivieren oder um die gesamte Partitionierung auf `unpartitioned.example` zu deaktivieren, würden Sie die Voreinstellung wie folgt setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```
