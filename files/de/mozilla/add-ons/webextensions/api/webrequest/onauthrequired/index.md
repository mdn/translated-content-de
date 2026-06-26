---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Wird ausgelöst, wenn der Server einen `401` oder `407` Statuscode und einen `WWW-Authenticate` Header mit dem `Basic`-Schema sendet (das bedeutet, wenn der Server den Client auffordert, Authentifizierungsdaten wie Benutzername und Passwort bereitzustellen).

Der Listener kann auf eine von vier Arten reagieren:

- Keine Aktion ergreifen
  - : Der Listener kann nichts tun und lediglich die Anfrage beobachten. Wenn dies geschieht, hat es keine Auswirkungen auf die Bearbeitung der Anfrage und der Browser fordert den Benutzer, falls erforderlich, zum Einloggen auf.
- Die Anfrage abbrechen
  - : Der Listener kann die Anfrage abbrechen. Wenn dies geschieht, schlägt die Authentifizierung fehl und der Benutzer wird nicht zum Einloggen aufgefordert. Erweiterungen können Anfragen wie folgt abbrechen:
    - In addListener geben Sie `"blocking"` im `extraInfoSpec` Parameter an
    - Im Listener geben Sie ein Objekt mit einem `cancel`-Eigenschaftsflag auf `true` zurück

- Anmeldedaten synchron bereitstellen
  - : Wenn Anmeldedaten synchron verfügbar sind, kann die Erweiterung diese synchron bereitstellen. Macht die Erweiterung das, versucht der Browser, sich mit den Anmeldedaten anzumelden. Der Listener kann Anmeldedaten synchron bereitstellen, indem:
    - In addListener geben Sie `"blocking"` im `extraInfoSpec` Parameter an
    - Im Listener geben Sie ein Objekt mit einer `authCredentials`-Eigenschaft, die auf die bereitzustellenden Anmeldedaten gesetzt ist, zurück

- Anmeldedaten asynchron bereitstellen
  - : Die Erweiterung muss möglicherweise Anmeldedaten asynchron abrufen. Zum Beispiel könnte die Erweiterung Anmeldedaten aus dem Speicher abrufen oder den Benutzer fragen müssen. In diesem Fall kann der Listener Anmeldedaten asynchron bereitstellen, indem:
    - In addListener geben Sie `"asyncBlocking"` in Chrome und Firefox oder `"blocking"` in Firefox im `extraInfoSpec` Parameter an
    - Wenn `"blocking"` angegeben ist, kann die Erweiterung ein `webRequest.BlockingResponse`-Objekt oder ein Promise, das sich in ein `webRequest.BlockingResponse`-Objekt auflöst, zurückgeben
    - Wenn `"asyncBlocking"` angegeben ist, erhält die Event-Listener-Funktion eine `asyncCallback`-Funktion als zweiten Parameter. `asyncCallback` kann asynchron aufgerufen werden und nimmt ein `webRequest.BlockingResponse`-Objekt als einzigen Parameter

      > [!NOTE]
      > Chrome unterstützt kein Promise als Rückgabewert ([Chromium Issue 1510405](https://crbug.com/1510405)). Für Alternativen siehe [den Rückgabewert des `listener`](#listener).

Siehe [Beispiele](#beispiele).

Wenn Ihre Erweiterung falsche Anmeldedaten bereitstellt, wird der Listener erneut aufgerufen. Aus diesem Grund sollten Sie darauf achten, nicht in eine Endlosschleife zu geraten, indem Sie wiederholt falsche Anmeldedaten bereitstellen.

## Berechtigungen

In Firefox- und Chrome-Manifest V2-Erweiterungen müssen Sie die [`"webRequest"`- und `"webRequestBlocking"`-API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) zu Ihrer `manifest.json` hinzufügen.

Für Manifest V3-Erweiterungen unterstützt Chrome die Berechtigung `"webRequestBlocking"` nicht mehr (außer für von der Richtlinie installierte Erweiterungen). Stattdessen ermöglichen die Berechtigungen `"webRequest"` und `"webRequestAuthProvider"` das asynchrone Bereitstellen von Anmeldedaten. Firefox unterstützt weiterhin `"webRequestBlocking"` in Manifest V3 und bietet `"webRequestAuthProvider"`, um eine plattformübergreifende Kompatibilität zu bieten.

## Proxy-Authentifizierung

Firefox löst in der Regel keine `webRequest`-Events für Systemanfragen aus, wie zum Beispiel Browser- oder Erweiterungs-Updates oder Suchmaschinenanfragen. Um die Proxy-Authentifizierung für Systemanfragen reibungslos zu ermöglichen, unterstützt Firefox seit Version 57 eine Ausnahme hierfür.

Wenn eine Erweiterung die Berechtigungen `"webRequest"`, `"webRequestBlocking"`, `"proxy"` und `"<all_urls>"` hat, kann sie `onAuthRequired` verwenden, um Anmeldedaten für die Proxy-Authentifizierung bereitzustellen (aber nicht für normale Web-Authentifizierungen). Der Listener kann Systemanfragen nicht abbrechen oder irgendwelche Änderungen an Systemanfragen vornehmen.

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

Events haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Die Funktion erhält folgende Argumente:
    - `details`
      - : `object`. Details zur Anfrage. Weitere Informationen finden Sie im Abschnitt [details](#details).
    - `asyncCallback` {{optional_inline}}
      - : Eine Funktion, die man, höchstens einmal, aufrufen kann, um das Anforderungsobjekt asynchron zu ändern.
        Dieses Parameter ist nur vorhanden, wenn der Event-Listener mit `"asyncBlocking"` im `extraInfoSpec` Array registriert ist. `asyncCallback` ist undefiniert, wenn `extraInfoSpec` nicht bereitgestellt oder `"blocking"` enthält.

    Rückgabewert: {{WebExtAPIRef('webRequest.BlockingResponse')}} oder ein {{jsxref("Promise")}} abhängig von den Einstellungen in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die an diesen Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen dieser Werte übergeben:
    - `"blocking"`: Die Anfrage blockieren, damit Sie die Anfrage abbrechen oder Anmeldeinformationen bereitstellen können. Geben Sie ein `BlockingResponse`-Objekt mit den Eigenschaften `cancel` oder `authCredentials` zurück.
      - In Chrome muss der Event-Listener synchron antworten.
      - In Firefox kann der Event-Listener synchron antworten oder ein Promise zurückgeben, dass sich in ein `BlockingResponse`-Objekt auflöst, um asynchron zu antworten.

    - `"asyncBlocking"`: Die Anfrage asynchron bearbeiten. Der Rückgabewert des Event-Listeners wird ignoriert. Für das Auflösen des Ereignisses übergeben Sie dem `asyncCallback`-Parameter ein `BlockingResponse`-Objekt.
      - Unterstützt ab Chrome 120 und Firefox 128.
      - Wird in Safari nicht unterstützt.

## Zusätzliche Objekte

### details

- `challenger`
  - : `object`. Der Server, der die Authentifizierung anfordert. Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `host`
      - : `string`. Der [Hostname](https://en.wikipedia.org/wiki/Hostname#Internet_hostnames) des Servers.
    - `port`
      - : `integer`. Die Portnummer des Servers.
- `documentId` {{optional_inline}}
  - : `string`. Die UUID des Dokuments, das die Anfrage stellt. Siehe den Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für weitere Informationen.
- `documentLifecycle`
  - : `string`. Der Zustand, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"`, oder `"pending_deletion"` zurück.
- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer kontextuellen Identität stammt, die Cookie-Store-ID der kontextuellen Identität. Siehe [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `frameId`
  - : `integer`. Dies ist `0`, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterframes, in dem die Anfrage stattfindet. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs einzigartig.
- `frameType`
  - : `string`. Der Frame-Typ, in dem die Anfrage erfolgt ist. Gibt die Werte `"outermost_frame"`, `"fenced_frame"`, oder `"sub_frame"` zurück.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browsing-Fenster stammt.
- `isProxy`
  - : `boolean`. `true` für `Proxy-Authenticate`, `false` für `WWW-Authenticate`.
    > [!NOTE]
    > `webRequest.onAuthRequired` wird nur für HTTP- und HTTPS/TLS-Proxyserver aufgerufen, die eine Authentifizierung erfordern, nicht für SOCKS-Proxyserver mit Authentifizierung.
- `method`
  - : `string`. Standard HTTP-Methode (zum Beispiel `"GET"` oder `"POST"`).
- `parentDocumentId`{{optional_inline}}
  - : `string`. Eine UUID des übergeordneten Dokuments, dem der Frame gehört. Nicht gesetzt, wenn kein übergeordnetes vorhanden ist. Siehe den Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für weitere Informationen.
- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf `-1` gesetzt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Sie enthält die folgenden Eigenschaften:
    - `host`
      - : `string`. Der Hostname des Proxyservers.
    - `port`
      - : `integer`. Die Portnummer des Proxyservers.
    - `type`
      - : `string`. Der Typ des Proxyservers. Einer von:
        - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - `"https"`: HTTP-Proxying über TLS-Verbindung zum Proxy
        - `"socks"`: SOCKS v5 Proxy
        - `"socks4"`: SOCKS v4 Proxy
        - `"direct"`: kein Proxy
        - `"unknown"`: unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxydienst.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die Domain-Name-Auflösung anhand des angegebenen Hostnamens durchführt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Verbindung zum Proxyserver nach dieser Anzahl von Sekunden fehlschlägt, wird der nächste Proxyserver im Array verwendet, das von [FindProxyForURL()](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) zurückgegeben wird.

- `realm` {{optional_inline}}
  - : `string`. Der vom Server angegebene Authentifizierungs-[Realm](https://datatracker.ietf.org/doc/html/rfc1945#section-11), falls vorhanden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung einzigartig, sodass Sie verschiedene Ereignisse in Bezug auf dieselbe Anfrage verknüpfen können.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die mit dieser Antwort empfangenen HTTP-Antwort-Header.
- `scheme`
  - : `string`. Das Authentifizierungsschema: `"basic"` oder `"digest"`.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort, der `'HTTP/0.9 200 OK'`-String für HTTP/0.9-Antworten (d.h. Antworten ohne Statuszeile) oder ein leerer String, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab in Verbindung steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel `"image"`, `"script"`, oder `"stylesheet"`.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Der Typ der Verfolgung, der mit der Anfrage verbunden ist, wenn die Anfrage durch den [Firefox-Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifikationsflags für die erste Partei der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflags für Drittparteien der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifikations-Flags umfassen:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage an Fingerprinting beteiligt ist ("ein Ursprung hat Fingerprinting festgestellt").
      - `fingerprinting` gibt an, dass die Domäne in der Fingerprinting- und Verfolgungskategorie ist. Beispiele für diese Art von Domäne sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domäne in der Fingerprinting-Kategorie ist, aber nicht in der Verfolgungskategorie. Beispiele für diese Art von Domäne sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zu identifizieren, um Betrug zu vermeiden.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, aber für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social`, und `tracking_content`: zeigt an, dass die Anfrage mit Verfolgung beteiligt ist. `tracking` ist jede generische Verfolgungsanfrage. Die Suffixe `ad`, `analytics`, `social`, und `content` identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage an der Verfolgung von E-Mails beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, ausgenommen `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen über die Arten von Trackern finden Sie auf der Website [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers). Das Suffix `content` zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Das Blockieren dieser schützt die Benutzer, kann aber dazu führen, dass Websites nicht richtig funktionieren oder Elemente nicht angezeigt werden.

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

Dieser Code liefert Anmeldedaten asynchron, indem er sie aus dem Speicher abruft. Er verfolgt auch ausstehende Anfragen, um sicherzustellen, dass er nicht wiederholt versucht, falsche Anmeldedaten zu übermitteln:

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
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onAuthRequired) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
