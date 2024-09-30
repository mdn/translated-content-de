---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ausgelöst, wenn der Server einen `401`- oder `407`-Statuscode und einen `WWW-Authenticate`-Header mit dem `Basic`-Schema sendet (das heißt, wenn der Server den Client auffordert, Authentifizierungsdaten, wie etwa einen Benutzernamen und ein Passwort, bereitzustellen).

Der Listener kann auf eine von vier Arten reagieren:

- Keine Aktion durchführen
  - : Der Listener kann nichts machen, sondern nur die Anfrage beobachten. Wenn dies passiert, hat es keine Auswirkungen auf die Bearbeitung der Anfrage und der Browser fordert den Benutzer gegebenenfalls zur Anmeldung auf.
- Die Anfrage abbrechen

  - : Der Listener kann die Anfrage abbrechen. Wenn er dies tut, schlägt die Authentifizierung fehl und der Benutzer wird nicht zur Anmeldung aufgefordert. Erweiterungen können Anfragen auf folgende Weise abbrechen:

    - im `addListener`, den Wert `"blocking"` im Parameter `extraInfoSpec` übergeben
    - im Listener, ein Objekt mit einer `cancel`-Eigenschaft zurückgeben, die auf `true` gesetzt ist

- Anmeldedaten synchron bereitstellen

  - : Wenn Anmeldedaten synchron verfügbar sind, kann die Erweiterung sie synchron bereitstellen. Wenn die Erweiterung dies tut, versucht der Browser, sich mit den Anmeldedaten anzumelden. Der Listener kann Anmeldedaten synchron wie folgt bereitstellen:

    - im `addListener`, den Wert `"blocking"` im Parameter `extraInfoSpec` übergeben
    - im Listener, ein Objekt mit einer `authCredentials`-Eigenschaft zurückgeben, das die bereitzustellenden Anmeldedaten enthält

- Anmeldedaten asynchron bereitstellen

  - : Die Erweiterung könnte die Anmeldedaten asynchron abrufen müssen. Zum Beispiel könnte die Erweiterung Anmeldedaten aus einem Speicher abrufen oder den Benutzer fragen müssen. In diesem Fall kann der Listener Anmeldedaten asynchron wie folgt bereitstellen:

    - im `addListener`, den Wert `"asyncBlocking"` in Chrome und Firefox oder `"blocking"` in Firefox im Parameter `extraInfoSpec` übergeben
    - Wenn `"blocking"` bereitgestellt wird, kann die Erweiterung ein `webRequest.BlockingResponse`-Objekt oder ein Promise zurückgeben, das zu einem `webRequest.BlockingResponse`-Objekt aufgelöst wird
    - Wenn `"asyncBlocking"` bereitgestellt wird, erhält die Ereignis-Listener-Funktion eine `asyncCallback`-Funktion als zweiten Parameter. `asyncCallback` kann asynchron aufgerufen werden und nimmt ein `webRequest.BlockingResponse`-Objekt als einzigen Parameter

      > [!NOTE]
      > Chrome unterstützt kein Promise als Rückgabewert ([Chromium issue 1510405](https://crbug.com/1510405)). Für Alternativen siehe [der Rückgabewert des `listener`](#listener).

Siehe [Beispiele](#beispiele).

Wenn Ihre Erweiterung fehlerhafte Anmeldedaten bereitstellt, wird der Listener erneut aufgerufen. Aus diesem Grund sollten Sie darauf achten, keine Endlosschleife zu erzeugen, indem Sie wiederholt fehlerhafte Anmeldedaten bereitstellen.

## Berechtigungen

In Firefox- und Chrome-Manifest-V2-Erweiterungen müssen Sie die [`"webRequest"` und `"webRequestBlocking"` API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) zu Ihrer `manifest.json` hinzufügen.

Für Manifest-V3-Erweiterungen unterstützt Chrome die `"webRequestBlocking"`-Berechtigung nicht mehr (außer für durch Richtlinien installierte Erweiterungen). Stattdessen ermöglichen die `"webRequest"` und `"webRequestAuthProvider"` Berechtigungen, Anmeldedaten asynchron bereitzustellen. Firefox unterstützt weiterhin `"webRequestBlocking"` in Manifest V3 und bietet `"webRequestAuthProvider"` zur Bereitstellung von plattformübergreifender Kompatibilität an.

## Proxy-Authentifizierung

Firefox löst in der Regel keine `webRequest`-Ereignisse für Systemanforderungen aus, wie Browser- oder Erweiterungs-Updates oder Suchmaschinenabfragen. Um Proxy-Authentifizierung für Systemanforderungen reibungslos zu ermöglichen, unterstützt Firefox ab Version 57 eine Ausnahme hierfür.

Wenn eine Erweiterung die Berechtigungen `"webRequest"`, `"webRequestBlocking"`, `"proxy"` und `"<all_urls>"` hat, kann sie `onAuthRequired` verwenden, um Anmeldedaten für die Proxy-Authentifizierung bereitzustellen (aber nicht für die normale Web-Authentifizierung). Der Listener kann keine Systemanforderungen abbrechen oder sonstige Änderungen an Systemanforderungen vornehmen.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `details`
      - : `object`. Einzelheiten über die Anfrage. Weitere Informationen finden Sie im Abschnitt [details](#details_2).
    - `asyncCallback` {{optional_inline}}

      - : Eine Funktion, die höchstens einmal aufgerufen wird, um das Anforderungsobjekt asynchron zu ändern.
        Dieser Parameter ist nur vorhanden, wenn der Ereignis-Listener mit `"asyncBlocking"` im `extraInfoSpec`-Array registriert ist. `asyncCallback` ist undefiniert, wenn `extraInfoSpec` nicht bereitgestellt wird oder `"blocking"` enthält.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}} oder ein {{jsxref("Promise")}} abhängig von den Einstellungen in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die an diesen Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen dieser Werte übergeben:

    - `"blocking"`: macht die Anfrage blockierend, sodass Sie die Anfrage abbrechen oder Anmeldedaten bereitstellen können. Gibt ein `BlockingResponse`-Objekt mit seinen `cancel`- oder `authCredentials`-Eigenschaften zurück.

      - In Chrome muss der Ereignis-Listener synchron antworten.
      - In Firefox kann der Ereignis-Listener synchron antworten oder ein Promise zurückgeben, das sich zu einem `BlockingResponse`-Objekt auflöst, um asynchron zu reagieren.

    - `"asyncBlocking"`: bearbeitet die Anfrage asynchron. Der Rückgabewert des Ereignis-Listeners wird ignoriert. Um das Ereignis zu lösen, übergeben Sie dem `asyncCallback`-Parameter ein `BlockingResponse`-Objekt.

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
  - : `string`. Wenn die Anfrage von einem in einem kontextuellen Identitäts-Tab geöffneten Tab stammt, die Cookie-Speicher-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `frameId`
  - : `integer`. Dies ist `0`, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs einzigartig.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem Fenster im privaten Modus stammt.
- `isProxy`
  - : `boolean`. `true` für `Proxy-Authenticate`, `false` für `WWW-Authenticate`.
    > **Hinweis:** `webRequest.onAuthRequired` wird nur für HTTP- und HTTPS/TLS-Proxyserver aufgerufen, die eine Authentifizierung erfordern, nicht für SOCKS-Proxyserver, die eine Authentifizierung erfordern.
- `method`
  - : `string`. Standard-HTTP-Methode (zum Beispiel `"GET"` oder `"POST"`).
- `parentFrameId`
  - : `integer`. ID des Rahmens, das den Rahmen enthält, der die Anfrage gesendet hat. Auf `-1` gesetzt, wenn kein übergeordneter Rahmen vorhanden ist.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy erfolgt. Sie enthält die folgenden Eigenschaften:

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
      - : `boolean`. True, wenn der Proxy die DNS-Auflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Verbindung zum Proxy-Server nach dieser Anzahl von Sekunden nicht hergestellt werden kann, wird der nächste Proxy-Server im Array verwendet, das von [FindProxyForURL()](</de/docs/Mozilla/Add-ons/WebExtensions/API/proxy#findproxyforurl()_return_value>) zurückgegeben wird.

- `realm` {{optional_inline}}
  - : `string`. Der vom Server bereitgestellte Authentifizierungs- [Realm](https://datatracker.ietf.org/doc/html/rfc1945#section-11), falls vorhanden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersession einzigartig, sodass Sie verschiedene Ereignisse nachvollziehen können, die derselben Anfrage zugeordnet sind.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die mit dieser Antwort empfangen werden.
- `scheme`
  - : `string`. Das Authentifizierungsschema: `"basic"` oder `"digest`".
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort, die `'HTTP/0.9 200 OK'`-Zeichenfolge für HTTP/0.9-Antworten (d. h. Antworten, die keine Statuszeile haben) oder eine leere Zeichenfolge, wenn es keine Header gibt.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab in Zusammenhang steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Fensterhierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel `"image"`, `"script"` oder `"stylesheet"`.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Der Typ der Nachverfolgung, der mit der Anfrage verbunden ist, wenn die Anfrage durch [Firefox-Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wurde. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifizierungsflags für die Erstanbieterdomain der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifizierungsflags für die Anfrage oder die Drittanbieterdomains der Fensterhierarchie.

    Die Klassifizierungsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage in das Browser-Fingerprinting einbezogen wird ("eine Herkunft wurde als Fingerprinting identifiziert").
      - `fingerprinting` zeigt an, dass die Domain in der Fingerprinting- und Tracking-Kategorie ist. Beispiele für diesen Domaintyp sind Werbetreibende, die mit Fingerprinting-Techniken arbeiten, um einen Benutzer zu profilieren.
      - `fingerprinting_content` zeigt an, dass die Domain in der Fingerprinting-Kategorie, aber nicht in der Tracking-Kategorie ist. Beispiele für diesen Domaintyp sind Zahlungsanbieter, die Fingerprinting-Techniken zur Betrugsprävention einsetzen.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, aber für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage mit Tracking verbunden ist. `tracking` ist jede allgemeine Tracking-Anfrage. Die Suffixe `ad`, `analytics`, `social` und `content` kennzeichnen den Typ des Trackers.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

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

Dieser Code liefert Anmeldedaten synchron. Er verfolgt ausstehende Anfragen, um sicherzustellen, dass keine fehlerhaften Anmeldedaten wiederholt versucht werden bereitzustellen:

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

Dieser Code liefert Anmeldedaten asynchron, indem er sie aus dem Speicher abruft. Auch er verfolgt ausstehende Anfragen, um zu gewährleisten, dass keine fehlerhaften Anmeldedaten wiederholt versucht werden bereitzustellen:

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
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onAuthRequired) API von Chromium. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
