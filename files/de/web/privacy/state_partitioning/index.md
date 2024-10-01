---
title: State Partitioning
slug: Web/Privacy/State_Partitioning
l10n:
  sourceCommit: a7dabad208b75bc11b1540e7b0047934e4c69991
---

**State Partitioning** ist ein umfassendes Bestreben von Mozilla, die Verwaltung des clientseitigen Zustands in Firefox (d. h. der im Browser gespeicherten Daten) neu zu gestalten, um die Fähigkeit von Websites zu mindern, den Zustand für die verfolgung über Websites hinweg zu missbrauchen, z. B. über [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies).

Dieses Bestreben zielt darauf ab, dies durch Bereitstellung eines partitionierten Speicherorts für jede vom Benutzer besuchte Website zu erreichen.
Dieser Artikel gibt einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie man betroffene Seiten debuggen kann.

State Partitioning ist standardmäßig im Firefox Nightly-Kanal aktiviert.
Ein Teil der Bemühungen zur State Partitioning (nämlich die [Netzwerkpartitionierung](#netzwerkpartitionierung)) ist seit Version 85 im Release-Kanal von Firefox standardmäßig aktiviert.

## Motivation

### Verfolgung über Websites hinweg mit gemeinsamem Zustand

Browser speichern den clientseitigen Zustand traditionell durch den Ursprung (oder manchmal die registrierbare Domäne) des Standorts, von dem eine Ressource geladen wurde.
Zum Beispiel werden die Cookies, `localStorage`-Objekte und Caches, die einem iframe zur Verfügung stehen, das von `https://example.com/hello.html` geladen wird, von `example.com` gespeichert.
Dies gilt unabhängig davon, ob der Browser derzeit Ressourcen von dieser Domäne als _Erstanbieter_-Ressourcen oder als eingebettete _Drittanbieter_-Ressourcen lädt.
Tracker haben diesen zustandsabhängigen Mechanismus für die verfolgung von Benutzern über Websites hinweg genutzt und darauf zugegriffen.
Das untenstehende Beispiel zeigt, wie `example.com` seinen zustandsabhängigen Mechanismus (in diesem Fall Cookies) nutzen kann, um einen Benutzer sowohl auf seiner eigenen Seite als auch auf `A.example` und `B.example` zu verfolgen.

![Ein Beispiel für zustandsabhängigen Mechanismus über Websites hinweg](example-cross-site-state.png)

### Frühere Ansätze zur Blockierung der Verfolgung über Websites hinweg

Firefox' frühere Cookie-Richtlinien versuchen, das Verfolgung zu mildern, indem sie den Zugriff auf einige Speicher-APIs (z.B. Cookies und `localStorage`) für bestimmte Domänen unter bestimmten Bedingungen blockieren.
Zum Beispiel wird unsere "Blockiere alle Drittanbieter-Cookies"-Richtlinie alle Domänen daran hindern, auf bestimmte Speicher-APIs zuzugreifen, wenn sie im Drittanbieter-Kontext geladen werden.
Unsere aktuelle [Cookie-Standardrichtlinie](/de/docs/Web/Privacy/Storage_Access_Policy) blockiert den Zugriff im Drittanbieter-Kontext nur für Domänen, die als Tracker klassifiziert sind.

## State Partitioning

State Partitioning ist ein anderer Ansatz zur Verhinderung der Verfolgung über Websites hinweg.
Anstatt den Zugriff auf bestimmte APIs in einem Drittanbieter-Kontext zu blockieren, bietet Firefox eingebetteten Ressourcen einen separaten Speicherbereich für jede oberste Website.
Genauer gesagt speichert Firefox alle clientseitigen Zustände doppelt, nach dem [Ursprung](https://html.spec.whatwg.org/multipage/browsers.html#origin) der geladenen Ressource und nach der obersten [Seite](https://html.spec.whatwg.org/multipage/browsers.html#site).
In den meisten Fällen ist die oberste Seite das Schema und {{Glossary("eTLD", "eTLD+1")}} der obersten Seite, die vom Benutzer besucht wird.

Im untenstehenden Beispiel ist `example.com` in `A.example` und `B.example` eingebettet.
Da jedoch der Speicher partitioniert ist, gibt es drei unterschiedliche Speicherbereiche (statt einem).
Der Tracker kann weiterhin auf den Speicher zugreifen, aber da jeder Speicherbereich zusätzlich unter der obersten Seite gespeichert wird, werden die zugänglichen Daten auf A anders sein als die auf B.
Dies wird einen Tracker daran hindern, eine Kennung in seinen Cookies zu speichern, wenn er direkt besucht wird, und diese Kennung dann abzurufen, wenn er in andere Websites eingebettet ist.

![Ein Beispiel für State Partitioning](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat einen Arbeitsgegenstand für [Client-Side Storage Partitioning](https://privacycg.github.io/storage-partitioning/).
Dies dient als Überblick über die Standardisierungsbemühungen für die Speicherpartitionierung in den betroffenen individuellen Standards.
Wir beabsichtigen, unsere State Partitioning-Implementierung mit diesen Bemühungen abzugleichen, sobald der Arbeitsgegenstand standardisiert ist.

### Status der Partitionierung in Firefox

- [**Netzwerkpartitionierung**](#netzwerkpartitionierung): Seit Firefox 85 für alle Benutzer standardmäßig aktiviert.
- [**Dynamische Partitionierung**](#dynamische_partitionierung):
  - Seit Firefox 86: Aktiviert für Benutzer, die [„Strenge“ Datenschutzmaßnahmen](https://support.mozilla.org/de/kb/erweiterter-schutz-vor-aktivitatsverfolgung-firefox?q=enhanced+tracking+protection&w=2) aktiviert haben.
  - Seit Firefox 90: Aktiviert im privaten Browsing.

## Statische Partitionierung

### Speicherpartitionierung

Um zu verhindern, dass über JavaScript zugängliche Speicher-APIs zur Verfolgung über Websites hinweg verwendet werden, wird der zugängliche Speicher nach der obersten Website partitioniert.
Dieser Mechanismus bedeutet im Allgemeinen, dass ein Drittanbieter, der in einer obersten Website eingebettet ist, nicht auf Daten zugreifen kann, die unter einer anderen obersten Website gespeichert sind.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Shared Workers](/de/docs/Web/API/SharedWorker)
- [Service Workers](/de/docs/Web/API/Service_Worker_API)

### Netzwerkpartitionierung

Netzwerkbezogene APIs sind nicht dazu gedacht, dass Websites Daten speichern, aber sie können für die Verfolgung über Websites hinweg [missbraucht](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/) werden.
Daher werden die folgenden Netzwerk-APIs und -Caches **dauerhaft** durch die oberste Website partitioniert.

> [!NOTE]
> Netzwerkpartitionierung ist permanent.
> Websites können diese Einschränkungen nicht steuern oder lockern.

### Netzwerk-APIs

- [HTTP Cache](/de/docs/Web/HTTP/Caching)
- Bild-Cache
- Favicon-Cache
- Verbindungspooling
- Stylesheet-Cache
- {{Glossary("DNS", "DNS")}}
- HTTP-Authentifizierung
- [Alt-Svc](/de/docs/Web/HTTP/Headers/Alt-Svc)
- Spekulative Verbindungen
- Schriftarten & Schriftart-Cache
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

Im Allgemeinen, wenn zugänglicher Speicher durch die oberste Website partitioniert ist, kann der Zugriff auf die unpartitionierten Cookies eines Drittanbieters dennoch gewährt werden, wenn die Storage Access API unterstützt wird:

- unter Verwendung der [Storage Access API](#storage_access_api).
- automatisch, z. B. für Drittanbieter, die ein föderiertes Login ermöglichen.

Details über automatische Gewährungen finden Sie im Abschnitt [Heuristik des Speicherkontrollzugriffs](#heuristik_des_speicherkontrollzugriffs).

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Heuristik des Speicherkontrollzugriffs

Um die Web-Kompatibilität zu verbessern, umfasst Firefox derzeit einige Heuristiken, um Drittanbietern, die Benutzerinteraktionen erhalten, automatisch nicht partitionierten Zugang zu Cookies zu gewähren.
Diese Heuristiken sollen es einigen auf dem Web weit verbreiteten Drittanbieter-Integrationen ermöglichen, weiterhin zu funktionieren.

> [!WARNING]
> Heuristiken des Speicherkontrollzugriffs sind ein Übergangsmerkmal, das Website-Abbrüche verhindern soll.
> Sie sollten nicht für die aktuelle und zukünftige Webentwicklung verwendet werden.

#### Opener-Heuristiken

- Wenn ein partitionierter Drittanbieter ein Pop-up-Fenster öffnet, das [Opener-Zugriff](/de/docs/Web/API/Window/opener) auf das Ursprungdokument hat, wird dem Drittanbieter der Speicherzugriff für seinen Einbettungscode für 30 Tage gewährt.
- Wenn ein Erstanbieter `a.example` ein Drittanbieter-Pop-up `b.example` öffnet, wird `b.example` der Drittanbieter-Speicherzugriff auf `a.example` für 30 Tage gewährt.

> [!NOTE]
> Für Drittanbieter, die diese Heuristik für Tracking-Zwecke missbrauchen, können wir eine Benutzerinteraktion mit dem Pop-up erfordern, bevor der Speicherzugriff gewährt wird.

#### Umleitungs-Heuristiken

- Wenn eine Website `b.example` auf `a.example` umleitet, dann erhält `b.example` Speicherzugriff auf seinen Einbettungscode `a.example`, wenn sowohl `a.example` als auch `b.example` innerhalb der letzten 10 Minuten besucht und genutzt wurden.
  Dieser Speicherzugriff wird für 15 Minuten gewährt.
- Wenn ein Tracker `tracker.example` (wie von der Enhanced Tracking Protection klassifiziert) auf einen Nicht-Tracker `a.example` umleitet und `tracker.example` innerhalb der letzten 45 Tage eine Benutzerinteraktion als Erstanbieter erhalten hat, erhält `tracker.example` Speicherzugriff auf `a.example` für 15 Minuten.

## Storage Access API

Drittanbieter-Frames können
[document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) verwenden, um nicht partitionierten Zugriff auf Cookies über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern.
Sobald dies gewährt wird, erhält der anfragende Drittanbieter Zugriff auf seine vollständigen Erstanbieter-Cookies (d. h. die Cookies, auf die er Zugriff hätte, wenn er als Erstanbieter besucht wird).

> [!WARNING]
> Wenn der Speicherzugriff gewährt wird, gibt es möglicherweise noch Verweise auf den partitionierten Speicher.
> Websites sollten sich jedoch nicht darauf verlassen, dass sie gleichzeitig partitionierte und nicht partitionierte Cookies verwenden können.

## Debugging

Wir ermutigen Webseitenbetreiber, ihre Sites zu testen, insbesondere diejenigen, die auf Drittanbieterinhalte setzen.
Es gibt mehrere Funktionen in Firefox, die das Testen erleichtern.

### Protokollierung

Hier ist ein Überblick über die Nachrichten, die an die Webkonsole gesendet werden, wenn Sie mit dem Speicher in einem Drittanbieter-Kontext interagieren.
In den folgenden Beispielen ist `a.example` die oberste Website, die den Drittanbieter-Frame `b.example` einbettet.

| Grund                                                                                                                                                   | Konsolennachricht                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Der Speicher eines Drittanbieter-Frames ist partitioniert                                                                                               | Ein partitionierter Cookie- oder Speicherkontrollzugriff wurde zu "b.example" bereitgestellt, weil es im Drittanbieter-Kontext geladen wurde und die Speicherpartitionierung aktiviert ist. |
| Der Zugriff auf nicht partitionierte Cookies wird durch die [Heuristiken des Speicherkontrollzugriffs](#heuristik_des_speicherkontrollzugriffs) gewährt | Speicherkontrollzugriff automatisch gewährt für die First-Party-Isolierung von "b.example" auf "a.example".                                                                                 |
| Der Zugriff auf nicht partitionierte Cookies wird über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) erteilt                   | Der Speicherzugriff wurde für den Ursprung "b.example" auf "a.example" gewährt.                                                                                                             |

### Dritter-Speicherzugriff löschen

Wenn ein Drittanbieter-iframe den Speicherzugriff auf den übergeordneten Kontext erhält, setzt Firefox eine Berechtigung.
Um den Zugriff zu widerrufen, können Sie die Berechtigung über das [Site Information Panel](https://support.mozilla.org/de/kb/Site-Information-Panel) im Abschnitt Berechtigungen unter "Webseiten-Berechtigungen" im Bereich „Cookies über Websites hinweg“ löschen.

### Testpräferenzen

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Voreinstellungen in einem separaten Firefox-Profil setzen oder sie nach dem Testen zurücksetzen.

#### Web-Kompatibilitätsfunktionen deaktivieren

Das Setzen von `privacy.antitracking.enableWebcompat` auf `false` wird **alle** ETP- und State Partitioning-Web-Kompatibilitätsfunktionen deaktivieren.
Das Deaktivieren dieser Funktionen kann beim Testen nützlich sein, um sicherzustellen, dass Ihre Website vollständig mit dem State Partitioning-Mechanismus in Firefox kompatibel ist und sie nicht auf vorübergehende Heuristiken angewiesen ist.

Funktionen, die durch die Voreinstellung deaktiviert werden, umfassen:

- [Heuristiken des Speicherkontrollzugriffs](#heuristik_des_speicherkontrollzugriffs): Nicht-partitionierter Zugriff auf Cookies kann nur über die Storage Access API erworben werden.
- Automatische Gewährung des Speicherzugriffs: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird den Benutzer immer zur Bestätigung auffordern.
- [SmartBlock-Funktion "auf Einschalten freischalten"](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), die bestimmte Tracker erlaubt, wenn Benutzer mit ihnen interagieren.
- Alle vorübergehenden [Anti-Tracking-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions), die Websites über den Mechanismus zum Überspringen von Listen gewährt werden.

#### Heuristiken deaktivieren

Die folgenden Voreinstellungen können verwendet werden, um einzelne Heuristiken des Speicherkontrollzugriffs über den [Config-Editor](https://support.mozilla.org/de/kb/about-config-editor-firefox) zu deaktivieren:

- Aktivieren / Deaktivieren der [Umleitungs-Heuristiken](#umleitungs-heuristiken): `privacy.restrict3rdpartystorage.heuristic.recently_visited`, `privacy.restrict3rdpartystorage.heuristic.redirect`
- Aktivieren / Deaktivieren der [Fensteröffnungs-Heuristiken](#opener-heuristiken): `privacy.restrict3rdpartystorage.heuristic.window_open`, `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Netzwerkpartitionierung deaktivieren

Die Netzwerkpartitionierung kann mit der Voreinstellung `privacy.partition.network_state` deaktiviert werden.

#### Dynamische State-Partitionierung deaktivieren

Um die dynamische Speicherpartitionierung für alle Websites zu deaktivieren, können Sie die Voreinstellung `network.cookie.cookieBehavior` verwenden:

| Wert | Beschreibung                                                         |
| ---- | -------------------------------------------------------------------- |
| 5    | Lehne (bekannte) Tracker ab und partitioniere Drittanbieterspeicher. |
| 4    | Nur Tracker ablehnen (Speicherpartitionierung deaktiviert).          |
| 0    | Alles zulassen                                                       |

#### Bestimmte Ursprünge von der Partitionierung ausnehmen

Die dynamische State-Partitionierung kann auch für bestimmte Ursprünge mit der Voreinstellung `privacy.restrict3rdpartystorage.skip_list` deaktiviert werden.
Diese Voreinstellung enthält eine liste von Ursprüngen, die ein Komma getrennt sind.
Der Wert der Voreinstellung sollte folgendes Format haben: `first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`.

Beispielsweise, um die Partitionierung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Voreinstellung folgendermaßen setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Platzhalter für entweder den ersten oder den dritten Anbieter verwenden.
Zum Beispiel, um die Partitionierung für `videos.example` auf allen Websites zu deaktivieren oder um die gesamte Partitionierung für `unpartitioned.example` zu deaktivieren, würden Sie die Voreinstellung folgendermaßen setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
