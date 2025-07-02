---
title: Zustandspartitionierung
slug: Web/Privacy/Guides/State_Partitioning
l10n:
  sourceCommit: 56c2f4e6c003b0c3453679aa37e602aa75a522ee
---

**Zustandspartitionierung** ist eine umfassende Initiative von Mozilla zur Überarbeitung der Verwaltung des clientseitigen Zustands in Firefox (d.h. der im Browser gespeicherten Daten), um die Möglichkeit von Websites zu verringern, diesen Zustand für ein Tracking über verschiedene Websites hinweg zu missbrauchen, z.B. über [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

Dieses Vorhaben zielt darauf ab, dies zu erreichen, indem jeder von einem Benutzer besuchten Website ein getrenntes Speichermedium zur Verfügung gestellt wird.
Dieser Artikel gibt einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie man betroffene Websites debuggen kann.

Ab Firefox 103 ist die Zustandspartitionierung standardmäßig aktiviert.

## Motivation

### Website-übergreifendes Tracking mit gemeinsamem Zustand

Browser ordnen traditionell den clientseitigen Zustand dem Ursprung (oder manchmal der registrierbaren Domain) zu, von dem ein Ressource geladen wurde.
Zum Beispiel werden die Cookies, `localStorage`-Objekte und Caches eines in einen `iframe` von `https://example.com/hello.html` geladenen Elements von `example.com` verwaltet.
Dies ist unabhängig davon, ob der Browser derzeit Ressourcen von dieser Domain als _First-Party_-Ressourcen oder als eingebettete _Third-Party_-Ressourcen lädt.
Tracker haben diesen websiteübergreifenden Zustand ausgenutzt, um Benutzerkennungen zu speichern und auf verschiedenen Websites darauf zuzugreifen.
Das folgende Beispiel zeigt, wie `example.com` seinen websiteübergreifenden Zustand (in diesem Fall Cookies) verwenden kann, um einen Benutzer sowohl auf seiner eigenen Website als auch auf `A.example` und `B.example` zu verfolgen.

![Ein Beispiel für websiteübergreifenden Zustand](example-cross-site-state.png)

### Frühere Ansätze zur Blockierung des website-übergreifenden Trackings

Frühere Cookie-Richtlinien von Firefox versuchen, das Tracking zu mindern, indem sie den Zugriff auf einige Speicher-APIs (z.B. Cookies und `localStorage`) für bestimmte Domains unter bestimmten Bedingungen blockieren.
Zum Beispiel verhindert unsere Richtlinie "Alle Drittanbieter-Cookies blockieren", dass alle Domains auf bestimmte Speicher-APIs zugreifen können, wenn sie in einem Drittanbieter-Kontext geladen werden.
Unsere aktuelle [Standard-Cookie-Richtlinie](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) blockiert den Zugriff im Drittanbieter-Kontext nur für Domains, die als Tracker klassifiziert sind.

## Zustandspartitionierung

Die Zustandspartitionierung ist ein anderer Ansatz zur Verhinderung des website-übergreifenden Trackings.
Anstatt den Zugriff auf bestimmte zustandsbehaftete APIs im Drittanbieter-Kontext zu blockieren, bietet Firefox eingebetteten Ressourcen einen separaten Speicherbereich für jede Top-Level-Website.
Genauer gesagt, verknüpft Firefox alle clientseitigen Zustände mit dem [Ursprung](https://html.spec.whatwg.org/multipage/browsers.html#origin) der geladenen Ressource und der Top-Level-[Site](https://html.spec.whatwg.org/multipage/browsers.html#site).
In den meisten Fällen ist die Top-Level-Site das Schema und {{Glossary("eTLD", "eTLD+1")}} der vom Benutzer besuchten Seite.

Im folgenden Beispiel ist `example.com` in `A.example` und `B.example` eingebettet.
Da der Speicher partitioniert ist, gibt es jedoch drei unterschiedliche Speicherbereiche (anstatt nur einen).
Der Tracker kann weiterhin auf den Speicher zugreifen, aber da jeder Speicherbereich zusätzlich unter der Top-Level-Site verknüpft ist, unterscheiden sich die Daten, auf die es auf A zugreifen kann, von den Daten auf B.
Dies verhindert, dass ein Tracker eine Kennung in seinen Cookies speichert, wenn er direkt besucht wird, und diese Kennung dann abruft, wenn er in anderen Websites eingebettet ist.

![Ein Beispiel für Zustandspartitionierung](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat ein Arbeitsdokument für [Client-Side Storage Partitioning](https://privacycg.github.io/storage-partitioning/).
Dies dient als Überblick über die Standardisierungsbemühungen für die Speicherpartitionierung in den betroffenen einzelnen Standards.
Wir beabsichtigen, unsere Implementierung der Zustandspartitionierung mit diesen Bemühungen in Einklang zu bringen, sobald das Arbeitsdokument standardisiert ist.

### Status der Partitionierung in Firefox

- [**Netzwerkpartitionierung**](#netzwerkpartitionierung): Seit Firefox 85 standardmäßig für alle Benutzer aktiviert.
- [**Dynamische Partitionierung**](#dynamische_partitionierung): Seit Firefox 103 standardmäßig für alle Benutzer aktiviert. Davor:
  - Seit Firefox 86: Aktiviert für Benutzer, die ["Strengere" Datenschutzmaßnahmen](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) aktiviert haben.
  - Seit Firefox 90: Aktiviert im privaten Surfen.

## Statische Partitionierung

### Speicherpartitionierung

Um zu verhindern, dass JavaScript-zugängliche Speicher-APIs für das website-übergreifende Tracking verwendet werden, wird der zugängliche Speicher nach Top-Level-Site partitioniert.
Dieser Mechanismus bedeutet, dass eine Drittpartei, die in eine Top-Level-Site eingebettet ist, im Allgemeinen nicht auf Daten zugreifen kann, die unter einer anderen Top-Level-Site gespeichert sind.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM-Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Geteilte Worker](/de/docs/Web/API/SharedWorker)
- [Service Worker](/de/docs/Web/API/Service_Worker_API)

### Netzwerkpartitionierung

Netzwerkbezogene APIs sind nicht dazu gedacht, dass Websites Daten speichern, sie können jedoch [missbraucht werden](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/), um ein website-übergreifendes Tracking zu ermöglichen.
Daher sind die folgenden Netzwerk-APIs und Caches **permanent** nach Top-Level-Site partitioniert.

> [!NOTE]
> Die Netzwerkpartitionierung ist permanent.
> Websites können diese Einschränkungen nicht steuern oder lockern.

### Netzwerk-APIs

- [HTTP Cache](/de/docs/Web/HTTP/Guides/Caching)
- Bild-Cache
- Favicon-Cache
- Verbindungs-Pooling
- Stylesheet-Cache
- {{Glossary("DNS", "DNS")}}
- HTTP-Authentifizierung
- [Alt-Svc](/de/docs/Web/HTTP/Reference/Headers/Alt-Svc)
- Spekulative Verbindungen
- Schriftarten & Schriftarten-Cache
- [HSTS](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
- OCSP
- Intermediate CA Cache
- TLS-Clientzertifikate
- TLS-Sitzungskennungen
- Prefetch
- Preconnect
- {{Glossary("Preflight_request", "CORS-Preflight")}}-Cache
- WebRTC deviceID
- {{Glossary("bfcache", "Backward/forward cache (bfcache)")}}

## Dynamische Partitionierung

Im Allgemeinen, wenn zugänglicher Speicher nach Top-Level-Site partitioniert ist, kann der Zugriff auf unpartitionierte Cookies einer Drittpartei immer noch gewährt werden, wenn die Storage Access API unterstützt wird:

- mit der [Storage Access API](#storage_access_api).
- automatisch, z.B. für Drittanbieter, die ein föderiertes Login bereitstellen.

Details zu automatischen Zugriffserlaubnissen finden Sie im Abschnitt [Storage Access Heuristics](#storage_access_heuristics).

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Storage Access Heuristics

Um die Webkompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, um unpartitionierten Zugriff auf Cookies automatisch an Drittparteien zu gewähren, die Benutzerinteraktionen erhalten.
Diese Heuristiken sollen es ermöglichen, dass einige auf dem Web häufig verwendete Drittanbieter-Integrationen weiterhin funktionieren.

> [!WARNING]
> Storage Access Heuristiken sind ein Übergangsmerkmal, das dazu gedacht ist, das Abbrechen von Websites zu verhindern.
> Sie sollten nicht als Grundlage für die aktuelle und zukünftige Webentwicklung verwendet werden.

#### Öffner-Heuristiken

- Wenn eine partitionierte Drittpartei ein Popup-Fenster öffnet, das [Öffner-Zugriff](/de/docs/Web/API/Window/opener) auf das ursprüngliche Dokument hat, wird der Drittpartei der Speicherzugriff für ihren Einbettungskontext für 30 Tage gewährt.
- Wenn eine First-Party `a.example` ein Drittanbieter-Popup `b.example` öffnet, erhält `b.example` Drittanbieter-Speicherzugriff auf `a.example` für 30 Tage.

> [!NOTE]
> Für Drittanbieter, die diese Heuristik für Tracking-Zwecke missbrauchen, können wir eine Benutzerinteraktion mit dem Popup verlangen, bevor der Speicherzugriff gewährt wird.

#### Redirect-Heuristiken

- Wenn eine Website `b.example` zu `a.example` weiterleitet, erhält `b.example` Speicherzugriff auf ihren Einbettungskontext `a.example`, wenn sowohl `a.example` als auch `b.example` innerhalb der letzten 10 Minuten besucht und interagiert wurden.
  Dieser Speicherzugriff wird für 15 Minuten gewährt.
- Wenn ein Tracker `tracker.example` (wie durch den Erweiterten Schutz vor Nachverfolgung klassifiziert) zu einem Nicht-Tracker `a.example` weiterleitet und `tracker.example` als First-Party innerhalb der letzten 45 Tage eine Benutzerinteraktion hatte, wird `tracker.example` Speicherzugriff auf `a.example` für 15 Minuten gewährt.

## Storage Access API

Drittanbieter-Frames können
[document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) verwenden, um unpartitionierten Zugriff auf Cookies über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu beantragen.
Sobald gewährt, erhält die anfordernde Partei Zugriff auf ihre gesamten First-Party-Cookies (d.h. die Cookies, auf die sie zugreifen könnte, wenn sie als First-Party besucht würde).

> [!WARNING]
> Wenn der Speicherzugriff gewährt wurde, können weiterhin Verweise auf den partitionierten Speicher bestehen.
> Websites sollten sich jedoch nicht darauf verlassen, sowohl partitionierte als auch unpartitionierte Cookies gleichzeitig verwenden zu können.

## Debugging

Wir ermutigen Website-Besitzer, ihre Seiten zu testen, insbesondere diejenigen, die sich auf Integrationen von Drittanbieter-Inhalten verlassen.
Es gibt mehrere Funktionen in Firefox, die das Testen erleichtern.

### Protokollierung

Hier ist ein Überblick über die Nachrichten, die in die Webkonsole protokolliert werden, wenn mit Speicher im Drittanbieter-Kontext interagiert wird.
In den folgenden Beispielen ist `a.example` die Top-Level-Site, die das Drittanbieter-Frame `b.example` einbettet.

| Grund                                                                                                                         | Konsolennachricht                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Der Speicher eines Drittanbieter-Frames ist partitioniert                                                                     | Partitionierter Cookie- oder Speicherzugriff wurde "b.example" gewährt, weil es im Drittanbieter-Kontext geladen wurde und die Speicherpartitionierung aktiviert ist. |
| Zugriff auf unpartitionierte Cookies wird durch [Storage Access Heuristics](#storage_access_heuristics) gewährt               | Speicherzugriff automatisch gewährt für First-Party-Isolation "b.example" auf "a.example".                                                                            |
| Zugriff auf unpartitionierte Cookies wird über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) gewährt | Speicherzugriff gewährt für Ursprung "b.example" auf "a.example".                                                                                                     |

### Dritte-Party-Speicherzugriff löschen

Wenn ein Drittanbieter-`iframe` Speicherzugriff auf den Elternkontext erhält, setzt Firefox eine Berechtigung.
Um den Zugriff zu widerrufen, können Sie die Berechtigung über das [Site Information Panel](https://support.mozilla.org/en-US/kb/site-information-panel) im Abschnitt Berechtigungen unter "Cross-site Cookies" löschen.

### Testpräferenzen

> [!WARNING]
> Stellen Sie sicher, diese Präferenzen in einem separaten Firefox-Profil zu setzen oder sie nach dem Testen zurückzusetzen.

#### Webkompatibilitätsfunktionen deaktivieren

Wenn `privacy.antitracking.enableWebcompat` auf `false` gesetzt ist, werden alle ETP- und Zustandspartitionierungs-Kompatibilitätsfunktionen **deaktiviert**.
Das Deaktivieren dieser Funktionen kann beim Testen nützlich sein, um sicherzustellen, dass Ihre Website vollständig mit dem Mechanismus der Zustandspartitionierung in Firefox kompatibel ist und nicht auf temporäre Heuristiken angewiesen ist.

Die durch die Voreinstellung deaktivierten Funktionen umfassen:

- [Storage Access Heuristics](#storage_access_heuristics): Unpartitionierter Zugriff auf Cookies kann nur über die Storage Access API erhalten werden.
- Automatische Speicherszugriffserlaubnisse: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird immer den Benutzer auffordern.
- [SmartBlocks "Unblock beim Opt-In"-Funktion](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), die bestimmte Tracker erlaubt, wenn Benutzer mit ihnen interagieren.
- Alle temporären [Anti-Tracking-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions), die Websites über den Überspringungsmechanismus gewährt werden.

#### Heuristiken deaktivieren

Die folgenden Präferenzen können verwendet werden, um einzelne Speicherzugriffsheuristiken über den [Config-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) zu deaktivieren:

- Aktivieren / deaktivieren der [Redirect-Heuristiken](#redirect-heuristiken): `privacy.restrict3rdpartystorage.heuristic.recently_visited`, `privacy.restrict3rdpartystorage.heuristic.redirect`
- Aktivieren / deaktivieren der [Fenster öffnen Heuristiken](#öffner-heuristiken): `privacy.restrict3rdpartystorage.heuristic.window_open`, `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Netzwerkpartitionierung deaktivieren

Die Netzwerkpartitionierung kann mit der Einstellung `privacy.partition.network_state` deaktiviert werden.

#### Dynamische Zustandspartitionierung deaktivieren

Um die dynamische Speicherpartitionierung für alle Seiten zu deaktivieren, können Sie die `network.cookie.cookieBehavior` Präferenz verwenden:

| Wert | Beschreibung                                                           |
| ---- | ---------------------------------------------------------------------- |
| 5    | (Bekannte) Tracker ablehnen und Drittanbieter-Speicher partitionieren. |
| 4    | Nur Tracker ablehnen (Speicherpartitionierung deaktiviert).            |
| 0    | Alle zulassen                                                          |

#### Bestimmte Ursprünge von der Partitionierung ausnehmen

Die dynamische Zustandspartitionierung kann auch für bestimmte Ursprünge mit der Präferenz `privacy.restrict3rdpartystorage.skip_list` deaktiviert werden.
Diese Präferenz enthält eine durch Kommas getrennte Liste von Ursprüngen, die ausgenommen werden sollen.
Der Wert der Präferenz sollte das folgende Format befolgen: `first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`.

Um beispielsweise die Partitionierung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Präferenz auf folgendes setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Platzhalter für entweder das erste oder dritte Party verwenden.
Um beispielsweise die Partitionierung für `videos.example` auf allen Seiten oder für `unpartitioned.example` aufzuheben, würden Sie die Präferenz auf folgendes setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```
