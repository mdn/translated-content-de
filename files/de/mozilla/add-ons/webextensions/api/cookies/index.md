---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{AddonSidebar}}

Ermöglicht Erweiterungen, Cookies zu erhalten, zu setzen und zu entfernen, sowie benachrichtigt zu werden, wenn sie sich ändern.

## Berechtigungen

Damit eine Erweiterung diese API nutzen kann, muss sie die `"cookies"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei angeben und [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für alle Seiten, auf deren Cookies sie zugreifen möchte. Die Erweiterung kann alle Cookies abrufen, setzen oder entfernen, die von einer URL, die den Host-Berechtigungen entspricht, gelesen, geschrieben oder gelöscht werden können. Zum Beispiel:

- `http://*.example.com/`

  - : Eine Erweiterung mit dieser Host-Berechtigung kann:

    - Ein nicht sicheres Cookie für `www.example.com` mit beliebigem Pfad lesen.
    - Ein sicheres oder nicht sicheres Cookie für `www.example.com` mit beliebigem Pfad schreiben.

    Sie kann _nicht_:

    - Ein sicheres Cookie für `www.example.com` lesen.

- `http://www.example.com/`

  - : Eine Erweiterung mit dieser Host-Berechtigung kann:

    - Ein nicht sicheres Cookie für `www.example.com` mit beliebigem Pfad lesen.
    - Ein nicht sicheres Cookie für `.example.com` mit beliebigem Pfad lesen.
    - Ein sicheres oder nicht sicheres Cookie für `www.example.com` mit beliebigem Pfad schreiben.
    - Ein sicheres oder nicht sicheres Cookie für `.example.com` mit beliebigem Pfad schreiben.

    Sie kann _nicht_:

    - Ein Cookie für `foo.example.com` lesen oder schreiben.
    - Ein Cookie für `foo.www.example.com` lesen oder schreiben.

- `*://*.example.com/`

  - : Eine Erweiterung mit dieser Host-Berechtigung kann:

    - Ein sicheres oder nicht sicheres Cookie für `www.example.com` mit beliebigem Pfad lesen oder schreiben.

## Verfolgungsschutz

Tracker verwenden Drittanbieter-Cookies, das heißt, Cookies, die von einer anderen Website als der, die Sie gerade besuchen, gesetzt werden, um die von Ihnen besuchten Websites zu identifizieren. Zum Beispiel:

1. Sie besuchen `a-shopping-site.com`, die `ad-tracker.com` verwendet, um ihre Werbung im Web auszuliefern. `ad-tracker.com` setzt ein Cookie, das mit der `ad-tracker.com` Domain verknüpft ist. Während Sie auf `a-shopping-site.com` sind, erhält `ad-tracker.com` Informationen über die Produkte, die Sie durchsuchen.
2. Sie besuchen jetzt `a-news-site.com`, die `ad-tracker.com` verwendet, um Werbung anzuzeigen. `ad-tracker.com` liest sein Cookie und verwendet die von `a-shopping-site.com` gesammelten Informationen, um zu entscheiden, welche Werbung Ihnen angezeigt werden soll.

Firefox enthält zwei Funktionen, um Tracking zu verhindern: [dynamische Partitionierung](#speicherpartitionierung) und [First-Party-Isolation](#first-party-isolation). Diese Funktionen trennen Cookies, sodass Tracker keine Verbindung zwischen besuchten Websites herstellen können. So kann `ad-tracker.com` im obigen Beispiel das bei `a-news-site.com` erstellte Cookie beim Besuch von `a-shopping-site.com` nicht sehen.

Ab Firefox 103 ist die dynamische Partitionierung die Standardfunktion. Wird jedoch die First-Party-Isolation von dem Benutzer oder einer Erweiterung aktiviert, hat sie Vorrang vor der dynamischen Partitionierung.

> [!NOTE]
> Wenn das private Surfen die dynamische Partitionierung verwendet, könnte das normale Surfen keine Partitionierung von Cookies haben. Siehe [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/Guides/State_Partitioning#status_of_partitioning_in_firefox) für Details.

### Speicherpartitionierung

Bei der Verwendung von [dynamischer Partitionierung](/de/docs/Web/Privacy/Guides/State_Partitioning#dynamic_partitioning) partitioniert Firefox den Speicher, der JavaScript-APIs zugänglich ist, nach oberster Seite, während angemessener Zugang zu unpartitioniertem Speicher gewährt wird, um gängige Anwendungsfälle zu ermöglichen. Diese Funktion wird schrittweise eingeführt. Siehe [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/Guides/State_Partitioning#status_of_partitioning_in_firefox) für Implementierungsdetails.

Speicherpartitionen werden durch die schematische URL der obersten {{Glossary("Site", "Website")}} bestimmt, und wenn die dynamische Partitionierung aktiv ist, ist der Schlüsselwert über die `partitionKey.topLevelSite` Eigenschaft in der Cookies-API verfügbar, z.B. `partitionKey: {topLevelSite: "http://site"}`.

Im Allgemeinen sind oberste Dokumente im unpartitionierten Speicher, während Drittanbieter-Iframes im partitionierten Speicher sind. Wenn ein Partitionsschlüssel nicht bestimmt werden kann, wird der Standardwert (unpartitionierter Speicher) verwendet. Zum Beispiel können während alle HTTP(S)-Seiten als Partitionsschlüssel verwendet werden, `moz-extension:-` URLs nicht. Daher verwenden Iframes in den Erweiterungsdokumenten von Firefox keinen partitionierten Speicher.

Standardmäßig arbeiten {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} mit Cookies im unpartitionierten Speicher. Um mit Cookies im partitionierten Speicher in diesen APIs zu arbeiten, muss `topLevelSite` in `partitionKey` gesetzt werden. Die Ausnahme ist `getAll`, wobei das Setzen von `partitionKey` ohne `topLevelSite` Cookies im partitionierten und unpartitionierten Speicher zurückgibt. {{WebExtAPIRef("cookies.onChanged")}} wird für jedes Cookie ausgelöst, auf das die Erweiterung zugreifen kann, einschließlich Cookies im partitionierten Speicher. Um sicherzustellen, dass das richtige Cookie geändert wird, sollten Erweiterungen die `cookie.partitionKey` Eigenschaft aus dem Ereignis lesen und ihren Wert an {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} übergeben.

### First-Party-Isolation

Wenn die First-Party-Isolation aktiviert ist, werden Cookies durch die Domain der ursprünglichen Seite qualifiziert, die der Benutzer besucht hat (im Wesentlichen die Domain, die dem Benutzer in der URL-Leiste angezeigt wird, auch bekannt als "First-Party-Domain").

First-Party-Isolation kann von dem Benutzer aktiviert werden, indem die Konfiguration des Browsers angepasst wird, und kann von Erweiterungen mittels der {{WebExtAPIRef("privacy.websites","firstPartyIsolate")}} Einstellung in der {{WebExtAPIRef("privacy")}} API gesetzt werden. Beachten Sie, dass die First-Party-Isolation standardmäßig im [Tor Browser](https://www.torproject.org/) aktiviert ist.

Die `cookies` API repräsentiert die First-Party-Domain mittels des `firstPartyDomain` Attributs. Alle Cookies, die gesetzt werden, während die First-Party-Isolation aktiv ist, haben dieses Attribut auf die Domain der ursprünglichen Seite gesetzt. Im obigen Beispiel wäre dies `a-shopping-site.com` für ein Cookie und `a-news-site.com` für das andere. Wenn die First-Party-Isolation deaktiviert ist, haben alle von Websites gesetzten Cookies diese Eigenschaft auf einen leeren String gesetzt bekommen.

Die {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} APIs akzeptieren alle eine `firstPartyDomain` Option.

Wenn die First-Party-Isolation aktiviert ist, müssen Sie diese Option angeben, oder der API-Aufruf schlägt fehl und gibt ein abgelehntes Versprechen zurück. Für `get()`, `set()` und `remove()` müssen Sie einen String-Wert übergeben. Für `getAll()` können Sie hier auch `null` übergeben, und dies ruft alle Cookies ab, unabhängig davon, ob sie einen nicht-leeren Wert für `firstPartyDomain` haben oder nicht.

Wenn die First-Party-Isolation deaktiviert ist, ist der `firstPartyDomain` Parameter optional und standardmäßig auf einen leeren String gesetzt. Ein nicht-leerer String kann verwendet werden, um First-Party-Isolation Cookies abzurufen oder zu ändern. Ebenso bewirkt das Übergeben von `null` als `firstPartyDomain` an `getAll()`, dass alle Cookies zurückgegeben werden.

## Typen

- {{WebExtAPIRef("cookies.Cookie")}}
  - : Repräsentiert Informationen über ein HTTP-Cookie.
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : Repräsentiert einen Cookie-Speicher im Browser.
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : Repräsentiert den Grund, warum ein Cookie geändert wurde.
- {{WebExtAPIRef("cookies.SameSiteStatus")}}
  - : Repräsentiert den Same-Site-Status des Cookies.

## Methoden

- {{WebExtAPIRef("cookies.get()")}}
  - : Ruft Informationen über ein einzelnes Cookie ab.
- {{WebExtAPIRef("cookies.getAll()")}}
  - : Ruft alle Cookies ab, die einem gegebenen Filtersatz entsprechen.
- {{WebExtAPIRef("cookies.set()")}}
  - : Setzt ein Cookie mit den angegebenen Cookie-Daten; kann vorhandene äquivalente Cookies überschreiben, wenn sie existieren.
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
> Diese API basiert auf Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
