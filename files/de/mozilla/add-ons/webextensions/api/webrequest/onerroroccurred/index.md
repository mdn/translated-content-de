---
title: webRequest.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onErrorOccurred
l10n:
  sourceCommit: 33a5708cc125bcaa4ebe74b46bb6fe1820616ff0
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Anfrage aufgrund eines Fehlers nicht verarbeitet werden konnte: zum Beispiel bei fehlender Internetverbindung.

Der Fehler wird dem Listener als `error` Eigenschaft des [`details`](#details) Objekts übergeben.

Beachten Sie, dass dieses Ereignis nicht bei HTTP-Fehlern (4XX oder 5XX Antworten) ausgelöst wird: Diese werden die normalen Phasen einer Anfrage durchlaufen, alle Event-Listener aufrufen und `details.statusCode` setzen, um den Fehler zu melden.

Dieses Ereignis dient nur zur Information.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `details`
      - : `object`. Details zur Anfrage. Weitere Informationen finden Sie im Abschnitt [details](#details_2).

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab stammt, der in einer kontextuellen Identität geöffnet ist, ist die Cookie Store ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn zum Beispiel die Webseite bei "https\://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder iframe "https\://example.com". Bei einem obersten Dokument ist `documentUrl` undefiniert.
- `error`
  - : `string`. Die Fehlerbeschreibung. Dieser String ist ein interner Fehlerstring, kann von einem Browser zum anderen variieren und ist nicht garantiert, zwischen Versionen gleich zu bleiben.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplattencache geholt wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem Fenster im privaten Modus stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann eine wörtliche IPv6-Adresse sein.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn zum Beispiel "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer, dieselbe wie die `documentUrl`. Wenn zum Beispiel eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes sein, aber die `originUrl` wird die URL des Dokuments im iframe sein, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Wird auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy gestellt wird. Sie enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxyservers.
    - `port`
      - : `integer`. Die Portnummer des Proxyservers.
    - `type`

      - : `string`. Der Typ des Proxyservers. Eine von:

        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxying über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxydienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Auflösung des Domainnamens basierend auf dem bereitgestellten Hostnamen durchführt, das bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxyverbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie diese verwenden können, um verschiedene Ereignisse zu verbinden, die mit derselben Anfrage verbunden sind.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage stattfindet. Wird auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab in Verbindung steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit dem Epochenbeginn](https://de.wikipedia.org/wiki/Unixzeit).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art des Trackings, das mit der Anfrage in Verbindung steht, wenn die Anfrage durch den [Firefox Tracking-Schutz](https://support.mozilla.org/de/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifizierungsflags für die Erstpartei der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifizierungsflags für die Drittparteien der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifizierungsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage Fingerprinting beinhaltet ("eine Herkunft wird für das Fingerprinting gefunden").
      - `fingerprinting` zeigt an, dass die Domain in der Kategorie Fingerprinting und Tracking ist. Beispiele für diese Art von Domain umfassen Werbetreibende, die ein Profil mit dem besuchenden Nutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Kategorie Fingerprinting, aber nicht in der Kategorie Tracking ist. Beispiele für diese Art von Domain umfassen Zahlungsanbieter, die Fingerprinting-Techniken nutzen, um den besuchenden Nutzer zu Identifikationszwecken für Betrugsprävention zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, aber für Cryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage Tracking beinhaltet. `tracking` ist jede generische Tracking-Anfrage, die `ad`, `analytics`, `social` und `content` Suffixe identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage E-Mail-Tracking beinhaltet.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content` Suffix zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Deren Blockieren schützt Benutzer, kann jedoch dazu führen, dass Websites beschädigt werden oder Elemente nicht angezeigt werden.

    **Hinweis** Wenn der Firefox Tracking-Schutz die Anfrage blockiert, wird ein leeres Objekt zurückgegeben und `error` gibt einen dieser Codes zurück:

    - `NS_ERROR_MALWARE_URI` weist auf eine Malware-URI hin.
    - `NS_ERROR_PHISHING_URI` weist auf eine Phishing-URI hin.
    - `NS_ERROR_TRACKING_URI` weist auf eine Tracking-URI hin.
    - `NS_ERROR_UNWANTED_URI` weist auf eine unerwünschte URI hin.
    - `NS_ERROR_BLOCKED_URI` weist auf eine blockierte URI hin.
    - `NS_ERROR_HARMFUL_URI` weist auf eine schädliche URI hin.
    - `NS_ERROR_FINGERPRINTING` weist auf eine Fingerprinting-URI hin.
    - `NS_ERROR_CRYPTOMINING_URI` weist auf eine Cryptomining-URI hin.
    - `NS_ERROR_SOCIALTRACKING_URI` weist auf eine soziale Tracking-URI hin.

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
> Diese API basiert auf der Chromium-API [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onErrorOccurred). Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
