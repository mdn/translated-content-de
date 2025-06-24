---
title: webRequest.onBeforeRedirect
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRedirect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine serverinitiierte Umleitung erfolgen soll.

Beachten Sie, dass Sie für dieses Ereignis nicht "blocking" übergeben können, sodass Sie die Anfrage von diesem Ereignis nicht ändern oder abbrechen können: es ist rein informativ.

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
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zuzuhören. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird dieses Argument übergeben:
    - `details`
      - : `object`. Details zur Anfrage. Siehe den [Details](#details)-Abschnitt für weitere Informationen.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können nur einen Wert übergeben:
    - `"responseHeaders"`: Schließen Sie `responseHeaders` in das `details`-Objekt ein, das an den Listener übergeben wird.

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab stammt, der in einer kontextuellen Identität geöffnet ist, die Cookie-Store-ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn beispielsweise die Webseite unter "https\://example.com" ein Bild oder ein Iframe enthält, dann ist die `documentUrl` für das Bild oder Iframe "https\://example.com". Bei einem Top-Level-Dokument ist `documentUrl` undefiniert.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterfensters, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplattencache abgerufen wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann eine literale IPv6-Adresse sein.
- `method`
  - : `string`. Standard-HTTP-Methode: beispielsweise "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn zum Beispiel "https\://example.com" einen Link enthält und der Benutzer den Link anklickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer, die gleiche wie die `documentUrl`. Wenn beispielsweise eine Seite ein Iframe enthält und das Iframe einen Link enthält, der ein neues Dokument in das Iframe lädt, dann wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des Ifame sein, aber die `originUrl` wird die URL des Dokuments im Iframe sein, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy gesendet wird. Sie enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxyservers.
    - `port`
      - : `integer`. Die Portnummer des Proxyservers.
    - `type`

      - : `string`. Der Typ des Proxyservers. Einer von:
        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxying über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxydienst.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die Namensauflösung basierend auf dem bereitgestellten Hostnamen durchführen wird, was bedeutet, dass der Client seine eigene DNS-Suche nicht durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Zeitüberschreitung in Sekunden. Wenn die Proxyverbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `redirectUrl`
  - : `string`. Die neue URL.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, damit Sie verschiedene Ereignisse, die mit der gleichen Anfrage verbunden sind, in Beziehung setzen können.
- `responseHeaders`
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwort-Header, die zusammen mit dieser Umleitung empfangen wurden.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort oder der 'HTTP/0.9 200 OK'-String für HTTP/0.9-Antworten (d.h. Antworten, die keine Statuszeile enthalten) oder ein leerer String, wenn es keine Header gibt.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab in Beziehung steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Der mit der Anfrage verbundene Tracking-Typ, sofern die Anfrage durch den [Firefox-Tracking-Schutz](https://support.mozilla.org/de/kb/verbesserter-schutz-vor-aktivitaetenverfolgung-firefox-desktop) klassifiziert ist. Dies ist ein Objekt mit folgenden Eigenschaften:

    - `firstParty`
      - : `array` von `string`. Klassifizierungsflags für den First-Party-Anteil der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifizierungsflags für die Anfrage oder die Fensterhierarchien von Drittanbietern.

    Die Klassifizierungsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: gibt an, dass die Anfrage an Fingerprinting beteiligt ist ("eine Quelle, die zur Fingerabdruckserkennung gefunden wurde").
      - `fingerprinting` gibt an, dass die Domain in der Kategorie Fingerprinting und Tracking enthalten ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` gibt an, dass die Domain in der Kategorie Fingerprinting, aber nicht in der Kategorie Tracking enthalten ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken zur Identifizierung des besuchenden Benutzers zu Betrugsabwehrzwecken verwenden.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, jedoch für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: gibt an, dass die Anfrage an Tracking beteiligt ist. `tracking` ist jede generische Tracking-Anfrage, die `ad`-, `analytics`-, `social`- und `content`-Suffixe identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: gibt an, dass die Anfrage am Tracking von E-Mails beteiligt ist.
    - `any_basic_tracking`: ein Metaflag, das Tracking- und Fingerprinting-Flags kombiniert, ausgenommen `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Metaflag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Metaflag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Tracker-Typen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers)-Website. Das `content`-Suffix gibt Tracker an, die Inhalte verfolgen und bereitstellen. Ihre Blockierung schützt die Benutzer, kann jedoch dazu führen, dass Seiten unterbrochen werden oder Elemente nicht angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

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

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeRedirect) API. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
