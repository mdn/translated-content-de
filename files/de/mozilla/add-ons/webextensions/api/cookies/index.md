---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermöglicht Erweiterungen, Cookies zu erhalten, zu setzen und zu entfernen, sowie benachrichtigt zu werden, wenn sie sich ändern.

## Berechtigungen

Damit eine Erweiterung diese API nutzen kann, muss sie die `"cookies"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei sowie die [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für alle Sites angeben, deren Cookies sie aufrufen möchte. Die Erweiterung kann alle Cookies abrufen, setzen oder entfernen, die von einer URL gelesen, geschrieben oder gelöscht werden können, die zu den Host-Berechtigungen passt. Zum Beispiel:

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

Tracker verwenden Drittanbieter-Cookies, also Cookies, die von einer anderen Website als der aufgerufenen gesetzt werden, um die besuchten Websites zu identifizieren. Zum Beispiel:

1. Sie besuchen `a-shopping-site.com`, das `ad-tracker.com` verwendet, um Werbung im Web auszuliefern. `ad-tracker.com` setzt ein Cookie, das mit der Domain `ad-tracker.com` verbunden ist. Während Sie sich auf `a-shopping-site.com` befinden, erhält `ad-tracker.com` Informationen über die von Ihnen angesehenen Produkte.
2. Sie besuchen nun `a-news-site.com`, das `ad-tracker.com` verwendet, um Werbung auszuliefern. `ad-tracker.com` liest sein Cookie aus und nutzt die von `a-shopping-site.com` gesammelten Informationen, um zu entscheiden, welche Werbung Ihnen angezeigt wird.

Firefox enthält zwei Funktionen, um Tracking zu verhindern: [dynamische Partitionierung](#speicher-partitionierung) und [First-Party-Isolation](#first-party-isolation). Diese Funktionen trennen Cookies so, dass Tracker keine Verbindung zwischen den besuchten Websites herstellen können. So kann `ad-tracker.com` im obigen Beispiel das auf `a-news-site.com` erstellte Cookie nicht sehen, wenn `a-shopping-site.com` besucht wird.

Ab Firefox 103 ist die dynamische Partitionierung die standardmäßig verwendete Funktion. Wenn der Benutzer oder eine Erweiterung jedoch die First-Party-Isolation aktiviert, hat diese Vorrang vor der dynamischen Partitionierung.

> [!NOTE]
> Wenn das private Surfen die dynamische Partitionierung nutzt, müssen Cookies beim normalen Surfen möglicherweise nicht partitioniert werden. Siehe [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/Guides/State_Partitioning#status_of_partitioning_in_firefox) für Details.

### Speicher-Partitionierung

Bei Verwendung der [dynamischen Partitionierung](/de/docs/Web/Privacy/Guides/State_Partitioning#dynamic_partitioning) partitioniert Firefox den Speicher, der über JavaScript-APIs zugänglich ist, nach der Top-Level-Site und bietet gleichzeitig angemessenen Zugriff auf unpartitionierten Speicher, um gängige Anwendungsfälle zu ermöglichen. Diese Funktion wird schrittweise eingeführt. Siehe [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/Guides/State_Partitioning#status_of_partitioning_in_firefox) für Details zur Implementierung.

Speicherpartitionen werden durch die URL mit Schema der Top-Level-{{Glossary("Site", "Website")}} gekennzeichnet, und wenn die dynamische Partitionierung aktiv ist, ist der Schlüsselwert über die `partitionKey.topLevelSite`-Eigenschaft in der Cookies-API verfügbar, zum Beispiel `partitionKey: {topLevelSite: "http://site"}`.

Im Allgemeinen befinden sich Top-Level-Dokumente im unpartitionierten Speicher, während Drittanbieter-Iframes im partitionierten Speicher sind. Wenn kein Partitionsschlüssel bestimmt werden kann, wird der Standardwert (unpartitionierter Speicher) verwendet. Während alle HTTP(S)-Sites als Partitionsschlüssel verwendet werden können, können `moz-extension:-` URLs dies nicht. Daher verwenden Iframes in Firefox-Erweiterungsdokumenten keinen partitionierten Speicher.

Standardmäßig arbeiten {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} mit Cookies im unpartitionierten Speicher. Um mit Cookies im partitionierten Speicher in diesen APIs zu arbeiten, muss `topLevelSite` im `partitionKey` gesetzt werden. Die Ausnahme ist `getAll`, bei dem die Einstellung von `partitionKey` ohne `topLevelSite` sowohl partitionierte als auch unpartitionierte Cookies zurückgibt. {{WebExtAPIRef("cookies.onChanged")}} wird für alle Cookies ausgelöst, auf die die Erweiterung zugreifen kann, einschließlich Cookies im partitionierten Speicher. Um sicherzustellen, dass das richtige Cookie geändert wird, sollten Erweiterungen den Wert von der `cookie.partitionKey`-Eigenschaft aus dem Ereignis lesen und dessen Wert an {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} übergeben.

### First-Party-Isolation

Wenn die First-Party-Isolation aktiviert ist, werden Cookies durch die Domain der ursprünglichen Seite qualifiziert, die der Benutzer besucht hat (im Wesentlichen die Domain, die dem Benutzer in der URL-Leiste angezeigt wird, auch bekannt als "First-Party-Domain").

Die First-Party-Isolation kann vom Benutzer aktiviert werden, indem die Konfiguration des Browsers angepasst wird und von Erweiterungen mit der Einstellung {{WebExtAPIRef("privacy.websites","firstPartyIsolate")}} in der {{WebExtAPIRef("privacy")}} API gesetzt werden. Beachten Sie, dass die First-Party-Isolation standardmäßig im [Tor Browser](https://www.torproject.org/) aktiviert ist.

Die `cookies`-API repräsentiert die First-Party-Domain mithilfe des Attributs `firstPartyDomain`. Alle Cookies, die gesetzt werden, während die First-Party-Isolation eingeschaltet ist, haben dieses Attribut, das auf die Domain der ursprünglichen Seite gesetzt ist. In dem vorhergehenden Beispiel ist dies für ein Cookie `a-shopping-site.com` und für das andere `a-news-site.com`. Wenn die First-Party-Isolation deaktiviert ist, wird für alle Cookies, die von Websites gesetzt werden, diese Eigenschaft auf einen leeren String gesetzt.

Die {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} APIs akzeptieren alle eine `firstPartyDomain`-Option.

Wenn die First-Party-Isolation aktiviert ist, müssen Sie diese Option angeben, andernfalls schlägt der API-Aufruf fehl und gibt ein abgelehntes Promise zurück. Für `get()`, `set()` und `remove()` müssen Sie einen Zeichenfolgenwert übergeben. Für `getAll()` können Sie hier auch `null` übergeben, und dies ruft alle Cookies ab, unabhängig davon, ob sie einen nicht leeren Wert für `firstPartyDomain` haben oder nicht.

Wenn die First-Party-Isolation deaktiviert ist, ist der Parameter `firstPartyDomain` optional und hat standardmäßig einen leeren String. Ein nicht-leerer String kann verwendet werden, um Cookies mit der First-Party-Isolation abzurufen oder zu ändern. Ebenso gibt das Übergeben von `null` als `firstPartyDomain` an `getAll()` alle Cookies zurück.

## Typen

- {{WebExtAPIRef("cookies.Cookie")}}
  - : Repräsentiert Informationen über ein HTTP-Cookie.
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : Repräsentiert einen Cookiespeicher im Browser.
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : Repräsentiert den Grund, warum sich ein Cookie geändert hat.
- {{WebExtAPIRef("cookies.SameSiteStatus")}}
  - : Repräsentiert den Same-Site-Status des Cookies.

## Methoden

- {{WebExtAPIRef("cookies.get()")}}
  - : Ruft Informationen über ein einzelnes Cookie ab.
- {{WebExtAPIRef("cookies.getAll()")}}
  - : Ruft alle Cookies ab, die einem gegebenen Filtersatz entsprechen.
- {{WebExtAPIRef("cookies.set()")}}
  - : Setzt ein Cookie mit den angegebenen Cookie-Daten; kann gleichwertige Cookies überschreiben, falls sie existieren.
- {{WebExtAPIRef("cookies.remove()")}}
  - : Löscht ein Cookie nach Name.
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : Listet alle vorhandenen Cookiespeicher auf.

## Ereignishandler

- {{WebExtAPIRef("cookies.onChanged")}}
  - : Wird ausgelöst, wenn ein Cookie gesetzt oder entfernt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies) API. Diese Dokumentation stammt aus [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
