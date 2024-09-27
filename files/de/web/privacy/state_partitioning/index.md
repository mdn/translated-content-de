---
title: State Partitioning
slug: Web/Privacy/State_Partitioning
l10n:
  sourceCommit: a7dabad208b75bc11b1540e7b0047934e4c69991
---

**State Partitioning** ist eine umfassende Initiative von Mozilla, um die Verwaltung von clientseitigem Zustand in Firefox (d.h. im Browser gespeicherte Daten) zu überarbeiten, um die Möglichkeit von Websites, diesen Zustand für Cross-Site-Tracking zu missbrauchen, einzuschränken. Dies geschieht zum Beispiel über [Third-Party-Cookies](/de/docs/Web/Privacy/Third-party_cookies).

Dieses Vorhaben zielt darauf ab, dies zu erreichen, indem für jede Webseite, die ein Benutzer besucht, ein partitionierter Speicherort bereitgestellt wird. Dieser Artikel gibt einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie man betroffene Websites debuggt.

State Partitioning ist derzeit standardmäßig im Firefox Nightly Channel aktiviert. Ein Teil der Anstrengungen zur State Partitioning (nämlich [Network Partitioning](#netzwerkpartitionierung)) wurde seit Version 85 im Release-Channel von Firefox standardmäßig aktiviert.

## Motivation

### Cross-Site-Tracking unter Verwendung eines gemeinsamen Zustands

Browser verwenden üblicherweise den Ursprung (oder manchmal die registrierbare Domain) der Quelle, von der ein Ressourcen geladen wurde, als Schlüssel für den clientseitigen Zustand. Beispielsweise werden die Cookies, `localStorage`-Objekte und Caches, die einem von `https://example.com/hello.html` geladenen `iframe` zur Verfügung stehen, mit `example.com` als Schlüssel versehen. Dies gilt unabhängig davon, ob der Browser derzeit Ressourcen von dieser Domain als erstklassige _First-Party_-Ressourcen oder als eingebettete _Third-Party_-Ressourcen lädt. Tracker haben sich diesen Cross-Site-Zustand zunutze gemacht, um Benutzer-IDs zu speichern und über Websites hinweg darauf zuzugreifen. Das untenstehende Beispiel zeigt, wie `example.com` seinen Cross-Site-Zustand (in diesem Fall Cookies) verwenden kann, um einen Benutzer über seine eigene Website sowie `A.example` und `B.example` hinweg zu verfolgen.

![Ein Beispiel für Cross-Site-Zustand](example-cross-site-state.png)

### Frühere Ansätze zur Verhinderung von Cross-Site-Tracking

Firefox' frühere Cookie-Richtlinien versuchten, das Tracking zu mindern, indem der Zugriff auf einige Speicher-APIs (z.B. Cookies und `localStorage`) für bestimmte Domains unter bestimmten Bedingungen blockiert wurde. Beispielsweise verhindert unsere "alle Third-Party-Cookies blockieren"-Richtlinie, dass alle Domains in einem Third-Party-Kontext auf bestimmte Speicher-APIs zugreifen können. Unsere aktuelle [Standard-Cookie-Richtlinie](/de/docs/Web/Privacy/Storage_Access_Policy) blockiert den Zugriff in einem Third-Party-Kontext nur für Domains, die als Tracker klassifiziert sind.

## State Partitioning

State Partitioning ist ein anderer Ansatz zur Verhinderung von Cross-Site-Tracking. Anstatt den Zugriff auf bestimmte zustandsbehaftete APIs in einem Third-Party-Kontext zu blockieren, bietet Firefox eingebetteten Ressourcen einen separaten Speicherbereich für jede Top-Level-Website. Konkret schlüsselt Firefox den gesamten clientseitigen Zustand doppelt nach dem [Origin](https://html.spec.whatwg.org/multipage/browsers.html#origin) der geladenen Ressource und der Top-Level-[Site](https://html.spec.whatwg.org/multipage/browsers.html#site) auf. In den meisten Fällen ist die Top-Level-Site das Schema und [eTLD+1](/de/docs/Glossary/eTLD) der von dem Benutzer besuchten Top-Level-Seite.

Im untenstehenden Beispiel ist `example.com` in `A.example` und `B.example` eingebettet. Da der Speicher partitioniert ist, gibt es jedoch drei verschiedene Speicherbereiche (anstatt nur einen). Der Tracker kann weiterhin auf den Speicher zugreifen, aber da jeder Speicherbereich zusätzlich unter der Top-Level-Site verschlüsselt ist, werden die auf A zugänglichen Daten von den auf B zugänglichen Daten unterschiedlich sein. Dies verhindert, dass ein Tracker eine Kennung in seinen Cookies speichert, wenn er direkt besucht wird, und diese Kennung dann beim Einbetten in andere Websites abruft.

![Ein Beispiel für State Partitioning](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat ein Arbeitselement für [Client-Side Storage Partitioning](https://privacycg.github.io/storage-partitioning/). Dies dient als Überblick über die Standardisierungsbemühungen für Speicherpartitionierung in den betroffenen individuellen Standards. Wir beabsichtigen, unsere State Partitioning Umsetzung mit diesen Bemühungen in Einklang zu bringen, während das Arbeitselement standardisiert wird.

### Status der Partitionierung in Firefox

- [**Network Partitioning**](#netzwerkpartitionierung): Seit Firefox 85 standardmäßig für alle Benutzer aktiviert.
- [**Dynamic Partitioning**](#dynamische_partitionierung):
  - Seit Firefox 86: Aktiviert für Benutzer, die ["strengen" Privatschutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) aktiviert haben.
  - Seit Firefox 90: Aktiviert im Privaten Modus.

## Statische Partitionierung

### Speicherpartitionierung

Um zu verhindern, dass JavaScript-zugängliche Speicher-APIs für Cross-Site-Tracking verwendet werden, wird der zugängliche Speicher nach Top-Level-Site partitioniert. Dieser Mechanismus bedeutet, dass ein Third-Party, das in einer Top-Level-Site eingebettet ist, im Allgemeinen nicht auf Daten zugreifen kann, die unter einer anderen Top-Level-Site gespeichert sind.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Shared Workers](/de/docs/Web/API/SharedWorker)
- [Service Workers](/de/docs/Web/API/Service_Worker_API)

### Netzwerkpartitionierung

Netzwerkbezogene APIs sind nicht dazu gedacht, dass Websites Daten speichern, aber sie können [missbraucht werden](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/), um Cross-Site-Tracking zu betreiben. Aus diesem Grund sind die folgenden Netzwerk-APIs und Caches **dauerhaft** nach der Top-Level-Site partitioniert.

> [!NOTE]
> Die Netzwerkpartitionierung ist dauerhaft.
> Websites können diese Einschränkungen nicht steuern oder lockern.

### Netzwerk-APIs

- [HTTP Cache](/de/docs/Web/HTTP/Caching)
- Bildcache
- Favicon Cache
- Verbindungspooling
- Stylesheet Cache
- [DNS](/de/docs/Glossary/DNS)
- HTTP-Authentifizierung
- [Alt-Svc](/de/docs/Web/HTTP/Headers/Alt-Svc)
- Spekulative Verbindungen
- Schriftarten & Schriftarten-Cache
- [HSTS](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
- OCSP
- Zwischen CA-Cache
- TLS-Client-Zertifikate
- TLS-Sitzungskennungen
- Prefetch
- Preconnect
- [CORS-preflight](/de/docs/Glossary/Preflight_request) Cache
- WebRTC-Geräte-ID

## Dynamische Partitionierung

Im Allgemeinen, wenn der zugängliche Speicher nach der Top-Level-Site partitioniert ist, kann der Zugriff auf unpartitionierte Third-Party-Cookies dennoch gewährt werden, wenn die Storage Access API unterstützt wird:

- unter Verwendung der [Storage Access API](#storage_access_api).
- automatisch, wie zum Beispiel für Third-Parties, die ein föderiertes Login anbieten.

Details zu automatischen Genehmigungen sind im Abschnitt [Heuristiken zum Speicherzugriff](#heuristiken_zum_speicherzugriff) aufgeführt.

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Heuristiken zum Speicherzugriff

Um die Webkompatibilität zu verbessern, umfasst Firefox derzeit einige Heuristiken, um Third-Parties, die Benutzerinteraktion erhalten, automatisch unpartitionierten Zugriff auf Cookies zu gewähren. Diese Heuristiken sollen es einigen auf dem Web üblichen Third-Party-Integrationen ermöglichen, weiterhin zu funktionieren.

> [!WARNING]
> Heuristiken zum Speicherzugriff sind ein Übergangsmerkmal zur Vermeidung von Webseitenfehlern.
> Sie sollten nicht für die jetzige und zukünftige Webentwicklung verwendet werden.

#### Opener-Heuristiken

- Wenn ein partitioniertes Third-Party ein Pop-up-Fenster öffnet, das [Opener-Zugriff](/de/docs/Web/API/Window/opener) auf das Ursprungsdokument hat, wird dem Third-Party für 30 Tage Speicherzugriff auf seinen Einbettungskontext gewährt.
- Wenn eine erstklassige `a.example` ein Dritte-Partei-Pop-up `b.example` öffnet, wird `b.example` ein Third-Party-Speicherzugriff auf `a.example` für 30 Tage gewährt.

> [!NOTE]
> Für Third-Parties, die diese Heuristiken für Trackingzwecke missbrauchen, könnten wir die Benutzerinteraktion mit dem Popup erfordern, bevor der Speicherzugriff gewährt wird.

#### Redirect-Heuristiken

- Wenn eine Seite `b.example` zu `a.example` weitergeleitet wird, erhält `b.example` Speicherzugriff auf seine Einbettung `a.example`, wenn sowohl `a.example` als auch `b.example` innerhalb der letzten 10 Minuten besucht und interagiert wurden.
  Dieser Speicherzugriff wird für 15 Minuten gewährt.
- Wenn ein Tracker `tracker.example` (wie durch den Enhanced Tracking Protection klassifiziert) zu einem Nicht-Tracker `a.example` weiterleitet und `tracker.example` als Erstpartei innerhalb der letzten 45 Tage Benutzerinteraktion erhalten hat, wird `tracker.example` Speicherzugriff auf `a.example` für 15 Minuten gewährt.

## Storage Access API

Third-Party-Frames können
[document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) verwenden, um unpartitionierten Zugriff auf Cookie über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern. Sobald gewährt, hat die anfragende Partei Zugriff auf die gesamten Erstpartei-Cookies (d.h. die Cookies, auf die sie zugreifen könnte, wenn sie als Erstpartei besucht würde).

> [!WARNING]
> Auch wenn Speicherzugriff gewährt wird, können weiterhin Referenzen zum partitionierten Speicher bestehen.
> Websites sollten sich jedoch nicht darauf verlassen, sowohl partitionierte als auch unpartitionierte Cookies gleichzeitig verwenden zu können.

## Debugging

Wir ermutigen Seitenbesitzer, ihre Websites zu testen, insbesondere solche, die von Third-Party-Inhalte-Integrationen abhängig sind. Es gibt mehrere Funktionen in Firefox, die das Testen erleichtern.

### Protokollierung

Hier ist ein Überblick über die Nachrichten, die an die Web-Konsole protokolliert werden, wenn im Dritte-Partei-Kontext mit Speicher interagiert wird. In den folgenden Beispielen ist `a.example` die Top-Level-Site, die den Third-Party-Frame `b.example` einbindet.

| Grund                                                                                                                         | Konsolennachricht                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Speicher eines Third-Party-Frames wird partitioniert                                                                          | Partitionierter Cookie- oder Speicherzugriff wurde auf "b.example" bereitgestellt, weil es im Third-Party-Kontext geladen und Speicherpartitionierung aktiviert ist. |
| Zugriff auf unpartitionierte Cookies wird durch [Heuristiken zum Speicherzugriff](#heuristiken_zum_speicherzugriff) gewährt   | Speicherzugriff wurde für First-Party-Isolierung von "b.example" bei "a.example" automatisch gewährt.                                                                |
| Zugriff auf unpartitionierte Cookies wird über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) gewährt | Speicherzugriff wurde für Herkunft "b.example" bei "a.example" gewährt.                                                                                              |

### Zugriff auf Third-Party-Speicher löschen

Wenn einem Third-Party-Iframe Zutritt zum Speicher im Kontext des Elternteils gewährt wird, setzt Firefox eine Berechtigung. Um den Zugriff zu widerrufen, können Sie die Berechtigung über das [Seiteninformationsmenü](https://support.mozilla.org/en-US/kb/site-information-panel) im Bereich "Berechtigungen" unter "Cross-Site Cookies" löschen.

### Testeinstellungen

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Einstellungen in einem separaten Firefox-Profil einstellen oder sie nach dem Testen zurücksetzen.

#### Webkompatibilitätsfunktionen deaktivieren

Indem `privacy.antitracking.enableWebcompat` auf `false` gesetzt wird, werden **alle** ETP und State Partitioning Web-Kompatibilitätsfunktionen deaktiviert. Das Deaktivieren dieser Funktionen kann beim Testen nützlich sein, um sicherzustellen, dass Ihre Webseite vollständig mit dem State Partitioning Mechanismus in Firefox kompatibel ist und sich nicht auf temporäre Heuristiken stützt.

Funktionen, die durch die Voreinstellung deaktiviert werden, umfassen:

- [Heuristiken zum Speicherzugriff](#heuristiken_zum_speicherzugriff): Unpartitionierter Zugriff auf Cookies kann nur über die Storage Access API erlangt werden.
- Automatische Speicherzugriffserteilungen: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird immer den Benutzer auffordern.
- [SmartBlock's "unblock on opt-in" Funktion](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), die bestimmte Tracker erlaubt, wenn Benutzer mit ihnen interagieren.
- Jegliche temporäre [Anti-Tracking-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions), die Websites über den Skip-Listing-Mechanismus gewährt wurden.

#### Heuristiken deaktivieren

Die folgenden Einstellungen können verwendet werden, um individuelle Heuristiken zum Speicherzugriff über den [Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) zu deaktivieren:

- Aktivieren/deaktivieren der [Redirect-Heuristiken](#redirect-heuristiken): `privacy.restrict3rdpartystorage.heuristic.recently_visited`, `privacy.restrict3rdpartystorage.heuristic.redirect`
- Aktivieren/deaktivieren der [Window-Open-Heuristiken](#opener-heuristiken): `privacy.restrict3rdpartystorage.heuristic.window_open`, `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Netzwerkpartitionierung deaktivieren

Die Netzwerkpartitionierung kann mit der Einstellung `privacy.partition.network_state` deaktiviert werden.

#### Dynamische State Partitioning deaktivieren

Um die dynamische Speicherpartitionierung für alle Websites zu deaktivieren, können Sie die Einstellung `network.cookie.cookieBehavior` verwenden:

| Wert | Beschreibung                                                         |
| ---- | -------------------------------------------------------------------- |
| 5    | (Bekannte) Tracker ablehnen und Third-Party-Speicher partitionieren. |
| 4    | Nur Tracker ablehnen (Speicherpartitionierung deaktiviert).          |
| 0    | Alles erlauben                                                       |

#### Bestimmte Ursprünge von der Partitionierung ausschließen

Die dynamische State Partitioning kann auch für bestimmte Ursprünge mit der Einstellung `privacy.restrict3rdpartystorage.skip_list` deaktiviert werden. Diese Einstellung enthält eine kommaseparierte Liste von Ursprüngen, die ausgeschlossen werden sollen. Der Wert der Einstellung sollte folgendes Format haben: `first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`.

Zum Beispiel, um die Partitionierung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Einstellung auf folgendes setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Platzhalter für die erste oder dritte Partei verwenden. Zum Beispiel, um die Partitionierung für `videos.example` auf allen Seiten zu deaktivieren oder um die gesamte Partitionierung auf `unpartitioned.example` zu deaktivieren, würden Sie die Einstellung auf folgendes setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
