---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Server einen `401` oder `407` Statuscode und einen `WWW-Authenticate` Header mit dem `Basic`-Schema sendet (das heißt, wenn der Server den Client auffordert, Authentifizierungsdaten, wie einen Benutzernamen und ein Passwort, bereitzustellen).

Der Listener kann auf eine der folgenden vier Arten reagieren:

- Keine Aktion ausführen
  - : Der Listener kann nichts tun und die Anfrage nur beobachten. Wenn dies geschieht, hat es keine Auswirkung auf die Bearbeitung der Anfrage und der Browser fragt den Benutzer gegebenenfalls nach der Anmeldung.
- Die Anfrage abbrechen

  - : Der Listener kann die Anfrage abbrechen. Wenn er dies tut, schlägt die Authentifizierung fehl, und der Benutzer wird nicht nach der Anmeldung gefragt. Erweiterungen können Anfragen wie folgt abbrechen:

    - in addListener, übergeben Sie `"blocking"` im `extraInfoSpec` Parameter
    - im Listener, geben Sie ein Objekt mit einer `cancel`-Eigenschaft zurück, die auf `true` gesetzt ist

- Anmeldedaten synchron bereitstellen

  - : Wenn Anmeldedaten synchron verfügbar sind, kann die Erweiterung sie synchron bereitstellen. Wenn die Erweiterung dies tut, versucht der Browser, sich mit den Anmeldedaten anzumelden. Der Listener kann Anmeldedaten wie folgt synchron bereitstellen:

    - in addListener, übergeben Sie `"blocking"` im `extraInfoSpec` Parameter
    - im Listener, geben Sie ein Objekt mit einer `authCredentials`-Eigenschaft zurück, das die bereitzustellenden Anmeldedaten enthält

- Anmeldedaten asynchron bereitstellen

  - : Die Erweiterung benötigt möglicherweise asynchron die Ermittlung von Anmeldedaten. Zum Beispiel könnte die Erweiterung Anmeldedaten aus einem Speicher abrufen oder den Benutzer fragen müssen. In diesem Fall kann der Listener Anmeldedaten asynchron wie folgt bereitstellen:

    - in addListener, übergeben Sie `"asyncBlocking"` in Chrome und Firefox oder `"blocking"` in Firefox im `extraInfoSpec` Parameter
    - Wenn `"blocking"` bereitgestellt wird, kann die Erweiterung ein `webRequest.BlockingResponse` Objekt oder ein Promise, das zu einem `webRequest.BlockingResponse` Objekt auflöst, zurückgeben
    - Wenn `"asyncBlocking"` bereitgestellt wird, erhält die Event-Listener-Funktion eine `asyncCallback`-Funktion als zweiten Parameter. `asyncCallback` kann asynchron aufgerufen werden und nimmt ein `webRequest.BlockingResponse`-Objekt als einzigen Parameter entgegen

      > [!NOTE]
      > Chrome unterstützt kein Promise als Rückgabewert ([Chromium Issue 1510405](https://crbug.com/1510405)). Für Alternativen siehe [den Rückgabewert des `listener`](#listener).

Siehe [Beispiele](#beispiele).

Wenn Ihre Erweiterung falsche Anmeldedaten bereitstellt, wird der Listener erneut aufgerufen. Aus diesem Grund sollten Sie darauf achten, nicht in eine Endlosschleife zu geraten, indem Sie wiederholt falsche Anmeldedaten bereitstellen.

## Berechtigungen

In Firefox- und Chrome-Manifest-V2-Erweiterungen müssen Sie die [`"webRequest"` und `"webRequestBlocking"` API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) zu Ihrer `manifest.json` hinzufügen.

Für Manifest-V3-Erweiterungen unterstützt Chrome das `"webRequestBlocking"`-Berechtigung nicht mehr (außer für policy-installierte Erweiterungen). Stattdessen ermöglichen die Berechtigungen `"webRequest"` und `"webRequestAuthProvider"` die asynchrone Bereitstellung von Anmeldedaten. Firefox unterstützt weiterhin `"webRequestBlocking"` in Manifest V3 und bietet `"webRequestAuthProvider"` für eine plattformübergreifende Kompatibilität an.

## Proxy-Authentifizierung

Firefox löst im Allgemeinen keine `webRequest`-Ereignisse für Systemanfragen aus, wie z. B. Browser- oder Erweiterungs-Updates oder Suchmaschinenanfragen. Um eine reibungslose Proxy-Authentifizierung für Systemanfragen zu ermöglichen, unterstützt Firefox seit Version 57 eine Ausnahme davon.

Wenn eine Erweiterung die Berechtigungen `"webRequest"`, `"webRequestBlocking"`, `"proxy"` und `"<all_urls>"` hat, kann sie `onAuthRequired` verwenden, um Anmeldedaten für die Proxy-Authentifizierung bereitzustellen (aber nicht für die normale Web-Authentifizierung). Der Listener kann Systemanfragen nicht abbrechen oder andere Änderungen an Systemanfragen vornehmen.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Der `listener`-Parameter ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es registriert ist, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion wird aufgerufen, wenn dieses Ereignis auftritt. Die Funktion erhält folgende Argumente:

    - `details`
      - : `object`. Details zur Anfrage. Siehe den Abschnitt [details](#details_2) für weitere Informationen.
    - `asyncCallback` {{optional_inline}}

      - : Eine Funktion, die maximal einmal aufgerufen werden kann, um das Anforderungsobjekt asynchron zu ändern.
        Dieser Parameter ist nur vorhanden, wenn der Event-Listener mit `"asyncBlocking"` im `extraInfoSpec`-Array registriert wird. `asyncCallback` ist undefiniert, wenn `extraInfoSpec` nicht bereitgestellt oder `"blocking"` enthalten ist.

    Gibt zurück: {{WebExtAPIRef('webRequest.BlockingResponse')}} oder ein {{jsxref("Promise")}}, abhängig von den Einstellungen in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die an diesen Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen dieser Werte übergeben:

    - `"blocking"`: blockieren Sie die Anfrage, damit Sie die Anfrage abbrechen oder Authentifizierungsdaten bereitstellen können. Geben Sie ein `BlockingResponse`-Objekt mit den Eigenschaften `cancel` oder `authCredentials` zurück.

      - In Chrome muss der Event-Listener synchron antworten.
      - In Firefox kann der Event-Listener synchron antworten oder ein Promise zurückgeben, das zu einem `BlockingResponse`-Objekt auflöst, um asynchron zu antworten.

    - `"asyncBlocking"`: bearbeiten Sie die Anfrage asynchron. Der Rückgabewert des Event-Listeners wird ignoriert. Um das Ereignis aufzulösen, übergeben Sie dem `asyncCallback`-Parameter ein `BlockingResponse`-Objekt.

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
  - : `string`. Wenn die Anfrage von einem Tab aus erfolgt, das in einer kontextuellen Identität geöffnet ist, die Cookie-Store-ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `frameId`
  - : `integer`. Dies ist `0`, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `isProxy`
  - : `boolean`. `true` für `Proxy-Authenticate`, `false` für `WWW-Authenticate`.
    > **Note:** `webRequest.onAuthRequired` wird nur für HTTP- und HTTPS/TLS-Proxy-Server aufgerufen, die Authentifizierung erfordern, nicht für SOCKS-Proxy-Server, die Authentifizierung erfordern.
- `method`
  - : `string`. Standard-HTTP-Methode (Zum Beispiel `"GET"` oder `"POST"`).
- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Wird auf `-1` gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage weitergeleitet wird. Es enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`

      - : `string`. Der Typ des Proxy-Servers. Einer von:

        - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - `"https"`: HTTP-Proxy über TLS-Verbindung zum Proxy
        - `"socks"`: SOCKS v5 Proxy
        - `"socks4"`: SOCKS v4 Proxy
        - `"direct"`: kein Proxy
        - `"unknown"`: unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die DNS-Auflösung basierend auf dem angegebenen Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Suche ausführen sollte.
    - `failoverTimeout`
      - : `integer`. Ausweichzeit in Sekunden. Wenn die Verbindung zum Proxy-Server nach dieser Anzahl von Sekunden fehlschlägt, wird der nächste Proxy-Server im Array aus [FindProxyForURL()](</de/docs/Mozilla/Add-ons/WebExtensions/API/proxy#findproxyforurl()_return_value>) verwendet.

- `realm` {{optional_inline}}
  - : `string`. Der vom Server bereitgestellte Authentifizierungs-[Realm](https://datatracker.ietf.org/doc/html/rfc1945#section-11), falls vorhanden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie verschiedene mit derselben Anfrage verbundene Ereignisse in Beziehung setzen können.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die mit dieser Antwort empfangenen HTTP-Header.
- `scheme`
  - : `string`. Das Authentifizierungsschema: `"basic"` oder `"digest`".
- `statusCode`
  - : `integer`. Vom Server zurückgegebener Standard-HTTP-Statuscode.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort, die `'HTTP/0.9 200 OK'`-Zeichenfolge für HTTP/0.9-Antworten (d. h. Antworten ohne Statuszeile) oder eine leere Zeichenfolge, wenn es keine Header gibt.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Wird auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab in Zusammenhang steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie von Dritten stammen.
- `timeStamp`
  - : `number`. Die Zeit, wann dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel `"image"`, `"script"` oder `"stylesheet"`.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art des Trackings, das mit der Anfrage verbunden ist, falls die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifizierungsflags für die erste Partei der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifizierungsflags für die Dritten oder deren Fensterhierarchie.

    Die Klassifizierungsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage beim Fingerprinting beteiligt ist ("eine Quelle, die versucht zu identifizieren").
      - `fingerprinting` zeigt an, dass die Domain in der Fingerprinting- und Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verbinden wollen.
      - `fingerprinting_content` zeigt an, dass die Domain in der Fingerprinting-Kategorie aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zur Betrugsprävention zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, aber für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social`, und `tracking_content`: zeigt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede generische Tracking-Anfrage. Die `ad`, `analytics`, `social` und `content` Suffixe identifizieren die Art des Trackers.
    - `any_basic_tracking`: ein Metaflag, das Tracking- und Fingerprinting-Flags kombiniert, außer `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Metaflag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Metaflag, das alle Social-Tracking-Flags kombiniert.

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

Dieser Code liefert Anmeldedaten synchron. Er hält ausstehende Anfragen im Blick, um sicherzustellen, dass nicht wiederholt versucht wird, falsche Anmeldedaten einzureichen:

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

Dieser Code liefert Anmeldedaten asynchron, indem er sie aus einem Speicher abruft. Er hält auch ausstehende Anfragen im Blick, um sicherzustellen, dass nicht wiederholt versucht wird, falsche Anmeldedaten einzureichen:

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
