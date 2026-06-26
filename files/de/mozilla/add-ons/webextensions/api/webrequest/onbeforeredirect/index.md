---
title: webRequest.onBeforeRedirect
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRedirect
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Wird ausgelöst, wenn eine serverseitige Umleitung kurz bevorsteht.

Beachten Sie, dass Sie für dieses Ereignis nicht `"blocking"` übergeben können, sodass Sie die Anfrage von diesem Ereignis aus nicht ändern oder abbrechen können: Es dient nur zu Informationszwecken.

## Syntax

```js-nolint
browser.webRequest.onBeforeRedirect.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onBeforeRedirect.removeListener(listener)
browser.webRequest.onBeforeRedirect.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt einen Listener für dieses Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `details`
      - : `object`. Details zur Anfrage. Siehe den Abschnitt [details](#details) für weitere Informationen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können nur einen Wert übergeben:
    - `"responseHeaders"`: Schließt `responseHeaders` in das an den Listener übergebene `details`-Objekt ein

## Zusätzliche Objekte

### details

- `documentId` {{optional_inline}}
  - : `string`. Die UUID des Dokuments, das die Anfrage stellt. Siehe den Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für weitere Informationen.
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.
- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer kontextabhängigen Identität stammt, die Cookie-Store-ID der kontextabhängigen Identität. Siehe [Mit kontextbezogenen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. Die URL des Dokuments, in dem die Ressource geladen wird. Zum Beispiel, wenn die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder iframe "https\://example.com". Für ein Hauptdokument ist `documentUrl` undefiniert.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Subframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Sub-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `frameType`
  - : `string`. Der Typ des Frames, in dem die Anfrage erfolgte. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"` zurück.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplattencache abgerufen wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann sich um eine IPv6-Adresse handeln.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. Die URL der Ressource, die die Anfrage ausgelöst hat. Zum Beispiel, wenn "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die daraus resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer, die gleiche wie die `documentUrl`. Zum Beispiel, wenn eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes sein, aber die `originUrl` wird die URL des Dokuments im iframe sein, das den Link enthielt.

- `parentDocumentId`{{optional_inline}}
  - : `string`. Eine UUID des übergeordneten Dokuments, das den Frame besitzt. Nicht gesetzt, wenn es kein übergeordnetes Dokument gibt. Siehe den Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für weitere Informationen.
- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Wird auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Es enthält die folgenden Eigenschaften:
    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`
      - : `string`. Der Typ des Proxy-Servers. Einer von:
        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxy über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die DNS-Namensauflösung basierend auf dem angegebenen Hostnamen durchführen wird, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Fallback-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `redirectUrl`
  - : `string`. Die neue URL.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind eindeutig innerhalb einer Browser-Sitzung, sodass Sie sie verwenden können, um verschiedene Ereignisse, die mit derselben Anfrage verbunden sind, zuzuordnen.
- `responseHeaders`
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die zusammen mit dieser Umleitung empfangen wurden.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort oder die Zeichenkette 'HTTP/0.9 200 OK' für HTTP/0.9-Antworten (d.h. Antworten, die keine Statuszeile enthalten) oder eine leere Zeichenkette, wenn es keine Header gibt.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage erfolgt. Wird auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab in Verbindung steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltfensterhierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Der Typ des Trackings, der mit der Anfrage verbunden ist, falls die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit folgenden Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifizierungsflags für die Erste Partei der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifizierungsflags für die Drittpartei der Anfrage oder deren Fensterhierarchie.

    Die Klassifizierungsflags umfassen:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage an Fingerprinting beteiligt ist ("ein Ursprung, der zum Fingerprinting gefunden wurde").
      - `fingerprinting` zeigt an, dass die Domain in der Kategorie Fingerprinting und Tracking ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Kategorie Fingerprinting, aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zur Betrugsbekämpfung zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, aber für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jeder allgemeine Tracking-Aufruf, die Endungen `ad`, `analytics`, `social` und `content` identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage am Tracking von E-Mails beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der Website von [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers). Der Suffix `content` zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Ihr Blockieren schützt Benutzer, kann aber dazu führen, dass Websites nicht funktionieren oder Elemente nicht angezeigt werden.

## Beispiele

```js
let target = "https://developer.mozilla.org/*";

/*
e.g.
"https://developer.mozilla.org/"
"https://developer.mozilla.org/en-US/"
*/
function logResponse(responseDetails) {
  console.log(responseDetails.url);
  console.log(responseDetails.redirectUrl);
}

browser.webRequest.onBeforeRedirect.addListener(logResponse, {
  urls: [target],
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeRedirect) API von Chromium. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
