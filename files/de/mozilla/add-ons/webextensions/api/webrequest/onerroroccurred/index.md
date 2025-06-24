---
title: webRequest.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onErrorOccurred
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Anfrage aufgrund eines Fehlers nicht verarbeitet werden konnte: beispielsweise bei fehlender Internetverbindung.

Der Fehler wird als Eigenschaft `error` des [`details`](#details)-Objekts an den Listener übergeben.

Beachten Sie, dass dieses Ereignis nicht für HTTP-Fehler (4XX oder 5XX Antworten) ausgelöst wird: Diese durchlaufen die normalen Stufen einer Anfrage, rufen eventuelle Ereignis-Listener auf und setzen `details.statusCode`, um den Fehler zu melden.

Dieses Ereignis dient lediglich zur Information.

## Syntax

```js-nolint
browser.webRequest.onErrorOccurred.addListener(
  listener,             // function
  filter                //  object
)
browser.webRequest.onErrorOccurred.removeListener(listener)
browser.webRequest.onErrorOccurred.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu überwachen. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, ansonsten `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält folgendes Argument:
    - `details`
      - : `object`. Details zur Anfrage. Weitere Informationen finden Sie im Abschnitt [details](#details).

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die an diesen Listener gesendeten Ereignisse einschränkt.

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage aus einem Tab stammt, der in einer kontextbezogenen Identität geöffnet ist, ist dies die Cookie-Store-ID der kontextbezogenen Identität. Weitere Informationen finden Sie unter [Mit kontextbezogenen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn beispielsweise die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder das iframe "https\://example.com". Für ein Dokument auf oberster Ebene ist die `documentUrl` undefiniert.
- `error`
  - : `string`. Die Fehlerbeschreibung. Dieser String ist ein interner Fehlerstring, kann von Browser zu Browser variieren und ist zwischen Versionen nicht garantiert gleichbleibend.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des Außenrahmens. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplattencache abgerufen wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage von einem privaten Browsing-Fenster stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann sich um eine wörtliche IPv6-Adresse handeln.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn beispielsweise "https\://example.com" einen Link enthält und der Benutzer auf diesen Link klickt, dann ist die `originUrl` der resultierenden Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer, identisch mit der `documentUrl`. Wenn beispielsweise eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann ist die `documentUrl` der resultierenden Anfrage das Eltern-Dokument des iframes, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Wird auf -1 gesetzt, wenn kein Elternrahmen existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Sie enthält folgende Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`

      - : `string`. Der Typ des Proxy-Servers. Einer der folgenden:
        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxying über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Namensauflösung basierend auf dem angegebenen Hostnamen durchführt, d.h. der Client sollte keine eigene DNS-Abfrage durchführen.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie damit verschiedene Ereignisse in Bezug auf dieselbe Anfrage in Beziehung setzen können.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage stattfindet. Wird auf -1 gesetzt, wenn die Anfrage nicht in Bezug zu einem Tab steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie Drittanbieter sind.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Der Art des Trackings, das mit der Anfrage verbunden ist, wenn die Anfrage durch den [Firefox-Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit den folgenden Eigenschaften:

    - `firstParty`
      - : `array` von `string`. Klassifizierungskennzeichen für die First Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifizierungskennzeichen für die Drittanbieter der Anfrage oder deren Fensterhierarchie.

    Die Klassifizierungskennzeichen umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage in Fingerprinting verwickelt ist ("eine Herkunft, die zum Fingerprinting entdeckt wurde").
      - `fingerprinting` zeigt an, dass die Domäne in der Kategorie Fingerprinting und Tracking ist. Beispiele für diese Art von Domänen sind Werbeanbieter, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domäne in der Kategorie Fingerprinting, aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domänen sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zu Identifikationszwecken zu erkennen.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, aber für Cryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social`, und `tracking_content`: zeigt an, dass die Anfrage in Tracking verwickelt ist. `tracking` ist eine generische Tracking-Anfrage, die `ad`, `analytics`, `social`, und `content` Suffixe identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage in das Tracking von E-Mails verwickelt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, `tracking_content` und `fingerprinting_content` ausgeschlossen.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Sie finden weitere Informationen zu Trackertypen auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Webseite. Das `content`-Suffix kennzeichnet Tracker, die Inhalte verfolgen und bereitstellen. Das Blockieren von ihnen schützt Benutzer, kann jedoch dazu führen, dass Seiten nicht richtig funktionieren oder Elemente nicht angezeigt werden.

    **Hinweis** Falls der Firefox-Schutz vor Aktivitätenverfolgung die Anfrage blockiert, wird ein leeres Objekt zurückgegeben und `error` gibt einen dieser Codes zurück:

    - `NS_ERROR_MALWARE_URI` was eine Malware-URI anzeigt.
    - `NS_ERROR_PHISHING_URI` was eine Phishing-URI anzeigt.
    - `NS_ERROR_TRACKING_URI` was eine Tracking-URI anzeigt.
    - `NS_ERROR_UNWANTED_URI` was eine unerwünschte URI anzeigt.
    - `NS_ERROR_BLOCKED_URI` was eine blockierte URI anzeigt.
    - `NS_ERROR_HARMFUL_URI` was eine schädliche URI anzeigt.
    - `NS_ERROR_FINGERPRINTING` was eine Fingerprinting-URI anzeigt.
    - `NS_ERROR_CRYPTOMINING_URI` was eine Cryptomining-URI anzeigt.
    - `NS_ERROR_SOCIALTRACKING_URI` was eine soziale Tracking-URI anzeigt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
let target = "<all_urls>";

/*
e.g., with no network:
"https://developer.mozilla.org/en-US/"
NS_ERROR_NET_ON_RESOLVED in Firefox
net::ERR_INTERNET_DISCONNECTED in Chrome
*/
function logError(responseDetails) {
  console.log(responseDetails.url);
  console.log(responseDetails.error);
}

browser.webRequest.onErrorOccurred.addListener(logError, { urls: [target] });
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onErrorOccurred) von Chromium. Diese Dokumentation ist von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code abgeleitet.

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
