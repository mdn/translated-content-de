---
title: webRequest.onBeforeSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Dieses Ereignis wird ausgelöst, bevor HTTP-Daten gesendet werden, jedoch nachdem alle HTTP-Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zuzuhören, wenn Sie HTTP-Request-Header ändern möchten.

Um die Anfrage-Header zusammen mit den restlichen Anfragedaten an den Listener zu übergeben, geben Sie `"requestHeaders"` im `extraInfoSpec` Array an.

Um die Header synchron zu ändern: Geben Sie `"blocking"` in `extraInfoSpec` ein und geben Sie in Ihrem Event-Listener eine [`BlockingResponse`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse) mit einer Eigenschaft namens `requestHeaders` zurück, deren Wert der Satz von zu sendenden Anfrage-Headern ist.

Um die Header asynchron zu ändern: Geben Sie `"blocking"` in `extraInfoSpec` ein und geben Sie in Ihrem Event-Listener ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, welches mit einer `BlockingResponse` aufgelöst wird.

Wenn Sie `"blocking"` verwenden, müssen Sie die ["webRequestBlocking" API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

Hier können Erweiterungen in Konflikt geraten. Wenn zwei Erweiterungen `onBeforeSendHeaders` für die gleiche Anfrage abhören, dann sieht der zweite Listener die vom ersten Listener vorgenommenen Änderungen und kann diese Änderungen rückgängig machen. Wenn zum Beispiel der erste Listener einen `Cookie`-Header hinzufügt und der zweite Listener alle `Cookie`-Header entfernt, dann gehen die Änderungen des ersten Listeners verloren. Wenn Sie die tatsächlich gesendeten Header sehen möchten, ohne das Risiko, dass eine andere Erweiterung sie anschließend ändert, verwenden Sie {{WebExtAPIRef("webRequest.onSendHeaders", "onSendHeaders")}}, obwohl Sie die Header bei diesem Ereignis nicht ändern können.

Nicht alle gesendeten Header sind immer in `requestHeaders` enthalten. Insbesondere Header, die sich auf das Caching beziehen (z. B. `Cache-Control`, `If-Modified-Since`, `If-None-Match`), werden niemals gesendet. Außerdem kann sich das Verhalten hier zwischen den Browsern unterscheiden.

Laut Spezifikation sind Header-Namen nicht case-sensitiv. Das bedeutet, dass der Listener den Namen in Kleinbuchstaben umwandeln sollte, bevor er ihn vergleicht:

```js
for (const header of e.requestHeaders) {
  if (header.name.toLowerCase() === desiredHeader) {
    // process header
  }
}
```

Der Browser bewahrt die ursprüngliche Schreibweise des vom Browser generierten Header-Namens. Wenn der Listener der Erweiterung die Schreibweise ändert, wird diese Änderung nicht beibehalten.

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
  - : Hört auf, auf dieses Ereignis zu lauschen. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es darauf hört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Die Funktion erhält dieses Argument:
    - `details`
      - : `object`. Details der Anfrage. Dazu gehören Anfrage-Header, wenn Sie `"requestHeaders"` in `extraInfoSpec` einbezogen haben. Weitere Informationen finden Sie im [Details](#details)-Abschnitt.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im Parameter `extraInfoSpec` angegeben ist, sollte der Ereignis-Listener ein `BlockingResponse`-Objekt zurückgeben und kann dessen `requestHeaders`-Eigenschaft festlegen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die Ereignisse einschränken, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:
    - `"blocking"`: macht die Anfrage synchron, sodass Sie Anfrage-Header ändern können
    - `"requestHeaders"`: schließt die Anfrage-Header im an den Listener übergebenen `details`-Objekt ein

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem in einer kontextuellen Identität geöffneten Tab stammt, die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Beispielsweise, wenn die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, dann wird die `documentUrl` für das Bild oder iframe "https\://example.com" sein. Bei einem Dokument auf oberster Ebene ist `documentUrl` nicht definiert.
- `frameAncestors`
  - : `array`. Enthält Informationen für jedes Dokument in der Frame-Hierarchie bis zum obersten Dokument. Das erste Element im Array enthält Informationen über das unmittelbare übergeordnete Dokument der angeforderten Ressource, und das letzte Element enthält Informationen über das oberste Dokument. Wenn der Ladevorgang tatsächlich für das oberste Dokument ist, dann ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist identisch mit `details.parentFrameId`.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Haupt-Frame erfolgt; ein positiver Wert ist die ID eines Unter-Frames, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind eindeutig innerhalb eines Tabs.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn zum Beispiel "https\://example.com" einen Link enthält und der Benutzer den Link anklickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer identisch mit der `documentUrl`. Wenn eine Seite zum Beispiel ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann ist die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Wird auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Sie enthält folgende Eigenschaften:
    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`
      - : `string`. Der Typ des Proxy-Servers. Einer von:
        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxysing über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die DNS-Auflösung basierend auf dem angegebenen Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Request-Header, die mit dieser Anfrage gesendet werden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersession eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zu verknüpfen, die mit derselben Anfrage zusammenhängen.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Wird auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab in Verbindung steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie von Dritten stammen.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Der Typ des mit der Anfrage verbundenen Trackings, wenn die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit folgenden Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifikationsflags für die First Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflags für Dritte der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifikationsflags beinhalten:
    - `fingerprinting` and `fingerprinting_content`: Gibt an, dass die Anfrage an Fingerprinting beteiligt ist ("eine Herkunft, die Fingerabdruckerkennung betreibt").
      - `fingerprinting` zeigt an, dass die Domäne in die Fingerprinting- und Tracking-Kategorie fällt. Beispiele für diese Art von Domäne sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verbinden möchten.
      - `fingerprinting_content` zeigt an, dass die Domäne in die Fingerprinting-Kategorie, aber nicht in die Tracking-Kategorie fällt. Beispiele für diese Art von Domäne sind Zahlungsanbieter, die Fingerprinting-Techniken zur Identifizierung des besuchenden Benutzers zu Betrugspräventionszwecken verwenden.
    - `cryptomining` und `cryptomining_content`: Ähnlich der Fingerprinting-Kategorie, jedoch für Cryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: Gibt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede generische Tracking-Anfrage, die Suffixe `ad`, `analytics`, `social` und `content` identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: Gibt an, dass die Anfrage am E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: Ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, jedoch `tracking_content` und `fingerprinting_content` ausschließt.
    - `any_strict_tracking`: Ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: Ein Meta-Flag, das alle Social-Tracking-Flags kombiniert.

    Weitere Informationen zu Tracker-Typen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers)-Website. Das `content`-Suffix gibt Tracker an, die Inhalte verfolgen und bereitstellen. Das Blockieren solcher Tracker schützt Benutzer, kann jedoch Websites beschädigen oder dazu führen, dass Elemente nicht angezeigt werden.

## Beispiele

Dieser Code ändert den "User-Agent"-Header so, dass sich der Browser als Opera 12.16 identifiziert, aber nur, wenn Seiten unter `https://httpbin.org/` besucht werden.

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

Dieser Code ist genau wie das vorherige Beispiel, außer dass der Listener asynchron ist und ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, welches mit den neuen Headern aufgelöst wird:

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
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeSendHeaders) API. Diese Dokumentation leitet sich von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code ab.

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
