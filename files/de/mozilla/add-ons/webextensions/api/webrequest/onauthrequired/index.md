---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: ecdff1d43aa1606d354cafc6eadf4b0c33e16352
---

Wird ausgelöst, wenn der Server einen `401`- oder `407`-Statuscode und einen `WWW-Authenticate`-Header mit dem `Basic` Schema sendet (d.h. wenn der Server den Client auffordert, Authentifizierungsdaten wie einen Benutzernamen und ein Passwort bereitzustellen).

Der Listener kann auf eine von vier Arten reagieren:

- Keine Aktion durchführen
  - : Der Listener kann nichts tun und nur die Anfrage beobachten. Falls dies geschieht, hat es keine Auswirkungen auf die Verarbeitung der Anfrage, und der Browser bittet den Benutzer, sich anzumelden, falls angemessen.
- Anfrage abbrechen
  - : Der Listener kann die Anfrage abbrechen. Wenn dies geschieht, schlägt die Authentifizierung fehl und der Benutzer wird nicht zur Anmeldung aufgefordert. Erweiterungen können Anfragen wie folgt abbrechen:
    - in `addListener` `"blocking"` im `extraInfoSpec`-Parameter übergeben
    - im Listener ein Objekt zurückgeben, dessen `cancel`-Eigenschaft auf `true` gesetzt ist

- Anmeldeinformationen synchron bereitstellen
  - : Falls Anmeldeinformationen synchron verfügbar sind, kann die Erweiterung diese synchron bereitstellen. Falls die Erweiterung dies tut, versucht der Browser, sich mit den Anmeldeinformationen anzumelden. Der Listener kann Anmeldeinformationen wie folgt synchron bereitstellen:
    - in `addListener` `"blocking"` im `extraInfoSpec`-Parameter übergeben
    - im Listener ein Objekt zurückgeben, dessen `authCredentials`-Eigenschaft auf die bereitzustellenden Anmeldeinformationen gesetzt ist

- Anmeldeinformationen asynchron bereitstellen
  - : Die Erweiterung benötigt möglicherweise Anmeldeinformationen asynchron. Zum Beispiel könnte die Erweiterung Anmeldeinformationen aus dem Speicher abrufen oder den Benutzer fragen müssen. In diesem Fall kann der Listener wie folgt Anmeldeinformationen asynchron bereitstellen:
    - in `addListener`, in Chrome und Firefox `"asyncBlocking"` oder in Firefox `"blocking"` im `extraInfoSpec`-Parameter übergeben
    - Wenn `"blocking"` bereitgestellt wird, kann die Erweiterung ein `webRequest.BlockingResponse`-Objekt oder ein Promise, das sich zu einem `webRequest.BlockingResponse`-Objekt auflöst, zurückgeben
    - Wenn `"asyncBlocking"` bereitgestellt wird, erhält die Event-Listener-Funktion eine `asyncCallback`-Funktion als zweiten Parameter. `asyncCallback` kann asynchron aufgerufen werden und nimmt ein `webRequest.BlockingResponse`-Objekt als einzigen Parameter

      > [!NOTE]
      > Chrome unterstützt kein Promise als Rückgabewert ([Chromium Problem 1510405](https://crbug.com/1510405)). Für Alternativen siehe [der Rückgabewert des `listener`](#listener).

Siehe [Beispiele](#beispiele).

Falls Ihre Erweiterung fehlerhafte Anmeldeinformationen bereitstellt, wird der Listener erneut aufgerufen. Aus diesem Grund sollten Sie darauf achten, keine Endlosschleife zu verursachen, indem Sie wiederholt fehlerhafte Anmeldeinformationen bereitstellen.

## Berechtigungen

In Firefox und Chrome Manifest V2-Erweiterungen müssen Sie die [„webRequest“- und „webRequestBlocking“-API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) Ihrer `manifest.json` hinzufügen.

Für Manifest V3-Erweiterungen unterstützt Chrome die „webRequestBlocking“-Berechtigung nicht mehr (außer für Richtlinieninstallierte Erweiterungen). Stattdessen ermöglichen die Berechtigungen „webRequest“ und „webRequestAuthProvider“, Anmeldeinformationen asynchron bereitzustellen. Firefox unterstützt weiterhin „webRequestBlocking“ in Manifest V3 und bietet „webRequestAuthProvider“, um Browser-Kompatibilität zu gewährleisten.

## Proxy-Authentifizierung

Firefox löst im Allgemeinen keine `webRequest`-Ereignisse für Systemanfragen aus, wie z.B. für Browser- oder Erweiterungsupgrades oder Suchanfragen. Um die Proxy-Authentifizierung reibungslos für Systemanfragen funktionieren zu lassen, unterstützt Firefox seit Version 57 hierfür eine Ausnahme.

Wenn eine Erweiterung die Berechtigungen „webRequest“, „webRequestBlocking“, „proxy“ und „<all_urls>“ hat, kann sie `onAuthRequired` verwenden, um Anmeldeinformationen für die Proxy-Authentifizierung bereitzustellen (jedoch nicht für normale Web-Authentifizierung). Der Listener kann keine Systemanfragen abbrechen oder andere Änderungen an Systemanfragen vornehmen.

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
  - : Stoppt das Abhören dieses Ereignisses. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, falls er zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `details`
      - : `object`. Details zur Anfrage. Siehe den Abschnitt [Details](#details) für weitere Informationen.
    - `asyncCallback` {{optional_inline}}
      - : Eine Funktion, die höchstens einmal aufgerufen wird, um das Anfrageobjekt asynchron zu ändern.
        Dieser Parameter ist nur vorhanden, wenn der Event-Listener mit `"asyncBlocking"` im `extraInfoSpec`-Array registriert wurde. `asyncCallback` ist undefiniert, wenn `extraInfoSpec` nicht bereitgestellt wird oder `"blocking"` enthält.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}} oder ein {{jsxref("Promise")}}, abhängig von den Einstellungen in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die an diesen Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}
  - : `array` aus `string`. Zusätzliche Optionen für das Ereignis. Sie können einen dieser Werte übergeben:
    - `"blocking"`: Lässt die Anfrage blockieren, sodass Sie die Anfrage abbrechen oder Authentifizierungsdaten bereitstellen können. Geben Sie ein `BlockingResponse`-Objekt zurück, dessen `cancel`- oder `authCredentials`-Eigenschaften gesetzt sind.
      - In Chrome muss der Event-Listener synchron antworten.
      - In Firefox kann der Event-Listener synchron antworten oder ein Promise zurückgeben, das sich zu einem `BlockingResponse`-Objekt auflöst, um asynchron zu antworten.

    - `"asyncBlocking"`: Bearbeiten Sie die Anfrage asynchron. Der Rückgabewert des Event-Listeners wird ignoriert. Um das Ereignis zu lösen, geben Sie dem `asyncCallback`-Parameter ein `BlockingResponse`-Objekt.
      - Unterstützt ab Chrome 120 und Firefox 128.
      - Nicht unterstützt in Safari.

## Zusätzliche Objekte

### Details

- `challenger`
  - : `object`. Der Server, der die Authentifizierung anfordert. Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `host`
      - : `string`. Der [Hostname](https://en.wikipedia.org/wiki/Hostname#Internet_hostnames) des Servers.
    - `port`
      - : `integer`. Die Portnummer des Servers.
- `documentId` {{optional_inline}}
  - : `string`. Die UUID des Dokuments, das die Anfrage stellt.
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.
- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer kontextuellen Identität stammt, die Speicher-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `frameId`
  - : `integer`. Dies ist `0`, wenn die Anfrage im Hauptframe auftritt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage geschieht. Wenn das Dokument eines (Unter)rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Rahmen-IDs sind innerhalb eines Tabs eindeutig.
- `frameType`
  - : `string`. Der Typ des Rahmens, in dem die Anfrage auftrat. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"` zurück.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `isProxy`
  - : `boolean`. `true` für `Proxy-Authenticate`, `false` für `WWW-Authenticate`.
    > [!NOTE]
    > `webRequest.onAuthRequired` wird nur für HTTP- und HTTPS/TLS-Proxy-Server aufgerufen, die eine Authentifizierung erfordern, nicht für SOCKS-Proxy-Server, die eine Authentifizierung verlangen.
- `method`
  - : `string`. Standardmäßige HTTP-Methode (z.B. `"GET"` oder `"POST"`).
- `parentDocumentId`{{optional_inline}}
  - : `string`. Eine UUID des übergeordneten Dokuments, das den Rahmen besitzt. Nicht gesetzt, wenn kein übergeordnetes Dokument existiert.
- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Auf `-1` gesetzt, falls kein übergeordneter Rahmen existiert.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy weitergeleitet wird. Sie enthält die folgenden Eigenschaften:
    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`
      - : `string`. Der Typ des Proxy-Servers. Einer von:
        - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - `"https"`: HTTP-Proxying über TLS-Verbindung zum Proxy
        - `"socks"`: SOCKS v5 Proxy
        - `"socks4"`: SOCKS v4 Proxy
        - `"direct"`: kein Proxy
        - `"unknown"`: unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxydienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Namensauflösung auf Basis des angegebenen Hostnamens durchführt, was bedeutet, dass der Client keine eigene DNS-Auflösung durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Ausfallzeit in Sekunden. Falls die Verbindung zum Proxy-Server nach dieser Anzahl von Sekunden fehlschlägt, wird der nächste Proxy-Server im Array von [FindProxyForURL()](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) verwendet.

- `realm` {{optional_inline}}
  - : `string`. Der vom Server bereitgestellte Authentifizierungs-[Bereich](https://datatracker.ietf.org/doc/html/rfc1945#section-11), falls vorhanden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anforderungs-IDs sind innerhalb einer Browsersession eindeutig, sodass Sie verschiedene Ereignisse, die mit derselben Anfrage verbunden sind, in Beziehung setzen können.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die mit dieser Antwort empfangen wurden.
- `scheme`
  - : `string`. Das Authentifizierungsschema: `"basic"` oder `"digest"`.
- `statusCode`
  - : `integer`. Standardmäßiger HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort, die `'HTTP/0.9 200 OK'`-Zeichenfolge für HTTP/0.9-Antworten (d.h. Antworten ohne Statuszeile), oder eine leere Zeichenfolge, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage erfolgt. Auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab in Verbindung steht.
- `thirdParty`
  - : `boolean`. Zeigt an, ob die Anfrage und ihre Inhaltsfensterhierarchie von Dritten stammen.
- `timeStamp`
  - : `number`. Der Zeitpunkt, an dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: z.B. `"image"`, `"script"` oder `"stylesheet"`.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Der Typ der Verfolgung, die mit der Anfrage verbunden ist, falls die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifikationskennzeichen für die erste Partei der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationskennzeichen für die Anfrage oder die Drittparteien ihrer Fensterhierarchie.

    Die Klassifikationskennzeichen umfassen:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage an der Fingerprinting beteiligt ist („ein Ursprung, der zum Fingerprinting gefunden wurde“).
      - `fingerprinting` zeigt an, dass die Domain in der Fingerprinting- und Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Fingerprinting-Kategorie, aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer für Anti-Betrugs-Zwecke zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, jedoch für Cryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage an der Verfolgung beteiligt ist. `tracking` ist eine generische Tracking-Anfrage. Die `ad`, `analytics`, `social` und `content` Suffixe identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage an der Verfolgung von E-Mails beteiligt ist.
    - `any_basic_tracking`: ein Meta-Kennzeichen, das Tracking- und Fingerprinting-Kennzeichen kombiniert, ohne `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Kennzeichen, das alle Tracking- und Fingerprinting-Kennzeichen kombiniert.
    - `any_social_tracking`: ein Meta-Kennzeichen, das alle sozialen Tracking-Kennzeichen kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der Webseite von [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers). Das `content`-Suffix kennzeichnet Tracker, die Inhalte verfolgen und bereitstellen. Deren Sperrung schützt Nutzer, kann jedoch dazu führen, dass Websites nicht mehr funktionieren oder Elemente nicht mehr angezeigt werden.

## Beispiele

Dieser Code beobachtet Authentifizierungsanforderungen für die Ziel-URL:

```js
const target = "https://intranet.company.com/";

function observe(requestDetails) {
  console.log(`observing: ${requestDetails.requestId}`);
}

browser.webRequest.onAuthRequired.addListener(observe, { urls: [target] });
```

Dieser Code bricht Authentifizierungsanforderungen für die Ziel-URL ab:

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

Dieser Code liefert Anmeldeinformationen synchron. Er verfolgt ausstehende Anfragen, um sicherzustellen, dass nicht wiederholt versucht wird, schlechte Anmeldeinformationen einzureichen:

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

Dieser Code liefert Anmeldeinformationen asynchron, indem er sie aus dem Speicher abruft. Er verfolgt ebenfalls ausstehende Anfragen, um sicherzustellen, dass nicht wiederholt versucht wird, schlechte Anmeldeinformationen einzureichen:

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
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onAuthRequired) API. Diese Dokumentation ist aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code abgeleitet.

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
