---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Wird ausgelöst, wenn der Server einen `401`- oder `407`-Statuscode und einen `WWW-Authenticate`-Header mit dem `Basic`-Schema sendet (das heißt, wenn der Server den Client auffordert, Authentifizierungsnachweise wie Benutzername und Passwort bereitzustellen).

Der Listener kann auf eine von vier Arten reagieren:

- Keine Aktion ausführen
  - : Der Listener kann nichts unternehmen und nur die Anforderung beobachten. Wenn dies geschieht, beeinflusst es nicht die Bearbeitung der Anforderung, und der Browser fragt den Benutzer, ob er sich anmelden möchte, falls erforderlich.
- Die Anfrage abbrechen
  - : Der Listener kann die Anfrage abbrechen. Wenn er dies tut, schlägt die Authentifizierung fehl, und der Benutzer wird nicht aufgefordert, sich anzumelden. Erweiterungen können Anfragen folgendermaßen abbrechen:
    - In `addListener` `"blocking"` im `extraInfoSpec`-Parameter angeben.
    - Im Listener ein Objekt mit einer `cancel`-Eigenschaft zurückgeben, die auf `true` gesetzt ist.

- Anmeldedaten synchron bereitstellen
  - : Wenn Anmeldedaten synchron verfügbar sind, kann die Erweiterung sie synchron bereitstellen. Wenn die Erweiterung dies tut, versucht der Browser, sich mit den Anmeldedaten anzumelden. Der Listener kann Anmeldedaten wie folgt synchron bereitstellen:
    - In `addListener` `"blocking"` im `extraInfoSpec`-Parameter angeben.
    - Im Listener ein Objekt mit einer `authCredentials`-Eigenschaft zurückgeben, die auf die bereitzustellenden Anmeldedaten gesetzt ist.

- Anmeldedaten asynchron bereitstellen
  - : Die Erweiterung muss möglicherweise Anmeldedaten asynchron abrufen. Zum Beispiel könnte die Erweiterung Anmeldedaten aus dem Speicher abrufen oder den Benutzer fragen müssen. In diesem Fall kann der Listener Anmeldedaten wie folgt asynchron bereitstellen:
    - In `addListener` `"asyncBlocking"` in Chrome und Firefox oder `"blocking"` in Firefox im `extraInfoSpec`-Parameter angeben.
    - Wenn `"blocking"` angegeben ist, kann die Erweiterung ein `webRequest.BlockingResponse`-Objekt oder ein Promise, das zu einem `webRequest.BlockingResponse`-Objekt aufgelöst wird, zurückgeben.
    - Wenn `"asyncBlocking"` angegeben ist, erhält die Event-Listener-Funktion eine `asyncCallback`-Funktion als zweiten Parameter. `asyncCallback` kann asynchron aufgerufen werden und nimmt ein `webRequest.BlockingResponse`-Objekt als einzigen Parameter.

      > [!NOTE]
      > Chrome unterstützt kein Promise als Rückgabewert ([Chromium Issue 1510405](https://crbug.com/1510405)). Für Alternativen siehe [den Rückgabewert des `listener`](#listener).

Siehe [Beispiele](#beispiele).

Wenn Ihre Erweiterung schlechte Anmeldedaten bereitstellt, wird der Listener erneut aufgerufen. Aus diesem Grund sollten Sie darauf achten, keinen Endlosloop zu erstellen, indem Sie wiederholt schlechte Anmeldedaten bereitstellen.

## Berechtigungen

In Firefox und Chrome Manifest V2-Erweiterungen müssen Sie die [API-Berechtigungen `"webRequest"` und `"webRequestBlocking"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) zu Ihrer `manifest.json` hinzufügen.

Für Manifest V3-Erweiterungen unterstützt Chrome nicht mehr die `"webRequestBlocking"`-Berechtigung (ausgenommen für durch Richtlinien installierte Erweiterungen). Stattdessen ermöglichen die Berechtigungen `"webRequest"` und `"webRequestAuthProvider"` die asynchrone Bereitstellung von Anmeldedaten. Firefox unterstützt weiterhin `"webRequestBlocking"` in Manifest V3 und bietet `"webRequestAuthProvider`" für eine plattformübergreifende Kompatibilität.

## Proxy-Autorisierung

Firefox löst im Allgemeinen keine `webRequest`-Ereignisse für Systemanforderungen aus, wie z.B. Browser- oder Erweiterungsupdates oder Suchmaschinenabfragen. Um die Proxy-Autorisierung für Systemanforderungen zu ermöglichen, unterstützt Firefox ab Version 57 eine Ausnahme hiervon.

Wenn eine Erweiterung die Berechtigungen `"webRequest"`, `"webRequestBlocking"`, `"proxy"` und `"<all_urls>"` besitzt, kann sie `onAuthRequired` nutzen, um Anmeldedaten für die Proxy-Autorisierung bereitzustellen (jedoch nicht für normale Web-Autorisierung). Der Listener kann keine Systemanforderungen abbrechen oder andere Änderungen an Systemanforderungen vornehmen.

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
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält folgende Argumente:
    - `details`
      - : `object`. Details zur Anforderung. Siehe den Abschnitt [details](#details) für weitere Informationen.
    - `asyncCallback` {{optional_inline}}
      - : Eine Funktion, die höchstens einmal aufgerufen wird, um das Anforderungsobjekt asynchron zu ändern.
        Dieser Parameter ist nur vorhanden, wenn der Ereignis-Listener mit `"asyncBlocking"` im `extraInfoSpec`-Array registriert ist. `asyncCallback` ist undefiniert, wenn `extraInfoSpec` nicht bereitgestellt wird oder `"blocking"` enthält.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}} oder ein {{jsxref("Promise")}}, abhängig von den Einstellungen in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die an diesen Listener gesendeten Ereignisse einschränkt.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:
    - `"blocking"`: macht die Anforderung blockierend, sodass Sie die Anforderung abbrechen oder Authentifizierungsdaten bereitstellen können. Geben Sie ein `BlockingResponse`-Objekt mit den Eigenschaften `cancel` oder `authCredentials` zurück.
      - In Chrome muss der Event-Listener synchron antworten.
      - In Firefox kann der Event-Listener synchron antworten oder ein Promise zurückgeben, das zu einem `BlockingResponse`-Objekt aufgelöst wird, um asynchron zu antworten.

    - `"asyncBlocking"`: behandelt die Anforderung asynchron. Der Rückgabewert des Event-Listeners wird ignoriert. Um das Ereignis aufzulösen, übergeben Sie dem `asyncCallback`-Parameter ein `BlockingResponse`-Objekt.
      - Unterstützt ab Chrome 120 und Firefox 128.
      - Nicht unterstützt in Safari.

## Zusätzliche Objekte

### Details

- `challenger`
  - : `object`. Der Server, der die Authentifizierung anfordert. Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `host`
      - : `string`. Der [Hostname](https://de.wikipedia.org/wiki/Hostname#Internet-Hostnamen) des Servers.
    - `port`
      - : `integer`. Die Portnummer des Servers.

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab innerhalb einer kontextuellen Identität stammt, die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `frameId`
  - : `integer`. Dies ist `0`, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `isProxy`
  - : `boolean`. `true` für `Proxy-Authenticate`, `false` für `WWW-Authenticate`.
    > [!NOTE]
    > `webRequest.onAuthRequired` wird nur für HTTP- und HTTPS/TLS-Proxy-Server aufgerufen, die eine Authentifizierung erfordern, nicht für SOCKS-Proxy-Server, die eine Authentifizierung erfordern.
- `method`
  - : `string`. Standard-HTTP-Methode (zum Beispiel `"GET"` oder `"POST"`).
- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf `-1` gesetzt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy läuft. Sie enthält die folgenden Eigenschaften:
    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`
      - : `string`. Der Typ des Proxy-Servers. Einer der folgenden:
        - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - `"https"`: HTTP-Proxying über TLS-Verbindung zum Proxy
        - `"socks"`: SOCKS v5 Proxy
        - `"socks4"`: SOCKS v4 Proxy
        - `"direct"`: kein Proxy
        - `"unknown"`: unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die DNS-Auflösung auf der Basis des bereitgestellten Hostnamens durchführt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Ausfallzeitüberschreitung in Sekunden. Wenn die Verbindung zum Proxy-Server nach dieser Anzahl von Sekunden fehlschlägt, wird der nächste Proxy-Server im Array verwendet, das von [FindProxyForURL()](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) zurückgegeben wird.

- `realm` {{optional_inline}}
  - : `string`. Der vom Server bereitgestellte [Authentifizierungsbereich](https://datatracker.ietf.org/doc/html/rfc1945#section-11), falls vorhanden.
- `requestId`
  - : `string`. Die ID der Anfrage. Anforderungs-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie verschiedene Ereignisse, die mit derselben Anforderung verknüpft sind, zuordnen können.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwort-Header, die mit dieser Antwort empfangen wurden.
- `scheme`
  - : `string`. Das Authentifizierungsschema: `"basic"` oder `"digest"`.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort, die `'HTTP/0.9 200 OK'` Zeichenfolge für HTTP/0.9-Antworten (d.h. Antworten, die keine Statuszeile enthalten) oder ein leerer String, wenn keine Header vorhanden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Zeigt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie von Dritten stammt.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel `"image"`, `"script"` oder `"stylesheet"`.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Die Art des Trackings, die mit der Anfrage verbunden ist, wenn die Anfrage durch den [Firefox Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifizierungsflags für die First Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifizierungsflags für die Third Parties der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifizierungsflags umfassen:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage in Fingerprinting involviert ist ("eine Herkunft, die beim Fingerprinting gefunden wurde").
      - `fingerprinting` zeigt an, dass die Domäne in der Kategorie Fingerprinting und Tracking ist. Beispiele für diese Art von Domäne sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domäne in der Kategorie Fingerprinting, aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domäne sind Zahlungsanbieter, die Fingerprinting-Techniken zur Identifizierung des besuchenden Benutzers für Anti-Betrugs-Zwecke verwenden.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, jedoch für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage in Tracking involviert ist. `tracking` ist jede generische Tracking-Anfrage. Die Suffixe `ad`, `analytics`, `social` und `content` identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage in E-Mail-Tracking involviert ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, ausgenommen `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Tracker-Typen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content`-Suffix zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Ihre Blockierung schützt Benutzer, kann jedoch dazu führen, dass Websites gestört werden oder Elemente nicht angezeigt werden.

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

Dieser Code stellt Anmeldedaten synchron bereit. Er behält den Überblick über ausstehende Anfragen, um sicherzustellen, dass er nicht wiederholt versucht, schlechte Anmeldedaten einzureichen:

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

Dieser Code stellt Anmeldedaten asynchron bereit und ruft sie aus dem Speicher ab. Er behält auch den Überblick über ausstehende Anfragen, um sicherzustellen, dass er nicht wiederholt versucht, schlechte Anmeldedaten einzureichen:

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
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onAuthRequired) API von Chromium. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
