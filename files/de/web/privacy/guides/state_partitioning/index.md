---
title: State Partitioning
slug: Web/Privacy/Guides/State_Partitioning
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

**State Partitioning** ist eine umfassende Initiative von Mozilla, um die Verwaltung des clientseitigen Zustands in Firefox (d. h. Daten, die im Browser gespeichert sind) neu zu gestalten. Ziel ist es, die Fähigkeit von Websites einzuschränken, den Zustand für die verfolgung über Website-Grenzen hinweg zu missbrauchen, z. B. durch [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

Diese Bemühung zielt darauf ab, jedem von einem Benutzer besuchten Website einen partitionierten Speicherort bereitzustellen. Dieser Artikel gibt einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie betroffene Websites debuggt werden können.

Ab Firefox 103 ist State Partitioning standardmäßig aktiviert.

## Motivation

### Verfolgung über Websites hinweg unter Verwendung gemeinsamer Zustände

Browser ordnen traditionell den clientseitigen Zustand nach dem Ursprung (oder manchmal der registrierbaren Domäne) der URL, von der ein Ressourcenaufruf geladen wurde. Beispielsweise werden die Cookies, localStorage-Objekte und Caches, die in einem iframe geladen von `https://example.com/hello.html` verfügbar sind, von `example.com` aufgezeichnet. Dies gilt unabhängig davon, ob der Browser derzeit Ressourcen von dieser Domäne als _First-Party_-Ressource oder als eingebettete _Third-Party_-Ressource lädt. Verfolger haben diesen Zustand genutzt, um Benutzerkennungen zu speichern und auf sie über Websites hinweg zuzugreifen. Das folgende Beispiel zeigt, wie `example.com` seinen Zustand (in diesem Fall Cookies) verwenden kann, um einen Benutzer sowohl auf seiner eigenen Website als auch auf `A.example` und `B.example` zu verfolgen.

![Ein Beispiel für einen Zustand über Websites hinweg](example-cross-site-state.png)

### Frühere Ansätze zur Blockierung der Verfolgung über Websites hinweg

Die bisherigen Cookie-Richtlinien von Firefox versuchen, die Verfolgung zu mildern, indem der Zugriff auf einige Speicher-APIs (z. B. Cookies und localStorage) für bestimmte Domänen unter bestimmten Bedingungen blockiert wird. Zum Beispiel verhindert unsere "Alle Third-Party-Cookies blockieren"-Richtlinie, dass alle Domänen auf bestimmte Speicher-APIs zugreifen können, wenn sie in einem Drittparteikontext geladen werden. Unsere aktuelle [Standard-Cookie-Richtlinie](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) blockiert den Zugriff in einem Drittparteikontext nur für als Verfolger klassifizierte Domänen.

## State Partitioning

State Partitioning ist ein anderer Ansatz zur Verhinderung der Verfolgung über Websites hinweg. Anstatt den Zugriff auf bestimmte zustandsbehaftete APIs im Drittparteikontext zu blockieren, bietet Firefox eingebetteten Ressourcen einen separaten Speicherbereich für jede oberste Website. Genauer gesagt, doppelschreibt Firefox den gesamten clientseitigen Zustand nach dem [Ursprung](https://html.spec.whatwg.org/multipage/browsers.html#origin) der geladenen Ressource und der obersten [Website](https://html.spec.whatwg.org/multipage/browsers.html#site). In den meisten Fällen ist die oberste Website das Schema und die {{Glossary("eTLD", "eTLD+1")}} der von der Benutzerin oder dem Benutzer besuchten obersten Seite.

Im folgenden Beispiel ist `example.com` in `A.example` und `B.example` eingebettet. Da der Speicher partitioniert ist, gibt es jedoch drei verschiedene Speicherbereiche (anstatt einen). Der Verfolger kann weiterhin auf den Speicher zugreifen, aber da jeder Speicherbereich zusätzlich unter der obersten Website aufgezeichnet wird, sind die Daten, die auf A verfügbar sind, anders als die auf B. Dies wird verhindern, dass ein Verfolger einen Bezeichner in seinen Cookies speichert, wenn er direkt besucht wird, und dann diesen Bezeichner abruft, wenn er auf anderen Websites eingebettet ist.

![Ein Beispiel für State Partitioning](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat ein Arbeitselement für die [Client-Side Storage Partitioning](https://privacycg.github.io/storage-partitioning/). Dies bietet einen Überblick über die Standardisierungsbemühungen für die Partitionierung von Speicher in den einzelnen betroffenen Standards. Wir beabsichtigen, unsere Implementierung der Zustandspartitionierung mit diesen Bemühungen in Einklang zu bringen, sobald das Arbeitselement standardisiert ist.

### Status der Partitionierung in Firefox

- [**Netzwerk-Partitionierung**](#netzwerkpartitionierung): Seit Firefox 85 standardmäßig für alle Benutzer aktiviert.
- [**Dynamische Partitionierung**](#dynamische_partitionierung): Seit Firefox 103 standardmäßig für alle Benutzer aktiviert. Davor:
  - Seit Firefox 86: Aktiviert für Benutzer mit aktivierten ["Strengen" Datenschutzmaßnahmen](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection).
  - Seit Firefox 90: Aktiviert im privaten Browsing.

## Statische Partitionierung

### Speicherpartitionierung

Um die Verwendung von JavaScript-erschwinglichen Speicher-APIs für die Verfolgung über Website-Grenzen hinweg zu verhindern, wird der zugängliche Speicher nach der obersten Website partitioniert. Dieser Mechanismus bedeutet, dass im Allgemeinen ein Dritter, der in einer obersten Website eingebettet ist, nicht auf unter einer anderen obersten Website gespeicherte Daten zugreifen kann.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Shared Workers](/de/docs/Web/API/SharedWorker)
- [Service Workers](/de/docs/Web/API/Service_Worker_API)

### Netzwerkpartitionierung

Netzwerkbezogene APIs sind nicht dazu bestimmt, von Websites für die Datenspeicherung genutzt zu werden, können aber [missbraucht](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/) werden, um Verfolgung über Websites hinweg durchzuführen. Aus diesem Grund sind die folgenden Netzwerk-APIs und Caches **permanent** nach der obersten Website partitioniert.

> [!NOTE]
> Die Netzwerkpartitionierung ist dauerhaft.
> Websites können diese Einschränkungen weder kontrollieren noch lockern.

### Netzwerk-APIs

- [HTTP Cache](/de/docs/Web/HTTP/Caching)
- Bild-Cache
- Favicon-Cache
- Verbindungs-Pooling
- Stylesheet-Cache
- {{Glossary("DNS", "DNS")}}
- HTTP-Authentifizierung
- [Alt-Svc](/de/docs/Web/HTTP/Headers/Alt-Svc)
- Spekulative Verbindungen
- Schriften & Schrift-Cache
- [HSTS](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
- OCSP
- Intermediate CA Cache
- TLS-Client-Zertifikate
- TLS-Sitzungs-IDs
- Prefetch
- Preconnect
- {{Glossary("Preflight_request", "CORS-preflight")}} Cache
- WebRTC deviceID

## Dynamische Partitionierung

Allgemein gilt, wenn zugänglicher Speicher nach der obersten Website partitioniert ist, kann dennoch Zugriff auf die unpartitionierten Cookies eines Dritten gewährt werden, wenn die Storage Access API unterstützt wird:

- unter Verwendung der [Storage Access API](#storage_access_api).
- automatisch, wie etwa für Dritte, die föderiertes Login bereitstellen.

Details zu automatischen Genehmigungen finden Sie im Abschnitt [Heuristiken für den Speicherzugang](#heuristiken_für_den_speicherzugang).

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Heuristiken für den Speicherzugang

Um die Webkompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, um unpartitionierten Zugriff auf Cookies automatisch an Dritte zu gewähren, die Benutzerinteraktionen erhalten. Diese Heuristiken sollen es einigen auf dem Web verbreiteten Dritte-Integration erlauben, weiterhin zu funktionieren.

> [!WARNING]
> Heuristiken für den Speicherzugang sind ein Übergangsmerkmal, das dazu gedacht ist, das Brechen von Websites zu verhindern.
> Sie sollten nicht für aktuelle und zukünftige Webentwicklungen verwendet werden.

#### Heuristiken für Fenster, die mit dem öffnenden Fenster verbunden sind

- Wenn ein partitionierter Drittanbieter ein Pop-up-Fenster öffnet, das [Zugriff auf den öffnenden Dokumenten](https://www.w3.org/TR/html52/browsers.html#the-opener-attribute) hat, wird diesem Dritten für 30 Tage Speicherzugriff auf seinen Einbettungskontext gewährt.
- Wenn eine First-Party `a.example` ein Drittparteien-Pop-up `b.example` öffnet, wird `b.example` für 30 Tage Drittparteien-Speicherzugang zu `a.example` gewährt.

> [!NOTE]
> Für Dritte, die diese Heuristik für Verfolgungszwecke missbrauchen, können wir verlangen, dass Benutzer mit dem Pop-up interagieren, bevor Speicherzugang gewährt wird.

#### Redirect-Heuristiken

- Wenn eine Website `b.example` zu `a.example` umleitet, erhält `b.example` Speicherzugang zu seinem Einbettungskontext `a.example`, wenn sowohl `a.example` als auch `b.example` innerhalb der letzten 10 Minuten besucht und interagiert wurden. Dieser Speicherzugang wird für 15 Minuten gewährt.
- Wenn ein Verfolger `tracker.example` (wie von der erweiterten Verfolgungsschutzfunktion klassifiziert) zu einer nicht verfolgenden `a.example` umleitet und `tracker.example` in den letzten 45 Tagen als First-Party eine Benutzerinteraktion erhalten hat, wird `tracker.example` für 15 Minuten Speicherzugang zu `a.example` gewährt.

## Storage Access API

Drittanbieterrahmen können die
[document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) verwenden, um durch die [Storage Access API](/de/docs/Web/API/Storage_Access_API) unbegrenzten Zugang zu Cookies anzufordern. Nachdem dies genehmigt wurde, erhält die anfragende Partei Zugang zu ihren gesamten First-Party-Cookies (d. h. den Cookies, auf die sie zugreifen hätte, wenn sie als First-Party besucht wäre).

> [!WARNING]
> Wenn Speicherzugriff gewährt wird, können immer noch Verweise auf den partitionierten Speicher vorhanden sein.
> Websites sollten sich jedoch nicht darauf verlassen können, partitionierte und unpartitionierte Cookies gleichzeitig verwenden zu können.

## Debugging

Wir ermutigen Website-Besitzer, ihre Sites zu testen, insbesondere jene, die auf Inhaltsintegration von Drittanbietern angewiesen sind. Es gibt mehrere Funktionen in Firefox, die das Testen erleichtern.

### Logging

Hier ist eine Übersicht der Nachrichten, die in der Webkonsole protokolliert werden, wenn mit Speicher in einem Drittparteikontext interagiert wird. In den folgenden Beispielen ist `a.example` die oberste Website, die den Drittanbieterrahmen `b.example` einbettet.

| Grund                                                                                                                            | Konsolennachricht                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Der Speicher eines Drittanbieterrahmens ist partitioniert                                                                        | Partitionierter Cookie- oder Speicherzugriff wurde "b.example" bereitgestellt, da es im Drittparteikontext geladen wird und Speicherpartitionierung aktiviert ist. |
| Zugriff auf nicht partitionierte Cookies durch [Heuristiken für den Speicherzugang](#heuristiken_für_den_speicherzugang) gewährt | Speicherzugriff automatisch für First-Party-Isolation "b.example" auf "a.example" gewährt.                                                                         |
| Zugriff auf nicht partitionierte Cookies über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) gewährt     | Speicherzugriff für Ursprung "b.example" auf "a.example" gewährt.                                                                                                  |

### Drittenparties Speicherzugang löschen

Wenn ein Drittanbieter-iframe Speicherzugriff auf den übergeordneten Kontext gewährt wird, setzt Firefox eine Erlaubnis. Um den Zugriff zu widerrufen, können Sie die Erlaubnis über das [Site-Informationsfenster](https://support.mozilla.org/en-US/kb/site-information-panel) im Bereich "Berechtigungen" unter "Website-übergreifende Cookies" löschen.

### Testeinstellungen

> [!WARNING]
> Stellen Sie sicher, diese Einstellungen in einem separaten Firefox-Profil vorzunehmen oder sie nach dem Testen zurückzusetzen.

#### Deaktivieren von Webkompatibilitäts-Features

Die Einstellung `privacy.antitracking.enableWebcompat` auf `false` wird **alle** ETP- und State Partitioning-Webkompatibilitätsfunktionen deaktivieren. Das Deaktivieren dieser Funktionen kann beim Testen nützlich sein, um sicherzustellen, dass Ihre Website vollständig mit dem State Partitioning-Mechanismus in Firefox kompatibel ist und nicht auf temporäre Heuristiken angewiesen ist.

Funktionen, die durch die Voreinstellung deaktiviert werden, umfassen:

- [Heuristiken für den Speicherzugang](#heuristiken_für_den_speicherzugang): Unpartitionierter Zugriff auf Cookies kann nur über die Storage Access API erworben werden.
- Automatische Speicherzugangsgewährungen: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird den Benutzer immer auffordern.
- [SmartBlock's "Entsperren bei Opt-in"-Feature](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), das bestimmten Verfolgern erlaubt, wenn Benutzer mit ihnen interagieren.
- Jegliche temporäre [Verfolgungsschutz-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions), die Websites über den Skip-Listing-Mechanismus gewährt wurden.

#### Heuristiken deaktivieren

Mit den folgenden Voreinstellungen können einzelne Heuristiken für den Speicherzugang über den [Konfiguration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) deaktiviert werden:

- Aktivieren / Deaktivieren der [Redirect-Heuristiken](#redirect-heuristiken): `privacy.restrict3rdpartystorage.heuristic.recently_visited`, `privacy.restrict3rdpartystorage.heuristic.redirect`
- Aktivieren / Deaktivieren der [Fenster öffnen Heuristiken](#heuristiken_für_fenster,_die_mit_dem_öffnenden_fenster_verbunden_sind): `privacy.restrict3rdpartystorage.heuristic.window_open`, `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Netzwerkpartitionierung deaktivieren

Die Netzwerkpartitionierung kann mit der Voreinstellung `privacy.partition.network_state` deaktiviert werden.

#### Dynamische Zustandspartitionierung deaktivieren

Um die dynamische Speicherpartitionierung für alle Websites zu deaktivieren, können Sie die Voreinstellung `network.cookie.cookieBehavior` verwenden:

| Wert | Beschreibung                                                                    |
| ---- | ------------------------------------------------------------------------------- |
| 5    | Verweigern (bekannter) Verfolger und Partitionierung von Drittanbieterspeicher. |
| 4    | Nur Verfolger ablehnen (Speicherpartitionierung deaktiviert).                   |
| 0    | Alles erlauben                                                                  |

#### Bestimmte Ursprünge von der Partitionierung ausnehmen

Die dynamische Zustandspartitionierung kann auch für bestimmte Ursprünge mit der `privacy.restrict3rdpartystorage.skip_list` Voreinstellung deaktiviert werden. Diese Voreinstellung enthält eine durch Kommas getrennte Liste der Zwecke, die ausgenommen werden sollen. Der Wert sollte dem folgenden Format folgen: `first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`.

Um zum Beispiel die Partitionierung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Voreinstellung auf den folgenden Wert setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Platzhalter für entweder die erste oder dritte Partei verwenden. Um zum Beispiel die Partitionierung für `videos.example` auf allen Seiten zu deaktivieren oder um die gesamte Partitionierung auf `unpartitioned.example` zu deaktivieren, würden Sie die Voreinstellung auf den folgenden Wert setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```
