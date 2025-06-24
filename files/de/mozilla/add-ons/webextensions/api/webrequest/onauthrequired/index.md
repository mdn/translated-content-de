---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Server einen `401` oder `407` Statuscode und einen `WWW-Authenticate` Header mit dem `Basic` Schema sendet (also, wenn der Server den Client auffordert, Authentifizierungsdaten wie Benutzername und Passwort bereitzustellen).

Der Listener kann auf vier Arten reagieren:

- Keine Aktion ausführen
  - : Der Listener kann nichts tun und nur die Anfrage beobachten. Dies beeinflusst die Handhabung der Anfrage nicht, und der Browser fordert den Benutzer gegebenenfalls zur Anmeldung auf.
- Anfrage abbrechen

  - : Der Listener kann die Anfrage abbrechen. Dadurch schlägt die Authentifizierung fehl und der Benutzer wird nicht zur Anmeldung aufgefordert. Erweiterungen können Anfragen wie folgt abbrechen:
    - in addListener, `"blocking"` im `extraInfoSpec` Parameter übergeben
    - im Listener ein Objekt mit einer `cancel`-Eigenschaft zurückgeben, die auf `true` gesetzt ist

- Anmeldedaten synchron bereitstellen

  - : Wenn Anmeldedaten synchron verfügbar sind, kann die Erweiterung sie synchron bereitstellen. In diesem Fall versucht der Browser, sich mit den Anmeldedaten anzumelden. Der Listener kann Anmeldedaten wie folgt synchron bereitstellen:
    - in addListener, `"blocking"` im `extraInfoSpec` Parameter übergeben
    - im Listener ein Objekt mit einer `authCredentials`-Eigenschaft zurückgeben, die auf die bereitzustellenden Anmeldedaten gesetzt ist

- Anmeldedaten asynchron bereitstellen

  - : Die Erweiterung muss möglicherweise Anmeldedaten asynchron abrufen. Beispielsweise könnte die Erweiterung Anmeldedaten aus einem Speicher abrufen oder den Benutzer fragen müssen. In diesem Fall kann der Listener Anmeldedaten wie folgt asynchron bereitstellen:

    - in addListener, `"asyncBlocking"` in Chrome und Firefox oder `"blocking"` in Firefox im `extraInfoSpec` Parameter übergeben
    - Wenn `"blocking"` bereitgestellt wird, kann die Erweiterung ein `webRequest.BlockingResponse` Objekt oder ein Promise, das ein `webRequest.BlockingResponse` Objekt auflöst, zurückgeben
    - Wenn `"asyncBlocking"` bereitgestellt wird, erhält die Ereignis-Listener-Funktion eine `asyncCallback` Funktion als zweiten Parameter. `asyncCallback` kann asynchron aufgerufen werden und nimmt ein `webRequest.BlockingResponse` Objekt als einzigen Parameter

      > [!NOTE]
      > Chrome unterstützt kein Promise als Rückgabewert ([Chromium issue 1510405](https://crbug.com/1510405)). Für Alternativen siehe [den Rückgabewert des `listeners`](#listener).

Siehe [Beispiele](#beispiele).

Wenn Ihre Erweiterung falsche Anmeldedaten bereitstellt, wird der Listener erneut aufgerufen. Aus diesem Grund sollten Sie darauf achten, eine Endlosschleife durch wiederholtes Bereitstellen falscher Anmeldedaten zu vermeiden.

## Berechtigungen

In Firefox- und Chrome Manifest V2-Erweiterungen müssen Sie die [API-Berechtigungen `"webRequest"` und `"webRequestBlocking"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) zu Ihrer `manifest.json` hinzufügen.

Für Manifest V3-Erweiterungen unterstützt Chrome die Berechtigung `"webRequestBlocking"` nicht mehr (außer für von der Richtlinie installierte Erweiterungen). Stattdessen ermöglichen die Berechtigungen `"webRequest"` und `"webRequestAuthProvider"` das asynchrone Bereitstellen von Anmeldedaten. Firefox unterstützt weiterhin `"webRequestBlocking"` in Manifest V3 und bietet `"webRequestAuthProvider"` für eine plattformübergreifende Kompatibilität.

## Proxy-Authentifizierung

Firefox löst im Allgemeinen keine `webRequest`-Ereignisse für Systemanfragen aus, wie z.B. Browser- oder Erweiterungsupgrades oder Suchmaschinenanfragen. Um die Proxy-Authentifizierung reibungslos für Systemanfragen zu ermöglichen, unterstützt Firefox ab Version 57 eine Ausnahme hierfür.

Wenn eine Erweiterung die Berechtigungen `"webRequest"`, `"webRequestBlocking"`, `"proxy"` und `"<all_urls>"` hat, kann sie `onAuthRequired` verwenden, um Anmeldedaten für die Proxy-Authentifizierung bereitzustellen (jedoch nicht für die normale Web-Authentifizierung). Der Listener kann Systemanfragen nicht abbrechen oder andere Änderungen an Systemanfragen vornehmen.

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
  - : Stoppt das Abhören dieses Ereignisses. Das `listener` Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden folgende Argumente übergeben:

    - `details`
      - : `object`. Details zur Anfrage. Weitere Informationen finden Sie im [Details](#details)-Abschnitt.
    - `asyncCallback` {{optional_inline}}
      - : Eine Funktion, die maximal einmal aufgerufen werden kann, um das Anforderungsobjekt asynchron zu ändern.
        Dieser Parameter ist nur vorhanden, wenn der Ereignis-Listener mit `"asyncBlocking"` im `extraInfoSpec` Array registriert ist. `asyncCallback` ist undefiniert, wenn `extraInfoSpec` nicht bereitgestellt wird oder `"blocking"` enthält.

    Gibt zurück: {{WebExtAPIRef('webRequest.BlockingResponse')}} oder ein {{jsxref("Promise")}}, abhängig von den Einstellungen in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die an diesen Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}

  - : `array` of `string`. Zusätzliche Optionen für das Ereignis. Sie können diese Werte übergeben:

    - `"blocking"`: Die Anfrage blockieren, um die Anfrage abzubrechen oder Anmeldedaten bereitzustellen. Geben Sie ein `BlockingResponse` Objekt mit den Eigenschaften `cancel` oder `authCredentials` zurück.

      - In Chrome muss der Ereignis-Listener synchron reagieren.
      - In Firefox kann der Ereignis-Listener synchron reagieren oder ein Promise zurückgeben, das sich zu einem `BlockingResponse` Objekt auflöst, um asynchron zu reagieren.

    - `"asyncBlocking"`: Die Anfrage asynchron behandeln. Der Rückgabewert des Ereignis-Listeners wird ignoriert. Um das Ereignis aufzulösen, übergeben Sie dem `asyncCallback` Parameter ein `BlockingResponse` Objekt.
      - Unterstützt in Chrome ab Version 120 und in Firefox ab Version 128.
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
  - : `string`. Wenn die Anfrage von einem Tab stammt, der in einer Kontextidentität geöffnet wurde, die Cookie-Store-ID dieser Kontextidentität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `frameId`
  - : `integer`. Dies ist `0`, wenn die Anfrage im Hauptframe auftritt; Ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Frame-IDs sind einzigartig innerhalb eines Tabs.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browsing-Fenster stammt.
- `isProxy`
  - : `boolean`. `true` für `Proxy-Authenticate`, `false` für `WWW-Authenticate`.
    > [!NOTE] > `webRequest.onAuthRequired` wird nur aufgerufen für Proxy-Server über HTTP und HTTPS/TLS, die eine Authentifizierung erfordern, nicht jedoch für SOCKS-Proxy-Server, die eine Authentifizierung benötigen.
- `method`
  - : `string`. Standard-HTTP-Methode (z. B. `"GET"` oder `"POST"`).
- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Wird auf `-1` gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`

  - : `object`. Dieses Attribut ist nur vorhanden, wenn die Anfrage über einen Proxy erfolgt. Es enthält die folgenden Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`

      - : `string`. Der Typ des Proxy-Servers. Eine von:
        - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - `"https"`: HTTP-Proxying über TLS-Verbindung zum Proxy
        - `"socks"`: SOCKS v5 Proxy
        - `"socks4"`: SOCKS v4 Proxy
        - `"direct"`: kein Proxy
        - `"unknown"`: unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die Domänennamenauflösung basierend auf dem bereitgestellten Hostnamen durchführt, d.h. der Client sollte keine eigene DNS-Abfrage durchführen.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Verbindung nach dieser Anzahl von Sekunden nicht zum Proxy-Server herstellen kann, wird der nächste Proxy-Server im Array verwendet, das von [FindProxyForURL()](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) zurückgegeben wird.

- `realm` {{optional_inline}}
  - : `string`. Der vom Server bereitgestellte Authentifizierungs[realm](https://datatracker.ietf.org/doc/html/rfc1945#section-11), falls vorhanden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung einzigartig, sodass Sie verschiedene Ereignisse miteinander in Beziehung setzen können, die mit derselben Anfrage in Zusammenhang stehen.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die mit dieser Antwort empfangen wurden.
- `scheme`
  - : `string`. Das Authentifizierungsschema: `"basic"` oder `"digest"`.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, den der Server zurückgegeben hat.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort, die `'HTTP/0.9 200 OK'` Zeichenfolge für HTTP/0.9 Antworten (d.h. Antworten, die keine Statuszeile enthalten) oder eine leere Zeichenfolge, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage erfolgt. Wird auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab in Zusammenhang steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob es sich bei der Anfrage und ihrer Inhaltsfensterhierarchie um eine Drittanbieteranforderung handelt.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: z. B. `"image"`, `"script"` oder `"stylesheet"`.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Der Typ der mit der Anfrage verbundenen Verfolgung, falls die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wurde. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `string`. Klassifikationsflags für die Erstanbieteranfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflags für die Drittpartneranfrage oder ihre Fensterhierarchie.

    Die Klassifikationsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: gibt an, dass die Anfrage am Fingerprinting beteiligt ist („ein Ursprung, der als Fingerprinting erkannt wurde“).
      - `fingerprinting` zeigt an, dass die Domain in der Fingerprinting- und Tracking-Kategorie ist. Beispiele für solche Domains sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen wollen.
      - `fingerprinting_content` zeigt an, dass die Domain in der Fingerprinting-Kategorie ist, jedoch nicht in der Tracking-Kategorie. Beispiele für solche Domains sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer aus Betrugspräventionsgründen zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, jedoch für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: gibt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede generische Tracking-Anfrage. Die Suffixe `ad`, `analytics`, `social` und `content` identifizieren den Typ der Nachverfolgung.
    - `emailtracking` und `emailtracking_content`: gibt an, dass die Anfrage am E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content`-Suffix zeigt Tracker an, die Inhalte nachverfolgen und bereitstellen. Das Blockieren dieser Tracker schützt die Nutzer, kann jedoch dazu führen, dass Websites nicht korrekt funktionieren oder Elemente nicht angezeigt werden.

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

Dieser Code stellt Anmeldedaten synchron bereit. Es wird darauf geachtet, keine schlechten Anmeldedaten wiederholt zu senden, indem ausstehende Anfragen verfolgt werden:

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

Dieser Code stellt Anmeldedaten asynchron bereit, indem er sie aus dem Speicher abruft. Auch hierbei wird darauf geachtet, keine schlechten Anmeldedaten wiederholt zu senden, indem ausstehende Anfragen verfolgt werden:

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
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onAuthRequired) API. Diese Dokumentation stammt von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
