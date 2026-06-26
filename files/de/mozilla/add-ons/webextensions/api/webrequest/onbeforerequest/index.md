---
title: webRequest.onBeforeRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Dieses Ereignis wird ausgelöst, wenn eine Anfrage gestartet werden soll und bevor die Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zuzuhören, wenn Sie die Anfrage abbrechen oder umleiten möchten.

Um die Anfrage abzubrechen oder umzuleiten, fügen Sie zuerst `"blocking"` in das `extraInfoSpec` Array-Argument von `addListener()` ein. Dann geben Sie in der Listener-Funktion ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} Objekt zurück, wobei die entsprechende Eigenschaft festgelegt wird:

- Um die Anfrage abzubrechen, fügen Sie eine Eigenschaft `cancel` mit dem Wert `true` ein.
- Um die Anfrage umzuleiten, fügen Sie eine Eigenschaft `redirectUrl` mit dem Wert der URL ein, zu der Sie umleiten möchten.

Falls eine Erweiterung eine öffentliche (z.B. HTTPS) URL zu einer [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die manifest.json-Datei der Erweiterung einen [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) Schlüssel enthalten, der die URL für die Erweiterungsseite auflistet.

Wenn mehrere blockierende Handler eine Anfrage modifizieren, wird nur ein Satz von Modifikationen wirksam. Umleitungen und Abbrüche haben dieselbe Priorität. Wenn Sie also eine Anfrage abgebrochen haben, könnten Sie dieselbe Anfrage mit derselben `requestId` erneut sehen, wenn ein anderer blockierender Handler die Anfrage umgeleitet hat.

Ab Firefox 52 kann der Listener anstelle der Rückgabe von `BlockingResponse` ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben, das mit einem `BlockingResponse` aufgelöst wird. Dies ermöglicht es dem Listener, die Anfrage asynchron zu verarbeiten.

Wenn Sie `"blocking"` verwenden, müssen Sie die ["webRequestBlocking" API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

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
  - : Hört auf, diesem Ereignis zuzuhören. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob der `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `details`
      - : `object`. Details zur Anfrage. Siehe den [details](#details)-Abschnitt für weitere Informationen.

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im `extraInfoSpec`-Parameter angegeben ist, sollte der Ereignis-Listener ein `BlockingResponse` Objekt zurückgeben und kann entweder dessen `cancel` oder `redirectUrl` Eigenschaften festlegen. Ab Firefox 52 kann der Listener anstelle des Rückgabe von `BlockingResponse` ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben, das mit einem `BlockingResponse` aufgelöst wird. Dies ermöglicht es dem Listener, die Anfrage asynchron zu verarbeiten.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können jeden der folgenden Werte übergeben:
    - `"blocking"`: macht die Anfrage synchron, damit Sie die Anfrage abbrechen oder umleiten können
    - `"requestBody"`: beinhaltet `requestBody` im `details` Objekt, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `documentId` {{optional_inline}}
  - : `string`. Die UUID des Dokuments, das die Anfrage stellt. Weitere Informationen finden Sie im Artikel [Work with documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.
- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem in einer kontextbezogenen Identität geöffneten Tab stammt, die Cookie-Store-ID der kontextbezogenen Identität. Weitere Informationen finden Sie unter [Work with contextual identities](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. Die URL des Dokuments, in dem die Ressource geladen wird. Wenn zum Beispiel die Webseite unter "https\://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder iframe "https\://example.com". Bei einem Dokument der obersten Ebene ist `documentUrl` undefiniert.
- `frameAncestors`
  - : `array`. Enthält Informationen für jedes Dokument in der Rahmenhierarchie bis zum Dokument der obersten Ebene. Das erste Element im Array enthält Informationen über das unmittelbare Elternteil des angeforderten Dokuments und das letzte Element enthält Informationen über das Dokument der obersten Ebene. Wenn die Ladung tatsächlich für das Dokument der obersten Ebene erfolgt, ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist dieselbe wie `details.parentFrameId`.

- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptfenster erfolgt; ein positiver Wert ist die ID eines Unterfensters, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Rahmen-IDs sind innerhalb eines Tabs eindeutig.
- `frameType`
  - : `string`. Der Typ des Rahmens, in dem die Anfrage erfolgt ist. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"` zurück.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem Fenster im privaten Modus stammt.
- `method`
  - : `string`. Standard HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. Die URL der Ressource, die die Anfrage ausgelöst hat. Wenn zum Beispiel "https\://example.com" einen Link enthält und der Benutzer auf den Link klickt, ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist oft, aber nicht immer, dieselbe wie die `documentUrl`. Wenn eine Seite beispielsweise ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes sein, aber die `originUrl` ist die URL des Dokuments im iframe, das den Link enthielt.

- `parentDocumentId`{{optional_inline}}
  - : `string`. Eine UUID des übergeordneten Dokuments, das den Rahmen besitzt. Wird nicht gesetzt, wenn es kein Elternteil gibt. Weitere Informationen finden Sie im Artikel [Work with documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Wird auf -1 gesetzt, wenn kein übergeordneter Rahmen existiert.
- `proxyInfo`
  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy gesendet wird. Sie enthält die folgenden Eigenschaften:
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
      - : `boolean`. True, wenn der Proxy die Domainnamenauflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Suche durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestBody` {{optional_inline}}
  - : `object`. Enthält die HTTP-Anfragekörperdaten. Wird nur bereitgestellt, wenn `extraInfoSpec` `"requestBody"` enthält.
    - `error` {{optional_inline}}
      - : `string`. Dies wird gesetzt, wenn Fehler beim Abrufen der Anfragendaten aufgetreten sind.
    - `formData` {{optional_inline}}
      - : `object`. Dieses Objekt ist vorhanden, wenn die Anfragemethode POST ist und der Körper aus einer Reihenfolge von Schlüssel-Wert-Paaren besteht, die in UTF-8 entweder als "multipart/form-data" oder "application/x-www-form-urlencoded" kodiert ist.

        Es ist ein Wörterbuch, in dem jeder Schlüssel die Liste aller Werte für diesen Schlüssel enthält. Zum Beispiel: `{'key': ['value1', 'value2']}`. Wenn die Daten einen anderen Medientyp haben oder fehlerhaft sind, ist das Objekt nicht vorhanden.

    - `raw` {{optional_inline}}
      - : `array` von {{WebExtAPIRef('webRequest.UploadData')}}. Wenn die Anfragemethode PUT oder POST ist und der Körper nicht bereits in `formData` analysiert ist, enthält dieses Array die nicht analysierten Anfragekörperelemente.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse, die mit derselben Anfrage verbunden sind, zu verknüpfen.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Wird auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab in Zusammenhang steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Fensterhierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Der mit der Anfrage verbundene Verfolgungstyp, wenn die Anfrage durch [Firefox Tracking Protection](https://support.mozilla.org/de/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifikationsflags für die erste Partei der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflags für die Anfrage oder die Dritteinheit ihrer Fensterhierarchie.

    Die Klassifikationsflags umfassen:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage an Fingerprinting beteiligt ist ("eine Herkunft, die zum Fingerprinting gefunden wurde").
      - `fingerprinting` zeigt an, dass die Domain in der Kategorie Fingerprinting und Tracking ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Kategorie Fingerprinting, aber nicht in der Kategorie Tracking ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken verwenden, um den besuchenden Benutzer zur Betrugsbekämpfung zu identifizieren.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprinting-Kategorie, jedoch für Krypto-Mining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage an der Verfolgung beteiligt ist. `tracking` ist jede generische Tracking-Anfrage, die `ad`, `analytics`, `social` und `content` Suffixe identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage zum E-Mail-Tracking gehört.
    - `any_basic_tracking`: ein Metaflag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Metaflag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Metaflag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu erreichen Typen finden Sie auf der Website von [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers). Das `content` Suffix kennzeichnet Tracker, die Inhalte verfolgen und bereitstellen. Das Blockieren schützt Benutzer, kann jedoch dazu führen, dass Seiten-Fehler auftreten oder Elemente nicht angezeigt werden.

### DNS-Auflösungsreihenfolge, wenn BlockingResponse verwendet wird

In Bezug auf die DNS-Auflösung, wenn BlockingResponse mit OnBeforeRequest verwendet wird: Im HTTP Channel erfolgt onBeforeRequest mit blockierender Antwort vor der DNS-Auflösung und auch vor der spekulativen Verbindung. Für andere Kanäle kann eine spekulative Verbindung dazu führen, dass DNS-Anfragen vor onBeforeRequest erfolgen. Diese Reihenfolge sollte sich ein Erweiterungsentwickler nicht verlassen, da sie von Browser zu Browser und von einer Browserversion zur anderen variieren kann, ganz zu schweigen von einem Anfragenauswahlkanal zum anderen. Lesen Sie [BugZilla Issue Klärung durch Mozilla-Entwickler zur DNS-Auflösungsreihenfolge](https://bugzil.la/1466099)

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

Dieser Code bricht Anfragen für Bilder ab, die zu URLs unter "https\://developer.mozilla.org/" gemacht werden (um die Wirkung zu sehen, besuchen Sie eine beliebige Seite auf MDN, die Bilder enthält, z.B. [webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

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

Dieser Code ersetzt durch Umleitung alle Netzwerk-Anfragen für Bilder, die zu URLs unter "https\://developer.mozilla.org/" gemacht werden (um den Effekt zu sehen, besuchen Sie eine beliebige Seite auf MDN, die Bilder enthält, z.B. [webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

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

Dieser Code ist genau wie das vorherige Beispiel, außer dass der Listener die Anfrage asynchron behandelt. Er gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das einen Timer setzt und mit der Umleitungs-URL aufgelöst wird, wenn der Timer abläuft:

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
    <rect style="stroke-width: 10; stroke: #666666;" width="100%" height="100%" fill="#d4d0c8" />
    <text transform="translate(0, 9)" x="50%" y="50%" width="100%" fill="#666666" height="100%" style="text-anchor: middle; font: bold 10pt 'Segoe UI', Arial, Helvetica, Sans-serif;">Blocked</text>
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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeRequest) API. Diese Dokumentation stammt von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium Code.

<!--
// Urheberrecht 2015 Die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Eine Weiterverteilung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den nachfolgenden Bedingungen gestattet:
//
//    * Eine Weiterverbreitung von Quellcode muss den obigen Urheberrechtshinweis,
// dieser Liste der Bedingungen und den nachfolgenden Haftungsausschluss enthalten.
//    * Eine Weiterverbreitung in binary form muss den obigen
// Urheberrechtshinweis, dieser Liste der Bedingungen und den nachfolgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien enthalten, die mit der
// Verbreitung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die sich aus
// dieser Software ableiten, zu unterstützen oder zu bewerben, ohne vorherige
// spezifische schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITARBEITERN
// "WIE BESEHEN" BEREITGESTELLT. ES WIRD KEINERLEI AUSDRÜCKLICHE ODER
// STILLSCHWEIGENDE GARANTIE ÜBERNOMMEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF
// DIE STILLSCHWEIGENDEN GARANTIEN DER MARKTFÄHIGKEIT UND DER EIGNUNG
// FÜR EINEN BESTIMMTEN ZWECK. IN KEINEM FALL HAFTEN DIE EIGENTÜMER
// ODER MITSTREITER FÜR IRGENDWELCHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF, DEN ERWERB VON WAREN ODER DIENSTLEISTUNGEN;
// VERLUST VON NUTZUNGSDATEN ODER GEWINNEN ODER GESCHÄFTSUNTERBRECHUNG) JEDOCH
// ERWACHSEN SIE AUS, WIE AUCH IMMER BEREITGESTELLT WURDEN,DIESES SOFTWARE-ZU VERANSCHAULICHEN
// WEG SOLLTEN UNTER KEINER UMSTÄNDEN VERWENDET WERDEN.
-->
