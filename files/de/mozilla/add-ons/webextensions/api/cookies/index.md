---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
l10n:
  sourceCommit: 6f58b8afb8e045e0d706ac0f0fdeacfaea487f86
---

{{AddonSidebar}}

Ermöglicht Erweiterungen das Abrufen, Setzen und Entfernen von Cookies sowie Benachrichtigungen, wenn diese sich ändern.

## Berechtigungen

Damit eine Erweiterung diese API nutzen kann, muss sie in ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei die `"cookies"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) sowie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für alle Seiten angeben, deren Cookies sie zugreifen möchte. Die Erweiterung kann alle Cookies abrufen, setzen oder entfernen, die von einer URL gelesen, geschrieben oder gelöscht werden können, die zu den Host-Berechtigungen passt. Zum Beispiel:

- `http://*.example.com/`

  - : Eine Erweiterung mit dieser Host-Berechtigung kann:

    - Ein nicht-sicheres Cookie für `www.example.com` mit jedem Pfad lesen.
    - Ein sicheres oder nicht-sicheres Cookie für `www.example.com` mit jedem Pfad schreiben.

    Sie kann _nicht_:

    - Ein sicheres Cookie für `www.example.com` lesen.

- `http://www.example.com/`

  - : Eine Erweiterung mit dieser Host-Berechtigung kann:

    - Ein nicht-sicheres Cookie für `www.example.com` mit jedem Pfad lesen.
    - Ein nicht-sicheres Cookie für `.example.com` mit jedem Pfad lesen.
    - Ein sicheres oder nicht-sicheres Cookie für `www.example.com` mit jedem Pfad schreiben.
    - Ein sicheres oder nicht-sicheres Cookie für `.example.com` mit jedem Pfad schreiben.

    Sie kann _nicht_:

    - Ein Cookie für `foo.example.com` lesen oder schreiben.
    - Ein Cookie für `foo.www.example.com` lesen oder schreiben.

- `*://*.example.com/`

  - : Eine Erweiterung mit dieser Host-Berechtigung kann:

    - Ein sicheres oder nicht-sicheres Cookie für `www.example.com` mit jedem Pfad lesen oder schreiben.

## Tracking-Schutz

Tracker verwenden Drittanbieter-Cookies, also Cookies, die von einer anderen Website als der, die Sie besuchen, gesetzt werden, um die von Ihnen besuchten Websites zu identifizieren. Zum Beispiel:

1. Sie besuchen `a-shopping-site.com`, welche `ad-tracker.com` verwendet, um ihre Werbeanzeigen im Web bereitzustellen. `ad-tracker.com` setzt ein Cookie, das mit der Domain `ad-tracker.com` verbunden ist. Während Sie auf `a-shopping-site.com` sind, erhält `ad-tracker.com` Informationen über die Produkte, die Sie durchstöbern.
2. Sie besuchen nun `a-news-site.com`, die `ad-tracker.com` zur Bereitstellung von Anzeigen verwendet. `ad-tracker.com` liest sein Cookie und verwendet die von `a-shopping-site.com` gesammelten Informationen, um zu entscheiden, welche Anzeigen Ihnen gezeigt werden.

Firefox enthält zwei Funktionen, um Tracking zu verhindern: [dynamische Partitionierung](#speicherpartitionierung) und [First-Party-Isolierung](#first-party-isolierung). Diese Funktionen trennen Cookies, sodass Tracker keine Verbindung zwischen besuchten Websites herstellen können. So kann in dem obigen Beispiel `ad-tracker.com` das auf `a-news-site.com` erstellte Cookie nicht sehen, wenn Sie `a-shopping-site.com` besuchen.

Ab Firefox 103 ist die dynamische Partitionierung die standardmäßig verwendete Funktion. Wenn jedoch der Benutzer oder eine Erweiterung die First-Party-Isolierung aktiviert, hat diese Vorrang vor der dynamischen Partitionierung.

> [!NOTE]
> Wenn privates Browsen dynamische Partitionierung verwendet, kann das normale Browsen möglicherweise keine Cookies partitionieren. Siehe [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/State_Partitioning#status_of_partitioning_in_firefox) für Details.

### Speicherpartitionierung

Beim Verwenden der [dynamischen Partitionierung](/de/docs/Web/Privacy/State_Partitioning#dynamic_partitioning) partitioniert Firefox den Speicher, der für JavaScript-APIs zugänglich ist, nach oberster Website und bietet entsprechenden Zugriff auf nicht-partitionierten Speicher, um gängige Anwendungsfälle zu ermöglichen. Diese Funktion wird schrittweise eingeführt. Siehe [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/State_Partitioning#status_of_partitioning_in_firefox) für Implementierungsdetails.

Speicherpartitionen werden durch die URL mit Schema der obersten {{Glossary("Site", "Website")}} gekennzeichnet und, wenn die dynamische Partitionierung aktiv ist, ist der Schlüsselwert über die `partitionKey.topLevelSite`-Eigenschaft in der Cookies API verfügbar, z.B. `partitionKey: {topLevelSite: "http://site"}`.

Allgemein sind Dokumente auf oberster Ebene in nicht-partitioniertem Speicher, während Drittanbieter-Iframes in partitioniertem Speicher sind. Wenn ein Partitionsschlüssel nicht ermittelt werden kann, wird standardmäßig (nicht-partitionierter Speicher) verwendet. Beispielsweise können alle HTTP(S)-Seiten als Partitionsschlüssel verwendet werden, `moz-extension:-` URLs jedoch nicht. Daher verwenden Iframes in den Erweiterungsdokumenten von Firefox keinen partitionierten Speicher.

Standardmäßig arbeiten {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} mit Cookies in nicht-partitioniertem Speicher. Um mit Cookies in partitioniertem Speicher in diesen APIs zu arbeiten, muss `topLevelSite` in `partitionKey` gesetzt werden. Die Ausnahme ist `getAll`, wobei das Setzen von `partitionKey` ohne `topLevelSite` Cookies in partitioniertem und nicht-partitioniertem Speicher zurückgibt. {{WebExtAPIRef("cookies.onChanged")}} wird bei jedem Cookie ausgelöst, auf das die Erweiterung zugreifen kann, einschließlich Cookies in partitioniertem Speicher. Um sicherzustellen, dass das richtige Cookie geändert wird, sollten Erweiterungen die `cookie.partitionKey`-Eigenschaft aus dem Ereignis lesen und ihren Wert an {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} übergeben.

### First-Party-Isolierung

Wenn die First-Party-Isolierung aktiviert ist, werden Cookies durch die Domain der ursprünglichen Seite qualifiziert, die der Benutzer besucht hat (im Wesentlichen die Domain, die dem Benutzer in der URL-Leiste angezeigt wird, auch bekannt als "First-Party-Domain").

Die First-Party-Isolierung kann vom Benutzer aktiviert werden, indem die Konfiguration des Browsers angepasst wird und von Erweiterungen mit der {{WebExtAPIRef("privacy.websites","firstPartyIsolate")}}-Einstellung in der {{WebExtAPIRef("privacy")}} API. Beachten Sie, dass die First-Party-Isolierung standardmäßig im [Tor Browser](https://www.torproject.org/) aktiviert ist.

Die `cookies` API stellt die First-Party-Domain durch das Attribut `firstPartyDomain` dar. Alle Cookies, die gesetzt werden, während die First-Party-Isolierung aktiv ist, haben dieses Attribut auf die Domain der ursprünglichen Seite gesetzt. In dem obigen Beispiel ist dies `a-shopping-site.com` für ein Cookie und `a-news-site.com` für das andere. Wenn die First-Party-Isolierung ausgeschaltet ist, haben alle von Websites gesetzten Cookies diese Eigenschaft auf einen leeren String gesetzt.

Die {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} APIs akzeptieren alle eine `firstPartyDomain`-Option.

Wenn die First-Party-Isolierung aktiviert ist, müssen Sie diese Option angeben, ansonsten schlägt der API-Aufruf fehl und gibt eine abgelehnte Promise zurück. Für `get()`, `set()`, und `remove()` müssen Sie einen String-Wert übergeben. Für `getAll()` können Sie hier auch `null` übergeben, und dies erfasst alle Cookies, unabhängig davon, ob sie einen nicht-leeren Wert für `firstPartyDomain` haben oder nicht.

Wenn die First-Party-Isolierung ausgeschaltet ist, ist der `firstPartyDomain`-Parameter optional und standardmäßig auf einen leeren String gesetzt. Ein nicht-leerer String kann verwendet werden, um First-Party-Isolierungs-Cookies abzurufen oder zu ändern. Ebenso gibt das Übergeben von `null` als `firstPartyDomain` an `getAll()` alle Cookies zurück.

## Typen

- {{WebExtAPIRef("cookies.Cookie")}}
  - : Stellt Informationen über ein HTTP-Cookie dar.
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : Stellt einen Cookie-Speicher im Browser dar.
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : Stellt den Grund dar, warum sich ein Cookie geändert hat.
- {{WebExtAPIRef("cookies.SameSiteStatus")}}
  - : Stellt den Same-Site-Status des Cookies dar.

## Methoden

- {{WebExtAPIRef("cookies.get()")}}
  - : Ruft Informationen über ein einzelnes Cookie ab.
- {{WebExtAPIRef("cookies.getAll()")}}
  - : Ruft alle Cookies ab, die einem bestimmten Filtersatz entsprechen.
- {{WebExtAPIRef("cookies.set()")}}
  - : Setzt ein Cookie mit den angegebenen Cookie-Daten; kann gleichwertige Cookies überschreiben, wenn sie existieren.
- {{WebExtAPIRef("cookies.remove()")}}
  - : Löscht ein Cookie nach Name.
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : Listet alle vorhandenen Cookie-Speicher auf.

## Ereignishandler

- {{WebExtAPIRef("cookies.onChanged")}}
  - : Wird ausgelöst, wenn ein Cookie gesetzt oder entfernt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies) API. Diese Dokumentation stammt von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
