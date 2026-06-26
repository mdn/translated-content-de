---
title: webRequest.onBeforeSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Dieses Ereignis wird ausgelöst, bevor HTTP-Daten gesendet werden, aber nachdem alle HTTP-Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zuzuhören, wenn Sie die HTTP-Anforderungsheader ändern möchten.

Um die Anforderungsheader zusammen mit den restlichen Anforderungsdaten an den Listener zu übergeben, geben Sie `"requestHeaders"` im `extraInfoSpec`-Array an.

Um die Header synchron zu ändern: Übergeben Sie `"blocking"` in `extraInfoSpec`, und geben Sie in Ihrem Ereignislistener eine [`BlockingResponse`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse) mit einer Eigenschaft namens `requestHeaders` zurück, deren Wert die zu sendenden Anforderungsheader sind.

Um die Header asynchron zu ändern: Übergeben Sie `"blocking"` in `extraInfoSpec`, und geben Sie in Ihrem Ereignislistener ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einer `BlockingResponse` aufgelöst wird.

Wenn Sie `"blocking"` verwenden, müssen Sie die [API-Berechtigung "webRequestBlocking"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

Es ist möglich, dass Erweiterungen hier in Konflikt geraten. Wenn zwei Erweiterungen `onBeforeSendHeaders` für dieselbe Anfrage abhören, sieht der zweite Listener die vom ersten Listener vorgenommenen Änderungen und kann alle Änderungen des ersten Listeners rückgängig machen. Wenn der erste Listener beispielsweise einen `Cookie`-Header hinzufügt und der zweite Listener alle `Cookie`-Header entfernt, gehen die Änderungen des ersten Listeners verloren. Wenn Sie die tatsächlich gesendeten Header sehen möchten, ohne dass eine andere Erweiterung sie anschließend ändert, verwenden Sie {{WebExtAPIRef("webRequest.onSendHeaders", "onSendHeaders")}}, obwohl Sie bei diesem Ereignis keine Header ändern können.

Nicht alle tatsächlich gesendeten Header sind immer in `requestHeaders` enthalten. Insbesondere Header im Zusammenhang mit dem Caching (z. B. `Cache-Control`, `If-Modified-Since`, `If-None-Match`) werden nie gesendet. Auch hier kann das Verhalten zwischen den Browsern unterschiedlich sein.

Laut Spezifikation sind Header-Namen nicht case-sensitiv. Das bedeutet, dass der Listener, um einen bestimmten Header abzugleichen, den Namen in Kleinbuchstaben umwandeln sollte, bevor er ihn vergleicht:

```js
for (const header of e.requestHeaders) {
  if (header.name.toLowerCase() === desiredHeader) {
    // process header
  }
}
```

Der Browser bewahrt die ursprüngliche Groß-/Kleinschreibung des von ihm generierten Header-Namens. Wenn der Listener der Erweiterung die Groß-/Kleinschreibung ändert, wird diese Änderung nicht beibehalten.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details der Anfrage. Dies umfasst Anforderungsheader, wenn Sie `"requestHeaders"` in `extraInfoSpec` angegeben haben. Weitere Informationen finden Sie im Abschnitt [details](#details).

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im Parameter `extraInfoSpec` angegeben ist, sollte der Ereignislistener ein `BlockingResponse`-Objekt zurückgeben und kann dessen `requestHeaders`-Eigenschaft festlegen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Menge von Filtern, die die Ereignisse einschränken, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:
    - `"blocking"`: macht die Anfrage synchron, sodass Sie die Anforderungsheader ändern können
    - `"requestHeaders"`: schließt die Anforderungsheader in das an den Listener übergebene `details`-Objekt ein

## Zusätzliche Objekte

### details

- `documentId` {{optional_inline}}
  - : `string`. Die UUID des Dokuments, das die Anfrage stellt. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.
- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer kontextuellen Identität stammt, die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn beispielsweise die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, ist die `documentUrl` für das Bild oder das iframe "https\://example.com". Bei einem Dokument auf oberster Ebene ist `documentUrl` undefiniert.
- `frameAncestors`
  - : `array`. Enthält Informationen für jedes Dokument in der Rahmenhierarchie bis zum Dokument auf oberster Ebene. Das erste Element im Array enthält Informationen über den unmittelbaren Elternteil des angeforderten Dokuments, und das letzte Element enthält Informationen über das Dokument auf oberster Ebene. Wenn das Laden tatsächlich für das Dokument auf oberster Ebene erfolgt, ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist dasselbe wie `details.parentFrameId`.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptfenster stattfindet; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage stattfindet. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Rahmen-IDs sind innerhalb eines Tabs eindeutig.
- `frameType`
  - : `string`. Der Typ des Rahmens, in dem die Anfrage erfolgte. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"` zurück.
- `incognito`
  - : `boolean`. Gibt an, ob die Anfrage aus einem Fenster im privaten Modus erfolgt.
- `method`
  - : `string`. Standard-HTTP-Methode, zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn "https\://example.com" beispielsweise einen Link enthält und der Benutzer auf den Link klickt, ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist häufig, aber nicht immer, dieselbe wie die `documentUrl`. Wenn eine Seite beispielsweise ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, ist die `documentUrl` für die resultierende Anfrage das Elterndokument des iframes, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentDocumentId`{{optional_inline}}
  - : `string`. Eine UUID des Elterndokuments, dem das Rahmen gehört. Nicht gesetzt, wenn kein Elternteil vorhanden ist. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Wird auf -1 gesetzt, wenn kein Elternrahmen vorhanden ist.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy erfolgt. Sie enthält die folgenden Eigenschaften:
    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`
      - : `string`. Der Typ des Proxy-Servers. Einer von:
        - "http": HTTP-Proxy (oder SSL-Connect für HTTPS)
        - "https": HTTP-Proxy über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die DNS-Auflösung basierend auf dem angegebenen Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anforderungsheader, die mit dieser Anfrage gesendet werden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anforderungs-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse derselben Anfrage zuzuordnen.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Wird auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verknüpft ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhalt-Fenster-Hierarchie Drittanbieter sind.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Die Art der Verfolgung, die mit der Anfrage verbunden ist, wenn die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifizierungsflaggots für den First-Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifizierungsflaggots für die Anfrage oder die Drittanbieter ihrer Fensterhierarchie.

    Die Klassifizierungsflaggen umfassen:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage am Fingerprinting beteiligt ist ("ein Ursprung, der zum Fingerprinting gefunden wurde").
      - `fingerprinting` zeigt an, dass die Domain in der Kategorie Fingerprinting und Tracking ist. Beispiele für diese Art von Domain sind Werbeunternehmen, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Kategorie Fingerprinting, aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zur Betrugsprävention zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich zur Fingerprinting-Kategorie, aber für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede allgemeine Tracking-Anfrage, die `ad`, `analytics`, `social` und `content`-Suffixe identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage am Email-Tracking beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flaggen kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flaggen kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flaggen kombiniert.

    Weitere Informationen zu Tracker-Typen finden Sie auf der Website von [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers). Das `content`-Suffix zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Das Blockieren dieser Tracker schützt die Benutzer, kann jedoch dazu führen, dass Websites nicht richtig funktionieren oder Elemente nicht angezeigt werden.

## Beispiele

Dieser Code ändert den "User-Agent"-Header, sodass der Browser sich als Opera 12.16 identifiziert, jedoch nur bei Besuchen von Seiten unter `https://httpbin.org/`.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeSendHeaders) API. Diese Dokumentation basiert auf [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
