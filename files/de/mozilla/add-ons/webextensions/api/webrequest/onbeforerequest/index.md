---
title: webRequest.onBeforeRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Dieses Ereignis wird ausgelöst, wenn eine Anfrage kurz vor dem Senden steht und bevor Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zuzuhören, wenn Sie die Anfrage abbrechen oder umleiten möchten.

Um die Anfrage abzubrechen oder umzuleiten, müssen Sie zuerst `"blocking"` im `extraInfoSpec`-Array-Argument von `addListener()` einschließen. Dann geben Sie in der Listener-Funktion ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}}-Objekt zurück, indem Sie die entsprechende Eigenschaft festlegen:

- Um die Anfrage abzubrechen, fügen Sie eine Eigenschaft `cancel` mit dem Wert `true` hinzu.
- Um die Anfrage umzuleiten, fügen Sie eine Eigenschaft `redirectUrl` mit dem Wert der URL hinzu, zu der Sie umleiten möchten.

Wenn eine Erweiterung eine öffentliche (z.B. HTTPS) URL zu einer [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die manifest.json-Datei der Erweiterung einen [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)-Schlüssel enthalten, der die URL für die Erweiterungsseite auflistet.

Wenn mehrere blockierende Handler eine Anfrage modifizieren, ist nur ein Satz von Modifikationen wirksam. Umleitungen und Abbrüche haben die gleiche Priorität. Wenn Sie eine Anfrage abgebrochen haben, könnten Sie die gleiche Anfrage mit der gleichen `requestId` erneut sehen, wenn ein anderer blockierender Handler die Anfrage umgeleitet hat.

Ab Firefox 52 kann der Listener anstelle eines `BlockingResponse` ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben, das mit einem `BlockingResponse` aufgelöst wird. Dies ermöglicht es dem Listener, die Anfrage asynchron zu verarbeiten.

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
  - : Stoppt das Zuhören auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn zugehört wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Details über die Anfrage. Weitere Informationen finden Sie im Abschnitt [details](#details_2).

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im `extraInfoSpec`-Parameter angegeben ist, sollte der Ereignislistener ein `BlockingResponse`-Objekt zurückgeben und entweder seine `cancel`- oder seine `redirectUrl`-Eigenschaften setzen. Ab Firefox 52 kann der Listener anstelle eines `BlockingResponse` ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben, das mit einem `BlockingResponse` aufgelöst wird. Dies ermöglicht es dem Listener, die Anfrage asynchron zu verarbeiten.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}

  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte übergeben:

    - `"blocking"`: macht die Anfrage synchron, sodass Sie die Anfrage abbrechen oder umleiten können
    - `"requestBody"`: schließt `requestBody` in das `details`-Objekt ein, das an den Listener übergeben wird

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab stammt, der in einer kontextuellen Identität geöffnet ist, die Cookie-Speicher-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Zum Beispiel, wenn die Webseite unter "https://example.com" ein Bild oder ein iframe enthält, dann ist die `documentUrl` für das Bild oder iframe "https://example.com". Für ein Top-Level-Dokument ist `documentUrl` undefiniert.
- `frameAncestors`

  - : `array`. Enthält Informationen für jedes Dokument in der Rahmenhierarchie bis zum Top-Level-Dokument. Das erste Element im Array enthält Informationen über das unmittelbare übergeordnete Dokument des angeforderten Dokuments, und das letzte Element enthält Informationen über das Top-Level-Dokument. Wenn das Laden tatsächlich für das Top-Level-Dokument erfolgt, dann ist dieses Array leer.

    - `url`
      - : `string`. Die URL, von der das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist identisch mit `details.parentFrameId`.

- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Subframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Sub-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind einzigartig innerhalb eines Tabs.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem privaten Browserfenster stammt.
- `method`
  - : `string`. Standard-HTTP-Methode: beispielsweise "GET" oder "POST".
- `originUrl`

  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn "https://example.com" beispielsweise einen Link enthält und der Benutzer auf den Link klickt, dann ist die `originUrl` für die resultierende Anfrage "https://example.com".

    Die `originUrl` ist oft, aber nicht immer, die gleiche wie die `documentUrl`. Wenn eine Seite zum Beispiel ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann wird die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes sein, aber die `originUrl` wird die URL des Dokuments im iframe sein, das den Link enthält.

- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Setzt sich auf -1, wenn kein übergeordneter Frame existiert.
- `proxyInfo`

  - : `object`. Diese Eigenschaft ist nur vorhanden, wenn die Anfrage über einen Proxy geleitet wird. Sie enthält die folgenden Eigenschaften:

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
      - : `boolean`. Wahr, wenn der Proxy die DNS-Auflösung basierend auf dem bereitgestellten Hostnamen durchführt, was bedeutet, dass der Client keinen eigenen DNS-Lookup durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Timeout in Sekunden. Wenn die Proxyverbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht mehr verwendet.

- `requestBody` {{optional_inline}}

  - : `object`. Enthält die HTTP-Anfragekörperdaten. Nur bereitgestellt, wenn `extraInfoSpec` `"requestBody"` enthält.

    - `error` {{optional_inline}}
      - : `string`. Dies wird gesetzt, wenn Fehler beim Abrufen der Anfragekörperdaten aufgetreten sind.
    - `formData` {{optional_inline}}

      - : `object`. Dieses Objekt ist vorhanden, wenn die Anfragemethode POST ist und der Körper eine Folge von Schlüssel-Wert-Paaren ist, die in UTF-8 entweder als "multipart/form-data" oder "application/x-www-form-urlencoded" codiert sind.

        Es ist ein Wörterbuch, in dem jeder Schlüssel die Liste aller Werte für diesen Schlüssel enthält. Zum Beispiel: `{'key': ['value1', 'value2']}`. Wenn die Daten einen anderen Medientyp haben oder fehlerhaft sind, ist das Objekt nicht vorhanden.

    - `raw` {{optional_inline}}
      - : `array` von {{WebExtAPIRef('webRequest.UploadData')}}. Wenn die Anfragemethode PUT oder POST ist und der Körper nicht bereits in `formData` analysiert ist, enthält dieses Array die nicht analysierten Anfragekörper-Elemente.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung einzigartig, sodass Sie sie verwenden können, um verschiedene Ereignisse miteinander zu verknüpfen, die mit derselben Anfrage verbunden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Setzt sich auf -1, wenn die Anfrage nicht mit einem Tab zusammenhängt.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Fensterserie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`

  - : `object`. Der Typ der Verfolgung, die mit der Anfrage verbunden ist, wenn die Anfrage durch [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:

    - `firstParty`
      - : `array` von `strings`. Klassifikationsflaggen für die First Party der Anfrage.
    - `thirdParty`
      - : `array` von `strings`. Klassifikationsflaggen für die Anfrage oder die Drittanbieter ihrer Fensterserie.

    Die Klassifikationsflaggen umfassen:

    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage an Fingerprinting beteiligt ist ("eine Quelle, die Fingerprinting betreibt").
      - `fingerprinting` zeigt an, dass die Domain in der Fingerprinting- und Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil mit dem besuchenden Benutzer verknüpfen möchten.
      - `fingerprinting_content` zeigt an, dass die Domain in der Fingerprinting-Kategorie, aber nicht in der Tracking-Kategorie ist. Beispiele für diese Art von Domain sind Zahlungsanbieter, die Fingerprinting-Techniken zur Identifizierung des besuchenden Benutzers zu Anti-Betrugs-Zwecken verwenden.
    - `cryptomining` und `cryptomining_content`: ähnlich wie die Fingerprinting-Kategorie, jedoch für Kryptowährungs-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist jede generische Tracking-Anfrage, die `ad`, `analytics`, `social` und `content` Suffixe identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage am E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flaggen kombiniert, außer `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flaggen kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flaggen kombiniert.

    Weitere Informationen zu Tracker-Typen finden Sie auf der Webseite [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers). Das `content`-Suffix zeigt Tracker an, die Inhalte verfolgen und bereitstellen. Das Blockieren schützt Benutzer, kann aber dazu führen, dass Websites nicht richtig funktionieren oder Elemente nicht angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

### DNS-Auflösungsreihenfolge, wenn BlockingResponse verwendet wird

Bezüglich der DNS-Auflösung, wenn BlockingResponse mit OnBeforeRequest verwendet wird: Im HTTP-Channel erfolgt onBeforeRequest mit blockierender Antwort vor der DNS-Auflösung und auch vor connect Speculative. Bei anderen Channels kann speculative connect dazu führen, dass DNS-Anfragen vor onBeforeRequest erfolgen. Diese Reihenfolge sollte nicht etwas sein, worauf sich ein Erweiterungsentwickler verlassen sollte, da sie sich zwischen Browsern und von einer Browserversion zur anderen ändern kann, geschweige denn zwischen verschiedenen Anfrage-Channels. Siehe [BugZilla-Ausgabeklarstellung von Mozilla-Entwicklern zur DNS-Auflösungsreihenfolge](https://bugzil.la/1466099).

## Beispiele

Dieser Code protokolliert die URL für jede Ressource, die angefordert wird und dem [\<all_urls>](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#all_urls)-Muster entspricht:

```js
function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

Dieser Code bricht Anfragen für Bilder ab, die an URLs unter "https://developer.mozilla.org/" gesendet werden (um die Auswirkung zu sehen, besuchen Sie eine beliebige Seite auf MDN, die Bilder enthält, wie zum Beispiel [webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

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

Dieser Code ersetzt, durch Umleitung, alle Netzwerk-Anfragen für Bilder, die an URLs unter "https://developer.mozilla.org/" gesendet werden (um die Auswirkung zu sehen, besuchen Sie eine beliebige Seite auf MDN, die Bilder enthält, wie zum Beispiel [webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

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
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeRequest) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Copyright-Vermerk,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// enthalten.
//    * Redistributions in binärer Form müssen den obigen Copyright-Vermerk,
// diese Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der Verteilung
// geliefert werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus dieser Software
// abgeleitet wurden, zu fördern oder zu bewerben, ohne vorherige
// schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND BEITRAGSLEISTERN
// "WIE BESEHEN" UND OHNE JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GARANTIEN BEREITGESTELLT. DIES SCHLIESST DIE IMPLIZIERTE GARANTIE
// DER MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK NICHT
// EIN. UNTER KEINEN UMSTÄNDEN SIND DIE EIGENTÜMER ODER
// BEITRAGSLEISTERN HAFTBAR FÜR JEGLICHEN DIREKTEN, INDIREKTEN,
// ZUFÄLLIGEN, SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHADEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF BESCHAFFUNG VON ERSATZPRODUKTEN ODER
// -DIENSTLEISTUNGEN; VERLUST DER NUTZUNG, DATEN ODER GEWINNE; ODER
// GESCHÄFTSUNTERBRECHUNG), WIE AUCH IMMER VERURSACHT UND UNTER WELCHER
// HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER
// HANDLUNG (EINSCHLIEßLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUCH
// NUR IM ENTFERNTESTEN AUS DER VERWENDUNG DIESER SOFTWARE ENTSTEHEN, AUCH
// WENN DIE MÖGLICHKEIT SOLCHER SCHÄDEN ANGEGEBEN WURDE.
-->
