---
title: Zustandsaufteilung
slug: Web/Privacy/Guides/State_Partitioning
l10n:
  sourceCommit: 16f0f784e4f100162fcff278aa45d91f627a0357
---

**Zustandsaufteilung** ist ein umfassender Ansatz von Mozilla, um die Verwaltung des client-seitigen Zustands im Firefox-Browser neu zu gestalten. Ziel ist es, die Möglichkeit von Websites zu reduzieren, Zustände für cross-site tracking zu missbrauchen, z.B. über [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

Dieses Vorhaben zielt darauf ab, indem es jedem besuchten Website eine partitionierte Speicherstelle bietet. Dieser Artikel gibt einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie man betroffene Websites debuggen kann.

Ab Firefox 103 ist die Zustandsaufteilung standardmäßig aktiviert.

## Motivation

### Cross-site-Tracking mit gemeinsam genutztem Zustand

Browser verknüpfen traditionell den client-seitigen Zustand mit dem Ursprung (oder manchmal der registrierbaren Domäne) der geladenen Ressource. Zum Beispiel werden die Cookies, localStorage-Objekte und Caches, die einem iframe zur Verfügung stehen, das von `https://example.com/hello.html` geladen wird, durch `example.com` verknüpft. Dies gilt unabhängig davon, ob der Browser derzeit Ressourcen von dieser Domäne als _First-Party_-Ressourcen lädt oder als eingebettete _Drittanbieter_-Ressourcen. Tracker haben diesen cross-site-Zustand genutzt, um Benutzeridentifikatoren zu speichern und auf sie über Websites hinweg zuzugreifen. Das folgende Beispiel zeigt, wie `example.com` seinen cross-site-Zustand (in diesem Fall Cookies) nutzen kann, um einen Benutzer sowohl auf seiner eigenen Website als auch auf `A.example` und `B.example` zu verfolgen.

![Ein Beispiel für cross-site-Zustand](example-cross-site-state.png)

### Frühere Ansätze zur Blockierung von cross-site-Tracking

Frühere Cookie-Richtlinien von Firefox versuchten, das Tracking zu mildern, indem sie für bestimmte Domänen unter bestimmten Bedingungen den Zugriff auf einige Speicher-APIs blockierten (z.B. Cookies und localStorage). Zum Beispiel verhindert unsere Politik "alle Drittanbieter-Cookies blockieren", dass alle Domänen auf bestimmte Speicher-APIs zugreifen, wenn sie in einem Drittanbieter-Kontext geladen werden. Unsere aktuelle [Standard-Cookie-Richtlinie](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) blockiert den Zugriff im Drittanbieter-Kontext nur für als Tracker klassifizierte Domänen.

## Zustandsaufteilung

Zustandsaufteilung ist ein anderer Ansatz zur Verhinderung von cross-site-Tracking. Anstatt den Zugriff auf bestimmte zustandsbehaftete APIs in einem Drittanbieter-Kontext zu blockieren, stellt Firefox eingebetteten Ressourcen einen separaten Speicherbereich für jede oberste Website zur Verfügung. Genauer gesagt, verknüpft Firefox den gesamten client-seitigen Zustand doppelt, basierend auf dem [Ursprung](https://html.spec.whatwg.org/multipage/browsers.html#origin) der geladenen Ressource und der obersten [Seite](https://html.spec.whatwg.org/multipage/browsers.html#site). In den meisten Fällen ist die oberste Seite das Schema und {{Glossary("eTLD", "eTLD+1")}} der obersten Seite, die der Benutzer besucht.

Im folgenden Beispiel ist `example.com` in `A.example` und `B.example` eingebettet. Da Speicher jedoch partitioniert ist, gibt es drei unterschiedliche Speicherbereiche (anstatt einer). Der Tracker kann weiterhin auf den Speicher zugreifen, aber da jeder Speicherbereich zusätzlich unter der obersten Seite verknüpft ist, werden die Daten, auf die auf A zugegriffen werden kann, unterschiedlich sein von denen auf B. Dies wird verhindern, dass ein Tracker einen Identifikator in seinen Cookies speichert, wenn er direkt besucht wird, und diesen Identifikator dann abruft, wenn er in andere Websites eingebettet wird.

![Ein Beispiel für Zustandsaufteilung](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat einen Arbeitsauftrag für [Client-seitige Speicheraufteilung](https://privacycg.github.io/storage-partitioning/). Dies dient als Überblick über die Standardisierungsanstrengungen für die Speicheraufteilung in den betroffenen individuellen Standards. Wir beabsichtigen, unsere Implementierung der Zustandsaufteilung im Einklang mit diesen Bestrebungen zu bringen, sobald der Arbeitsauftrag standardisiert ist.

### Status der Aufteilung in Firefox

- [**Netzwerkaufteilung**](#netzwerkaufteilung): Für alle Benutzer seit Firefox 85 standardmäßig aktiviert.
- [**Dynamische Aufteilung**](#dynamische_aufteilung): Für alle Benutzer seit Firefox 103 standardmäßig aktiviert. Vorher:
  - Seit Firefox 86: Aktiviert für Benutzer, die ["Strikte" Datenschutzmaßnahmen](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) aktiviert haben.
  - Seit Firefox 90: Im privaten Modus aktiviert.

## Statische Aufteilung

### Speicheraufteilung

Um zu verhindern, dass über JavaScript zugängliche Speicher-APIs für cross-site tracking genutzt werden, wird zugänglicher Speicher nach oberster Seite partitioniert. Dieser Mechanismus bedeutet, dass ein Drittanbieter, der in einer obersten Seite eingebettet ist, grundsätzlich nicht auf Daten zugreifen kann, die unter einer anderen obersten Seite gespeichert sind.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Shared Workers](/de/docs/Web/API/SharedWorker)
- [Service Workers](/de/docs/Web/API/Service_Worker_API)

### Netzwerkaufteilung

Netzwerkbezogene APIs sind nicht dazu gedacht, dass Websites Daten speichern, aber sie können für cross-site tracking [missbraucht werden](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/). Daher werden die folgenden Netzwerk-APIs und Caches dauerhaft nach der obersten Seite partitioniert.

> [!NOTE]
> Netzwerkaufteilung ist permanent.
> Websites können diese Beschränkungen nicht kontrollieren oder lockern.

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
- TLS-Client-Zertifikate
- TLS-Sitzungskennungen
- Prefetch
- Preconnect
- {{Glossary("Preflight_request", "CORS-preflight")}} Cache
- WebRTC deviceID
- {{Glossary("bfcache", "Vorwärts/Rückwärts-Cache (bfcache)")}}

## Dynamische Aufteilung

Im Allgemeinen, wenn zugänglicher Speicher nach der obersten Seite partitioniert ist, kann trotzdem der Zugriff auf unpartitionierte Cookies von Dritten gewährt werden, wenn die Storage Access API unterstützt wird:

- mit der [Storage Access API](#storage_access_api).
- automatisch, wie bei Dritten, die föderierte Anmeldungen bereitstellen.

Details zu automatischen Gewährungen werden im Abschnitt [Storage Access Heuristics](#speicherzugriffsheuristiken) bereitgestellt.

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Speicherzugriffsheuristiken

Um die Web-Kompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, um unpartitionierten Zugang zu Cookies von Dritten automatisch zu gewähren, die Benutzerinteraktionen empfangen. Diese Heuristiken sind dazu gedacht, zu ermöglichen, dass einige häufig auf dem Web vorkommende Drittanbieter-Integrationen weiterhin funktionieren.

> [!WARNING]
> Speicherzugriffsheuristiken sind ein Übergangsmerkmal, um das Brechen von Websites zu verhindern.
> Sie sollten nicht für aktuelle und zukünftige Web-Entwicklung verwendet werden.

#### Opener-Heuristik

Wenn ein partitionierter Drittanbieter ein Pop-up-Fenster öffnet, das [opener-Zugriff](/de/docs/Web/API/Window/opener) auf das ursprüngliche Dokument hat und der Benutzer mit diesem Pop-up interagiert, wird dem Drittanbieter der Speicherzugriff für 30 Tage gewährt.

#### Navigationsheuristik

Angenommen, eine Website bei `a.example` navigiert einen Benutzer zu `b.example` im selben Fenster, der Benutzer interagiert mit `b.example`, dann wird der Benutzer schnell zurück zu `a.example` navigiert. In einem solchen Fall wird `b.example` als Drittanbieter auf `a.example` ein Speicherzugang für 30 Tage gewährt.

## Storage Access API

Drittanbieter-Frames können [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) nutzen, um über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) unpartitionierten Zugang zu Cookies anzufordern. Einmal gewährt, erhält die anfragende Partei Zugriff auf ihre gesamten First-Party-Cookies (d.h. die Cookies, auf die sie Zugriff hätte, wenn sie als First-Party besucht würde).

> [!WARNING]
> Wenn Speicherzugriff gewährt wird, kann es trotzdem noch Referenzen auf den partitionierten Speicher geben.
> Sites sollten sich jedoch nicht darauf verlassen können, partitionierte und unpartitionierte Cookies gleichzeitig zu verwenden.

## Debugging

Wir empfehlen den Site-Betreibern, ihre Sites zu testen, insbesondere solche, die sich auf Integrationen von Drittanbieter-Inhalten verlassen. Es gibt mehrere Funktionen in Firefox, die das Testen erleichtern.

### Logging

Hier ist ein Überblick über die Nachrichten, die in der Webkonsole protokolliert werden, wenn mit Speichern in einem Drittanbieter-Kontext interagiert wird. In den folgenden Beispielen ist `a.example` die oberste Seite, die das Drittanbieter-Frame `b.example` einbettet.

| Grund                                                                                                                         | Konsolennachricht                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Der Speicher eines Drittanbieter-Frames ist partitioniert                                                                     | Partitionierter Cookie- oder Speicherzugriff wurde "b.example" gewährt, da es im Drittanbieter-Kontext geladen wird und die Speicheraufteilung aktiviert ist. |
| Zugriff auf unpartitionierte Cookies wird durch [Speicherzugriffsheuristiken](#speicherzugriffsheuristiken) gewährt           | Speicherzugriff automatisch gewährt für First-Party-Isolation "b.example" auf "a.example".                                                                    |
| Zugriff auf unpartitionierte Cookies wird über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) gewährt | Speicherzugriff für Ursprung "b.example" auf "a.example" gewährt.                                                                                             |

### Drittanbieterspeicherzugriff löschen

Wenn ein Drittanbieter-iframe den Speicherzugriff auf den übergeordneten Kontext gewährt wird, setzt Firefox eine Berechtigung. Um den Zugriff aufzuheben, können Sie die Berechtigung über das [Site-Informationsfenster](https://support.mozilla.org/en-US/kb/site-information-panel) im Berechtigungsbereich unter "Cross-site Cookies" löschen.

### Testeinstellungen

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Einstellungen in einem separaten Firefox-Profil vornehmen oder sie nach dem Testen zurücksetzen.

#### Web-Kompatibilitätsfunktionen deaktivieren

Das Setzen von `privacy.antitracking.enableWebcompat` auf `false` wird **alle** ETP- und Zustandsaufteilungs-Web-Kompatibilitätsfunktionen deaktivieren. Das Deaktivieren dieser Funktionen kann beim Testen nützlich sein, um sicherzustellen, dass Ihre Website vollständig mit dem Zustandsaufteilungsmechanismus in Firefox kompatibel ist und nicht auf temporäre Heuristiken angewiesen ist.

Von der Voreinstellung ausgeschlossene Funktionen umfassen:

- [Speicherzugriffsheuristiken](#speicherzugriffsheuristiken): Unpartitionierter Zugang zu Cookies kann nur über die Storage Access API erworben werden.
- Automatische Speicherzugriffsgewährungen: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird den Benutzer immer auffordern.
- [SmartBlock's "unblock on opt-in" Funktion](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), die es bestimmten Trackern erlaubt, wenn Benutzer mit ihnen interagieren.
- Jegliche temporäre [Anti-Tracking-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions) die Websites über den Skip-Listing-Mechanismus gewährt wurden.

#### Heuristiken deaktivieren

Die folgenden Voreinstellungen können verwendet werden, um einzelne Speicherzugriffsheuristiken über den [Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) zu deaktivieren:

- Aktivieren / Deaktivieren der [Navigationsheuristik](#navigationsheuristik): `privacy.restrict3rdpartystorage.heuristic.navigation`
- Aktivieren / Deaktivieren der [Opener Heuristik](#opener-heuristik): `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Netzwerkaufteilung deaktivieren

Die Netzwerkaufteilung kann mit der Voreinstellung `privacy.partition.network_state` deaktiviert werden.

#### Dynamische Zustandsaufteilung deaktivieren

Um die dynamische Speicheraufteilung für alle Seiten zu deaktivieren, können Sie die Voreinstellung `network.cookie.cookieBehavior` verwenden:

| Wert | Beschreibung                                                                |
| ---- | --------------------------------------------------------------------------- |
| 5    | Ablehnen von (bekannten) Trackern und Aufteilung von Drittanbieterspeicher. |
| 4    | Nur Tracker ablehnen (Speicheraufteilung deaktiviert).                      |
| 0    | Alles erlauben                                                              |

#### Bestimmte Ursprünge von der Aufteilung ausnehmen

Die dynamische Zustandsaufteilung kann auch für bestimmte Ursprünge mit der Voreinstellung `privacy.restrict3rdpartystorage.skip_list` deaktiviert werden. Diese Voreinstellung enthält eine durch Komma getrennte Liste von Ursprüngen, die ausgenommen werden sollen. Der Wert der Voreinstellung sollte das folgende Format verwenden: `first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`.

Zum Beispiel, um die Aufteilung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Voreinstellung wie folgt setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Platzhalter sowohl für die First- als auch für die Drittpartei verwenden. Zum Beispiel, um die Aufteilung für `videos.example` auf allen Seiten zu deaktivieren, oder um die gesamte Aufteilung auf `unpartitioned.example` zu deaktivieren, würden Sie die Voreinstellung wie folgt setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```
