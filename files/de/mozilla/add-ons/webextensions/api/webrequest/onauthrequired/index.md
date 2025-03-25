---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Server einen `401`- oder `407`-Statuscode und einen `WWW-Authenticate`-Header mit dem `Basic`-Schema sendet (d.h. wenn der Server den Client auffordert, Authentifizierungsnachweise, wie einen Benutzernamen und ein Passwort, bereitzustellen).

Der Listener kann auf eine von vier Arten reagieren:

- Keine Aktion durchführen
  - : Der Listener kann nichts tun und den Antrag lediglich beobachten. Wenn dies geschieht, hat es keinen Einfluss auf die Bearbeitung des Antrags, und der Browser fordert den Benutzer bei Bedarf auf, sich einzuloggen.
- Die Anfrage abbrechen

  - : Der Listener kann die Anfrage abbrechen. Wenn er dies tut, schlägt die Authentifizierung fehl und der Benutzer wird nicht aufgefordert, sich einzuloggen. Erweiterungen können Anfragen wie folgt abbrechen:

    - Im addListener `"blocking"` im Parameter `extraInfoSpec` übergeben
    - Im Listener ein Objekt mit einer `cancel`-Eigenschaft zurückgeben, die auf `true` gesetzt ist

- Anmeldedaten synchron bereitstellen

  - : Falls Anmeldedaten synchron verfügbar sind, kann die Erweiterung sie synchron bereitstellen. Wenn die Erweiterung dies tut, versucht der Browser mit den Anmeldedaten einzuloggen. Der Listener kann Anmeldedaten wie folgt synchron bereitstellen:

    - Im addListener `"blocking"` im Parameter `extraInfoSpec` übergeben
    - Im Listener ein Objekt mit einer `authCredentials`-Eigenschaft zurückgeben, die auf die bereitzustellenden Anmeldedaten gesetzt ist

- Anmeldedaten asynchron bereitstellen

  - : Die Erweiterung benötigt möglicherweise eine asynchrone Abfrage der Anmeldedaten. Zum Beispiel könnte die Erweiterung Anmeldedaten aus dem Speicher abrufen oder den Benutzer fragen müssen. In diesem Fall kann der Listener Anmeldedaten asynchron wie folgt bereitstellen:

    - Im addListener `"asyncBlocking"` in Chrome und Firefox oder `"blocking"` in Firefox im Parameter `extraInfoSpec` übergeben
    - Wenn `"blocking"` bereitgestellt wird, kann die Erweiterung ein `webRequest.BlockingResponse`-Objekt zurückgeben oder ein Promise, das zu einem `webRequest.BlockingResponse`-Objekt aufgelöst wird
    - Wenn `"asyncBlocking"` bereitgestellt wird, erhält die Event-Listener-Funktion eine `asyncCallback`-Funktion als zweiten Parameter. `asyncCallback` kann asynchron aufgerufen werden und nimmt ein `webRequest.BlockingResponse`-Objekt als einzigen Parameter entgegen

      > [!NOTE]
      > Chrome unterstützt kein Promise als Rückgabewert ([Chromium Issue 1510405](https://crbug.com/1510405)). Siehe für Alternativen [den Rückgabewert des `listeners`](#listener).

Siehe [Beispiele](#beispiele).

Wenn Ihre Erweiterung falsche Anmeldedaten bereitstellt, wird der Listener erneut aufgerufen. Aus diesem Grund achten Sie darauf, nicht in eine Endlosschleife zu geraten, indem Sie wiederholt falsche Anmeldedaten bereitstellen.

## Berechtigungen

In Firefox- und Chrome-Manifest V2-Erweiterungen müssen Sie die [`"webRequest"`- und `"webRequestBlocking"`-API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) zu Ihrer `manifest.json` hinzufügen.

Für Manifest V3-Erweiterungen unterstützt Chrome die `"webRequestBlocking"`-Berechtigung nicht mehr (mit Ausnahme von politisch installierten Erweiterungen). Stattdessen ermöglichen die Berechtigungen `"webRequest"` und `"webRequestAuthProvider"` Ihnen, Anmeldedaten asynchron bereitzustellen. Firefox unterstützt weiterhin `"webRequestBlocking"` in Manifest V3 und bietet `"webRequestAuthProvider"` zur browserübergreifenden Kompatibilität an.

## Proxy-Autorisierung

Firefox löst im Allgemeinen keine `webRequest`-Ereignisse für Systemanfragen aus, wie Browser- oder Erweiterungs-Updates oder Suchmaschinenanfragen. Um die Proxy-Autorisierung reibungslos für Systemanfragen zu ermöglichen, unterstützt Firefox ab Version 57 eine Ausnahme.

Wenn eine Erweiterung die Berechtigungen `"webRequest"`, `"webRequestBlocking"`, `"proxy"` und `"<all_urls>"` hat, kann sie `onAuthRequired` verwenden, um Anmeldedaten für die Proxy-Autorisierung bereitzustellen (aber nicht für die normale Web-Autorisierung). Der Listener kann keine Systemanfragen abbrechen oder andere Änderungen an Systemanfragen vornehmen.

## Syntax

```js-nolint
browser.webRequest.onAuthRequired.addListener(
  listener,                    // function
  filter,                      //  object
  extraInfoSpec                //  optional array of strings
)
browser.webRequest.onAuthRequired.removeListener(listener)
browser.webRequest.onAuthRequired.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt zu diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `details`
      - : `object`. Details zur Anfrage. Siehe den Abschnitt [details](#details_2) für weitere Informationen.
    - `asyncCallback` {{optional_inline}}

      - : Eine Funktion, die höchstens einmal aufgerufen wird, um das Anforderungsobjekt asynchron zu ändern. Dieser Parameter ist nur vorhanden, wenn der Event-Listener mit `"asyncBlocking"` im `extraInfoSpec`-Array registriert ist. `asyncCallback` ist undefiniert, wenn `extraInfoSpec` nicht bereitgestellt oder `"blocking"` enthält.

    Rückgabewert: {{WebExtAPIRef('webRequest.BlockingResponse')}} oder ein {{jsxref("Promise")}} abhängig von den Einstellungen in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen dieser Werte übergeben:

    - `"blocking"`: Die Anfrage blockieren, damit Sie die Anfrage abbrechen oder Authentifizierungsdaten bereitstellen können. Geben Sie ein `BlockingResponse`-Objekt mit den gesetzten `cancel`- oder `authCredentials`-Eigenschaften zurück.

      - In Chrome muss der Event-Listener synchron antworten.
      - In Firefox kann der Event-Listener synchron antworten oder ein Promise zurückgeben, das in ein `BlockingResponse`-Objekt aufgelöst wird, um asynchron zu antworten.

    - `"asyncBlocking"`: Die Anfrage asynchron bearbeiten. Der Rückgabewert des Event-Listeners wird ignoriert. Um das Ereignis aufzulösen, übergeben Sie dem Parameter `asyncCallback` ein `BlockingResponse`-Objekt.

      - Unterstützt ab Chrome 120 und Firefox 128.
      - Nicht unterstützt in Safari.

## Zusätzliche Objekte

### details

- `challenger`

  - : `object`. Der Server, der die Authentifizierung anfordert. Dies ist ein Objekt mit den folgenden Eigenschaften:

    - `host`
      - : `string`. Der [Hostname](https://de.wikipedia.org/wiki/Hostname#Internet-Hostnamen) des Servers.
    - `port`
      - : `integer`. Die Portnummer des Servers.

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer kontextuellen Identität gestellt wird, die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `frameId`
  - : `integer`. Dies ist `0`, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterframes, in dem die Anfrage passiert. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Surf-Fenster kommt.
- `isProxy`
  - : `boolean`. `true` für `Proxy-Authenticate`, `false` für `WWW-Authenticate`.
    > **Hinweis:** `webRequest.onAuthRequired` wird nur für HTTP- und HTTPS/TLS-Proxy-Server aufgerufen, die eine Authentifizierung erfordern, nicht für SOCKS-Proxy-Server, die eine Authentifizierung erfordern.
- `method`
  - : `string`. Standard-HTTP-Methode (z. B. `"GET"` oder `"POST"`).
- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf `-1` gesetzt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy erfolgt. Sie enthält folgende Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`

      - : `string`. Der Typ des Proxy-Servers. Eine der folgenden:

        - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - `"https"`: HTTP-Proxying über TLS-Verbindung zum Proxy
        - `"socks"`: SOCKS v5 Proxy
        - `"socks4"`: SOCKS v4 Proxy
        - `"direct"`: kein Proxy
        - `"unknown"`: unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Namensauflösung basierend auf dem angegebenen Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Zeitlimit in Sekunden. Wenn die Verbindung nach dieser Anzahl von Sekunden nicht hergestellt werden kann, wird der nächste Proxy-Server im Array zurückgegeben von [FindProxyForURL()](</de/docs/Mozilla/Add-ons/WebExtensions/API/proxy#findproxyforurl()_return_value>) verwendet.

- `realm` {{optional_inline}}
  - : `string`. Der vom Server bereitgestellte Authentifizierungsbereich, falls vorhanden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie verschiedene Ereignisse mit derselben Anfrage in Beziehung setzen können.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die mit dieser Antwort empfangenen HTTP-Antwortheader.
- `scheme`
  - : `string`. Das Authentifizierungsschema: `"basic"` oder `"digest"`.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort, die `'HTTP/0.9 200 OK'`-Zeichenkette für HTTP/0.9-Antworten (d.h. Antworten, die keine Statuszeile haben) oder eine leere Zeichenkette, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: beispielsweise `"image"`, `"script"` oder `"stylesheet"`.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Der Typ des Trackings, der mit der Anfrage verbunden ist, wenn die Anfrage durch [Firefox Tracking Protection](https://support.mozilla.org/de/kb/verbesserter-schutz-vor-aktivitatenverfolgung) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifizierungsflags für den First-Party der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifizierungsflags für den Third-Party der Anfrage oder der Fenster-Hierarchie.

    Die Klassifizierungsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage an Fingerprinting beteiligt ist ("eine Quelle, die Fingerprinting durchführt").
      - `fingerprinting` zeigt an, dass die Domain in der Fingerprinting- und Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer in Verbindung bringen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Fingerprinting-Kategorie, aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zur Betrugsprävention zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, aber für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage an Tracking beteiligt ist. `tracking` ist jede generische Tracking-Anfrage. Die Suffixe `ad`, `analytics`, `social` und `content` identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage an der Nachverfolgung von E-Mails beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der Website von [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers). Das `content`-Suffix gibt Tracker an, die Inhalte verfolgen und bereitstellen. Das Blockieren dieser Tracker schützt Nutzer, kann aber dazu führen, dass Websites nicht funktionieren oder Elemente nicht angezeigt werden.

## Beispiele

Dieser Code beobachtet Authentifizierungsanfragen für die Ziel-URL:

```js
const target = "https://intranet.company.com/";

function observe(requestDetails) {
  console.log(`observing: ${requestDetails.requestId}`);
}

browser.webRequest.onAuthRequired.addListener(observe, { urls: [target] });
```

Dieser Code storniert Authentifizierungsanfragen für die Ziel-URL:

```js
const target = "https://intranet.company.com/";

function cancel(requestDetails) {
  console.log(`canceling: ${requestDetails.requestId}`);
  return { cancel: true };
}

browser.webRequest.onAuthRequired.addListener(cancel, { urls: [target] }, [
  "blocking",
]);
```

Dieser Code liefert Anmeldedaten synchron. Er verfolgt ausstehende Anfragen, um sicherzustellen, dass er nicht wiederholt versucht, falsche Anmeldedaten zu übermitteln:

```js
const target = "https://intranet.company.com/";

const myCredentials = {
  username: "me@company.com",
  password: "zDR$ERHGDFy",
};

const pendingRequests = [];

// A request has completed.
// We can stop worrying about it.
function completed(requestDetails) {
  console.log(`completed: ${requestDetails.requestId}`);
  let index = pendingRequests.indexOf(requestDetails.requestId);
  if (index > -1) {
    pendingRequests.splice(index, 1);
  }
}

function provideCredentialsSync(requestDetails) {
  // If we have seen this request before, then
  // assume our credentials were bad, and give up.
  if (pendingRequests.includes(requestDetails.requestId)) {
    console.log(`bad credentials for: ${requestDetails.requestId}`);
    return { cancel: true };
  }
  pendingRequests.push(requestDetails.requestId);
  console.log(`providing credentials for: ${requestDetails.requestId}`);
  return { authCredentials: myCredentials };
}

browser.webRequest.onAuthRequired.addListener(
  provideCredentialsSync,
  { urls: [target] },
  ["blocking"],
);

browser.webRequest.onCompleted.addListener(completed, { urls: [target] });

browser.webRequest.onErrorOccurred.addListener(completed, { urls: [target] });
```

Dieser Code liefert Anmeldedaten asynchron und ruft sie aus dem Speicher ab. Er verfolgt auch ausstehende Anfragen, um sicherzustellen, dass er nicht wiederholt versucht, falsche Anmeldedaten zu übermitteln:

```js
const target = "https://httpbin.org/basic-auth/*";

const pendingRequests = [];

/*
 * A request has completed. We can stop worrying about it.
 */
function completed(requestDetails) {
  console.log(`completed: ${requestDetails.requestId}`);
  let index = pendingRequests.indexOf(requestDetails.requestId);
  if (index > -1) {
    pendingRequests.splice(index, 1);
  }
}

function provideCredentialsAsync(requestDetails) {
  // If we have seen this request before,
  // then assume our credentials were bad,
  // and give up.
  if (pendingRequests.includes(requestDetails.requestId)) {
    console.log(`bad credentials for: ${requestDetails.requestId}`);
    return { cancel: true };
  } else {
    pendingRequests.push(requestDetails.requestId);
    console.log(`providing credentials for: ${requestDetails.requestId}`);
    // we can return a promise that will be resolved
    // with the stored credentials
    return browser.storage.local.get(null);
  }
}

browser.webRequest.onAuthRequired.addListener(
  provideCredentialsAsync,
  { urls: [target] },
  ["blocking"],
);

browser.webRequest.onCompleted.addListener(completed, { urls: [target] });

browser.webRequest.onErrorOccurred.addListener(completed, { urls: [target] });
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onAuthRequired) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
