---
title: Partitionierung von Zuständen
slug: Web/Privacy/Guides/State_Partitioning
l10n:
  sourceCommit: d4a38b6e45d90b96c4d4486d396be81947b4855b
---

**Partitionierung von Zuständen** ist eine umfassende Initiative von Mozilla, um die Verwaltung des clientseitigen Zustands (d.h. der im Browser gespeicherten Daten) in Firefox neu zu gestalten. Ziel ist es, die Fähigkeit von Websites, Zustände für Tracking über Websites hinweg zu missbrauchen, zu verringern, z. B. über [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

Diese Initiative zielt darauf ab, dies zu erreichen, indem jedem von einem Benutzer besuchten Website ein partitionierter Speicherort bereitgestellt wird. Dieser Artikel gibt einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie man betroffene Seiten debuggt.

Ab Firefox 103 ist die Partitionierung von Zuständen standardmäßig aktiviert.

## Motivation

### Cross-Site-Tracking mit gemeinsam genutztem Zustand

Browser verwenden traditionell den Ursprung (oder manchmal die registrierbare Domain) der Quelle, von der aus ein Ressource geladen wurde, um den clientseitigen Zustand festzulegen. Beispielsweise werden die Cookies, die `localStorage`-Objekte und Caches, die einem `iframe`, geladen von `https://example.com/hello.html`, zur Verfügung stehen, durch `example.com` festgelegt. Dies gilt unabhängig davon, ob der Browser derzeit Ressourcen von dieser Domain als _First-Party_-Ressourcen oder als eingebettete _Third-Party_-Ressourcen lädt. Tracker haben diesen Cross-Site-Zustand genutzt, um Benutzerkennungen zu speichern und über Websites hinweg darauf zuzugreifen. Das untenstehende Beispiel zeigt, wie `example.com` seinen Cross-Site-Zustand (in diesem Fall Cookies) verwenden kann, um einen Benutzer sowohl auf seiner eigenen Website als auch auf `A.example` und `B.example` zu verfolgen.

![Ein Beispiel für Cross-Site-Zustand](example-cross-site-state.png)

### Bisherige Ansätze zur Blockierung von Cross-Site-Tracking

Firefoxx's bisherige Cookie-Richtlinien versuchen, das Tracking zu mindern, indem sie den Zugriff auf bestimmte Speicher-APIs (z. B. Cookies und `localStorage`) für bestimmte Domains unter bestimmten Bedingungen blockieren. Beispielsweise verhindert unsere „Blockieren Sie alle Drittanbieter-Cookies“-Richtlinie, dass alle Domains auf bestimmte Speicher-APIs zugreifen, wenn sie im Drittanbieter-Kontext geladen werden. Unsere aktuelle [standardmäßige Cookie-Richtlinie](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) blockiert den Zugriff im Drittanbieter-Kontext nur für Domains, die als Tracker klassifiziert sind.

## Partitionierung von Zuständen

Die Partitionierung von Zuständen ist ein anderer Ansatz, um Cross-Site-Tracking zu verhindern. Anstatt den Zugriff auf bestimmte zustandsbezogene APIs im Drittanbieter-Kontext zu blockieren, bietet Firefox eingebetteten Ressourcen ein separates Speicherverzeichnis für jede Top-Level-Website. Genauer gesagt, Firefox doppelschlüsselt alle clientseitigen Zustände nach dem [Ursprung](https://html.spec.whatwg.org/multipage/browsers.html#origin) der geladenen Ressource und der Top-Level-[Site](https://html.spec.whatwg.org/multipage/browsers.html#site). In den meisten Fällen ist die Top-Level-Site das Schema und die {{Glossary("registrable_domain", "registrierbare Domain")}} der von dem Benutzer besuchten Top-Level-Seite.

Im untenstehenden Beispiel ist `example.com` in `A.example` und `B.example` eingebettet. Da der Speicher jedoch partitioniert ist, gibt es drei getrennte Speicherverzeichnisse (statt eines). Der Tracker kann weiterhin auf den Speicher zugreifen, aber da jedes Speicherverzeichnis zusätzlich unter der Top-Level-Site verschlüsselt ist, werden die Daten, auf die es bei A zugreifen kann, anders sein als die bei B. Dies verhindert, dass ein Tracker eine Kennung in seinen Cookies speichert, wenn er direkt besucht wird, und diese Kennung dann beim Einbetten in andere Websites abruft.

![Ein Beispiel für die Partitionierung von Zuständen](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat ein Arbeitselement für [Client-Seitige Speicherpartitionierung](https://privacycg.github.io/storage-partitioning/). Dies dient als Übersicht über die Standardisierungsbemühungen für Speicherpartitionierung in den betroffenen individuellen Standards. Wir beabsichtigen, unsere Implementierung der Partitionierung von Zuständen mit diesen Bemühungen in Einklang zu bringen, während das Arbeitselement standardisiert wird.

### Status der Partitionierung in Firefox

- [**Netzwerkpartitionierung**](#netzwerkpartitionierung): Seit Firefox 85 standardmäßig für alle Nutzer aktiviert.
- [**Dynamische Partitionierung**](#dynamische_partitionierung): Seit Firefox 103 standardmäßig für alle Nutzer aktiviert. Davor:
  - Seit Firefox 86: Aktiviert für Nutzer, die ["Strenge" Datenschutzeinstellungen](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) aktiviert haben.
  - Seit Firefox 90: Aktiviert im privaten Modus.

## Statische Partitionierung

### Speicherpartitionierung

Um zu verhindern, dass über JavaScript zugängliche Speicher-APIs für Cross-Site-Tracking genutzt werden, wird der zugängliche Speicher nach der Top-Level-Site partitioniert. Dieser Mechanismus bedeutet, dass ein Drittanbieter, der in eine Top-Level-Site eingebettet ist, im Allgemeinen nicht auf Daten zugreifen kann, die unter einer anderen Top-Level-Site gespeichert sind.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Shared Workers](/de/docs/Web/API/SharedWorker)
- [Service Workers](/de/docs/Web/API/Service_Worker_API)

### Netzwerkpartitionierung

Netzwerkbezogene APIs sind nicht dazu gedacht, von Websites zum Speichern von Daten benutzt zu werden, können jedoch für Cross-Site-Tracking [missbraucht](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/) werden. Daher werden die folgenden Netzwerk-APIs und Caches **dauerhaft** nach der Top-Level-Site partitioniert.

> [!NOTE]
> Netzwerkpartitionierung ist dauerhaft.
> Websites können diese Einschränkungen nicht steuern oder aufheben.

### Netzwerk-APIs

- [HTTP Cache](/de/docs/Web/HTTP/Guides/Caching)
- Image Cache
- Favicon Cache
- Connection Pooling
- Script Cache
- Stylesheet Cache
- {{Glossary("DNS", "DNS")}}
- HTTP-Authentifizierung
- [Alt-Svc](/de/docs/Web/HTTP/Reference/Headers/Alt-Svc)
- Spekulative Verbindungen
- Schriftarten & Schriftart-Cache
- [HSTS](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
- OCSP
- Cache für Zwischenzertifizierungsstellen (CA)
- TLS-Client-Zertifikate
- TLS-Sitzungskennungen
- Prefetch
- Vorverbindung
- {{Glossary("Preflight_request", "CORS-Preflight")}} Cache
- WebRTC deviceID
- {{Glossary("bfcache", "Vorwärts-/Rückwärtscache (bfcache)")}}

## Dynamische Partitionierung

Im Allgemeinen gilt, dass wenn zugänglicher Speicher nach Top-Level-Site partitioniert ist, der Zugang zu unpartitionierten Cookies Dritter immer noch gewährt werden kann, wenn die Storage Access API unterstützt wird:

- durch die Verwendung der [Storage Access API](#storage_access_api).
- automatisch, zum Beispiel für Drittanbieter, die eine föderierte Anmeldung bereitstellen.

Details zu automatischen Gewährungen finden Sie im Abschnitt [Heuristiken für den Speicherzugang](#heuristiken_für_den_speicherzugang).

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Heuristiken für den Speicherzugang

Um die Web-Kompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, die unpartitionierbaren Zugriff auf Cookies automatisch für Dritte gewähren, wenn diese eine Benutzerinteraktion erhalten. Diese Heuristiken sollen ermöglichen, dass einige auf dem Web häufig vorkommende Drittanbieter-Integrationen weiterhin funktionieren.

> [!WARNING]
> Heuristiken für den Speicherzugang sind ein Übergangsmerkmal, das darauf abzielt, Website-Unterbrechungen zu verhindern.
> Sie sollten für die aktuelle und zukünftige Webentwicklung nicht darauf basieren.

#### Heuristik für den Opener

Wenn ein partitionierter Drittanbieter ein Popup-Fenster öffnet, das [Opener-Zugriff](/de/docs/Web/API/Window/opener) auf das Ursprungsdokument hat und der Benutzer mit diesem Popup interagiert, wird dem Drittanbieter der Speicherzugang zu seinem Einbettungskontext für 30 Tage gewährt.

#### Heuristik für die Navigation

Angenommen, eine Website, die auf `a.example` gehostet wird, leitet einen Benutzer zu `b.example` im selben Fenster weiter, der Benutzer interagiert mit `b.example` und dann wird der Benutzer schnell zu `a.example` zurücknavigiert. In einem solchen Fall wird `b.example` Speicherzugang als Drittanbieter auf `a.example` für 30 Tage gewährt.

## Storage Access API

Drittanbieter-Frames können
[document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) verwenden, um unpartitionierten Zugriff auf Cookies durch die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu beantragen. Sobald dieser gewährt wird, erhält die antragstellende Partei Zugriff auf ihre gesamten First-Party-Cookies (d.h. die Cookies, auf die sie zugreifen könnte, wenn sie als First-Party besucht wird).

> [!WARNING]
> Wenn Speicherzugang gewährt wird, können immer noch Referenzen zum partitionierten Speicher bestehen bleiben.
> Webseiten sollten sich jedoch nicht darauf verlassen können, sowohl partitionierte als auch unpartitionierte Cookies gleichzeitig zu verwenden.

## Debugging

Wir ermutigen Website-Besitzer, ihre Seiten zu testen, insbesondere diejenigen, die auf Integrationen mit Drittanbieter-Inhalten angewiesen sind. In Firefox gibt es mehrere Funktionen, die das Testen erleichtern.

### Protokollierung

Hier ist ein Überblick über die Nachrichten, die bei der Interaktion mit Speicher in einem Drittanbieter-Kontext in der Web-Konsole protokolliert werden. In den folgenden Beispielen ist `a.example` die Top-Level-Site, die das Drittanbieter-Frame `b.example` einbettet.

| Grund                                                                                                                        | Konsolennachricht                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Der Speicher eines Drittanbieter-Frames ist partitioniert                                                                    | Partitionierter Cookie- oder Speicherzugang wurde für "b.example" bereitgestellt, weil es im Drittanbieter-Kontext geladen ist und Speicherpartitionierung aktiviert ist. |
| Zugang zu unpartitionierten Cookies wird durch [Speicherzugangs-Heuristiken](#heuristiken_für_den_speicherzugang) gewährt    | Speicherzugang automatisch für Isolation der First-Party "b.example" auf "a.example" gewährt.                                                                             |
| Zugang zu unpartitionierten Cookies wird über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) gewährt | Speicherzugang für Ursprung "b.example" auf "a.example" gewährt.                                                                                                          |

### Löschen des Drittanbieterspeicherzugangs

Wenn einem Drittanbieter-iframe Speicherzugang zum übergeordneten Kontext gewährt wird, setzt Firefox eine Berechtigung. Um den Zugang zu widerrufen, können Sie die Berechtigung über das [Site-Informations-Panel](https://support.mozilla.org/en-US/kb/site-information-panel) im Berechtigungsabschnitt unter „Cross-site Cookies“ löschen.

### Testeinstellungen

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Einstellungen in einem separaten Firefox-Profil vornehmen oder sie nach dem Testen zurücksetzen.

#### Deaktivieren von Web-Kompatibilitätsfunktionen

Das Setzen von `privacy.antitracking.enableWebcompat` auf `false` wird **alle** ETP- und State-Partitioning-Web-Kompatibilitätsfunktionen **deaktivieren**. Das Deaktivieren dieser Funktionen kann beim Testen nützlich sein, um sicherzustellen, dass Ihre Website vollständig mit dem State-Partitioning-Mechanismus in Firefox kompatibel ist und nicht von temporären Heuristiken abhängt.

Zu den durch den `pref` deaktivierten Funktionen gehören:

- [Speicherzugangs-Heuristiken](#heuristiken_für_den_speicherzugang): Unpartitionierter Zugriff auf Cookies kann nur über die Storage Access API erlangt werden.
- Automatische Speicherzugangsverleihungen: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird immer den Benutzer auffordern.
- [SmartBlock's "unblock on opt-in" Feature](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), das bestimmte Tracker erlaubt, wenn Benutzer mit ihnen interagieren.
- Alle temporären [Anti-Tracking-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions), die Webseiten über den Skip-Listing-Mechanismus gewährt werden.

#### Deaktivieren von Heuristiken

Die folgenden Einstellungen können verwendet werden, um einzelne Speicherzugangs-Heuristiken über den [config editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) zu deaktivieren:

- Aktivieren / Deaktivieren der [Navigationsheuristik](#heuristik_für_die_navigation): `privacy.restrict3rdpartystorage.heuristic.navigation`
- Aktivieren / Deaktivieren der [Opener-Heuristik](#heuristik_für_den_opener): `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Deaktivieren der Netzwerkpartitionierung

Die Netzwerkpartitionierung kann mit der Einstellung `privacy.partition.network_state` deaktiviert werden.

#### Deaktivieren der dynamischen Zustandspartitionierung

Um die dynamische Speicherpartitionierung für alle Seiten zu deaktivieren, können Sie die Einstellung `network.cookie.cookieBehavior` verwenden:

| Wert | Beschreibung                                                  |
| ---- | ------------------------------------------------------------- |
| 5    | Drittanbieter-Speicher partitionieren.                        |
| 4    | Tracker ablehnen (Speicherpartitionierung deaktiviert).       |
| 0    | Alle Speicher erlauben (Speicherpartitionierung deaktiviert). |

Andere Werte dieser Einstellung können den Drittanbieterspeicher vollständig deaktivieren.

#### Ausnahmen für bestimmte Ursprünge von der Partitionierung

Die dynamische Zustandspartitionierung kann auch für bestimmte Ursprünge mit der Einstellung `privacy.restrict3rdpartystorage.skip_list` deaktiviert werden. Diese Einstellung enthält eine kommagetrennte Liste von Ursprüngen, die ausgenommen sind. Der Einstellungswert sollte das folgende Format befolgen: `first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`.

Beispielsweise, um die Partitionierung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Einstellung auf Folgendes setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Platzhalter für entweder die First- oder Third-Party verwenden. Zum Beispiel, um die Partitionierung für `videos.example` auf allen Seiten zu deaktivieren, oder um alle Partitionierungen auf `unpartitioned.example` zu deaktivieren, würden Sie die Einstellung auf Folgendes setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```
