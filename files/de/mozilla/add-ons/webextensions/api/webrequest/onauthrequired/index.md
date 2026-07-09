---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Wird ausgelöst, wenn der Server einen `401`- oder `407`-Statuscode und einen `WWW-Authenticate`-Header mit dem `Basic`-Schema sendet (d.h. wenn der Server den Client auffordert, Authentifizierungsdaten bereitzustellen, wie z. B. einen Benutzernamen und ein Passwort).

Der Listener kann auf eine von vier Arten reagieren:

- Keine Aktion durchführen
  - : Der Listener kann nichts tun und lediglich die Anfrage beobachten. Wenn dies geschieht, hat es keinen Einfluss auf die Bearbeitung der Anfrage und der Browser fordert den Nutzer ggf. auf, sich anzumelden.
- Die Anfrage abbrechen
  - : Der Listener kann die Anfrage abbrechen. Wenn er dies tut, schlägt die Authentifizierung fehl und der Nutzer wird nicht zur Anmeldung aufgefordert. Erweiterungen können Anfragen wie folgt abbrechen:
    - In `addListener` den Parameter `"blocking"` in `extraInfoSpec` übergeben
    - Im Listener ein Objekt mit einer `cancel`-Eigenschaft zurückgeben, die auf `true` gesetzt ist

- Anmeldedaten synchron bereitstellen
  - : Wenn Anmeldedaten synchron verfügbar sind, kann die Erweiterung diese synchron bereitstellen. Wenn die Erweiterung dies tut, versucht der Browser, sich mit den Anmeldedaten anzumelden. Der Listener kann Anmeldedaten wie folgt synchron bereitstellen:
    - In `addListener` den Parameter `"blocking"` in `extraInfoSpec` übergeben
    - Im Listener ein Objekt zurückgeben, bei dem die `authCredentials`-Eigenschaft auf die anzubietenden Anmeldedaten gesetzt ist

- Anmeldedaten asynchron bereitstellen
  - : Die Erweiterung muss möglicherweise Anmeldedaten asynchron abrufen. Beispielsweise muss die Erweiterung möglicherweise Anmeldedaten aus dem Speicher abrufen oder den Nutzer fragen. In diesem Fall kann der Listener Anmeldedaten wie folgt asynchron bereitstellen:
    - In `addListener` den Parameter `"asyncBlocking"` in Chrome und Firefox oder `"blocking"` in Firefox in `extraInfoSpec` übergeben
    - Wenn `"blocking"` bereitgestellt wird, kann die Erweiterung ein `webRequest.BlockingResponse`-Objekt oder ein Promise zurückgeben, das zu einem `webRequest.BlockingResponse`-Objekt aufgelöst wird
    - Wenn `"asyncBlocking"` bereitgestellt wird, erhält die Event-Listener-Funktion eine `asyncCallback`-Funktion als zweiten Parameter. `asyncCallback` kann asynchron aufgerufen werden und nimmt ein `webRequest.BlockingResponse`-Objekt als einzigen Parameter entgegen

      > [!NOTE]
      > Chrome unterstützt kein Promise als Rückgabewert ([Chromium Issue 1510405](https://crbug.com/1510405)). Für Alternativen siehe [den Rückgabewert des `listener`](#listener).

Siehe [Beispiele](#beispiele).

Wenn Ihre Erweiterung falsche Anmeldedaten bereitstellt, wird der Listener erneut aufgerufen. Seien Sie daher vorsichtig, um eine unendliche Schleife zu vermeiden, indem Sie wiederholt falsche Anmeldedaten bereitstellen.

## Berechtigungen

In Firefox- und Chrome Manifest V2-Erweiterungen müssen Sie die [`"webRequest"` und `"webRequestBlocking"` API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) zu Ihrer `manifest.json` hinzufügen.

Für Manifest V3-Erweiterungen unterstützt Chrome die Berechtigung `"webRequestBlocking"` nicht mehr (außer für Richtlinien-installierte Erweiterungen). Stattdessen ermöglichen die Berechtigungen `"webRequest"` und `"webRequestAuthProvider"` die asynchrone Bereitstellung von Anmeldedaten. Firefox unterstützt weiterhin `"webRequestBlocking"` in Manifest V3 und bietet `"webRequestAuthProvider"` für plattformübergreifende Kompatibilität.

## Proxy-Authentifizierung

Firefox löst im Allgemeinen keine `webRequest`-Ereignisse für Systemanforderungen aus, wie z. B. Browser- oder Erweiterungsupgrades oder Suchmaschinenabfragen. Um die Proxy-Authentifizierung für Systemanforderungen nahtlos zu ermöglichen, unterstützt Firefox ab Version 57 eine Ausnahme dazu.

Wenn eine Erweiterung die Berechtigungen `"webRequest"`, `"webRequestBlocking"`, `"proxy"` und `"<all_urls>"` hat, kann sie `onAuthRequired` verwenden, um Anmeldedaten für die Proxy-Authentifizierung bereitzustellen (aber nicht für normale Web-Authentifizierung). Der Listener kann keine Systemanforderungen abbrechen oder andere Änderungen an Systemanforderungen vornehmen.

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
  - : Beendet das Hören auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, ansonsten `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `details`
      - : `object`. Details zu der Anfrage. Siehe den [details](#details) Abschnitt für weitere Informationen.
    - `asyncCallback` {{optional_inline}}
      - : Eine Funktion, die höchstens einmal aufgerufen wird, um das Anfrageobjekt asynchron zu ändern. Dieser Parameter ist nur vorhanden, wenn der Event-Listener mit `"asyncBlocking"` im `extraInfoSpec`-Array registriert ist. `asyncCallback` ist undefiniert, wenn `extraInfoSpec` nicht bereitgestellt wird oder `"blocking"` enthält.

    Rückgabewert: {{WebExtAPIRef('webRequest.BlockingResponse')}} oder ein {{jsxref("Promise")}}, abhängig von den Einstellungen in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die an diesen Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:
    - `"blocking"`: macht die Anfrage blockierend, sodass Sie die Anfrage abbrechen oder Authentifizierungsdaten bereitstellen können. Geben Sie ein `BlockingResponse`-Objekt zurück, dessen `cancel`- oder `authCredentials`-Eigenschaften festgelegt sind.
      - In Chrome muss der Event-Listener synchron reagieren.
      - In Firefox kann der Event-Listener synchron reagieren oder ein Promise zurückgeben, das sich zu einem `BlockingResponse`-Objekt asynchron auflöst.

    - `"asyncBlocking"`: behandelt die Anfrage asynchron. Der Rückgabewert des Event-Listeners wird ignoriert. Um das Ereignis zu lösen, geben Sie dem `asyncCallback`-Parameter ein `BlockingResponse`-Objekt.
      - Unterstützt ab Chrome 120 und Firefox 128.
      - Nicht in Safari unterstützt.

## Zusätzliche Objekte

### details

- `challenger`
  - : `object`. Der Server, der die Authentifizierung anfordert. Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `host`
      - : `string`. Der [Hostname](https://en.wikipedia.org/wiki/Hostname#Internet_hostnames) des Servers.
    - `port`
      - : `integer`. Die Portnummer des Servers.
- `documentId` {{optional_inline}}
  - : `string`. Die UUID des Dokuments, das die Anfrage stellt. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.
- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer kontextuellen Identität stammt, die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie im Artikel [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `frameId`
  - : `integer`. Dies ist `0`, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `frameType`
  - : `string`. Der Typ des Frames, in dem die Anfrage aufgetreten ist. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"` zurück.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browsing-Fenster stammt.
- `isProxy`
  - : `boolean`. `true` bei `Proxy-Authenticate`, `false` bei `WWW-Authenticate`.
    > [!NOTE]
    > `webRequest.onAuthRequired` wird nur für HTTP- und HTTPS/TLS-Proxy-Server aufgerufen, die eine Authentifizierung erfordern, nicht für SOCKS-Proxy-Server, die eine Authentifizierung erfordern.
- `method`
  - : `string`. Standard-HTTP-Methode (z. B. `"GET"` oder `"POST"`).
- `parentDocumentId` {{optional_inline}}
  - : `string`. Eine UUID des übergeordneten Dokuments, das den Frame besitzt. Wird nicht festgelegt, wenn es kein übergeordnetes Element gibt. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf `-1` gesetzt, wenn kein übergeordneter Frame vorhanden ist.
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
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die Namensauflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Time-out in Sekunden. Wenn die Verbindung innerhalb dieser Anzahl von Sekunden nicht mit dem Proxy-Server verbunden werden kann, wird der nächste Proxy-Server im Array aus [FindProxyForURL()](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) verwendet.

- `realm` {{optional_inline}}
  - : `string`. Der vom Server bereitgestellte Authentifizierungs-[Realm](https://datatracker.ietf.org/doc/html/rfc1945#section-11), falls vorhanden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie verschiedene Ereignisse, die mit derselben Anfrage verbunden sind, in Beziehung setzen können.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die mit dieser Antwort empfangen wurden.
- `scheme`
  - : `string`. Das Authentifizierungs-Schema: `"basic"` oder `"digest"`.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort, die Zeichenfolge `'HTTP/0.9 200 OK'` für HTTP/0.9-Antworten (d.h. Antworten, denen eine Statuszeile fehlt), oder ein leerer String, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab in Verbindung steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob es sich bei der Anfrage und ihrer Inhaltshierarchie um Dritte handelt.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: beispielsweise `"image"`, `"script"` oder `"stylesheet"`.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Die Art des Trackings, das mit der Anfrage verbunden ist, falls die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifizierungsflags für die First-Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifizierungsflags für die Dritten der Anfrage oder ihrer Inhaltshierarchie.

    Die Klassifizierungsflags umfassen:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage in Fingerprinting involviert ist ("ein Ursprung, der zum Fingerprinting gefunden wurde").
      - `fingerprinting` zeigt an, dass die Domain in die Kategorie Fingerprinting und Tracking fällt. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Nutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in die Kategorie Fingerprinting fällt, aber nicht in die Kategorie Tracking. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Nutzer zu Identifikationszwecken für Betrugsbekämpfung zu erkennen.
    - `cryptomining` und `cryptomining_content`: ähnlich der Kategorie Fingerprinting, jedoch für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede allgemeine Tracking-Anfrage. Die Suffixe `ad`, `analytics`, `social` und `content` identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage am E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: ein meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der Webseite von [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers). Das `content`-Suffix zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Ihr Blockieren schützt Nutzer, kann jedoch dazu führen, dass Websites nicht mehr funktionieren oder Elemente nicht angezeigt werden.

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

Dieser Code stellt Anmeldedaten synchron bereit. Er verfolgt ausstehende Anfragen, um sicherzustellen, dass er nicht wiederholt versucht, falsche Anmeldedaten zu übermitteln:

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

Dieser Code stellt Anmeldedaten asynchron bereit, indem er sie aus dem Speicher abruft. Er verfolgt auch ausstehende Anfragen, um sicherzustellen, dass er nicht wiederholt versucht, falsche Anmeldedaten zu übermitteln:

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
> Diese API basiert auf der `chrome.webRequest` API von Chromium. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
