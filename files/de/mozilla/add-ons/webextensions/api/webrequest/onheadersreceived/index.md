---
title: webRequest.onHeadersReceived
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
l10n:
  sourceCommit: 33a5708cc125bcaa4ebe74b46bb6fe1820616ff0
---

{{AddonSidebar}}

Wird ausgelöst, wenn die HTTP-Antwortheader für eine Anfrage empfangen werden. Verwenden Sie dieses Ereignis, um HTTP-Antwortheader zu ändern.

Um die Antwortheader zusammen mit den restlichen Anfragedaten an den Listener zu übergeben, geben Sie `"responseHeaders"` im `extraInfoSpec`-Array an.

Wenn Sie `"blocking"` verwenden, müssen Sie in Ihrer manifest.json die [API-Berechtigung "webRequestBlocking"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

Es ist möglich, dass Erweiterungen widersprüchliche Anfragen stellen. Wenn zwei Erweiterungen `onHeadersReceived` für die gleiche Anfrage abhören und `responseHeaders` zurückgeben, um denselben Header (zum Beispiel `Set-Cookie`) einzustellen, der in der ursprünglichen Antwort nicht vorhanden ist, wird nur eine der Änderungen erfolgreich sein.

Der Header `Content-Security-Policy` wird jedoch anders behandelt; seine Werte werden kombiniert, um alle angegebenen Richtlinien anzuwenden. Sollte jedoch ein Konflikt auftreten, wenn zwei Erweiterungen einen CSP-Wert setzen, macht der CSP-Dienst die Einschränkung strikter, um den Konflikt zu lösen. Zum Beispiel, wenn eine Erweiterung `img-src: example.com` festlegt und eine andere `img-src: example.org`, dann ist das Ergebnis `img-src: 'none'`. Zusammengeführte Änderungen neigen immer dazu, restriktiver zu sein, auch wenn möglicherweise eine Erweiterung den ursprünglichen CSP-Header entfernt.

Wenn Sie die Header sehen möchten, die vom System verarbeitet werden, ohne dass das Risiko besteht, dass eine andere Erweiterung sie ändert, verwenden Sie {{WebExtAPIRef("webRequest.onResponseStarted")}}, obwohl Sie bei diesem Ereignis keine Header ändern können.

## Syntax

```js-nolint
browser.webRequest.onHeadersReceived.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onHeadersReceived.removeListener(listener)
browser.webRequest.onHeadersReceived.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, `false` andernfalls.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : [`object`](#details_2). Details der Anfrage. Enthält Antwortheader, wenn Sie `"responseHeaders"` in `extraInfoSpec` eingeschlossen haben.

    Rückgabewert: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im `extraInfoSpec`-Parameter angegeben ist, gibt der Ereignis-Listener ein `BlockingResponse`-Objekt zurück und kann seine `responseHeaders`-Eigenschaft festlegen. In Firefox kann der Rückgabewert ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sein, das in ein `BlockingResponse`-Objekt aufgelöst wird.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die an diesen Listener gesendeten Ereignisse einschränken.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:

    - `"blocking"`, um die Anfrage synchron zu machen, damit Sie Anfrage- und Antwortheader ändern können
    - `"responseHeaders"`, um die Antwortheader in das an den Listener übergebene `details`-Objekt einzuschließen

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab geöffnet im Kontext einer Identität stammt, die Cookie-Store-ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für mehr Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Zum Beispiel, wenn die Webseite unter „https\://example.com“ ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder iframe „https\://example.com“. Für ein Dokument der obersten Ebene ist `documentUrl` undefiniert.
- `frameAncestors`

  - : `array`. Informationen für jedes Dokument in der Rahmenhierarchie bis zum Dokument der obersten Ebene. Das erste Element im Array enthält Informationen über das unmittelbare übergeordnete Dokument des angeforderten Dokuments, und das letzte Element enthält Informationen über das Dokument der obersten Ebene. Wenn der Ladevorgang für das Dokument der obersten Ebene erfolgt, ist dieses Array leer.

    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist dasselbe wie `details.parentFrameId`.

- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `fromCache`
  - : `boolean`. Ob die Antwort aus dem Festplatten-Cache geholt wird.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem Fenster im privaten Modus stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann eine literale IPv6-Adresse sein.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel „GET“ oder „POST“.
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Zum Beispiel, wenn „https\://example.com“ einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage „https\://example.com“.

    Die `originUrl` ist oft, aber nicht immer, dieselbe wie die `documentUrl`. Zum Beispiel, wenn eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann ist die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, von dem die Anfrage gesendet wurde. Auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy läuft. Sie enthält folgende Eigenschaften:

    - `host`
      - : `string`. Der Hostname des Proxy-Servers.
    - `port`
      - : `integer`. Die Portnummer des Proxy-Servers.
    - `type`

      - : `string`. Der Typ des Proxy-Servers. Einer von:

        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxying über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. True, wenn der Proxy die Namensauflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Zeitüberschreitung in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, so dass Sie sie verwenden können, um verschiedene Ereignisse zuzuordnen, die mit derselben Anfrage verbunden sind.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die für diese Anfrage empfangen wurden.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, den der Server zurückgegeben hat.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort oder der String 'HTTP/0.9 200 OK' für HTTP/0.9-Antworten (das heißt, Antworten, die keine Statuszeile enthalten).
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab in Zusammenhang steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltfenster-Hierarchie von Drittanbietern stammt.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Die Art der angeforderten Ressource: zum Beispiel „image“, „script“, „stylesheet“.
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art des Trackings, das mit der Anfrage verbunden ist, wenn die Anfrage durch die [Firefox Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifikationsflaggen für die First Party der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifikationsflaggen für die Dritteinheiten der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifikationsflaggen umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage am Fingerprinting beteiligt ist ("ein Ursprung, der zum Fingerprinting gefunden wurde").
      - `fingerprinting` zeigt an, dass die Domain in der Kategorie Fingerprinting und Tracking ist. Beispiele für diese Art von Domain umfassen Werbetreibende, die ein Profil mit dem besuchenden Benutzer in Verbindung bringen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Kategorie Fingerprinting, aber nicht in der Kategorie Tracking ist. Beispiele für diese Art von Domain umfassen Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zu Identifikationszwecken zur Betrugsprävention zu erkennen.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Kategorie Fingerprinting, jedoch für Cryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede generische Tracking-Anfrage, die `ad`, `analytics`, `social` und `content` Suffixe identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage am E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flaggen kombiniert, ausgenommen `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flaggen kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flaggen kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content`-Suffix zeigt Tracker an, die verfolgen und Inhalte bereitstellen. Deren Blockierung schützt Benutzer, kann jedoch dazu führen, dass Websites nicht funktionieren oder Elemente nicht angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code setzt ein zusätzliches Cookie, wenn eine Ressource von der Ziel-URL angefordert wird:

```js
let targetPage =
  "https://developer.mozilla.org/en-US/Firefox/Developer_Edition";

// Add the new header to the original array,
// and return it.
function setCookie(e) {
  const setMyCookie = {
    name: "Set-Cookie",
    value: "my-cookie1=my-cookie-value1",
  };
  e.responseHeaders.push(setMyCookie);
  return { responseHeaders: e.responseHeaders };
}

// Listen for onHeaderReceived for the target page.
// Set "blocking" and "responseHeaders".
browser.webRequest.onHeadersReceived.addListener(
  setCookie,
  { urls: [targetPage] },
  ["blocking", "responseHeaders"],
);
```

Dieser Code macht dasselbe wie das vorherige Beispiel, außer dass der Listener asynchron ist und ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das mit den neuen Headern aufgelöst wird:

```js
const targetPage =
  "https://developer.mozilla.org/en-US/Firefox/Developer_Edition";

// Return a Promise that sets a timer.
// When the timer fires, resolve the promise with
// modified set of response headers.
function setCookieAsync(e) {
  const asyncSetCookie = new Promise((resolve, reject) => {
    setTimeout(() => {
      const setMyCookie = {
        name: "Set-Cookie",
        value: "my-cookie1=my-cookie-value1",
      };
      e.responseHeaders.push(setMyCookie);
      resolve({ responseHeaders: e.responseHeaders });
    }, 2000);
  });

  return asyncSetCookie;
}

// Listen for onHeaderReceived for the target page.
// Set "blocking" and "responseHeaders".
browser.webRequest.onHeadersReceived.addListener(
  setCookieAsync,
  { urls: [targetPage] },
  ["blocking", "responseHeaders"],
);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onHeadersReceived) API von Chromium. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
