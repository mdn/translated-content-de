---
title: webRequest.onResponseStarted
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onResponseStarted
l10n:
  sourceCommit: 33a5708cc125bcaa4ebe74b46bb6fe1820616ff0
---

{{AddonSidebar}}

Ausgelöst, wenn das erste Byte des Antwortkörpers empfangen wird.

Dieses Ereignis ist nur informativ.

## Syntax

```js-nolint
browser.webRequest.onResponseStarted.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onResponseStarted.removeListener(listener)
browser.webRequest.onResponseStarted.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu lauschen. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, `false` andernfalls.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `details`
      - : `object`. Details zur Anfrage. Siehe den Abschnitt [details](#details_2) für weitere Informationen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die zu diesem Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können nur einen Wert übergeben:

    - `"responseHeaders"`: Einschließen von `responseHeaders` im `details`-Objekt, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer kontextuellen Identität stammt, die Cookie Store ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn beispielsweise die Webseite unter "https\://example.com" ein Bild oder ein `iframe` enthält, ist die `documentUrl` für das Bild oder `iframe` "https\://example.com". Für ein übergeordnetes Dokument ist `documentUrl` nicht definiert.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Subframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Sub-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind einmalig innerhalb eines Tabs.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplattencache geladen wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privatem Fenster stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Dies kann eine IPv6-Adresse sein.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Zum Beispiel, wenn "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer, die gleiche wie die `documentUrl`. Wenn zum Beispiel eine Seite ein `iframe` enthält und das `iframe` einen Link, der ein neues Dokument in das `iframe` lädt, dann ist die `documentUrl` für die resultierende Anfrage das Elterndokument des `ifram`es, aber die `originUrl` ist die URL des Dokuments im `iframe`, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, welcher die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`

  - : `object`. Dieses Attribut ist nur vorhanden, wenn die Anfrage über einen Proxy gesendet wird. Es enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`

      - : `string`. Der Typ des Proxy-Servers. Einer von:

        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxying über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5-Proxy
        - "socks4": SOCKS v4-Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxydienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Domain-Auflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Anfrage ausführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Zeitüberschreitung in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diese Periode nicht erneut verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung einmalig, sodass Sie diese verwenden können, um verschiedene Ereignisse, die mit derselben Anfrage verbunden sind, zu verknüpfen.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die zusammen mit dieser Antwort empfangen wurden.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wurde.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort oder die Zeichenkette 'HTTP/0.9 200 OK' für HTTP/0.9 Antworten (d.h. Antworten, denen eine Statuszeile fehlt) oder ein Leerstring, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Der Typ des Trackings, der mit der Anfrage verbunden ist, falls die Anfrage von der [Firefox-Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wurde. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifizierungsflags für den First-Party der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifizierungsflags für die Anfrage oder ihre Fenster-Hierarchie von Drittanbietern.

    Die Klassifizierungsflags beinhalten:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage in Fingerprinting verwickelt ist ("eine Quelle gefunden, die Fingerprinting betreibt").
      - `fingerprinting` zeigt an, dass die Domain zur Fingerprinting- und Tracking-Kategorie gehört. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Fingerprinting-Kategorie, aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken zur Identifizierung des besuchenden Benutzers zu Betrugsbekämpfungszwecken verwenden.
    - `cryptomining` und `cryptomining_content`: ähnlich zur Fingerprinting-Kategorie, jedoch für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage in Tracking verwickelt ist. `tracking` ist eine generische Tracking-Anfrage, die `ad`, `analytics`, `social`, und `content` Suffixe identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage in das Tracking von E-Mails verwickelt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, jedoch `tracking_content` und `fingerprinting_content` ausschließt.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content` Suffix zeigt Tracker an, die Inhalte verfolgen und ausliefern. Ihre Blockierung schützt Benutzer, kann aber dazu führen, dass Seiten nicht richtig funktionieren oder Elemente nicht angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
let target = "https://developer.mozilla.org/*";

/*
e.g.
"https://developer.mozilla.org/en-US/Firefox/Releases"
200
HTTP/1.1 200 OK
*/
function logResponse(responseDetails) {
  console.log(responseDetails.url);
  console.log(responseDetails.statusCode);
  console.log(responseDetails.statusLine);
}

browser.webRequest.onResponseStarted.addListener(logResponse, {
  urls: [target],
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onResponseStarted) API. Diese Dokumentation ist von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium Code abgeleitet.

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
