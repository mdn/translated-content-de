---
title: Zustandspartitionierung
slug: Web/Privacy/Guides/State_Partitioning
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

**Zustandspartitionierung** ist eine umfassende Anstrengung von Mozilla, die Arbeitsweise von Firefox bei der Verwaltung des clientseitigen Zustands (d.h. der im Browser gespeicherten Daten) neu zu gestalten, um die Möglichkeit für Websites zu verringern, den Zustand für das Cross-Site-Tracking zu missbrauchen, z.B. über [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

Dieses Bestreben zielt darauf ab, dies zu erreichen, indem jeder Website, die ein Benutzer besucht, ein partitionierter Speicherort bereitgestellt wird. Dieser Artikel gibt einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie betroffene Seiten debuggt werden.

Ab Firefox 103 ist die Zustandspartitionierung standardmäßig aktiviert.

## Motivation

### Cross-Site-Tracking mit gemeinsam genutztem Zustand

Browser ordnen traditionell den clientseitigen Zustand nach dem Origin (oder manchmal der registrierbaren Domain) der Quelle, von der eine Ressource geladen wurde. Zum Beispiel werden die Cookies, localStorage-Objekte und Caches, die einem in `https://example.com/hello.html` geladenen iframe zur Verfügung stehen, durch `example.com` gekennzeichnet. Dies gilt unabhängig davon, ob der Browser derzeit Ressourcen von dieser Domain als _First-Party_ Ressourcen lädt oder als eingebettete _Third-Party_ Ressourcen. Tracker haben diesen Cross-Site-Zustand genutzt, um Benutzerkennungen zu speichern und auf diese über Websites hinweg zuzugreifen. Das folgende Beispiel zeigt, wie `example.com` seinen Cross-Site-Zustand (in diesem Fall Cookies) verwenden kann, um einen Benutzer über seine eigene Seite sowie `A.example` und `B.example` zu verfolgen.

![Ein Beispiel für Cross-Site-Zustand](example-cross-site-state.png)

### Frühere Ansätze zur Blockierung von Cross-Site-Tracking

Firefox' frühere Cookie-Richtlinien versuchen, das Tracking durch Blockierung des Zugriffs auf einige Speicher-APIs (z.B. Cookies und localStorage) für bestimmte Domains unter bestimmten Bedingungen zu verringern. Unsere "Blockiere alle Drittanbieter-Cookies"-Richtlinie verhindert beispielsweise, dass alle Domains auf bestimmte Speicher-APIs zugreifen können, wenn sie in einem Drittanbieter-Kontext geladen werden. Unsere aktuelle [Standard-Cookie-Richtlinie](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) blockiert den Zugriff im Drittanbieter-Kontext nur für Domains, die als Tracker klassifiziert sind.

## Zustandspartitionierung

Die Zustandspartitionierung ist ein anderer Ansatz zur Verhinderung von Cross-Site-Tracking. Anstatt den Zugriff auf bestimmte stateful APIs in einem Drittanbieter-Kontext zu blockieren, stellt Firefox eingebetteten Ressourcen einen separaten Speicherbereich für jede oberste Website bereit. Genauer gesagt, doppelt Firefox alle clientseitigen Zustände nach dem [Origin](https://html.spec.whatwg.org/multipage/browsers.html#origin) der geladenen Ressource und der obersten [Site](https://html.spec.whatwg.org/multipage/browsers.html#site). In den meisten Fällen ist die oberste Seite das Schema und {{Glossary("eTLD", "eTLD+1")}} der von dem Benutzer besuchten obersten Seite.

Im folgenden Beispiel ist `example.com` in `A.example` und `B.example` eingebettet. Da der Speicher jedoch partitioniert ist, gibt es drei verschiedene Speicherbereiche (anstatt eines). Der Tracker kann weiterhin auf den Speicher zugreifen, aber da jeder Speicherbereich zusätzlich unter der obersten Site gekennzeichnet ist, sind die Daten, auf die es Zugriff auf A hat, anders als die Daten auf B. Dies wird verhindern, dass ein Tracker eine Kennung in seinen Cookies speichert, wenn er direkt besucht wird und diese Kennung abruft, wenn er in anderen Websites eingebettet ist.

![Ein Beispiel für Zustandspartitionierung](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat ein Arbeitsobjekt für [Client-Side Storage Partitioning](https://privacycg.github.io/storage-partitioning/). Dies dient als Überblick über die Standardisierungsbemühungen für die Speicherpartitionierung in den betroffenen Einzelstandards. Wir beabsichtigen, unsere Implementierung der Zustandspartitionierung mit diesen Bemühungen abzustimmen, während das Arbeitsobjekt standardisiert wird.

### Status der Partitionierung in Firefox

- [**Netzwerkpartitionierung**](#netzwerkpartitionierung): Seit Firefox 85 standardmäßig für alle Benutzer aktiviert.
- [**Dynamische Partitionierung**](#dynamische_partitionierung): Seit Firefox 103 standardmäßig für alle Benutzer aktiviert. Vorher:
  - Seit Firefox 86: Für Benutzer aktiviert, die ["Strenge" Datenschutzmaßnahmen](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) aktiviert haben.
  - Seit Firefox 90: Im privaten Surfen aktiviert.

## Statische Partitionierung

### Speicherpartitionierung

Um zu verhindern, dass von JavaScript zugängliche Speicher-APIs für Cross-Site-Tracking verwendet werden, wird der zugängliche Speicher nach der obersten Site partitioniert. Dieser Mechanismus bedeutet, dass ein Drittanbieter, der in einer obersten Site eingebettet ist, im Allgemeinen nicht auf Daten zugreifen kann, die unter einer anderen obersten Site gespeichert sind.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Shared Workers](/de/docs/Web/API/SharedWorker)
- [Service Workers](/de/docs/Web/API/Service_Worker_API)

### Netzwerkpartitionierung

Netzwerkbezogene APIs sind nicht dazu gedacht, dass Websites Daten speichern, aber sie können für Cross-Site-Tracking [missbraucht](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/) werden. Daher sind die folgenden Netzwerk-APIs und Caches **dauerhaft** nach der obersten Site partitioniert.

> [!NOTE]
> Netzwerkpartitionierung ist dauerhaft.
> Websites können diese Einschränkungen nicht kontrollieren oder lockern.

### Netzwerk-APIs

- [HTTP Cache](/de/docs/Web/HTTP/Guides/Caching)
- Bild-Cache
- Favicon-Cache
- Verbindungspool
- Stylesheet-Cache
- {{Glossary("DNS", "DNS")}}
- HTTP-Authentifizierung
- [Alt-Svc](/de/docs/Web/HTTP/Reference/Headers/Alt-Svc)
- Spekulative Verbindungen
- Schriftarten & Schriftarten-Cache
- [HSTS](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
- OCSP
- Zwischenzertifikatsstelle (CA)-Cache
- TLS-Client-Zertifikate
- TLS-Sitzungskennungen
- Vorausladen
- Vorverbinden
- {{Glossary("Preflight_request", "CORS-preflight")}} Cache
- WebRTC deviceID

## Dynamische Partitionierung

Im Allgemeinen, wenn zugänglicher Speicher nach oberster Site partitioniert ist, kann der Zugriff auf unpartitionierte Cookies von Drittanbietern immer noch gewährt werden, wenn die Storage Access API unterstützt wird:

- Durch Verwendung der [Storage Access API](#storage_access_api).
- Automatisch, z.B. für Drittanbieter, die eine föderierte Anmeldung bereitstellen.

Details zu automatischen Genehmigungen sind im Abschnitt [Storage Access Heuristics](#speicherzugriffsheuristiken) enthalten.

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Speicherzugriffsheuristiken

Um die Webkompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, um unpartitionierten Zugriff auf Cookies automatisch an Drittanbieter zu gewähren, die Benutzerinteraktionen erhalten. Diese Heuristiken sollen es einigen Drittanbieter-Integrationen, die im Web häufig vorkommen, ermöglichen, weiterhin zu funktionieren.

> [!WARNING]
> Speicherzugriffsheuristiken sind ein Übergangsfeature, um zu verhindern, dass Websites nicht funktionieren.
> Sie sollten nicht für die aktuelle und zukünftige Webentwicklung genutzt werden.

#### Öffner-Heuristiken

- Wenn ein partitionierter Drittanbieter ein Popup-Fenster öffnet, das [öffner Zugriff](/de/docs/Web/API/Window/opener) auf das ursprüngliche Dokument hat, wird dem Drittanbieter der Speicherzugriff auf seine Einbettung für 30 Tage gewährt.
- Wenn eine First-Party `a.example` ein Drittanbieter-Popup `b.example` öffnet, wird `b.example` der Drittanbieter-Speicherzugriff auf `a.example` für 30 Tage gewährt.

> [!NOTE]
> Für Drittanbieter, die diese Heuristik für Tracking-Zwecke missbrauchen, können wir eine Benutzerinteraktion mit dem Popup erforderlich machen, bevor der Speicherzugriff gewährt wird.

#### Redirect-Heuristiken

- Wenn eine Seite `b.example` zu `a.example` weiterleitet, erhält `b.example` Speicherzugriff auf ihre Einbettung `a.example`, wenn sowohl `a.example` als auch `b.example` innerhalb der letzten 10 Minuten besucht und damit interagiert wurde. Dieser Speicherzugriff wird für 15 Minuten gewährt.
- Wenn ein Tracker `tracker.example` (wie durch den verbesserten Tracking-Schutz klassifiziert) zu einem Nicht-Tracker `a.example` weiterleitet und `tracker.example` als First-Party innerhalb der letzten 45 Tage Benutzerinteraktion erhalten hat, wird `tracker.example` Speicherzugriff auf `a.example` für 15 Minuten gewährt.

## Storage Access API

Drittanbieter-Frames können
[document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) verwenden, um nicht partitionierten Zugriff auf Cookies durch die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu beantragen. Sobald der Zugriff gewährt wird, erhält die anfragende Partei Zugriff auf ihre gesamten First-Party-Cookies (d.h. die Cookies, auf die sie zugreifen könnte, wenn sie als First-Party besucht wird).

> [!WARNING]
> Wenn der Speicherzugriff gewährt wird, können noch Verweise auf den partitionierten Speicher bestehen.
> Websites sollten sich jedoch nicht darauf verlassen, partitionierte und unpartitionierte Cookies gleichzeitig nutzen zu können.

## Debuggen

Wir ermutigen Seiteninhaber, ihre Seiten zu testen, insbesondere solche, die auf Integrationen von Drittanbieterinhalten angewiesen sind. Es gibt mehrere Funktionen in Firefox, die das Testen erleichtern.

### Protokollierung

Hier ist ein Überblick über die Nachrichten, die in der Webkonsole protokolliert werden, wenn mit Speicher in einem Drittanbieter-Kontext interagiert wird. In den folgenden Beispielen ist `a.example` die oberste Site, die den Drittanbieter-Frame `b.example` einbettet.

| Grund                                                                                                                        | Konsolennachricht                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Der Speicher eines Drittanbieter-Frames ist partitioniert                                                                    | Partitionierter Cookie- oder Speicherzugriff wurde "b.example" bereitgestellt, da es im Drittanbieter-Kontext geladen ist und die Speicherpartitionierung aktiviert ist. |
| Zugang zu unpartitionierten Cookies wird durch [Speicherzugriffsheuristiken](#speicherzugriffsheuristiken) gewährt           | Speicherzugriff wurde automatisch gewährt für die First-Party-Isolierung "b.example" auf "a.example".                                                                    |
| Zugang zu unpartitionierten Cookies wird über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) gewährt | Speicherzugriff für Origin "b.example" auf "a.example" gewährt.                                                                                                          |

### Löschen des Drittanbieter-Speicherzugriffs

Wenn einem Drittanbieter-iframe der Speicherzugriff auf den übergeordneten Kontext gewährt wird, setzt Firefox eine Berechtigung. Um den Zugriff zu widerrufen, können Sie die Berechtigung über das [Seiteninformationsfenster](https://support.mozilla.org/en-US/kb/site-information-panel) im Berechtigungsabschnitt unter "Cross-site Cookies" löschen.

### Testeinstellungen

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Einstellungen in einem separaten Firefox-Profil vornehmen oder sie nach dem Testen zurücksetzen.

#### Webkompatibilitätsfunktionen deaktivieren

Einstellung von `privacy.antitracking.enableWebcompat` auf `false` wird **alle** ETP- und Zustandspartitionierungswebkompatibilitätsfunktionen **deaktivieren**. Das Deaktivieren dieser Funktionen kann beim Testen nützlich sein, um sicherzustellen, dass Ihre Website vollständig mit dem Zustandspartitionierungsmechanismus in Firefox kompatibel ist und nicht auf temporäre Heuristiken angewiesen ist.

Von der Einstellung deaktivierte Funktionen umfassen:

- [Speicherzugriffsheuristiken](#speicherzugriffsheuristiken): Unpartitionierter Zugriff auf Cookies kann nur über die Storage Access API erworben werden.
- Automatische Speicherzugriffsgewährungen: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird den Benutzer immer auffordern.
- [SmartBlock's "entsperren bei Zustimmung" Funktion](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), die bestimmte Tracker erlaubt, wenn Benutzer mit ihnen interagieren.
- Alle temporären [Anti-Tracking-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions), die Websites über den Skip-List-Mechanismus gewährt werden.

#### Heuristiken deaktivieren

Die folgenden Einstellungen können verwendet werden, um einzelne Speicherzugriffsheuristiken über den [Konfigurations-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) zu deaktivieren:

- Aktivieren / Deaktivieren der [Redirect-Heuristiken](#redirect-heuristiken): `privacy.restrict3rdpartystorage.heuristic.recently_visited`, `privacy.restrict3rdpartystorage.heuristic.redirect`
- Aktivieren / Deaktivieren der [Fensteröffner-Heuristiken](#опener_heuristics): `privacy.restrict3rdpartystorage.heuristic.window_open`, `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Netzwerkpartitionierung deaktivieren

Die Netzwerkpartitionierung kann mit der Einstellung `privacy.partition.network_state` deaktiviert werden.

#### Dynamische Zustandspartitionierung deaktivieren

Um die dynamische Speicherpartitionierung für alle Seiten zu deaktivieren, können Sie die Einstellung `network.cookie.cookieBehavior` verwenden:

| Wert | Beschreibung                                                        |
| ---- | ------------------------------------------------------------------- |
| 5    | Bekannte Tracker ablehnen und Drittanbieterspeicher partitionieren. |
| 4    | Nur Tracker ablehnen (Speicherpartitionierung deaktiviert).         |
| 0    | Alles erlauben                                                      |

#### Bestimmte Ursprünge von der Partitionierung ausnehmen

Die dynamische Zustandspartitionierung kann auch für bestimmte Ursprünge mit der Einstellung `privacy.restrict3rdpartystorage.skip_list` deaktiviert werden. Diese Einstellung enthält eine durch Kommas getrennte Liste von Ursprungen, die ausgenommen werden sollen. Der Einstellungswert sollte folgendes Format haben: `first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`.

Zum Beispiel, um die Partitionierung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Einstellung auf folgendes setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Platzhalter für entweder die erste oder die dritte Partei verwenden. Um z.B. die Partitionierung für `videos.example` auf allen Seiten zu deaktivieren, oder um die gesamte Partitionierung auf `unpartitioned.example` zu deaktivieren, würden Sie die Einstellung auf folgendes setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```
