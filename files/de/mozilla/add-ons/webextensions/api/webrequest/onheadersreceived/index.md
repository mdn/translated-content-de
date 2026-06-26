---
title: webRequest.onHeadersReceived
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Wird ausgelöst, wenn die HTTP-Antwortheader für eine Anfrage empfangen werden. Verwenden Sie dieses Ereignis, um HTTP-Antwortheader zu modifizieren.

Um die Antwortheader zusammen mit den restlichen Anfragedaten in den Listener zu übergeben, geben Sie `"responseHeaders"` in das `extraInfoSpec`-Array ein.

Wenn Sie `"blocking"` verwenden, müssen Sie die [API-Berechtigung "webRequestBlocking"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

Es ist möglich, dass Erweiterungen widersprüchliche Anforderungen stellen. Wenn zwei Erweiterungen `onHeadersReceived` für dieselbe Anfrage abhören und `responseHeaders` zurückgeben, um denselben Header zu setzen (zum Beispiel `Set-Cookie`), der nicht in der ursprünglichen Antwort vorhanden ist, wird nur eine der Änderungen erfolgreich sein.

Der `Content-Security-Policy`-Header wird jedoch anders behandelt; seine Werte werden kombiniert, um alle angegebenen Richtlinien anzuwenden. Wenn jedoch zwei Erweiterungen einen CSP-Wert setzen, der im Konflikt steht, verschärft der CSP-Dienst die Einschränkung, um den Konflikt zu lösen. Zum Beispiel, wenn eine Erweiterung `img-src: example.com` setzt und eine andere Erweiterung `img-src: example.org` setzt, ist das Ergebnis `img-src: 'none'`. Zusammengeführte Modifikationen sind immer restriktiver, obwohl eine Erweiterung den ursprünglichen CSP-Header entfernen kann.

Wenn Sie die vom System verarbeiteten Header sehen möchten, ohne das Risiko, dass eine andere Erweiterung sie ändert, verwenden Sie {{WebExtAPIRef("webRequest.onResponseStarted")}}, obwohl Sie die Header bei diesem Ereignis nicht ändern können.

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
  - : Stoppt das Abhören dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält dieses Argument:
    - `details`
      - : [`object`](#details). Details der Anfrage. Dies beinhaltet Antwortheader, wenn Sie `"responseHeaders"` in `extraInfoSpec` aufgenommen haben.

    Gibt zurück: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im `extraInfoSpec`-Parameter angegeben ist, gibt der Ereignislistener ein `BlockingResponse`-Objekt zurück und kann dessen `responseHeaders`-Eigenschaft festlegen. In Firefox kann der Rückgabewert ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sein, das zu einem `BlockingResponse` aufgelöst wird.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Gruppe von Filtern, die die Ereignisse einschränken, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:
    - `"blocking"` um die Anfrage synchron zu gestalten, sodass Sie Anfragen und Antwortheader ändern können
    - `"responseHeaders"` um die Antwortheader im an den Listener übergebenen `details`-Objekt aufzunehmen

## Zusätzliche Objekte

### details

- `documentId` {{optional_inline}}
  - : `string`. Die UUID des Dokuments, das die Anfrage stellt. Siehe den Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für mehr Informationen.
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.
- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab stammt, der in einer kontextuellen Identität geöffnet ist, die Cookie-Store-ID der kontextuellen Identität. Siehe [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für mehr Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn beispielsweise die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder das iframe "https\://example.com". Für ein Dokument auf oberster Ebene ist `documentUrl` undefiniert.
- `frameAncestors`
  - : `array`. Informationen für jedes Dokument in der Rahmenhierarchie bis zum Dokument auf oberster Ebene. Das erste Element im Array enthält Informationen über das unmittelbare übergeordnete Dokument des angeforderten Dokuments und das letzte Element enthält Informationen über das Dokument auf oberster Ebene. Wenn der Ladevorgang für das Dokument auf oberster Ebene ist, dann ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist dasselbe wie `details.parentFrameId`.

- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe stattfindet; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage stattfindet. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Rahmen-IDs sind innerhalb eines Tabs eindeutig.
- `frameType`
  - : `string`. Der Typ des Rahmens, in dem die Anfrage aufgetreten ist. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"` zurück.
- `fromCache`
  - : `boolean`. Ob die Antwort aus dem Festplattencache abgerufen wurde.
- `incognito`
  - : `boolean`. Ob die Anfrage von einem privaten Browsertab kommt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann sich um eine literale IPv6-Adresse handeln.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn zum Beispiel "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` der resultierenden Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer, dieselbe wie die `documentUrl`. Zum Beispiel, wenn eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, ist die `documentUrl` der resultierenden Anfrage das übergeordnete Dokument des iframes, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthalten hat.

- `parentDocumentId`{{optional_inline}}
  - : `string`. Eine UUID des übergeordneten Dokuments, das den Rahmen besitzt. Nicht gesetzt, wenn kein übergeordnetes Dokument vorhanden ist. Siehe den Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für mehr Informationen.
- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Sie enthält die folgenden Eigenschaften:
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
      - : `boolean`. Wahr, wenn der Proxy die Domainnamenauflösung basierend auf dem bereitgestellten Hostnamen durchführen wird, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Zeitlimit in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zuzuordnen, die mit derselben Anfrage verbunden sind.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die für diese Anfrage empfangen wurden.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort oder der String 'HTTP/0.9 200 OK' für HTTP/0.9-Antworten (das heißt, Antworten, die keine Statuszeile enthalten).
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: Zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Die Art des Trackings, das mit der Anfrage verbunden ist, falls die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit folgenden Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifizierungsflags für die First Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifizierungsflags für die Anfrage oder die Third Parties ihrer Fensterhierarchie.

    Die Klassifizierungsflags umfassen:
    - `fingerprinting` und `fingerprinting_content`: gibt an, dass die Anfrage am Fingerprinting beteiligt ist ("eine Ursprungsstelle wurde identifiziert, die Fingerprinting betreibt").
      - `fingerprinting` gibt an, dass die Domain in der Kategorie Fingerprinting und Tracking ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` gibt an, dass die Domain in der Fingerprinting-Kategorie ist, jedoch nicht in der Tracking-Kategorie. Beispiele für diese Art von Domain sind Zahlungsdienstleister, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zu Identifikationszwecken für Betrugsvorbeugung zu erkennen.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, jedoch für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: gibt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede allgemeine Tracking-Anfrage, die Suffixe `ad`, `analytics`, `social`, und `content` identifizieren den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: gibt an, dass die Anfrage am E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: ein Metaflag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Metaflag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Metaflag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Tracker-Typen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) Website. Das `content`-Suffix zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Ihr Blockieren schützt Benutzer, kann jedoch dazu führen, dass Webseiten kaputtgehen oder Elemente nicht angezeigt werden.

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

Dieser Code tut dasselbe wie das vorherige Beispiel, außer dass der Listener asynchron ist und ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das mit den neuen Headern aufgelöst wird:

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
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onHeadersReceived)-API von Chromium. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
