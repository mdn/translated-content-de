---
title: webRequest.onHeadersReceived
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ausgelöst, wenn die HTTP-Antwortheader für eine Anfrage empfangen werden. Verwenden Sie dieses Ereignis, um HTTP-Antwortheader zu ändern.

Um die Antwortheader im Listener zusammen mit den restlichen Anfragedaten zu übergeben, geben Sie `"responseHeaders"` im `extraInfoSpec` Array an.

Wenn Sie `"blocking"` verwenden, müssen Sie die ["webRequestBlocking" API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

Es ist möglich, dass Erweiterungen widersprüchliche Anfragen stellen. Wenn zwei Erweiterungen `onHeadersReceived` für dieselbe Anfrage abhören und `responseHeaders` zurückgeben, um denselben Header zu setzen (zum Beispiel `Set-Cookie`), der nicht in der ursprünglichen Antwort vorhanden ist, wird nur eine der Änderungen erfolgreich sein.

Jedoch wird der `Content-Security-Policy` Header anders behandelt; seine Werte werden kombiniert, um alle angegebenen Richtlinien anzuwenden. Wenn jedoch zwei Erweiterungen einen CSP-Wert festlegen, der in Konflikt steht, verschärft der CSP-Dienst die Einschränkung, um den Konflikt zu lösen. Zum Beispiel, wenn eine Erweiterung `img-src: example.com` setzt und eine andere Erweiterung `img-src: example.org` setzt, ist das Ergebnis `img-src: 'none'`. Zusammengeführte Änderungen neigen immer dazu, restriktiver zu sein, obwohl eine Erweiterung den ursprünglichen CSP-Header entfernen kann.

Wenn Sie die Header sehen möchten, die vom System verarbeitet werden, ohne das Risiko, dass eine andere Erweiterung sie verändert, verwenden Sie {{WebExtAPIRef("webRequest.onResponseStarted")}}, obwohl Sie bei diesem Ereignis keine Header ändern können.

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
  - : Stoppen Sie das Abhören dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : [`object`](#details). Details der Anfrage. Dies wird Antwortheader enthalten, wenn Sie `"responseHeaders"` in `extraInfoSpec` aufgenommen haben.

    Gibt zurück: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im `extraInfoSpec`-Parameter angegeben ist, wird der Ereignislistener ein `BlockingResponse`-Objekt zurückgeben und seine `responseHeaders`-Eigenschaft setzen können. In Firefox kann der Rückgabewert ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sein, das in ein `BlockingResponse` aufgelöst wird.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Reihe von Filtern, die die Ereignisse einschränken, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:
    - `"blocking"` um die Anfrage synchron zu machen, so dass Sie Anforderungs- und Antwortheader ändern können
    - `"responseHeaders"` um die Antwortheader im `details`-Objekt einzuschließen, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem in einer kontextuellen Identität geöffneten Tab stammt, die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn beispielsweise die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder iframe "https\://example.com". Für ein Top-Level-Dokument ist `documentUrl` undefiniert.
- `frameAncestors`
  - : `array`. Informationen für jedes Dokument in der Frame-Hierarchie bis zum Dokument der obersten Ebene. Das erste Element im Array enthält Informationen über das unmittelbare Elternteil des angeforderten Dokuments, und das letzte Element enthält Informationen über das Dokument der obersten Ebene. Wenn das Laden für das Dokument der obersten Ebene erfolgt, ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist dasselbe wie `details.parentFrameId`.

- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmen geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `fromCache`
  - : `boolean`. Ob die Antwort aus dem Speichercache abgerufen wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem Fenster für privates Browsen stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann eine wörtliche IPv6-Adresse sein.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Zum Beispiel, wenn "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer dieselbe wie die `documentUrl`. Zum Beispiel, wenn eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann ist die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Setzen Sie diesen auf -1, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geführt wird. Sie enthält die folgenden Eigenschaften:
    - `host`
      - : `string`. Der Hostname des Proxyservers.
    - `port`
      - : `integer`. Die Portnummer des Proxyservers.
    - `type`
      - : `string`. Der Typ des Proxyservers. Einer von:
        - "http": HTTP-Proxy (oder SSL CONNECT für HTTPS)
        - "https": HTTP-Proxying über TLS-Verbindung zum Proxy
        - "socks": SOCKS v5 Proxy
        - "socks4": SOCKS v4 Proxy
        - "direct": kein Proxy
        - "unknown": unbekannter Proxy

    - `username`
      - : `string`. Benutzername für den Proxydienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Namensauflösung basierend auf dem angegebenen Hostnamen durchführen wird, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zu verknüpfen, die mit derselben Anfrage verbunden sind.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die für diese Anfrage empfangen wurden.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort oder die Zeichenfolge 'HTTP/0.9 200 OK' für HTTP/0.9-Antworten (d.h. Antworten, die keine Statuszeile enthalten).
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage erfolgt. Setzen Sie diesen auf -1, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Zeigt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie Drittanbieterelemente sind.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Der Typ der Verfolgung, die mit der Anfrage verbunden ist, wenn die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifizierungsflags für die erste Partei der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifizierungsflags für die Drittparteien der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifizierungsflags beinhalten:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage an Fingerprinting beteiligt ist ("ein Ursprung, der Fingerabdruck verwendet").
      - `fingerprinting` bedeutet, die Domain gehört zur Fingerprinting- und Verfolgungskategorie. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` bedeutet, die Domain gehört zur Fingerprinting-Kategorie, aber nicht zur Verfolgungskategorie. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken einsetzen, um den besuchenden Benutzer zur Betrugsvermeidung zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, aber für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage an Verfolgung beteiligt ist. `tracking` ist jede generische Verfolgungsanfrage; die Suffixe `ad`, `analytics`, `social` und `content` identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage an der Verfolgung von E-Mails beteiligt ist.
    - `any_basic_tracking`: ein Metaflag, das Verfolgungs- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Metaflag, das alle Verfolgungs- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Metaflag, das alle sozialen Verfolgungsflags kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content`-Suffix gibt Tracker an, die Inhalte verfolgen und bereitstellen. Das Blockieren dieser schützt die Benutzer, kann jedoch dazu führen, dass Websites nicht funktionieren oder Elemente nicht angezeigt werden.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onHeadersReceived) API von Chromium. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
