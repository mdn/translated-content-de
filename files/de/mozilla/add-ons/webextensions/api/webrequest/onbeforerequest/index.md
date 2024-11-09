---
title: webRequest.onBeforeRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
l10n:
  sourceCommit: 33a5708cc125bcaa4ebe74b46bb6fe1820616ff0
---

{{AddonSidebar}}

Dieses Ereignis wird ausgelöst, wenn eine Anfrage gesendet werden soll, und bevor Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zuzuhören, wenn Sie die Anfrage abbrechen oder umleiten möchten.

Um die Anfrage abzubrechen oder umzuleiten, fügen Sie zuerst `"blocking"` in das `extraInfoSpec` Array-Argument von `addListener()` ein. Geben Sie dann in der Listener-Funktion ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} Objekt zurück, indem Sie die entsprechende Eigenschaft festlegen:

- Um die Anfrage abzubrechen, fügen Sie eine Eigenschaft `cancel` mit dem Wert `true` hinzu.
- Um die Anfrage umzuleiten, fügen Sie eine Eigenschaft `redirectUrl` mit dem auf die Umleitungs-URL gesetzten Wert hinzu.

Wenn eine Erweiterung eine öffentliche (z.B. HTTPS) URL auf eine [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die manifest.json Datei der Erweiterung einen Schlüssel [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) enthalten, der die URL für die Erweiterungsseite auflistet.

Wenn mehrere blockierende Handler eine Anfrage modifizieren, wird nur ein Satz von Modifikationen wirksam. Umleitungen und Abbrüche haben dieselbe Priorität. Wenn Sie eine Anfrage abgebrochen haben, könnten Sie die gleiche Anfrage mit der gleichen `requestId` erneut sehen, wenn ein anderer blockierender Handler die Anfrage umgeleitet hat.

Ab Firefox 52 kann der Listener anstelle der Rückgabe von `BlockingResponse` ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben, das mit einem `BlockingResponse` aufgelöst wird. Dies ermöglicht es dem Listener, die Anfrage asynchron zu verarbeiten.

Wenn Sie `"blocking"` verwenden, müssen Sie die ["webRequestBlocking" API-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json Datei haben.

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
  - : Stoppt das Zuhören auf dieses Ereignis. Das `listener` Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Details über die Anfrage. Weitere Informationen finden Sie im [Details](#details_2) Abschnitt.

    Gibt zurück: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im Parameter `extraInfoSpec` angegeben ist, sollte der Ereignis-Listener ein `BlockingResponse` Objekt zurückgeben und entweder seine `cancel` oder `redirectUrl` Eigenschaften setzen. Ab Firefox 52 kann der Listener anstelle der Rückgabe von `BlockingResponse` ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben, das mit einem `BlockingResponse` aufgelöst wird. Dies ermöglicht es dem Listener, die Anfrage asynchron zu verarbeiten.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:

    - `"blocking"`: macht die Anfrage synchron, damit Sie die Anfrage abbrechen oder umleiten können
    - `"requestBody"`: fügt `requestBody` zum `details` Objekt hinzu, das an den Listener übergeben wird

## Zusätzliche Objekte

### Details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem in einer kontextuellen Identität geöffneten Tab stammt, die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Zum Beispiel, wenn die Webseite unter "https://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder iframe "https://example.com". Für ein oberstes Dokument ist `documentUrl` undefiniert.
- `frameAncestors`

  - : `array`. Enthält Informationen für jedes Dokument in der Frame-Hierarchie bis hin zum höchsten Dokument. Das erste Element im Array enthält Informationen über das unmittelbare Eltern-Dokument des angeforderten Dokuments, und das letzte Element enthält Informationen über das höchste Dokument. Wenn der Ladevorgang tatsächlich für das oberste Dokument erfolgt, ist dieses Array leer.

    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist dasselbe wie `details.parentFrameId`.

- `frameId`
  - : `integer`. Null, wenn die Anfrage im Haupt-Frame erfolgt; ein positiver Wert ist die ID eines Subframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Sub-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Zum Beispiel, wenn "https://example.com" einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage "https://example.com".

    Die `originUrl` ist oft, aber nicht immer, dieselbe wie die `documentUrl`. Zum Beispiel, wenn eine Seite ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument im iframe lädt, dann wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes sein, aber die `originUrl` wird die URL des Dokuments im iframe sein, das den Link enthielt.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Wird auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy erfolgt. Es enthält die folgenden Eigenschaften:

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
      - : `string`. Benutzername für den Proxy-Dienst.
    - `proxyDNS`
      - : `boolean`. Wahr, wenn der Proxy die Namensauflösung des Domänennamens basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Zeitüberschreitung in Sekunden. Wenn die Proxyverbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestBody` {{optional_inline}}

  - : `object`. Enthält die HTTP-Anfrage-Body-Daten. Nur bereitgestellt, wenn `extraInfoSpec` `"requestBody"` enthält.

    - `error` {{optional_inline}}
      - : `string`. Dies wird gesetzt, wenn beim Abrufen der Anfrage-Body-Daten Fehler aufgetreten sind.
    - `formData` {{optional_inline}}

      - : `object`. Dieses Objekt ist vorhanden, wenn die Anfragemethode POST ist und der Body als Folge von Schlüssel-Wert-Paaren in UTF-8 entweder als "multipart/form-data" oder "application/x-www-form-urlencoded" codiert ist.

        Es ist ein Wörterbuch, in dem jeder Schlüssel die Liste aller Werte für diesen Schlüssel enthält. Zum Beispiel: `{'key': ['value1', 'value2']}`. Wenn die Daten einen anderen Medientyp haben oder fehlerhaft sind, ist das Objekt nicht vorhanden.

    - `raw` {{optional_inline}}
      - : `array` von `{{WebExtAPIRef('webRequest.UploadData')}}`. Wenn die Anfragemethode PUT oder POST ist und der Body nicht bereits in `formData` geparst ist, dann enthält dieses Array die ungeparsten Anfrage-Body-Elemente.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zu identifizieren, die mit derselben Anfrage verbunden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Wird auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhalte Fensterhierarchie Drittanbieter sind.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel, "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Die Art der Verfolgung, die mit der Anfrage verbunden ist, falls die Anfrage durch den [Firefox Schutz vor Verfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifikations-Flaggen für die erste Partei der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifikations-Flaggen für Dritte der Anfrage oder deren Fensterhierarchie.

    Die Klassifikations-Flaggen umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage am Fingerprinting ("eine ursprüngliche Quelle, die Fingerprinting betreibt") beteiligt ist.
      - `fingerprinting` zeigt an, dass die Domäne in der Fingerprinting- und Tracking-Kategorie ist. Beispiele für diese Art von Domäne sind Werbetreibende, die ein Profil mit dem Besuch benutzer zuordnen möchten.
      - `fingerprinting_content` zeigt an, dass die Domäne in der Fingerprinting-Kategorie ist, aber nicht in der Tracking-Kategorie. Beispiele für diese Art von Domäne sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den Benutzer für Anti-Betrugs-Zwecke zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, jedoch für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social`, und `tracking_content`: zeigt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede generische Tracking-Anfrage, die `ad`, `analytics`, `social`, und `content` Suffixe identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage an der Nachverfolgung von E-Mails beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flaggen kombiniert, `tracking_content` und `fingerprinting_content` ausgenommen.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flaggen kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle Social-Tracking-Flaggen kombiniert.

    Weitere Informationen zu Trackertypen finden Sie auf der [Website von disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers). Das `content` Suffix deutet Tracker an, die Inhalte verfolgen und bereitstellen. Das Blockieren von ihnen schützt Benutzer, kann jedoch dazu führen, dass Sites nicht korrekt funktionieren oder Elemente nicht angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

### DNS-Auflösungsreihenfolge, wenn BlockingResponse verwendet wird

Bezüglich der DNS-Auflösung, wenn BlockingResponse mit OnBeforeRequest verwendet wird: Im HTTP-Kanal tritt onBeforeRequest mit blocking response vor der DNS-Auflösung und auch vor dem spekulativen Verbindungsaufbau auf. Für andere Kanäle kann spekulativer Verbindungsaufbau dazu führen, dass DNS-Anfragen vor onBeforeRequest auftreten. Auf diese Reihenfolge sollte sich ein Erweiterungsentwickler nicht verlassen, da sie je nach Browser und von einer Browserversion zur anderen variieren kann, ganz zu schweigen von einem Anforderungskanal zum anderen. Siehe [BugZilla-Klärung zur DNS-Auflösungsreihenfolge durch Mozilla-Entwickler](https://bugzil.la/1466099)

## Beispiele

Dieser Code protokolliert die URL für jede angeforderte Ressource, die dem [\<all_urls>](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#all_urls) Muster entspricht:

```js
function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

Dieser Code storniert Anfragen für Bilder, die an URLs unter "https://developer.mozilla.org/" gesendet werden (um den Effekt zu sehen, besuchen Sie eine beliebige Seite auf MDN, die Bilder enthält, wie [webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

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

Dieser Code ersetzt alle Netzwerkanfragen für Bilder, die an URLs unter "https://developer.mozilla.org/" gesendet werden, durch eine Umleitung (um den Effekt zu sehen, besuchen Sie eine beliebige Seite auf MDN, die Bilder enthält, wie [webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

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

Dieser Code ist genau wie das vorherige Beispiel, außer dass der Listener die Anfrage asynchron behandelt. Es gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das einen Timer setzt und mit der Umleitungs-URL auflöst, wenn der Timer abläuft:

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

Hier ist eine andere Version:

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
> Diese API basiert auf der Chromium [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeRequest) API. Diese Dokumentation stammt von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
