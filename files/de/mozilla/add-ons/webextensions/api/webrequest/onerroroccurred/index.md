---
title: webRequest.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onErrorOccurred
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn eine Anfrage aufgrund eines Fehlers nicht bearbeitet werden konnte: zum Beispiel bei fehlender Internetverbindung.

Der Fehler wird dem Listener als Eigenschaft `error` des [`details`](#details)-Objekts übergeben.

Beachten Sie, dass dieses Ereignis nicht für HTTP-Fehler (4XX oder 5XX-Antworten) ausgelöst wird: diese durchlaufen die normalen Phasen einer Anfrage, rufen alle Event-Listener auf und setzen `details.statusCode`, um den Fehler zu melden.

Dieses Ereignis ist nur informativ.

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
  - : Das Überwachen dieses Ereignisses beenden. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es überwacht wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `details`
      - : `object`. Details zur Anfrage. Weitere Informationen finden Sie im Abschnitt [details](#details).

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse beschränkt, die an diesen Listener gesendet werden.

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab mit einer kontextuellen Identität stammt, dann die Cookie-Store-ID dieser kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn zum Beispiel die Webseite unter "https\://example.com" ein Bild oder ein Iframe enthält, dann wird für das Bild oder den Iframe die `documentUrl` "https\://example.com" sein. Für ein oberstes Dokument ist `documentUrl` undefiniert.
- `error`
  - : `string`. Die Fehlerbeschreibung. Dieser String ist ein interner Fehlerstring, kann von einem Browser zum anderen variieren und ist nicht garantiert zwischen Versionen gleich zu bleiben.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind eindeutig innerhalb eines Tabs.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplatten-Cache abgerufen wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browsing-Fenster stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann sich um eine buchstäbliche IPv6-Adresse handeln.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn beispielsweise "https\://example.com" einen Link enthält und der Benutzer diesen Link anklickt, dann ist die `originUrl` der resultierenden Anfrage "https\://example.com".

    Die `originUrl` ist häufig, aber nicht immer, die gleiche wie die `documentUrl`. Wenn zum Beispiel eine Seite ein Iframe enthält und das Iframe einen Link enthält, der ein neues Dokument in das Iframe lädt, dann ist die `documentUrl` der resultierenden Anfrage das Elterndokument des Iframes, aber die `originUrl` wird die URL des Dokuments im Iframe sein, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Frame vorhanden ist.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Sie enthält die folgenden Eigenschaften:
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
      - : `boolean`. True, wenn der Proxy die Auflösung von Domainnamen basierend auf dem angegebenen Hostnamen durchführt, was bedeutet, dass der Client kein eigenes DNS-Lookup durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browser-Sitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zu verknüpfen, die mit derselben Anfrage verbunden sind.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie von Dritten stammen.
- `timeStamp`
  - : `number`. Die Zeit, als dieses Ereignis ausgelöst wurde, in [Millisekunden seit dem Unix-Epoch](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Der Typ der mit der Anfrage verbundenen Verfolgung, wenn die Anfrage durch den [Firefox Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifikationsflags für die First-Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflags für die Anfrage oder die Third-Parties der Fensterhierarchie.

    Die Klassifikationsflags umfassen:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage in Fingerprinting involviert ist („eine Herkunft, die zum Fingerprinting gefunden wurde“).
      - `fingerprinting` zeigt an, dass die Domain in der Fingerprinting- und Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Fingerprinting-Kategorie, aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zur Betrugsvermeidung zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, jedoch für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage in Tracking involviert ist. `tracking` ist eine generische Tracking-Anfrage, die Suffixe `ad`, `analytics`, `social` und `content` identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage in E-Mail-Tracking involviert ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, jedoch `tracking_content` und `fingerprinting_content` ausschließt.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle Social-Tracking-Flags kombiniert.

    Weitere Informationen zu Tracker-Typen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das Suffix `content` zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Das Blockieren dieser Tracker schützt Benutzer, kann jedoch dazu führen, dass Websites nicht richtig funktionieren oder Elemente nicht angezeigt werden.

    **Hinweis** Wenn der Firefox Tracking-Schutz die Anfrage blockiert, wird ein leeres Objekt zurückgegeben und `error` gibt einen dieser Codes zurück:
    - `NS_ERROR_MALWARE_URI` zeigt eine Malware-URI an.
    - `NS_ERROR_PHISHING_URI` zeigt eine Phishing-URI an.
    - `NS_ERROR_TRACKING_URI` zeigt eine Tracking-URI an.
    - `NS_ERROR_UNWANTED_URI` zeigt eine unerwünschte URI an.
    - `NS_ERROR_BLOCKED_URI` zeigt eine blockierte URI an.
    - `NS_ERROR_HARMFUL_URI` zeigt eine schädliche URI an.
    - `NS_ERROR_FINGERPRINTING` zeigt eine Fingerprinting-URI an.
    - `NS_ERROR_CRYPTOMINING_URI` zeigt eine Cryptomining-URI an.
    - `NS_ERROR_SOCIALTRACKING_URI` zeigt eine Social-Tracking-URI an.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onErrorOccurred) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
