---
title: State Partitioning
slug: Web/Privacy/Guides/State_Partitioning
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

**State Partitioning** ist ein umfassendes Bemühen von Mozilla, die Verwaltung des clientseitigen Zustands in Firefox (d.h. Daten, die im Browser gespeichert sind) neu zu gestalten, um die Fähigkeit von Websites zu verringern, den Zustand für Cross-Site-Tracking zu missbrauchen, z. B. über [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

Ziel dieses Vorhabens ist es, jedem besuchten Website eine partitionierte Speicherort zuzuweisen.
Dieser Artikel gibt einen Überblick über den Mechanismus, listet die betroffenen APIs auf und erklärt, wie betroffene Websites debuggt werden können.

Ab Firefox 103 ist die Zustandspartitionierung standardmäßig aktiviert.

## Motivation

### Cross-Site-Tracking mit gemeinsam genutztem Zustand

Browser nutzen traditionell den Ursprung (oder manchmal die registrierbare Domain) des Standorts, von dem eine Ressource geladen wurde, um den clientseitigen Zustand zu bestimmen.
Zum Beispiel werden die Cookies, `localStorage`-Objekte und Caches eines `iframe`, das von `https://example.com/hello.html` geladen wird, von `example.com` bestimmt.
Das gilt unabhängig davon, ob der Browser die Ressourcen gerade als _Erstparteien_ oder eingebettete _Drittparteien_ lädt.
Tracker haben diesen Cross-Site-Zustand genutzt, um Benutzerkennungen zu speichern und auf verschiedenen Websites darauf zuzugreifen.
Das folgende Beispiel zeigt, wie `example.com` seinen Cross-Site-Zustand (in diesem Fall Cookies) nutzen kann, um einen Benutzer über seine eigene Seite sowie `A.example` und `B.example` hinweg zu verfolgen.

![Ein Beispiel für Cross-Site-Zustand](example-cross-site-state.png)

### Frühere Ansätze zur Blockierung von Cross-Site-Tracking

Firefox' frühere Cookie-Richtlinien versuchten, Tracking zu vermindern, indem der Zugriff auf einige Speicher-APIs (z. B. Cookies und `localStorage`) für bestimmte Domains unter bestimmten Bedingungen blockiert wurde.
Zum Beispiel verhindert unsere "Blockiere alle Drittanbieter-Cookies"-Richtlinie, dass alle Domains auf bestimmte Speicher-APIs zugreifen können, wenn sie im Drittanbieter-Kontext geladen werden.
Unsere aktuelle [Standard-Cookie-Richtlinie](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) blockiert den Zugriff im Drittanbieter-Kontext nur für Domains, die als Tracker klassifiziert sind.

## Zustandspartitionierung

Zustandspartitionierung ist ein anderer Ansatz zur Verhinderung von Cross-Site-Tracking.
Anstatt den Zugriff auf bestimmte zustandsbehaftete APIs im Drittanbieter-Kontext zu blockieren, bietet Firefox eingebetteten Ressourcen einen separaten Speicherpool für jede oberste Website an.
Genauer gesagt, Firefox verwendet zwei Schlüssel für den gesamten clientseitigen Zustand—den [Ursprung](https://html.spec.whatwg.org/multipage/browsers.html#origin) der geladenen Ressource und die oberste [Seite](https://html.spec.whatwg.org/multipage/browsers.html#site).
In den meisten Fällen ist die oberste Seite das Schema und die {{Glossary("registrable_domain", "registrierbare Domain")}} der vom Benutzer besuchten obersten Seite.

Im folgenden Beispiel wird `example.com` in `A.example` und `B.example` eingebettet.
Da der Speicher jedoch partitioniert ist, gibt es drei unterschiedliche Speicherpools (anstatt nur einen).
Der Tracker kann weiterhin auf den Speicher zugreifen, aber da jeder Speicherpool zusätzlich unter der obersten Seite abgespeichert wird, sind die Daten, auf die er bei A zugreifen kann, anders als die bei B.
Dies verhindert, dass ein Tracker eine Kennung in seinen Cookies speichert, wenn er direkt besucht wird, und diese dann abruft, wenn sie in andere Websites eingebettet ist.

![Ein Beispiel für Zustandspartitionierung](example-state-partitioning.png)

## Standardisierung

Die [Privacy Community Group](https://privacycg.github.io/) hat einen Arbeitspunkt für [Clientseitige Speicherpartitionierung](https://privacycg.github.io/storage-partitioning/).
Dies dient als Überblick über die Standardisierungsbemühungen zur Speicherpartitionierung in den betroffenen einzelständigen Standards.
Wir beabsichtigen, unsere Zustandspartitionierungs-Implementierung mit diesen Bemühungen in Einklang zu bringen, sobald der Arbeitspunkt standardisiert wird.

### Status der Partitionierung in Firefox

- [**Netzwerkpartitionierung**](#netzwerkpartitionierung): Für alle Nutzer seit Firefox 85 standardmäßig aktiviert.
- [**Dynamische Partitionierung**](#dynamische_partitionierung): Für alle Nutzer seit Firefox 103 standardmäßig aktiviert. Vorher:
  - Seit Firefox 86: Aktiviert für Nutzer, die ["Strikte" Datenschutzmaßnahmen](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) aktiviert haben.
  - Seit Firefox 90: Aktiviert im privaten Modus.

## Statische Partitionierung

### Speicherpartitionierung

Um zu verhindern, dass über JavaScript zugängliche Speicher-APIs für das Cross-Site-Tracking verwendet werden, wird der zugängliche Speicher nach oberster Seite partitioniert.
Dieser Mechanismus bedeutet im Allgemeinen, dass ein Dritter, der in eine oberste Seite eingebettet ist, nicht auf Daten zugreifen kann, die unter einer anderen obersten Seite gespeichert sind.

### Speicher-APIs

- [localStorage](/de/docs/Web/API/Window/localStorage)
- [sessionStorage](/de/docs/Web/API/Window/sessionStorage)
- [DOM Cache](/de/docs/Web/API/Cache)
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/de/docs/Web/API/BroadcastChannel)
- [Shared Workers](/de/docs/Web/API/SharedWorker)
- [Service Workers](/de/docs/Web/API/Service_Worker_API)

### Netzwerkpartitionierung

Netzwerkbezogene APIs sind nicht dazu gedacht, dass Websites Daten speichern, können aber für das Cross-Site-Tracking [missbraucht werden](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/).
Daher sind die folgenden Netzwerk-APIs und -Caches **dauerhaft** nach der obersten Seite partitioniert.

> [!NOTE]
> Die Netzwerkpartitionierung ist dauerhaft.
> Websites können diese Einschränkungen nicht kontrollieren oder lockern.

### Netzwerk-APIs

- [HTTP Cache](/de/docs/Web/HTTP/Guides/Caching)
- Image Cache
- Favicon Cache
- Connection Pooling
- Stylesheet Cache
- {{Glossary("DNS", "DNS")}}
- HTTP-Authentifizierung
- [Alt-Svc](/de/docs/Web/HTTP/Reference/Headers/Alt-Svc)
- Spekulative Verbindungen
- Fonts & Font Cache
- [HSTS](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
- OCSP
- Intermediate CA Cache
- TLS-Client-Zertifikate
- TLS-Sitzungskennungen
- Prefetch
- Preconnect
- {{Glossary("Preflight_request", "CORS-Preflight")}} Cache
- WebRTC deviceID
- {{Glossary("bfcache", "Backward/forward Cache (bfcache)")}}

## Dynamische Partitionierung

Im Allgemeinen, wenn der zugängliche Speicher nach oberster Seite partitioniert ist, kann der Zugriff auf nicht partitionierte Cookies eines Drittanbieters dennoch gewährt werden, wenn die Storage Access API unterstützt wird:

- durch die Verwendung der [Storage Access API](#storage_access_api).
- automatisch, z.B. für Drittanbieter, die föderierte Anmeldungen bereitstellen.

Details zu automatischen Gewährungen finden Sie im Abschnitt [Speicherzugriffsheuristiken](#speicherzugriffsheuristiken).

### Dynamisch partitionierte APIs

- [Cookies](/de/docs/Web/API/Document/cookie)

### Speicherzugriffsheuristiken

Um die Web-Kompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, um nicht partitionierten Zugriff auf Cookies automatisch an Drittanbieter zu gewähren, die Benutzerinteraktion erhalten.
Diese Heuristiken sollen es ermöglichen, dass einige Drittanbieter-Integrationen, die im Web häufig vorkommen, weiterhin funktionieren.

> [!WARNING]
> Speicherzugriffsheuristiken sind eine Übergangsfunktion, um zu verhindern, dass Websites nicht mehr funktionieren.
> Sie sollten nicht für die aktuelle und zukünftige Webentwicklung genutzt werden.

#### Opener-Heuristik

Wenn ein partitionierter Drittanbieter ein Pop-up-Fenster öffnet, das [Opener-Zugriff](/de/docs/Web/API/Window/opener) auf das ursprünglich dokument hat und der Nutzer mit diesem Pop-up interagiert, wird dem Drittanbieter der Speicherzugriff auf seinen Einbettungskontext für 30 Tage gewährt.

#### Navigations-Heuristik

Angenommen, eine auf `a.example` gehostete Seite leitet einen Nutzer zu `b.example` im gleichen Fenster, der Nutzer interagiert mit `b.example`, und dann wird der Nutzer schnell zurück zu `a.example` navigiert. In einem solchen Fall wird `b.example` als Drittanbieter auf `a.example` für 30 Tage Speicherzugriff gewährt.

## Storage Access API

Drittanbieter-Frames können [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) verwenden, um nicht partitionierten Zugriff auf Cookies über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern.
Einmal gewährt, erhält die anfragende Partei Zugriff auf alle ihre Erstpartei-Cookies (d.h. die Cookies, auf die sie zugreifen könnte, wenn sie als Erstpartei besucht wird).

> [!WARNING]
> Wenn Speicherzugriff gewährt wird, können trotzdem noch Verweise auf den partitionierten Speicher bestehen.
> Websites sollten sich jedoch nicht darauf verlassen, partitionierte und nicht partitionierte Cookies gleichzeitig verwenden zu können.

## Debugging

Wir ermutigen Website-Eigentümer, ihre Websites zu testen, insbesondere diejenigen, die auf Drittinhaltsintegrationen angewiesen sind.
Es gibt mehrere Funktionen in Firefox, um das Testen zu erleichtern.

### Protokollierung

Hier ist ein Überblick über die Nachrichten, die in der Webkonsole protokolliert werden, wenn mit Speicher in einem Drittanbieter-Kontext interagiert wird.
In den folgenden Beispielen ist `a.example` die oberste Seite, die das Drittanbieter-Frame `b.example` einbettet.

| Grund                                                                                                                             | Konsolennachricht                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Speicherung eines Drittanbieter-Frames wird partitioniert                                                                         | Partitionierter Cookie- oder Speichernzugriff wurde "b.example" gewährt, da es im Drittanbieter-Kontext geladen wird und die Speicherpartitionierung aktiviert ist. |
| Zugriff auf nicht partitionierte Cookies wird durch [Speicherzugriffsheuristiken](#speicherzugriffsheuristiken) gewährt           | Speicherzugriff wurde automatisch für die Erstanbieter-Isolierung "b.example" auf "a.example" gewährt.                                                              |
| Zugriff auf nicht partitionierte Cookies wird über die [StorageAccessAPI](/de/docs/Web/API/Document/requestStorageAccess) gewährt | Speicherzugriff wurde für den Ursprung "b.example" auf "a.example" gewährt.                                                                                         |

### Dritten Speicherzugriff löschen

Wenn einem Drittanbieter-`iframe` der Speicherzugriff auf den übergeordneten Kontext gewährt wird, setzt Firefox eine Berechtigung.
Um den Zugriff zu widerrufen, können Sie die Berechtigung im [Site Information Panel](https://support.mozilla.org/en-US/kb/site-information-panel) im Abschnitt Berechtigungen unter "Cross-site Cookies" löschen.

### Testeinstellungen

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Einstellungen in einem separaten Firefox-Profil setzen oder sie nach dem Testen zurücksetzen.

#### Web-Kompatibilitätsfunktionen deaktivieren

Indem `privacy.antitracking.enableWebcompat` auf `false` gesetzt wird, werden alle ETP- und Zustandspartitionierungs-Web-Kompatibilitätsfunktionen **deaktiviert**.
Das Deaktivieren dieser Funktionen kann nützlich sein, um sicherzustellen, dass Ihre Website vollständig mit dem Zustandspartitionierungsmechanismus in Firefox kompatibel ist und nicht auf temporäre Heuristiken angewiesen ist.

Durch die Voreinstellung deaktivierte Funktionen sind:

- [Speicherzugriffsheuristiken](#speicherzugriffsheuristiken): Nicht partitionierter Zugriff auf Cookies kann nur über die Storage Access API erlangt werden.
- Automatische Speicherzugriffsgewährungen: [document.requestStorageAccess](/de/docs/Web/API/Document/requestStorageAccess) wird den Benutzer immer um eine Eingabe bitten.
- [SmartBlock's "Unblock on opt-in"-Funktion](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/), die es bestimmten Trackern erlaubt, wenn Nutzer mit ihnen interagieren.
- Jegliche temporären [Anti-Tracking-Ausnahmen](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions), die Websites durch den Skip-Listing-Mechanismus gewährt werden.

#### Heuristiken deaktivieren

Die folgenden Einstellungen können verwendet werden, um einzelne Speicherzugriffsheuristiken über den [Konfigurations-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) zu deaktivieren:

- Aktivieren / Deaktivieren der [Navigations-Heuristik](#navigations-heuristik): `privacy.restrict3rdpartystorage.heuristic.navigation`
- Aktivieren / Deaktivieren der [Opener-Heuristik](#opener-heuristik): `privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### Netzwerkpartitionierung deaktivieren

Die Netzwerkpartitionierung kann mit dem `privacy.partition.network_state` Pref deaktiviert werden.

#### Dynamische Zustandspartitionierung deaktivieren

Um die dynamische Speicherpartitionierung für alle Sites zu deaktivieren, können Sie die `network.cookie.cookieBehavior`-Einstellung verwenden:

| Wert | Beschreibung                                                   |
| ---- | -------------------------------------------------------------- |
| 5    | Partitionieren von Drittanbieterspeicher.                      |
| 4    | Tracker ablehnen (Speicherpartitionierung deaktiviert).        |
| 0    | Alles Speicher erlauben (Speicherpartitionierung deaktiviert). |

Andere Werte dieser Einstellung können den Drittanbieterspeicher vollständig deaktivieren.

#### Bestimmte Ursprünge von der Partitionierung ausnehmen

Die dynamische Zustandspartitionierung kann auch für bestimmte Ursprünge mit der Einstellung `privacy.restrict3rdpartystorage.skip_list` deaktiviert werden.
Diese Einstellung enthält eine kommagetrennte Liste von Ursprüngen zur Ausnahme.
Der Einstellungswert sollte folgendes Format verwenden: `erstes-partei_ursprung_1,drittes-partei_ursprung_1;erstes-partei_ursprung_2,drittes-partei_ursprung_2;...`.

Zum Beispiel, um die Partitionierung für `tracker.example` auf `example.com` oder `social.example` auf `news.example` zu deaktivieren, würden Sie die Einstellung auf Folgendes setzen:

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

Sie können `*` als Platzhalter für entweder die erste oder die dritte Partei verwenden.
Zum Beispiel, um die Partitionierung für `videos.example` auf allen Sites zu deaktivieren, oder um alle Partitionierungen auf `unpartitioned.example` zu deaktivieren, würden Sie die Einstellung auf Folgendes setzen:

```plain
*,https://videos.example;unpartitioned.example,*
```
