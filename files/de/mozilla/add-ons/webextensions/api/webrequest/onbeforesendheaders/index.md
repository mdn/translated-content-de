---
title: webRequest.onBeforeSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieses Ereignis wird vor dem Senden von HTTP-Daten ausgelöst, aber nachdem alle HTTP-Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zu lauschen, wenn Sie HTTP-Anforderungsheader ändern möchten.

Um die Anforderungsheader zusammen mit den restlichen Anforderungsdaten an den Listener weiterzugeben, geben Sie `"requestHeaders"` im `extraInfoSpec`-Array an.

Um die Header synchron zu ändern: Geben Sie `"blocking"` in `extraInfoSpec` an, und geben Sie dann in Ihrem Ereignislistener eine [`BlockingResponse`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse) mit einer Eigenschaft namens `requestHeaders` zurück, deren Wert die zu sendenden Anforderungsheader ist.

Um die Header asynchron zu ändern: Geben Sie `"blocking"` in `extraInfoSpec` an, und geben Sie dann in Ihrem Ereignislistener ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einer `BlockingResponse` aufgelöst wird.

Wenn Sie `"blocking"` verwenden, müssen Sie die ["webRequestBlocking"-API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

Es ist möglich, dass sich Erweiterungen hier in die Quere kommen. Wenn zwei Erweiterungen auf `onBeforeSendHeaders` für die gleiche Anfrage hören, sieht der zweite Listener die Änderungen des ersten Listeners und kann Änderungen des ersten rückgängig machen. Zum Beispiel, wenn der erste Listener einen `Cookie`-Header hinzufügt und der zweite alle `Cookie`-Header entfernt, gehen die Änderungen des ersten Listeners verloren. Wenn Sie die tatsächlich gesendeten Header ohne das Risiko sehen möchten, dass eine andere Erweiterung sie ändert, verwenden Sie {{WebExtAPIRef("webRequest.onSendHeaders", "onSendHeaders")}}, obwohl Sie die Header bei diesem Ereignis nicht ändern können.

Nicht alle tatsächlich gesendeten Header sind immer in `requestHeaders` enthalten. Insbesondere werden Header, die das Caching betreffen (z. B. `Cache-Control`, `If-Modified-Since`, `If-None-Match`), nie gesendet. Das Verhalten kann sich auch je nach Browser unterscheiden.

Laut Spezifikation sind Header-Namen nicht groß- und kleinschreibungssensitiv. Das bedeutet, dass der Listener, um einen bestimmten Header abzugleichen, den Namen in Kleinbuchstaben konvertieren sollte, bevor er ihn vergleicht:

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
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Einzelheiten der Anfrage. Dies schließt Anforderungsheader ein, wenn Sie `"requestHeaders"` in `extraInfoSpec` angegeben haben. Siehe den [details](#details_2) Abschnitt für weitere Informationen.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im Parameter `extraInfoSpec` angegeben ist, sollte der Ereignislistener ein `BlockingResponse`-Objekt zurückgeben und kann dessen Eigenschaft `requestHeaders` festlegen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die an diesen Listener gesendeten Ereignisse einschränken.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:

    - `"blocking"`: macht die Anfrage synchron, sodass Sie Anforderungsheader ändern können
    - `"requestHeaders"`: beinhaltet die Anforderungsheader im `details`-Objekt, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem in einer kontextbezogenen Identität geöffneten Tab kommt, die Cookie Store ID der kontextbezogenen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn zum Beispiel die Webseite unter "https\://example.com" ein Bild oder ein `<iframe>` enthält, dann ist die `documentUrl` für das Bild oder `<iframe>` "https\://example.com". Für ein Top-Level-Dokument ist `documentUrl` undefiniert.
- `frameAncestors`
  - : `array`. Enthält Informationen für jedes Dokument im Rahmenhierarchie bis zum Top-Level-Dokument. Das erste Element im Array enthält Informationen über das unmittelbare Elterndokument des angeforderten Dokuments, und das letzte Element enthält Informationen über das Top-Level-Dokument. Wenn die Ladung tatsächlich für das Top-Level-Dokument ist, dann ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist das gleiche wie `details.parentFrameId`.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe auftritt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage auftritt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Fenster stammt.
- `method`
  - : `string`. Standard-HTTP-Methode: z. B. "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn beispielsweise "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer, die gleiche wie die `documentUrl`. Wenn beispielsweise eine Seite ein `<iframe>` enthält und das `<iframe>` einen Link enthält, der ein neues Dokument in das `<iframe>` lädt, ist die `documentUrl` für die resultierende Anfrage das Parent-Dokument des `<iframe>`, aber die `originUrl` ist die URL des Dokuments im `<iframe>`, das den Link enthielt.

- `parentFrameId`
  - : `integer`. Die ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordnetes Rahmengerüst existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy erfolgt. Sie enthält die folgenden Eigenschaften:

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
      - : `boolean`. True, wenn der Proxy die Auflösung des Domainnamens basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Zeitüberschreitung in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anforderungsheader, die mit dieser Anfrage gesendet werden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass sie verwendet werden können, um verschiedene Ereignisse zu verbinden, die mit derselben Anfrage verbunden sind.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: z. B. "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Der Tracking-Typ, der mit der Anfrage verbunden ist, wenn die Anfrage durch den [Firefox-Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifizierungsflags für die erste Partei der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifizierungsflags für die dritte Partei der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifizierungsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: gibt an, dass die Anfrage am Fingerprinting beteiligt ist ("eine Quelle, die Fingerabdrücke erfasst").
      - `fingerprinting` gibt an, dass die Domain zur Kategorie Fingerprinting und Tracking gehört. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer in Verbindung bringen möchten.
      - `fingerprinting_content` gibt an, dass die Domain zwar zur Kategorie Fingerprinting, aber nicht zur Kategorie Tracking gehört. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerabdrucktechniken verwenden, um den besuchenden Benutzer zu Identifikationszwecken zu erkennen.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, aber für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: gibt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede allgemeine Tracking-Anfrage, die `ad`-, `analytics`-, `social`- und `content`-Suffixe identifizieren die Art des Trackers.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, jedoch `tracking_content` und `fingerprinting_content` ausschließt.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code ändert den "User-Agent"-Header so, dass sich der Browser als Opera 12.16 ausgibt, jedoch nur beim Besuch von Seiten unter `https://httpbin.org/`.

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
> Diese API basiert auf der Chromium-API [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeSendHeaders). Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
