---
title: webRequest.onBeforeSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Dieses Ereignis wird ausgelöst, bevor HTTP-Daten gesendet werden, jedoch nachdem alle HTTP-Header verfügbar sind. Dies ist ein guter Punkt, um zuzuhören, wenn Sie HTTP-Anforderungsheader ändern möchten.

Um die Anforderungsheader zusammen mit den restlichen Anfragedaten an den Listener zu übergeben, geben Sie `"requestHeaders"` im `extraInfoSpec` Array an.

Um die Header synchron zu ändern: Geben Sie `"blocking"` in `extraInfoSpec` an, und geben Sie dann in Ihrem Ereignis-Listener eine [`BlockingResponse`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse) mit einer Eigenschaft namens `requestHeaders` zurück, dessen Wert das Set der zu sendenden Anforderungsheader ist.

Um die Header asynchron zu ändern: Geben Sie `"blocking"` in `extraInfoSpec` an, und geben Sie dann in Ihrem Ereignis-Listener ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einer `BlockingResponse` aufgelöst wird.

Wenn Sie `"blocking"` verwenden, müssen Sie die ["webRequestBlocking" API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

Es ist möglich, dass Erweiterungen hier in Konflikt geraten. Wenn zwei Erweiterungen `onBeforeSendHeaders` für dieselbe Anfrage abhören, dann sieht der zweite Listener die Änderungen des ersten und kann diese rückgängig machen. Zum Beispiel, wenn der erste Listener einen `Cookie`-Header hinzufügt und der zweite Listener alle `Cookie`-Header entfernt, dann gehen die Änderungen des ersten Listeners verloren. Wenn Sie die tatsächlich gesendeten Header sehen möchten, ohne dass eine andere Erweiterung sie anschließend ändert, verwenden Sie {{WebExtAPIRef("webRequest.onSendHeaders", "onSendHeaders")}}, obwohl Sie die Header bei diesem Ereignis nicht ändern können.

Nicht alle tatsächlich gesendeten Header sind immer in `requestHeaders` enthalten. Insbesondere Header, die sich auf das Caching beziehen (zum Beispiel `Cache-Control`, `If-Modified-Since`, `If-None-Match`), werden nie gesendet. Auch kann sich das Verhalten hier zwischen verschiedenen Browsern unterscheiden.

Laut Spezifikation sind Headernamen nicht groß-/kleinschreibungssensitiv. Das bedeutet, dass der Listener den Namen vor dem Vergleichen in Kleinbuchstaben umwandeln sollte:

```js
for (const header of e.requestHeaders) {
  if (header.name.toLowerCase() === desiredHeader) {
    // process header
  }
}
```

Der Browser bewahrt die ursprüngliche Groß-/Kleinschreibung des vom Browser generierten Header-Namens. Wenn der Listener der Erweiterung die Groß-/Kleinschreibung ändert, wird diese Änderung nicht beibehalten.

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
  - : Beendet das Abhören dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `details`
      - : `object`. Details der Anfrage. Dazu gehören Anforderungsheader, wenn Sie `"requestHeaders"` in `extraInfoSpec` enthalten haben. Siehe den Abschnitt [details](#details) für weitere Informationen.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im Parameter `extraInfoSpec` angegeben ist, sollte der Ereignis-Listener ein `BlockingResponse`-Objekt zurückgeben und kann dessen `requestHeaders`-Eigenschaft setzen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die Ereignisse einschränken, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:
    - `"blocking"`: macht die Anfrage synchron, sodass Sie Anforderungsheader ändern können
    - `"requestHeaders"`: schließt die Anforderungsheader im an den Listener übergebenen `details`-Objekt ein

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab stammt, der in einer kontextuellen Identität geöffnet ist, die Cookie-Store-ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Zum Beispiel, wenn die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder iframe "https\://example.com". Für ein oberstes Dokument ist `documentUrl` undefiniert.
- `frameAncestors`
  - : `array`. Enthält Informationen für jedes Dokument in der Frame-Hierarchie bis zum obersten Dokument. Das erste Element im Array enthält Informationen über das unmittelbare übergeordnete Dokument des angeforderten Dokuments, und das letzte Element enthält Informationen über das oberste Dokument. Wenn die Ladung tatsächlich für das übergeordnete Dokument ist, dann ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist identisch mit `details.parentFrameId`.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Subframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Sub-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Ob die Anfrage von einem privaten Browserfenster stammt.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Zum Beispiel, wenn "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer die gleiche wie die `documentUrl`. Zum Beispiel, wenn eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes sein, aber die `originUrl` wird die URL des Dokuments im iframe sein, das den Link enthält.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Wird auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Sie enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`

      - : `string`. Der Typ des Proxy-Servers. Einer von:
        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxierung über TLS-Verbindung zum Proxy
        - "socks": SOCKS-v5-Proxy
        - "socks4": SOCKS-v4-Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Domain-Namensauflösung basierend auf dem angegebenen Hostnamen durchführt, was bedeutet, dass der Client seine eigene DNS-Abfrage nicht durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anforderungsheader, die mit dieser Anfrage gesendet werden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anforderungs-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse in Zusammenhang mit derselben Anfrage zu stellen.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Wird auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie von Drittanbietern stammt.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Der Typ des Trackings, das mit der Anfrage verbunden ist, wenn die Anfrage durch den [Firefox-Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert ist. Dies ist ein Objekt mit folgenden Eigenschaften:

    - `firstParty`
      - : `array` von `string`. Klassifizierungsflags für die erste Partei der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifizierungsflags für Dritte der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifizierungsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: gibt an, dass die Anfrage an Fingerprinting beteiligt ist ("ein Ursprung, der festgestellt wurde, Fingerprinting zu verwenden").
      - `fingerprinting` zeigt an, dass die Domain in die Kategorie Fingerprinting und Tracking fällt. Beispiele für diese Art von Domain umfassen Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in die Kategorie Fingerprinting, aber nicht in die Kategorie Tracking fällt. Beispiele für diese Art von Domain umfassen Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zu Identifizierungszwecken und zur Betrugserkennung zu verfolgen.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, jedoch für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social`, und `tracking_content`: gibt an, dass die Anfrage an Tracking beteiligt ist. `tracking` ist jede allgemeine Tracking-Anfrage, die `ad`, `analytics`, `social`, und `content` Suffixe identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: gibt an, dass die Anfrage an E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: ein Metaflag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Metaflag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Metaflag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Tracker-Typen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content`-Suffix zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Das Blockieren schützt Benutzer, kann jedoch dazu führen, dass Websites nicht richtig funktionieren oder Elemente nicht angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code ändert den "User-Agent"-Header so, dass sich der Browser als Opera 12.16 ausgibt, aber nur beim Besuch von Seiten unter `https://httpbin.org/`.

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

Dieser Code ist genau wie das vorherige Beispiel, außer dass der Listener asynchron ist und ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das mit den neuen Headern aufgelöst wird:

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

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeSendHeaders) API von Chromium. Diese Dokumentation ist von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code abgeleitet.

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
