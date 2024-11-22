---
title: Partitionierung des Zustands
slug: Web/Privacy/State_Partitioning
l10n:
  sourceCommit: 6f58b8afb8e045e0d706ac0f0fdeacfaea487f86
---

**Partitionierung des Zustands** ist ein umfassendes Vorhaben von Mozilla, um die Verwaltung von clientseitigem Zustand (d. h. im Browser gespeicherte Daten) in Firefox neu zu gestalten. Ziel ist es, die Möglichkeit von Websites zu verringern, den Zustand für Tracking über verschiedene Websites hinweg zu missbrauchen, z. B. durch [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies).

Dieses Vorhaben zielt darauf ab, jedem besuchten Website eine partitionierte Speicherlocation zur Verfügung zu stellen. Dieser Artikel gibt einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie man betroffene Sites debuggen kann.

Ab Firefox 103 ist die Partitionierung des Zustands standardmäßig aktiviert.

## Motivation

### Cross-Site-Tracking mittels gemeinsam genutztem Zustand

Browser verwenden traditionell den Ursprung (oder manchmal die registrierbare Domain) des Ortes, von dem ein Ressourcen geladen wurde, um den clientseitigen Zustand zu kennzeichnen. Beispielweise werden die Cookies, `localStorage`-Objekte und Caches, die einem `iframe` zur Verfügung stehen, das von `https://example.com/hello.html` geladen wird, nach `example.com` gekennzeichnet. Dies gilt unabhängig davon, ob der Browser derzeit Ressourcen von dieser Domain als _Erstanbieter_ oder als eingebettete _Drittanbieter_-Ressourcen lädt. Tracking-Anbieter haben diesen cross-site Zustand genutzt, um Benutzeridentifikatoren zu speichern und diese über Websites hinweg abzurufen. Das folgende Beispiel zeigt, wie `example.com` seinen interaktiven Zustand (in diesem Fall Cookies) verwenden kann, um einen Benutzer sowohl auf seiner eigenen Site als auch auf `A.example` und `B.example` zu verfolgen.

![Ein Beispiel für den cross-site Zustand](example-cross-site-state.png)

### Frühere Ansätze zur Blockierung von Cross-Site-Tracking

Frühere Cookie-Richtlinien von Firefox versuchten, Tracking zu mindern, indem der Zugriff auf einige Speicher-APIs (z. B. Cookies und `localStorage`) für bestimmte Domains unter bestimmten Bedingungen blockiert wurde. Beispielsweise verhindert unsere "Blockiere alle Drittanbieter-Cookies"-Richtlinie, dass alle Domains, wenn sie in einem Drittanbieter-Kontext geladen werden, auf bestimmte Speicher-APIs zugreifen können. Unsere aktuelle [Standard-Cookie-Richtlinie](/de/docs/Web/Privacy/Storage_Access_Policy) blockiert den Zugriff im Drittanbieter-Kontext nur für als Tracker klassifizierte Domains.

## Partitionierung des Zustands

Die Partitionierung des Zustands ist ein anderer Ansatz zur Vermeidung von Cross-Site-Tracking. Anstatt den Zugriff auf bestimmte zustandsbehaftete APIs im Drittanbieter-Kontext zu blockieren, stellt Firefox eingebetteten Ressourcen einen separaten Speicherbereich für jede Top-Level-Website zur Verfügung. Konkret schlüsselt Firefox den gesamten clientseitigen Zustand doppelt nach dem [Ursprung](https://html.spec.whatwg.org/multipage/browsers.html#origin) der ladenden Ressource und der Top-Level-[Website](https://html.spec.whatwg.org/multipage/browsers.html#site). In den meisten Fällen ist die Top-Level-Website das Schema und {{Glossary("eTLD", "eTLD+1")}} der Top-Level-Seite, die der Benutzer besucht.

Im folgenden Beispiel wird `example.com` in `A.example` und `B.example` eingebettet. Da der Speicher jedoch partitioniert ist, gibt es drei unterschiedliche Speicherbereiche (statt eines). Der Tracker kann zwar noch auf Speicher zugreifen, aber da jeder Speicherbereich zusätzlich unter der Top-Level-Website gekennzeichnet ist, werden die Daten, auf die er Zugriff hat, auf A anders sein als auf B. Dies verhindert, dass ein Tracker einen Identifikator in seinen Cookies speichert, wenn er direkt besucht wird, und dann diesen Identifikator abrufen kann, wenn er in anderen Websites eingebettet ist.

![Ein Beispiel für die Partitionierung des Zustands](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat ein Arbeitsitem für die [Client-Side Storage Partitioning](https://privacycg.github.io/storage-partitioning/). Dies dient als Übersicht über die Standardisierungsbemühungen für die Speicherpartitionierung in den betroffenen individuellen Standards. Wir beabsichtigen, unsere Implementierung der Zustands-Partitionierung mit diesen Bemühungen abzustimmen, sobald das Arbeitsitem standardisiert ist.

### Status der Partitionierung in Firefox

- [**Netzwerk-Partitionierung**](#netzwerk-partitionierung): Seit Firefox 85 standardmäßig für alle Benutzer aktiviert.
- [**Dynamische Partitionierung**](#dynamische_partitionierung): Seit Firefox 103 standardmäßig für alle Benutzer aktiviert. Vorher:
  - Seit Firefox 86: Aktiviert für Benutzer, die [„strenge“ Datenschutzschutzeinstellungen](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) aktivieren.
  - Seit Firefox 90: Aktiviert im privaten Modus.

## Statische Partitionierung

### Speicher-Partitionierung

Um zu verhindern, dass JavaScript-zugängliche Speicher-APIs für Cross-Site-Tracking verwendet werden, wird der zugängliche Speicher nach der Top-Level-Site partitioniert. Dieser Mechanismus bedeutet im Allgemeinen, dass ein Drittanbieter, der in eine Top-Level-Site eingebettet ist, nicht auf Daten zugreifen kann, die unter einer anderen Top-Level-Site gespeichert sind.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Shared Workers](/de/docs/Web/API/SharedWorker)
- [Service Workers](/de/docs/Web/API/Service_Worker_API)

### Netzwerk-Partitionierung

Netzwerkbezogene APIs sind nicht dazu gedacht, von Websites zum Speichern von Daten verwendet zu werden, aber sie können für Cross-Site-Tracking [missbraucht](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/) werden. Daher sind die folgenden Netzwerk-APIs und Caches **dauerhaft** nach der Top-Level-Site partitioniert.

> [!NOTE]
> Netzwerk-Partitionierung ist dauerhaft. Websites können diese Einschränkungen weder steuern noch lockern.

### Netzwerk-APIs

- [HTTP-Cache](/de/docs/Web/HTTP/Caching)
- Bild-Cache
- Favicon-Cache
- Verbindungspooling
- Stylesheet-Cache
- {{Glossary("DNS", "DNS")}}
- HTTP-Authentifizierung
- [Alt-Svc](/de/docs/Web/HTTP/Headers/Alt-Svc)
- Spekulative Verbindungen
- Schriftarten & Schriftarten-Cache
- [HSTS](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
- OCSP
- Zwischenzertifizierungsstellen-Cache
- TLS-Client-Zertifikate
- TLS-Sitzungskennungen
- Prefetch
- Preconnect
- {{Glossary("Preflight_request", "CORS-Preflight")}} Cache
- WebRTC deviceID

## Dynamische Partitionierung

Wenn im Allgemeinen zugänglicher Speicher nach Top-Level-Site partitioniert ist, kann der Zugriff auf nicht partitionierte Cookies von Drittanbietern noch gewährt werden, wenn die Speicherzugriffs-API unterstützt wird:

- durch Nutzung der [Storage Access API](#storage_access_api).
- automatisch, z. B. für Drittanbieter, die eine föderierte Anmeldung bereitstellen.

Details zu automatischen Gewährungen finden sich im Abschnitt [Storage Access Heuristics](#speicherzugangsheuristik).

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Speicherzugangsheuristik

Um die Kompatibilität mit dem Web zu verbessern, enthält Firefox derzeit einige Heuristiken, um Drittanbietern, die Benutzerinteraktionen erhalten, automatisch unpartitionierten Zugriff auf Cookies zu gewähren. Diese Heuristiken sollen es ermöglichen, dass einige Drittanbieter-Integrationen, die im Web üblich sind, weiterhin funktionieren.

> [!WARNING]
> Speicherzugangsheuristiken sind ein Übergangsmerkmal, das dazu dient, Website-Ausfälle zu verhindern. Sie sollten nicht für die aktuelle und zukünftige Webentwicklung verwendet werden.

#### Opener-Heuristiken

- Wenn ein partitionierter Drittanbieter ein Pop-up-Fenster öffnet, das [opener access](/de/docs/Web/API/Window/opener) zu dem Ausgangsdokument hat, erhält der Drittanbieter Speicherzugriff auf seinen Einbettungsanbieter für 30 Tage.
- Wenn ein Erstanbieter `a.example` ein Drittanbieter-Pop-up `b.example` öffnet, erhält `b.example` für 30 Tage Drittanbieter-Speicherzugriff auf `a.example`.

> [!NOTE]
> Bei Drittanbietern, die diese Heuristik für Trackingzwecke missbrauchen, können wir verlangen, dass Benutzer mit dem Pop-up interagieren, bevor der Speicherzugriff gewährt wird.

#### Weiterleitungsheuristik

- Wenn eine Site `b.example` zu `a.example` umleitet, erhält `b.example` Speicherzugriff auf seinen Einbettungsanbieter `a.example`, wenn sowohl `a.example` als auch `b.example` innerhalb der letzten 10 Minuten besucht und mit ihnen interagiert wurde. Dieser Speicherzugriff wird für 15 Minuten gewährt.
- Wenn ein Tracker `tracker.example` (wie durch den Enhanced Tracking Protection klassifiziert) zu einem Nicht-Tracker `a.example` umleitet und `tracker.example` in den letzten 45 Tagen als Erstanbieter Benutzerinteraktionen erhalten hat, erhält `tracker.example` Speicherzugriff auf `a.example` für 15 Minuten.

## Storage Access API

Drittanbieter-Frames können [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) verwenden, um über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) unpartitionierten Zugriff auf Cookies zu beantragen. Sobald dies gewährt wird, wird der anfragende Drittanbieter Zugriff auf seine gesamten Erstanbieter-Cookies erhalten (d. h. die Cookies, auf die er Zugriff hätte, wenn er als Erstanbieter besucht wird).

> [!WARNING]
> Wenn der Speicherzugriff gewährt ist, können immer noch Verweise auf den partitionierten Speicher bestehen. Websites sollten jedoch nicht darauf vertrauen, gleichzeitig partitionierte und unpartitionierte Cookies verwenden zu können.

## Debugging

Wir ermutigen Website-Betreiber, ihre Sites zu testen, insbesondere diejenigen, die sich auf Integrationen von Drittanbietern stützen. Es gibt mehrere Funktionen in Firefox, um das Testen zu erleichtern.

### Protokollierung

Hier ist ein Überblick über die Nachrichten, die an die Webkonsole protokolliert werden, wenn im Drittanbieter-Kontext mit Speicher interagiert wird. In den folgenden Beispielen ist `a.example` die Top-Level-Site, die das Drittanbieter-Frame `b.example` einbettet.

| Grund                                                                                                                         | Konsolennachricht                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Der Speicher eines Drittanbieter-Frames wird partitioniert                                                                    | Partitionierter Cookie- oder Speicherzugriff wurde für "b.example" bereitgestellt, weil es im Drittanbieter-Kontext geladen wird und Speicherpartitionierung aktiviert ist. |
| Zugriff auf unpartitionierte Cookies wird durch [Storage access heuristics](#speicherzugangsheuristik) gewährt                | Speicherzugriff automatisch gewährt für First-Party-Isolierung "b.example" auf "a.example".                                                                                 |
| Zugriff auf unpartitionierte Cookies wird über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) gewährt | Speicherzugriff für den Ursprung "b.example" auf "a.example" gewährt.                                                                                                       |

### Dritte-Anbieter-Speicherzugriff löschen

Wird einem Drittanbieter-`iframe` Speicherzugriff auf den übergeordneten Kontext gewährt, setzt Firefox eine Berechtigung. Um den Zugriff zu widerrufen, können Sie die Berechtigung über das [Site-Informationsfeld](https://support.mozilla.org/en-US/kb/site-information-panel) im Abschnitt Berechtigungen unter "Cross-site Cookies" löschen.

### Testpräferenzen

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Präferenzen in einem separaten Firefox-Profil setzen oder sie nach dem Testen zurücksetzen.

#### Webkompatibilitätsfunktionen deaktivieren

Das Setzen von `privacy.antitracking.enableWebcompat` auf `false` wird **alle** Webkompatibilitätsmerkmale von ETP und der Zustandspartitionierung deaktivieren. Das Deaktivieren dieser Merkmale kann beim Testen nützlich sein, um sicherzustellen, dass Ihre Website vollständig mit dem Mechanismus der Zustandspartitionierung in Firefox kompatibel ist und sich nicht auf temporäre Heuristiken verlässt.

Die durch die Einstellung deaktivierten Funktionen umfassen:

- [Speicherzugangsheuristik](#speicherzugangsheuristik): Unpartitionierter Zugriff auf Cookies kann nur über die Storage Access API erworben werden.
- Automatische Speicherzugriffsgenehmigungen: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird immer den Benutzer auffordern.
- [SmartBlock's "unblock on opt-in" feature](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), das bestimmten Trackern erlaubt, wenn Benutzer mit ihnen interagieren.
- Alle temporären [Anti-Tracking-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions), die Websites über den Skip-Listing-Mechanismus gewährt werden.

#### Heuristiken deaktivieren

Die folgenden Präferenzen können verwendet werden, um individuelle Speicherzugangsheuristiken über den [Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) zu deaktivieren:

- Aktivieren / deaktivieren der [Weiterleitungsheuristiken](#weiterleitungsheuristik): `privacy.restrict3rdpartystorage.heuristic.recently_visited`, `privacy.restrict3rdpartystorage.heuristic.redirect`
- Aktivieren / deaktivieren der [Fenster-öffnen Heuristik](#opener-heuristiken): `privacy.restrict3rdpartystorage.heuristic.window_open`, `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Netzwerk-Partitionierung deaktivieren

Die Netzwerk-Partitionierung kann mit der `privacy.partition.network_state` Pref deaktiviert werden.

#### Dynamische Zustandspartitionierung deaktivieren

Um die dynamische Speicherpartitionierung für alle Sites zu deaktivieren, können Sie die `network.cookie.cookieBehavior` Pref verwenden:

| Wert | Beschreibung                                                         |
| ---- | -------------------------------------------------------------------- |
| 5    | Lehne (bekannte) Tracker ab und partitioniere Drittanbieterspeicher. |
| 4    | Lehne nur Tracker ab (Speicherpartitionierung deaktiviert).          |
| 0    | Alles erlauben                                                       |

#### Bestimmte Ursprünge von der Partitionierung ausnehmen

Die dynamische Zustandspartitionierung kann auch für bestimmte Ursprünge mit der `privacy.restrict3rdpartystorage.skip_list` Präferenz deaktiviert werden. Diese Präferenz hält eine durch Kommas getrennte Liste von Ursprüngen, die ausgenommen werden sollen. Der Präferenzwert sollte folgendes Format haben: `first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`.

Zum Beispiel, um die Partitionierung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Präferenz auf folgendes setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Joker für entweder den ersten oder dritten Anbieter verwenden. Zum Beispiel, um die Partitionierung für `videos.example` auf allen Sites zu deaktivieren oder um alle Partitionierungen auf `unpartitioned.example` zu deaktivieren, würden Sie die Präferenz auf folgendes setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
