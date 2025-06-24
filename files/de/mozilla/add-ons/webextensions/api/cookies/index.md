---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ermöglicht Erweiterungen, Cookies abzurufen, zu setzen und zu entfernen, sowie Benachrichtigungen zu erhalten, wenn sie sich ändern.

## Berechtigungen

Damit eine Erweiterung diese API nutzen kann, muss sie die `"cookies"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei und [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für alle Seiten angeben, auf deren Cookies sie zugreifen möchte. Die Erweiterung kann alle Cookies abrufen, setzen oder entfernen, die von einer URL mit passenden Host-Berechtigungen gelesen, geschrieben oder gelöscht werden können. Zum Beispiel:

- `http://*.example.com/`

  - : Eine Erweiterung mit dieser Host-Berechtigung kann:

    - Ein nicht-sicheres Cookie für `www.example.com` mit beliebigem Pfad lesen.
    - Ein sicheres oder nicht-sicheres Cookie für `www.example.com` mit beliebigem Pfad schreiben.

    Sie kann _nicht_:

    - Ein sicheres Cookie für `www.example.com` lesen.

- `http://www.example.com/`

  - : Eine Erweiterung mit dieser Host-Berechtigung kann:

    - Ein nicht-sicheres Cookie für `www.example.com` mit beliebigem Pfad lesen.
    - Ein nicht-sicheres Cookie für `.example.com` mit beliebigem Pfad lesen.
    - Ein sicheres oder nicht-sicheres Cookie für `www.example.com` mit beliebigem Pfad schreiben.
    - Ein sicheres oder nicht-sicheres Cookie für `.example.com` mit beliebigem Pfad schreiben.

    Sie kann _nicht_:

    - Ein Cookie für `foo.example.com` lesen oder schreiben.
    - Ein Cookie für `foo.www.example.com` lesen oder schreiben.

- `*://*.example.com/`
  - : Eine Erweiterung mit dieser Host-Berechtigung kann:
    - Ein sicheres oder nicht-sicheres Cookie für `www.example.com` mit beliebigem Pfad lesen oder schreiben.

## Tracking-Schutz

Tracker verwenden Drittanbieter-Cookies, d.h. Cookies, die von einer anderen Website als der, die Sie besuchen, gesetzt werden, um die von Ihnen besuchten Websites zu identifizieren. Zum Beispiel:

1. Sie besuchen `a-shopping-site.com`, das `ad-tracker.com` verwendet, um seine Anzeigen im Web auszuliefern. `ad-tracker.com` setzt ein Cookie, das mit der Domain `ad-tracker.com` verknüpft ist. Während Sie auf `a-shopping-site.com` sind, erhält `ad-tracker.com` Informationen über die Produkte, die Sie durchsuchen.
2. Sie besuchen jetzt `a-news-site.com`, das `ad-tracker.com` verwendet, um Anzeigen auszuliefern. `ad-tracker.com` liest sein Cookie und verwendet die von `a-shopping-site.com` gesammelten Informationen, um zu entscheiden, welche Anzeigen Ihnen angezeigt werden.

Firefox enthält zwei Funktionen, um Tracking zu verhindern: [dynamische Partitionierung](#speicher-partitionierung) und [First-Party-Isolierung](#first-party-isolierung). Diese Funktionen trennen Cookies, sodass Tracker keine Verbindung zwischen besuchten Websites herstellen können. So kann im vorangegangenen Beispiel `ad-tracker.com` das auf `a-news-site.com` erstellte Cookie nicht sehen, wenn `a-shopping-site.com` besucht wird.

Ab Firefox 103 ist die dynamische Partitionierung die standardmäßige Funktion. Wenn jedoch der Benutzer oder eine Erweiterung die First-Party-Isolierung aktiviert, hat diese Vorrang vor der dynamischen Partitionierung.

> [!NOTE]
> Wenn das private Browsen die dynamische Partitionierung verwendet, können beim normalen Browsen Cookies möglicherweise nicht partitioniert werden. Siehe [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/Guides/State_Partitioning#status_of_partitioning_in_firefox) für Details.

### Speicher-Partitionierung

Bei der Verwendung der [dynamischen Partitionierung](/de/docs/Web/Privacy/Guides/State_Partitioning#dynamic_partitioning) partitioniert Firefox den für JavaScript-APIs zugänglichen Speicher nach oberster Seite, während er angemessenen Zugang zu nicht partitioniertem Speicher bietet, um gängige Anwendungsfälle zu ermöglichen. Diese Funktion wird schrittweise eingeführt. Siehe [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/Guides/State_Partitioning#status_of_partitioning_in_firefox) für Implementierungsdetails.

Speicherpartitionen werden nach der scheme-reichen URL der obersten {{Glossary("Site", "Website")}} gekennzeichnet und, wenn die dynamische Partitionierung aktiv ist, ist der Schlüsselwert über die `partitionKey.topLevelSite`-Eigenschaft in der Cookies-API verfügbar, zum Beispiel `partitionKey: {topLevelSite: "http://site"}`.

Generell befinden sich Dokumente der obersten Ebene in nicht partitioniertem Speicher, während Drittanbieter-iFrames sich in partitioniertem Speicher befinden. Wenn ein Partitionierungsschlüssel nicht bestimmt werden kann, wird der Standard (nicht partitionierter Speicher) verwendet. Zum Beispiel können alle HTTP(S)-Seiten als Partitionierungsschlüssel verwendet werden, `moz-extension:-`-URLs jedoch nicht. Daher verwenden iFrames in Firefox-Erweiterungsdokumenten keinen partitionierten Speicher.

Standardmäßig arbeiten {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} mit Cookies in nicht partitioniertem Speicher. Um mit Cookies in partitioniertem Speicher in diesen APIs zu arbeiten, muss `topLevelSite` in `partitionKey` gesetzt werden. Eine Ausnahme bildet `getAll`, wo das Setzen von `partitionKey` ohne `topLevelSite` Cookies in partitioniertem und nicht partitioniertem Speicher zurückgibt. {{WebExtAPIRef("cookies.onChanged")}} wird für jedes Cookie ausgelöst, auf das die Erweiterung zugreifen kann, einschließlich Cookies im partitionierten Speicher. Um sicherzustellen, dass das richtige Cookie geändert wird, sollten Erweiterungen die `cookie.partitionKey`-Eigenschaft aus dem Ereignis lesen und deren Wert an {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} übergeben.

### First-Party-Isolierung

Wenn die First-Party-Isolierung aktiviert ist, werden Cookies durch die Domain der ursprünglich besuchten Seite qualifiziert (im Wesentlichen die dem Benutzer in der URL-Leiste angezeigte Domain, auch bekannt als "First-Party-Domain").

Die First-Party-Isolierung kann vom Benutzer aktiviert werden, indem die Konfiguration des Browsers angepasst wird, und von Erweiterungen durch die Einstellung {{WebExtAPIRef("privacy.websites","firstPartyIsolate")}} in der {{WebExtAPIRef("privacy")}}-API gesetzt werden. Beachten Sie, dass die First-Party-Isolierung standardmäßig im [Tor-Browser](https://www.torproject.org/) aktiviert ist.

Die `cookies`-API stellt die First-Party-Domain mithilfe des `firstPartyDomain`-Attributs dar. Alle Cookies, die gesetzt werden, während die First-Party-Isolierung aktiviert ist, haben dieses Attribut auf die Domain der ursprünglichen Seite gesetzt. Im vorhergehenden Beispiel ist dies `a-shopping-site.com` für ein Cookie und `a-news-site.com` für das andere. Wenn die First-Party-Isolierung deaktiviert ist, haben alle von Websites gesetzten Cookies diese Eigenschaft auf einen leeren String gesetzt.

Die APIs {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} akzeptieren alle eine `firstPartyDomain`-Option.

Wenn die First-Party-Isolierung aktiviert ist, müssen Sie diese Option angeben, andernfalls schlägt der API-Aufruf fehl und gibt ein abgelehntes Versprechen zurück. Für `get()`, `set()` und `remove()` müssen Sie einen String-Wert übergeben. Für `getAll()` können Sie hier auch `null` übergeben, und das ruft alle Cookies ab, unabhängig davon, ob sie einen nicht-leeren Wert für `firstPartyDomain` haben oder nicht.

Wenn die First-Party-Isolierung deaktiviert ist, ist der `firstPartyDomain`-Parameter optional und standardmäßig ein leerer String. Ein nicht-leerer String kann verwendet werden, um First-Party-Isolierungs-Cookies abzurufen oder zu ändern. Ebenso gibt das Übergeben von `null` als `firstPartyDomain` an `getAll()` alle Cookies zurück.

## Typen

- {{WebExtAPIRef("cookies.Cookie")}}
  - : Stellt Informationen über ein HTTP-Cookie dar.
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : Stellt einen Cookie-Speicher im Browser dar.
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : Stellt den Grund dar, warum ein Cookie geändert wurde.
- {{WebExtAPIRef("cookies.SameSiteStatus")}}
  - : Stellt den Same-Site-Status des Cookies dar.

## Methoden

- {{WebExtAPIRef("cookies.get()")}}
  - : Ruft Informationen über ein einzelnes Cookie ab.
- {{WebExtAPIRef("cookies.getAll()")}}
  - : Ruft alle Cookies ab, die zu einem gegebenen Satz von Filtern passen.
- {{WebExtAPIRef("cookies.set()")}}
  - : Setzt ein Cookie mit den angegebenen Cookie-Daten; kann gleichwertige Cookies überschreiben, falls sie existieren.
- {{WebExtAPIRef("cookies.remove()")}}
  - : Löscht ein Cookie nach Namen.
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : Listet alle vorhandenen Cookie-Speicher auf.

## Ereignishandler

- {{WebExtAPIRef("cookies.onChanged")}}
  - : Wird ausgelöst, wenn ein Cookie gesetzt oder entfernt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
