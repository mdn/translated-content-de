---
title: webRequest.onBeforeSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Dieses Ereignis wird ausgelöst, bevor HTTP-Daten gesendet werden, aber nachdem alle HTTP-Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zuzuhören, wenn Sie HTTP-Anforderungsheader ändern möchten.

Um die Anforderungsheader zusammen mit den anderen Anforderungsdaten an den Listener zu übermitteln, geben Sie „`requestHeaders`“ im `extraInfoSpec`-Array an.

Um die Header synchron zu ändern: Geben Sie „`blocking`“ in `extraInfoSpec` an, und geben Sie dann in Ihrem Event-Listener eine [`BlockingResponse`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse) mit einer Eigenschaft namens `requestHeaders` zurück, deren Wert die zu sendenden Anforderungsheader sind.

Um die Header asynchron zu ändern: Geben Sie „`blocking`“ in `extraInfoSpec` an, und geben Sie dann in Ihrem Event-Listener ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einer `BlockingResponse` aufgelöst wird.

Wenn Sie „`blocking`“ verwenden, müssen Sie die ["webRequestBlocking" API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

Es ist möglich, dass hier Konflikte zwischen Erweiterungen auftreten. Wenn zwei Erweiterungen auf `onBeforeSendHeaders` für dieselbe Anforderung hören, sieht der zweite Listener die vom ersten Listener vorgenommenen Änderungen und kann Änderungen des ersten Listeners rückgängig machen. Beispielsweise, wenn der erste Listener ein `Cookie`-Header hinzufügt und der zweite Listener alle `Cookie`-Header entfernt, gehen die Änderungen des ersten Listeners verloren. Wenn Sie die tatsächlich gesendeten Header sehen möchten, ohne das Risiko, dass eine andere Erweiterung sie anschließend ändert, verwenden Sie {{WebExtAPIRef("webRequest.onSendHeaders", "onSendHeaders")}}, obwohl Sie bei diesem Ereignis keine Header ändern können.

Nicht alle tatsächlich gesendeten Header sind immer in `requestHeaders` enthalten. Insbesondere Header, die sich auf das Caching beziehen (z. B. `Cache-Control`, `If-Modified-Since`, `If-None-Match`), werden nie gesendet. Auch das Verhalten kann sich je nach Browser unterscheiden.

Laut der Spezifikation sind Header-Namen nicht groß-/kleinschreibungsempfindlich. Das bedeutet, dass der Listener den Namen in Kleinbuchstaben umwandeln sollte, bevor er ihn vergleicht:

```js
for (const header of e.requestHeaders) {
  if (header.name.toLowerCase() === desiredHeader) {
    // process header
  }
}
```

Der Browser behält die ursprüngliche Groß-/Kleinschreibung des vom Browser generierten Header-Namens bei. Wenn der Listener der Erweiterung die Groß-/Kleinschreibung ändert, wird diese Änderung nicht beibehalten.

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
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppen Sie das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird dieses Argument übergeben:
    - `details`
      - : `object`. Details der Anforderung. Dazu gehören Anforderungsheader, wenn Sie „`requestHeaders`“ in `extraInfoSpec` aufgenommen haben. Weitere Informationen finden Sie im Abschnitt [details](#details).

    Rückgabewert: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `„blocking“` im `extraInfoSpec`-Parameter festgelegt ist, sollte der Ereignis-Listener ein `BlockingResponse`-Objekt zurückgeben und kann seine `requestHeaders`-Eigenschaft festlegen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die Ereignisse einschränken, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:
    - „`blocking`“: machen Sie die Anforderung synchron, so dass Sie Anforderungsheader ändern können
    - „`requestHeaders`“: Fügen Sie die Anforderungsheader in das an den Listener übergebene `details`-Objekt ein

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anforderung von einem Tab in einer kontextuellen Identität stammt, ist dies die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn die Webseite z. B. unter „https\://example.com“ ein Bild oder ein iframe enthält, ist die `documentUrl` für das Bild oder iframe „https\://example.com“. Für ein übergeordnetes Dokument ist die `documentUrl` undefiniert.
- `frameAncestors`
  - : `array`. Enthält Informationen für jedes Dokument in der Frame-Hierarchie bis zum obersten Dokument. Das erste Element im Array enthält Informationen über das direkte übergeordnete Dokument des angeforderten Dokuments, und das letzte Element enthält Informationen über das oberste Dokument. Wenn das Laden tatsächlich für das oberste Dokument erfolgt, bleibt dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist die gleiche wie `details.parentFrameId`.
- `frameId`
  - : `integer`. Null, wenn die Anforderung im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anforderung erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Rahmens an und nicht die des äußeren Rahmens. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Ob die Anforderung von einem privaten Browserfenster stammt.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel „GET“ oder „POST“.
- `originUrl`
  - : `string`. URL der Ressource, die die Anforderung ausgelöst hat. Wenn „https\://example.com“ zum Beispiel einen Link enthält und der Benutzer darauf klickt, ist die `originUrl` für die resultierende Anforderung „https\://example.com“.

    Die `originUrl` ist oft, aber nicht immer, die gleiche wie die `documentUrl`. Wenn eine Seite z.B. ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, ist die `documentUrl` für die resultierende Anforderung das übergeordnete Dokument des iframes, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anforderung gesendet hat. Wird auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`
  - : `object`. Dieses Attribut ist nur vorhanden, wenn die Anforderung über einen Proxy geleitet wird. Es enthält die folgenden Eigenschaften:
    - `host`
      - : `string`. Der Hostname des Proxyservers.
    - `port`
      - : `integer`. Die Portnummer des Proxyservers.
    - `type`
      - : `string`. Der Typ des Proxyservers. Einer von:
        - „http“: HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - „https“: HTTP-Proxying über TLS-Verbindung zum Proxy
        - „socks“: SOCKS v5-Proxy
        - „socks4“: SOCKS v4-Proxy
        - „direct“: kein Proxy
        - „unknown“: unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxydienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die DNS-Auflösung basierend auf dem angegebenen Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Anfrage durchführt.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Verbindung zum Proxy fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anforderungsheader, die mit dieser Anforderung gesendet werden.
- `requestId`
  - : `string`. Die ID der Anforderung. Anforderungs-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse im Zusammenhang mit derselben Anforderung zuzuordnen.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anforderung ausgeführt wird. Wird auf -1 gesetzt, wenn die Anforderung nicht mit einem Tab in Zusammenhang steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anforderung und ihre Inhaltsfensterhierarchie Drittanbieter sind.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel „image“, „script“, „stylesheet“.
- `url`
  - : `string`. Ziel der Anforderung.
- `urlClassification`
  - : `object`. Der Typ der Nachverfolgung, die mit der Anforderung verbunden ist, wenn die Anforderung von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifikationsflaggen für den ersten Anbieter der Anforderung.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflaggen für die Anforderung oder die Dritten in ihrer Fensterhierarchie.

    Die Klassifikationsflaggen umfassen:
    - `fingerprinting` und `fingerprinting_content`: gibt an, dass die Anforderung an der Fingerabdruckerstellung beteiligt ist („ein Ursprung, der zur Fingerabdruckerstellung gefunden wurde“).
      - `fingerprinting` zeigt an, dass die Domain in der Kategorie Fingerabdruckerstellung und Nachverfolgung ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Kategorie Fingerabdruckerstellung, aber nicht in der Nachverfolgungskategorie ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerabdrucktechniken verwenden, um den besuchenden Benutzer aus Betrugsabwehrgründen zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerabdruckkategorie, jedoch für Ressourcen zur Kryptowährungsgewinnung.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: gibt an, dass die Anforderung an der Nachverfolgung beteiligt ist. `tracking` ist jede generische Nachverfolgungsanforderung, die Suffixe `ad`, `analytics`, `social` und `content` identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: gibt an, dass die Anforderung an der Nachverfolgung von E-Mails beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerabdruck-Flags kombiniert, `tracking_content` und `fingerprinting_content` jedoch ausschließt.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerabdruck-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Nachverfolgungsflags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content`-Suffix zeigt Tracker an, die Inhalte nachverfolgen und bereitstellen. Das Blockieren schützt Benutzer, kann jedoch dazu führen, dass Websites beeinträchtigt werden oder Elemente nicht angezeigt werden.

## Beispiele

Dieser Code ändert den „User-Agent“-Header, sodass sich der Browser als Opera 12.16 identifiziert, jedoch nur beim Besuch von Seiten unter `https://httpbin.org/`.

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

Dieser Code ist genau wie das vorherige Beispiel, außer dass der Listener asynchron ist und ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgegeben wird, das mit den neuen Headern aufgelöst wird:

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
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeSendHeaders) API von Chromium. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
