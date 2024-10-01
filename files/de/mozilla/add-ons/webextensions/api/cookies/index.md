---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen das Abrufen und Setzen von Cookies sowie Benachrichtigungen über deren Änderungen.

## Berechtigungen

Um diese API zu verwenden, muss ein Add-on die "cookies" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in seiner [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei angeben, zusammen mit [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für alle Webseiten, für die es auf Cookies zugreifen möchte. Das Add-on kann alle Cookies lesen oder schreiben, die von einer URL, die zu den Host-Berechtigungen passt, gelesen oder geschrieben werden könnten. Zum Beispiel:

- `http://*.example.com/`

  - : Ein Add-on mit dieser Host-Berechtigung kann:

    - Ein nicht-sicheres Cookie für `www.example.com` mit jedem Pfad lesen.
    - Ein sicheres oder nicht-sicheres Cookie für `www.example.com` mit jedem Pfad setzen.

    Es darf _nicht_:

    - Ein sicheres Cookie für `www.example.com` lesen.

- `http://www.example.com/`

  - : Ein Add-on mit dieser Host-Berechtigung kann:

    - Ein nicht-sicheres Cookie für `www.example.com` mit jedem Pfad lesen.
    - Ein nicht-sicheres Cookie für `.example.com` mit jedem Pfad lesen.
    - Ein sicheres oder nicht-sicheres Cookie für `www.example.com` mit jedem Pfad setzen.
    - Ein sicheres oder nicht-sicheres Cookie für `.example.com` mit jedem Pfad setzen.

    Es darf _nicht_:

    - Ein Cookie für `foo.example.com` lesen oder schreiben.
    - Ein Cookie für `foo.www.example.com` lesen oder schreiben.

- `*://*.example.com/`

  - : Ein Add-on mit dieser Host-Berechtigung kann:

    - Ein sicheres oder nicht-sicheres Cookie für `www.example.com` mit jedem Pfad lesen oder schreiben.

## Tracking-Schutz

Tracker verwenden Drittanbieter-Cookies, also Cookies, die von einer anderen Website als der, auf der Sie sich befinden, gesetzt wurden, um die von Ihnen besuchten Websites zu identifizieren. Zum Beispiel:

1. Sie besuchen `a-shopping-site.com`, das `ad-tracker.com` verwendet, um seine Werbung im Internet zu liefern. `ad-tracker.com` setzt ein Cookie, das mit der `ad-tracker.com` Domain verbunden ist. Während Sie auf `a-shopping-site.com` sind, erhält `ad-tracker.com` Informationen über die von Ihnen angesehenen Produkte.
2. Sie besuchen nun `a-news-site.com`, das `ad-tracker.com` zur Werbungsschaltung verwendet. `ad-tracker.com` liest sein Cookie und verwendet die von `a-shopping-site.com` gesammelten Informationen, um zu entscheiden, welche Werbung Ihnen angezeigt wird.

Firefox beinhaltet Funktionen, um das Tracking zu verhindern. Diese Funktionen trennen Cookies, sodass Tracker keine Verbindung zwischen besuchten Websites herstellen können. In dem oben genannten Beispiel kann `ad-tracker.com` das beim Besuch von `a-shopping-site.com` erstellte Cookie auf `a-news-site.com` nicht sehen. Die erste Iteration dieses Schutzes war die Isolation von First-Party-Daten, die jetzt von der [dynamischen Partitionierung](/de/docs/Web/Privacy/State_Partitioning#dynamic_partitioning) abgelöst wird.

> [!NOTE]
> Die Isolation von First-Party-Daten und die dynamische Partitionierung werden nicht gleichzeitig aktiv sein. Wenn der Benutzer oder eine Erweiterung die Isolation von First-Party-Daten einschaltet, hat diese Vorrang vor der dynamischen Partitionierung. Wenn jedoch das private Surfen die dynamische Partitionierung verwendet, kann das normale Surfen die Cookies nicht partitionieren. Weitere Details finden Sie unter [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/State_Partitioning#status_of_partitioning_in_firefox).

### Speicherpartitionierung

Bei Verwendung der [dynamischen Partitionierung](/de/docs/Web/Privacy/State_Partitioning#dynamic_partitioning) partitioniert Firefox den Speicher, auf den über JavaScript-APIs zugegriffen werden kann, nach der obersten Seite und bietet gleichzeitig einen angemessenen Zugang zu nicht partitioniertem Speicher, um übliche Anwendungsfälle zu ermöglichen. Dieses Feature wird schrittweise eingeführt. Weitere Implementierungsdetails finden Sie unter [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/State_Partitioning#status_of_partitioning_in_firefox).

Speicherpartitionen werden durch die schemafähige URL der obersten {{Glossary("Site", "Website")}} und, wenn die dynamische Partitionierung aktiv ist, durch den Schlüsselwert, der über die `partitionKey.topLevelSite` Eigenschaft in der Cookies-API verfügbar ist, z.B. `partitionKey: {topLevelSite: "http://site"}`.

Im Allgemeinen befinden sich oberste Dokumente im nicht partitionierten Speicher, während Drittanbieter-Iframes im partitionierten Speicher sind. Wenn ein Partitionierungsschlüssel nicht ermittelt werden kann, wird der Standardwert (nicht partitionierter Speicher) verwendet. Zum Beispiel können alle HTTP(S)-Seiten als Partitionierungsschlüssel verwendet werden, `moz-extension:-` URLs jedoch nicht. Daher verwenden Iframes in Firefox-Erweiterungsdokumenten keinen partitionierten Speicher.

Standardmäßig arbeiten {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} mit Cookies im nicht partitionierten Speicher. Um mit Cookies im partitionierten Speicher in diesen APIs zu arbeiten, muss `topLevelSite` in `partitionKey` gesetzt werden. Die Ausnahme ist `getAll`, bei dem das Einstellen von `partitionKey` ohne `topLevelSite` Cookies im partitionierten und nicht partitionierten Speicher zurückgibt. {{WebExtAPIRef("cookies.onChanged")}} wird für jedes Cookie ausgelöst, auf das die Erweiterung zugreifen kann, einschließlich Cookies im partitionierten Speicher. Um sicherzustellen, dass das richtige Cookie modifiziert wird, sollten Erweiterungen die `cookie.partitionKey` Eigenschaft aus dem Ereignis lesen und ihren Wert an {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} übergeben.

### First-Party-Isolation

Wenn die First-Party-Isolation aktiviert ist, werden Cookies durch die Domain der ursprünglichen Seite qualifiziert, die der Benutzer besucht hat (im Wesentlichen die Domain, die dem Benutzer in der URL-Leiste angezeigt wird, auch bekannt als "First-Party-Domain").

Die First-Party-Isolation kann vom Benutzer durch Ändern der Browserkonfiguration aktiviert und von Erweiterungen über die Einstellung {{WebExtAPIRef("privacy.websites","firstPartyIsolate")}} in der {{WebExtAPIRef("privacy")}} API gesetzt werden. Beachten Sie, dass die First-Party-Isolation standardmäßig im [Tor Browser](https://www.torproject.org/) aktiviert ist.

In der `cookies` API wird die First-Party-Domain über das Attribut `firstPartyDomain` dargestellt. Alle Cookies, die während der aktivierten First-Party-Isolation gesetzt werden, haben dieses Attribut auf die Domain der ursprünglichen Seite gesetzt. In dem vorherigen Beispiel ist dies `a-shopping-site.com` für ein Cookie und `a-news-site.com` für das andere. Wenn die First-Party-Isolation deaktiviert ist, haben alle von Websites gesetzten Cookies diese Eigenschaft auf einen leeren String gesetzt.

Die {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} APIs akzeptieren alle eine `firstPartyDomain` Option.

Wenn die First-Party-Isolation aktiviert ist, müssen Sie diese Option angeben, sonst schlägt der API-Aufruf fehl und gibt ein abgelehntes Promise zurück. Bei `get()`, `set()` und `remove()` müssen Sie einen String-Wert übergeben. Für `getAll()` können Sie hier auch `null` übergeben, und dies wird alle Cookies abrufen, unabhängig davon, ob sie einen nicht-leeren Wert für `firstPartyDomain` haben oder nicht.

Wenn die First-Party-Isolation deaktiviert ist, ist der `firstPartyDomain` Parameter optional und standardmäßig ein leerer String. Ein nicht-leerer String kann verwendet werden, um Cookies der First-Party-Isolation abzurufen oder zu modifizieren. Ebenso führt das Übergeben von `null` als `firstPartyDomain` an `getAll()` dazu, dass alle Cookies zurückgegeben werden.

## Typen

- {{WebExtAPIRef("cookies.Cookie")}}
  - : Stellt Informationen über ein HTTP-Cookie dar.
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : Stellt einen Cookie-Store im Browser dar.
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : Stellt den Grund dar, warum sich ein Cookie geändert hat.
- {{WebExtAPIRef("cookies.SameSiteStatus")}}
  - : Stellt den gleichen Status des Cookies dar.

## Methoden

- {{WebExtAPIRef("cookies.get()")}}
  - : Ruft Informationen zu einem einzelnen Cookie ab.
- {{WebExtAPIRef("cookies.getAll()")}}
  - : Ruft alle Cookies ab, die einem bestimmten Filtersatz entsprechen.
- {{WebExtAPIRef("cookies.set()")}}
  - : Setzt ein Cookie mit den angegebenen Cookie-Daten; kann vorhandene, gleichwertige Cookies überschreiben.
- {{WebExtAPIRef("cookies.remove()")}}
  - : Löscht ein Cookie nach Name.
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : Listet alle vorhandenen Cookie-Stores auf.

## Ereignishandler

- {{WebExtAPIRef("cookies.onChanged")}}
  - : Wird ausgelöst, wenn ein Cookie gesetzt oder entfernt wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies) API von Chromium. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
