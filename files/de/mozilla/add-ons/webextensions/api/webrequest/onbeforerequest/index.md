---
title: webRequest.onBeforeRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Dieses Ereignis wird ausgelöst, wenn eine Anfrage gestellt werden soll und bevor die Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zuzuhören, wenn Sie die Anfrage abbrechen oder umleiten möchten.

Um die Anfrage abzubrechen oder umzuleiten, fügen Sie zunächst `"blocking"` in das `extraInfoSpec`-Array-Argument für `addListener()` ein. Geben Sie dann in der Listener-Funktion ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}}-Objekt zurück und setzen Sie die entsprechende Eigenschaft:

- Um die Anfrage abzubrechen, fügen Sie eine Eigenschaft `cancel` mit dem Wert `true` hinzu.
- Um die Anfrage umzuleiten, fügen Sie eine Eigenschaft `redirectUrl` mit dem Wert der URL hinzu, zu der Sie umleiten möchten.

Wenn eine Erweiterung eine öffentliche (z. B. HTTPS) URL zu einer [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die manifest.json-Datei der Erweiterung einen [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) Schlüssel enthalten, der die URL für die Erweiterungsseite auflistet.

Wenn mehrere Blocking-Handler eine Anfrage modifizieren, wird nur eine Gruppe von Modifikationen wirksam. Umleitungen und Abbrüche haben die gleiche Priorität. Wenn Sie also eine Anfrage abgebrochen haben, könnte eine andere Anfrage mit der gleichen `requestId` erneut erscheinen, wenn ein anderer Blocking-Handler die Anfrage umgeleitet hat.

Ab Firefox 52 kann der Listener anstelle der Rückgabe von `BlockingResponse` ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben, das mit einer `BlockingResponse` aufgelöst wird. Dies ermöglicht es dem Listener, die Anfrage asynchron zu verarbeiten.

Wenn Sie `"blocking"` verwenden, müssen Sie die [API-Berechtigung "webRequestBlocking"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

## Syntax

```js-nolint
browser.webRequest.onBeforeRequest.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onBeforeRequest.removeListener(listener)
browser.webRequest.onBeforeRequest.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener, filter, extraInfoSpec)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Hören auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Details zur Anfrage. Siehe den Abschnitt [details](#details) für weitere Informationen.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im `extraInfoSpec`-Parameter angegeben ist, sollte der Ereignis-Listener ein `BlockingResponse`-Objekt zurückgeben und entweder seine `cancel`- oder `redirectUrl`-Eigenschaften festlegen. Ab Firefox 52 kann der Listener anstelle der Rückgabe von `BlockingResponse` ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben, das mit einer `BlockingResponse` aufgelöst wird. Dies ermöglicht es dem Listener, die Anfrage asynchron zu verarbeiten.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:
    - `"blocking"`: macht die Anfrage synchron, sodass Sie die Anfrage abbrechen oder umleiten können
    - `"requestBody"`: schließt `requestBody` im `details`-Objekt ein, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab mit einer kontextuellen Identität stammt, die Cookie-Store-ID der kontextuellen Identität. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Wenn die Webseite unter "https\://example.com" z. B. ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder iframe "https\://example.com". Für ein Hauptdokument ist `documentUrl` undefined.
- `frameAncestors`

  - : `array`. Enthält Informationen für jedes Dokument in der Rahmenhierarchie bis zum obersten Dokument. Das erste Element im Array enthält Informationen über das unmittelbare Elternteil des angeforderten Dokuments und das letzte Element enthält Informationen über das oberste Dokument. Wenn der Ladevorgang tatsächlich für das oberste Dokument ist, dann ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist dasselbe wie `details.parentFrameId`.

- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe passiert; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage passiert. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Rahmen-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn "https\://example.com" z. B. einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer dieselbe wie die `documentUrl`. Wenn eine Seite z. B. ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann ist die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geschieht. Sie enthält die folgenden Eigenschaften:

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
      - : `boolean`. Wahr, wenn der Proxy die Domainnamenauflösung basierend auf dem angegebenen Hostnamen durchführt, was bedeutet, dass der Client keinen eigenen DNS-Lookup durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy innerhalb dieses Zeitraums nicht wieder verwendet.

- `requestBody` {{optional_inline}}

  - : `object`. Enthält die HTTP-Anfrage-Body-Daten. Nur bereitgestellt, wenn `extraInfoSpec` `"requestBody"` enthält.

    - `error` {{optional_inline}}
      - : `string`. Dies wird gesetzt, wenn Fehler beim Abrufen der Anfrage-Body-Daten aufgetreten sind.
    - `formData` {{optional_inline}}

      - : `object`. Dieses Objekt ist vorhanden, wenn die Anfragemethode POST ist und der Body eine Sequenz von Schlüssel-Wert-Paaren ist, die in UTF-8 als entweder "multipart/form-data" oder "application/x-www-form-urlencoded" kodiert sind.

        Es ist ein Wörterbuch, in dem jeder Schlüssel die Liste aller Werte für diesen Schlüssel enthält. Zum Beispiel: `{'key': ['value1', 'value2']}`. Wenn die Daten eines anderen Medientyps sind oder wenn sie fehlerhaft sind, ist das Objekt nicht vorhanden.

    - `raw` {{optional_inline}}
      - : `array` von {{WebExtAPIRef('webRequest.UploadData')}}. Wenn die Anfragemethode PUT oder POST ist und der Body nicht bereits in `formData` geparst ist, dann enthält dieses Array die ungeparsten Anfrage-Body-Elemente.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse in Zusammenhang mit derselben Anfrage zu bringen.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab in Zusammenhang steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltfensterhierarchie Drittanbieter sind.
- `timeStamp`
  - : `number`. Der Zeitpunkt, an dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art des Trackings, das mit der Anfrage verbunden ist, wenn die Anfrage von [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `string`. Klassifikationsflaggen für die First-Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflaggen für die Drittanbieter der Anfrage oder ihrer Fensterhierarchie.

    Die Klassifikationsflaggen umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage in Fingerprinting verwickelt ist ("ein Ursprung, der Fingerprinting betreibt").
      - `fingerprinting` zeigt an, dass die Domäne in der Kategorie Fingerprinting und Tracking ist. Beispiele für diesen Typ von Domäne umfassen Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domäne in der Kategorie Fingerprinting, aber nicht in der Tracking-Kategorie ist. Beispiele für diesen Typ von Domäne umfassen Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zu Identifikationszwecken gegen Betrug zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, jedoch für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage in Tracking verwickelt ist. `tracking` ist jede generische Tracking-Anfrage, die Suffixe `ad`, `analytics`, `social` und `content` kennzeichnen den Typ des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage in E-Mail-Tracking verwickelt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flaggen kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flaggen kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flaggen kombiniert.

    Weitere Informationen zu Tracker-Typen finden Sie auf der Website von [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers). Das Suffix `content` kennzeichnet Tracker, die Inhalte nachverfolgen und dienen. Das Blockieren schützt Benutzer, kann jedoch dazu führen, dass Websites nicht richtig funktionieren oder Elemente nicht angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

### DNS-Auflösungs-Reihenfolge bei Verwendung von BlockingResponse

Bezüglich der DNS-Auflösung, wenn BlockingResponse mit OnBeforeRequest verwendet wird: Im HTTP-Kanal tritt onBeforeRequest mit Blocking-Response vor der DNS-Auflösung und auch vor spekulativer Verbindung auf. Für andere Kanäle kann spekulative Verbindung DNS-Anfragen vor onBeforeRequest verursachen. Diese Reihenfolge ist nichts, auf das sich ein Erweiterungsentwickler verlassen sollte, da sie zwischen Browsern und von einer Browserversion zur anderen sowie von einem Anfragekanal zum anderen variieren kann. Weitere Informationen finden Sie in der [BugZilla Problemklärung, die von den Entwicklern von Mozilla zur DNS-Auflösungs-Reihenfolge bereitgestellt wurde](https://bugzil.la/1466099).

## Beispiele

Dieser Code protokolliert die URL für jede angeforderte Ressource, die mit dem [\<all_urls>](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#all_urls) Muster übereinstimmt:

```js
function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

Dieser Code bricht Anfragen für Bilder ab, die an URLs unter "https\://developer.mozilla.org/" gesendet werden (um den Effekt zu sehen, besuchen Sie eine beliebige Seite auf MDN, die Bilder enthält, wie z. B. [webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

```js
// match pattern for the URLs to redirect
let pattern = "https://developer.mozilla.org/*";

// cancel function returns an object
// which contains a property `cancel` set to `true`
function cancel(requestDetails) {
  console.log(`Canceling: ${requestDetails.url}`);
  return { cancel: true };
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  cancel,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Dieser Code ersetzt, durch Umleitung, alle Netzwerk-Anfragen für Bilder, die an URLs unter "https\://developer.mozilla.org/" gesendet werden (um den Effekt zu sehen, besuchen Sie eine beliebige Seite auf MDN, die Bilder enthält, wie z. B. [webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

```js
// match pattern for the URLs to redirect
let pattern = "https://developer.mozilla.org/*";

// redirect function
// returns an object with a property `redirectURL`
// set to the new URL
function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);
  return {
    redirectUrl:
      "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif",
  };
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Dieser Code ist genau wie das vorherige Beispiel, außer dass der Listener die Anfrage asynchron bearbeitet. Es gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das einen Timer setzt und mit der Umleitungs-URL aufgelöst wird, wenn der Timer abläuft:

```js
// match pattern for the URLs to redirect
let pattern = "https://developer.mozilla.org/*";

// URL we will redirect to
let redirectUrl =
  "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif";

// redirect function returns a Promise
// which is resolved with the redirect URL when a timer expires
function redirectAsync(requestDetails) {
  console.log(`Redirecting async: ${requestDetails.url}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ redirectUrl });
    }, 2000);
  });
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  redirectAsync,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Ein weiteres Beispiel, das alle Bilder zu einer Daten-URL umleitet:

```js
let pattern = "https://developer.mozilla.org/*";

let image = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect style="stroke-width: 10; stroke: #666;" width="100%" height="100%" fill="#d4d0c8" />
    <text transform="translate(0, 9)" x="50%" y="50%" width="100%" fill="#666" height="100%" style="text-anchor: middle; font: bold 10pt 'Segoe UI', Arial, Helvetica, Sans-serif;">Blocked</text>
  </svg>
`;

function listener(details) {
  const redirectUrl = `data:image/svg+xml,${encodeURIComponent(image)}`;
  return { redirectUrl };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Hier ist eine weitere Version:

```js
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const pattern = "https://developer.mozilla.org/*";

let image = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="100%" height="100%" fill="${randomColor()}"/>
  </svg>
`;

function listener(details) {
  const redirectUrl = `data:image/svg+xml,${encodeURIComponent(image)}`;
  return { redirectUrl };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeRequest). Diese Dokumentation leitet sich von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code ab.
