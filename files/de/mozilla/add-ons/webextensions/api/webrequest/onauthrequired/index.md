---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Server einen `401`- oder `407`-Statuscode und einen `WWW-Authenticate`-Header mit dem `Basic`-Schema sendet (d. h., wenn der Server den Client auffordert, Authentifizierungsdaten wie einen Benutzernamen und ein Passwort bereitzustellen).

Der Listener kann auf eine der folgenden vier Arten reagieren:

- Keine Aktion durchführen
  - : Der Listener kann nichts tun, sondern nur die Anfrage beobachten. Wenn dies geschieht, hat es keinen Einfluss auf die Bearbeitung der Anfrage, und der Browser fordert den Benutzer auf, sich anzumelden, falls zutreffend.
- Die Anfrage abbrechen

  - : Der Listener kann die Anfrage abbrechen. Wenn er dies tut, schlägt die Authentifizierung fehl, und der Benutzer wird nicht zur Anmeldung aufgefordert. Erweiterungen können Anfragen wie folgt abbrechen:

    - In addListener `"blocking"` im Parameter `extraInfoSpec` übergeben
    - Im Listener ein Objekt mit einer `cancel`-Eigenschaft zurückgeben, die auf `true` gesetzt ist

- Anmeldedaten synchron bereitstellen

  - : Wenn Anmeldedaten synchron verfügbar sind, kann die Erweiterung sie synchron bereitstellen. Wenn die Erweiterung dies tut, versucht der Browser, sich mit den Anmeldedaten anzumelden. Der Listener kann Anmeldedaten wie folgt synchron bereitstellen:

    - In addListener `"blocking"` im Parameter `extraInfoSpec` übergeben
    - Im Listener ein Objekt mit einer `authCredentials`-Eigenschaft zurückgeben, die auf die bereitzustellenden Anmeldedaten gesetzt ist

- Anmeldedaten asynchron bereitstellen

  - : Die Erweiterung muss möglicherweise Anmeldedaten asynchron abrufen. Zum Beispiel muss die Erweiterung vielleicht Anmeldedaten aus dem Speicher abrufen oder den Benutzer fragen. In diesem Fall kann der Listener Anmeldedaten wie folgt asynchron bereitstellen:

    - In addListener `"asyncBlocking"` in Chrome und Firefox oder `"blocking"` in Firefox im Parameter `extraInfoSpec` übergeben
    - Wenn `"blocking"` bereitgestellt wird, kann die Erweiterung ein `webRequest.BlockingResponse`-Objekt oder ein Promise zurückgeben, das zu einem `webRequest.BlockingResponse`-Objekt aufgelöst wird
    - Wenn `"asyncBlocking"` bereitgestellt wird, erhält die Ereignis-Listener-Funktion eine `asyncCallback`-Funktion als zweiten Parameter. `asyncCallback` kann asynchron aufgerufen werden und erfordert ein `webRequest.BlockingResponse`-Objekt als einzigen Parameter

      > [!NOTE]
      > Chrome unterstützt kein Promise als Rückgabewert ([Chromium Problem 1510405](https://crbug.com/1510405)). Siehe für Alternativen [den Rückgabewert des `listeners`](#listener).

Siehe [Beispiele](#beispiele).

Wenn Ihre Erweiterung falsche Anmeldedaten bereitstellt, wird der Listener erneut aufgerufen. Aus diesem Grund achten Sie darauf, keine Endlosschleife zu erzeugen, indem Sie wiederholt falsche Anmeldedaten bereitstellen.

## Berechtigungen

In Firefox- und Chrome-Erweiterungen des Manifest V2 müssen Sie die [API-Berechtigungen `"webRequest"` und `"webRequestBlocking"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) zu Ihrer `manifest.json` hinzufügen.

Für Manifest V3-Erweiterungen unterstützt Chrome die Berechtigung `"webRequestBlocking"` nicht mehr (außer für politisch installierte Erweiterungen). Stattdessen ermöglichen die Berechtigungen `"webRequest"` und `"webRequestAuthProvider"` Ihnen, Anmeldedaten asynchron bereitzustellen. Firefox unterstützt weiterhin `"webRequestBlocking"` in Manifest V3 und bietet `"webRequestAuthProvider"` für plattformübergreifende Kompatibilität.

## Proxy-Authentifizierung

Firefox löst im Allgemeinen keine `webRequest`-Ereignisse für Systemanfragen aus, wie z. B. Browser- oder Erweiterungs-Upgrades oder Suchanfragen. Um die Proxy-Authentifizierung für Systemanfragen reibungslos zu ermöglichen, unterstützt Firefox ab Version 57 eine Ausnahme.

Wenn eine Erweiterung die Berechtigungen `"webRequest"`, `"webRequestBlocking"`, `"proxy"` und `"<all_urls>"` hat, kann sie `onAuthRequired` verwenden, um Anmeldedaten für die Proxy-Authentifizierung bereitzustellen (aber nicht für die normale Web-Authentifizierung). Der Listener kann Systemanfragen nicht abbrechen oder anderweitig modifizieren.

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
  - : Stoppt das Zuhören auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden diese Argumente übergeben:

    - `details`
      - : `object`. Details zur Anfrage. Siehe den [Abschnitt Details](#details_2) für mehr Informationen.
    - `asyncCallback` {{optional_inline}}

      - : Eine Funktion, die höchstens einmal aufgerufen wird, um das Anfrage-Objekt asynchron zu modifizieren.
        Dieses Parameter ist nur vorhanden, wenn der Ereignis-Listener mit `"asyncBlocking"` im Array `extraInfoSpec` registriert ist. `asyncCallback` ist undefiniert, wenn `extraInfoSpec` nicht bereitgestellt wird oder `"blocking"` enthält.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}} oder ein {{jsxref("Promise")}} abhängig von den Einstellungen in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die an diesen Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:

    - `"blocking"`: die Anfrage blockieren, um sie abbrechen oder Authentifizierungsdaten bereitstellen zu können. Ein `BlockingResponse`-Objekt mit gesetzten `cancel`- oder `authCredentials`-Eigenschaften zurückgeben.

      - In Chrome muss der Ereignis-Listener synchron antworten.
      - In Firefox kann der Ereignis-Listener synchron antworten oder ein Promise zurückgeben, das zu einem `BlockingResponse`-Objekt aufgelöst wird, um asynchron zu antworten.

    - `"asyncBlocking"`: die Anfrage asynchron verarbeiten. Der Rückgabewert des Ereignis-Listeners wird ignoriert. Um das Ereignis zu lösen, übergeben Sie dem `asyncCallback`-Parameter ein `BlockingResponse`-Objekt.

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
  - : `string`. Wenn die Anfrage von einem Tab stammt, das in einer kontextuellen Identität geöffnet ist, die Cookie-Store-ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `frameId`
  - : `integer`. Dies ist `0`, wenn die Anfrage im Hauptframe stattfindet; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage stattfindet. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens, nicht die ID des äußeren Rahmens. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Gibt an, ob die Anfrage aus einem privaten Browserfenster stammt.
- `isProxy`
  - : `boolean`. `true` für `Proxy-Authenticate`, `false` für `WWW-Authenticate`.
    > **Hinweis:** `webRequest.onAuthRequired` wird nur für HTTP- und HTTPS/TLS-Proxy-Server aufgerufen, die Authentifizierung erfordern, nicht für SOCKS-Proxy-Server, die Authentifizierung erfordern.
- `method`
  - : `string`. Standard-HTTP-Methode (z. B. `"GET"` oder `"POST"`).
- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Auf `-1` gesetzt, wenn kein übergeordneter Rahmen vorhanden ist.
- `proxyInfo`

  - : `object`. Dieses Objekt ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Es enthält die folgenden Eigenschaften:

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
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Namensauflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Ausfallzeitlimit in Sekunden. Wenn die Verbindung zum Proxy-Server nach dieser Anzahl von Sekunden fehlschlägt, wird der nächste Proxy-Server in der durch [FindProxyForURL()](</de/docs/Mozilla/Add-ons/WebExtensions/API/proxy#findproxyforurl()_return_value>) zurückgegebenen Liste verwendet.

- `realm` {{optional_inline}}
  - : `string`. Das vom Server bereitgestellte Authentifizierungs-[Realm](https://datatracker.ietf.org/doc/html/rfc1945#section-11), falls vorhanden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie verschiedene Ereignisse, die mit derselben Anfrage verbunden sind, zuordnen können.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwort-Header, die mit dieser Antwort empfangen wurden.
- `scheme`
  - : `string`. Das Authentifizierungsschema: `"basic"` oder `"digest"`.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort, der `'HTTP/0.9 200 OK'`-String für HTTP/0.9-Antworten (d. h. Antworten, denen eine Statuszeile fehlt) oder ein leerer String, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage ausgeführt wird. Auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab verknüpft ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: z. B. `"image"`, `"script"` oder `"stylesheet"`.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art des Trackings, das mit der Anfrage verbunden ist, wenn die Anfrage durch den [Firefox-Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifikations-Flags für die First-Party der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifikations-Flags für die Drittanbieter der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifikations-Flags umfassen:

    - `fingerprinting` und `fingerprinting_content`: gibt an, dass die Anfrage in Fingerprinting verwickelt ist ("eine Quelle, die Fingerprinting betreibt").
      - `fingerprinting` gibt an, dass die Domäne in der Fingerprinting- und Tracking-Kategorie ist. Beispiele für diese Art von Domäne sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` gibt an, dass die Domäne in der Fingerprinting-Kategorie, aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domäne sind Zahlungsdienste, die Fingerprinting-Techniken zur Identifizierung des besuchenden Benutzers zu Betrugsbekämpfungszwecken verwenden.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, jedoch für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: gibt an, dass die Anfrage in Tracking involviert ist. `tracking` ist jede generische Tracking-Anfrage. Die Suffixe `ad`, `analytics`, `social` und `content` identifizieren den Typ des Trackers.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, jedoch `tracking_content` und `fingerprinting_content` ausschließt.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

## Beispiele

Dieser Code beobachtet Authentifizierungsanfragen für die Ziel-URL:

```js
const target = "https://intranet.company.com/";

function observe(requestDetails) {
  console.log(`beobachten: ${requestDetails.requestId}`);
}

browser.webRequest.onAuthRequired.addListener(observe, { urls: [target] });
```

Dieser Code bricht Authentifizierungsanfragen für die Ziel-URL ab:

```js
const target = "https://intranet.company.com/";

function cancel(requestDetails) {
  console.log(`abbrechen: ${requestDetails.requestId}`);
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

// Eine Anfrage ist abgeschlossen.
// Wir können aufhören, uns darum zu kümmern.
function completed(requestDetails) {
  console.log(`abgeschlossen: ${requestDetails.requestId}`);
  let index = pendingRequests.indexOf(requestDetails.requestId);
  if (index > -1) {
    pendingRequests.splice(index, 1);
  }
}

function provideCredentialsSync(requestDetails) {
  // Wenn wir diese Anfrage bereits gesehen haben,
  // dann gehen wir davon aus, dass unsere Anmeldedaten falsch waren,
  // und geben auf.
  if (pendingRequests.includes(requestDetails.requestId)) {
    console.log(`falsche Anmeldedaten für: ${requestDetails.requestId}`);
    return { cancel: true };
  }
  pendingRequests.push(requestDetails.requestId);
  console.log(`Anmeldedaten bereitstellen für: ${requestDetails.requestId}`);
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

Dieser Code liefert Anmeldedaten asynchron, indem er sie aus dem Speicher abruft. Er verfolgt auch ausstehende Anfragen, um sicherzustellen, dass er nicht wiederholt versucht, falsche Anmeldedaten zu übermitteln:

```js
const target = "https://httpbin.org/basic-auth/*";

const pendingRequests = [];

/*
 * Eine Anfrage ist abgeschlossen. Wir können aufhören, uns darum zu kümmern.
 */
function completed(requestDetails) {
  console.log(`abgeschlossen: ${requestDetails.requestId}`);
  let index = pendingRequests.indexOf(requestDetails.requestId);
  if (index > -1) {
    pendingRequests.splice(index, 1);
  }
}

function provideCredentialsAsync(requestDetails) {
  // Wenn wir diese Anfrage bereits gesehen haben,
  // dann gehen wir davon aus, dass unsere Anmeldedaten falsch waren,
  // und geben auf.
  if (pendingRequests.includes(requestDetails.requestId)) {
    console.log(`falsche Anmeldedaten für: ${requestDetails.requestId}`);
    return { cancel: true };
  } else {
    pendingRequests.push(requestDetails.requestId);
    console.log(`Anmeldedaten bereitstellen für: ${requestDetails.requestId}`);
    // wir können ein Promise zurückgeben, das mit den gespeicherten Anmeldedaten aufgelöst wird
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

## Browserkompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onAuthRequired)-API von Chromium. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
