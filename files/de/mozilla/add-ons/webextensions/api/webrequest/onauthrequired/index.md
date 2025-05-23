---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Server einen `401`- oder `407`-Statuscode und einen `WWW-Authenticate`-Header mit dem `Basic`-Schema sendet (d.h. wenn der Server den Client auffordert, Authentifizierungsnachweise wie Benutzername und Passwort bereitzustellen).

Der Listener kann auf folgende vier Arten reagieren:

- Keine Aktion ausführen
  - : Der Listener kann nichts unternehmen und nur die Anfrage beobachten. Wenn dies geschieht, hat es keinen Einfluss auf die Bearbeitung der Anfrage und der Browser fordert den Benutzer gegebenenfalls auf, sich anzumelden.
- Die Anfrage abbrechen

  - : Der Listener kann die Anfrage abbrechen. Dadurch schlägt die Authentifizierung fehl und der Benutzer wird nicht aufgefordert, sich anzumelden. Erweiterungen können Anfragen wie folgt abbrechen:

    - In addListener, `"blocking"` im `extraInfoSpec`-Parameter übergeben
    - Im Listener ein Objekt mit einer `cancel`-Eigenschaft zurückgeben, das auf `true` gesetzt ist

- Anmeldeinformationen synchron bereitstellen

  - : Wenn Anmeldeinformationen synchron verfügbar sind, kann die Erweiterung sie synchron bereitstellen. Wenn die Erweiterung dies tut, versucht der Browser, sich mit den Anmeldeinformationen anzumelden. Der Listener kann Anmeldeinformationen synchron wie folgt bereitstellen:

    - In addListener, `"blocking"` im `extraInfoSpec`-Parameter übergeben
    - Im Listener ein Objekt mit einer `authCredentials`-Eigenschaft zurückgeben, die auf die bereitzustellenden Anmeldeinformationen gesetzt ist

- Anmeldeinformationen asynchron bereitstellen

  - : Die Erweiterung könnte Anmeldeinformationen asynchron abrufen müssen. Zum Beispiel könnte die Erweiterung Anmeldeinformationen aus dem Speicher abrufen oder den Benutzer fragen müssen. In diesem Fall kann der Listener Anmeldeinformationen asynchron wie folgt bereitstellen:

    - In addListener, `"asyncBlocking"` in Chrome und Firefox oder `"blocking"` in Firefox im `extraInfoSpec`-Parameter übergeben
    - Wenn `"blocking"` angegeben ist, kann die Erweiterung ein `webRequest.BlockingResponse`-Objekt oder ein Promise zurückgeben, das zu einem `webRequest.BlockingResponse`-Objekt aufgelöst wird
    - Wenn `"asyncBlocking"` angegeben ist, erhält die Ereignis-Listener-Funktion eine `asyncCallback`-Funktion als zweiten Parameter. `asyncCallback` kann asynchron aufgerufen werden und nimmt ein `webRequest.BlockingResponse`-Objekt als einzigen Parameter an

      > [!NOTE]
      > Chrome unterstützt ein Promise als Rückgabewert nicht ([Chromium-Issue 1510405](https://crbug.com/1510405)). Für Alternativen siehe [den Rückgabewert des `listener`](#listener).

Siehe [Beispiele](#beispiele).

Wenn Ihre Erweiterung falsche Anmeldeinformationen bereitstellt, wird der Listener erneut aufgerufen. Aus diesem Grund achten Sie darauf, eine Endlosschleife zu vermeiden, indem Sie wiederholt falsche Anmeldeinformationen bereitstellen.

## Berechtigungen

In Firefox- und Chrome Manifest V2-Erweiterungen müssen Sie die [`"webRequest"` und `"webRequestBlocking"` API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) zu Ihrer `manifest.json` hinzufügen.

Für Manifest V3-Erweiterungen unterstützt Chrome die Berechtigung `"webRequestBlocking"` nicht mehr (außer für policy-installierte Erweiterungen). Stattdessen ermöglichen die Berechtigungen `"webRequest"` und `"webRequestAuthProvider"`, dass Sie Anmeldeinformationen asynchron bereitstellen können. Firefox unterstützt weiterhin `"webRequestBlocking"` in Manifest V3 und bietet `"webRequestAuthProvider"` für die plattformübergreifende Kompatibilität an.

## Proxy-Authentifizierung

Firefox löst im Allgemeinen keine `webRequest`-Ereignisse für Systemanfragen aus, wie z. B. Browser- oder Erweiterungsaktualisierungen oder Suchmaschinenanfragen. Um sicherzustellen, dass die Proxy-Authentifizierung reibungslos für Systemanfragen funktioniert, unterstützt Firefox ab Version 57 eine Ausnahme hiervon.

Wenn eine Erweiterung die Berechtigungen `"webRequest"`, `"webRequestBlocking"`, `"proxy"` und `"<all_urls>"` hat, kann sie `onAuthRequired` verwenden, um Anmeldeinformationen für die Proxy-Authentifizierung bereitzustellen (aber nicht für die normale Web-Authentifizierung). Der Listener kann Systemanfragen nicht abbrechen oder andere Änderungen an Systemanfragen vornehmen.

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
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält diese Argumente:

    - `details`
      - : `object`. Details zur Anfrage. Weitere Informationen finden Sie im Abschnitt [details](#details).
    - `asyncCallback` {{optional_inline}}

      - : Eine Funktion, die höchstens einmal aufgerufen wird, um das Anfrageobjekt asynchron zu ändern.
        Dieser Parameter ist nur vorhanden, wenn der Ereignis-Listener mit `"asyncBlocking"` im `extraInfoSpec`-Array registriert ist. `asyncCallback` ist undefiniert, wenn `extraInfoSpec` nicht bereitgestellt wird oder `"blocking"` enthält.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}} oder ein {{jsxref("Promise")}} abhängig von den Einstellungen in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die an diesen Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}

  - : `array` of `string`. Zusätzliche Optionen für das Ereignis. Sie können einen dieser Werte übergeben:

    - `"blocking"`: lässt die Anfrage blockieren, sodass Sie die Anfrage abbrechen oder Authentifizierungsnachweise bereitstellen können. Geben Sie ein `BlockingResponse`-Objekt mit seinen `cancel`- oder `authCredentials`-Eigenschaften zurück.

      - In Chrome muss der Ereignis-Listener synchron antworten.
      - In Firefox kann der Ereignis-Listener synchron antworten oder ein Promise zurückgeben, das zu einem `BlockingResponse`-Objekt aufgelöst wird, um asynchron zu antworten.

    - `"asyncBlocking"`: Bearbeiten Sie die Anfrage asynchron. Der Rückgabewert des Ereignis-Listeners wird ignoriert. Um das Ereignis zu lösen, übergeben Sie dem `asyncCallback`-Parameter ein `BlockingResponse`-Objekt.

      - Wird ab Chrome 120 und Firefox 128 unterstützt.
      - Nicht in Safari unterstützt.

## Zusätzliche Objekte

### details

- `challenger`

  - : `object`. Der Server, der die Authentifizierung anfordert. Dies ist ein Objekt mit den folgenden Eigenschaften:

    - `host`
      - : `string`. Der [Hostname](https://en.wikipedia.org/wiki/Hostname#Internet_hostnames) des Servers.
    - `port`
      - : `integer`. Die Portnummer des Servers.

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab mit geöffnetem kontextuellem Identitätsfenster stammt, die ID des Cookie-Speichers der kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `frameId`
  - : `integer`. Dies ist `0`, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind eindeutig innerhalb eines Tabs.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `isProxy`
  - : `boolean`. `true` für `Proxy-Authenticate`, `false` für `WWW-Authenticate`.
    > **Hinweis:** `webRequest.onAuthRequired` wird nur für HTTP- und HTTPS/TLS-Proxyserver aufgerufen, die eine Authentifizierung erfordern, nicht für SOCKS-Proxyserver, die eine Authentifizierung erfordern.
- `method`
  - : `string`. Standard-HTTP-Methode (z. B. `"GET"` oder `"POST"`).
- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Ist auf `-1` gesetzt, wenn kein übergeordneter Frame vorhanden ist.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Sie enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxyservers.
    - `port`
      - : `integer`. Die Portnummer des Proxyservers.
    - `type`

      - : `string`. Der Typ des Proxyservers. Einer von:

        - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - `"https"`: HTTP-Proxydienste über TLS-Verbindung zum Proxy
        - `"socks"`: SOCKS v5-Proxy
        - `"socks4"`: SOCKS v4-Proxy
        - `"direct"`: kein Proxy
        - `"unknown"`: unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxydienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die DNS-Auflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Zeitüberschreitung in Sekunden. Wenn die Verbindung zum Proxyserver nach dieser Anzahl von Sekunden fehlschlägt, wird der nächste Proxyserver im Array verwendet, das von [FindProxyForURL()](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) zurückgegeben wird.

- `realm` {{optional_inline}}
  - : `string`. Der vom Server bereitgestellte Authentifizierungs-[Domain](https://datatracker.ietf.org/doc/html/rfc1945#section-11), falls vorhanden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie verschiedene Ereignisse miteinander in Verbindung bringen können, die mit der gleichen Anfrage zusammenhängen.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Response-Header, die mit dieser Antwort erhalten wurden.
- `scheme`
  - : `string`. Das Authentifizierungsschema: `"basic"` oder `"digest"`.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort, die `'HTTP/0.9 200 OK'`-Zeichenkette für HTTP/0.9-Antworten (d.h. Antworten ohne Statuszeile) oder eine leere Zeichenkette, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Ist auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab zusammenhängt.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie von Dritten stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit dem Unix-Epoch](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel `"image"`, `"script"` oder `"stylesheet"`.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art der Verfolgung, die mit der Anfrage in Verbindung steht, wenn die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `string`. Klassifikationsmarkierungen für die First Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsmarkierungen für die Anfrage oder ihre Fensterhierarchie von Dritten.

    Die Klassifikationsmarkierungen enthalten:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage an Fingerprinting beteiligt ist ("ein Ursprung, der zur Fingerabdruck-Erkennung eingesetzt wird").
      - `fingerprinting` zeigt an, dass die Domain in der Kategorie Fingerabdruck und Tracking ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer in Verbindung bringen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Kategorie Fingerabdruck, aber nicht in der Kategorie Tracking ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerabdrucktechniken verwenden, um den besuchenden Benutzer zum Zwecke des Betrugsschutzes zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerabdruck-Kategorie, aber für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage an Tracking beteiligt ist. `tracking` ist jede allgemeine Tracking-Anfrage. Die Suffixe `ad`, `analytics`, `social` und `content` identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage an der E-Mail-Nachverfolgung beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerabdruck-Markierungen kombiniert, ohne `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerabdruck-Markierungen kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Markierungen kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content`-Suffix zeigt Tracker an, die Content verfolgen und bereitstellen. Ihre Blockierung schützt Benutzer, kann jedoch dazu führen, dass Websites kaputtgehen oder Elemente nicht angezeigt werden.

## Beispiele

Dieser Code beobachtet Authentifizierungsanfragen für die Ziel-URL:

```js
const target = "https://intranet.company.com/";

function observe(requestDetails) {
  console.log(`observing: ${requestDetails.requestId}`);
}

browser.webRequest.onAuthRequired.addListener(observe, { urls: [target] });
```

Dieser Code bricht Authentifizierungsanfragen für die Ziel-URL ab:

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

Dieser Code liefert Anmeldeinformationen synchron. Er verfolgt ausstehende Anfragen, um sicherzustellen, dass er nicht wiederholt versucht, falsche Anmeldeinformationen zu übermitteln:

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

Dieser Code liefert Anmeldeinformationen asynchron, indem er sie aus dem Speicher abruft. Er verfolgt ebenfalls ausstehende Anfragen, um sicherzustellen, dass er nicht wiederholt versucht, falsche Anmeldeinformationen zu übermitteln:

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
  }
  pendingRequests.push(requestDetails.requestId);
  console.log(`providing credentials for: ${requestDetails.requestId}`);
  // we can return a promise that will be resolved
  // with the stored credentials
  return browser.storage.local.get(null);
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
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onAuthRequired) API. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
