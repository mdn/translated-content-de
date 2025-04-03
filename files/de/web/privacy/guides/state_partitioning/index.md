---
title: State Partitioning
slug: Web/Privacy/Guides/State_Partitioning
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**State Partitioning** ist ein umfassendes Vorhaben von Mozilla, um die Verwaltung des clientseitigen Zustands (d.h. der im Browser gespeicherten Daten) in Firefox neu zu gestalten. Ziel ist es, die Fähigkeit von Websites zu verringern, Zustände für das Cross-Site-Tracking zu missbrauchen, beispielsweise durch [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

Dieses Vorhaben zielt darauf ab, dies zu erreichen, indem für jede besuchte Website ein separater Speicherort bereitgestellt wird.
Dieser Artikel bietet einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie betroffene Websites debuggt werden können.

Ab Firefox 103 ist State Partitioning standardmäßig aktiviert.

## Motivation

### Cross-Site-Tracking mit gemeinsamem Zustand

Browser verwenden traditionell den Ursprung (oder manchmal die registrierbare Domain) der Ressource, die geladen wurde, als Schlüssel für den clientseitigen Zustand.
Zum Beispiel werden die Cookies, localStorage-Objekte und Caches eines iframes, das von `https://example.com/hello.html` geladen wurde, mit `example.com` als Schlüssel versehen.
Das gilt unabhängig davon, ob der Browser Ressourcen von dieser Domain als _First-Party_-Ressourcen oder als eingebettete _Third-Party_-Ressourcen lädt.
Tracker haben diesen Cross-Site-Zustand genutzt, um Benutzerkennungen zu speichern und auf diese websitesübergreifend zuzugreifen.
Das folgende Beispiel zeigt, wie `example.com` seinen Cross-Site-Zustand (in diesem Fall Cookies) nutzen kann, um einen Benutzer sowohl auf der eigenen Website als auch auf `A.example` und `B.example` zu verfolgen.

![Beispiel eines Cross-Site-Zustands](example-cross-site-state.png)

### Frühere Ansätze zur Blockierung von Cross-Site-Tracking

Die bisherigen Cookie-Richtlinien von Firefox versuchen, das Tracking zu verringern, indem der Zugriff auf einige Speicher-APIs (z.B. Cookies und localStorage) für bestimmte Domains unter bestimmten Bedingungen blockiert wird.
Beispielsweise verhindert unsere Richtlinie "alle Drittanbieter-Cookies blockieren", dass alle Domains in einem Drittanbieterkontext auf bestimmte Speicher-APIs zugreifen.
Unsere aktuelle [Standard-Cookie-Richtlinie](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) blockiert nur den Zugriff in einem Drittanbieterkontext für Domains, die als Tracker klassifiziert sind.

## State Partitioning

State Partitioning ist ein anderer Ansatz zur Verhinderung von Cross-Site-Tracking.
Anstatt den Zugriff auf bestimmte zustandsbehaftete APIs in einem Drittanbieterkontext zu blockieren, stellt Firefox eingebetteten Ressourcen für jede Top-Level-Website einen separaten Speicherbereich bereit.
Genauer gesagt, versieht Firefox alle clientseitigen Zustände mit einem Doppelschlüssel, indem der [Ursprung](https://html.spec.whatwg.org/multipage/browsers.html#origin) der geladenen Ressource und die Top-Level-[Website](https://html.spec.whatwg.org/multipage/browsers.html#site) verwendet werden.
In den meisten Fällen ist die Top-Level-Website das Schema und {{Glossary("eTLD", "eTLD+1")}} der von der Benutzerin besuchten Top-Level-Seite.

Im folgenden Beispiel ist `example.com` in `A.example` und `B.example` eingebettet.
Da der Speicher jedoch partitioniert ist, gibt es drei separate Speicherbereiche (anstatt nur einen).
Der Tracker kann weiterhin auf den Speicher zugreifen, aber da jeder Speicherbereich zusätzlich unter der Top-Level-Website festgelegt ist, werden sich die Daten, auf die er aus A Zugriff hat, von den Daten in B unterscheiden.
Dies verhindert, dass ein Tracker in der Lage ist, eine Kennung in seinen Cookies zu speichern, wenn er direkt besucht wird, und diese Kennung abzurufen, wenn er in anderen Websites eingebettet wird.

![Beispiel einer State Partitioning](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat ein Arbeitselement für [Client-Side Storage Partitioning](https://privacycg.github.io/storage-partitioning/).
Dies dient als Überblick über die Standardisierungsbemühungen für das Storage Partitioning in den betroffenen individuellen Standards.
Wir beabsichtigen, unsere Implementierung des State Partitioning mit diesen Bemühungen in Einklang zu bringen, sobald das Arbeitselement standardisiert ist.

### Status der Partitionierung in Firefox

- [**Netzwerkpartitionierung**](#netzwerkpartitionierung): Seit Firefox 85 standardmäßig für alle Benutzer aktiviert.
- [**Dynamische Partitionierung**](#dynamische_partitionierung): Seit Firefox 103 standardmäßig für alle Benutzer aktiviert. Vorher:
  - Seit Firefox 86: Für Benutzer aktiviert, die [„Strikte“ Datenschutzmaßnahmen](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) eingeschaltet haben.
  - Seit Firefox 90: Im privaten Modus aktiviert.

## Statische Partitionierung

### Speicherpartitionierung

Um zu verhindern, dass JavaScript-zugängliche Speicher-APIs für Cross-Site-Tracking verwendet werden, ist der zugängliche Speicher nach Top-Level-Website partitioniert.
Dieser Mechanismus bedeutet, dass ein Drittanbieter, der auf einer Top-Level-Website eingebettet ist, im Allgemeinen nicht auf Daten zugreifen kann, die unter einer anderen Top-Level-Website gespeichert sind.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Shared Workers](/de/docs/Web/API/SharedWorker)
- [Service Workers](/de/docs/Web/API/Service_Worker_API)

### Netzwerkpartitionierung

Netzwerkbezogene APIs sind nicht dazu gedacht, von Websites zur Speicherung von Daten verwendet zu werden, könnten jedoch für Cross-Site-Tracking [missbraucht](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/) werden.
Daher sind die folgenden Netzwerk-APIs und Caches **dauerhaft** nach der Top-Level-Website partitioniert.

> [!NOTE]
> Netzwerkpartitionierung ist dauerhaft.
> Websites können diese Einschränkungen nicht kontrollieren oder lockern.

### Netzwerk-APIs

- [HTTP Cache](/de/docs/Web/HTTP/Guides/Caching)
- Bild-Cache
- Favicon-Cache
- Verbindungspooling
- Stylesheet-Cache
- {{Glossary("DNS", "DNS")}}
- HTTP-Authentifizierung
- [Alt-Svc](/de/docs/Web/HTTP/Reference/Headers/Alt-Svc)
- Spekulative Verbindungen
- Schriften & Schrift-Cache
- [HSTS](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
- OCSP
- Zwischeneingeschaltet Zertifikat-Cache
- TLS-Client-Zertifikate
- TLS-Sitzungskennungen
- Prefetch
- Preconnect
- {{Glossary("Preflight_request", "CORS-preflight")}} Cache
- WebRTC deviceID

## Dynamische Partitionierung

Generell, wenn zugänglicher Speicher nach Top-Level-Website partitioniert ist, kann der Zugriff auf unpartitionierte Cookies eines Drittanbieters dennoch gewährt werden, wenn die Storage Access API unterstützt wird:

- Verwendung der [Storage Access API](#storage_access_api).
- automatisch, wie bei Drittanbietern, die eine föderierte Anmeldung bereitstellen.

Einzelheiten zu automatischen Gewährungen sind im Abschnitt [Storage Access Heuristik](#storage_access_heuristik) enthalten.

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Storage Access Heuristik

Um die Kompatibilität mit dem Web zu verbessern, enthält Firefox derzeit einige Heuristiken, um Drittanbietern, die Benutzereingaben erhalten, automatisch unpartitionierten Zugriff auf Cookies zu gewähren.
Diese Heuristiken sind dazu gedacht, einige häufig im Web verwendete Drittanbieter-Integrationen weiterhin funktionsfähig zu halten.

> [!WARNING]
> Storage Access Heuristiken sind eine Übergangslösung, die verhindern sollen, dass Websites nicht mehr funktionieren.
> Sie sollten nicht für die aktuelle und zukünftige Webentwicklung verwendet werden.

#### Opener-Heuristik

- Wenn ein partitionierter Drittanbieter ein Pop-up-Fenster öffnet, das [Opener-Zugriff](/de/docs/Web/API/Window/opener) auf das ursprüngliche Dokument hat, wird dem Drittanbieter 30 Tage lang Speicherzugriff auf sein Einbettungsdokument gewährt.
- Wenn ein First-Party `a.example` ein Drittanbieter-Pop-up `b.example` öffnet, wird `b.example` Drittanbieter-Speicherzugriff auf `a.example` für 30 Tage gewährt.

> [!NOTE]
> Für Drittanbieter, die diese Heuristik für Tracking-Zwecke missbrauchen, benötigen wir möglicherweise eine Benutzereingabe mit dem Popup, bevor der Speicherzugriff gewährt wird.

#### Redirect-Heuristik

- Wenn eine Seite `b.example` auf `a.example` umleitet, erhält `b.example` Speicherzugriff auf seinen Einbettungsdokument `a.example`, wenn sowohl `a.example` als auch `b.example` in den letzten 10 Minuten besucht und damit interagiert wurde.
  Dieser Speicherzugriff wird für 15 Minuten gewährt.
- Wenn ein Tracker `tracker.example` (wie klassifiziert durch den erweiterten Tracking-Schutz) auf eine Nicht-Tracker-Seite `a.example` umleitet und `tracker.example` als First-Party innerhalb der letzten 45 Tage eine Benutzereingabe erhalten hat, erhält `tracker.example` Speicherzugriff auf `a.example` für 15 Minuten.

## Storage Access API

Drittanbieter-Frames können
[document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) verwenden, um unpartitionierten Zugriff auf Cookies über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern.
Sobald gewährt, erhält die anfragende Partei Zugriff auf alle ihre First-Party-Cookies (d.h. die Cookies, auf die sie Zugriff hätte, wenn sie als First-Party besucht wird).

> [!WARNING]
> Auch wenn Speicherzugriff gewährt wird, könnte es noch Verweise auf den partitionierten Speicher geben.
> Websites sollten sich jedoch nicht darauf verlassen, partitionierte und unpartitionierte Cookies gleichzeitig nutzen zu können.

## Debugging

Wir ermutigen Website-Betreiber, ihre Sites zu testen, insbesondere diejenigen, die auf Drittanbieter-Inhaltsintegrationen angewiesen sind.
Es gibt mehrere Funktionen in Firefox, die das Testen erleichtern.

### Logging

Hier ist ein Überblick über die Nachrichten, die in der Webkonsole protokolliert werden, wenn im Drittanbieterkontext mit Speicher interagiert wird.
In den folgenden Beispielen ist `a.example` die Top-Level-Website, die das Drittanbieter-Frame `b.example` einbettet.

| Grund                                                                                                                         | Konsolennachricht                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Der Speicher eines Drittanbieter-Frames ist partitioniert                                                                     | Partitionierter Cookie- oder Speicherzugriff wurde "b.example" gewährt, da es im Drittanbieterkontext geladen wurde und Speicherpartitionierung aktiviert ist. |
| Zugriff auf unpartitionierte Cookies wird durch [Storage Access Heuristiken](#storage_access_heuristik) gewährt               | Speicherzugriff wurde automatisch für die First-Party-Isolation "b.example" auf "a.example" gewährt.                                                           |
| Zugriff auf unpartitionierte Cookies wird über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) gewährt | Speicherzugriff wurde für den Ursprung "b.example" auf "a.example" gewährt.                                                                                    |

### Entfernen von Drittanbieter-Speicherzugriff

Wenn einem Drittanbieter-iframe der Speicherzugriff auf den Parent-Kontext gewährt wird, setzt Firefox eine Berechtigung.
Um den Zugriff zu widerrufen, können Sie die Berechtigung im [Site-Informationsfenster](https://support.mozilla.org/en-US/kb/site-information-panel) im Berechtigungsbereich unter "Cookie-Zugriff über Sites hinweg" löschen.

### Testeinstellungen

> [!WARNING]
> Vergessen Sie nicht, diese Präferenzen in einem separaten Firefox-Profil zu setzen oder sie nach dem Testen zurückzusetzen.

#### Deaktivieren der Web-Kompatibilitätsfunktionen

Wenn Sie `privacy.antitracking.enableWebcompat` auf `false` setzen, werden **alle** ETP- und State-Partitioning-kompatiblen Web-Kompatibilitätsfunktionen **deaktiviert**.
Das Deaktivieren dieser Funktionen kann beim Testen nützlich sein, um sicherzustellen, dass Ihre Website vollständig mit dem State Partitioning-Mechanismus in Firefox kompatibel ist und nicht auf temporäre Heuristiken angewiesen ist.

Durch diese Einstellung deaktivierte Funktionen umfassen:

- [Storage Access Heuristiken](#storage_access_heuristik): Unpartitionierter Zugriff auf Cookies kann nur über die Storage Access API erworben werden.
- Automatische Speicherzugriffserteilungen: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird immer den Benutzer anfragen.
- [SmartBlocks „Unblock on opt-in“-Funktion](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), die es bestimmten Trackern erlaubt, wenn Benutzer mit ihnen interagieren.
- Alle temporären [Anti-Tracking-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions), die Websites über die Überspringen-Listen-Mechanismus gewährt werden.

#### Deaktivieren von Heuristiken

Die folgenden Präferenzen können jeweils verwendet werden, um einzelne Storage Access Heuristiken über den [Konfigurations-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) zu deaktivieren:

- Aktivieren / deaktivieren der [Redirect-Heuristiken](#redirect-heuristik): `privacy.restrict3rdpartystorage.heuristic.recently_visited`, `privacy.restrict3rdpartystorage.heuristic.redirect`
- Aktivieren / deaktivieren der [Window-Open-Heuristiken](#opener-heuristik): `privacy.restrict3rdpartystorage.heuristic.window_open`, `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Deaktivieren der Netzwerkpartitionierung

Die Netzwerkpartitionierung kann mit der Präferenz `privacy.partition.network_state` deaktiviert werden.

#### Deaktivieren der dynamischen Zustandspartitionierung

Um die dynamische Speicherpartitionierung für alle Sites zu deaktivieren, können Sie die Präferenz `network.cookie.cookieBehavior` verwenden:

| Wert | Beschreibung                                                           |
| ---- | ---------------------------------------------------------------------- |
| 5    | Ablehnen (bekannter) Tracker und partitionieren Drittanbieterspeicher. |
| 4    | Nur Tracker ablehnen (Speicherpartitionierung deaktiviert).            |
| 0    | Alles erlauben                                                         |

#### Bestimmte Ursprünge von der Partitionierung ausschließen

Die dynamische Zustandspartitionierung kann auch für bestimmte Ursprünge mit der Präferenz `privacy.restrict3rdpartystorage.skip_list` deaktiviert werden.
Diese Präferenz enthält eine durch Kommas getrennte Liste von Ursprüngen, die ausgenommen werden.
Der Präferenzwert sollte folgendes Format haben: `first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`.

Zum Beispiel, um die Partitionierung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Präferenz wie folgt setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Platzhalter für entweder die erste oder die dritte Partei verwenden.
Beispielsweise um die Partitionierung für `videos.example` auf allen Sites zu deaktivieren oder um die gesamte Partitionierung auf `unpartitioned.example` zu deaktivieren, würden Sie die Präferenz wie folgt setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```
