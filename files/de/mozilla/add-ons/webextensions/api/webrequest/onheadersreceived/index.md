---
title: webRequest.onHeadersReceived
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn die HTTP-Antwortheader für eine Anfrage empfangen werden. Verwenden Sie dieses Ereignis, um HTTP-Antwortheader zu ändern.

Um die Antwortheader zusammen mit den restlichen Anfragedaten an den Listener weiterzuleiten, geben Sie „responseHeaders“ im `extraInfoSpec`-Array an.

Wenn Sie „blocking“ verwenden, müssen Sie in Ihrer manifest.json die [„webRequestBlocking“-API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

Es ist möglich, dass Erweiterungen widersprüchliche Anfragen stellen. Wenn zwei Erweiterungen `onHeadersReceived` für dieselbe Anfrage abhören und `responseHeaders` zurückgeben, um denselben Header (z. B. `Set-Cookie`), der in der ursprünglichen Antwort nicht vorhanden ist, zu setzen, wird nur eine der Änderungen erfolgreich sein.

Der `Content-Security-Policy`-Header wird jedoch anders behandelt; seine Werte werden kombiniert, um alle angegebenen Richtlinien anzuwenden. Wenn jedoch zwei Erweiterungen einen CSP-Wert setzen, der im Widerspruch steht, macht der CSP-Dienst die Einschränkung strenger, um den Konflikt zu lösen. Wenn beispielsweise eine Erweiterung `img-src: example.com` festlegt und eine andere Erweiterung `img-src: example.org` festlegt, ist das Ergebnis `img-src: 'none'`. Zusammengeführte Änderungen tendieren immer dazu, restriktiver zu sein, obwohl eine Erweiterung den ursprünglichen CSP-Header entfernen kann.

Wenn Sie die Header sehen möchten, die vom System verarbeitet werden, ohne das Risiko, dass eine andere Erweiterung sie ändert, verwenden Sie {{WebExtAPIRef("webRequest.onResponseStarted")}}, obwohl Sie die Header bei diesem Ereignis nicht ändern können.

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
  - : Hört auf, diesem Ereignis zuzuhören. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `details`
      - : [`object`](#details_2). Details der Anfrage. Diese enthält Antwortheader, wenn Sie `"responseHeaders"` in `extraInfoSpec` aufgenommen haben.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im `extraInfoSpec`-Parameter angegeben ist, gibt der Ereignis-Listener ein `BlockingResponse`-Objekt zurück und kann seine `responseHeaders`-Eigenschaft setzen. In Firefox kann der Rückgabewert ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sein, das zu einem `BlockingResponse` aufgelöst wird.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Eine Menge von Filtern, die die Ereignisse einschränken, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:

    - `"blocking"`, um die Anfrage synchron zu machen, sodass Sie Anfrage- und Antwortheader ändern können
    - `"responseHeaders"`, um die Antwortheader im `details`-Objekt zu enthalten, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab stammt, das in einer kontextuellen Identität geöffnet ist, die Cookie-Store-ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn beispielsweise die Webseite unter "https://example.com" ein Bild oder ein `<iframe>` enthält, dann ist die `documentUrl` für das Bild oder das `<iframe>` "https://example.com". Für ein oberstes Dokument ist `documentUrl` undefiniert.
- `frameAncestors`

  - : `array`. Informationen zu jedem Dokument in der Frame-Hierarchie bis zum obersten Dokument. Das erste Element im Array enthält Informationen über das unmittelbare übergeordnete Dokument des angeforderten Dokuments, und das letzte Element enthält Informationen über das oberste Dokument. Wenn der Ladevorgang für das oberste Dokument erfolgt, ist dieses Array leer.

    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist dasselbe wie `details.parentFrameId`.

- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Subframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Sub-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `fromCache`
  - : `boolean`. Ob die Antwort aus dem Festplattencache abgerufen wird.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `ip`
  - : `string`. Die IP-Adresse des Servers, an den die Anfrage gesendet wurde. Es kann sich um eine wörtliche IPv6-Adresse handeln.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn beispielsweise "https://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage "https://example.com".

    Die `originUrl` ist oft, aber nicht immer, dieselbe wie die `documentUrl`. Wenn beispielsweise eine Seite ein `<iframe>` enthält und das `<iframe>` einen Link enthält, der ein neues Dokument in das `<iframe>` lädt, dann ist die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des `<iframe>`, aber die `originUrl` ist die URL des Dokuments im `<iframe>`, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy erfolgt. Sie enthält folgende Eigenschaften:

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
      - : `boolean`. Wahr, wenn der Proxy die DNS-Auflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxyverbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zu verknüpfen, die mit derselben Anfrage verbunden sind.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Antwortheader, die für diese Anfrage empfangen wurden.
- `statusCode`
  - : `integer`. Standard-HTTP-Statuscode, der vom Server zurückgegeben wird.
- `statusLine`
  - : `string`. HTTP-Statuszeile der Antwort oder der 'HTTP/0.9 200 OK'-String für HTTP/0.9-Antworten (d. h. Antworten, denen eine Statuszeile fehlt).
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab in Zusammenhang steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltfensterhierarchie von Dritten stammen.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art der Nachverfolgung, die mit der Anfrage verbunden ist, wenn die Anfrage durch den [Firefox-Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit folgenden Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifikationsflags für die erste Partei der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifikationsflags für die Dritten der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifikationsflags umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage mit Fingerprinting verbunden ist („ein Ursprung, der sich Fingerprinting bedient“).
      - `fingerprinting` zeigt an, dass die Domain in der Kategorie für Fingerprinting und Tracking ist. Beispiele für diese Art von Domain umfassen Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Kategorie für Fingerprinting, aber nicht in der Kategorie für Tracking ist. Beispiele für diese Art von Domain umfassen Zahlungsdienstleister, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zu Identifikationszwecken für Betrugspräventionen zu erkennen.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Kategorie für Fingerprinting, aber für Kryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage mit Tracking verbunden ist. `tracking` ist jede allgemeine Tracking-Anfrage, die `ad`, `analytics`, `social` und `content`-Suffixe identifizieren die Art des Trackers.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

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

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onHeadersReceived) API. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
