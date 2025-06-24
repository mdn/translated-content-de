---
title: webRequest.onHeadersReceived
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ausgelöst, wenn die HTTP-Antwortheader für eine Anfrage empfangen werden. Verwenden Sie dieses Ereignis, um HTTP-Antwortheader zu ändern.

Um die Antwortheader zusammen mit den restlichen Anfragedaten in den Listener zu übergeben, fügen Sie `"responseHeaders"` in das `extraInfoSpec`-Array ein.

Wenn Sie `"blocking"` verwenden, müssen Sie die ["webRequestBlocking" API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

Es ist möglich, dass Erweiterungen widersprüchliche Anfragen durchführen. Wenn zwei Erweiterungen `onHeadersReceived` für die gleiche Anfrage abhören und `responseHeaders` zurückgeben, um denselben Header zu setzen (zum Beispiel `Set-Cookie`), der nicht in der ursprünglichen Antwort vorhanden ist, wird nur eine der Änderungen erfolgreich sein.

Der `Content-Security-Policy`-Header wird jedoch anders behandelt; seine Werte werden kombiniert, um alle angegebenen Richtlinien anzuwenden. Wenn jedoch zwei Erweiterungen einen CSP-Wert festlegen, der im Konflikt steht, macht der CSP-Dienst die Einschränkung strenger, um den Konflikt zu lösen. Zum Beispiel wird das Ergebnis `img-src: 'none'`, wenn eine Erweiterung `img-src: example.com` und eine andere Erweiterung `img-src: example.org` festlegt. Zusammengeführte Änderungen neigen immer dazu, restriktiver zu sein, obwohl eine Erweiterung den ursprünglichen CSP-Header entfernen kann.

Wenn Sie die vom System verarbeiteten Header sehen möchten, ohne das Risiko, dass eine andere Erweiterung sie verändert, verwenden Sie {{WebExtAPIRef("webRequest.onResponseStarted")}}, obwohl Sie bei diesem Ereignis Header nicht ändern können.

## Syntax

```js-nolint
browser.webRequest.onHeadersReceived.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onHeadersReceived.removeListener(listener)
browser.webRequest.onHeadersReceived.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Abhören dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es abgehört wird, andernfalls `false`.

## addListener syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : [`object`](#details). Details der Anfrage. Dies schließt Antwortheader ein, wenn Sie `"responseHeaders"` in `extraInfoSpec` aufgenommen haben.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im `extraInfoSpec`-Parameter angegeben ist, gibt der Ereignis-Listener ein `BlockingResponse`-Objekt zurück und kann dessen `responseHeaders`-Eigenschaft festlegen. In Firefox kann der Rückgabewert ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sein, das zu einem `BlockingResponse` aufgelöst wird.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:
    - `"blocking"` um die Anfrage synchron zu machen, sodass Sie Anfrage- und Antwortheader ändern können
    - `"responseHeaders"` um die Antwortheader im `details`-Objekt einzuschließen, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab stammt, der in einer kontextuellen Identität geöffnet ist, ist dies die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Zum Beispiel, wenn die Webseite unter "https://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder iframe "https://example.com". Für ein oberstes Dokument ist `documentUrl` undefiniert.
- `frameAncestors`

  - : `array`. Informationen für jedes Dokument in der Frame-Hierarchie bis zum obersten Dokument. Das erste Element im Array enthält Informationen über das direkte übergeordnete Dokument des angeforderten Dokuments, und das letzte Element enthält Informationen über das oberste Dokument. Wenn das Laden für das oberste Dokument ist, ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist identisch mit `details.parentFrameId`.

- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `fromCache`
  - : `boolean`. Ob die Antwort aus dem Festplatten-Cache abgerufen wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann eine literal IPv6-Adresse sein.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Zum Beispiel, wenn "https://example.com" einen Link enthält und der Benutzer auf den Link klickt, ist die `originUrl` für die resultierende Anfrage "https://example.com".

    Die `originUrl` ist oft, aber nicht immer, die gleiche wie die `documentUrl`. Zum Beispiel, wenn eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann ist die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframe, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Sie enthält die folgenden Eigenschaften:

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
      - : `boolean`. Wahr, wenn der Proxy eine Domainnamenauflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zu korrelieren, die mit derselben Anfrage verbunden sind.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die für diese Anfrage empfangen wurden.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort oder die Zeichenkette 'HTTP/0.9 200 OK' für HTTP/0.9-Antworten (das heißt, Antworten, die keine Statuszeile haben).
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhalte von Dritten stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art der Nachverfolgung, die mit der Anfrage verbunden ist, wenn die Anfrage durch den [Firefox Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `string`. Klassifizierungsflags für die Anforderung der Erstanbieter.
    - `thirdParty`
      - : `array` von `string`. Klassifizierungsflags für die Anforderung von Drittanbietern oder deren Fensterhierarchie.

    Die Klassifizierungsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: gibt an, dass die Anfrage in Fingerprinting ("eine Quelle, die als Fingerprinting erkannt wurde") involviert ist.
      - `fingerprinting` gibt an, dass die Domain in der Fingerprint- und Track-Kategorie ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem Besucher verbinden wollen.
      - `fingerprinting_content` gibt an, dass die Domain in der Fingerprinting-Kategorie, nicht aber in der Track-Kategorie ist. Beispiele für diese Art von Domain sind Bezahldienste, die Fingerprinting-Techniken zur Identifikation des Benutzers für Betrugsprävention verwenden.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprint-Kategorie, aber für Crypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: gibt an, dass die Anfrage im Tracking involviert ist. `tracking` ist jede generische Anforderungsbitte, die `ad`, `analytics`, `social` und `content` Suffixe identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage im Tracking von E-Mails involviert ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprint-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprint-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Webseite. Das Suffix `content` zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Das Blockieren schützt Benutzer, kann jedoch dazu führen, dass Websites nicht mehr richtig funktionieren oder Elemente nicht mehr angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code setzt ein zusätzliches Cookie, wenn eine Ressource von der Ziel-URL angefordert wird:

```js
let targetPage =
  "https://developer.mozilla.org/en-US/Firefox/Developer_Edition";

// Add the new header to the original array,
// and return it.
function setCookie(e) {
  const setMyCookie = {
    name: "Set-Cookie",
    value: "my-cookie1=my-cookie-value1",
  };
  e.responseHeaders.push(setMyCookie);
  return { responseHeaders: e.responseHeaders };
}

// Listen for onHeaderReceived for the target page.
// Set "blocking" and "responseHeaders".
browser.webRequest.onHeadersReceived.addListener(
  setCookie,
  { urls: [targetPage] },
  ["blocking", "responseHeaders"],
);
```

Dieser Code macht dasselbe wie das vorherige Beispiel, außer dass der Listener asynchron ist und ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, welches mit den neuen Headern aufgelöst wird:

```js
const targetPage =
  "https://developer.mozilla.org/en-US/Firefox/Developer_Edition";

// Return a Promise that sets a timer.
// When the timer fires, resolve the promise with
// modified set of response headers.
function setCookieAsync(e) {
  const asyncSetCookie = new Promise((resolve, reject) => {
    setTimeout(() => {
      const setMyCookie = {
        name: "Set-Cookie",
        value: "my-cookie1=my-cookie-value1",
      };
      e.responseHeaders.push(setMyCookie);
      resolve({ responseHeaders: e.responseHeaders });
    }, 2000);
  });

  return asyncSetCookie;
}

// Listen for onHeaderReceived for the target page.
// Set "blocking" and "responseHeaders".
browser.webRequest.onHeadersReceived.addListener(
  setCookieAsync,
  { urls: [targetPage] },
  ["blocking", "responseHeaders"],
);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onHeadersReceived) API. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
