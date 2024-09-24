---
title: Zustandspartitionierung
slug: Web/Privacy/State_Partitioning
l10n:
  sourceCommit: a7dabad208b75bc11b1540e7b0047934e4c69991
---

**Zustandspartitionierung** ist ein umfassendes Bestreben von Mozilla, die Verwaltung des clientseitigen Zustands (d. h. der im Browser gespeicherten Daten) in Firefox zu überarbeiten, um die Fähigkeit von Websites zu verringern, den Zustand für das Cross-Site-Tracking zu missbrauchen, z. B. durch [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies).

Dieses Vorhaben zielt darauf ab, dies zu erreichen, indem jedem Websitenutzer ein partitionierter Speicherort bereitgestellt wird.
Dieser Artikel gibt einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie betroffene Websites debuggt werden können.

Die Zustandspartitionierung ist derzeit standardmäßig im Firefox Nightly Kanal aktiviert.
Ein Teil der Anstrengungen zur Zustandspartitionierung (nämlich [Netzwerkpartitionierung](#netzwerkpartitionierung)) wurde seit Version 85 im Release-Kanal von Firefox standardmäßig aktiviert.

## Motivation

### Cross-Site-Tracking mit gemeinsamem Zustand

Browser ordnen traditionell den clientseitigen Zustand nach Herkunft (oder manchmal dem registrierbaren Domain) der Ressource, von der sie geladen wurden.
Zum Beispiel werden die Cookies, localStorage-Objekte und Caches, die einem von `https://example.com/hello.html` geladenen iframe zur Verfügung stehen, nach `example.com` zugeordnet.
Dies gilt unabhängig davon, ob der Browser Ressourcen von dieser Domain derzeit als _First-Party_-Ressourcen oder als eingebettete _Third Party_-Ressourcen lädt.
Tracker haben diesen Cross-Site-Zustand genutzt, um Benutzerkennungen zu speichern und auf verschiedenen Websites darauf zuzugreifen.
Das untenstehende Beispiel zeigt, wie `example.com` seinen Cross-Site-Zustand (in diesem Fall Cookies) verwenden kann, um einen Benutzer auf seiner eigenen Site sowie `A.example` und `B.example` zu verfolgen.

![Ein Beispiel für Cross-Site-Zustand](example-cross-site-state.png)

### Frühere Ansätze zur Blockierung von Cross-Site-Tracking

Frühere Cookie-Richtlinien von Firefox versuchen, Tracking zu minimieren, indem sie den Zugang zu bestimmten Speicher-APIs (z. B. Cookies und localStorage) für bestimmte Domains unter bestimmten Bedingungen blockieren.
Zum Beispiel verhindert unsere "Blockiere alle Drittanbieter-Cookies"-Richtlinie, dass alle Domains auf bestimmte Speicher-APIs zugreifen können, wenn sie in einem Drittanbieter-Kontext geladen werden.
Unsere aktuelle [Standard-Cookie-Richtlinie](/de/docs/Web/Privacy/Storage_Access_Policy) blockiert den Zugriff im Drittanbieter-Kontext nur für Domains, die als Tracker klassifiziert sind.

## Zustandspartitionierung

Zustandspartitionierung ist ein anderer Ansatz, um Cross-Site-Tracking zu verhindern.
Anstatt den Zugang zu bestimmten zustandsbehafteten APIs im Drittanbieter-Kontext zu blockieren, stellt Firefox eingebetteten Ressourcen für jede Top-Level-Website einen separaten Speicherort zur Verfügung.
Genauer gesagt, doppelt Firefox den gesamten clientseitigen Zustand nach dem [Origin](https://html.spec.whatwg.org/multipage/browsers.html#origin) der geladenen Ressource und der Top-Level-[Site](https://html.spec.whatwg.org/multipage/browsers.html#site).
In den meisten Fällen ist die Top-Level-Site das Schema und {{Glossary("eTLD", "eTLD+1")}} der von dem Nutzer besuchten Top-Level-Seite.

Im untenstehenden Beispiel ist `example.com` in `A.example` und `B.example` eingebettet.
Da der Speicher jedoch partitioniert ist, gibt es drei unterschiedliche Speicherorte (statt einen).
Der Tracker kann weiterhin auf den Speicher zugreifen, aber da jeder Speicherort zusätzlich unter der Top-Level-Site zugeordnet ist, sind die Daten, auf die er auf A zugreifen kann, unterschiedlich von den Daten auf B.
Dies verhindert, dass ein Tracker eine Kennung in seinen Cookies speichert, wenn er direkt besucht wird, und diese Kennung dann abruft, wenn er in andere Websites eingebettet ist.

![Ein Beispiel für Zustandspartitionierung](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat ein Arbeitselement für [Client-Side Storage Partitioning](https://privacycg.github.io/storage-partitioning/).
Dies dient als Übersicht über die Standardisierungsanstrengungen für die Speicherpartitionierung in den betroffenen individuellen Standards.
Wir beabsichtigen, unsere Implementierung der Zustandspartitionierung an diese Bemühungen anzupassen, sobald das Arbeitselement standardisiert ist.

### Status der Partitionierung in Firefox

- [**Netzwerkpartitionierung**](#netzwerkpartitionierung): Seit Firefox 85 standardmäßig für alle Benutzer aktiviert.
- [**Dynamische Partitionierung**](#dynamische_partitionierung):
  - Seit Firefox 86: Aktiviert für Benutzer, die ["strikte" Datenschutzmaßnahmen](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) aktiviert haben.
  - Seit Firefox 90: Aktiviert im privaten Browsen.

## Statische Partitionierung

### Speicherpartitionierung

Um zu verhindern, dass JavaScript-zugängliche Speicher-APIs für Cross-Site-Tracking verwendet werden, wird zugänglicher Speicher nach Top-Level-Site partitioniert.
Dieser Mechanismus bedeutet, dass im Allgemeinen ein Drittanbieter, der in eine Top-Level-Site eingebettet ist, nicht auf Daten zugreifen kann, die unter einer anderen Top-Level-Site gespeichert sind.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Shared Workers](/de/docs/Web/API/SharedWorker)
- [Service Workers](/de/docs/Web/API/Service_Worker_API)

### Netzwerkpartitionierung

Netzwerkbezogene APIs sind nicht dafür gedacht, Websites zu ermöglichen, Daten zu speichern, jedoch können sie für Cross-Site-Tracking [missbraucht](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/) werden.
Daher werden die folgenden Netzwerk-APIs und Caches **dauerhaft** nach der Top-Level-Site partitioniert.

> [!NOTE]
> Netzwerkpartitionierung ist dauerhaft.
> Websites können diese Einschränkungen nicht steuern oder lockern.

### Netzwerk-APIs

- [HTTP Cache](/de/docs/Web/HTTP/Caching)
- Bild-Cache
- Favicon-Cache
- Verbindungs-Pooling
- Stylesheet-Cache
- [DNS](/de/docs/Glossary/DNS)
- HTTP-Authentifizierung
- [Alt-Svc](/de/docs/Web/HTTP/Headers/Alt-Svc)
- Spekulative Verbindungen
- Schriftarten & Schriftarten-Cache
- [HSTS](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
- OCSP
- Intermediate CA Cache
- TLS-Client-Zertifikate
- TLS-Sitzungskennungen
- Prefetch
- Preconnect
- [CORS-preflight](/de/docs/Glossary/Preflight_request) Cache
- WebRTC deviceID

## Dynamische Partitionierung

Im Allgemeinen, wenn zugänglicher Speicher nach Top-Level-Site partitioniert ist, kann der Zugriff auf unpartitionierte Cookies von Drittanbietern dennoch gewährt werden, wenn die Storage Access API unterstützt wird:

- mit der [Storage Access API](#storage_access_api).
- automatisch, etwa für Drittanbieter, die föderierte Logins bereitstellen.

Details zu automatischen Zugangsrechten finden Sie im Abschnitt [Storage Access Heuristics](#speicherzugangsheuristiken).

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Speicherzugangsheuristiken

Um die Webkompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, um unpartitionierten Zugang zu Cookies automatisch Drittanbietern zu gewähren, die Benutzerinteraktionen erhalten.
Diese Heuristiken sollen erlauben, dass einige Drittanbieter-Integrationen, die im Web verbreitet sind, weiterhin funktionieren.

> [!WARNING]
> Speicherzugangsheuristiken sind eine Übergangsfunktion, die verhindern soll, dass Websites nicht mehr funktionieren.
> Sie sollten nicht für die aktuelle und zukünftige Webentwicklung verwendet werden.

#### Opener-Heuristiken

- Wenn ein partitionierter Drittanbieter ein Popup-Fenster öffnet, das [Opener-Zugriff](/de/docs/Web/API/Window/opener) auf das Ursprungsdokument hat, erhält der Drittanbieter für 30 Tage Speicherzugriff auf seinen Einbettungs-Kontext.
- Wenn eine First-Party `a.example` ein Drittanbieter-Popup `b.example` öffnet, erhält `b.example` für 30 Tage Drittanbieter Speicherzugriff auf `a.example`.

> [!NOTE]
> Für Drittanbieter, die diese Heuristik zu Tracking-Zwecken missbrauchen, können wir eine Benutzerinteraktion mit dem Popup verlangen, bevor der Speicherzugang gewährt wird.

#### Redirect-Heuristiken

- Wenn eine Seite `b.example` zu `a.example` umleitet, erhält `b.example` Speicherzugang auf seine Einbettung `a.example`, wenn sowohl `a.example` als auch `b.example` in den letzten 10 Minuten besucht und mit ihnen interagiert wurde.
  Dieser Speicherzugang wird für 15 Minuten gewährt.
- Wenn ein Tracker `tracker.example` (wie durch den erweiterten Tracking-Schutz klassifiziert) zu einem Nicht-Tracker `a.example` umleitet und `tracker.example` in den letzten 45 Tagen als First-Party eine Benutzerinteraktion erhalten hat, erhält `tracker.example` für 15 Minuten Speicherzugang auf `a.example`.

## Storage Access API

Drittanbieter-Rahmen können
[document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) verwenden, um unpartitionierten Zugriff auf Cookies über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu beantragen.
Wenn gewährt, erhält die anfragende Partei Zugriff auf alle ihre First-Party-Cookies (d. h. die Cookies, auf die sie Zugriff hätte, wenn sie als First-Party besucht würde).

> [!WARNING]
> Wenn der Speicherzugang gewährt wird, können noch Referenzen auf den partitionierten Speicher vorhanden sein.
> Websites sollten sich jedoch nicht darauf verlassen, dass sie gleichzeitig partitionierte und unpartitionierte Cookies verwenden können.

## Debugging

Wir ermutigen Website-Betreiber, ihre Websites zu testen, insbesondere solche, die auf Drittanbieter-Inhaltsintegrationen angewiesen sind.
Es gibt mehrere Funktionen in Firefox, die das Testen erleichtern.

### Logging

Hier ist eine Übersicht über die Nachrichten, die in der Web-Konsole geloggt werden, wenn im Drittanbieter-Kontext auf Speicher zugegriffen wird.
In den folgenden Beispielen ist `a.example` die Top-Level-Site, die den Drittanbieter-Rahmen `b.example` einbettet.

| Grund                                                                                                                    | Konsolennachricht                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Speicher eines Drittanbieter-Rahmens wird partitioniert                                                                  | Partitionierter Cookie- oder Speicherzugriff wurde "b.example" gewährt, weil es im Drittanbieter-Kontext geladen ist und Speicherpartitionierung aktiviert ist. |
| Zugang zu unpartitionierten Cookies wird durch [Speicherzugangsheuristiken](#speicherzugangsheuristiken) gewährt           | Speicherzugang automatisch für First-Party-Isolierung "b.example" auf "a.example" gewährt.                                                                 |
| Zugang zu unpartitionierten Cookies wird über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) gewährt | Speicherzugang für Origin "b.example" auf "a.example" gewährt.                                                                                            |

### Drittanbieter-Speicherzugriff löschen

Wenn einem Drittanbieter-iframe Speicherzugang zum übergeordneten Kontext gewährt wird, setzt Firefox eine Berechtigung.
Um den Zugang zu widerrufen, können Sie die Berechtigung über das [Site-Informationsfenster](https://support.mozilla.org/en-US/kb/site-information-panel) im Abschnitt Berechtigungen unter "Cross-site Cookies" löschen.

### Testpräferenzen

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Präferenzen in einem separaten Firefox-Profil setzen oder sie nach dem Testen zurücksetzen.

#### Webkompatibilitätsfunktionen deaktivieren

Das Setzen von `privacy.antitracking.enableWebcompat` auf `false` wird **alle** ETP- und Zustandspartitionierungs-Webkompatibilitätsfunktionen **deaktivieren**.
Das Deaktivieren dieser Funktionen kann beim Testen nützlich sein, um sicherzustellen, dass Ihre Website vollständig mit dem Zustandspartitionierungsmechanismus in Firefox kompatibel ist und sich nicht auf temporäre Heuristiken verlässt.

Die durch die Präferenz deaktivierten Funktionen umfassen:

- [Speicherzugangsheuristiken](#speicherzugangsheuristiken): Unpartitionierter Zugang zu Cookies kann nur über die Storage Access API erworben werden.
- Automatische Speicherzugänge: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird immer den Benutzer auffordern.
- [SmartBlocks "Entsperren bei Opt-in"-Funktion](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), die bestimmte Tracker erlaubt, wenn Benutzer mit ihnen interagieren.
- Jede temporäre [Anti-Tracking-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions), die Websites über den Ausschlusslistungsmechanismus gewährt werden.

#### Heuristiken deaktivieren

Die folgenden Präferenzen können verwendet werden, um einzelne Speicherzugangsheuristiken über den [Konfigurations-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) zu deaktivieren:

- Aktivieren/Deaktivieren der [Redirect-Heuristiken](#redirect-heuristiken): `privacy.restrict3rdpartystorage.heuristic.recently_visited`, `privacy.restrict3rdpartystorage.heuristic.redirect`
- Aktivieren/Deaktivieren der [Fensteröffnungs-Heuristiken](#opener-heuristiken): `privacy.restrict3rdpartystorage.heuristic.window_open`, `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Netzwerkpartitionierung deaktivieren

Die Netzwerkpartitionierung kann mit der Präferenz `privacy.partition.network_state` deaktiviert werden.

#### Dynamische Zustandspartitionierung deaktivieren

Um die dynamische Speicherpartitionierung für alle Seiten zu deaktivieren, können Sie die Präferenz `network.cookie.cookieBehavior` verwenden:

| Wert | Beschreibung                                                  |
| ---- | ------------------------------------------------------------- |
| 5    | Blockiere (bekannte) Tracker und partitioniere Drittanbieter-Speicher. |
| 4    | Nur Tracker blockieren (Speicherpartitionierung deaktiviert).          |
| 0    | Alle erlauben                                                 |

#### Bestimmte Ursprünge von der Partitionierung ausnehmen

Dynamische Zustandspartitionierung kann auch für bestimmte Ursprünge mit der Präferenz `privacy.restrict3rdpartystorage.skip_list` deaktiviert werden.
Diese Präferenz enthält eine durch Kommas getrennte Liste von Ursprüngen, die ausgenommen werden sollen.
Der Präferenzwert sollte folgendes Format haben: `first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`.

Zum Beispiel, um die Partitionierung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Präferenz wie folgt setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Platzhalter für entweder das erste oder das dritte eine verwenden.
Zum Beispiel, um die Partitionierung für `videos.example` auf allen Seiten zu deaktivieren, oder um alle Partitionierungen auf `unpartitioned.example` zu deaktivieren, würden Sie die Präferenz wie folgt setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
