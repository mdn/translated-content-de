---
title: webRequest.onBeforeRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Dieses Ereignis wird ausgelöst, wenn eine Anfrage gestellt werden soll und bevor Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zu überwachen, wenn Sie die Anfrage abbrechen oder umleiten möchten.

Um die Anfrage abzubrechen oder umzuleiten, fügen Sie zunächst `"blocking"` in das `extraInfoSpec`-Array-Argument von `addListener()` ein. Dann geben Sie in der Listener-Funktion ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}}-Objekt zurück und setzen die entsprechende Eigenschaft:

- Um die Anfrage abzubrechen, fügen Sie eine Eigenschaft `cancel` mit dem Wert `true` ein.
- Um die Anfrage umzuleiten, fügen Sie eine Eigenschaft `redirectUrl` mit dem Ziel-URL-Wert ein, zu dem Sie umleiten möchten.

Wenn eine Erweiterung eine öffentliche (z. B. HTTPS) URL auf eine [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die manifest.json-Datei der Erweiterung einen [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)-Schlüssel enthalten, der die URL für die Erweiterungsseite auflistet.

Wenn mehrere blockierende Handler eine Anfrage modifizieren, wird nur eine Modifikationsreihe wirksam. Umleitungen und Abbrüche haben die gleiche Priorität. Wenn Sie eine Anfrage abgebrochen haben, könnten Sie dieselbe Anfrage nochmals mit derselben `requestId` sehen, wenn ein anderer blockierender Handler die Anfrage umgeleitet hat.

Ab Firefox 52 kann der Listener anstelle der Rückgabe von `BlockingResponse` ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben, das mit einem `BlockingResponse` aufgelöst wird. Dies ermöglicht es dem Listener, die Anfrage asynchron zu verarbeiten.

Wenn Sie `"blocking"` verwenden, müssen Sie die ["webRequestBlocking"-API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer manifest.json haben.

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
  - : Beendet die Überwachung dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es überwacht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält dieses Argument:
    - `details`
      - : `object`. Details zur Anfrage. Weitere Informationen finden Sie im Abschnitt [details](#details).

    Rückgabe: {{WebExtAPIRef('webRequest.BlockingResponse')}}. Wenn `"blocking"` im `extraInfoSpec`-Parameter angegeben ist, sollte der Ereignis-Listener ein `BlockingResponse`-Objekt zurückgeben und entweder seine `cancel`- oder `redirectUrl`-Eigenschaften setzen. Ab Firefox 52 kann der Listener anstelle der Rückgabe von `BlockingResponse` ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgeben, das mit einem `BlockingResponse` aufgelöst wird. Dies ermöglicht es dem Listener, die Anfrage asynchron zu verarbeiten.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Ein Filter, der die Ereignisse einschränkt, die an diesen Listener gesendet werden.
- `extraInfoSpec` {{optional_inline}}
  - : `array` von `string`. Zusätzliche Optionen für das Ereignis. Sie können einen der folgenden Werte angeben:
    - `"blocking"`: macht die Anfrage synchron, sodass Sie die Anfrage abbrechen oder umleiten können
    - `"requestBody"`: enthält `requestBody` im an den Listener übergebenen `details`-Objekt

## Zusätzliche Objekte

### details

- `cookieStoreId`
  - : `string`. Wenn die Anfrage von einem Tab in einer kontextuellen Identität stammt, die Cookie-Store-ID der kontextuellen Identität. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL des Dokuments, in dem die Ressource geladen wird. Beispielsweise wird bei einer Webseite unter "https\://example.com", die ein Bild oder ein iframe enthält, die `documentUrl` für das Bild oder das iframe "https\://example.com" sein. Für ein Top-Level-Dokument ist `documentUrl` undefiniert.
- `frameAncestors`
  - : `array`. Enthält Informationen für jedes Dokument in der Frame-Hierarchie bis zum Top-Level-Dokument. Das erste Element im Array enthält Informationen über das unmittelbare Elterndokument der angeforderten Ressource, und das letzte Element enthält Informationen über das Top-Level-Dokument. Wenn der Ladevorgang tatsächlich für das Top-Level-Dokument erfolgt, ist dieses Array leer.
    - `url`
      - : `string`. Die URL, von der aus das Dokument geladen wurde.
    - `frameId`
      - : `integer`. Die `frameId` des Dokuments. `details.frameAncestors[0].frameId` ist dasselbe wie `details.parentFrameId`.

- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptrahmen erfolgt; ein positiver Wert ist die ID eines Unterrahmens, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (`type` ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die des äußeren Rahmens. Rahmen-IDs sind innerhalb eines Tabs eindeutig.
- `incognito`
  - : `boolean`. Ob die Anfrage aus einem Fenster im privaten Modus stammt.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Wenn beispielsweise "https\://example.com" einen Link enthält und der Benutzer darauf klickt, ist die `originUrl` für die resultierende Anfrage "https\://example.com".

    Die `originUrl` ist häufig, aber nicht immer dieselbe wie die `documentUrl`. Wenn eine Seite beispielsweise ein iframe enthält und das iframe einen Link enthält, der ein neues Dokument in das iframe lädt, dann ist die `documentUrl` für die resultierende Anfrage das übergeordnete Dokument des iframes, aber die `originUrl` wird die URL des Dokuments im iframe sein, das den Link enthalten hat.

- `parentFrameId`
  - : `integer`. ID des Rahmens, der den Rahmen enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Rahmen vorhanden ist.
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
      - : `boolean`. True, wenn der Proxy die Namensauflösung für den angegebenen Hostnamen durchführt, was bedeutet, dass der Client keine eigene DNS-Abfrage durchführen sollte.
    - `failoverTimeout`
      - : `integer`. Failover-Zeitüberschreitung in Sekunden. Wenn die Proxy-Verbindung fehlschlägt, wird der Proxy für diesen Zeitraum nicht erneut verwendet.

- `requestBody` {{optional_inline}}
  - : `object`. Enthält die Daten des HTTP-Anfragekörpers. Nur bereitgestellt, wenn `extraInfoSpec` `"requestBody"` enthält.
    - `error` {{optional_inline}}
      - : `string`. Dies ist gesetzt, wenn beim Abrufen der Anfragedaten Fehler aufgetreten sind.
    - `formData` {{optional_inline}}
      - : `object`. Dieses Objekt ist vorhanden, wenn die Anfragemethode POST ist und der Körper eine Abfolge von Schlüssel-Wert-Paaren ist, die UTF-8-kodiert als entweder "multipart/form-data" oder "application/x-www-form-urlencoded" sind.

        Es handelt sich um ein Wörterbuch, in dem jeder Schlüssel die Liste aller Werte für diesen Schlüssel enthält. Zum Beispiel: `{'key': ['value1', 'value2']}`. Wenn die Daten einen anderen Medientyp haben oder wenn sie fehlerhaft sind, ist das Objekt nicht vorhanden.

    - `raw` {{optional_inline}}
      - : `array` von {{WebExtAPIRef('webRequest.UploadData')}}. Wenn die Anfragemethode PUT oder POST ist und der Körper nicht bereits in `formData` analysiert ist, enthält dieses Array die nicht analysierten Anforderungskörperelemente.

- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie sie verwenden können, um verschiedene Ereignisse zu verknüpfen, die mit derselben Anfrage verbunden sind.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verknüpft ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltshierarchie von Dritten stammen.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script", "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.
- `urlClassification`
  - : `object`. Die Art der Verfolgung, die mit der Anfrage verbunden ist, wenn die Anfrage durch [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) klassifiziert wird. Dies ist ein Objekt mit diesen Eigenschaften:
    - `firstParty`
      - : `array` von `string`. Klassifikationsflags für die First-Party der Anfrage.
    - `thirdParty`
      - : `array` von `string`. Klassifikationsflags für die Anfrage oder die Dritten ihrer Fensterhierarchie.

    Die Klassifikationsflags umfassen:
    - `fingerprinting` und `fingerprinting_content`: zeigt an, dass die Anfrage am Fingerprinting beteiligt ist ("eine Herkunft, die Fingerprinting betreibt").
      - `fingerprinting` gibt an, dass die Domain zur Kategorie Fingerprinting und Nachverfolgung gehört. Beispiele für diese Art von Domain sind Werbetreibende, die ein Profil dem besuchenden Benutzer zuordnen möchten.
      - `fingerprinting_content` gibt an, dass die Domain zur Kategorie Fingerprinting, aber nicht zur Nachverfolgung gehört. Beispiele sind Zahlungsanbieter, die Fingerprinting-Techniken zur Identifizierung des besuchenden Benutzers zu Betrugspräventionszwecken nutzen.
    - `cryptomining` und `cryptomining_content`: ähnlich der Fingerprint-Kategorie, aber für Cryptomining-Ressourcen.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social` und `tracking_content`: zeigt an, dass die Anfrage am Tracking beteiligt ist. `tracking` ist eine generische Tracking-Anfrage, die `ad`, `analytics`, `social` und `content` Suffixe identifizieren die Art des Trackers.
    - `emailtracking` und `emailtracking_content`: zeigt an, dass die Anfrage an E-Mail-Tracking beteiligt ist.
    - `any_basic_tracking`: ein Meta-Flag, das Tracking- und Fingerprinting-Flags kombiniert, mit Ausnahme von `tracking_content` und `fingerprinting_content`.
    - `any_strict_tracking`: ein Meta-Flag, das alle Tracking- und Fingerprinting-Flags kombiniert.
    - `any_social_tracking`: ein Meta-Flag, das alle sozialen Tracking-Flags kombiniert.

    Weitere Informationen zu Tracker-Typen finden Sie auf der [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers)-Website. Das `content`-Suffix zeigt Tracker an, die Inhalte verfolgen und bedienen. Das Blockieren dieser Tracker schützt Benutzer, kann aber dazu führen, dass Websites nicht mehr funktionieren oder Elemente nicht angezeigt werden.

### DNS-Auflösungsreihenfolge, wenn BlockingResponse verwendet wird

Bezüglich der DNS-Auflösung bei Verwendung von BlockingResponse mit OnBeforeRequest: Im HTTP-Channel passiert onBeforeRequest mit einer blockierenden Antwort vor der DNS-Auflösung und auch vor der spekulativen Verbindung. Bei anderen Channels kann es sein, dass spekulative Verbindungen DNS-Anfragen vor onBeforeRequest verursachen. Diese Reihenfolge sollte von einem Erweiterungsentwickler nicht als gegeben angenommen werden, da sie je nach Browser, und von einer Browserversion zur nächsten, geschweige denn von einem Anforderungskanal zum anderen, variieren kann. Siehe [BugZilla Issue-Klärung von Mozilla-Entwicklern zur DNS-Auflösungsreihenfolge](https://bugzil.la/1466099).

## Beispiele

Dieser Code protokolliert die URL für jede Ressource, die angefordert wird und die dem [\<all_urls>](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#all_urls)-Muster entspricht:

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

Dieser Code ersetzt durch Weiterleitung alle Netzwerk-Anfragen für Bilder, die an URLs unter "https\://developer.mozilla.org/" gesendet werden (um den Effekt zu sehen, besuchen Sie eine beliebige Seite auf MDN, die Bilder enthält, wie z. B. [webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

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

Dieser Code ist genau wie das vorherige Beispiel, außer dass der Listener die Anfrage asynchron verarbeitet. Es gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das einen Timer setzt und mit der Redirect-URL aufgelöst wird, wenn der Timer abläuft:

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

Ein weiteres Beispiel, das alle Bilder auf eine Daten-URL umleitet:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onBeforeRequest) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Urheberrechtshinweis,
//      diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Bei der Verteilung in binärer Form muss der obige Urheberrechtshinweis,
//      diese Liste von Bedingungen und der folgende Haftungsausschluss in der
//      Dokumentation und/oder anderen Materialien, die mit der Verteilung
//      bereitgestellt werden, enthalten sein.
//    * Weder der Name Google Inc. noch die Namen seiner
//      Mitwirkenden dürfen verwendet werden, um Produkte, die aus dieser
//      Software abgeleitet sind, zu unterstützen oder zu bewerben, ohne vorherige
//      schriftliche Genehmigung.
//
// Diese Software wird von den Urheberrechtsinhabern und Mitwirkenden
// "wie besehen" und ohne jegliche ausdrückliche oder stillschweigende Garantien,
// einschließlich, aber nicht beschränkt auf die implizierten Garantien der
// Marktgängigkeit und Eignung für einen bestimmten Zweck, zur Verfügung gestellt.
// In keinem Fall haftet der Urheberrechtseigentümer oder die Mitwirkenden für
// direkte, indirekte, zufällige, spezielle, exemplarische oder Folgeschäden
// (einschließlich, aber nicht beschränkt auf, die Beschaffung von Ersatzwaren
// oder -Dienstleistungen, die unbenutzbare Nutzung, Daten- oder Gewinnverluste,
// oder Geschäftsunterbrechungen), die in irgendeiner Weise aus der Nutzung dieser
// Software entstehen, sei es auf Grundlage einer vertraglichen Haftung, einer
// strikten Haftung oder einer unerlaubten Handlung (einschließlich Fahrlässigkeit
// oder anderweitig), selbst wenn auf die Möglichkeit solcher Schäden hingewiesen
// wurde.
-->
