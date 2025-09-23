---
title: State Partitioning
slug: Web/Privacy/Guides/State_Partitioning
l10n:
  sourceCommit: 273c94d6c22ee0084a5de9c5adba8f94d8d01444
---

**State Partitioning** ist eine umfassende Anstrengung von Mozilla, die Verwaltung des clientseitigen Zustands (d.h. der im Browser gespeicherten Daten) in Firefox zu überarbeiten, um die Fähigkeit von Websites zu mindern, diesen Zustand für das Tracking über verschiedene Seiten hinweg auszunutzen, z. B. über [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

Das Ziel dieser Anstrengung besteht darin, jedem von einem Benutzer besuchten Website einen partitionierten Speicherort bereitzustellen.
Dieser Artikel bietet einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie man betroffene Websites debuggt.

Ab Firefox 103 ist die Zustandspartitionierung standardmäßig aktiviert.

## Motivation

### Cross-Site-Tracking mit gemeinsam genutztem Zustand

Browser verwenden traditionell Schlüssel für clientseitige Zustände basierend auf dem Ursprung (oder manchmal auf der registrierbaren Domain), von der die Ressource geladen wurde.
Zum Beispiel werden die Cookies, `localStorage`-Objekte und Caches, die einem Iframe zur Verfügung stehen, der von `https://example.com/hello.html` geladen wird, durch `example.com` gekennzeichnet.
Dies gilt unabhängig davon, ob der Browser derzeit Ressourcen von dieser Domain als _First-Party_-Ressourcen oder als eingebettete _Third-Party_-Ressourcen lädt.
Tracker haben diesen Cross-Site-Zustand genutzt, um Benutzerkennungen zu speichern und auf sie über verschiedene Websites hinweg zuzugreifen.
Das untenstehende Beispiel zeigt, wie `example.com` seinen Cross-Site-Zustand (in diesem Fall Cookies) nutzen kann, um einen Benutzer sowohl auf seiner eigenen Website als auch auf `A.example` und `B.example` zu verfolgen.

![Ein Beispiel für Cross-Site-Zustand](example-cross-site-state.png)

### Frühere Ansätze zur Blockierung von Cross-Site-Tracking

Die bisherigen Cookie-Richtlinien von Firefox versuchen, das Tracking zu mindern, indem sie den Zugriff auf bestimmte Speicher-APIs (z. B. Cookies und `localStorage`) für bestimmte Domains unter bestimmten Bedingungen blockieren.
Zum Beispiel verhindert unsere Richtlinie "blockiere alle Third-Party-Cookies", dass alle Domains auf bestimmte Speicher-APIs zugreifen können, wenn sie in einem Third-Party-Kontext geladen werden.
Unsere aktuelle [Standard-Cookie-Richtlinie](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) blockiert den Zugriff in einem Third-Party-Kontext nur für Domains, die als Tracker klassifiziert sind.

## Zustandspartitionierung

Zustandspartitionierung ist ein anderer Ansatz, um Cross-Site-Tracking zu verhindern.
Anstatt den Zugriff auf bestimmte zustandsbehaftete APIs in einem Third-Party-Kontext zu blockieren, stellt Firefox eingebetteten Ressourcen einen separaten Speichercontainer für jede Hauptwebsite zur Verfügung.
Genauer gesagt, Firefox doppelt die Schlüssel für alle clientseitigen Zustände nach dem [Ursprung](https://html.spec.whatwg.org/multipage/browsers.html#origin) der geladenen Ressource und der übergeordneten [Website](https://html.spec.whatwg.org/multipage/browsers.html#site).
In den meisten Fällen ist die übergeordnete Website das Schema und {{Glossary("eTLD", "eTLD+1")}} der top-level Seite, die der Benutzer besucht.

Im untenstehenden Beispiel wird `example.com` in `A.example` und `B.example` eingebettet.
Da der Speicher jedoch partitioniert ist, gibt es drei unterschiedliche Speichercontainer (anstatt nur einen).
Der Tracker kann weiterhin auf den Speicher zugreifen, aber da jeder Speichercontainer zusätzlich unter der übergeordneten Website gekennzeichnet ist, unterscheiden sich die Daten, auf die er auf A zugreifen kann, von den Daten auf B.
Dies verhindert, dass ein Tracker eine Kennung in seinen Cookies speichert, wenn er direkt besucht wird, und diese Kennung dann abruft, wenn er in andere Websites eingebettet ist.

![Ein Beispiel für Zustandspartitionierung](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat ein Arbeitselement für [Client-Side Storage Partitioning](https://privacycg.github.io/storage-partitioning/).
Dies dient als Übersicht über die Standardisierungsbemühungen für Speicherpartitionierung in den betroffenen Standards.
Wir beabsichtigen, unsere Implementierung der Zustandspartitionierung mit diesen Bemühungen in Einklang zu bringen, wenn das Arbeitselement standardisiert wird.

### Status der Partitionierung in Firefox

- [**Netzwerkpartitionierung**](#netzwerkpartitionierung): Seit Firefox 85 standardmäßig für alle Benutzer aktiviert.
- [**Dynamische Partitionierung**](#dynamische_partitionierung): Seit Firefox 103 standardmäßig für alle Benutzer aktiviert. Vorher:
  - Seit Firefox 86: Aktiviert für Benutzer, die ["Strikte" Datenschutzmaßnahmen](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) aktiviert haben.
  - Seit Firefox 90: Aktiviert im privaten Modus.

## Statische Partitionierung

### Speicherpartitionierung

Um zu verhindern, dass über JavaScript zugängliche Speicher-APIs für das Cross-Site-Tracking genutzt werden, wird zugänglicher Speicher nach der übergeordneten Website partitioniert.
Dieser Mechanismus bedeutet generell, dass eine Third-Party, die in eine übergeordnete Website eingebettet ist, nicht auf Daten zugreifen kann, die unter einer anderen übergeordneten Website gespeichert sind.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Shared Workers](/de/docs/Web/API/SharedWorker)
- [Service Workers](/de/docs/Web/API/Service_Worker_API)

### Netzwerkpartitionierung

Netzwerkbezogene APIs sind nicht dazu gedacht, dass Websites Daten speichern, aber sie können [missbraucht](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/) werden, um Cross-Site-Tracking zu betreiben.
Daher sind die folgenden Netzwerk-APIs und Caches **dauerhaft** nach der übergeordneten Website partitioniert.

> [!NOTE]
> Netzwerkpartitionierung ist dauerhaft.
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
- Zwischen-CA-Cache
- TLS-Client-Zertifikate
- TLS-Sitzungs-Identifikatoren
- Prefetch
- Preconnect
- {{Glossary("Preflight_request", "CORS-Preflight")}} Cache
- WebRTC deviceID
- {{Glossary("bfcache", "Backward/forward cache (bfcache)")}}

## Dynamische Partitionierung

Generell kann der Zugang zu nicht partitionierten Cookies von Third-Parties weiterhin gewährt werden, wenn die Storage Access API unterstützt wird:

- unter Verwendung der [Storage Access API](#storage_access_api).
- automatisch, z. B. bei Third-Parties, die eine föderierte Anmeldung bereitstellen.

Details zu automatischen Genehmigungen finden Sie im Abschnitt [Heuristiken für den Speicherzugang](#heuristiken_für_den_speicherzugang).

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Heuristiken für den Speicherzugang

Um die Webkompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, um unpartitionierten Zugang zu Cookies automatisch für Third-Parties zu gewähren, die eine Benutzerinteraktion erhalten.
Diese Heuristiken sollen es ermöglichen, dass einige Third-Party-Integrationen, die im Web üblich sind, weiterhin funktionieren.

> [!WARNING]
> Heuristiken für den Speicherzugang sind ein Übergangsmerkmal und sollen verhindern, dass Websites nicht funktionieren.
> Sie sollten nicht für aktuelle und zukünftige Webentwicklungen verwendet werden.

#### Opener-Heuristik

Wenn ein partitionierter Third-Party eine Pop-up-Fenster öffnet, das [Opener-Zugriff](/de/docs/Web/API/Window/opener) auf das ursprüngliche Dokument hat und der Benutzer mit diesem Pop-up interagiert, wird der Third-Party ein Speicherzugang für seinen Einbettungskontext für 30 Tage gewährt.

#### Navigations-Heuristik

Angenommen, eine Website unter `a.example` navigiert einen Benutzer zu `b.example` im selben Fenster, der Benutzer interagiert mit `b.example`, und dann wird der Benutzer schnell zurück zu `a.example` navigiert. In einem solchen Fall wird `b.example` als Third-Party auf `a.example` ein Speicherzugang für 30 Tage gewährt.

## Storage Access API

Third-Party-Frames können
[document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) verwenden, um unpartitionierten Zugang zu Cookie über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu beantragen.
Sobald der Zugang gewährt wird, erhält die anfragende Partei Zugang zu ihren gesamten First-Party-Cookies (d.h. zu den Cookies, auf die sie auch dann Zugriff hätte, wenn sie als First-Party besucht würde).

> [!WARNING]
> Wenn der Speicherzugang gewährt wird, können weiterhin Verweise auf den partitionierten Speicher bestehen.
> Websites sollten sich jedoch nicht darauf verlassen, dass sie partitionierte und unpartitionierte Cookies gleichzeitig verwenden können.

## Debugging

Wir ermutigen Website-Besitzer, ihre Websites zu testen, insbesondere solche, die auf Integrationen mit Drittanbietern angewiesen sind.
Es gibt mehrere Funktionen in Firefox, die das Testen erleichtern.

### Protokollierung

Hier ist ein Überblick über die Nachrichten, die in die Webkonsole protokolliert werden, wenn im Third-Party-Kontext mit dem Speicher interagiert wird.
In den folgenden Beispielen ist `a.example` die übergeordnete Website, die das Third-Party-Frame `b.example` einbettet.

| Grund                                                                                                                            | Konsolennachricht                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Der Speicher eines Third-Party-Frames ist partitioniert                                                                          | Partitionierter Cookie- oder Speicherzugang wurde "b.example" bereitgestellt, da es im Third-Party-Kontext geladen wurde und die Speicherpartitionierung aktiviert ist. |
| Zugang zu unpartitionierten Cookies wird durch [Heuristiken für den Speicherzugang](#heuristiken_für_den_speicherzugang) gewährt | Speicherzugang automatisch gewährt für First-Party-Isolierung "b.example" auf "a.example".                                                                              |
| Zugang zu unpartitionierten Cookies wird über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) gewährt     | Speicherzugang gewährt für Ursprung "b.example" auf "a.example".                                                                                                        |

### Dritten Speicherzugang löschen

Wenn ein Third-Party-Iframe Speicherzugang zum übergeordneten Kontext gewährt wird, setzt Firefox eine Berechtigung.
Um den Zugriff zu widerrufen, können Sie die Berechtigung über das [Website-Informationsfenster](https://support.mozilla.org/en-US/kb/site-information-panel) im Berechtigungsbereich unter "Cross-site-Cookies" löschen.

### Testeinstellungen

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Einstellungen in einem separaten Firefox-Profil verwenden oder setzen Sie sie nach dem Testen zurück.

#### Webkompatibilitätsfunktionen deaktivieren

Das Setzen von `privacy.antitracking.enableWebcompat` auf `false` wird **alle** ETP- und Webkompatibilitätsfunktionen der Zustandspartitionierung deaktivieren.
Das Deaktivieren dieser Funktionen kann beim Testen nützlich sein, um sicherzustellen, dass Ihre Website vollständig mit dem Zustandspartitionierungsmechanismus in Firefox kompatibel ist und nicht auf temporäre Heuristiken angewiesen ist.

Funktionen, die durch die Einstellung deaktiviert werden, umfassen:

- [Heuristiken für den Speicherzugang](#heuristiken_für_den_speicherzugang): Unpartitionierter Zugang zu Cookies kann nur über die Storage Access API erworben werden.
- Automatische Speicherzugriffsberechtigungen: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird den Benutzer immer auffordern.
- [SmartBlock's "Entsperren bei Opt-In"-Funktion](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), die bestimmte Tracker ermöglicht, wenn Benutzer mit ihnen interagieren.
- Jegliche temporären [Anti-Tracking-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions), die Websites durch den Skip-Listing-Mechanismus gewährt werden.

#### Heuristiken deaktivieren

Die folgenden Einstellungen können verwendet werden, um einzelne Heuristiken für den Speicherzugang über den [Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) zu deaktivieren:

- Aktivieren / Deaktivieren der [Navigations-Heuristik](#navigations-heuristik): `privacy.restrict3rdpartystorage.heuristic.navigation`
- Aktivieren / Deaktivieren der [Opener-Heuristik](#opener-heuristik): `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Netzwerkpartitionierung deaktivieren

Die Netzwerkpartitionierung kann mit der Einstellung `privacy.partition.network_state` deaktiviert werden.

#### Dynamische Zustandspartitionierung deaktivieren

Um die dynamische Speicherpartitionierung für alle Websites zu deaktivieren, können Sie die Einstellung `network.cookie.cookieBehavior` verwenden:

| Wert | Beschreibung                                                   |
| ---- | -------------------------------------------------------------- |
| 5    | Drittanbieterspeicher partitionieren.                          |
| 4    | Tracker ablehnen (Speicherpartitionierung deaktiviert).        |
| 0    | Allen Speicher erlauben (Speicherpartitionierung deaktiviert). |

Andere Werte dieser Einstellung können den Zugriff auf Drittanbieterspeicher vollständig deaktivieren.

#### Spezifische Ursprünge von der Partitionierung ausnehmen

Die dynamische Zustandspartitionierung kann auch für bestimmte Ursprünge mit der Einstellung `privacy.restrict3rdpartystorage.skip_list` deaktiviert werden.
Diese Einstellung hält eine durch Kommas getrennte Liste von Ursprüngen, die ausgenommen werden sollen.
Der Einstellungswert sollte folgendem Format folgen: `first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`.

Zum Beispiel, um die Partitionierung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Einstellung wie folgt setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Platzhalter sowohl für die First- als auch die Third-Party verwenden.
Zum Beispiel, um die Partitionierung für `videos.example` auf allen Seiten zu deaktivieren oder um alle Partitionierungen auf `unpartitioned.example` zu deaktivieren, würden Sie die Einstellung wie folgt setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```
