---
title: webRequest.onBeforeSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders
l10n:
  sourceCommit: ecdff1d43aa1606d354cafc6eadf4b0c33e16352
---

Dieses Ereignis wird ausgelöst, bevor HTTP-Daten gesendet werden, jedoch nachdem alle HTTP-Header verfügbar sind. Dies ist eine gute Stelle, um zuzuhören, wenn Sie HTTP-Anfrageheader ändern möchten.

Um die Anfrageheader zusammen mit den restlichen Anfragedaten an den Listener zu übergeben, fügen Sie `"requestHeaders"` in das `extraInfoSpec` Array ein.

Um die Header synchron zu ändern: Fügen Sie `"blocking"` in `extraInfoSpec` ein, dann geben Sie in Ihrem Ereignis-Listener eine [`BlockingResponse`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse) mit einer Eigenschaft namens `requestHeaders` zurück, deren Wert die zu sendenden Anfrageheader umfasst.

Um die Header asynchron zu ändern: Fügen Sie `"blocking"` in `extraInfoSpec` ein, dann geben Sie in Ihrem Ereignis-Listener ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einer `BlockingResponse` aufgelöst wird.

Wenn Sie `"blocking"` verwenden, müssen Sie die ["webRequestBlocking" API-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

Es ist möglich, dass Erweiterungen hier in Konflikt geraten. Wenn zwei Erweiterungen auf `onBeforeSendHeaders` für dieselbe Anfrage hören, sieht der zweite Listener Änderungen, die der erste Listener vorgenommen hat, und kann Änderungen des ersten Listeners rückgängig machen. Wenn zum Beispiel der erste Listener einen `Cookie`-Header hinzufügt und der zweite Listener alle `Cookie`-Header entfernt, gehen die Änderungen des ersten Listeners verloren. Wenn Sie die Header sehen möchten, die tatsächlich gesendet werden, ohne das Risiko, dass eine andere Erweiterung sie später ändert, verwenden Sie {{WebExtAPIRef("webRequest.onSendHeaders", "onSendHeaders")}}, obwohl Sie bei diesem Ereignis keine Header ändern können.

Nicht alle tatsächlich gesendeten Header sind immer in `requestHeaders` enthalten. Insbesondere Header, die mit Zwischenspeicherung zu tun haben (zum Beispiel `Cache-Control`, `If-Modified-Since`, `If-None-Match`), werden nie gesendet. Auch kann sich das Verhalten hier zwischen den Browsern unterscheiden.

Laut Spezifikation sind Header-Namen nicht groß-/kleinschreibungssensitiv. Das bedeutet, dass zum Abgleichen eines bestimmten Headers der Listener den Namen in Kleinbuchstaben umwandeln sollte, bevor er ihn vergleicht:

```js
for (const header of e.requestHeaders) {
  if (header.name.toLowerCase() === desiredHeader) {
    // process header
  }
}
```

Der Browser bewahrt die ursprüngliche Groß-/Kleinschreibung des Header-Namens, wie sie vom Browser generiert wurde. Wenn der Listener der Erweiterung die Groß-/Kleinschreibung ändert, bleibt diese Änderung nicht bestehen.

## Syntax

```js-nolint
browser.webRequest.onBeforeSendHeaders.addListener(
  listener,             //  function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onBeforeSendHeaders.removeListener(listener)
browser.webRequest.onBeforeSendHeaders.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören für dieses Ereignis. Das `listener`-Argument ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details der Anfrage. Dies umfasst Anfrageheader, wenn Sie `"requestHeaders"` in `extraInfoSpec` eingeschlossen haben. Siehe den Abschnitt [details](#details) für weitere Informationen.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im Parameter `extraInfoSpec` angegeben ist, sollte der Ereignis-Listener ein `BlockingResponse`-Objekt zurückgeben und kann dessen `requestHeaders`-Eigenschaft festlegen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Menge von Filtern, die die Ereignisseingrenzt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:
    - `"blocking"`: macht die Anfrage synchron, sodass Sie die Anfrageheader ändern können
    - `"requestHeaders"`: schließt die Anfrageheader im `details`-Objekt ein, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `documentId` {{optional_inline}}
  - : `string`. Die UUID des Dokuments, das die Anfrage stellt.
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.
- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab ausgeführt wird, der in einer kontextuellen Identität geöffnet ist, die Cookie-Speicher-ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Zum Beispiel, wenn die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, dann wird die `documentUrl` für das Bild oder das iframe "https\://example.com" sein. Für ein Dokument auf oberster Ebene ist `documentUrl` undefiniert.
- `frameAncestors`
  - : `array`. Beinhaltet Informationen zu jedem Dokument in der Rahmenhierarchie bis zum Dokument auf oberster Ebene. Das erste Element im Array beinhaltet Informationen über das unmittelbar übergeordnete Dokument des angeforderten Dokuments, und das letzte Element beinhaltet Informationen über das Dokument auf oberster Ebene. Wenn der Ladevorgang tatsächlich für das Dokument auf höchster Ebene ist, dann ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist dasselbe wie `details.parentFrameId`.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe ausgeführt wird; ein positiver Wert ist die ID eines Unterframes, in dem die Anfrage stattfindet. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Frames an, nicht die des äußeren Frames. Frame-IDs sind einzigartig innerhalb eines Tabs.
- `frameType`
  - : `string`. Der Typ des Rahmens, in dem die Anfrage stattgefunden hat. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"` zurück.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `method`
  - : `string`. Standard HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Zum Beispiel, wenn "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` der resultierenden Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer, dieselbe wie die `documentUrl`. Zum Beispiel, wenn eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe ladet, dann wird die `documentUrl` der resultierenden Anfrage das übergeordnete Dokument des iframes sein, aber die `originUrl` wird die URL des Dokuments innerhalb des iframes sein, das den Link enthielt.

- `parentDocumentId`{{optional_inline}}
  - : `string`. Ein UUID des übergeordneten Dokuments, dem der Rahmen gehört. Nicht gesetzt, wenn kein Elternteil vorhanden ist.
- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy weitergeleitet wird. Es enthält die folgenden Eigenschaften:
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
      - : `boolean`. Wahr, wenn der Proxy die Auflösung von Domainnamen basierend auf dem angegebenen Hostnamen durchführt, sodass der Client nicht seine eigene DNS-Suche durchführen muss.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anfrageheader, die mit dieser Anfrage gesendet werden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind einzigartig innerhalb einer Browsersitzung, sodass Sie sie verwenden können, um verschiedene Ereignisse zuzuordnen, die mit derselben Anfrage verbunden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab zu tun hat.
- `thirdParty`
  - : `boolean`. Zeigt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie von Dritten stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Der mit der Anfrage verbundene Tracking-Typ, falls die Anfrage durch den [Firefox-Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifizierungsflags für die Erstanbieter der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifizierungsflags für die Anfrage oder die Dritten in ihrer Fenster-Hierarchie.

    Die Klassifizierungsflags umfassen:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage am Fingerprinting beteiligt ist ("eine Herkunft gefunden, die zu Fingerprinting führt").
      - `fingerprinting` zeigt an, dass die Domain zur Fingerprinting- und Tracking-Kategorie gehört. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer in Verbindung bringen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain zur Fingerprinting-Kategorie, aber nicht zur Tracking-Kategorie gehört. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zu Identifikationszwecken bei der Betrugsbekämpfung zu erkennen.
    - `cryptomining` und `cryptomining_content`: ähnlich zur Fingerprinting-Kategorie, jedoch für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage für das Tracking verwendet wird. `tracking` ist jede generische Tracking-Anfrage, das `ad`, `analytics`, `social` und `content` Suffix identifiziert den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage zur Verfolgung von E-Mails verwendet wird.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, jedoch `tracking_content` und `fingerprinting_content` ausschließt.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Träckertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content`-Suffix zeigt Tracker an, die Inhalte zuordnen und ausliefern. Die Blockierung dieser Elemente schützt die Nutzer, kann jedoch dazu führen, dass Websites nicht oder nicht vollständig angezeigt werden.

## Beispiele

Dieser Code ändert den "User-Agent"-Header, sodass sich der Browser als Opera 12.16 identifiziert, jedoch nur beim Besuch von Seiten unter `https://httpbin.org/`.

```js
"use strict";

/*
This is the page for which we want to rewrite the User-Agent header.
*/
const targetPage = "https://httpbin.org/*";

/*
Set UA string to Opera 12
*/
const ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

/*
Rewrite the User-Agent header to "ua".
*/
function rewriteUserAgentHeader(e) {
  for (const header of e.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = ua;
    }
  }
  return { requestHeaders: e.requestHeaders };
}

/*
Add rewriteUserAgentHeader as a listener to onBeforeSendHeaders,
only for the target page.

Make it "blocking" so we can modify the headers.
*/
browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

Dieser Code ist genau wie das vorherige Beispiel, mit dem Unterschied, dass der Listener asynchron ist und ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das mit den neuen Headern aufgelöst wird:

```js
"use strict";

/*
This is the page for which we want to rewrite the User-Agent header.
*/
const targetPage = "https://httpbin.org/*";

/*
Set UA string to Opera 12
*/
const ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

/*
Rewrite the User-Agent header to "ua".
*/
function rewriteUserAgentHeaderAsync(e) {
  const asyncRewrite = new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const header of e.requestHeaders) {
        if (header.name.toLowerCase() === "user-agent") {
          header.value = ua;
        }
      }
      resolve({ requestHeaders: e.requestHeaders });
    }, 2000);
  });

  return asyncRewrite;
}

/*
Add rewriteUserAgentHeader as a listener to onBeforeSendHeaders,
only for the target page.

Make it "blocking" so we can modify the headers.
*/
browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeaderAsync,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeSendHeaders) API von Chromium. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
