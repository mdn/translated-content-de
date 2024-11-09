---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: 33a5708cc125bcaa4ebe74b46bb6fe1820616ff0
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Server einen `401`- oder `407`-Statuscode und einen `WWW-Authenticate` Header mit dem `Basic` Schema sendet (d. h., wenn der Server den Client auffordert, Authentifizierungsdaten wie z. B. Benutzername und Passwort bereitzustellen).

Der Listener kann auf eine von vier Arten reagieren:

- Keine Aktion durchführen
  - : Der Listener kann nichts unternehmen und den Antrag nur beobachten. Dies hat keine Auswirkungen auf die Bearbeitung der Anfrage, und der Browser fordert den Benutzer gegebenenfalls zur Anmeldung auf.
- Anfrage abbrechen

  - : Der Listener kann die Anfrage abbrechen. Wenn er dies tut, schlägt die Authentifizierung fehl, und der Benutzer wird nicht zur Anmeldung aufgefordert. Erweiterungen können Anfragen wie folgt abbrechen:

    - in addListener den Parameter `"blocking"` im `extraInfoSpec` übergeben
    - im Listener ein Objekt mit einer `cancel`-Eigenschaft zurückgeben, die auf `true` gesetzt ist

- Anmeldeinformationen synchron bereitstellen

  - : Wenn Anmeldeinformationen synchron verfügbar sind, kann die Erweiterung diese synchron bereitstellen. Tut die Erweiterung dies, versucht der Browser, sich mit den Anmeldeinformationen anzumelden. Der Listener kann Anmeldeinformationen wie folgt synchron bereitstellen:

    - in addListener den Parameter `"blocking"` im `extraInfoSpec` übergeben
    - im Listener ein Objekt mit einer `authCredentials`-Eigenschaft zurückgeben, die auf die bereitzustellenden Anmeldeinformationen gesetzt ist

- Anmeldeinformationen asynchron bereitstellen

  - : Die Erweiterung könnte Anmeldeinformationen asynchron abrufen müssen. Beispielsweise könnte die Erweiterung Anmeldeinformationen aus dem Speicher abrufen oder den Benutzer fragen müssen. In diesem Fall kann der Listener Anmeldeinformationen asynchron wie folgt bereitstellen:

    - in addListener `"asyncBlocking"` in Chrome und Firefox oder `"blocking"` in Firefox im `extraInfoSpec` Parameter übergeben
    - Wird `"blocking"` bereitgestellt, kann die Erweiterung ein `webRequest.BlockingResponse` Objekt oder ein Versprechen zurückgeben, das zu einem `webRequest.BlockingResponse` Objekt führt
    - Wird `"asyncBlocking"` bereitgestellt, erhält die Event-Listener-Funktion eine `asyncCallback` Funktion als zweiten Parameter. `asyncCallback` kann asynchron aufgerufen werden und nimmt ein `webRequest.BlockingResponse` Objekt als einzigen Parameter

      > [!NOTE]
      > Chrome unterstützt kein Versprechen als Rückgabewert ([Chromium Issue 1510405](https://crbug.com/1510405)). Für Alternativen siehe [den Rückgabewert des `listeners`](#listener).

Siehe [Beispiele](#beispiele).

Wenn Ihre Erweiterung fehlerhafte Anmeldeinformationen bereitstellt, wird der Listener erneut aufgerufen. Aus diesem Grund sollten Sie darauf achten, nicht in eine Endlosschleife zu geraten, in der wiederholt falsche Anmeldeinformationen bereitgestellt werden.

## Berechtigungen

In Firefox und Chrome Manifest V2 Erweiterungen müssen Sie die [`"webRequest"` und `"webRequestBlocking"` API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) zu Ihrer `manifest.json` hinzufügen.

Für Manifest V3 Erweiterungen unterstützt Chrome das `"webRequestBlocking"`-Recht nicht mehr (außer für von der Richtlinie installierte Erweiterungen). Stattdessen ermöglichen die `"webRequest"` und `"webRequestAuthProvider"` Berechtigungen die asynchrone Bereitstellung von Anmeldeinformationen. Firefox unterstützt weiterhin `"webRequestBlocking"` in Manifest V3 und stellt `"webRequestAuthProvider"` zur Verfügung, um plattformübergreifende Kompatibilität zu bieten.

## Proxy-Authentifizierung

Firefox löst `webRequest`-Ereignisse im Allgemeinen nicht für Systemanfragen aus, wie z. B. Browser- oder Erweiterungsupgrades oder Suchmaschinenanfragen. Um die Proxy-Authentifizierung für Systemanfragen reibungslos zu ermöglichen, unterstützt Firefox ab Version 57 eine Ausnahme hierfür.

Wenn eine Erweiterung die Berechtigungen `"webRequest"`, `"webRequestBlocking"`, `"proxy"` und `"<all_urls>"` hat, kann sie `onAuthRequired` verwenden, um Anmeldeinformationen für die Proxy-Authentifizierung bereitzustellen (nicht jedoch für normale Web-Authentifizierungen). Der Listener kann keine Systemanfragen stornieren oder anderweitige Änderungen an Systemanfragen vornehmen.

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
  - : Beendet das Hören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es den Hörer gibt, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält diese Argumente:

    - `details`
      - : `object`. Details zur Anfrage. Weitere Informationen finden Sie im Abschnitt [details](#details_2).
    - `asyncCallback` {{optional_inline}}

      - : Eine Funktion, die höchstens einmal aufgerufen wird, um das Anforderungsobjekt asynchron zu ändern.
        Dieser Parameter ist nur vorhanden, wenn der Ereignis-Listener mit `"asyncBlocking"` im `extraInfoSpec`-Array registriert ist. `asyncCallback` ist undefiniert, wenn `extraInfoSpec` nicht bereitgestellt wird oder `"blocking"` enthält.

    Gibt zurück: {{WebExtAPIRef('webRequest.BlockingResponse')}} oder ein {{jsxref("Promise")}} abhängig von den Einstellungen in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die an diesen Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen dieser Werte übergeben:

    - `"blocking"`: macht die Anfrage blockierend, damit Sie die Anfrage abbrechen oder Authentifizierungsdaten bereitstellen können. Geben Sie ein `BlockingResponse`-Objekt mit den Eigenschaften `cancel` oder `authCredentials` zurück.

      - In Chrome muss der Listener synchron antworten.
      - In Firefox kann der Listener synchron antworten oder ein Versprechen zurückgeben, das zu einem `BlockingResponse`-Objekt führt, um asynchron zu antworten.

    - `"asyncBlocking"`: behandelt die Anfrage asynchron. Der Rückgabewert des Ereignis-Listeners wird ignoriert. Um das Ereignis zu lösen, übergeben Sie dem `asyncCallback`-Parameter ein `BlockingResponse`-Objekt.

      - Unterstützt ab Chrome 120 und Firefox 128.
      - Nicht unterstützt in Safari.

## Zusätzliche Objekte

### details

- `challenger`

  - : `object`. Der Server, der die Authentifizierung anfordert. Dies ist ein Objekt mit den folgenden Eigenschaften:

    - `host`
      - : `string`. Der [Hostname](https://en.wikipedia.org/wiki/Hostname#Internet_hostnames) des Servers.
    - `port`
      - : `integer`. Die Portnummer des Servers.

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem in einer kontextuellen Identität geöffneten Tab stammt, die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie im Abschnitt [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `frameId`
  - : `integer`. Dieser Wert ist `0`, wenn die Anfrage im Hauptframe auftritt; ein positiver Wert ist die ID eines Unterframes, in dem die Anfrage stattfindet. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `isProxy`
  - : `boolean`. `true` für `Proxy-Authenticate`, `false` für `WWW-Authenticate`.
    > **Hinweis:** `webRequest.onAuthRequired` wird nur für HTTP- und HTTPS/TLS-Proxy-Server aufgerufen, die eine Authentifizierung erfordern, nicht für SOCKS-Proxy-Server, die eine Authentifizierung erfordern.
- `method`
  - : `string`. Standard-HTTP-Methode (z.B. `"GET"` oder `"POST"`).
- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Wird auf `-1` gesetzt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Sie enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`

      - : `string`. Der Proxytservertyp. Einer der folgenden:

        - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - `"https"`: HTTP-Proxying über TLS-Verbindung zum Proxy
        - `"socks"`: SOCKS v5 Proxy
        - `"socks4"`: SOCKS v4 Proxy
        - `"direct"`: kein Proxy
        - `"unknown"`: unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die Auflösung von Domainnamen basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Verbindung nach dieser Anzahl von Sekunden fehlschlägt, wird der nächste Proxy-Server im Array, das von [FindProxyForURL()](</de/docs/Mozilla/Add-ons/WebExtensions/API/proxy#findproxyforurl()_return_value>) zurückgegeben wird, verwendet.

- `realm` {{optional_inline}}
  - : `string`. Der vom Server bereitgestellte [Realm](https://datatracker.ietf.org/doc/html/rfc1945#section-11) für die Authentifizierung, wenn einer vorhanden ist.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browser-Sitzung eindeutig, sodass Sie verschiedene Ereignisse, die mit derselben Anfrage verbunden sind, zueinander in Beziehung setzen können.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die mit dieser Antwort empfangen wurden.
- `scheme`
  - : `string`. Das Authentifizierungsschema: `"basic"` oder `"digest`".
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort, die `'HTTP/0.9 200 OK'` Zeichenfolge für HTTP/0.9 Antworten (d.h. Antworten ohne Statuszeile) oder eine leere Zeichenfolge, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Wird auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab in Zusammenhang steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: z.B. `"image"`, `"script"` oder `"stylesheet"`.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art des Trackings, die mit der Anfrage verbunden ist, wenn die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wurde. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifikationsflags für die ersten Parteien der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifikationsflags für die Drittparteien der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifikationsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: gibt an, dass die Anfrage Teil des Fingerprintings ist ("eine Herkunft, die als Fingerprinting erkannt wurde").
      - `fingerprinting` zeigt an, dass die Domäne in der Kategorie für Fingerprinting und Nachverfolgung enthalten ist. Beispiele für diese Art von Domänen sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domäne in der Kategorie Fingerprinting, aber nicht in der Kategorie Nachverfolgung enthalten ist. Beispiele für diese Art von Domänen sind Zahlungsanbieter, die Fingerprinting-Techniken zur Identifizierung des besuchenden Benutzers zu Zwecken der Betrugsprävention verwenden.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Kategorie Fingerprinting, jedoch für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social`, und `tracking_content`: zeigt an, dass die Anfrage in die Nachverfolgung involviert ist. `tracking` ist jede generische Nachverfolgungsanfrage. Die Suffixe `ad`, `analytics`, `social`, und `content` identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage in die Nachverfolgung von E-Mails involviert ist.
    - `any_basic_tracking`: ein Meta-Flag, das Nachverfolgungs- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Nachverfolgungs- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Nachverfolgungs-Flags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das Suffix `content` zeigt Tracker, die Tracken und Inhalte bereitstellen. Deren Blockieren schützt Benutzer, kann jedoch dazu führen, dass Websites nicht funktionieren oder Elemente nicht angezeigt werden.

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

Dieser Code liefert Anmeldeinformationen synchron. Er verfolgt ausstehende Anfragen, um sicherzustellen, dass nicht wiederholt versucht wird, falsche Anmeldeinformationen zu übermitteln:

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

Dieser Code liefert Anmeldeinformationen asynchron und ruft sie aus dem Speicher ab. Er verfolgt auch ausstehende Anfragen, um sicherzustellen, dass nicht wiederholt versucht wird, falsche Anmeldeinformationen zu übermitteln:

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
